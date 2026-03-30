/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'how-to-choose-liquid-filling-machine'
const CATEGORY_LABEL = 'Selection Guide'

const TITLE = 'How to Choose a Liquid Filling Machine: Viscosity, Volume, and Packaging Type'
const DESCRIPTION = 'Identify your product viscosity, fill volume, and packaging type first — these three factors determine the correct liquid filling machine. A practical selection guide.'

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
        name: 'What filling machine is suitable for carbonated beverages?',
        acceptedAnswer: { '@type': 'Answer', text: 'Carbonated beverages require specialized counter-pressure filling to prevent CO2 loss and foaming. This is a dedicated category of filler separate from standard gravity, pump, or piston fillers. Contact SunGene to discuss carbonated beverage filling requirements.' }
      },
      {
        '@type': 'Question',
        name: 'What is the maximum temperature for hot-fill applications?',
        acceptedAnswer: { '@type': 'Answer', text: 'SunGene liquid filling machines can be configured for hot-fill applications at elevated temperatures — typically up to 95°C depending on the machine design and sealing materials used. Specify your target filling temperature at the time of inquiry so appropriate materials can be selected.' }
      },
      {
        '@type': 'Question',
        name: 'What fill accuracy can I expect from a liquid filling machine?',
        acceptedAnswer: { '@type': 'Answer', text: 'Fill accuracy depends on the filler type, product viscosity, and fill volume. Piston fillers using positive displacement typically achieve the tightest tolerances. Specific accuracy figures depend on your product — contact SunGene with your fill weight and product details for confirmation.' }
      },
      {
        '@type': 'Question',
        name: 'Can I fill both cooking oil and water on the same machine?',
        acceptedAnswer: { '@type': 'Answer', text: 'Filling both water and oil on the same machine is possible but requires thorough cleaning between products to prevent contamination. The filler must be compatible with both products\' viscosity ranges. Discuss your multi-product requirements with our engineers at the inquiry stage.' }
      },
      {
        '@type': 'Question',
        name: 'What is the minimum and maximum fill volume available?',
        acceptedAnswer: { '@type': 'Answer', text: 'Fill range varies by machine configuration. SunGene offers liquid filling solutions from small sachet fills to large container fills. Provide your minimum and maximum fill volume requirements at inquiry so we can confirm the appropriate machine configuration.' }
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
                Three questions determine almost everything about liquid filling machine selection: How viscous is your product? How large is the fill volume? What type of container or pouch are you filling? Answer these three and the right machine becomes clear.
              </p>

              <h2>The Viscosity Guide: Start Here</h2>
              <p>
                Viscosity — how thick your liquid is — is the primary machine selection driver. Here is a practical guide:
              </p>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Viscosity Range</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Example Products</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Recommended Filler</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Water-thin</td>
                      <td className="border border-gray-200 px-4 py-2">Water, juice, spirits, vinegar, soy sauce</td>
                      <td className="border border-gray-200 px-4 py-2">Gravity filler or peristaltic pump</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Low to medium</td>
                      <td className="border border-gray-200 px-4 py-2">Cooking oil, salad dressing, liquid soap, milk</td>
                      <td className="border border-gray-200 px-4 py-2">Pump filler (gear or peristaltic)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Medium to high</td>
                      <td className="border border-gray-200 px-4 py-2">Ketchup, BBQ sauce, shampoo, conditioner</td>
                      <td className="border border-gray-200 px-4 py-2">Pump filler (lobe/gear) or piston filler</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">High viscosity</td>
                      <td className="border border-gray-200 px-4 py-2">Jam, honey, peanut butter, thick cream</td>
                      <td className="border border-gray-200 px-4 py-2">Piston filler</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Very high / chunky</td>
                      <td className="border border-gray-200 px-4 py-2">Salsa, pasta sauce with chunks, stew base</td>
                      <td className="border border-gray-200 px-4 py-2">Wide-throat piston filler</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Fill Volume: Small Sachets to Large Containers</h2>
              <p>
                Fill volume affects nozzle size, fill head count, and cycle time. Key considerations:
              </p>
              <ul>
                <li><strong>Small fills (sachets, single-serve):</strong> Precision metering is critical — small volumes amplify any percentage error. Miniaturized piston or peristaltic systems are common.</li>
                <li><strong>Medium fills (bottles, pouches 100ml–1L):</strong> The widest range of filler types is available for this range — gravity, pump, and piston all work depending on viscosity.</li>
                <li><strong>Large fills (gallon jugs, 5L+ containers):</strong> Higher capacity cylinders or tanks; multi-head systems help maintain throughput on large-volume fills.</li>
              </ul>
              <p>
                Always specify your minimum and maximum fill volume — not just the most common size — so the machine can cover your full SKU range.
              </p>

              <h2>Packaging Type</h2>
              <p>
                The container or packaging format is the third major selection factor:
              </p>
              <ul>
                <li><strong>Flexible pouch / stand-up doypack:</strong> Premade pouch filler with appropriate filler head — suitable for all viscosities</li>
                <li><strong>Bottle or jar:</strong> Dedicated bottle filler — nozzle dives into container to prevent splashing</li>
                <li><strong>Sachet / pillow bag:</strong> VFFS with liquid-capable sealing jaws and appropriate filler</li>
                <li><strong>Bag-in-box:</strong> Specialized aseptic or non-aseptic bag-in-box filler</li>
                <li><strong>Tube (cosmetics, food):</strong> Tube filler — separate machine category</li>
              </ul>

              <h2>Temperature: Ambient, Hot-Fill, or Cold-Fill?</h2>
              <p>
                Most liquid products are filled at ambient temperature. Hot-fill — where the product is heated to 85–95°C before filling for preservation — requires machines with heat-resistant seals and contact materials. Cold-fill may require insulated tanks or chillers to maintain product temperature.
              </p>
              <p>
                Always specify your intended filling temperature at the inquiry stage so SunGene can confirm appropriate material choices for all product-contact components.
              </p>

              <h2>Automation Level</h2>
              <ul>
                <li><strong>Manual:</strong> Operator positions container, triggers fill — appropriate for low volume or small-batch artisan producers</li>
                <li><strong>Semi-automatic:</strong> Automated fill triggered by container detection, with manual container placement and removal</li>
                <li><strong>Fully automatic:</strong> Continuous infeed, filling, capping, labeling — high-throughput, minimal labor</li>
              </ul>
              <p>
                Explore our <a href={`/${l}/machines/liquid-filling-machine`}>liquid filling machine range</a> or <a href={`/${l}/machinery`}>browse the full machinery catalogue</a>.
              </p>

              <h2>SunGene Liquid Filling — What We Offer</h2>
              <p>
                SunGene manufactures gravity fillers, pump fillers, and piston fillers for liquid applications across a wide viscosity and volume range. All machines feature <strong>SUS304 or SUS316L stainless steel</strong> wetted parts, CE certification, and factory-direct pricing from Taiwan. Voltage is configured to your local standard — 220V, 380V, or 480V at 50Hz or 60Hz.
              </p>
              <p>
                Share your product details using our recommendation form and receive a tailored machine suggestion within one business day.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Get a Liquid Filler Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What filling machine is suitable for carbonated beverages?</h3>
              <p>Carbonated beverages require specialized counter-pressure filling to prevent CO2 loss and foaming. This is a dedicated category separate from standard gravity, pump, or piston fillers. <a href={`/${l}/contact`}>Contact SunGene</a> to discuss carbonated beverage filling requirements.</p>

              <h3>What is the maximum temperature for hot-fill applications?</h3>
              <p>SunGene liquid filling machines can be configured for hot-fill applications — typically up to 95°C depending on machine design and sealing materials used. Specify your target filling temperature at inquiry so appropriate materials can be selected.</p>

              <h3>What fill accuracy can I expect from a liquid filling machine?</h3>
              <p>Fill accuracy depends on filler type, product viscosity, and fill volume. Piston fillers using positive displacement typically achieve the tightest tolerances. Contact SunGene with your fill weight and product details for specific accuracy confirmation.</p>

              <h3>Can I fill both cooking oil and water on the same machine?</h3>
              <p>Filling both water and oil on the same machine is possible but requires thorough cleaning between products. The filler must be compatible with both viscosity ranges. Discuss your multi-product requirements with our engineers at inquiry stage.</p>

              <h3>What is the minimum and maximum fill volume available?</h3>
              <p>Fill range varies by machine configuration. SunGene offers liquid filling solutions from small sachet fills to large container fills. Provide your minimum and maximum fill volume requirements at inquiry so we can confirm the appropriate machine configuration.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Find Your Liquid Filler</h3>
                <p className="mt-2 text-sm text-gray-600">Share your product viscosity, fill volume, and packaging type. We'll match you to the right machine.</p>
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
                <h3 className="text-base font-bold text-brand-950">Talk to an Engineer</h3>
                <p className="mt-2 text-sm text-gray-600">Not sure which filler fits your product? Our engineers can advise based on your product profile.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
