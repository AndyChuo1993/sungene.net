/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'premade-pouch-machine-vs-vffs'
const CATEGORY = 'comparison'
const CATEGORY_LABEL = 'Comparison'

const TITLE = 'Premade Pouch Machine vs VFFS: Which Is Better for Your Product?'
const META_TITLE = 'Premade Pouch Machine vs VFFS | Which Packaging Path Fits Your Product? | SunGene'
const DESCRIPTION = 'Compare premade pouch machines and VFFS systems by bag style, cost, speed, and flexibility to choose the right packaging path.'

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
        name: 'What is the difference between premade pouch and VFFS packaging?',
        acceptedAnswer: { '@type': 'Answer', text: 'VFFS (Vertical Form Fill Seal) forms a bag from a flat film roll — the machine creates the bag shape, fills it, and seals it in one continuous process. A premade pouch machine uses bags that are already formed and supplied on a reel or in a stack; the machine opens, fills, and seals each pouch. The economics, bag style options, and output speeds differ significantly between the two.' }
      },
      {
        '@type': 'Question',
        name: 'Which option is more cost-effective?',
        acceptedAnswer: { '@type': 'Answer', text: 'VFFS has lower per-bag packaging material cost because roll film is cheaper than pre-formed bags. However, premade pouch machines can produce higher-presentation packaging formats (doypacks, zipper pouches, flat-bottom bags) that command premium retail positioning. The right choice depends on your product value, target retailer, and volume.' }
      },
      {
        '@type': 'Question',
        name: 'Which machine is better for stand-up pouches?',
        acceptedAnswer: { '@type': 'Answer', text: 'For true stand-up doypacks with zipper closure, a premade pouch machine is the standard choice. VFFS can produce gusseted stand-up bags, but the bag structure and shelf appearance are different from a premade doypack. If your retail requirement is a genuine stand-up zipper pouch, premade pouch is the right path.' }
      },
      {
        '@type': 'Question',
        name: 'Is VFFS better for high-speed production?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, VFFS typically achieves higher output than premade pouch systems. High-speed VFFS lines can reach 120+ bags per minute with multihead weigher pairing. Premade pouch machines typically operate at 20–60 bags per minute depending on bag size and product. For high-volume production where output speed is the priority, VFFS is usually the right choice.' }
      },
      {
        '@type': 'Question',
        name: 'What information helps decide between the two?',
        acceptedAnswer: { '@type': 'Answer', text: 'The key decision inputs are: your product type and fill method, target bag style (pillow vs doypack vs zipper vs flat-bottom), output target in bags per minute, packaging material budget sensitivity, and retailer presentation requirements.' }
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
                Bottom line: VFFS is the better choice when output and material cost matter most; premade pouch wins on presentation, bag style variety, and premium retail positioning.
              </p>

              <h2>How Each Technology Works</h2>

              <h3>VFFS (Vertical Form Fill Seal)</h3>
              <p>
                A VFFS machine takes a flat roll of packaging film, forms it into a tube around a vertical forming collar, fills the tube with product from above via an auger, weigher, or volumetric cup, then creates the top and bottom seals to complete the bag. The entire forming, filling, and sealing cycle happens in one machine. The result is a continuous process with high output potential.
              </p>

              <h3>Premade Pouch Machine</h3>
              <p>
                A premade pouch machine receives bags that have already been formed by a bag manufacturer — supplied in a stack, on a reel, or from a magazine. The machine picks each bag, opens it (usually with air jets or mechanical grippers), fills it with product via a dosing head (auger, piston, pump, or weigher mounted above), then seals the top. Because the bag is already formed, the machine is simpler mechanically but slower than VFFS — and the bag cost per unit is higher.
              </p>
              <p>
                For a broader comparison of film packaging options, see our guide: <a href={`/${l}/resources/vffs-vs-hffs`}>VFFS vs HFFS Packaging Machines</a>.
              </p>

              <h2>Side-by-Side Comparison</h2>
              <div className="not-prose overflow-x-auto">
                <table className="w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Factor</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">VFFS</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Premade Pouch</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Bag appearance</td>
                      <td className="border border-gray-200 px-4 py-2">Good (pillow, gusset)</td>
                      <td className="border border-gray-200 px-4 py-2">Excellent (doypack, zipper, flat-bottom)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Packaging material cost</td>
                      <td className="border border-gray-200 px-4 py-2">Lower (roll film)</td>
                      <td className="border border-gray-200 px-4 py-2">Higher (pre-formed bags)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Output speed</td>
                      <td className="border border-gray-200 px-4 py-2">High (up to 120+ bags/min)</td>
                      <td className="border border-gray-200 px-4 py-2">Medium (20–60 bags/min typical)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Bag style variety</td>
                      <td className="border border-gray-200 px-4 py-2">Limited to what film former allows</td>
                      <td className="border border-gray-200 px-4 py-2">Wide: doypack, zipper, flat-bottom, handle</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Changeover</td>
                      <td className="border border-gray-200 px-4 py-2">Film and format parts change</td>
                      <td className="border border-gray-200 px-4 py-2">Bag size change only</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Initial machine cost</td>
                      <td className="border border-gray-200 px-4 py-2">Medium</td>
                      <td className="border border-gray-200 px-4 py-2">Medium–high</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Best for</td>
                      <td className="border border-gray-200 px-4 py-2">Powders, snacks, granules, high-volume</td>
                      <td className="border border-gray-200 px-4 py-2">Premium retail, liquids in pouches, varied bag styles</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Which Products Suit Each Technology</h2>

              <h3>Products Best Suited for VFFS</h3>
              <ul>
                <li>Free-flowing powders: flour, spices, coffee, cocoa, instant products</li>
                <li>Granules: sugar, rice, seeds, pet food, fertilizer</li>
                <li>Snacks and puffed products: chips, popcorn, nuts, dried fruit</li>
                <li>Frozen products and small solid items</li>
                <li>High-volume production where per-bag material cost matters</li>
              </ul>

              <h3>Products Best Suited for Premade Pouch</h3>
              <ul>
                <li>Sauces and liquids where a doypack with spout is the required format</li>
                <li>Fresh and chilled products requiring stand-up shelf display</li>
                <li>Premium snacks and coffee where the bag itself is a brand asset</li>
                <li>Products requiring genuine zipper reclosure on a stand-up pouch</li>
                <li>Products in flat-bottom bags (also called box pouches) for premium shelf presence</li>
              </ul>

              <h2>Decision Framework</h2>
              <p>Use these four questions to guide the choice:</p>
              <ol>
                <li><strong>Output target:</strong> If you need over 80 bags/min, VFFS is the more natural path. Premade pouch systems can be scaled up but at higher investment.</li>
                <li><strong>Bag style required:</strong> If the product needs a genuine doypack, zipper, or flat-bottom bag with premium appearance, premade pouch. If pillow or gusseted bag is acceptable, VFFS.</li>
                <li><strong>Packaging material budget:</strong> Roll film for VFFS costs significantly less per bag than pre-formed pouches. For a high-volume commodity product, this affects total operating cost materially.</li>
                <li><strong>Retailer requirements:</strong> If a key retail customer specifies a stand-up zipper doypack, you need premade pouch regardless of other factors.</li>
              </ol>

              <h2>When to Choose VFFS</h2>
              <ul>
                <li>Your product is a free-flowing powder or granule that can be metered from above</li>
                <li>Output volume is high and packaging material cost is a key variable</li>
                <li>Pillow bag or gusseted bag format is acceptable for your market</li>
              </ul>

              <h2>When to Choose Premade Pouch</h2>
              <ul>
                <li>Your product requires a stand-up doypack or zipper pouch for retail presentation</li>
                <li>You need to fill liquids, pastes, or products that can't be handled well in a forming-tube VFFS</li>
                <li>Premium bag appearance is a competitive differentiator in your category</li>
              </ul>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Tell us your product, bag style, and output target — we'll recommend the right packaging path.
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What is the difference between premade pouch and VFFS packaging?</h3>
              <p>VFFS forms bags from roll film in one continuous process. Premade pouch uses bags already formed by a bag supplier. Different economics, bag styles, and output speeds. <a href={`/${l}/machines/pouch-packing-machine`}>See our pouch packing machine range</a> for available configurations.</p>

              <h3>Which option is more cost-effective?</h3>
              <p>VFFS has lower per-bag material cost. Premade pouch has higher bag cost but enables premium bag styles that may justify higher retail price. The right answer depends on your product value and volume.</p>

              <h3>Which machine is better for stand-up pouches?</h3>
              <p>For genuine doypacks with zipper closure, premade pouch is the standard choice. VFFS can produce gusseted stand-up bags but the bag structure differs from a true doypack. <a href={`/${l}/recommend`}>Use our recommendation form</a> to get a specific suggestion.</p>

              <h3>Is VFFS better for high-speed production?</h3>
              <p>Yes, VFFS typically achieves higher output. For high-volume production where speed is a priority, VFFS is usually the right choice. <a href={`/${l}/contact`}>Contact our engineers</a> for output estimates specific to your product.</p>

              <h3>What information helps decide?</h3>
              <p>Product type, target bag style, output target (bags/min), packaging material cost sensitivity, and retailer presentation requirements. Browse <a href={`/${l}/machinery`}>our full machinery range</a> for an overview of available systems.</p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Not sure which path?</h3>
                <p className="mt-2 text-sm text-gray-600">Describe your product, bag style preference, and output target. We'll recommend whether VFFS or premade pouch is the right fit.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  Get a Recommendation
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Related Machines</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={`/${l}/machines/pouch-packing-machine`} className="text-accent-600 hover:underline">Pouch Packing Machine (VFFS)</a>
                  </li>
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">View All Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Speak to an Engineer</h3>
                <p className="mt-2 text-sm text-gray-600">Our technical team can advise on bag style, output requirements, and total cost of ownership for both VFFS and premade pouch options.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
