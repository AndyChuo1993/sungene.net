import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import { PHOTO } from '@/lib/photoLibrary'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META, BREADCRUMB_LABELS } from '@/lib/seo'
import { INDUSTRIES, type IndustrySlug, INDUSTRY_SLUGS, getAllIndustryParams } from '@/lib/industries'
import { MACHINE_DEFS } from '@/lib/productSchema'
import TrustBar from '@/components/TrustBar'
import QuickQuote from '@/components/QuickQuote'

export async function generateStaticParams() {
  return getAllIndustryParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const l = normalizeLang(lang)
  if (!INDUSTRY_SLUGS.includes(slug as IndustrySlug)) return {}
  const ind = INDUSTRIES[slug as IndustrySlug]

  const title = `${ind.name} — Taiwan Machinery by SunGene`
  const description = `${ind.intro} CE certified, SUS304/316L stainless steel, configurable voltage, exported worldwide from Taichung Port. Typical output: ${ind.typicalOutput}.`

  return buildPageMetadata({
    lang: l,
    title,
    description,
    pathname: `/industries/${ind.slug}`,
    type: 'website',
    keywords: [
      ind.name.toLowerCase(),
      `${ind.name.toLowerCase()} machine`,
      `${ind.name.toLowerCase()} equipment Taiwan`,
      ...ind.productForms.slice(0, 4).map((f) => `${f} packaging machine`),
      ...ind.packagingFormats.slice(0, 4).map((f) => `${f} machine`),
    ],
  })
}

// ─── Localized labels (short) ─────────────────────────────────────────────────
const labels: Record<
  Lang,
  {
    kicker: string
    formsTitle: string
    formatsTitle: string
    machinesTitle: string
    useCasesTitle: string
    factorsTitle: string
    ctaTitle: (name: string) => string
    ctaSub: string
    ctaBtn1: string
    ctaBtn2: string
    outputLabel: string
    hsLabel: string
  }
