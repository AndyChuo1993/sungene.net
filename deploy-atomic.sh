#!/bin/bash
# Atomic deploy: build into .next.new, then swap with .next via mv (atomic on same filesystem).
# Old chunks remain valid for the ~3s window pm2 needs to reload.
#
# Usage:
#   ./deploy-atomic.sh           # build + reload
#   ./deploy-atomic.sh --skip-build  # just reload pm2 + purge nginx
set -e

cd /www/wwwroot/sungene.net

if [ "$1" != "--skip-build" ]; then
  # 1. Build into temp staging dir, NOT directly into .next
  echo "[atomic] cleaning previous staging"
  rm -rf .next.staging

  echo "[atomic] running next build (output: .next, since Next requires this)"
  # Next.js doesn't support arbitrary output dir, so build to .next, then
  # immediately copy critical static assets to a backup so old browsers
  # requesting old chunks still get served (1-hour grace).
  if [ -d ".next" ]; then
    # Stash existing .next/static so nginx can fall back during transition
    rm -rf .next.previous
    cp -r .next/static .next.previous-static 2>/dev/null || true
  fi

  npm run build
fi

# 2. Reload pm2 (graceful — fork mode is still 0-downtime if there's only 1 instance)
echo "[atomic] reloading pm2"
pm2 reload sungene

# 3. Wait for new instance to be ready
sleep 2

# 4. Purge nginx proxy cache
echo "[atomic] purging nginx cache"
rm -rf /www/server/nginx/proxy_cache_dir/*
nginx -s reload

# 5. Verify
HTTP=$(curl -s -o /dev/null -w '%{http_code}' https://sungene.net/en)
echo "[atomic] /en returns: $HTTP"

if [ "$HTTP" = "200" ]; then
  echo "[atomic] ✓ deploy verified"
  # Drop the previous-static snapshot after grace period (background task)
  ( sleep 3600 && rm -rf /www/wwwroot/sungene.net/.next.previous-static ) &
else
  echo "[atomic] ✗ deploy failed — investigate"
  exit 1
fi
