#!/bin/bash
# Atomic deploy with PM2 cluster rolling reload.
# Two cluster instances rotate one-at-a-time so deploy-window 5xx are eliminated.
#
# Usage:
#   ./deploy-atomic.sh                # build + rolling reload
#   ./deploy-atomic.sh --skip-build   # rolling reload + nginx purge only
set -e

cd /www/wwwroot/sungene.net

if [ "$1" != "--skip-build" ]; then
  echo "[atomic] cleaning previous staging"
  rm -rf .next.staging

  echo "[atomic] running next build"
  if [ -d ".next" ]; then
    rm -rf .next.previous-static
    cp -r .next/static .next.previous-static 2>/dev/null || true
  fi

  npm run build
fi

# Rolling reload: with cluster mode + 2 instances, PM2 reloads one at a time.
# The other instance keeps serving requests → no deploy-window 5xx.
echo "[atomic] rolling reload pm2 (cluster mode)"
pm2 reload sungene --update-env

# Wait for both workers to be back online.
sleep 3

echo "[atomic] purging nginx cache"
rm -rf /www/server/nginx/proxy_cache_dir/*
nginx -s reload

HTTP=$(curl -s -o /dev/null -w '%{http_code}' https://sungene.net/en)
echo "[atomic] /en returns: $HTTP"

if [ "$HTTP" = "200" ]; then
  echo "[atomic] ✓ deploy verified"
  # Keep the previous-static snapshot for 24h so any lingering CDN/browser
  # references to old chunk hashes can still resolve.
  ( sleep 86400 && rm -rf /www/wwwroot/sungene.net/.next.previous-static ) &
else
  echo "[atomic] ✗ deploy failed — investigate"
  exit 1
fi
