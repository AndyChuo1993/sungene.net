/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'flour-packaging'
const CATEGORY_LABEL = 'Application Guide'

const TITLE = 'Flour Packaging Machine Guide: From 500g Retail Bags to 25kg Bulk Sacks'
const DESCRIPTION = 'Flour packaging needs consistent fill accuracy and a dust-containment system. This guide covers machine selection from retail-scale auger fillers to industrial net-weigher and open-mouth bagger setups.'

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
        name: 'Can SunGene machines handle 25kg flour bags?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. For large bag formats (5kg to 25kg), SunGene offers net-weigher systems paired with open-mouth baggers. These handle heavy fills accurately and can be integrated with conveyors for automatic bag transport to sewing or heat-sealing stations.' }
      },
      {
        '@type': 'Question',
        name: 'What fill accuracy is achievable for flour packaging?',
        acceptedAnswer: { '@type': 'Answer', text: 'Fill accuracy depends on the machine type and configuration. Auger fillers and net-weighers both provide consistent accuracy for flour. Specific accuracy targets depend on your regulatory requirements and fill weight range — contact SunGene with your requirements for confirmation.' }
      },
      {
        '@type': 'Question',
        name: 'Can flour be packaged in paper bags as well as plastic?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open-mouth baggers handle both paper and plastic bags. For retail plastic film packaging, VFFS machines with auger fillers form and fill bags from a film roll. The appropriate machine depends on your packaging format — specify your bag material and format at inquiry.' }
      },
      {
        '@type': 'Question',
        name: 'How is flour dust controlled in the packaging area?',
        acceptedAnswer: { '@type': 'Answer', text: 'Flour is a fine, light powder that generates airborne dust. SunGene flour packaging machines incorporate enclosed filling zones, dust-tight connections between hopper and bag former, and can be paired with dust extraction (vacuum) systems. Discuss your factory ventilation requirements at inquiry.' }
      },
      {
        '@type': 'Question',
        name: 'Are flour packaging machines CE certified?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. All SunGene flour packaging machines are CE certified to the Machinery Directive 2006/42/EC. A Declaration of Conformity is provided with each export machine.' }
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
                Flour packaging needs two things above all else: consistent net-weight accuracy to meet food labeling regulations, and a dust-containment system to keep fine flour particles from escaping into the packaging environment.
              </p>

              <h2>Applications Covered</h2>
              <p>This guide applies to flour packaging across a wide range of products and formats:</p>
              <ul>
                <li>Wheat flour (all-purpose, bread flour, self-rising, cake flour)</li>
                <li>Rice flour and glutinous rice flour</li>
                <li>Corn flour, cornstarch, tapioca flour</li>
                <li>Specialty flours: almond flour, chickpea flour, rye flour</li>
                <li>Pre-mixed flour blends for baking</li>
              </ul>
              <p>
                Pack sizes range from 200g retail sachets to 25kg commercial sacks depending on channel — retail, food service, or industrial supply.
              </p>

              <h2>Machine Selection by Pack Size</h2>

              <h3>Small Retail Packs (200g – 2kg)</h3>
              <p>
                For small retail flour packs in pillow bags or stand-up pouches, an <strong>auger filler integrated with a VFFS machine</strong> is the standard solution. The auger provides consistent fill accuracy for the fine, slightly hygroscopic nature of flour, and the VFFS machine forms and seals bags at production speed from a pre-printed film roll.
              </p>
              <p>Key requirements for retail flour packaging:</p>
              <ul>
                <li>Accurate net-weight fills per bag (important for labeled weight compliance)</li>
                <li>Dust-tight connection between auger tube and bag former</li>
                <li>Good back-seal and cross-seal quality to prevent moisture ingress</li>
              </ul>

              <h3>Medium Commercial Packs (2kg – 10kg)</h3>
              <p>
                Medium pack sizes can be handled by larger-format VFFS machines or semi-automatic bag fillers. A gross-weigher system with a stand-alone bag clamp and sealer is common for this range, offering flexibility to switch between bag sizes and materials.
              </p>

              <h3>Large Industrial Sacks (10kg – 25kg)</h3>
              <p>
                Large flour sacks — common in food service and industrial baking — require a <strong>net-weigher or gross-weigher plus open-mouth bagger</strong>. The weigher accurately batches the target weight into an open-top bag (paper or plastic), which is then automatically sealed by a bag closer (sewing machine, heat sealer, or tape closer).
              </p>
              <p>Key requirements for large-bag flour packaging:</p>
              <ul>
                <li>High-capacity filling spout designed for fine powders</li>
                <li>Dust extraction at the fill spout</li>
                <li>Conveyor integration for automatic bag transport after filling</li>
                <li>Heavy-duty bag closer compatible with paper and plastic bag materials</li>
              </ul>

              <h2>Machine Comparison by Pack Size</h2>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Pack Size</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Recommended Machine</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Bag Format</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">200g – 2kg</td>
                      <td className="border border-gray-200 px-4 py-2">VFFS + auger filler</td>
                      <td className="border border-gray-200 px-4 py-2">Pillow bag, flat-bottom pouch</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">1kg – 5kg</td>
                      <td className="border border-gray-200 px-4 py-2">Large-format VFFS or semi-auto bag filler</td>
                      <td className="border border-gray-200 px-4 py-2">Pillow bag, open-mouth bag</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">5kg – 25kg</td>
                      <td className="border border-gray-200 px-4 py-2">Net-weigher + open-mouth bagger</td>
                      <td className="border border-gray-200 px-4 py-2">Open-mouth paper or plastic sack</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>SunGene Full-Line Flour Packaging Solutions</h2>
              <p>
                SunGene provides complete flour packaging solutions — from the filling station to bag closing and conveyor transport. Our machines use <strong>SUS304 food-grade stainless steel</strong> on product-contact surfaces and are CE certified for export markets. Voltage is configurable to 220V, 380V, or 480V at 50Hz or 60Hz — factory-direct from Taiwan.
              </p>
              <p>
                We can supply the complete line including auger filler or net-weigher, VFFS or open-mouth bagger, conveyors, and checkweighers. Discuss your full-line requirements with our engineering team.
              </p>
              <p>
                Explore our <a href={`/${l}/machines/powder-filling-machine`}>powder filling machines</a> or <a href={`/${l}/machinery`}>browse all machinery</a>.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Get a Flour Packaging Line Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>Can SunGene machines handle 25kg flour bags?</h3>
              <p>Yes. For large bag formats (5kg to 25kg), SunGene offers net-weigher systems paired with open-mouth baggers. These handle heavy fills accurately and can be integrated with conveyors for automatic transport to sewing or heat-sealing stations.</p>

              <h3>What fill accuracy is achievable for flour packaging?</h3>
              <p>Fill accuracy depends on machine type and configuration. Auger fillers and net-weighers both provide consistent accuracy for flour. <a href={`/${l}/contact`}>Contact SunGene</a> with your fill weight and accuracy requirements for confirmation.</p>

              <h3>Can flour be packaged in paper bags as well as plastic?</h3>
              <p>Yes. Open-mouth baggers handle both paper and plastic bags. For retail plastic film packaging, VFFS machines with auger fillers form bags from a film roll. Specify your bag material and format at inquiry.</p>

              <h3>How is flour dust controlled in the packaging area?</h3>
              <p>SunGene flour packaging machines incorporate enclosed filling zones, dust-tight connections between hopper and bag former, and can be paired with dust extraction systems. Discuss your factory ventilation requirements at inquiry.</p>

              <h3>Are flour packaging machines CE certified?</h3>
              <p>Yes. All SunGene flour packaging machines are CE certified to the Machinery Directive 2006/42/EC. A Declaration of Conformity is provided with each export machine.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Configure Your Flour Line</h3>
                <p className="mt-2 text-sm text-gray-600">Tell us your flour type, pack sizes, and output target. We'll recommend the right line.</p>
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
                <h3 className="text-base font-bold text-brand-950">Need a Full-Line Quote?</h3>
                <p className="mt-2 text-sm text-gray-600">We supply complete flour packaging lines from filling to bag closing and conveyor. Contact us for a full-line proposal.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
