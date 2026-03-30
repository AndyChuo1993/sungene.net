/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'sauce-filling-machine-selection'
const CATEGORY = 'application_guide'
const CATEGORY_LABEL = 'Application Guide'

const TITLE = 'How to Match a Sauce Filling Machine to Your Product'
const META_TITLE = 'Sauce Filling Machine Guide | Match Filling Technology to Viscosity | SunGene'
const DESCRIPTION = 'Compare piston, pump, and other sauce filling methods based on viscosity, particulates, container type, and target output.'

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
    title: META_TITLE,
    description: DESCRIPTION,
    alternates: {
      canonical: `${SITE_URL}/${l}/resources/${SLUG}`,
      languages: { ...hreflang, 'x-default': `${SITE_URL}/en/resources/${SLUG}` },
    },
    openGraph: {
      title: META_TITLE,
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
        name: 'What filling machine is best for ketchup or chili sauce?',
        acceptedAnswer: { '@type': 'Answer', text: 'A piston filler is the standard choice for thick sauces like ketchup and chili paste. For chunky chili sauce with visible particulates, a wide-throat piston design with large-bore nozzles is required to pass particles without damage.' }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between piston and pump fillers?',
        acceptedAnswer: { '@type': 'Answer', text: 'A piston filler uses positive displacement — a measured cylinder stroke delivers a precise volume per fill cycle. It handles thick, chunky, or high-viscosity products well. A pump filler uses continuous flow — better for thin to medium viscosity products like soy sauce, dressings, and marinades where flow-based measurement is acceptable.' }
      },
      {
        '@type': 'Question',
        name: 'Can one machine handle sauces with particulates?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, with the right design. A wide-throat piston filler with large-bore nozzles and an appropriately sized valve can pass particulates including seeds, vegetable flakes, and chili pieces. Particulate size and concentration affect nozzle diameter and valve design — share product samples or size data before specifying.' }
      },
      {
        '@type': 'Question',
        name: 'What containers can a sauce filling machine support?',
        acceptedAnswer: { '@type': 'Answer', text: 'SunGene sauce filling machines can be configured for glass bottles, PET bottles, jars, stand-up pouches, cups, and sachets. Container type affects the filling head design, conveyor system, and capping configuration. Share your full container range at inquiry stage.' }
      },
      {
        '@type': 'Question',
        name: 'What should I send before asking for a quotation?',
        acceptedAnswer: { '@type': 'Answer', text: 'Provide: sauce type and approximate viscosity (thin / medium / thick / chunky), particulate content and maximum particle size, container type and fill volume, target output (containers per hour), and destination country plus local voltage.' }
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

          {/* Article header */}
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
            {/* Article body */}
            <article className="prose prose-gray max-w-none prose-headings:text-brand-950 prose-a:text-accent-600">

              <p className="lead font-semibold text-brand-900">
                Bottom line: the right sauce filling machine is determined by three factors — viscosity, particulate content, and container type. Match these first; then optimize for output and automation level.
              </p>

              <h2>Sauce Viscosity Spectrum and Machine Recommendations</h2>
              <div className="not-prose overflow-x-auto">
                <table className="w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Viscosity Level</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Example Products</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Recommended Filling Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Thin (water-like)</td>
                      <td className="border border-gray-200 px-4 py-2">Soy sauce, vinegar, juice, brine</td>
                      <td className="border border-gray-200 px-4 py-2">Gravity filler, flow meter, peristaltic pump</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Medium</td>
                      <td className="border border-gray-200 px-4 py-2">BBQ sauce, salad dressing, marinade</td>
                      <td className="border border-gray-200 px-4 py-2">Rotary pump filler or piston filler</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Thick</td>
                      <td className="border border-gray-200 px-4 py-2">Ketchup, tomato paste, chili paste</td>
                      <td className="border border-gray-200 px-4 py-2">Piston filler</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Chunky</td>
                      <td className="border border-gray-200 px-4 py-2">Salsa, pasta sauce, sambal with pieces</td>
                      <td className="border border-gray-200 px-4 py-2">Wide-throat piston filler</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                For more detail on piston vs pump filling technology, see our comparison guide: <a href={`/${l}/resources/piston-vs-pump-filler`}>Piston vs Pump Filler</a>.
              </p>

              <h2>Particulates: The Factor Many Buyers Overlook</h2>
              <p>
                Chunky sauces with seeds, vegetable pieces, chili flakes, or herb fragments require careful machine design. Three things affect the specification:
              </p>
              <ul>
                <li><strong>Particulate size:</strong> The nozzle diameter must be at least 3–4× the maximum particle size to prevent blockages.</li>
                <li><strong>Particulate concentration:</strong> High-concentration chunky sauces may need a higher-volume cylinder stroke per fill cycle and a wider valve opening.</li>
                <li><strong>Particle fragility:</strong> If particles must remain visually intact (visible vegetable pieces, chili rings), the valve actuation speed and nozzle design must prevent shear damage.</li>
              </ul>
              <p>
                Providing a product sample before machine specification is strongly recommended for chunky sauce products.
              </p>

              <h2>Container Types and Machine Compatibility</h2>
              <p>
                Container type determines the overall machine architecture, not just the filling head:
              </p>
              <ul>
                <li><strong>Glass bottles and PET bottles:</strong> Standard bottle-filling configuration with conveyor and neck guide; cap type (screw, snap, pump) determines capping station design.</li>
                <li><strong>Glass jars (wide-mouth):</strong> Wide-mouth filling with piston; compatible with chunky sauces.</li>
                <li><strong>Stand-up pouches:</strong> Requires a pouch filler or premade pouch machine with a pump or piston dosing head.</li>
                <li><strong>Cups and trays:</strong> Cup-filling and sealing line; common for single-serve portions.</li>
                <li><strong>Sachets:</strong> Small sachet filler with peristaltic or piston dosing.</li>
              </ul>

              <h2>Hot Fill Capability</h2>
              <p>
                Many sauce products — ketchup, chili paste, BBQ sauce — are filled at elevated temperatures to achieve pasteurization and extended shelf life without preservatives. SunGene supports hot-fill applications up to 95°C. Hot-fill configuration affects material selection, pump type, valve design, and seal compatibility. Confirm fill temperature at inquiry stage.
              </p>

              <h2>Hygiene and Clean-in-Place Design</h2>
              <p>
                Sauce filling machines require thorough daily cleaning, especially for products with high sugar, protein, or oil content. SunGene sauce fillers are built with:
              </p>
              <ul>
                <li>SUS304 or SUS316L product-contact surfaces as standard</li>
                <li>Food-safe seals and gaskets (FDA-grade where required)</li>
                <li>Smooth internal surfaces and minimal dead zones to prevent product residue buildup</li>
                <li>CIP-friendly design with easy-access nozzle disassembly for manual cleaning</li>
              </ul>

              <h2>Filling Technology Comparison</h2>
              <div className="not-prose overflow-x-auto">
                <table className="w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Factor</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Gravity / Flow Meter</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Pump Filler</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Piston Filler</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Viscosity range</td>
                      <td className="border border-gray-200 px-4 py-2">Thin only</td>
                      <td className="border border-gray-200 px-4 py-2">Thin to medium</td>
                      <td className="border border-gray-200 px-4 py-2">Medium to thick/chunky</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Particulates</td>
                      <td className="border border-gray-200 px-4 py-2">Not suitable</td>
                      <td className="border border-gray-200 px-4 py-2">Small particles only</td>
                      <td className="border border-gray-200 px-4 py-2">Yes (wide-throat design)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Accuracy</td>
                      <td className="border border-gray-200 px-4 py-2">Good for thin</td>
                      <td className="border border-gray-200 px-4 py-2">Good</td>
                      <td className="border border-gray-200 px-4 py-2">High (positive displacement)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Cleaning</td>
                      <td className="border border-gray-200 px-4 py-2">Simple</td>
                      <td className="border border-gray-200 px-4 py-2">Moderate</td>
                      <td className="border border-gray-200 px-4 py-2">More involved for chunky</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Hot fill</td>
                      <td className="border border-gray-200 px-4 py-2">Yes</td>
                      <td className="border border-gray-200 px-4 py-2">Configurable</td>
                      <td className="border border-gray-200 px-4 py-2">Yes (with correct material)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Describe your sauce product and container — we'll recommend the right filling setup.
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What filling machine is best for ketchup or chili sauce?</h3>
              <p>A piston filler is standard for thick sauces like ketchup and chili paste. Chunky versions with visible particulates need a wide-throat piston design with large-bore nozzles. <a href={`/${l}/machines/liquid-filling-machine`}>See our liquid filling machine range</a> for available configurations.</p>

              <h3>What is the difference between piston and pump fillers?</h3>
              <p>Piston fillers use positive displacement for precise volume per stroke — ideal for thick and chunky products. Pump fillers use continuous flow and suit thin-to-medium viscosity products. <a href={`/${l}/recommend`}>Use our recommendation form</a> to get a match for your sauce.</p>

              <h3>Can one machine handle sauces with particulates?</h3>
              <p>Yes, with the right design. A wide-throat piston filler handles seeds, vegetable pieces, and chili flakes. Particulate size and concentration affect nozzle and valve design — share samples before specification.</p>

              <h3>What containers can a sauce filling machine support?</h3>
              <p>Glass bottles, PET bottles, jars, stand-up pouches, cups, and sachets — each requires a different machine configuration. Share your full container range at inquiry stage. <a href={`/${l}/machinery`}>Browse our machinery range</a> for an overview.</p>

              <h3>What should I send before asking for a quotation?</h3>
              <p>Sauce type, approximate viscosity, particulate content and max particle size, container type, fill volume, output target (containers/hour), and destination country plus voltage. <a href={`/${l}/contact`}>Contact us</a> with these details to receive a meaningful recommendation.</p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Not sure which filler?</h3>
                <p className="mt-2 text-sm text-gray-600">Describe your sauce viscosity, particulates, and container type. We'll match you with the right filling technology.</p>
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
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">View All Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Speak to an Engineer</h3>
                <p className="mt-2 text-sm text-gray-600">Our technical team can advise on viscosity testing, nozzle design, and hot-fill compatibility for your sauce products.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
