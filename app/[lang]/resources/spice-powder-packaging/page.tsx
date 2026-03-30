/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'spice-powder-packaging'
const CATEGORY_LABEL = 'Application Guide'

const TITLE = 'Spice Powder Packaging: Machine Selection and Line Design Guide'
const DESCRIPTION = 'Spice powder packaging requires an auger filler with dust-tight sealing and SUS316L food-grade contact parts. Learn how to configure the right line for ground spices and seasonings.'

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
        name: 'What is the minimum fill weight for spice powder packaging?',
        acceptedAnswer: { '@type': 'Answer', text: 'Minimum fill weight for spice powders depends on the auger and forming collar configuration. Small-auger configurations can handle very small fills for single-serve sachets. Contact SunGene with your minimum fill weight requirement to confirm the appropriate auger diameter and machine setup.' }
      },
      {
        '@type': 'Question',
        name: 'Which packaging film is best for aroma preservation in spice packaging?',
        acceptedAnswer: { '@type': 'Answer', text: 'High-barrier films such as PET/foil/PE laminates provide the best aroma and moisture protection for spice powders. Metallized PET/PE is a lower-cost alternative with good barrier properties. Confirm your shelf-life target and storage conditions with your film supplier to select the appropriate film structure.' }
      },
      {
        '@type': 'Question',
        name: 'Is CE certification required for spice packaging machines exported to the EU?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. CE marking under the Machinery Directive 2006/42/EC is mandatory for packaging machinery operated in the EU/EEA. All SunGene spice powder packaging machines are CE certified, with a Declaration of Conformity provided with each shipment.' }
      },
      {
        '@type': 'Question',
        name: 'Can I run multiple spice SKUs on the same machine?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. VFFS machines and premade pouch fillers can be adjusted to run different bag sizes within a specified range. Changeover between sizes typically takes a short time and may involve adjusting the forming collar, bag width, and seal position. Cleaning between spice types is important to prevent cross-contamination of aromas.' }
      },
      {
        '@type': 'Question',
        name: 'Should spice powder be filled hot or cold?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ground spice powders are typically filled at ambient (room) temperature. Hot-fill is not standard for dry spice applications. The key concern for spices is aroma retention and moisture ingress, both of which are managed through film selection and tight sealing rather than filling temperature.' }
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
                Successful spice powder packaging comes down to three requirements: precise small-weight filling with an auger, dust-tight sealing to preserve aroma, and food-grade SUS316L stainless steel on all product-contact surfaces.
              </p>

              <h2>Typical Applications</h2>
              <p>
                This guide covers ground and powdered spice products including:
              </p>
              <ul>
                <li>Single-origin ground spices: chili powder, turmeric, cumin, coriander, paprika, black pepper</li>
                <li>Blended seasoning powders: curry powder, mixed spice, five-spice, ras el hanout</li>
                <li>Herb and seasoning mixes: Italian seasoning, garlic powder, onion powder</li>
                <li>Single-serve sachets for food service and restaurant supply</li>
              </ul>
              <p>
                Spice powders are typically fine to medium in particle size, can be slightly cohesive, and are strongly aromatic — making aroma retention during packaging a key performance criterion.
              </p>

              <h2>Recommended Machine Configuration</h2>
              <p>
                The standard configuration for spice powder packaging is an <strong>auger filler integrated with a VFFS machine</strong> or a premade pouch (doypack) filler. The choice between VFFS and premade pouch depends on the target pouch format:
              </p>
              <ul>
                <li><strong>VFFS + auger:</strong> Produces pillow bags, flat-bottom bags, or gusseted bags from a film roll. Most economical for high-volume production. Suitable for 10g–1kg fills.</li>
                <li><strong>Premade doypack filler + auger:</strong> Fills pre-formed stand-up pouches. Gives a premium retail appearance. Higher per-pouch film cost but better shelf presence.</li>
                <li><strong>Stick pack / sachet filler:</strong> For very small fills — single-serve sachets for food service or e-commerce sample packs.</li>
              </ul>

              <h2>Key Technical Requirements</h2>

              <h3>Dust Control</h3>
              <p>
                Ground spices create fine airborne dust during filling. The machine design must include dust-tight connections between the hopper, auger tube, and bag former to keep dust contained — both for product loss prevention and for worker safety. SunGene uses enclosed auger assemblies and dust-containment collars on all spice filling applications.
              </p>

              <h3>Aroma Preservation</h3>
              <p>
                Aromatic compounds in spices are volatile. Packaging must minimize headspace and use high-barrier film to prevent aroma loss after sealing. Tight, consistent sealing on every bag is essential — inconsistent seal quality leads to aroma leakage and reduced shelf life. The VFFS sealing jaw temperature and pressure are calibrated to the specific film used.
              </p>

              <h3>Precise Small-Weight Fills</h3>
              <p>
                Retail spice packs typically range from 5g single-serve sachets to 500g bulk packs. Achieving accurate fills across this range requires the correct auger diameter and rotation calibration. An agitator in the hopper helps prevent bridging and maintains consistent bulk density — critical for fill accuracy with fine aromatic powders.
              </p>

              <h2>Packaging Formats</h2>
              <ul>
                <li><strong>Stand-up doypack:</strong> Premium retail packaging — wide base stands upright; zipper option available for resealable packs</li>
                <li><strong>Flat sachet (4-side seal):</strong> Low-cost single-serve or sample format</li>
                <li><strong>Stick pack:</strong> Narrow elongated sachets — popular for food service applications</li>
                <li><strong>Pillow bag:</strong> Standard retail; economical film usage; can be printed for branding</li>
              </ul>

              <h2>SunGene Spice Powder Packaging — Our Credentials</h2>
              <p>
                SunGene spice powder packaging machines use <strong>SUS316L stainless steel</strong> on all product-contact surfaces — the higher-grade alloy with better resistance to the organic acids and essential oils found in many spice products. Machines are CE certified to the Machinery Directive 2006/42/EC, with a Declaration of Conformity included as standard.
              </p>
              <p>
                We ship factory-direct from Taiwan with voltage configured to your local standard. Our engineering team can specify the correct auger diameter, hopper design, and sealing parameters for your specific spice product before manufacture.
              </p>
              <p>
                Learn more about our <a href={`/${l}/machines/powder-filling-machine`}>powder filling machines</a> or <a href={`/${l}/machinery`}>browse the full machinery range</a>.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Get a Spice Packaging Machine Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What is the minimum fill weight for spice powder packaging?</h3>
              <p>Minimum fill weight depends on the auger and forming collar configuration. Small-auger setups handle very small fills for single-serve sachets. <a href={`/${l}/contact`}>Contact SunGene</a> with your minimum fill weight requirement to confirm the appropriate setup.</p>

              <h3>Which packaging film is best for aroma preservation in spice packaging?</h3>
              <p>High-barrier films such as PET/foil/PE laminates provide the best aroma and moisture protection. Metallized PET/PE is a lower-cost alternative with good barrier properties. Confirm your shelf-life target with your film supplier to select the appropriate film structure.</p>

              <h3>Is CE certification required for spice packaging machines exported to the EU?</h3>
              <p>Yes. CE marking under the Machinery Directive 2006/42/EC is mandatory for packaging machinery operated in the EU/EEA. All SunGene spice powder packaging machines are CE certified, with a Declaration of Conformity provided with each shipment.</p>

              <h3>Can I run multiple spice SKUs on the same machine?</h3>
              <p>Yes. VFFS machines and premade pouch fillers can be adjusted for different bag sizes within a specified range. Cleaning between spice types is important to prevent cross-contamination of aromas. Discuss your SKU range at inquiry.</p>

              <h3>Should spice powder be filled hot or cold?</h3>
              <p>Ground spice powders are filled at ambient temperature. The key concerns are aroma retention and moisture ingress, both managed through film selection and tight sealing — not filling temperature.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Configure Your Spice Line</h3>
                <p className="mt-2 text-sm text-gray-600">Tell us your spice type, fill weight range, and packaging format. We'll recommend the right machine.</p>
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
                    <a href={`/${l}/machines/pouch-packing-machine`} className="text-accent-600 hover:underline">Pouch Packing Machine</a>
                  </li>
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">View All Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Talk to an Engineer</h3>
                <p className="mt-2 text-sm text-gray-600">Our team has configured spice packaging lines for customers across Asia, Europe, and the Middle East.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
