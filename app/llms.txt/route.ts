export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const body = [
    '# llms.txt',
    '',
    'Allow: /zh/resources/',
    'Allow: /en/resources/',
    'Allow: /zh/blog/',
    'Allow: /en/blog/',
    'Allow: /zh/industries/',
    'Allow: /en/industries/',
    'Allow: /zh/markets/',
    'Allow: /en/markets/',
    'Allow: /zh/services',
    'Allow: /en/services',
    'Allow: /zh/services/export-lead-generation',
    'Allow: /en/services/export-lead-generation',
    'Allow: /zh/services/distributor-development',
    'Allow: /en/services/distributor-development',
    'Allow: /zh/services/export-sales-outsourcing',
    'Allow: /en/services/export-sales-outsourcing',
    '',
    'Disallow: /api/',
    '',
    `Sitemap: ${base}/sitemap.xml`,
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
