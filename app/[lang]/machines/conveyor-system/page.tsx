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

// ─── Metadata ────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  en: 'Conveyor & Automation Systems — Belt, Bucket, Screw & Robotic',
  cn: '输送与自动化系统 — 皮带、斗式、螺旋与机器人',
  zh: '輸送與自動化系統 — 皮帶、斗式、螺旋與機器人',
  fr: 'Systèmes de convoyage et d\'automatisation — Bande, Godet, Vis & Robotique',
  es: 'Sistemas de transporte y automatización — Banda, Cangilones, Tornillo y Robótica',
  pt: 'Sistemas de Transporte e Automação — Esteira, Elevador, Rosca e Robótica',
  ko: '컨베이어 및 자동화 시스템 — 벨트, 버킷, 스크류 & 로봇',
  ja: 'コンベア＆自動化システム — ベルト、バケット、スクリュー＆ロボット',
  ar: 'أنظمة النقل والأتمتة — سير ناقل، دلو، لولبي وروبوتي',
  th: 'ระบบลำเลียงและอัตโนมัติ — สายพาน, ถังตัก, สกรู และหุ่นยนต์',
  vi: 'Hệ thống băng tải và tự động hóa — Băng tải, Gàu, Trục vít & Robot',
  de: 'Förder- und Automatisierungssysteme — Band, Becherwerk, Schnecke & Robotik',
}

