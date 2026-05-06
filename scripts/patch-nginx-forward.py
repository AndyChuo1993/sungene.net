#!/usr/bin/env python3
"""Add X-Forwarded-Host / X-Forwarded-Proto to Next.js location block (run on VPS)."""
from pathlib import Path
import shutil

p = Path("/www/server/panel/vhost/nginx/node_sungene_net.conf")
text = p.read_text(encoding="utf-8")
if "X-Forwarded-Proto" in text:
    print("already patched")
    raise SystemExit(0)

needle = (
    "    location / {\n"
    "        proxy_pass http://127.0.0.1:3002;\n"
    "        proxy_set_header Host $host;\n"
)
if needle not in text:
    print("needle not found; abort")
    raise SystemExit(1)

replacement = needle + (
    "        proxy_set_header X-Forwarded-Host $host;\n"
    "        proxy_set_header X-Forwarded-Proto $scheme;\n"
)
shutil.copy(p, p.with_suffix(p.suffix + ".bak-fwd"))
p.write_text(text.replace(needle, replacement, 1), encoding="utf-8")
print("ok")
