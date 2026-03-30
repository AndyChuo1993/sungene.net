import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import JsonLd from '@/components/JsonLd'
import RecommendForm from '@/components/RecommendForm'
import { WhatsAppLink, EmailLink } from '@/components/ContactTracker'

// ── Metadata ──────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  en: 'Get a Machine Recommendation | Packaging & Filling Machinery | SunGene',
  cn: '获取机械推荐 | 包装与灌装机械 | SunGene',
  zh: '取得機械推薦 | 包裝與灌裝機械 | SunGene',
  fr: 'Obtenir une recommandation de machine | Machines d\'emballage et de remplissage | SunGene',
  es: 'Obtener recomendación de máquina | Maquinaria de empaque y llenado | SunGene',
  pt: 'Obter recomendação de máquina | Máquinas de embalagem e enchimento | SunGene',
  ko: '기계 추천 받기 | 포장 및 충전 기계 | SunGene',
  ja: '機械の推薦を受ける | 包装・充填機械 | SunGene',
  ar: 'احصل على توصية بالآلة | آلات التعبئة والتغليف والملء | SunGene',
  th: 'รับคำแนะนำเครื่องจักร | เครื่องบรรจุภัณฑ์และบรรจุ | SunGene',
  vi: 'Nhận đề xuất máy | Máy đóng gói và chiết rót | SunGene',
  de: 'Maschinenempfehlung erhalten | Verpackungs- und Abfüllmaschinen | SunGene',
}

const metaDescriptions: Record<string, string> = {
  en: 'Describe your product and production goals. Our engineers will match you with the right packaging or filling machine — free, within 1–2 business days. No model numbers needed.',
  cn: '描述您的产品和生产目标。我们的工程师将在1-2个工作日内为您匹配合适的包装或灌装机械——免费，无需型号。',
  zh: '描述您的產品和生產目標。我們的工程師將在1-2個工作日內為您匹配合適的包裝或灌裝機械——免費，無需型號。',
  fr: 'Décrivez votre produit et vos objectifs. Nos ingénieurs vous recommandent la bonne machine d\'emballage ou de remplissage — gratuitement, sous 1 à 2 jours ouvrés.',
  es: 'Describa su producto y metas de producción. Nuestros ingenieros le recomendarán la máquina de empaque o llenado adecuada — gratis, en 1-2 días hábiles.',
  pt: 'Descreva seu produto e metas de produção. Nossos engenheiros indicarão a máquina de embalagem ou enchimento certa — gratuitamente, em 1 a 2 dias úteis.',
  ko: '제품과 생산 목표를 설명해 주세요. 당사 엔지니어가 1-2 영업일 내에 적합한 포장 또는 충전 기계를 무료로 추천해 드립니다.',
  ja: '製品と生産目標を教えてください。エンジニアが1〜2営業日以内に適切な包装・充填機械を無料でご提案します。',
  ar: 'صف منتجك وأهداف إنتاجك. سيقترح مهندسونا الآلة المناسبة للتعبئة أو التغليف مجاناً خلال 1-2 يوم عمل.',
  th: 'อธิบายผลิตภัณฑ์และเป้าหมายการผลิตของคุณ วิศวกรจะแนะนำเครื่องบรรจุหรือเครื่องบรรจุภัณฑ์ที่เหมาะสม ฟรี ภายใน 1-2 วันทำการ',
  vi: 'Mô tả sản phẩm và mục tiêu sản xuất. Kỹ sư sẽ đề xuất máy đóng gói hoặc chiết rót phù hợp — miễn phí, trong 1-2 ngày làm việc.',
  de: 'Beschreiben Sie Ihr Produkt und Ihre Produktionsziele. Unsere Ingenieure empfehlen die passende Verpackungs- oder Abfüllmaschine — kostenlos, innerhalb von 1–2 Werktagen.',
}

