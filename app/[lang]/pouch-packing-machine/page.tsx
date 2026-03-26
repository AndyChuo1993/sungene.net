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
  en: 'Pouch Packing Machine | Stand-up, Pillow Bag, Zipper Pouch | SunGene',
  cn: '给袋包装机 | 自立袋、枕型袋、拉链袋 | SunGene',
  zh: '給袋包裝機 | 自立袋、枕型袋、拉鏈袋 | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'SunGene manufactures pouch packing machines for stand-up pouches, pillow bags, zipper pouches, vacuum bags, and doypacks. For snacks, nuts, coffee, pet food. CE certified.',
  cn: 'SunGene生产自立袋、枕型袋、拉链袋、真空袋和多伊包包装机。适用于零食、坚果、咖啡、宠物食品。CE认证。',
  zh: 'SunGene生產自立袋、枕型袋、拉鏈袋、真空袋和多伊包包裝機。適用於零食、堅果、咖啡、寵物食品。CE認證。',
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
    kicker: 'POUCH PACKING EQUIPMENT',
    title: 'Pouch Packing Machine for Snacks, Food & Consumer Products',
    subtitle: 'From pillow bags to stand-up zipper pouches — we help you choose the right pouch format and machine based on your product, bag size, and production speed.',
    ctaBannerText: 'Not sure which pouch format suits your product?',
    ctaBannerLink: 'Send your product → Get machine recommendation',
    appTitle: 'What Products Can This Machine Pack?',
    applications: [
      { icon: '🍿', title: 'Snacks & Chips', desc: 'Potato chips, puffed snacks, crackers, popcorn' },
      { icon: '🥜', title: 'Nuts & Dried Fruits', desc: 'Cashews, almonds, peanuts, raisins, dried mango' },
      { icon: '☕', title: 'Coffee & Tea', desc: 'Coffee beans, ground coffee, loose leaf tea, tea bags' },
      { icon: '🐾', title: 'Pet Food & Treats', desc: 'Dry pet food, freeze-dried treats, pet snacks' },
      { icon: '🍬', title: 'Candy & Confectionery', desc: 'Gummies, hard candy, chocolate, jellies' },
      { icon: '❄️', title: 'Frozen & Fresh Food', desc: 'Frozen vegetables, marinated meat, fresh noodles' },
    ],
    machineTitle: 'Available Machine Types',
    machines: [
      { title: 'HFFS (Horizontal Flow Wrap)', desc: 'For regular-shaped solid products. Pillow bags (flow wrap). 50–200 bags/min. Best for biscuits, bars, individual snacks.' },
      { title: 'Pre-made Pouch Machine', desc: 'Fills into pre-formed stand-up or zipper pouches. 20–60 bags/min. Best for premium packaging and zipper resealable products.' },
      { title: 'VFFS with Multi-Head Weigher', desc: 'Combines precise weighing with high-speed vertical bagging. 30–120 bags/min. Best for nuts, granules, frozen items.' },
      { title: 'Vacuum Packing Machine', desc: 'Removes air to extend shelf life. Single or double chamber. Best for meat, cheese, coffee, dried goods.' },
    ],
    specsTitle: 'Typical Specifications',
    specs: [
      ['Bag Width', '50 – 450mm'],
      ['Speed', '20 – 200 bags/min'],
      ['Fill Weight', '5g – 5kg'],
      ['Bag Types', 'Pillow, Stand-up, Zipper, Vacuum, Gusset'],
      ['Film Thickness', '40–120 μm'],
      ['Material', 'SUS304'],
      ['Certification', 'CE'],
    ],
    galleryTitle: 'Pouch Packing Machine Gallery',
    galleryNote: '📸 More product photos available on request — contact us for a factory video tour.',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'What\'s the difference between VFFS and pre-made pouch machines?',
        a: 'VFFS forms bags from roll film on the fly — lower per-bag cost, higher speed. Pre-made pouch machines use pre-formed bags — better appearance for premium brands, supports zipper/spout/stand-up formats. We recommend based on your budget and target market.',
      },
      {
        q: 'Can you make custom bag sizes?',
        a: 'Yes. We can configure bag widths from 50mm to 450mm, and lengths are adjustable on most models. Provide your target bag dimensions and fill weight.',
      },
      {
        q: 'Do you support zipper pouches?',
        a: 'Yes. We offer integrated zipper applicator modules for both VFFS and pre-made pouch machines, supporting press-to-close and slider zipper styles.',
      },
      {
        q: 'What is nitrogen flushing and do you support it?',
        a: 'Nitrogen flushing replaces oxygen in the bag with N2 to prevent oxidation and extend shelf life. We support integrated gas flushing systems — essential for coffee, nuts, and snacks.',
      },
      {
        q: 'What printing or labeling options are available?',
        a: 'We can integrate date coders (inkjet or thermal), label applicators, and QR code printing systems inline with the packaging machine.',
      },
    ],
  },
  cn: {
    kicker: '给袋包装设备',
    title: '适用于零食、食品及消费品的给袋包装机',
    subtitle: '从枕型袋到自立拉链袋——我们根据您的产品、袋子尺寸和生产速度，帮助您选择合适的袋型和机器。',
    ctaBannerText: '不确定哪种袋型适合您的产品？',
    ctaBannerLink: '发送您的产品 → 获取机器推荐',
    appTitle: '这台机器可以包装哪些产品？',
    applications: [
      { icon: '🍿', title: '零食与薯片', desc: '薯片、膨化零食、饼干、爆米花' },
      { icon: '🥜', title: '坚果与干果', desc: '腰果、杏仁、花生、葡萄干、芒果干' },
      { icon: '☕', title: '咖啡与茶', desc: '咖啡豆、研磨咖啡、散装茶叶、茶包' },
      { icon: '🐾', title: '宠物食品与零食', desc: '干宠物食品、冻干零食、宠物小食' },
      { icon: '🍬', title: '糖果与甜点', desc: '软糖、硬糖、巧克力、果冻' },
      { icon: '❄️', title: '冷冻与新鲜食品', desc: '冷冻蔬菜、腌制肉类、新鲜面条' },
    ],
    machineTitle: '可用机型',
    machines: [
      { title: 'HFFS（水平流量包装机）', desc: '适用于形状规则的固体产品。枕型袋（流量包装）。50–200袋/分钟。最适合饼干、棒状食品、单件零食。' },
      { title: '给袋机（预制袋）', desc: '充填预制自立袋或拉链袋。20–60袋/分钟。最适合高端包装和拉链可重复密封产品。' },
      { title: 'VFFS配多头秤', desc: '精准称重与高速立式打袋相结合。30–120袋/分钟。最适合坚果、颗粒、冷冻产品。' },
      { title: '真空包装机', desc: '抽去空气延长保质期。单室或双室。最适合肉类、奶酪、咖啡、干货。' },
    ],
    specsTitle: '典型规格',
    specs: [
      ['袋宽', '50 – 450mm'],
      ['速度', '20 – 200袋/分钟'],
      ['充填重量', '5g – 5kg'],
      ['袋型', '枕型、自立型、拉链、真空、风琴型'],
      ['薄膜厚度', '40–120 μm'],
      ['材质', 'SUS304'],
      ['认证', 'CE'],
    ],
    galleryTitle: '给袋包装机图库',
    galleryNote: '📸 更多产品照片可按需提供——联系我们获取工厂视频参观。',
    faqTitle: '常见问题',
    faq: [
      {
        q: 'VFFS和给袋机（预制袋）有什么区别？',
        a: 'VFFS从卷膜现场成形——每袋成本更低，速度更高。给袋机使用预制袋——外观更好，适合高端品牌，支持拉链/嘴/自立袋型。我们根据您的预算和目标市场推荐。',
      },
      {
        q: '可以定制袋子尺寸吗？',
        a: '可以。袋宽可配置为50mm至450mm，大多数机型的袋长可调节。提供目标袋子尺寸和充填重量。',
      },
      {
        q: '支持拉链袋吗？',
        a: '是的。我们为VFFS和给袋机提供集成拉链贴合模块，支持按压式和滑块式拉链。',
      },
      {
        q: '什么是充氮保鲜，你们支持吗？',
        a: '充氮保鲜用N2替换袋中的氧气，防止氧化并延长保质期。我们支持集成充气系统——咖啡、坚果和零食必备。',
      },
      {
        q: '有哪些打印或贴标选项？',
        a: '我们可以整合日期打码器（喷墨或热转印）、贴标机和二维码打印系统，与包装机联机工作。',
      },
    ],
  },
  zh: {
    kicker: '給袋包裝設備',
    title: '適用於零食、食品及消費品的給袋包裝機',
    subtitle: '從枕型袋到自立拉鏈袋——我們根據您的產品、袋子尺寸和生產速度，協助您選擇合適的袋型和機器。',
    ctaBannerText: '不確定哪種袋型適合您的產品？',
    ctaBannerLink: '傳送您的產品 → 獲取機器推薦',
    appTitle: '這台機器可以包裝哪些產品？',
    applications: [
      { icon: '🍿', title: '零食與薯片', desc: '薯片、膨化零食、餅乾、爆米花' },
      { icon: '🥜', title: '堅果與乾果', desc: '腰果、杏仁、花生、葡萄乾、芒果乾' },
      { icon: '☕', title: '咖啡與茶', desc: '咖啡豆、研磨咖啡、散裝茶葉、茶包' },
      { icon: '🐾', title: '寵物食品與零食', desc: '乾寵物食品、凍乾零食、寵物小食' },
      { icon: '🍬', title: '糖果與甜點', desc: '軟糖、硬糖、巧克力、果凍' },
      { icon: '❄️', title: '冷凍與新鮮食品', desc: '冷凍蔬菜、醃製肉類、新鮮麵條' },
    ],
    machineTitle: '可用機型',
    machines: [
      { title: 'HFFS（水平流量包裝機）', desc: '適用於形狀規則的固體產品。枕型袋（流量包裝）。50–200袋/分鐘。最適合餅乾、棒狀食品、單件零食。' },
      { title: '給袋機（預製袋）', desc: '充填預製自立袋或拉鏈袋。20–60袋/分鐘。最適合高端包裝和拉鏈可重複密封產品。' },
      { title: 'VFFS配多頭秤', desc: '精準稱重與高速立式打袋相結合。30–120袋/分鐘。最適合堅果、顆粒、冷凍產品。' },
      { title: '真空包裝機', desc: '抽去空氣延長保質期。單室或雙室。最適合肉類、乳酪、咖啡、乾貨。' },
    ],
    specsTitle: '典型規格',
    specs: [
      ['袋寬', '50 – 450mm'],
      ['速度', '20 – 200袋/分鐘'],
      ['充填重量', '5g – 5kg'],
      ['袋型', '枕型、自立型、拉鏈、真空、風琴型'],
      ['薄膜厚度', '40–120 μm'],
      ['材質', 'SUS304'],
      ['認證', 'CE'],
    ],
    galleryTitle: '給袋包裝機圖庫',
    galleryNote: '📸 更多產品照片可按需提供——聯繫我們獲取工廠影片參觀。',
    faqTitle: '常見問題',
    faq: [
      {
        q: 'VFFS和給袋機（預製袋）有什麼區別？',
        a: 'VFFS從卷膜現場成形——每袋成本更低，速度更高。給袋機使用預製袋——外觀更好，適合高端品牌，支援拉鏈/嘴/自立袋型。我們根據您的預算和目標市場推薦。',
      },
      {
        q: '可以客製袋子尺寸嗎？',
        a: '可以。袋寬可配置為50mm至450mm，大多數機型的袋長可調節。提供目標袋子尺寸和充填重量。',
      },
      {
        q: '支援拉鏈袋嗎？',
        a: '是的。我們為VFFS和給袋機提供整合拉鏈貼合模組，支援按壓式和滑塊式拉鏈。',
      },
      {
        q: '什麼是充氮保鮮，你們支援嗎？',
        a: '充氮保鮮用N2替換袋中的氧氣，防止氧化並延長保質期。我們支援整合充氣系統——咖啡、堅果和零食必備。',
      },
      {
        q: '有哪些列印或貼標選項？',
        a: '我們可以整合日期打碼器（噴墨或熱轉印）、貼標機和二維碼列印系統，與包裝機聯機工作。',
      },
    ],
  },
}

