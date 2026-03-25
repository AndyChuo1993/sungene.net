import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get('host') || 'sungene.net'
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const baseUrl = `${protocol}://${host}`
  
  const langs = ['zh', 'cn', 'en'] as const
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/machinery',
    '/machinery/packaging',
    '/machinery/food-processing',
    '/machinery/custom',
    '/industries',
    '/solutions',
    '/resources'
  ]

  const sitemap: MetadataRoute.Sitemap = []
  const staticLastMod = new Date()

  routes.forEach(route => {
    langs.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: staticLastMod,
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemap
}
