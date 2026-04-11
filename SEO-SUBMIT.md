Search Engine Submission Runbook
================================

Everything you need to go from "zero indexed pages" → "indexed in Google, Bing,
Yandex, Naver, Seznam, Yep" in a single session.

Status snapshot (2026-04-11): `site:sungene.net` returns only 1 indexed page.
This runbook will push the remaining 503 URLs into every major crawler.

────────────────────────────────────────────────────────────────────────────────
0. Prerequisites
────────────────────────────────────────────────────────────────────────────────

- The new code (with `public/bc92b7ac1caf40b3addfb82892e2ba78.txt` and
  `scripts/indexnow-submit.mjs`) must be **deployed to production** first.
  Verify the key file is reachable before running anything else:

      curl -i https://sungene.net/bc92b7ac1caf40b3addfb82892e2ba78.txt

  Expected: HTTP 200, body = `bc92b7ac1caf40b3addfb82892e2ba78` (exact match).

- Verify the sitemap is reachable:

      curl -s https://sungene.net/sitemap.xml | head -20

  Expected: `<urlset …>` with 500+ `<loc>` entries.


────────────────────────────────────────────────────────────────────────────────
1. IndexNow — fully automated (covers Bing, Yandex, Seznam, Naver, Yep)
────────────────────────────────────────────────────────────────────────────────

One command pushes every sitemap URL to 5 search engines in parallel:

    npm run indexnow

What it does:
- Fetches https://sungene.net/sitemap.xml
- Extracts all 504 URLs
- Deduplicates and host-filters them
- POSTs the batch to https://api.indexnow.org/IndexNow
- Expects HTTP 200/202 (success) — anything ≥ 400 throws

Dry run (prints URL list, does NOT post):

    npm run indexnow:dry

Priority subset only (18 URLs — EN/ZH/CN × homepage + 5 machine pages):

    npm run indexnow:priority

Status codes you might see:
-  200  Accepted — keep going
-  202  Received, validation in progress — success
-  400  Invalid JSON or bad request
-  403  Key file missing or key mismatch — re-verify step 0
-  422  URLs don't belong to the claimed host — check the sitemap host
-  429  Rate limited — wait 10 minutes, retry

Recommended cadence:
- Run `npm run indexnow` once after each deploy (the sitemap
  `lastmod` is build-time-stable, so resubmitting the full set is harmless)
- Or: run `npm run indexnow:priority` every few days to nudge the highest-value URLs

CI automation (optional):
Add this to your deploy pipeline after the production rollout succeeds:

    - name: Submit to IndexNow
      run: npm run indexnow


────────────────────────────────────────────────────────────────────────────────
2. Google Search Console — manual, 10 minutes
────────────────────────────────────────────────────────────────────────────────

IndexNow does NOT cover Google — Google wants you to use GSC directly.

Domain verification file is already in place at
`public/googlea3301176ef1c8c54.html` so the "HTML file" verification method
will pass immediately.

Steps:

  a. Go to https://search.google.com/search-console
  b. Click "Add property" → "URL prefix" → `https://sungene.net`
  c. Choose "HTML file" verification method (the `googlea3301176ef1c8c54.html`
     file is already deployed). Click "Verify".
  d. Once verified, open **Sitemaps** in the left nav.
  e. Paste `sitemap.xml` into the input box → "Submit".
     You should see "Success" and 500+ discovered URLs within a few hours.
  f. Open **URL Inspection** in the left nav.

For (f), use the priority URL list. Generate it locally:

    npm run seo:priority-urls        # tier 1 — 18 URLs (EN + ZH + CN × 6 pages)
    npm run seo:priority-urls:tier2  # tier 2 — 48 URLs (adds hub pages)
    npm run seo:priority-urls:all    # full — 12 langs × 8 paths (~96 URLs)

For each URL in the output:
  1. Paste it into the "Inspect any URL" search bar at the top of GSC
  2. Wait for the test (~10 seconds)
  3. Click "Request Indexing"
  4. Wait for "Indexing requested" confirmation

