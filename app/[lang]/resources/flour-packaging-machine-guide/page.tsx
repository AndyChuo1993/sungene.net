/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'flour-packaging-machine-guide'
const CATEGORY = 'application_guide'
const CATEGORY_LABEL = 'Application Guide'

const TITLE = 'What Buyers Should Confirm Before Choosing a Flour Packaging Machine'
const META_TITLE = 'Flour Packaging Machine Guide | Bag Size, Output, and Filling Method | SunGene'
const DESCRIPTION = 'Choosing a flour packaging machine depends on bag size, target output, hygiene level, and filling accuracy. Learn what buyers should confirm first.'

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
        name: 'What machine is used for flour packaging?',
        acceptedAnswer: { '@type': 'Answer', text: 'The right machine depends on bag size. A VFFS machine with auger filler is standard for retail packs (50g–5kg). A net-weigher paired with an open-mouth bagger handles bulk bags (10–25kg). The machine path is determined primarily by fill weight range.' }
      },
      {
        '@type': 'Question',
        name: 'Can one flour packaging machine handle multiple bag sizes?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, within a certain range. With auger size change and film width adjustment, a VFFS machine can typically cover a 3–5× fill weight range. For very wide ranges — for example, both retail sachets and bulk sacks — different machines are usually needed.' }
      },
      {
        '@type': 'Question',
        name: 'Is auger filling suitable for flour?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Auger filling is the standard choice for most flour types including wheat flour, rice flour, and bakery premix. Free-flowing grades can also use volumetric cup filling, but auger provides better accuracy across different flour densities.' }
      },
      {
        '@type': 'Question',
        name: 'What fill accuracy is common for flour packaging?',
        acceptedAnswer: { '@type': 'Answer', text: 'Typical accuracy for retail flour packaging is ±0.5–1% net weight. This is configurable based on your product and regulatory requirements. Discuss your target tolerance with our engineering team before machine selection.' }
      },
      {
        '@type': 'Question',
        name: 'Do I need food-grade stainless steel for flour?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. SUS304 stainless steel is standard for all food-contact surfaces on SunGene flour packaging machines. This covers the hopper, auger, filling tube, and any surface that contacts the product during filling.' }
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
                Bottom line: flour packaging machine selection starts with three inputs — bag size, target output, and powder behavior. These three determine whether you need a VFFS+auger, premade pouch, or open-mouth bagger configuration.
              </p>

              <h2>Flour Types and Their Behavior Differences</h2>
              <p>
                Different flour types present different packaging challenges. Understanding your product's characteristics before machine selection prevents costly mismatches:
              </p>
              <ul>
                <li><strong>Wheat flour:</strong> Standard bulk density, moderate dustiness, relatively free-flowing — most VFFS auger systems handle it well.</li>
                <li><strong>Rice flour:</strong> Finer particle than wheat flour in many formulations, low dust, generally well-behaved on auger systems.</li>
                <li><strong>Premix / self-rising flour:</strong> Variable bulk density depending on formulation; leavening agents can affect fill consistency — confirm density range before sizing the auger.</li>
                <li><strong>Bakery mix:</strong> May contain salt, sugar, or fat-coated particles — hygroscopicity and clumping tendency must be assessed; hopper agitator design matters.</li>
              </ul>
              <p>
                Providing a product sample or bulk density data before machine specification is strongly recommended. See our detailed guide on <a href={`/${l}/resources/how-to-choose-powder-filling-machine`}>how to choose a powder filling machine</a> for a broader selection framework.
              </p>

              <h2>Bag Size Determines Machine Type</h2>
              <p>
                The single most important selection factor for flour packaging is fill weight range. Three distinct machine paths serve different size tiers:
              </p>
              <ul>
                <li><strong>50g–5kg retail pouches:</strong> VFFS machine with auger filler, or premade pouch filler with auger dosing head. Pillow bags, flat-bottom bags, or stand-up pouches depending on retail requirement.</li>
                <li><strong>1–5kg bags (mid-range):</strong> VFFS with a larger auger diameter, or net-weigher for higher accuracy. Common for supermarket retail and foodservice.</li>
                <li><strong>10–25kg bulk bags:</strong> Open-mouth bagger with net-weigher. Used for institutional, wholesale, and industrial flour distribution.</li>
              </ul>
              <p>
                If you need to cover multiple size tiers, a two-machine approach is usually more cost-effective than trying to span from sachet to bulk on a single machine.
              </p>

              <h2>Filling Accuracy and Dosing</h2>
              <p>
                Retail flour in regulated markets is typically sold on a net weight basis. Typical accuracy targets:
              </p>
              <ul>
                <li>Retail packs (500g–2kg): ±0.5–1% is standard for auger filling</li>
                <li>Bulk packs (5–25kg): ±0.3–0.5% with net-weigher</li>
              </ul>
              <p>
                If your destination market has specific labeling or pre-packaging regulations, confirm the required tolerance and declare it at inquiry stage. This affects auger pitch selection, feedback weighing, and machine configuration.
              </p>

              <h2>Hygiene and Material Standards</h2>
              <p>
                All SunGene flour packaging machines use SUS304 stainless steel for food-contact surfaces as standard. This covers the hopper, auger, filling tube, and nozzle. For operations running multiple flour types or SKUs on the same machine, easy-clean design is critical — look for tool-free auger removal, smooth internal surfaces, and accessible hopper geometry.
              </p>
              <p>
                Dust control is also important for flour. Fine wheat flour particles are combustible at certain concentrations — consult your facility safety requirements and confirm with the machine manufacturer whether additional dust extraction is needed for your production volume.
              </p>

              <h2>Sealing and Bag Quality</h2>
              <p>
                Flour packaging requires good heat seal integrity. Moisture ingress through a weak seal shortens shelf life and causes clumping. Key considerations:
              </p>
              <ul>
                <li>Film selection: moisture-barrier laminates (PET/PE, OPP/PE, foil/PE) are standard for flour</li>
                <li>Seal jaw temperature control: consistent sealing temperature prevents weak seals or film burn-through</li>
                <li>Zipper pouches for consumer convenience: available on premade pouch lines</li>
              </ul>

              <h2>Machine Path Comparison</h2>
              <div className="not-prose overflow-x-auto">
                <table className="w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Factor</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">VFFS + Auger</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Premade Pouch</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Open-Mouth Bagger</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Bag size range</td>
                      <td className="border border-gray-200 px-4 py-2">50g–5kg</td>
                      <td className="border border-gray-200 px-4 py-2">50g–5kg</td>
                      <td className="border border-gray-200 px-4 py-2">5–25kg</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Output speed</td>
                      <td className="border border-gray-200 px-4 py-2">High</td>
                      <td className="border border-gray-200 px-4 py-2">Medium</td>
                      <td className="border border-gray-200 px-4 py-2">Medium</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Bag presentation</td>
                      <td className="border border-gray-200 px-4 py-2">Good (pillow, flat-bottom)</td>
                      <td className="border border-gray-200 px-4 py-2">Excellent (doypack, zipper)</td>
                      <td className="border border-gray-200 px-4 py-2">Functional bulk</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Relative cost</td>
                      <td className="border border-gray-200 px-4 py-2">Medium</td>
                      <td className="border border-gray-200 px-4 py-2">Medium–high</td>
                      <td className="border border-gray-200 px-4 py-2">Medium</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Hygiene design</td>
                      <td className="border border-gray-200 px-4 py-2">Good</td>
                      <td className="border border-gray-200 px-4 py-2">Good</td>
                      <td className="border border-gray-200 px-4 py-2">Standard</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>What to Prepare Before Asking for a Quote</h2>
              <p>Prepare the following to receive an accurate machine recommendation:</p>
              <ul>
                <li>Flour type (wheat, rice, premix, bakery mix) and approximate bulk density if known</li>
                <li>Bag format (pillow pouch, doypack, open-mouth sack)</li>
                <li>Fill weight range (min and max if you have multiple SKUs)</li>
                <li>Target output (bags per hour or bags per minute)</li>
                <li>Destination country and local voltage/phase</li>
              </ul>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Tell us your flour type and bag format — we'll recommend the right machine.
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What machine is used for flour packaging?</h3>
              <p>The right machine depends on bag size. A VFFS machine with auger filler handles retail packs (50g–5kg). A net-weigher paired with an open-mouth bagger handles bulk bags (10–25kg). <a href={`/${l}/machines/powder-filling-machine`}>See our powder filling machine range</a> for available configurations.</p>

              <h3>Can one flour packaging machine handle multiple bag sizes?</h3>
              <p>Yes, within a range. With auger size change and film width adjustment, a VFFS machine typically covers a 3–5× fill weight span. Very wide ranges — from sachets to bulk sacks — usually require different machines.</p>

              <h3>Is auger filling suitable for flour?</h3>
              <p>Yes, auger filling is the standard choice for most flour types. It handles varying bulk densities better than volumetric cup filling and provides consistent accuracy across a fill weight range.</p>

              <h3>What fill accuracy is common for flour packaging?</h3>
              <p>Typically ±0.5–1% net weight for retail. Discuss your specific tolerance requirement with our engineers — accuracy depends on fill weight, auger configuration, and whether feedback weighing is included.</p>

              <h3>Do I need food-grade stainless steel for flour?</h3>
              <p>Yes. SUS304 stainless steel is standard for all food-contact surfaces. <a href={`/${l}/contact`}>Contact us</a> if you have specific hygiene or certification requirements. Browse all available machines at <a href={`/${l}/machinery`}>our machinery page</a>.</p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Not sure which machine?</h3>
                <p className="mt-2 text-sm text-gray-600">Describe your flour type, bag format, and output target. We'll recommend the right configuration — factory direct from Taiwan.</p>
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
                <p className="mt-2 text-sm text-gray-600">Our technical team can advise on auger sizing, fill weight range, and hygiene design for your flour packaging project.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
