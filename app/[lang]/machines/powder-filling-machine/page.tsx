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
  en: 'SunGene manufactures powder filling and packaging machines for flour, spice, coffee, detergent, chemical, and pharmaceutical powders. Auger, volumetric, and multi-head weigher configurations. CE certified, factory-direct.',
  cn: 'SunGene生产面粉、香料、咖啡、洗涤剂、化工和药用粉末的充填包装机。螺旋式、容积式和多头秤配置。CE认证，工厂直销。',
  zh: 'SunGene生產麵粉、香料、咖啡、洗滌劑、化工和藥用粉末的充填包裝機。螺旋式、容積式和多頭秤配置。CE認證，工廠直銷。',
  fr: 'SunGene fabrique des machines de remplissage et d\'emballage de poudres pour farine, épices, café, détergent, poudres chimiques et pharmaceutiques. Configurations à vis, volumétriques et multi-têtes. CE certifié.',
  es: 'SunGene fabrica máquinas llenadoras y envasadoras de polvo para harina, especias, café, detergente, polvos químicos y farmacéuticos. Configuraciones de tornillo, volumétrica y pesadora multicabezal. CE certificado.',
  pt: 'SunGene fabrica máquinas de enchimento e embalagem de pó para farinha, especiarias, café, detergente, pós químicos e farmacêuticos. Configurações de rosca, volumétrica e pesadora multicabeçote. CE certificado.',
  ko: 'SunGene은 밀가루, 향신료, 커피, 세제, 화학 및 제약 분말용 충전 및 포장 기계를 제조합니다. 오거, 용적식, 멀티헤드 계량기 구성. CE 인증, 공장 직납.',
  ja: 'SunGeneは小麦粉、スパイス、コーヒー、洗剤、化学・医薬品粉末向けの充填包装機を製造。オーガー式、容積式、マルチヘッド計量機構成。CE認証、工場直送。',
  ar: 'SunGene تصنع آلات تعبئة وتغليف المسحوق للدقيق والتوابل والقهوة والمنظفات والمساحيق الكيميائية والصيدلانية. تكوينات لولبية وحجمية ومتعددة الرؤوس. معتمدة CE.',
  th: 'SunGene ผลิตเครื่องบรรจุและบรรจุภัณฑ์ผงสำหรับแป้ง เครื่องเทศ กาแฟ ผงซักฟอก ผงเคมีและยา การกำหนดค่าแบบสกรู ปริมาตร และเครื่องชั่งหลายหัว ได้รับการรับรอง CE',
  vi: 'SunGene sản xuất máy chiết rót và đóng gói bột cho bột mì, gia vị, cà phê, chất tẩy rửa, bột hóa chất và dược phẩm. Cấu hình trục vít, thể tích và cân nhiều đầu. Chứng nhận CE.',
  de: 'SunGene stellt Pulverfüll- und Verpackungsmaschinen für Mehl, Gewürze, Kaffee, Waschmittel, chemische und pharmazeutische Pulver her. Schnecken-, Volumetrische und Mehrkopfwaagenkonfigurationen. CE-zertifiziert.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = ALL_LANGS.includes(lang as Lang) ? lang : 'en'
  return {
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    keywords: [
      'powder filling machine', 'auger filler', 'powder packaging machine', 'flour filling machine',
      'spice packaging machine', 'coffee powder filler', 'detergent powder packaging', 'VFFS powder line',
      'multi-head weigher', 'Taiwan powder filler', 'CE certified filling machine',
    ],
    alternates: {
      canonical: `${SITE_URL}/${l}/machines/powder-filling-machine`,
      languages: {
        'en': `${SITE_URL}/en/machines/powder-filling-machine`,
        'zh-TW': `${SITE_URL}/zh/machines/powder-filling-machine`,
        'zh-CN': `${SITE_URL}/cn/machines/powder-filling-machine`,
        'fr': `${SITE_URL}/fr/machines/powder-filling-machine`,
        'es': `${SITE_URL}/es/machines/powder-filling-machine`,
        'pt': `${SITE_URL}/pt/machines/powder-filling-machine`,
        'ko': `${SITE_URL}/ko/machines/powder-filling-machine`,
        'ja': `${SITE_URL}/ja/machines/powder-filling-machine`,
        'ar': `${SITE_URL}/ar/machines/powder-filling-machine`,
        'th': `${SITE_URL}/th/machines/powder-filling-machine`,
        'vi': `${SITE_URL}/vi/machines/powder-filling-machine`,
        'de': `${SITE_URL}/de/machines/powder-filling-machine`,
        'x-default': `${SITE_URL}/en/machines/powder-filling-machine`,
      },
    },
    openGraph: {
      title: metaTitles[l] || metaTitles.en,
      description: metaDescs[l] || metaDescs.en,
      url: `${SITE_URL}/${l}/machines/powder-filling-machine`,
      siteName: 'SunGene Machinery',
      images: [{ url: `${SITE_URL}/og/og.png`, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitles[l] || metaTitles.en,
      description: metaDescs[l] || metaDescs.en,
      images: [`${SITE_URL}/og/og.png`],
    },
  }
}

// ─── Static content (en/cn/zh translated; all others fall back to en) ─────────

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
      { label: 'Packaging Machinery Overview', href: '/machinery/packaging' },
      { label: 'Food Processing Equipment', href: '/machinery/food-processing' },
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
      { label: '包装机械概览', href: '/machinery/packaging' },
      { label: '食品加工设备', href: '/machinery/food-processing' },
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
      { label: '包裝機械概覽', href: '/machinery/packaging' },
      { label: '食品加工設備', href: '/machinery/food-processing' },
      { label: '取得機器推薦', href: '/recommend' },
    ],

    ctaTitle: '準備好找到合適的粉末充填配置了嗎？',
    ctaSubtitle: '分享您的產品詳情，我們的工程師將為您的應用推薦合適的充填機類型、產量範圍和產線配置。',
    ctaBtn1: '取得機器推薦',
    ctaBtn2: '聯絡工程團隊',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PowderFillingMachinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content.en
  const heroPhoto = PHOTO.machines.powderFillingHero

  // JSON-LD schemas
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
