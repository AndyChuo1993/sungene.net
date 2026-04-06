import { Lang, ALL_LANGS } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { MachineFAQ } from '@/components/machines/MachineFAQ'
import JsonLd from '@/components/JsonLd'
import type { Metadata } from 'next'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'
import { getResourceArticlesByMachine } from '@/lib/resourceArticles'

// ─── Metadata ────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  en: 'Powder Filling & Packaging Machines — Auger, Volumetric, Weigher-Based | SunGene',
  cn: '粉末充填包装机 — 螺旋、容积式、计重系统 | SunGene',
  zh: '粉末充填包裝機 — 螺旋、容積式、計重系統 | SunGene',
  fr: 'Machines de remplissage de poudre — Vis, Volumétrique, Peseuse | SunGene',
  es: 'Máquinas llenadoras de polvo — Tornillo, Volumétrica, Pesadora | SunGene',
  pt: 'Máquinas de enchimento de pó — Rosca, Volumétrica, Pesadora | SunGene',
  ko: '분말 충전 포장 기계 — 오거, 용적식, 계량식 시스템 | SunGene',
  ja: '粉末充填包装機 — オーガー、容積式、計量式システム | SunGene',
  ar: 'آلات تعبئة المسحوق — لولبي، حجمي، نظام الوزن | SunGene',
  th: 'เครื่องบรรจุผง — สกรู, ปริมาตร, ระบบชั่งน้ำหนัก | SunGene',
  vi: 'Máy chiết rót bột — Trục vít, Thể tích, Hệ thống cân | SunGene',
  de: 'Pulverfüll- und Verpackungsmaschinen — Schnecke, Volumetrisch, Wägesystem | SunGene',
}

const metaDescs: Record<string, string> = {
  en: 'Powder filling and packaging machines for flour, spice, coffee, detergent, chemical, and pharma powders. Auger, volumetric, and multi-head weigher setups—selected by flowability, target accuracy, and output.',
  cn: '粉末充填包装设备，适用于面粉、香料、咖啡、洗涤剂、化工与药用粉末。提供螺旋、容积、多头秤等方案，按流动性、精度与产速匹配。',
  zh: '粉末充填包裝設備，適用於麵粉、香料、咖啡、洗滌劑、化工與藥用粉末。提供螺旋、容積、多頭秤等方案，依流動性、精度與產速匹配。',
  fr: 'Machines de remplissage/emballage pour poudres (farine, épices, café, détergent, chimie, pharma). Vis, volumétrique ou peseuse multi-têtes selon la fluidité, la précision et la cadence.',
  es: 'Máquinas de llenado y empaque de polvo (harina, especias, café, detergente, química y pharma). Tornillo, volumétrica o multicabezal según fluidez, precisión y velocidad.',
  pt: 'Máquinas de enchimento e embalagem de pó (farinha, especiarias, café, detergente, química e pharma). Rosca, volumétrica ou multicabeçote conforme fluidez, precisão e produção.',
  ko: '분말 충전/포장 설비(밀가루·향신료·커피·세제·화학·제약). 오거/용적/멀티헤드 계량 구성은 분말 유동성, 목표 정밀도, 생산속도 기준으로 선택합니다.',
  ja: '粉体向け充填・包装設備（小麦粉、スパイス、コーヒー、洗剤、化学、医薬品）。オーガー／容積／マルチヘッドは粉体特性、精度、目標能力で選定します。',
  ar: 'آلات تعبئة وتغليف للمساحيق (دقيق، توابل، قهوة، منظفات، كيميائي، دوائي). خيارات لولبية أو حجمية أو متعددة الرؤوس حسب انسيابية المسحوق والدقة والسرعة المطلوبة.',
  th: 'เครื่องบรรจุ/แพ็กผงสำหรับแป้ง เครื่องเทศ กาแฟ ผงซักฟอก เคมี และยา เลือกระบบสกรู ปริมาตร หรือชั่งหลายหัวตามการไหลของผง ความแม่นยำ และกำลังการผลิต',
  vi: 'Máy chiết rót/đóng gói bột cho bột mì, gia vị, cà phê, chất tẩy rửa, hóa chất và dược phẩm. Chọn trục vít, thể tích hoặc cân nhiều đầu theo độ chảy, độ chính xác và công suất.',
  de: 'Pulverfüll- und Verpackungsmaschinen für Mehl, Gewürze, Kaffee, Waschmittel sowie Chemie/Pharma. Schnecke, volumetrisch oder Mehrkopfwaage – je nach Fließverhalten, Genauigkeit und Zielleistung.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/powder-filling-machine',
    type: 'website',
    keywords: [
      'powder filling machine', 'auger filler', 'powder packaging machine', 'flour filling machine',
      'spice packaging machine', 'coffee powder filler', 'detergent powder packaging', 'VFFS powder line',
      'multi-head weigher', 'Taiwan powder filler',
    ],
  })
}

// ─── Static content — 12 languages ─────────────────────────────────────────

interface PageContent {
  kicker: string
  heroTitle: string
  heroSubtitle: string
  // Section 2 — Who it's for
  whoTitle: string
  whoItems: { title: string; desc: string }[]
  // Section 3 — Suitable products
  productsTitle: string
  productGroups: { label: string; items: string[] }[]
  productsNote: string
  // Section 4 — Packaging & Output
  packagingTitle: string
  packagingItems: { label: string; value: string }[]
  packagingNote: string
  // Section 5 — Available configurations
  configurationsTitle: string
  configurations: { name: string; desc: string }[]
  // Section 6 — Key decision factors
  decisionsTitle: string
  decisions: { factor: string; guide: string }[]
  // Section 7 — Process integration
  integrationTitle: string
  integrationDesc: string
  integrationSteps: string[]
  integrationFooter: string
  // Section 8 — FAQ
  faqTitle: string
  faq: { q: string; a: string }[]
  // Section 9 — Related
  relatedTitle: string
  relatedLinks: { label: string; href: string }[]
  // Section 10 — CTA
  ctaTitle: string
  ctaSubtitle: string
  ctaBtn1: string
  ctaBtn2: string
}

