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

  // Priority 0.95 - Configuration landing pages (highest conversion value)
  const machinePages = [
    '/machines/pouch-packing-machine',
    '/machines/powder-filling-machine',
    '/machines/liquid-filling-machine',
    '/machines/snack-processing-line',
    '/machines/conveyor-system',
  ]
  const machineSitemap = machinePages.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'weekly', 0.95))
  )

  // Priority 0.8 - Wuu Sheng supplementary product pages
  const wuushengPages = [
    '/machines/vacuum-packing-machine',
    '/machines/shrinking-machine',
    '/machines/pillow-type-packing-machine',
    '/machines/stretch-wrapping-machine',
    '/machines/hand-sealer-impulse-type',
    '/machines/foot-sealer-impulse-type',
    '/machines/extra-long-hand-sealer-impulse-type',
  ]
  const wuushengSitemap = wuushengPages.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'monthly', 0.8))
  )

  // Priority 0.9 - Conversion pages
  const conversionRoutes = [
    '/assessment',
    '/contact',
  ]
  const conversionSitemap = conversionRoutes.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'weekly', 0.9))
  )

  // Priority 0.9 - Quote landing pages
  const quoteRoutes = [
    '/quote',
    '/quote/pouch-packing-machine',
    '/quote/powder-filling-machine',
    '/quote/liquid-filling-machine',
    '/quote/snack-processing-line',
    '/quote/conveyor-system',
  ]
  const quoteSitemap = quoteRoutes.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'weekly', 0.9))
  )

  // Priority 0.85 - Machinery categories
  const machineryRoutes = [
    '/machinery',
    '/machinery/packaging',
    '/machinery/food-processing',
    '/machinery/filling-sealing',
    '/machinery/conveying-automation',
    '/machinery/custom',
  ]
  const machinerySitemap = machineryRoutes.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'weekly', 0.85))
  )

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

  // Priority 0.75 - Supporting pages
  const supportRoutes = [
    '/industries',
    '/solutions',
    '/sourcing',
    '/about',
  ]
  const supportSitemap = supportRoutes.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, route === '/about' ? 'yearly' : 'monthly', 0.75))
  )

  // Priority 0.75 - Markets index hub
  const marketsHubSitemap = langs.map(lang => item(`${baseUrl}/${lang}/markets`, 'monthly', 0.75))

  // Priority 0.7 - Individual market landing pages (18 countries × 12 langs = 216 URLs)
  const marketDetailSitemap = MARKET_SLUGS.flatMap((slug) =>
    langs.map((lang) => item(`${baseUrl}/${lang}/markets/${slug}`, 'monthly', 0.7))
  )

  // Priority 0.7 - Industry sub-pages (15 industries × 12 langs = 180 URLs)
  const industryDetailSitemap = INDUSTRY_SLUGS.flatMap((slug) =>
    langs.map((lang) => item(`${baseUrl}/${lang}/industries/${slug}`, 'monthly', 0.7))
  )

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

  return [
    ...homepages,
    ...machineSitemap,
    ...wuushengSitemap,
    ...conversionSitemap,
    ...quoteSitemap,
    ...machinerySitemap,
    ...resourcesHubSitemap,
    ...supportSitemap,
    ...marketsHubSitemap,
    ...marketDetailSitemap,
    ...industryDetailSitemap,
    ...caseStudiesHub,
    ...caseStudiesDetail,
    ...routeHubSitemap,
    ...resourceArticlesSitemap,
  ]
}
