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
  en: 'Powder Packaging Machine | Auger Filler, VFFS, Semi-Auto | SunGene',
  cn: '粉末包装机 | 螺旋充填机、VFFS、半自动 | SunGene',
  zh: '粉末包裝機 | 螺旋充填機、VFFS、半自動 | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'SunGene manufactures powder packaging machines for flour, coffee, spices, protein powder, chemicals and more. Auger fillers, VFFS, semi-automatic systems. CE certified, factory-direct.',
  cn: 'SunGene生产面粉、咖啡、香料、蛋白粉、化工品等粉末包装机。螺旋充填机、VFFS、半自动系统。CE认证，工厂直销。',
  zh: 'SunGene生產麵粉、咖啡、香料、蛋白粉、化工品等粉末包裝機。螺旋充填機、VFFS、半自動系統。CE認證，工廠直銷。',
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
    kicker: 'POWDER PACKAGING EQUIPMENT',
    title: 'Powder Packaging Machine for Food, Chemical & Industrial Products',
    subtitle: 'Suitable for flour, coffee powder, spices, protein powder, and more. We help you choose the right machine based on your product and output.',
    ctaBannerText: 'Not sure which machine fits your powder?',
    ctaBannerLink: 'Send your product → Get machine recommendation',
    appTitle: 'What Powders Can This Machine Handle?',
    applications: [
      { icon: '🌾', title: 'Flour & Grain Powder', desc: 'Wheat flour, rice flour, corn starch, breadcrumbs' },
      { icon: '☕', title: 'Coffee & Tea Powder', desc: 'Instant coffee, matcha, protein powder, cocoa' },
      { icon: '🌶', title: 'Spice & Seasoning', desc: 'Chili powder, cumin, salt, mixed spices, seasoning packets' },
      { icon: '💪', title: 'Protein & Health', desc: 'Whey protein, plant protein, collagen powder' },
      { icon: '🧪', title: 'Chemical Powder', desc: 'Detergent, dye powder, agricultural chemicals' },
      { icon: '💊', title: 'Pharmaceutical Powder', desc: 'Medicine powder, vitamin supplements, herbal powder' },
    ],
    machineTitle: 'Available Machine Types',
    machines: [
      { title: 'Auger Filling Machine', desc: 'Best for fine, non-free-flowing powders. Precise dosing, ±0.5% accuracy. Range: 5g–5kg. Ideal for coffee, pharmaceutical, and detergent powders.' },
      { title: 'VFFS (Vertical Form Fill Seal)', desc: 'High-speed automated bagging from roll film. 15–60 bags/min. Ideal for flour, spices, sugar, and food-grade powders.' },
      { title: 'Semi-Automatic Filling System', desc: 'Operator-assisted filling, low investment. 5–20 bags/min. Good entry point for small-batch production.' },
      { title: 'Multi-Head Scale + Bagger', desc: 'Combines weighing and sealing for irregular granules. High accuracy for mixed products.' },
    ],
    specsTitle: 'Typical Specifications',
    specs: [
      ['Filling Range', '10g – 5,000g'],
      ['Speed', '10 – 60 bags/min'],
      ['Filling Accuracy', '±0.5% – ±1%'],
      ['Bag Width', '50 – 400mm'],
      ['Material', 'SUS304 / SUS316L'],
      ['Voltage', '110V / 220V / 380V (customizable)'],
      ['Air Pressure', '0.6 – 0.8 MPa'],
      ['Certification', 'CE, ISO'],
    ],
    galleryTitle: 'Powder Packaging Machine Gallery',
    galleryNote: '📸 More product photos available on request — contact us for a factory video tour.',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'Can you test the machine with our actual powder before we order?',
        a: 'Yes. We can arrange a sample test run at our factory using your powder sample and target bag format. We provide video evidence of the test run before you confirm the order.',
      },
      {
        q: 'What packaging materials are compatible?',
        a: 'Our powder packaging machines work with PE, BOPP, PET/PE laminate, kraft paper with PE liner, aluminum foil composite, and most heat-sealable multi-layer films.',
      },
      {
        q: 'What is the typical production lead time?',
        a: 'Standard models: 15–25 working days. Customized machines: 30–45 working days. We can discuss expedited options for urgent projects.',
      },
      {
        q: 'Do you provide remote installation and training support?',
        a: 'Yes. We provide detailed installation manuals, video guides, and remote video call support. On-site engineer visits can be arranged for an additional fee.',
      },
      {
        q: 'What spare parts are included with the machine?',
        a: 'Every machine ships with a standard spare parts kit including wearing parts, auger screws, sealing elements, and basic tools — sufficient for 1 year of normal operation.',
      },
    ],
  },
  cn: {
    kicker: '粉末包装设备',
    title: '适用于食品、化工及工业产品的粉末包装机',
    subtitle: '适用于面粉、咖啡粉、香料、蛋白粉等。我们根据您的产品和产量，帮助您选择合适的机器。',
    ctaBannerText: '不确定哪款机器适合您的粉末产品？',
    ctaBannerLink: '发送您的产品 → 获取机器推荐',
    appTitle: '这台机器能处理哪些粉末？',
    applications: [
      { icon: '🌾', title: '面粉与谷物粉', desc: '小麦粉、米粉、玉米淀粉、面包屑' },
      { icon: '☕', title: '咖啡与茶粉', desc: '速溶咖啡、抹茶、蛋白粉、可可粉' },
      { icon: '🌶', title: '香料与调味品', desc: '辣椒粉、孜然、盐、混合香料、调味包' },
      { icon: '💪', title: '蛋白质与健康粉', desc: '乳清蛋白、植物蛋白、胶原蛋白粉' },
      { icon: '🧪', title: '化工粉末', desc: '洗涤剂、染料粉、农用化学品' },
      { icon: '💊', title: '医药粉末', desc: '药粉、维生素补充剂、草药粉' },
    ],
    machineTitle: '可用机型',
    machines: [
      { title: '螺旋充填机', desc: '适用于细腻、不易流动的粉末。精确计量，精度±0.5%。范围：5g–5kg。适合咖啡、医药和洗涤剂粉末。' },
      { title: 'VFFS（立式成形充填封口机）', desc: '从卷膜自动成袋，高速包装。15–60袋/分钟。适合面粉、香料、糖和食品级粉末。' },
      { title: '半自动充填系统', desc: '人工辅助充填，投资低。5–20袋/分钟。适合小批量生产的入门选择。' },
      { title: '多头秤+打包机', desc: '结合称重和封口，适合不规则颗粒。混合产品精度高。' },
    ],
    specsTitle: '典型规格',
    specs: [
      ['充填范围', '10g – 5,000g'],
      ['速度', '10 – 60袋/分钟'],
      ['充填精度', '±0.5% – ±1%'],
      ['袋宽', '50 – 400mm'],
      ['材质', 'SUS304 / SUS316L'],
      ['电压', '110V / 220V / 380V（可定制）'],
      ['气压', '0.6 – 0.8 MPa'],
      ['认证', 'CE, ISO'],
    ],
    galleryTitle: '粉末包装机图库',
    galleryNote: '📸 更多产品照片可按需提供——联系我们获取工厂视频参观。',
    faqTitle: '常见问题',
    faq: [
      {
        q: '下单前可以用我们的实际粉末测试机器吗？',
        a: '可以。我们可以在工厂安排使用您的粉末样品和目标袋型进行样品测试。我们会在您确认订单前提供测试视频。',
      },
      {
        q: '兼容哪些包装材料？',
        a: '我们的粉末包装机适用于PE、BOPP、PET/PE复合膜、带PE内衬的牛皮纸、铝箔复合材料以及大多数热封多层薄膜。',
      },
      {
        q: '典型的生产交货期是多少？',
        a: '标准机型：15–25个工作日。定制机器：30–45个工作日。紧急项目可协商加急方案。',
      },
      {
        q: '你们提供远程安装和培训支持吗？',
        a: '是的。我们提供详细的安装手册、视频指南和远程视频通话支持。上门工程师服务可另行安排，需额外收费。',
      },
      {
        q: '机器随附哪些备件？',
        a: '每台机器均附带标准备件包，包括易损件、螺旋杆、封口元件和基本工具——足够1年正常运行使用。',
      },
    ],
  },
  zh: {
    kicker: '粉末包裝設備',
    title: '適用於食品、化工及工業產品的粉末包裝機',
    subtitle: '適用於麵粉、咖啡粉、香料、蛋白粉等。我們根據您的產品和產量，協助您選擇合適的機器。',
    ctaBannerText: '不確定哪款機器適合您的粉末產品？',
    ctaBannerLink: '傳送您的產品 → 獲取機器推薦',
    appTitle: '這台機器能處理哪些粉末？',
    applications: [
      { icon: '🌾', title: '麵粉與穀物粉', desc: '小麥粉、米粉、玉米澱粉、麵包粉' },
      { icon: '☕', title: '咖啡與茶粉', desc: '即溶咖啡、抹茶、蛋白粉、可可粉' },
      { icon: '🌶', title: '香料與調味品', desc: '辣椒粉、孜然、鹽、混合香料、調味包' },
      { icon: '💪', title: '蛋白質與健康粉', desc: '乳清蛋白、植物蛋白、膠原蛋白粉' },
      { icon: '🧪', title: '化工粉末', desc: '洗滌劑、染料粉、農用化學品' },
      { icon: '💊', title: '醫藥粉末', desc: '藥粉、維生素補充劑、草藥粉' },
    ],
    machineTitle: '可用機型',
    machines: [
      { title: '螺旋充填機', desc: '適用於細緻、不易流動的粉末。精確計量，精度±0.5%。範圍：5g–5kg。適合咖啡、醫藥和洗滌劑粉末。' },
      { title: 'VFFS（立式成形充填封口機）', desc: '從卷膜自動成袋，高速包裝。15–60袋/分鐘。適合麵粉、香料、糖和食品級粉末。' },
      { title: '半自動充填系統', desc: '人工輔助充填，投資低。5–20袋/分鐘。適合小批量生產的入門選擇。' },
      { title: '多頭秤+打包機', desc: '結合稱重和封口，適合不規則顆粒。混合產品精度高。' },
    ],
    specsTitle: '典型規格',
    specs: [
      ['充填範圍', '10g – 5,000g'],
      ['速度', '10 – 60袋/分鐘'],
      ['充填精度', '±0.5% – ±1%'],
      ['袋寬', '50 – 400mm'],
      ['材質', 'SUS304 / SUS316L'],
      ['電壓', '110V / 220V / 380V（可客製）'],
      ['氣壓', '0.6 – 0.8 MPa'],
      ['認證', 'CE, ISO'],
    ],
    galleryTitle: '粉末包裝機圖庫',
    galleryNote: '📸 更多產品照片可按需提供——聯繫我們獲取工廠影片參觀。',
    faqTitle: '常見問題',
    faq: [
      {
        q: '下單前可以用我們的實際粉末測試機器嗎？',
        a: '可以。我們可以在工廠安排使用您的粉末樣品和目標袋型進行樣品測試。我們會在您確認訂單前提供測試影片。',
      },
      {
        q: '相容哪些包裝材料？',
        a: '我們的粉末包裝機適用於PE、BOPP、PET/PE複合膜、帶PE內襯的牛皮紙、鋁箔複合材料以及大多數熱封多層薄膜。',
      },
      {
        q: '典型的生產交貨期是多少？',
        a: '標準機型：15–25個工作日。客製機器：30–45個工作日。緊急專案可協商加急方案。',
      },
      {
        q: '你們提供遠端安裝和培訓支援嗎？',
        a: '是的。我們提供詳細的安裝手冊、影片指南和遠端視訊通話支援。到府工程師服務可另行安排，需額外收費。',
      },
      {
        q: '機器隨附哪些備件？',
        a: '每台機器均附帶標準備件包，包括易損件、螺旋桿、封口元件和基本工具——足夠1年正常運行使用。',
      },
    ],
  },
}