const content: Record<string, PageContent> = {
  en: {
    kicker: 'POWDER FILLING & PACKAGING',
    heroTitle: 'Powder Filling & Packaging Machines — Auger, Volumetric, and Weigher-Based Systems',
    heroSubtitle: 'SunGene manufactures powder filling and packaging machines for flour, spice, coffee, detergent, chemical powder, and industrial powders. Configuration depends on your product\'s flowability, fill weight, and target output.',

    whoTitle: 'Who It\'s For',
    whoItems: [
      { title: 'Food Manufacturers', desc: 'Flour mills, spice producers, coffee roasters, and protein powder brands needing accurate, hygienic filling at scale.' },
      { title: 'Chemical & Industrial', desc: 'Detergent powder, cement additives, and agricultural chemicals — with dust-proof and enclosed designs for safety.' },
      { title: 'Pharmaceutical & Nutraceutical', desc: 'Applications where GMP compliance and SUS316L stainless steel contact parts are required.' },
      { title: 'Contract Packers', desc: 'Handling multiple SKUs and fill weights — machines with quick format changeover and servo-driven accuracy.' },
    ],

    productsTitle: 'Suitable Products',
    productGroups: [
      { label: 'Free-flowing powders', items: ['Flour', 'Sugar', 'Salt', 'Spice', 'Coffee', 'Protein powder', 'Milk powder'] },
      { label: 'Non-free-flowing / cohesive', items: ['Starch', 'Cocoa', 'Fine chemical powder (requires agitation or special dosing)'] },
      { label: 'Industrial powders', items: ['Detergent', 'Cement additives', 'Agrochemical powder'] },
    ],
    productsNote: 'We review your product\'s bulk density, particle size, and moisture content before recommending a filler type.',

    packagingTitle: 'Packaging & Output Options',
    packagingItems: [
      { label: 'Bag types', value: 'Pillow bag (VFFS), stand-up pouch, sachets / stick packs, flat-bottom bag, pre-made pouches' },
      { label: 'Fill weight range', value: 'From 1g sachets to 50kg bags (depends on configuration)' },
      { label: 'Output range', value: 'Typically 10–120 bags/min depending on fill weight, bag format, and filler type' },
    ],
    packagingNote: 'All stated ranges are configuration-dependent — we confirm based on your specific product and format.',

    configurationsTitle: 'Available Configurations',
    configurations: [
      { name: 'Auger Filler', desc: 'Best for free-flowing to mildly cohesive powders. High accuracy (±0.5–1%). Pairs with VFFS or pre-made pouch machines.' },
      { name: 'Volumetric Cup Filler', desc: 'Lower cost, suitable for uniform free-flowing powders. Less accurate than auger — ideal when tight tolerances are not required.' },
      { name: 'Multi-Head Weigher', desc: 'For granules and powders that need high speed and accurate weight. Best above 20 bags/min.' },
      { name: 'Combination System (Auger + VFFS)', desc: 'Complete vertical form-fill-seal line for sachets to 1kg bags.' },
      { name: 'Big Bag / Bulk Filler', desc: 'For 5–50kg industrial packaging. Gravity-based or screw-conveyed feeding.' },
      { name: 'Material & Compliance', desc: 'SUS304 standard; SUS316L available for food-grade and pharmaceutical applications. CE certified; voltage and frequency customized for your country.' },
    ],

    decisionsTitle: 'Key Decision Factors',
    decisions: [
      { factor: 'Product flowability', guide: 'Free-flowing → auger or volumetric. Cohesive → specialized auger with agitator or vibration.' },
      { factor: 'Fill weight', guide: 'Light sachets → high-speed auger + VFFS. Heavy bags → bulk filler or multi-head.' },
      { factor: 'Accuracy requirement', guide: '±0.5% → auger filler with servo drive. ±2% acceptable → volumetric.' },
      { factor: 'Output speed', guide: '< 30 bags/min → single auger. 30–80 → multi-head weigher. > 80 → high-speed systems.' },
      { factor: 'Hygiene level', guide: 'Standard → SUS304. Food/pharma → SUS316L + clean-in-place design.' },
      { factor: 'Line integration', guide: 'Single machine or full line with conveyor, metal detector, check-weigher, and case packer.' },
    ],

    integrationTitle: 'Process Integration',
    integrationDesc: 'This machine integrates into your broader production workflow at the filling stage. A typical integrated powder line may include:',
    integrationSteps: [
      'Raw material silos',
      'Pneumatic conveying',
      'De-clumper',
      'Auger filler',
      'VFFS or pre-made pouch',
      'Check-weigher',
      'Metal detector',
      'Label applicator',
      'Case packer',
      'Palletizer',
    ],
    integrationFooter: 'We design the integration level based on your available floor space, operators, and budget.',

    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'What\'s the difference between an auger filler and a multi-head weigher for powder?',
        a: 'Auger fillers use a rotating screw to dispense controlled volumes — best for consistent, fine powders. Multi-head weighers measure by weight across multiple heads — better for speed when fill weight variance is acceptable. For most flour/spice applications, auger gives better accuracy. For granule-like powders at high speed, multi-head is preferred.',
      },
      {
        q: 'Can one machine handle multiple bag sizes?',
        a: 'Yes. Most VFFS machines allow bag width and length adjustment via servo-controlled film drive. Format changes typically take 15–30 minutes. For very different formats (e.g. 10g sachet vs 1kg bag), a second machine is usually recommended.',
      },
      {
        q: 'How accurate is powder filling?',
        a: 'With a servo-driven auger filler, you can expect ±0.5–1% accuracy for most free-flowing powders. Cohesive or hygroscopic powders may require calibration and may have slightly lower consistency. We recommend sharing a product sample for accurate performance estimation.',
      },
      {
        q: 'What certifications does the machine carry?',
        a: 'CE certification for export to the EU and markets that recognize CE marking. Food-contact parts are SUS304 standard; SUS316L available on request. We can provide test reports and material certificates for customs clearance.',
      },
      {
        q: 'Do you support nitrogen flushing for powder packaging?',
        a: 'Yes. Integrated nitrogen flushing is available for applications where oxidation must be minimized — common in coffee, protein powder, and certain spice products.',
      },
      {
        q: 'What information do I need to provide to get a quote?',
        a: 'Product name and type, approximate bulk density, target fill weight, bag format and size, required output speed, country/voltage, and whether you need a standalone machine or full line. Use our recommendation form for the fastest response.',
      },
    ],

    relatedTitle: 'Related Applications & Resources',
    relatedLinks: [
      { label: 'How to Choose a Powder Filling Machine', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: 'Auger vs Volumetric Filler — Comparison', href: '/resources/auger-vs-volumetric-filler' },
      { label: 'Spice Powder Packaging Guide', href: '/resources/spice-powder-packaging-machine' },
      { label: 'Get a Machine Recommendation', href: '/recommend' },
    ],

    ctaTitle: 'Ready to find the right powder filling configuration?',
    ctaSubtitle: 'Share your product details and our engineers will recommend the right filler type, output range, and line configuration for your application.',
    ctaBtn1: 'Get a Machine Recommendation',
    ctaBtn2: 'Talk to Engineering',
  },

  cn: {
    kicker: '粉末充填与包装',
    heroTitle: '粉末充填包装机 — 螺旋式、容积式与计重系统',
    heroSubtitle: 'SunGene生产适用于面粉、香料、咖啡、洗涤剂、化工粉末和工业粉末的充填包装机。配置取决于您产品的流动性、充填重量和目标产量。',

    whoTitle: '适用客户',
    whoItems: [
      { title: '食品制造商', desc: '面粉厂、香料生产商、咖啡烘焙商和蛋白粉品牌，需要大规模精准、卫生的充填。' },
      { title: '化工与工业', desc: '洗涤剂、水泥添加剂和农用化学品——防尘全封闭设计，保障安全。' },
      { title: '制药与营养保健', desc: '需要符合GMP标准并采用SUS316L不锈钢接触部件的应用场景。' },
      { title: '代工包装商', desc: '处理多SKU和多充填重量——机器支持快速换型和伺服驱动精度控制。' },
    ],

    productsTitle: '适用产品',
    productGroups: [
      { label: '自由流动粉末', items: ['面粉', '糖', '盐', '香料', '咖啡', '蛋白粉', '奶粉'] },
      { label: '非自由流动/粘性粉末', items: ['淀粉', '可可粉', '细化工粉末（需要振动或特殊计量）'] },
      { label: '工业粉末', items: ['洗涤剂', '水泥添加剂', '农药粉末'] },
    ],
    productsNote: '我们在推荐充填机类型前，会审查您产品的堆积密度、粒径和含水量。',

    packagingTitle: '包装与产量选项',
    packagingItems: [
      { label: '袋型', value: '枕型袋（VFFS）、站立袋、小袋/条形袋、平底袋、预制袋' },
      { label: '充填重量范围', value: '从1克小袋到50公斤大袋（取决于配置）' },
      { label: '产量范围', value: '通常为10–120袋/分钟，取决于充填重量、袋型和充填机类型' },
    ],
    packagingNote: '所有所示范围均取决于具体配置——我们根据您的产品和格式进行确认。',

    configurationsTitle: '可用配置',
    configurations: [
      { name: '螺旋充填机', desc: '适用于自由流动到轻微粘性粉末。高精度（±0.5–1%）。可与VFFS或预制袋机配合使用。' },
      { name: '容积杯充填机', desc: '成本较低，适合均匀流动的粉末。精度低于螺旋式——适用于公差要求不严格的场合。' },
      { name: '多头秤', desc: '适用于需要高速和精确重量的颗粒和粉末。最适合每分钟20袋以上的场景。' },
      { name: '组合系统（螺旋+VFFS）', desc: '完整的立式成型-充填-封口生产线，适用于小袋到1公斤袋。' },
      { name: '吨袋/散装充填机', desc: '适用于5–50公斤工业包装。重力式或螺旋输送进料。' },
      { name: '材质与认证', desc: '标准为SUS304；食品级和制药应用可选SUS316L。CE认证；电压和频率可根据您所在国家定制。' },
    ],

    decisionsTitle: '关键决策因素',
    decisions: [
      { factor: '产品流动性', guide: '自由流动 → 螺旋式或容积式。粘性 → 带搅拌或振动的特殊螺旋充填机。' },
      { factor: '充填重量', guide: '轻量小袋 → 高速螺旋+VFFS。重型大袋 → 散装充填机或多头秤。' },
      { factor: '精度要求', guide: '±0.5% → 伺服驱动螺旋充填机。±2%可接受 → 容积式。' },
      { factor: '产量速度', guide: '< 30袋/分钟 → 单螺旋。30–80 → 多头秤。> 80 → 高速系统。' },
      { factor: '卫生等级', guide: '标准 → SUS304。食品/制药 → SUS316L+就地清洗设计。' },
      { factor: '产线整合', guide: '单机或配备输送机、金属探测器、检重秤和装箱机的完整产线。' },
    ],

    integrationTitle: '工艺整合',
    integrationDesc: '该设备在充填环节整合到您更广泛的生产流程中。典型的粉末整合产线可能包括：',
    integrationSteps: ['原料筒仓', '气力输送', '散团机', '螺旋充填机', 'VFFS或预制袋', '检重秤', '金属探测器', '贴标机', '装箱机', '码垛机'],
    integrationFooter: '我们根据您的可用场地、操作人员和预算来设计整合层级。',

    faqTitle: '常见问题',
    faq: [
      {
        q: '螺旋充填机和多头秤在粉末充填中有什么区别？',
        a: '螺旋充填机通过旋转螺旋定量分配——最适合均匀细腻的粉末。多头秤通过多个秤头按重量计量——适合对速度要求高而允许一定重量偏差的场合。对于大多数面粉/香料应用，螺旋精度更高。对于颗粒状粉末高速生产，多头秤更佳。',
      },
      {
        q: '一台机器能处理多种袋型吗？',
        a: '可以。大多数VFFS机通过伺服控制薄膜驱动支持袋宽和袋长调节。换型通常需要15–30分钟。对于差异很大的格式（如10克小袋与1公斤袋），通常建议使用第二台机器。',
      },
      {
        q: '粉末充填的精度有多高？',
        a: '使用伺服驱动螺旋充填机，大多数自由流动粉末可达到±0.5–1%的精度。粘性或吸湿性粉末可能需要校准，一致性可能略低。建议提供产品样品进行准确的性能评估。',
      },
      {
        q: '机器具有哪些认证？',
        a: 'CE认证，适用于欧盟及认可CE标志的市场出口。食品接触部件标准为SUS304；SUS316L可按需选用。我们可提供测试报告和材质证书，用于清关。',
      },
      {
        q: '支持粉末包装的充氮冲洗吗？',
        a: '支持。集成充氮冲洗可用于需要最大限度减少氧化的场合——常见于咖啡、蛋白粉和某些香料产品。',
      },
      {
        q: '获取报价需要提供哪些信息？',
        a: '产品名称和类型、大约堆积密度、目标充填重量、袋型和尺寸、所需产量速度、国家/电压，以及是否需要单机或完整产线。使用我们的推荐表单可获得最快响应。',
      },
    ],

    relatedTitle: '相关应用与资源',
    relatedLinks: [
      { label: '如何选择粉末充填机', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: '螺旋充填机与容积式充填机对比', href: '/resources/auger-vs-volumetric-filler' },
      { label: '香料粉末包装指南', href: '/resources/spice-powder-packaging-machine' },
      { label: '获取机器推荐', href: '/recommend' },
    ],

    ctaTitle: '准备好找到合适的粉末充填配置了吗？',
    ctaSubtitle: '分享您的产品详情，我们的工程师将为您的应用推荐合适的充填机类型、产量范围和产线配置。',
    ctaBtn1: '获取机器推荐',
    ctaBtn2: '联系工程团队',
  },

  zh: {
    kicker: '粉末充填與包裝',
    heroTitle: '粉末充填包裝機 — 螺旋式、容積式與計重系統',
    heroSubtitle: 'SunGene生產適用於麵粉、香料、咖啡、洗滌劑、化工粉末和工業粉末的充填包裝機。配置取決於您產品的流動性、充填重量和目標產量。',

    whoTitle: '適用客戶',
    whoItems: [
      { title: '食品製造商', desc: '麵粉廠、香料生產商、咖啡烘焙商和蛋白粉品牌，需要大規模精準、衛生的充填。' },
      { title: '化工與工業', desc: '洗滌劑、水泥添加劑和農用化學品——防塵全封閉設計，保障安全。' },
      { title: '製藥與營養保健', desc: '需要符合GMP標準並採用SUS316L不鏽鋼接觸部件的應用場景。' },
      { title: '代工包裝商', desc: '處理多SKU和多充填重量——機器支援快速換型和伺服驅動精度控制。' },
    ],

    productsTitle: '適用產品',
    productGroups: [
      { label: '自由流動粉末', items: ['麵粉', '糖', '鹽', '香料', '咖啡', '蛋白粉', '奶粉'] },
      { label: '非自由流動/黏性粉末', items: ['澱粉', '可可粉', '細化工粉末（需要振動或特殊計量）'] },
      { label: '工業粉末', items: ['洗滌劑', '水泥添加劑', '農藥粉末'] },
    ],
    productsNote: '我們在推薦充填機類型前，會審查您產品的堆積密度、粒徑和含水量。',

    packagingTitle: '包裝與產量選項',
    packagingItems: [
      { label: '袋型', value: '枕型袋（VFFS）、站立袋、小袋/條形袋、平底袋、預製袋' },
      { label: '充填重量範圍', value: '從1克小袋到50公斤大袋（取決於配置）' },
      { label: '產量範圍', value: '通常為10–120袋/分鐘，取決於充填重量、袋型和充填機類型' },
    ],
    packagingNote: '所有所示範圍均取決於具體配置——我們根據您的產品和格式進行確認。',

    configurationsTitle: '可用配置',
    configurations: [
      { name: '螺旋充填機', desc: '適用於自由流動到輕微黏性粉末。高精度（±0.5–1%）。可與VFFS或預製袋機配合使用。' },
      { name: '容積杯充填機', desc: '成本較低，適合均勻流動的粉末。精度低於螺旋式——適用於公差要求不嚴格的場合。' },
      { name: '多頭秤', desc: '適用於需要高速和精確重量的顆粒和粉末。最適合每分鐘20袋以上的場景。' },
      { name: '組合系統（螺旋+VFFS）', desc: '完整的立式成型-充填-封口生產線，適用於小袋到1公斤袋。' },
      { name: '噸袋/散裝充填機', desc: '適用於5–50公斤工業包裝。重力式或螺旋輸送進料。' },
      { name: '材質與認證', desc: '標準為SUS304；食品級和製藥應用可選SUS316L。CE認證；電壓和頻率可根據您所在國家客製。' },
    ],

    decisionsTitle: '關鍵決策因素',
    decisions: [
      { factor: '產品流動性', guide: '自由流動 → 螺旋式或容積式。黏性 → 帶攪拌或振動的特殊螺旋充填機。' },
      { factor: '充填重量', guide: '輕量小袋 → 高速螺旋+VFFS。重型大袋 → 散裝充填機或多頭秤。' },
      { factor: '精度要求', guide: '±0.5% → 伺服驅動螺旋充填機。±2%可接受 → 容積式。' },
      { factor: '產量速度', guide: '< 30袋/分鐘 → 單螺旋。30–80 → 多頭秤。> 80 → 高速系統。' },
      { factor: '衛生等級', guide: '標準 → SUS304。食品/製藥 → SUS316L+就地清洗設計。' },
      { factor: '產線整合', guide: '單機或配備輸送機、金屬探測器、檢重秤和裝箱機的完整產線。' },
    ],

    integrationTitle: '工藝整合',
    integrationDesc: '該設備在充填環節整合到您更廣泛的生產流程中。典型的粉末整合產線可能包括：',
    integrationSteps: ['原料筒倉', '氣力輸送', '散團機', '螺旋充填機', 'VFFS或預製袋', '檢重秤', '金屬探測器', '貼標機', '裝箱機', '碼垛機'],
    integrationFooter: '我們根據您的可用場地、操作人員和預算來設計整合層級。',

    faqTitle: '常見問題',
    faq: [
      {
        q: '螺旋充填機和多頭秤在粉末充填中有什麼區別？',
        a: '螺旋充填機通過旋轉螺旋定量分配——最適合均勻細膩的粉末。多頭秤通過多個秤頭按重量計量——適合對速度要求高而允許一定重量偏差的場合。對於大多數麵粉/香料應用，螺旋精度更高。對於顆粒狀粉末高速生產，多頭秤更佳。',
      },
      {
        q: '一台機器能處理多種袋型嗎？',
        a: '可以。大多數VFFS機通過伺服控制薄膜驅動支援袋寬和袋長調節。換型通常需要15–30分鐘。對於差異很大的格式（如10克小袋與1公斤袋），通常建議使用第二台機器。',
      },
      {
        q: '粉末充填的精度有多高？',
        a: '使用伺服驅動螺旋充填機，大多數自由流動粉末可達到±0.5–1%的精度。黏性或吸濕性粉末可能需要校準，一致性可能略低。建議提供產品樣品進行準確的性能評估。',
      },
      {
        q: '機器具有哪些認證？',
        a: 'CE認證，適用於歐盟及認可CE標誌的市場出口。食品接觸部件標準為SUS304；SUS316L可按需選用。我們可提供測試報告和材質證書，用於清關。',
      },
      {
        q: '支援粉末包裝的充氮沖洗嗎？',
        a: '支援。整合充氮沖洗可用於需要最大限度減少氧化的場合——常見於咖啡、蛋白粉和某些香料產品。',
      },
      {
        q: '取得報價需要提供哪些資訊？',
        a: '產品名稱和類型、大約堆積密度、目標充填重量、袋型和尺寸、所需產量速度、國家/電壓，以及是否需要單機或完整產線。使用我們的推薦表單可獲得最快回應。',
      },
    ],

    relatedTitle: '相關應用與資源',
    relatedLinks: [
      { label: '如何選擇粉末充填機', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: '螺旋充填機與容積式充填機比較', href: '/resources/auger-vs-volumetric-filler' },
      { label: '香料粉末包裝指南', href: '/resources/spice-powder-packaging-machine' },
      { label: '取得機器推薦', href: '/recommend' },
    ],

    ctaTitle: '準備好找到合適的粉末充填配置了嗎？',
    ctaSubtitle: '分享您的產品詳情，我們的工程師將為您的應用推薦合適的充填機類型、產量範圍和產線配置。',
    ctaBtn1: '取得機器推薦',
    ctaBtn2: '聯絡工程團隊',
  },

  fr: {
    kicker: 'REMPLISSAGE & EMBALLAGE DE POUDRE',
    heroTitle: 'Machines de remplissage et d\'emballage de poudre — Systèmes à vis, volumétriques et peseuses',
    heroSubtitle: 'SunGene fabrique des machines de remplissage et d\'emballage de poudres pour la farine, les épices, le café, le détergent, les poudres chimiques et industrielles. La configuration dépend de la fluidité de votre produit, du poids de remplissage et de la cadence cible.',

    whoTitle: 'Pour qui ?',
    whoItems: [
      { title: 'Fabricants alimentaires', desc: 'Meuneries, producteurs d\'épices, torréfacteurs et marques de protéines en poudre nécessitant un remplissage précis et hygiénique à grande échelle.' },
      { title: 'Chimie & Industrie', desc: 'Poudre de détergent, additifs pour ciment et produits agrochimiques — avec des conceptions anti-poussière et fermées pour la sécurité.' },
      { title: 'Pharmaceutique & Nutraceutique', desc: 'Applications nécessitant la conformité GMP et des pièces de contact en acier inoxydable SUS316L.' },
      { title: 'Contractants d\'emballage', desc: 'Gestion de plusieurs SKU et poids de remplissage — machines avec changement de format rapide et précision par servomoteur.' },
    ],

    productsTitle: 'Produits adaptés',
    productGroups: [
      { label: 'Poudres à écoulement libre', items: ['Farine', 'Sucre', 'Sel', 'Épices', 'Café', 'Protéine en poudre', 'Lait en poudre'] },
      { label: 'Non-fluidifiées / cohésives', items: ['Amidon', 'Cacao', 'Poudre chimique fine (nécessite agitation ou dosage spécial)'] },
      { label: 'Poudres industrielles', items: ['Détergent', 'Additifs pour ciment', 'Poudre agrochimique'] },
    ],
    productsNote: 'Nous examinons la densité apparente, la granulométrie et la teneur en humidité de votre produit avant de recommander un type de remplisseur.',

    packagingTitle: 'Options d\'emballage et de cadence',
    packagingItems: [
      { label: 'Types de sachets', value: 'Sachet coussin (VFFS), sachet debout, sachets / bâtonnets, sachet fond plat, sachets préformés' },
      { label: 'Plage de poids de remplissage', value: 'De sachets de 1g à sacs de 50kg (selon configuration)' },
      { label: 'Plage de cadence', value: 'Typiquement 10–120 sachets/min selon le poids, le format et le type de remplisseur' },
    ],
    packagingNote: 'Toutes les plages indiquées dépendent de la configuration — nous confirmons selon votre produit et format spécifiques.',

    configurationsTitle: 'Configurations disponibles',
    configurations: [
      { name: 'Remplisseur à vis sans fin', desc: 'Idéal pour les poudres à écoulement libre à légèrement cohésives. Haute précision (±0.5–1%). Compatible avec VFFS ou machines à sachets préformés.' },
      { name: 'Remplisseur volumétrique à godets', desc: 'Coût réduit, adapté aux poudres à écoulement libre homogènes. Moins précis que la vis — idéal quand les tolérances strictes ne sont pas requises.' },
      { name: 'Peseuse multipostes', desc: 'Pour granulés et poudres nécessitant haute vitesse et pesée précise. Recommandé au-delà de 20 sachets/min.' },
      { name: 'Système combiné (vis + VFFS)', desc: 'Ligne complète de formage-remplissage-scellage vertical pour sachets jusqu\'à sacs de 1kg.' },
      { name: 'Remplisseur grand sac / vrac', desc: 'Pour emballages industriels de 5–50kg. Alimentation par gravité ou vis de convoyage.' },
      { name: 'Matériaux & Conformité', desc: 'SUS304 standard ; SUS316L disponible pour applications alimentaires et pharmaceutiques. Certifié CE ; tension et fréquence adaptées à votre pays.' },
    ],

    decisionsTitle: 'Facteurs de décision clés',
    decisions: [
      { factor: 'Fluidité du produit', guide: 'Écoulement libre → vis ou volumétrique. Cohésif → vis spéciale avec agitateur ou vibration.' },
      { factor: 'Poids de remplissage', guide: 'Sachets légers → vis haute vitesse + VFFS. Sacs lourds → remplisseur vrac ou peseuse multipostes.' },
      { factor: 'Exigence de précision', guide: '±0.5% → remplisseur à vis avec servomoteur. ±2% acceptable → volumétrique.' },
      { factor: 'Vitesse de cadence', guide: '< 30 sachets/min → vis simple. 30–80 → peseuse multipostes. > 80 → systèmes haute vitesse.' },
      { factor: 'Niveau d\'hygiène', guide: 'Standard → SUS304. Alimentaire/pharma → SUS316L + conception nettoyage en place.' },
      { factor: 'Intégration ligne', guide: 'Machine seule ou ligne complète avec convoyeur, détecteur de métaux, contrôleur de poids et emballeuse.' },
    ],

    integrationTitle: 'Intégration process',
    integrationDesc: 'Cette machine s\'intègre dans votre flux de production global au stade du remplissage. Une ligne poudre intégrée typique peut inclure :',
    integrationSteps: ['Silos matières premières', 'Transport pneumatique', 'Désagglomérateur', 'Remplisseur à vis', 'VFFS ou sachet préformé', 'Contrôleur de poids', 'Détecteur de métaux', 'Applicateur d\'étiquettes', 'Emballeuse', 'Palettiseur'],
    integrationFooter: 'Nous concevons le niveau d\'intégration en fonction de votre espace disponible, de vos opérateurs et de votre budget.',

    faqTitle: 'Questions fréquemment posées',
    faq: [
      {
        q: 'Quelle est la différence entre un remplisseur à vis et une peseuse multipostes pour les poudres ?',
        a: 'Les remplisseurs à vis utilisent une vis rotative pour distribuer des volumes contrôlés — idéal pour les poudres fines et homogènes. Les peseuses multipostes mesurent par poids sur plusieurs têtes — mieux adaptées à la vitesse lorsque la variance de poids est acceptable. Pour la plupart des applications farine/épices, la vis offre une meilleure précision. Pour les poudres granuleuses à haute vitesse, la peseuse multipostes est préférée.',
      },
      {
        q: 'Une machine peut-elle gérer plusieurs tailles de sachets ?',
        a: 'Oui. La plupart des machines VFFS permettent le réglage de la largeur et de la longueur des sachets via un entraînement film à servocommande. Les changements de format prennent généralement 15–30 minutes. Pour des formats très différents (ex. sachet 10g vs sac 1kg), une deuxième machine est généralement recommandée.',
      },
      {
        q: 'Quelle est la précision du remplissage de poudre ?',
        a: 'Avec un remplisseur à vis à servomoteur, vous pouvez attendre une précision de ±0.5–1% pour la plupart des poudres à écoulement libre. Les poudres cohésives ou hygroscopiques peuvent nécessiter un étalonnage et présenter une cohérence légèrement inférieure. Nous recommandons de fournir un échantillon de produit pour une estimation précise des performances.',
      },
      {
        q: 'Quelles certifications la machine possède-t-elle ?',
        a: 'Certification CE pour l\'exportation vers l\'UE et les marchés reconnaissant le marquage CE. Les pièces en contact avec les aliments sont en SUS304 standard ; SUS316L disponible sur demande. Nous pouvons fournir des rapports de test et des certificats de matériaux pour le dédouanement.',
      },
      {
        q: 'Prenez-vous en charge le rinçage à l\'azote pour l\'emballage de poudres ?',
        a: 'Oui. Le rinçage à l\'azote intégré est disponible pour les applications où l\'oxydation doit être minimisée — courant pour le café, la protéine en poudre et certains produits épicés.',
      },
      {
        q: 'Quelles informations dois-je fournir pour obtenir un devis ?',
        a: 'Nom et type de produit, densité apparente approximative, poids de remplissage cible, format et taille du sachet, vitesse de cadence requise, pays/tension, et si vous avez besoin d\'une machine seule ou d\'une ligne complète. Utilisez notre formulaire de recommandation pour la réponse la plus rapide.',
      },
    ],

    relatedTitle: 'Applications et ressources associées',
    relatedLinks: [
      { label: 'Comment choisir une machine de remplissage de poudre', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: 'Comparaison : vis sans fin vs doseur volumétrique', href: '/resources/auger-vs-volumetric-filler' },
      { label: 'Guide emballage poudre épices', href: '/resources/spice-powder-packaging-machine' },
      { label: 'Obtenir une recommandation de machine', href: '/recommend' },
    ],

    ctaTitle: 'Prêt à trouver la bonne configuration de remplissage de poudre ?',
    ctaSubtitle: 'Partagez les détails de votre produit et nos ingénieurs recommanderont le bon type de remplisseur, la plage de débit et la configuration de ligne pour votre application.',
    ctaBtn1: 'Obtenir une recommandation de machine',
    ctaBtn2: 'Parler à un ingénieur',
  },

  es: {
    kicker: 'LLENADO & ENVASADO DE POLVO',
    heroTitle: 'Máquinas llenadoras y envasadoras de polvo — Sistemas de tornillo, volumétrico y pesadora',
    heroSubtitle: 'SunGene fabrica máquinas llenadoras y envasadoras de polvo para harina, especias, café, detergente, polvo químico y polvos industriales. La configuración depende de la fluidez del producto, el peso de llenado y la producción objetivo.',

    whoTitle: '¿Para quién es?',
    whoItems: [
      { title: 'Fabricantes de alimentos', desc: 'Molinos harineros, productores de especias, tostadores de café y marcas de proteína en polvo que necesitan llenado preciso e higiénico a escala.' },
      { title: 'Química e Industrial', desc: 'Polvo de detergente, aditivos para cemento y agroquímicos — con diseños antipolvo y cerrados para mayor seguridad.' },
      { title: 'Farmacéutica & Nutracéutica', desc: 'Aplicaciones donde se requiere cumplimiento GMP y piezas de contacto en acero inoxidable SUS316L.' },
      { title: 'Envasadores por contrato', desc: 'Manejo de múltiples SKU y pesos de llenado — máquinas con cambio de formato rápido y precisión por servomotor.' },
    ],

    productsTitle: 'Productos adecuados',
    productGroups: [
      { label: 'Polvos de flujo libre', items: ['Harina', 'Azúcar', 'Sal', 'Especias', 'Café', 'Proteína en polvo', 'Leche en polvo'] },
      { label: 'No fluidos / cohesivos', items: ['Almidón', 'Cacao', 'Polvo químico fino (requiere agitación o dosificación especial)'] },
      { label: 'Polvos industriales', items: ['Detergente', 'Aditivos para cemento', 'Polvo agroquímico'] },
    ],
    productsNote: 'Revisamos la densidad aparente, el tamaño de partícula y el contenido de humedad de su producto antes de recomendar un tipo de llenadora.',

    packagingTitle: 'Opciones de envasado y producción',
    packagingItems: [
      { label: 'Tipos de bolsa', value: 'Bolsa almohada (VFFS), bolsa de pie, sobres / sticks, bolsa fondo plano, bolsas preformadas' },
      { label: 'Rango de peso de llenado', value: 'Desde sobres de 1g hasta bolsas de 50kg (según configuración)' },
      { label: 'Rango de producción', value: 'Típicamente 10–120 bolsas/min según peso de llenado, formato y tipo de llenadora' },
    ],
    packagingNote: 'Todos los rangos indicados dependen de la configuración — los confirmamos según su producto y formato específicos.',

    configurationsTitle: 'Configuraciones disponibles',
    configurations: [
      { name: 'Llenadora de tornillo sin fin', desc: 'Ideal para polvos de flujo libre a ligeramente cohesivos. Alta precisión (±0.5–1%). Compatible con VFFS o máquinas de bolsas preformadas.' },
      { name: 'Llenadora volumétrica de vasos', desc: 'Menor coste, adecuada para polvos de flujo libre uniformes. Menos precisa que el tornillo — ideal cuando no se requieren tolerancias estrictas.' },
      { name: 'Pesadora multicabezal', desc: 'Para gránulos y polvos que necesitan alta velocidad y pesaje preciso. Recomendada por encima de 20 bolsas/min.' },
      { name: 'Sistema combinado (tornillo + VFFS)', desc: 'Línea completa de formado-llenado-sellado vertical para sobres hasta bolsas de 1kg.' },
      { name: 'Llenadora de sacos grandes / granel', desc: 'Para envasado industrial de 5–50kg. Alimentación por gravedad o tornillo transportador.' },
      { name: 'Materiales & Certificación', desc: 'SUS304 estándar; SUS316L disponible para aplicaciones alimentarias y farmacéuticas. Certificado CE; voltaje y frecuencia personalizados para su país.' },
    ],

    decisionsTitle: 'Factores clave de decisión',
    decisions: [
      { factor: 'Fluidez del producto', guide: 'Flujo libre → tornillo o volumétrico. Cohesivo → tornillo especializado con agitador o vibración.' },
      { factor: 'Peso de llenado', guide: 'Sobres ligeros → tornillo de alta velocidad + VFFS. Bolsas pesadas → llenadora a granel o pesadora multicabezal.' },
      { factor: 'Requisito de precisión', guide: '±0.5% → llenadora de tornillo con servomotor. ±2% aceptable → volumétrico.' },
      { factor: 'Velocidad de producción', guide: '< 30 bolsas/min → tornillo simple. 30–80 → pesadora multicabezal. > 80 → sistemas de alta velocidad.' },
      { factor: 'Nivel de higiene', guide: 'Estándar → SUS304. Alimentario/farmacéutico → SUS316L + diseño de limpieza in situ.' },
      { factor: 'Integración de línea', guide: 'Máquina individual o línea completa con transportador, detector de metales, comprobador de peso y encajadora.' },
    ],

    integrationTitle: 'Integración del proceso',
    integrationDesc: 'Esta máquina se integra en su flujo de producción general en la etapa de llenado. Una línea de polvo integrada típica puede incluir:',
    integrationSteps: ['Silos de materia prima', 'Transporte neumático', 'Desaglomerador', 'Llenadora de tornillo', 'VFFS o bolsa preformada', 'Comprobador de peso', 'Detector de metales', 'Aplicador de etiquetas', 'Encajadora', 'Paletizador'],
    integrationFooter: 'Diseñamos el nivel de integración según el espacio disponible, los operadores y el presupuesto.',

    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Cuál es la diferencia entre una llenadora de tornillo y una pesadora multicabezal para polvo?',
        a: 'Las llenadoras de tornillo utilizan un tornillo giratorio para dispensar volúmenes controlados — ideal para polvos finos y homogéneos. Las pesadoras multicabezal miden por peso en múltiples cabezales — mejor para velocidad cuando se acepta cierta variación de peso. Para la mayoría de las aplicaciones de harina/especias, el tornillo ofrece mejor precisión. Para polvos granulares a alta velocidad, se prefiere la pesadora multicabezal.',
      },
      {
        q: '¿Puede una máquina manejar múltiples tamaños de bolsa?',
        a: 'Sí. La mayoría de las máquinas VFFS permiten ajustar el ancho y la longitud de la bolsa mediante accionamiento de film controlado por servo. Los cambios de formato suelen tomar 15–30 minutos. Para formatos muy diferentes (ej. sobre de 10g vs bolsa de 1kg), generalmente se recomienda una segunda máquina.',
      },
      {
        q: '¿Qué precisión tiene el llenado de polvo?',
        a: 'Con una llenadora de tornillo accionada por servo, puede esperar una precisión de ±0.5–1% para la mayoría de los polvos de flujo libre. Los polvos cohesivos o higroscópicos pueden requerir calibración y pueden tener una consistencia ligeramente inferior. Recomendamos compartir una muestra del producto para una estimación precisa del rendimiento.',
      },
      {
        q: '¿Qué certificaciones tiene la máquina?',
        a: 'Certificación CE para exportación a la UE y mercados que reconocen el marcado CE. Las piezas en contacto con alimentos son SUS304 estándar; SUS316L disponible bajo pedido. Podemos proporcionar informes de prueba y certificados de material para el despacho aduanero.',
      },
      {
        q: '¿Admiten el purgado de nitrógeno para el envasado de polvo?',
        a: 'Sí. El purgado de nitrógeno integrado está disponible para aplicaciones donde la oxidación debe minimizarse — habitual en café, proteína en polvo y ciertos productos de especias.',
      },
      {
        q: '¿Qué información necesito proporcionar para obtener un presupuesto?',
        a: 'Nombre y tipo de producto, densidad aparente aproximada, peso de llenado objetivo, formato y tamaño de bolsa, velocidad de producción requerida, país/voltaje, y si necesita una máquina independiente o línea completa. Utilice nuestro formulario de recomendación para obtener la respuesta más rápida.',
      },
    ],

    relatedTitle: 'Aplicaciones y recursos relacionados',
    relatedLinks: [
      { label: 'Cómo elegir una máquina llenadora de polvo', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: 'Comparación: tornillo sin fin vs dosificador volumétrico', href: '/resources/auger-vs-volumetric-filler' },
      { label: 'Guía de envasado de polvo de especias', href: '/resources/spice-powder-packaging-machine' },
      { label: 'Obtener una recomendación de máquina', href: '/recommend' },
    ],

    ctaTitle: '¿Listo para encontrar la configuración de llenado de polvo correcta?',
    ctaSubtitle: 'Comparta los detalles de su producto y nuestros ingenieros recomendarán el tipo de llenadora, rango de salida y configuración de línea correctos para su aplicación.',
    ctaBtn1: 'Obtener una recomendación de máquina',
    ctaBtn2: 'Hablar con ingeniería',
  },

  pt: {
    kicker: 'ENCHIMENTO & EMBALAGEM DE PÓ',
    heroTitle: 'Máquinas de enchimento e embalagem de pó — Sistemas de rosca, volumétrico e pesadora',
    heroSubtitle: 'SunGene fabrica máquinas de enchimento e embalagem de pó para farinha, especiarias, café, detergente, pó químico e pós industriais. A configuração depende da fluidez do seu produto, peso de enchimento e produção alvo.',

    whoTitle: 'Para quem é?',
    whoItems: [
      { title: 'Fabricantes alimentares', desc: 'Moinhos de farinha, produtores de especiarias, torrefadores de café e marcas de proteína em pó que necessitam de enchimento preciso e higiénico à escala.' },
      { title: 'Química & Industrial', desc: 'Pó de detergente, aditivos para cimento e produtos agroquímicos — com designs à prova de poeira e fechados para segurança.' },
      { title: 'Farmacêutica & Nutracêutica', desc: 'Aplicações onde é necessária conformidade GMP e peças de contacto em aço inoxidável SUS316L.' },
      { title: 'Embaladores por contrato', desc: 'Gestão de múltiplos SKU e pesos de enchimento — máquinas com mudança rápida de formato e precisão por servomotor.' },
    ],

    productsTitle: 'Produtos adequados',
    productGroups: [
      { label: 'Pós de fluxo livre', items: ['Farinha', 'Açúcar', 'Sal', 'Especiarias', 'Café', 'Proteína em pó', 'Leite em pó'] },
      { label: 'Não fluidos / coesivos', items: ['Amido', 'Cacau', 'Pó químico fino (requer agitação ou doseamento especial)'] },
      { label: 'Pós industriais', items: ['Detergente', 'Aditivos para cimento', 'Pó agroquímico'] },
    ],
    productsNote: 'Analisamos a densidade aparente, o tamanho de partícula e o teor de humidade do seu produto antes de recomendar um tipo de enchedor.',

    packagingTitle: 'Opções de embalagem e produção',
    packagingItems: [
      { label: 'Tipos de saco', value: 'Saco almofada (VFFS), saco de pé, saquetas / sticks, saco fundo plano, sacos pré-formados' },
      { label: 'Gama de peso de enchimento', value: 'Desde saquetas de 1g a sacos de 50kg (dependendo da configuração)' },
      { label: 'Gama de produção', value: 'Tipicamente 10–120 sacos/min dependendo do peso de enchimento, formato e tipo de enchedor' },
    ],
    packagingNote: 'Todos os intervalos indicados dependem da configuração — confirmamos com base no seu produto e formato específicos.',

    configurationsTitle: 'Configurações disponíveis',
    configurations: [
      { name: 'Enchedor de rosca sem fim', desc: 'Melhor para pós de fluxo livre a levemente coesivos. Alta precisão (±0.5–1%). Compatível com VFFS ou máquinas de sacos pré-formados.' },
      { name: 'Enchedor volumétrico de copos', desc: 'Custo mais baixo, adequado para pós de fluxo livre uniformes. Menos preciso que a rosca — ideal quando tolerâncias apertadas não são necessárias.' },
      { name: 'Pesadora multicabeçote', desc: 'Para grânulos e pós que necessitam de alta velocidade e pesagem precisa. Recomendada acima de 20 sacos/min.' },
      { name: 'Sistema combinado (rosca + VFFS)', desc: 'Linha completa de formação-enchimento-selagem vertical para saquetas até sacos de 1kg.' },
      { name: 'Enchedor de big bag / granel', desc: 'Para embalagem industrial de 5–50kg. Alimentação por gravidade ou rosca transportadora.' },
      { name: 'Materiais & Conformidade', desc: 'SUS304 padrão; SUS316L disponível para aplicações alimentares e farmacêuticas. Certificado CE; tensão e frequência personalizadas para o seu país.' },
    ],

    decisionsTitle: 'Fatores de decisão chave',
    decisions: [
      { factor: 'Fluidez do produto', guide: 'Fluxo livre → rosca ou volumétrico. Coesivo → rosca especializada com agitador ou vibração.' },
      { factor: 'Peso de enchimento', guide: 'Saquetas leves → rosca de alta velocidade + VFFS. Sacos pesados → enchedor a granel ou pesadora multicabeçote.' },
      { factor: 'Requisito de precisão', guide: '±0.5% → enchedor de rosca com servomotor. ±2% aceitável → volumétrico.' },
      { factor: 'Velocidade de produção', guide: '< 30 sacos/min → rosca simples. 30–80 → pesadora multicabeçote. > 80 → sistemas de alta velocidade.' },
      { factor: 'Nível de higiene', guide: 'Padrão → SUS304. Alimentar/farmacêutico → SUS316L + design de limpeza no local.' },
      { factor: 'Integração de linha', guide: 'Máquina individual ou linha completa com transportador, detetor de metais, verificador de peso e embaladora.' },
    ],

    integrationTitle: 'Integração do processo',
    integrationDesc: 'Esta máquina integra-se no seu fluxo de produção geral na fase de enchimento. Uma linha de pó integrada típica pode incluir:',
    integrationSteps: ['Silos de matéria-prima', 'Transporte pneumático', 'Desaglomerador', 'Enchedor de rosca', 'VFFS ou saco pré-formado', 'Verificador de peso', 'Detetor de metais', 'Aplicador de etiquetas', 'Embaladora', 'Paletizador'],
    integrationFooter: 'Concebemos o nível de integração com base no espaço disponível, operadores e orçamento.',

    faqTitle: 'Perguntas frequentes',
    faq: [
      {
        q: 'Qual é a diferença entre um enchedor de rosca e uma pesadora multicabeçote para pó?',
        a: 'Os enchedores de rosca usam um parafuso rotativo para dispensar volumes controlados — ideal para pós finos e homogéneos. As pesadoras multicabeçote medem por peso em múltiplas cabeças — melhor para velocidade quando a variação de peso é aceitável. Para a maioria das aplicações de farinha/especiarias, a rosca oferece melhor precisão. Para pós granulares a alta velocidade, a pesadora multicabeçote é preferida.',
      },
      {
        q: 'Uma máquina pode lidar com múltiplos tamanhos de saco?',
        a: 'Sim. A maioria das máquinas VFFS permite ajustar a largura e o comprimento do saco através de acionamento de filme controlado por servo. As mudanças de formato demoram tipicamente 15–30 minutos. Para formatos muito diferentes (ex. saqueta de 10g vs saco de 1kg), normalmente recomenda-se uma segunda máquina.',
      },
      {
        q: 'Qual é a precisão do enchimento de pó?',
        a: 'Com um enchedor de rosca accionado por servo, pode esperar uma precisão de ±0.5–1% para a maioria dos pós de fluxo livre. Pós coesivos ou higroscópicos podem requerer calibração e podem ter consistência ligeiramente inferior. Recomendamos partilhar uma amostra do produto para estimativa precisa do desempenho.',
      },
      {
        q: 'Que certificações tem a máquina?',
        a: 'Certificação CE para exportação para a UE e mercados que reconhecem a marcação CE. As peças em contacto com alimentos são SUS304 padrão; SUS316L disponível mediante pedido. Podemos fornecer relatórios de teste e certificados de material para desalfandegamento.',
      },
      {
        q: 'Suportam a insuflação de azoto para embalagem de pó?',
        a: 'Sim. A insuflação de azoto integrada está disponível para aplicações onde a oxidação deve ser minimizada — comum em café, proteína em pó e certos produtos de especiarias.',
      },
      {
        q: 'Que informações preciso de fornecer para obter um orçamento?',
        a: 'Nome e tipo de produto, densidade aparente aproximada, peso de enchimento alvo, formato e tamanho do saco, velocidade de produção necessária, país/tensão, e se necessita de uma máquina autónoma ou linha completa. Utilize o nosso formulário de recomendação para a resposta mais rápida.',
      },
    ],

    relatedTitle: 'Aplicações e recursos relacionados',
    relatedLinks: [
      { label: 'Como escolher uma máquina de enchimento de pó', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: 'Comparação: rosca sem fim vs dosador volumétrico', href: '/resources/auger-vs-volumetric-filler' },
      { label: 'Guia de embalagem de pó de especiarias', href: '/resources/spice-powder-packaging-machine' },
      { label: 'Obter uma recomendação de máquina', href: '/recommend' },
    ],

    ctaTitle: 'Pronto para encontrar a configuração de enchimento de pó certa?',
    ctaSubtitle: 'Partilhe os detalhes do seu produto e os nossos engenheiros recomendarão o tipo de enchedor, gama de saída e configuração de linha corretos para a sua aplicação.',
    ctaBtn1: 'Obter uma recomendação de máquina',
    ctaBtn2: 'Falar com a engenharia',
  },

  ko: {
    kicker: '분말 충전 및 포장',
    heroTitle: '분말 충전 포장 기계 — 오거, 용적식, 계량식 시스템',
    heroSubtitle: 'SunGene은 밀가루, 향신료, 커피, 세제, 화학 분말 및 산업용 분말을 위한 충전 포장 기계를 제조합니다. 구성은 제품의 유동성, 충전 중량 및 목표 생산량에 따라 결정됩니다.',

    whoTitle: '적용 대상',
    whoItems: [
      { title: '식품 제조업체', desc: '대규모로 정확하고 위생적인 충전이 필요한 제분소, 향신료 생산업체, 커피 로스터, 단백질 파우더 브랜드.' },
      { title: '화학 및 산업', desc: '세제 분말, 시멘트 첨가제 및 농업용 화학물질 — 안전을 위한 방진 및 밀폐 설계.' },
      { title: '제약 및 건강기능식품', desc: 'GMP 준수 및 SUS316L 스테인리스강 접촉 부품이 요구되는 응용 분야.' },
      { title: '위탁 포장업체', desc: '다양한 SKU 및 충전 중량 처리 — 빠른 포맷 전환 및 서보 구동 정밀도를 갖춘 기계.' },
    ],

    productsTitle: '적용 제품',
    productGroups: [
      { label: '자유 유동 분말', items: ['밀가루', '설탕', '소금', '향신료', '커피', '단백질 파우더', '분유'] },
      { label: '비자유 유동 / 점착성', items: ['전분', '코코아', '미세 화학 분말 (교반 또는 특수 계량 필요)'] },
      { label: '산업용 분말', items: ['세제', '시멘트 첨가제', '농약 분말'] },
    ],
    productsNote: '충전기 유형을 추천하기 전에 제품의 벌크 밀도, 입자 크기 및 수분 함량을 검토합니다.',

    packagingTitle: '포장 및 생산량 옵션',
    packagingItems: [
      { label: '백 유형', value: '베개형 백 (VFFS), 스탠드업 파우치, 소포장 / 스틱팩, 평평한 바닥 백, 사전 제작 파우치' },
      { label: '충전 중량 범위', value: '1g 소포장부터 50kg 대형 백까지 (구성에 따라 다름)' },
      { label: '생산량 범위', value: '충전 중량, 백 포맷 및 충전기 유형에 따라 일반적으로 10–120백/분' },
    ],
    packagingNote: '모든 명시된 범위는 구성에 따라 다릅니다 — 특정 제품 및 포맷을 기준으로 확인해 드립니다.',

    configurationsTitle: '사용 가능한 구성',
    configurations: [
      { name: '오거 충전기', desc: '자유 유동 분말부터 약간 점착성 분말에 최적. 높은 정밀도 (±0.5–1%). VFFS 또는 사전 제작 파우치 기계와 연동.' },
      { name: '용적 컵 충전기', desc: '비용이 낮고, 균일한 자유 유동 분말에 적합. 오거보다 정밀도가 낮음 — 엄격한 허용 오차가 필요하지 않을 때 이상적.' },
      { name: '멀티헤드 계량기', desc: '고속 및 정확한 중량이 필요한 과립 및 분말용. 20백/분 이상에서 최적.' },
      { name: '조합 시스템 (오거 + VFFS)', desc: '소포장부터 1kg 백까지의 완전한 수직 성형-충전-밀봉 라인.' },
      { name: '대형 백 / 벌크 충전기', desc: '5–50kg 산업용 포장. 중력식 또는 스크류 컨베이어 공급.' },
      { name: '재질 및 인증', desc: 'SUS304 표준; 식품 등급 및 제약 응용에는 SUS316L 사용 가능. CE 인증; 귀국의 전압 및 주파수에 맞춤 제작.' },
    ],

    decisionsTitle: '주요 결정 요인',
    decisions: [
      { factor: '제품 유동성', guide: '자유 유동 → 오거 또는 용적식. 점착성 → 교반기 또는 진동이 있는 특수 오거.' },
      { factor: '충전 중량', guide: '가벼운 소포장 → 고속 오거 + VFFS. 무거운 백 → 벌크 충전기 또는 멀티헤드.' },
      { factor: '정밀도 요건', guide: '±0.5% → 서보 구동 오거 충전기. ±2% 허용 → 용적식.' },
      { factor: '생산 속도', guide: '< 30백/분 → 단일 오거. 30–80 → 멀티헤드 계량기. > 80 → 고속 시스템.' },
      { factor: '위생 수준', guide: '표준 → SUS304. 식품/제약 → SUS316L + 인플레이스 세척 설계.' },
      { factor: '라인 통합', guide: '단일 기계 또는 컨베이어, 금속 탐지기, 중량 검사기, 케이스 포장기를 갖춘 완전 라인.' },
    ],

    integrationTitle: '공정 통합',
    integrationDesc: '이 기계는 충전 단계에서 더 넓은 생산 워크플로우에 통합됩니다. 일반적인 통합 분말 라인에는 다음이 포함될 수 있습니다:',
    integrationSteps: ['원자재 사일로', '공기압 운반', '덩어리 제거기', '오거 충전기', 'VFFS 또는 사전 제작 파우치', '중량 검사기', '금속 탐지기', '라벨 부착기', '케이스 포장기', '팔레타이저'],
    integrationFooter: '사용 가능한 바닥 공간, 운영자 및 예산을 기반으로 통합 수준을 설계합니다.',

    faqTitle: '자주 묻는 질문',
    faq: [
      {
        q: '분말용 오거 충전기와 멀티헤드 계량기의 차이점은 무엇인가요?',
        a: '오거 충전기는 회전 스크류를 사용하여 제어된 용량을 분배합니다 — 일관되고 미세한 분말에 최적. 멀티헤드 계량기는 여러 헤드에서 중량으로 측정합니다 — 충전 중량 편차가 허용될 때 속도에 더 적합. 대부분의 밀가루/향신료 응용에는 오거가 더 나은 정밀도를 제공합니다. 고속의 과립형 분말에는 멀티헤드가 선호됩니다.',
      },
      {
        q: '한 기계로 여러 백 크기를 처리할 수 있나요?',
        a: '네. 대부분의 VFFS 기계는 서보 제어 필름 드라이브를 통해 백 너비 및 길이 조정이 가능합니다. 포맷 변경은 일반적으로 15–30분이 소요됩니다. 매우 다른 포맷(예: 10g 소포장 대 1kg 백)의 경우 두 번째 기계를 권장합니다.',
      },
      {
        q: '분말 충전의 정확도는 어느 정도인가요?',
        a: '서보 구동 오거 충전기를 사용하면 대부분의 자유 유동 분말에 대해 ±0.5–1%의 정확도를 기대할 수 있습니다. 점착성 또는 흡습성 분말은 교정이 필요할 수 있으며 일관성이 약간 낮을 수 있습니다. 정확한 성능 추정을 위해 제품 샘플 제공을 권장합니다.',
      },
      {
        q: '기계에는 어떤 인증이 있나요?',
        a: 'EU 및 CE 마킹을 인정하는 시장으로의 수출을 위한 CE 인증. 식품 접촉 부품은 SUS304 표준; SUS316L은 요청 시 사용 가능. 통관을 위한 시험 성적서 및 재질 증명서를 제공할 수 있습니다.',
      },
      {
        q: '분말 포장에 질소 퍼징을 지원하나요?',
        a: '네. 통합 질소 퍼징은 산화를 최소화해야 하는 응용에 사용 가능합니다 — 커피, 단백질 파우더 및 특정 향신료 제품에서 일반적입니다.',
      },
      {
        q: '견적을 받으려면 어떤 정보를 제공해야 하나요?',
        a: '제품 이름 및 유형, 대략적인 벌크 밀도, 목표 충전 중량, 백 포맷 및 크기, 필요한 생산 속도, 국가/전압, 독립형 기계 또는 완전 라인 필요 여부. 가장 빠른 응답을 위해 추천 양식을 사용하세요.',
      },
    ],

    relatedTitle: '관련 응용 및 리소스',
    relatedLinks: [
      { label: '분말 충전기 선택 가이드', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: '오거 vs 용적식 충전기 비교', href: '/resources/auger-vs-volumetric-filler' },
      { label: '향신료 분말 포장 가이드', href: '/resources/spice-powder-packaging-machine' },
      { label: '기계 추천 받기', href: '/recommend' },
    ],

    ctaTitle: '적합한 분말 충전 구성을 찾을 준비가 되셨나요?',
    ctaSubtitle: '제품 세부 정보를 공유하시면 당사 엔지니어가 귀하의 응용 프로그램에 맞는 올바른 충전기 유형, 출력 범위 및 라인 구성을 추천해 드립니다.',
    ctaBtn1: '기계 추천 받기',
    ctaBtn2: '엔지니어링 팀 문의',
  },

  ja: {
    kicker: '粉末充填・包装',
    heroTitle: '粉末充填包装機 — オーガー、容積式、計量式システム',
    heroSubtitle: 'SunGeneは小麦粉、スパイス、コーヒー、洗剤、化学粉末、産業用粉末向けの充填包装機を製造しています。構成はお客様の製品の流動性、充填重量、目標生産量によって決定されます。',

    whoTitle: '対象ユーザー',
    whoItems: [
      { title: '食品メーカー', desc: '製粉所、スパイスメーカー、コーヒー焙煎業者、プロテインパウダーブランドなど、大規模で正確かつ衛生的な充填を必要とする企業。' },
      { title: '化学・産業', desc: '洗剤粉末、セメント添加剤、農薬 — 安全性のための防塵・密閉設計。' },
      { title: '製薬・健康食品', desc: 'GMP準拠とSUS316Lステンレス鋼接触部品が求められるアプリケーション。' },
      { title: '受託包装業者', desc: '複数のSKUと充填重量に対応 — 素早いフォーマット切り替えとサーボ駆動精度を備えた機械。' },
    ],

    productsTitle: '対応製品',
    productGroups: [
      { label: '自由流動性粉末', items: ['小麦粉', '砂糖', '塩', 'スパイス', 'コーヒー', 'プロテインパウダー', '粉ミルク'] },
      { label: '非自由流動性/凝集性', items: ['デンプン', 'ココア', '微粉化学品（撹拌または特殊計量が必要）'] },
      { label: '産業用粉末', items: ['洗剤', 'セメント添加剤', '農薬粉末'] },
    ],
    productsNote: '充填機タイプを推奨する前に、製品の嵩密度、粒子径、水分含有量を確認します。',

    packagingTitle: '包装・生産量オプション',
    packagingItems: [
      { label: '袋の種類', value: 'ピロー袋（VFFS）、スタンドアップパウチ、小袋 / スティックパック、フラットボトム袋、プレメイドパウチ' },
      { label: '充填重量範囲', value: '1gの小袋から50kgの大袋まで（構成により異なる）' },
      { label: '生産量範囲', value: '充填重量、袋フォーマット、充填機タイプにより、通常10–120袋/分' },
    ],
    packagingNote: '記載された全ての範囲は構成依存です — お客様の製品とフォーマットに基づいて確認します。',

    configurationsTitle: '利用可能な構成',
    configurations: [
      { name: 'オーガーフィラー', desc: '自由流動性から軽度凝集性粉末に最適。高精度（±0.5–1%）。VFFSまたはプレメイドパウチ機と組み合わせ可能。' },
      { name: '容積カップフィラー', desc: 'コストが低く、均一な自由流動性粉末に適合。オーガーより精度が低い — 厳しい公差が不要な場合に最適。' },
      { name: 'マルチヘッド計量機', desc: '高速と正確な重量が必要な顆粒および粉末用。20袋/分以上で最適。' },
      { name: '組合せシステム（オーガー + VFFS）', desc: '小袋から1kg袋までの完全な縦型製袋充填シール（VFFS）ライン。' },
      { name: 'フレコン / バルクフィラー', desc: '5–50kgの産業用包装。重力式またはスクリューコンベヤ供給。' },
      { name: '材質・コンプライアンス', desc: 'SUS304標準；食品グレードおよび製薬用途にはSUS316Lが利用可能。CE認証；電圧・周波数はお客様の国に合わせてカスタマイズ。' },
    ],

    decisionsTitle: '主要な決定要因',
    decisions: [
      { factor: '製品の流動性', guide: '自由流動性 → オーガーまたは容積式。凝集性 → 撹拌機または振動付き特殊オーガー。' },
      { factor: '充填重量', guide: '軽量小袋 → 高速オーガー + VFFS。重量袋 → バルクフィラーまたはマルチヘッド。' },
      { factor: '精度要件', guide: '±0.5% → サーボドライブ付きオーガーフィラー。±2%許容 → 容積式。' },
      { factor: '生産速度', guide: '< 30袋/分 → シングルオーガー。30–80 → マルチヘッド計量機。> 80 → 高速システム。' },
      { factor: '衛生レベル', guide: '標準 → SUS304。食品/製薬 → SUS316L + CIP（定置洗浄）設計。' },
      { factor: 'ライン統合', guide: '単体機械、またはコンベヤ、金属探知機、重量チェッカー、ケースパッカーを備えた完全ライン。' },
    ],

    integrationTitle: 'プロセス統合',
    integrationDesc: 'この機械は充填ステージで生産ワークフロー全体に統合されます。典型的な統合粉末ラインには以下が含まれる場合があります：',
    integrationSteps: ['原料サイロ', '空気輸送', 'デランパー', 'オーガーフィラー', 'VFFSまたはプレメイドパウチ', '重量チェッカー', '金属探知機', 'ラベル貼付機', 'ケースパッカー', 'パレタイザー'],
    integrationFooter: '利用可能なフロアスペース、オペレーター、予算に基づいて統合レベルを設計します。',

    faqTitle: 'よくある質問',
    faq: [
      {
        q: '粉末用オーガーフィラーとマルチヘッド計量機の違いは何ですか？',
        a: 'オーガーフィラーは回転スクリューを使用して制御された容量を供給します — 均一で微細な粉末に最適。マルチヘッド計量機は複数のヘッドで重量を計測します — 充填重量のばらつきが許容される場合の速度に優れています。ほとんどの小麦粉/スパイス用途では、オーガーがより高い精度を発揮します。高速での顆粒状粉末にはマルチヘッドが好まれます。',
      },
      {
        q: '一台の機械で複数の袋サイズに対応できますか？',
        a: 'はい。ほとんどのVFFS機はサーボ制御フィルムドライブによって袋の幅と長さの調整が可能です。フォーマット変更は通常15–30分かかります。大きく異なるフォーマット（例：10gの小袋と1kg袋）の場合、2台目の機械が推奨されます。',
      },
      {
        q: '粉末充填の精度はどれくらいですか？',
        a: 'サーボ駆動オーガーフィラーを使用すると、ほとんどの自由流動性粉末で±0.5–1%の精度が期待できます。凝集性または吸湿性粉末はキャリブレーションが必要な場合があり、一貫性がやや低下することがあります。正確なパフォーマンス評価のために製品サンプルの提供を推奨します。',
      },
      {
        q: '機械にはどのような認証がありますか？',
        a: 'EUおよびCEマーキングを認定する市場への輸出のためのCE認証。食品接触部品はSUS304標準；SUS316Lはご要望に応じて対応可能。通関のための試験報告書と材料証明書を提供できます。',
      },
      {
        q: '粉末包装の窒素フラッシュに対応していますか？',
        a: 'はい。酸化を最小限に抑える必要があるアプリケーション向けに統合窒素フラッシュが利用可能です — コーヒー、プロテインパウダー、特定のスパイス製品でよく使用されます。',
      },
      {
        q: '見積もりを取得するために必要な情報は何ですか？',
        a: '製品名と種類、おおよその嵩密度、目標充填重量、袋フォーマットとサイズ、必要な生産速度、国/電圧、および単体機械か完全ラインが必要かどうか。最も迅速な回答のために推奨フォームをご利用ください。',
      },
    ],

    relatedTitle: '関連アプリケーションとリソース',
    relatedLinks: [
      { label: '粉末充填機の選び方', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: 'オーガーフィラーと容積式フィラーの比較', href: '/resources/auger-vs-volumetric-filler' },
      { label: 'スパイス粉末包装ガイド', href: '/resources/spice-powder-packaging-machine' },
      { label: '機械レコメンデーションを取得', href: '/recommend' },
    ],

    ctaTitle: '適切な粉末充填構成を見つける準備はできていますか？',
    ctaSubtitle: '製品の詳細を共有していただければ、当社のエンジニアがお客様のアプリケーションに適した充填機タイプ、出力範囲、ラインConfiguration をご提案します。',
    ctaBtn1: '機械レコメンデーションを取得',
    ctaBtn2: 'エンジニアリングに相談',
  },

  ar: {
    kicker: 'تعبئة وتغليف المسحوق',
    heroTitle: 'آلات تعبئة وتغليف المسحوق — أنظمة لولبية وحجمية وميزان',
    heroSubtitle: 'تصنع SunGene آلات تعبئة وتغليف المسحوق للدقيق والتوابل والقهوة والمنظفات والمساحيق الكيميائية والصناعية. يعتمد التكوين على قابلية تدفق منتجك ووزن التعبئة والإنتاج المستهدف.',

    whoTitle: 'لمن هذا المنتج؟',
    whoItems: [
      { title: 'مصنّعو الأغذية', desc: 'مطاحن الدقيق ومنتجو التوابل ومحامص القهوة وعلامات البروتين التجارية التي تحتاج إلى تعبئة دقيقة وصحية على نطاق واسع.' },
      { title: 'الكيمياء والصناعة', desc: 'مسحوق المنظفات وإضافات الأسمنت والمواد الكيميائية الزراعية — بتصميمات مقاومة للغبار ومغلقة للسلامة.' },
      { title: 'الصيدلة والمكملات الغذائية', desc: 'التطبيقات التي تتطلب الامتثال لمعايير GMP وأجزاء التلامس المصنوعة من الفولاذ المقاوم للصدأ SUS316L.' },
      { title: 'شركات التعبئة التعاقدية', desc: 'التعامل مع عدة وحدات SKU وأوزان تعبئة مختلفة — آلات بتغيير سريع للتنسيق ودقة بمحرك سيرفو.' },
    ],

    productsTitle: 'المنتجات المناسبة',
    productGroups: [
      { label: 'مساحيق حرة التدفق', items: ['الدقيق', 'السكر', 'الملح', 'التوابل', 'القهوة', 'بروتين المسحوق', 'الحليب المجفف'] },
      { label: 'غير حرة التدفق / متماسكة', items: ['النشا', 'الكاكاو', 'مسحوق كيميائي دقيق (يتطلب تحريكاً أو جرعات خاصة)'] },
      { label: 'مساحيق صناعية', items: ['المنظفات', 'إضافات الأسمنت', 'مسحوق المبيدات الزراعية'] },
    ],
    productsNote: 'نراجع الكثافة الظاهرية وحجم الجسيمات ومحتوى الرطوبة في منتجك قبل التوصية بنوع آلة التعبئة.',

    packagingTitle: 'خيارات التغليف والإنتاج',
    packagingItems: [
      { label: 'أنواع الأكياس', value: 'كيس وسادة (VFFS)، كيس قائم، أكياس صغيرة / عصي، كيس قاع مسطح، أكياس جاهزة' },
      { label: 'نطاق وزن التعبئة', value: 'من أكياس 1 غرام إلى أكياس 50 كيلوغرام (حسب التكوين)' },
      { label: 'نطاق الإنتاج', value: 'عادةً 10–120 كيس/دقيقة حسب وزن التعبئة وتنسيق الكيس ونوع آلة التعبئة' },
    ],
    packagingNote: 'جميع النطاقات المذكورة تعتمد على التكوين — نؤكدها بناءً على منتجك وتنسيقك المحدد.',

    configurationsTitle: 'التكوينات المتاحة',
    configurations: [
      { name: 'آلة التعبئة اللولبية', desc: 'الأفضل للمساحيق الحرة التدفق إلى المتماسكة قليلاً. دقة عالية (±0.5–1%). تتناسب مع VFFS أو آلات الأكياس الجاهزة.' },
      { name: 'آلة التعبئة الحجمية بالأكواب', desc: 'تكلفة أقل، مناسبة للمساحيق الحرة التدفق المتجانسة. أقل دقة من اللولبية — مثالية عند عدم الحاجة إلى تفاوتات صارمة.' },
      { name: 'ميزان متعدد الرؤوس', desc: 'للحبيبات والمساحيق التي تحتاج إلى سرعة عالية ووزن دقيق. الأفضل فوق 20 كيس/دقيقة.' },
      { name: 'نظام مدمج (لولبي + VFFS)', desc: 'خط كامل للتشكيل والتعبئة والختم العمودي للأكياس الصغيرة حتى أكياس 1 كيلوغرام.' },
      { name: 'آلة تعبئة الكيس الكبير / السائب', desc: 'للتغليف الصناعي من 5–50 كيلوغرام. التغذية بالجاذبية أو ناقل اللولب.' },
      { name: 'المواد والامتثال', desc: 'SUS304 قياسي؛ SUS316L متاح للتطبيقات الغذائية والصيدلانية. معتمد CE؛ الجهد والتردد مخصصان لبلدك.' },
    ],

    decisionsTitle: 'عوامل القرار الرئيسية',
    decisions: [
      { factor: 'قابلية تدفق المنتج', guide: 'حر التدفق → لولبي أو حجمي. متماسك → لولبي متخصص مع محرك أو اهتزاز.' },
      { factor: 'وزن التعبئة', guide: 'أكياس خفيفة → لولبي عالي السرعة + VFFS. أكياس ثقيلة → آلة سائبة أو ميزان متعدد الرؤوس.' },
      { factor: 'متطلب الدقة', guide: '±0.5% → آلة لولبية بمحرك سيرفو. ±2% مقبول → حجمي.' },
      { factor: 'سرعة الإنتاج', guide: '< 30 كيس/دقيقة → لولبي منفرد. 30–80 → ميزان متعدد الرؤوس. > 80 → أنظمة عالية السرعة.' },
      { factor: 'مستوى النظافة', guide: 'قياسي → SUS304. غذاء/صيدلة → SUS316L + تصميم التنظيف في المكان.' },
      { factor: 'تكامل الخط', guide: 'آلة منفردة أو خط كامل مع ناقل ومكشاف معادن وفاحص وزن وآلة تعبئة الصناديق.' },
    ],

    integrationTitle: 'تكامل العملية',
    integrationDesc: 'تتكامل هذه الآلة في سير عمل الإنتاج الأشمل في مرحلة التعبئة. قد يشمل خط المسحوق المتكامل النموذجي:',
    integrationSteps: ['صوامع المواد الخام', 'النقل الهوائي', 'مفكك التكتلات', 'آلة التعبئة اللولبية', 'VFFS أو كيس جاهز', 'فاحص الوزن', 'مكشاف المعادن', 'آلة وضع الملصقات', 'آلة تعبئة الصناديق', 'آلة التفريغ على المنصات'],
    integrationFooter: 'نصمم مستوى التكامل بناءً على المساحة المتاحة والمشغلين والميزانية.',

    faqTitle: 'الأسئلة الشائعة',
    faq: [
      {
        q: 'ما الفرق بين آلة التعبئة اللولبية وميزان متعدد الرؤوس للمسحوق؟',
        a: 'تستخدم آلات التعبئة اللولبية مسماراً دوارًا لتوزيع أحجام محكومة — الأفضل للمساحيق الدقيقة المتجانسة. تقيس الموازين متعددة الرؤوس بالوزن عبر رؤوس متعددة — أفضل للسرعة عند قبول تباين وزن التعبئة. لمعظم تطبيقات الدقيق والتوابل، يوفر اللولبي دقة أفضل. للمساحيق الحبيبية بسرعة عالية، يُفضل الميزان متعدد الرؤوس.',
      },
      {
        q: 'هل يمكن لآلة واحدة التعامل مع أحجام أكياس متعددة؟',
        a: 'نعم. تتيح معظم آلات VFFS ضبط عرض وطول الكيس عبر محرك الفيلم المتحكم به بالسيرفو. تستغرق تغييرات التنسيق عادةً 15–30 دقيقة. للتنسيقات المختلفة جداً (مثل كيس 10 غرام مقابل كيس 1 كيلوغرام)، يُوصى عادةً بآلة ثانية.',
      },
      {
        q: 'ما مدى دقة تعبئة المسحوق؟',
        a: 'مع آلة لولبية بمحرك سيرفو، يمكن توقع دقة ±0.5–1% لمعظم المساحيق الحرة التدفق. قد تتطلب المساحيق المتماسكة أو الهيجروسكوبية معايرة وقد تكون أقل اتساقاً. نوصي بمشاركة عينة المنتج للحصول على تقدير أداء دقيق.',
      },
      {
        q: 'ما الشهادات التي تحملها الآلة؟',
        a: 'شهادة CE للتصدير إلى الاتحاد الأوروبي والأسواق التي تعترف بعلامة CE. أجزاء التلامس الغذائي هي SUS304 قياسي؛ SUS316L متاح عند الطلب. يمكننا تقديم تقارير الاختبار وشهادات المواد للتخليص الجمركي.',
      },
      {
        q: 'هل تدعمون تدفق النيتروجين لتغليف المسحوق؟',
        a: 'نعم. تدفق النيتروجين المتكامل متاح للتطبيقات التي يجب تقليل الأكسدة فيها — شائع في القهوة وبروتين المسحوق وبعض منتجات التوابل.',
      },
      {
        q: 'ما المعلومات التي أحتاج إلى تقديمها للحصول على عرض سعر؟',
        a: 'اسم المنتج ونوعه، الكثافة الظاهرية التقريبية، وزن التعبئة المستهدف، تنسيق الكيس وحجمه، سرعة الإنتاج المطلوبة، البلد/الجهد، وما إذا كنت تحتاج إلى آلة مستقلة أو خط كامل. استخدم نموذج التوصية للحصول على أسرع رد.',
      },
    ],

    relatedTitle: 'التطبيقات والموارد ذات الصلة',
    relatedLinks: [
      { label: 'كيفية اختيار آلة تعبئة المسحوق', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: 'مقارنة: الملء اللولبي مقابل الحجمي', href: '/resources/auger-vs-volumetric-filler' },
      { label: 'دليل تعبئة مسحوق التوابل', href: '/resources/spice-powder-packaging-machine' },
      { label: 'الحصول على توصية آلة', href: '/recommend' },
    ],

    ctaTitle: 'هل أنت مستعد للعثور على تكوين تعبئة المسحوق المناسب؟',
    ctaSubtitle: 'شارك تفاصيل منتجك وسيوصي مهندسونا بنوع آلة التعبئة المناسبة ونطاق الإنتاج وتكوين الخط لتطبيقك.',
    ctaBtn1: 'الحصول على توصية آلة',
    ctaBtn2: 'التحدث مع فريق الهندسة',
  },

  th: {
    kicker: 'การบรรจุและบรรจุภัณฑ์ผง',
    heroTitle: 'เครื่องบรรจุและบรรจุภัณฑ์ผง — ระบบออเกอร์ เชิงปริมาตร และเครื่องชั่ง',
    heroSubtitle: 'SunGene ผลิตเครื่องบรรจุและบรรจุภัณฑ์ผงสำหรับแป้ง เครื่องเทศ กาแฟ ผงซักฟอก ผงเคมี และผงอุตสาหกรรม การตั้งค่าขึ้นอยู่กับความสามารถในการไหลของผลิตภัณฑ์ น้ำหนักบรรจุ และปริมาณการผลิตเป้าหมาย',

    whoTitle: 'เหมาะสำหรับใคร',
    whoItems: [
      { title: 'ผู้ผลิตอาหาร', desc: 'โรงสีแป้ง ผู้ผลิตเครื่องเทศ ผู้คั่วกาแฟ และแบรนด์โปรตีนผง ที่ต้องการการบรรจุที่แม่นยำและถูกสุขลักษณะในระดับขนาดใหญ่' },
      { title: 'เคมีและอุตสาหกรรม', desc: 'ผงซักฟอก สารเติมแต่งซีเมนต์ และสารเคมีการเกษตร — มีการออกแบบกันฝุ่นและแบบปิดเพื่อความปลอดภัย' },
      { title: 'เภสัชกรรมและโภชนาการ', desc: 'การใช้งานที่ต้องการการปฏิบัติตาม GMP และชิ้นส่วนสัมผัสสแตนเลส SUS316L' },
      { title: 'ผู้รับจ้างบรรจุ', desc: 'รองรับ SKU หลายรายการและน้ำหนักบรรจุหลายขนาด — เครื่องที่เปลี่ยนรูปแบบได้รวดเร็วและมีความแม่นยำขับเคลื่อนด้วยเซอร์โว' },
    ],

    productsTitle: 'ผลิตภัณฑ์ที่เหมาะสม',
    productGroups: [
      { label: 'ผงที่ไหลได้อิสระ', items: ['แป้งสาลี', 'น้ำตาล', 'เกลือ', 'เครื่องเทศ', 'กาแฟ', 'โปรตีนผง', 'นมผง'] },
      { label: 'ไม่ไหลอิสระ / เกาะตัว', items: ['แป้งมัน', 'โกโก้', 'ผงเคมีละเอียด (ต้องการการกวนหรือการจ่ายพิเศษ)'] },
      { label: 'ผงอุตสาหกรรม', items: ['ผงซักฟอก', 'สารเติมแต่งซีเมนต์', 'ผงยาเคมีเกษตร'] },
    ],
    productsNote: 'เราตรวจสอบความหนาแน่นของกอง ขนาดอนุภาค และปริมาณความชื้นของผลิตภัณฑ์ก่อนแนะนำประเภทเครื่องบรรจุ',

    packagingTitle: 'ตัวเลือกบรรจุภัณฑ์และกำลังการผลิต',
    packagingItems: [
      { label: 'ประเภทถุง', value: 'ถุงหมอน (VFFS), ถุงตั้ง, ซอง / สติ๊กแพ็ค, ถุงก้นแบน, ถุงสำเร็จรูป' },
      { label: 'ช่วงน้ำหนักบรรจุ', value: 'ตั้งแต่ซอง 1g ถึงถุง 50kg (ขึ้นอยู่กับการตั้งค่า)' },
      { label: 'ช่วงกำลังการผลิต', value: 'โดยทั่วไป 10–120 ถุง/นาที ขึ้นอยู่กับน้ำหนักบรรจุ รูปแบบถุง และประเภทเครื่องบรรจุ' },
    ],
    packagingNote: 'ช่วงทั้งหมดที่ระบุขึ้นอยู่กับการตั้งค่า — เราจะยืนยันตามผลิตภัณฑ์และรูปแบบเฉพาะของคุณ',

    configurationsTitle: 'การตั้งค่าที่มีให้',
    configurations: [
      { name: 'เครื่องบรรจุออเกอร์', desc: 'ดีที่สุดสำหรับผงที่ไหลได้อิสระถึงเกาะตัวเล็กน้อย ความแม่นยำสูง (±0.5–1%) เข้าคู่กับ VFFS หรือเครื่องถุงสำเร็จรูป' },
      { name: 'เครื่องบรรจุเชิงปริมาตรแบบถ้วย', desc: 'ต้นทุนต่ำกว่า เหมาะสำหรับผงที่ไหลได้อิสระสม่ำเสมอ ความแม่นยำน้อยกว่าออเกอร์ — เหมาะเมื่อไม่ต้องการความคลาดเคลื่อนที่เข้มงวด' },
      { name: 'เครื่องชั่งหลายหัว', desc: 'สำหรับเม็ดและผงที่ต้องการความเร็วสูงและน้ำหนักที่แม่นยำ ดีที่สุดที่มากกว่า 20 ถุง/นาที' },
      { name: 'ระบบรวม (ออเกอร์ + VFFS)', desc: 'สายการขึ้นรูป-บรรจุ-ปิดผนึกแนวตั้งครบวงจร สำหรับซองถึงถุง 1kg' },
      { name: 'เครื่องบรรจุถุงใหญ่ / แบบบัลค์', desc: 'สำหรับบรรจุภัณฑ์อุตสาหกรรม 5–50kg การป้อนแบบแรงโน้มถ่วงหรือสกรูลำเลียง' },
      { name: 'วัสดุและการรับรอง', desc: 'SUS304 มาตรฐาน; SUS316L สำหรับการใช้งานด้านอาหารและยา รับรอง CE; แรงดันและความถี่ปรับแต่งตามประเทศของคุณ' },
    ],

    decisionsTitle: 'ปัจจัยการตัดสินใจหลัก',
    decisions: [
      { factor: 'ความสามารถในการไหลของผลิตภัณฑ์', guide: 'ไหลได้อิสระ → ออเกอร์หรือเชิงปริมาตร เกาะตัว → ออเกอร์พิเศษพร้อมตัวกวนหรือการสั่น' },
      { factor: 'น้ำหนักบรรจุ', guide: 'ซองเบา → ออเกอร์ความเร็วสูง + VFFS ถุงหนัก → เครื่องบรรจุบัลค์หรือเครื่องชั่งหลายหัว' },
      { factor: 'ข้อกำหนดความแม่นยำ', guide: '±0.5% → เครื่องบรรจุออเกอร์พร้อมเซอร์โว ±2% ยอมรับได้ → เชิงปริมาตร' },
      { factor: 'ความเร็วในการผลิต', guide: '< 30 ถุง/นาที → ออเกอร์เดี่ยว 30–80 → เครื่องชั่งหลายหัว > 80 → ระบบความเร็วสูง' },
      { factor: 'ระดับสุขอนามัย', guide: 'มาตรฐาน → SUS304 อาหาร/ยา → SUS316L + การออกแบบทำความสะอาดในที่' },
      { factor: 'การรวมสายการผลิต', guide: 'เครื่องเดี่ยวหรือสายการผลิตครบวงจรพร้อมสายพาน เครื่องตรวจหาโลหะ เครื่องตรวจสอบน้ำหนัก และเครื่องบรรจุลัง' },
    ],

    integrationTitle: 'การรวมกระบวนการ',
    integrationDesc: 'เครื่องนี้รวมเข้ากับขั้นตอนการผลิตโดยรวมของคุณในขั้นตอนการบรรจุ สายการผลิตผงแบบบูรณาการทั่วไปอาจประกอบด้วย:',
    integrationSteps: ['ไซโลวัตถุดิบ', 'การลำเลียงด้วยลม', 'เครื่องแยกก้อน', 'เครื่องบรรจุออเกอร์', 'VFFS หรือถุงสำเร็จรูป', 'เครื่องตรวจสอบน้ำหนัก', 'เครื่องตรวจหาโลหะ', 'เครื่องติดฉลาก', 'เครื่องบรรจุลัง', 'เครื่องจัดเรียงพาเลท'],
    integrationFooter: 'เราออกแบบระดับการรวมตามพื้นที่ว่าง ผู้ปฏิบัติงาน และงบประมาณของคุณ',

    faqTitle: 'คำถามที่พบบ่อย',
    faq: [
      {
        q: 'ความแตกต่างระหว่างเครื่องบรรจุออเกอร์และเครื่องชั่งหลายหัวสำหรับผงคืออะไร?',
        a: 'เครื่องบรรจุออเกอร์ใช้สกรูหมุนเพื่อจ่ายปริมาตรที่ควบคุมได้ — ดีที่สุดสำหรับผงละเอียดที่สม่ำเสมอ เครื่องชั่งหลายหัววัดตามน้ำหนักในหลายหัว — ดีกว่าสำหรับความเร็วเมื่อยอมรับความแปรปรวนของน้ำหนักได้ สำหรับการใช้งานแป้ง/เครื่องเทศส่วนใหญ่ ออเกอร์ให้ความแม่นยำดีกว่า สำหรับผงแบบเม็ดที่ความเร็วสูง เครื่องชั่งหลายหัวเป็นที่นิยม',
      },
      {
        q: 'เครื่องหนึ่งเครื่องสามารถรองรับขนาดถุงหลายขนาดได้หรือไม่?',
        a: 'ได้ เครื่อง VFFS ส่วนใหญ่อนุญาตให้ปรับความกว้างและความยาวของถุงผ่านระบบขับฟิล์มที่ควบคุมด้วยเซอร์โว การเปลี่ยนรูปแบบมักใช้เวลา 15–30 นาที สำหรับรูปแบบที่แตกต่างกันมาก (เช่น ซอง 10g เทียบกับถุง 1kg) มักแนะนำให้ใช้เครื่องที่สอง',
      },
      {
        q: 'การบรรจุผงมีความแม่นยำมากเพียงใด?',
        a: 'ด้วยเครื่องบรรจุออเกอร์ขับเคลื่อนด้วยเซอร์โว คุณสามารถคาดหวังความแม่นยำ ±0.5–1% สำหรับผงที่ไหลได้อิสระส่วนใหญ่ ผงเกาะตัวหรือดูดความชื้นอาจต้องการการปรับเทียบและอาจมีความสม่ำเสมอต่ำกว่าเล็กน้อย เราแนะนำให้แชร์ตัวอย่างผลิตภัณฑ์เพื่อประมาณประสิทธิภาพที่แม่นยำ',
      },
      {
        q: 'เครื่องมีการรับรองอะไรบ้าง?',
        a: 'การรับรอง CE สำหรับการส่งออกไปยังสหภาพยุโรปและตลาดที่รับรองเครื่องหมาย CE ชิ้นส่วนสัมผัสอาหารเป็น SUS304 มาตรฐาน; SUS316L พร้อมให้บริการตามคำขอ เราสามารถจัดทำรายงานการทดสอบและใบรับรองวัสดุสำหรับการผ่านพิธีการศุลกากร',
      },
      {
        q: 'คุณรองรับการล้างไนโตรเจนสำหรับบรรจุภัณฑ์ผงหรือไม่?',
        a: 'ได้ การล้างไนโตรเจนแบบรวมพร้อมใช้งานสำหรับการใช้งานที่ต้องลดการเกิดออกซิเดชันให้น้อยที่สุด — พบบ่อยในกาแฟ โปรตีนผง และผลิตภัณฑ์เครื่องเทศบางชนิด',
      },
      {
        q: 'ฉันต้องให้ข้อมูลอะไรบ้างเพื่อรับใบเสนอราคา?',
        a: 'ชื่อและประเภทผลิตภัณฑ์ ความหนาแน่นของกองโดยประมาณ น้ำหนักบรรจุเป้าหมาย รูปแบบและขนาดถุง ความเร็วในการผลิตที่ต้องการ ประเทศ/แรงดัน และต้องการเครื่องเดี่ยวหรือสายการผลิตครบวงจร ใช้แบบฟอร์มแนะนำของเราเพื่อรับการตอบสนองที่รวดเร็วที่สุด',
      },
    ],

    relatedTitle: 'แอปพลิเคชันและทรัพยากรที่เกี่ยวข้อง',
    relatedLinks: [
      { label: 'วิธีเลือกเครื่องบรรจุผง', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: 'เปรียบเทียบ: ออเกอร์ vs เครื่องบรรจุเชิงปริมาตร', href: '/resources/auger-vs-volumetric-filler' },
      { label: 'คู่มือการบรรจุผงเครื่องเทศ', href: '/resources/spice-powder-packaging-machine' },
      { label: 'รับคำแนะนำเครื่องจักร', href: '/recommend' },
    ],

    ctaTitle: 'พร้อมหาการตั้งค่าการบรรจุผงที่เหมาะสมแล้วหรือยัง?',
    ctaSubtitle: 'แชร์รายละเอียดผลิตภัณฑ์ของคุณ และวิศวกรของเราจะแนะนำประเภทเครื่องบรรจุ ช่วงกำลังการผลิต และการตั้งค่าสายการผลิตที่เหมาะสมสำหรับการใช้งานของคุณ',
    ctaBtn1: 'รับคำแนะนำเครื่องจักร',
    ctaBtn2: 'ปรึกษาทีมวิศวกรรม',
  },

  vi: {
    kicker: 'CHIẾT RÓT & ĐÓNG GÓI BỘT',
    heroTitle: 'Máy chiết rót và đóng gói bột — Hệ thống vít tải, thể tích và cân',
    heroSubtitle: 'SunGene sản xuất máy chiết rót và đóng gói bột cho bột mì, gia vị, cà phê, chất tẩy rửa, bột hóa chất và bột công nghiệp. Cấu hình phụ thuộc vào khả năng chảy của sản phẩm, trọng lượng chiết rót và sản lượng mục tiêu.',

    whoTitle: 'Dành cho ai',
    whoItems: [
      { title: 'Nhà sản xuất thực phẩm', desc: 'Nhà máy xay bột, nhà sản xuất gia vị, lò rang cà phê và các thương hiệu bột protein cần chiết rót chính xác, vệ sinh ở quy mô lớn.' },
      { title: 'Hóa chất & Công nghiệp', desc: 'Bột giặt, phụ gia xi măng và hóa chất nông nghiệp — với thiết kế chống bụi và kín để đảm bảo an toàn.' },
      { title: 'Dược phẩm & Thực phẩm chức năng', desc: 'Ứng dụng yêu cầu tuân thủ GMP và các bộ phận tiếp xúc bằng thép không gỉ SUS316L.' },
      { title: 'Nhà đóng gói theo hợp đồng', desc: 'Xử lý nhiều SKU và trọng lượng chiết rót — máy có khả năng thay đổi định dạng nhanh và độ chính xác dẫn động servo.' },
    ],

    productsTitle: 'Sản phẩm phù hợp',
    productGroups: [
      { label: 'Bột chảy tự do', items: ['Bột mì', 'Đường', 'Muối', 'Gia vị', 'Cà phê', 'Bột protein', 'Sữa bột'] },
      { label: 'Không chảy tự do / kết dính', items: ['Tinh bột', 'Cacao', 'Bột hóa chất mịn (cần khuấy hoặc định lượng đặc biệt)'] },
      { label: 'Bột công nghiệp', items: ['Chất tẩy rửa', 'Phụ gia xi măng', 'Bột thuốc trừ sâu'] },
    ],
    productsNote: 'Chúng tôi xem xét mật độ khối, kích thước hạt và hàm lượng độ ẩm của sản phẩm trước khi đề xuất loại máy chiết rót.',

    packagingTitle: 'Tùy chọn đóng gói và sản lượng',
    packagingItems: [
      { label: 'Loại túi', value: 'Túi gối (VFFS), túi đứng, gói nhỏ / thanh stick, túi đáy phẳng, túi làm sẵn' },
      { label: 'Phạm vi trọng lượng chiết rót', value: 'Từ gói 1g đến túi 50kg (tùy thuộc vào cấu hình)' },
      { label: 'Phạm vi sản lượng', value: 'Thông thường 10–120 túi/phút tùy thuộc trọng lượng chiết rót, định dạng túi và loại máy chiết rót' },
    ],
    packagingNote: 'Tất cả các phạm vi đã nêu phụ thuộc vào cấu hình — chúng tôi xác nhận dựa trên sản phẩm và định dạng cụ thể của bạn.',

    configurationsTitle: 'Các cấu hình có sẵn',
    configurations: [
      { name: 'Máy chiết rót vít tải', desc: 'Tốt nhất cho bột chảy tự do đến hơi kết dính. Độ chính xác cao (±0.5–1%). Kết hợp với VFFS hoặc máy túi làm sẵn.' },
      { name: 'Máy chiết rót thể tích dạng cốc', desc: 'Chi phí thấp hơn, phù hợp cho bột chảy tự do đồng nhất. Kém chính xác hơn vít tải — lý tưởng khi không yêu cầu dung sai chặt chẽ.' },
      { name: 'Cân nhiều đầu', desc: 'Cho hạt và bột cần tốc độ cao và trọng lượng chính xác. Tốt nhất ở trên 20 túi/phút.' },
      { name: 'Hệ thống kết hợp (Vít tải + VFFS)', desc: 'Dây chuyền tạo hình-chiết rót-hàn kín dọc hoàn chỉnh cho gói nhỏ đến túi 1kg.' },
      { name: 'Máy chiết rót túi lớn / dạng rời', desc: 'Cho đóng gói công nghiệp 5–50kg. Cấp liệu bằng trọng lực hoặc băng tải vít.' },
      { name: 'Vật liệu & Tuân thủ', desc: 'SUS304 tiêu chuẩn; SUS316L có sẵn cho ứng dụng thực phẩm và dược phẩm. Chứng nhận CE; điện áp và tần số tùy chỉnh theo quốc gia của bạn.' },
    ],

    decisionsTitle: 'Các yếu tố quyết định chính',
    decisions: [
      { factor: 'Khả năng chảy của sản phẩm', guide: 'Chảy tự do → vít tải hoặc thể tích. Kết dính → vít tải chuyên dụng có bộ khuấy hoặc rung.' },
      { factor: 'Trọng lượng chiết rót', guide: 'Gói nhẹ → vít tải tốc độ cao + VFFS. Túi nặng → máy chiết rót dạng rời hoặc cân nhiều đầu.' },
      { factor: 'Yêu cầu độ chính xác', guide: '±0.5% → máy chiết rót vít tải có servo. ±2% chấp nhận được → thể tích.' },
      { factor: 'Tốc độ sản xuất', guide: '< 30 túi/phút → vít tải đơn. 30–80 → cân nhiều đầu. > 80 → hệ thống tốc độ cao.' },
      { factor: 'Mức độ vệ sinh', guide: 'Tiêu chuẩn → SUS304. Thực phẩm/dược → SUS316L + thiết kế vệ sinh tại chỗ.' },
      { factor: 'Tích hợp dây chuyền', guide: 'Máy đơn lẻ hoặc dây chuyền hoàn chỉnh với băng tải, máy dò kim loại, máy kiểm tra cân và máy đóng thùng.' },
    ],

    integrationTitle: 'Tích hợp quy trình',
    integrationDesc: 'Máy này tích hợp vào quy trình sản xuất tổng thể của bạn ở giai đoạn chiết rót. Dây chuyền bột tích hợp điển hình có thể bao gồm:',
    integrationSteps: ['Silo nguyên liệu', 'Vận chuyển khí nén', 'Máy phá vỡ cục', 'Máy chiết rót vít tải', 'VFFS hoặc túi làm sẵn', 'Máy kiểm tra cân', 'Máy dò kim loại', 'Máy dán nhãn', 'Máy đóng thùng', 'Máy xếp pallet'],
    integrationFooter: 'Chúng tôi thiết kế mức độ tích hợp dựa trên diện tích sàn có sẵn, nhân sự vận hành và ngân sách.',

    faqTitle: 'Câu hỏi thường gặp',
    faq: [
      {
        q: 'Sự khác biệt giữa máy chiết rót vít tải và cân nhiều đầu cho bột là gì?',
        a: 'Máy chiết rót vít tải sử dụng vít quay để phân phối thể tích được kiểm soát — tốt nhất cho bột mịn đồng nhất. Cân nhiều đầu đo theo trọng lượng trên nhiều đầu — tốt hơn cho tốc độ khi độ sai lệch trọng lượng chiết rót được chấp nhận. Đối với hầu hết ứng dụng bột mì/gia vị, vít tải cho độ chính xác tốt hơn. Đối với bột dạng hạt ở tốc độ cao, cân nhiều đầu được ưu tiên.',
      },
      {
        q: 'Một máy có thể xử lý nhiều kích thước túi không?',
        a: 'Có. Hầu hết máy VFFS cho phép điều chỉnh chiều rộng và chiều dài túi qua hệ thống dẫn động màng điều khiển servo. Việc thay đổi định dạng thường mất 15–30 phút. Đối với các định dạng rất khác nhau (ví dụ gói 10g so với túi 1kg), thường nên sử dụng máy thứ hai.',
      },
      {
        q: 'Độ chính xác của việc chiết rót bột là bao nhiêu?',
        a: 'Với máy chiết rót vít tải dẫn động servo, bạn có thể kỳ vọng độ chính xác ±0.5–1% cho hầu hết bột chảy tự do. Bột kết dính hoặc hút ẩm có thể cần hiệu chỉnh và có thể có độ nhất quán thấp hơn một chút. Chúng tôi khuyến nghị cung cấp mẫu sản phẩm để ước tính hiệu suất chính xác.',
      },
      {
        q: 'Máy có những chứng nhận gì?',
        a: 'Chứng nhận CE để xuất khẩu sang EU và các thị trường công nhận dấu CE. Các bộ phận tiếp xúc thực phẩm là SUS304 tiêu chuẩn; SUS316L có sẵn theo yêu cầu. Chúng tôi có thể cung cấp báo cáo kiểm tra và chứng nhận vật liệu cho thông quan hải quan.',
      },
      {
        q: 'Bạn có hỗ trợ xả nitơ cho đóng gói bột không?',
        a: 'Có. Xả nitơ tích hợp có sẵn cho các ứng dụng cần giảm thiểu quá trình oxy hóa — phổ biến trong cà phê, bột protein và một số sản phẩm gia vị.',
      },
      {
        q: 'Tôi cần cung cấp thông tin gì để nhận báo giá?',
        a: 'Tên và loại sản phẩm, mật độ khối gần đúng, trọng lượng chiết rót mục tiêu, định dạng và kích thước túi, tốc độ sản xuất yêu cầu, quốc gia/điện áp, và việc bạn cần máy độc lập hay dây chuyền hoàn chỉnh. Sử dụng biểu mẫu đề xuất của chúng tôi để được phản hồi nhanh nhất.',
      },
    ],

    relatedTitle: 'Ứng dụng và tài nguyên liên quan',
    relatedLinks: [
      { label: 'Cách chọn máy chiết rót bột', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: 'So sánh: vít tải vs bộ định lượng thể tích', href: '/resources/auger-vs-volumetric-filler' },
      { label: 'Hướng dẫn đóng gói bột gia vị', href: '/resources/spice-powder-packaging-machine' },
      { label: 'Nhận tư vấn máy móc', href: '/recommend' },
    ],

    ctaTitle: 'Sẵn sàng tìm cấu hình chiết rót bột phù hợp?',
    ctaSubtitle: 'Chia sẻ thông tin chi tiết về sản phẩm của bạn và các kỹ sư của chúng tôi sẽ đề xuất loại máy chiết rót, phạm vi sản lượng và cấu hình dây chuyền phù hợp cho ứng dụng của bạn.',
    ctaBtn1: 'Nhận tư vấn máy móc',
    ctaBtn2: 'Liên hệ bộ phận kỹ thuật',
  },

  de: {
    kicker: 'PULVERFÜLLUNG & VERPACKUNG',
    heroTitle: 'Pulverfüll- und Verpackungsmaschinen — Schnecken-, Volumetrische und Wägesysteme',
    heroSubtitle: 'SunGene stellt Pulverfüll- und Verpackungsmaschinen für Mehl, Gewürze, Kaffee, Waschmittel, chemische Pulver und Industriepulver her. Die Konfiguration hängt von der Fließfähigkeit Ihres Produkts, dem Füllgewicht und der Zielleistung ab.',

    whoTitle: 'Für wen geeignet',
    whoItems: [
      { title: 'Lebensmittelhersteller', desc: 'Mühlen, Gewürzproduzenten, Kaffeeröster und Proteinpulvermarken, die eine präzise, hygienische Abfüllung im großen Maßstab benötigen.' },
      { title: 'Chemie & Industrie', desc: 'Waschmittelpulver, Zementadditive und Agrochemikalien — mit staubdichten und geschlossenen Konstruktionen für Sicherheit.' },
      { title: 'Pharmazie & Nahrungsergänzung', desc: 'Anwendungen, bei denen GMP-Konformität und Kontaktteile aus SUS316L-Edelstahl erforderlich sind.' },
      { title: 'Lohnverpacker', desc: 'Verarbeitung mehrerer SKUs und Füllgewichte — Maschinen mit schnellem Formatwechsel und Servo-gesteuerter Präzision.' },
    ],

    productsTitle: 'Geeignete Produkte',
    productGroups: [
      { label: 'Frei fließende Pulver', items: ['Mehl', 'Zucker', 'Salz', 'Gewürze', 'Kaffee', 'Proteinpulver', 'Milchpulver'] },
      { label: 'Nicht frei fließend / kohäsiv', items: ['Stärke', 'Kakao', 'Feines Chemikalienpulver (erfordert Rührung oder Spezialdosierung)'] },
      { label: 'Industriepulver', items: ['Waschmittel', 'Zementadditive', 'Agrochemisches Pulver'] },
    ],
    productsNote: 'Wir prüfen Schüttdichte, Partikelgröße und Feuchtigkeitsgehalt Ihres Produkts, bevor wir einen Füllertyp empfehlen.',

    packagingTitle: 'Verpackungs- und Leistungsoptionen',
    packagingItems: [
      { label: 'Beuteltypen', value: 'Kissenbeutel (VFFS), Standbeutel, Sachets / Stickpacks, Flachbodenbeutel, vorgefertigte Beutel' },
      { label: 'Füllgewichtsbereich', value: 'Von 1g-Sachets bis 50kg-Säcken (je nach Konfiguration)' },
      { label: 'Leistungsbereich', value: 'Typischerweise 10–120 Beutel/min abhängig von Füllgewicht, Beutelformat und Füllertyp' },
    ],
    packagingNote: 'Alle genannten Bereiche sind konfigurationsabhängig — wir bestätigen auf Basis Ihres spezifischen Produkts und Formats.',

    configurationsTitle: 'Verfügbare Konfigurationen',
    configurations: [
      { name: 'Schneckenfüller', desc: 'Ideal für frei fließende bis leicht kohäsive Pulver. Hohe Genauigkeit (±0.5–1%). Kombinierbar mit VFFS oder vorgefertigten Beutelmaschinen.' },
      { name: 'Volumetrischer Becherfüller', desc: 'Günstigere Kosten, geeignet für gleichmäßig fließende Pulver. Weniger genau als Schnecke — ideal, wenn enge Toleranzen nicht erforderlich sind.' },
      { name: 'Mehrkopfwaage', desc: 'Für Granulate und Pulver, die hohe Geschwindigkeit und genaues Gewicht erfordern. Am besten über 20 Beutel/min.' },
      { name: 'Kombinationssystem (Schnecke + VFFS)', desc: 'Komplette vertikale Form-Füll-Siegellinie für Sachets bis 1kg-Beutel.' },
      { name: 'Big-Bag / Schüttgutfüller', desc: 'Für industrielle Verpackungen von 5–50kg. Schwerkraft- oder schneckengeförderter Antrieb.' },
      { name: 'Material & Konformität', desc: 'SUS304 Standard; SUS316L für lebensmittelgerechte und pharmazeutische Anwendungen erhältlich. CE-zertifiziert; Spannung und Frequenz für Ihr Land angepasst.' },
    ],

    decisionsTitle: 'Wichtige Entscheidungsfaktoren',
    decisions: [
      { factor: 'Produktfließfähigkeit', guide: 'Frei fließend → Schnecke oder volumetrisch. Kohäsiv → Spezialschnecke mit Rührer oder Vibration.' },
      { factor: 'Füllgewicht', guide: 'Leichte Sachets → Hochgeschwindigkeitsschnecke + VFFS. Schwere Säcke → Schüttgutfüller oder Mehrkopfwaage.' },
      { factor: 'Genauigkeitsanforderung', guide: '±0.5% → Schneckenfüller mit Servoantrieb. ±2% akzeptabel → volumetrisch.' },
      { factor: 'Ausgangsgeschwindigkeit', guide: '< 30 Beutel/min → Einzelschnecke. 30–80 → Mehrkopfwaage. > 80 → Hochgeschwindigkeitssysteme.' },
      { factor: 'Hygieneniveau', guide: 'Standard → SUS304. Lebensmittel/Pharma → SUS316L + CIP-Konstruktion.' },
      { factor: 'Linienintegration', guide: 'Einzelmaschine oder komplette Linie mit Förderband, Metallsuchgerät, Kontrollwaage und Kartonierer.' },
    ],

    integrationTitle: 'Prozessintegration',
    integrationDesc: 'Diese Maschine integriert sich in Ihren breiteren Produktionsablauf in der Füllphase. Eine typische integrierte Pulverlinie kann Folgendes umfassen:',
    integrationSteps: ['Rohstoffsilos', 'Pneumatische Förderung', 'Klumpenbrecher', 'Schneckenfüller', 'VFFS oder vorgefertigter Beutel', 'Kontrollwaage', 'Metallsuchgerät', 'Etikettenapplikator', 'Kartonierer', 'Palettiermaschine'],
    integrationFooter: 'Wir konzipieren den Integrationsgrad basierend auf Ihrem verfügbaren Grundriss, Ihren Bedienern und Ihrem Budget.',

    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      {
        q: 'Was ist der Unterschied zwischen einem Schneckenfüller und einer Mehrkopfwaage für Pulver?',
        a: 'Schneckenfüller verwenden eine rotierende Schnecke, um kontrollierte Volumina abzugeben — am besten für gleichmäßige, feine Pulver. Mehrkopfwaagen messen nach Gewicht über mehrere Köpfe — besser für Geschwindigkeit, wenn Füllgewichtsabweichungen akzeptabel sind. Für die meisten Mehl-/Gewürzanwendungen bietet die Schnecke bessere Genauigkeit. Für granulatartige Pulver bei hoher Geschwindigkeit wird die Mehrkopfwaage bevorzugt.',
      },
      {
        q: 'Kann eine Maschine mehrere Beutelgrößen verarbeiten?',
        a: 'Ja. Die meisten VFFS-Maschinen ermöglichen die Anpassung von Beutelbreite und -länge über einen servogeregelten Folienantrieb. Formatwechsel dauern typischerweise 15–30 Minuten. Bei sehr unterschiedlichen Formaten (z.B. 10g-Sachet vs. 1kg-Beutel) wird in der Regel eine zweite Maschine empfohlen.',
      },
      {
        q: 'Wie genau ist die Pulverabfüllung?',
        a: 'Mit einem servogetriebenen Schneckenfüller können Sie für die meisten frei fließenden Pulver eine Genauigkeit von ±0.5–1% erwarten. Kohäsive oder hygroskopische Pulver erfordern möglicherweise eine Kalibrierung und können eine etwas geringere Konsistenz aufweisen. Wir empfehlen, ein Produktmuster für eine genaue Leistungsschätzung bereitzustellen.',
      },
      {
        q: 'Welche Zertifizierungen hat die Maschine?',
        a: 'CE-Zertifizierung für den Export in die EU und Märkte, die die CE-Kennzeichnung anerkennen. Lebensmittelkontaktteile sind SUS304 Standard; SUS316L auf Anfrage erhältlich. Wir können Prüfberichte und Materialnachweise für die Zollabfertigung bereitstellen.',
      },
      {
        q: 'Unterstützen Sie Stickstoffspülung für die Pulververpackung?',
        a: 'Ja. Integrierte Stickstoffspülung ist für Anwendungen verfügbar, bei denen Oxidation minimiert werden muss — häufig bei Kaffee, Proteinpulver und bestimmten Gewürzprodukten.',
      },
      {
        q: 'Welche Informationen muss ich für ein Angebot bereitstellen?',
        a: 'Produktname und -typ, ungefähre Schüttdichte, Zielfüllgewicht, Beutelformat und -größe, erforderliche Ausgangsgeschwindigkeit, Land/Spannung und ob Sie eine Einzelmaschine oder eine komplette Linie benötigen. Nutzen Sie unser Empfehlungsformular für die schnellste Antwort.',
      },
    ],

    relatedTitle: 'Verwandte Anwendungen und Ressourcen',
    relatedLinks: [
      { label: 'Ratgeber: Die richtige Pulverfüllmaschine wählen', href: '/resources/how-to-choose-powder-filling-machine' },
      { label: 'Vergleich: Schneckenfüller vs. volumetrischer Füller', href: '/resources/auger-vs-volumetric-filler' },
      { label: 'Gewürzpulver-Verpackungsführer', href: '/resources/spice-powder-packaging-machine' },
      { label: 'Maschinenempfehlung erhalten', href: '/recommend' },
    ],

    ctaTitle: 'Bereit, die richtige Pulverfüllkonfiguration zu finden?',
    ctaSubtitle: 'Teilen Sie uns Ihre Produktdetails mit und unsere Ingenieure empfehlen den richtigen Füllertyp, Leistungsbereich und die Linienkonfiguration für Ihre Anwendung.',
    ctaBtn1: 'Maschinenempfehlung erhalten',
    ctaBtn2: 'Mit dem Ingenieurteam sprechen',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PowderFillingMachinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content.en
  const heroPhoto = PHOTO.machines.powderFillingHero
  const guides = getResourceArticlesByMachine('powder-filling-machine', lang, 6)
  const guidesTitle =
    ({
      en: 'Buying guides',
      cn: '采购指南',
      zh: '採購指南',
      fr: 'Guides d’achat',
      es: 'Guías de compra',
      pt: 'Guias de compra',
      ko: '구매 가이드',
      ja: '購入ガイド',
      ar: 'أدلة الشراء',
      th: 'คู่มือการเลือกซื้อ',
      vi: 'Hướng dẫn mua máy',
      de: 'Kaufratgeber',
    } as Record<string, string>)[lang] || 'Buying guides'

  // JSON-LD schemas
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANG_META[lang].htmlLang,
    mainEntity: t.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Powder Filling & Packaging Machine',
    description: 'SunGene manufactures auger fillers, volumetric fillers, multi-head weigher systems, and VFFS powder filling lines for flour, spice, coffee, chemical, and industrial powders.',
    url: `${SITE_URL}/${lang}/machines/powder-filling-machine`,
    image: [`${SITE_URL}${heroPhoto}`],
    brand: { '@type': 'Brand', name: 'SunGene' },
    manufacturer: { '@type': 'Organization', name: 'SunGene Co., LTD', url: SITE_URL },
    category: 'Powder Filling & Packaging Machinery',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'SunGene Co., LTD', url: SITE_URL },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: LANG_META[lang].htmlLang,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Machinery', item: `${SITE_URL}/${lang}/machinery` },
      { '@type': 'ListItem', position: 3, name: 'Powder Filling Machine', item: `${SITE_URL}/${lang}/machines/powder-filling-machine` },
    ],
  }

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── 1. Hero ──────────────────────────────────────────────────────────── */}
      <PageHero
        kicker={t.kicker}
        title={t.heroTitle}
        desc={t.heroSubtitle}
        image={{
          src: heroPhoto,
          alt: 'Powder filling and packaging machine in factory',
          priority: true,
          aspectClassName: 'aspect-[16/10]',
        }}
      />

      {/* ── 2. Who It's For ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.whoTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.whoItems.map((item, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-base font-bold text-gray-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. Suitable Products ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.productsTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {t.productGroups.map((group, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-sm font-bold text-accent-700 uppercase tracking-wide mb-3">{group.label}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 italic">{t.productsNote}</p>
        </Container>
      </section>

      {/* ── 4. Packaging & Output Options ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.packagingTitle}</h2>
          <div className="mt-10 space-y-4 max-w-3xl">
            {t.packagingItems.map((item, i) => (
              <div key={i} className="flex flex-col gap-1 rounded-xl bg-white border border-gray-200 px-6 py-4 sm:flex-row sm:items-start sm:gap-6">
                <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-gray-500 sm:w-40">{item.label}</span>
                <span className="text-sm leading-relaxed text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500 italic">{t.packagingNote}</p>
        </Container>
      </section>

      {/* ── 5. Available Configurations ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.configurationsTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.configurations.map((cfg, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700 text-xs font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-bold text-gray-950">{cfg.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{cfg.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. Key Decision Factors ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.decisionsTitle}</h2>
          <div className="mt-10 divide-y divide-gray-200">
            {t.decisions.map((dec, i) => (
              <div key={i} className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-8">
                <span className="shrink-0 text-sm font-bold text-gray-950 sm:w-44">{dec.factor}</span>
                <span className="text-sm leading-relaxed text-gray-600">{dec.guide}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. Process Integration ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.integrationTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">{t.integrationDesc}</p>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {t.integrationSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200">
                  {step}
                </span>
                {i < t.integrationSteps.length - 1 && (
                  <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 italic">{t.integrationFooter}</p>
        </Container>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.faqTitle}</h2>
          <div className="mt-10">
            <MachineFAQ items={t.faq} />
          </div>
        </Container>
      </section>

      {/* ── 9. Related Applications ──────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <h2 className="text-xl font-bold text-gray-950">{t.relatedTitle}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.relatedLinks.map((link, i) => (
              <a
                key={i}
                href={`/${lang}${link.href}`}
                className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-brand-400 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {guides.length > 0 ? (
        <section className="py-12 sm:py-16 border-t border-gray-200/60 bg-white">
          <Container className="max-w-4xl">
            <h2 className="text-xl font-bold text-gray-950">{guidesTitle}</h2>
            <ul className="mt-6 space-y-2 text-sm">
              {guides.map((g) => (
                <li key={g.slug}>
                  <a href={`/${lang}/resources/${g.slug}`} className="text-accent-600 hover:underline">{g.title}</a>
                </li>
              ))}
              <li>
                <a href={`/${lang}/resources/topic/powder-filling-machine`} className="text-accent-600 hover:underline">
                  {lang === 'zh' ? '更多文章' : lang === 'cn' ? '更多文章' : lang === 'ja' ? '記事一覧' : lang === 'ko' ? '더 보기' : lang === 'fr' ? 'Voir tout' : lang === 'es' ? 'Ver todo' : lang === 'pt' ? 'Ver tudo' : lang === 'ar' ? 'عرض الكل' : lang === 'th' ? 'ดูทั้งหมด' : lang === 'vi' ? 'Xem tất cả' : lang === 'de' ? 'Alle anzeigen' : 'View all'}
                </a>
              </li>
            </ul>
          </Container>
        </section>
      ) : null}

      {/* ── 10. CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-950 py-16 sm:py-20 text-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-base text-white/70">{t.ctaSubtitle}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink href={`/${lang}/recommend`} size="lg">{t.ctaBtn1}</ButtonLink>
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
