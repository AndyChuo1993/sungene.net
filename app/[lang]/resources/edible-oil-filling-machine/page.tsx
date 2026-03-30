/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'edible-oil-filling-machine'
const CATEGORY = 'application_guide'
const CATEGORY_LABEL = 'Application Guide'

const TITLE = 'Edible Oil Filling Machine: What Matters Most for Bottle Filling Projects'
const META_TITLE = 'Edible Oil Filling Machine Guide | Bottle Filling Selection | SunGene'
const DESCRIPTION = 'Learn how to choose an edible oil filling machine based on bottle size, oil type, speed target, and automation level.'

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
        name: 'What machine is used for edible oil bottle filling?',
        acceptedAnswer: { '@type': 'Answer', text: 'A piston filler or flow-meter filler is used for edible oil bottle filling. Piston fillers offer accurate volumetric dosing per stroke; flow-meter fillers measure volume continuously and suit higher-speed automated lines. The right choice depends on your accuracy requirement and output target.' }
      },
      {
        '@type': 'Question',
        name: 'Can one line handle multiple bottle sizes?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, with adjustable conveyors, guide rails, and changeover tooling. The line should be designed for your full bottle range from the start — adding changeover flexibility after the fact is more expensive. Provide your complete bottle size range (min and max volume) at inquiry stage.' }
      },
      {
        '@type': 'Question',
        name: 'Is edible oil filling usually semi-automatic or fully automatic?',
        acceptedAnswer: { '@type': 'Answer', text: 'This depends on output requirement. Semi-automatic filling is common for small operations (under 500 bottles/hr) where the operator places bottles and triggers the fill. Fully automatic lines handle bottle feeding, filling, capping, labeling, and coding with minimal manual input — suitable for 1000+ bottles/hr.' }
      },
      {
        '@type': 'Question',
        name: 'What output speed is common for edible oil filling?',
        acceptedAnswer: { '@type': 'Answer', text: 'Output is configurable based on the number of filling heads and automation level. Typical ranges: 300–800 bottles/hr for semi-auto; 1000–3000+ bottles/hr for fully automatic multi-head systems. Share your target output at inquiry to receive an appropriately sized configuration.' }
      },
      {
        '@type': 'Question',
        name: 'What information is needed for a quote?',
        acceptedAnswer: { '@type': 'Answer', text: 'Provide: oil type (cooking oil, olive oil, palm oil, etc.), bottle sizes you need to run (min and max volume), cap type (screw, snap, pump), target output (bottles/hr), whether you need a complete line or standalone filler, and destination country plus local voltage.' }
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
                Bottom line: edible oil filling decisions center on bottle size range, line integration need, and output — not just machine brand.
              </p>

              <h2>Oil Types: What Changes and What Doesn't</h2>
              <p>
                From a filling machine perspective, most edible oils — cooking oil, sunflower oil, olive oil, palm oil, blended oils — have similar viscosity and behave similarly at room temperature. The machine choice is rarely determined by oil type alone.
              </p>
              <p>
                What does matter:
              </p>
              <ul>
                <li><strong>Fill temperature:</strong> Palm oil may need to be filled at elevated temperature to maintain flowability; this affects pump selection and material compatibility.</li>
                <li><strong>Oil clarity:</strong> Unrefined or cloudy oils (cold-pressed olive oil, sesame oil) don't affect machine choice but may require visual inspection steps downstream.</li>
                <li><strong>Foaming:</strong> Some oils foam when filled at high speed — nozzle design (bottom-up filling vs top-fill) and speed control can manage this.</li>
              </ul>

              <h2>Single Machine vs Full Line</h2>
              <p>
                The most important architectural decision is whether you need a standalone filler or a complete bottling line:
              </p>
              <ul>
                <li><strong>Small output (under 500 bottles/hr):</strong> A semi-automatic filler where the operator places bottles, triggers the fill, and caps manually. Lower investment, flexible for multiple SKUs.</li>
                <li><strong>Medium output (500–2000 bottles/hr):</strong> Automatic filler with conveyor integration; capping station added as the next step. Typically a 2–3 machine configuration.</li>
                <li><strong>High output (2000+ bottles/hr):</strong> Full automatic line: bottle unscrambler or depalletizer, auto filler, capping, labeling, coding, case packing. Each step integrated with conveyor.</li>
              </ul>
              <p>
                Buying a line in stages is common — many buyers start with a filler and add capping and labeling as output grows. If this is your plan, confirm with the manufacturer that the machines are designed for future integration.
              </p>

              <h2>Bottle Size Range Is Critical</h2>
              <p>
                Running multiple bottle sizes (250ml, 500ml, 1L, 2L, 5L) on one line requires changeover tooling designed into the machine from the start. Key factors:
              </p>
              <ul>
                <li>Conveyor width and guide rail adjustability</li>
                <li>Filling nozzle height adjustment for different bottle heights</li>
                <li>Cap feeder and tightener compatibility with different cap sizes</li>
                <li>Labeler adjustment for different bottle diameter and label positions</li>
              </ul>
              <p>
                Single bottle size is simpler and usually lower cost. If you run multiple sizes, define the full range at inquiry stage — retrofit changeover tooling costs more than including it in the original design.
              </p>

              <h2>Key Selection Criteria</h2>
              <ul>
                <li><strong>Output target:</strong> Bottles per hour drives the number of filling heads and overall machine footprint.</li>
                <li><strong>Bottle material:</strong> PET, HDPE, or glass — glass is heavier and requires different conveyor and handling design.</li>
                <li><strong>Cap type:</strong> Screw cap, snap cap, or pump dispenser — each requires a different capping station.</li>
                <li><strong>Single vs multi-head filling:</strong> Multi-head fillers increase output without increasing overall machine footprint significantly.</li>
                <li><strong>Line integration:</strong> Will you add labeling, coding (date/lot), case packing, or palletizing now or in future?</li>
              </ul>

              <h2>Filling Accuracy and Measurement Technology</h2>
              <p>
                Three measuring technologies are used for edible oil filling, each with different accuracy and cost implications:
              </p>
              <ul>
                <li><strong>Flow meter:</strong> Electromagnetic or Coriolis flow meter measures flow continuously — high accuracy, suitable for high-speed automated lines, higher component cost.</li>
                <li><strong>Servo piston:</strong> Positive displacement — cylinder stroke volume is precise and repeatable. Good for mid-range output with high accuracy.</li>
                <li><strong>Time-gravity:</strong> Fill time controls volume — lower cost, suitable for consistent thin liquids at lower output. Less accurate for variable production conditions.</li>
              </ul>
              <p>
                For regulated retail markets with net content labeling requirements, confirm your required tolerance before selecting filling technology.
              </p>

              <h2>Voltage, CE, and Export Documentation</h2>
              <p>
                SunGene machines are CE certified and voltage-configurable at order stage — 220V single-phase, 380V three-phase, 480V three-phase, 50Hz or 60Hz. CE Declaration of Conformity is included. For food and beverage applications, product-contact material documentation is available on request.
              </p>

              <h2>5 Questions to Answer Before Requesting a Quote</h2>
              <ol>
                <li>What oil type(s) are you filling, and at what temperature?</li>
                <li>What bottle sizes do you need to run (min and max volume)?</li>
                <li>What cap type — screw, snap, or pump dispenser?</li>
                <li>What is your target output in bottles per hour?</li>
                <li>Do you need a standalone filler only, or a complete line with capping, labeling, and coding?</li>
              </ol>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Tell us your oil, bottle size, and output target — we'll recommend the right setup.
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What machine is used for edible oil bottle filling?</h3>
              <p>A piston filler or flow-meter filler is standard for edible oil. The right choice depends on accuracy requirement and target output. <a href={`/${l}/machines/liquid-filling-machine`}>See our liquid filling machine range</a> for available configurations.</p>

              <h3>Can one line handle multiple bottle sizes?</h3>
              <p>Yes, with the right changeover tooling designed in from the start. Provide your full bottle size range at inquiry. <a href={`/${l}/recommend`}>Use our recommendation form</a> to describe your requirements.</p>

              <h3>Is edible oil filling usually semi-automatic or fully automatic?</h3>
              <p>Depends on output. Semi-auto suits operations under 500 bottles/hr; fully automatic lines are standard for 1000+ bottles/hr. <a href={`/${l}/contact`}>Contact our team</a> to discuss your production scenario.</p>

              <h3>What output speed is common?</h3>
              <p>Configurable based on the number of filling heads and automation level. Typical range: 300–3000+ bottles/hr. Share your target at inquiry. Browse <a href={`/${l}/machinery`}>our full machinery range</a> for machine types available.</p>

              <h3>What information is needed for a quote?</h3>
              <p>Oil type, bottle sizes (min and max), cap type, target output, standalone filler vs complete line, and destination country plus voltage.</p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Not sure which configuration?</h3>
                <p className="mt-2 text-sm text-gray-600">Describe your oil, bottle sizes, and output target. We'll recommend the right filling solution — factory direct from Taiwan.</p>
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
                <p className="mt-2 text-sm text-gray-600">Our technical team can advise on filling head count, bottle handling, and line integration for your edible oil project.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
