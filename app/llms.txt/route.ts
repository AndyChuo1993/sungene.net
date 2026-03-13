export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungenelite.com'
  const body = [
    '# llms.txt',
    '',
    'Allow: /zh/blog/',
    'Allow: /en/blog/',
    'Allow: /zh/resources/',
    'Allow: /en/resources/',
    'Allow: /zh/industries/',
    'Allow: /en/industries/',
    'Allow: /zh/markets/',
    'Allow: /en/markets/',
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

