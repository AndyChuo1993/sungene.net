/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'how-to-choose-pouch-packing-machine'
const CATEGORY_LABEL = 'Selection Guide'

const TITLE = 'How to Choose a Pouch Packing Machine: Pouch Type and Product State Guide'
const DESCRIPTION = 'Start with pouch type and product state — these two factors narrow down 80% of pouch packing machine selection. A complete guide for buyers choosing between VFFS, premade pouch, and HFFS.'

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
        name: 'Can one pouch packing machine handle multiple pouch sizes?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most VFFS and premade pouch filling machines allow size adjustment within a specified range. The extent of adjustment varies by machine — some allow quick-change toolless adjustments across a wide range, while others require changeover parts for significant size differences. Specify all your SKU sizes at inquiry.' }
      },
      {
        '@type': 'Question',
        name: 'What is the minimum bag size available?',
        acceptedAnswer: { '@type': 'Answer', text: 'Minimum bag size depends on machine type and configuration. Stick pack machines and sachet fillers handle very small formats. VFFS machines have a minimum bag width determined by the forming collar size. Contact SunGene with your minimum bag dimensions for confirmation.' }
      },
      {
        '@type': 'Question',
        name: 'What film thickness is compatible with VFFS machines?',
        acceptedAnswer: { '@type': 'Answer', text: 'Film thickness compatibility depends on the sealing jaw design and temperature settings. Standard VFFS machines handle a range of common packaging films. Specify your film supplier and film specification (material, thickness, and structure) at inquiry so we can confirm compatibility.' }
      },
      {
        '@type': 'Question',
        name: 'What output speeds are typical for pouch packing machines?',
        acceptedAnswer: { '@type': 'Answer', text: 'Output speed is configurable and depends on bag size, product, and machine type. High-speed VFFS lines paired with multihead weighers achieve the highest throughput for granule and snack applications. Share your target bags-per-minute with our team for a specific recommendation.' }
      },
      {
        '@type': 'Question',
        name: 'Is the machine compatible with pre-printed film rolls from my film supplier?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. VFFS machines are designed to run pre-printed film rolls with a film registration sensor that aligns printed graphics to the seal position. Provide your film specifications and print registration details so the machine can be configured correctly.' }
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
                Start with two questions: what pouch format do you need, and what is your product's physical state? These two factors alone narrow machine selection by 80% before you even look at speed or budget.
              </p>

              <h2>Pouch Formats Explained</h2>
              <p>
                Each pouch format typically requires a specific machine type or configuration:
              </p>
              <ul>
                <li><strong>Pillow bag:</strong> The most common format — formed by a VFFS machine from a flat film roll. Suitable for powders, granules, snacks, frozen goods.</li>
                <li><strong>Stand-up doypack (premade):</strong> A pre-formed pouch with a broad flat bottom that stands upright on-shelf. Filled by a premade pouch filler with rotary grippers. Higher cost per pouch but strong retail presence.</li>
                <li><strong>Flat-bottom bag:</strong> VFFS variation with bottom-forming jaws — combines the manufacturing efficiency of VFFS with a flat-bottom retail appearance.</li>
                <li><strong>Stick pack:</strong> Narrow, elongated sachet — produced by a dedicated stick pack machine. Common for single-serve sachets (coffee, sugar, powder).</li>
                <li><strong>Sachet (4-side seal):</strong> Flat sachet sealed on all four sides — produced on a sachet filler. Common for condiments, samples, spice sachets.</li>
                <li><strong>Flow wrap:</strong> Horizontal flow wrapper (HFFS) — for solid, individually portioned items like bars, biscuits, and produce.</li>
              </ul>

              <h2>Product State → Machine Type</h2>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Product State</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Typical Pouch Format</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Recommended Machine</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Dry, free-flowing (powders, granules)</td>
                      <td className="border border-gray-200 px-4 py-2">Pillow bag, flat-bottom, gusseted</td>
                      <td className="border border-gray-200 px-4 py-2">VFFS + auger or cup filler</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Snacks and granules (chips, nuts, frozen)</td>
                      <td className="border border-gray-200 px-4 py-2">Pillow bag, gusseted, flat-bottom</td>
                      <td className="border border-gray-200 px-4 py-2">VFFS + multihead weigher</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Liquids and pastes</td>
                      <td className="border border-gray-200 px-4 py-2">Stand-up doypack, sachet, pillow bag</td>
                      <td className="border border-gray-200 px-4 py-2">Premade pouch filler or VFFS with liquid jaws</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Solid items (bars, blocks, produce)</td>
                      <td className="border border-gray-200 px-4 py-2">Flow wrap</td>
                      <td className="border border-gray-200 px-4 py-2">HFFS (horizontal flow wrapper)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Small single-serve (sugar, coffee)</td>
                      <td className="border border-gray-200 px-4 py-2">Stick pack, 4-side seal sachet</td>
                      <td className="border border-gray-200 px-4 py-2">Stick pack machine or sachet filler</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Output Rate Considerations</h2>
              <p>
                Once you know your machine type, output rate helps determine automation level and whether single-head or multi-head configurations are needed:
              </p>
              <ul>
                <li>Low volume (artisan / starter): manual or semi-automatic VFFS or premade pouch filler</li>
                <li>Medium volume: fully automatic single-head VFFS or premade pouch line</li>
                <li>High volume (industrial): multi-head VFFS or high-speed rotary premade pouch filler</li>
              </ul>
              <p>
                Output speed is configurable — share your bags-per-minute or kg-per-hour target with our team for a specific recommendation.
              </p>

              <h2>Film and Material Compatibility</h2>
              <p>
                VFFS machines run film from a roll. The choice of film affects barrier properties, shelf life, and machine sealing requirements:
              </p>
              <ul>
                <li><strong>PET/PE laminate:</strong> General food packaging — good clarity and seal strength</li>
                <li><strong>Foil laminates (PET/foil/PE):</strong> High barrier — used for coffee, spices, products requiring aroma or moisture protection</li>
                <li><strong>Kraft paper laminate:</strong> Premium or natural appearance for retail-oriented products</li>
                <li><strong>Biodegradable / compostable films:</strong> Available — sealing parameters differ from conventional films; confirm compatibility at inquiry</li>
              </ul>

              <h2>SunGene Pouch Packing Machines</h2>
              <p>
                SunGene manufactures VFFS machines, premade pouch fillers, and HFFS flow wrappers with <strong>SUS304 or SUS316L stainless steel</strong> construction on product-contact surfaces. All machines are CE certified and ship factory-direct from Taiwan. Voltage is configurable to 220V, 380V, or 480V — 50Hz or 60Hz.
              </p>
              <p>
                Explore our <a href={`/${l}/machines/pouch-packing-machine`}>pouch packing machines</a> or <a href={`/${l}/machinery`}>browse the full machinery range</a>. Ready to find the right pouch packer?
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Get a Pouch Packing Machine Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>Can one pouch packing machine handle multiple pouch sizes?</h3>
              <p>Yes. Most VFFS and premade pouch filling machines allow size adjustment within a specified range. Specify all your SKU sizes at inquiry so we can confirm the adjustment range and whether any changeover parts are required.</p>

              <h3>What is the minimum bag size available?</h3>
              <p>Minimum bag size depends on machine type and configuration. Stick pack machines and sachet fillers handle very small formats. VFFS machines have a minimum bag width determined by the forming collar size. <a href={`/${l}/contact`}>Contact SunGene</a> with your minimum bag dimensions for confirmation.</p>

              <h3>What film thickness is compatible with VFFS machines?</h3>
              <p>Film thickness compatibility depends on the sealing jaw design and temperature settings. Specify your film supplier and film specification (material, thickness, and structure) at inquiry so we can confirm compatibility.</p>

              <h3>What output speeds are typical for pouch packing machines?</h3>
              <p>Output speed is configurable and depends on bag size, product, and machine type. High-speed VFFS lines paired with multihead weighers achieve the highest throughput. Share your target bags-per-minute for a specific recommendation.</p>

              <h3>Is the machine compatible with pre-printed film rolls from my film supplier?</h3>
              <p>Yes. VFFS machines are designed to run pre-printed film rolls with a film registration sensor that aligns printed graphics to the seal position. Provide your film specifications and print registration details so the machine can be configured correctly.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Find Your Pouch Packer</h3>
                <p className="mt-2 text-sm text-gray-600">Tell us your pouch format, product type, and output target. We'll recommend the right machine.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  Get a Recommendation
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Related Machines</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={`/${l}/machines/pouch-packing-machine`} className="text-accent-600 hover:underline">Pouch Packing Machine</a>
                  </li>
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
                <p className="mt-2 text-sm text-gray-600">Our team can review your pouch design, film specification, and product requirements before you commit.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
