import { Lang, ALL_LANGS } from '@/lib/i18n'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang } from '@/lib/seo'

// ─── Metadata ────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  en: 'Automation Solutions | Single Machine to Full Turnkey Line | SunGene',
  cn: '自动化解决方案 | 从单机到全套交钥匙生产线 | SunGene',
  zh: '自動化解決方案 | 從單機到全套交鑰匙生產線 | SunGene',
  fr: 'Solutions d\'automatisation | Machine individuelle à ligne clé en main | SunGene',
  es: 'Soluciones de automatización | De una máquina a línea llave en mano | SunGene',
  pt: 'Soluções de automação | Máquina única a linha turnkey completa | SunGene',
  ko: '자동화 솔루션 | 단일 기계에서 풀 턴키 라인까지 | SunGene',
  ja: '自動化ソリューション | 単体機械からターンキーラインまで | SunGene',
  ar: 'حلول الأتمتة | من آلة واحدة إلى خط إنتاج متكامل | SunGene',
  th: 'โซลูชันระบบอัตโนมัติ | จากเครื่องเดียวถึงสายการผลิตครบวงจร | SunGene',
  vi: 'Giải pháp tự động hóa | Từ máy đơn đến dây chuyền turnkey | SunGene',
  de: 'Automatisierungslösungen | Von der Einzelmaschine zur Turnkey-Linie | SunGene',
}

const metaDescs: Record<string, string> = {
  en: 'SunGene helps you build the right level of automation — from a single filling or packaging machine to a complete turnkey production line. Four solution levels to match your product, output, and budget.',
  cn: 'SunGene帮您构建合适的自动化层级——从单台灌装或包装设备到完整的交钥匙生产线。四个解决方案层级，匹配您的产品、产能和预算。',
  zh: 'SunGene幫您構建合適的自動化層級——從單台灌裝或包裝設備到完整的交鑰匙生產線。四個解決方案層級，匹配您的產品、產能和預算。',
  fr: 'SunGene vous aide à construire le bon niveau d\'automatisation — d\'une machine individuelle à une ligne de production clé en main complète. Quatre niveaux de solutions adaptés à votre produit, production et budget.',
  es: 'SunGene le ayuda a construir el nivel correcto de automatización — desde una sola máquina hasta una línea de producción llave en mano completa. Cuatro niveles de solución para su producto, producción y presupuesto.',
  pt: 'SunGene ajuda você a construir o nível certo de automação — de uma única máquina a uma linha de produção turnkey completa. Quatro níveis de solução para seu produto, produção e orçamento.',
  ko: 'SunGene은 단일 기계에서 완전한 턴키 생산 라인까지 적합한 자동화 수준을 구축하도록 도와드립니다. 제품, 생산량, 예산에 맞는 4가지 솔루션 레벨.',
  ja: 'SunGeneは、単体機械から完全なターンキー生産ラインまで、適切な自動化レベルの構築をサポートします。製品、生産量、予算に合わせた4つのソリューションレベル。',
  ar: 'تساعدك SunGene على بناء المستوى الصحيح من الأتمتة — من آلة واحدة إلى خط إنتاج متكامل. أربعة مستويات حلول تتناسب مع منتجك وإنتاجك وميزانيتك.',
  th: 'SunGene ช่วยให้คุณสร้างระดับระบบอัตโนมัติที่เหมาะสม ตั้งแต่เครื่องจักรเดียวจนถึงสายการผลิตแบบเบ็ดเสร็จ สี่ระดับโซลูชันที่เหมาะกับผลิตภัณฑ์ ผลผลิต และงบประมาณของคุณ',
  vi: 'SunGene giúp bạn xây dựng mức độ tự động hóa phù hợp — từ một máy đơn lẻ đến dây chuyền sản xuất turnkey hoàn chỉnh. Bốn cấp độ giải pháp phù hợp với sản phẩm, sản lượng và ngân sách.',
  de: 'SunGene hilft Ihnen, das richtige Automatisierungsniveau aufzubauen — von einer Einzelmaschine bis zur vollständigen Turnkey-Produktionslinie. Vier Lösungsstufen passend zu Ihrem Produkt, Output und Budget.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/solutions',
    type: 'website',
    keywords: [
      'turnkey production line', 'automation solutions', 'single machine', 'semi-automatic packaging',
      'fully automatic line', 'custom machinery', 'packaging line integration', 'Taiwan machinery manufacturer',
    ],
  })
}

// ─── Hero copy ────────────────────────────────────────────────────────────────

