import { SITE_URL } from '@/lib/siteConfig'

export async function GET() {
  const body = [
    `site: ${SITE_URL}`,
    `sitemap: ${SITE_URL}/sitemap.xml`,
    `llms: ${SITE_URL}/llms.txt`,
    `notes: SunGene is a Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Three capability areas: custom packaging, home & living, outdoor products. Pre-shipment AQL inspection by in-house SunGene staff at partner factories. Taiwan-registered invoicing entity (Tax ID 94111922). MOQ USD 1,000. Public Alibaba.com supplier storefront 3+ years: momas.en.alibaba.com.`,
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
