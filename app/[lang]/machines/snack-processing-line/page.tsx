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
  en: 'Snack & Food Processing Lines — Frying, Roasting, Seasoning & Packaging | SunGene',
  cn: '休闲食品与食品加工线 — 油炸、烘烤、调味与包装 | SunGene',
  zh: '休閒食品與食品加工線 — 油炸、烘烤、調味與包裝 | SunGene',
  fr: 'Lignes de transformation des snacks et aliments — Friture, Torréfaction, Assaisonnement & Emballage | SunGene',
  es: 'Líneas de procesamiento de snacks y alimentos — Fritura, Tostado, Condimentación y Empaque | SunGene',
  pt: 'Linhas de processamento de snacks e alimentos — Fritura, Torrefação, Tempero e Embalagem | SunGene',
  ko: '스낵 및 식품 가공 라인 — 튀김, 로스팅, 시즈닝 및 포장 | SunGene',
  ja: 'スナック・食品加工ライン — フライ、ロースト、調味・包装 | SunGene',
  ar: 'خطوط معالجة الوجبات الخفيفة والأغذية — القلي، التحميص، التتبيل والتعبئة | SunGene',
  th: 'สายการผลิตขนมขบเคี้ยวและอาหาร — ทอด, อบ, ปรุงรส และบรรจุภัณฑ์ | SunGene',
  vi: 'Dây chuyền chế biến snack và thực phẩm — Chiên, Rang, Ướp gia vị và Đóng gói | SunGene',
  de: 'Snack- und Lebensmittelverarbeitungslinien — Frittieren, Rösten, Würzen & Verpacken | SunGene',
}

