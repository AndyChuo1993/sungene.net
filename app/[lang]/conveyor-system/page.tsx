import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { MachineFAQ } from '@/components/machines/MachineFAQ'
import JsonLd from '@/components/JsonLd'
import SendProductForm from '@/components/SendProductForm'
import type { Metadata } from 'next'

const titles: Record<string, string> = {
  en: 'Automated Conveyor System & Production Line | Factory Automation | SunGene',
  cn: '自动化输送系统与生产线 | 工厂自动化 | SunGene',
  zh: '自動化輸送系統與生產線 | 工廠自動化 | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'SunGene designs and builds automated conveyor systems and complete production lines for food, beverage, chemical and consumer goods manufacturing. CE certified, factory-direct.',
  cn: 'SunGene为食品、饮料、化工和消费品制造设计和建造自动化输送系统及完整生产线。CE认证，工厂直销。',
  zh: 'SunGene為食品、飲料、化工和消費品製造設計和建造自動化輸送系統及完整生產線。CE認證，工廠直銷。',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
  }
}

const content: Record<string, any> = {
  en: {
    kicker: 'PRODUCTION LINE & CONVEYOR SYSTEMS',
    title: 'Automated Conveyor System & Complete Production Line Solutions',
    subtitle: 'From single belt conveyors to fully automated fill-seal-label-pack lines — we design and build production systems tailored to your factory layout, throughput, and budget.',
    ctaBannerText: 'Need a complete production line quote?',
    ctaBannerLink: 'Send your requirements → Get a line proposal',
    appTitle: 'Industries We Serve',
    applications: [
      { icon: '🏭', title: 'Food & Beverage', desc: 'Bakery, beverage, condiments, dairy, frozen food lines' },
      { icon: '💊', title: 'Pharmaceutical', desc: 'Tablet conveying, bottle handling, blister packaging lines' },
      { icon: '🧪', title: 'Chemical & Powder', desc: 'Bulk material handling, bagging lines, chemical filling' },
      { icon: '📦', title: 'Consumer Goods', desc: 'Household products, personal care, cosmetics packaging' },
      { icon: '🐾', title: 'Pet Food', desc: 'Kibble conveying, bag filling, palletizing lines' },
      { icon: '⚙️', title: 'Industrial Parts', desc: 'Assembly lines, parts sorting, industrial automation' },
    ],
    machineTitle: 'Available Conveyor & Line Types',
    machines: [
      { title: 'Belt Conveyor', desc: 'General-purpose product transport. Flat, incline, or decline. Width: 100–2,000mm. Speed: up to 60m/min. SUS304 or carbon steel frame.' },
      { title: 'Roller Conveyor', desc: 'For boxes, pallets, and heavy goods. Gravity or powered. Ideal for carton handling and warehouse logistics.' },
      { title: 'Slat Chain Conveyor', desc: 'Chemical and heat resistant. Food-grade stainless slats. For bottles, cans, jars in beverage and food lines.' },
      { title: 'Incline / Z-Type Conveyor', desc: 'Connects different floor levels. Bucket elevator or cleated belt design. For vertical product transport.' },
      { title: 'Complete Packaging Line', desc: 'Integrated: Filling → Sealing → Labeling → Coding → Carton Packing → Palletizing. Turnkey lines with central control panel and PLC automation.' },
    ],
    specsTitle: 'Typical Specifications',
    specs: [
      ['Belt Width', '100 – 2,000mm'],
      ['Speed', '0.1 – 60m/min'],
      ['Length', 'Customizable'],
      ['Load Capacity', 'Up to 500kg/m'],
      ['Frame Material', 'SUS304 / Carbon Steel'],
      ['Drive', 'VFD (Variable Frequency)'],
      ['Control', 'PLC + HMI'],
    ],
    galleryTitle: 'Conveyor System & Production Line Gallery',
    galleryNote: '📸 More product photos available on request — contact us for a factory video tour.',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'Can you design a full production line, not just a conveyor?',
        a: 'Yes. We design complete turnkey lines from filling to palletizing. We start with your floor plan, throughput requirement, and product type, then provide a full line layout proposal.',
      },
      {
        q: 'What is the typical lead time for a complete production line?',
        a: 'Standard conveyors: 15–25 days. Semi-auto lines: 30–45 days. Full turnkey automated lines: 60–90 days depending on complexity. We provide a detailed schedule before production.',
      },
      {
        q: 'Do you provide installation and commissioning on-site?',
        a: 'Yes. We have engineering teams available for on-site installation, commissioning, and operator training. Travel and accommodation costs are borne by the client.',
      },
      {
        q: 'What control systems do you use?',
        a: 'We use Siemens or Mitsubishi PLCs with Schneider or ABB VFDs as standard. HMI touchscreens for line monitoring and control. All software is customizable for your factory requirements.',
      },
      {
        q: 'Can you retrofit our existing line?',
        a: 'Yes. We can design additional conveyor sections, automatic sorting, or robotic integration to connect with your existing equipment. Send us your current layout and we\'ll assess compatibility.',
      },
    ],
  },
  cn: {
    kicker: '生产线与输送系统',
    title: '自动化输送系统与完整生产线解决方案',
    subtitle: '从单条皮带输送机到全自动灌装-封口-贴标-包装线——我们根据您的工厂布局、产量和预算，设计和建造生产系统。',
    ctaBannerText: '需要完整生产线报价？',
    ctaBannerLink: '发送您的需求 → 获取产线方案',
    appTitle: '我们服务的行业',
    applications: [
      { icon: '🏭', title: '食品与饮料', desc: '面包、饮料、调味品、乳制品、冷冻食品生产线' },
      { icon: '💊', title: '制药', desc: '片剂输送、瓶子处理、泡罩包装线' },
      { icon: '🧪', title: '化工与粉末', desc: '散装物料处理、打袋线、化工灌装' },
      { icon: '📦', title: '消费品', desc: '家用产品、个护产品、化妆品包装' },
      { icon: '🐾', title: '宠物食品', desc: '颗粒输送、袋装充填、码垛生产线' },
      { icon: '⚙️', title: '工业零件', desc: '装配线、零件分拣、工业自动化' },
    ],
    machineTitle: '可用输送机及产线类型',
    machines: [
      { title: '皮带输送机', desc: '通用产品输送。水平、倾斜或下降。宽度：100–2000mm。速度：最高60m/min。SUS304或碳钢机架。' },
      { title: '滚筒输送机', desc: '适用于箱子、托盘和重型货物。重力或动力驱动。适合纸箱处理和仓储物流。' },
      { title: '链板输送机', desc: '耐化学品和耐热。食品级不锈钢链板。适用于饮料和食品线的瓶子、罐头、罐子。' },
      { title: '倾斜/Z型输送机', desc: '连接不同楼层。斗式提升机或带挡板皮带设计。用于垂直产品输送。' },
      { title: '完整包装线', desc: '集成：灌装 → 封口 → 贴标 → 打码 → 装箱 → 码垛。带中央控制面板和PLC自动化的交钥匙产线。' },
    ],
    specsTitle: '典型规格',
    specs: [
      ['带宽', '100 – 2,000mm'],
      ['速度', '0.1 – 60m/min'],
      ['长度', '可定制'],
      ['承载能力', '最高500kg/m'],
      ['机架材质', 'SUS304 / 碳钢'],
      ['驱动', '变频器（VFD）'],
      ['控制', 'PLC + HMI'],
    ],
    galleryTitle: '输送系统与生产线图库',
    galleryNote: '📸 更多产品照片可按需提供——联系我们获取工厂视频参观。',
    faqTitle: '常见问题',
    faq: [
      {
        q: '你们可以设计完整的生产线，而不只是输送机吗？',
        a: '是的。我们从灌装到码垛设计完整的交钥匙产线。我们从您的平面图、产量需求和产品类型开始，然后提供完整的产线布局方案。',
      },
      {
        q: '完整生产线的典型交货期是多少？',
        a: '标准输送机：15–25天。半自动产线：30–45天。全自动交钥匙产线：60–90天，取决于复杂程度。我们在生产前提供详细时间表。',
      },
      {
        q: '你们提供现场安装和调试服务吗？',
        a: '是的。我们有工程团队提供现场安装、调试和操作员培训。差旅和住宿费用由客户承担。',
      },
      {
        q: '你们使用什么控制系统？',
        a: '我们标准使用西门子或三菱PLC，配施耐德或ABB变频器。HMI触摸屏用于产线监控和控制。所有软件可根据您的工厂需求定制。',
      },
      {
        q: '你们可以对我们的现有产线进行改造吗？',
        a: '是的。我们可以设计额外的输送段、自动分拣或机器人集成，与您的现有设备连接。发送您目前的布局，我们将评估兼容性。',
      },
    ],
  },
  zh: {
    kicker: '生產線與輸送系統',
    title: '自動化輸送系統與完整生產線解決方案',
    subtitle: '從單條皮帶輸送機到全自動灌裝-封口-貼標-包裝線——我們根據您的工廠佈局、產量和預算，設計和建造生產系統。',
    ctaBannerText: '需要完整生產線報價？',
    ctaBannerLink: '傳送您的需求 → 獲取產線方案',
    appTitle: '我們服務的行業',
    applications: [
      { icon: '🏭', title: '食品與飲料', desc: '麵包、飲料、調味品、乳製品、冷凍食品生產線' },
      { icon: '💊', title: '製藥', desc: '片劑輸送、瓶子處理、泡殼包裝線' },
      { icon: '🧪', title: '化工與粉末', desc: '散裝物料處理、打袋線、化工灌裝' },
      { icon: '📦', title: '消費品', desc: '家用產品、個護產品、化妝品包裝' },
      { icon: '🐾', title: '寵物食品', desc: '顆粒輸送、袋裝充填、碼垛生產線' },
      { icon: '⚙️', title: '工業零件', desc: '裝配線、零件分揀、工業自動化' },
    ],
    machineTitle: '可用輸送機及產線類型',
    machines: [
      { title: '皮帶輸送機', desc: '通用產品輸送。水平、傾斜或下降。寬度：100–2000mm。速度：最高60m/min。SUS304或碳鋼機架。' },
      { title: '滾筒輸送機', desc: '適用於箱子、托盤和重型貨物。重力或動力驅動。適合紙箱處理和倉儲物流。' },
      { title: '鏈板輸送機', desc: '耐化學品和耐熱。食品級不鏽鋼鏈板。適用於飲料和食品線的瓶子、罐頭、罐子。' },
      { title: '傾斜/Z型輸送機', desc: '連接不同樓層。斗式提升機或帶擋板皮帶設計。用於垂直產品輸送。' },
      { title: '完整包裝線', desc: '整合：灌裝 → 封口 → 貼標 → 打碼 → 裝箱 → 碼垛。帶中央控制面板和PLC自動化的交鑰匙產線。' },
    ],
    specsTitle: '典型規格',
    specs: [
      ['帶寬', '100 – 2,000mm'],
      ['速度', '0.1 – 60m/min'],
      ['長度', '可客製'],
      ['承載能力', '最高500kg/m'],
      ['機架材質', 'SUS304 / 碳鋼'],
      ['驅動', '變頻器（VFD）'],
      ['控制', 'PLC + HMI'],
    ],
    galleryTitle: '輸送系統與生產線圖庫',
    galleryNote: '📸 更多產品照片可按需提供——聯繫我們獲取工廠影片參觀。',
    faqTitle: '常見問題',
    faq: [
      {
        q: '你們可以設計完整的生產線，而不只是輸送機嗎？',
        a: '是的。我們從灌裝到碼垛設計完整的交鑰匙產線。我們從您的平面圖、產量需求和產品類型開始，然後提供完整的產線佈局方案。',
      },
      {
        q: '完整生產線的典型交貨期是多少？',
        a: '標準輸送機：15–25天。半自動產線：30–45天。全自動交鑰匙產線：60–90天，取決於複雜程度。我們在生產前提供詳細時間表。',
      },
      {
        q: '你們提供現場安裝和調試服務嗎？',
        a: '是的。我們有工程團隊提供現場安裝、調試和操作員培訓。差旅和住宿費用由客戶承擔。',
      },
      {
        q: '你們使用什麼控制系統？',
        a: '我們標準使用西門子或三菱PLC，配施耐德或ABB變頻器。HMI觸控螢幕用於產線監控和控制。所有軟體可根據您的工廠需求客製。',
      },
      {
        q: '你們可以對我們的現有產線進行改造嗎？',
        a: '是的。我們可以設計額外的輸送段、自動分揀或機器人整合，與您的現有設備連接。傳送您目前的佈局，我們將評估相容性。',
      },
    ],
  },
}

