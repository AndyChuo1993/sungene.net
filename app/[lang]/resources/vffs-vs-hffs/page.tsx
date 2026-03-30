/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'vffs-vs-hffs'
const CATEGORY = 'comparison'
const CATEGORY_LABEL = 'Comparison'

const TITLE = 'VFFS vs HFFS Packaging Machines: Which Is Right for Your Product?'
const DESCRIPTION = 'Compare vertical form fill seal (VFFS) and horizontal form fill seal (HFFS) machines across bag styles, product types, speed, footprint, and cost to make the right choice.'

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
        name: 'What products are best suited for VFFS machines?',
        acceptedAnswer: { '@type': 'Answer', text: 'VFFS machines excel with free-flowing products such as powders, granules, snacks, coffee, and seeds. Any product that can be metered from above into a vertical tube is a strong candidate for VFFS packaging.' }
      },
      {
        '@type': 'Question',
        name: 'Can an HFFS machine handle powders or liquids?',
        acceptedAnswer: { '@type': 'Answer', text: 'HFFS machines are primarily designed for solid or semi-solid products fed horizontally. While some configurations can handle sachets with powder inserts, VFFS or premade pouch fillers are generally a better fit for free-flowing powders and liquids.' }
      },
      {
        '@type': 'Question',
        name: 'Which machine is faster, VFFS or HFFS?',
        acceptedAnswer: { '@type': 'Answer', text: 'Speed depends on product and configuration. VFFS machines paired with multihead weighers can achieve very high output for granules and snacks. HFFS machines operate at speeds matched to the product-feeding system. Both are configurable — contact SunGene for output targets specific to your product.' }
      },
      {
        '@type': 'Question',
        name: 'Is there a significant cost difference between VFFS and HFFS?',
        acceptedAnswer: { '@type': 'Answer', text: 'Both machine types span a wide price range depending on automation level, materials, and accessories. Entry-level VFFS machines tend to be more accessible for small-scale operations, while high-speed systems for either type represent a larger investment. Contact SunGene for a factory-direct quotation.' }
      },
      {
        '@type': 'Question',
        name: 'Can I upgrade my packaging machine later as my output grows?',
        acceptedAnswer: { '@type': 'Answer', text: 'SunGene designs machines with upgradability in mind. Many control systems, weighing heads, and feeding mechanisms can be added or replaced. Discuss your growth roadmap with our engineers at the time of inquiry so we can recommend a scalable configuration.' }
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
                Bottom line: choose VFFS for free-flowing products like powders, granules, and snacks — choose HFFS for solid, individually portioned, or irregularly shaped items wrapped horizontally.
              </p>

              <h2>What Is a VFFS Machine?</h2>
              <p>
                A Vertical Form Fill Seal (VFFS) machine forms a bag from a flat film roll, fills it from above, and seals it — all in a continuous vertical motion. The product is metered into the tube by an auger filler, volumetric cup, or weigher mounted directly above the machine.
              </p>
              <p>
                VFFS is the workhorse of the packaging industry for products such as:
              </p>
              <ul>
                <li>Powders: flour, spices, protein powder, instant coffee, cocoa</li>
                <li>Granules: sugar, rice, seeds, pet food, fertilizer</li>
                <li>Snacks: chips, popcorn, puffed snacks, nuts, dried fruit</li>
                <li>Small solid items: candy, frozen peas, hardware components</li>
              </ul>
              <p>
                Common bag styles produced by VFFS include pillow bags, quad-seal bags, gusseted bags, and stand-up pouches with a zipper (depending on the film and jaw configuration).
              </p>

              <h2>What Is an HFFS Machine?</h2>
              <p>
                A Horizontal Form Fill Seal (HFFS) machine — often called a flow wrapper — forms a bag around the product as it travels horizontally on a conveyor. A reel of film wraps around each item and is sealed at the ends and along the back seam.
              </p>
              <p>
                HFFS is the standard choice for:
              </p>
              <ul>
                <li>Solid bars: chocolate, granola bars, cereal bars, soap</li>
                <li>Individually wrapped items: biscuits, crackers, single-serve portions</li>
                <li>Blocks and slabs: cheese blocks, butter, tofu</li>
                <li>Bakery products: buns, rolls, sliced bread</li>
              </ul>
              <p>
                The resulting package is called a flow wrap — a pillow-style wrapper with fin seals at each end. It conforms closely to the product's shape, giving a clean retail appearance.
              </p>

              <h2>Side-by-Side Comparison</h2>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Factor</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">VFFS</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">HFFS (Flow Wrapper)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Product type</td>
                      <td className="border border-gray-200 px-4 py-2">Free-flowing powders, granules, snacks</td>
                      <td className="border border-gray-200 px-4 py-2">Solid, shaped, or individually portioned items</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Product flowability</td>
                      <td className="border border-gray-200 px-4 py-2">Must flow freely (gravity or auger fed)</td>
                      <td className="border border-gray-200 px-4 py-2">Does not need to flow — placed on conveyor</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Bag styles</td>
                      <td className="border border-gray-200 px-4 py-2">Pillow bag, quad-seal, gusset, stick pack</td>
                      <td className="border border-gray-200 px-4 py-2">Flow wrap (fin-seal pillow)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Machine orientation</td>
                      <td className="border border-gray-200 px-4 py-2">Vertical — compact floor plan</td>
                      <td className="border border-gray-200 px-4 py-2">Horizontal — longer footprint</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Fill method</td>
                      <td className="border border-gray-200 px-4 py-2">Auger, volumetric cup, weigher above machine</td>
                      <td className="border border-gray-200 px-4 py-2">Product placed on infeed conveyor</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Output speed</td>
                      <td className="border border-gray-200 px-4 py-2">Configurable — depends on product and weigher</td>
                      <td className="border border-gray-200 px-4 py-2">Configurable — depends on product size and infeed</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Film compatibility</td>
                      <td className="border border-gray-200 px-4 py-2">PET/PE, foil, kraft + PE, biodegradable films</td>
                      <td className="border border-gray-200 px-4 py-2">BOPP, PET/PE, OPP — thinner films typical</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Investment range</td>
                      <td className="border border-gray-200 px-4 py-2">Wide — entry to fully automated lines</td>
                      <td className="border border-gray-200 px-4 py-2">Wide — compact to high-speed servo systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Decision Factors</h2>
              <p>Use these five questions to narrow your selection:</p>
              <ol>
                <li><strong>Product flowability:</strong> Can your product be poured or metered? If yes, VFFS is likely the right choice. If your product must be placed individually, HFFS is the answer.</li>
                <li><strong>Target bag style:</strong> Pillow bag, quad-seal, or gusseted pouch → VFFS. Flow wrap closely conforming to product shape → HFFS.</li>
                <li><strong>Output target:</strong> Both machines are configurable. Share your bags-per-hour or kg-per-hour target with our team so we can recommend the correct filler pairing.</li>
                <li><strong>Floor space:</strong> VFFS machines have a smaller footprint. If factory floor space is limited, VFFS is generally the more space-efficient option.</li>
                <li><strong>Future flexibility:</strong> VFFS machines can be paired with multiple filler types (auger, cup, weigher) depending on what you're running. This makes them versatile across product changeovers.</li>
              </ol>

              <h2>SunGene Manufactures Both</h2>
              <p>
                SunGene is a Taiwan-based factory-direct manufacturer producing both VFFS and HFFS packaging machines. Every machine is CE certified and built with <strong>SUS304 or SUS316L stainless steel</strong> on all product-contact surfaces. Voltage is fully configurable to your local standard — 220V, 380V, 480V, 50Hz or 60Hz — at no additional cost.
              </p>
              <p>
                We ship factory-direct, meaning no middlemen, with full technical documentation, Declaration of Conformity, and video factory acceptance testing (FAT) available on request. Our engineering team can advise on the right configuration, weigher pairing, and film specification for your product before purchase.
              </p>
              <p>
                Not sure which machine fits your product? Use our recommendation tool to describe your requirements and receive a tailored suggestion within one business day.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Get a Machine Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What products are best suited for VFFS machines?</h3>
              <p>VFFS machines excel with free-flowing products such as powders, granules, snacks, coffee, and seeds. Any product that can be metered from above into a vertical tube is a strong candidate for VFFS packaging.</p>

              <h3>Can an HFFS machine handle powders or liquids?</h3>
              <p>HFFS machines are primarily designed for solid or semi-solid products fed horizontally. While some configurations can handle sachets with powder inserts, VFFS or premade pouch fillers are generally a better fit for free-flowing powders and liquids.</p>

              <h3>Which machine is faster, VFFS or HFFS?</h3>
              <p>Speed depends on product and configuration. VFFS machines paired with multihead weighers can achieve very high output for granules and snacks. HFFS machines operate at speeds matched to the product-feeding system. Both are configurable — <a href={`/${l}/contact`}>contact SunGene</a> for output targets specific to your product.</p>

              <h3>Is there a significant cost difference between VFFS and HFFS?</h3>
              <p>Both machine types span a wide price range depending on automation level, materials, and accessories. Entry-level VFFS machines tend to be more accessible for small-scale operations. Contact SunGene for a factory-direct quotation based on your exact requirements.</p>

              <h3>Can I upgrade my packaging machine later as my output grows?</h3>
              <p>SunGene designs machines with upgradability in mind. Many control systems, weighing heads, and feeding mechanisms can be added or replaced. Discuss your growth roadmap with our engineers at the time of inquiry so we can recommend a scalable configuration.</p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Not sure which machine?</h3>
                <p className="mt-2 text-sm text-gray-600">Describe your product and packaging goals. We'll recommend the right machine — factory direct from Taiwan.</p>
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
                    <a href={`/${l}/machines/snack-processing-line`} className="text-accent-600 hover:underline">Snack Processing Line</a>
                  </li>
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">View All Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Speak to an Engineer</h3>
                <p className="mt-2 text-sm text-gray-600">Our technical team can advise on machine selection, film compatibility, and line layout.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