export default async function PowderPackagingMachinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content['en']

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Powder Packaging Machine',
    description: descriptions[lang] || descriptions.en,
    brand: { '@type': 'Brand', name: 'SunGene' },
    manufacturer: { '@type': 'Organization', name: 'SunGene Co., LTD', url: 'https://www.sungene.net' },
    category: 'Packaging Machinery',
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.machines.map((machine: any, i: number) => (
              <Card key={i} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-950">{machine.title}</h3>
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
            {/* Box 1: Auger Filler SVG */}
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="180" fill="#f3f4f6"/>
                {/* Hopper */}
                <polygon points="80,10 160,10 140,60 100,60" fill="#d1d5db" stroke="#9ca3af" strokeWidth="2"/>
                {/* Hopper top rim */}
                <rect x="75" y="6" width="90" height="8" rx="2" fill="#9ca3af"/>
                {/* Auger tube */}
                <rect x="108" y="60" width="24" height="70" rx="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2"/>
                {/* Auger screw helix lines */}
                <line x1="108" y1="75" x2="132" y2="80" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="108" y1="88" x2="132" y2="93" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="108" y1="101" x2="132" y2="106" stroke="#6b7280" strokeWidth="1.5"/>
                <line x1="108" y1="114" x2="132" y2="119" stroke="#6b7280" strokeWidth="1.5"/>
                {/* Nozzle */}
                <polygon points="108,130 132,130 126,148 114,148" fill="#9ca3af" stroke="#6b7280" strokeWidth="1.5"/>
                {/* Bag */}
                <rect x="100" y="150" width="40" height="24" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
                <line x1="100" y1="162" x2="140" y2="162" stroke="#93c5fd" strokeWidth="1"/>
                {/* Motor */}
                <rect x="132" y="55" width="22" height="18" rx="3" fill="#6b7280"/>
                <circle cx="143" cy="64" r="5" fill="#374151"/>
                {/* Label */}
                <text x="120" y="175" textAnchor="middle" fontSize="9" fill="#6b7280">Auger Filler</text>
              </svg>
            </div>

            {/* Box 2: VFFS Machine SVG */}
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="180" fill="#f3f4f6"/>
                {/* Film roll at top */}
                <circle cx="120" cy="20" r="16" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2"/>
                <circle cx="120" cy="20" r="6" fill="#9ca3af"/>
                {/* Film path lines */}
                <line x1="106" y1="20" x2="100" y2="40" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3,2"/>
                <line x1="134" y1="20" x2="140" y2="40" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3,2"/>
                {/* Forming tube / collar */}
                <path d="M95,40 L100,55 L120,60 L140,55 L145,40 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1.5"/>
                {/* Vertical tube */}
                <rect x="108" y="60" width="24" height="65" rx="0" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5"/>
                {/* Sealing jaws horizontal */}
                <rect x="95" y="100" width="20" height="8" rx="2" fill="#6b7280"/>
                <rect x="125" y="100" width="20" height="8" rx="2" fill="#6b7280"/>
                {/* Vertical sealing strips */}
                <rect x="105" y="60" width="5" height="65" rx="1" fill="#6b7280" opacity="0.5"/>
                <rect x="130" y="60" width="5" height="65" rx="1" fill="#6b7280" opacity="0.5"/>
                {/* Filled bags below */}
                <rect x="105" y="128" width="30" height="20" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
                <rect x="105" y="150" width="30" height="20" rx="3" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="1.5"/>
                <text x="120" y="175" textAnchor="middle" fontSize="9" fill="#6b7280">VFFS Machine</text>
              </svg>
            </div>

            {/* Box 3: Packaged Products SVG */}
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="180" fill="#f3f4f6"/>
                {/* Row of powder bags */}
                {/* Bag 1 */}
                <rect x="20" y="40" width="50" height="70" rx="6" fill="#fde68a" stroke="#f59e0b" strokeWidth="2"/>
                <rect x="28" y="48" width="34" height="20" rx="3" fill="#fbbf24" opacity="0.7"/>
                <text x="45" y="85" textAnchor="middle" fontSize="7" fill="#92400e">COFFEE</text>
                <text x="45" y="94" textAnchor="middle" fontSize="7" fill="#92400e">POWDER</text>
                <line x1="20" y1="110" x2="70" y2="110" stroke="#f59e0b" strokeWidth="2"/>
                {/* Bag 2 */}
                <rect x="85" y="30" width="50" height="80" rx="6" fill="#d1fae5" stroke="#34d399" strokeWidth="2"/>
                <rect x="93" y="40" width="34" height="20" rx="3" fill="#6ee7b7" opacity="0.7"/>
                <text x="110" y="80" textAnchor="middle" fontSize="7" fill="#065f46">PROTEIN</text>
                <text x="110" y="91" textAnchor="middle" fontSize="7" fill="#065f46">POWDER</text>
                <line x1="85" y1="108" x2="135" y2="108" stroke="#34d399" strokeWidth="2"/>
                {/* Bag 3 */}
                <rect x="150" y="40" width="50" height="70" rx="6" fill="#fee2e2" stroke="#f87171" strokeWidth="2"/>
                <rect x="158" y="48" width="34" height="20" rx="3" fill="#fca5a5" opacity="0.7"/>
                <text x="175" y="85" textAnchor="middle" fontSize="7" fill="#7f1d1d">SPICE</text>
                <text x="175" y="94" textAnchor="middle" fontSize="7" fill="#7f1d1d">MIX</text>
                <line x1="150" y1="110" x2="200" y2="110" stroke="#f87171" strokeWidth="2"/>
                {/* Labels */}
                <text x="45" y="125" textAnchor="middle" fontSize="8" fill="#6b7280">100g</text>
                <text x="110" y="120" textAnchor="middle" fontSize="8" fill="#6b7280">500g</text>
                <text x="175" y="125" textAnchor="middle" fontSize="8" fill="#6b7280">50g</text>
                <text x="120" y="160" textAnchor="middle" fontSize="9" fill="#6b7280">Packaged Products</text>
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
          <SendProductForm lang={lang} sourceMachine="powder" />
        </Container>
      </section>

      {/* Bottom CTA Bar */}
      <section className="py-16 sm:py-20 bg-brand-950 text-white">
        <Container className="max-w-4xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            {lang === 'cn' ? '准备好开始了吗？与我们的工程师交流。' : lang === 'zh' ? '準備好開始了嗎？與我們的工程師交流。' : 'Ready to get started? Talk to our engineers.'}
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