const metaDescs: Record<string, string> = {
  en: 'SunGene designs and manufactures conveyor systems and production line automation for food, packaging, chemical, and industrial applications. Belt conveyors, bucket elevators, screw conveyors, PLC-controlled lines. CE certified.',
  cn: 'SunGene设计制造适用于食品、包装、化工和工业领域的输送系统及生产线自动化。皮带输送机、斗式提升机、螺旋输送机、PLC控制产线。CE认证。',
  zh: 'SunGene設計製造適用於食品、包裝、化工和工業領域的輸送系統及生產線自動化。皮帶輸送機、斗式提升機、螺旋輸送機、PLC控制產線。CE認證。',
  fr: 'SunGene conçoit et fabrique des systèmes de convoyage et d\'automatisation de lignes de production pour les secteurs alimentaire, emballage, chimique et industriel. Convoyeurs à bande, élévateurs à godets, convoyeurs à vis, lignes PLC. CE certifié.',
  es: 'SunGene diseña y fabrica sistemas de transporte y automatización de líneas de producción para aplicaciones alimentarias, de embalaje, química e industrial. Transportadores de banda, elevadores de cangilones, transportadores de tornillo, líneas PLC. CE certificado.',
  pt: 'SunGene projeta e fabrica sistemas de transporte e automação de linhas de produção para aplicações alimentares, de embalagem, química e industrial. Esteiras transportadoras, elevadores de caçamba, transportadores de rosca, linhas PLC. CE certificado.',
  ko: 'SunGene은 식품, 포장, 화학 및 산업 분야를 위한 컨베이어 시스템 및 생산 라인 자동화를 설계 및 제조합니다. 벨트 컨베이어, 버킷 엘리베이터, 스크류 컨베이어, PLC 제어 라인. CE 인증.',
  ja: 'SunGeneは食品、包装、化学、産業用途向けのコンベアシステムと生産ライン自動化を設計・製造。ベルトコンベア、バケットエレベーター、スクリューコンベア、PLC制御ライン。CE認証。',
  ar: 'SunGene تصمم وتصنع أنظمة النقل وأتمتة خطوط الإنتاج للتطبيقات الغذائية والتعبئة والكيميائية والصناعية. ناقلات حزام، مصاعد دلو، ناقلات لولبية، خطوط PLC. معتمدة CE.',
  th: 'SunGene ออกแบบและผลิตระบบสายพานลำเลียงและระบบอัตโนมัติสายการผลิตสำหรับอุตสาหกรรมอาหาร บรรจุภัณฑ์ เคมี และอุตสาหกรรม ได้รับการรับรอง CE',
  vi: 'SunGene thiết kế và sản xuất hệ thống băng tải và tự động hóa dây chuyền sản xuất cho các ứng dụng thực phẩm, đóng gói, hóa chất và công nghiệp. Chứng nhận CE.',
  de: 'SunGene entwirft und fertigt Fördersysteme und Produktionslinen-Automatisierung für Lebensmittel-, Verpackungs-, Chemie- und Industrieanwendungen. Bandförderer, Becherwerke, Schneckenförderer, SPS-gesteuerte Linien. CE-zertifiziert.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/conveyor-system',
    type: 'website',
    keywords: [
      'conveyor system', 'belt conveyor', 'bucket elevator', 'screw conveyor', 'PLC automation',
      'production line automation', 'conveyor system manufacturer', 'robotic palletizer',
      'checkweigher', 'metal detector conveyor', 'Taiwan conveyor manufacturer',
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
  // Section 3 — What We Design & Build
  productsTitle: string
  productGroups: { label: string; items: string[] }[]
  productsNote: string
  // Section 4 — System Output & Scale Options
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
    kicker: 'CONVEYOR & LINE AUTOMATION',
    heroTitle: 'Conveyor & Automation Systems — Production Line Integration for Food, Packaging & Industrial',
    heroSubtitle: 'SunGene designs conveyor systems and automated production lines that connect your machines into a smooth, controlled workflow. From single belt conveyors to complete PLC/HMI-controlled production lines.',

    whoTitle: "Who It's For",
    whoItems: [
      { title: 'Food & Snack Producers', desc: 'Connecting fryers, seasoning, cooling, filling, and packaging machines into one continuous flow.' },
      { title: 'Packaging Operations', desc: 'Linking weigher, VFFS, check-weigher, metal detector, and caser into an integrated packaging line.' },
      { title: 'Chemical & Industrial', desc: 'Bulk material handling, tote filling, and powder transfer with enclosed, dust-proof designs.' },
      { title: 'New Facility Builders', desc: 'Complete material flow design from raw input to finished output — we design the full layout and control system.' },
    ],

    productsTitle: 'What We Design & Build',
    productGroups: [
      { label: 'Belt conveyors', items: ['Flat belt', 'Modular belt', 'Cleated belt', 'Incline / decline', 'Cooling conveyors'] },
      { label: 'Vertical handling', items: ['Bucket elevators', 'Z-conveyor', 'Screw conveyors', 'Pneumatic transfer'] },
      { label: 'Control systems', items: ['PLC / HMI control panels', 'Servo-driven systems', 'Touch-screen HMI', 'Remote monitoring'] },
      { label: 'Inspection & sorting', items: ['Metal detectors', 'Check-weighers', 'Vision inspection', 'Reject systems'] },
      { label: 'Robotic integration', items: ['Robotic arms for pick-and-place', 'Palletizing', 'Case packing'] },
    ],
    productsNote: 'Every system is designed around your product, machine layout, floor space, and throughput target. We design to integrate with your existing machines where possible.',

    packagingTitle: 'System Output & Scale Options',
    packagingItems: [
      { label: 'Scale', value: 'Single conveyors to complete multi-machine production lines' },
      { label: 'Speed range', value: 'Configurable from 5 to 200+ m/min depending on product and machine' },
      { label: 'Control level', value: 'Manual / semi-auto (operator-controlled) to fully automated PLC/HMI-controlled' },
      { label: 'Integration', value: 'Standalone add-on, partial line upgrade, or complete new line design' },
    ],
    packagingNote: 'Output capacity and automation level are fully configurable — we design around your production target and budget.',

    configurationsTitle: 'Available Configurations',
    configurations: [
      { name: 'Flat Belt Conveyor', desc: 'Standard workhorse for product transfer between machines. Food-grade belts available. Adjustable speed with VFD.' },
      { name: 'Incline / Decline Conveyor', desc: 'For elevation changes in the production line. Cleated belts prevent product sliding.' },
      { name: 'Cooling Conveyor (Mesh Belt)', desc: 'For post-frying or post-baking product cooling. Stainless mesh, adjustable speed.' },
      { name: 'Bucket Elevator', desc: 'Vertical material lifting for powder, granules, or bulk material. Food-grade and industrial versions.' },
      { name: 'Screw / Auger Conveyor', desc: 'Enclosed horizontal or inclined transfer for powder and granule. Dust-controlled.' },
      { name: 'Check-Weigher + Reject System', desc: 'Inline weight inspection with automatic reject for under/over-weight packages.' },
      { name: 'Metal Detector', desc: 'Inline detection with conveyor-mounted sensor and reject mechanism.' },
      { name: 'PLC / HMI Control Panel', desc: 'Custom control panels for single machine or full line. Touch-screen HMI, alarm logging, recipe management.' },
      { name: 'Robotic Palletizer', desc: 'End-of-line robotic or mechanical palletizer for case stacking. CE certified, configurable patterns.' },
    ],

    decisionsTitle: 'Key Decision Factors',
    decisions: [
      { factor: 'Product type', guide: 'Food contact → food-grade belt and SUS304 frame. Chemical → chemical-resistant materials. Powder → enclosed/dust-proof design.' },
      { factor: 'Line speed', guide: 'Match conveyor speed to your slowest machine\'s output to avoid bottlenecks.' },
      { factor: 'Floor layout', guide: 'Conveyor length, turns, inclines, and footprint need to match your facility.' },
      { factor: 'Automation level', guide: 'How many operators do you want to eliminate? This drives the control system scope.' },
      { factor: 'Integration', guide: 'New machines or retrofit to existing? We design connectors and transitions to match your existing equipment.' },
      { factor: 'Regulatory', guide: 'CE marking for export. Hygienic design (IP69K) for food/pharma applications.' },
    ],

    integrationTitle: 'Process Integration',
    integrationDesc: 'A typical automated packaging line connecting multiple machines:',
    integrationSteps: [
      'Product infeed (hopper/silo)',
      'Feeding conveyor',
      'Filling machine',
      'Pouch/bag sealing',
      'Check-weigher',
      'Metal detector',
      'Date coder',
      'Reject + accumulation',
      'Case packer',
      'Palletizer',
      'Stretch wrapper',
    ],
    integrationFooter: 'We design the full material flow, including all conveyor transitions, machine interfaces, and control system integration.',

    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'Can you retrofit a conveyor system to my existing machines?',
        a: 'Yes. We design custom conveyor transitions and interfaces to connect to your existing machines. We need machine outlet/inlet dimensions, product size, and available floor space to design the connection.',
      },
      {
        q: 'What is a PLC/HMI control system and do I need one?',
        a: 'A PLC (Programmable Logic Controller) automates machine start/stop, speed control, alarm handling, and sequence control. An HMI (Human Machine Interface) is the touch-screen operator panel. For lines with 3+ machines, a PLC/HMI system significantly reduces operator errors and improves throughput consistency.',
      },
      {
        q: 'What is the lead time for a full production line?',
        a: 'For simple conveyor additions: 3–6 weeks. For full PLC-controlled lines: 8–16 weeks depending on complexity. Custom robotic systems may require 16–24 weeks. We provide a detailed schedule after reviewing your requirements.',
      },
      {
        q: 'Do you provide installation and commissioning support?',
        a: 'Yes. We provide on-site installation and commissioning for major lines, or remote video guidance for simpler equipment. Operator training is included. For international projects, we coordinate with local agents where available.',
      },
      {
        q: 'What certifications do your conveyor systems carry?',
        a: 'CE marking is standard. Electrical components comply with IEC standards. Food-contact materials meet EU/FDA requirements on request. We provide full documentation including material certificates, wiring diagrams, and test reports.',
      },
      {
        q: 'How do I start planning a production line upgrade?',
        a: 'Share your current machine list (or planned machines), your production target (bags/min or kg/hr), your facility floor plan or dimensions, and your product type. Our engineers will propose a layout and scope.',
      },
    ],

    relatedTitle: 'Related Applications & Resources',
    relatedLinks: [
      { label: 'How to Choose a Conveyor System', href: '/resources/how-to-choose-conveyor-system' },
      { label: 'Semi-Auto vs Full-Auto Packaging Line', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: 'Conveying & Automation Overview', href: '/machinery/conveying-automation' },
      { label: 'Get a Machine Recommendation', href: '/recommend' },
    ],

    ctaTitle: "Tell us your production target and machine list — we'll design the automation.",
    ctaSubtitle: 'From single belt conveyors to complete PLC-controlled packaging lines — our engineers design around your product, machines, and facility.',
    ctaBtn1: 'Get a Line Design Recommendation',
    ctaBtn2: 'Talk to Engineering',
  },

  cn: {
    kicker: '输送与产线自动化',
    heroTitle: '输送与自动化系统 — 食品、包装及工业生产线整合',
    heroSubtitle: 'SunGene设计输送系统和自动化生产线，将您的机器整合为顺畅、可控的工作流程。从单条皮带输送机到完整的PLC/HMI控制生产线。',

    whoTitle: '适用客户',
    whoItems: [
      { title: '食品与休闲食品生产商', desc: '将油炸机、调味机、冷却机、充填机和包装机整合为一条连续流程。' },
      { title: '包装运营商', desc: '将计量秤、VFFS、检重秤、金属探测器和装箱机整合为一体化包装线。' },
      { title: '化工与工业', desc: '散装物料处理、灌装和粉末输送，采用封闭防尘设计。' },
      { title: '新建厂房用户', desc: '从原料投入到成品输出的完整物料流设计——我们负责整体布局和控制系统设计。' },
    ],

    productsTitle: '我们设计与制造的系统',
    productGroups: [
      { label: '皮带输送机', items: ['平皮带', '模块式皮带', '挡条皮带', '倾斜/下坡输送', '冷却输送机'] },
      { label: '垂直输送', items: ['斗式提升机', 'Z形提升机', '螺旋输送机', '气力输送'] },
      { label: '控制系统', items: ['PLC/HMI控制柜', '伺服驱动系统', '触摸屏HMI', '远程监控'] },
      { label: '检测与分选', items: ['金属探测器', '检重秤', '视觉检测', '剔除系统'] },
      { label: '机器人整合', items: ['机器人抓取与放置手臂', '码垛', '装箱'] },
    ],
    productsNote: '每套系统均围绕您的产品、机器布局、厂房面积和产量目标进行定制设计。我们尽量与您现有机器整合。',

    packagingTitle: '系统产量与规模选项',
    packagingItems: [
      { label: '规模', value: '单条输送机到完整多机生产线' },
      { label: '速度范围', value: '根据产品和机器，可配置5至200+米/分钟' },
      { label: '控制级别', value: '手动/半自动（操作员控制）到全自动PLC/HMI控制' },
      { label: '整合方式', value: '独立附加、部分产线升级或全新产线设计' },
    ],
    packagingNote: '产能和自动化程度完全可配置——我们围绕您的生产目标和预算进行设计。',

    configurationsTitle: '可用配置',
    configurations: [
      { name: '平皮带输送机', desc: '机器间产品传送的标准设备。可提供食品级皮带。配备变频器可调速。' },
      { name: '倾斜/下坡输送机', desc: '用于生产线中的高度变化。挡条皮带防止产品滑动。' },
      { name: '冷却输送机（网带）', desc: '用于油炸或烘烤后的产品冷却。不锈钢网带，可调速。' },
      { name: '斗式提升机', desc: '粉末、颗粒或散装物料的垂直提升。食品级和工业版本均可供应。' },
      { name: '螺旋/绞龙输送机', desc: '用于粉末和颗粒的封闭式水平或倾斜输送。防尘设计。' },
      { name: '检重秤+剔除系统', desc: '在线重量检测，自动剔除重量不足/超重包装。' },
      { name: '金属探测器', desc: '在线检测，带输送机安装传感器和剔除机构。' },
      { name: 'PLC/HMI控制柜', desc: '适用于单机或全线的定制控制柜。触摸屏HMI、报警记录、配方管理。' },
      { name: '机器人码垛机', desc: '线尾机器人或机械式码垛机，用于箱体堆叠。CE认证，可配置码垛图案。' },
    ],

    decisionsTitle: '关键决策因素',
    decisions: [
      { factor: '产品类型', guide: '食品接触 → 食品级皮带和SUS304机架。化工 → 耐化学品材料。粉末 → 封闭/防尘设计。' },
      { factor: '产线速度', guide: '输送机速度应与产线最慢机器的产量匹配，避免产生瓶颈。' },
      { factor: '厂房布局', guide: '输送机长度、转弯、坡度和占地面积需与您的厂房相匹配。' },
      { factor: '自动化程度', guide: '您希望减少多少操作人员？这决定了控制系统的范围。' },
      { factor: '整合方式', guide: '新机器还是改造现有设备？我们设计连接件和过渡段以匹配您现有设备。' },
      { factor: '法规要求', guide: '出口需CE认证。食品/制药应用需要卫生设计（IP69K）。' },
    ],

    integrationTitle: '工艺整合',
    integrationDesc: '一条典型的多机自动化包装线：',
    integrationSteps: [
      '产品进料（料斗/料仓）',
      '进料输送机',
      '充填机',
      '袋/包封口',
      '检重秤',
      '金属探测器',
      '日期打码机',
      '剔除+积累台',
      '装箱机',
      '码垛机',
      '缠绕机',
    ],
    integrationFooter: '我们负责完整物料流设计，包括所有输送机过渡、机器接口和控制系统整合。',

    faqTitle: '常见问题',
    faq: [
      {
        q: '可以为我现有的机器改装输送系统吗？',
        a: '可以。我们设计定制的输送机过渡件和接口，与您现有机器对接。我们需要机器出入口尺寸、产品尺寸和可用厂房面积来设计连接方案。',
      },
      {
        q: 'PLC/HMI控制系统是什么，我是否需要？',
        a: 'PLC（可编程逻辑控制器）负责机器启停、速度控制、报警处理和顺序控制的自动化。HMI（人机界面）是触摸屏操作面板。对于3台及以上机器的产线，PLC/HMI系统能显著减少操作失误并提高产量一致性。',
      },
      {
        q: '完整生产线的交货周期是多少？',
        a: '简单输送机添加：3–6周。完整PLC控制产线：8–16周，取决于复杂程度。定制机器人系统可能需要16–24周。我们在审查您的需求后提供详细进度计划。',
      },
      {
        q: '你们提供安装和调试支持吗？',
        a: '提供。我们为主要产线提供现场安装和调试，或为简单设备提供远程视频指导。含操作员培训。对于国际项目，我们在有条件的地方协调当地代理商。',
      },
      {
        q: '你们的输送系统具有哪些认证？',
        a: 'CE认证为标配。电气元件符合IEC标准。食品接触材料可按要求符合欧盟/FDA要求。我们提供完整文件，包括材质证书、接线图和测试报告。',
      },
      {
        q: '如何开始规划生产线升级？',
        a: '请分享您现有机器清单（或计划购买的机器）、生产目标（袋/分钟或千克/小时）、厂房平面图或尺寸，以及产品类型。我们的工程师将提出布局和方案建议。',
      },
    ],

    relatedTitle: '相关应用与资源',
    relatedLinks: [
      { label: '如何选择输送系统', href: '/resources/how-to-choose-conveyor-system' },
      { label: '半自动与全自动包装线对比', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: '输送与自动化概览', href: '/machinery/conveying-automation' },
      { label: '获取机器推荐', href: '/recommend' },
    ],

    ctaTitle: '告诉我们您的生产目标和机器清单——我们来设计自动化方案。',
    ctaSubtitle: '从单条皮带输送机到完整PLC控制包装线——我们的工程师围绕您的产品、机器和厂房进行设计。',
    ctaBtn1: '获取产线设计建议',
    ctaBtn2: '联系工程团队',
  },

  zh: {
    kicker: '輸送與產線自動化',
    heroTitle: '輸送與自動化系統 — 食品、包裝及工業生產線整合',
    heroSubtitle: 'SunGene設計輸送系統和自動化生產線，將您的機器整合為順暢、可控的工作流程。從單條皮帶輸送機到完整的PLC/HMI控制生產線。',

    whoTitle: '適用客戶',
    whoItems: [
      { title: '食品與休閒食品生產商', desc: '將油炸機、調味機、冷卻機、充填機和包裝機整合為一條連續流程。' },
      { title: '包裝運營商', desc: '將計量秤、VFFS、檢重秤、金屬探測器和裝箱機整合為一體化包裝線。' },
      { title: '化工與工業', desc: '散裝物料處理、灌裝和粉末輸送，採用封閉防塵設計。' },
      { title: '新建廠房用戶', desc: '從原料投入到成品輸出的完整物料流設計——我們負責整體佈局和控制系統設計。' },
    ],

    productsTitle: '我們設計與製造的系統',
    productGroups: [
      { label: '皮帶輸送機', items: ['平皮帶', '模組式皮帶', '擋條皮帶', '傾斜/下坡輸送', '冷卻輸送機'] },
      { label: '垂直輸送', items: ['斗式提升機', 'Z形提升機', '螺旋輸送機', '氣力輸送'] },
      { label: '控制系統', items: ['PLC/HMI控制櫃', '伺服驅動系統', '觸控螢幕HMI', '遠端監控'] },
      { label: '檢測與分選', items: ['金屬探測器', '檢重秤', '視覺檢測', '剔除系統'] },
      { label: '機器人整合', items: ['機器人抓取與放置手臂', '碼垛', '裝箱'] },
    ],
    productsNote: '每套系統均圍繞您的產品、機器佈局、廠房面積和產量目標進行客製設計。我們盡量與您現有機器整合。',

    packagingTitle: '系統產量與規模選項',
    packagingItems: [
      { label: '規模', value: '單條輸送機到完整多機生產線' },
      { label: '速度範圍', value: '根據產品和機器，可配置5至200+公尺/分鐘' },
      { label: '控制級別', value: '手動/半自動（操作員控制）到全自動PLC/HMI控制' },
      { label: '整合方式', value: '獨立附加、部分產線升級或全新產線設計' },
    ],
    packagingNote: '產能和自動化程度完全可配置——我們圍繞您的生產目標和預算進行設計。',

    configurationsTitle: '可用配置',
    configurations: [
      { name: '平皮帶輸送機', desc: '機器間產品傳送的標準設備。可提供食品級皮帶。配備變頻器可調速。' },
      { name: '傾斜/下坡輸送機', desc: '用於生產線中的高度變化。擋條皮帶防止產品滑動。' },
      { name: '冷卻輸送機（網帶）', desc: '用於油炸或烘烤後的產品冷卻。不鏽鋼網帶，可調速。' },
      { name: '斗式提升機', desc: '粉末、顆粒或散裝物料的垂直提升。食品級和工業版本均可供應。' },
      { name: '螺旋/絞龍輸送機', desc: '用於粉末和顆粒的封閉式水平或傾斜輸送。防塵設計。' },
      { name: '檢重秤+剔除系統', desc: '在線重量檢測，自動剔除重量不足/超重包裝。' },
      { name: '金屬探測器', desc: '在線檢測，帶輸送機安裝感測器和剔除機構。' },
      { name: 'PLC/HMI控制櫃', desc: '適用於單機或全線的客製控制櫃。觸控螢幕HMI、報警記錄、配方管理。' },
      { name: '機器人碼垛機', desc: '線尾機器人或機械式碼垛機，用於箱體堆疊。CE認證，可配置碼垛圖案。' },
    ],

    decisionsTitle: '關鍵決策因素',
    decisions: [
      { factor: '產品類型', guide: '食品接觸 → 食品級皮帶和SUS304機架。化工 → 耐化學品材料。粉末 → 封閉/防塵設計。' },
      { factor: '產線速度', guide: '輸送機速度應與產線最慢機器的產量匹配，避免產生瓶頸。' },
      { factor: '廠房佈局', guide: '輸送機長度、轉彎、坡度和佔地面積需與您的廠房相匹配。' },
      { factor: '自動化程度', guide: '您希望減少多少操作人員？這決定了控制系統的範圍。' },
      { factor: '整合方式', guide: '新機器還是改造現有設備？我們設計連接件和過渡段以匹配您現有設備。' },
      { factor: '法規要求', guide: '出口需CE認證。食品/製藥應用需要衛生設計（IP69K）。' },
    ],

    integrationTitle: '工藝整合',
    integrationDesc: '一條典型的多機自動化包裝線：',
    integrationSteps: [
      '產品進料（料斗/料倉）',
      '進料輸送機',
      '充填機',
      '袋/包封口',
      '檢重秤',
      '金屬探測器',
      '日期打碼機',
      '剔除+積累台',
      '裝箱機',
      '碼垛機',
      '纏繞機',
    ],
    integrationFooter: '我們負責完整物料流設計，包括所有輸送機過渡、機器接口和控制系統整合。',

    faqTitle: '常見問題',
    faq: [
      {
        q: '可以為我現有的機器改裝輸送系統嗎？',
        a: '可以。我們設計客製的輸送機過渡件和接口，與您現有機器對接。我們需要機器出入口尺寸、產品尺寸和可用廠房面積來設計連接方案。',
      },
      {
        q: 'PLC/HMI控制系統是什麼，我是否需要？',
        a: 'PLC（可程式邏輯控制器）負責機器啟停、速度控制、報警處理和順序控制的自動化。HMI（人機介面）是觸控螢幕操作面板。對於3台及以上機器的產線，PLC/HMI系統能顯著減少操作失誤並提高產量一致性。',
      },
      {
        q: '完整生產線的交貨週期是多少？',
        a: '簡單輸送機添加：3–6週。完整PLC控制產線：8–16週，取決於複雜程度。客製機器人系統可能需要16–24週。我們在審查您的需求後提供詳細進度計劃。',
      },
      {
        q: '你們提供安裝和調試支援嗎？',
        a: '提供。我們為主要產線提供現場安裝和調試，或為簡單設備提供遠端視訊指導。含操作員培訓。對於國際項目，我們在有條件的地方協調當地代理商。',
      },
      {
        q: '你們的輸送系統具有哪些認證？',
        a: 'CE認證為標配。電氣元件符合IEC標準。食品接觸材料可按要求符合歐盟/FDA要求。我們提供完整文件，包括材質證書、接線圖和測試報告。',
      },
      {
        q: '如何開始規劃生產線升級？',
        a: '請分享您現有機器清單（或計劃購買的機器）、生產目標（袋/分鐘或公斤/小時）、廠房平面圖或尺寸，以及產品類型。我們的工程師將提出佈局和方案建議。',
      },
    ],

    relatedTitle: '相關應用與資源',
    relatedLinks: [
      { label: '如何選擇輸送系統', href: '/resources/how-to-choose-conveyor-system' },
      { label: '半自動與全自動包裝線比較', href: '/resources/semi-auto-vs-full-auto-packaging-line' },
      { label: '輸送與自動化概覽', href: '/machinery/conveying-automation' },
      { label: '取得機器推薦', href: '/recommend' },
    ],

    ctaTitle: '告訴我們您的生產目標和機器清單——我們來設計自動化方案。',
    ctaSubtitle: '從單條皮帶輸送機到完整PLC控制包裝線——我們的工程師圍繞您的產品、機器和廠房進行設計。',
    ctaBtn1: '取得產線設計建議',
    ctaBtn2: '聯絡工程團隊',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ConveyorSystemPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content.en
  const heroPhoto = PHOTO.machines.conveyorSystemHero
  const guides = getResourceArticlesByMachine('conveyor-system', lang, 6)
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
    url: `${SITE_URL}/${lang}/machines/conveyor-system`,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.hero-desc'] },
  }

  const productSchema = buildProductSchema({ lang, slug: 'conveyor-system', faq: t.faq })

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
          alt: 'Conveyor and automation system in industrial production facility',
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
              { label: t.heroTitle, href: `/${lang}/machines/conveyor-system` },
            ]}
          />
          <MachineQuickLinks lang={lang} machine="conveyor-system" />
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

      {/* ── 3. What We Design & Build ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.productsTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
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

      {/* ── 4. System Output & Scale Options ─────────────────────────────────── */}
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
                href={link.href === '/recommend' ? `/${lang}/recommend?machine=conveyor-system` : `/${lang}${link.href}`}
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
                <a href={`/${lang}/resources/topic/conveyor-system`} className="text-accent-600 hover:underline">
                  {lang === 'zh' ? '更多文章' : lang === 'cn' ? '更多文章' : lang === 'ja' ? '記事一覧' : lang === 'ko' ? '더 보기' : lang === 'fr' ? 'Voir tout' : lang === 'es' ? 'Ver todo' : lang === 'pt' ? 'Ver tudo' : lang === 'ar' ? 'عرض الكل' : lang === 'th' ? 'ดูทั้งหมด' : lang === 'vi' ? 'Xem tất cả' : lang === 'de' ? 'Alle anzeigen' : 'View all'}
                </a>
              </li>
            </ul>
          </Container>
        </section>
      ) : null}

      {/* ── 9b. Related markets + industries ──────────────────────────────── */}
      <RelatedHubs lang={lang} machine="conveyor-system" />

      {/* ── 10. CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-950 py-16 sm:py-20 text-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-base text-white/70">{t.ctaSubtitle}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink href={`/${lang}/recommend?machine=conveyor-system`} size="lg">{t.ctaBtn1}</ButtonLink>
            <a
              href={`/${lang}/contact?machine=conveyor-system`}
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
