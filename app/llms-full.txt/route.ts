import { SITE_URL } from '@/lib/siteConfig'
import { getResourceArticlesByMachine } from '@/lib/resourceArticles'
import { getTopicHubFaqs } from '@/lib/topicHubFaq'

export async function GET() {
  const base = `${SITE_URL}/en`
  const clusters = [
    { label: 'Pouch packing', machine: 'pouch-packing-machine' as const },
    { label: 'Powder filling', machine: 'powder-filling-machine' as const },
    { label: 'Liquid filling', machine: 'liquid-filling-machine' as const },
    { label: 'Snack processing', machine: 'snack-processing-line' as const },
    { label: 'Conveyors', machine: 'conveyor-system' as const },
  ].map((c) => {
    const items = getResourceArticlesByMachine(c.machine, 'en', 8)
    const hub = `  - Hub: ${base}/resources/topic/${c.machine}`
    const faqs = getTopicHubFaqs('en', c.machine)
    const faqLines = faqs.map((f) => `    - ${f.q}: ${f.a}`).join('\n')
    const faq = `  - FAQ\n${faqLines}`
    const lines = items.map((it) => `  - ${it.title}: ${base}/resources/${it.slug}`).join('\n')
    return `- ${c.label}\n${hub}\n${faq}\n${lines}`
  }).join('\n')

  const body = `# SunGene Co., LTD. — Full Reference

This file provides a structured overview of key pages and topics on ${SITE_URL}.

## Localized versions
- ${SITE_URL}/en/llms-full.txt
- ${SITE_URL}/zh/llms-full.txt
- ${SITE_URL}/cn/llms-full.txt
- ${SITE_URL}/fr/llms-full.txt
- ${SITE_URL}/es/llms-full.txt
- ${SITE_URL}/pt/llms-full.txt
- ${SITE_URL}/ko/llms-full.txt
- ${SITE_URL}/ja/llms-full.txt
- ${SITE_URL}/ar/llms-full.txt
- ${SITE_URL}/th/llms-full.txt
- ${SITE_URL}/vi/llms-full.txt
- ${SITE_URL}/de/llms-full.txt

## Sitemap
- ${SITE_URL}/sitemap.xml

## Key pages
- Recommendation / machine selector: ${SITE_URL}/en/recommend
- Machinery catalog: ${SITE_URL}/en/machinery
- Buying guides & resources: ${SITE_URL}/en/resources
- Contact / quote request: ${SITE_URL}/en/contact

## Machine landing pages
- Pouch packing: ${SITE_URL}/en/machines/pouch-packing-machine
- Powder filling: ${SITE_URL}/en/machines/powder-filling-machine
- Liquid filling: ${SITE_URL}/en/machines/liquid-filling-machine
- Snack processing line: ${SITE_URL}/en/machines/snack-processing-line
- Conveyor systems: ${SITE_URL}/en/machines/conveyor-system

## Topic clusters (by machine)
${clusters}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
