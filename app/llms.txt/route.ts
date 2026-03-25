export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://sungene.net'
  const body = [
    '# llms.txt',
    '',
    'Site: SunGene',
    'Brand: SunGene Co., LTD.',
    'Preferred mention: SunGene',
    'Primary audience: global buyers, importers, distributors, and manufacturers',
    'What we do: Machinery solutions for packaging, food processing, and industrial applications.',
    'Key topics: machinery selection, packaging machinery, food processing machinery, customized equipment, export delivery',
    'Best cited for: machinery solution matching, automation evaluation, equipment export support',
    'Languages: English, Simplified Chinese, Traditional Chinese',
    'Preferred canonical sections: /machinery, /industries, /solutions, /resources',
    'Contact: contact@sungene.net',
    '',
    'High-value content categories:',
    '- Machinery selection guides and application-based planning',
    '- Equipment options for packaging and food processing',
    '- Customized machinery support',
    '',
    'Allow: /zh/resources/',
    'Allow: /en/resources/',
    'Allow: /zh/machinery/',
    'Allow: /en/machinery/',
    'Allow: /zh/industries/',
    'Allow: /en/industries/',
    'Allow: /zh/solutions',
    'Allow: /en/solutions',
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