const heroKicker: Record<string, string> = {
  en: 'AUTOMATION SOLUTIONS',
  cn: '自动化解决方案',
  zh: '自動化解決方案',
  fr: 'SOLUTIONS D\'AUTOMATISATION',
  es: 'SOLUCIONES DE AUTOMATIZACIÓN',
  pt: 'SOLUÇÕES DE AUTOMAÇÃO',
  ko: '자동화 솔루션',
  ja: '自動化ソリューション',
  ar: 'حلول الأتمتة',
  th: 'โซลูชันระบบอัตโนมัติ',
  vi: 'GIẢI PHÁP TỰ ĐỘNG HÓA',
  de: 'AUTOMATISIERUNGSLÖSUNGEN',
}

const heroTitle: Record<string, string> = {
  en: 'From Single Machine to Full Turnkey Line',
  cn: '从单机到全套交钥匙生产线',
  zh: '從單機到全套交鑰匙生產線',
  fr: 'De la machine individuelle à la ligne clé en main',
  es: 'De una sola máquina a una línea completa llave en mano',
  pt: 'Da máquina individual à linha turnkey completa',
  ko: '단일 기계에서 풀 턴키 라인까지',
  ja: '単体機械から完全ターンキーラインまで',
  ar: 'من آلة واحدة إلى خط إنتاج متكامل',
  th: 'จากเครื่องเดียวถึงสายการผลิตครบวงจร',
  vi: 'Từ Máy Đơn đến Dây Chuyền Turnkey Hoàn Chỉnh',
  de: 'Von der Einzelmaschine zur vollständigen Turnkey-Linie',
}

const heroDesc: Record<string, string> = {
  en: "We don't sell packages. We help you build the right level of automation for your product, output target, and budget — whether that's one machine or a complete factory line.",
  cn: '我们不卖固定方案。我们帮您为产品、产能目标和预算构建合适的自动化层级——无论是单台设备还是完整生产线。',
  zh: '我們不賣固定方案。我們幫您為產品、產能目標和預算構建合適的自動化層級——無論是單台設備還是完整生產線。',
  fr: "Nous ne vendons pas de packages. Nous vous aidons à construire le bon niveau d'automatisation pour votre produit, votre objectif de production et votre budget — qu'il s'agisse d'une seule machine ou d'une ligne d'usine complète.",
  es: 'No vendemos paquetes fijos. Le ayudamos a construir el nivel correcto de automatización para su producto, objetivo de producción y presupuesto — ya sea una máquina o una línea de fábrica completa.',
  pt: 'Não vendemos pacotes fixos. Ajudamos você a construir o nível certo de automação para seu produto, meta de produção e orçamento — seja uma máquina ou uma linha de fábrica completa.',
  ko: '고정 패키지를 판매하지 않습니다. 제품, 생산 목표, 예산에 맞는 올바른 자동화 수준을 구축하도록 도와드립니다 — 단일 기계든 완전한 공장 라인이든.',
  ja: '固定パッケージは販売しません。製品、生産目標、予算に合った適切な自動化レベルの構築をサポートします — 1台の機械でも完全な工場ラインでも。',
  ar: 'نحن لا نبيع حزمًا جاهزة. نساعدك على بناء المستوى الصحيح من الأتمتة لمنتجك وهدفك الإنتاجي وميزانيتك — سواء كان ذلك آلة واحدة أو خط مصنع كامل.',
  th: 'เราไม่ขายแพ็กเกจสำเร็จรูป เราช่วยให้คุณสร้างระดับระบบอัตโนมัติที่เหมาะสมสำหรับผลิตภัณฑ์ เป้าหมายผลผลิต และงบประมาณของคุณ ไม่ว่าจะเป็นเครื่องเดียวหรือสายการผลิตโรงงานที่สมบูรณ์',
  vi: 'Chúng tôi không bán gói cố định. Chúng tôi giúp bạn xây dựng mức độ tự động hóa phù hợp cho sản phẩm, mục tiêu sản lượng và ngân sách — dù là một máy hay dây chuyền nhà máy hoàn chỉnh.',
  de: 'Wir verkaufen keine festen Pakete. Wir helfen Ihnen, das richtige Automatisierungsniveau für Ihr Produkt, Ihre Produktionsziele und Ihr Budget aufzubauen — ob eine Maschine oder eine komplette Fabrikanlage.',
}

// ─── Solution levels ──────────────────────────────────────────────────────────

interface SolutionLevel {
  badge: string
  title: string
  tagline: string
  whoFor: string
  typicalConfig: string
  typicalInvestment: string
  whenToUpgrade: string
  examples: string[]
  cta: string
  ctaHref: string
}

