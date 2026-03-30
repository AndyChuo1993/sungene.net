/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Lang, ALL_LANGS } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

const SLUG = 'what-to-prepare-before-machine-quote'
const CATEGORY = 'buying_guide'
const CATEGORY_LABEL = 'Buying Guide'

const TITLE = 'What to Prepare Before Asking a Machinery Supplier for a Quote'
const META_TITLE = 'What to Prepare Before Asking a Machinery Supplier for a Quote | SunGene'
const DESCRIPTION = 'Learn what technical and commercial details to prepare before asking a packaging machinery supplier for a faster, more accurate quote.'

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
        name: 'What information should I send to get an accurate machine quote?',
        acceptedAnswer: { '@type': 'Answer', text: 'The six essential items are: product type and state (powder, liquid, granule, solid — with flowability or viscosity), packaging format and material, fill weight or volume range, target output (bags or bottles per hour and shift pattern), destination country and local voltage/phase, and automation level preference with approximate budget range.' }
      },
      {
        '@type': 'Question',
        name: 'Do I need to know the exact machine model before asking for a quote?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. You should describe what you need to achieve — product type, packaging format, output target — not what machine model you think you need. A good supplier will recommend the right machine configuration based on your requirements. Specifying a model before understanding your needs can lead to the wrong selection.' }
      },
      {
        '@type': 'Question',
        name: 'Why do suppliers ask about voltage and country?',
        acceptedAnswer: { '@type': 'Answer', text: 'Packaging machines are built to your local electrical standard. Voltage (220V, 380V, 480V), frequency (50Hz or 60Hz), and phase (single or three-phase) are all specified at manufacturing stage and cannot easily be changed afterward. A machine built for the wrong voltage cannot operate in your facility — this is one of the most common and expensive mistakes to avoid.' }
      },
      {
        '@type': 'Question',
        name: 'Should I send product photos when asking for a quote?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, photos are very helpful. A single photo of your product, your current packaging, or the bag style you want to use often communicates more than a paragraph of text description. Photos of similar products or reference packaging you want to match are also useful.' }
      },
      {
        '@type': 'Question',
        name: 'What happens if I only ask for price without technical details?',
        acceptedAnswer: { '@type': 'Answer', text: 'You will receive a wide price range or a generic catalog — neither is useful for planning or decision-making. Without knowing product, format, and output, no reputable supplier can quote accurately. The price range could be 3–5× wide, which makes budget planning impossible. Technical details are the prerequisite for a meaningful quote.' }
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
                Bottom line: a complete, well-structured inquiry gets a meaningful quote in days. A vague "please send price" request leads to weeks of back-and-forth with no useful outcome.
              </p>

              <h2>The 6 Essential Items</h2>
              <p>
                Before contacting any packaging machinery supplier, have these six things ready. Everything else is secondary.
              </p>

              <h3>1. Product Type and State</h3>
              <p>
                What is your product, and what physical form is it in?
              </p>
              <ul>
                <li>Powder: Is it free-flowing, slightly sticky, or hygroscopic? Fine or coarse? What is the approximate bulk density?</li>
                <li>Liquid: What is the approximate viscosity — thin (water-like), medium (sauce-like), or thick (paste-like)? Does it contain particulates?</li>
                <li>Granule: Particle size? Friable or hard? Any sticking or clumping tendency?</li>
                <li>Solid: What shape and dimensions? Fragile or robust? Uniform or irregular?</li>
              </ul>
              <p>
                This single input determines more about the right machine than any other factor. A supplier who doesn't ask about this early in the conversation is not doing their job.
              </p>

              <h3>2. Packaging Format</h3>
              <p>
                What packaging do you want to end up with?
              </p>
              <ul>
                <li>Bag type: Pillow bag, stand-up doypack, zipper pouch, sachet, stick pack, flat-bottom bag?</li>
                <li>Rigid container: Bottle (PET, HDPE, glass), jar, cup, tub?</li>
                <li>Bag dimensions (approximate): Width × height for pouches; volume for containers</li>
                <li>Packaging material: PE film, foil laminate, kraft + PE, PET/PE, glass, PET bottle? If you have a film or bag sample, share it.</li>
              </ul>
              <p>
                See our related guide on <a href={`/${l}/resources/voltage-customization-for-export`}>voltage customization for export</a> if you are selecting packaging for international markets.
              </p>

              <h3>3. Fill Weight or Volume</h3>
              <p>
                How much product goes into each pack?
              </p>
              <ul>
                <li>Give a range, not just a target — if you have multiple SKUs, provide the minimum and maximum fill weight or volume.</li>
                <li>For powders: fill weight in grams or kilograms.</li>
                <li>For liquids: fill volume in milliliters or liters.</li>
                <li>If net weight accuracy is regulated in your market, state the required tolerance (e.g., ±1%).</li>
              </ul>
              <p>
                Fill weight range is one of the primary machine sizing inputs. A machine sized for 50g–500g sachets cannot fill 5kg bags efficiently — and vice versa.
              </p>

              <h3>4. Target Output</h3>
              <p>
                How many units do you need to produce per hour, and on what shift pattern?
              </p>
              <ul>
                <li>Output in bags per minute, bags per hour, or bags per shift.</li>
                <li>Shift pattern: single shift (8hr), double shift (16hr), or triple shift (24hr). This affects how you amortize the machine investment.</li>
                <li>If you are unsure, estimate your daily or weekly production target and work backward — we can help you calculate the required machine speed.</li>
              </ul>

              <h3>5. Destination Country and Voltage</h3>
              <p>
                Where will the machine be installed, and what is the local electrical standard?
              </p>
              <ul>
                <li>Country (determines which voltage and frequency standard applies)</li>
                <li>Voltage: 110V, 220V, 380V, or 480V?</li>
                <li>Frequency: 50Hz or 60Hz?</li>
                <li>Phase: single-phase or three-phase?</li>
              </ul>
              <p>
                This is mandatory information — not optional. A machine built for 380V/50Hz cannot be used on a 480V/60Hz supply without significant electrical modification. SunGene configures all machines to your local standard at no additional cost, but this must be confirmed before manufacturing begins.
              </p>
              <p>
                See our detailed guide: <a href={`/${l}/resources/what-to-include-in-quote-request`}>what to include in a quote request</a> for additional context on electrical specifications.
              </p>

              <h3>6. Automation Level Preference</h3>
              <p>
                Do you want a semi-automatic machine (operator-assisted) or a fully automatic line? And what is your approximate budget range?
              </p>
              <ul>
                <li>Semi-automatic: operator loads bags, places containers, or removes finished packs; machine handles filling and sealing.</li>
                <li>Fully automatic: machine handles the complete cycle with minimal manual involvement.</li>
                <li>A budget range — even an approximate one — helps the supplier recommend a configuration that is realistic for your investment level. Without this, you may receive a quotation for a machine that doesn't fit your actual budget.</li>
              </ul>

              <h2>Useful Extras That Accelerate the Quote</h2>
              <p>
                These items are not required but will significantly speed up the quotation and recommendation process:
              </p>
              <ul>
                <li><strong>Product photos or samples:</strong> A photo of your powder, sauce, or product communicates more than a written description. If you can send a physical sample, even better.</li>
                <li><strong>Existing packaging examples:</strong> If you have current packaging you want to replicate or improve on, a photo or sample makes the format requirement clear immediately.</li>
                <li><strong>Current production bottlenecks:</strong> What problem are you trying to solve? Speed? Accuracy? Hygiene? Reducing labor? Knowing this helps the supplier prioritize the right design features.</li>
                <li><strong>Timeline and delivery requirements:</strong> When do you need the machine delivered and commissioned? This affects lead time planning and whether standard or expedited manufacturing is needed.</li>
                <li><strong>Certifications needed:</strong> CE is standard for SunGene machines. If your market requires additional certifications (FDA documentation, ATEX for explosive environments, etc.), state this upfront.</li>
              </ul>

              <h2>Why Vague Requests Fail</h2>
              <p>
                "Please send a price list for your packaging machines" is one of the most common and least useful inquiries a supplier receives. Without knowing what product, what format, and what output, the supplier cannot:
              </p>
              <ul>
                <li>Recommend the right machine type (auger vs volumetric vs net-weigher; piston vs pump vs gravity)</li>
                <li>Size the machine correctly for your fill weight and output</li>
                <li>Configure voltage and electrical standards for your country</li>
                <li>Estimate lead time based on manufacturing complexity</li>
              </ul>
              <p>
                A generic price range in response is not a quotation — it's a placeholder that delays the actual buying process.
              </p>

              <h2>What a Good Supplier Sends Back</h2>
              <p>
                Once you provide complete technical information, a professional machinery supplier should respond with:
              </p>
              <ul>
                <li>A specific machine configuration recommendation (not just a catalog link)</li>
                <li>A rough line layout if you are buying multiple machines</li>
                <li>Reference videos or photos of similar machines in operation</li>
                <li>A formal quotation with complete scope of supply (machine, accessories, spare parts, documentation)</li>
                <li>Lead time from order confirmation to ex-factory</li>
                <li>Confirmation of CE certification, voltage, and documentation package</li>
              </ul>

              <h2>The Easiest Way: Use a Structured Form</h2>
              <p>
                The fastest way to get a meaningful response is to use a form that's designed to collect exactly the information above. SunGene's recommendation form is structured to walk you through product type, packaging format, fill weight, output, and country — so you don't miss anything.
              </p>

              <div className="not-prose my-8 rounded-xl bg-accent-50 border border-accent-200 p-6">
                <p className="text-base font-semibold text-brand-950 mb-3">Use our recommendation form — it's structured to collect exactly what we need.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="lg">
                  Start Your Machine Recommendation
                </ButtonLink>
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>What information should I send to get an accurate machine quote?</h3>
              <p>Product type and state, packaging format and material, fill weight or volume range, target output, destination country and voltage, and automation level preference. See our <a href={`/${l}/machinery`}>full machinery range</a> for context on machine types.</p>

              <h3>Do I need to know the exact machine model before asking for a quote?</h3>
              <p>No. Describe what you need to achieve, not what machine you think you need. <a href={`/${l}/recommend`}>Use our recommendation form</a> — it will guide you through the right questions.</p>

              <h3>Why do suppliers ask about voltage and country?</h3>
              <p>Machines are built to your local electrical standard. Wrong voltage means the machine cannot operate. This is confirmed at order stage — not an afterthought. <a href={`/${l}/contact`}>Contact us</a> if you are unsure of your local standard.</p>

              <h3>Should I send product photos?</h3>
              <p>Yes. Photos clarify more than text descriptions. Even a quick smartphone photo of your product and current packaging is helpful.</p>

              <h3>What happens if I only ask for price without technical details?</h3>
              <p>You'll receive a wide price range or generic catalog — neither useful for planning. Technical details are the prerequisite for a meaningful quotation.</p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Ready to get a quote?</h3>
                <p className="mt-2 text-sm text-gray-600">Use our structured recommendation form — it collects exactly the right information for an accurate machine recommendation.</p>
                <ButtonLink href={`/${l}/recommend`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  Start Recommendation
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">Related Resources</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={`/${l}/resources/voltage-customization-for-export`} className="text-accent-600 hover:underline">Voltage Customization for Export</a>
                  </li>
                  <li>
                    <a href={`/${l}/resources/what-to-include-in-quote-request`} className="text-accent-600 hover:underline">What to Include in a Quote Request</a>
                  </li>
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">View All Machinery</a>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">Speak to an Engineer</h3>
                <p className="mt-2 text-sm text-gray-600">If you'd rather talk through your requirements directly, our technical team is available to help you prepare a complete specification.</p>
                <a href={`/${l}/contact`} className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline">Contact Us →</a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
