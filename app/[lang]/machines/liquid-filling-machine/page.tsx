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
import { buildProductSchema } from '@/lib/productSchema'
import RelatedHubs from '@/components/RelatedHubs'
import TrustBar from '@/components/TrustBar'
import QuickAssessment from '@/components/QuickAssessment'
import MachineDecisionGuide from '@/components/machines/MachineDecisionGuide'
import { getTestimonialsForMachine, getVideosForMachine } from '@/lib/cmsContent'

// ─── Metadata ────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  en: 'Liquid Filling Configuration Route — Piston, Gravity, Pump & Flow Meter',
  cn: '液体灌装配置路线 — 活塞、重力、泵与流量计',
  zh: '液體灌裝配置路線 — 活塞、重力、泵與流量計',
  fr: 'Machines de remplissage liquide — Piston, Gravité, Pompe & Débitmètre',
  es: 'Máquinas llenadoras de líquidos — Pistón, Gravedad, Bomba y Caudalímetro',
  pt: 'Máquinas de enchimento de líquidos — Pistão, Gravidade, Bomba e Medidor de Fluxo',
  ko: '액체 충전 기계 — 피스톤, 중력식, 펌프 및 유량계 방식',
  ja: '液体充填機 — ピストン、重力、ポンプ・流量計システム',
  ar: 'آلات تعبئة السوائل — بالمكبس والجاذبية والضخ وعداد التدفق',
  th: 'เครื่องบรรจุของเหลว — แบบลูกสูบ แรงโน้มถ่วง ปั๊ม และมิเตอร์วัดการไหล',
  vi: 'Máy chiết rót chất lỏng — Piston, Trọng lực, Bơm & Đồng hồ đo lưu lượng',
  de: 'Flüssigkeitsfüllmaschinen — Kolben, Schwerkraft, Pumpe & Durchflussmesser',
}