Google rate-limits this at roughly **10–20 manual requests per day per
property**. Work through tier 1 on day 1 (18 URLs just under the limit),
tier 2 over the next 2–3 days, then let IndexNow + the sitemap handle the rest.


────────────────────────────────────────────────────────────────────────────────
3. Bing Webmaster Tools — manual, 5 minutes
────────────────────────────────────────────────────────────────────────────────

Bing powers ChatGPT web search and Copilot, so this is critical for GEO.
Bing also accepts the IndexNow submissions from step 1, but signing in to
Webmaster Tools unlocks additional indexing signals.

Steps:

  a. Go to https://www.bing.com/webmasters
  b. Sign in (Microsoft account)
  c. Add site: `https://sungene.net`
  d. Choose the **"Import from Google Search Console"** option — this auto-imports
     verified ownership and the sitemap, skipping BingSiteAuth.xml entirely.
  e. If you prefer manual verification instead: generate the BingSiteAuth.xml file
     from the Bing console, drop it into `public/`, redeploy, then verify.
  f. Open **Sitemaps** → submit `https://sungene.net/sitemap.xml`
  g. Open **URL Submission** → paste the same priority URL list
     (`npm run seo:priority-urls`). Bing allows **10,000 URL submissions per day**
     vs. Google's 10–20, so you can submit all 504 at once if you want.

Bing's API also accepts bulk submissions via `POST /api/SubmitUrlbatch` — if
you want to automate Bing separately, I can write a second script that uses
your BingAPI key.


────────────────────────────────────────────────────────────────────────────────
4. Post-submission verification (24–72 h later)
────────────────────────────────────────────────────────────────────────────────

Run these spot checks periodically to measure progress:

  Google:
    site:sungene.net                           # should go from 1 → dozens in a week
    site:sungene.net/en/machines               # confirms machine pages indexed
    site:sungene.net inurl:machines            # broader coverage check

  Bing:
    site:sungene.net                           # same search syntax, Bing index

  GSC Coverage report:
    Search Console → "Pages" → track "Indexed / Not indexed" counts

Expected timeline with this runbook:
  Day 1:     IndexNow accepted (Bing / Yandex / Naver / Seznam / Yep)
  Day 2–3:   Bing starts showing pages under site: operator
  Day 3–7:   Google indexes the first ~20 manually requested URLs
  Day 7–21:  Google starts crawling the rest of the sitemap organically
  Day 14–30: ChatGPT web search + Perplexity start citing sungene.net
             (they use Bing/Google indices for live search)


────────────────────────────────────────────────────────────────────────────────
5. Re-running after content updates
────────────────────────────────────────────────────────────────────────────────

When you add a new machine page, resource article, or change a landing page:

    npm run indexnow           # push the fresh URL(s) to all 5 IndexNow engines

For Google, use GSC "URL Inspection → Request Indexing" for the specific
changed URL(s). Do NOT resubmit the entire sitemap to GSC — Google will
re-crawl it on its own schedule.


────────────────────────────────────────────────────────────────────────────────
6. Troubleshooting
────────────────────────────────────────────────────────────────────────────────

  "IndexNow rejected submission: 403"
    → key file at https://sungene.net/bc92b7ac1caf40b3addfb82892e2ba78.txt
      is missing or returns wrong content. Check public/ folder and redeploy.

  "IndexNow rejected submission: 422"
    → URLs in the sitemap don't match the `host` claimed in the request body.
      Check that SITE_URL in lib/siteConfig.ts is exactly `https://sungene.net`.

  GSC "Discovered — currently not indexed"
    → Google saw the URL but chose not to index it yet. Cause is usually thin
      content or low domain authority. The fix is (a) build backlinks and
      (b) wait. Do NOT repeatedly Request Indexing — that can hurt.

  GSC "Crawled — currently not indexed"
    → Content was seen but judged low-quality relative to competitors.
      Look for duplication across language versions (check hreflang is correct)
      and add unique per-language body content where possible.

  "site:sungene.net" still returns 1 page after a week
    → Open GSC → Pages → look for crawl errors. Most common cause: the
      Next.js `robots.ts` accidentally blocks /*. The current robots.ts
      allows everything except /api/ and /_next/ so this should not happen.
