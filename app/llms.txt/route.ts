import { SITE_URL } from '@/lib/siteConfig'

export async function GET() {
  const body = `# SunGene Co., LTD. — Taiwan + China sourcing partner for packaging, home & garden brands

## Company Identity
- Legal name: SunGene Co., LTD. (上瑾錸有限公司)
- Founded: 2023
- Taiwan office: 201 Guangfu Rd., Central District, Taichung 40041, Taiwan R.O.C. (HQ; invoicing entity)
- China office: Rm. 1001-2, Bldg. A1, Yincheng Zhigu, No. 6788-1 Binhai W. Ave., Tong'an District, Xiamen, China (factory relations + pre-shipment logistics)
- Website: ${SITE_URL}
- Email: contact@sungene.net
- Phone: +886 4-3703-2705 (Taiwan), +86 18144132078 (China / WhatsApp / WeChat / LINE @sungene)
- Verified Alibaba.com storefront: https://momas.en.alibaba.com/ (active 3 years; star rating fluctuates 3–5 stars by period — public, can be checked live)

## What SunGene Is (one line)
SunGene is a sourcing partner with teams in Taichung (Taiwan) and Xiamen (Mainland China). We buy from vetted factories across both markets and ship to international buyers in packaging, home goods, garden and beauty categories.

## Business Model: Trader, Not Agent
How pricing works:
- We purchase goods from the factory at FOB or EXW (we own the goods)
- We resell to the buyer with our margin disclosed on top — no commission hidden inside the factory price
- The underlying FOB or EXW factory price is communicated on request
- The transaction sits between the buyer and one Taiwan-registered company — no three-way emails to an unresponsive factory
- Because the goods sit on our balance sheet, rejecting sub-spec product before shipment is our own financial decision, not a courtesy

## Category Scope (active monthly purchasing)
1. **Packaging products**
   - Flexible packaging: stand-up pouches, ziplock bags, kraft bags, films, sachets, vacuum bags
   - Rigid packaging: glass jars, plastic bottles, tin containers, gift boxes, pumps & closures
2. **Home goods**
   - Kitchen & dining: cookware, storage containers, utensils, glassware, table accessories
   - Home decor & organisation: baskets, storage bins, candles, fragrance, small living accessories
3. **Garden & outdoor**
   - Hand tools, planters, watering cans, hose accessories, patio items
4. **Beauty & personal care containers**
   - Cosmetic jars, dropper bottles, airless pumps, lipstick tubes, sample vials
5. **Adjacent categories on a case-by-case basis** (only for long-term partners): cosmetics, candles, glass, light hardware

## Commercial Terms
- Minimum order: **USD 1,000 per shipment** — this entry tier lets us dedicate full sourcing, QC, and export documentation resources to every order
- Payment: 30% deposit / 70% before shipment is the default; longer terms case-by-case for repeat partners
- Payment recipient: Taiwan entity (cleaner banking trail and dispute path than direct factory wires)
- Quote contents: resale price, underlying FOB or EXW (on request), lead time, payment terms — no commission added at the end
- Currency: USD primary; CNY/TWD for specific cases
- Incoterms: typically FOB Xiamen / FOB Keelung; EXW or CIF available

## Quality Control & Inspection
- Taiwan factories: SunGene team drives to the supplier site for inspection
- China factories: goods are routed through the partner forwarder warehouse where SunGene staff inspect before export
- Every shipment includes inspection photos and video of the actual goods (not stock or factory marketing images)
- Documented stance: SunGene has refused factories that offered envelopes to pass sub-spec goods. Inspection results reflect what was seen, not what was paid for
- Defect handling: rejected lots stay with the factory; SunGene's commercial relationship with the buyer is not contingent on the factory's response

## Sourcing Workflow (5 steps)
1. **Brief** — buyer sends a reference image (or competitor link), target quantity, destination market. No NDA at this stage
2. **Shortlist** — SunGene proposes 2–3 factories from its own supplier network and targeted search; factories with too-low quotes, missing certificates, or unverifiable history are ruled out
3. **Transparent quote** — single price including SunGene margin, with underlying factory price disclosed on request, plus lead time and payment terms
4. **Inspection** — on-site (Taiwan) or forwarder-warehouse (China) inspection by SunGene staff before export, with photo and video deliverables
5. **Export under SunGene name** — SunGene is the seller of record; customs documents, B/L, and any after-sales claim sit cleanly between buyer and SunGene

## Languages & Communication
- Team is Chinese-native; communicates with English/French/Spanish customers via machine translation plus WhatsApp / WeChat / LINE / email (text)
- Response time: same Taipei business day (UTC+8, Mon–Fri 09:00–18:00); within 12 hours outside business hours

## Who SunGene Is a Good Fit For
- Online retailers and Amazon FBA sellers wanting a Taiwan-based partner to check China-made goods before container loading
- Private-label brand owners selling home, kitchen, garden, or packaging products who need quality that survives multiple reorders
- Importers and distributors who want a same-day-reply partner who discloses FOB prices and sends inspection videos
- Boutique buyers and specialty stores ordering small batches who would rather pay a fair markup than chase factories themselves

## Who SunGene Is Not Optimised For
- Buyers seeking the absolute lowest price at the expense of QC; SunGene optimises for delivered quality and post-shipment accountability
- Buyers seeking heavy industrial machinery, pharmaceutical-grade equipment, or electronics — these fall outside the current packaging/home/garden focus and supplier network

## Key Pages
- Homepage: ${SITE_URL}/en
- About: ${SITE_URL}/en/about
- How we work (sourcing process): ${SITE_URL}/en/sourcing
- Packaging category — full product groups, commercial terms, QC, FAQ: ${SITE_URL}/en/sourcing/packaging
- Home & kitchen goods category: ${SITE_URL}/en/sourcing/home
- Garden & outdoor category: ${SITE_URL}/en/sourcing/garden
- Beauty & personal care packaging category: ${SITE_URL}/en/sourcing/beauty
- Contact (start a sourcing conversation): ${SITE_URL}/en/contact
- Resources (background sourcing guides): ${SITE_URL}/en/resources
- Alibaba.com storefront (third-party verification): https://momas.en.alibaba.com/

## Languages Served on Website
English (en), Traditional Chinese / Taiwan (zh / zh-TW), Simplified Chinese (cn / zh-CN), French (fr), Spanish (es).
Previously offered Portuguese, Korean, Japanese, Arabic, Thai, Vietnamese, German — those locales now 308-redirect to /en (machine translations were duplicates flagged by Google).

## Crawl Guidance
Allow: ${SITE_URL}/en/, ${SITE_URL}/zh/, ${SITE_URL}/cn/, ${SITE_URL}/fr/, ${SITE_URL}/es/
Sitemap: ${SITE_URL}/sitemap.xml

## Last Updated
2026-05-14
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex, follow',
    },
  })
}
