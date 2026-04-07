import { Lang, ALL_LANGS } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { MachineFAQ } from '@/components/machines/MachineFAQ'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import MachineQuickLinks from '@/components/MachineQuickLinks'
import type { Metadata } from 'next'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META, BREADCRUMB_LABELS } from '@/lib/seo'
import { getResourceArticlesByMachine } from '@/lib/resourceArticles'

// ─── Metadata ────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  en: 'Pouch Packing Machines — VFFS, HFFS, Pre-made Pouch & Vacuum | SunGene',
  cn: '袋装包装机 — VFFS、HFFS、预制袋及真空包装系统 | SunGene',
  zh: '袋裝包裝機 — VFFS、HFFS、預製袋及真空包裝系統 | SunGene',
  fr: 'Machines d\'emballage en sachet — VFFS, HFFS, Sachet préformé & Vide | SunGene',
  es: 'Máquinas envasadoras en bolsa — VFFS, HFFS, Bolsa preformada y Vacío | SunGene',
  pt: 'Máquinas de embalagem em saco — VFFS, HFFS, Saco pré-formado e Vácuo | SunGene',
  ko: '파우치 포장 기계 — VFFS, HFFS, 프리메이드 파우치 및 진공 포장 | SunGene',
  ja: 'パウチ包装機 — VFFS、HFFS、プレメードパウチ・真空システム | SunGene',
  ar: 'آلات تعبئة الأكياس — VFFS وHFFS والأكياس الجاهزة والتعبئة الفراغية | SunGene',
  th: 'เครื่องบรรจุถุง — VFFS, HFFS, ถุงสำเร็จรูป และระบบสูญญากาศ | SunGene',
  vi: 'Máy đóng gói túi — VFFS, HFFS, Túi thành phẩm & Chân không | SunGene',
  de: 'Beutelverpackungsmaschinen — VFFS, HFFS, Fertigbeutel & Vakuum | SunGene',
}

