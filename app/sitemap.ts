import { MetadataRoute } from 'next'
import { ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { RESOURCE_SLUGS } from '@/lib/resourceArticles'
import { getStableLastModified } from '@/lib/buildTime'
import { MARKET_SLUGS } from '@/lib/markets'
import { INDUSTRY_SLUGS } from '@/lib/industries'
import { getAllPublishedCaseStudies } from '@/lib/cmsContent'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL
  const langs = ALL_LANGS
  const lastModified = getStableLastModified()

  const item = (
    url: string,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: number,
    customLastModified?: string | Date
  ) => ({
    url,
    changeFrequency,
    priority,
    ...(customLastModified
      ? { lastModified: customLastModified }
      : lastModified
        ? { lastModified }
        : {}),
  })

  // Priority 1.0 - Homepage
  const homepages = langs.map(lang => item(`${baseUrl}/${lang}`, 'weekly', 1.0))

  // /machines/* pages now 308-redirect to /sourcing/<category> — removed from sitemap.
  const machineSitemap: ReturnType<typeof item>[] = []
  const wuushengSitemap: ReturnType<typeof item>[] = []

  // Priority 0.9 - Conversion pages
  const conversionRoutes = [
    '/assessment',
    '/contact',
  ]
  const conversionSitemap = conversionRoutes.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'weekly', 0.9))
  )

  // /quote/* pages now 308-redirect to /contact — removed from sitemap.
  const quoteSitemap: ReturnType<typeof item>[] = []

  // NEW: /sourcing/<category> deep landing pages (high SEO + conversion value).
  const sourcingCategories = ['packaging', 'home', 'garden', 'beauty']
  const sourcingCategorySitemap = sourcingCategories.flatMap((cat) =>
    langs.map((lang) => item(`${baseUrl}/${lang}/sourcing/${cat}`, 'weekly', 0.95))
  )

  // Repositioning (2026-05-14): /machinery/* now 308-redirect to /sourcing.
  // Don't list them in sitemap or GSC flags them as "URLs in sitemap that redirect".
  const machinerySitemap: ReturnType<typeof item>[] = []

  // Priority 0.8 - Resources hub + configuration topic hubs
  const resourcesHubSitemap = langs.map(lang => item(`${baseUrl}/${lang}/resources`, 'weekly', 0.8))

  const routeHubs = [
    'pouch-packaging',
    'powder-dosing',
    'liquid-filling',
    'food-processing-line',
    'conveying-automation',
  ]
  const routeHubSitemap = routeHubs.flatMap((s) =>
    langs.map((lang) => item(`${baseUrl}/${lang}/resources/route/${s}`, 'weekly', 0.8))
  )

  // Priority 0.75 - Supporting pages (removed industries + solutions — they redirect to /sourcing now)
  const supportRoutes = [
    '/sourcing',
    '/about',
    '/contact',
  ]
  const supportSitemap = supportRoutes.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, route === '/about' ? 'yearly' : 'monthly', 0.75))
  )

  // /markets and /markets/<country> pages now 308 → /sourcing
  // (country pages were framed around machinery export — to be reauthored later).
  const marketsHubSitemap: ReturnType<typeof item>[] = []
  const marketDetailSitemap: ReturnType<typeof item>[] = []

  // /industries pages now 308 → /sourcing, so removed from sitemap.
  const industryDetailSitemap: ReturnType<typeof item>[] = []

  // Priority 0.75 - Case studies hub + per-slug pages (published only)
  const caseStudies = await getAllPublishedCaseStudies()
  const caseStudiesHub = [item(`${baseUrl}/case-studies`, 'weekly', 0.75)]
  const caseStudiesDetail = caseStudies.map((cs) =>
    item(
      `${baseUrl}/case-studies/${cs.slug}`,
      'monthly',
      0.75,
      cs.updated_at || cs.published_at || cs.created_at || undefined
    )
  )

  // Priority 0.65 - Resource articles
  const resourceArticlesSitemap = RESOURCE_SLUGS.flatMap((slug) =>
    langs.map((lang) => item(`${baseUrl}/${lang}/resources/${slug}`, 'monthly', 0.65))
  )

  const llmDocs = [
    item(`${baseUrl}/llms.txt`, 'monthly', 0.1),
    item(`${baseUrl}/llms-full.txt`, 'monthly', 0.1),
    item(`${baseUrl}/ai.txt`, 'monthly', 0.1),
  ]
  const llmDocsByLang = [
    ...langs.map((lang) => item(`${baseUrl}/${lang}/llms.txt`, 'monthly', 0.1)),
    ...langs.map((lang) => item(`${baseUrl}/${lang}/llms-full.txt`, 'monthly', 0.1)),
  ]

  return [
    ...homepages,
    ...sourcingCategorySitemap,
    ...conversionSitemap,
    ...resourcesHubSitemap,
    ...supportSitemap,
    ...caseStudiesHub,
    ...caseStudiesDetail,
    ...routeHubSitemap,
    ...resourceArticlesSitemap,
    ...llmDocs,
    ...llmDocsByLang,
  ]
}
