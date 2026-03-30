/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'piston-vs-pump-filler'
const CATEGORY_LABEL = 'Comparison'

const TITLE = 'Piston Filler vs Pump Filler: Choosing the Right Liquid Filling Machine'
const DESCRIPTION = 'Piston fillers handle thick, chunky liquids with positive displacement accuracy. Pump fillers suit thin-to-medium viscosity products with continuous flow. Compare both here.'

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
        name: 'Which filler type is best for honey?',
        acceptedAnswer: { '@type': 'Answer', text: 'Honey is a thick, high-viscosity liquid that is best handled by a piston filler. The positive displacement action of a piston filler accurately meters high-viscosity products and is easy to clean between batches. Warming the product slightly can also improve flow and fill consistency.' }
      },
      {
        '@type': 'Question',
        name: 'Can a pump filler handle ketchup or thick sauces?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gear pumps and lobe pumps can handle medium-viscosity products like ketchup and barbecue sauce. For very thick or chunky sauces containing vegetable or meat particles, a piston filler with a wide-throat valve is typically the better choice to avoid shearing or blocking.' }
      },
      {
        '@type': 'Question',
        name: 'What is the minimum fill volume for liquid fillers?',
        acceptedAnswer: { '@type': 'Answer', text: 'Minimum fill volume depends on the machine configuration. Both piston and pump systems are available across a wide fill range, from small sachets to large bottles. Contact SunGene with your target fill volume range to confirm the appropriate configuration.' }
      },
      {
        '@type': 'Question',
        name: 'Are SunGene liquid fillers compatible with hot-fill applications?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. SunGene liquid filling machines can be configured for hot-fill applications. Appropriate material selection for seals, gaskets, and contact parts is essential for hot-fill — specify your filling temperature at the time of inquiry.' }
      },
      {
        '@type': 'Question',
        name: 'Are the wetted parts food-grade stainless steel?',
        acceptedAnswer: { '@type': 'Answer', text: 'All product-contact components on SunGene liquid fillers are manufactured from SUS304 or SUS316L food-grade stainless steel. Food-safe seals and gaskets are standard. CE certification covers electrical safety and mechanical safety for all export machines.' }
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
                Bottom line: piston fillers are the go-to for thick, chunky, or high-viscosity liquids; pump fillers — whether peristaltic, gear, or lobe — handle thin-to-medium viscosity products with continuous, gentle flow.
              </p>

              <h2>How a Piston Filler Works</h2>
              <p>
                A piston filler uses a cylinder-and-piston mechanism to draw in a precise volume of product and then force it out through a nozzle into the container. This positive displacement action is highly accurate and is unaffected by changes in product viscosity — which is why it performs consistently with thick sauces, pastes, and chunky products.
              </p>
              <p>Piston fillers are ideal for:</p>
              <ul>
                <li>Thick sauces: pasta sauce, salsa, curry paste, mole</li>
                <li>Jams and marmalades (including those with fruit pieces)</li>
                <li>Peanut butter, tahini, nut butters</li>
                <li>Cosmetic creams and lotions</li>
                <li>Chunky products with particles up to a configurable size</li>
                <li>Products requiring high fill accuracy regardless of viscosity</li>
              </ul>

              <h2>How a Pump Filler Works</h2>
              <p>
                Pump fillers use a pumping mechanism — peristaltic, gear, or lobe — to move product from a reservoir to the nozzle. Peristaltic pumps push product through a flexible tube using rollers, making them easy to clean and gentle on sensitive products. Gear and lobe pumps move product between rotating elements, making them suited for continuous high-speed filling.
              </p>
              <p>Pump fillers are ideal for:</p>
              <ul>
                <li>Water-thin liquids: water, juice, spirits, vinegar, soy sauce</li>
                <li>Cooking oils, dressings, and thin condiments</li>
                <li>Medium-viscosity products: BBQ sauce, liquid soap, shampoo</li>
                <li>Products where gentle handling matters (e.g., beverages with pulp)</li>
                <li>Continuous high-speed filling lines</li>
              </ul>

              <h2>Side-by-Side Comparison</h2>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Factor</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Piston Filler</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Pump Filler</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Viscosity range</td>
                      <td className="border border-gray-200 px-4 py-2">Medium to very thick</td>
                      <td className="border border-gray-200 px-4 py-2">Thin to medium</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Particle handling</td>
                      <td className="border border-gray-200 px-4 py-2">Excellent — wide-throat valve options</td>
                      <td className="border border-gray-200 px-4 py-2">Limited — small particles only</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Fill accuracy</td>
                      <td className="border border-gray-200 px-4 py-2">High — positive displacement</td>
                      <td className="border border-gray-200 px-4 py-2">Good — time-based or flow-metered</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Fill range</td>
                      <td className="border border-gray-200 px-4 py-2">Configurable — contact for specifications</td>
                      <td className="border border-gray-200 px-4 py-2">Configurable — contact for specifications</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Output speed</td>
                      <td className="border border-gray-200 px-4 py-2">Moderate to high — configurable</td>
                      <td className="border border-gray-200 px-4 py-2">High — continuous flow capable</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Cleanability</td>
                      <td className="border border-gray-200 px-4 py-2">Good — cylinder and piston removable</td>
                      <td className="border border-gray-200 px-4 py-2">Excellent (peristaltic) — tube replacement only</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Hot-fill compatible</td>
                      <td className="border border-gray-200 px-4 py-2">Yes — specify temperature at inquiry</td>
                      <td className="border border-gray-200 px-4 py-2">Depends on pump type and seals</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Contact materials</td>
                      <td className="border border-gray-200 px-4 py-2">SUS304 / SUS316L, food-safe seals</td>
                      <td className="border border-gray-200 px-4 py-2">SUS304 / SUS316L, food-safe seals</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>How to Decide</h2>
              <p>
                Start with a viscosity assessment. If your product flows easily at room temperature (water, juice, thin sauces), a pump filler is the faster, more economical choice. If your product pours slowly or contains visible chunks or fibres, a piston filler with an appropriately sized throat valve is the correct solution.
              </p>
              <p>
                For borderline viscosities — products like ketchup, barbecue sauce, or thick shampoo — both types can work. Share a sample description with our engineering team and we will confirm which configuration suits you best.
              </p>
              <p>
                Both types can be integrated with pouch fillers, bottle fillers, and jar fillers. <a href={`/${l}/machines/liquid-filling-machine`}>See our liquid filling machines</a> or <a href={`/${l}/machinery`}>browse the full machinery range</a>.
              </p>

              <h2>SunGene Liquid Filling — Taiwan Factory, Global Standards</h2>
              <p>
                SunGene manufactures liquid filling machines with <strong>SUS304 and SUS316L stainless steel</strong> wetted parts, CE certification, and voltage configurable to 220V, 380V, or 480V at 50Hz or 60Hz. We ship factory-direct from Taiwan with full documentation — including Declaration of Conformity — included as standard.
              </p>
              <p>
                Custom nozzle configurations, multi-head setups, and hot-fill specifications are available. Contact our engineers before ordering to ensure the right configuration for your product.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Get a Liquid Filler Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>Which filler type is best for honey?</h3>
              <p>Honey is a thick, high-viscosity liquid best handled by a piston filler. The positive displacement action accurately meters high-viscosity products and is easy to clean between batches. Warming the product slightly can also improve flow and fill consistency.</p>

              <h3>Can a pump filler handle ketchup or thick sauces?</h3>
              <p>Gear pumps and lobe pumps can handle medium-viscosity products like ketchup and barbecue sauce. For very thick or chunky sauces containing vegetable or meat particles, a piston filler with a wide-throat valve is typically the better choice to avoid shearing or blocking.</p>

              <h3>What is the minimum fill volume for liquid fillers?</h3>
              <p>Minimum fill volume depends on machine configuration. Both piston and pump systems are available across a wide fill range — from small sachets to large bottles. <a href={`/${l}/contact`}>Contact SunGene</a> with your target fill volume to confirm the appropriate configuration.</p>

              <h3>Are SunGene liquid fillers compatible with hot-fill applications?</h3>
              <p>Yes. SunGene liquid filling machines can be configured for hot-fill applications. Appropriate material selection for seals, gaskets, and contact parts is essential — specify your filling temperature at the time of inquiry.</p>

              <h3>Are the wetted parts food-grade stainless steel?</h3>
              <p>All product-contact components on SunGene liquid fillers are manufactured from SUS304 or SUS316L food-grade stainless steel. Food-safe seals and gaskets are standard. CE certification covers electrical and mechanical safety for all export machines.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Get a Liquid Filler Recommendation</h3>
                <p className="mt-2 text-sm text-gray-600">Tell us your product viscosity, fill volume, and packaging type. We'll match you to the right filler.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  Get a Recommendation
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Related Machines</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={`/${l}/machines/liquid-filling-machine`} className="text-accent-600 hover:underline">Liquid Filling Machine</a>
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
                <h3 className="text-base font-bold text-brand-950">Speak to an Engineer</h3>
                <p className="mt-2 text-sm text-gray-600">Our team can review your product's viscosity profile and recommend the correct fill head and nozzle design.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
