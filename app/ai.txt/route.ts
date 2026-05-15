import { SITE_URL } from '@/lib/siteConfig'

export async function GET() {
  const body = [
    `site: ${SITE_URL}`,
    `sitemap: ${SITE_URL}/sitemap.xml`,
    `llms: ${SITE_URL}/llms.txt`,
    `notes: SunGene is a Taiwan + China dual-entity trading company. We buy from vetted factories across both markets and resell direct to international buyers in packaging, home goods, and garden categories. On-site QC by our own team. Orders from USD 1,000. Verified Alibaba.com supplier (momas.en.alibaba.com).`,
    '',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex, follow',
    },
  })
}
