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
import { buildPageMetadata, normalizeLang } from '@/lib/seo'
import { getResourceArticlesByMachine } from '@/lib/resourceArticles'

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
  en: 'Snack and food processing lines: continuous fryers, roasters, seasoning systems, cooling conveyors, multi-head weighers, and integrated packaging. For chips, nuts, snacks, and pet food.',
  cn: '休闲食品与食品加工线：连续油炸机、烘烤机、调味系统、冷却输送、多头秤与整合包装。适用于薯片、坚果、零食与宠物食品。',
  zh: '休閒食品與食品加工線：連續油炸機、烘烤機、調味系統、冷卻輸送、多頭秤與整合包裝。適用於薯片、堅果、零食與寵物食品。',
  fr: 'Lignes de transformation snacks/aliments : friteuses continues, torréfaction, assaisonnement, convoyeurs de refroidissement, peseuses multi-têtes et emballage intégré. Pour chips, noix, snacks, pet food.',
  es: 'Líneas de procesamiento: freidoras continuas, tostado, condimentación, enfriamiento, pesadoras multicabezal y empaque integrado. Para chips, frutos secos, snacks y pet food.',
  pt: 'Linhas de processamento: fritadeiras contínuas, torrefação, tempero, resfriamento, pesadoras multicabeçote e embalagem integrada. Para chips, nozes, snacks e pet food.',
  ko: '스낵/식품 가공 라인: 연속 튀김기, 로스팅, 시즈닝, 냉각 컨베이어, 멀티헤드 계량, 통합 포장. 칩·견과·스낵·펫푸드에 적용.',
  ja: 'スナック・食品加工ライン：連続フライヤー、焙煎、調味、冷却搬送、マルチヘッド計量、包装まで一体化。チップス、ナッツ、スナック、ペットフード向け。',
  ar: 'خطوط معالجة للوجبات الخفيفة والأغذية: قلايات مستمرة، تحميص، تتبيل، سيور تبريد، موازين متعددة الرؤوس وتعبئة مدمجة. لرقائق البطاطس والمكسرات والسناكات وأغذية الحيوانات الأليفة.',
  th: 'สายการผลิตขนมขบเคี้ยว/อาหาร: เครื่องทอดต่อเนื่อง เครื่องอบ ระบบปรุงรส ระบบทำความเย็น เครื่องชั่งหลายหัว และบรรจุภัณฑ์แบบรวม เหมาะกับมันฝรั่งทอด ถั่ว ขนม และอาหารสัตว์เลี้ยง',
  vi: 'Dây chuyền chế biến snack/thực phẩm: máy chiên liên tục, máy rang, hệ thống ướp gia vị, băng tải làm nguội, cân nhiều đầu và đóng gói tích hợp. Cho chips, hạt, snack và thức ăn thú cưng.',
  de: 'Snack- und Lebensmittelverarbeitungslinien: Durchlauffriteusen, Röstmaschinen, Würzsysteme, Kühlförderer, Mehrkopfwaagen und integrierte Verpackung. Für Chips, Nüsse, Snacks und Pet Food.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/snack-processing-line',
    type: 'website',
    keywords: [
      'snack processing line', 'continuous fryer', 'food processing line', 'roasting machine',
      'seasoning tumbler', 'snack production line', 'potato chip line', 'nut roasting',
      'VFFS multi-head weigher', 'Taiwan snack machine',
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
      { label: 'Snack Packing Machine Guide', href: '/resources/snack-packing' },
      { label: 'Semi-Auto vs Full-Auto Packaging Line', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: 'Food Processing Equipment Overview', href: '/machinery/food-processing' },
      { label: 'Get a Machine Recommendation', href: '/recommend' },
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
      { label: '零食包装机指南', href: '/resources/snack-packing' },
      { label: '半自动与全自动包装线对比', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: '食品加工设备概览', href: '/machinery/food-processing' },
      { label: '获取机器推荐', href: '/recommend' },
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
      { label: '零食包裝機指南', href: '/resources/snack-packing' },
      { label: '半自動與全自動包裝線比較', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: '食品加工設備概覽', href: '/machinery/food-processing' },
      { label: '取得機器推薦', href: '/recommend' },
    ],

    ctaTitle: '告訴我們您的零食產品和目標產量——我們來配置合適的加工線。',
    ctaSubtitle: '從批次油炸機到完整2,000公斤/小時連續零食生產線——我們根據您的產品、場地和生產目標進行配置。',
    ctaBtn1: '取得加工線推薦',
    ctaBtn2: '聯絡工程團隊',
  },

  fr: {
    kicker: 'TRANSFORMATION DES SNACKS ET ALIMENTS',
    heroTitle: 'Lignes de transformation des snacks et aliments — De la matière première à l\'emballage final',
    heroSubtitle: 'SunGene conçoit et fabrique des lignes de transformation complètes pour snacks couvrant la friture, la torréfaction, l\'assaisonnement, le refroidissement, le pesage et l\'emballage. Nous configurons la ligne selon votre type de produit, votre capacité cible et votre aménagement d\'usine.',

    whoTitle: 'À qui s\'adresse cette solution',
    whoItems: [
      { title: 'Fabricants de snacks', desc: 'Chips de pommes de terre, snacks extrudés, maïs soufflé, crackers, beignets — lignes de traitement continues ou par lots.' },
      { title: 'Torréfacteurs et transformateurs de fruits à coque', desc: 'Cacahuètes, amandes, noix de cajou, graines de tournesol — lignes de torréfaction à tambour ou au four avec assaisonnement et emballage.' },
      { title: 'Producteurs d\'aliments pour animaux', desc: 'Croquettes sèches, friandises cuites et snacks lyophilisés — transformation aux normes alimentaires avec conception hygiénique.' },
      { title: 'Marques de snacks émergentes', desc: 'Passage de la production par lots à la production continue — nous concevons des lignes qui évoluent avec votre volume de production.' },
    ],

    productsTitle: 'Produits que nous transformons',
    productGroups: [
      { label: 'Snacks frits', items: ['Chips de pommes de terre', 'Chips de banane', 'Bâtonnets de pâte frite', 'Snacks extrudés', 'Couennes de porc'] },
      { label: 'Produits torréfiés', items: ['Cacahuètes', 'Amandes', 'Noix de cajou', 'Graines', 'Grains de café (ligne de torréfaction)'] },
      { label: 'Enrobés et assaisonnés', items: ['Soufflés au fromage', 'Crackers assaisonnés', 'Fruits à coque enrobés', 'Chips aromatisées'] },
      { label: 'Autres transformations alimentaires', items: ['Crackers aux crevettes', 'Tofu de poisson', 'Chips de légumes', 'Croquettes pour animaux'] },
    ],
    productsNote: 'La méthode de transformation (friture, torréfaction ou cuisson) dépend de votre produit et de la texture finale souhaitée. Nous recommandons en fonction des caractéristiques de votre produit cible.',

    packagingTitle: 'Capacité de production et options d\'échelle',
    packagingItems: [
      { label: 'Capacité de traitement', value: 'De 100 kg/h pour les lignes pilotes à 2 000 kg/h pour les lignes commerciales' },
      { label: 'Cadence d\'emballage', value: '20–120 sachets/min selon le format de sachet et la configuration de la peseuse' },
      { label: 'Longueur de ligne', value: 'Configurable — nous concevons selon votre plan d\'usine' },
      { label: 'Automatisation', value: 'Semi-automatique (supervisé par opérateur) à entièrement continu piloté par PLC' },
    ],
    packagingNote: 'La capacité de ligne et le niveau d\'automatisation sont entièrement configurables — nous concevons en fonction de votre production cible, de votre produit et de votre investissement disponible.',

    configurationsTitle: 'Configurations disponibles',
    configurations: [
      { name: 'Friteuse continue', desc: 'Température d\'huile régulée par PLC. Vitesse de tapis réglable pour contrôler le temps de cuisson. Tapis simple ou double. Système de filtration d\'huile disponible. 100–2 000 kg/h.' },
      { name: 'Friteuse discontinue', desc: 'Capacité plus faible, investissement réduit. Manuelle ou semi-automatique. Pour la production pilote ou les produits spéciaux.' },
      { name: 'Four de torréfaction / Torréfacteur à tambour rotatif', desc: 'Pour les fruits à coque, les graines et les produits torréfiés à sec. Chauffage au gaz ou électrique. Continu ou par lots.' },
      { name: 'Tambour d\'assaisonnement', desc: 'Applique une poudre aromatisante ou un enrobage d\'huile sur le snack fini. Tambour inox avec système de pulvérisation. Vitesse de rotation réglable.' },
      { name: 'Convoyeur de refroidissement (bande à mailles)', desc: 'Après friture ou cuisson — refroidissement à l\'air ambiant ou forcé pour abaisser la température du produit avant emballage.' },
      { name: 'Peseuse multitêtes + VFFS', desc: 'Peseuse combinée haute vitesse + machine verticale de formage-remplissage-scellage pour sachets coussin. 40–120 sachets/min.' },
      { name: 'Système de filtration et récupération d\'huile', desc: 'Prolonge la durée de vie de l\'huile de cuisson et maintient la qualité du produit. Filtration continue avec surveillance de la température.' },
      { name: 'Ligne intégrée complète', desc: 'Ligne complète depuis l\'alimentation en matières premières jusqu\'à la friture/torréfaction/assaisonnement/refroidissement/pesage/emballage — pilotée par PLC/HMI.' },
    ],

    decisionsTitle: 'Facteurs de décision clés',
    decisions: [
      { factor: 'Type de produit', guide: 'Pomme de terre/légume → friteuse. Fruits à coque/graines → tambour de torréfaction. Extrudé → four de cuisson + assaisonnement.' },
      { factor: 'Volume de production', guide: '< 200 kg/h → équipement discontinu. 200–500 kg/h → ligne continue de petite taille. > 500 kg/h → ligne continue industrielle.' },
      { factor: 'Méthode de cuisson', guide: 'Friture profonde → friteuse. Torréfaction sèche → tambour ou four. Friture à l\'air/cuisson → four à convection.' },
      { factor: 'Gestion de l\'huile', guide: 'Friture à grand volume → système de filtration d\'huile continu indispensable pour maintenir la qualité et réduire les coûts.' },
      { factor: 'Format d\'emballage', guide: 'Sachets coussin → VFFS + peseuse multitêtes. Pochettes debout → machine à pochettes préformées. Vrac → sac à ouverture.' },
      { factor: 'Hygiène et nettoyage', guide: 'Construction en inox alimentaire ; ports CIP (nettoyage en place) pour les systèmes à huile ; drains et panneaux d\'accès pour le nettoyage quotidien.' },
    ],

    integrationTitle: 'Intégration du processus',
    integrationDesc: 'Une ligne de transformation complète typique pour snacks (exemple : snack frit) :',
    integrationSteps: [
      'Alimentation en matière première',
      'Lavage / blanchiment',
      'Pré-séchage',
      'Friteuse continue',
      'Convoyeur d\'égouttage d\'huile',
      'Convoyeur de refroidissement',
      'Tambour d\'assaisonnement',
      'Peseuse multitêtes',
      'VFFS / Machine à sachets',
      'Vérificateur de poids',
      'Détecteur de métaux',
      'Codeur de date',
      'Encaisseuse',
    ],
    integrationFooter: 'Toutes les étapes ne sont pas requises pour chaque produit. Nous configurons la ligne en fonction de votre produit spécifique et de vos exigences de traitement.',

    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Puis-je commencer avec seulement une friteuse et ajouter l\'emballage plus tard ?',
        a: 'Oui. Nous concevons des lignes pouvant évoluer par étapes. Vous pouvez démarrer avec l\'équipement de cuisson de base et ajouter les machines d\'assaisonnement, de refroidissement et d\'emballage au fur et à mesure de l\'augmentation de votre volume. Nous veillons à la compatibilité des interfaces pour une intégration future.',
      },
      {
        q: 'Quelle est la différence entre une friteuse continue et une friteuse discontinue ?',
        a: 'Une friteuse continue fait passer le produit sur un tapis mobile dans de l\'huile chaude — qualité constante, adaptée aux grands volumes (200 kg/h et plus). Une friteuse discontinue traite une charge à la fois — investissement moindre, plus flexible pour les petits lots ou les produits spéciaux, mais moins constante à grande échelle.',
      },
      {
        q: 'Comment contrôlez-vous la constance de cuisson avec une friteuse ?',
        a: 'La température de l\'huile est régulée par PLC avec une précision de ±2°C. La vitesse du tapis contrôle le temps de cuisson. Des capteurs de niveau maintiennent une profondeur d\'huile constante. Ces paramètres peuvent être enregistrés comme recettes par produit dans l\'HMI.',
      },
      {
        q: 'Quel système de filtration d\'huile recommandez-vous ?',
        a: 'Pour les lignes de friture continue produisant plus de 200 kg/h, nous recommandons une unité de filtration continue avec un filtre fin (20–50 microns) et un convoyeur d\'élimination des particules. Cela prolonge la durée de vie de l\'huile de 30 à 50 % et maintient la constance de couleur du produit.',
      },
      {
        q: 'La même ligne peut-elle traiter à la fois des chips de pommes de terre et des snacks extrudés ?',
        a: 'En partie. La friteuse et le convoyeur de refroidissement peuvent traiter les deux, mais le système d\'assaisonnement (taille du tambour, débit de pulvérisation) et l\'emballage (taille de la peseuse, format de sachet) peuvent nécessiter des ajustements. Nous concevons pour un produit principal et précisons les adaptations nécessaires pour les produits secondaires.',
      },
      {
        q: 'Quelles informations dois-je fournir pour obtenir un devis pour une ligne de snacks ?',
        a: 'Type de produit (chips, fruits à coque, snack extrudé, etc.), production cible (kg/h), format d\'emballage et vitesse de production, dimensions de l\'espace disponible, pays/tension, et si vous avez besoin d\'une ligne complète ou d\'équipements spécifiques. Utilisez notre formulaire de recommandation pour une réponse rapide.',
      },
    ],

    relatedTitle: 'Applications et ressources associées',
    relatedLinks: [
      { label: 'Guide machines d\'emballage pour snacks', href: '/resources/snack-packing' },
      { label: 'Ligne semi-auto vs ligne entièrement automatisée', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: 'Aperçu des équipements de transformation alimentaire', href: '/machinery/food-processing' },
      { label: 'Obtenir une recommandation de machine', href: '/recommend' },
    ],

    ctaTitle: 'Décrivez votre produit snack et votre production cible — nous configurerons la ligne de transformation adaptée.',
    ctaSubtitle: 'Des friteuses discontinues aux lignes de snacks continues complètes à 2 000 kg/h — nous configurons selon votre produit, votre espace et vos objectifs de production.',
    ctaBtn1: 'Obtenir une recommandation de ligne',
    ctaBtn2: 'Contacter l\'ingénierie',
  },

  es: {
    kicker: 'PROCESAMIENTO DE SNACKS Y ALIMENTOS',
    heroTitle: 'Líneas de procesamiento de snacks y alimentos — De la materia prima al empaque final',
    heroSubtitle: 'SunGene diseña y fabrica líneas completas de procesamiento de snacks que incluyen fritura, tostado, condimentación, enfriamiento, pesado y empaque. Configuramos la línea según su tipo de producto, objetivo de producción y distribución de planta.',

    whoTitle: 'A quién va dirigido',
    whoItems: [
      { title: 'Fabricantes de snacks', desc: 'Papas fritas, snacks extrudidos, maíz inflado, galletas, churros — líneas de procesamiento continuo o por lotes.' },
      { title: 'Tostadores y procesadores de frutos secos', desc: 'Cacahuetes, almendras, anacardos, semillas de girasol — líneas de tostado en tambor u horno con condimentación y empaque.' },
      { title: 'Productores de alimentos para mascotas', desc: 'Croquetas secas, golosinas horneadas y snacks liofilizados — procesamiento de calidad alimentaria con diseño higiénico.' },
      { title: 'Marcas emergentes de snacks', desc: 'Escalado de producción por lotes a procesamiento continuo — diseñamos líneas que crecen con su volumen de producción.' },
    ],

    productsTitle: 'Productos que procesamos',
    productGroups: [
      { label: 'Snacks fritos', items: ['Papas fritas', 'Chips de plátano', 'Palitos de masa frita', 'Snacks extrudidos', 'Chicharrones'] },
      { label: 'Productos tostados', items: ['Cacahuetes', 'Almendras', 'Anacardos', 'Semillas', 'Granos de café (línea de tostado)'] },
      { label: 'Rebozados y condimentados', items: ['Palomitas de queso', 'Galletas condimentadas', 'Frutos secos rebozados', 'Chips saborizados'] },
      { label: 'Otros procesamientos alimentarios', items: ['Crackers de gambas', 'Tofu de pescado', 'Chips de vegetales', 'Croquetas para mascotas'] },
    ],
    productsNote: 'El método de procesamiento (fritura, tostado o cocción) depende de su producto y del resultado de textura final. Recomendamos según las características de su producto objetivo.',

    packagingTitle: 'Capacidad de producción y opciones de escala',
    packagingItems: [
      { label: 'Capacidad de procesamiento', value: 'Desde líneas piloto de 100 kg/h hasta líneas comerciales de 2.000 kg/h' },
      { label: 'Producción de empaques', value: '20–120 bolsas/min según el formato de bolsa y la configuración de la pesadora' },
      { label: 'Longitud de línea', value: 'Configurable — diseñamos para adaptarnos al plano de su planta' },
      { label: 'Automatización', value: 'Semiautomático (supervisado por operador) hasta totalmente continuo controlado por PLC' },
    ],
    packagingNote: 'La capacidad de línea y el nivel de automatización son totalmente configurables — diseñamos en función de su producción objetivo, producto e inversión disponible.',

    configurationsTitle: 'Configuraciones disponibles',
    configurations: [
      { name: 'Freidora continua', desc: 'Temperatura de aceite controlada por PLC. Velocidad de banda ajustable para controlar el tiempo de cocción. Banda simple o doble. Sistema de filtración de aceite disponible. 100–2.000 kg/h.' },
      { name: 'Freidora por lotes', desc: 'Menor capacidad, menor inversión. Manual o semiautomática. Para producción piloto o productos especiales.' },
      { name: 'Horno tostador / Tostador de tambor rotatorio', desc: 'Para frutos secos, semillas y productos tostados en seco. Calor por gas o eléctrico. Continuo o por lotes.' },
      { name: 'Tambor condimentador', desc: 'Aplica polvo aromatizante o recubrimiento de aceite al snack terminado. Tambor de acero inoxidable con sistema de aspersión. Velocidad de rotación ajustable.' },
      { name: 'Transportador de enfriamiento (banda de malla)', desc: 'Tras la fritura o cocción — enfriamiento ambiental o por aire forzado para reducir la temperatura del producto antes del empaque.' },
      { name: 'Pesadora multicabezal + VFFS', desc: 'Pesadora combinada de alta velocidad + máquina vertical de formado-llenado-sellado para bolsas almohadilla. 40–120 bolsas/min.' },
      { name: 'Sistema de filtración y recuperación de aceite', desc: 'Prolonga la vida útil del aceite de cocina y mantiene la calidad del producto. Filtración continua con monitoreo de temperatura.' },
      { name: 'Línea integrada completa', desc: 'Línea completa desde la alimentación de materia prima hasta fritura/tostado/condimentación/enfriamiento/pesado/empaque — controlada por PLC/HMI.' },
    ],

    decisionsTitle: 'Factores clave de decisión',
    decisions: [
      { factor: 'Tipo de producto', guide: 'Papa/vegetal → freidora. Frutos secos/semillas → tambor tostador. Extrudido → horno de cocción + condimentación.' },
      { factor: 'Escala de producción', guide: '< 200 kg/h → equipo por lotes. 200–500 kg/h → línea continua pequeña. > 500 kg/h → línea continua industrial.' },
      { factor: 'Método de cocción', guide: 'Fritura profunda → freidora. Tostado seco → tambor u horno. Freidora de aire/cocción → horno de convección.' },
      { factor: 'Gestión de aceite', guide: 'Fritura de alto volumen → sistema de filtración de aceite continuo esencial para mantener calidad y reducir costos.' },
      { factor: 'Formato de empaque', guide: 'Bolsas almohadilla → VFFS + pesadora multicabezal. Bolsas de pie → máquina de bolsas preformadas. Granel → bolsa de boca abierta.' },
      { factor: 'Higiene y limpieza', guide: 'Construcción en acero inoxidable de grado alimentario; puertos CIP para sistemas de aceite; drenajes y paneles de acceso para limpieza diaria.' },
    ],

    integrationTitle: 'Integración del proceso',
    integrationDesc: 'Una línea de procesamiento completa típica para snacks (ejemplo: snack frito):',
    integrationSteps: [
      'Alimentación de materia prima',
      'Lavado / escaldado',
      'Presecado',
      'Freidora continua',
      'Transportador de escurrido de aceite',
      'Transportador de enfriamiento',
      'Tambor condimentador',
      'Pesadora multicabezal',
      'VFFS / Máquina de bolsas',
      'Verificador de peso',
      'Detector de metales',
      'Codificador de fecha',
      'Encajadora',
    ],
    integrationFooter: 'No todos los pasos son necesarios para cada producto. Configuramos la línea según su producto específico y requisitos de procesamiento.',

    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Puedo empezar solo con una freidora y agregar el empaque más adelante?',
        a: 'Sí. Diseñamos líneas que pueden crecer por etapas. Puede comenzar con el equipo de cocción principal y agregar máquinas de condimentación, enfriamiento y empaque a medida que aumenta su volumen. Garantizamos la compatibilidad de interfaces para integración futura.',
      },
      {
        q: '¿Cuál es la diferencia entre una freidora continua y una freidora por lotes?',
        a: 'Una freidora continua hace pasar el producto en una banda móvil a través del aceite caliente — calidad constante, adecuada para altos volúmenes (200 kg/h o más). Una freidora por lotes procesa una carga a la vez — menor inversión, más flexible para lotes pequeños o productos especiales, pero menos consistente a gran escala.',
      },
      {
        q: '¿Cómo controlan la consistencia de cocción con una freidora?',
        a: 'La temperatura del aceite está controlada por PLC con una precisión de ±2°C. La velocidad de la banda controla el tiempo de cocción. Los sensores de nivel mantienen una profundidad de aceite constante. Estos parámetros se pueden guardar como recetas por producto en el HMI.',
      },
      {
        q: '¿Qué sistema de filtración de aceite recomiendan?',
        a: 'Para líneas de fritura continua con producción superior a 200 kg/h, recomendamos una unidad de filtración continua con filtro fino (20–50 micrones) y transportador de eliminación de partículas. Esto prolonga la vida útil del aceite en un 30–50% y mantiene la consistencia de color del producto.',
      },
      {
        q: '¿Puede la misma línea procesar tanto papas fritas como snacks extrudidos?',
        a: 'Parcialmente. La freidora y el transportador de enfriamiento pueden manejar ambos, pero el sistema de condimentación (tamaño del tambor, velocidad de aspersión) y el empaque (tamaño de la pesadora, formato de bolsa) pueden necesitar ajustes. Diseñamos para un producto principal y especificamos las adaptaciones necesarias para productos secundarios.',
      },
      {
        q: '¿Qué información necesito proporcionar para obtener un presupuesto para una línea de snacks?',
        a: 'Tipo de producto (papa frita, fruto seco, snack extrudido, etc.), producción objetivo (kg/h), formato de empaque y velocidad de producción, dimensiones del espacio disponible, país/voltaje, y si necesita una línea completa o equipos específicos. Use nuestro formulario de recomendación para la respuesta más rápida.',
      },
    ],

    relatedTitle: 'Aplicaciones y recursos relacionados',
    relatedLinks: [
      { label: 'Guía de máquinas envasadoras de snacks', href: '/resources/snack-packing' },
      { label: 'Línea semiautomática vs totalmente automática', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: 'Descripción general de equipos de procesamiento de alimentos', href: '/machinery/food-processing' },
      { label: 'Obtener una recomendación de máquina', href: '/recommend' },
    ],

    ctaTitle: 'Describa su producto snack y producción objetivo — configuraremos la línea de procesamiento adecuada.',
    ctaSubtitle: 'Desde freidoras por lotes hasta líneas continuas completas de 2.000 kg/h — configuramos según su producto, espacio y objetivos de producción.',
    ctaBtn1: 'Obtener una recomendación de línea',
    ctaBtn2: 'Hablar con ingeniería',
  },

  pt: {
    kicker: 'PROCESSAMENTO DE SNACKS E ALIMENTOS',
    heroTitle: 'Linhas de processamento de snacks e alimentos — Da matéria-prima à embalagem final',
    heroSubtitle: 'A SunGene projeta e fabrica linhas completas de processamento de snacks cobrindo fritura, torrefação, tempero, resfriamento, pesagem e embalagem. Configuramos a linha de acordo com seu tipo de produto, meta de produção e layout da fábrica.',

    whoTitle: 'Para quem é esta solução',
    whoItems: [
      { title: 'Fabricantes de snacks', desc: 'Batatas fritas, snacks extrudados, milho estourado, biscoitos, massas fritas — linhas de processamento contínuo ou em lotes.' },
      { title: 'Torrefadores e processadores de castanhas', desc: 'Amendoins, amêndoas, castanhas de caju, sementes de girassol — linhas de torrefação em tambor ou forno com tempero e embalagem.' },
      { title: 'Produtores de alimentos para pets', desc: 'Ração seca, petiscos assados e snacks liofilizados — processamento em grau alimentício com design higiênico.' },
      { title: 'Marcas emergentes de snacks', desc: 'Expansão de produção em lotes para processamento contínuo — projetamos linhas que crescem com seu volume de produção.' },
    ],

    productsTitle: 'Produtos que processamos',
    productGroups: [
      { label: 'Snacks fritos', items: ['Batatas fritas', 'Chips de banana', 'Palitos de massa frita', 'Snacks extrudados', 'Torresmo'] },
      { label: 'Produtos torrados', items: ['Amendoins', 'Amêndoas', 'Castanhas de caju', 'Sementes', 'Grãos de café (linha de torrefação)'] },
      { label: 'Revestidos e temperados', items: ['Puffs de queijo', 'Biscoitos temperados', 'Castanhas revestidas', 'Chips aromatizados'] },
      { label: 'Outros processamentos alimentícios', items: ['Crackers de camarão', 'Tofu de peixe', 'Chips de legumes', 'Ração granulada para pets'] },
    ],
    productsNote: 'O método de processamento (fritura, torrefação ou assamento) depende do seu produto e da textura final desejada. Recomendamos com base nas características do seu produto-alvo.',

    packagingTitle: 'Capacidade de produção e opções de escala',
    packagingItems: [
      { label: 'Capacidade de processamento', value: 'De linhas piloto de 100 kg/h a linhas comerciais de 2.000 kg/h' },
      { label: 'Produção de embalagens', value: '20–120 sacos/min dependendo do formato de saco e da configuração da pesadora' },
      { label: 'Comprimento da linha', value: 'Configurável — projetamos para se adequar ao seu plano de fábrica' },
      { label: 'Automação', value: 'Semiautomático (monitorado pelo operador) a totalmente contínuo controlado por PLC' },
    ],
    packagingNote: 'A capacidade da linha e o nível de automação são totalmente configuráveis — projetamos em torno da sua produção-alvo, produto e investimento disponível.',

    configurationsTitle: 'Configurações disponíveis',
    configurations: [
      { name: 'Fritadeira contínua', desc: 'Temperatura do óleo controlada por PLC. Velocidade da esteira ajustável para controle do tempo de cozimento. Esteira simples ou dupla. Sistema de filtração de óleo disponível. 100–2.000 kg/h.' },
      { name: 'Fritadeira em lotes', desc: 'Menor capacidade, menor investimento. Manual ou semiautomática. Para produção piloto ou produtos especiais.' },
      { name: 'Forno de torrefação / Torrefador de tambor rotativo', desc: 'Para castanhas, sementes e produtos torrados a seco. Calor a gás ou elétrico. Contínuo ou em lotes.' },
      { name: 'Tambor de tempero', desc: 'Aplica pó aromatizante ou revestimento de óleo ao snack finalizado. Tambor de aço inoxidável com sistema de aspersão. Velocidade de rotação ajustável.' },
      { name: 'Transportador de resfriamento (esteira de malha)', desc: 'Após fritura ou assamento — resfriamento ambiente ou por ar forçado para reduzir a temperatura do produto antes da embalagem.' },
      { name: 'Pesadora multicabeçote + VFFS', desc: 'Pesadora combinada de alta velocidade + máquina vertical de formação-enchimento-selagem para embalagens tipo travesseiro. 40–120 sacos/min.' },
      { name: 'Sistema de filtração e recuperação de óleo', desc: 'Prolonga a vida útil do óleo de cozinha e mantém a qualidade do produto. Filtração contínua com monitoramento de temperatura.' },
      { name: 'Linha integrada completa', desc: 'Linha completa desde a alimentação de matéria-prima passando por fritura/torrefação/tempero/resfriamento/pesagem/embalagem — controlada por PLC/HMI.' },
    ],

    decisionsTitle: 'Fatores-chave de decisão',
    decisions: [
      { factor: 'Tipo de produto', guide: 'Batata/vegetal → fritadeira. Castanhas/sementes → tambor de torrefação. Extrudado → forno de assamento + tempero.' },
      { factor: 'Escala de produção', guide: '< 200 kg/h → equipamento em lotes. 200–500 kg/h → linha contínua pequena. > 500 kg/h → linha contínua industrial.' },
      { factor: 'Método de cozimento', guide: 'Fritura profunda → fritadeira. Torrefação seca → tambor ou forno. Airfryer/assamento → forno de convecção.' },
      { factor: 'Gestão de óleo', guide: 'Fritura de alto volume → sistema de filtração de óleo contínuo essencial para manter qualidade e reduzir custos.' },
      { factor: 'Formato de embalagem', guide: 'Sacos travesseiro → VFFS + pesadora multicabeçote. Sachês em pé → máquina de sachês pré-formados. Granel → saco de boca aberta.' },
      { factor: 'Higiene e limpeza', guide: 'Construção em aço inoxidável de grau alimentício; portas CIP para sistemas de óleo; ralos e painéis de acesso para limpeza diária.' },
    ],

    integrationTitle: 'Integração do processo',
    integrationDesc: 'Uma linha de processamento completa típica para snacks (exemplo: snack frito):',
    integrationSteps: [
      'Alimentação de matéria-prima',
      'Lavagem / branqueamento',
      'Pré-secagem',
      'Fritadeira contínua',
      'Transportador de drenagem de óleo',
      'Transportador de resfriamento',
      'Tambor de tempero',
      'Pesadora multicabeçote',
      'VFFS / Máquina de sacos',
      'Verificador de peso',
      'Detector de metais',
      'Codificador de data',
      'Encaixotadora',
    ],
    integrationFooter: 'Nem todas as etapas são necessárias para cada produto. Configuramos a linha com base no seu produto específico e nos requisitos de processamento.',

    faqTitle: 'Perguntas frequentes',
    faq: [
      {
        q: 'Posso começar apenas com uma fritadeira e adicionar a embalagem depois?',
        a: 'Sim. Projetamos linhas que podem crescer em etapas. Você pode começar com o equipamento de cozimento principal e adicionar máquinas de tempero, resfriamento e embalagem à medida que seu volume aumenta. Garantimos a compatibilidade das interfaces para integração futura.',
      },
      {
        q: 'Qual é a diferença entre uma fritadeira contínua e uma fritadeira em lotes?',
        a: 'Uma fritadeira contínua faz o produto passar em uma esteira móvel pelo óleo quente — qualidade constante, adequada para altos volumes (200 kg/h ou mais). Uma fritadeira em lotes processa uma carga de cada vez — menor investimento, mais flexível para pequenos lotes ou produtos especiais, mas menos consistente em escala.',
      },
      {
        q: 'Como vocês controlam a consistência de cozimento com uma fritadeira?',
        a: 'A temperatura do óleo é controlada por PLC com precisão de ±2°C. A velocidade da esteira controla o tempo de cozimento. Sensores de nível mantêm a profundidade constante do óleo. Esses parâmetros podem ser salvos como receitas por produto no HMI.',
      },
      {
        q: 'Qual sistema de filtração de óleo vocês recomendam?',
        a: 'Para linhas de fritura contínua com produção superior a 200 kg/h, recomendamos uma unidade de filtração contínua com filtro fino (20–50 mícrons) e transportador de remoção de partículas. Isso prolonga a vida útil do óleo em 30–50% e mantém a consistência de cor do produto.',
      },
      {
        q: 'A mesma linha pode processar tanto batatas fritas quanto snacks extrudados?',
        a: 'Parcialmente. A fritadeira e o transportador de resfriamento podem lidar com ambos, mas o sistema de tempero (tamanho do tambor, taxa de aspersão) e a embalagem (tamanho da pesadora, formato do saco) podem precisar de ajustes. Projetamos para um produto principal e especificamos as adaptações necessárias para produtos secundários.',
      },
      {
        q: 'Quais informações preciso fornecer para obter um orçamento para uma linha de snacks?',
        a: 'Tipo de produto (batata frita, castanha, snack extrudado, etc.), produção-alvo (kg/h), formato de embalagem e velocidade de produção, dimensões do espaço disponível, país/tensão, e se precisa de uma linha completa ou equipamentos específicos. Use nosso formulário de recomendação para a resposta mais rápida.',
      },
    ],

    relatedTitle: 'Aplicações e recursos relacionados',
    relatedLinks: [
      { label: 'Guia de máquinas de embalagem de snacks', href: '/resources/snack-packing' },
      { label: 'Linha semiautomática vs totalmente automática', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: 'Visão geral de equipamentos de processamento de alimentos', href: '/machinery/food-processing' },
      { label: 'Obter uma recomendação de máquina', href: '/recommend' },
    ],

    ctaTitle: 'Descreva seu produto snack e produção-alvo — configuraremos a linha de processamento certa.',
    ctaSubtitle: 'De fritadeiras em lotes a linhas contínuas completas de 2.000 kg/h — configuramos de acordo com seu produto, espaço e metas de produção.',
    ctaBtn1: 'Obter uma recomendação de linha',
    ctaBtn2: 'Falar com engenharia',
  },

  ko: {
    kicker: '스낵 및 식품 가공',
    heroTitle: '스낵 및 식품 가공 라인 — 원자재에서 완성 포장까지',
    heroSubtitle: 'SunGene은 튀김, 로스팅, 시즈닝, 냉각, 계량 및 포장을 포함하는 완전한 스낵 가공 라인을 설계하고 제조합니다. 제품 유형, 생산 목표 및 공장 레이아웃에 맞춰 라인을 구성합니다.',

    whoTitle: '대상 고객',
    whoItems: [
      { title: '스낵 제조업체', desc: '감자칩, 압출 스낵, 팝콘, 크래커, 튀긴 반죽 — 연속식 또는 배치식 가공 라인.' },
      { title: '견과류 로스터 및 가공업체', desc: '땅콩, 아몬드, 캐슈넛, 해바라기씨 — 드럼 또는 오븐 로스팅 라인(시즈닝 및 포장 포함).' },
      { title: '반려동물 식품 생산업체', desc: '건식 사료, 구운 간식, 동결건조 스낵 — 식품 등급 가공 및 위생 설계.' },
      { title: '신흥 스낵 브랜드', desc: '배치 생산에서 연속 가공으로 확장 — 생산량 증가에 맞춰 성장하는 라인을 설계합니다.' },
    ],

    productsTitle: '가공 제품',
    productGroups: [
      { label: '튀긴 스낵', items: ['감자칩', '바나나칩', '꽈배기', '압출 스낵', '돼지껍데기'] },
      { label: '로스팅 제품', items: ['땅콩', '아몬드', '캐슈넛', '씨앗류', '커피 원두 (로스팅 라인)'] },
      { label: '코팅 및 시즈닝', items: ['치즈 퍼프', '시즈닝 크래커', '코팅 견과류', '풍미 감자칩'] },
      { label: '기타 식품 가공', items: ['새우 크래커', '어묵 두부', '채소칩', '반려동물 사료 알갱이'] },
    ],
    productsNote: '가공 방식(튀김, 로스팅, 베이킹)은 제품 및 최종 식감 요구사항에 따라 달라집니다. 목표 제품 특성에 따라 권장 방식을 제안합니다.',

    packagingTitle: '가공 생산량 및 규모 옵션',
    packagingItems: [
      { label: '가공 용량', value: '100 kg/hr 파일럿 라인부터 2,000 kg/hr 상업용 라인까지' },
      { label: '포장 생산량', value: '봉지 형식 및 계량기 구성에 따라 분당 20–120봉지' },
      { label: '라인 길이', value: '구성 가능 — 공장 도면에 맞춰 설계' },
      { label: '자동화', value: '반자동(작업자 감시)부터 완전 연속 PLC 제어까지' },
    ],
    packagingNote: '라인 용량과 자동화 수준은 완전히 구성 가능합니다 — 목표 생산량, 제품 및 가용 투자에 맞춰 설계합니다.',

    configurationsTitle: '사용 가능한 구성',
    configurations: [
      { name: '연속 튀김기', desc: 'PLC 제어 오일 온도. 조리 시간 제어를 위한 조절 가능한 벨트 속도. 단층 또는 이중층 벨트. 오일 여과 시스템 제공 가능. 100–2,000 kg/hr.' },
      { name: '배치 튀김기', desc: '소용량, 낮은 투자비. 수동 또는 반자동. 파일럿 생산 또는 특수 제품용.' },
      { name: '로스팅 오븐 / 회전 드럼 로스터', desc: '견과류, 씨앗류 및 건식 로스팅 제품용. 가스 또는 전기 가열. 연속식 또는 배치식.' },
      { name: '시즈닝 텀블러 / 드럼', desc: '완성된 스낵에 풍미 분말 또는 오일 코팅 적용. 분사 시스템이 있는 스테인리스 드럼. 조절 가능한 회전 속도.' },
      { name: '냉각 컨베이어 (메시 벨트)', desc: '튀김 또는 베이킹 후 — 포장 전 제품 온도를 낮추기 위한 상온 또는 강제 공기 냉각.' },
      { name: '멀티헤드 계량기 + VFFS', desc: '고속 조합 계량기 + 수직 성형-충진-밀봉기(베개형 봉지 포장). 분당 40–120봉지.' },
      { name: '오일 여과 및 회수 시스템', desc: '식용유 수명 연장 및 제품 품질 유지. 온도 모니터링이 포함된 연속 여과.' },
      { name: '완전 통합 라인', desc: '원자재 투입부터 튀김/로스팅/시즈닝/냉각/계량/포장까지 전체 라인 — PLC/HMI 제어.' },
    ],

    decisionsTitle: '주요 결정 요소',
    decisions: [
      { factor: '제품 유형', guide: '감자/채소 → 튀김기. 견과류/씨앗류 → 로스팅 드럼. 압출 스낵 → 베이킹 오븐 + 시즈닝.' },
      { factor: '생산 규모', guide: '< 200 kg/hr → 배치 장비. 200–500 kg/hr → 소형 연속 라인. > 500 kg/hr → 산업용 연속 라인.' },
      { factor: '조리 방법', guide: '딥프라이 → 튀김기. 건식 로스팅 → 드럼 또는 오븐. 에어프라이/베이킹 → 대류 오븐.' },
      { factor: '오일 관리', guide: '대용량 튀김 → 품질 유지 및 비용 절감을 위한 연속 오일 여과 시스템 필수.' },
      { factor: '포장 형식', guide: '베개형 봉지 → VFFS + 멀티헤드 계량기. 스탠드업 파우치 → 프리메이드 파우치 기계. 벌크 → 개방형 봉지.' },
      { factor: '위생 및 청소', guide: '식품 등급 스테인리스 구조; 오일 시스템용 CIP(현장 세척) 포트; 일상 청소를 위한 배수구 및 점검 패널.' },
    ],

    integrationTitle: '공정 통합',
    integrationDesc: '전형적인 완전한 스낵 가공 라인 (예: 튀김 스낵):',
    integrationSteps: [
      '원자재 투입',
      '세척 / 데치기',
      '예비 건조',
      '연속 튀김기',
      '오일 배출 컨베이어',
      '냉각 컨베이어',
      '시즈닝 텀블러',
      '멀티헤드 계량기',
      'VFFS / 파우치 기계',
      '중량 검사기',
      '금속 탐지기',
      '날짜 인쇄기',
      '케이스 포장기',
    ],
    integrationFooter: '모든 단계가 모든 제품에 필요한 것은 아닙니다. 귀사의 특정 제품 및 가공 요구사항에 맞춰 라인을 구성합니다.',

    faqTitle: '자주 묻는 질문',
    faq: [
      {
        q: '튀김기만으로 시작하고 나중에 포장 설비를 추가할 수 있나요?',
        a: '네. 저희는 단계적으로 성장할 수 있는 라인을 설계합니다. 핵심 조리 장비로 시작하여 생산량이 증가함에 따라 시즈닝, 냉각 및 포장 기계를 추가할 수 있습니다. 향후 통합을 위해 기계 인터페이스 호환성을 보장합니다.',
      },
      {
        q: '연속 튀김기와 배치 튀김기의 차이점은 무엇인가요?',
        a: '연속 튀김기는 제품을 이동 벨트를 통해 뜨거운 오일 속으로 통과시킵니다 — 일관된 품질, 대용량(200 kg/hr 이상)에 적합합니다. 배치 튀김기는 한 번에 한 로드씩 처리합니다 — 낮은 투자비, 소량 또는 특수 제품에 더 유연하지만 대규모에서는 일관성이 낮습니다.',
      },
      {
        q: '튀김기로 조리 일관성을 어떻게 제어하나요?',
        a: '오일 온도는 ±2°C 정확도로 PLC 제어됩니다. 벨트 속도로 조리 시간을 제어합니다. 수위 센서가 일정한 오일 깊이를 유지합니다. 이러한 파라미터는 HMI에서 제품별 레시피로 저장할 수 있습니다.',
      },
      {
        q: '어떤 오일 여과 시스템을 추천하나요?',
        a: '200 kg/hr 이상을 생산하는 연속 튀김 라인의 경우, 정밀 필터(20–50 마이크론)와 입자 제거 컨베이어가 있는 연속 여과 장치를 권장합니다. 이를 통해 식용유 수명이 30–50% 연장되고 제품 색상 일관성이 유지됩니다.',
      },
      {
        q: '같은 라인에서 감자칩과 압출 스낵을 모두 처리할 수 있나요?',
        a: '부분적으로 가능합니다. 튀김기와 냉각 컨베이어는 두 가지 모두 처리할 수 있지만, 시즈닝 시스템(드럼 크기, 분사 속도)과 포장(계량기 크기, 봉지 형식)은 조정이 필요할 수 있습니다. 기본 제품에 맞게 설계하고 보조 제품에 필요한 조정 사항을 명시합니다.',
      },
      {
        q: '스낵 라인 견적을 받으려면 어떤 정보를 제공해야 하나요?',
        a: '제품 유형(감자칩, 견과류, 압출 스낵 등), 목표 생산량(kg/hr), 포장 형식 및 생산 속도, 사용 가능한 공장 면적, 국가/전압, 완전한 라인 또는 특정 장비 필요 여부. 가장 빠른 응답을 위해 저희 추천 양식을 사용하세요.',
      },
    ],

    relatedTitle: '관련 응용 분야 및 리소스',
    relatedLinks: [
      { label: '스낵 포장기 가이드', href: '/resources/snack-packing' },
      { label: '반자동 vs 완전자동 포장라인 비교', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: '식품 가공 장비 개요', href: '/machinery/food-processing' },
      { label: '기계 추천 받기', href: '/recommend' },
    ],

    ctaTitle: '스낵 제품과 목표 생산량을 알려주세요 — 적합한 가공 라인을 구성해 드립니다.',
    ctaSubtitle: '배치 튀김기부터 2,000 kg/hr 완전 연속 스낵 라인까지 — 귀사의 제품, 공간 및 생산 목표에 맞춰 구성합니다.',
    ctaBtn1: '가공 라인 추천 받기',
    ctaBtn2: '엔지니어링 팀 문의',
  },

  ja: {
    kicker: 'スナック・食品加工',
    heroTitle: 'スナック・食品加工ライン — 原材料から完成品の包装まで',
    heroSubtitle: 'SunGeneはフライ、ロースト、調味、冷却、計量、包装を網羅する完全なスナック加工ラインを設計・製造します。製品タイプ、生産目標、工場レイアウトに合わせてラインを構成します。',

    whoTitle: '対象となるお客様',
    whoItems: [
      { title: 'スナックメーカー', desc: 'ポテトチップス、押出スナック、ポップコーン、クラッカー、揚げ生地 — 連続式またはバッチ式加工ライン。' },
      { title: 'ナッツ焙煎・加工業者', desc: 'ピーナッツ、アーモンド、カシューナッツ、ひまわりの種 — ドラムまたはオーブン焙煎ライン（調味・包装付き）。' },
      { title: 'ペットフードメーカー', desc: 'ドライキブル、焼き菓子、フリーズドライスナック — 食品グレード加工と衛生設計。' },
      { title: '新興スナックブランド', desc: 'バッチ生産から連続加工へのスケールアップ — 生産量の増加に合わせて成長するラインを設計します。' },
    ],

    productsTitle: '加工製品',
    productGroups: [
      { label: '揚げスナック', items: ['ポテトチップス', 'バナナチップス', '揚げ生地スティック', '押出スナック', '豚の皮せんべい'] },
      { label: '焙煎製品', items: ['ピーナッツ', 'アーモンド', 'カシューナッツ', '種子類', 'コーヒー豆（焙煎ライン）'] },
      { label: 'コーティング・調味', items: ['チーズパフ', '調味クラッカー', 'コーティングナッツ', '風味チップス'] },
      { label: 'その他食品加工', items: ['エビせんべい', '魚豆腐', '野菜チップス', 'ペットフード粒'] },
    ],
    productsNote: '加工方法（フライ、ロースト、ベイク）は製品と最終的な食感要件によって異なります。ターゲット製品の特性に基づいてご提案します。',

    packagingTitle: '加工生産量とスケールオプション',
    packagingItems: [
      { label: '加工能力', value: '100 kg/hr のパイロットラインから2,000 kg/hr の商業ラインまで' },
      { label: '包装生産量', value: 'バッグ形式と計量機構成に応じて20〜120袋/分' },
      { label: 'ライン長', value: '設定可能 — 工場の間取りに合わせて設計' },
      { label: '自動化', value: '半自動（オペレーター監視）から完全連続PLC制御まで' },
    ],
    packagingNote: 'ライン能力と自動化レベルは完全に設定可能です — 目標生産量、製品、利用可能な投資に合わせて設計します。',

    configurationsTitle: '利用可能な構成',
    configurations: [
      { name: '連続フライヤー', desc: 'PLC制御オイル温度。調理時間制御のための調整可能なベルト速度。シングルまたはダブルベルト。オイルろ過システム利用可能。100〜2,000 kg/hr。' },
      { name: 'バッチフライヤー', desc: '小容量、低投資。手動または半自動。パイロット生産または特殊製品向け。' },
      { name: '焙煎オーブン / 回転ドラム焙煎機', desc: 'ナッツ、種子、乾燥焙煎製品向け。ガスまたは電気加熱。連続式またはバッチ式。' },
      { name: '調味タンブラー / ドラム', desc: '完成したスナックに調味粉またはオイルコーティングを施す。噴霧システム付きステンレスドラム。回転速度調整可能。' },
      { name: '冷却コンベア（メッシュベルト）', desc: 'フライまたはベイク後 — 包装前に製品温度を下げるための常温または強制空気冷却。' },
      { name: 'マルチヘッド計量機 + VFFS', desc: '高速組合せ計量機 + 縦型製袋充填密封機（ピローバッグ包装）。40〜120袋/分。' },
      { name: 'オイルろ過・回収システム', desc: '調理油の寿命を延ばし製品品質を維持。温度監視付き連続ろ過。' },
      { name: '完全統合ライン', desc: '原材料投入からフライ/ロースト/調味/冷却/計量/包装まで全ライン — PLC/HMI制御。' },
    ],

    decisionsTitle: '主要な意思決定要因',
    decisions: [
      { factor: '製品タイプ', guide: 'ポテト/野菜 → フライヤー。ナッツ/種子 → 焙煎ドラム。押出品 → ベーキングオーブン + 調味。' },
      { factor: '生産規模', guide: '< 200 kg/hr → バッチ設備。200〜500 kg/hr → 小型連続ライン。> 500 kg/hr → 産業用連続ライン。' },
      { factor: '調理方法', guide: '揚げ物 → フライヤー。乾燥焙煎 → ドラムまたはオーブン。エアフライ/ベイク → 対流オーブン。' },
      { factor: 'オイル管理', guide: '大量フライ → 品質維持とコスト削減のため連続オイルろ過システムが不可欠。' },
      { factor: '包装形式', guide: 'ピローバッグ → VFFS + マルチヘッド計量機。スタンドアップパウチ → プリメイドパウチ機。バルク → オープントップバッグ。' },
      { factor: '衛生と清掃', guide: '食品グレードステンレス構造；オイルシステム用CIP（定置洗浄）ポート；日常清掃用ドレインとアクセスパネル。' },
    ],

    integrationTitle: 'プロセス統合',
    integrationDesc: '典型的な完全スナック加工ライン（例：揚げスナック）：',
    integrationSteps: [
      '原材料投入',
      '洗浄 / ブランチング',
      '予備乾燥',
      '連続フライヤー',
      'オイル排出コンベア',
      '冷却コンベア',
      '調味タンブラー',
      'マルチヘッド計量機',
      'VFFS / 袋詰め機',
      '重量チェッカー',
      '金属探知機',
      '日付コーダー',
      'ケースパッカー',
    ],
    integrationFooter: 'すべての工程がすべての製品に必要なわけではありません。お客様の特定の製品と加工要件に基づいてラインを構成します。',

    faqTitle: 'よくある質問',
    faq: [
      {
        q: 'フライヤーだけで始めて、後から包装を追加できますか？',
        a: 'はい。段階的に成長できるラインを設計しています。まずコア調理設備から始め、生産量の増加に伴い調味、冷却、包装機を追加できます。将来の統合に向けて機械インターフェースの互換性を確保します。',
      },
      {
        q: '連続フライヤーとバッチフライヤーの違いは何ですか？',
        a: '連続フライヤーは製品を移動ベルトで熱い油の中に通します — 一定の品質、高量産に適切（200 kg/hr以上）。バッチフライヤーは一度に一ロードずつ処理します — 低投資、小ロットや特殊製品により柔軟ですが、大規模では一貫性が低くなります。',
      },
      {
        q: 'フライヤーで調理の一貫性はどのように管理しますか？',
        a: 'オイル温度は±2°Cの精度でPLC制御されます。ベルト速度で調理時間を制御します。レベルセンサーが一定のオイル深度を維持します。これらのパラメータはHMIで製品ごとのレシピとして保存できます。',
      },
      {
        q: 'どのオイルろ過システムを推奨しますか？',
        a: '200 kg/hr以上を生産する連続フライラインには、精密フィルター（20〜50ミクロン）と粒子除去コンベア付きの連続ろ過ユニットを推奨します。これによりオイルの寿命が30〜50%延長され、製品の色の一貫性が維持されます。',
      },
      {
        q: '同じラインでポテトチップスと押出スナックの両方を処理できますか？',
        a: '部分的に可能です。フライヤーと冷却コンベアは両方に対応できますが、調味システム（ドラムサイズ、噴霧速度）と包装（計量機サイズ、バッグ形式）は調整が必要な場合があります。主製品に合わせて設計し、副製品に必要な調整を明示します。',
      },
      {
        q: 'スナックラインの見積もりを取得するにはどのような情報が必要ですか？',
        a: '製品タイプ（ポテトチップス、ナッツ、押出スナックなど）、目標生産量（kg/hr）、包装形式と生産速度、利用可能な床面積の寸法、国/電圧、完全なラインか特定の設備が必要かどうか。最も早い回答のためにレコメンデーションフォームをご利用ください。',
      },
    ],

    relatedTitle: '関連アプリケーション・リソース',
    relatedLinks: [
      { label: 'スナック包装機ガイド', href: '/resources/snack-packing' },
      { label: '半自動vs全自動包装ラインの比較', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: '食品加工機器概要', href: '/machinery/food-processing' },
      { label: '機械レコメンデーションを取得', href: '/recommend' },
    ],

    ctaTitle: 'スナック製品と目標生産量をお知らせください — 適切な加工ラインを構成します。',
    ctaSubtitle: 'バッチフライヤーから2,000 kg/hr 完全連続スナックラインまで — 製品、スペース、生産目標に合わせて構成します。',
    ctaBtn1: '加工ラインの推奨を取得',
    ctaBtn2: 'エンジニアリングに相談',
  },

  ar: {
    kicker: 'معالجة الوجبات الخفيفة والأغذية',
    heroTitle: 'خطوط معالجة الوجبات الخفيفة والأغذية — من المواد الخام إلى التعبئة النهائية',
    heroSubtitle: 'تصمم SunGene وتصنع خطوط معالجة كاملة للوجبات الخفيفة تشمل القلي والتحميص والتتبيل والتبريد والوزن والتعبئة. نقوم بتكوين الخط وفقًا لنوع منتجك وهدف الإنتاج وتخطيط المنشأة.',

    whoTitle: 'لمن هذا الحل',
    whoItems: [
      { title: 'مصنعو الوجبات الخفيفة', desc: 'رقائق البطاطس، الوجبات الخفيفة المبثوقة، الذرة المنتفخة، البسكويت، العجين المقلي — خطوط معالجة مستمرة أو دفعات.' },
      { title: 'محمصو ومعالجو المكسرات', desc: 'الفول السوداني، اللوز، الكاجو، بذور عباد الشمس — خطوط تحميص بالطبل أو الفرن مع التتبيل والتعبئة.' },
      { title: 'منتجو طعام الحيوانات الأليفة', desc: 'الحبيبات الجافة، الحلويات المخبوزة والوجبات الخفيفة المجففة بالتجميد — معالجة بمستوى غذائي مع تصميم صحي.' },
      { title: 'علامات الوجبات الخفيفة الناشئة', desc: 'التوسع من إنتاج الدفعات إلى المعالجة المستمرة — نصمم خطوطًا تنمو مع حجم إنتاجك.' },
    ],

    productsTitle: 'المنتجات التي نعالجها',
    productGroups: [
      { label: 'وجبات خفيفة مقلية', items: ['رقائق البطاطس', 'رقائق الموز', 'عصا العجين المقلي', 'وجبات خفيفة مبثوقة', 'قشر الخنزير'] },
      { label: 'منتجات محمصة', items: ['الفول السوداني', 'اللوز', 'الكاجو', 'البذور', 'حبوب القهوة (خط التحميص)'] },
      { label: 'مغطاة ومتبلة', items: ['بفز الجبن', 'بسكويت متبل', 'مكسرات مغطاة', 'رقائق منكهة'] },
      { label: 'معالجة غذائية أخرى', items: ['بسكويت الروبيان', 'توفو السمك', 'رقائق الخضروات', 'حبيبات طعام الحيوانات الأليفة'] },
    ],
    productsNote: 'تعتمد طريقة المعالجة (القلي أو التحميص أو الخبز) على منتجك ومتطلبات الملمس النهائي. نقدم التوصيات بناءً على خصائص منتجك المستهدف.',

    packagingTitle: 'طاقة الإنتاج وخيارات الحجم',
    packagingItems: [
      { label: 'طاقة المعالجة', value: 'من خطوط تجريبية 100 كغ/ساعة إلى خطوط تجارية 2,000 كغ/ساعة' },
      { label: 'إنتاج التعبئة', value: '20–120 كيس/دقيقة حسب صيغة الكيس وتكوين الميزان' },
      { label: 'طول الخط', value: 'قابل للتكوين — نصمم بما يتناسب مع مخطط مصنعك' },
      { label: 'الأتمتة', value: 'شبه أوتوماتيكي (مراقبة المشغل) إلى مستمر بالكامل يتحكم به PLC' },
    ],
    packagingNote: 'طاقة الخط ومستوى الأتمتة قابلان للتكوين بالكامل — نصمم حول هدف إنتاجك ومنتجك والاستثمار المتاح.',

    configurationsTitle: 'التكوينات المتاحة',
    configurations: [
      { name: 'قلاية مستمرة', desc: 'درجة حرارة الزيت يتحكم بها PLC. سرعة حزام قابلة للتعديل للتحكم في وقت الطهي. حزام أحادي أو مزدوج. نظام تصفية الزيت متاح. 100–2,000 كغ/ساعة.' },
      { name: 'قلاية دُفعات', desc: 'سعة أصغر، استثمار أقل. يدوية أو شبه أوتوماتيكية. للإنتاج التجريبي أو المنتجات المتخصصة.' },
      { name: 'فرن تحميص / محمصة طبل دوارة', desc: 'للمكسرات والبذور والمنتجات المحمصة الجافة. تسخين بالغاز أو الكهرباء. مستمر أو دُفعات.' },
      { name: 'طبل التتبيل', desc: 'يطبق مسحوق النكهة أو طلاء الزيت على الوجبة الخفيفة المنتهية. طبل من الفولاذ المقاوم للصدأ مع نظام رش. سرعة دوران قابلة للتعديل.' },
      { name: 'ناقل التبريد (حزام شبكي)', desc: 'بعد القلي أو الخبز — تبريد بالهواء المحيط أو القسري لتخفيض درجة حرارة المنتج قبل التعبئة.' },
      { name: 'ميزان متعدد الرؤوس + VFFS', desc: 'ميزان مدمج عالي السرعة + آلة تشكيل-تعبئة-ختم عمودي لتعبئة الأكياس الوسادية. 40–120 كيس/دقيقة.' },
      { name: 'نظام تصفية الزيت واسترداده', desc: 'يمدد عمر زيت الطهي ويحافظ على جودة المنتج. تصفية مستمرة مع مراقبة درجة الحرارة.' },
      { name: 'خط متكامل كامل', desc: 'خط كامل من تغذية المواد الخام عبر القلي/التحميص/التتبيل/التبريد/الوزن/التعبئة — يتحكم به PLC/HMI.' },
    ],

    decisionsTitle: 'عوامل القرار الرئيسية',
    decisions: [
      { factor: 'نوع المنتج', guide: 'بطاطس/خضروات → قلاية. مكسرات/بذور → طبل تحميص. مبثوق → فرن خبز + تتبيل.' },
      { factor: 'حجم الإنتاج', guide: '< 200 كغ/ساعة → معدات دُفعات. 200–500 كغ/ساعة → خط مستمر صغير. > 500 كغ/ساعة → خط مستمر صناعي.' },
      { factor: 'طريقة الطهي', guide: 'قلي عميق → قلاية. تحميص جاف → طبل أو فرن. قلي هوائي/خبز → فرن حراري.' },
      { factor: 'إدارة الزيت', guide: 'قلي بحجم كبير → نظام تصفية الزيت المستمر ضروري للحفاظ على الجودة وتقليل التكاليف.' },
      { factor: 'صيغة التعبئة', guide: 'أكياس وسادية → VFFS + ميزان متعدد الرؤوس. أكياس قائمة → آلة أكياس جاهزة. سائب → كيس مفتوح.' },
      { factor: 'النظافة والتنظيف', guide: 'هيكل من الفولاذ المقاوم للصدأ بدرجة غذائية؛ منافذ CIP لأنظمة الزيت؛ مصارف وألواح وصول للتنظيف اليومي.' },
    ],

    integrationTitle: 'تكامل العملية',
    integrationDesc: 'خط معالجة وجبات خفيفة كامل نموذجي (مثال: وجبة خفيفة مقلية):',
    integrationSteps: [
      'تغذية المواد الخام',
      'الغسيل / السلق',
      'التجفيف المسبق',
      'قلاية مستمرة',
      'ناقل تصريف الزيت',
      'ناقل التبريد',
      'طبل التتبيل',
      'ميزان متعدد الرؤوس',
      'VFFS / آلة الأكياس',
      'مدقق الوزن',
      'كاشف المعادن',
      'مشفّر التاريخ',
      'آلة تعبئة الصناديق',
    ],
    integrationFooter: 'ليست جميع الخطوات مطلوبة لكل منتج. نقوم بتكوين الخط بناءً على منتجك المحدد ومتطلبات المعالجة.',

    faqTitle: 'الأسئلة الشائعة',
    faq: [
      {
        q: 'هل يمكنني البدء بقلاية فقط وإضافة التعبئة لاحقًا؟',
        a: 'نعم. نصمم خطوطًا يمكن أن تنمو على مراحل. يمكنك البدء بمعدات الطهي الأساسية وإضافة آلات التتبيل والتبريد والتعبئة مع نمو حجمك. نضمن توافق واجهات الآلات للتكامل المستقبلي.',
      },
      {
        q: 'ما الفرق بين القلاية المستمرة وقلاية الدُفعات؟',
        a: 'تمر القلاية المستمرة بالمنتج على حزام متحرك عبر الزيت الساخن — جودة ثابتة، مناسبة للأحجام الكبيرة (200 كغ/ساعة فما فوق). تعالج قلاية الدُفعات حمولة واحدة في كل مرة — استثمار أقل، أكثر مرونة للدُفعات الصغيرة أو المنتجات المتخصصة، لكن أقل اتساقًا على نطاق واسع.',
      },
      {
        q: 'كيف تتحكمون في اتساق الطهي مع القلاية؟',
        a: 'درجة حرارة الزيت يتحكم بها PLC بدقة ±2°C. تتحكم سرعة الحزام في وقت الطهي. تحافظ مستشعرات المستوى على عمق ثابت للزيت. يمكن حفظ هذه المعاملات كوصفات لكل منتج في HMI.',
      },
      {
        q: 'ما نظام تصفية الزيت الذي توصون به؟',
        a: 'لخطوط القلي المستمر التي تنتج أكثر من 200 كغ/ساعة، نوصي بوحدة تصفية مستمرة مع فلتر دقيق (20–50 ميكرون) وناقل إزالة الجسيمات. يمد هذا عمر الزيت بنسبة 30–50% ويحافظ على اتساق لون المنتج.',
      },
      {
        q: 'هل يمكن للخط نفسه معالجة رقائق البطاطس والوجبات الخفيفة المبثوقة؟',
        a: 'جزئيًا. يمكن للقلاية وناقل التبريد التعامل مع كليهما، لكن نظام التتبيل (حجم الطبل، معدل الرش) والتعبئة (حجم الميزان، صيغة الكيس) قد يحتاجان إلى تعديل. نصمم لمنتج رئيسي ونحدد التكيفات المطلوبة للمنتجات الثانوية.',
      },
      {
        q: 'ما المعلومات التي أحتاج تقديمها للحصول على عرض سعر لخط وجبات خفيفة؟',
        a: 'نوع المنتج (رقائق البطاطس، المكسرات، الوجبات الخفيفة المبثوقة، إلخ)، هدف الإنتاج (كغ/ساعة)، صيغة التعبئة وسرعة الإنتاج، أبعاد المساحة المتاحة، البلد/الجهد الكهربائي، وما إذا كنت تحتاج خطًا كاملاً أو معدات محددة. استخدم نموذج التوصية للحصول على أسرع استجابة.',
      },
    ],

    relatedTitle: 'التطبيقات والموارد ذات الصلة',
    relatedLinks: [
      { label: 'دليل آلات تعبئة الوجبات الخفيفة', href: '/resources/snack-packing' },
      { label: 'خط شبه أوتوماتيكي مقابل أوتوماتيكي بالكامل', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: 'نظرة عامة على معدات تجهيز الأغذية', href: '/machinery/food-processing' },
      { label: 'الحصول على توصية آلة', href: '/recommend' },
    ],

    ctaTitle: 'صف منتجك من الوجبات الخفيفة وهدف الإنتاج — سنكوّن خط المعالجة المناسب.',
    ctaSubtitle: 'من قلايات الدُفعات إلى خطوط الوجبات الخفيفة المستمرة الكاملة بسعة 2,000 كغ/ساعة — نقوم بالتكوين حسب منتجك ومساحتك وأهداف الإنتاج.',
    ctaBtn1: 'الحصول على توصية خط معالجة',
    ctaBtn2: 'التحدث مع فريق الهندسة',
  },

  th: {
    kicker: 'การแปรรูปขนมขบเคี้ยวและอาหาร',
    heroTitle: 'สายการผลิตขนมขบเคี้ยวและอาหาร — จากวัตถุดิบสู่บรรจุภัณฑ์สำเร็จรูป',
    heroSubtitle: 'SunGene ออกแบบและผลิตสายการผลิตขนมขบเคี้ยวครบวงจรครอบคลุมการทอด อบ ปรุงรส ทำความเย็น ชั่งน้ำหนัก และบรรจุภัณฑ์ เราปรับแต่งสายการผลิตตามประเภทผลิตภัณฑ์ เป้าหมายกำลังผลิต และผังโรงงานของคุณ',

    whoTitle: 'กลุ่มลูกค้าเป้าหมาย',
    whoItems: [
      { title: 'ผู้ผลิตขนมขบเคี้ยว', desc: 'มันฝรั่งทอด ขนมขบเคี้ยวอัดรีด ข้าวโพดคั่ว แครกเกอร์ แป้งทอด — สายการผลิตแบบต่อเนื่องหรือแบบชุด' },
      { title: 'ผู้คั่วและแปรรูปถั่ว', desc: 'ถั่วลิสง อัลมอนด์ เม็ดมะม่วงหิมพานต์ เมล็ดทานตะวัน — สายการผลิตคั่วด้วยดรัมหรือเตาอบพร้อมปรุงรสและบรรจุภัณฑ์' },
      { title: 'ผู้ผลิตอาหารสัตว์เลี้ยง', desc: 'อาหารเม็ดแห้ง ขนมอบ และขนมขบเคี้ยวแบบฟรีซดราย — การแปรรูประดับอาหารพร้อมการออกแบบที่ถูกสุขอนามัย' },
      { title: 'แบรนด์ขนมขบเคี้ยวที่กำลังเติบโต', desc: 'ขยายจากการผลิตแบบชุดสู่การแปรรูปต่อเนื่อง — เราออกแบบสายการผลิตที่เติบโตตามปริมาณการผลิตของคุณ' },
    ],

    productsTitle: 'ผลิตภัณฑ์ที่เราแปรรูป',
    productGroups: [
      { label: 'ขนมขบเคี้ยวทอด', items: ['มันฝรั่งทอด', 'กล้วยทอด', 'แท่งแป้งทอด', 'ขนมขบเคี้ยวอัดรีด', 'หนังหมูทอด'] },
      { label: 'ผลิตภัณฑ์คั่ว', items: ['ถั่วลิสง', 'อัลมอนด์', 'เม็ดมะม่วงหิมพานต์', 'เมล็ดพืช', 'เมล็ดกาแฟ (สายการผลิตคั่ว)'] },
      { label: 'เคลือบและปรุงรส', items: ['ชีสพัฟ', 'แครกเกอร์ปรุงรส', 'ถั่วเคลือบ', 'ชิปรสชาติ'] },
      { label: 'การแปรรูปอาหารอื่นๆ', items: ['ข้าวเกรียบกุ้ง', 'เต้าหู้ปลา', 'ชิปผัก', 'อาหารเม็ดสัตว์เลี้ยง'] },
    ],
    productsNote: 'วิธีการแปรรูป (ทอด คั่ว หรืออบ) ขึ้นอยู่กับผลิตภัณฑ์และข้อกำหนดเนื้อสัมผัสสุดท้าย เราแนะนำตามลักษณะผลิตภัณฑ์เป้าหมายของคุณ',

    packagingTitle: 'กำลังผลิตและตัวเลือกขนาด',
    packagingItems: [
      { label: 'กำลังการแปรรูป', value: 'ตั้งแต่สายการผลิตนำร่อง 100 กก./ชม. ถึงสายการผลิตเชิงพาณิชย์ 2,000 กก./ชม.' },
      { label: 'กำลังผลิตบรรจุภัณฑ์', value: '20–120 ถุง/นาที ขึ้นอยู่กับรูปแบบถุงและการตั้งค่าเครื่องชั่ง' },
      { label: 'ความยาวสายการผลิต', value: 'ปรับแต่งได้ — เราออกแบบให้เหมาะกับผังโรงงานของคุณ' },
      { label: 'ระบบอัตโนมัติ', value: 'กึ่งอัตโนมัติ (ผู้ควบคุมดูแล) ถึงแบบต่อเนื่องควบคุมด้วย PLC อย่างเต็มรูปแบบ' },
    ],
    packagingNote: 'กำลังการผลิตและระดับอัตโนมัติของสายการผลิตปรับแต่งได้อย่างสมบูรณ์ — เราออกแบบตามกำลังผลิตเป้าหมาย ผลิตภัณฑ์ และการลงทุนที่มีอยู่',

    configurationsTitle: 'การกำหนดค่าที่มีให้',
    configurations: [
      { name: 'เครื่องทอดต่อเนื่อง', desc: 'ควบคุมอุณหภูมิน้ำมันด้วย PLC ความเร็วสายพานปรับได้เพื่อควบคุมเวลาทอด สายพานเดี่ยวหรือคู่ ระบบกรองน้ำมันพร้อมใช้งาน 100–2,000 กก./ชม.' },
      { name: 'เครื่องทอดแบบชุด', desc: 'กำลังการผลิตน้อยกว่า ลงทุนต่ำกว่า แบบมือหรือกึ่งอัตโนมัติ สำหรับการผลิตนำร่องหรือผลิตภัณฑ์พิเศษ' },
      { name: 'เตาอบคั่ว / เครื่องคั่วดรัมหมุน', desc: 'สำหรับถั่ว เมล็ดพืช และผลิตภัณฑ์คั่วแห้ง ให้ความร้อนด้วยก๊าซหรือไฟฟ้า แบบต่อเนื่องหรือแบบชุด' },
      { name: 'ถังปรุงรส / ดรัม', desc: 'ใส่ผงปรุงรสหรือเคลือบน้ำมันบนขนมขบเคี้ยวที่เสร็จแล้ว ดรัมสแตนเลสพร้อมระบบฉีดพ่น ความเร็วการหมุนปรับได้' },
      { name: 'สายพานลำเลียงทำความเย็น (สายพานตะแกรง)', desc: 'หลังการทอดหรืออบ — ทำความเย็นด้วยอากาศโดยรอบหรืออากาศบังคับเพื่อลดอุณหภูมิผลิตภัณฑ์ก่อนบรรจุภัณฑ์' },
      { name: 'เครื่องชั่งหลายหัว + VFFS', desc: 'เครื่องชั่งผสมความเร็วสูง + เครื่องขึ้นรูป-บรรจุ-ปิดผนึกแนวตั้งสำหรับบรรจุถุงแบบหมอน 40–120 ถุง/นาที' },
      { name: 'ระบบกรองและกู้คืนน้ำมัน', desc: 'ยืดอายุน้ำมันทอดและรักษาคุณภาพผลิตภัณฑ์ การกรองต่อเนื่องพร้อมตรวจสอบอุณหภูมิ' },
      { name: 'สายการผลิตแบบบูรณาการครบวงจร', desc: 'สายการผลิตครบวงจรตั้งแต่วัตถุดิบผ่านการทอด/คั่ว/ปรุงรส/ทำความเย็น/ชั่งน้ำหนัก/บรรจุภัณฑ์ — ควบคุมด้วย PLC/HMI' },
    ],

    decisionsTitle: 'ปัจจัยการตัดสินใจหลัก',
    decisions: [
      { factor: 'ประเภทผลิตภัณฑ์', guide: 'มันฝรั่ง/ผัก → เครื่องทอด ถั่ว/เมล็ดพืช → ดรัมคั่ว อัดรีด → เตาอบ + ปรุงรส' },
      { factor: 'ขนาดกำลังผลิต', guide: '< 200 กก./ชม. → อุปกรณ์แบบชุด 200–500 กก./ชม. → สายการผลิตต่อเนื่องขนาดเล็ก > 500 กก./ชม. → สายการผลิตต่อเนื่องระดับอุตสาหกรรม' },
      { factor: 'วิธีการทำอาหาร', guide: 'ทอดน้ำมันลึก → เครื่องทอด คั่วแห้ง → ดรัมหรือเตาอบ แอร์ฟราย/อบ → เตาอบแบบพาความร้อน' },
      { factor: 'การจัดการน้ำมัน', guide: 'ทอดปริมาณสูง → ระบบกรองน้ำมันต่อเนื่องจำเป็นเพื่อรักษาคุณภาพและลดต้นทุน' },
      { factor: 'รูปแบบบรรจุภัณฑ์', guide: 'ถุงแบบหมอน → VFFS + เครื่องชั่งหลายหัว ถุงตั้ง → เครื่องถุงสำเร็จรูป บัลค์ → ถุงปากเปิด' },
      { factor: 'สุขอนามัยและการทำความสะอาด', guide: 'โครงสร้างสแตนเลสระดับอาหาร; พอร์ต CIP สำหรับระบบน้ำมัน; ท่อระบายและแผงเข้าถึงสำหรับการทำความสะอาดประจำวัน' },
    ],

    integrationTitle: 'การบูรณาการกระบวนการ',
    integrationDesc: 'สายการผลิตขนมขบเคี้ยวครบวงจรทั่วไป (ตัวอย่าง: ขนมขบเคี้ยวทอด):',
    integrationSteps: [
      'ป้อนวัตถุดิบ',
      'ล้าง / ลวก',
      'อบแห้งเบื้องต้น',
      'เครื่องทอดต่อเนื่อง',
      'สายพานระบายน้ำมัน',
      'สายพานทำความเย็น',
      'ถังปรุงรส',
      'เครื่องชั่งหลายหัว',
      'VFFS / เครื่องบรรจุถุง',
      'เครื่องตรวจสอบน้ำหนัก',
      'เครื่องตรวจจับโลหะ',
      'เครื่องพิมพ์วันที่',
      'เครื่องบรรจุกล่อง',
    ],
    integrationFooter: 'ไม่จำเป็นต้องทำทุกขั้นตอนสำหรับทุกผลิตภัณฑ์ เราปรับแต่งสายการผลิตตามผลิตภัณฑ์และข้อกำหนดการแปรรูปเฉพาะของคุณ',

    faqTitle: 'คำถามที่พบบ่อย',
    faq: [
      {
        q: 'ฉันสามารถเริ่มต้นด้วยเครื่องทอดอย่างเดียวแล้วเพิ่มบรรจุภัณฑ์ภายหลังได้ไหม?',
        a: 'ได้ เราออกแบบสายการผลิตที่สามารถเติบโตได้เป็นระยะ คุณสามารถเริ่มต้นด้วยอุปกรณ์ทำอาหารหลักและเพิ่มเครื่องปรุงรส ทำความเย็น และบรรจุภัณฑ์เมื่อปริมาณการผลิตเพิ่มขึ้น เรารับประกันความเข้ากันได้ของอินเทอร์เฟซสำหรับการบูรณาการในอนาคต',
      },
      {
        q: 'ความแตกต่างระหว่างเครื่องทอดต่อเนื่องและเครื่องทอดแบบชุดคืออะไร?',
        a: 'เครื่องทอดต่อเนื่องส่งผลิตภัณฑ์บนสายพานเคลื่อนที่ผ่านน้ำมันร้อน — คุณภาพสม่ำเสมอ เหมาะสำหรับปริมาณสูง (200 กก./ชม. ขึ้นไป) เครื่องทอดแบบชุดแปรรูปครั้งละหนึ่งรอบ — ลงทุนน้อยกว่า ยืดหยุ่นกว่าสำหรับชุดเล็กหรือผลิตภัณฑ์พิเศษ แต่ไม่สม่ำเสมอในระดับขนาดใหญ่',
      },
      {
        q: 'คุณควบคุมความสม่ำเสมอของการทอดด้วยเครื่องทอดอย่างไร?',
        a: 'อุณหภูมิน้ำมันควบคุมด้วย PLC ด้วยความแม่นยำ ±2°C ความเร็วสายพานควบคุมเวลาทอด เซ็นเซอร์ระดับรักษาความลึกน้ำมันสม่ำเสมอ สามารถบันทึกพารามิเตอร์เหล่านี้เป็นสูตรต่อผลิตภัณฑ์ใน HMI',
      },
      {
        q: 'คุณแนะนำระบบกรองน้ำมันแบบใด?',
        a: 'สำหรับสายการทอดต่อเนื่องที่ผลิตมากกว่า 200 กก./ชม. เราแนะนำหน่วยกรองต่อเนื่องพร้อมฟิลเตอร์ละเอียด (20–50 ไมครอน) และสายพานกำจัดอนุภาค ซึ่งจะยืดอายุน้ำมัน 30–50% และรักษาความสม่ำเสมอของสีผลิตภัณฑ์',
      },
      {
        q: 'สายการผลิตเดียวกันสามารถจัดการทั้งมันฝรั่งทอดและขนมขบเคี้ยวอัดรีดได้ไหม?',
        a: 'ได้บางส่วน เครื่องทอดและสายพานทำความเย็นสามารถรองรับได้ทั้งสอง แต่ระบบปรุงรส (ขนาดดรัม อัตราการฉีดพ่น) และบรรจุภัณฑ์ (ขนาดเครื่องชั่ง รูปแบบถุง) อาจต้องปรับ เราออกแบบสำหรับผลิตภัณฑ์หลักและระบุการปรับตัวที่จำเป็นสำหรับผลิตภัณฑ์รอง',
      },
      {
        q: 'ฉันต้องให้ข้อมูลอะไรเพื่อรับใบเสนอราคาสายการผลิตขนมขบเคี้ยว?',
        a: 'ประเภทผลิตภัณฑ์ (มันฝรั่งทอด ถั่ว ขนมขบเคี้ยวอัดรีด ฯลฯ) กำลังผลิตเป้าหมาย (กก./ชม.) รูปแบบบรรจุภัณฑ์และความเร็วผลิต ขนาดพื้นที่โรงงานที่มีอยู่ ประเทศ/แรงดันไฟฟ้า และต้องการสายการผลิตครบชุดหรืออุปกรณ์เฉพาะ ใช้แบบฟอร์มแนะนำของเราเพื่อรับการตอบสนองที่เร็วที่สุด',
      },
    ],

    relatedTitle: 'แอปพลิเคชันและทรัพยากรที่เกี่ยวข้อง',
    relatedLinks: [
      { label: 'คู่มือเครื่องบรรจุของว่าง', href: '/resources/snack-packing' },
      { label: 'สายการผลิตกึ่งอัตโนมัติ vs อัตโนมัติเต็มรูปแบบ', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: 'ภาพรวมอุปกรณ์แปรรูปอาหาร', href: '/machinery/food-processing' },
      { label: 'รับคำแนะนำเครื่องจักร', href: '/recommend' },
    ],

    ctaTitle: 'บอกเราเกี่ยวกับผลิตภัณฑ์ขนมขบเคี้ยวและกำลังผลิตเป้าหมายของคุณ — เราจะกำหนดสายการผลิตที่เหมาะสม',
    ctaSubtitle: 'ตั้งแต่เครื่องทอดแบบชุดไปจนถึงสายการผลิตขนมขบเคี้ยวต่อเนื่องครบวงจร 2,000 กก./ชม. — เราปรับแต่งตามผลิตภัณฑ์ พื้นที่ และเป้าหมายการผลิตของคุณ',
    ctaBtn1: 'รับคำแนะนำสายการผลิต',
    ctaBtn2: 'พูดคุยกับทีมวิศวกรรม',
  },

  vi: {
    kicker: 'CHẾ BIẾN ĐỒ ĂN VẶT VÀ THỰC PHẨM',
    heroTitle: 'Dây chuyền chế biến đồ ăn vặt và thực phẩm — Từ nguyên liệu thô đến bao bì thành phẩm',
    heroSubtitle: 'SunGene thiết kế và sản xuất dây chuyền chế biến đồ ăn vặt hoàn chỉnh bao gồm chiên, rang, ướp gia vị, làm nguội, cân và đóng gói. Chúng tôi cấu hình dây chuyền theo loại sản phẩm, mục tiêu sản lượng và bố cục nhà máy của bạn.',

    whoTitle: 'Dành cho ai',
    whoItems: [
      { title: 'Nhà sản xuất đồ ăn vặt', desc: 'Khoai tây chiên, đồ ăn vặt ép đùn, bắp rang, bánh quy giòn, bánh rán — dây chuyền chế biến liên tục hoặc theo mẻ.' },
      { title: 'Người rang và chế biến hạt khô', desc: 'Đậu phộng, hạnh nhân, hạt điều, hướng dương — dây chuyền rang trống hoặc lò nướng kèm ướp gia vị và đóng gói.' },
      { title: 'Nhà sản xuất thức ăn thú cưng', desc: 'Thức ăn khô dạng viên, bánh nướng và đồ ăn vặt đông khô — chế biến đạt tiêu chuẩn thực phẩm với thiết kế hợp vệ sinh.' },
      { title: 'Thương hiệu đồ ăn vặt mới nổi', desc: 'Mở rộng từ sản xuất theo mẻ sang chế biến liên tục — chúng tôi thiết kế dây chuyền phát triển cùng sản lượng của bạn.' },
    ],

    productsTitle: 'Sản phẩm chúng tôi chế biến',
    productGroups: [
      { label: 'Đồ ăn vặt chiên', items: ['Khoai tây chiên', 'Chip chuối', 'Que bột chiên', 'Đồ ăn vặt ép đùn', 'Da heo chiên'] },
      { label: 'Sản phẩm rang', items: ['Đậu phộng', 'Hạnh nhân', 'Hạt điều', 'Hạt giống', 'Hạt cà phê (dây chuyền rang)'] },
      { label: 'Tẩm bột và ướp gia vị', items: ['Snack phô mai', 'Bánh quy ướp gia vị', 'Hạt khô tẩm bột', 'Chip có hương vị'] },
      { label: 'Chế biến thực phẩm khác', items: ['Bánh phồng tôm', 'Đậu hũ cá', 'Chip rau củ', 'Thức ăn dạng viên cho thú cưng'] },
    ],
    productsNote: 'Phương pháp chế biến (chiên, rang hay nướng) phụ thuộc vào sản phẩm và yêu cầu kết cấu cuối cùng. Chúng tôi khuyến nghị dựa trên đặc điểm sản phẩm mục tiêu của bạn.',

    packagingTitle: 'Sản lượng chế biến và các tùy chọn quy mô',
    packagingItems: [
      { label: 'Công suất chế biến', value: 'Từ dây chuyền thí nghiệm 100 kg/giờ đến dây chuyền thương mại 2.000 kg/giờ' },
      { label: 'Sản lượng đóng gói', value: '20–120 túi/phút tùy theo định dạng túi và cấu hình cân' },
      { label: 'Chiều dài dây chuyền', value: 'Có thể cấu hình — chúng tôi thiết kế phù hợp với mặt bằng nhà máy của bạn' },
      { label: 'Tự động hóa', value: 'Bán tự động (có người giám sát) đến hoàn toàn liên tục điều khiển bằng PLC' },
    ],
    packagingNote: 'Công suất dây chuyền và mức độ tự động hóa có thể cấu hình hoàn toàn — chúng tôi thiết kế xung quanh sản lượng mục tiêu, sản phẩm và vốn đầu tư sẵn có của bạn.',

    configurationsTitle: 'Các cấu hình có sẵn',
    configurations: [
      { name: 'Máy chiên liên tục', desc: 'Nhiệt độ dầu được điều khiển bằng PLC. Tốc độ băng tải điều chỉnh được để kiểm soát thời gian chiên. Băng tải đơn hoặc đôi. Hệ thống lọc dầu có sẵn. 100–2.000 kg/giờ.' },
      { name: 'Máy chiên theo mẻ', desc: 'Công suất nhỏ hơn, đầu tư thấp hơn. Thủ công hoặc bán tự động. Dùng cho sản xuất thí nghiệm hoặc sản phẩm đặc biệt.' },
      { name: 'Lò nướng / Máy rang trống quay', desc: 'Dành cho hạt khô, hạt giống và sản phẩm rang khô. Nhiệt ga hoặc điện. Liên tục hoặc theo mẻ.' },
      { name: 'Trống ướp gia vị', desc: 'Phủ bột gia vị hoặc lớp dầu lên đồ ăn vặt thành phẩm. Trống inox với hệ thống phun. Tốc độ quay điều chỉnh được.' },
      { name: 'Băng tải làm nguội (dạng lưới)', desc: 'Sau khi chiên hoặc nướng — làm nguội bằng không khí môi trường hoặc không khí cưỡng bức để giảm nhiệt độ sản phẩm trước khi đóng gói.' },
      { name: 'Cân nhiều đầu + VFFS', desc: 'Cân kết hợp tốc độ cao + máy tạo hình-đổ đầy-hàn dọc cho túi gối. 40–120 túi/phút.' },
      { name: 'Hệ thống lọc và thu hồi dầu', desc: 'Kéo dài tuổi thọ dầu chiên và duy trì chất lượng sản phẩm. Lọc liên tục có giám sát nhiệt độ.' },
      { name: 'Dây chuyền tích hợp hoàn chỉnh', desc: 'Dây chuyền đầy đủ từ nạp nguyên liệu qua chiên/rang/ướp gia vị/làm nguội/cân/đóng gói — điều khiển bằng PLC/HMI.' },
    ],

    decisionsTitle: 'Các yếu tố quyết định chính',
    decisions: [
      { factor: 'Loại sản phẩm', guide: 'Khoai tây/rau củ → máy chiên. Hạt khô/hạt giống → trống rang. Ép đùn → lò nướng + ướp gia vị.' },
      { factor: 'Quy mô sản lượng', guide: '< 200 kg/giờ → thiết bị theo mẻ. 200–500 kg/giờ → dây chuyền liên tục nhỏ. > 500 kg/giờ → dây chuyền liên tục công nghiệp.' },
      { factor: 'Phương pháp nấu', guide: 'Chiên ngập dầu → máy chiên. Rang khô → trống hoặc lò. Chiên không khí/nướng → lò đối lưu.' },
      { factor: 'Quản lý dầu', guide: 'Chiên sản lượng lớn → hệ thống lọc dầu liên tục thiết yếu để duy trì chất lượng và giảm chi phí.' },
      { factor: 'Định dạng bao bì', guide: 'Túi gối → VFFS + cân nhiều đầu. Túi đứng → máy túi tiền chế. Dạng rời → túi miệng rộng.' },
      { factor: 'Vệ sinh và làm sạch', guide: 'Kết cấu inox cấp thực phẩm; cổng CIP cho hệ thống dầu; hố ga và tấm tiếp cận để vệ sinh hàng ngày.' },
    ],

    integrationTitle: 'Tích hợp quy trình',
    integrationDesc: 'Một dây chuyền chế biến đồ ăn vặt hoàn chỉnh điển hình (ví dụ: đồ ăn vặt chiên):',
    integrationSteps: [
      'Nạp nguyên liệu thô',
      'Rửa / chần',
      'Sấy sơ bộ',
      'Máy chiên liên tục',
      'Băng tải thoát dầu',
      'Băng tải làm nguội',
      'Trống ướp gia vị',
      'Cân nhiều đầu',
      'VFFS / Máy đóng túi',
      'Máy kiểm tra trọng lượng',
      'Máy dò kim loại',
      'Máy in ngày tháng',
      'Máy đóng thùng',
    ],
    integrationFooter: 'Không phải tất cả các bước đều cần thiết cho mọi sản phẩm. Chúng tôi cấu hình dây chuyền dựa trên sản phẩm cụ thể và yêu cầu chế biến của bạn.',

    faqTitle: 'Câu hỏi thường gặp',
    faq: [
      {
        q: 'Tôi có thể bắt đầu chỉ với máy chiên và thêm đóng gói sau không?',
        a: 'Được. Chúng tôi thiết kế dây chuyền có thể phát triển theo từng giai đoạn. Bạn có thể bắt đầu với thiết bị nấu cốt lõi và thêm máy ướp gia vị, làm nguội và đóng gói khi sản lượng tăng. Chúng tôi đảm bảo các giao diện máy tương thích để tích hợp trong tương lai.',
      },
      {
        q: 'Sự khác biệt giữa máy chiên liên tục và máy chiên theo mẻ là gì?',
        a: 'Máy chiên liên tục chạy sản phẩm trên băng tải chuyển động qua dầu nóng — chất lượng đồng đều, phù hợp sản lượng cao (200 kg/giờ trở lên). Máy chiên theo mẻ xử lý từng mẻ một — đầu tư thấp hơn, linh hoạt hơn cho mẻ nhỏ hoặc sản phẩm đặc biệt, nhưng kém đồng đều hơn ở quy mô lớn.',
      },
      {
        q: 'Bạn kiểm soát tính đồng đều khi nấu với máy chiên như thế nào?',
        a: 'Nhiệt độ dầu được điều khiển bằng PLC với độ chính xác ±2°C. Tốc độ băng tải kiểm soát thời gian chiên. Cảm biến mức duy trì độ sâu dầu ổn định. Các thông số này có thể lưu dưới dạng công thức theo sản phẩm trong HMI.',
      },
      {
        q: 'Bạn khuyến nghị hệ thống lọc dầu nào?',
        a: 'Đối với dây chuyền chiên liên tục sản xuất hơn 200 kg/giờ, chúng tôi khuyến nghị bộ lọc liên tục với lọc tinh (20–50 micron) và băng tải loại bỏ hạt. Điều này kéo dài tuổi thọ dầu 30–50% và duy trì tính đồng đều màu sắc sản phẩm.',
      },
      {
        q: 'Cùng một dây chuyền có thể xử lý cả khoai tây chiên và đồ ăn vặt ép đùn không?',
        a: 'Một phần. Máy chiên và băng tải làm nguội có thể xử lý cả hai, nhưng hệ thống ướp gia vị (kích thước trống, tốc độ phun) và đóng gói (kích thước cân, định dạng túi) có thể cần điều chỉnh. Chúng tôi thiết kế cho sản phẩm chính và chỉ định những điều chỉnh cần thiết cho sản phẩm phụ.',
      },
      {
        q: 'Tôi cần cung cấp thông tin gì để nhận báo giá cho dây chuyền đồ ăn vặt?',
        a: 'Loại sản phẩm (khoai tây chiên, hạt khô, đồ ăn vặt ép đùn, v.v.), sản lượng mục tiêu (kg/giờ), định dạng bao bì và tốc độ sản xuất, kích thước mặt bằng nhà máy, quốc gia/điện áp và liệu bạn cần dây chuyền hoàn chỉnh hay thiết bị cụ thể. Sử dụng biểu mẫu khuyến nghị của chúng tôi để nhận phản hồi nhanh nhất.',
      },
    ],

    relatedTitle: 'Ứng dụng và tài nguyên liên quan',
    relatedLinks: [
      { label: 'Hướng dẫn máy đóng gói đồ ăn vặt', href: '/resources/snack-packing' },
      { label: 'Dây chuyền bán tự động vs tự động hoàn toàn', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: 'Tổng quan thiết bị chế biến thực phẩm', href: '/machinery/food-processing' },
      { label: 'Nhận tư vấn máy móc', href: '/recommend' },
    ],

    ctaTitle: 'Mô tả sản phẩm đồ ăn vặt và sản lượng mục tiêu của bạn — chúng tôi sẽ cấu hình dây chuyền chế biến phù hợp.',
    ctaSubtitle: 'Từ máy chiên theo mẻ đến dây chuyền đồ ăn vặt liên tục hoàn chỉnh 2.000 kg/giờ — chúng tôi cấu hình theo sản phẩm, không gian và mục tiêu sản xuất của bạn.',
    ctaBtn1: 'Nhận tư vấn dây chuyền sản xuất',
    ctaBtn2: 'Liên hệ bộ phận kỹ thuật',
  },

  de: {
    kicker: 'SNACK- UND LEBENSMITTELVERARBEITUNG',
    heroTitle: 'Snack- und Lebensmittelverarbeitungslinien — Von der Rohware zur fertigen Verpackung',
    heroSubtitle: 'SunGene entwickelt und fertigt vollständige Snack-Verarbeitungslinien mit Frittieren, Rösten, Würzen, Kühlen, Wiegen und Verpacken. Wir konfigurieren die Linie nach Ihrem Produkttyp, Produktionsziel und Fabrikgrundriss.',

    whoTitle: 'Für wen ist diese Lösung',
    whoItems: [
      { title: 'Snack-Hersteller', desc: 'Kartoffelchips, extrudierte Snacks, Puffmais, Cracker, Backteiggebäck — kontinuierliche oder Batch-Verarbeitungslinien.' },
      { title: 'Nuss-Röster und -Verarbeiter', desc: 'Erdnüsse, Mandeln, Cashews, Sonnenblumenkerne — Trommel- oder Ofenröstlinien mit Würzung und Verpackung.' },
      { title: 'Tiernahrungshersteller', desc: 'Trockenfutter, gebackene Leckerlis und gefriergetrocknete Snacks — lebensmitteltaugliche Verarbeitung mit hygienischer Bauweise.' },
      { title: 'Aufstrebende Snack-Marken', desc: 'Skalierung von der Batch- zur kontinuierlichen Verarbeitung — wir entwerfen Linien, die mit Ihrem Produktionsvolumen wachsen.' },
    ],

    productsTitle: 'Produkte, die wir verarbeiten',
    productGroups: [
      { label: 'Frittierte Snacks', items: ['Kartoffelchips', 'Bananenchips', 'Frittierte Teigstäbchen', 'Extrudierte Snacks', 'Schweinekrusten'] },
      { label: 'Geröstete Produkte', items: ['Erdnüsse', 'Mandeln', 'Cashews', 'Samen', 'Kaffeebohnen (Röstlinie)'] },
      { label: 'Ummantelt und gewürzt', items: ['Käse-Puffs', 'Gewürzte Cracker', 'Ummantelte Nüsse', 'Aromatisierte Chips'] },
      { label: 'Sonstige Lebensmittelverarbeitung', items: ['Garnelenchips', 'Fischtofu', 'Gemüsechips', 'Tiernahrungskroketten'] },
    ],
    productsNote: 'Die Verarbeitungsmethode (Frittieren, Rösten oder Backen) hängt von Ihrem Produkt und der gewünschten Endtextur ab. Wir empfehlen basierend auf den Eigenschaften Ihres Zielprodukts.',

    packagingTitle: 'Verarbeitungsleistung und Größenoptionen',
    packagingItems: [
      { label: 'Verarbeitungskapazität', value: 'Von 100 kg/h Pilotlinien bis zu 2.000 kg/h Kommerziallinien' },
      { label: 'Verpackungsleistung', value: '20–120 Beutel/min je nach Beutelformat und Wiegerkonfiguration' },
      { label: 'Linienlänge', value: 'Konfigurierbar — wir entwerfen entsprechend Ihrem Fabrikgrundriss' },
      { label: 'Automatisierung', value: 'Halbautomatisch (bedienerüberwacht) bis vollkontinuierlich PLC-gesteuert' },
    ],
    packagingNote: 'Linienkapazität und Automatisierungsgrad sind vollständig konfigurierbar — wir entwickeln entsprechend Ihrem Produktionsziel, Produkt und verfügbaren Investitionsvolumen.',

    configurationsTitle: 'Verfügbare Konfigurationen',
    configurations: [
      { name: 'Durchlauffritteuse', desc: 'PLC-geregelte Öltemperatur. Einstellbare Bandgeschwindigkeit zur Garzeit-Steuerung. Einfach- oder Doppelband. Ölfiltrationssystem verfügbar. 100–2.000 kg/h.' },
      { name: 'Batch-Fritteuse', desc: 'Kleinere Kapazität, geringere Investition. Manuell oder halbautomatisch. Für Pilotproduktion oder Spezialprodukte.' },
      { name: 'Röstofen / Rotationstrommelröster', desc: 'Für Nüsse, Samen und trocken geröstete Produkte. Gas- oder Elektroheizung. Kontinuierlich oder im Batch-Betrieb.' },
      { name: 'Würztrommel', desc: 'Bringt Würzpulver oder Ölbeschichtung auf den fertigen Snack auf. Edelstahltrommel mit Sprühsystem. Einstellbare Drehzahl.' },
      { name: 'Kühlband (Gitterband)', desc: 'Nach dem Frittieren oder Backen — Umgebungs- oder Zwangsluftkühlung zur Senkung der Produkttemperatur vor der Verpackung.' },
      { name: 'Mehrkopfwaage + VFFS', desc: 'Hochgeschwindigkeits-Kombinationswaage + vertikale Schlauchbeutelmaschine für Kissenverpackungen. 40–120 Beutel/min.' },
      { name: 'Ölfiltrations- und Rückgewinnungssystem', desc: 'Verlängert die Lebensdauer des Frittierfetts und erhält die Produktqualität. Kontinuierliche Filtration mit Temperaturüberwachung.' },
      { name: 'Vollständig integrierte Linie', desc: 'Komplette Linie vom Rohstoffeintrag über Frittieren/Rösten/Würzen/Kühlen/Wiegen/Verpacken — PLC/HMI-gesteuert.' },
    ],

    decisionsTitle: 'Wichtige Entscheidungsfaktoren',
    decisions: [
      { factor: 'Produkttyp', guide: 'Kartoffel/Gemüse → Fritteuse. Nüsse/Samen → Rösttrommel. Extrudiert → Backofen + Würzung.' },
      { factor: 'Produktionsumfang', guide: '< 200 kg/h → Batch-Anlage. 200–500 kg/h → kleine Kontinuierlichlinie. > 500 kg/h → industrielle Kontinuierlichlinie.' },
      { factor: 'Garmethode', guide: 'Frittieren → Fritteuse. Trockenrösten → Trommel oder Ofen. Heißluft/Backen → Umluftofen.' },
      { factor: 'Ölmanagement', guide: 'Hochvolumen-Frittieren → kontinuierliches Ölfiltrationssystem unerlässlich für Qualitätserhalt und Kostensenkung.' },
      { factor: 'Verpackungsformat', guide: 'Kissenverpackung → VFFS + Mehrkopfwaage. Standbeutel → Vorformtaschenautomat. Schüttgut → offener Sack.' },
      { factor: 'Hygiene und Reinigung', guide: 'Lebensmitteltauglicher Edelstahlbau; CIP-Anschlüsse für Ölsysteme; Abläufe und Revisionsklappen für die tägliche Reinigung.' },
    ],

    integrationTitle: 'Prozessintegration',
    integrationDesc: 'Eine typische vollständige Snack-Verarbeitungslinie (Beispiel: frittierter Snack):',
    integrationSteps: [
      'Rohstoffzufuhr',
      'Waschen / Blanchieren',
      'Vortrocknung',
      'Durchlauffritteuse',
      'Ölabtropfförderband',
      'Kühlband',
      'Würztrommel',
      'Mehrkopfwaage',
      'VFFS / Beutelmaschine',
      'Kontrollwaage',
      'Metalldetektor',
      'Datumsdrucker',
      'Kartonverpackungsmaschine',
    ],
    integrationFooter: 'Nicht alle Schritte sind für jedes Produkt erforderlich. Wir konfigurieren die Linie basierend auf Ihrem spezifischen Produkt und den Verarbeitungsanforderungen.',

    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      {
        q: 'Kann ich nur mit einer Fritteuse beginnen und die Verpackung später hinzufügen?',
        a: 'Ja. Wir entwickeln Linien, die stufenweise wachsen können. Sie können mit der Kernkochausrüstung beginnen und Würz-, Kühl- und Verpackungsmaschinen hinzufügen, wenn Ihr Volumen steigt. Wir stellen die Kompatibilität der Maschinenschnittstellen für die zukünftige Integration sicher.',
      },
      {
        q: 'Was ist der Unterschied zwischen einer Durchlauffritteuse und einer Batch-Fritteuse?',
        a: 'Eine Durchlauffritteuse führt das Produkt auf einem Bewegungsband durch heißes Öl — gleichbleibende Qualität, geeignet für hohe Volumina (200 kg/h und mehr). Eine Batch-Fritteuse verarbeitet jeweils eine Charge — geringere Investition, flexibler für kleine Chargen oder Spezialprodukte, aber weniger konsistent im großen Maßstab.',
      },
      {
        q: 'Wie kontrollieren Sie die Garkonsistenz mit einer Fritteuse?',
        a: 'Die Öltemperatur wird PLC-geregelt mit ±2°C Genauigkeit. Die Bandgeschwindigkeit steuert die Garzeit. Füllstandssensoren halten eine gleichmäßige Öltieife. Diese Parameter können als Rezepte pro Produkt im HMI gespeichert werden.',
      },
      {
        q: 'Welches Ölfiltrationssystem empfehlen Sie?',
        a: 'Für Durchlauffritierlinien mit mehr als 200 kg/h empfehlen wir eine kontinuierliche Filtrationseinheit mit einem Feinfilter (20–50 Mikron) und einem Partikelentfernungsförderband. Dies verlängert die Lebensdauer des Frittierfetts um 30–50 % und erhält die Farbkonsistenz des Produkts.',
      },
      {
        q: 'Kann dieselbe Linie sowohl Kartoffelchips als auch extrudierte Snacks verarbeiten?',
        a: 'Teilweise. Die Fritteuse und das Kühlband können beide verarbeiten, aber das Würzsystem (Trommelgröße, Sprührate) und die Verpackung (Waagengröße, Beutelformat) müssen möglicherweise angepasst werden. Wir entwickeln für ein Hauptprodukt und spezifizieren die notwendigen Anpassungen für Nebenprodukte.',
      },
      {
        q: 'Welche Informationen benötige ich, um ein Angebot für eine Snack-Linie zu erhalten?',
        a: 'Produkttyp (Kartoffelchips, Nüsse, extrudierter Snack usw.), Produktionsziel (kg/h), Verpackungsformat und Produktionsgeschwindigkeit, verfügbare Bodenfläche, Land/Spannung und ob Sie eine komplette Linie oder spezifische Ausrüstung benötigen. Nutzen Sie unser Empfehlungsformular für die schnellste Rückmeldung.',
      },
    ],

    relatedTitle: 'Verwandte Anwendungen und Ressourcen',
    relatedLinks: [
      { label: 'Ratgeber: Snack-Verpackungsmaschinen', href: '/resources/snack-packing' },
      { label: 'Halbautomatische vs. vollautomatische Verpackungslinie', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: 'Übersicht Lebensmittelverarbeitungsanlagen', href: '/machinery/food-processing' },
      { label: 'Maschinenempfehlung erhalten', href: '/recommend' },
    ],

    ctaTitle: 'Beschreiben Sie Ihr Snack-Produkt und Ihr Produktionsziel — wir konfigurieren die passende Verarbeitungslinie.',
    ctaSubtitle: 'Von Batch-Friteusen bis zu vollständigen 2.000 kg/h Kontinuierlich-Snack-Linien — wir konfigurieren nach Ihrem Produkt, Ihrem Raum und Ihren Produktionszielen.',
    ctaBtn1: 'Linienempfehlung erhalten',
    ctaBtn2: 'Engineering kontaktieren',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function SnackProcessingLinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content.en
  const heroPhoto = PHOTO.machines.snackProcessingHero
  const guides = getResourceArticlesByMachine('snack-processing-line', lang, 6)
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
                <a href={`/${lang}/resources/topic/snack-processing-line`} className="text-accent-600 hover:underline">
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
