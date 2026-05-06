#!/usr/bin/env bash
# Baota / VPS one-shot deploy for sungene.net (paths match production layout).
set -euo pipefail
LOG="${SUNGENE_DEPLOY_LOG:-/www/wwwlogs/sungene-deploy.log}"
PROJECT="${SUNGENE_PROJECT_ROOT:-/www/wwwroot/sungene.net}"

{
  echo "========================================"
  echo "[$(date -Is)] Deploy started"
  cd "$PROJECT"

  echo "[$(date -Is)] Fetch origin..."
  git fetch origin

  LOCAL=$(git rev-parse HEAD)
  REMOTE=$(git rev-parse origin/main)

  if [[ "$LOCAL" == "$REMOTE" ]]; then
    echo "[$(date -Is)] Already up to date ($LOCAL). Exit."
    echo "========================================"
    exit 0
  fi

  echo "[$(date -Is)] Reset $LOCAL -> $REMOTE"
  git reset --hard origin/main

  echo "[$(date -Is)] npm ci"
  npm ci

  echo "[$(date -Is)] npm run build"
  npm run build

  echo "[$(date -Is)] prepare standalone"
  node scripts/prepare-standalone.mjs

  echo "[$(date -Is)] pm2 restart sungene"
  pm2 restart sungene --update-env

  echo "[$(date -Is)] Deploy complete at $(git rev-parse --short HEAD)"
  echo "========================================"
} >>"$LOG" 2>&1
