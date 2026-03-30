/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'sauce-filling'
const CATEGORY_LABEL = 'Application Guide'

const TITLE = 'Sauce Filling Machine Guide: Matching Filler Type to Viscosity and Particle Content'
const DESCRIPTION = 'Sauce filling success depends on matching piston or pump filler to viscosity and particle content. From thin soy sauce to chunky salsa, this guide covers the right solution for every sauce type.'

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
        name: 'What is the maximum hot-fill temperature SunGene supports?',
        acceptedAnswer: { '@type': 'Answer', text: 'SunGene sauce filling machines can be configured for hot-fill applications up to approximately 95°C, depending on the machine design and material selection for seals and gaskets. Specify your intended hot-fill temperature at the time of inquiry so we can confirm appropriate component specifications.' }
      },
      {
        '@type': 'Question',
        name: 'What is the maximum particle size that a chunky sauce filler can handle?',
        acceptedAnswer: { '@type': 'Answer', text: 'Particle size capacity depends on the piston filler\'s throat and valve design. Wide-throat piston fillers can handle larger solid pieces — such as vegetable chunks or meat pieces in stew-style sauces. Provide your typical particle dimensions at inquiry so we can specify the correct valve and nozzle.' }
      },
      {
        '@type': 'Question',
        name: 'What fill accuracy can I expect for 10ml sauce sachets?',
        acceptedAnswer: { '@type': 'Answer', text: 'Small-volume fills require precision-engineered fill heads and tight process control. Piston fillers using positive displacement typically offer the highest accuracy for small fills. Specific accuracy figures depend on the product and configuration — contact SunGene with your target fill volume.' }
      },
      {
        '@type': 'Question',
        name: 'Does SunGene offer clean-in-place (CIP) systems for sauce filling machines?',
        acceptedAnswer: { '@type': 'Answer', text: 'CIP compatibility can be incorporated into SunGene sauce filling machines. This requires CIP-compatible valve and seal materials and appropriate piping connections. Specify your CIP requirements at the inquiry stage so the machine can be designed accordingly.' }
      },
      {
        '@type': 'Question',
        name: 'Are sauce filling machines CE certified and food-grade?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. All SunGene liquid and sauce filling machines are CE certified to the Machinery Directive 2006/42/EC. Product-contact surfaces use SUS304 or SUS316L food-grade stainless steel with food-safe seals. A Declaration of Conformity is included with each export machine.' }
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
                Sauce filling is not a single machine category — it spans a viscosity range from water-thin soy sauce to thick, chunky pasta sauce. The right filler is determined by viscosity, particle content, fill temperature, and packaging format.
              </p>

              <h2>Sauce Categories and Recommended Fillers</h2>

              <h3>Thin Sauces (Soy Sauce, Vinegar, Fish Sauce)</h3>
              <p>
                Water-thin and low-viscosity sauces flow easily at room temperature and can be filled by gravity, overflow filler, or peristaltic pump filler. These methods provide clean, fast filling with minimal foaming for clear and translucent liquids.
              </p>
              <ul>
                <li>Soy sauce, tamari, ponzu</li>
                <li>Vinegar (rice vinegar, balsamic, white vinegar)</li>
                <li>Fish sauce, oyster sauce base (thin versions)</li>
                <li>Hot sauces (thin, without seeds)</li>
              </ul>

              <h3>Medium Sauces (BBQ Sauce, Ketchup, Teriyaki)</h3>
              <p>
                Medium viscosity sauces — thick enough to coat but still pourable — are typically filled by a rotary piston filler or lobe/gear pump filler. The choice depends on the exact viscosity and whether the sauce contains small particles or seeds.
              </p>
              <ul>
                <li>Ketchup and tomato-based sauces</li>
                <li>BBQ sauce, honey mustard, teriyaki sauce</li>
                <li>Salad dressings (thick)</li>
                <li>Chili sauce (smooth)</li>
              </ul>

              <h3>Chunky Sauces (Salsa, Pasta Sauce, Curry Paste)</h3>
              <p>
                Sauces containing solid pieces — vegetable chunks, meat pieces, bean particles, seeds — require a <strong>wide-throat piston filler</strong>. Standard pump valves and nozzles can block or shear particles; a wide-throat piston filler with appropriate valve design allows chunks to pass through cleanly.
              </p>
              <ul>
                <li>Salsa (tomato, mango, fruit salsas with chunks)</li>
                <li>Pasta sauce with vegetable or meat pieces</li>
                <li>Curry paste and curry sauce with whole spices</li>
                <li>Pesto and herb sauces</li>
              </ul>

              <h2>Filler Selection by Sauce Type</h2>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Sauce Type</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Recommended Filler</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Thin, water-like sauces</td>
                      <td className="border border-gray-200 px-4 py-2">Gravity or peristaltic pump</td>
                      <td className="border border-gray-200 px-4 py-2">Fast, clean, minimal foaming</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Medium viscosity, smooth</td>
                      <td className="border border-gray-200 px-4 py-2">Gear pump or piston filler</td>
                      <td className="border border-gray-200 px-4 py-2">Ketchup, BBQ sauce, thick dressings</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Chunky with solid pieces</td>
                      <td className="border border-gray-200 px-4 py-2">Wide-throat piston filler</td>
                      <td className="border border-gray-200 px-4 py-2">Salsa, pasta sauce — particle size to spec</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Very thick pastes (peanut butter, tahini)</td>
                      <td className="border border-gray-200 px-4 py-2">Piston filler</td>
                      <td className="border border-gray-200 px-4 py-2">Product may need warming for easier flow</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Hot-fill sauces</td>
                      <td className="border border-gray-200 px-4 py-2">Hot-fill piston or pump filler</td>
                      <td className="border border-gray-200 px-4 py-2">Heat-resistant seals required — specify temperature</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Hot Fill for Sauce Products</h2>
              <p>
                Many sauce producers use hot-fill (filling at 85–95°C) as a preservation method, allowing products to be shelf-stable without refrigeration or preservatives. SunGene supports hot-fill sauce applications with appropriate seal materials and heat-resistant product-contact components rated for your target filling temperature.
              </p>
              <p>
                Always specify your hot-fill temperature and any requirements for packaging container compatibility at the inquiry stage.
              </p>

              <h2>Packaging Formats for Sauce</h2>
              <ul>
                <li><strong>Glass jars:</strong> Premium segment — requires dedicated jar filling station with anti-drip nozzles</li>
                <li><strong>Plastic bottles:</strong> Common for ketchup, BBQ sauce — inline or rotary bottle filler</li>
                <li><strong>Premade stand-up pouches:</strong> Growing segment — flexible, lightweight, convenient</li>
                <li><strong>Sachets:</strong> Single-serve condiment packets — sachet filler with piston or pump fill head</li>
                <li><strong>Pillow bags (VFFS with liquid jaws):</strong> Economical format for food service packs</li>
              </ul>

              <h2>SunGene Sauce Filling Capabilities</h2>
              <p>
                SunGene manufactures piston fillers, pump fillers, and gravity fillers for sauce applications with <strong>SUS304 and SUS316L food-grade stainless steel</strong> wetted parts, CE certification, and voltage configurable to your local standard. Our engineering team can advise on the correct fill head, valve, and nozzle design for your specific sauce product.
              </p>
              <p>
                Explore our <a href={`/${l}/machines/liquid-filling-machine`}>liquid filling machine range</a> or <a href={`/${l}/machinery`}>browse all machinery</a>.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Get a Sauce Filling Machine Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What is the maximum hot-fill temperature SunGene supports?</h3>
              <p>SunGene sauce filling machines can be configured for hot-fill up to approximately 95°C, depending on machine design and seal material selection. Specify your intended hot-fill temperature at inquiry so we can confirm appropriate component specifications.</p>

              <h3>What is the maximum particle size that a chunky sauce filler can handle?</h3>
              <p>Particle size capacity depends on the piston filler's throat and valve design. Wide-throat piston fillers handle larger solid pieces. Provide your typical particle dimensions at inquiry so we can specify the correct valve and nozzle.</p>

              <h3>What fill accuracy can I expect for 10ml sauce sachets?</h3>
              <p>Small-volume fills require precision-engineered fill heads. Piston fillers using positive displacement typically offer the highest accuracy for small fills. <a href={`/${l}/contact`}>Contact SunGene</a> with your target fill volume for specific accuracy confirmation.</p>

              <h3>Does SunGene offer clean-in-place (CIP) systems for sauce filling machines?</h3>
              <p>CIP compatibility can be incorporated into SunGene sauce filling machines with appropriate valve and seal materials and piping connections. Specify your CIP requirements at the inquiry stage so the machine can be designed accordingly.</p>

              <h3>Are sauce filling machines CE certified and food-grade?</h3>
              <p>Yes. All SunGene sauce filling machines are CE certified to the Machinery Directive 2006/42/EC. Product-contact surfaces use SUS304 or SUS316L food-grade stainless steel with food-safe seals. A Declaration of Conformity is included with each export machine.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Find Your Sauce Filler</h3>
                <p className="mt-2 text-sm text-gray-600">Tell us your sauce viscosity, particle content, and fill volume. We'll recommend the right filler.</p>
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
                <p className="mt-2 text-sm text-gray-600">Our engineers can review your sauce specifications — viscosity, particle size, fill temperature — and recommend the correct machine configuration.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