const VALID_LANGS = ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = VALID_LANGS.includes(lang) ? lang : 'en'
  const title = metaTitles[l] ?? metaTitles.en
  const description = metaDescriptions[l] ?? metaDescriptions.en

  return {
    title,
    description,
    keywords: [
      'machinery recommendation',
      'packaging machine selection',
      'filling machine recommendation',
      'free machine consultation',
      'find the right packaging machine',
      'Taiwan industrial machinery',
      'VFFS machine recommendation',
      'pouch packing machine',
    ],
    alternates: {
      canonical: `${SITE_URL}/${l}/recommend`,
      languages: {
        en: `${SITE_URL}/en/recommend`,
        'zh-TW': `${SITE_URL}/zh/recommend`,
        'zh-CN': `${SITE_URL}/cn/recommend`,
        fr: `${SITE_URL}/fr/recommend`,
        es: `${SITE_URL}/es/recommend`,
        pt: `${SITE_URL}/pt/recommend`,
        ko: `${SITE_URL}/ko/recommend`,
        ja: `${SITE_URL}/ja/recommend`,
        ar: `${SITE_URL}/ar/recommend`,
        th: `${SITE_URL}/th/recommend`,
        vi: `${SITE_URL}/vi/recommend`,
        de: `${SITE_URL}/de/recommend`,
        'x-default': `${SITE_URL}/en/recommend`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${l}/recommend`,
      siteName: 'SunGene Machinery',
      images: [{ url: `${SITE_URL}/og/og.png`, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/og/og.png`],
    },
  }
}

// ── Page copy ─────────────────────────────────────────────────────────────────

const kicker: Record<string, string> = {
  en: 'FREE RECOMMENDATION',
  cn: '免费选型推荐',
  zh: '免費選型推薦',
  fr: 'RECOMMANDATION GRATUITE',
  es: 'RECOMENDACIÓN GRATUITA',
  pt: 'RECOMENDAÇÃO GRATUITA',
  ko: '무료 추천',
  ja: '無料推薦',
  ar: 'توصية مجانية',
  th: 'คำแนะนำฟรี',
  vi: 'TƯ VẤN MIỄN PHÍ',
  de: 'KOSTENLOSE EMPFEHLUNG',
}

const h1: Record<string, string> = {
  en: "Tell us what you need to pack — we'll match the right machine.",
  cn: '告诉我们您要包装什么——我们为您匹配合适的机械方案。',
  zh: '告訴我們您要包裝什麼——我們為您匹配合適的機械方案。',
  fr: 'Dites-nous ce que vous souhaitez emballer — nous vous recommandons la bonne machine.',
  es: 'Cuéntenos qué desea empacar — encontraremos la máquina adecuada para usted.',
  pt: 'Diga-nos o que você precisa embalar — recomendaremos a máquina certa.',
  ko: '포장해야 하는 것을 알려주세요 — 최적의 기계를 추천해 드립니다.',
  ja: '包装したいものを教えてください — 最適な機械をご提案します。',
  ar: 'أخبرنا بما تحتاج لتعبئته — سنقترح لك الآلة المناسبة.',
  th: 'บอกเราว่าคุณต้องการบรรจุอะไร — เราจะแนะนำเครื่องจักรที่เหมาะสม',
  vi: 'Cho chúng tôi biết bạn cần đóng gói gì — chúng tôi sẽ đề xuất máy phù hợp.',
  de: 'Sagen Sie uns, was Sie verpacken möchten — wir empfehlen die richtige Maschine.',
}

const subtitle: Record<string, string> = {
  en: 'No model numbers, no catalog browsing. Describe your product and production goals, and our engineers will recommend the right machine configuration for your specific application.',
  cn: '无需型号，无需目录。描述您的产品和生产目标，我们的工程师将为您的具体应用推荐合适的机械配置。',
  zh: '無需型號，無需目錄。描述您的產品和生產目標，我們的工程師將為您的具體應用推薦合適的機械配置。',
}

function getSubtitle(lang: Lang): string {
  return subtitle[lang] ?? subtitle.en
}

// ── How it works steps ────────────────────────────────────────────────────────

const howItWorks = [
  'Fill in your requirements (2 minutes)',
  'Our engineers review your product specs',
  'We reply with a matched machine path + options',
  'You request samples, videos, or a detailed quote',
]

