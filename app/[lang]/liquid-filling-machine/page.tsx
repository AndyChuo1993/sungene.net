import Link from 'next/link'
import Image from 'next/image'
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
  en: 'Liquid Filling Machine | Piston, Gravity, Pump Filler | SunGene',
  cn: '液体灌装机 | 活塞式、重力式、泵式 | SunGene',
  zh: '液體灌裝機 | 活塞式、重力式、泵式 | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'SunGene manufactures liquid filling machines for beverages, sauces, oils, cosmetics, chemicals and pharmaceuticals. Piston, gravity, overflow, peristaltic pump types. CE certified.',
  cn: 'SunGene生产适用于饮料、酱料、油脂、化妆品、化工品和药品的液体灌装机。活塞式、重力式、溢流式、蠕动泵类型。CE认证。',
  zh: 'SunGene生產適用於飲料、醬料、油脂、化妝品、化工品和藥品的液體灌裝機。活塞式、重力式、溢流式、蠕動泵類型。CE認證。',
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
    kicker: 'LIQUID FILLING EQUIPMENT',
    title: 'Liquid Filling Machine for Beverage, Food, Chemical & Cosmetic Products',
    subtitle: 'Handles water-thin liquids to thick pastes — sauces, beverages, oils, shampoos, cleaning agents and more. We match the right filler type to your viscosity and output target.',
    ctaBannerText: 'Not sure which filler type suits your liquid?',
    ctaBannerLink: 'Send your product → Get machine recommendation',
    appTitle: 'What Liquids Can This Machine Handle?',
    applications: [
      { icon: '🥤', title: 'Beverages', desc: 'Water, juice, milk, energy drinks, plant-based drinks' },
      { icon: '🫙', title: 'Cooking Oils & Vinegar', desc: 'Olive oil, soybean oil, sesame oil, vinegar, cooking sauces' },
      { icon: '🍅', title: 'Sauces & Condiments', desc: 'Ketchup, hot sauce, mayonnaise, chili paste, oyster sauce' },
      { icon: '💆', title: 'Cosmetics & Personal Care', desc: 'Shampoo, lotion, toner, hand sanitizer, liquid soap' },
      { icon: '🧴', title: 'Chemicals & Cleaners', desc: 'Detergent, bleach, industrial lubricants, disinfectants' },
      { icon: '💉', title: 'Pharmaceutical Liquids', desc: 'Syrups, oral solutions, eye drops, topical formulations' },
    ],
    machineTitle: 'Available Machine Types',
    machines: [
      { title: 'Piston Filling Machine', desc: 'For thick pastes and viscous products. High accuracy ±0.5%. Fill range: 10ml–5,000ml. Best for sauces, pastes, creams.' },
      { title: 'Gravity Filling Machine', desc: 'For thin, free-flowing liquids. High speed, clean filling. Best for water, juice, vinegar, light oils.' },
      { title: 'Overflow Filling Machine', desc: 'Ensures consistent visible fill level. For foamy or low-viscosity products. Best for water, household cleaners.' },
      { title: 'Peristaltic Pump Filler', desc: 'No product contact with pump mechanism. For pharmaceutical, corrosive, or precious liquids. Best for syrups, chemical solutions.' },
      { title: 'Rotary Cup / Tray Sealer', desc: 'Fills and seals cups or trays in one step. For water cups, yogurt, jelly, pudding.' },
    ],
    specsTitle: 'Typical Specifications',
    specs: [
      ['Fill Volume', '5ml – 5,000ml'],
      ['Speed', '20 – 120 containers/min'],
      ['Accuracy', '±0.5% (piston type)'],
      ['Container Type', 'Bottle, Bag, Pouch, Cup, Jar'],
      ['Material', 'SUS304 / SUS316L'],
      ['Voltage', 'Customizable'],
      ['CIP Compatible', 'Yes (optional)'],
    ],
    galleryTitle: 'Liquid Filling Machine Gallery',
    galleryNote: '📸 More product photos available on request — contact us for a factory video tour.',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'How do I choose between piston, gravity, and pump fillers?',
        a: 'Viscosity is the main factor. Thin liquids (water, juice) → gravity or overflow. Medium viscosity (oils, syrups) → piston. Thick pastes (mayonnaise, cream) → piston or pump. Pharmaceutical/corrosive → peristaltic pump. Tell us your product and we\'ll recommend.',
      },
      {
        q: 'Can the machine handle both thin and thick products?',
        a: 'Some models have adjustable nozzle and valve configurations. For very different viscosities, separate dedicated machines are recommended for best accuracy.',
      },
      {
        q: 'What containers are supported?',
        a: 'We support glass bottles, PET/HDPE plastic bottles, pouches, stand-up bags, cups, jars, cans, and custom containers. Provide your container dimensions for a compatibility check.',
      },
      {
        q: 'Is the machine CIP (Clean-In-Place) compatible?',
        a: 'Yes, most of our liquid filling machines can be configured with CIP systems for quick, sanitary cleaning without disassembly — important for beverage and pharmaceutical applications.',
      },
      {
        q: 'What is the minimum order for customized machines?',
        a: 'There is no minimum order quantity for machines. Even a single customized machine can be ordered. We provide detailed drawings and confirmation before production begins.',
      },
    ],
  },
  cn: {
    kicker: '液体灌装设备',
    title: '适用于饮料、食品、化工及化妆品的液体灌装机',
    subtitle: '处理从水状液体到稠膏状物质——酱料、饮料、油脂、洗发水、清洁剂等。我们根据您的粘度和产量需求匹配合适的灌装类型。',
    ctaBannerText: '不确定哪种灌装类型适合您的液体？',
    ctaBannerLink: '发送您的产品 → 获取机器推荐',
    appTitle: '这台机器能处理哪些液体？',
    applications: [
      { icon: '🥤', title: '饮料', desc: '水、果汁、牛奶、能量饮料、植物基饮料' },
      { icon: '🫙', title: '食用油与醋', desc: '橄榄油、大豆油、芝麻油、醋、烹饪酱料' },
      { icon: '🍅', title: '酱料与调味品', desc: '番茄酱、辣椒酱、蛋黄酱、辣酱、蚝油' },
      { icon: '💆', title: '化妆品与个护', desc: '洗发水、乳液、爽肤水、洗手液、沐浴露' },
      { icon: '🧴', title: '化工品与清洁剂', desc: '洗涤剂、漂白剂、工业润滑油、消毒剂' },
      { icon: '💉', title: '药品液体', desc: '糖浆、口服液、眼药水、外用制剂' },
    ],
    machineTitle: '可用机型',
    machines: [
      { title: '活塞式灌装机', desc: '适用于稠膏和粘稠产品。高精度±0.5%。灌装范围：10ml–5000ml。最适合酱料、膏体、乳霜。' },
      { title: '重力式灌装机', desc: '适用于稀薄、自由流动液体。高速、清洁灌装。最适合水、果汁、醋、轻质油。' },
      { title: '溢流式灌装机', desc: '确保一致的可见充填液位。适合起泡或低粘度产品。最适合水、家用清洁剂。' },
      { title: '蠕动泵灌装机', desc: '产品不接触泵机构。适合药品、腐蚀性或贵重液体。最适合糖浆、化学溶液。' },
      { title: '旋转式杯/托盘封口机', desc: '一步完成杯或托盘的充填和封口。适合水杯、酸奶、果冻、布丁。' },
    ],
    specsTitle: '典型规格',
    specs: [
      ['充填容量', '5ml – 5,000ml'],
      ['速度', '20 – 120个/分钟'],
      ['精度', '±0.5%（活塞式）'],
      ['容器类型', '瓶、袋、软包、杯、罐'],
      ['材质', 'SUS304 / SUS316L'],
      ['电压', '可定制'],
      ['CIP兼容', '是（可选）'],
    ],
    galleryTitle: '液体灌装机图库',
    galleryNote: '📸 更多产品照片可按需提供——联系我们获取工厂视频参观。',
    faqTitle: '常见问题',
    faq: [
      {
        q: '如何选择活塞式、重力式和泵式灌装机？',
        a: '粘度是主要因素。稀薄液体（水、果汁）→ 重力式或溢流式。中等粘度（油、糖浆）→ 活塞式。稠膏（蛋黄酱、乳霜）→ 活塞式或泵式。药品/腐蚀性 → 蠕动泵。告诉我们您的产品，我们会推荐。',
      },
      {
        q: '机器可以同时处理稀薄和稠厚产品吗？',
        a: '部分机型具有可调节喷嘴和阀门配置。对于粘度差异很大的产品，建议使用专用机器以获得最佳精度。',
      },
      {
        q: '支持哪些容器？',
        a: '我们支持玻璃瓶、PET/HDPE塑料瓶、软包、自立袋、杯、罐头和定制容器。提供您的容器尺寸进行兼容性检查。',
      },
      {
        q: '机器是否兼容CIP（就地清洗）系统？',
        a: '是的，我们大多数液体灌装机可配置CIP系统，无需拆卸即可快速、卫生地清洗——对饮料和药品应用非常重要。',
      },
      {
        q: '定制机器的最小订购量是多少？',
        a: '机器没有最小订购量。即使只订购一台定制机器也可以。我们在生产开始前提供详细图纸和确认。',
      },
    ],
  },
  zh: {
    kicker: '液體灌裝設備',
    title: '適用於飲料、食品、化工及化妝品的液體灌裝機',
    subtitle: '處理從水狀液體到稠膏狀物質——醬料、飲料、油脂、洗髮水、清潔劑等。我們根據您的黏度和產量需求匹配合適的灌裝類型。',
    ctaBannerText: '不確定哪種灌裝類型適合您的液體？',
    ctaBannerLink: '傳送您的產品 → 獲取機器推薦',
    appTitle: '這台機器能處理哪些液體？',
    applications: [
      { icon: '🥤', title: '飲料', desc: '水、果汁、牛奶、能量飲料、植物基飲料' },
      { icon: '🫙', title: '食用油與醋', desc: '橄欖油、大豆油、芝麻油、醋、烹飪醬料' },
      { icon: '🍅', title: '醬料與調味品', desc: '番茄醬、辣椒醬、蛋黃醬、辣醬、蠔油' },
      { icon: '💆', title: '化妝品與個護', desc: '洗髮水、乳液、爽膚水、洗手液、沐浴露' },
      { icon: '🧴', title: '化工品與清潔劑', desc: '洗滌劑、漂白劑、工業潤滑油、消毒劑' },
      { icon: '💉', title: '藥品液體', desc: '糖漿、口服液、眼藥水、外用製劑' },
    ],
    machineTitle: '可用機型',
    machines: [
      { title: '活塞式灌裝機', desc: '適用於稠膏和黏稠產品。高精度±0.5%。灌裝範圍：10ml–5000ml。最適合醬料、膏體、乳霜。' },
      { title: '重力式灌裝機', desc: '適用於稀薄、自由流動液體。高速、清潔灌裝。最適合水、果汁、醋、輕質油。' },
      { title: '溢流式灌裝機', desc: '確保一致的可見充填液位。適合起泡或低黏度產品。最適合水、家用清潔劑。' },
      { title: '蠕動泵灌裝機', desc: '產品不接觸泵機構。適合藥品、腐蝕性或貴重液體。最適合糖漿、化學溶液。' },
      { title: '旋轉式杯/托盤封口機', desc: '一步完成杯或托盤的充填和封口。適合水杯、優格、果凍、布丁。' },
    ],
    specsTitle: '典型規格',
    specs: [
      ['充填容量', '5ml – 5,000ml'],
      ['速度', '20 – 120個/分鐘'],
      ['精度', '±0.5%（活塞式）'],
      ['容器類型', '瓶、袋、軟包、杯、罐'],
      ['材質', 'SUS304 / SUS316L'],
      ['電壓', '可客製'],
      ['CIP相容', '是（可選）'],
    ],
    galleryTitle: '液體灌裝機圖庫',
    galleryNote: '📸 更多產品照片可按需提供——聯繫我們獲取工廠影片參觀。',
    faqTitle: '常見問題',
    faq: [
      {
        q: '如何選擇活塞式、重力式和泵式灌裝機？',
        a: '黏度是主要因素。稀薄液體（水、果汁）→ 重力式或溢流式。中等黏度（油、糖漿）→ 活塞式。稠膏（蛋黃醬、乳霜）→ 活塞式或泵式。藥品/腐蝕性 → 蠕動泵。告訴我們您的產品，我們會推薦。',
      },
      {
        q: '機器可以同時處理稀薄和稠厚產品嗎？',
        a: '部分機型具有可調節噴嘴和閥門配置。對於黏度差異很大的產品，建議使用專用機器以獲得最佳精度。',
      },
      {
        q: '支援哪些容器？',
        a: '我們支援玻璃瓶、PET/HDPE塑料瓶、軟包、自立袋、杯、罐頭和客製容器。提供您的容器尺寸進行相容性檢查。',
      },
      {
        q: '機器是否相容CIP（就地清洗）系統？',
        a: '是的，我們大多數液體灌裝機可配置CIP系統，無需拆卸即可快速、衛生地清洗——對飲料和藥品應用非常重要。',
      },
      {
        q: '客製機器的最小訂購量是多少？',
        a: '機器沒有最小訂購量。即使只訂購一台客製機器也可以。我們在生產開始前提供詳細圖紙和確認。',
      },
    ],
  },
}

export default async function LiquidFillingMachinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content['en']

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Liquid Filling Machine',
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
          <div className="grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-100">
                <Image
                  src={`/machines/liquid/${n}.jpg`}
                  alt={`Liquid filling machine photo ${n}`}
                  fill
                  sizes="(max-width:640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
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
          <SendProductForm lang={lang} sourceMachine="liquid" />
        </Container>
      </section>

      {/* Bottom CTA Bar */}
      <section className="py-16 sm:py-20 bg-brand-950 text-white">
        <Container className="max-w-4xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            {lang === 'cn' ? '准备好了吗？与我们的液体填充专家交流。' : lang === 'zh' ? '準備好了嗎？與我們的液體灌裝專家交流。' : 'Ready to find the right filler? Talk to our engineers.'}
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
