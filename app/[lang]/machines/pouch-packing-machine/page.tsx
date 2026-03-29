import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { MachineFAQ } from '@/components/machines/MachineFAQ'
import JsonLd from '@/components/JsonLd'
import type { Metadata } from 'next'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'

const titles: Record<string, string> = {
  en: 'Pouch Packing Machine | Stand-up, Pillow, Vacuum Pouches | SunGene',
  cn: '给袋包装机 | 自立袋、枕型袋、真空袋 | SunGene',
  zh: '給袋包裝機 | 自立袋、枕型袋、真空袋 | SunGene',
  fr: 'Machine d\'emballage en sachets | Sachets stand-up, coussin, sous vide | SunGene',
  es: 'Máquina empacadora de bolsas | Stand-up, almohada, vacío | SunGene',
  pt: 'Máquina de Embalagem de Sachês | Stand-up, Travesseiro, Vácuo | SunGene',
  ko: '파우치 포장기 | 스탠드업, 필로우, 진공 파우치 | SunGene',
  ja: 'パウチ包装機 | スタンドアップ、ピロー、真空パウチ | SunGene',
  ar: 'آلة تعبئة الأكياس | أكياس قائمة، وسادية، تفريغ | SunGene',
  th: 'เครื่องบรรจุซอง | ซองตั้ง, หมอน, สุญญากาศ | SunGene',
  vi: 'Máy đóng gói túi | Túi đứng, gối, hút chân không | SunGene',
  de: 'Beutelverpackungsmaschine | Stand-up, Kissen, Vakuumbeutel | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'SunGene manufactures pouch packing machines for stand-up pouches, pillow bags, zipper pouches, vacuum pouches, doypacks and retort pouches. CE certified, factory-direct.',
  cn: 'SunGene生产自立袋、枕型袋、拉链袋、真空袋、多伊包和蒸煮袋包装机。CE认证，工厂直销。',
  zh: 'SunGene生產自立袋、枕型袋、拉鏈袋、真空袋、多伊包和蒸煮袋包裝機。CE認證，工廠直銷。',
  fr: 'SunGene fabrique des machines d\'emballage en sachets pour sachets stand-up, sachets coussin, sachets à glissière, sachets sous vide, doypacks et sachets rétort. Certifiées CE, directement d\'usine.',
  es: 'SunGene fabrica máquinas empacadoras de bolsas stand-up, almohada, cremallera, vacío, doypack y retort. Certificadas CE, directo de fábrica.',
  pt: 'SunGene fabrica máquinas de embalagem para sachês stand-up, travesseiro, zíper, vácuo, doypack e retort. Certificadas CE, diretamente da fábrica.',
  ko: 'SunGene은 스탠드업 파우치, 필로우 백, 지퍼 파우치, 진공 파우치, 도이팩, 레토르트 파우치 포장기를 제조합니다. CE 인증, 공장 직납.',
  ja: 'SunGeneはスタンドアップパウチ、ピローバッグ、ジッパーパウチ、真空パウチ、ドイパック、レトルトパウチ包装機を製造。CE認証、工場直送。',
  ar: 'SunGene تصنع آلات تعبئة الأكياس القائمة والوسادية والمسحاب والتفريغ والدوي باك وأكياس الريتورت. معتمدة CE، مباشرة من المصنع.',
  th: 'SunGene ผลิตเครื่องบรรจุซองตั้ง หมอน ซิป สุญญากาศ ดอยแพ็ค และเรทอร์ทเพาช์ ได้รับการรับรอง CE ตรงจากโรงงาน',
  vi: 'SunGene sản xuất máy đóng gói túi đứng, gối, có dây kéo, hút chân không, doypack và túi retort. Chứng nhận CE, trực tiếp từ nhà máy.',
  de: 'SunGene stellt Beutelverpackungsmaschinen für Stand-up-Beutel, Kissenbeutel, Reißverschlussbeutel, Vakuumbeutel, Doypacks und Retortbeutel her. CE-zertifiziert, direkt vom Werk.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    keywords: ['pouch packing machine', 'stand-up pouch machine', 'VFFS machine', 'zipper pouch machine', 'doypack machine', 'snack packing machine', 'pillow bag machine'],
    alternates: {
      canonical: `${SITE_URL}/${lang}/machines/pouch-packing-machine`,
      languages: {
        'en': `${SITE_URL}/en/machines/pouch-packing-machine`,
        'zh-TW': `${SITE_URL}/zh/machines/pouch-packing-machine`,
        'zh-CN': `${SITE_URL}/cn/machines/pouch-packing-machine`,
        'fr': `${SITE_URL}/fr/machines/pouch-packing-machine`,
        'es': `${SITE_URL}/es/machines/pouch-packing-machine`,
        'pt': `${SITE_URL}/pt/machines/pouch-packing-machine`,
        'ko': `${SITE_URL}/ko/machines/pouch-packing-machine`,
        'ja': `${SITE_URL}/ja/machines/pouch-packing-machine`,
        'ar': `${SITE_URL}/ar/machines/pouch-packing-machine`,
        'th': `${SITE_URL}/th/machines/pouch-packing-machine`,
        'vi': `${SITE_URL}/vi/machines/pouch-packing-machine`,
        'de': `${SITE_URL}/de/machines/pouch-packing-machine`,
        'x-default': `${SITE_URL}/en/machines/pouch-packing-machine`,
      }
    },
    openGraph: {
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      url: `${SITE_URL}/${lang}/machines/pouch-packing-machine`,
      siteName: 'SunGene Machinery',
      images: [{ url: `${SITE_URL}/og/og.png`, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      images: [`${SITE_URL}/og/og.png`],
    },
  }
}

export default async function PouchPackingMachinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      title: 'Pouch Packing Machine',
      kicker: 'POUCH PACKAGING EQUIPMENT',
      p1: 'We manufacture a full range of pouch packing machines for stand-up pouches, pillow bags, zipper pouches, vacuum pouches, doypacks, and retort pouches. Our machines handle powder, granule, liquid, and solid products with speeds from 20 to 120 bags per minute.',
      p2: 'All machines are built with SUS304/316L stainless steel, CE certified, and equipped with PLC + touchscreen control. We offer custom bag sizes, multi-lane configurations, and integrated date coding, gas flushing, and zipper sealing systems.',
      subTitle: 'Machine Types Available',
      machines: ['Stand-up Pouch', 'Pillow Bag', 'Zipper Pouch', 'Vacuum Pouch', 'Doypack', 'Retort Pouch'],
      features: ['PLC + Touchscreen Control', 'Auto bag length detection', 'Gas flushing (N2/CO2)', 'Zipper sealing system', 'Date coding integration', 'Multi-lane options', 'SUS304/316L construction', 'CE certified'],
      cta: 'Tell us your pouch type and product — we\'ll recommend the right machine.',
      whoTitle: 'Who It\'s For',
      who: [
        { title: 'Food Manufacturers', desc: 'Packing snacks, dried fruits, nuts, coffee, rice, flour, and sugar into stand-up or pillow pouches.' },
        { title: 'Snack Brands', desc: 'High-speed pillow bag and doypack lines for chips, candy, and dried goods.' },
        { title: 'Pet Food Producers', desc: 'Stand-up zipper pouches and vacuum packs for pet food and treats.' },
        { title: 'Chemical Packaging', desc: 'Durable retort and vacuum pouches for chemical powders and granules.' },
      ],
      appTitle: 'Application Scenarios',
      apps: ['Coffee', 'Nuts & Seeds', 'Dried Fruits', 'Pet Food', 'Rice & Grains', 'Flour & Sugar', 'Spices & Seasonings', 'Detergent Powder'],
      faqTitle: 'Frequently Asked Questions',
      faq: [
        { q: 'What pouch types can your machines make?', a: 'Our machines support stand-up pouches, pillow bags, flat pouches, zipper pouches, doypacks, vacuum pouches, retort pouches, and gusseted bags. We can customize for your specific pouch format.' },
        { q: 'What speed range do your pouch machines offer?', a: 'Depending on the model and bag size, our machines run from 20 to 120 bags per minute. Multi-lane configurations can further increase throughput.' },
        { q: 'Can you do zipper pouches?', a: 'Yes. We offer integrated zipper applicator systems that apply and seal zippers inline during the packing process, supporting both press-to-close and slider zippers.' },
        { q: 'What fill weight range is supported?', a: 'Our pouch machines handle fill weights from 5g to 5kg depending on the model. Auger fillers, multi-head weighers, and volumetric cups are available for different product types.' },
        { q: 'Do you provide gas flushing for freshness?', a: 'Yes. Our machines can be equipped with nitrogen or CO2 gas flushing systems to extend product shelf life, commonly used for coffee, snacks, and dried foods.' },
        { q: 'Can I get a sample run before ordering?', a: 'Yes. We can run sample tests with your product and pouch material at our factory. We provide videos of the test for your review before you place an order.' },
      ],
      notSure: 'Not sure which machine? Send us your product details.',
      btnQuote: 'Get a Quote',
      btnRecommend: 'Get a Recommendation',
    },
    cn: {
      title: '给袋包装机',
      kicker: '给袋包装设备',
      p1: '我们生产全系列给袋包装机，适用于自立袋、枕型袋、拉链袋、真空袋、多伊包和蒸煮袋。我们的机器可处理粉末、颗粒、液体和固体产品，速度从每分钟20到120袋。',
      p2: '所有机器均采用SUS304/316L不锈钢制造，CE认证，配备PLC+触摸屏控制。我们提供定制袋型尺寸、多列配置，以及集成的打码、充氮和拉链封口系统。',
      subTitle: '可用机型',
      machines: ['自立袋', '枕型袋', '拉链袋', '真空袋', '多伊包', '蒸煮袋'],
      features: ['PLC+触摸屏控制', '自动袋长检测', '充氮/充CO2', '拉链封口系统', '打码集成', '多列可选', 'SUS304/316L结构', 'CE认证'],
      cta: '告诉我们您的袋型和产品——我们将推荐合适的机器。',
      whoTitle: '适用客户',
      who: [
        { title: '食品制造商', desc: '将零食、干果、坚果、咖啡、大米、面粉和糖装入自立袋或枕型袋。' },
        { title: '零食品牌', desc: '薯片、糖果和干货的高速枕型袋和多伊包生产线。' },
        { title: '宠物食品生产商', desc: '宠物食品和零食的自立拉链袋和真空包装。' },
        { title: '化工包装', desc: '化工粉末和颗粒的耐用蒸煮袋和真空袋。' },
      ],
      appTitle: '应用场景',
      apps: ['咖啡', '坚果', '干果', '宠物食品', '大米谷物', '面粉糖', '调味料', '洗衣粉'],
      faqTitle: '常见问题',
      faq: [
        { q: '你们的机器能做哪些袋型？', a: '我们的机器支持自立袋、枕型袋、平袋、拉链袋、多伊包、真空袋、蒸煮袋和风琴袋。可根据您的具体袋型定制。' },
        { q: '给袋机速度范围是多少？', a: '根据机型和袋子尺寸，速度从每分钟20到120袋。多列配置可进一步提高产量。' },
        { q: '可以做拉链袋吗？', a: '可以。我们提供集成的拉链贴合系统，在包装过程中在线贴合和封口拉链，支持按压式和滑块式拉链。' },
        { q: '支持的充填重量范围是多少？', a: '根据机型，我们的给袋机支持5克到5公斤的充填重量。可配螺旋充填器、多头秤或量杯。' },
        { q: '提供充气保鲜功能吗？', a: '是的。我们的机器可配备氮气或CO2充气系统，延长产品保质期，常用于咖啡、零食和干货。' },
        { q: '下单前可以做样品测试吗？', a: '可以。我们可以用您的产品和袋材在工厂做样品测试，并提供测试视频供您确认。' },
      ],
      notSure: '不确定哪款机器？把您的产品信息发给我们。',
      btnQuote: '获取报价',
      btnRecommend: '获取推荐',
    },
    zh: {
      title: '給袋包裝機',
      kicker: '給袋包裝設備',
      p1: '我們生產全系列給袋包裝機，適用於自立袋、枕型袋、拉鏈袋、真空袋、多伊包和蒸煮袋。我們的機器可處理粉末、顆粒、液體和固體產品，速度從每分鐘20到120袋。',
      p2: '所有機器均採用SUS304/316L不鏽鋼製造，CE認證，配備PLC+觸控螢幕控制。我們提供客製袋型尺寸、多列配置，以及整合的打碼、充氮和拉鏈封口系統。',
      subTitle: '可用機型',
      machines: ['自立袋', '枕型袋', '拉鏈袋', '真空袋', '多伊包', '蒸煮袋'],
      features: ['PLC+觸控螢幕控制', '自動袋長偵測', '充氮/充CO2', '拉鏈封口系統', '打碼整合', '多列可選', 'SUS304/316L結構', 'CE認證'],
      cta: '告訴我們您的袋型和產品——我們將推薦合適的機器。',
      whoTitle: '適用客戶',
      who: [
        { title: '食品製造商', desc: '將零食、乾果、堅果、咖啡、米、麵粉和糖裝入自立袋或枕型袋。' },
        { title: '零食品牌', desc: '薯片、糖果和乾貨的高速枕型袋和多伊包產線。' },
        { title: '寵物食品生產商', desc: '寵物食品和零食的自立拉鏈袋和真空包裝。' },
        { title: '化工包裝', desc: '化工粉末和顆粒的耐用蒸煮袋和真空袋。' },
      ],
      appTitle: '應用場景',
      apps: ['咖啡', '堅果', '乾果', '寵物食品', '米穀物', '麵粉糖', '調味料', '洗衣粉'],
      faqTitle: '常見問題',
      faq: [
        { q: '你們的機器能做哪些袋型？', a: '我們的機器支援自立袋、枕型袋、平袋、拉鏈袋、多伊包、真空袋、蒸煮袋和風琴袋。可根據您的具體袋型客製。' },
        { q: '給袋機速度範圍是多少？', a: '根據機型和袋子尺寸，速度從每分鐘20到120袋。多列配置可進一步提高產量。' },
        { q: '可以做拉鏈袋嗎？', a: '可以。我們提供整合的拉鏈貼合系統，在包裝過程中線上貼合和封口拉鏈，支援按壓式和滑塊式拉鏈。' },
        { q: '支援的充填重量範圍是多少？', a: '根據機型，我們的給袋機支援5克到5公斤的充填重量。可配螺旋充填器、多頭秤或量杯。' },
        { q: '提供充氣保鮮功能嗎？', a: '是的。我們的機器可配備氮氣或CO2充氣系統，延長產品保質期，常用於咖啡、零食和乾貨。' },
        { q: '下單前可以做樣品測試嗎？', a: '可以。我們可以用您的產品和袋材在工廠做樣品測試，並提供測試影片供您確認。' },
      ],
      notSure: '不確定哪款機器？把您的產品資訊發給我們。',
      btnQuote: '取得報價',
      btnRecommend: '取得推薦',
    },
  }

  const t = content[lang] || content['en']
  const btnLabels: Record<string, string> = { en: 'Get a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 받기', ja: '見積もりを依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Nhận báo giá', de: 'Angebot anfordern' }

  const heroPhoto = PHOTO.machines.pouchPackingHero

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: t.title,
    description: t.p1,
    url: `${SITE_URL}/${lang}/machines/pouch-packing-machine`,
    image: [`${SITE_URL}${heroPhoto}`],
    brand: { '@type': 'Brand', name: 'SunGene' },
    manufacturer: { '@type': 'Organization', name: 'SunGene Co., LTD', url: SITE_URL },
    category: 'Packaging Machinery',
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Machinery', item: `${SITE_URL}/${lang}/machinery` },
      { '@type': 'ListItem', position: 3, name: 'Pouch Packing Machine', item: `${SITE_URL}/${lang}/machines/pouch-packing-machine` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbLd} />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        desc={t.p1}
        image={{ src: heroPhoto, alt: 'Pouch packing machine in factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

      {/* Main content: two-column layout */}
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

      {/* Who It's For */}
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

      {/* Application Scenarios */}
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

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.faqTitle}</h2>
          <div className="mt-10">
            <MachineFAQ items={t.faq} />
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
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
