#!/usr/bin/env bash
# Run on the VPS as root after accidental `next dev` or TLS downgrades.
set -euo pipefail

echo "[1/2] Stop stray Baota/www \"next dev\" on docroot (usually binds :3000)..."
pkill -u www -f '/www/wwwroot/sungene.net/node_modules/.bin/next dev' 2>/dev/null || true
sleep 1
if ss -tlnp | grep -q ':3000'; then
  echo "WARN: something still listens on :3000 — inspect: ss -tlnp | grep 3000"
else
  echo "OK: nothing listening on :3000"
fi

echo "[2/2] TLS: disable TLS 1.1 on sungene Nginx vhost (idempotent)..."
NGX=/www/server/panel/vhost/nginx/node_sungene_net.conf
if grep -q 'ssl_protocols TLSv1.1' "$NGX" 2>/dev/null; then
  cp -a "$NGX" "${NGX}.bak-tls-$(date +%Y%m%d%H%M)"
  sed -i 's/ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;/ssl_protocols TLSv1.2 TLSv1.3;/' "$NGX"
  nginx -t && nginx -s reload
  echo "OK: nginx reloaded with TLSv1.2+ only"
else
  echo "OK: TLS vhost already hardened or pattern changed — check $NGX manually"
fi
