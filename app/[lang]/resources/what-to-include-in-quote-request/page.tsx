/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'what-to-include-in-quote-request'
const CATEGORY_LABEL = 'Buying Guide'

const TITLE = 'What to Include in a Machine Quote Request: A 10-Minute Preparation Guide'
const DESCRIPTION = 'A complete quote request takes 10 minutes to prepare and can save weeks of back-and-forth. This guide covers exactly what information to include when requesting a machinery quotation.'

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
        name: 'Do I need to know exactly which machine I want before sending a quote request?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. You do not need to know the machine type before sending a request. In fact, it is often better to describe your product, packaging goal, and output requirement rather than specifying a machine type — that way, SunGene\'s engineering team can recommend the most appropriate solution, which may differ from what you initially had in mind.' }
      },
      {
        '@type': 'Question',
        name: 'Is a non-disclosure agreement (NDA) available before sharing product details?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. SunGene can provide a mutual non-disclosure agreement (NDA) before detailed product and process information is exchanged. Contact us to request an NDA before your full product inquiry.' }
      },
      {
        '@type': 'Question',
        name: 'Can I request a product sample test on SunGene machinery before ordering?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. SunGene can arrange material testing on existing machines for qualifying customers, subject to product sample availability and scheduling. This is especially useful for verifying fill accuracy, seal quality, and machine compatibility before purchase commitment. Discuss this at the inquiry stage.' }
      },
      {
        '@type': 'Question',
        name: 'What is the typical lead time after a purchase order (PO) is confirmed?',
        acceptedAnswer: { '@type': 'Answer', text: 'Lead time depends on machine type, customization level, and current production schedule. Standard machines have shorter lead times than fully custom lines. SunGene will provide an indicative lead time in the quotation stage. Final lead time is confirmed at PO.' }
      },
      {
        '@type': 'Question',
        name: 'What payment terms does SunGene offer for machinery purchases?',
        acceptedAnswer: { '@type': 'Answer', text: 'SunGene\'s standard payment terms are discussed and confirmed as part of the quotation process. Common structures include a deposit at PO with balance before shipment, or milestone-based payments for large projects. Contact our sales team to confirm terms for your order.' }
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
                The difference between a useful first reply and two weeks of clarifying questions usually comes down to the quality of the initial quote request. Spend 10 minutes on this checklist and your supplier can respond with a meaningful proposal on the first reply.
              </p>

              <h2>1. Product Information</h2>
              <p>
                This is the most critical section. Without product details, no supplier can recommend the correct machine type, materials, or specifications.
              </p>
              <ul>
                <li><strong>Product name and type:</strong> What is the product? (e.g., "chili powder spice blend", "tomato ketchup", "laundry detergent powder")</li>
                <li><strong>Physical state:</strong> Powder, granule, liquid, paste, solid item — be specific</li>
                <li><strong>Flowability:</strong> For powders — does it flow freely, or does it clump or bridge?</li>
                <li><strong>Viscosity:</strong> For liquids — water-thin, thick like honey, or chunky with particles?</li>
                <li><strong>Temperature:</strong> Will the product be filled hot (specify temperature) or at ambient?</li>
                <li><strong>Special properties:</strong> Corrosive, hygroscopic, abrasive, aromatic, flammable?</li>
                <li><strong>Density:</strong> Bulk density or specific gravity if known — helps confirm fill accuracy</li>
              </ul>

              <h2>2. Packaging Requirements</h2>
              <ul>
                <li><strong>Packaging format:</strong> Pillow bag, stand-up doypack, bottle, jar, sachet, open-mouth bag, box?</li>
                <li><strong>Packaging material:</strong> Film type (PE, PET/PE laminate, foil, kraft), glass, plastic bottle?</li>
                <li><strong>Fill sizes:</strong> List all SKU weights/volumes — minimum and maximum (e.g., 50g, 250g, 500g, 1kg)</li>
                <li><strong>Bag dimensions:</strong> Target width and length if known</li>
                <li><strong>Zipper / spout / valve:</strong> Any functional closure features required?</li>
              </ul>

              <h2>3. Output Requirements</h2>
              <ul>
                <li><strong>Target throughput:</strong> Bags per minute, bags per hour, or kilograms per hour</li>
                <li><strong>Shift pattern:</strong> Single shift, two shifts, continuous 24/7? This affects machine duty cycle specification.</li>
                <li><strong>Annual volume:</strong> Useful context for recommending automation level</li>
              </ul>

              <h2>4. Automation Level Preference</h2>
              <ul>
                <li>Manual (operator-intensive)</li>
                <li>Semi-automatic (automated filling, manual bag handling)</li>
                <li>Fully automatic (unattended operation with minimal labor)</li>
              </ul>
              <p>
                If you are unsure, describe your current setup and current labor constraints — the supplier can recommend based on your situation.
              </p>

              <h2>5. Voltage and Power Supply</h2>
              <p>
                This is frequently overlooked and causes post-order problems. Always confirm:
              </p>
              <ul>
                <li><strong>Voltage:</strong> 110V, 220V, 380V, 480V — what does your facility supply to machinery?</li>
                <li><strong>Phase:</strong> Single-phase or three-phase?</li>
                <li><strong>Frequency:</strong> 50Hz or 60Hz?</li>
                <li><strong>Country:</strong> Always useful as a cross-check — different regions have standard configurations</li>
              </ul>

              <h2>6. Certifications Required</h2>
              <ul>
                <li><strong>CE:</strong> Required for EU/EEA markets — SunGene machines are CE certified as standard for export</li>
                <li><strong>FDA / food contact compliance:</strong> If your product is food and your market requires this</li>
                <li><strong>Other local certifications:</strong> Specify if your market requires additional documentation</li>
              </ul>

              <h2>7. Budget Range</h2>
              <p>
                Sharing your budget — even a rough range — helps suppliers make meaningful recommendations quickly. A wide range of machine configurations exists at different price points; knowing your budget allows the supplier to focus on options that genuinely fit your situation rather than presenting the full catalogue.
              </p>

              <h2>8. Timeline</h2>
              <ul>
                <li>When do you need the machine operational?</li>
                <li>Is there a critical production launch date?</li>
                <li>Lead time should be factored into any purchase decision</li>
              </ul>

              <h2>What NOT to Do</h2>
              <ul>
                <li>Do not ask for a spec sheet or brochure without providing product information — it leads to generic responses that do not help you decide</li>
                <li>Do not request a price for "the cheapest" machine without specifying requirements — the cheapest machine that does not fit your product is no bargain</li>
                <li>Do not omit voltage requirements — retrofitting a machine to a different voltage after delivery is costly and may void certification</li>
              </ul>

              <h2>What SunGene Sends Back</h2>
              <p>
                When SunGene receives a complete inquiry, our engineering team reviews it and responds with:
              </p>
              <ul>
                <li><strong>Machine recommendation:</strong> Specific machine type and configuration suited to your product and requirements</li>
                <li><strong>Quotation:</strong> Factory-direct pricing with clear scope of supply</li>
                <li><strong>Layout drawing:</strong> Indicative machine or line footprint drawing</li>
                <li><strong>Video reference:</strong> Similar machine running a comparable product where available</li>
                <li><strong>Technical questions:</strong> Any clarifications needed to refine the recommendation</li>
              </ul>
              <p>
                Ready to send your requirements? Use our structured recommendation form — it guides you through the same checklist above.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Send Your Requirements Now
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>Do I need to know exactly which machine I want before sending a quote request?</h3>
              <p>No. It is often better to describe your product, packaging goal, and output requirement rather than specifying a machine type — SunGene's engineering team can recommend the most appropriate solution, which may differ from what you initially had in mind.</p>

              <h3>Is a non-disclosure agreement (NDA) available before sharing product details?</h3>
              <p>Yes. SunGene can provide a mutual NDA before detailed product and process information is exchanged. <a href={`/${l}/contact`}>Contact us</a> to request an NDA before your full product inquiry.</p>

              <h3>Can I request a product sample test on SunGene machinery before ordering?</h3>
              <p>Yes. SunGene can arrange material testing on existing machines for qualifying customers, subject to product sample availability and scheduling. Discuss this at the inquiry stage.</p>

              <h3>What is the typical lead time after a purchase order (PO) is confirmed?</h3>
              <p>Lead time depends on machine type, customization level, and current production schedule. SunGene will provide an indicative lead time in the quotation stage; final lead time is confirmed at PO.</p>

              <h3>What payment terms does SunGene offer for machinery purchases?</h3>
              <p>Standard payment terms are discussed and confirmed as part of the quotation process. Common structures include a deposit at PO with balance before shipment. Contact our sales team to confirm terms for your order.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Ready to Request a Quote?</h3>
                <p className="mt-2 text-sm text-gray-600">Use our guided recommendation form to share your requirements. We respond within one business day.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  Start Your Request
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Related Guides</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={`/${l}/resources/voltage-customization-for-export`} className="text-accent-600 hover:underline">Voltage Customization for Export</a>
                  </li>
                  <li>
                    <a href={`/${l}/resources/ce-guide-for-machinery-buyers`} className="text-accent-600 hover:underline">CE Guide for Machinery Buyers</a>
                  </li>
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">Browse Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Prefer to Talk First?</h3>
                <p className="mt-2 text-sm text-gray-600">Our team is happy to have a preliminary discussion before you fill out any forms.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