const levels: SolutionLevel[] = [
  {
    badge: 'Level 1',
    title: 'Single Machine',
    tagline: 'One specific task. One machine. Immediate impact.',
    whoFor: 'Startups, small factories, producers adding a specific new capability, or buyers solving one bottleneck.',
    typicalConfig: 'One filling, sealing, or processing machine — standalone, operator-fed or with a basic feeder.',
    typicalInvestment: '$3,000 – $30,000 USD',
    whenToUpgrade: 'When throughput is limited by the single machine, or when you want to reduce manual labor on adjacent steps.',
    examples: [
      'Auger filler for spice powder',
      'Piston filler for sauces',
      'VFFS machine for snacks',
      'Continuous fryer for snack line',
    ],
    cta: 'Get a Single Machine Quote',
    ctaHref: '/contact',
  },
  {
    badge: 'Level 2',
    title: 'Semi-Automatic Setup',
    tagline: 'Core automation, flexible operator involvement.',
    whoFor: 'Growing operations that want consistent output without the cost of full automation. Ideal for mixed products or frequent format changes.',
    typicalConfig: '2–4 machines linked by conveyors, with operator involvement at feeding, inspection, or packing-out stages.',
    typicalInvestment: '$15,000 – $80,000 USD',
    whenToUpgrade: 'When labor cost is significant, output targets exceed what 1–2 operators can sustain, or quality consistency requires more automation.',
    examples: [
      'VFFS + multi-head weigher + metal detector',
      'Liquid filler + capper + labeler',
      'Frying line + seasoning + cooling conveyor',
    ],
    cta: 'Design a Semi-Auto Setup',
    ctaHref: '/recommend',
  },
  {
    badge: 'Level 3',
    title: 'Fully Automatic Line',
    tagline: 'High throughput. Minimal labor. Consistent quality.',
    whoFor: 'Established producers targeting high volume, export-quality consistency, or strict hygiene standards (food, pharma, chemical).',
    typicalConfig: 'Complete line from raw material feeding through finished package output — PLC/HMI controlled, minimal manual steps.',
    typicalInvestment: '$80,000 – $300,000 USD',
    whenToUpgrade: 'When your volume justifies the investment, or when regulatory/export quality requirements demand it.',
    examples: [
      'Full VFFS powder line: silo → auger → VFFS → check-weigher → case packer',
      'Liquid fill-cap-label line for bottles',
      'Complete snack frying and packing line',
    ],
    cta: 'Request a Line Design',
    ctaHref: '/recommend',
  },
  {
    badge: 'Level 4',
    title: 'Turnkey / Custom Engineering',
    tagline: 'Your product. Your process. Built from scratch.',
    whoFor: 'New facility builds, unique products that don\'t fit standard machines, OEM partners, or buyers who need a complete solution with one point of contact.',
    typicalConfig: 'Full engineering project: process design → machine selection → custom fabrication → FAT testing → installation → commissioning → training.',
    typicalInvestment: 'From $150,000 USD — project-based',
    whenToUpgrade: 'This is the top tier. Suitable when off-the-shelf solutions can\'t meet your specific product, hygiene, throughput, or compliance requirements.',
    examples: [
      'Pharmaceutical powder sachet filling line',
      'Multi-format flexible packaging line for FMCG',
      'Full snack processing + packaging facility',
    ],
    cta: 'Discuss Your Project',
    ctaHref: '/contact',
  },
]

