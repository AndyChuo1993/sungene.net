import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/siteConfig'

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/wp-admin',
          '/wp-content',
          '/wp-includes',
          '/wp-json',
          '/xmlrpc.php',
          '/wp-login.php',
          '/wp-cron.php',
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
