#!/usr/bin/env bash
# Entrypoint expected by Baota / VPS hooks in /www/wwwroot/sungene.net
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec bash "$ROOT/scripts/vps-deploy.sh"
