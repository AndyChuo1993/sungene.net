/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'protein-powder-filling-machine'
const CATEGORY = 'application_guide'
const CATEGORY_LABEL = 'Application Guide'

const TITLE = 'Protein Powder Filling Machine Selection Guide'
const META_TITLE = 'Protein Powder Filling Machine | Accuracy, Hygiene, and Packaging Guide | SunGene'
const DESCRIPTION = 'Protein powder filling requires accurate dosing, hygienic design, and the right packaging format. Learn how to choose the right machine setup.'

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
        name: 'What machine is best for protein powder filling?',
        acceptedAnswer: { '@type': 'Answer', text: 'An auger filler matched to your packaging format is the standard choice. For pouches and sachets, pair with a VFFS or premade pouch machine. For rigid containers like tubs and jars, use a rotary table filler with an auger dosing head. For stick packs, use a dedicated stick pack machine.' }
      },
      {
        '@type': 'Question',
        name: 'Is auger filling suitable for protein powder?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Auger filling is the standard method for protein powder. Fine powders benefit particularly from a slow-feed auger with accurate dosing control, which reduces dusting and maintains fill consistency across flavors and formulations.' }
      },
      {
        '@type': 'Question',
        name: 'Can the same machine fill both pouches and jars?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pouches and rigid containers like jars or tubs follow different machine paths. A VFFS or premade pouch filler is designed for flexible packaging; a rotary table filler is designed for rigid containers. Discuss your full SKU range with our team to understand what is technically and economically feasible.' }
      },
      {
        '@type': 'Question',
        name: 'What hygiene level is recommended for protein powder filling?',
        acceptedAnswer: { '@type': 'Answer', text: 'SUS304 stainless steel is the minimum standard for food-contact surfaces. For nutraceutical-grade protein products with stricter compliance requirements, SUS316L provides better corrosion resistance and is preferred for cleaning with stronger sanitizers.' }
      },
      {
        '@type': 'Question',
        name: 'What filling accuracy can I expect for protein powder?',
        acceptedAnswer: { '@type': 'Answer', text: 'Typically ±0.3–1% depending on fill weight and powder characteristics. Larger fill weights (1kg+) can achieve tighter tolerances. Discuss your net weight requirement and acceptable tolerance range with our engineers at the time of inquiry.' }
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
                Bottom line: protein powder filling is defined by accuracy, hygiene level, and packaging format — not machine brand or model number. Get these three right and the rest follows.
              </p>

              <h2>Why Protein Powder Is Different From Other Powders</h2>
              <p>
                Protein powder is a high-value consumer product where machine selection has direct commercial consequences:
              </p>
              <ul>
                <li><strong>Net weight accuracy matters for cost control:</strong> Over-fill on a 1kg container at $20/kg across 100,000 units represents a significant revenue leakage.</li>
                <li><strong>Hygroscopicity:</strong> Most protein powders absorb moisture, which affects flow characteristics, clumping, and shelf life. This influences hopper design and filling speed.</li>
                <li><strong>Fine particle size:</strong> Whey isolate and similar fine-particle proteins require careful auger pitch selection and dust control.</li>
                <li><strong>Food and nutraceutical grade compliance:</strong> Depending on your market, food-grade or nutraceutical-grade material standards may be required for all product-contact surfaces.</li>
                <li><strong>Multiple flavors / SKUs:</strong> Most protein powder brands run 5–20+ SKUs. Changeover speed, CIP accessibility, and cross-contamination prevention are all relevant design factors.</li>
              </ul>

              <h2>Packaging Formats and Their Machine Paths</h2>

              <h3>Stand-Up Pouches and Sachets</h3>
              <p>
                Stand-up doypacks and zipper pouches are the most common retail format for mid-range protein powder products. The machine path is a premade pouch filler with an auger dosing head, or a VFFS machine for pillow bags and gusseted formats. Fill weight range: 25g sachets to 1kg pouches.
              </p>

              <h3>Rigid Containers (Tubs and Jars)</h3>
              <p>
                Protein powder in plastic tubs or jars (500g–5kg) uses a rotary table filler or inline filling station with an auger dosing head above the container. The container is conveyed under the fill nozzle, filled, then moves to capping and labeling. This is a different machine architecture from pouch filling.
              </p>

              <h3>Stick Packs</h3>
              <p>
                Single-serve protein stick packs (20–40g) use a dedicated stick pack machine with a multi-lane auger dosing system. Output per lane is lower than VFFS, but the product presentation is compact and premium — suited for OEM supply, convenience, and travel formats.
              </p>

              <h2>Selection Criteria Summary</h2>
              <div className="not-prose overflow-x-auto">
                <table className="w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Criteria</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Typical Range</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Fill weight range</td>
                      <td className="border border-gray-200 px-4 py-2">25g–5kg</td>
                      <td className="border border-gray-200 px-4 py-2">Confirm your full SKU range</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Filling accuracy</td>
                      <td className="border border-gray-200 px-4 py-2">±0.3–1%</td>
                      <td className="border border-gray-200 px-4 py-2">Depends on fill weight and powder</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Contact material</td>
                      <td className="border border-gray-200 px-4 py-2">SUS304 / SUS316L</td>
                      <td className="border border-gray-200 px-4 py-2">316L for nutraceutical compliance</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Changeover</td>
                      <td className="border border-gray-200 px-4 py-2">Multiple SKUs common</td>
                      <td className="border border-gray-200 px-4 py-2">Tool-free cleaning access recommended</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Packaging format</td>
                      <td className="border border-gray-200 px-4 py-2">Pouch, sachet, tub, stick pack</td>
                      <td className="border border-gray-200 px-4 py-2">Different machine paths per format</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Common Mistakes When Specifying a Protein Powder Filler</h2>
              <ul>
                <li><strong>Focusing only on output speed:</strong> Speed matters, but for protein powder the fill accuracy and hygiene design usually have higher commercial impact than an extra 10 bags/min.</li>
                <li><strong>Ignoring cleaning requirements:</strong> A machine that's difficult to clean between flavors will create cross-contamination risk and slow down changeovers. Ask specifically about CIP design and disassembly requirements.</li>
                <li><strong>Not specifying hygiene level upfront:</strong> SUS304 and SUS316L have different costs. If your product requires nutraceutical-grade compliance, specify this before receiving a quotation — retrofitting material upgrades is expensive.</li>
                <li><strong>Quoting for one SKU but running 20:</strong> If you run multiple flavors and sizes, tell the supplier the full range. Machine configuration for single-SKU operation can differ significantly from multi-SKU changeover design.</li>
              </ul>

              <h2>Export Certification and Voltage</h2>
              <p>
                SunGene machines are CE certified and built to your destination country's electrical standard. Voltage is configurable at order stage — 220V, 380V, 480V, 50Hz or 60Hz. For nutraceutical or dietary supplement markets, food-grade material documentation and Declaration of Conformity are available on request.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Describe your protein powder format and output — we'll recommend the right filling setup.
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What machine is best for protein powder filling?</h3>
              <p>An auger filler matched to your packaging format. For pouches: VFFS or premade pouch machine. For tubs and jars: rotary table filler with auger dosing head. For stick packs: dedicated stick pack machine. <a href={`/${l}/recommend`}>Use our recommendation form</a> for a tailored suggestion.</p>

              <h3>Is auger filling suitable for protein powder?</h3>
              <p>Yes. Auger filling is standard for protein powder. Fine powders benefit from slow-feed auger control to reduce dust and maintain consistent fill weight across flavors and formulations.</p>

              <h3>Can the same machine fill both pouches and jars?</h3>
              <p>Pouches and rigid containers require different machine paths. Discuss your full SKU range with our team to understand what configuration is feasible. <a href={`/${l}/contact`}>Contact our engineers</a> for a detailed discussion.</p>

              <h3>What hygiene level is recommended?</h3>
              <p>SUS304 is standard for food-grade applications. SUS316L is recommended for nutraceutical compliance or when stronger sanitizers are used. Specify your market and compliance requirements at inquiry stage.</p>

              <h3>What accuracy can I expect?</h3>
              <p>Typically ±0.3–1% depending on fill weight and powder characteristics. Browse our <a href={`/${l}/machinery`}>full machinery range</a> for available machine types, and discuss your specific accuracy requirement with our engineering team.</p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Not sure which machine?</h3>
                <p className="mt-2 text-sm text-gray-600">Describe your protein powder format, hygiene requirement, and output target. We'll recommend the right filling setup — factory direct from Taiwan.</p>
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
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">View All Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Speak to an Engineer</h3>
                <p className="mt-2 text-sm text-gray-600">Our technical team can advise on auger selection, hygienic design, and multi-SKU changeover solutions for protein powder.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
