/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'how-to-choose-conveyor-system'
const CATEGORY = 'selection_guide'
const CATEGORY_LABEL = 'Selection Guide'

const TITLE = 'How to Choose the Right Conveyor System for a Packaging Line'
const META_TITLE = 'How to Choose a Conveyor System for a Packaging Line | SunGene'
const DESCRIPTION = 'Conveyor systems should match product type, line speed, layout, and automation level. Learn how to choose the right conveyor setup.'

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
        name: 'What conveyor is suitable for powder bags?',
        acceptedAnswer: { '@type': 'Answer', text: 'A flat belt conveyor with adjustable side guides is the standard choice for powder bags. Gentle incline angles (typically under 20°) can be used for modest elevation changes without risk of bags sliding or toppling. For heavy bags (10kg+), a wider belt with firmer support is recommended.' }
      },
      {
        '@type': 'Question',
        name: 'How do I choose a conveyor for bottles or cartons?',
        acceptedAnswer: { '@type': 'Answer', text: 'Belt conveyors with appropriate width and speed setting are standard for both bottles and cartons. For bottles, neck guide rails or side guide adjusters prevent tipping during transfer. For cartons, flap-closing guides may be integrated before sealing. Belt width should accommodate your largest container with margin.' }
      },
      {
        '@type': 'Question',
        name: 'Can a conveyor be integrated into an existing packaging line?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Provide your existing machine specifications (output speed, product dimensions, discharge height) and floor layout dimensions so the conveyor can be designed to match the existing line interface. Integration with existing machines is a standard part of conveyor design work.' }
      },
      {
        '@type': 'Question',
        name: 'What information is needed for conveyor planning?',
        acceptedAnswer: { '@type': 'Answer', text: 'Provide: product type and weight per unit, line speed (units per minute or hour), floor layout dimensions and machine positions, elevation changes required, integration points needed (metal detection, weighcheck, rejection, case packing), and hygiene level requirement (food vs non-food).' }
      },
      {
        '@type': 'Question',
        name: 'Do I need a full conveyor line or just a transfer conveyor?',
        acceptedAnswer: { '@type': 'Answer', text: 'This depends on your automation goal. A single transfer conveyor moves product between two machines. A full automated flow covers the complete path from filling through coding, inspection, case packing, and palletizing. SunGene can design anything from a single segment to a complete integrated flow — describe your current setup and where you want to go.' }
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
                Bottom line: the right conveyor system isn't just about moving product — it's about matching product characteristics, line speed, plant layout, and integration points. Get these inputs right before specifying conveyor type.
              </p>

              <h2>Common Conveyor Types and Their Applications</h2>
              <div className="not-prose overflow-x-auto">
                <table className="w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Conveyor Type</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Best For</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Typical Use in Packaging Lines</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Belt conveyor (flat)</td>
                      <td className="border border-gray-200 px-4 py-2">Bags, cartons, bottles, packs</td>
                      <td className="border border-gray-200 px-4 py-2">General transfer between machines</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Roller conveyor</td>
                      <td className="border border-gray-200 px-4 py-2">Heavy boxes, pallets, rigid items</td>
                      <td className="border border-gray-200 px-4 py-2">Heavy end of line, case handling</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Screw / auger conveyor</td>
                      <td className="border border-gray-200 px-4 py-2">Bulk powder, granules</td>
                      <td className="border border-gray-200 px-4 py-2">Material feeding to filling hoppers</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Bucket elevator</td>
                      <td className="border border-gray-200 px-4 py-2">Powder and granule vertical lift</td>
                      <td className="border border-gray-200 px-4 py-2">Feeding hoppers at height</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Incline / decline belt</td>
                      <td className="border border-gray-200 px-4 py-2">Elevation changes</td>
                      <td className="border border-gray-200 px-4 py-2">Between floor levels in multi-story layouts</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Accumulation conveyor</td>
                      <td className="border border-gray-200 px-4 py-2">Buffering between machines</td>
                      <td className="border border-gray-200 px-4 py-2">Before case packer, labeler, palletizer</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Step 1: Define What You Are Conveying</h2>
              <p>
                The product and its packaging determine belt type, width, and speed. Key inputs:
              </p>
              <ul>
                <li><strong>Product weight per unit:</strong> Affects belt tensioning, drive motor sizing, and support structure.</li>
                <li><strong>Container type:</strong> Rigid bottles need side guide rails to prevent tipping; soft bags need a flat, even belt surface; cartons need square alignment guides.</li>
                <li><strong>Fragility:</strong> Glass containers require gentle acceleration/deceleration and cushioned transfer points. Soft bags can handle more variation.</li>
                <li><strong>Temperature:</strong> Hot-fill products coming off a filling line need conveyor materials rated for the product's surface temperature. Frozen products need corrosion-resistant materials and drainage design.</li>
              </ul>

              <h2>Step 2: Map Your Line Layout</h2>
              <p>
                Before specifying a conveyor, document your floor plan:
              </p>
              <ul>
                <li>Position of each machine (filler, capper, labeler, coder, case packer)</li>
                <li>Available floor space between machines and overall plant width</li>
                <li>Elevation changes — is everything on one level, or do you have mezzanine levels?</li>
                <li>Operator access requirements — where do operators need to stand, inspect, and intervene?</li>
                <li>Column positions and other fixed obstacles</li>
              </ul>
              <p>
                A floor sketch or CAD file with machine positions significantly accelerates the conveyor design process. Even a rough hand-drawn layout with dimensions is valuable.
              </p>

              <h2>Step 3: Match Line Speed</h2>
              <p>
                Conveyor speed must accommodate the output of the machines it connects. Key design principles:
              </p>
              <ul>
                <li>The conveyor between two machines should run slightly faster than the upstream machine's output to create spacing and prevent back-pressure.</li>
                <li>Accumulation conveyors between machines with different output rates create a buffer — preventing the faster machine from being starved or blocked by the slower one.</li>
                <li>Variable-speed drives (VFDs) on conveyor motors allow speed adjustment without changing mechanical components — important for lines running multiple products or SKUs.</li>
              </ul>

              <h2>Step 4: Define Integration Needs</h2>
              <p>
                Modern packaging lines include several inline inspection and processing stations that interact with the conveyor:
              </p>
              <ul>
                <li><strong>Metal detection:</strong> Requires a specific tunnel gap, grounding, and rejection mechanism downstream.</li>
                <li><strong>Checkweigher:</strong> Requires a short flat section at consistent speed for accurate weighing.</li>
                <li><strong>Rejection system:</strong> Air jet, sweep arm, or pusher rejection for non-conforming packs — needs a defined reject lane on the conveyor.</li>
                <li><strong>Coding (inkjet, laser):</strong> Requires consistent product positioning and speed for accurate code placement.</li>
                <li><strong>Case packer and palletizer:</strong> The conveyor must deliver product in a defined orientation and grouping pattern for case loading.</li>
              </ul>

              <h2>Step 5: Choose Material and Hygiene Level</h2>
              <p>
                Material selection affects both cost and long-term maintenance:
              </p>
              <ul>
                <li><strong>SUS304 stainless steel frame:</strong> Standard for food and beverage; cleanable with standard sanitizers; corrosion-resistant.</li>
                <li><strong>Carbon steel with paint or coating:</strong> Standard for non-food industrial applications; lower cost; requires more maintenance in wet environments.</li>
                <li><strong>Belt material:</strong> PU (polyurethane) belts for food; rubber or PVC for industrial. Belt material affects grip, cleanability, and chemical resistance.</li>
                <li><strong>IP rating for motors and electronics:</strong> Wash-down rated (IP65/IP67) for food applications where hose-down cleaning is required.</li>
              </ul>

              <h2>Full Line vs Standalone Transfer Conveyor</h2>
              <p>
                Not every project needs a complete automated flow. Two common scenarios:
              </p>
              <ul>
                <li><strong>Standalone transfer:</strong> A single belt conveyor connecting two machines that are otherwise manually operated. Lowest investment, solves a specific bottleneck.</li>
                <li><strong>Full automated flow:</strong> Conveyor integration from filling through inspection, coding, case packing, and palletizing. Higher investment but reduces total labor and improves consistency.</li>
              </ul>
              <p>
                Many operations start with a standalone transfer and add integration steps as production volume grows. If this is your plan, discuss it with the manufacturer upfront so the initial conveyor is designed with connection points for future additions.
              </p>
              <p>
                For full production line solutions, see our <a href={`/${l}/solutions`}>solutions page</a> for line integration examples.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Describe your product, line layout, and integration needs — we'll design the right conveyor setup.
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What conveyor is suitable for powder bags?</h3>
              <p>A flat belt conveyor with adjustable side guides is standard for powder bags. Gentle incline angles work for modest elevation changes. <a href={`/${l}/machines/conveyor-system`}>See our conveyor system range</a> for available configurations.</p>

              <h3>How do I choose a conveyor for bottles or cartons?</h3>
              <p>Belt conveyor with appropriate width and speed. Bottles need side guide rails to prevent tipping. Carton handling may need guide alignment before sealing. <a href={`/${l}/recommend`}>Use our recommendation form</a> with your container dimensions.</p>

              <h3>Can a conveyor be integrated into an existing line?</h3>
              <p>Yes. Provide existing machine specs and floor layout for integration design. <a href={`/${l}/contact`}>Contact our engineers</a> for an integration assessment.</p>

              <h3>What information is needed for conveyor planning?</h3>
              <p>Product type and weight per unit, line speed, floor layout dimensions, elevation changes, integration points needed, and hygiene level. See our full range of solutions at <a href={`/${l}/machinery`}>our machinery page</a>.</p>

              <h3>Do I need a full line or just a transfer conveyor?</h3>
              <p>Depends on your automation goal. We can design anything from a single transfer segment to a complete automated flow. Describe your current setup and target state — we'll recommend the right scope.</p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Need a conveyor designed?</h3>
                <p className="mt-2 text-sm text-gray-600">Share your product type, line speed, and floor layout. We'll design a conveyor system that fits — factory direct from Taiwan.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  Get a Recommendation
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Related</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={`/${l}/machines/conveyor-system`} className="text-accent-600 hover:underline">Conveyor System</a>
                  </li>
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
                <p className="mt-2 text-sm text-gray-600">Our technical team can review your floor layout and line configuration to design the right conveyor integration.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