const metaDescs: Record<string, string> = {
  en: 'Liquid filling sourcing support: select the right filling method, define dripping/foaming/accuracy checkpoints, plan washdown/CIP needs, and align FAT scope before approval.',
  cn: '液体灌装采购支持：选择合适灌装方式，定义滴漏/起泡/精度要点，规划清洗与卫生要求，并在核准前对齐 FAT 范围。',
  zh: '液體灌裝採購支援：選擇合適灌裝方式，定義滴漏/起泡/精度要點，規劃清洗與衛生要求，並在核准前對齊 FAT 範圍。',
  fr: 'Machines de remplissage pour eau, jus, sauces, huiles, cosmétiques, détergents et liquides pharma. Options piston, gravité/débordement, pompe et débitmètre selon viscosité, particules et hygiène.',
  es: 'Máquinas de llenado para agua, jugo, salsas, aceite, cosméticos, limpieza y pharma. Pistón, gravedad/desbordamiento, bomba y caudalímetro según viscosidad, partículas e higiene.',
  pt: 'Máquinas de envase para água, suco, molhos, óleo, cosméticos, limpeza e pharma. Pistão, gravidade/transbordo, bomba e medidor de vazão conforme viscosidade, particulados e higiene.',
  ko: '액체 충전 설비(물·주스·소스·오일·화장품·세정제·제약). 피스톤/중력(오버플로우)/펌프/유량계 옵션을 점도, 입자, 위생 요구 기준으로 선택합니다.',
  ja: '水、ジュース、ソース、油、化粧品、洗浄剤、医薬品液体向けの充填設備。ピストン／重力（オーバーフロー）／ポンプ／流量計を粘度・粒子・衛生要件で選定します。',
  ar: 'آلات تعبئة للسوائل (ماء، عصير، صلصات، زيت، مستحضرات، منظفات، سوائل دوائية). خيارات مكبس/جاذبية(فيضان)/مضخة/عداد تدفق حسب اللزوجة والجزيئات ومتطلبات النظافة.',
  th: 'เครื่องบรรจุของเหลวสำหรับน้ำ น้ำผลไม้ ซอส น้ำมัน เครื่องสำอาง ผลิตภัณฑ์ทำความสะอาด และเภสัชกรรม มีแบบลูกสูบ แรงโน้มถ่วง(ล้น) ปั๊ม และมิเตอร์วัดการไหล เลือกตามความหนืด อนุภาค และสุขอนามัย',
  vi: 'Máy chiết rót chất lỏng cho nước, nước trái cây, nước sốt, dầu, mỹ phẩm, chất tẩy rửa và dược phẩm. Tùy chọn piston, trọng lực (tràn), bơm và lưu lượng kế theo độ nhớt, hạt và yêu cầu vệ sinh.',
  de: 'Flüssigkeitsfüllmaschinen für Wasser, Saft, Sauce, Öl, Kosmetik, Reinigungsmittel und Pharma. Kolben, Schwerkraft/Überlauf, Pumpe und Durchflussmesser – je nach Viskosität, Partikeln und Hygieneanforderungen.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/liquid-filling-machine',
    type: 'website',
    keywords: [
      'liquid filling configuration', 'filling method selection', 'dripping foaming control', 'accuracy acceptance criteria',
      'washdown CIP planning', 'supplier vetting', 'FAT checklist', 'export documentation',
      'sauce filling configuration', 'oil filling configuration',
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
    kicker: 'LIQUID FILLING SYSTEMS',
    heroTitle: 'Liquid Filling Machines — Piston, Gravity, Overflow, and Pump Systems',
    heroSubtitle: 'SunGene manufactures liquid filling machines for thin liquids, viscous sauces, oils, creams, and industrial fluids. The right filling method depends on your liquid\'s viscosity, fill volume, foam sensitivity, and required accuracy.',

    whoTitle: 'Who It\'s For',
    whoItems: [
      { title: 'Food & Beverage', desc: 'Water, juice, sauce, oil, vinegar, dairy, condiments — food-grade contact materials and hygienic design.' },
      { title: 'Cosmetics & Personal Care', desc: 'Shampoo, lotion, cream, perfume, hand sanitizer — overflow fillers for consistent fill level in clear bottles.' },
      { title: 'Chemical & Cleaning', desc: 'Detergent, disinfectant, industrial lubricant, pesticide — chemical-resistant materials and enclosed design.' },
      { title: 'Pharmaceutical', desc: 'Bottles, vials, syringes — GMP-compliant systems with SUS316L contact parts and cleanroom-ready designs.' },
    ],

    productsTitle: 'Suitable Products',
    productGroups: [
      { label: 'Thin / low-viscosity', items: ['Water', 'Juice', 'Vinegar', 'Alcohol', 'Cleaning agents'] },
      { label: 'Medium viscosity', items: ['Cooking oil', 'Ketchup', 'Salad dressing', 'Honey', 'Shampoo'] },
      { label: 'High viscosity / paste', items: ['Tomato paste', 'Cream', 'Ointment', 'Adhesive'] },
      { label: 'Foamy liquids', items: ['Beer', 'Carbonated beverages — special filling head required'] },
    ],
    productsNote: 'Viscosity and foam level determine the optimal filling method. We recommend based on product data.',

    packagingTitle: 'Packaging & Output Options',
    packagingItems: [
      { label: 'Container types', value: 'Bottles (PET/glass), jars, pouches, cups, tubes, cans, vials' },
      { label: 'Fill volume range', value: '5ml to 20L — depends on machine type and filling head configuration' },
      { label: 'Output range', value: '5–300 bottles/min depending on container format, fill volume, and machine configuration' },
    ],
    packagingNote: 'All stated ranges are configuration-dependent — we confirm based on your container, fill volume, and liquid type.',

    configurationsTitle: 'Available Configurations',
    configurations: [
      { name: 'Piston Filler', desc: 'High accuracy (±0.5–1%), suitable for thick to thin liquids. Adjustable piston stroke for volume. Servo-driven for highest accuracy.' },
      { name: 'Gravity Filler', desc: 'For thin, free-flowing liquids. Simple, low maintenance. Fill by weight or time.' },
      { name: 'Overflow Filler', desc: 'Fills to a consistent level regardless of volume — ideal for cosmetics in clear bottles where appearance matters.' },
      { name: 'Peristaltic Pump Filler', desc: 'For aggressive chemicals, pharmaceuticals, or very small volumes. No product contact with pump mechanism.' },
      { name: 'Flow Meter / Mass Flow Filler', desc: 'Highly accurate volumetric filling for valuable liquids. Used in oil, spirits, and pharmaceutical applications.' },
      { name: 'Rotary Filling Machine', desc: 'High-speed multi-head system for bottles. 50–300 bottles/min. Integrated with capper and labeler.' },
      { name: 'Pouch / Sachet Liquid Filler', desc: 'For sauce sachets, ketchup, or liquid pouches. Piston or peristaltic pump.' },
      { name: 'Materials & Compliance', desc: 'CE documentation support where applicable; SUS304/316L contact parts meet food or pharmaceutical standards; voltage/frequency configurable.' },
    ],

    decisionsTitle: 'Key Decision Factors',
    decisions: [
      { factor: 'Liquid viscosity', guide: 'Thin → gravity or overflow. Medium → piston or pump. Thick/paste → piston or gear pump.' },
      { factor: 'Fill accuracy', guide: '±1% needed → piston or flow meter. ±2% acceptable → gravity or time-based.' },
      { factor: 'Foam sensitivity', guide: 'Foamy products → bottom-up filling or counter-pressure system.' },
      { factor: 'Container type', guide: 'Bottles → linear or rotary filler. Pouches → pouch filler. Vials → pharmaceutical filler.' },
      { factor: 'Output target', guide: '< 20/min → linear piston. 20–80/min → multi-head linear. > 80/min → rotary.' },
      { factor: 'Hygiene requirements', guide: 'Cosmetic/food → SUS304 + CIP design. Pharma → SUS316L + GMP validation.' },
    ],

    integrationTitle: 'Process Integration',
    integrationDesc: 'This machine integrates into your broader workflow at the filling stage. A typical integrated liquid line may include:',
    integrationSteps: [
      'Liquid tank / hopper',
      'Pump or gravity feed',
      'Filling heads',
      'Container (bottle/pouch/cup)',
      'Capping / sealing',
      'Date coding',
      'Label applicator',
      'Inspection (fill level / weight)',
      'Conveyor',
      'Case packer',
    ],
    integrationFooter: 'We design filling systems to integrate with your container format, capping method, and labeling system. Single machines or complete fill-cap-label lines.',

    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'What filling method is best for cooking oil?',
        a: 'Flow meter or piston filling gives the best accuracy for oil. Overflow fillers are also used for oil in clear bottles where fill level appearance matters. We recommend flow meter filling for high-value oils where accuracy is critical.',
      },
      {
        q: 'Can the same machine fill both thin liquids and thick sauces?',
        a: 'A piston filler can handle a range of viscosities — from water-like to paste — by adjusting piston speed, valve timing, and nozzle size. For very wide viscosity range (water and thick paste on the same line), we usually recommend one machine per product type or a flexible piston filler with dedicated change parts.',
      },
      {
        q: 'What is the minimum and maximum fill volume?',
        a: 'This depends on machine type. Peristaltic pump fillers can do as little as 1–5ml. Piston fillers typically start at 5–10ml. Large industrial fillers can fill 10–20L containers. Tell us your target fill volume and container size.',
      },
      {
        q: 'Do you support foamy liquids like beer or carbonated drinks?',
        a: 'Yes, but these require counter-pressure filling heads or bottom-up filling nozzles to minimize foam. This is a specialized configuration — please specify if you\'re filling carbonated or foamy products.',
      },
      {
        q: 'Can I add a capper and labeler to the filling machine?',
        a: 'Yes. We supply complete fill-cap-label lines, including screw cappers, ROPP cappers, snap cappers, pressure-sensitive labelers, and sleeve labelers. These can be supplied as standalone machines or fully integrated lines.',
      },
      {
        q: 'What information do I need to provide to get a sourcing assessment?',
        a: 'Liquid name and approximate viscosity (e.g. "similar to water" or "similar to honey"), fill volume, container type and size, required output speed, country/voltage, and whether you need a standalone filler or full line. Use our assessment request form for the fastest response.',
      },
    ],

    relatedTitle: 'Related Applications & Resources',
    relatedLinks: [
      { label: 'How to Choose a Liquid Filling Machine', href: '/resources/how-to-choose-liquid-filling-machine' },
      { label: 'Piston vs Pump Filler — Comparison', href: '/resources/piston-vs-pump-filler' },
      { label: 'Sauce Filling Machine Selection Guide', href: '/resources/sauce-filling-machine-selection' },
      { label: 'Get a Sourcing Assessment', href: '/assessment' },
    ],

    ctaTitle: 'Describe your liquid and container — we\'ll define the right sourcing path.',
    ctaSubtitle: 'Piston, gravity, overflow, pump, or flow meter — our team guides the filling approach based on your product, accuracy requirement, and output target.',
    ctaBtn1: 'Get a Sourcing Assessment',
    ctaBtn2: 'Talk to Engineering',
  },

  cn: {
    kicker: '液体灌装系统',
    heroTitle: '液体灌装机 — 活塞式、重力式、溢流式与泵式系统',
    heroSubtitle: 'SunGene生产适用于稀薄液体、粘性酱料、油品、膏霜和工业流体的灌装机。最佳灌装方式取决于液体的粘度、灌装量、起泡敏感性和所需精度。',

    whoTitle: '适用客户',
    whoItems: [
      { title: '食品与饮料', desc: '水、果汁、酱料、油、醋、乳制品、调味品——食品级接触材料和卫生设计。' },
      { title: '化妆品与个人护理', desc: '洗发水、乳液、面霜、香水、洗手液——溢流式灌装机用于透明瓶中保持一致液位。' },
      { title: '化工与清洁', desc: '洗涤剂、消毒剂、工业润滑油、农药——耐化学腐蚀材料和全封闭设计。' },
      { title: '制药', desc: '瓶装、小瓶、注射器——符合GMP标准、SUS316L接触部件和洁净室设计。' },
    ],

    productsTitle: '适用产品',
    productGroups: [
      { label: '稀薄/低粘度', items: ['水', '果汁', '醋', '酒精', '清洁剂'] },
      { label: '中等粘度', items: ['食用油', '番茄酱', '沙拉酱', '蜂蜜', '洗发水'] },
      { label: '高粘度/膏状', items: ['番茄膏', '面霜', '软膏', '粘合剂'] },
      { label: '起泡液体', items: ['啤酒', '碳酸饮料——需要特殊灌装头'] },
    ],
    productsNote: '粘度和起泡程度决定最佳灌装方式。我们根据产品数据进行推荐。',

    packagingTitle: '包装与产量选项',
    packagingItems: [
      { label: '容器类型', value: '瓶装（PET/玻璃）、罐装、软袋、杯装、软管、马口铁罐、小瓶' },
      { label: '灌装量范围', value: '5ml至20L——取决于机器类型和灌装头配置' },
      { label: '产量范围', value: '5–300瓶/分钟，取决于容器格式、灌装量和机器配置' },
    ],
    packagingNote: '所有所示范围均取决于具体配置——我们根据您的容器、灌装量和液体类型进行确认。',

    configurationsTitle: '可用配置',
    configurations: [
      { name: '活塞式灌装机', desc: '高精度（±0.5–1%），适用于稠厚到稀薄的液体。可调节活塞行程控制容量。伺服驱动精度最高。' },
      { name: '重力式灌装机', desc: '适用于稀薄、自由流动的液体。结构简单，维护方便。按重量或时间灌装。' },
      { name: '溢流式灌装机', desc: '无论容量多少，灌装至一致液位——理想用于透明瓶中对外观有要求的化妆品。' },
      { name: '蠕动泵灌装机', desc: '适用于腐蚀性化学品、药品或极小容量。泵体不接触产品。' },
      { name: '流量计/质量流量灌装机', desc: '高精度体积灌装，适用于高价值液体。用于油品、烈酒和制药应用。' },
      { name: '旋转式灌装机', desc: '高速多头瓶装系统。50–300瓶/分钟。与封盖机和贴标机集成。' },
      { name: '软袋/小袋液体灌装机', desc: '适用于酱料袋、番茄酱或液体软袋。活塞泵或蠕动泵。' },
      { name: '材质与认证', desc: 'CE认证；SUS304/316L接触部件符合食品或制药标准；电压/频率可定制。' },
    ],

    decisionsTitle: '关键决策因素',
    decisions: [
      { factor: '液体粘度', guide: '稀薄 → 重力式或溢流式。中等 → 活塞式或泵式。稠厚/膏状 → 活塞式或齿轮泵。' },
      { factor: '灌装精度', guide: '需要±1% → 活塞式或流量计。±2%可接受 → 重力式或时间控制。' },
      { factor: '起泡敏感性', guide: '起泡产品 → 自下而上灌装或背压系统。' },
      { factor: '容器类型', guide: '瓶装 → 直线式或旋转式灌装机。软袋 → 软袋灌装机。小瓶 → 制药灌装机。' },
      { factor: '产量目标', guide: '< 20瓶/分钟 → 直线式活塞。20–80 → 多头直线式。> 80 → 旋转式。' },
      { factor: '卫生要求', guide: '化妆品/食品 → SUS304+CIP设计。制药 → SUS316L+GMP验证。' },
    ],

    integrationTitle: '工艺整合',
    integrationDesc: '该设备在灌装环节整合到您更广泛的生产流程中。典型的液体整合产线可能包括：',
    integrationSteps: ['储液罐/料斗', '泵送或重力进料', '灌装头', '容器（瓶/袋/杯）', '封盖/密封', '打码', '贴标机', '检测（液位/重量）', '输送带', '装箱机'],
    integrationFooter: '我们设计的灌装系统与您的容器格式、封盖方式和贴标系统相整合。单机或完整灌装-封盖-贴标产线。',

    faqTitle: '常见问题',
    faq: [
      {
        q: '食用油最适合哪种灌装方式？',
        a: '流量计或活塞式灌装对油品精度最高。溢流式灌装也用于透明瓶中对液位外观有要求的油品。对于精度要求高的高价值油品，我们推荐流量计灌装。',
      },
      {
        q: '同一台机器能灌装稀薄液体和稠厚酱料吗？',
        a: '活塞式灌装机通过调整活塞速度、阀门时序和喷嘴尺寸，可处理从水状到膏状的多种粘度范围。对于粘度差异极大的产品（水和稠膏在同一产线），我们通常建议每种产品类型使用独立机器，或使用带专用换型部件的灵活活塞式灌装机。',
      },
      {
        q: '最小和最大灌装量是多少？',
        a: '这取决于机器类型。蠕动泵灌装机最小可灌装1–5ml。活塞式灌装机通常从5–10ml起始。大型工业灌装机可灌装10–20L容器。请告知我们您的目标灌装量和容器尺寸。',
      },
      {
        q: '支持灌装啤酒或碳酸饮料等起泡液体吗？',
        a: '支持，但需要背压灌装头或自下而上灌装喷嘴以减少泡沫。这是一种专用配置——如果您灌装碳酸或起泡产品，请务必注明。',
      },
      {
        q: '可以在灌装机上添加封盖机和贴标机吗？',
        a: '可以。我们提供完整的灌装-封盖-贴标产线，包括旋盖机、ROPP封盖机、压盖机、压敏贴标机和套标机。可作为独立机器或完全集成产线供应。',
      },
      {
        q: '获取采购评估与建议需要提供哪些信息？',
        a: '液体名称和大致粘度（如"类似水"或"类似蜂蜜"）、灌装量、容器类型和尺寸、所需产量速度、国家/电压，以及是否需要单机灌装机或完整产线。使用我们的评估申请表单可获得最快响应。',
      },
    ],

    relatedTitle: '相关应用与资源',
    relatedLinks: [
      { label: '如何选择液体灌装机', href: '/resources/how-to-choose-liquid-filling-machine' },
      { label: '活塞式与泵式灌装机对比', href: '/resources/piston-vs-pump-filler' },
      { label: '酱料灌装机选型指南', href: '/resources/sauce-filling-machine-selection' },
      { label: '获取评估', href: '/assessment' },
    ],

    ctaTitle: '描述您的液体和容器——我们将提供评估并给出合适的灌装配置建议。',
    ctaSubtitle: '活塞式、重力式、溢流式、泵式或流量计——我们的工程师根据您的产品、精度要求和产量目标选择灌装方式。',
    ctaBtn1: '获取评估',
    ctaBtn2: '联系工程团队',
  },

  zh: {
    kicker: '液體灌裝系統',
    heroTitle: '液體灌裝機 — 活塞式、重力式、溢流式與泵式系統',
    heroSubtitle: 'SunGene生產適用於稀薄液體、黏性醬料、油品、膏霜和工業流體的灌裝機。最佳灌裝方式取決於液體的黏度、灌裝量、起泡敏感性和所需精度。',

    whoTitle: '適用客戶',
    whoItems: [
      { title: '食品與飲料', desc: '水、果汁、醬料、油、醋、乳製品、調味品——食品級接觸材料和衛生設計。' },
      { title: '化妝品與個人護理', desc: '洗髮水、乳液、面霜、香水、洗手液——溢流式灌裝機用於透明瓶中保持一致液位。' },
      { title: '化工與清潔', desc: '洗滌劑、消毒劑、工業潤滑油、農藥——耐化學腐蝕材料和全封閉設計。' },
      { title: '製藥', desc: '瓶裝、小瓶、注射器——符合GMP標準、SUS316L接觸部件和潔淨室設計。' },
    ],

    productsTitle: '適用產品',
    productGroups: [
      { label: '稀薄/低黏度', items: ['水', '果汁', '醋', '酒精', '清潔劑'] },
      { label: '中等黏度', items: ['食用油', '番茄醬', '沙拉醬', '蜂蜜', '洗髮水'] },
      { label: '高黏度/膏狀', items: ['番茄膏', '面霜', '軟膏', '黏合劑'] },
      { label: '起泡液體', items: ['啤酒', '碳酸飲料——需要特殊灌裝頭'] },
    ],
    productsNote: '黏度和起泡程度決定最佳灌裝方式。我們根據產品數據進行推薦。',

    packagingTitle: '包裝與產量選項',
    packagingItems: [
      { label: '容器類型', value: '瓶裝（PET/玻璃）、罐裝、軟袋、杯裝、軟管、馬口鐵罐、小瓶' },
      { label: '灌裝量範圍', value: '5ml至20L——取決於機器類型和灌裝頭配置' },
      { label: '產量範圍', value: '5–300瓶/分鐘，取決於容器格式、灌裝量和機器配置' },
    ],
    packagingNote: '所有所示範圍均取決於具體配置——我們根據您的容器、灌裝量和液體類型進行確認。',

    configurationsTitle: '可用配置',
    configurations: [
      { name: '活塞式灌裝機', desc: '高精度（±0.5–1%），適用於稠厚到稀薄的液體。可調節活塞行程控制容量。伺服驅動精度最高。' },
      { name: '重力式灌裝機', desc: '適用於稀薄、自由流動的液體。結構簡單，維護方便。按重量或時間灌裝。' },
      { name: '溢流式灌裝機', desc: '無論容量多少，灌裝至一致液位——理想用於透明瓶中對外觀有要求的化妝品。' },
      { name: '蠕動泵灌裝機', desc: '適用於腐蝕性化學品、藥品或極小容量。泵體不接觸產品。' },
      { name: '流量計/質量流量灌裝機', desc: '高精度體積灌裝，適用於高價值液體。用於油品、烈酒和製藥應用。' },
      { name: '旋轉式灌裝機', desc: '高速多頭瓶裝系統。50–300瓶/分鐘。與封蓋機和貼標機整合。' },
      { name: '軟袋/小袋液體灌裝機', desc: '適用於醬料袋、番茄醬或液體軟袋。活塞泵或蠕動泵。' },
      { name: '材質與認證', desc: '可提供 CE 文件支援（適用時）；SUS304/316L接觸部件符合食品或製藥標準；電壓/頻率可客製。' },
    ],

    decisionsTitle: '關鍵決策因素',
    decisions: [
      { factor: '液體黏度', guide: '稀薄 → 重力式或溢流式。中等 → 活塞式或泵式。稠厚/膏狀 → 活塞式或齒輪泵。' },
      { factor: '灌裝精度', guide: '需要±1% → 活塞式或流量計。±2%可接受 → 重力式或時間控制。' },
      { factor: '起泡敏感性', guide: '起泡產品 → 自下而上灌裝或背壓系統。' },
      { factor: '容器類型', guide: '瓶裝 → 直線式或旋轉式灌裝機。軟袋 → 軟袋灌裝機。小瓶 → 製藥灌裝機。' },
      { factor: '產量目標', guide: '< 20瓶/分鐘 → 直線式活塞。20–80 → 多頭直線式。> 80 → 旋轉式。' },
      { factor: '衛生要求', guide: '化妝品/食品 → SUS304+CIP設計。製藥 → SUS316L+GMP驗證。' },
    ],

    integrationTitle: '工藝整合',
    integrationDesc: '該設備在灌裝環節整合到您更廣泛的生產流程中。典型的液體整合產線可能包括：',
    integrationSteps: ['儲液罐/料斗', '泵送或重力進料', '灌裝頭', '容器（瓶/袋/杯）', '封蓋/密封', '打碼', '貼標機', '檢測（液位/重量）', '輸送帶', '裝箱機'],
    integrationFooter: '我們設計的灌裝系統與您的容器格式、封蓋方式和貼標系統相整合。單機或完整灌裝-封蓋-貼標產線。',

    faqTitle: '常見問題',
    faq: [
      {
        q: '食用油最適合哪種灌裝方式？',
        a: '流量計或活塞式灌裝對油品精度最高。溢流式灌裝也用於透明瓶中對液位外觀有要求的油品。對於精度要求高的高價值油品，我們推薦流量計灌裝。',
      },
      {
        q: '同一台機器能灌裝稀薄液體和稠厚醬料嗎？',
        a: '活塞式灌裝機通過調整活塞速度、閥門時序和噴嘴尺寸，可處理從水狀到膏狀的多種黏度範圍。對於黏度差異極大的產品（水和稠膏在同一產線），我們通常建議每種產品類型使用獨立機器，或使用帶專用換型部件的靈活活塞式灌裝機。',
      },
      {
        q: '最小和最大灌裝量是多少？',
        a: '這取決於機器類型。蠕動泵灌裝機最小可灌裝1–5ml。活塞式灌裝機通常從5–10ml起始。大型工業灌裝機可灌裝10–20L容器。請告知我們您的目標灌裝量和容器尺寸。',
      },
      {
        q: '支援灌裝啤酒或碳酸飲料等起泡液體嗎？',
        a: '支援，但需要背壓灌裝頭或自下而上灌裝噴嘴以減少泡沫。這是一種專用配置——如果您灌裝碳酸或起泡產品，請務必註明。',
      },
      {
        q: '可以在灌裝機上添加封蓋機和貼標機嗎？',
        a: '可以。我們提供完整的灌裝-封蓋-貼標產線，包括旋蓋機、ROPP封蓋機、壓蓋機、壓敏貼標機和套標機。可作為獨立機器或完全整合產線供應。',
      },
      {
        q: '取得採購評估需要提供哪些資訊？',
        a: '液體名稱和大致黏度（如「類似水」或「類似蜂蜜」）、灌裝量、容器類型和尺寸、所需產量速度、國家/電壓，以及是否需要單機灌裝機或完整產線。',
      },
    ],

    relatedTitle: '相關應用與資源',
    relatedLinks: [
      { label: '如何選擇液體灌裝機', href: '/resources/how-to-choose-liquid-filling-machine' },
      { label: '活塞式與泵式灌裝機比較', href: '/resources/piston-vs-pump-filler' },
      { label: '醬料灌裝機選型指南', href: '/resources/sauce-filling-machine-selection' },
      { label: '取得評估', href: '/assessment' },
    ],

    ctaTitle: '描述您的液體和容器——我們將提供評估並給出合適的灌裝配置建議。',
    ctaSubtitle: '活塞式、重力式、溢流式、泵式或流量計——我們的工程師根據您的產品、精度要求和產量目標選擇灌裝方式。',
    ctaBtn1: '取得評估',
    ctaBtn2: '聯絡工程團隊',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function LiquidFillingMachinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content.en
  const heroPhoto = PHOTO.machines.liquidFillingHero
  const guides = getResourceArticlesByMachine('liquid-filling-machine', lang, 6)
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

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t.heroTitle,
    url: `${SITE_URL}/${lang}/machines/liquid-filling-machine`,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.hero-desc'] },
  }

  const [testimonials, videos] = await Promise.all([
    getTestimonialsForMachine('liquid-filling-machine'),
    getVideosForMachine('liquid-filling-machine'),
  ])
  const productSchema = buildProductSchema({ lang, slug: 'liquid-filling-machine', faq: t.faq, testimonials, videos })

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={speakableSchema} />

      {/* ── 1. Hero ──────────────────────────────────────────────────────────── */}
      <PageHero
        kicker={t.kicker}
        title={t.heroTitle}
        desc={t.heroSubtitle}
        image={{
          src: heroPhoto,
          alt: 'Liquid filling machine filling bottles on an automated filling line',
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
              { label: t.heroTitle, href: `/${lang}/machines/liquid-filling-machine` },
            ]}
          />
          <MachineQuickLinks lang={lang} machine="liquid-filling-machine" />
        </Container>
      </section>

      <TrustBar lang={lang} />

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

      <MachineDecisionGuide lang={lang} fitScenarios={t.whoItems.map((item) => item.title)} />

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
                href={link.href === '/assessment' ? `/${lang}/assessment` : `/${lang}${link.href}`}
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
                <a href={`/${lang}/resources/route/liquid-filling`} className="text-accent-600 hover:underline">
                  {lang === 'zh' ? '更多文章' : lang === 'cn' ? '更多文章' : lang === 'ja' ? '記事一覧' : lang === 'ko' ? '더 보기' : lang === 'fr' ? 'Voir tout' : lang === 'es' ? 'Ver todo' : lang === 'pt' ? 'Ver tudo' : lang === 'ar' ? 'عرض الكل' : lang === 'th' ? 'ดูทั้งหมด' : lang === 'vi' ? 'Xem tất cả' : lang === 'de' ? 'Alle anzeigen' : 'View all'}
                </a>
              </li>
            </ul>
          </Container>
        </section>
      ) : null}

      {/* ── 9b. Related markets + industries ──────────────────────────────── */}
      <RelatedHubs lang={lang} machine="liquid-filling-machine" />

      <QuickAssessment lang={lang} context="liquid-filling-machine" source="machine" />

      {/* ── 10. CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-950 py-16 sm:py-20 text-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-base text-white/70">{t.ctaSubtitle}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink href={`/${lang}/assessment`} size="lg">{t.ctaBtn1}</ButtonLink>
            <ButtonLink
              href={`/${lang}/quote/liquid-filling-machine`}
              variant="secondary"
              size="lg"
            >
              {({ en: 'Get quote', cn: '获取报价', zh: '取得報價', fr: 'Devis', es: 'Cotizar', pt: 'Cotação', ko: '견적', ja: '見積', ar: 'عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Báo giá', de: 'Angebot' } as Record<string, string>)[lang] || 'Get quote'}
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
