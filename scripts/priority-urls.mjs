#!/usr/bin/env node
/**
 * priority-urls.mjs
 * ─────────────────
 * Prints the priority URL list for manual "Request Indexing" in Google
 * Search Console and Bing Webmaster Tools.
 *
 * Tiers:
 *   Tier 1 (18 URLs) — English + Traditional Chinese + Simplified Chinese × (homepage + 5 machine pages)
 *   Tier 2 (+30 URLs) — adds /machinery, /assessment, /contact, /resources, /industries in EN/ZH/CN
 *   Tier 3 (all 72 machine-page URLs) — 12 languages × 6 pages
 *
 * Usage:
 *   node scripts/priority-urls.mjs              # tier 1 (default, 18 URLs)
 *   node scripts/priority-urls.mjs --tier=2     # 48 URLs
 *   node scripts/priority-urls.mjs --tier=3     # all 72 machine URLs
 *   node scripts/priority-urls.mjs --tier=all   # full sitemap-level coverage (all langs × all machine/hub pages)
 *   node scripts/priority-urls.mjs --host=example.com
 */

const args = Object.fromEntries(
  process.argv.slice(2).map((raw) => {
    const s = raw.replace(/^--?/, '')
    const eq = s.indexOf('=')
    return eq === -1 ? [s, true] : [s.slice(0, eq), s.slice(eq + 1)]
  })
)

const host = args.host || 'sungene.net'
const base = `https://${host}`
const tier = String(args.tier || '1')

const ALL_LANGS = ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']
const TIER1_LANGS = ['en', 'zh', 'cn']
const MACHINE_PATHS = [
  '',
  '/machines/pouch-packing-machine',
  '/machines/powder-filling-machine',
  '/machines/liquid-filling-machine',
  '/machines/snack-processing-line',
  '/machines/conveyor-system',
]
const HUB_PATHS = ['/machinery', '/assessment', '/contact', '/resources', '/industries']
const ALL_PATHS = [...MACHINE_PATHS, ...HUB_PATHS, '/solutions', '/about']

let urls = []
if (tier === '1') {
  urls = TIER1_LANGS.flatMap((l) => MACHINE_PATHS.map((p) => `${base}/${l}${p}`))
} else if (tier === '2') {
  urls = TIER1_LANGS.flatMap((l) => [...MACHINE_PATHS, ...HUB_PATHS].map((p) => `${base}/${l}${p}`))
} else if (tier === '3') {
  urls = ALL_LANGS.flatMap((l) => MACHINE_PATHS.map((p) => `${base}/${l}${p}`))
} else if (tier === 'all') {
  urls = ALL_LANGS.flatMap((l) => ALL_PATHS.map((p) => `${base}/${l}${p}`))
} else {
  console.error(`Unknown tier "${tier}". Use --tier=1, 2, 3, or all.`)
  process.exit(1)
}

urls = [...new Set(urls)].sort()

console.log(`# Priority URLs — tier ${tier} — ${urls.length} total`)
console.log(`# Paste each line into Google Search Console → URL Inspection → "Test live URL" → Request Indexing`)
console.log(`# (GSC allows ~10–20 manual Request Indexing calls per day; start with tier 1)\n`)
urls.forEach((u) => console.log(u))
