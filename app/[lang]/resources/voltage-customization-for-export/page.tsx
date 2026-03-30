/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'voltage-customization-for-export'
const CATEGORY_LABEL = 'Buying Guide'

const TITLE = 'Voltage Customization for Export Machinery: Confirm Before You Order'
const DESCRIPTION = 'Every SunGene machine is configurable to your local voltage — confirm your power supply standard before ordering, not after. A practical guide to global voltage requirements for machinery buyers.'

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
        name: 'Can I use a step-up/step-down transformer instead of ordering a custom voltage machine?',
        acceptedAnswer: { '@type': 'Answer', text: 'Technically possible, but not recommended for industrial machinery. Transformers add cost, maintenance requirements, efficiency losses, and potential reliability concerns. For machines running continuously on a production floor, having the correct voltage built in from the factory is the safer and more economical long-term solution.' }
      },
      {
        '@type': 'Question',
        name: 'What happens if I upgrade my facility\'s power supply after purchase?',
        acceptedAnswer: { '@type': 'Answer', text: 'If you plan to upgrade your facility\'s power supply, inform SunGene at the time of inquiry. In some cases, machines can be specified to accept a range of voltages or include dual-voltage components. Retrofitting an installed machine to a different voltage requires an engineer visit and may affect certification status.' }
      },
      {
        '@type': 'Question',
        name: 'Does 50Hz vs 60Hz frequency affect machine operating speed?',
        acceptedAnswer: { '@type': 'Answer', text: 'For machines using inverter-driven motors (variable frequency drives), the output frequency is controlled electronically and is independent of the input supply frequency. For legacy machines with direct-drive AC motors, a 50Hz vs 60Hz supply difference can affect motor speed. All SunGene export machines are specified for the correct local frequency.' }
      },
      {
        '@type': 'Question',
        name: 'Do I pay extra for a non-standard voltage specification?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. SunGene builds each machine to the customer\'s specified voltage as standard — this is included in the factory price. There is no surcharge for specifying 480V/60Hz (North American standard) or any other regional voltage, as long as it is confirmed at the time of ordering.' }
      },
      {
        '@type': 'Question',
        name: 'Is three-phase power available in all markets where SunGene ships?',
        acceptedAnswer: { '@type': 'Answer', text: 'Three-phase power is widely available in industrial and commercial facilities in most markets. However, availability varies by location and facility type. If your facility has only single-phase power, inform SunGene at inquiry — some machines can be configured for single-phase supply, or the appropriate power upgrade can be planned.' }
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
                Voltage is one of the most commonly overlooked details in a machinery purchase — and one of the most expensive to correct after the machine arrives. Confirm your power supply specification before ordering, not after.
              </p>

              <h2>Why Voltage Confirmation Matters</h2>
              <p>
                Industrial packaging machinery is built to a specific voltage specification. Unlike consumer electronics, industrial machines cannot simply be plugged into an adapter or run on the wrong voltage. A machine built for 380V/50Hz (standard European three-phase) cannot run on a 480V/60Hz (North American) supply without modification — and that modification is costly and may affect CE certification status.
              </p>
              <p>
                SunGene builds every export machine to the customer's specified voltage as standard, at no additional cost. The key is confirming the correct specification before manufacturing begins.
              </p>

              <h2>Global Voltage Standards by Region</h2>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Region</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Typical Industrial Voltage</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Frequency</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Phase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">USA, Canada, Mexico</td>
                      <td className="border border-gray-200 px-4 py-2">208V / 480V</td>
                      <td className="border border-gray-200 px-4 py-2">60 Hz</td>
                      <td className="border border-gray-200 px-4 py-2">3-phase</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Europe (EU/EEA)</td>
                      <td className="border border-gray-200 px-4 py-2">380V / 400V</td>
                      <td className="border border-gray-200 px-4 py-2">50 Hz</td>
                      <td className="border border-gray-200 px-4 py-2">3-phase</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">UK</td>
                      <td className="border border-gray-200 px-4 py-2">400V (230V single)</td>
                      <td className="border border-gray-200 px-4 py-2">50 Hz</td>
                      <td className="border border-gray-200 px-4 py-2">3-phase</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Japan</td>
                      <td className="border border-gray-200 px-4 py-2">200V (3-phase industrial)</td>
                      <td className="border border-gray-200 px-4 py-2">50Hz (east) / 60Hz (west)</td>
                      <td className="border border-gray-200 px-4 py-2">3-phase</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Australia / New Zealand</td>
                      <td className="border border-gray-200 px-4 py-2">415V (380V in some facilities)</td>
                      <td className="border border-gray-200 px-4 py-2">50 Hz</td>
                      <td className="border border-gray-200 px-4 py-2">3-phase</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Southeast Asia (Thailand, Vietnam, Indonesia)</td>
                      <td className="border border-gray-200 px-4 py-2">380V</td>
                      <td className="border border-gray-200 px-4 py-2">50 Hz</td>
                      <td className="border border-gray-200 px-4 py-2">3-phase</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Middle East (UAE, Saudi Arabia)</td>
                      <td className="border border-gray-200 px-4 py-2">380V / 415V</td>
                      <td className="border border-gray-200 px-4 py-2">50 Hz</td>
                      <td className="border border-gray-200 px-4 py-2">3-phase</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Africa (varies by country)</td>
                      <td className="border border-gray-200 px-4 py-2">380V / 415V (most)</td>
                      <td className="border border-gray-200 px-4 py-2">50 Hz</td>
                      <td className="border border-gray-200 px-4 py-2">3-phase</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Brazil</td>
                      <td className="border border-gray-200 px-4 py-2">220V or 380V (varies by region)</td>
                      <td className="border border-gray-200 px-4 py-2">60 Hz</td>
                      <td className="border border-gray-200 px-4 py-2">3-phase</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Taiwan (SunGene factory)</td>
                      <td className="border border-gray-200 px-4 py-2">220V / 380V</td>
                      <td className="border border-gray-200 px-4 py-2">60 Hz</td>
                      <td className="border border-gray-200 px-4 py-2">Both</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Note: The table above shows typical standards. Always confirm with your local electrician or facility manager for the exact voltage available at your machine installation point.
              </p>

              <h2>Single Phase vs Three Phase: What You Need to Know</h2>
              <p>
                Most industrial packaging machinery requires <strong>three-phase power</strong> for the main drive motors and heating elements. Three-phase is more efficient and provides more consistent power delivery for high-load applications.
              </p>
              <p>
                <strong>Single-phase power</strong> is common in small workshops, residential areas, and some smaller commercial premises. If your facility only has single-phase supply, this limits the machines that can be installed without electrical upgrade work. Small semi-automatic machines can sometimes be specified for single-phase; fully automatic lines almost always require three-phase.
              </p>

              <h2>How to Confirm Your Voltage Before Ordering</h2>
              <ol>
                <li><strong>Check your existing equipment nameplates:</strong> Any existing machinery, compressors, or industrial equipment in your facility will have a nameplate showing input voltage, phase, and frequency. This is the most reliable reference.</li>
                <li><strong>Ask your facility's electrician:</strong> They can confirm the available supply voltage at the machine installation point and advise on any upgrade needed.</li>
                <li><strong>Check your utility bill or meter panel:</strong> The service voltage is sometimes shown on utility documentation.</li>
                <li><strong>Contact your utility provider:</strong> They can confirm the service voltage to your facility.</li>
              </ol>

              <h2>What SunGene Does</h2>
              <p>
                SunGene builds machines to the customer's confirmed voltage specification as a standard part of the manufacturing process — no adaptation kit, no aftermarket modification. The electrical panel, motors, heating elements, and components are all specified and sourced for your voltage at the time of manufacture.
              </p>
              <p>
                CE marking documentation includes the electrical specification, confirming that the machine meets the Low Voltage Directive (LVD) and EMC Directive requirements for the specified supply voltage.
              </p>
              <p>
                If you are unsure of your voltage requirements, share your country and intended facility type with us and we can advise on the typical standard for your market. <a href={`/${l}/contact`}>Contact our engineering team</a> if you have questions about your local power supply.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Request a Quote with Voltage Specification
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>Can I use a step-up/step-down transformer instead of ordering a custom voltage machine?</h3>
              <p>Technically possible, but not recommended for industrial machinery. Transformers add cost, maintenance requirements, efficiency losses, and potential reliability concerns. Having the correct voltage built in from the factory is safer and more economical long-term.</p>

              <h3>What happens if I upgrade my facility's power supply after purchase?</h3>
              <p>If you plan to upgrade your facility's power supply, inform SunGene at inquiry. In some cases, machines can be specified to accept a range of voltages. Retrofitting an installed machine to a different voltage requires an engineer visit and may affect certification status.</p>

              <h3>Does 50Hz vs 60Hz frequency affect machine operating speed?</h3>
              <p>For machines with inverter-driven motors (variable frequency drives), output frequency is controlled electronically and is independent of input supply frequency. For direct-drive AC motors, a 50Hz vs 60Hz difference can affect motor speed. All SunGene export machines are specified for the correct local frequency.</p>

              <h3>Do I pay extra for a non-standard voltage specification?</h3>
              <p>No. SunGene builds each machine to the customer's specified voltage as standard — this is included in the factory price with no surcharge.</p>

              <h3>Is three-phase power available in all markets where SunGene ships?</h3>
              <p>Three-phase power is widely available in industrial and commercial facilities in most markets. If your facility has only single-phase power, inform SunGene at inquiry — some machines can be configured for single-phase, or appropriate power upgrade options can be discussed.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Confirm Your Voltage — Then Get a Quote</h3>
                <p className="mt-2 text-sm text-gray-600">Every SunGene machine is built to your specified voltage. Tell us your requirements and we'll configure accordingly.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  Get a Recommendation
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Related Guides</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={`/${l}/resources/ce-guide-for-machinery-buyers`} className="text-accent-600 hover:underline">CE Guide for Machinery Buyers</a>
                  </li>
                  <li>
                    <a href={`/${l}/resources/what-to-include-in-quote-request`} className="text-accent-600 hover:underline">What to Include in a Quote Request</a>
                  </li>
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">Browse Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Unsure About Your Voltage?</h3>
                <p className="mt-2 text-sm text-gray-600">Tell us your country and facility type and our engineers will advise on the typical standard for your market.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
