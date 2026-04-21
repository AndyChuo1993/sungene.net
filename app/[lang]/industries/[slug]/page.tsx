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
import QuickAssessment from '@/components/QuickAssessment'
import SourcingRouteGuide from '@/components/machinery/SourcingRouteGuide'

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

  const title = `${ind.name} — Taiwan Sourcing Partner by SunGene`
  const description = `${ind.intro} Supplier-vetted sourcing, CE documentation support, configurable voltage, exported worldwide from Taichung Port. Typical output: ${ind.typicalOutput}.`

  return buildPageMetadata({
    lang: l,
    title,
    description,
    pathname: `/industries/${ind.slug}`,
    type: 'website',
    keywords: [
      ind.name.toLowerCase(),
      `${ind.name.toLowerCase()} equipment sourcing`,
      `${ind.name.toLowerCase()} sourcing assessment`,
      `${ind.name.toLowerCase()} supplier vetting`,
      `${ind.name.toLowerCase()} acceptance criteria`,
      ...ind.productForms.slice(0, 4).map((f) => `${f} packaging configuration`),
      ...ind.packagingFormats.slice(0, 4).map((f) => `${f} packaging configuration`),
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
    machinesTitle: 'Suggested configuration routes',
    useCasesTitle: 'Typical buyer use cases',
    factorsTitle: 'Key factors buyers weigh',
    ctaTitle: (n) => `Request sourcing assessment for ${n.toLowerCase()} equipment`,
    ctaSub: 'Share your product, target output, packaging format and voltage. Our engineers in Taichung respond within one business day with an assessment and recommended configuration.',
    ctaBtn1: 'Get a Sourcing Assessment',
    ctaBtn2: 'Request Sourcing Assessment',
    outputLabel: 'Typical output',
    hsLabel: 'HS code reference',
  },
  zh: {
    kicker: '產業',
    formsTitle: '我們包裝的產品形式',
    formatsTitle: '包裝型式',
    machinesTitle: '建議配置路線',
    useCasesTitle: '典型買家應用',
    factorsTitle: '買家關鍵考量',
    ctaTitle: (n) => `申請${n}採購評估`,
    ctaSub: '請提供產品、目標產速、包裝形式與電壓；台中工程團隊一個工作日內回覆採購評估與建議配置。',
    ctaBtn1: '取得採購評估',
    ctaBtn2: '申請採購評估',
    outputLabel: '常見產速',
    hsLabel: 'HS 編碼',
  },
  cn: {
    kicker: '行业',
    formsTitle: '我们包装的产品形式',
    formatsTitle: '包装型式',
    machinesTitle: '建议配置路线',
    useCasesTitle: '典型买家应用',
    factorsTitle: '买家关键考量',
    ctaTitle: (n) => `申请${n}采购评估`,
    ctaSub: '请提供产品、目标产速、包装形式与电压；台中工程团队一个工作日内回复采购评估与建议配置。',
    ctaBtn1: '获取采购评估',
    ctaBtn2: '申请采购评估',
    outputLabel: '常见产速',
    hsLabel: 'HS 编码',
  },
  fr: {
    kicker: 'SECTEUR',
    formsTitle: 'Formes de produit',
    formatsTitle: 'Formats d\'emballage',
    machinesTitle: 'Parcours de configuration suggérés',
    useCasesTitle: 'Cas d\'usage typiques',
    factorsTitle: 'Critères des acheteurs',
    ctaTitle: (n) => `Demander une évaluation pour ${n.toLowerCase()}`,
    ctaSub: 'Partagez produit, cadence cible, format d\'emballage et tension. Nos ingénieurs à Taichung répondent sous 1 jour ouvré avec une évaluation et une configuration recommandée.',
    ctaBtn1: 'Obtenir une évaluation',
    ctaBtn2: 'Demander une évaluation',
    outputLabel: 'Cadence typique',
    hsLabel: 'Code HS',
  },
  es: {
    kicker: 'INDUSTRIA',
    formsTitle: 'Formas de producto',
    formatsTitle: 'Formatos de envasado',
    machinesTitle: 'Rutas de configuración sugeridas',
    useCasesTitle: 'Casos de uso típicos',
    factorsTitle: 'Factores clave de compra',
    ctaTitle: (n) => `Solicitar evaluación para ${n.toLowerCase()}`,
    ctaSub: 'Comparta producto, velocidad objetivo, formato y tensión. Nuestros ingenieros en Taichung responden en 1 día hábil con una evaluación y una configuración recomendada.',
    ctaBtn1: 'Obtener evaluación',
    ctaBtn2: 'Solicitar evaluación',
    outputLabel: 'Velocidad típica',
    hsLabel: 'Código HS',
  },
  pt: {
    kicker: 'SETOR',
    formsTitle: 'Formas de produto',
    formatsTitle: 'Formatos de embalagem',
    machinesTitle: 'Rotas de configuração sugeridas',
    useCasesTitle: 'Casos de uso típicos',
    factorsTitle: 'Fatores-chave',
    ctaTitle: (n) => `Solicitar avaliação para ${n.toLowerCase()}`,
    ctaSub: 'Informe produto, velocidade-alvo, formato e tensão. Engenheiros em Taichung respondem em 1 dia útil com uma avaliação e configuração recomendada.',
    ctaBtn1: 'Obter avaliação',
    ctaBtn2: 'Solicitar avaliação',
    outputLabel: 'Velocidade típica',
    hsLabel: 'Código HS',
  },
  ko: {
    kicker: '산업 분야',
    formsTitle: '포장하는 제품 형태',
    formatsTitle: '포장 형식',
    machinesTitle: '추천 구성 경로',
    useCasesTitle: '일반적 사용 사례',
    factorsTitle: '핵심 구매 요소',
    ctaTitle: (n) => `${n} 소싱 평가 요청`,
    ctaSub: '제품, 목표 생산량, 포장 형식, 전압을 알려주세요. 타이중의 엔지니어가 1영업일 내에 평가와 권장 구성을 회신합니다.',
    ctaBtn1: '소싱 평가 받기',
    ctaBtn2: '소싱 평가 요청',
    outputLabel: '일반 생산량',
    hsLabel: 'HS 코드',
  },
  ja: {
    kicker: '業界',
    formsTitle: '対応する製品形態',
    formatsTitle: '包装形式',
    machinesTitle: '推奨構成ルート',
    useCasesTitle: '典型的な導入事例',
    factorsTitle: '選定のポイント',
    ctaTitle: (n) => `${n}の調達評価を依頼`,
    ctaSub: '製品、目標能力、包装形式、電圧をお知らせください。台中のエンジニアが1営業日以内に評価と推奨構成をご返信します。',
    ctaBtn1: '調達評価を受ける',
    ctaBtn2: '調達評価を依頼',
    outputLabel: '標準能力',
    hsLabel: 'HSコード',
  },
  ar: {
    kicker: 'القطاع',
    formsTitle: 'أشكال المنتج التي نعبئها',
    formatsTitle: 'أشكال التعبئة',
    machinesTitle: 'مسارات التهيئة المقترحة',
    useCasesTitle: 'حالات استخدام نمطية',
    factorsTitle: 'العوامل الرئيسية للمشترين',
    ctaTitle: (n) => `طلب تقييم التوريد لقطاع ${n}`,
    ctaSub: 'شارك المنتج والسرعة المستهدفة وشكل التعبئة والجهد. يرد فريق تايتشونغ خلال يوم عمل واحد مع تقييم وتكوين موصى به.',
    ctaBtn1: 'احصل على تقييم',
    ctaBtn2: 'اطلب تقييم التوريد',
    outputLabel: 'السرعة النموذجية',
    hsLabel: 'رمز النظام المنسق HS',
  },
  th: {
    kicker: 'อุตสาหกรรม',
    formsTitle: 'รูปแบบสินค้าที่เราบรรจุ',
    formatsTitle: 'รูปแบบบรรจุภัณฑ์',
    machinesTitle: 'แนวทางการจัดวางที่แนะนำ',
    useCasesTitle: 'กรณีใช้งานตัวอย่าง',
    factorsTitle: 'ปัจจัยสำคัญของผู้ซื้อ',
    ctaTitle: (n) => `ขอการประเมินการจัดซื้อสำหรับ${n}`,
    ctaSub: 'แจ้งสินค้า ความเร็วเป้าหมาย รูปแบบบรรจุภัณฑ์ และแรงดันไฟฟ้า ทีมวิศวกรที่ไทจงจะตอบกลับภายใน 1 วันทำการพร้อมการประเมินและการกำหนดค่าที่แนะนำ',
    ctaBtn1: 'รับการประเมิน',
    ctaBtn2: 'ขอการประเมินการจัดซื้อ',
    outputLabel: 'ความเร็วมาตรฐาน',
    hsLabel: 'รหัส HS',
  },
  vi: {
    kicker: 'NGÀNH',
    formsTitle: 'Dạng sản phẩm chúng tôi đóng gói',
    formatsTitle: 'Dạng bao bì',
    machinesTitle: 'Lộ trình cấu hình đề xuất',
    useCasesTitle: 'Tình huống sử dụng điển hình',
    factorsTitle: 'Yếu tố chính cho người mua',
    ctaTitle: (n) => `Yêu cầu đánh giá nguồn cung cho ${n}`,
    ctaSub: 'Hãy cho chúng tôi biết sản phẩm, tốc độ mục tiêu, dạng bao bì và điện áp. Kỹ sư tại Đài Trung sẽ phản hồi trong 1 ngày làm việc với đánh giá và cấu hình đề xuất.',
    ctaBtn1: 'Nhận đánh giá',
    ctaBtn2: 'Yêu cầu đánh giá',
    outputLabel: 'Tốc độ điển hình',
    hsLabel: 'Mã HS',
  },
  de: {
    kicker: 'BRANCHE',
    formsTitle: 'Produktformen, die wir verpacken',
    formatsTitle: 'Verpackungsformate',
    machinesTitle: 'Empfohlene Konfigurationspfade',
    useCasesTitle: 'Typische Anwendungsfälle',
    factorsTitle: 'Wichtige Kaufkriterien',
    ctaTitle: (n) => `Beschaffungsbewertung für ${n} anfordern`,
    ctaSub: 'Teilen Sie Produkt, Zielleistung, Verpackungsformat und Spannung. Unsere Ingenieure in Taichung antworten innerhalb von 1 Werktag mit Bewertung und empfohlener Konfiguration.',
    ctaBtn1: 'Bewertung erhalten',
    ctaBtn2: 'Bewertung anfordern',
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
    name: `${ind.name} — Taiwan Sourcing Partner by SunGene`,
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
    name: `${ind.name} equipment sourcing support`,
    serviceType: ind.name,
    description: `${ind.intro} Typical output ${ind.typicalOutput}.`,
    provider: { '@id': `${SITE_URL}/#org` },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    inLanguage: LANG_META[lang].htmlLang,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${ind.name} sourcing scope`,
      itemListElement: ind.recommendedMachines.map((m) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${SITE_URL}/${lang}/machines/${m}#webpage`,
          name: `${MACHINE_DEFS[m].name} configuration`,
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
      name: `What should I consider when sourcing ${ind.name.toLowerCase()} equipment? (${i + 1})`,
      acceptedAnswer: { '@type': 'Answer', text: factor },
    })),
  }

  const decisionGuide = {
    notFit: ({
      en: [
        'RFPs without product samples, packaging format, and target output defined.',
        'Projects that focus on unit price only, but do not define acceptance criteria.',
        'Teams that skip supplier fit, CE/document scope, or post-installation support.',
      ],
      zh: [
        '沒有提供樣品、包裝形式與目標產速的詢價需求。',
        '只比單價、但沒有先定義驗收標準的專案。',
        '跳過供應商適配、文件範圍與安裝後支援的採購方式。',
      ],
      cn: [
        '没有提供样品、包装形式与目标产速的询价需求。',
        '只比单价、但没有先定义验收标准的项目。',
        '跳过供应商适配、文件范围与安装后支持的采购方式。',
      ],
    } as Record<string, string[]>)[lang] || [
      'RFPs without product samples, packaging format, and target output defined.',
      'Projects that focus on unit price only, but do not define acceptance criteria.',
      'Teams that skip supplier fit, CE/document scope, or post-installation support.',
    ],
    compare: ({
      en: [
        'What is included: feeding, dosing, coding, inspection, guarding, commissioning, documents.',
        'Evidence: running videos on similar products + export references + FAT scope.',
        'Changeover, cleaning, and operator workload — not only nameplate speed.',
      ],
      zh: [
        '報價包含哪些：上料、計量、打碼、檢測、防護、調試與文件。',
        '證據：同類產品運轉影片＋出口案例＋FAT 範圍。',
        '換線、清潔與操作負擔，不只看型錄速度。',
      ],
      cn: [
        '报价包含哪些：上料、计量、打码、检测、防护、调试与文件。',
        '证据：同类产品运行视频＋出口案例＋FAT 范围。',
        '换线、清洁与操作负担，不只看目录速度。',
      ],
    } as Record<string, string[]>)[lang] || [
      'What is included: feeding, dosing, coding, inspection, guarding, commissioning, documents.',
      'Evidence: running videos on similar products + export references + FAT scope.',
      'Changeover, cleaning, and operator workload — not only nameplate speed.',
    ],
    acceptance: ({
      en: [
        'Lock voltage/frequency, utilities, and line integration responsibilities.',
        'Define pass/fail criteria with your real product and packaging materials.',
        'Approve FAT records, spare parts list, manuals, and electrical documents before shipment.',
      ],
      zh: [
        '先鎖定電壓/頻率、公用工程與整線責任分工。',
        '用實際產品與包材定義合格標準。',
        '出貨前確認 FAT 紀錄、備件清單、手冊與電氣文件。',
      ],
      cn: [
        '先锁定电压/频率、公用工程与整线责任分工。',
        '用实际产品与包材定义合格标准。',
        '出货前确认 FAT 记录、备件清单、手册与电气文件。',
      ],
    } as Record<string, string[]>)[lang] || [
      'Lock voltage/frequency, utilities, and line integration responsibilities.',
      'Define pass/fail criteria with your real product and packaging materials.',
      'Approve FAT records, spare parts list, manuals, and electrical documents before shipment.',
    ],
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
          alt: `${ind.name} equipment sourcing support by SunGene`,
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

      {/* ── Configuration routes ──────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.machinesTitle}</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            {({
              en: 'Instead of picking a model first, start from product form, packaging format, target output, and acceptance checkpoints. These routes point you to the right configuration path.',
              zh: '不要先選型號，先從產品形態、包裝形式、目標產速與驗收重點出發。以下路線協助你鎖定正確配置方向。',
              cn: '不要先选型号，先从产品形态、包装形式、目标产速与验收重点出发。以下路线帮助你锁定正确配置方向。',
            } as Record<string, string>)[lang] ||
              'Instead of picking a model first, start from product form, packaging format, target output, and acceptance checkpoints. These routes point you to the right configuration path.'}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ind.recommendedMachines.map((m) => {
              const def = MACHINE_DEFS[m]
              const route = (() => {
                const common = {
                  output: ind.typicalOutput,
                  formats: ind.packagingFormats.slice(0, 3),
                  forms: ind.productForms.slice(0, 3),
                }
                if (m === 'pouch-packing-machine') {
                  return {
                    title: ({ en: 'Packaging Route: Pouch Systems', zh: '包裝路線：袋類系統', cn: '包装路线：袋类系统' } as Record<string, string>)[lang] || 'Packaging Route: Pouch Systems',
                    bullets: [
                      ({ en: `Formats: ${common.formats.join(' / ') || 'pouch and bag formats'}`, zh: `包裝：${common.formats.join(' / ') || '袋型/袋類'}`, cn: `包装：${common.formats.join(' / ') || '袋型/袋类'}` } as Record<string, string>)[lang] || `Formats: ${common.formats.join(' / ') || 'pouch and bag formats'}`,
                      ({ en: `Target output: ${common.output}`, zh: `目標產速：${common.output}`, cn: `目标产速：${common.output}` } as Record<string, string>)[lang] || `Target output: ${common.output}`,
                      ({ en: 'Key checkpoints: film compatibility, seal integrity, changeover time', zh: '驗收重點：膜材相容、封口完整性、換線時間', cn: '验收重点：膜材兼容、封口完整性、换线时间' } as Record<string, string>)[lang] || 'Key checkpoints: film compatibility, seal integrity, changeover time',
                    ],
                  }
                }
                if (m === 'powder-filling-machine') {
                  return {
                    title: ({ en: 'Dosing Route: Powders', zh: '計量路線：粉體', cn: '计量路线：粉体' } as Record<string, string>)[lang] || 'Dosing Route: Powders',
                    bullets: [
                      ({ en: `Product forms: ${common.forms.join(' / ') || 'powders and fine granules'}`, zh: `產品：${common.forms.join(' / ') || '粉體/細顆粒'}`, cn: `产品：${common.forms.join(' / ') || '粉体/细颗粒'}` } as Record<string, string>)[lang] || `Product forms: ${common.forms.join(' / ') || 'powders and fine granules'}`,
                      ({ en: `Target output: ${common.output}`, zh: `目標產速：${common.output}`, cn: `目标产速：${common.output}` } as Record<string, string>)[lang] || `Target output: ${common.output}`,
                      ({ en: 'Key checkpoints: dust control, accuracy range, cleaning and change parts', zh: '驗收重點：粉塵控制、精度範圍、清潔與換型件', cn: '验收重点：粉尘控制、精度范围、清洁与换型件' } as Record<string, string>)[lang] || 'Key checkpoints: dust control, accuracy range, cleaning and change parts',
                    ],
                  }
                }
                if (m === 'liquid-filling-machine') {
                  return {
                    title: ({ en: 'Filling Route: Liquids & Pastes', zh: '充填路線：液體/膏體', cn: '灌装路线：液体/膏体' } as Record<string, string>)[lang] || 'Filling Route: Liquids & Pastes',
                    bullets: [
                      ({ en: `Product forms: ${common.forms.join(' / ') || 'liquids and viscous products'}`, zh: `產品：${common.forms.join(' / ') || '液體/黏稠物'}`, cn: `产品：${common.forms.join(' / ') || '液体/黏稠物'}` } as Record<string, string>)[lang] || `Product forms: ${common.forms.join(' / ') || 'liquids and viscous products'}`,
                      ({ en: `Target output: ${common.output}`, zh: `目標產速：${common.output}`, cn: `目标产速：${common.output}` } as Record<string, string>)[lang] || `Target output: ${common.output}`,
                      ({ en: 'Key checkpoints: dripping/foaming, fill accuracy, CIP or washdown readiness', zh: '驗收重點：滴漏/起泡、充填精度、清洗與衛生', cn: '验收重点：滴漏/起泡、灌装精度、清洗与卫生' } as Record<string, string>)[lang] || 'Key checkpoints: dripping/foaming, fill accuracy, CIP or washdown readiness',
                    ],
                  }
                }
                if (m === 'snack-processing-line') {
                  return {
                    title: ({ en: 'Line Route: Food Processing Integration', zh: '整線路線：食品加工整合', cn: '整线路线：食品加工整合' } as Record<string, string>)[lang] || 'Line Route: Food Processing Integration',
                    bullets: [
                      ({ en: 'Define processes: preparation → processing → seasoning → cooling', zh: '先定義製程：前處理→加工→調味→冷卻', cn: '先定义制程：前处理→加工→调味→冷却' } as Record<string, string>)[lang] || 'Define processes: preparation → processing → seasoning → cooling',
                      ({ en: `Target output: ${common.output}`, zh: `目標產速：${common.output}`, cn: `目标产速：${common.output}` } as Record<string, string>)[lang] || `Target output: ${common.output}`,
                      ({ en: 'Key checkpoints: hygiene, utilities, layout, commissioning and training scope', zh: '驗收重點：衛生、能源、公用工程、佈局與調試訓練範圍', cn: '验收重点：卫生、能源、公用工程、布局与调试培训范围' } as Record<string, string>)[lang] || 'Key checkpoints: hygiene, utilities, layout, commissioning and training scope',
                    ],
                  }
                }
                if (m === 'conveyor-system') {
                  return {
                    title: ({ en: 'Automation Route: Conveying & Controls', zh: '自動化路線：輸送與控制', cn: '自动化路线：输送与控制' } as Record<string, string>)[lang] || 'Automation Route: Conveying & Controls',
                    bullets: [
                      ({ en: 'Map material flow, buffer points, reject logic, and safety interlocks', zh: '盤點物流、緩衝點、剔除邏輯與安全互鎖', cn: '盘点物流、缓冲点、剔除逻辑与安全互锁' } as Record<string, string>)[lang] || 'Map material flow, buffer points, reject logic, and safety interlocks',
                      ({ en: 'Confirm PLC/HMI brand and electrical standard early', zh: '先鎖定 PLC/HMI 品牌與電氣標準', cn: '先锁定 PLC/HMI 品牌与电气标准' } as Record<string, string>)[lang] || 'Confirm PLC/HMI brand and electrical standard early',
                      ({ en: 'Key checkpoints: IO mapping ownership, drawings, parameter backup', zh: '驗收重點：IO 對接責任、圖面與參數備份', cn: '验收重点：IO 对接责任、图面与参数备份' } as Record<string, string>)[lang] || 'Key checkpoints: IO mapping ownership, drawings, parameter backup',
                    ],
                  }
                }
                return {
                  title: ({ en: `Route: ${def.name} Configuration`, zh: `路線：${def.name} 配置`, cn: `路线：${def.name} 配置` } as Record<string, string>)[lang] || `Route: ${def.name} Configuration`,
                  bullets: [
                    ({ en: `Category: ${def.category}`, zh: `類別：${def.category}`, cn: `类别：${def.category}` } as Record<string, string>)[lang] || `Category: ${def.category}`,
                    ({ en: `Target output: ${common.output}`, zh: `目標產速：${common.output}`, cn: `目标产速：${common.output}` } as Record<string, string>)[lang] || `Target output: ${common.output}`,
                    ({ en: 'Key checkpoints: scope clarity, acceptance criteria, document package', zh: '驗收重點：範圍清楚、驗收標準、文件包', cn: '验收重点：范围清楚、验收标准、文件包' } as Record<string, string>)[lang] || 'Key checkpoints: scope clarity, acceptance criteria, document package',
                  ],
                }
              })()
              return (
                <a
                  key={m}
                  href={`/${lang}/machines/${m}`}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 transition hover:border-brand-400 hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-gray-950 group-hover:text-brand-700">{route.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {route.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-block text-sm font-semibold text-accent-600">
                    {({ en: 'See details →', zh: '查看細節 →', cn: '查看细节 →' } as Record<string, string>)[lang] || 'See details →'}
                  </span>
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

      <SourcingRouteGuide
        lang={lang}
        fitItems={ind.useCases.slice(0, 4)}
        notFitItems={decisionGuide.notFit}
        compareItems={decisionGuide.compare}
        acceptanceItems={decisionGuide.acceptance}
      />

      <QuickAssessment lang={lang} context={ind.name} source="industry" />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-950 py-16 sm:py-20 text-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t.ctaTitle(ind.name)}</h2>
          <p className="mt-4 text-base text-white/70">{t.ctaSub}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink href={`/${lang}/assessment`} size="lg">
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
