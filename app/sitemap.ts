import { MetadataRoute } from 'next'
import { ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { ARTICLE_SLUGS } from '@/lib/articleData'
import { getStableLastModified } from '@/lib/buildTime'
import { MARKET_SLUGS } from '@/lib/markets'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL
  const langs = ALL_LANGS
  const lastModified = getStableLastModified()

  const item = (url: string, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], priority: number) => ({
    url,
    changeFrequency,
    priority,
    ...(lastModified ? { lastModified } : {}),
  })

  // Priority 1.0 - Homepage
  const homepages = langs.map(lang => item(`${baseUrl}/${lang}`, 'weekly', 1.0))

  // Priority 0.95 - Machine landing pages (highest conversion value)
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

  // Priority 0.9 - Conversion pages
  const conversionRoutes = [
    '/recommend',
    '/contact',
  ]
  const conversionSitemap = conversionRoutes.flatMap(route =>
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

  // Priority 0.8 - Resources hub + topic hubs
  const resourcesHubSitemap = langs.map(lang => item(`${baseUrl}/${lang}/resources`, 'weekly', 0.8))

  const topicMachines = [
    'pouch-packing-machine',
    'powder-filling-machine',
    'liquid-filling-machine',
    'snack-processing-line',
    'conveyor-system',
  ]
  const topicSitemap = topicMachines.flatMap((m) =>
    langs.map((lang) => item(`${baseUrl}/${lang}/resources/topic/${m}`, 'weekly', 0.8))
  )

  // Priority 0.75 - Supporting pages
  const supportRoutes = [
    '/industries',
    '/solutions',
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

  // Priority 0.65 - Resource articles (canonical slugs only — old slugs 301 redirect)
  const articleSitemap = ARTICLE_SLUGS.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'monthly', 0.65))
  )

  return [
    ...homepages,
    ...machineSitemap,
    ...conversionSitemap,
    ...machinerySitemap,
    ...resourcesHubSitemap,
    ...supportSitemap,
    ...marketsHubSitemap,
    ...marketDetailSitemap,
    ...topicSitemap,
    ...articleSitemap,
  ]
}