export default async function ConveyorSystemPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content['en']

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Automated Conveyor System & Production Line',
    description: descriptions[lang] || descriptions.en,
    brand: { '@type': 'Brand', name: 'SunGene' },
    manufacturer: { '@type': 'Organization', name: 'SunGene Co., LTD', url: 'https://www.sungene.net' },
    category: 'Industrial Automation',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      seller: { '@type': 'Organization', name: 'SunGene Co., LTD' },
    },
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader kicker={t.kicker} title={t.title} desc={t.subtitle} />

      {/* CTA Banner */}
      <div className="bg-accent-600 text-white py-4 px-6 text-center">
        <span className="font-semibold">{t.ctaBannerText}</span>
        <Link href={`/${lang}/contact`} className="ml-4 underline font-bold">
          {t.ctaBannerLink}
        </Link>
      </div>

      {/* Applications Section */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.appTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.applications.map((app: any, i: number) => (
              <Card key={i} className="p-6">
                <div className="text-3xl mb-3">{app.icon}</div>
                <h3 className="text-base font-bold text-gray-950">{app.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{app.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Machine Types Section */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.machineTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.machines.map((machine: any, i: number) => (
              <Card key={i} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-950">{machine.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{machine.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Specifications Table */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl mb-8">{t.specsTitle}</h2>
          <div className="overflow-x-auto rounded-2xl ring-1 ring-gray-200/60 shadow-elev-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-950 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                  <th className="px-6 py-4 text-left font-semibold">Range</th>
                </tr>
              </thead>
              <tbody>
                {t.specs.map((row: string[], i: number) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-700">{row[0]}</td>
                    <td className="px-6 py-4 text-gray-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl mb-10">{t.galleryTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Box 1: Belt Conveyor with control panel */}
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="180" fill="#f3f4f6"/>
                {/* Conveyor frame */}
                <rect x="10" y="90" width="170" height="40" rx="4" fill="#d1d5db" stroke="#9ca3af" strokeWidth="2"/>
                {/* Belt surface */}
                <rect x="10" y="90" width="170" height="16" rx="4" fill="#9ca3af"/>
                {/* Belt lines */}
                {[30, 55, 80, 105, 130, 155].map((x) => (
                  <line key={x} x1={x} y1="90" x2={x} y2="106" stroke="#6b7280" strokeWidth="1"/>
                ))}
                {/* Rollers */}
                <circle cx="20" cy="110" r="10" fill="#6b7280" stroke="#4b5563" strokeWidth="1.5"/>
                <circle cx="170" cy="110" r="10" fill="#6b7280" stroke="#4b5563" strokeWidth="1.5"/>
                {/* Legs */}
                <rect x="30" y="130" width="8" height="35" rx="2" fill="#9ca3af"/>
                <rect x="152" y="130" width="8" height="35" rx="2" fill="#9ca3af"/>
                {/* Products on belt */}
                <rect x="25" y="74" width="28" height="18" rx="3" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5"/>
                <rect x="68" y="74" width="28" height="18" rx="3" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
                <rect x="111" y="74" width="28" height="18" rx="3" fill="#d1fae5" stroke="#34d399" strokeWidth="1.5"/>
                {/* Control panel */}
                <rect x="190" y="50" width="45" height="65" rx="4" fill="#374151" stroke="#1f2937" strokeWidth="2"/>
                <rect x="196" y="57" width="33" height="20" rx="2" fill="#1d4ed8" opacity="0.8"/>
                <circle cx="202" cy="90" r="4" fill="#22c55e"/>
                <circle cx="215" cy="90" r="4" fill="#f59e0b"/>
                <circle cx="228" cy="90" r="4" fill="#ef4444"/>
                <rect x="196" y="100" width="33" height="8" rx="2" fill="#4b5563"/>
                <text x="120" y="175" textAnchor="middle" fontSize="9" fill="#6b7280">Belt Conveyor System</text>
              </svg>
            </div>

            {/* Box 2: Complete Packaging Line Schematic */}
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="180" fill="#f3f4f6"/>
                {/* Flow line */}
                <line x1="20" y1="90" x2="220" y2="90" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4,3"/>
                {/* Arrow */}
                <polygon points="215,85 225,90 215,95" fill="#9ca3af"/>

                {/* Station 1: Fill */}
                <rect x="10" y="65" width="36" height="50" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
                <text x="28" y="86" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1e40af">FILL</text>
                <rect x="22" y="88" width="12" height="18" rx="2" fill="#93c5fd" opacity="0.7"/>

                {/* Station 2: Seal */}
                <rect x="56" y="65" width="36" height="50" rx="4" fill="#d1fae5" stroke="#34d399" strokeWidth="1.5"/>
                <text x="74" y="86" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#065f46">SEAL</text>
                <rect x="62" y="90" width="24" height="8" rx="2" fill="#6ee7b7" opacity="0.7"/>
                <rect x="62" y="100" width="24" height="8" rx="2" fill="#6ee7b7" opacity="0.7"/>

                {/* Station 3: Label */}
                <rect x="102" y="65" width="36" height="50" rx="4" fill="#fef3c7" stroke="#fbbf24" strokeWidth="1.5"/>
                <text x="120" y="86" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#78350f">LABEL</text>
                <rect x="108" y="89" width="24" height="14" rx="2" fill="#fcd34d" opacity="0.7"/>

                {/* Station 4: Code */}
                <rect x="148" y="65" width="36" height="50" rx="4" fill="#f3e8ff" stroke="#a855f7" strokeWidth="1.5"/>
                <text x="166" y="86" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#4c1d95">CODE</text>
                <text x="166" y="100" textAnchor="middle" fontSize="6" fill="#7c3aed">2026</text>

                {/* Station 5: Pack */}
                <rect x="194" y="65" width="36" height="50" rx="4" fill="#fee2e2" stroke="#f87171" strokeWidth="1.5"/>
                <text x="212" y="83" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#7f1d1d">PACK</text>
                <rect x="200" y="86" width="12" height="14" rx="2" fill="#fca5a5" opacity="0.7"/>
                <rect x="214" y="86" width="12" height="14" rx="2" fill="#fca5a5" opacity="0.7"/>

                {/* PLC Box at bottom */}
                <rect x="80" y="130" width="80" height="30" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1.5"/>
                <text x="120" y="148" textAnchor="middle" fontSize="8" fill="#e5e7eb">PLC Control Panel</text>

                {/* Connect lines to PLC */}
                <line x1="28" y1="115" x2="28" y2="130" stroke="#6b7280" strokeWidth="1" strokeDasharray="2,2"/>
                <line x1="120" y1="130" x2="120" y2="130" stroke="#6b7280" strokeWidth="1"/>
                <line x1="212" y1="115" x2="212" y2="130" stroke="#6b7280" strokeWidth="1" strokeDasharray="2,2"/>

                <text x="120" y="172" textAnchor="middle" fontSize="9" fill="#6b7280">Complete Packaging Line</text>
              </svg>
            </div>

            {/* Box 3: Palletizer / End-of-Line SVG */}
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="180" fill="#f3f4f6"/>
                {/* Pallet base */}
                <rect x="50" y="140" width="120" height="12" rx="3" fill="#9ca3af" stroke="#6b7280" strokeWidth="1.5"/>
                <rect x="55" y="136" width="12" height="8" rx="2" fill="#6b7280"/>
                <rect x="114" y="136" width="12" height="8" rx="2" fill="#6b7280"/>
                <rect x="153" y="136" width="12" height="8" rx="2" fill="#6b7280"/>
                {/* Boxes layer 1 */}
                <rect x="52" y="110" width="38" height="28" rx="2" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5"/>
                <rect x="92" y="110" width="38" height="28" rx="2" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5"/>
                <rect x="132" y="110" width="38" height="28" rx="2" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5"/>
                {/* Boxes layer 2 */}
                <rect x="62" y="82" width="38" height="28" rx="2" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
                <rect x="102" y="82" width="38" height="28" rx="2" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
                {/* Boxes layer 3 */}
                <rect x="82" y="54" width="38" height="28" rx="2" fill="#d1fae5" stroke="#34d399" strokeWidth="1.5"/>
                {/* Robotic arm */}
                <line x1="195" y1="20" x2="195" y2="80" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
                <line x1="195" y1="80" x2="150" y2="60" stroke="#374151" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="195" cy="20" r="8" fill="#374151" stroke="#1f2937" strokeWidth="1.5"/>
                <circle cx="195" cy="80" r="6" fill="#6b7280"/>
                {/* Gripper */}
                <rect x="140" y="55" width="20" height="10" rx="3" fill="#6b7280"/>
                <text x="120" y="172" textAnchor="middle" fontSize="9" fill="#6b7280">Palletizer &amp; End-of-Line</text>
              </svg>
            </div>
          </div>
          <p className="text-sm text-center text-gray-500 mt-4">{t.galleryNote}</p>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.faqTitle}</h2>
          <div className="mt-10">
            <MachineFAQ items={t.faq} />
          </div>
        </Container>
      </section>

      {/* Final CTA / SendProductForm */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-2xl">
          <SendProductForm lang={lang} sourceMachine="conveyor" />
        </Container>
      </section>

      {/* Bottom CTA Bar */}
      <section className="py-16 sm:py-20 bg-brand-950 text-white">
        <Container className="max-w-4xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            {lang === 'cn' ? '准备好规划您的生产线了吗？与我们的工程师交流。' : lang === 'zh' ? '準備好規劃您的生產線了嗎？與我們的工程師交流。' : 'Ready to plan your production line? Let\'s talk.'}
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink href={`/${lang}/contact`} size="lg">
              {lang === 'cn' ? '获取报价' : lang === 'zh' ? '取得報價' : 'Get a Quote'}
            </ButtonLink>
            <a href={`/${lang}/recommend`} className="text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white">
              {lang === 'cn' ? '获取机器推荐' : lang === 'zh' ? '獲取機器推薦' : 'Get a Machine Recommendation'}
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
