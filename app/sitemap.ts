import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const langs = ['zh', 'en']
  const routes = [
    '',
    '/services',
    '/how-it-works',
    '/case-studies',
    '/about',
    '/contact',
    '/free-market-analysis',
    '/resources',
    '/export-lead-generation',
    '/export-outsourcing',
    '/b2b-lead-generation',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  routes.forEach(route => {
    langs.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemap
}
