import { MetadataRoute } from 'next'
import { markets } from '@/data/markets'
import { industries } from '@/data/industries'
import { getArticles } from '@/data/articles'
import { getCases } from '@/data/cases'
import { seoMarkets } from '@/data/seoMarkets'
import { seoIndustries } from '@/data/seoIndustries'
import { getBlogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const langs = ['zh', 'en'] as const
  
  const routes = [
    '',
    '/services',
    '/industries',
    '/markets',
    '/how-it-works',
    '/case-studies',
    '/about',
    '/contact',
    '/free-market-analysis',
    '/buyers-list',
    '/distributor-list',
    '/export-market-analysis',
    '/resources',
    '/services/export-lead-generation',
    '/services/distributor-development',
    '/services/export-sales-outsourcing',
    '/export-marketing',
    '/buyer-database-building',
    '/cold-email-outreach',
    '/linkedin-prospecting',
    '/market-entry-strategy',
    '/overseas-buyer-lists',
    '/qualified-b2b-leads',
    '/distributor-network',
    '/b2b-lead-generation',
    '/partners',
    '/pricing',
    '/faq',
    '/resources/export-lead-generation-checklist',
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

  // 2. Market Pages
  markets.forEach(m => {
    langs.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}/market/${m.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

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

  // 3. Industry Pages
  industries.forEach(i => {
    langs.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}/industry/${i.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

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
        url: `${baseUrl}/${lang}/resources/blog/${p.slug}`,
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
