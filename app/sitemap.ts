import { MetadataRoute } from 'next'
import { ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { ARTICLE_SLUGS } from '@/lib/articleData'

function getStableLastModified() {
  const epoch = process.env.SOURCE_DATE_EPOCH
  if (epoch && /^\d+$/.test(epoch)) return new Date(Number(epoch) * 1000)

  const iso = process.env.BUILD_TIME || process.env.NEXT_PUBLIC_BUILD_TIME || process.env.VERCEL_GIT_COMMIT_DATE
  if (iso) {
    const d = new Date(iso)
    if (!Number.isNaN(d.valueOf())) return d
  }

  return undefined
}

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

  // Priority 0.65 - Resource articles (canonical slugs only — old slugs 301 redirect)
  const articleSitemap = ARTICLE_SLUGS.flatMap(route =>
    langs.map(lang => item(`${baseUrl}/${lang}${route}`, 'monthly', 0.65))
  )

  return [...homepages, ...machineSitemap, ...machinerySitemap, ...supportSitemap, ...articleSitemap]
}