const metaDescs: Record<string, string> = {
  en: 'SunGene manufactures snack and food processing lines including continuous fryers, roasting machines, seasoning systems, cooling conveyors, multi-head weighers, and integrated packaging. For chips, nuts, snacks, and pet food. CE certified.',
  cn: 'SunGene制造休闲食品及食品加工线，包括连续油炸机、烘烤机、调味系统、冷却输送机、多头秤及一体化包装。适用于薯片、坚果、零食和宠物食品。CE认证。',
  zh: 'SunGene製造休閒食品及食品加工線，包括連續油炸機、烘烤機、調味系統、冷卻輸送機、多頭秤及一體化包裝。適用於薯片、堅果、零食和寵物食品。CE認證。',
  fr: 'SunGene fabrique des lignes de transformation de snacks et aliments comprenant des friteuses continues, machines de torréfaction, systèmes d\'assaisonnement, convoyeurs de refroidissement, peseuses multicêtes et emballage intégré. CE certifié.',
  es: 'SunGene fabrica líneas de procesamiento de snacks y alimentos que incluyen freidoras continuas, máquinas de tostado, sistemas de condimentación, transportadores de enfriamiento, pesadoras multicabezal y empaque integrado. CE certificado.',
  pt: 'SunGene fabrica linhas de processamento de snacks e alimentos incluindo fritadeiras contínuas, máquinas de torrefação, sistemas de tempero, transportadores de resfriamento, pesadoras multicabeçote e embalagem integrada. CE certificado.',
  ko: 'SunGene은 연속 튀김기, 로스팅 머신, 시즈닝 시스템, 냉각 컨베이어, 멀티헤드 계량기 및 통합 포장을 포함한 스낵 및 식품 가공 라인을 제조합니다. CE 인증.',
  ja: 'SunGeneは連続フライヤー、焙煎機、調味システム、冷却コンベア、マルチヘッド計量機、一体型包装を含むスナック・食品加工ラインを製造。CE認証。',
  ar: 'SunGene تصنع خطوط معالجة الوجبات الخفيفة والأغذية بما في ذلك أجهزة القلي المستمر وآلات التحميص وأنظمة التتبيل وناقلات التبريد وموازين متعددة الرؤوس والتعبئة المتكاملة. معتمدة CE.',
  th: 'SunGene ผลิตสายการผลิตขนมขบเคี้ยวและอาหาร รวมถึงเครื่องทอดต่อเนื่อง เครื่องอบ ระบบปรุงรส สายพานลำเลียงทำความเย็น เครื่องชั่งหลายหัว และบรรจุภัณฑ์แบบรวม ได้รับการรับรอง CE',
  vi: 'SunGene sản xuất dây chuyền chế biến snack và thực phẩm bao gồm máy chiên liên tục, máy rang, hệ thống ướp gia vị, băng tải làm nguội, cân nhiều đầu và đóng gói tích hợp. Chứng nhận CE.',
  de: 'SunGene stellt Snack- und Lebensmittelverarbeitungslinien her, darunter Durchlauffriteusen, Röstmaschinen, Würzsysteme, Kühlbänder, Mehrkopfwaagen und integrierte Verpackung. CE-zertifiziert.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = ALL_LANGS.includes(lang as Lang) ? lang : 'en'
  return {
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    keywords: [
      'snack processing line', 'continuous fryer', 'food processing line', 'roasting machine',
      'seasoning tumbler', 'snack production line', 'potato chip line', 'nut roasting',
      'VFFS multi-head weigher', 'Taiwan snack machine', 'CE certified food processing',
    ],
    alternates: {
      canonical: `${SITE_URL}/${l}/machines/snack-processing-line`,
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
      },
    },
    openGraph: {
      title: metaTitles[l] || metaTitles.en,
      description: metaDescs[l] || metaDescs.en,
      url: `${SITE_URL}/${l}/machines/snack-processing-line`,
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
  // Section 3 — Products We Process
  productsTitle: string
  productGroups: { label: string; items: string[] }[]
  productsNote: string
  // Section 4 — Processing Output & Scale Options
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
    kicker: 'SNACK & FOOD PROCESSING',
    heroTitle: 'Snack & Food Processing Lines — From Raw Material to Finished Package',
    heroSubtitle: 'SunGene designs and manufactures complete snack processing lines covering frying, roasting, seasoning, cooling, weighing, and packaging. We configure the line to your product type, output target, and facility layout.',

    whoTitle: "Who It's For",
    whoItems: [
      { title: 'Snack Manufacturers', desc: 'Potato chips, extruded snacks, puffed corn, crackers, fried dough — continuous or batch processing lines.' },
      { title: 'Nut Roasters & Processors', desc: 'Peanuts, almonds, cashews, sunflower seeds — roasting drum or oven lines with seasoning and packaging.' },
      { title: 'Pet Food Producers', desc: 'Dry kibble, baked treats, and freeze-dried snacks — food-grade processing with hygienic design.' },
      { title: 'Emerging Snack Brands', desc: 'Scaling up from batch to continuous processing — we design lines that grow with your production volume.' },
    ],

    productsTitle: 'Products We Process',
    productGroups: [
      { label: 'Fried snacks', items: ['Potato chips', 'Banana chips', 'Fried dough sticks', 'Extruded snacks', 'Pork rinds'] },
      { label: 'Roasted products', items: ['Peanuts', 'Almonds', 'Cashews', 'Seeds', 'Coffee beans (roasting line)'] },
      { label: 'Coated & seasoned', items: ['Cheese puffs', 'Seasoned crackers', 'Coated nuts', 'Flavored chips'] },
      { label: 'Other food processing', items: ['Prawn crackers', 'Fish tofu', 'Vegetable chips', 'Pet food kibble'] },
    ],
    productsNote: 'Processing method (frying vs roasting vs baking) depends on your product and final texture requirement. We recommend based on your target product characteristics.',

    packagingTitle: 'Processing Output & Scale Options',
    packagingItems: [
      { label: 'Processing capacity', value: 'From 100 kg/hr pilot lines to 2,000 kg/hr commercial lines' },
      { label: 'Packaging output', value: '20–120 bags/min depending on bag format and weigher configuration' },
      { label: 'Line length', value: 'Configurable — we design to fit your factory floor plan' },
      { label: 'Automation', value: 'Semi-automatic (operator-monitored) to fully continuous PLC-controlled' },
    ],
    packagingNote: 'Line capacity and automation level are fully configurable — we design around your target output, product, and available investment.',

    configurationsTitle: 'Available Configurations',
    configurations: [
      { name: 'Continuous Fryer', desc: 'Oil temperature controlled by PLC. Adjustable belt speed for cook time control. Single or double-belt. Oil filtration system available. 100–2,000 kg/hr.' },
      { name: 'Batch Fryer', desc: 'Smaller capacity, lower investment. Manual or semi-auto. For pilot production or specialty products.' },
      { name: 'Roasting Oven / Rotary Drum Roaster', desc: 'For nuts, seeds, and dry roasted products. Gas or electric heat. Continuous or batch.' },
      { name: 'Seasoning Tumbler / Drum', desc: 'Applies flavoring powder or oil coating to finished snack. Stainless drum with spray system. Adjustable rotation speed.' },
      { name: 'Cooling Conveyor (Mesh Belt)', desc: 'After frying or baking — ambient or forced-air cooling to reduce product temperature before packaging.' },
      { name: 'Multi-Head Weigher + VFFS', desc: 'High-speed combination weigher + vertical form-fill-seal for pillow bag packaging. 40–120 bags/min.' },
      { name: 'Oil Filtration & Recovery System', desc: 'Extends cooking oil life and maintains product quality. Continuous filtration with temperature monitoring.' },
      { name: 'Complete Integrated Line', desc: 'Full line from raw input through frying/roasting/seasoning/cooling/weighing/packaging — PLC/HMI controlled.' },
    ],

    decisionsTitle: 'Key Decision Factors',
    decisions: [
      { factor: 'Product type', guide: 'Potato/vegetable → fryer. Nuts/seeds → roasting drum. Extruded → baking oven + seasoning.' },
      { factor: 'Output scale', guide: '< 200 kg/hr → batch equipment. 200–500 kg/hr → small continuous. > 500 kg/hr → industrial continuous line.' },
      { factor: 'Cooking method', guide: 'Deep fry → fryer. Dry roast → drum or oven. Air fry/bake → convection oven.' },
      { factor: 'Oil management', guide: 'High-volume frying → continuous oil filtration system essential to maintain quality and reduce cost.' },
      { factor: 'Packaging format', guide: 'Pillow bags → VFFS + multi-head weigher. Stand-up pouches → pre-made pouch machine. Bulk → open-top bag.' },
      { factor: 'Hygiene and cleaning', guide: 'Food-grade stainless construction; CIP (clean-in-place) ports for oil systems; drains and access panels for daily cleaning.' },
    ],

    integrationTitle: 'Process Integration',
    integrationDesc: 'A typical complete snack processing line (example: fried snack):',
    integrationSteps: [
      'Raw material infeed',
      'Washing / blanching',
      'Pre-drying',
      'Continuous fryer',
      'Oil draining conveyor',
      'Cooling conveyor',
      'Seasoning tumbler',
      'Multi-head weigher',
      'VFFS / Pouch machine',
      'Check-weigher',
      'Metal detector',
      'Date coder',
      'Case packer',
    ],
    integrationFooter: 'Not all steps are required for every product. We configure the line based on your specific product and processing requirements.',

    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'Can I start with just a fryer and add packaging later?',
        a: 'Yes. We design lines that can grow in stages. You can start with the core cooking equipment and add seasoning, cooling, and packaging machines as your volume grows. We ensure machine interfaces are compatible for future integration.',
      },
      {
        q: 'What is the difference between a continuous fryer and a batch fryer?',
        a: 'A continuous fryer runs product on a moving belt through hot oil — consistent quality, suitable for high volumes (200 kg/hr+). A batch fryer processes one load at a time — lower investment, more flexible for small batches or specialty products, but less consistent at scale.',
      },
      {
        q: 'How do you control cooking consistency with a fryer?',
        a: 'Oil temperature is PLC-controlled with ±2°C accuracy. Belt speed controls cook time. Level sensors maintain consistent oil depth. These parameters can be saved as recipes per product in the HMI.',
      },
      {
        q: 'What oil filtration system do you recommend?',
        a: 'For continuous frying lines producing more than 200 kg/hr, we recommend a continuous filtration unit with a fine filter (20–50 micron) and particle removal conveyor. This extends oil life by 30–50% and maintains product color consistency.',
      },
      {
        q: 'Can the same line handle both potato chips and extruded snacks?',
        a: 'Partially. The fryer and cooling conveyor can handle both, but the seasoning system (drum size, spray rate) and packaging (weigher size, bag format) may need adjustment. We design for a primary product and specify what adaptations are needed for secondary products.',
      },
      {
        q: 'What information do I need to provide to get a quote for a snack line?',
        a: 'Product type (potato chip, nut, extruded snack, etc.), target output (kg/hr), packaging format and output speed, available floor space dimensions, country/voltage, and whether you need a complete line or specific equipment. Use our recommendation form for the fastest response.',
      },
    ],

    relatedTitle: 'Related Applications & Resources',
    relatedLinks: [
      { label: 'Food Processing Equipment', href: '/machinery/food-processing' },
      { label: 'Conveying & Automation', href: '/machinery/conveying-automation' },
      { label: 'Get a Processing Line Recommendation', href: '/recommend' },
    ],

    ctaTitle: 'Describe your snack product and target output — we\'ll configure the right processing line.',
    ctaSubtitle: 'From batch fryers to complete 2,000 kg/hr continuous snack lines — we configure around your product, space, and production goals.',
    ctaBtn1: 'Get a Processing Line Recommendation',
    ctaBtn2: 'Talk to Engineering',
  },

  cn: {
    kicker: '休闲食品与食品加工',
    heroTitle: '休闲食品与食品加工线 — 从原材料到成品包装',
    heroSubtitle: 'SunGene设计制造完整的休闲食品加工线，涵盖油炸、烘烤、调味、冷却、计量和包装全流程。我们根据您的产品类型、产量目标和厂房布局定制产线。',

    whoTitle: '适用客户',
    whoItems: [
      { title: '休闲食品制造商', desc: '薯片、膨化食品、爆米花、饼干、油条——连续式或批次加工线。' },
      { title: '坚果烘烤与加工商', desc: '花生、杏仁、腰果、葵花籽——烘烤滚筒或烤箱产线，配调味与包装。' },
      { title: '宠物食品生产商', desc: '干粮、烘焙零食和冻干食品——食品级加工，卫生设计。' },
      { title: '新兴零食品牌', desc: '从批次生产扩展至连续加工——我们设计可随产量增长而扩展的产线。' },
    ],

    productsTitle: '我们加工的产品',
    productGroups: [
      { label: '油炸食品', items: ['薯片', '香蕉片', '油条', '膨化食品', '猪皮'] },
      { label: '烘烤产品', items: ['花生', '杏仁', '腰果', '种子', '咖啡豆（烘焙线）'] },
      { label: '裹衣与调味', items: ['芝士泡芙', '调味饼干', '裹衣坚果', '调味薯片'] },
      { label: '其他食品加工', items: ['虾饼', '鱼豆腐', '蔬菜片', '宠物粮颗粒'] },
    ],
    productsNote: '加工方式（油炸、烘烤还是烘焙）取决于您的产品及最终口感要求。我们根据您的目标产品特性进行推荐。',

    packagingTitle: '加工产量与规模选项',
    packagingItems: [
      { label: '加工产能', value: '从100千克/小时试产线到2,000千克/小时商业线' },
      { label: '包装产量', value: '20–120袋/分钟，取决于袋型和计量秤配置' },
      { label: '产线长度', value: '可配置——我们根据您的厂房平面图进行设计' },
      { label: '自动化程度', value: '半自动（操作员监控）到全连续PLC控制' },
    ],
    packagingNote: '产线产能和自动化程度完全可配置——我们围绕您的目标产量、产品和可用投资进行设计。',

    configurationsTitle: '可用配置',
    configurations: [
      { name: '连续油炸机', desc: 'PLC控制油温。可调节皮带速度以控制烹饪时间。单层或双层皮带。可配油过滤系统。100–2,000千克/小时。' },
      { name: '批次油炸机', desc: '产能较小，投资较低。手动或半自动。适用于试产或特色产品。' },
      { name: '烤箱/旋转滚筒烘烤机', desc: '适用于坚果、种子和干烤产品。燃气或电加热。连续式或批次式。' },
      { name: '调味滚筒/转鼓', desc: '将调味粉或油脂涂层施加到成品零食上。不锈钢滚筒配喷涂系统。可调转速。' },
      { name: '冷却输送机（网带）', desc: '油炸或烘焙后——常温或强制风冷，降低产品包装前的温度。' },
      { name: '多头秤+VFFS', desc: '高速组合计量秤+立式成型-充填-封口机，用于枕型袋包装。40–120袋/分钟。' },
      { name: '油脂过滤与回收系统', desc: '延长食用油使用寿命，保持产品质量。连续过滤并带温度监控。' },
      { name: '完整整合产线', desc: '从原料投入，经油炸/烘烤/调味/冷却/计量/包装的全线——PLC/HMI控制。' },
    ],

    decisionsTitle: '关键决策因素',
    decisions: [
      { factor: '产品类型', guide: '马铃薯/蔬菜 → 油炸机。坚果/种子 → 烘烤滚筒。膨化食品 → 烤箱+调味。' },
      { factor: '产量规模', guide: '< 200千克/小时 → 批次设备。200–500千克/小时 → 小型连续线。> 500千克/小时 → 工业连续线。' },
      { factor: '烹饪方式', guide: '深油炸 → 油炸机。干烤 → 滚筒或烤箱。风炸/烘焙 → 对流烤箱。' },
      { factor: '油脂管理', guide: '大产量油炸 → 连续油脂过滤系统是保持质量和降低成本的必要配置。' },
      { factor: '包装格式', guide: '枕型袋 → VFFS+多头秤。站立袋 → 预制袋机。散装 → 开口袋。' },
      { factor: '卫生与清洁', guide: '食品级不锈钢结构；油脂系统配CIP（就地清洗）接口；设有排水口和维护面板以便日常清洁。' },
    ],

    integrationTitle: '工艺整合',
    integrationDesc: '一条典型的完整休闲食品加工线（示例：油炸零食）：',
    integrationSteps: [
      '原料进料',
      '清洗/漂烫',
      '预干燥',
      '连续油炸机',
      '控油输送机',
      '冷却输送机',
      '调味滚筒',
      '多头秤',
      'VFFS/袋装机',
      '检重秤',
      '金属探测器',
      '日期打码机',
      '装箱机',
    ],
    integrationFooter: '并非所有步骤都适用于每种产品。我们根据您的具体产品和加工需求配置产线。',

    faqTitle: '常见问题',
    faq: [
      {
        q: '我可以先只购买油炸机，之后再添加包装设备吗？',
        a: '可以。我们设计可分阶段扩展的产线。您可以先从核心烹饪设备入手，随着产量增长再添加调味机、冷却机和包装机。我们确保机器接口兼容未来整合。',
      },
      {
        q: '连续油炸机与批次油炸机有什么区别？',
        a: '连续油炸机让产品在移动皮带上通过热油——品质稳定，适合大产量（200千克/小时以上）。批次油炸机每次处理一批——投资较低，对小批量或特色产品更灵活，但大规模时一致性较差。',
      },
      {
        q: '油炸机如何控制烹饪一致性？',
        a: '油温由PLC控制，精度±2°C。皮带速度控制烹饪时间。液位传感器维持稳定的油深。这些参数可在HMI中按产品保存为配方。',
      },
      {
        q: '你们推荐什么油脂过滤系统？',
        a: '对于产量超过200千克/小时的连续油炸线，我们推荐配备精密过滤器（20–50微米）和颗粒清除输送机的连续过滤装置。这可将食用油使用寿命延长30–50%，并保持产品色泽一致性。',
      },
      {
        q: '同一条产线可以同时处理薯片和膨化零食吗？',
        a: '部分可以。油炸机和冷却输送机可以处理这两种产品，但调味系统（滚筒尺寸、喷涂速率）和包装（计量秤尺寸、袋型）可能需要调整。我们针对主产品进行设计，并说明处理辅助产品所需的改动。',
      },
      {
        q: '获取零食产线报价需要提供哪些信息？',
        a: '产品类型（薯片、坚果、膨化零食等）、目标产量（千克/小时）、包装格式和产量速度、可用厂房尺寸、国家/电压，以及是否需要完整产线或特定设备。使用我们的推荐表单可获得最快响应。',
      },
    ],

    relatedTitle: '相关应用与资源',
    relatedLinks: [
      { label: '食品加工设备', href: '/machinery/food-processing' },
      { label: '输送与自动化', href: '/machinery/conveying-automation' },
      { label: '获取加工线推荐', href: '/recommend' },
    ],

    ctaTitle: '告诉我们您的零食产品和目标产量——我们来配置合适的加工线。',
    ctaSubtitle: '从批次油炸机到完整2,000千克/小时连续零食生产线——我们根据您的产品、场地和生产目标进行配置。',
    ctaBtn1: '获取加工线推荐',
    ctaBtn2: '联系工程团队',
  },

  zh: {
    kicker: '休閒食品與食品加工',
    heroTitle: '休閒食品與食品加工線 — 從原材料到成品包裝',
    heroSubtitle: 'SunGene設計製造完整的休閒食品加工線，涵蓋油炸、烘烤、調味、冷卻、計量和包裝全流程。我們根據您的產品類型、產量目標和廠房佈局客製產線。',

    whoTitle: '適用客戶',
    whoItems: [
      { title: '休閒食品製造商', desc: '薯片、膨化食品、爆米花、餅乾、油條——連續式或批次加工線。' },
      { title: '堅果烘烤與加工商', desc: '花生、杏仁、腰果、葵花籽——烘烤滾筒或烤箱產線，配調味與包裝。' },
      { title: '寵物食品生產商', desc: '乾糧、烘焙零食和凍乾食品——食品級加工，衛生設計。' },
      { title: '新興零食品牌', desc: '從批次生產擴展至連續加工——我們設計可隨產量增長而擴展的產線。' },
    ],

    productsTitle: '我們加工的產品',
    productGroups: [
      { label: '油炸食品', items: ['薯片', '香蕉片', '油條', '膨化食品', '豬皮'] },
      { label: '烘烤產品', items: ['花生', '杏仁', '腰果', '種子', '咖啡豆（烘焙線）'] },
      { label: '裹衣與調味', items: ['芝士泡芙', '調味餅乾', '裹衣堅果', '調味薯片'] },
      { label: '其他食品加工', items: ['蝦片', '魚豆腐', '蔬菜片', '寵物糧顆粒'] },
    ],
    productsNote: '加工方式（油炸、烘烤還是烘焙）取決於您的產品及最終口感要求。我們根據您的目標產品特性進行推薦。',

    packagingTitle: '加工產量與規模選項',
    packagingItems: [
      { label: '加工產能', value: '從100公斤/小時試產線到2,000公斤/小時商業線' },
      { label: '包裝產量', value: '20–120袋/分鐘，取決於袋型和計量秤配置' },
      { label: '產線長度', value: '可配置——我們根據您的廠房平面圖進行設計' },
      { label: '自動化程度', value: '半自動（操作員監控）到全連續PLC控制' },
    ],
    packagingNote: '產線產能和自動化程度完全可配置——我們圍繞您的目標產量、產品和可用投資進行設計。',

    configurationsTitle: '可用配置',
    configurations: [
      { name: '連續油炸機', desc: 'PLC控制油溫。可調節皮帶速度以控制烹飪時間。單層或雙層皮帶。可配油過濾系統。100–2,000公斤/小時。' },
      { name: '批次油炸機', desc: '產能較小，投資較低。手動或半自動。適用於試產或特色產品。' },
      { name: '烤箱/旋轉滾筒烘烤機', desc: '適用於堅果、種子和乾烤產品。燃氣或電加熱。連續式或批次式。' },
      { name: '調味滾筒/轉鼓', desc: '將調味粉或油脂塗層施加到成品零食上。不鏽鋼滾筒配噴塗系統。可調轉速。' },
      { name: '冷卻輸送機（網帶）', desc: '油炸或烘焙後——常溫或強制風冷，降低產品包裝前的溫度。' },
      { name: '多頭秤+VFFS', desc: '高速組合計量秤+立式成型-充填-封口機，用於枕型袋包裝。40–120袋/分鐘。' },
      { name: '油脂過濾與回收系統', desc: '延長食用油使用壽命，保持產品品質。連續過濾並帶溫度監控。' },
      { name: '完整整合產線', desc: '從原料投入，經油炸/烘烤/調味/冷卻/計量/包裝的全線——PLC/HMI控制。' },
    ],

    decisionsTitle: '關鍵決策因素',
    decisions: [
      { factor: '產品類型', guide: '馬鈴薯/蔬菜 → 油炸機。堅果/種子 → 烘烤滾筒。膨化食品 → 烤箱+調味。' },
      { factor: '產量規模', guide: '< 200公斤/小時 → 批次設備。200–500公斤/小時 → 小型連續線。> 500公斤/小時 → 工業連續線。' },
      { factor: '烹飪方式', guide: '深油炸 → 油炸機。乾烤 → 滾筒或烤箱。氣炸/烘焙 → 對流烤箱。' },
      { factor: '油脂管理', guide: '大產量油炸 → 連續油脂過濾系統是保持品質和降低成本的必要配置。' },
      { factor: '包裝格式', guide: '枕型袋 → VFFS+多頭秤。站立袋 → 預製袋機。散裝 → 開口袋。' },
      { factor: '衛生與清潔', guide: '食品級不鏽鋼結構；油脂系統配CIP（就地清洗）接口；設有排水口和維護面板以便日常清潔。' },
    ],

    integrationTitle: '工藝整合',
    integrationDesc: '一條典型的完整休閒食品加工線（示例：油炸零食）：',
    integrationSteps: [
      '原料進料',
      '清洗/漂燙',
      '預乾燥',
      '連續油炸機',
      '控油輸送機',
      '冷卻輸送機',
      '調味滾筒',
      '多頭秤',
      'VFFS/袋裝機',
      '檢重秤',
      '金屬探測器',
      '日期打碼機',
      '裝箱機',
    ],
    integrationFooter: '並非所有步驟都適用於每種產品。我們根據您的具體產品和加工需求配置產線。',

    faqTitle: '常見問題',
    faq: [
      {
        q: '我可以先只購買油炸機，之後再添加包裝設備嗎？',
        a: '可以。我們設計可分階段擴展的產線。您可以先從核心烹飪設備入手，隨著產量增長再添加調味機、冷卻機和包裝機。我們確保機器接口相容未來整合。',
      },
      {
        q: '連續油炸機與批次油炸機有什麼區別？',
        a: '連續油炸機讓產品在移動皮帶上通過熱油——品質穩定，適合大產量（200公斤/小時以上）。批次油炸機每次處理一批——投資較低，對小批量或特色產品更靈活，但大規模時一致性較差。',
      },
      {
        q: '油炸機如何控制烹飪一致性？',
        a: '油溫由PLC控制，精度±2°C。皮帶速度控制烹飪時間。液位感測器維持穩定的油深。這些參數可在HMI中按產品儲存為配方。',
      },
      {
        q: '你們推薦什麼油脂過濾系統？',
        a: '對於產量超過200公斤/小時的連續油炸線，我們推薦配備精密過濾器（20–50微米）和顆粒清除輸送機的連續過濾裝置。這可將食用油使用壽命延長30–50%，並保持產品色澤一致性。',
      },
      {
        q: '同一條產線可以同時處理薯片和膨化零食嗎？',
        a: '部分可以。油炸機和冷卻輸送機可以處理這兩種產品，但調味系統（滾筒尺寸、噴塗速率）和包裝（計量秤尺寸、袋型）可能需要調整。我們針對主產品進行設計，並說明處理輔助產品所需的改動。',
      },
      {
        q: '取得零食產線報價需要提供哪些資訊？',
        a: '產品類型（薯片、堅果、膨化零食等）、目標產量（公斤/小時）、包裝格式和產量速度、可用廠房尺寸、國家/電壓，以及是否需要完整產線或特定設備。使用我們的推薦表單可獲得最快回應。',
      },
    ],

    relatedTitle: '相關應用與資源',
    relatedLinks: [
      { label: '食品加工設備', href: '/machinery/food-processing' },
      { label: '輸送與自動化', href: '/machinery/conveying-automation' },
      { label: '取得加工線推薦', href: '/recommend' },
    ],

    ctaTitle: '告訴我們您的零食產品和目標產量——我們來配置合適的加工線。',
    ctaSubtitle: '從批次油炸機到完整2,000公斤/小時連續零食生產線——我們根據您的產品、場地和生產目標進行配置。',
    ctaBtn1: '取得加工線推薦',
    ctaBtn2: '聯絡工程團隊',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function SnackProcessingLinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content.en
  const heroPhoto = PHOTO.machines.snackProcessingHero

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
    name: 'Snack & Food Processing Line',
    description: 'SunGene designs and manufactures complete snack processing lines including continuous fryers, batch fryers, rotary drum roasters, seasoning tumblers, cooling conveyors, multi-head weighers, VFFS packaging, and oil filtration systems for chips, nuts, extruded snacks, and pet food.',
    url: `${SITE_URL}/${lang}/machines/snack-processing-line`,
    image: [`${SITE_URL}${heroPhoto}`],
    brand: { '@type': 'Brand', name: 'SunGene' },
    manufacturer: { '@type': 'Organization', name: 'SunGene Co., LTD', url: SITE_URL },
    category: 'Snack & Food Processing Machinery',
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
      { '@type': 'ListItem', position: 3, name: 'Snack Processing Line', item: `${SITE_URL}/${lang}/machines/snack-processing-line` },
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
          alt: 'Snack food processing line with continuous fryer and packaging',
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

      {/* ── 3. Products We Process ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.productsTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ── 4. Processing Output & Scale Options ─────────────────────────────── */}
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