// Per-language overrides for level titles/taglines/cta (en as fallback for all others)
const levelTranslations: Record<string, {
  sectionTitle: string
  whoForLabel: string
  configLabel: string
  investmentLabel: string
  upgradeLabel: string
  examplesLabel: string
  compTitle: string
  compHeaders: string[]
  compRows: { label: string; cells: string[] }[]
  ctaSection: string
  ctaButton: string
  levels: { title: string; tagline: string; cta: string }[]
}> = {
  en: {
    sectionTitle: 'Choose Your Automation Level',
    whoForLabel: 'Best for',
    configLabel: 'Typical configuration',
    investmentLabel: 'Typical investment',
    upgradeLabel: 'When to upgrade',
    examplesLabel: 'Example applications',
    compTitle: 'Which level is right for you?',
    compHeaders: ['', 'Single Machine', 'Semi-Auto', 'Full Auto', 'Turnkey'],
    compRows: [
      { label: 'Operators needed', cells: ['1–2', '1–3', '1–2', '1 (supervisor)'] },
      { label: 'Output range', cells: ['Low–Medium', 'Medium', 'Medium–High', 'High–Very High'] },
      { label: 'Format flexibility', cells: ['High', 'High', 'Medium', 'By design'] },
      { label: 'Initial investment', cells: ['$', '$$', '$$$', '$$$$'] },
      { label: 'Lead time', cells: ['30–45 days', '45–75 days', '60–120 days', '90–180 days'] },
      { label: 'Best for', cells: ['Single bottleneck', 'Growing operation', 'Scale & consistency', 'New build / OEM'] },
    ],
    ctaSection: "Not sure which level fits your operation?",
    ctaButton: 'Get a Free Recommendation',
    levels: [
      { title: 'Single Machine', tagline: 'One specific task. One machine. Immediate impact.', cta: 'Get a Single Machine Quote' },
      { title: 'Semi-Automatic Setup', tagline: 'Core automation, flexible operator involvement.', cta: 'Design a Semi-Auto Setup' },
      { title: 'Fully Automatic Line', tagline: 'High throughput. Minimal labor. Consistent quality.', cta: 'Request a Line Design' },
      { title: 'Turnkey / Custom Engineering', tagline: 'Your product. Your process. Built from scratch.', cta: 'Discuss Your Project' },
    ],
  },
  cn: {
    sectionTitle: '选择您的自动化层级',
    whoForLabel: '适用于',
    configLabel: '典型配置',
    investmentLabel: '典型投资',
    upgradeLabel: '何时升级',
    examplesLabel: '应用示例',
    compTitle: '哪个层级适合您？',
    compHeaders: ['', '单机', '半自动', '全自动', '交钥匙'],
    compRows: [
      { label: '所需操作人员', cells: ['1–2人', '1–3人', '1–2人', '1人（监督）'] },
      { label: '产量范围', cells: ['低–中', '中', '中–高', '高–极高'] },
      { label: '格式灵活性', cells: ['高', '高', '中', '按设计'] },
      { label: '初始投资', cells: ['$', '$$', '$$$', '$$$$'] },
      { label: '交货期', cells: ['30–45天', '45–75天', '60–120天', '90–180天'] },
      { label: '最适合', cells: ['解决单一瓶颈', '成长型企业', '规模化与一致性', '新建厂/OEM'] },
    ],
    ctaSection: '不确定哪个层级适合您的工厂？',
    ctaButton: '获取免费推荐',
    levels: [
      { title: '单机', tagline: '一项任务。一台设备。立竿见影。', cta: '获取单机报价' },
      { title: '半自动配置', tagline: '核心自动化，灵活的操作员参与。', cta: '设计半自动方案' },
      { title: '全自动生产线', tagline: '高产量。最少人工。稳定品质。', cta: '申请产线设计' },
      { title: '交钥匙/定制工程', tagline: '您的产品。您的工艺。从头定制。', cta: '讨论您的项目' },
    ],
  },
  zh: {
    sectionTitle: '選擇您的自動化層級',
    whoForLabel: '適用於',
    configLabel: '典型配置',
    investmentLabel: '典型投資',
    upgradeLabel: '何時升級',
    examplesLabel: '應用範例',
    compTitle: '哪個層級適合您？',
    compHeaders: ['', '單機', '半自動', '全自動', '交鑰匙'],
    compRows: [
      { label: '所需操作人員', cells: ['1–2人', '1–3人', '1–2人', '1人（監督）'] },
      { label: '產量範圍', cells: ['低–中', '中', '中–高', '高–極高'] },
      { label: '格式靈活性', cells: ['高', '高', '中', '按設計'] },
      { label: '初始投資', cells: ['$', '$$', '$$$', '$$$$'] },
      { label: '交貨期', cells: ['30–45天', '45–75天', '60–120天', '90–180天'] },
      { label: '最適合', cells: ['解決單一瓶頸', '成長型企業', '規模化與一致性', '新建廠/OEM'] },
    ],
    ctaSection: '不確定哪個層級適合您的工廠？',
    ctaButton: '取得免費推薦',
    levels: [
      { title: '單機', tagline: '一項任務。一台設備。立竿見影。', cta: '取得單機報價' },
      { title: '半自動配置', tagline: '核心自動化，靈活的操作員參與。', cta: '設計半自動方案' },
      { title: '全自動生產線', tagline: '高產量。最少人工。穩定品質。', cta: '申請產線設計' },
      { title: '交鑰匙/客製工程', tagline: '您的產品。您的工藝。從頭客製。', cta: '討論您的專案' },
    ],
  },
}

