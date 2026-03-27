import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { MachineFAQ } from '@/components/machines/MachineFAQ'
import JsonLd from '@/components/JsonLd'
import type { Metadata } from 'next'

const titles: Record<string, string> = {
  en: 'Liquid Filling Machine | Bottles, Pouches, Cups, Tubes | SunGene',
  cn: '液体灌装机 | 瓶、袋、杯、管 | SunGene',
  zh: '液體灌裝機 | 瓶、袋、杯、管 | SunGene',
  fr: 'Machine de remplissage liquide | Bouteilles, Sachets, Gobelets, Tubes | SunGene',
  es: 'Máquina llenadora de líquidos | Botellas, Bolsas, Vasos, Tubos | SunGene',
  pt: 'Máquina de Enchimento de Líquidos | Garrafas, Sachês, Copos, Tubos | SunGene',
  ko: '액체 충전기 | 병, 파우치, 컵, 튜브 | SunGene',
  ja: '液体充填機 | ボトル、パウチ、カップ、チューブ | SunGene',
  ar: 'آلة تعبئة السوائل | زجاجات، أكياس، أكواب، أنابيب | SunGene',
  th: 'เครื่องบรรจุของเหลว | ขวด, ซอง, ถ้วย, หลอด | SunGene',
  vi: 'Máy chiết rót chất lỏng | Chai, Túi, Cốc, Tuýp | SunGene',
  de: 'Flüssigkeitsabfüllmaschine | Flaschen, Beutel, Becher, Tuben | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'SunGene manufactures liquid filling machines for bottles, pouches, cups and tubes. Gravity, piston, overflow, peristaltic pump and net weight fillers. CE certified, factory-direct.',
  cn: 'SunGene生产瓶、袋、杯和管液体灌装机。重力式、活塞式、溢流式、蠕动泵和净重灌装机。CE认证，工厂直销。',
  zh: 'SunGene生產瓶、袋、杯和管液體灌裝機。重力式、活塞式、溢流式、蠕動泵和淨重灌裝機。CE認證，工廠直銷。',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    keywords: ['liquid filling machine', 'bottle filling machine', 'piston filler', 'gravity filler', 'sauce filling machine', 'beverage filling machine', 'Taiwan liquid filler'],
    alternates: {
      canonical: `https://sungene.net/${lang}/machines/liquid-filling-machine`,
      languages: {
        'en': 'https://sungene.net/en/machines/liquid-filling-machine',
        'zh-TW': 'https://sungene.net/zh/machines/liquid-filling-machine',
        'zh-CN': 'https://sungene.net/cn/machines/liquid-filling-machine',
        'fr': 'https://sungene.net/fr/machines/liquid-filling-machine',
        'es': 'https://sungene.net/es/machines/liquid-filling-machine',
        'pt': 'https://sungene.net/pt/machines/liquid-filling-machine',
        'ko': 'https://sungene.net/ko/machines/liquid-filling-machine',
        'ja': 'https://sungene.net/ja/machines/liquid-filling-machine',
        'ar': 'https://sungene.net/ar/machines/liquid-filling-machine',
        'th': 'https://sungene.net/th/machines/liquid-filling-machine',
        'vi': 'https://sungene.net/vi/machines/liquid-filling-machine',
        'de': 'https://sungene.net/de/machines/liquid-filling-machine',
        'x-default': 'https://sungene.net/en/machines/liquid-filling-machine',
      }
    },
    openGraph: {
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      url: `https://sungene.net/${lang}/machines/liquid-filling-machine`,
      siteName: 'SunGene Machinery',
      images: [{ url: 'https://sungene.net/og/og.png', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      images: ['https://sungene.net/og/og.png'],
    },
  }
}

export default async function LiquidFillingMachinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      title: 'Liquid Filling Machine',
      kicker: 'LIQUID FILLING EQUIPMENT',
      p1: 'We manufacture liquid filling machines for bottles, pouches, cups, and tubes. Our range includes gravity fillers, piston fillers, overflow fillers, peristaltic pump fillers, and net weight fillers — handling water-thin to highly viscous products.',
      p2: 'All machines are built with SUS304/316L stainless steel, feature CIP-ready designs, and come with servo-driven filling systems for high accuracy. Available with capping, labeling, and shrink-wrapping integration for complete filling lines.',
      subTitle: 'Features & Specifications',
      machines: ['Gravity Filler', 'Piston Filler', 'Overflow Filler', 'Peristaltic Pump', 'Net Weight Filler'],
      features: ['Servo-driven filling accuracy +/-0.5%', 'CIP (Clean-in-Place) ready', 'Handles 1cP to 50,000cP viscosity', 'Anti-drip nozzle design', 'PLC + Touchscreen control', 'Multi-head configurations', 'SUS304/316L food-grade', 'CE certified'],
      cta: 'Tell us your liquid viscosity and fill volume — we\'ll design the right solution.',
      whoTitle: 'Who It\'s For',
      who: [
        { title: 'Beverage Producers', desc: 'Filling water, juice, tea, energy drinks, and dairy beverages into bottles and pouches at high speed.' },
        { title: 'Sauce & Condiment Makers', desc: 'Piston and pump fillers for ketchup, mayonnaise, soy sauce, chili sauce, and salad dressings.' },
        { title: 'Cosmetics & Personal Care', desc: 'Precision filling of shampoo, lotion, cream, essential oils, and perfume into bottles and tubes.' },
        { title: 'Chemical Manufacturers', desc: 'Corrosion-resistant filling systems for cleaning agents, lubricants, paints, and industrial chemicals.' },
      ],
      appTitle: 'Application Scenarios',
      apps: ['Water & Juice', 'Sauces & Dressings', 'Cooking Oil', 'Shampoo & Lotion', 'Chemicals & Cleaners', 'Milk & Dairy', 'Essential Oils', 'Pharmaceutical Liquids'],
      faqTitle: 'Frequently Asked Questions',
      faq: [
        { q: 'What viscosity range can your machines handle?', a: 'Our liquid filling machines handle viscosities from 1cP (water-thin) to 50,000cP (thick pastes). Gravity fillers work best for thin liquids, piston fillers for viscous products, and peristaltic pumps for shear-sensitive materials.' },
        { q: 'What fill volume range is available?', a: 'Our machines support fill volumes from 5ml to 20 liters depending on the model. We offer different nozzle sizes and pump configurations for each volume range.' },
        { q: 'Can you fill hot liquids?', a: 'Yes. Our machines can handle hot-fill applications up to 95 degrees Celsius with heat-resistant seals, insulated tanks, and temperature-controlled nozzles.' },
        { q: 'Do you offer complete filling lines?', a: 'Yes. We integrate filling machines with rinsing, capping, labeling, shrink wrapping, and case packing to provide turnkey filling line solutions.' },
        { q: 'How do you prevent dripping between fills?', a: 'Our nozzles feature anti-drip designs including suck-back valves, positive shut-off mechanisms, and drip trays. Nozzle selection depends on liquid characteristics.' },
        { q: 'Can I fill foamy products like shampoo?', a: 'Yes. We use overflow fillers or bottom-up filling techniques to minimize foam formation. The fill speed can be adjusted to reduce turbulence for foamy products.' },
      ],
      notSure: 'Not sure which machine? Send us your product details.',
      btnQuote: 'Get a Quote',
      btnRecommend: 'Get a Recommendation',
    },
    cn: {
      title: '液体灌装机',
      kicker: '液体灌装设备',
      p1: '我们生产瓶、袋、杯和管液体灌装机。产品线包括重力式灌装机、活塞式灌装机、溢流式灌装机、蠕动泵灌装机和净重灌装机——处理从水状到高粘度的各种液体。',
      p2: '所有机器均采用SUS304/316L不锈钢制造，CIP就绪设计，配备伺服驱动灌装系统。可集成旋盖、贴标和热缩包装，组成完整灌装线。',
      subTitle: '特性与规格',
      machines: ['重力式灌装机', '活塞式灌装机', '溢流式灌装机', '蠕动泵灌装机', '净重灌装机'],
      features: ['伺服驱动精度+/-0.5%', 'CIP就绪设计', '处理1cP到50,000cP粘度', '防滴漏喷嘴设计', 'PLC+触摸屏控制', '多头配置', 'SUS304/316L食品级', 'CE认证'],
      cta: '告诉我们您的液体粘度和灌装量——我们将设计合适的方案。',
      whoTitle: '适用客户',
      who: [
        { title: '饮料生产商', desc: '高速将水、果汁、茶饮、能量饮料和乳制品灌装到瓶和袋中。' },
        { title: '酱料调味品厂', desc: '番茄酱、蛋黄酱、酱油、辣椒酱和沙拉酱的活塞和泵式灌装。' },
        { title: '化妆品个护', desc: '洗发水、乳液、面霜、精油和香水的精密灌装。' },
        { title: '化工制造商', desc: '清洁剂、润滑油、涂料和工业化学品的耐腐蚀灌装系统。' },
      ],
      appTitle: '应用场景',
      apps: ['水和果汁', '酱料和调味品', '食用油', '洗发水和乳液', '化学品和清洁剂', '牛奶和乳制品', '精油', '药液'],
      faqTitle: '常见问题',
      faq: [
        { q: '你们的机器能处理什么粘度范围？', a: '我们的液体灌装机处理1cP(水状)到50,000cP(浓稠膏体)的粘度。重力式适合稀薄液体，活塞式适合粘稠产品，蠕动泵适合剪切敏感物料。' },
        { q: '灌装量范围是多少？', a: '根据机型，支持5ml到20升的灌装量。不同容量范围提供不同的喷嘴尺寸和泵配置。' },
        { q: '能灌装热液体吗？', a: '可以。我们的机器可处理最高95度的热灌装应用，配备耐热密封件、保温罐和温控喷嘴。' },
        { q: '提供完整灌装线吗？', a: '是的。我们将灌装机与冲洗、旋盖、贴标、热缩包装和装箱集成，提供交钥匙灌装线方案。' },
        { q: '如何防止灌装间隙滴漏？', a: '我们的喷嘴采用防滴漏设计，包括回吸阀、正关断机构和接滴盘。喷嘴选择取决于液体特性。' },
        { q: '能灌装起泡产品如洗发水吗？', a: '可以。我们使用溢流式灌装或底部上升灌装技术减少泡沫。灌装速度可调以减少起泡产品的湍流。' },
      ],
      notSure: '不确定哪款机器？把您的产品信息发给我们。',
      btnQuote: '获取报价',
      btnRecommend: '获取推荐',
    },
    zh: {
      title: '液體灌裝機',
      kicker: '液體灌裝設備',
      p1: '我們生產瓶、袋、杯和管液體灌裝機。產品線包括重力式灌裝機、活塞式灌裝機、溢流式灌裝機、蠕動泵灌裝機和淨重灌裝機——處理從水狀到高黏度的各種液體。',
      p2: '所有機器均採用SUS304/316L不鏽鋼製造，CIP就緒設計，配備伺服驅動灌裝系統。可整合旋蓋、貼標和熱縮包裝，組成完整灌裝線。',
      subTitle: '特性與規格',
      machines: ['重力式灌裝機', '活塞式灌裝機', '溢流式灌裝機', '蠕動泵灌裝機', '淨重灌裝機'],
      features: ['伺服驅動精度+/-0.5%', 'CIP就緒設計', '處理1cP到50,000cP黏度', '防滴漏噴嘴設計', 'PLC+觸控螢幕控制', '多頭配置', 'SUS304/316L食品級', 'CE認證'],
      cta: '告訴我們您的液體黏度和灌裝量——我們將設計合適的方案。',
      whoTitle: '適用客戶',
      who: [
        { title: '飲料生產商', desc: '高速將水、果汁、茶飲、能量飲料和乳製品灌裝到瓶和袋中。' },
        { title: '醬料調味品廠', desc: '番茄醬、蛋黃醬、醬油、辣椒醬和沙拉醬的活塞和泵式灌裝。' },
        { title: '化妝品個護', desc: '洗髮精、乳液、面霜、精油和香水的精密灌裝。' },
        { title: '化工製造商', desc: '清潔劑、潤滑油、塗料和工業化學品的耐腐蝕灌裝系統。' },
      ],
      appTitle: '應用場景',
      apps: ['水和果汁', '醬料和調味品', '食用油', '洗髮精和乳液', '化學品和清潔劑', '牛奶和乳製品', '精油', '藥液'],
      faqTitle: '常見問題',
      faq: [
        { q: '你們的機器能處理什麼黏度範圍？', a: '我們的液體灌裝機處理1cP(水狀)到50,000cP(濃稠膏體)的黏度。重力式適合稀薄液體，活塞式適合黏稠產品，蠕動泵適合剪切敏感物料。' },
        { q: '灌裝量範圍是多少？', a: '根據機型，支援5ml到20升的灌裝量。不同容量範圍提供不同的噴嘴尺寸和泵配置。' },
        { q: '能灌裝熱液體嗎？', a: '可以。我們的機器可處理最高95度的熱灌裝應用，配備耐熱密封件、保溫罐和溫控噴嘴。' },
        { q: '提供完整灌裝線嗎？', a: '是的。我們將灌裝機與沖洗、旋蓋、貼標、熱縮包裝和裝箱整合，提供交鑰匙灌裝線方案。' },
        { q: '如何防止灌裝間隙滴漏？', a: '我們的噴嘴採用防滴漏設計，包括回吸閥、正關斷機構和接滴盤。噴嘴選擇取決於液體特性。' },
        { q: '能灌裝起泡產品如洗髮精嗎？', a: '可以。我們使用溢流式灌裝或底部上升灌裝技術減少泡沫。灌裝速度可調以減少起泡產品的湍流。' },
      ],
      notSure: '不確定哪款機器？把您的產品資訊發給我們。',
      btnQuote: '取得報價',
      btnRecommend: '取得推薦',
    },
  }

  const t = content[lang] || content['en']
  const btnLabels: Record<string, string> = { en: 'Get a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 받기', ja: '見積もりを依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Nhận báo giá', de: 'Angebot anfordern' }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Liquid Filling Machine',
    description: t.p1,
    brand: { '@type': 'Brand', name: 'SunGene' },
    manufacturer: { '@type': 'Organization', name: 'SunGene Co., LTD', url: 'https://www.sungene.net' },
    category: 'Filling Machinery',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      seller: { '@type': 'Organization', name: 'SunGene Co., LTD' },
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://sungene.net/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Machinery', item: `https://sungene.net/${lang}/machinery` },
      { '@type': 'ListItem', position: 3, name: 'Liquid Filling Machine', item: `https://sungene.net/${lang}/machines/liquid-filling-machine` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbLd} />
      <PageHeader title={t.title} desc={t.p1} kicker={t.kicker} />

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{t.p2}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {t.machines.map((m: any, i: number) => (
                  <span key={i} className="rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700 ring-1 ring-accent-200">{m}</span>
                ))}
              </div>
              <div className="mt-8">
                <Image src="/machinery/hero-filling.svg" alt="Liquid Filling Machine" width={600} height={400} className="rounded-xl" />
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-xl font-bold text-gray-950">{t.subTitle}</h2>
                <ul className="mt-6 space-y-3">
                  {t.features.map((c: any, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-sm leading-relaxed sm:text-base">{c}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <div className="rounded-2xl bg-brand-950 p-8 text-white">
                <h2 className="text-xl font-bold">{t.cta}</h2>
                <div className="mt-6">
                  <ButtonLink href={`/${lang}/contact`} size="lg">{btnLabels[lang] || btnLabels.en}</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.whoTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.who.map((w: any, i: number) => (
              <Card key={i} className="p-6">
                <h3 className="text-lg font-bold text-gray-950">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{w.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.appTitle}</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {t.apps.map((app: any, i: number) => (
              <span key={i} className="rounded-full bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-200">{app}</span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.faqTitle}</h2>
          <div className="mt-10">
            <MachineFAQ items={t.faq} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-brand-950 text-white">
        <Container className="max-w-4xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t.cta}</h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink href={`/${lang}/contact`} size="lg">{btnLabels[lang] || btnLabels.en}</ButtonLink>
            <a href={`/${lang}/recommend`} className="text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white">{t.notSure}</a>
          </div>
        </Container>
      </section>
    </>
  )
}
