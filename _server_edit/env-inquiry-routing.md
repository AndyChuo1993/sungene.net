# .env inquiry routing fix (2026-06-04, Wave 14j-16)

## Why this exists
.env had been carrying over the legacy SunGene Elite product config:
  INQUIRY_TO=contact@sungenelite.com
  INQUIRY_REPLY_TO=contact@sungenelite.com

sungenelite.com resolves to Google Domains parking (216.239.32.21 etc.).
Combined with Supabase NXDOMAIN (since ~5/24) and Bug #1+#2 in route.ts
(silent insert failures + cwd-relative ndjson path wiped on every build),
inquiries had no reliable persistence and no reliable notification path.

## Current state (after Wave 14j-15 code fix + 14j-16 env fix)
.env:
  INQUIRY_TO=andy@sungene.net,contact@sungene.net   (CSV, nodemailer accepts)
  INQUIRY_REPLY_TO=contact@sungene.net               (customer-facing reply)
  MAIL_FROM=china@sungene.net                        (unchanged)
  ADMIN_EMAIL=andy@sungene.net                       (unchanged, separate var)

Backup: .env.bak-14j16-<epoch> in project root.

PM2 picked up via `pm2 reload sungene --update-env` (both instances 6 + 7).
Verified POST /api/inquiries returns 200 + Gmail accepts message-id.

## Owner action still required
Confirm at least one of {andy@sungene.net, contact@sungene.net} actually
receives inquiry emails by checking inbox + spam for subject containing
"Routing fix verify" / "REQ-mpzg9r88-omu6" (the verification test above).

If neither receives → routing still broken; investigate sungene.net MX
records (likely DNS issue on the main domain, not just sungenelite).

## How to roll back
cp .env.bak-14j16-<epoch> .env
pm2 reload sungene --update-env