export default async function PouchPackingMachinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content['en']

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Pouch Packing Machine',
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
            {/* Box 1: VFFS with roll film */}
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="180" fill="#f3f4f6"/>
                {/* Roll film */}
                <circle cx="120" cy="18" r="14" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2"/>
                <circle cx="120" cy="18" r="5" fill="#9ca3af"/>
                {/* Film guides */}
                <line x1="108" y1="18" x2="102" y2="38" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3,2"/>
                <line x1="132" y1="18" x2="138" y2="38" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3,2"/>
                {/* Forming collar */}
                <path d="M96,38 L102,52 L120,58 L138,52 L144,38 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1.5"/>
                {/* Forming tube */}
                <rect x="109" y="58" width="22" height="60" rx="0" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5"/>
                {/* Vertical seal bars */}
                <rect x="104" y="58" width="6" height="60" rx="1" fill="#6b7280" opacity="0.4"/>
                <rect x="130" y="58" width="6" height="60" rx="1" fill="#6b7280" opacity="0.4"/>
                {/* Horizontal seal jaws */}
                <rect x="96" y="97" width="18" height="7" rx="2" fill="#374151"/>
                <rect x="126" y="97" width="18" height="7" rx="2" fill="#374151"/>
                {/* Bags output */}
                <rect x="106" y="120" width="28" height="20" rx="3" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5"/>
                <line x1="106" y1="130" x2="134" y2="130" stroke="#f59e0b" strokeWidth="1" opacity="0.6"/>
                <rect x="106" y="143" width="28" height="20" rx="3" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1.5"/>
                <text x="120" y="171" textAnchor="middle" fontSize="9" fill="#6b7280">VFFS Machine</text>
              </svg>
            </div>

            {/* Box 2: Stand-up zipper pouches */}
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="180" fill="#f3f4f6"/>
                {/* Pouch 1 - stand-up */}
                <path d="M30,140 L30,60 Q30,50 40,50 L80,50 Q90,50 90,60 L90,140 Q85,148 60,148 Q35,148 30,140 Z" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
                {/* Zipper line */}
                <rect x="30" y="56" width="60" height="6" rx="2" fill="#2563eb" opacity="0.6"/>
                <rect x="30" y="56" width="60" height="3" rx="1" fill="#1d4ed8" opacity="0.4"/>
                {/* Window / label area */}
                <rect x="36" y="70" width="48" height="40" rx="3" fill="white" opacity="0.6"/>
                <text x="60" y="93" textAnchor="middle" fontSize="8" fill="#1e40af">SNACK</text>
                <text x="60" y="103" textAnchor="middle" fontSize="7" fill="#3b82f6">Net 200g</text>
                {/* Base gusset */}
                <line x1="30" y1="130" x2="90" y2="130" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4,2"/>

                {/* Pouch 2 - stand-up kraft */}
                <path d="M110,135 L110,58 Q110,48 120,48 L160,48 Q170,48 170,58 L170,135 Q165,143 140,143 Q115,143 110,135 Z" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
                <rect x="110" y="54" width="60" height="6" rx="2" fill="#b45309" opacity="0.6"/>
                <rect x="116" y="68" width="48" height="40" rx="3" fill="white" opacity="0.5"/>
                <text x="140" y="91" textAnchor="middle" fontSize="8" fill="#78350f">COFFEE</text>
                <text x="140" y="101" textAnchor="middle" fontSize="7" fill="#92400e">250g</text>
                <line x1="110" y1="123" x2="170" y2="123" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,2"/>

                {/* Pouch 3 - stand-up red */}
                <path d="M190,138 L190,62 Q190,52 198,52 L228,52 Q236,52 236,62 L236,138 Q232,145 213,145 Q194,145 190,138 Z" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
                <rect x="190" y="58" width="46" height="5" rx="2" fill="#dc2626" opacity="0.6"/>
                <rect x="194" y="70" width="38" height="34" rx="3" fill="white" opacity="0.5"/>
                <text x="213" y="90" textAnchor="middle" fontSize="8" fill="#7f1d1d">NUTS</text>
                <text x="213" y="100" textAnchor="middle" fontSize="7" fill="#7f1d1d">150g</text>
                <line x1="190" y1="127" x2="236" y2="127" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,2"/>

                <text x="120" y="170" textAnchor="middle" fontSize="9" fill="#6b7280">Stand-up Zipper Pouches</text>
              </svg>
            </div>

            {/* Box 3: Pre-made pouch filling machine */}
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 240 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="180" fill="#f3f4f6"/>
                {/* Machine frame */}
                <rect x="30" y="20" width="180" height="130" rx="6" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2"/>
                {/* Pouch gripper conveyor */}
                <rect x="40" y="40" width="160" height="8" rx="3" fill="#9ca3af"/>
                {/* Grip clamps */}
                {[50, 85, 120, 155, 175].map((x, i) => (
                  <rect key={i} x={x} y={38} width={8} height={12} rx="2" fill="#374151"/>
                ))}
                {/* Stations indicators */}
                <circle cx="60" cy="80" r="14" fill="white" stroke="#6b7280" strokeWidth="1.5"/>
                <text x="60" y="84" textAnchor="middle" fontSize="7" fill="#374151">Open</text>
                <circle cx="105" cy="80" r="14" fill="white" stroke="#6b7280" strokeWidth="1.5"/>
                <text x="105" y="84" textAnchor="middle" fontSize="7" fill="#374151">Fill</text>
                <circle cx="150" cy="80" r="14" fill="white" stroke="#6b7280" strokeWidth="1.5"/>
                <text x="150" y="84" textAnchor="middle" fontSize="7" fill="#374151">Seal</text>
                <circle cx="193" cy="80" r="14" fill="white" stroke="#6b7280" strokeWidth="1.5"/>
                <text x="193" y="84" textAnchor="middle" fontSize="7" fill="#374151">Out</text>
                {/* Pouches at fill station */}
                <rect x="92" y="100" width="26" height="38" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
                <rect x="92" y="100" width="26" height="6" rx="2" fill="#2563eb" opacity="0.5"/>
                {/* Fill nozzle */}
                <rect x="102" y="88" width="6" height="14" rx="2" fill="#6b7280"/>
                <text x="120" y="172" textAnchor="middle" fontSize="9" fill="#6b7280">Pre-made Pouch Machine</text>
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
          <SendProductForm lang={lang} sourceMachine="pouch" />
        </Container>
      </section>

      {/* Bottom CTA Bar */}
      <section className="py-16 sm:py-20 bg-brand-950 text-white">
        <Container className="max-w-4xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            {lang === 'cn' ? '准备好了吗？让我们的专家帮您选择合适的袋型。' : lang === 'zh' ? '準備好了嗎？讓我們的專家協助您選擇合適的袋型。' : 'Ready to choose the right pouch format? Let\'s talk.'}
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
