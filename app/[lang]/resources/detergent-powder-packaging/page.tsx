/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'detergent-powder-packaging'
const CATEGORY_LABEL = 'Application Guide'

const TITLE = 'Detergent Powder Packaging Machine Guide: Material Selection and Equipment for Chemical Powders'
const DESCRIPTION = 'Detergent powder packaging requires corrosion-resistant materials and a robust auger or net-weigher with dust extraction. This guide covers laundry detergent, dishwasher powder, and industrial cleaning powder applications.'

export const dynamic = 'force-static'
export async function generateStaticParams() {
  return ALL_LANGS.map(lang => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = ALL_LANGS.includes(lang as Lang) ? lang : 'en'
  const hreflang = Object.fromEntries(ALL_LANGS.map(lg => [
    lg === 'zh' ? 'zh-TW' : lg === 'cn' ? 'zh-CN' : lg,
    `${SITE_URL}/${lg}/resources/${SLUG}`
  ]))
  return {
    title: `${TITLE} | SunGene`,
    description: DESCRIPTION,
    alternates: {
      canonical: `${SITE_URL}/${l}/resources/${SLUG}`,
      languages: { ...hreflang, 'x-default': `${SITE_URL}/en/resources/${SLUG}` },
    },
    openGraph: {
      title: `${TITLE} | SunGene`,
      description: DESCRIPTION,
      url: `${SITE_URL}/${l}/resources/${SLUG}`,
      siteName: 'SunGene Machinery',
      images: [{ url: `${SITE_URL}/og/og.png`, width: 1200, height: 630 }],
      type: 'article',
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const l = (ALL_LANGS.includes(lang as Lang) ? lang : 'en') as Lang

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does CE certification apply to machines used for non-food chemical products?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. CE marking under the Machinery Directive 2006/42/EC applies to machinery regardless of whether the product being packaged is food or non-food. CE covers the machine\'s mechanical and electrical safety, not the product itself. All SunGene detergent powder packaging machines are CE certified.' }
      },
      {
        '@type': 'Question',
        name: 'What filling accuracy is achievable for detergent powder?',
        acceptedAnswer: { '@type': 'Answer', text: 'Fill accuracy depends on machine type, product flowability, and fill weight range. Auger fillers and net-weighers both provide good fill accuracy for detergent powder. Specific accuracy targets depend on your product characteristics and regulatory requirements — contact SunGene with your requirements.' }
      },
      {
        '@type': 'Question',
        name: 'Can the machine include an anti-caking or anti-bridging system for hygroscopic detergent powder?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. SunGene auger filler hoppers can include agitator systems designed to break up bridging and prevent caking in hygroscopic or cohesive powders like detergent. Specify your product\'s flowability and any caking tendency at the inquiry stage.' }
      },
      {
        '@type': 'Question',
        name: 'What bag material is recommended for detergent powder packaging?',
        acceptedAnswer: { '@type': 'Answer', text: 'Detergent powders are typically packaged in polyethylene (PE) bags, polypropylene (PP) woven bags for large sizes, or multi-layer laminated pouches for retail. Some detergents require a moisture-barrier layer to prevent caking in humid storage. Consult your packaging film supplier for the appropriate specification.' }
      },
      {
        '@type': 'Question',
        name: 'What output range is typical for detergent powder packaging lines?',
        acceptedAnswer: { '@type': 'Answer', text: 'Output depends on fill weight, machine configuration, and automation level. Auger-based VFFS lines handle small retail packs at configurable speeds; net-weigher and open-mouth bagger systems handle larger bulk packs. Contact SunGene with your target output and pack size range for a specific recommendation.' }
      },
    ]
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    author: { '@type': 'Organization', name: 'SunGene Machinery', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'SunGene Machinery', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo/sungene.png` } },
    url: `${SITE_URL}/${l}/resources/${SLUG}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="bg-white">
        <Container className="py-12 lg:py-16">
          <Breadcrumbs lang={l} items={[
            { label: 'Resources', href: `/${l}/resources` },
            { label: TITLE, href: `/${l}/resources/${SLUG}` },
          ]} />

          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
                {CATEGORY_LABEL}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-brand-950 sm:text-4xl">{TITLE}</h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{DESCRIPTION}</p>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_300px]">
            <article className="prose prose-gray max-w-none prose-headings:text-brand-950 prose-a:text-accent-600">

              <p className="lead font-semibold text-brand-900">
                Detergent powder packaging presents unique challenges compared to food powder applications: the product is typically hygroscopic (absorbs moisture and clumps), may contain abrasive surfactant granules, and requires robust dust management to protect both equipment and workers.
              </p>

              <h2>Products Covered</h2>
              <ul>
                <li>Laundry detergent powder (retail 500g – 5kg, bulk 10kg – 25kg)</li>
                <li>Dishwasher powder and dishwasher tablets (powdered component)</li>
                <li>Industrial cleaning powder and degreaser powder</li>
                <li>Fabric softener powder and conditioner sachet fills</li>
                <li>Multi-surface cleaning powder concentrates</li>
              </ul>

              <h2>Key Challenges in Detergent Powder Packaging</h2>

              <h3>Hygroscopicity and Caking</h3>
              <p>
                Detergent powders readily absorb moisture from the air and can cake or bridge in the hopper if not managed. The machine must include an agitator system in the hopper to continuously break up clumps and ensure consistent flow to the auger or filling spout. Enclosed hopper designs minimize exposure to ambient humidity.
              </p>

              <h3>Dust Generation and Control</h3>
              <p>
                Fine detergent dust is a respiratory hazard and can damage machine components over time if not controlled. SunGene detergent packaging machines incorporate:
              </p>
              <ul>
                <li>Enclosed filling zones with dust-tight connections</li>
                <li>Compatible dust extraction (vacuum) connection points</li>
                <li>Sealed hopper and transfer points</li>
              </ul>

              <h3>Abrasion Resistance</h3>
              <p>
                Many detergent formulations contain abrasive surfactant granules or mineral brighteners. The auger, hopper lining, and filling spout must be made from materials resistant to this abrasion. SunGene uses appropriately specified stainless steel and, where needed, wear-resistant liners.
              </p>

              <h2>Machine Selection by Pack Size</h2>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Pack Size</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Recommended Machine</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Format</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">100g – 2kg (retail)</td>
                      <td className="border border-gray-200 px-4 py-2">Auger filler + VFFS</td>
                      <td className="border border-gray-200 px-4 py-2">Stand-up doypack, pillow bag, refill sachet</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">2kg – 10kg (commercial)</td>
                      <td className="border border-gray-200 px-4 py-2">Auger filler or gross-weigher + bag filler</td>
                      <td className="border border-gray-200 px-4 py-2">Plastic or paper bag</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">10kg – 25kg (industrial)</td>
                      <td className="border border-gray-200 px-4 py-2">Net-weigher + open-mouth bagger</td>
                      <td className="border border-gray-200 px-4 py-2">PP woven bag or heavy PE bag</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Material Specifications for Detergent Applications</h2>
              <p>
                For detergent and cleaning powder applications, SunGene uses <strong>SUS304 stainless steel</strong> as the standard construction material for product-contact parts. Note that for non-food chemical applications, SUS304 is typically sufficient — the SUS316L upgrade (as used for food acids) is less commonly required for standard detergent formulations. Our engineers will confirm the appropriate material specification for your product.
              </p>
              <p>
                All machine surfaces exposed to the production environment (even non-contact parts) are finished to minimize dust accumulation and simplify cleaning.
              </p>

              <h2>Packaging Formats for Detergent Powder</h2>
              <ul>
                <li><strong>Stand-up doypack with zipper:</strong> Premium retail format — convenient for consumers; resealable to protect against moisture ingress</li>
                <li><strong>Pillow bag (VFFS):</strong> Economical retail format for smaller sizes</li>
                <li><strong>Refill sachet:</strong> Compact single-use sachet for e-commerce or travel packs</li>
                <li><strong>Cardboard box:</strong> Traditional format — requires a separate filling and box-closing line</li>
                <li><strong>PP woven bag:</strong> Heavy-duty for 10kg–25kg commercial and industrial supply</li>
              </ul>

              <h2>SunGene Detergent Powder Packaging</h2>
              <p>
                SunGene manufactures detergent powder packaging equipment with <strong>SUS304 stainless steel</strong> construction, CE certification, and dust-management design as standard. Voltage is configurable to your local standard — factory-direct from Taiwan.
              </p>
              <p>
                Our engineering team can advise on dust extraction integration, hopper agitator design, and bag format selection for your specific detergent product. Contact us before ordering to ensure the correct specification.
              </p>
              <p>
                Explore our <a href={`/${l}/machines/powder-filling-machine`}>powder filling machines</a> or <a href={`/${l}/machinery`}>browse all machinery</a>.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Get a Detergent Powder Packaging Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>Does CE certification apply to machines used for non-food chemical products?</h3>
              <p>Yes. CE marking under the Machinery Directive 2006/42/EC applies to machinery regardless of whether the product is food or non-food. CE covers the machine's mechanical and electrical safety. All SunGene detergent powder packaging machines are CE certified.</p>

              <h3>What filling accuracy is achievable for detergent powder?</h3>
              <p>Fill accuracy depends on machine type, product flowability, and fill weight range. Auger fillers and net-weighers both provide good fill accuracy. <a href={`/${l}/contact`}>Contact SunGene</a> with your specific requirements for confirmation.</p>

              <h3>Can the machine include an anti-caking or anti-bridging system?</h3>
              <p>Yes. SunGene auger filler hoppers can include agitator systems to break up bridging and prevent caking in hygroscopic or cohesive powders. Specify your product's flowability and any caking tendency at the inquiry stage.</p>

              <h3>What bag material is recommended for detergent powder packaging?</h3>
              <p>Detergent powders are typically packaged in PE bags, PP woven bags for large sizes, or multi-layer laminated pouches for retail. Some detergents require a moisture-barrier layer. Consult your film supplier for the appropriate specification.</p>

              <h3>What output range is typical for detergent powder packaging lines?</h3>
              <p>Output depends on fill weight, machine configuration, and automation level. Contact SunGene with your target output and pack size range for a specific recommendation.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Get a Detergent Line Quote</h3>
                <p className="mt-2 text-sm text-gray-600">Tell us your product, pack sizes, and output requirements. We'll recommend the right configuration.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  Get a Recommendation
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Related Machines</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={`/${l}/machines/powder-filling-machine`} className="text-accent-600 hover:underline">Powder Filling Machine</a>
                  </li>
                  <li>
                    <a href={`/${l}/machines/conveyor-system`} className="text-accent-600 hover:underline">Conveyor System</a>
                  </li>
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">View All Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Technical Enquiry</h3>
                <p className="mt-2 text-sm text-gray-600">Our engineers can advise on material specifications and dust management design for your detergent product.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
