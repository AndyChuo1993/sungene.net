import { SITE_URL } from '@/lib/siteConfig'

export async function GET() {
  const body = [
    `site: ${SITE_URL}`,
    `sitemap: ${SITE_URL}/sitemap.xml`,
    `llms: ${SITE_URL}/llms.txt`,
    `notes: SunGene is a sourcing partner with teams in Taichung (Taiwan) and Xiamen (Mainland China). We buy from vetted factories on both sides for packaging, home goods, garden and beauty buyers. On-site QC. Factory price + our margin shown separately on every quote. MOQ USD 1,000. Verified Alibaba 5-star supplier (momas.en.alibaba.com).`,
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