> = {
  en: {
    kicker: 'INDUSTRY',
    formsTitle: 'Product forms we package',
    formatsTitle: 'Packaging formats',
    machinesTitle: 'Recommended machines',
    useCasesTitle: 'Typical buyer use cases',
    factorsTitle: 'Key factors buyers weigh',
    ctaTitle: (n) => `Get a quote for ${n.toLowerCase()} machinery`,
    ctaSub: 'Share your product, target output, packaging format and voltage. Our engineers in Taichung revert within one business day with a configured quote.',
    ctaBtn1: 'Get a Machine Recommendation',
    ctaBtn2: 'Request a Quote',
    outputLabel: 'Typical output',
    hsLabel: 'HS code reference',
  },
  zh: {
    kicker: '產業',
    formsTitle: '我們包裝的產品形式',
    formatsTitle: '包裝型式',
    machinesTitle: '推薦機型',
    useCasesTitle: '典型買家應用',
    factorsTitle: '買家關鍵考量',
    ctaTitle: (n) => `索取${n}機械報價`,
    ctaSub: '請提供產品、目標產速、包裝形式與電壓；台中工程團隊一個工作日內回覆完整配置報價。',
    ctaBtn1: '取得機型推薦',
    ctaBtn2: '索取報價',
    outputLabel: '常見產速',
    hsLabel: 'HS 編碼',
  },
  cn: {
    kicker: '行业',
    formsTitle: '我们包装的产品形式',
    formatsTitle: '包装型式',
    machinesTitle: '推荐机型',
    useCasesTitle: '典型买家应用',
    factorsTitle: '买家关键考量',
    ctaTitle: (n) => `索取${n}机械报价`,
    ctaSub: '请提供产品、目标产速、包装形式与电压；台中工程团队一个工作日内回复完整配置报价。',
    ctaBtn1: '获取机型推荐',
    ctaBtn2: '索取报价',
    outputLabel: '常见产速',
    hsLabel: 'HS 编码',
  },
  fr: {
    kicker: 'SECTEUR',
    formsTitle: 'Formes de produit',
    formatsTitle: 'Formats d\'emballage',
    machinesTitle: 'Machines recommandées',
    useCasesTitle: 'Cas d\'usage typiques',
    factorsTitle: 'Critères des acheteurs',
    ctaTitle: (n) => `Devis pour machines ${n.toLowerCase()}`,
    ctaSub: 'Partagez produit, cadence cible, format d\'emballage et tension. Nos ingénieurs à Taichung répondent sous 1 jour ouvré.',
    ctaBtn1: 'Obtenir une recommandation',
    ctaBtn2: 'Demander un devis',
    outputLabel: 'Cadence typique',
    hsLabel: 'Code HS',
  },
  es: {
    kicker: 'INDUSTRIA',
    formsTitle: 'Formas de producto',
    formatsTitle: 'Formatos de envasado',
    machinesTitle: 'Máquinas recomendadas',
    useCasesTitle: 'Casos de uso típicos',
    factorsTitle: 'Factores clave de compra',
    ctaTitle: (n) => `Cotización de maquinaria para ${n.toLowerCase()}`,
    ctaSub: 'Comparta producto, velocidad objetivo, formato y tensión. Nuestros ingenieros en Taichung responden en 1 día hábil.',
    ctaBtn1: 'Obtener recomendación',
    ctaBtn2: 'Solicitar cotización',
    outputLabel: 'Velocidad típica',
    hsLabel: 'Código HS',
  },
  pt: {
    kicker: 'SETOR',
    formsTitle: 'Formas de produto',
    formatsTitle: 'Formatos de embalagem',
    machinesTitle: 'Máquinas recomendadas',
    useCasesTitle: 'Casos de uso típicos',
    factorsTitle: 'Fatores-chave',
    ctaTitle: (n) => `Orçamento de máquinas para ${n.toLowerCase()}`,
    ctaSub: 'Informe produto, velocidade-alvo, formato e tensão. Engenheiros em Taichung respondem em 1 dia útil.',
    ctaBtn1: 'Obter recomendação',
    ctaBtn2: 'Solicitar orçamento',
    outputLabel: 'Velocidade típica',
    hsLabel: 'Código HS',
  },
  ko: {
    kicker: '산업 분야',
    formsTitle: '포장하는 제품 형태',
    formatsTitle: '포장 형식',
    machinesTitle: '추천 기계',
    useCasesTitle: '일반적 사용 사례',
    factorsTitle: '핵심 구매 요소',
    ctaTitle: (n) => `${n} 기계 견적 요청`,
    ctaSub: '제품, 목표 생산량, 포장 형식, 전압을 알려주세요. 타이중의 엔지니어가 1영업일 내에 회신합니다.',
    ctaBtn1: '기계 추천 받기',
    ctaBtn2: '견적 요청',
    outputLabel: '일반 생산량',
    hsLabel: 'HS 코드',
  },
  ja: {
    kicker: '業界',
    formsTitle: '対応する製品形態',
    formatsTitle: '包装形式',
    machinesTitle: '推奨機種',
    useCasesTitle: '典型的な導入事例',
    factorsTitle: '選定のポイント',
    ctaTitle: (n) => `${n}機械の見積もり依頼`,
    ctaSub: '製品、目標能力、包装形式、電圧をお知らせください。台中のエンジニアが1営業日以内にご返信します。',
    ctaBtn1: '機種の推薦を受ける',
    ctaBtn2: '見積もりを依頼',
    outputLabel: '標準能力',
    hsLabel: 'HSコード',
  },
  ar: {
    kicker: 'القطاع',
    formsTitle: 'أشكال المنتج التي نعبئها',
    formatsTitle: 'أشكال التعبئة',
    machinesTitle: 'الآلات الموصى بها',
    useCasesTitle: 'حالات استخدام نمطية',
    factorsTitle: 'العوامل الرئيسية للمشترين',
    ctaTitle: (n) => `طلب عرض سعر لآلات ${n}`,
    ctaSub: 'شارك المنتج والسرعة المستهدفة وشكل التعبئة والجهد. فريقنا في تايتشونغ يرد خلال يوم عمل واحد.',
    ctaBtn1: 'احصل على توصية بالماكينة',
    ctaBtn2: 'اطلب عرض سعر',
    outputLabel: 'السرعة النموذجية',
    hsLabel: 'رمز النظام المنسق HS',
  },
  th: {
    kicker: 'อุตสาหกรรม',
    formsTitle: 'รูปแบบสินค้าที่เราบรรจุ',
    formatsTitle: 'รูปแบบบรรจุภัณฑ์',
    machinesTitle: 'เครื่องที่แนะนำ',
    useCasesTitle: 'กรณีใช้งานตัวอย่าง',
    factorsTitle: 'ปัจจัยสำคัญของผู้ซื้อ',
    ctaTitle: (n) => `ขอใบเสนอราคาเครื่องจักร${n}`,
    ctaSub: 'แจ้งสินค้า ความเร็วเป้าหมาย รูปแบบบรรจุภัณฑ์ และแรงดันไฟฟ้า ทีมวิศวกรของเราที่ไทจงจะตอบกลับภายใน 1 วันทำการ',
    ctaBtn1: 'รับคำแนะนำเครื่อง',
    ctaBtn2: 'ขอใบเสนอราคา',
    outputLabel: 'ความเร็วมาตรฐาน',
    hsLabel: 'รหัส HS',
  },
  vi: {
    kicker: 'NGÀNH',
    formsTitle: 'Dạng sản phẩm chúng tôi đóng gói',
    formatsTitle: 'Dạng bao bì',
    machinesTitle: 'Máy đề xuất',
    useCasesTitle: 'Tình huống sử dụng điển hình',
    factorsTitle: 'Yếu tố chính cho người mua',
    ctaTitle: (n) => `Báo giá máy móc ngành ${n}`,
    ctaSub: 'Hãy cho chúng tôi biết sản phẩm, tốc độ mục tiêu, dạng bao bì và điện áp. Kỹ sư tại Đài Trung sẽ phản hồi trong 1 ngày làm việc.',
    ctaBtn1: 'Nhận đề xuất máy',
    ctaBtn2: 'Yêu cầu báo giá',
    outputLabel: 'Tốc độ điển hình',
    hsLabel: 'Mã HS',
  },
  de: {
    kicker: 'BRANCHE',
    formsTitle: 'Produktformen, die wir verpacken',
    formatsTitle: 'Verpackungsformate',
    machinesTitle: 'Empfohlene Maschinen',
    useCasesTitle: 'Typische Anwendungsfälle',
    factorsTitle: 'Wichtige Kaufkriterien',
    ctaTitle: (n) => `Angebot für ${n}-Maschinen anfordern`,
    ctaSub: 'Teilen Sie Produkt, Zielleistung, Verpackungsformat und Spannung. Unsere Ingenieure in Taichung antworten innerhalb von 1 Werktag.',
    ctaBtn1: 'Maschinen-Empfehlung erhalten',
    ctaBtn2: 'Angebot anfordern',
    outputLabel: 'Typische Leistung',
    hsLabel: 'HS-Code',
  },
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ lang: Lang; slug: string }>
}) {
  const { lang, slug } = await params
  if (!INDUSTRY_SLUGS.includes(slug as IndustrySlug)) notFound()
  const ind = INDUSTRIES[slug as IndustrySlug]
  const t = labels[lang] || labels.en
  const heroPhoto = PHOTO.home.hero
  const pageUrl = `${SITE_URL}/${lang}/industries/${ind.slug}`

  // ── Schemas ───────────────────────────────────────────────────────────────
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${ind.name} — Taiwan Machinery by SunGene`,
    description: ind.intro,
    inLanguage: LANG_META[lang].htmlLang,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#org` },
    primaryImageOfPage: `${SITE_URL}${heroPhoto}`,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.industry-intro'] },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: `${ind.name} Machinery & Equipment`,
    serviceType: ind.name,
    description: `${ind.intro} Typical output ${ind.typicalOutput}.`,
    provider: { '@id': `${SITE_URL}/#org` },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    inLanguage: LANG_META[lang].htmlLang,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${ind.name} machines`,
      itemListElement: ind.recommendedMachines.map((m) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          '@id': `${SITE_URL}/${lang}/machines/${m}#product`,
          name: MACHINE_DEFS[m].name,
          url: `${SITE_URL}/${lang}/machines/${m}`,
        },
      })),
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANG_META[lang].htmlLang,
    mainEntity: ind.keyFactors.slice(0, 4).map((factor, i) => ({
      '@type': 'Question',
      name: `What should I consider when buying ${ind.name.toLowerCase()} machinery? (${i + 1})`,
      acceptedAnswer: { '@type': 'Answer', text: factor },
    })),
  }

  return (
    <>
      <JsonLd data={[webPageSchema, serviceSchema, faqSchema]} />

      <PageHero
        kicker={t.kicker}
        title={ind.name}
        desc={ind.intro}
        image={{
          src: heroPhoto,
          alt: `${ind.name} packaging machinery by SunGene`,
          priority: true,
          aspectClassName: 'aspect-[16/10]',
        }}
      />

      <section className="bg-white py-6">
        <Container className="max-w-6xl">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: BREADCRUMB_LABELS[lang].home, href: `/${lang}` },
              { label: 'Industries', href: `/${lang}/industries` },
              { label: ind.name, href: `/${lang}/industries/${ind.slug}` },
            ]}
          />
        </Container>
      </section>

      <TrustBar lang={lang} />

      {/* ── Product forms + formats side-by-side ──────────────────────────── */}
      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-gray-950 md:text-2xl">{t.formsTitle}</h2>
              <ul className="mt-6 space-y-2">
                {ind.productForms.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-950 md:text-2xl">{t.formatsTitle}</h2>
              <ul className="mt-6 space-y-2">
                {ind.packagingFormats.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-600">
            <div>
              <div className="font-bold uppercase tracking-wider text-gray-500">{t.outputLabel}</div>
              <div className="mt-1">{ind.typicalOutput}</div>
            </div>
            <div>
              <div className="font-bold uppercase tracking-wider text-gray-500">{t.hsLabel}</div>
              <div className="mt-1">{ind.hsReference}</div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Recommended machines ──────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.machinesTitle}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ind.recommendedMachines.map((m) => {
              const def = MACHINE_DEFS[m]
              return (
                <a
                  key={m}
                  href={`/${lang}/machines/${m}`}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 transition hover:border-brand-400 hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-gray-950 group-hover:text-brand-700">{def.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{def.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-accent-600">{def.category} →</span>
                </a>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── Use cases ─────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.useCasesTitle}</h2>
          <div className="mt-8 space-y-3">
            {ind.useCases.map((uc, i) => (
              <Card key={i} className="p-5">
                <p className="text-sm leading-relaxed text-gray-700">{uc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Key factors ───────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.factorsTitle}</h2>
          <ul className="mt-8 space-y-3">
            {ind.keyFactors.map((f, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl bg-white border border-gray-200 p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-xs font-bold text-accent-700">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-gray-700">{f}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <QuickQuote lang={lang} context={ind.name} source="industry" />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-950 py-16 sm:py-20 text-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t.ctaTitle(ind.name)}</h2>
          <p className="mt-4 text-base text-white/70">{t.ctaSub}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink href={`/${lang}/recommend`} size="lg">
              {t.ctaBtn1}
            </ButtonLink>
            <a
              href={`/${lang}/contact`}
              className="text-sm font-semibold text-white/80 underline underline-offset-4 hover:text-white"
            >
              {t.ctaBtn2}
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
