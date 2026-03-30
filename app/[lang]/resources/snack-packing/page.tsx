/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'snack-packing'
const CATEGORY_LABEL = 'Application Guide'

const TITLE = 'Snack Packing Machine Guide: VFFS with Multihead Weigher for Maximum Speed and Accuracy'
const DESCRIPTION = 'Snack packing uses a VFFS machine with multihead weigher for the highest speed and accuracy. This guide covers machine selection for chips, popcorn, nuts, dried fruit, and puffed snacks.'

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
        name: 'Which multihead weigher configuration is best for fragile chips?',
        acceptedAnswer: { '@type': 'Answer', text: 'For fragile snacks like potato chips, a radial multihead weigher with gentle-contact timing gates and a low-drop elevator is recommended to minimize breakage. The number of weigher heads and bucket design should be matched to the chip size and fragility — discuss these requirements with our engineers at inquiry.' }
      },
      {
        '@type': 'Question',
        name: 'Is nitrogen flushing available for snack packaging?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Nitrogen flushing (modified atmosphere packaging or MAP) is a standard option for VFFS snack lines. Replacing the headspace oxygen with nitrogen significantly extends shelf life and maintains product crispness. The VFFS machine includes a gas flushing port and control system for this option.' }
      },
      {
        '@type': 'Question',
        name: 'What is the minimum bag size for snack packing?',
        acceptedAnswer: { '@type': 'Answer', text: 'Minimum bag size depends on the VFFS machine forming collar configuration. Snack pack machines are available in a range of bag widths from small single-serve sizes upward. Contact SunGene with your minimum bag dimensions for confirmation.' }
      },
      {
        '@type': 'Question',
        name: 'What is the maximum output speed for a snack packing line?',
        acceptedAnswer: { '@type': 'Answer', text: 'Output speed is configurable and depends on the multihead weigher configuration, product characteristics, and bag size. High-speed configurations can achieve significant throughput. Contact SunGene with your target bags-per-minute for a line design recommendation.' }
      },
      {
        '@type': 'Question',
        name: 'Are snack packing machines CE certified?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. All SunGene packaging machines — including VFFS machines, multihead weighers, and snack processing lines — are CE certified to the Machinery Directive 2006/42/EC. A Declaration of Conformity is provided with each export shipment.' }
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
                The industry-standard snack packing line combines a multihead weigher (for fast, accurate weight batching) with a VFFS machine (for bag forming, filling, and sealing) — this pairing delivers the highest throughput and lowest per-bag cost for most snack categories.
              </p>

              <h2>Products Covered</h2>
              <p>
                This guide applies to the following snack and food product categories:
              </p>
              <ul>
                <li>Potato chips, corn chips, tortilla chips</li>
                <li>Popcorn (plain, caramel, flavored)</li>
                <li>Puffed snacks (cheese puffs, extruded snacks, rice cakes)</li>
                <li>Nuts and mixed nuts (whole, halved, roasted, flavored)</li>
                <li>Dried fruit (raisins, cranberries, mango slices)</li>
                <li>Trail mix and nut-fruit combinations</li>
                <li>Crackers and biscuits (broken/random shape)</li>
                <li>Candy-coated confections and chocolate pieces</li>
              </ul>

              <h2>Why Multihead Weigher + VFFS Is the Standard</h2>
              <p>
                A multihead (combination) weigher uses multiple weigh buckets arranged in a circle. By combining different bucket loads, it rapidly calculates combinations that match the target weight with high accuracy — typically faster and more accurately than single-head or volumetric systems for free-flowing, irregular products like snacks.
              </p>
              <p>
                The VFFS machine below the weigher receives each weighed batch through a timing gate, then forms a bag from film, deposits the batch, and seals the bag — all in one continuous cycle. The combination delivers high output with consistent, accurate net weights.
              </p>

              <h2>Gentle Handling for Fragile Snacks</h2>
              <p>
                Breakage is a critical quality concern for fragile snacks like potato chips, prawn crackers, and puffed snacks. The weigher design directly affects breakage rate:
              </p>
              <ul>
                <li><strong>Bucket design:</strong> Smooth, polished bucket surfaces and gentle bucket-to-bucket transfer minimize chip fragmentation</li>
                <li><strong>Drop height:</strong> Minimizing the vertical drop distance from weigher to bag former reduces impact damage</li>
                <li><strong>Timing gate:</strong> Gentle-action timing gates release product smoothly rather than dropping abruptly</li>
                <li><strong>Elevator design:</strong> The product elevator feeding the weigher should be designed for low-impact transfer — bucket elevators or incline belt elevators with appropriate speed control</li>
              </ul>

              <h2>Nitrogen Flushing (Modified Atmosphere Packaging)</h2>
              <p>
                Nitrogen flushing — displacing oxygen in the bag headspace with nitrogen gas before sealing — is standard practice for premium snack brands to:
              </p>
              <ul>
                <li>Extend shelf life by preventing oxidation and rancidity</li>
                <li>Maintain crispness by preventing moisture absorption</li>
                <li>Provide cushioning to protect fragile chips during distribution</li>
              </ul>
              <p>
                SunGene VFFS machines include a nitrogen flushing port and flow control as a standard option. Confirm your target residual oxygen level and gas supplier at the time of inquiry.
              </p>

              <h2>Bag Styles for Snacks</h2>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Bag Style</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Best For</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Pillow bag</td>
                      <td className="border border-gray-200 px-4 py-2">Chips, popcorn, puffs</td>
                      <td className="border border-gray-200 px-4 py-2">Most economical; standard for value segment</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Gusseted bag</td>
                      <td className="border border-gray-200 px-4 py-2">Nuts, mixed snacks</td>
                      <td className="border border-gray-200 px-4 py-2">Wider base; better shelf stability than pillow bag</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Flat-bottom (block-bottom)</td>
                      <td className="border border-gray-200 px-4 py-2">Premium nuts, dried fruit</td>
                      <td className="border border-gray-200 px-4 py-2">Stands upright on shelf; strong retail presence</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Quad-seal</td>
                      <td className="border border-gray-200 px-4 py-2">Premium packaging</td>
                      <td className="border border-gray-200 px-4 py-2">Four-panel bag; wide face for branding</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>SunGene Snack Packing Lines</h2>
              <p>
                SunGene supplies complete snack packing lines including multihead weighers, VFFS machines, product elevators, and conveyors. All equipment uses <strong>SUS304 food-grade stainless steel</strong> on product-contact surfaces and is CE certified. Voltage is configurable to your local standard, factory-direct from Taiwan.
              </p>
              <p>
                Explore our <a href={`/${l}/machines/snack-processing-line`}>snack processing line</a>, <a href={`/${l}/machines/pouch-packing-machine`}>pouch packing machine</a>, or <a href={`/${l}/machinery`}>browse all machinery</a>.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Get a Snack Packing Line Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>Which multihead weigher configuration is best for fragile chips?</h3>
              <p>For fragile snacks like potato chips, a radial multihead weigher with gentle-contact timing gates and a low-drop elevator is recommended to minimize breakage. Discuss your chip size and fragility requirements with our engineers at inquiry.</p>

              <h3>Is nitrogen flushing available for snack packaging?</h3>
              <p>Yes. Nitrogen flushing (modified atmosphere packaging) is a standard option for VFFS snack lines. The VFFS machine includes a gas flushing port and control system. Confirm your target residual oxygen level and gas supplier at inquiry.</p>

              <h3>What is the minimum bag size for snack packing?</h3>
              <p>Minimum bag size depends on the VFFS forming collar configuration. <a href={`/${l}/contact`}>Contact SunGene</a> with your minimum bag dimensions for confirmation.</p>

              <h3>What is the maximum output speed for a snack packing line?</h3>
              <p>Output speed is configurable and depends on the multihead weigher configuration, product characteristics, and bag size. Contact SunGene with your target bags-per-minute for a line design recommendation.</p>

              <h3>Are snack packing machines CE certified?</h3>
              <p>Yes. All SunGene packaging machines — including VFFS machines, multihead weighers, and snack processing lines — are CE certified to the Machinery Directive 2006/42/EC. A Declaration of Conformity is provided with each export shipment.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Design Your Snack Line</h3>
                <p className="mt-2 text-sm text-gray-600">Tell us your product, target bag size, and required output. We'll propose the right line configuration.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  Get a Recommendation
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Related Machines</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={`/${l}/machines/snack-processing-line`} className="text-accent-600 hover:underline">Snack Processing Line</a>
                  </li>
                  <li>
                    <a href={`/${l}/machines/pouch-packing-machine`} className="text-accent-600 hover:underline">Pouch Packing Machine</a>
                  </li>
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">View All Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Talk to a Line Engineer</h3>
                <p className="mt-2 text-sm text-gray-600">Our team has designed snack lines for chips, nuts, popcorn, and puffed products shipped to markets worldwide.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
