import { SITE_URL } from '@/lib/siteConfig'
import { getResourceArticlesByMachine } from '@/lib/resourceArticles'
import { getTopicHubFaqs } from '@/lib/topicHubFaq'

export async function GET() {
  const base = `${SITE_URL}/en`
  const routeSlugByMachine = {
    'pouch-packing-machine': 'pouch-packaging',
    'powder-filling-machine': 'powder-dosing',
    'liquid-filling-machine': 'liquid-filling',
    'snack-processing-line': 'food-processing-line',
    'conveyor-system': 'conveying-automation',
  } as const
  const clusters = [
    { label: 'Pouch packing', machine: 'pouch-packing-machine' as const },
    { label: 'Powder filling', machine: 'powder-filling-machine' as const },
    { label: 'Liquid filling', machine: 'liquid-filling-machine' as const },
    { label: 'Snack processing', machine: 'snack-processing-line' as const },
    { label: 'Conveyors', machine: 'conveyor-system' as const },
  ].map((c) => {
    const s = routeSlugByMachine[c.machine]
    const items = getResourceArticlesByMachine(c.machine, 'en', 8)
    const hub = `  - Hub: ${base}/resources/route/${s}`
    const hubFaq = `  - Hub FAQ: ${base}/resources/route/${s}#faq`
    const faqs = getTopicHubFaqs('en', c.machine)
    const faqLines = faqs.map((f) => `    - ${f.q}: ${f.a}`).join('\n')
    const faq = `  - FAQ\n${faqLines}`
    const lines = items.map((it) => `  - ${it.title}: ${base}/resources/${it.slug}`).join('\n')
    return `- ${c.label}\n${hub}\n${hubFaq}\n${faq}\n${lines}`
  }).join('\n')

  const specsTable = `## Machine Specs — Quick Reference

| Machine | Output | Fill range | Typical product | Key configs |
|---|---|---|---|---|
| Pouch packing (VFFS) | 30–150 bags/min | 5 g – 5 kg | Powder, granule, liquid, snacks | Multi-head weigher, auger, piston, gas flush |
| Pouch packing (HFFS / flow wrap) | 50–300 bags/min | Solid shaped items | Biscuits, bars, produce | Long dwell seal, rotary knife |
| Pre-made pouch machine | 20–80 bags/min | 10 g – 2 kg | Premium stand-up / zipper pouches | Rotary or linear, zipper, spout |
| Stick pack / sachet | 50–400 sachets/min | 1 g – 50 g | Single-serve powder or liquid | Multi-lane, easy-tear |
| Vacuum packing | Chamber / double chamber | Meat, cheese, dry goods | N2 flush optional | Single or double chamber |
| Powder filling (auger) | 20–60 fills/min | 5 g – 5 kg | Flour, milk, protein, spices | Servo auger, dust containment |
| Powder filling (net-weigh) | 15–40 fills/min | 100 g – 25 kg | Free-flow granules, seeds, beans | Load cell + feeder |
| Liquid filling (piston) | 20–60 fills/min | 50 mL – 5 L | Sauce, honey, cream, oil | Positive displacement |
| Liquid filling (flow meter) | 20–80 fills/min | 100 mL – 5 L | Thin liquids, alcohol, chemical | Electromagnetic / mass-flow |
| Liquid filling (gravity) | 30–120 fills/min | 250 mL – 2 L | Water, juice, oil (free-flow) | Low-viscosity only |
| Snack processing line | Batch or continuous | Chips, nuts, extruded | Fryer + de-oiler + seasoning tumbler + packer | Gas or electric heat |
| Conveyor & automation | Belt / roller / modular | Integration with packer | Metal detector, checkweigher, labeler | PLC + HMI, food-grade |

All ranges are configuration-dependent. SunGene confirms output and fill ranges based on the customer's product, packaging format, voltage, and layout.

## Compliance & Construction
- Certifications: CE-oriented documentation support where applicable; SUS304 or 316L stainless options for food-contact parts.
- Voltage: 110V / 220V / 380V / 480V, 50 Hz or 60 Hz, 1-phase or 3-phase — configured per order.
- Safety: emergency stops, interlocked guarding, PLC with diagnostics.
- Testing: supplier FAT/SAT and function checks where applicable, video + results delivered.
- Warranty: 1-year parts + long-term remote technical support; spare parts typically ship within 48 hours (subject to stock and destination).

## Commercial Terms
- MOQ: 1 unit. Payment: T/T 30/70 or L/C at sight. Shipping: FOB Taichung or CIF any port.
- Lead time: 30–60 days single machines, 45–90 days full lines.
- Transit: Asia 7–14 days, Middle East 14–21 days, Europe 21–30 days, Americas 25–35 days.

`

  const body = `# SunGene Co., LTD. — Full Reference

This file provides a structured overview of key pages and topics on ${SITE_URL}.

${specsTable}

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
- Sourcing assessment / selector: ${SITE_URL}/en/assessment
- Sourcing scope: ${SITE_URL}/en/machinery
- Industries & applications: ${SITE_URL}/en/industries
- Automation solutions: ${SITE_URL}/en/solutions
- Buying guides & resources: ${SITE_URL}/en/resources
- Contact / sourcing assessment: ${SITE_URL}/en/contact

## Configuration landing pages
- Pouch packing: ${SITE_URL}/en/machines/pouch-packing-machine
- Powder filling: ${SITE_URL}/en/machines/powder-filling-machine
- Liquid filling: ${SITE_URL}/en/machines/liquid-filling-machine
- Snack processing line: ${SITE_URL}/en/machines/snack-processing-line
- Conveyor systems: ${SITE_URL}/en/machines/conveyor-system

## Topic clusters (by configuration route)
${clusters}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex, follow',
    },
  })
}
