/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'spice-powder-packaging-machine'
const CATEGORY = 'application_guide'
const CATEGORY_LABEL = 'Application Guide'

const TITLE = 'How to Choose the Right Spice Powder Packaging Machine'
const META_TITLE = 'Spice Powder Packaging Machine Guide | How to Choose the Right Filling System | SunGene'
const DESCRIPTION = 'Learn how to choose the right spice powder packaging machine based on powder flowability, bag type, filling accuracy, and target output.'

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
        name: 'What machine is best for spice powder packaging?',
        acceptedAnswer: { '@type': 'Answer', text: 'An auger filler paired with a VFFS machine or premade pouch filler is the standard choice for spice powder packaging. The exact type depends on your powder characteristics (flowability, oiliness) and the bag format you need.' }
      },
      {
        '@type': 'Question',
        name: 'Is an auger filler better than a volumetric filler for spices?',
        acceptedAnswer: { '@type': 'Answer', text: 'Auger fillers are preferred for fine or slightly sticky powders like turmeric, chili, or garlic powder because they deliver better dosing accuracy. Volumetric cup fillers can work for free-flowing, granular seasonings where precision requirements are lower.' }
      },
      {
        '@type': 'Question',
        name: 'Can spice powder be packed in stand-up pouches?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. A premade pouch filler with auger dosing head is the standard path for stand-up doypacks or zipper pouches. This is common for premium retail spice packaging.' }
      },
      {
        '@type': 'Question',
        name: 'How do you reduce dust during spice powder filling?',
        acceptedAnswer: { '@type': 'Answer', text: 'Dust control relies on a dust-tight hopper design, slow-feed auger control to reduce air turbulence, a sealed filling chamber, and optional dust extraction at the fill point. These measures protect operators and maintain a clean production environment.' }
      },
      {
        '@type': 'Question',
        name: 'What information should I provide before asking for a quote?',
        acceptedAnswer: { '@type': 'Answer', text: 'To receive an accurate recommendation, provide: spice type, target fill weight, bag format (pillow, doypack, zipper, sachet, stick pack), output target (bags/min), and destination country plus local voltage.' }
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
                Bottom line: for most spice powder applications, an auger filler matched with a VFFS or premade pouch system is the right starting point. The exact configuration depends on flowability, fill weight, and packaging format.
              </p>

              <h2>Spice Powder Characteristics That Affect Machine Selection</h2>
              <p>
                Not all spice powders behave the same way on a packaging machine. Ground chili, cumin, turmeric, garlic powder, and mixed seasoning blends differ in particle size, oil content, moisture absorption, and dust generation — and each of these properties directly affects machine design and filling performance.
              </p>
              <ul>
                <li><strong>Particle size:</strong> Fine powders like turmeric require tighter dust control and more precise auger pitch selection than coarser blends.</li>
                <li><strong>Oil content:</strong> High-oil powders (paprika, certain chili blends) can cake or adhere to machine surfaces — easy-clean design becomes critical.</li>
                <li><strong>Hygroscopicity:</strong> Powders that absorb moisture from the air require sealed hoppers and fast filling to preserve flow characteristics.</li>
                <li><strong>Dust generation:</strong> Fine airborne particles affect operator safety, machine cleanliness, and filling accuracy — dust extraction at the fill point is often necessary.</li>
              </ul>
              <p>
                Sharing a product sample or data sheet before machine selection allows the engineering team to recommend the correct auger pitch, hopper geometry, and filling speed for your specific spice.
              </p>

              <h2>Key Selection Factors</h2>
              <ul>
                <li><strong>Product flowability</strong> — free-flowing vs slightly sticky vs hygroscopic</li>
                <li><strong>Target fill weight</strong> — sachets (5–30g) vs retail pouches (50–500g) vs bulk</li>
                <li><strong>Packaging format</strong> — pillow bag, stand-up doypack, zipper pouch, stick pack, sachet</li>
                <li><strong>Required filling accuracy</strong> — typically ±0.5–2% for spices, depending on fill weight and product value</li>
                <li><strong>Target output</strong> — bags per minute drives machine configuration and filler pairing</li>
                <li><strong>Aroma retention</strong> — nitrogen flushing option for premium products with shelf-life requirements</li>
              </ul>

              <h2>Machine Path Comparison</h2>
              <div className="not-prose overflow-x-auto">
                <table className="w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Factor</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Auger + VFFS</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Auger + Premade Pouch</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Volumetric + VFFS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Filling accuracy</td>
                      <td className="border border-gray-200 px-4 py-2">High (±0.5–1%)</td>
                      <td className="border border-gray-200 px-4 py-2">High (±0.5–1%)</td>
                      <td className="border border-gray-200 px-4 py-2">Moderate (±1–3%)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Output speed</td>
                      <td className="border border-gray-200 px-4 py-2">High</td>
                      <td className="border border-gray-200 px-4 py-2">Medium</td>
                      <td className="border border-gray-200 px-4 py-2">High</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Packaging flexibility</td>
                      <td className="border border-gray-200 px-4 py-2">Pillow, gusset, quad-seal</td>
                      <td className="border border-gray-200 px-4 py-2">Doypack, zipper, flat-bottom</td>
                      <td className="border border-gray-200 px-4 py-2">Pillow, gusset</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Best for</td>
                      <td className="border border-gray-200 px-4 py-2">Most spice powders, retail + foodservice</td>
                      <td className="border border-gray-200 px-4 py-2">Premium retail, stand-up pouches</td>
                      <td className="border border-gray-200 px-4 py-2">Free-flowing granular seasonings</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Relative cost</td>
                      <td className="border border-gray-200 px-4 py-2">Medium</td>
                      <td className="border border-gray-200 px-4 py-2">Medium–high</td>
                      <td className="border border-gray-200 px-4 py-2">Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Packaging Formats for Spices</h2>
              <ul>
                <li><strong>Pillow bag</strong> — standard retail and foodservice; Auger + VFFS</li>
                <li><strong>Stand-up doypack</strong> — premium retail positioning; Auger + Premade Pouch</li>
                <li><strong>Zipper resealable pouch</strong> — consumer convenience; Auger + Premade Pouch with zipper</li>
                <li><strong>Stick pack / sachet</strong> — single-serve, foodservice, OEM; Auger + stick pack machine or sachet machine</li>
                <li><strong>Quad-seal flat-bottom bag</strong> — shelf-display premium; VFFS with quad-seal jaw configuration</li>
              </ul>
              <p>
                See our <a href={`/${l}/machines/powder-filling-machine`}>powder filling machine page</a> for available configurations and <a href={`/${l}/resources/how-to-choose-powder-filling-machine`}>how to choose a powder filling machine</a> for a detailed selection walkthrough.
              </p>

              <h2>Dust Control and Hygiene Design</h2>
              <p>
                Spice powders generate fine airborne particles during filling. A machine designed for spice powder packaging should include:
              </p>
              <ul>
                <li>SUS304 or SUS316L food-contact surfaces — corrosion-resistant, easy to sanitize</li>
                <li>Dust-tight hopper design with sealed agitator to prevent moisture ingress and dust escape</li>
                <li>Slow-feed auger control — the auger reduces speed just before cut-off to minimize impact dust</li>
                <li>Sealed filling chamber at bag neck to contain powder within the bag during fill</li>
                <li>Optional dust extraction port at fill area for high-dust products</li>
              </ul>

              <h2>Export Requirements and Voltage</h2>
              <p>
                SunGene machines are CE certified and built to your destination country's electrical standard. Voltage is configurable: 220V single-phase, 380V three-phase, 480V three-phase, 50Hz or 60Hz — confirmed at order stage at no additional cost. Declaration of Conformity is provided with every machine.
              </p>
              <p>
                For buyers in regulated food markets, all product-contact materials are food-grade and documentation is available on request.
              </p>

              <h2>What to Prepare Before Asking for a Quote</h2>
              <p>To receive a meaningful machine recommendation, prepare the following:</p>
              <ul>
                <li>Spice type (chili, turmeric, mixed seasoning, etc.) and flowability description</li>
                <li>Target fill weight (and whether you have multiple SKUs)</li>
                <li>Bag format (pillow, doypack, zipper, stick, sachet)</li>
                <li>Target output in bags per minute</li>
                <li>Destination country and local voltage/phase</li>
              </ul>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Tell us your spice type, bag size, and output — we'll recommend the right packaging setup.
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What machine is best for spice powder packaging?</h3>
              <p>An auger filler paired with a VFFS machine or premade pouch filler is the standard choice. The exact type depends on your powder characteristics and the bag format you need. <a href={`/${l}/recommend`}>Use our recommendation form</a> for a tailored suggestion.</p>

              <h3>Is an auger filler better than a volumetric filler for spices?</h3>
              <p>Auger fillers are preferred for fine or slightly sticky powders because they provide better dosing accuracy and handle varying bulk densities. Volumetric cup fillers can work for free-flowing granular seasonings where accuracy requirements are lower.</p>

              <h3>Can spice powder be packed in stand-up pouches?</h3>
              <p>Yes. A premade pouch filler with auger dosing is the standard path for stand-up doypacks and zipper pouches — common for premium retail spice lines.</p>

              <h3>How do you reduce dust during spice powder filling?</h3>
              <p>Dust control relies on a sealed hopper design, slow-feed auger control, a sealed filling chamber, and optional dust extraction at the fill point. <a href={`/${l}/contact`}>Contact our engineers</a> to discuss dust requirements for your specific powder.</p>

              <h3>What information should I provide before asking for a quote?</h3>
              <p>Provide: spice type, target fill weight, bag format, output target (bags/min), and destination country plus local voltage. See the full guide on <a href={`/${l}/machinery`}>our machinery range</a> for context on available machine types.</p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Not sure which machine?</h3>
                <p className="mt-2 text-sm text-gray-600">Describe your spice product, bag format, and output target. We'll recommend the right setup — factory direct from Taiwan.</p>
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
                <p className="mt-2 text-sm text-gray-600">Our technical team can advise on auger selection, dust control design, and packaging format options for spice products.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
