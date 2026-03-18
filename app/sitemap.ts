import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { getArticles } from '@/data/articles'
import { getCases } from '@/data/cases'
import { seoMarkets } from '@/data/seoMarkets'
import { seoIndustries } from '@/data/seoIndustries'
import { getBlogPosts } from '@/data/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get('host') || 'sungene.net'
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const baseUrl = `${protocol}://${host}`
  
  // 根據 request host 決定輸出哪幾個語系的 sitemap
  const isZh = host.includes('sungenelite.com')
  const langs = isZh ? (['zh'] as const) : (['cn', 'en'] as const)
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/pricing',
    '/partners',
    '/how-it-works',
    '/services',
    '/services/export-lead-generation',
    '/services/distributor-development',
    '/services/export-sales-outsourcing',
    '/industries',
    '/markets',
    '/case-studies',
    '/resources',
    '/blog',
    // 獨立商業關鍵字頁面
    '/cold-email-outreach',
    '/distributor-list',
    '/export-marketing',
    '/linkedin-prospecting',
    '/market-entry-strategy',
    '/overseas-buyer-lists',
    '/qualified-b2b-leads',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // 固定靜態頁最後更新日期
  const staticLastMod = new Date('2024-03-01')

  // 1. Static Routes
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

  // 2. Market Pages (canonical)
  seoMarkets.forEach(m => {
    langs.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}/markets/${m.slug}`,
        lastModified: staticLastMod,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  // 3. Industry Pages (canonical)
  seoIndustries.forEach(i => {
    langs.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}/industries/${i.slug}`,
        lastModified: staticLastMod,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  // 4. Resource Articles
  langs.forEach(lang => {
    const articles = getArticles(lang)
    articles.forEach(a => {
      sitemap.push({
        url: `${baseUrl}/${lang}/resources/${a.id}`,
        lastModified: new Date(a.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  // 4.5 Blog
  const posts = getBlogPosts()
  langs.forEach(lang => {
    posts.forEach(p => {
      sitemap.push({
        url: `${baseUrl}/${lang}/blog/${p.slug}`,
        lastModified: new Date(p.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  // 5. Case Studies
  langs.forEach(lang => {
    const cases = getCases(lang)
    cases.forEach(c => {
      sitemap.push({
        url: `${baseUrl}/${lang}/case-studies/${c.slug}`,
        lastModified: staticLastMod, // Case data doesn't have a date field
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  return sitemap
}
