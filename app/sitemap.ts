import { MetadataRoute } from 'next'
import { ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { ARTICLE_SLUGS } from '@/lib/articleData'
import { getStableLastModified } from '@/lib/buildTime'

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

  // Priority 0.9 - Machine landing pages (highest conversion value)
  const machinePages = [
    '/machines/pouch-packing-machine',
    '/machines/powder-filling-machine',
    '/machines/liquid-filling-machine',
    '/machines/snack-processing-line',
    '/machines/conveyor-system',
  ]
  const machineSitemap = machinePages.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'weekly', 0.9))
  )

  // Priority 0.85 - Machinery categories + recommend
  const machineryRoutes = [
    '/machinery',
    '/machinery/packaging',
    '/machinery/food-processing',
    '/machinery/filling-sealing',
    '/machinery/conveying-automation',
    '/machinery/custom',
    '/recommend',
  ]
  const machinerySitemap = machineryRoutes.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'weekly', 0.85))
  )

  // Priority 0.7 - Supporting pages
  const supportRoutes = [
    '/industries',
    '/solutions',
    '/about',
    '/contact',
    '/resources',
  ]
  const supportSitemap = supportRoutes.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'monthly', 0.7))
  )

  const geoSitemap = [
    item(`${baseUrl}/llms.txt`, 'monthly', 0.2),
    item(`${baseUrl}/llms-full.txt`, 'monthly', 0.2),
  ]

  const geoLocalizedSitemap = langs.flatMap((lang) => [
    item(`${baseUrl}/${lang}/llms.txt`, 'monthly', 0.2),
    item(`${baseUrl}/${lang}/llms-full.txt`, 'monthly', 0.2),
  ])

  const topicMachines = [
    'pouch-packing-machine',
    'powder-filling-machine',
    'liquid-filling-machine',
    'snack-processing-line',
    'conveyor-system',
  ]
  const topicSitemap = topicMachines.flatMap((m) =>
    langs.map((lang) => item(`${baseUrl}/${lang}/resources/topic/${m}`, 'monthly', 0.6))
  )

  // Priority 0.65 - Resource articles (canonical slugs only — old slugs 301 redirect)
  const articleSitemap = ARTICLE_SLUGS.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'monthly', 0.65))
  )

  return [
    ...homepages,
    ...machineSitemap,
    ...machinerySitemap,
    ...supportSitemap,
    ...topicSitemap,
    ...geoSitemap,
    ...geoLocalizedSitemap,
    ...articleSitemap,
  ]
}
