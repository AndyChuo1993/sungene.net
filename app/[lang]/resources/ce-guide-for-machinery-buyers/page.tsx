/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'ce-guide-for-machinery-buyers'
const CATEGORY_LABEL = 'Buying Guide'

const TITLE = 'CE Marking for Machinery Buyers: What It Means and What Documents to Request'
const DESCRIPTION = 'CE marking is mandatory for machinery sold in the EU/EEA and confirms the machine meets essential health, safety, and environmental requirements. A plain-language guide for buyers.'

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
        name: 'Do I need CE marking for machinery purchased for use in the United States?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. CE marking is a European conformity mark and is not required for machinery used in the United States. US machinery safety is governed by OSHA regulations and ANSI/NFPA standards. However, many US buyers request CE-certified machines as a benchmark for quality and safety standards, and some export-to-EU manufacturers require it.' }
      },
      {
        '@type': 'Question',
        name: 'What documentation does SunGene provide with a CE-certified machine?',
        acceptedAnswer: { '@type': 'Answer', text: 'SunGene provides the following documentation with each CE-certified export machine: Declaration of Conformity (DoC) signed by SunGene, CE marking on the machine nameplate, operation and maintenance manual (in English as standard), electrical schematic diagrams, and a parts list. Technical file availability for review can be discussed on request.' }
      },
      {
        '@type': 'Question',
        name: 'Can CE certification be added to a machine after purchase?',
        acceptedAnswer: { '@type': 'Answer', text: 'CE certification is a declaration made by the manufacturer at the time of manufacture, based on the design and build of the machine. Retroactively CE certifying a machine that was not designed and built to the applicable directives is not straightforward and may require significant design changes. SunGene recommends specifying CE certification at the time of ordering.' }
      },
      {
        '@type': 'Question',
        name: 'Does CE certification cover food contact materials?',
        acceptedAnswer: { '@type': 'Answer', text: 'CE marking under the Machinery Directive covers the safety of the machine itself — mechanical, electrical, and noise safety. Food contact compliance (e.g., EU Regulation 1935/2004 on food contact materials) is a separate requirement covering the materials used in product-contact components. SunGene uses SUS304/316L stainless steel and food-safe seals on food machines — confirm food contact compliance requirements at inquiry.' }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between CE marking and ISO certification?',
        acceptedAnswer: { '@type': 'Answer', text: 'CE marking is a regulatory conformity mark indicating compliance with EU directives — it is a legal requirement for selling machinery in the EU/EEA. ISO certification (e.g., ISO 9001) is a voluntary quality management standard indicating that the manufacturer\'s processes meet a defined quality system. Both can coexist: a manufacturer can be ISO 9001 certified and produce CE-marked machines. They serve different purposes.' }
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
                CE marking is mandatory for machinery placed on the EU/EEA market and confirms that the manufacturer has assessed the machine against essential health, safety, and environmental requirements defined in EU directives. For buyers, knowing what CE means — and what documents to request — protects your investment and ensures regulatory compliance.
              </p>

              <h2>What CE Marking Means</h2>
              <p>
                "CE" stands for Conformité Européenne (European Conformity). When a manufacturer affixes the CE mark to a machine, they are making a self-declaration that the product meets the applicable EU directive(s). For packaging and food processing machinery, the primary directive is the <strong>Machinery Directive 2006/42/EC</strong>.
              </p>
              <p>
                CE marking is not a quality certification issued by a third party — it is a manufacturer's declaration of conformity. However, the manufacturer is legally responsible for the accuracy of that declaration and must maintain a technical file that documents how compliance was achieved.
              </p>

              <h2>What the Machinery Directive Covers</h2>
              <p>
                The Machinery Directive (2006/42/EC) defines essential health and safety requirements across several areas:
              </p>
              <ul>
                <li><strong>Mechanical safety:</strong> Guards, barriers, emergency stop devices, moving parts protection</li>
                <li><strong>Electrical safety:</strong> Covered by the Low Voltage Directive (LVD), referenced in the Machinery Directive</li>
                <li><strong>Noise and vibration:</strong> Emissions must be assessed and documented</li>
                <li><strong>EMC (Electromagnetic Compatibility):</strong> The machine must not generate or be susceptible to electromagnetic interference beyond defined limits</li>
                <li><strong>Ergonomics and control systems:</strong> Safe design of operator interfaces and control logic</li>
              </ul>

              <h2>What Buyers Should Check</h2>

              <h3>1. Declaration of Conformity (DoC)</h3>
              <p>
                The DoC is the key document. It must include:
              </p>
              <ul>
                <li>Manufacturer's name and address</li>
                <li>Machine description and model/serial number</li>
                <li>List of applicable EU directives</li>
                <li>Reference to harmonized standards applied</li>
                <li>Authorized signatory's name and signature</li>
              </ul>
              <p>
                Always request the DoC before accepting delivery of a CE-marked machine. If the supplier cannot provide a DoC, the CE marking is not valid.
              </p>

              <h3>2. CE Plate on the Machine</h3>
              <p>
                The CE mark must be physically affixed to the machine — typically on the main electrical panel or a dedicated nameplate. The mark must be legible and permanent. The nameplate should also include the manufacturer's name, machine model, serial number, year of manufacture, and key electrical specifications (voltage, phase, frequency, power rating).
              </p>

              <h3>3. Technical File Availability</h3>
              <p>
                The manufacturer must maintain a technical file containing the design documentation, risk assessment, test results, and other evidence supporting the CE declaration. The technical file does not need to be provided to the buyer as standard, but a reputable manufacturer will make it available for inspection on request — important if you are an importer or a regulated production facility.
              </p>

              <h3>4. Operation and Maintenance Manual</h3>
              <p>
                The Machinery Directive requires a comprehensive instruction manual in the language(s) of the end user's country. The manual must cover safe operation, maintenance procedures, residual risk warnings, and commissioning instructions.
              </p>

              <h2>CE Requirements by Target Market</h2>
              <div className="not-prose overflow-x-auto">
                <table className="table-auto w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-50">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Market</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">CE Required?</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">Applicable Standard / Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">EU / EEA</td>
                      <td className="border border-gray-200 px-4 py-2 font-semibold text-green-700">Mandatory</td>
                      <td className="border border-gray-200 px-4 py-2">Machinery Directive 2006/42/EC</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">United Kingdom</td>
                      <td className="border border-gray-200 px-4 py-2">UKCA mark required</td>
                      <td className="border border-gray-200 px-4 py-2">UK Machinery Regulations (post-Brexit); CE may be accepted in some transitional arrangements</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">USA</td>
                      <td className="border border-gray-200 px-4 py-2">Not required</td>
                      <td className="border border-gray-200 px-4 py-2">OSHA regulations; ANSI/NFPA standards; CE accepted as quality benchmark</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Australia / NZ</td>
                      <td className="border border-gray-200 px-4 py-2">Not mandatory</td>
                      <td className="border border-gray-200 px-4 py-2">AS/NZS standards; CE commonly accepted as proxy for compliance</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Middle East / Asia</td>
                      <td className="border border-gray-200 px-4 py-2">Varies</td>
                      <td className="border border-gray-200 px-4 py-2">Many markets accept CE; local certifications may also apply</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Africa</td>
                      <td className="border border-gray-200 px-4 py-2">Varies by country</td>
                      <td className="border border-gray-200 px-4 py-2">CE generally accepted as safety evidence; confirm local requirements</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>SunGene CE Certification — What We Provide</h2>
              <p>
                All SunGene export machines are CE certified as standard. With every export shipment, SunGene provides:
              </p>
              <ul>
                <li><strong>Declaration of Conformity (DoC)</strong> — signed by authorized SunGene personnel</li>
                <li><strong>CE mark</strong> on the machine nameplate</li>
                <li><strong>Operation and Maintenance Manual</strong> in English (additional languages on request)</li>
                <li><strong>Electrical schematics</strong> and parts documentation</li>
              </ul>
              <p>
                Technical file availability for importer review can be arranged on request. Our engineers can also provide assistance for buyers navigating import compliance in their local market.
              </p>
              <p>
                Ready to discuss your machinery requirements? Use our recommendation form to describe your product and we will provide a tailored quotation including full CE documentation as standard.
              </p>

              <div className="not-prose my-8">
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Request a CE-Certified Machine Quote
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>Do I need CE marking for machinery purchased for use in the United States?</h3>
              <p>No. CE marking is a European conformity mark and is not required for machinery used in the United States. US machinery safety is governed by OSHA regulations and ANSI/NFPA standards. However, many US buyers request CE-certified machines as a safety benchmark.</p>

              <h3>What documentation does SunGene provide with a CE-certified machine?</h3>
              <p>SunGene provides: Declaration of Conformity (DoC), CE marking on the machine nameplate, operation and maintenance manual in English, electrical schematic diagrams, and a parts list. Technical file availability can be discussed on request.</p>

              <h3>Can CE certification be added to a machine after purchase?</h3>
              <p>CE certification is a manufacturer's declaration made at the time of manufacture. Retroactively CE certifying a machine that was not designed and built to the applicable directives is not straightforward. SunGene recommends specifying CE certification at the time of ordering.</p>

              <h3>Does CE certification cover food contact materials?</h3>
              <p>CE marking under the Machinery Directive covers the safety of the machine itself. Food contact compliance (EU Regulation 1935/2004) is a separate requirement covering materials used in product-contact components. SunGene uses SUS304/316L stainless steel and food-safe seals on food machines — confirm food contact compliance requirements at <a href={`/${l}/contact`}>inquiry</a>.</p>

              <h3>What is the difference between CE marking and ISO certification?</h3>
              <p>CE marking is a regulatory conformity mark — a legal requirement for selling machinery in the EU/EEA. ISO certification (e.g., ISO 9001) is a voluntary quality management standard. They serve different purposes and can coexist: a manufacturer can be ISO 9001 certified and produce CE-marked machines.</p>

            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">CE-Certified Machines — Factory Direct</h3>
                <p className="mt-2 text-sm text-gray-600">All SunGene export machines include CE certification and full documentation as standard.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  Get a Recommendation
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Related Guides</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={`/${l}/resources/voltage-customization-for-export`} className="text-accent-600 hover:underline">Voltage Customization for Export</a>
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
                <h3 className="text-base font-bold text-brand-950">Documentation Questions?</h3>
                <p className="mt-2 text-sm text-gray-600">Our team can advise on CE documentation requirements for your market and provide pre-sale documentation samples.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
