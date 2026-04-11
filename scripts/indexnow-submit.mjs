#!/usr/bin/env node
/**
 * indexnow-submit.mjs
 * ────────────────────
 * Pushes every URL from the live sitemap.xml to the IndexNow API.
 * One submission covers Bing, Yandex, Seznam, Naver, and Yep simultaneously.
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs                 # submit all URLs from https://sungene.net/sitemap.xml
 *   node scripts/indexnow-submit.mjs --priority      # submit only 18 priority URLs (EN/ZH/CN × 6 pages)
 *   node scripts/indexnow-submit.mjs --host=example.com --sitemap=https://example.com/sitemap.xml
 *   node scripts/indexnow-submit.mjs --dry           # build URL list but do NOT POST
 *
 * Key management:
 *   The IndexNow key is hard-coded as INDEXNOW_KEY below AND as public/{key}.txt.
 *   Both must match or the submission is rejected.
 *
 * Docs: https://www.indexnow.org/documentation
 */

const INDEXNOW_KEY = 'bc92b7ac1caf40b3addfb82892e2ba78'
const DEFAULT_HOST = 'sungene.net'
const DEFAULT_SITEMAP = `https://${DEFAULT_HOST}/sitemap.xml`
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow'
const MAX_URLS_PER_REQUEST = 10_000 // IndexNow hard limit

// ─── CLI args ─────────────────────────────────────────────────────────────────
const args = Object.fromEntries(
  process.argv.slice(2).map((raw) => {
    const s = raw.replace(/^--?/, '')
    const eq = s.indexOf('=')
    return eq === -1 ? [s, true] : [s.slice(0, eq), s.slice(eq + 1)]
  })
)

const host = args.host || DEFAULT_HOST
const sitemapUrl = args.sitemap || `https://${host}/sitemap.xml`
const dryRun = Boolean(args.dry || args['dry-run'])
const priorityOnly = Boolean(args.priority)

// ─── Priority URL set (18 URLs — EN/ZH/CN × 6 highest-value pages) ────────────
const PRIORITY_LANGS = ['en', 'zh', 'cn']
const PRIORITY_PATHS = [
  '', // homepage
  '/machines/pouch-packing-machine',
  '/machines/powder-filling-machine',
  '/machines/liquid-filling-machine',
  '/machines/snack-processing-line',
  '/machines/conveyor-system',
]
function priorityUrls() {
  return PRIORITY_LANGS.flatMap((l) => PRIORITY_PATHS.map((p) => `https://${host}/${l}${p}`))
}

// ─── Sitemap fetch + parse ────────────────────────────────────────────────────
async function fetchSitemapUrls(url) {
  console.log(`→ Fetching sitemap: ${url}`)
  const res = await fetch(url, { headers: { 'User-Agent': 'SunGene-IndexNow/1.0' } })
  if (!res.ok) {
    throw new Error(`sitemap fetch failed: ${res.status} ${res.statusText}`)
  }
  const xml = await res.text()
  // Handle both urlset (regular sitemap) and sitemapindex (index of sitemaps)
  const isIndex = /<sitemapindex[\s>]/i.test(xml)
  const locMatches = xml.match(/<loc>([^<]+)<\/loc>/g) || []
  const locs = locMatches.map((m) => m.replace(/<\/?loc>/g, '').trim())
  if (isIndex) {
    console.log(`  ↳ sitemap index detected; recursing into ${locs.length} child sitemaps`)
    const nested = await Promise.all(locs.map((u) => fetchSitemapUrls(u).catch(() => [])))
    return nested.flat()
  }
  return locs
}

// ─── POST to IndexNow ─────────────────────────────────────────────────────────
async function submitBatch(urlList) {
  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `https://${host}/${INDEXNOW_KEY}.txt`,
    urlList,
  }
  console.log(`→ POST ${INDEXNOW_ENDPOINT}  (${urlList.length} URLs)`)
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })
  const text = await res.text().catch(() => '')
  console.log(`  ↳ ${res.status} ${res.statusText}${text ? `  body: ${text.slice(0, 200)}` : ''}`)
  // IndexNow uses:
  //   200 OK        = accepted
  //   202 Accepted  = received, validation in progress
  //   400           = invalid request
  //   403           = key mismatch / key file not found
  //   422           = URLs don't belong to host, or malformed
  //   429           = too many requests
  if (res.status >= 400) {
    throw new Error(`IndexNow rejected submission: ${res.status}`)
  }
  return res.status
}

// ─── Main ─────────────────────────────────────────────────────────────────────
;(async () => {
  try {
    const urls = priorityOnly ? priorityUrls() : await fetchSitemapUrls(sitemapUrl)
    // Normalize: keep only URLs on the target host
    const filtered = [...new Set(urls)]
      .filter((u) => {
        try {
          return new URL(u).host === host
        } catch {
          return false
        }
      })
      .sort()

    console.log(`\n✓ ${filtered.length} URL${filtered.length === 1 ? '' : 's'} queued for IndexNow (host=${host})`)
    if (filtered.length === 0) {
      console.error('No URLs found. Aborting.')
      process.exit(1)
    }

    if (dryRun) {
      console.log('\n--- dry run: not posting ---')
      filtered.slice(0, 30).forEach((u) => console.log(`  ${u}`))
      if (filtered.length > 30) console.log(`  ... and ${filtered.length - 30} more`)
      return
    }

    // Chunk and submit
    let total = 0
    for (let i = 0; i < filtered.length; i += MAX_URLS_PER_REQUEST) {
      const chunk = filtered.slice(i, i + MAX_URLS_PER_REQUEST)
      await submitBatch(chunk)
      total += chunk.length
    }
    console.log(`\n✓ Done. ${total} URL${total === 1 ? '' : 's'} submitted to IndexNow.`)
    console.log(`  Participating engines: Bing, Yandex, Seznam, Naver, Yep`)
  } catch (err) {
    console.error(`\n✗ Submission failed:`, err.message || err)
    process.exit(1)
  }
})()
