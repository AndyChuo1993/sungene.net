/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'semi-auto-vs-full-auto-packaging-line'
const CATEGORY = 'comparison'
const CATEGORY_LABEL = 'Comparison'

const TITLE = 'Semi-Automatic vs Fully Automatic Packaging Line: Which One Fits Your Business?'
const META_TITLE = 'Semi-Automatic vs Fully Automatic Packaging Line | Which Fits Your Business? | SunGene'
const DESCRIPTION = 'Compare semi-automatic and fully automatic packaging lines by labor, speed, flexibility, and investment to choose the right setup.'

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
        name: 'What is the difference between semi-automatic and fully automatic packaging?',
        acceptedAnswer: { '@type': 'Answer', text: 'Semi-automatic packaging requires operator involvement at one or more steps in the cycle — typically bag placement, container loading, or finished pack removal. The machine handles the core filling and sealing process. Fully automatic packaging handles the complete cycle from container feeding to sealed and coded output with minimal manual input.' }
      },
      {
        '@type': 'Question',
        name: 'Which option is better for a growing factory?',
        acceptedAnswer: { '@type': 'Answer', text: 'Semi-automatic is generally the right starting point for a growing factory. Lower capital investment, higher flexibility for multiple SKUs, and lower risk when demand is still being validated. Plan your upgrade path to full automation from the beginning so the initial machine is compatible with future integration.' }
      },
      {
        '@type': 'Question',
        name: 'Is semi-automatic more flexible for multiple SKUs?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Semi-automatic lines typically have lower changeover cost and time than fully automatic systems. Operators absorb some of the variability between SKUs manually — bag sizes, container types, and label variations are easier to accommodate. Fully automatic lines are optimized for a smaller range of SKUs at high volume.' }
      },
      {
        '@type': 'Question',
        name: 'When should I upgrade to fully automatic?',
        acceptedAnswer: { '@type': 'Answer', text: 'Upgrade to fully automatic when: production volume consistently justifies the investment (typically when labor cost savings over 2–3 years equals or exceeds the investment difference), when product mix has stabilized to a manageable number of SKUs, and when output targets can no longer be met with semi-auto even with multiple shifts.' }
      },
      {
        '@type': 'Question',
        name: 'What information helps determine the right automation level?',
        acceptedAnswer: { '@type': 'Answer', text: 'Key inputs are: current and target output (units per shift), number of SKUs and changeover frequency, local labor cost and availability, available floor space, and budget range. Share these with our team for a recommendation tailored to your business stage.' }
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
                Bottom line: neither is universally better — semi-auto suits early-stage or multi-SKU operations; full-auto fits stable high-volume production. Your current business stage decides.
              </p>

              <h2>What Semi-Automatic Means in Practice</h2>
              <p>
                A semi-automatic packaging line involves operator involvement at one or two defined steps in the production cycle. The machine handles the core filling and sealing operations; the operator provides assistance at specific points:
              </p>
              <ul>
                <li><strong>Bag placement:</strong> The operator presents each bag to the filler or pouch machine; the machine opens, fills, and seals automatically.</li>
                <li><strong>Container loading:</strong> For bottle or jar filling, the operator places containers on the conveyor or filling station; the machine fills and caps.</li>
                <li><strong>Finished pack removal:</strong> Some semi-auto lines require an operator to remove and stack completed packs for boxing.</li>
              </ul>
              <p>
                Semi-automatic is not a compromise — for many production scenarios, it is the correct specification. It allows flexibility for multiple SKUs, lower capital investment, and simpler maintenance compared to fully automatic systems.
              </p>

              <h2>What Fully Automatic Means in Practice</h2>
              <p>
                A fully automatic packaging line handles the complete production cycle with minimal operator involvement. The line includes:
              </p>
              <ul>
                <li>Automatic container or bag feeding (unscrambler, magazine, or conveyor infeed)</li>
                <li>Automatic filling and sealing</li>
                <li>Inline coding and marking</li>
                <li>Inspection (checkweigher, metal detection, vision system)</li>
                <li>Rejection of non-conforming packs</li>
                <li>Case packing and palletizing (at the high end)</li>
              </ul>
              <p>
                One operator typically monitors the entire line rather than being involved in each cycle. The investment is higher, but the consistent output and low labor cost per unit makes full automation the right choice for stable, high-volume production.
              </p>

              <h2>Side-by-Side Comparison</h2>
              <div className="not-prose overflow-x-auto">
                <table className="w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Factor</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Semi-Automatic</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Fully Automatic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Labor per shift</td>
                      <td className="border border-gray-200 px-4 py-2">1–3 operators</td>
                      <td className="border border-gray-200 px-4 py-2">1 supervisor (monitor role)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Output (typical)</td>
                      <td className="border border-gray-200 px-4 py-2">10–60 bags/min or equivalent</td>
                      <td className="border border-gray-200 px-4 py-2">40–200+ bags/min or equivalent</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Capital investment</td>
                      <td className="border border-gray-200 px-4 py-2">Lower</td>
                      <td className="border border-gray-200 px-4 py-2">Higher</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Flexibility for multiple SKUs</td>
                      <td className="border border-gray-200 px-4 py-2">Higher — changeover simpler</td>
                      <td className="border border-gray-200 px-4 py-2">Lower — more changeover steps</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Output consistency</td>
                      <td className="border border-gray-200 px-4 py-2">Good (operator-dependent)</td>
                      <td className="border border-gray-200 px-4 py-2">Excellent (machine-controlled)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Floor space</td>
                      <td className="border border-gray-200 px-4 py-2">Compact</td>
                      <td className="border border-gray-200 px-4 py-2">Larger footprint</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Best for</td>
                      <td className="border border-gray-200 px-4 py-2">Growing operations, diverse SKUs, testing demand</td>
                      <td className="border border-gray-200 px-4 py-2">Stable high-volume products, labor cost pressure</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>When to Choose Semi-Automatic</h2>
              <ul>
                <li><strong>Output is under 1,000 units per shift:</strong> Full automation's capital cost rarely recovers when output is this low. Semi-auto delivers the output you need at appropriate investment.</li>
                <li><strong>You run multiple product types or bag formats:</strong> Semi-auto lines are easier to reconfigure between SKUs. Operator involvement absorbs some of the variability between products.</li>
                <li><strong>You are testing a new market or product:</strong> When demand is uncertain, lower capital commitment reduces risk. Semi-auto can be upgraded when volume is confirmed.</li>
              </ul>

              <h2>When to Choose Fully Automatic</h2>
              <ul>
                <li><strong>You have a stable product running at high volume:</strong> When one or two SKUs run continuously at high output, full automation delivers the lowest labor cost per unit and highest consistency.</li>
                <li><strong>Labor cost is a significant operating factor:</strong> In markets with high labor rates, full automation's capital cost recovers quickly through labor savings.</li>
                <li><strong>You need downstream line integration:</strong> If your line needs case packing, palletizing, and coding integrated seamlessly, full automation is the natural architecture.</li>
              </ul>

              <h2>Planning an Upgrade Path</h2>
              <p>
                Many successful operations start semi-automatic and upgrade to full automation as production volume grows. To make this transition smooth:
              </p>
              <ul>
                <li>When buying a semi-auto machine, ask the manufacturer whether it can be integrated into a fully automatic line later.</li>
                <li>Leave floor space at each end of the machine for future infeed and outfeed automation.</li>
                <li>Choose a machine with a control system (PLC, HMI) that is compatible with line integration signals.</li>
              </ul>
              <p>
                SunGene designs machines with upgrade paths in mind. If you plan to automate in phases, discuss this at the time of initial machine selection so the configuration supports your future state.
              </p>

              <h2>Investment and Total Cost of Ownership</h2>
              <p>
                The comparison between semi-auto and full-auto is not just about machine purchase price. Total cost of ownership includes:
              </p>
              <ul>
                <li>Machine capital cost</li>
                <li>Labor cost per shift over the expected machine life</li>
                <li>Energy consumption</li>
                <li>Maintenance complexity and spare parts cost</li>
                <li>Downtime cost when the machine is being changed over or repaired</li>
              </ul>
              <p>
                For a detailed comparison of full-line solutions, see our <a href={`/${l}/solutions`}>solutions overview</a> and the broader comparison: <a href={`/${l}/resources/vffs-vs-hffs`}>VFFS vs HFFS</a> for context on machine-level decisions.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Tell us your output, SKU range, and labor situation — we'll recommend the right automation level.
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What is the difference between semi-automatic and fully automatic packaging?</h3>
              <p>Semi-auto needs operator involvement at defined steps; fully automatic runs the complete cycle with minimal manual input. <a href={`/${l}/recommend`}>Use our recommendation form</a> to describe your situation and get a tailored suggestion.</p>

              <h3>Which option is better for a growing factory?</h3>
              <p>Start semi-auto for flexibility and lower investment; plan your upgrade path to full automation based on volume growth. <a href={`/${l}/contact`}>Contact our engineers</a> to discuss your growth roadmap.</p>

              <h3>Is semi-automatic more flexible for multiple SKUs?</h3>
              <p>Yes. Lower changeover cost and time; operator involvement absorbs SKU variability. Fully automatic is optimized for fewer SKUs at high volume.</p>

              <h3>When should I upgrade to full automatic?</h3>
              <p>When production volume consistently justifies the investment, product mix has stabilized, and output targets can't be met with semi-auto. Browse our <a href={`/${l}/machinery`}>machinery range</a> for available configurations at both levels.</p>

              <h3>What information helps determine the right level?</h3>
              <p>Current and target output, number of SKUs, labor cost, floor space, and budget range. Reach us at the <a href={`/${l}/contact`}>contact page</a> to discuss your specific scenario.</p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Not sure which level fits?</h3>
                <p className="mt-2 text-sm text-gray-600">Describe your output target, SKU range, and business stage. We'll recommend the right automation level — factory direct from Taiwan.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  Get a Recommendation
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Related</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={`/${l}/solutions`} className="text-accent-600 hover:underline">Production Line Solutions</a>
                  </li>
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">View All Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Speak to an Engineer</h3>
                <p className="mt-2 text-sm text-gray-600">Our technical team can assess your production scenario and recommend the right automation level with a realistic upgrade path.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
