import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/siteConfig'

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/sitemap.xml'],
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
