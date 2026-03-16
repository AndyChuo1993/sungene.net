import { MetadataRoute } from 'next'
import { getArticles } from '@/data/articles'
import { getCases } from '@/data/cases'
import { seoMarkets } from '@/data/seoMarkets'
import { seoIndustries } from '@/data/seoIndustries'
import { getBlogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const langs = ['zh', 'en', 'cn'] as const
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/services',
    '/services/export-lead-generation',
    '/services/distributor-development',
    '/services/export-sales-outsourcing',
    '/export-market-analysis',
    '/free-market-analysis',
    '/industries',
    '/markets',
    '/case-studies',
    '/resources',
    '/blog',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // 1. Static Routes
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

  // 2. Market Pages (canonical)
  seoMarkets.forEach(m => {
    langs.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}/markets/${m.slug}`,
        lastModified: new Date(),
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
        lastModified: new Date(),
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
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  return sitemap
}
