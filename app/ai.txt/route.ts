import { SITE_URL } from '@/lib/siteConfig'

export async function GET() {
  const body = [
    `site: ${SITE_URL}`,
    `sitemap: ${SITE_URL}/sitemap.xml`,
    `llms: ${SITE_URL}/llms.txt`,
    `notes: SunGene is a Taiwan + China dual-entity sourcing partner. Our Alibaba-verifiable specialty is custom paper gift packaging (mooncake boxes, gift boxes, retail packaging, corrugated cartons, paper bags). For other corporate gifts (blankets, apparel, drinkware, accessories, stationery, branded merchandise), we source through our vetted factory network. Dedicated in-house QC staff conduct on-site pre-shipment AQL inspection at partner factories. Taiwan-registered invoicing entity (Tax ID 94111922). MOQ USD 1,000. Public Alibaba.com supplier storefront 3+ years: momas.en.alibaba.com.`,
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