const whatWeHelp = [
  'Powder, flour, granule filling & packaging',
  'Liquid, sauce, paste filling systems',
  'Pouch, bag, sachet packaging',
  'Snack & food processing lines',
  'Conveyor & production line automation',
  'Custom or OEM machinery engineering',
]

const trustSignals = [
  'CE Certified Machinery',
  'SUS304 / SUS316L Food-Grade Materials',
  'Factory-Direct from Taiwan',
  'Custom Voltage & Configuration',
  'Exported to 50+ Countries',
  'OEM & Custom Engineering Available',
]

// ── JSON-LD ───────────────────────────────────────────────────────────────────

function buildJsonLd(lang: string) {
  const pageUrl = `${SITE_URL}/${lang}/recommend`

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to get a recommendation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our engineers typically respond within 1–2 business days after reviewing your product and packaging requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to know the exact machine model?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Describe what you want to pack and your target output — we\'ll identify the right machine type and configuration.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information should I prepare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Product type, state (powder/liquid/solid), target packaging format, fill weight, required output speed, and your location/voltage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a cost for the recommendation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The recommendation service is free. We only ask that you provide accurate product details so we can give you the most useful advice.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you handle custom or non-standard requirements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We specialize in custom machinery engineering for unusual products, special packaging formats, or specific hygiene/material requirements.',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Recommend',
        item: pageUrl,
      },
    ],
  }

  return [faqSchema, breadcrumbSchema]
}

// ── Sidebar blocks ────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function NumberBadge({ n }: { n: number }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-600 text-xs font-bold text-white">
      {n}
    </span>
  )
}

function SidebarCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

// ── Page component ────────────────────────────────────────────────────────────

export default async function RecommendPage({
  params,
}: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params
  const jsonLdData = buildJsonLd(lang)

  return (
    <>
      <JsonLd data={jsonLdData} />

      {/* Hero strip */}
      <section className="bg-brand-950 py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent-400">
              {kicker[lang] ?? kicker.en}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
              {h1[lang] ?? h1.en}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
              {getSubtitle(lang)}
            </p>
          </div>
        </Container>
      </section>

      {/* Main two-column layout */}
      <section className="py-14 sm:py-18 bg-gray-50">
        <Container>
          <div className="gap-10 lg:grid lg:grid-cols-5">
            {/* Left: Form — ~60% */}
            <div className="lg:col-span-3">
              <RecommendForm lang={lang} />
            </div>

            {/* Right: Sidebar — ~40% */}
            <aside className="mt-10 space-y-6 lg:col-span-2 lg:mt-0">
              {/* How it works */}
              <SidebarCard>
                <h2 className="mb-4 text-base font-semibold text-gray-900">How it works</h2>
                <ol className="space-y-3">
                  {howItWorks.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <NumberBadge n={i + 1} />
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </SidebarCard>

              {/* What we can help with */}
              <SidebarCard>
                <h2 className="mb-4 text-base font-semibold text-gray-900">What we can help with</h2>
                <ul className="space-y-2">
                  {whatWeHelp.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SidebarCard>

              {/* Trust signals */}
              <SidebarCard>
                <h2 className="mb-4 text-base font-semibold text-gray-900">Why SunGene</h2>
                <ul className="space-y-2">
                  {trustSignals.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SidebarCard>

              {/* Need to talk first */}
              <SidebarCard className="border-accent-200 bg-accent-50">
                <h2 className="mb-3 text-base font-semibold text-gray-900">Need to talk first?</h2>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.104 1.523 5.83L.057 23.27a.75.75 0 00.916.948l5.42-1.47A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                    <WhatsAppLink
                      lang={lang}
                      sourcePage="recommend"
                      className="font-medium text-accent-700 hover:underline"
                    >
                      WhatsApp: +86 181 4413 2078
                    </WhatsAppLink>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-accent-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <EmailLink
                      lang={lang}
                      sourcePage="recommend"
                      className="font-medium text-accent-700 hover:underline"
                    >
                      contact@sungene.net
                    </EmailLink>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-gray-500">Response within 1–2 business days</p>
              </SidebarCard>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
