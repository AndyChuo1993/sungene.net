/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'auger-vs-volumetric-filler'
const CATEGORY_LABEL = 'Comparison'

const TITLE = 'Auger Filler vs Volumetric Cup Filler: Which Powder Filler Do You Need?'
const DESCRIPTION = 'Auger fillers deliver precise fills for fine powders; volumetric cup fillers offer high-speed throughput for granules and chunky products. Learn which suits your product.'

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
        name: 'Which filler type is more accurate for fine powders?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auger fillers are generally more accurate for fine powders because the rotating auger provides a consistent, controlled discharge volume. For hygroscopic or clumping powders, auger fillers with anti-bridge agitators further improve consistency.' }
      },
      {
        '@type': 'Question',
        name: 'Can an auger filler handle granules or chunky products?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auger fillers work best with fine to medium powders. For coarse granules, seeds, nuts, or large-particle products, a volumetric cup filler or multihead weigher is usually more appropriate and less likely to cause product damage.' }
      },
      {
        '@type': 'Question',
        name: 'What is the minimum and maximum fill weight for each filler type?',
        acceptedAnswer: { '@type': 'Answer', text: 'Fill range depends on the specific machine configuration. Both auger and volumetric fillers are configurable across a range of fill weights — from small single-serve sachets to larger retail bags. Contact SunGene with your target weight range for a specific recommendation.' }
      },
      {
        '@type': 'Question',
        name: 'How long does a product changeover take?',
        acceptedAnswer: { '@type': 'Answer', text: 'Changeover time depends on how many SKUs you run and the filling head design. SunGene machines are designed for tool-free or minimal-tool changeover where possible. Discuss your changeover requirements during the inquiry stage so the correct design can be specified.' }
      },
      {
        '@type': 'Question',
        name: 'Are SunGene powder fillers CE certified?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. All SunGene packaging and filling machines are CE certified to the Machinery Directive 2006/42/EC. A Declaration of Conformity is provided with every export shipment.' }
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
                Bottom line: auger fillers excel at fine powders where consistent accuracy matters most; volumetric cup fillers suit free-flowing granules and chunky products where high-speed throughput is the priority.
              </p>

              <h2>How an Auger Filler Works</h2>
              <p>
                An auger filler uses a rotating helical screw (the auger) inside a hopper to push a measured volume of powder down through a dispensing tube and into the bag or container below. The auger rotates a precise number of turns per fill cycle, delivering a highly consistent volume each time.
              </p>
              <p>Best suited for:</p>
              <ul>
                <li>Fine powders: flour, spices, protein powder, cocoa, instant coffee, powdered milk</li>
                <li>Medium powders: ground nuts, instant soup mix, detergent powder, baking soda</li>
                <li>Cohesive or hygroscopic powders (with anti-bridge agitator option)</li>
                <li>Products where fill accuracy is critical — e.g., regulated food or pharmaceutical packaging</li>
              </ul>

              <h2>How a Volumetric Cup Filler Works</h2>
              <p>
                A volumetric cup filler uses interchangeable cups of fixed volume on a rotating disc or turret. Product flows from a hopper into each cup, which is then discharged into the packaging. Speed is determined by the rotation rate of the disc.
              </p>
              <p>Best suited for:</p>
              <ul>
                <li>Free-flowing granules: sugar, rice, seeds, dried beans, salt</li>
                <li>Larger particles: nuts, pet food kibble, breakfast cereal, candy-coated items</li>
                <li>High-speed applications where per-unit accuracy tolerance is wider</li>
                <li>Products that must not be crushed by an auger</li>
              </ul>

              <h2>Side-by-Side Comparison</h2>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Factor</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Auger Filler</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Volumetric Cup Filler</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Best product type</td>
                      <td className="border border-gray-200 px-4 py-2">Fine to medium powders</td>
                      <td className="border border-gray-200 px-4 py-2">Free-flowing granules and larger particles</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Fill accuracy</td>
                      <td className="border border-gray-200 px-4 py-2">High — controlled by auger rotation</td>
                      <td className="border border-gray-200 px-4 py-2">Moderate — dependent on density consistency</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Fill weight range</td>
                      <td className="border border-gray-200 px-4 py-2">Configurable — contact for specifications</td>
                      <td className="border border-gray-200 px-4 py-2">Configurable — contact for specifications</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Output speed</td>
                      <td className="border border-gray-200 px-4 py-2">Configurable — depends on fill weight</td>
                      <td className="border border-gray-200 px-4 py-2">Generally higher — continuous rotary motion</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Handles hygroscopic products</td>
                      <td className="border border-gray-200 px-4 py-2">Yes — with agitator option</td>
                      <td className="border border-gray-200 px-4 py-2">Limited — sticky products may bridge</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Particle size sensitivity</td>
                      <td className="border border-gray-200 px-4 py-2">Fine to medium — coarse particles may jam</td>
                      <td className="border border-gray-200 px-4 py-2">Handles larger particles well</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">CIP / cleaning ease</td>
                      <td className="border border-gray-200 px-4 py-2">Good — removable auger and hopper</td>
                      <td className="border border-gray-200 px-4 py-2">Good — removable cups and disc</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Contact materials</td>
                      <td className="border border-gray-200 px-4 py-2">SUS304 / SUS316L (food-grade)</td>
                      <td className="border border-gray-200 px-4 py-2">SUS304 / SUS316L (food-grade)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Choosing the Right Filler for Your Product</h2>
              <p>
                The single most important factor is particle size and flowability. Fine powders — anything that behaves more like a liquid than a solid when poured — belong with an auger filler. Free-flowing granules and larger particles are better served by a volumetric cup system.
              </p>
              <p>
                A second consideration is accuracy tolerance. If your product is a regulated food (e.g., infant formula), a premium spice blend, or a product sold by net weight with strict labeling requirements, auger filling gives you the tightest control. For bulk commodity granules where ±2–3% variation is acceptable, volumetric cups offer higher throughput at lower per-bag cost.
              </p>
              <p>
                Both systems can be integrated with a VFFS machine or premade pouch filler. <a href={`/${l}/machines/powder-filling-machine`}>Learn more about our powder filling machines</a> or browse the <a href={`/${l}/machinery`}>full machinery catalogue</a>.
              </p>

              <h2>SunGene Material and Certification Standards</h2>
              <p>
                All SunGene powder filling equipment uses <strong>SUS304 or SUS316L stainless steel</strong> on product-contact parts — SUS316L is available for applications requiring higher corrosion resistance (e.g., acidic or salt-containing products). Machines are CE certified, factory-direct from Taiwan, with voltage fully configurable to your local standard.
              </p>
              <p>
                Our CIP-friendly designs allow for fast cleandown between product changeovers, critical in multi-SKU operations. Discuss your cleaning requirements with our engineers to ensure the correct hopper and auger specification is selected.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Tell Us Your Product — Get a Filler Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>Which filler type is more accurate for fine powders?</h3>
              <p>Auger fillers are generally more accurate for fine powders because the rotating auger provides a consistent, controlled discharge volume. For hygroscopic or clumping powders, auger fillers with anti-bridge agitators further improve consistency.</p>

              <h3>Can an auger filler handle granules or chunky products?</h3>
              <p>Auger fillers work best with fine to medium powders. For coarse granules, seeds, nuts, or large-particle products, a volumetric cup filler or multihead weigher is usually more appropriate and less likely to cause product damage.</p>

              <h3>What is the minimum and maximum fill weight for each filler type?</h3>
              <p>Fill range depends on the specific machine configuration. Both auger and volumetric fillers are configurable across a range of fill weights — from small single-serve sachets to larger retail bags. <a href={`/${l}/contact`}>Contact SunGene</a> with your target weight range for a specific recommendation.</p>

              <h3>How long does a product changeover take?</h3>
              <p>Changeover time depends on how many SKUs you run and the filling head design. SunGene machines are designed for tool-free or minimal-tool changeover where possible. Discuss your changeover requirements during the inquiry stage so the correct design can be specified.</p>

              <h3>Are SunGene powder fillers CE certified?</h3>
              <p>Yes. All SunGene packaging and filling machines are CE certified to the Machinery Directive 2006/42/EC. A Declaration of Conformity is provided with every export shipment.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Get a Filler Recommendation</h3>
                <p className="mt-2 text-sm text-gray-600">Share your product type, fill weight, and output target. We'll match you with the right filling system.</p>
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
                <h3 className="text-base font-bold text-brand-950">Talk to an Engineer</h3>
                <p className="mt-2 text-sm text-gray-600">Our team can advise on auger diameter, fill accuracy, and integration with your packaging line.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
