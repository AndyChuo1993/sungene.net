import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { MachineFAQ } from '@/components/machines/MachineFAQ'
import JsonLd from '@/components/JsonLd'
import type { Metadata } from 'next'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'

const titles: Record<string, string> = {
  en: 'Snack & Food Processing Line | Frying, Seasoning, Packaging | SunGene',
  cn: '零食食品加工线 | 油炸、调味、包装 | SunGene',
  zh: '零食食品加工線 | 油炸、調味、包裝 | SunGene',
  fr: 'Ligne de production de snacks | Friture, Assaisonnement, Emballage | SunGene',
  es: 'Línea de procesamiento de snacks | Fritura, Sazonado, Empaque | SunGene',
  pt: 'Linha de Processamento de Snacks | Fritura, Tempero, Embalagem | SunGene',
  ko: '스낵 식품 가공 라인 | 튀김, 시즈닝, 포장 | SunGene',
  ja: 'スナック食品加工ライン | フライ、シーズニング、包装 | SunGene',
  ar: 'خط معالجة الوجبات الخفيفة | القلي، التتبيل، التعبئة | SunGene',
  th: 'สายการผลิตขนม | ทอด, ปรุงรส, บรรจุ | SunGene',
  vi: 'Dây chuyền chế biến snack | Chiên, Gia vị, Đóng gói | SunGene',
  de: 'Snack-Verarbeitungslinie | Frittieren, Würzen, Verpacken | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'SunGene designs and manufactures complete snack and food processing lines including fryers, seasoning drums, cooling conveyors, multi-head weighers and packaging systems. CE certified.',
  cn: 'SunGene设计和生产完整的零食食品加工线，包括油炸机、调味滚筒、冷却输送带、多头秤和包装系统。CE认证。',
  zh: 'SunGene設計和生產完整的零食食品加工線，包括油炸機、調味滾筒、冷卻輸送帶、多頭秤和包裝系統。CE認證。',
  fr: 'SunGene conçoit et fabrique des lignes complètes de production de snacks et d\'aliments : friteuses, tambours d\'assaisonnement, convoyeurs de refroidissement, peseuses multicanaux et systèmes d\'emballage. Certifiées CE.',
  es: 'SunGene diseña y fabrica líneas completas de procesamiento de snacks: freidoras, tambores sazonadores, cintas transportadoras de enfriamiento, pesadoras multicabezal y sistemas de empaque. Certificadas CE.',
  pt: 'SunGene projeta e fabrica linhas completas de processamento de snacks: fritadeiras, tambores de tempero, transportadores de resfriamento, pesadoras multicanal e sistemas de embalagem. Certificadas CE.',
  ko: 'SunGene은 튀김기, 시즈닝 드럼, 냉각 컨베이어, 다두 계량기, 포장 시스템을 포함한 완전한 스낵 식품 가공 라인을 설계 제조합니다. CE 인증.',
  ja: 'SunGeneはフライヤー、シーズニングドラム、冷却コンベア、マルチヘッド計量機、包装システムを含む完全なスナック食品加工ラインを設計・製造。CE認証。',
  ar: 'SunGene تصمم وتصنع خطوط إنتاج وجبات خفيفة كاملة: قلايات، أسطوانات تتبيل، ناقلات تبريد، موازين متعددة الرؤوس وأنظمة تعبئة. معتمدة CE.',
  th: 'SunGene ออกแบบและผลิตสายการผลิตขนมครบวงจร ได้แก่ เครื่องทอด กลองปรุงรส สายพานระบายความร้อน เครื่องชั่งหลายหัว และระบบบรรจุภัณฑ์ รับรอง CE',
  vi: 'SunGene thiết kế và sản xuất dây chuyền chế biến snack và thực phẩm hoàn chỉnh: máy chiên, trống gia vị, băng tải làm lạnh, cân nhiều đầu và hệ thống đóng gói. Chứng nhận CE.',
  de: 'SunGene entwirft und fertigt komplette Snack- und Lebensmittelverarbeitungslinien: Frittiermaschinen, Gewürztrommeln, Kühlbänder, Mehrkopfwaagen und Verpackungssysteme. CE-zertifiziert.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    keywords: ['snack processing line', 'frying machine', 'roasting machine', 'snack production line', 'food processing equipment', 'continuous fryer', 'seasoning machine'],
    alternates: {
      canonical: `${SITE_URL}/${lang}/machines/snack-processing-line`,
      languages: {
        'en': `${SITE_URL}/en/machines/snack-processing-line`,
        'zh-TW': `${SITE_URL}/zh/machines/snack-processing-line`,
        'zh-CN': `${SITE_URL}/cn/machines/snack-processing-line`,
        'fr': `${SITE_URL}/fr/machines/snack-processing-line`,
        'es': `${SITE_URL}/es/machines/snack-processing-line`,
        'pt': `${SITE_URL}/pt/machines/snack-processing-line`,
        'ko': `${SITE_URL}/ko/machines/snack-processing-line`,
        'ja': `${SITE_URL}/ja/machines/snack-processing-line`,
        'ar': `${SITE_URL}/ar/machines/snack-processing-line`,
        'th': `${SITE_URL}/th/machines/snack-processing-line`,
        'vi': `${SITE_URL}/vi/machines/snack-processing-line`,
        'de': `${SITE_URL}/de/machines/snack-processing-line`,
        'x-default': `${SITE_URL}/en/machines/snack-processing-line`,
      }
    },
    openGraph: {
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      url: `${SITE_URL}/${lang}/machines/snack-processing-line`,
      siteName: 'SunGene Machinery',
      images: [{ url: `${SITE_URL}/og/og.png`, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      images: [`${SITE_URL}/og/og.png`],
    },
  }
}

export default async function SnackProcessingLinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      title: 'Snack & Food Processing Line',
      kicker: 'FOOD PROCESSING EQUIPMENT',
      p1: 'We design and manufacture complete snack and food processing lines — from raw material preparation through frying, seasoning, cooling, weighing, and packaging. Our turnkey solutions deliver consistent product quality at outputs from 100 to 2,000 kg/hour.',
      p2: 'All equipment is built with SUS304/316L stainless steel, food-grade contact surfaces, and energy-efficient heating systems. Lines come with PLC centralized control, recipe management, and remote monitoring capability.',
      subTitle: 'Line Components',
      machines: ['Fryer', 'Seasoning Drum', 'Cooling Conveyor', 'Multi-Head Weigher + VFFS', 'Case Packer'],
      features: ['Complete turnkey lines', 'Output 100-2,000 kg/hour', 'Energy-efficient gas/electric fryers', 'Uniform seasoning coverage', 'Multi-head weigher integration', 'PLC centralized control', 'Recipe management system', 'CE certified'],
      cta: 'Describe your snack product and target output — we\'ll plan your line.',
      whoTitle: 'Who It\'s For',
      who: [
        { title: 'Snack Manufacturers', desc: 'Complete production lines for potato chips, tortilla chips, puffed snacks, extruded snacks, and fried nuts.' },
        { title: 'Ready-Meal Producers', desc: 'Processing and packaging lines for prepared meals, frozen entrees, and meal kits with portion control.' },
        { title: 'Frozen Food Companies', desc: 'Frying, cooling, and IQF freezing lines for frozen snacks, appetizers, and convenience foods.' },
        { title: 'Bakeries & Confectioneries', desc: 'Seasoning, coating, and packaging systems for cookies, crackers, candy, and coated nuts.' },
      ],
      appTitle: 'Application Scenarios',
      apps: ['Potato Chips', 'Nuts & Seeds', 'Candy & Confectionery', 'Frozen Food', 'Meat Products', 'Ready Meals'],
      faqTitle: 'Frequently Asked Questions',
      faq: [
        { q: 'What output capacity can you deliver?', a: 'Our standard lines range from 100 to 2,000 kg/hour depending on the product type and line configuration. We can design lines for your specific target output and available floor space.' },
        { q: 'Can you design a line for my specific snack product?', a: 'Yes. Our engineering team designs custom processing lines based on your product recipe, target output, quality requirements, and factory layout. We provide 3D line layouts and process flow diagrams.' },
        { q: 'Do you offer installation and commissioning?', a: 'Yes. We provide full installation, commissioning, operator training, and recipe optimization at your factory. Our engineers remain on-site until your line reaches target performance.' },
        { q: 'What heating options are available for fryers?', a: 'We offer gas-fired, electric, and thermal oil heating systems. Gas fryers are most economical for large output, while electric fryers offer precise temperature control for smaller lines.' },
        { q: 'Can the seasoning system handle multiple flavors?', a: 'Yes. Our seasoning drums support quick flavor changeover with easy cleaning. The dosing system can be programmed for different seasoning ratios via the PLC recipe management system.' },
      ],
      notSure: 'Not sure which configuration? Send us your product details.',
      btnQuote: 'Get a Quote',
      btnRecommend: 'Get a Recommendation',
    },
    cn: {
      title: '零食食品加工线',
      kicker: '食品加工设备',
      p1: '我们设计和制造完整的零食食品加工线——从原料准备到油炸、调味、冷却、称重和包装。我们的交钥匙方案以每小时100到2,000公斤的产量提供一致的产品质量。',
      p2: '所有设备均采用SUS304/316L不锈钢、食品级接触面和节能加热系统。产线配备PLC集中控制、配方管理和远程监控功能。',
      subTitle: '产线组成',
      machines: ['油炸机', '调味滚筒', '冷却输送带', '多头秤+VFFS', '装箱机'],
      features: ['完整交钥匙产线', '产量100-2,000公斤/小时', '节能燃气/电加热油炸机', '均匀调味覆盖', '多头秤集成', 'PLC集中控制', '配方管理系统', 'CE认证'],
      cta: '描述您的零食产品和目标产量——我们将规划您的产线。',
      whoTitle: '适用客户',
      who: [
        { title: '零食制造商', desc: '薯片、玉米片、膨化零食、挤出零食和油炸坚果的完整生产线。' },
        { title: '即食食品生产商', desc: '预制餐、冷冻主食和套餐的加工和包装线，带份量控制。' },
        { title: '冷冻食品公司', desc: '冷冻零食、开胃菜和方便食品的油炸、冷却和IQF速冻线。' },
        { title: '烘焙和糖果厂', desc: '饼干、薄脆、糖果和裹衣坚果的调味、涂层和包装系统。' },
      ],
      appTitle: '应用场景',
      apps: ['薯片', '坚果', '糖果', '冷冻食品', '肉制品', '即食食品'],
      faqTitle: '常见问题',
      faq: [
        { q: '能提供多大的产能？', a: '我们的标准产线范围从每小时100到2,000公斤，取决于产品类型和产线配置。可根据您的目标产量和厂房面积设计。' },
        { q: '能为我的特定零食产品设计产线吗？', a: '可以。我们的工程团队根据您的产品配方、目标产量、质量要求和工厂布局设计定制加工线。提供3D产线布局和工艺流程图。' },
        { q: '提供安装调试吗？', a: '是的。我们提供全套安装、调试、操作培训和配方优化。我们的工程师在您的产线达到目标性能前一直驻厂。' },
        { q: '油炸机有哪些加热方式？', a: '我们提供燃气、电加热和导热油加热系统。燃气油炸机大产量最经济，电加热油炸机温控精确，适合小产线。' },
        { q: '调味系统能处理多种口味吗？', a: '可以。我们的调味滚筒支持快速换味和方便清洁。计量系统可通过PLC配方管理系统编程不同的调味比例。' },
      ],
      notSure: '不确定哪种配置？把您的产品信息发给我们。',
      btnQuote: '获取报价',
      btnRecommend: '获取推荐',
    },
    zh: {
      title: '零食食品加工線',
      kicker: '食品加工設備',
      p1: '我們設計和製造完整的零食食品加工線——從原料準備到油炸、調味、冷卻、稱重和包裝。我們的交鑰匙方案以每小時100到2,000公斤的產量提供一致的產品品質。',
      p2: '所有設備均採用SUS304/316L不鏽鋼、食品級接觸面和節能加熱系統。產線配備PLC集中控制、配方管理和遠端監控功能。',
      subTitle: '產線組成',
      machines: ['油炸機', '調味滾筒', '冷卻輸送帶', '多頭秤+VFFS', '裝箱機'],
      features: ['完整交鑰匙產線', '產量100-2,000公斤/小時', '節能燃氣/電加熱油炸機', '均勻調味覆蓋', '多頭秤整合', 'PLC集中控制', '配方管理系統', 'CE認證'],
      cta: '描述您的零食產品和目標產量——我們將規劃您的產線。',
      whoTitle: '適用客戶',
      who: [
        { title: '零食製造商', desc: '薯片、玉米片、膨化零食、擠出零食和油炸堅果的完整生產線。' },
        { title: '即食食品生產商', desc: '預製餐、冷凍主食和套餐的加工和包裝線，帶份量控制。' },
        { title: '冷凍食品公司', desc: '冷凍零食、開胃菜和方便食品的油炸、冷卻和IQF速凍線。' },
        { title: '烘焙和糖果廠', desc: '餅乾、薄脆、糖果和裹衣堅果的調味、塗層和包裝系統。' },
      ],
      appTitle: '應用場景',
      apps: ['薯片', '堅果', '糖果', '冷凍食品', '肉製品', '即食食品'],
      faqTitle: '常見問題',
      faq: [
        { q: '能提供多大的產能？', a: '我們的標準產線範圍從每小時100到2,000公斤，取決於產品類型和產線配置。可根據您的目標產量和廠房面積設計。' },
        { q: '能為我的特定零食產品設計產線嗎？', a: '可以。我們的工程團隊根據您的產品配方、目標產量、品質要求和工廠佈局設計客製加工線。提供3D產線佈局和工藝流程圖。' },
        { q: '提供安裝調試嗎？', a: '是的。我們提供全套安裝、調試、操作培訓和配方優化。我們的工程師在您的產線達到目標性能前一直駐廠。' },
        { q: '油炸機有哪些加熱方式？', a: '我們提供燃氣、電加熱和導熱油加熱系統。燃氣油炸機大產量最經濟，電加熱油炸機溫控精確，適合小產線。' },
        { q: '調味系統能處理多種口味嗎？', a: '可以。我們的調味滾筒支援快速換味和方便清潔。計量系統可透過PLC配方管理系統程式設計不同的調味比例。' },
      ],
      notSure: '不確定哪種配置？把您的產品資訊發給我們。',
      btnQuote: '取得報價',
      btnRecommend: '取得推薦',
    },
  }

  const t = content[lang] || content['en']
  const btnLabels: Record<string, string> = { en: 'Get a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 받기', ja: '見積もりを依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Nhận báo giá', de: 'Angebot anfordern' }

  const heroPhoto = PHOTO.machines.snackProcessingHero

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: t.title,
    description: t.p1,
    url: `${SITE_URL}/${lang}/machines/snack-processing-line`,
    image: [`${SITE_URL}${heroPhoto}`],
    brand: { '@type': 'Brand', name: 'SunGene' },
    manufacturer: { '@type': 'Organization', name: 'SunGene Co., LTD', url: SITE_URL },
    category: 'Food Processing Equipment',
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Machinery', item: `${SITE_URL}/${lang}/machinery` },
      { '@type': 'ListItem', position: 3, name: 'Snack Processing Line', item: `${SITE_URL}/${lang}/machines/snack-processing-line` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbLd} />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        desc={t.p1}
        image={{ src: heroPhoto, alt: 'Snack processing line in factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{t.p2}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {t.machines.map((m: any, i: number) => (
                  <span key={i} className="rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700 ring-1 ring-accent-200">{m}</span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-xl font-bold text-gray-950">{t.subTitle}</h2>
                <ul className="mt-6 space-y-3">
                  {t.features.map((c: any, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-sm leading-relaxed sm:text-base">{c}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <div className="rounded-2xl bg-brand-950 p-8 text-white">
                <h2 className="text-xl font-bold">{t.cta}</h2>
                <div className="mt-6">
                  <ButtonLink href={`/${lang}/contact`} size="lg">{btnLabels[lang] || btnLabels.en}</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.whoTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.who.map((w: any, i: number) => (
              <Card key={i} className="p-6">
                <h3 className="text-lg font-bold text-gray-950">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{w.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.appTitle}</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {t.apps.map((app: any, i: number) => (
              <span key={i} className="rounded-full bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-200">{app}</span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.faqTitle}</h2>
          <div className="mt-10">
            <MachineFAQ items={t.faq} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-brand-950 text-white">
        <Container className="max-w-4xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t.cta}</h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink href={`/${lang}/contact`} size="lg">{btnLabels[lang] || btnLabels.en}</ButtonLink>
            <a href={`/${lang}/recommend`} className="text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white">{t.notSure}</a>
          </div>
        </Container>
      </section>
    </>
  )
}
