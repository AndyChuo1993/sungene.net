/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'how-to-choose-powder-filling-machine'
const CATEGORY_LABEL = 'Selection Guide'

const TITLE = 'How to Choose a Powder Filling Machine: A Step-by-Step Selection Guide'
const DESCRIPTION = 'Match filler type to powder flowability and target output — auger for fine powders, volumetric for free-flowing granules. Follow this 5-step selection process.'

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
        name: 'What machine fills hygroscopic powders like salt or sugar without clumping?',
        acceptedAnswer: { '@type': 'Answer', text: 'For hygroscopic powders, an auger filler with a hopper agitator and dust-tight sealing is the standard solution. Maintaining a controlled environment (low humidity around the fill zone) and using moisture-barrier packaging films also helps prevent caking.' }
      },
      {
        '@type': 'Question',
        name: 'Should I specify SUS304 or SUS316L stainless steel for food powder applications?',
        acceptedAnswer: { '@type': 'Answer', text: 'SUS304 is the standard food-grade specification and is suitable for most dry powder applications. SUS316L is recommended for products with higher salt or acid content, as it offers better corrosion resistance. SunGene can supply either grade — specify your product at inquiry.' }
      },
      {
        '@type': 'Question',
        name: 'Can I adjust the fill weight on the machine without changing parts?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most auger and volumetric filling systems allow fill weight adjustment via the control panel — either by changing auger rotation cycles or by selecting a different cup volume. Minor fine-tuning is done electronically; large range changes may require a different auger or cup size.' }
      },
      {
        '@type': 'Question',
        name: 'What output speed can I expect from a powder filling machine?',
        acceptedAnswer: { '@type': 'Answer', text: 'Output speed is configurable and depends on fill weight, product characteristics, and the packaging format used. Share your target bags-per-minute or kilograms-per-hour with our engineering team and we will recommend the appropriate configuration.' }
      },
      {
        '@type': 'Question',
        name: 'Do I need CE certification for powder machines exported to the EU?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. CE marking is mandatory for machinery sold or operated in the EU/EEA. All SunGene powder filling machines are CE certified to the Machinery Directive 2006/42/EC, with a Declaration of Conformity issued for each machine.' }
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
                The right powder filling machine starts with understanding your product — its flowability, particle size, and density — then working backwards to the machine type, packaging format, and automation level that fits your operation.
              </p>

              <h2>Step 1: Define Your Product</h2>
              <p>
                Before looking at any machine specifications, gather the following information about your powder:
              </p>
              <ul>
                <li><strong>Flowability:</strong> Does the powder flow like water when poured (e.g., salt, granulated sugar), or does it clump and bridge (e.g., cocoa, instant coffee)?</li>
                <li><strong>Particle size:</strong> Fine powder (flour, spices), medium granule (sugar, instant soup), or coarse granule (rice, seeds)?</li>
                <li><strong>Bulk density:</strong> A dense product like salt fills very differently from a light, aerated product like protein powder at the same weight.</li>
                <li><strong>Hygroscopicity:</strong> Does the product absorb moisture and clump? This affects hopper design and sealing requirements.</li>
                <li><strong>Abrasiveness:</strong> Highly abrasive powders (e.g., calcium carbonate, some mineral products) affect auger and hopper material choices.</li>
              </ul>

              <h2>Step 2: Define Your Output Requirements</h2>
              <ul>
                <li><strong>Target fill weight:</strong> What weight range do you need to fill — e.g., 50g sachets, 500g retail bags, 5kg catering packs?</li>
                <li><strong>Fill accuracy:</strong> Is your product regulated (e.g., labeled net weight) or sold by bulk? Tighter accuracy requirements push toward auger filling.</li>
                <li><strong>Output rate:</strong> How many bags per minute, or kilograms per hour, is your target? This determines whether a single-head or multi-head system is needed.</li>
                <li><strong>Number of SKUs:</strong> Running multiple sizes or products means you need changeover flexibility — important for machine and filler design.</li>
              </ul>

              <h2>Step 3: Choose Your Packaging Format</h2>
              <p>
                Packaging format significantly affects machine selection:
              </p>
              <ul>
                <li><strong>Pillow bag / gusseted pouch:</strong> VFFS machine with auger or volumetric filler — most common for retail powder packaging</li>
                <li><strong>Premade stand-up doypack:</strong> Premade pouch filler with auger filler integrated — premium shelf presence</li>
                <li><strong>Rigid can or jar:</strong> Dedicated can/jar filling line — different machine type</li>
                <li><strong>Stick pack or sachet:</strong> Stick pack machine or sachet filler with miniaturized auger</li>
                <li><strong>Open-mouth bag (large sizes):</strong> Net-weigher or gross-weigher plus open-mouth bagger — for 1kg to 25kg bags</li>
              </ul>

              <h2>Step 4: Choose Automation Level</h2>
              <p>
                Automation level is a balance between production volume, labor cost, and capital budget:
              </p>
              <ul>
                <li><strong>Manual:</strong> Operator places bags and triggers fill cycle — suitable for very low volume or highly customized products</li>
                <li><strong>Semi-automatic:</strong> Automated filling with manual bag placement — common for medium-scale operations and multiple SKUs</li>
                <li><strong>Fully automatic:</strong> Film unwind, forming, filling, sealing, and discharge all automated — highest throughput, lowest per-unit labor cost</li>
              </ul>

              <h2>Step 5: Check Voltage and Certification Requirements</h2>
              <p>
                Confirm your facility's voltage standard before ordering — and check what certifications are required in your target market:
              </p>
              <ul>
                <li><strong>Voltage:</strong> 220V single-phase, 380V three-phase, 480V three-phase — all configurable at SunGene; specify your local standard</li>
                <li><strong>CE:</strong> Required for EU/EEA market. All SunGene machines are CE certified as standard for export.</li>
                <li><strong>Other certifications:</strong> Contact us if your market requires additional documentation</li>
              </ul>

              <h2>Product Type → Recommended Filler</h2>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Product Type</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Recommended Filler</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Flour, cocoa, protein powder</td>
                      <td className="border border-gray-200 px-4 py-2">Auger filler</td>
                      <td className="border border-gray-200 px-4 py-2">Fine powder — needs accurate metering</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Spices, coffee, instant soup mix</td>
                      <td className="border border-gray-200 px-4 py-2">Auger filler</td>
                      <td className="border border-gray-200 px-4 py-2">Often hygroscopic — dust-tight design important</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Granulated sugar, salt, rice</td>
                      <td className="border border-gray-200 px-4 py-2">Volumetric cup filler</td>
                      <td className="border border-gray-200 px-4 py-2">Free-flowing — high speed possible</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Seeds, nuts, pet food</td>
                      <td className="border border-gray-200 px-4 py-2">Volumetric cup or multihead weigher</td>
                      <td className="border border-gray-200 px-4 py-2">Particle size requires cup or weigher — auger not suitable</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Detergent powder, industrial powder</td>
                      <td className="border border-gray-200 px-4 py-2">Auger filler or net-weigher</td>
                      <td className="border border-gray-200 px-4 py-2">Corrosion-resistant materials; dust extraction required</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Large bag (1kg–25kg)</td>
                      <td className="border border-gray-200 px-4 py-2">Net-weigher + open-mouth bagger</td>
                      <td className="border border-gray-200 px-4 py-2">Gross or net weight batching systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>SunGene Powder Filling Machines</h2>
              <p>
                SunGene manufactures a complete range of powder filling equipment — from single-head auger fillers for fine powders to multihead weighers for granule and snack applications. All machines use <strong>SUS304 or SUS316L food-grade stainless steel</strong> on product-contact surfaces, are CE certified, and ship factory-direct from Taiwan with voltage configured to your specification.
              </p>
              <p>
                Explore our <a href={`/${l}/machines/powder-filling-machine`}>powder filling machine range</a> or <a href={`/${l}/machinery`}>browse all machinery</a>. Ready to find the right system for your product?
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Get a Powder Filler Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What machine fills hygroscopic powders like salt or sugar without clumping?</h3>
              <p>For hygroscopic powders, an auger filler with a hopper agitator and dust-tight sealing is the standard solution. Maintaining a controlled environment around the fill zone and using moisture-barrier packaging films also helps prevent caking.</p>

              <h3>Should I specify SUS304 or SUS316L stainless steel for food powder applications?</h3>
              <p>SUS304 is the standard food-grade specification suitable for most dry powder applications. SUS316L is recommended for products with higher salt or acid content. SunGene can supply either grade — specify your product at inquiry.</p>

              <h3>Can I adjust the fill weight on the machine without changing parts?</h3>
              <p>Yes. Most auger and volumetric filling systems allow fill weight adjustment via the control panel — either by changing auger rotation cycles or selecting a different cup volume. Large range changes may require a different auger or cup size.</p>

              <h3>What output speed can I expect from a powder filling machine?</h3>
              <p>Output speed is configurable and depends on fill weight, product characteristics, and packaging format. Share your target bags-per-minute or kg-per-hour with our engineering team and we will recommend the appropriate configuration.</p>

              <h3>Do I need CE certification for powder machines exported to the EU?</h3>
              <p>Yes. CE marking is mandatory for machinery sold or operated in the EU/EEA. All SunGene powder filling machines are CE certified to the Machinery Directive 2006/42/EC, with a Declaration of Conformity issued for each machine.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Find Your Powder Filler</h3>
                <p className="mt-2 text-sm text-gray-600">Tell us about your product, fill weight, and output goal. We'll recommend the right machine configuration.</p>
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
                    <a href={`/${l}/machines/pouch-packing-machine`} className="text-accent-600 hover:underline">Pouch Packing Machine</a>
                  </li>
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">View All Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Need a Second Opinion?</h3>
                <p className="mt-2 text-sm text-gray-600">Our engineers have matched hundreds of powder products to the right filler. Send us your product details.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
