import { MetadataRoute } from 'next'
import { ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { RESOURCE_SLUGS } from '@/lib/resourceArticles'
import { HIDDEN_RESOURCE_SLUGS, HIDDEN_ROUTE_HUBS } from '@/lib/hiddenSlugs'
import { getStableLastModified } from '@/lib/buildTime'

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

  const homepages = langs.map((lang) => item(`${baseUrl}/${lang}`, 'weekly', 1.0))

  const sourcingCategories = ['packaging', 'home', 'garden', 'beauty']
  const sourcingCategorySitemap = sourcingCategories.flatMap((cat) =>
    langs.map((lang) => item(`${baseUrl}/${lang}/sourcing/${cat}`, 'weekly', 0.95))
  )

  const conversionSitemap = langs.map((lang) => item(`${baseUrl}/${lang}/contact`, 'weekly', 0.9))

  const resourcesHubSitemap = langs.map((lang) => item(`${baseUrl}/${lang}/resources`, 'weekly', 0.8))
  const allRouteHubs = ['pouch-packaging','powder-dosing','liquid-filling','food-processing-line','conveying-automation']
  const routeHubs = allRouteHubs.filter((h) => !HIDDEN_ROUTE_HUBS.has(h))
  const routeHubSitemap = routeHubs.flatMap((s) =>
    langs.map((lang) => item(`${baseUrl}/${lang}/resources/route/${s}`, 'weekly', 0.8))
  )

  const supportRoutes = ['/sourcing', '/about']
  const supportSitemap = supportRoutes.flatMap((route) =>
    langs.map((lang) => item(`${baseUrl}/${lang}${route}`, route === '/about' ? 'yearly' : 'monthly', 0.75))
  )

  // Legal pages (privacy + terms) — low priority but indexable for trust signals
  const legalRoutes = ['/privacy', '/terms']
  const legalSitemap = legalRoutes.flatMap((route) =>
    langs.map((lang) => item(`${baseUrl}/${lang}${route}`, 'yearly', 0.3))
  )

  const visibleArticleSlugs = RESOURCE_SLUGS.filter((s) => !HIDDEN_RESOURCE_SLUGS.has(s))
  const resourceArticlesSitemap = visibleArticleSlugs.flatMap((slug) =>
    langs.map((lang) => item(`${baseUrl}/${lang}/resources/${slug}`, 'monthly', 0.65))
  )

  const llmDocs = [
    item(`${baseUrl}/llms.txt`, 'monthly', 0.1),
    item(`${baseUrl}/ai.txt`, 'monthly', 0.1),
  ]
  // /[lang]/llms.txt deleted — root /llms.txt is canonical (avoids conflicting AI signals)

  return [
    ...homepages,
    ...sourcingCategorySitemap,
    ...conversionSitemap,
    ...resourcesHubSitemap,
    ...supportSitemap,
    ...legalSitemap,
    ...routeHubSitemap,
    ...resourceArticlesSitemap,
    ...llmDocs,
  ]
}
