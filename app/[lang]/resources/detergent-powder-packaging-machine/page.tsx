/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'detergent-powder-packaging-machine'
const CATEGORY = 'application_guide'
const CATEGORY_LABEL = 'Application Guide'

const TITLE = 'Detergent Powder Packaging Machine: What Buyers Need to Know'
const META_TITLE = 'Detergent Powder Packaging Machine | Dust Control and Filling Accuracy | SunGene'
const DESCRIPTION = 'Detergent powder packaging requires dust-proof design, stable dosing, and the right bag format. Learn what buyers should check first.'

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
        name: 'What packaging machine is suitable for detergent powder?',
        acceptedAnswer: { '@type': 'Answer', text: 'For small retail packs (200g–2kg), an auger filler paired with a VFFS machine or premade pouch filler is the standard choice. For medium packs (3–10kg), a net-weigher with a bagging station handles the fill weight range more accurately. For industrial bulk bags (20–50kg), an open-mouth bagger with net-weigher is standard.' }
      },
      {
        '@type': 'Question',
        name: 'How do you reduce dust during detergent powder filling?',
        acceptedAnswer: { '@type': 'Answer', text: 'Key dust control measures include dust extraction at the fill point, a sealed hopper with controlled agitation, slow-feed dosing to reduce air turbulence during fill, and a dust-tight sealing jaw area. Filter systems on the extraction unit capture fine particles and prevent escape into the production environment.' }
      },
      {
        '@type': 'Question',
        name: 'Can one machine handle both small and large detergent bags?',
        acceptedAnswer: { '@type': 'Answer', text: 'Different machines serve different size ranges efficiently. A single changeover range is typically practical within a 3–5× fill weight span — for example, a machine sized for 500g–3kg. Trying to run both 200g sachets and 20kg bulk bags on one machine is generally not economically sensible.' }
      },
      {
        '@type': 'Question',
        name: 'What filling system is best for cleaning powder?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auger filling is best for fine or slightly sticky detergent powders — it handles varying bulk densities and provides good accuracy at lower fill weights. Net-weigher filling is better suited to free-flowing powders at larger fill weights (3kg+), providing higher throughput and accurate net weight measurement.' }
      },
      {
        '@type': 'Question',
        name: 'What information should I provide before requesting a quotation?',
        acceptedAnswer: { '@type': 'Answer', text: 'Provide: product type (detergent formula, washing powder, cleaning powder), bag size range, target output, filling accuracy requirement, dust level assessment, and destination country plus local voltage.' }
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
                Bottom line: detergent powder packaging success depends more on dust control and seal stability than on machine speed — get the design right before optimizing throughput.
              </p>

              <h2>Product Characteristics That Define Machine Requirements</h2>
              <p>
                Detergent powder is different from food powder in several ways that directly affect machine design:
              </p>
              <ul>
                <li><strong>Hygroscopicity:</strong> Most detergent powders absorb moisture readily. Clumping affects fill consistency and flow behavior — sealed hoppers and fast fill cycles matter.</li>
                <li><strong>Abrasive particles:</strong> Zeolite, silica, and similar builders in laundry detergents are abrasive. This affects auger wear rate and material selection for contact surfaces.</li>
                <li><strong>Chemical aggressiveness:</strong> Alkaline formulations, bleach components, or enzyme-containing powders can degrade standard materials over time. Confirm material compatibility before machine selection.</li>
                <li><strong>Variable bulk density:</strong> Different formulations have significantly different bulk densities — a volumetric filler calibrated for one formula may be inaccurate when you switch formulations. Auger or net-weigher filling adapts better.</li>
                <li><strong>Dust generation:</strong> Fine detergent powder creates airborne particles during filling. This is both a safety concern for operators and a production environment concern. Dedicated dust control design is required.</li>
              </ul>

              <h2>Bag Size Drives Machine Path</h2>
              <p>Three distinct machine paths serve the detergent powder market:</p>
              <ul>
                <li><strong>Small retail packs (200g–2kg):</strong> Auger filler + VFFS machine for pillow bags or gusset bags; or premade pouch filler for stand-up bags with zipper. Common for household laundry detergent retail packaging.</li>
                <li><strong>Medium packs (3–10kg):</strong> Net-weigher + bagging station handles this range more effectively than auger. Common for larger retail and wholesale formats.</li>
                <li><strong>Bulk industrial bags (20–50kg):</strong> Open-mouth bagger with net-weigher. Standard for industrial laundry, institutional, and chemical distribution markets.</li>
              </ul>

              <h2>Dosing Options Compared</h2>
              <div className="not-prose overflow-x-auto">
                <table className="w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Factor</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Auger Filler</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Volumetric Cup</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Net-Weigher</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Fill range</td>
                      <td className="border border-gray-200 px-4 py-2">50g–3kg</td>
                      <td className="border border-gray-200 px-4 py-2">100g–2kg</td>
                      <td className="border border-gray-200 px-4 py-2">500g–50kg+</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Accuracy</td>
                      <td className="border border-gray-200 px-4 py-2">Good (±0.5–1%)</td>
                      <td className="border border-gray-200 px-4 py-2">Moderate (±1–3%)</td>
                      <td className="border border-gray-200 px-4 py-2">High (±0.2–0.5%)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Variable density</td>
                      <td className="border border-gray-200 px-4 py-2">Good (adjustable pitch)</td>
                      <td className="border border-gray-200 px-4 py-2">Poor (recalibrate needed)</td>
                      <td className="border border-gray-200 px-4 py-2">Excellent (weighs actual)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Dust behavior</td>
                      <td className="border border-gray-200 px-4 py-2">Manageable with slow-feed</td>
                      <td className="border border-gray-200 px-4 py-2">Higher dust potential</td>
                      <td className="border border-gray-200 px-4 py-2">Manageable with enclosed design</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Speed</td>
                      <td className="border border-gray-200 px-4 py-2">Medium-high</td>
                      <td className="border border-gray-200 px-4 py-2">High</td>
                      <td className="border border-gray-200 px-4 py-2">Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Dust Control Is Critical</h2>
              <p>
                Dust control in detergent powder packaging serves two purposes: operator safety and production environment cleanliness. Key design features to require:
              </p>
              <ul>
                <li><strong>Dust extraction at fill point:</strong> A suction port at the bag neck area captures escaping powder during filling.</li>
                <li><strong>Sealed hopper design:</strong> Prevents airborne dust from escaping the hopper during agitation and refilling.</li>
                <li><strong>Slow-feed dosing control:</strong> Reducing fill speed just before cut-off minimizes the turbulent air that carries dust out of the bag.</li>
                <li><strong>Filter systems:</strong> Bag filter or cyclone separator on the dust extraction unit — prevents captured powder from re-entering the air or causing secondary contamination.</li>
                <li><strong>Dust-tight sealing jaw area:</strong> Prevents powder contamination of the heat-seal jaws, which causes weak seals and product spillage.</li>
              </ul>

              <h2>Material Considerations</h2>
              <p>
                SUS304 stainless steel is standard for detergent powder contact parts. For chemically aggressive formulations — high-alkaline powders, bleach-containing products, or enzyme-active formulas — additional protective coatings or alternative materials may be needed for specific components. Confirm the chemistry of your product before finalizing the machine specification. This is best discussed directly with the engineering team rather than assumed.
              </p>

              <h2>CE and Non-Food Industrial Compliance</h2>
              <p>
                CE certification applies to machinery safety — SunGene machines are CE certified as standard. Chemical product labeling and compliance requirements for the detergent itself depend on your destination market (EU REACH, US EPA, etc.) — these are product regulations, not machine certifications, and are outside the machinery supplier's scope.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Tell us your detergent product, bag size, and output — we'll recommend the right packaging setup.
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What packaging machine is suitable for detergent powder?</h3>
              <p>Auger + VFFS for small retail packs; net-weigher + open-mouth bagger for bulk. The right path depends on your bag size range and output. <a href={`/${l}/machines/powder-filling-machine`}>See our powder filling machine range</a> for available configurations.</p>

              <h3>How do you reduce dust during detergent powder filling?</h3>
              <p>Dust extraction at the fill point, sealed hopper, slow-feed dosing, and filter systems on the extraction unit. <a href={`/${l}/recommend`}>Use our recommendation form</a> to describe your dust level and we'll specify the appropriate design.</p>

              <h3>Can one machine handle both small and large bags?</h3>
              <p>A single changeover range typically spans 3–5× fill weight. For wider ranges, two-machine approach is usually more practical. <a href={`/${l}/contact`}>Contact our engineers</a> to discuss your specific size range.</p>

              <h3>What filling system is best for cleaning powder?</h3>
              <p>Auger for fine and slightly sticky powders at smaller fill weights. Net-weigher for free-flowing larger fills. Variable bulk density formulas benefit from net-weigher accuracy. Browse <a href={`/${l}/machinery`}>our machinery range</a> for an overview of options.</p>

              <h3>What information should I provide before requesting a quotation?</h3>
              <p>Product type, bag size range, target output, filling accuracy requirement, dust level, and destination country plus voltage.</p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Not sure which machine?</h3>
                <p className="mt-2 text-sm text-gray-600">Describe your detergent powder, bag size, and output. We'll recommend the right packaging setup — factory direct from Taiwan.</p>
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
                <p className="mt-2 text-sm text-gray-600">Our technical team can advise on dust control design, material compatibility, and filling accuracy for detergent powder applications.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