const metaDescs: Record<string, string> = {
  en: 'Pouch packing machines: VFFS, HFFS flow wrappers, premade pouch systems, and vacuum packing. Used for snacks, nuts, coffee, sauces, and consumer goods. Share your product, bag style, and target speed for a fit.',
  cn: '袋装包装设备：VFFS、HFFS流动包装、预制袋系统与真空包装。适用于零食、坚果、咖啡、酱料与消费品。提供产品、袋型与目标产速，即可匹配机型。',
  zh: '袋裝包裝設備：VFFS、HFFS流動包裝、預製袋系統與真空包裝。適用於零食、堅果、咖啡、醬料與消費品。提供產品、袋型與目標產速，即可匹配機型。',
  fr: 'Machines d’emballage en sachet : VFFS, flow wrap HFFS, systèmes pour poches préformées et sous vide. Pour snacks, noix, café, sauces et produits de grande consommation. Donnez produit, format et cadence cible.',
  es: 'Máquinas para empaque en bolsa: VFFS, flow pack HFFS, sistemas para bolsa preformada y envasado al vacío. Para snacks, frutos secos, café, salsas y consumo masivo. Indique producto, formato y velocidad objetivo.',
  pt: 'Máquinas para embalagem em saco: VFFS, flow pack HFFS, sistemas para pouch pré-formado e embalagem a vácuo. Para snacks, nozes, café, molhos e bens de consumo. Informe produto, formato e velocidade-alvo.',
  ko: '파우치 포장 설비: VFFS, HFFS 플로우랩, 프리메이드 파우치 시스템, 진공 포장. 스낵/견과/커피/소스/소비재에 사용됩니다. 제품·파우치 형식·목표 속도를 알려주면 기종을 맞춰드립니다.',
  ja: 'パウチ包装設備：VFFS、HFFSフロー包装、プレメードパウチ、真空包装。スナック、ナッツ、コーヒー、ソース、消費財向け。製品・袋形状・目標速度を共有いただければ機種を提案します。',
  ar: 'معدات تعبئة الأكياس: VFFS وHFFS (flow wrap) وأنظمة الأكياس الجاهزة والتعبئة الفراغية. للوجبات الخفيفة والمكسرات والقهوة والصلصات والسلع الاستهلاكية. شارك نوع المنتج وشكل الكيس والسرعة المطلوبة لاختيار الماكينة.',
  th: 'เครื่องบรรจุถุง: VFFS, HFFS (flow wrap), ระบบถุงสำเร็จรูป และเครื่องบรรจุสูญญากาศ ใช้กับของว่าง ถั่ว กาแฟ ซอส และสินค้าอุปโภคบริโภค แจ้งสินค้า รูปแบบถุง และความเร็วเป้าหมายเพื่อเลือกเครื่องที่เหมาะสม',
  vi: 'Máy đóng gói túi: VFFS, HFFS (flow wrap), hệ thống túi thành phẩm và đóng gói chân không. Dùng cho snack, hạt, cà phê, nước sốt và hàng tiêu dùng. Cung cấp sản phẩm, kiểu túi và tốc độ mục tiêu để chọn máy.',
  de: 'Beutelverpackungsmaschinen: VFFS, HFFS-Flowpack, Fertigbeutel-Systeme und Vakuumverpackung. Für Snacks, Nüsse, Kaffee, Saucen und Konsumgüter. Produkt, Beuteltyp und Zielleistung reichen für die passende Auswahl.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/pouch-packing-machine',
    type: 'website',
    keywords: [
      'pouch packing machine', 'VFFS machine', 'HFFS machine', 'flow wrapper', 'pre-made pouch machine',
      'vacuum packing machine', 'stand-up pouch machine', 'stick pack machine', 'sachet machine',
      'Taiwan pouch packaging', 'pouch packaging equipment',
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
    kicker: 'POUCH & BAG PACKAGING',
    heroTitle: 'Pouch Packing Machines — VFFS, HFFS, Pre-made Pouch, and Vacuum Systems',
    heroSubtitle: 'SunGene manufactures pouch packing machines for pillow bags, stand-up pouches, zipper pouches, vacuum bags, flow wrap, and stick packs. Machine selection depends on your product, bag format, required speed, and sealing method.',

    whoTitle: 'Who It\'s For',
    whoItems: [
      { title: 'Snack & Food Brands', desc: 'Chips, nuts, candy, dried fruit, coffee — needing attractive bags with good shelf presence.' },
      { title: 'Liquid & Sauce Producers', desc: 'Sachets, stand-up pouches with spouts, retort pouches for sauces, condiments, and dairy.' },
      { title: 'Pharmaceutical & Supplement', desc: 'Single-dose stick packs, sachets with precise fill for powder or liquid pharmaceuticals.' },
      { title: 'FMCG & Consumer Goods', desc: 'Branded flexible packaging for consumer markets — zipper pouches, spout pouches, flow wrap.' },
    ],

    productsTitle: 'Suitable Products',
    productGroups: [
      { label: 'Dry solids & snacks', items: ['Chips', 'Nuts', 'Granola', 'Coffee', 'Pet food', 'Candy', 'Dried fruit'] },
      { label: 'Powder in pouches', items: ['Spice sachets', 'Instant beverage', 'Protein powder', 'Detergent'] },
      { label: 'Liquid & paste', items: ['Sauce pouches', 'Ketchup sachets', 'Cosmetic cream', 'Yogurt'] },
      { label: 'Special formats', items: ['Retort pouches (sterile)', 'Vacuum bags (meat, cheese)', 'Nitrogen-flushed (coffee)'] },
    ],
    productsNote: 'Bag material selection (PE, PET, aluminum foil, multilayer) affects sealing method and machine type. We advise on film selection as part of the recommendation.',

    packagingTitle: 'Packaging & Output Options',
    packagingItems: [
      { label: 'Bag types', value: 'Pillow bag (VFFS), stand-up pouch (VFFS/pre-made), zipper pouch, flow wrap (HFFS), sachet/stick pack, vacuum bag, retort pouch' },
      { label: 'Fill weight range', value: '1g stick packs to 5kg bags — depends on machine type and format' },
      { label: 'Output range', value: '20–300 bags/min depending on bag format, fill type, and machine configuration' },
    ],
    packagingNote: 'All stated ranges are configuration-dependent — we confirm based on your specific product, bag format, and fill type.',

    configurationsTitle: 'Available Configurations',
    configurations: [
      { name: 'VFFS (Vertical Form-Fill-Seal)', desc: 'Forms bags from roll film vertically. For powders, granules, liquids. 30–150 bags/min. Low per-bag film cost.' },
      { name: 'HFFS / Flow Wrap (Horizontal)', desc: 'For solid, shaped products. Pillow wrap format. 50–300 bags/min. Best for biscuits, bars, produce.' },
      { name: 'Pre-made Pouch Machine (Rotary / Linear)', desc: 'Fills into pre-formed stand-up or zipper pouches. 20–80 bags/min. Premium appearance, supports ziplock/spout.' },
      { name: 'Stick Pack / Sachet Machine', desc: 'High-speed multi-lane sachet filling for single-serve powder or liquid. 50–400 sachets/min.' },
      { name: 'Vacuum Packing Machine', desc: 'Single or double chamber. Removes air for shelf life extension. For meat, cheese, coffee, dry goods.' },
      { name: 'Nitrogen Flushing', desc: 'Integrated gas flush module for oxidation-sensitive products. Available on VFFS, pre-made pouch, and chamber vacuum machines.' },
      { name: 'Materials & Compliance', desc: 'CE certified; SUS304/316L stainless steel; voltage/frequency configurable; film width and length servo-adjustable.' },
    ],

    decisionsTitle: 'Key Decision Factors',
    decisions: [
      { factor: 'Product form', guide: 'Solid/shaped → HFFS. Powder/granule/liquid → VFFS. Premium brand → pre-made pouch.' },
      { factor: 'Bag format', guide: 'Pillow bag → VFFS or HFFS. Stand-up/zipper → pre-made pouch. Sachet → stick pack machine.' },
      { factor: 'Output speed', guide: '< 30 bags/min → pre-made pouch. 30–100 → VFFS with weigher. > 100 → high-speed VFFS or HFFS.' },
      { factor: 'Shelf life requirement', guide: 'Standard → heat seal. Extended → vacuum + gas flush + barrier film.' },
      { factor: 'Budget', guide: 'Basic VFFS is most cost-effective. Pre-made pouch has higher per-bag cost but better appearance.' },
      { factor: 'Format flexibility', guide: 'Multiple bag sizes → servo VFFS with adjustable former. High mix → pre-made pouch.' },
    ],

    integrationTitle: 'Process Integration',
    integrationDesc: 'This machine integrates into your broader production workflow at the packing stage. A typical integrated pouch line may include:',
    integrationSteps: [
      'Raw material / product infeed',
      'Weigher / filler',
      'Film feeding / pouch feeding',
      'Form-fill-seal',
      'Gas flush (optional)',
      'Sealing / cutting',
      'Inspection (weight / vision)',
      'Date coding',
      'Conveyor out',
      'Case packing',
    ],
    integrationFooter: 'We design the full pouch line around your product and facility. Single machines or complete lines with weigher, metal detector, labeler, and case packer.',

    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'What is the difference between VFFS and pre-made pouch machines?',
        a: 'VFFS forms bags from a film roll on-the-fly — lower per-bag material cost, good for high-volume standard formats. Pre-made pouch machines use finished pouches — better appearance, supports premium features (zipper, spout, gusset), but higher per-bag cost. Most snack producers start with VFFS; premium/export brands often prefer pre-made pouch.',
      },
      {
        q: 'Can the machine handle both powder and liquid products?',
        a: 'Not typically on the same machine without reconfiguration. Powder VFFS uses an auger or multi-head weigher; liquid VFFS uses a piston pump or flow meter. We recommend separate machines for powder and liquid, or a pre-made pouch machine if your product mix requires flexibility.',
      },
      {
        q: 'What bag sizes can one VFFS machine handle?',
        a: 'Most VFFS machines cover a range — e.g. 80–300mm bag width with servo-adjustable length. Format changes take 15–30 minutes. For very different formats (5g sachet vs 1kg bag), separate machines are recommended.',
      },
      {
        q: 'Do you support zipper pouches and spout pouches?',
        a: 'Yes. Zipper applicators are available for both VFFS and pre-made pouch machines. Spout insertion is supported on pre-made pouch rotary machines. These are add-on modules with additional investment.',
      },
      {
        q: 'What film materials are compatible?',
        a: 'PE, CPP, OPP, PET/PE laminates, aluminum foil laminates, and specialty multilayer films. We advise on film selection based on your product\'s moisture sensitivity, oxygen barrier needs, and shelf life target.',
      },
      {
        q: 'What information should I provide to get a recommendation?',
        a: 'Product name and form (solid/powder/liquid), target bag format and size, required output speed, country/voltage, and whether you need nitrogen flush or vacuum. Use our recommend form for fastest response.',
      },
    ],

    relatedTitle: 'Related Applications & Resources',
    relatedLinks: [
      { label: 'How to Choose a Pouch Packing Machine', href: '/resources/how-to-choose-pouch-packing-machine' },
      { label: 'VFFS vs HFFS — Which is Right for You?', href: '/resources/vffs-vs-hffs' },
      { label: 'Pre-made Pouch Machine vs VFFS', href: '/resources/premade-pouch-machine-vs-vffs' },
      { label: 'Get a Machine Recommendation', href: '/recommend' },
    ],

    ctaTitle: 'Tell us your product and packaging format — we\'ll match the right machine.',
    ctaSubtitle: 'VFFS, pre-made pouch, stick pack, or vacuum — our engineers recommend based on your product, output target, and bag specification.',
    ctaBtn1: 'Get a Machine Recommendation',
    ctaBtn2: 'Talk to Engineering',
  },

  cn: {
    kicker: '袋装与软包装',
    heroTitle: '袋装包装机 — VFFS、HFFS、预制袋及真空系统',
    heroSubtitle: 'SunGene生产适用于枕型袋、站立袋、拉链袋、真空袋、流动包装及条形袋的包装机。机器选型取决于您的产品、袋型、所需速度和封口方式。',

    whoTitle: '适用客户',
    whoItems: [
      { title: '零食与食品品牌', desc: '薯片、坚果、糖果、干果、咖啡——需要具有良好货架展示效果的精美包装袋。' },
      { title: '液体与酱料生产商', desc: '小袋包装、带吸嘴站立袋、耐高温蒸煮袋，适用于酱料、调味品和乳制品。' },
      { title: '制药与保健品', desc: '单剂量条形袋、精准充填小袋，适用于粉末或液态药品。' },
      { title: '快消品与消费品', desc: '面向消费市场的品牌软包装——拉链袋、吸嘴袋、流动包装。' },
    ],

    productsTitle: '适用产品',
    productGroups: [
      { label: '干燥固体与零食', items: ['薯片', '坚果', '麦片', '咖啡', '宠物食品', '糖果', '干果'] },
      { label: '袋装粉末', items: ['香料小袋', '速溶饮料', '蛋白粉', '洗涤剂'] },
      { label: '液体与膏体', items: ['酱料袋', '番茄酱小袋', '护肤霜', '酸奶'] },
      { label: '特殊格式', items: ['蒸煮袋（无菌）', '真空袋（肉类、奶酪）', '充氮包装（咖啡）'] },
    ],
    productsNote: '包装材料选择（PE、PET、铝箔、多层复合膜）影响封口方式和机器类型。我们将作为推荐方案的一部分提供薄膜选型建议。',

    packagingTitle: '包装与产量选项',
    packagingItems: [
      { label: '袋型', value: '枕型袋（VFFS）、站立袋（VFFS/预制袋）、拉链袋、流动包装（HFFS）、小袋/条形袋、真空袋、蒸煮袋' },
      { label: '充填重量范围', value: '1克条形袋至5公斤大袋——取决于机器类型和袋型' },
      { label: '产量范围', value: '20–300袋/分钟，取决于袋型、充填类型和机器配置' },
    ],
    packagingNote: '所有所示范围均取决于具体配置——我们根据您的产品、袋型和充填类型进行确认。',

    configurationsTitle: '可用配置',
    configurations: [
      { name: 'VFFS（立式成型-充填-封口）', desc: '从卷膜立式成型制袋。适用于粉末、颗粒、液体。30–150袋/分钟。单袋薄膜成本低。' },
      { name: 'HFFS / 流动包装（卧式）', desc: '适用于固体、有形状的产品。枕型包装格式。50–300袋/分钟。最适合饼干、营养棒和农产品。' },
      { name: '预制袋机（旋转式/直线式）', desc: '向预制站立袋或拉链袋中充填。20–80袋/分钟。外观精美，支持拉链/吸嘴。' },
      { name: '条形袋/小袋机', desc: '高速多排小袋充填，适用于单份粉末或液体。50–400袋/分钟。' },
      { name: '真空包装机', desc: '单室或双室。抽真空延长货架期。适用于肉类、奶酪、咖啡、干货。' },
      { name: '充氮冲洗', desc: '集成充气模块，适用于对氧化敏感的产品。可配置于VFFS、预制袋机和真空室机上。' },
      { name: '材质与认证', desc: 'CE认证；SUS304/316L不锈钢；电压/频率可定制；薄膜宽度和长度伺服可调。' },
    ],

    decisionsTitle: '关键决策因素',
    decisions: [
      { factor: '产品形态', guide: '固体/有形状 → HFFS。粉末/颗粒/液体 → VFFS。高端品牌 → 预制袋机。' },
      { factor: '袋型', guide: '枕型袋 → VFFS或HFFS。站立袋/拉链袋 → 预制袋机。小袋 → 条形袋机。' },
      { factor: '产量速度', guide: '< 30袋/分钟 → 预制袋机。30–100 → 配秤VFFS。> 100 → 高速VFFS或HFFS。' },
      { factor: '货架期要求', guide: '标准 → 热封。延长 → 真空+充气+高阻隔薄膜。' },
      { factor: '预算', guide: '基础VFFS性价比最高。预制袋单袋成本较高，但外观更佳。' },
      { factor: '格式灵活性', guide: '多种袋型 → 带可调成型器的伺服VFFS。产品组合多 → 预制袋机。' },
    ],

    integrationTitle: '工艺整合',
    integrationDesc: '该设备在包装环节整合到您更广泛的生产流程中。典型的袋装整合产线可能包括：',
    integrationSteps: ['原料/产品进料', '计量秤/充填机', '薄膜进给/袋子进给', '成型-充填-封口', '充气（可选）', '封口/切断', '检测（重量/视觉）', '打码', '输送出料', '装箱'],
    integrationFooter: '我们围绕您的产品和工厂设计完整袋装产线。单机或配备计量秤、金属探测器、贴标机和装箱机的完整产线。',

    faqTitle: '常见问题',
    faq: [
      {
        q: 'VFFS和预制袋机有什么区别？',
        a: 'VFFS从卷膜实时成型制袋——单袋材料成本低，适合大批量标准格式。预制袋机使用成品袋——外观更精美，支持高端功能（拉链、吸嘴、折角），但单袋成本更高。大多数零食生产商从VFFS起步；高端/出口品牌通常偏好预制袋机。',
      },
      {
        q: '同一台机器能处理粉末和液体产品吗？',
        a: '通常不能在不重新配置的情况下使用同一台机器处理两者。粉末VFFS使用螺旋计量或多头秤；液体VFFS使用活塞泵或流量计。我们建议粉末和液体使用独立机器，或在产品组合需要灵活性时选用预制袋机。',
      },
      {
        q: '一台VFFS机能处理哪些袋型尺寸？',
        a: '大多数VFFS机覆盖一定范围——例如袋宽80–300mm，长度伺服可调。换型通常需要15–30分钟。对于差异很大的格式（5克小袋与1公斤袋），建议使用独立机器。',
      },
      {
        q: '支持拉链袋和吸嘴袋吗？',
        a: '支持。拉链安装模块适用于VFFS和预制袋机。吸嘴插入功能支持预制袋旋转式机器。这些均为附加模块，需要额外投资。',
      },
      {
        q: '兼容哪些薄膜材料？',
        a: 'PE、CPP、OPP、PET/PE复合膜、铝箔复合膜及专业多层薄膜。我们根据您产品的防潮要求、阻氧需求和货架期目标提供薄膜选型建议。',
      },
      {
        q: '获取推荐方案需要提供哪些信息？',
        a: '产品名称和形态（固体/粉末/液体）、目标袋型和尺寸、所需产量速度、国家/电压，以及是否需要充氮或真空。使用我们的推荐表单可获得最快响应。',
      },
    ],

    relatedTitle: '相关应用与资源',
    relatedLinks: [
      { label: '如何选择袋装包装机', href: '/resources/how-to-choose-pouch-packing-machine' },
      { label: 'VFFS与HFFS包装机对比', href: '/resources/vffs-vs-hffs' },
      { label: '预制袋机与VFFS对比', href: '/resources/premade-pouch-machine-vs-vffs' },
      { label: '获取机器推荐', href: '/recommend' },
    ],

    ctaTitle: '告诉我们您的产品和包装格式——我们将为您匹配合适的机器。',
    ctaSubtitle: 'VFFS、预制袋机、条形袋机或真空包装——我们的工程师根据您的产品、产量目标和袋型规格进行推荐。',
    ctaBtn1: '获取机器推荐',
    ctaBtn2: '联系工程团队',
  },

  zh: {
    kicker: '袋裝與軟包裝',
    heroTitle: '袋裝包裝機 — VFFS、HFFS、預製袋及真空系統',
    heroSubtitle: 'SunGene生產適用於枕型袋、站立袋、拉鍊袋、真空袋、流動包裝及條形袋的包裝機。機器選型取決於您的產品、袋型、所需速度和封口方式。',

    whoTitle: '適用客戶',
    whoItems: [
      { title: '零食與食品品牌', desc: '薯片、堅果、糖果、乾果、咖啡——需要具有良好貨架展示效果的精美包裝袋。' },
      { title: '液體與醬料生產商', desc: '小袋包裝、帶吸嘴站立袋、耐高溫蒸煮袋，適用於醬料、調味品和乳製品。' },
      { title: '製藥與保健品', desc: '單劑量條形袋、精準充填小袋，適用於粉末或液態藥品。' },
      { title: '快消品與消費品', desc: '面向消費市場的品牌軟包裝——拉鍊袋、吸嘴袋、流動包裝。' },
    ],

    productsTitle: '適用產品',
    productGroups: [
      { label: '乾燥固體與零食', items: ['薯片', '堅果', '麥片', '咖啡', '寵物食品', '糖果', '乾果'] },
      { label: '袋裝粉末', items: ['香料小袋', '速溶飲料', '蛋白粉', '洗滌劑'] },
      { label: '液體與膏體', items: ['醬料袋', '番茄醬小袋', '護膚霜', '優格'] },
      { label: '特殊格式', items: ['蒸煮袋（無菌）', '真空袋（肉類、奶酪）', '充氮包裝（咖啡）'] },
    ],
    productsNote: '包裝材料選擇（PE、PET、鋁箔、多層複合膜）影響封口方式和機器類型。我們將作為推薦方案的一部分提供薄膜選型建議。',

    packagingTitle: '包裝與產量選項',
    packagingItems: [
      { label: '袋型', value: '枕型袋（VFFS）、站立袋（VFFS/預製袋）、拉鍊袋、流動包裝（HFFS）、小袋/條形袋、真空袋、蒸煮袋' },
      { label: '充填重量範圍', value: '1克條形袋至5公斤大袋——取決於機器類型和袋型' },
      { label: '產量範圍', value: '20–300袋/分鐘，取決於袋型、充填類型和機器配置' },
    ],
    packagingNote: '所有所示範圍均取決於具體配置——我們根據您的產品、袋型和充填類型進行確認。',

    configurationsTitle: '可用配置',
    configurations: [
      { name: 'VFFS（立式成型-充填-封口）', desc: '從卷膜立式成型製袋。適用於粉末、顆粒、液體。30–150袋/分鐘。單袋薄膜成本低。' },
      { name: 'HFFS / 流動包裝（臥式）', desc: '適用於固體、有形狀的產品。枕型包裝格式。50–300袋/分鐘。最適合餅乾、營養棒和農產品。' },
      { name: '預製袋機（旋轉式/直線式）', desc: '向預製站立袋或拉鍊袋中充填。20–80袋/分鐘。外觀精美，支援拉鍊/吸嘴。' },
      { name: '條形袋/小袋機', desc: '高速多排小袋充填，適用於單份粉末或液體。50–400袋/分鐘。' },
      { name: '真空包裝機', desc: '單室或雙室。抽真空延長貨架期。適用於肉類、奶酪、咖啡、乾貨。' },
      { name: '充氮沖洗', desc: '整合充氣模組，適用於對氧化敏感的產品。可配置於VFFS、預製袋機和真空室機上。' },
      { name: '材質與認證', desc: 'CE認證；SUS304/316L不鏽鋼；電壓/頻率可客製；薄膜寬度和長度伺服可調。' },
    ],

    decisionsTitle: '關鍵決策因素',
    decisions: [
      { factor: '產品形態', guide: '固體/有形狀 → HFFS。粉末/顆粒/液體 → VFFS。高端品牌 → 預製袋機。' },
      { factor: '袋型', guide: '枕型袋 → VFFS或HFFS。站立袋/拉鍊袋 → 預製袋機。小袋 → 條形袋機。' },
      { factor: '產量速度', guide: '< 30袋/分鐘 → 預製袋機。30–100 → 配秤VFFS。> 100 → 高速VFFS或HFFS。' },
      { factor: '貨架期要求', guide: '標準 → 熱封。延長 → 真空+充氣+高阻隔薄膜。' },
      { factor: '預算', guide: '基礎VFFS性價比最高。預製袋單袋成本較高，但外觀更佳。' },
      { factor: '格式靈活性', guide: '多種袋型 → 帶可調成型器的伺服VFFS。產品組合多 → 預製袋機。' },
    ],

    integrationTitle: '工藝整合',
    integrationDesc: '該設備在包裝環節整合到您更廣泛的生產流程中。典型的袋裝整合產線可能包括：',
    integrationSteps: ['原料/產品進料', '計量秤/充填機', '薄膜進給/袋子進給', '成型-充填-封口', '充氣（可選）', '封口/切斷', '檢測（重量/視覺）', '打碼', '輸送出料', '裝箱'],
    integrationFooter: '我們圍繞您的產品和工廠設計完整袋裝產線。單機或配備計量秤、金屬探測器、貼標機和裝箱機的完整產線。',

    faqTitle: '常見問題',
    faq: [
      {
        q: 'VFFS和預製袋機有什麼區別？',
        a: 'VFFS從卷膜即時成型製袋——單袋材料成本低，適合大批量標準格式。預製袋機使用成品袋——外觀更精美，支援高端功能（拉鍊、吸嘴、折角），但單袋成本更高。大多數零食生產商從VFFS起步；高端/出口品牌通常偏好預製袋機。',
      },
      {
        q: '同一台機器能處理粉末和液體產品嗎？',
        a: '通常不能在不重新配置的情況下使用同一台機器處理兩者。粉末VFFS使用螺旋計量或多頭秤；液體VFFS使用活塞泵或流量計。我們建議粉末和液體使用獨立機器，或在產品組合需要靈活性時選用預製袋機。',
      },
      {
        q: '一台VFFS機能處理哪些袋型尺寸？',
        a: '大多數VFFS機覆蓋一定範圍——例如袋寬80–300mm，長度伺服可調。換型通常需要15–30分鐘。對於差異很大的格式（5克小袋與1公斤袋），建議使用獨立機器。',
      },
      {
        q: '支援拉鍊袋和吸嘴袋嗎？',
        a: '支援。拉鍊安裝模組適用於VFFS和預製袋機。吸嘴插入功能支援預製袋旋轉式機器。這些均為附加模組，需要額外投資。',
      },
      {
        q: '相容哪些薄膜材料？',
        a: 'PE、CPP、OPP、PET/PE複合膜、鋁箔複合膜及專業多層薄膜。我們根據您產品的防潮要求、阻氧需求和貨架期目標提供薄膜選型建議。',
      },
      {
        q: '取得推薦方案需要提供哪些資訊？',
        a: '產品名稱和形態（固體/粉末/液體）、目標袋型和尺寸、所需產量速度、國家/電壓，以及是否需要充氮或真空。使用我們的推薦表單可獲得最快回應。',
      },
    ],

    relatedTitle: '相關應用與資源',
    relatedLinks: [
      { label: '如何選擇袋裝包裝機', href: '/resources/how-to-choose-pouch-packing-machine' },
      { label: 'VFFS與HFFS包裝機比較', href: '/resources/vffs-vs-hffs' },
      { label: '預製袋機與VFFS比較', href: '/resources/premade-pouch-machine-vs-vffs' },
      { label: '取得機器推薦', href: '/recommend' },
    ],

    ctaTitle: '告訴我們您的產品和包裝格式——我們將為您匹配合適的機器。',
    ctaSubtitle: 'VFFS、預製袋機、條形袋機或真空包裝——我們的工程師根據您的產品、產量目標和袋型規格進行推薦。',
    ctaBtn1: '取得機器推薦',
    ctaBtn2: '聯絡工程團隊',
  },

  fr: {
    kicker: 'EMBALLAGE EN SACHET ET FLEXIBLE',
    heroTitle: 'Machines d\'emballage en sachet — VFFS, HFFS, Sachet préformé et systèmes sous vide',
    heroSubtitle: 'SunGene fabrique des machines d\'emballage en sachet pour les sachets plats, les pochettes debout, les pochettes avec fermeture à glissière, les sachets sous vide, l\'emballage flux et les sticks. Le choix de la machine dépend de votre produit, du format du sachet, de la vitesse requise et du mode de scellage.',

    whoTitle: 'Pour qui ?',
    whoItems: [
      { title: 'Marques de snacks & alimentaires', desc: 'Chips, noix, bonbons, fruits secs, café — nécessitant des emballages attrayants avec une bonne présence en rayon.' },
      { title: 'Producteurs de liquides & sauces', desc: 'Sachets, pochettes debout avec bec verseur, sachets rétort pour sauces, condiments et produits laitiers.' },
      { title: 'Pharmaceutique & compléments', desc: 'Sticks à dose unique, sachets avec remplissage précis pour produits pharmaceutiques en poudre ou liquides.' },
      { title: 'FMCG & biens de consommation', desc: 'Emballages flexibles de marque pour marchés de consommation — pochettes à glissière, pochettes à bec, flow wrap.' },
    ],

    productsTitle: 'Produits adaptés',
    productGroups: [
      { label: 'Solides secs & snacks', items: ['Chips', 'Noix', 'Granola', 'Café', 'Aliments pour animaux', 'Bonbons', 'Fruits secs'] },
      { label: 'Poudres en sachets', items: ['Sachets d\'épices', 'Boisson instantanée', 'Protéine en poudre', 'Détergent'] },
      { label: 'Liquides & pâtes', items: ['Sachets de sauce', 'Sachets de ketchup', 'Crème cosmétique', 'Yaourt'] },
      { label: 'Formats spéciaux', items: ['Sachets rétort (stériles)', 'Sachets sous vide (viande, fromage)', 'Flush azote (café)'] },
    ],
    productsNote: 'Le choix du matériau d\'emballage (PE, PET, feuille d\'aluminium, multicouche) influence le mode de scellage et le type de machine. Nous conseillons sur la sélection du film dans le cadre de notre recommandation.',

    packagingTitle: 'Options d\'emballage et de production',
    packagingItems: [
      { label: 'Types de sachets', value: 'Sachet plat (VFFS), pochette debout (VFFS/préformé), pochette à glissière, flow wrap (HFFS), sachet/stick pack, sachet sous vide, sachet rétort' },
      { label: 'Plage de remplissage', value: 'Sticks de 1g à sachets de 5kg — selon le type de machine et le format' },
      { label: 'Plage de production', value: '20–300 sachets/min selon le format, le type de remplissage et la configuration de la machine' },
    ],
    packagingNote: 'Toutes les plages indiquées dépendent de la configuration — nous confirmons en fonction de votre produit, format de sachet et type de remplissage.',

    configurationsTitle: 'Configurations disponibles',
    configurations: [
      { name: 'VFFS (Vertical Form-Fill-Seal)', desc: 'Forme les sachets à partir d\'un film en rouleau verticalement. Pour poudres, granulés, liquides. 30–150 sachets/min. Faible coût de film par sachet.' },
      { name: 'HFFS / Flow Wrap (Horizontal)', desc: 'Pour produits solides et formés. Format d\'emballage plat. 50–300 sachets/min. Idéal pour biscuits, barres, produits frais.' },
      { name: 'Machine à sachet préformé (Rotative / Linéaire)', desc: 'Remplissage dans des pochettes debout ou à glissière préformées. 20–80 sachets/min. Aspect premium, compatible zipper/bec verseur.' },
      { name: 'Machine stick pack / sachet', desc: 'Remplissage multi-voies haute vitesse pour poudre ou liquide en dose unique. 50–400 sachets/min.' },
      { name: 'Machine sous vide', desc: 'Simple ou double chambre. Supprime l\'air pour prolonger la durée de conservation. Pour viande, fromage, café, produits secs.' },
      { name: 'Flush d\'azote', desc: 'Module de flush gaz intégré pour produits sensibles à l\'oxydation. Disponible sur VFFS, sachets préformés et machines sous vide à chambre.' },
      { name: 'Matériaux & conformité', desc: 'Certifié CE ; acier inoxydable SUS304/316L ; tension/fréquence configurables ; largeur et longueur film ajustables par servo.' },
    ],

    decisionsTitle: 'Facteurs de décision clés',
    decisions: [
      { factor: 'Forme du produit', guide: 'Solide/formé → HFFS. Poudre/granulé/liquide → VFFS. Marque premium → sachet préformé.' },
      { factor: 'Format du sachet', guide: 'Sachet plat → VFFS ou HFFS. Debout/glissière → sachet préformé. Sachet → machine stick pack.' },
      { factor: 'Vitesse de production', guide: '< 30 sachets/min → sachet préformé. 30–100 → VFFS avec peseur. > 100 → VFFS haute vitesse ou HFFS.' },
      { factor: 'Durée de conservation', guide: 'Standard → thermoscellage. Prolongée → vide + flush gaz + film barrière.' },
      { factor: 'Budget', guide: 'VFFS de base est le plus rentable. Sachet préformé a un coût par sachet plus élevé mais meilleur aspect.' },
      { factor: 'Flexibilité de format', guide: 'Plusieurs tailles de sachets → VFFS servo avec formeur réglable. Mix élevé → sachet préformé.' },
    ],

    integrationTitle: 'Intégration au process',
    integrationDesc: 'Cette machine s\'intègre à votre flux de production global au stade de l\'emballage. Une ligne sachet intégrée typique peut inclure :',
    integrationSteps: [
      'Alimentation matière / produit',
      'Peseuse / remplisseuse',
      'Alimentation film / sachets',
      'Form-fill-seal',
      'Flush gaz (optionnel)',
      'Scellage / découpe',
      'Contrôle (poids / vision)',
      'Datage',
      'Convoyeur sortie',
      'Mise en carton',
    ],
    integrationFooter: 'Nous concevons la ligne sachet complète autour de votre produit et de votre installation. Machines individuelles ou lignes complètes avec peseuse, détecteur de métaux, étiqueteuse et encaisseuse.',

    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Quelle est la différence entre VFFS et machine à sachet préformé ?',
        a: 'Le VFFS forme les sachets à partir d\'un rouleau de film à la volée — coût matériau par sachet plus faible, adapté aux formats standards en grand volume. Les machines à sachet préformé utilisent des pochettes finies — meilleur aspect, fonctionnalités premium (zipper, bec, soufflet), mais coût par sachet plus élevé. La plupart des producteurs de snacks commencent avec VFFS ; les marques premium/export préfèrent souvent le sachet préformé.',
      },
      {
        q: 'La machine peut-elle traiter des produits en poudre et liquides ?',
        a: 'Pas généralement sur la même machine sans reconfiguration. VFFS poudre utilise une vis doseuse ou peseuse multi-têtes ; VFFS liquide utilise une pompe à piston ou débitmètre. Nous recommandons des machines séparées pour poudre et liquide, ou une machine à sachet préformé si votre mix produit nécessite de la flexibilité.',
      },
      {
        q: 'Quels formats de sachets une machine VFFS peut-elle gérer ?',
        a: 'La plupart des machines VFFS couvrent une plage — ex. largeur sachet 80–300mm avec longueur ajustable par servo. Les changements de format prennent 15–30 minutes. Pour des formats très différents (sachet 5g vs sac 1kg), des machines séparées sont recommandées.',
      },
      {
        q: 'Prenez-vous en charge les pochettes à glissière et à bec verseur ?',
        a: 'Oui. Les applicateurs de glissière sont disponibles pour les machines VFFS et à sachet préformé. L\'insertion de bec verseur est prise en charge sur les machines rotatives à sachet préformé. Ce sont des modules additionnels avec investissement supplémentaire.',
      },
      {
        q: 'Quels matériaux de film sont compatibles ?',
        a: 'PE, CPP, OPP, stratifiés PET/PE, stratifiés feuille d\'aluminium, et films multicouches spéciaux. Nous conseillons sur la sélection du film en fonction de la sensibilité à l\'humidité, des besoins en barrière oxygène et de la durée de conservation cible de votre produit.',
      },
      {
        q: 'Quelles informations dois-je fournir pour obtenir une recommandation ?',
        a: 'Nom et forme du produit (solide/poudre/liquide), format et taille du sachet cible, vitesse de production requise, pays/tension, et si vous avez besoin d\'un flush azote ou vide. Utilisez notre formulaire de recommandation pour une réponse plus rapide.',
      },
    ],

    relatedTitle: 'Applications & ressources associées',
    relatedLinks: [
      { label: 'Comment choisir une machine d\'emballage en sachet', href: '/resources/how-to-choose-pouch-packing-machine' },
      { label: 'VFFS vs HFFS — Quel est le bon choix ?', href: '/resources/vffs-vs-hffs' },
      { label: 'Machine à sachet préformé vs VFFS', href: '/resources/premade-pouch-machine-vs-vffs' },
      { label: 'Obtenir une recommandation de machine', href: '/recommend' },
    ],

    ctaTitle: 'Dites-nous votre produit et votre format d\'emballage — nous trouverons la bonne machine.',
    ctaSubtitle: 'VFFS, sachet préformé, stick pack ou vide — nos ingénieurs recommandent en fonction de votre produit, objectif de production et spécification de sachet.',
    ctaBtn1: 'Obtenir une recommandation de machine',
    ctaBtn2: 'Parler à l\'ingénierie',
  },

  es: {
    kicker: 'ENVASADO EN BOLSA Y FLEXIBLE',
    heroTitle: 'Máquinas envasadoras en bolsa — VFFS, HFFS, Bolsa preformada y sistemas de vacío',
    heroSubtitle: 'SunGene fabrica máquinas envasadoras en bolsa para bolsas planas, bolsas de pie, bolsas con cremallera, bolsas de vacío, flow wrap y sticks. La selección de la máquina depende de su producto, formato de bolsa, velocidad requerida y método de sellado.',

    whoTitle: '¿Para quién es?',
    whoItems: [
      { title: 'Marcas de snacks y alimentos', desc: 'Patatas fritas, frutos secos, caramelos, frutas secas, café — necesitan bolsas atractivas con buena presencia en el lineal.' },
      { title: 'Productores de líquidos y salsas', desc: 'Sobres, bolsas de pie con boquilla, bolsas retort para salsas, condimentos y lácteos.' },
      { title: 'Farmacéutica y suplementos', desc: 'Sticks monodosis, sobres con llenado preciso para productos farmacéuticos en polvo o líquidos.' },
      { title: 'FMCG y bienes de consumo', desc: 'Envases flexibles de marca para mercados de consumo — bolsas con cremallera, bolsas con boquilla, flow wrap.' },
    ],

    productsTitle: 'Productos adecuados',
    productGroups: [
      { label: 'Sólidos secos y snacks', items: ['Patatas fritas', 'Frutos secos', 'Granola', 'Café', 'Comida para mascotas', 'Caramelos', 'Frutas secas'] },
      { label: 'Polvos en bolsa', items: ['Sobres de especias', 'Bebida instantánea', 'Proteína en polvo', 'Detergente'] },
      { label: 'Líquidos y pastas', items: ['Bolsas de salsa', 'Sobres de ketchup', 'Crema cosmética', 'Yogur'] },
      { label: 'Formatos especiales', items: ['Bolsas retort (estériles)', 'Bolsas de vacío (carne, queso)', 'Flush de nitrógeno (café)'] },
    ],
    productsNote: 'La selección del material de embalaje (PE, PET, papel de aluminio, multicapa) afecta al método de sellado y tipo de máquina. Asesoramos sobre la selección del film como parte de la recomendación.',

    packagingTitle: 'Opciones de envasado y producción',
    packagingItems: [
      { label: 'Tipos de bolsa', value: 'Bolsa plana (VFFS), bolsa de pie (VFFS/preformada), bolsa con cremallera, flow wrap (HFFS), sobre/stick pack, bolsa de vacío, bolsa retort' },
      { label: 'Rango de peso de llenado', value: 'Sticks de 1g a bolsas de 5kg — depende del tipo de máquina y formato' },
      { label: 'Rango de producción', value: '20–300 bolsas/min según formato, tipo de llenado y configuración de la máquina' },
    ],
    packagingNote: 'Todos los rangos indicados dependen de la configuración — los confirmamos según su producto específico, formato de bolsa y tipo de llenado.',

    configurationsTitle: 'Configuraciones disponibles',
    configurations: [
      { name: 'VFFS (Vertical Form-Fill-Seal)', desc: 'Forma bolsas a partir de film en rollo verticalmente. Para polvos, gránulos, líquidos. 30–150 bolsas/min. Bajo coste de film por bolsa.' },
      { name: 'HFFS / Flow Wrap (Horizontal)', desc: 'Para productos sólidos y con forma. Formato de envuelto plano. 50–300 bolsas/min. Ideal para galletas, barritas, productos frescos.' },
      { name: 'Máquina de bolsa preformada (Rotativa / Lineal)', desc: 'Llena bolsas de pie o con cremallera preformadas. 20–80 bolsas/min. Apariencia premium, compatible con zipper/boquilla.' },
      { name: 'Máquina stick pack / sobre', desc: 'Llenado multi-carril de alta velocidad para polvo o líquido en dosis única. 50–400 sobres/min.' },
      { name: 'Máquina envasadora al vacío', desc: 'Cámara simple o doble. Extrae aire para extender la vida útil. Para carne, queso, café, productos secos.' },
      { name: 'Flush de nitrógeno', desc: 'Módulo de flush de gas integrado para productos sensibles a la oxidación. Disponible en VFFS, bolsa preformada y máquinas de vacío de cámara.' },
      { name: 'Materiales y cumplimiento', desc: 'Certificado CE; acero inoxidable SUS304/316L; tensión/frecuencia configurables; anchura y longitud de film ajustables por servo.' },
    ],

    decisionsTitle: 'Factores de decisión clave',
    decisions: [
      { factor: 'Forma del producto', guide: 'Sólido/con forma → HFFS. Polvo/gránulo/líquido → VFFS. Marca premium → bolsa preformada.' },
      { factor: 'Formato de bolsa', guide: 'Bolsa plana → VFFS o HFFS. De pie/cremallera → bolsa preformada. Sobre → máquina stick pack.' },
      { factor: 'Velocidad de producción', guide: '< 30 bolsas/min → bolsa preformada. 30–100 → VFFS con pesadora. > 100 → VFFS alta velocidad o HFFS.' },
      { factor: 'Requisito de vida útil', guide: 'Estándar → sellado térmico. Extendida → vacío + flush gas + film barrera.' },
      { factor: 'Presupuesto', guide: 'VFFS básico es el más rentable. Bolsa preformada tiene mayor coste por bolsa pero mejor apariencia.' },
      { factor: 'Flexibilidad de formato', guide: 'Múltiples tamaños → VFFS servo con formador ajustable. Alta variedad → bolsa preformada.' },
    ],

    integrationTitle: 'Integración en el proceso',
    integrationDesc: 'Esta máquina se integra en su flujo de producción general en la etapa de envasado. Una línea de bolsa integrada típica puede incluir:',
    integrationSteps: [
      'Alimentación de materia prima / producto',
      'Pesadora / llenadora',
      'Alimentación de film / bolsas',
      'Form-fill-seal',
      'Flush de gas (opcional)',
      'Sellado / corte',
      'Inspección (peso / visión)',
      'Fechado',
      'Salida por cinta',
      'Encajado',
    ],
    integrationFooter: 'Diseñamos la línea de bolsa completa en torno a su producto e instalación. Máquinas individuales o líneas completas con pesadora, detector de metales, etiquetadora y encajadora.',

    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Cuál es la diferencia entre VFFS y máquina de bolsa preformada?',
        a: 'VFFS forma bolsas a partir de un rollo de film al vuelo — menor coste de material por bolsa, bueno para formatos estándar de alto volumen. Las máquinas de bolsa preformada usan bolsas terminadas — mejor apariencia, soporta funciones premium (cremallera, boquilla, fuelle), pero mayor coste por bolsa. La mayoría de productores de snacks comienzan con VFFS; las marcas premium/exportación suelen preferir bolsa preformada.',
      },
      {
        q: '¿Puede la máquina manejar productos en polvo y líquidos?',
        a: 'Generalmente no en la misma máquina sin reconfiguración. VFFS para polvo usa tornillo dosificador o pesadora multi-cabeza; VFFS para líquido usa bomba de pistón o caudalímetro. Recomendamos máquinas separadas para polvo y líquido, o una máquina de bolsa preformada si su mix de productos requiere flexibilidad.',
      },
      {
        q: '¿Qué tamaños de bolsa puede manejar una máquina VFFS?',
        a: 'La mayoría de máquinas VFFS cubren un rango — p. ej. ancho de bolsa 80–300mm con longitud ajustable por servo. Los cambios de formato toman 15–30 minutos. Para formatos muy diferentes (sobre de 5g vs bolsa de 1kg), se recomiendan máquinas separadas.',
      },
      {
        q: '¿Soportan bolsas con cremallera y boquilla?',
        a: 'Sí. Los aplicadores de cremallera están disponibles tanto para VFFS como para máquinas de bolsa preformada. La inserción de boquilla está soportada en máquinas rotativas de bolsa preformada. Son módulos adicionales con inversión extra.',
      },
      {
        q: '¿Qué materiales de film son compatibles?',
        a: 'PE, CPP, OPP, laminados PET/PE, laminados de papel de aluminio y films multicapa especiales. Asesoramos sobre la selección del film según la sensibilidad a la humedad, necesidades de barrera al oxígeno y objetivo de vida útil de su producto.',
      },
      {
        q: '¿Qué información debo proporcionar para obtener una recomendación?',
        a: 'Nombre y forma del producto (sólido/polvo/líquido), formato y tamaño de bolsa objetivo, velocidad de producción requerida, país/tensión, y si necesita flush de nitrógeno o vacío. Use nuestro formulario de recomendación para una respuesta más rápida.',
      },
    ],

    relatedTitle: 'Aplicaciones y recursos relacionados',
    relatedLinks: [
      { label: 'Cómo elegir una máquina envasadora en bolsa', href: '/resources/how-to-choose-pouch-packing-machine' },
      { label: 'VFFS vs HFFS — ¿Cuál es la correcta para ti?', href: '/resources/vffs-vs-hffs' },
      { label: 'Máquina de bolsa preformada vs VFFS', href: '/resources/premade-pouch-machine-vs-vffs' },
      { label: 'Obtener una recomendación de máquina', href: '/recommend' },
    ],

    ctaTitle: 'Cuéntenos su producto y formato de envasado — encontraremos la máquina adecuada.',
    ctaSubtitle: 'VFFS, bolsa preformada, stick pack o vacío — nuestros ingenieros recomiendan según su producto, objetivo de producción y especificación de bolsa.',
    ctaBtn1: 'Obtener una recomendación de máquina',
    ctaBtn2: 'Hablar con ingeniería',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PouchPackingMachinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content.en
  const heroPhoto = PHOTO.machines.pouchPackingHero
  const guides = getResourceArticlesByMachine('pouch-packing-machine', lang, 6)
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
    inLanguage: LANG_META[lang].htmlLang,
    name: 'Pouch Packing Machine',
    description: 'SunGene manufactures VFFS, HFFS, pre-made pouch, stick pack, and vacuum packing machines for snacks, food, pharmaceutical, and consumer goods flexible packaging.',
    url: `${SITE_URL}/${lang}/machines/pouch-packing-machine`,
    image: [`${SITE_URL}${heroPhoto}`],
    brand: { '@type': 'Brand', name: 'SunGene' },
    manufacturer: { '@type': 'Organization', name: 'SunGene Co., LTD', url: SITE_URL },
    category: 'Pouch & Bag Packaging Machinery',
    material: 'SUS304/316L Stainless Steel',
    countryOfOrigin: { '@type': 'Country', name: 'Taiwan' },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Output Speed', value: '20–300 bags/min' },
      { '@type': 'PropertyValue', name: 'Bag Types', value: 'Pillow, stand-up, zipper, stick pack, vacuum' },
      { '@type': 'PropertyValue', name: 'Certification', value: 'CE' },
      { '@type': 'PropertyValue', name: 'Voltage Options', value: '110V/220V/380V/480V, 50/60Hz' },
      { '@type': 'PropertyValue', name: 'MOQ', value: '1 unit' },
      { '@type': 'PropertyValue', name: 'Lead Time', value: '30–60 days' },
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'SunGene Co., LTD', url: SITE_URL },
    },
  }

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={productSchema} />

      {/* ── 1. Hero ──────────────────────────────────────────────────────────── */}
      <PageHero
        kicker={t.kicker}
        title={t.heroTitle}
        desc={t.heroSubtitle}
        image={{
          src: heroPhoto,
          alt: 'Pouch packing machine producing flexible packaging in factory',
          priority: true,
          aspectClassName: 'aspect-[16/10]',
        }}
      />
      <section className="bg-white py-6">
        <Container className="max-w-6xl">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: BREADCRUMB_LABELS[lang].machinery, href: `/${lang}/machinery` },
              { label: t.heroTitle, href: `/${lang}/machines/pouch-packing-machine` },
            ]}
          />
          <MachineQuickLinks lang={lang} machine="pouch-packing-machine" />
        </Container>
      </section>

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
                href={link.href === '/recommend' ? `/${lang}/recommend?machine=pouch-packing-machine` : `/${lang}${link.href}`}
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
                <a href={`/${lang}/resources/topic/pouch-packing-machine`} className="text-accent-600 hover:underline">
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
            <ButtonLink href={`/${lang}/recommend?machine=pouch-packing-machine`} size="lg">{t.ctaBtn1}</ButtonLink>
            <a
              href={`/${lang}/contact?machine=pouch-packing-machine`}
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