function getLevelTx(lang: string) {
  return levelTranslations[lang] || levelTranslations.en
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: 'What is a turnkey packaging line?',
    a: 'A complete, integrated production system designed and built to your specifications — covering all steps from product feeding through filling, sealing, labeling, and palletizing. SunGene handles design, manufacturing, testing, and commissioning.',
  },
  {
    q: 'How do I know if I need a single machine or a full line?',
    a: 'Start with a single machine if you have one specific bottleneck (e.g. filling speed). Choose a semi-auto or full line if you want consistent throughput and less manual labor. Choose a turnkey project if you\'re building a new facility or scaling significantly.',
  },
  {
    q: 'Can SunGene integrate machines from other brands?',
    a: 'Yes. We design full lines to work with your existing equipment where possible, and our PLC/HMI systems can control mixed-brand setups.',
  },
  {
    q: 'What is the typical lead time for a full automatic line?',
    a: '60–120 days depending on complexity, customization level, and current order volume. Simple single machines may ship in 30–45 days.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function SolutionsPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const tx = getLevelTx(lang)
  const heroPhoto = PHOTO.pages.solutions.hero

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SITE_URL}/${lang}/solutions` },
    ],
  }

  const levelColors = [
    'from-blue-600 to-blue-700',
    'from-emerald-600 to-emerald-700',
    'from-orange-500 to-orange-600',
    'from-purple-600 to-purple-700',
  ]

  const levelBorderColors = [
    'border-blue-200',
    'border-emerald-200',
    'border-orange-200',
    'border-purple-200',
  ]

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <PageHero
        kicker={heroKicker[lang] || heroKicker.en}
        title={heroTitle[lang] || heroTitle.en}
        desc={heroDesc[lang] || heroDesc.en}
        image={{ src: heroPhoto, alt: 'Automated packaging production line in factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

      {/* 4 Solution Levels */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">
            {tx.sectionTitle}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {levels.map((level, i) => {
              const txLevel = tx.levels[i]
              return (
                <Card key={i} className={`overflow-hidden border-2 ${levelBorderColors[i]} p-0`}>
                  {/* Badge header */}
                  <div className={`bg-gradient-to-r ${levelColors[i]} px-6 py-4 flex items-center gap-4`}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white font-bold text-sm">
                      {level.badge}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">{txLevel?.title || level.title}</h3>
                      <p className="text-sm text-white/80 leading-snug mt-0.5">{txLevel?.tagline || level.tagline}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{tx.whoForLabel}</span>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700">{level.whoFor}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{tx.configLabel}</span>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700">{level.typicalConfig}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{tx.investmentLabel}:</span>
                      <span className="text-sm font-bold text-gray-950">{level.typicalInvestment}</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{tx.upgradeLabel}</span>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{level.whenToUpgrade}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{tx.examplesLabel}</span>
                      <ul className="mt-2 space-y-1">
                        {level.examples.map((ex, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <ButtonLink
                        href={`/${lang}${level.ctaHref}`}
                        size="sm"
                      >
                        {txLevel?.cta || level.cta}
                      </ButtonLink>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 sm:py-24">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl text-center">
            {tx.compTitle}
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  {tx.compHeaders.map((h, i) => (
                    <th
                      key={i}
                      className={`px-4 py-3 text-left text-sm font-bold tracking-wide ${
                        i === 0
                          ? 'text-gray-500 w-40'
                          : 'text-gray-950 bg-white border border-gray-200 rounded-t text-center'
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tx.compRows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700 border border-gray-200">
                      {row.label}
                    </td>
                    {row.cells.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-sm text-gray-700 border border-gray-200 text-center">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl text-center mb-10">
            {lang === 'cn' ? '常见问题' : lang === 'zh' ? '常見問題' : 'Frequently Asked Questions'}
          </h2>
          <div className="divide-y divide-gray-200">
            {faqItems.map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="text-base font-semibold text-gray-950">{item.q}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-950 py-16 sm:py-20 text-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{tx.ctaSection}</h2>
          <p className="mt-4 text-base text-white/70">
            {lang === 'cn'
              ? '告诉我们您的产品和产能目标，我们的工程师将为您推荐合适的自动化配置。'
              : lang === 'zh'
              ? '告訴我們您的產品和產能目標，我們的工程師將為您推薦合適的自動化配置。'
              : 'Tell us your product and output target — our engineers will recommend the right automation configuration for your operation.'}
          </p>
          <div className="mt-8">
            <ButtonLink href={`/${lang}/recommend`} size="lg">
              {tx.ctaButton}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
