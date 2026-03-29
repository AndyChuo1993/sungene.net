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
  en: 'Powder Filling & Packaging Machine | Auger, Volumetric, Multi-Head | SunGene',
  cn: '粉末充填包装机 | 螺旋、容积、多头秤 | SunGene',
  zh: '粉末充填包裝機 | 螺旋、容積、多頭秤 | SunGene',
  fr: 'Machine de remplissage de poudre | Vis, Volumétrique, Multi-têtes | SunGene',
  es: 'Máquina llenadora de polvo | Tornillo, Volumétrica, Multi-cabezal | SunGene',
  pt: 'Máquina de Enchimento de Pó | Rosca, Volumétrica, Multi-cabeçote | SunGene',
  ko: '분말 충전 포장기 | 오거, 용적식, 멀티헤드 | SunGene',
  ja: '粉末充填包装機 | オーガー、容積式、マルチヘッド | SunGene',
  ar: 'آلة تعبئة المسحوق | لولبية، حجمية، متعددة الرؤوس | SunGene',
  th: 'เครื่องบรรจุผง | สกรู, ปริมาตร, หลายหัว | SunGene',
  vi: 'Máy chiết rót bột | Trục vít, Thể tích, Đa đầu | SunGene',
  de: 'Pulverfüllmaschine | Schnecke, Volumetrisch, Mehrkopf | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'SunGene manufactures powder filling and packaging machines including auger fillers, volumetric fillers, multi-head weighers, and VFFS with auger systems. CE certified, factory-direct.',
  cn: 'SunGene生产粉末充填包装机，包括螺旋充填器、容积式充填器、多头秤和带螺旋的立式充填封口机。CE认证，工厂直销。',
  zh: 'SunGene生產粉末充填包裝機，包括螺旋充填器、容積式充填器、多頭秤和帶螺旋的立式充填封口機。CE認證，工廠直銷。',
  fr: 'SunGene fabrique des machines de remplissage et d\'emballage de poudre : doseuses à vis, volumétriques, peseuses multicanaux et VFFS avec dosage à vis. Certifiées CE, directement de l\'usine.',
  es: 'SunGene fabrica máquinas llenadoras y empacadoras de polvo: dosificadoras de tornillo, volumétricas, pesadoras multicabezal y VFFS con dosificación. Certificadas CE, directo de fábrica.',
  pt: 'SunGene fabrica máquinas de enchimento e embalagem de pó: dosadoras de rosca, volumétricas, pesadoras multicanal e VFFS com dosagem. Certificadas CE, diretamente da fábrica.',
  ko: 'SunGene은 오거 충전기, 용적식 충전기, 다두 계량기, 오거 도징 VFFS 등 분말 충전 포장기를 제조합니다. CE 인증, 공장 직납.',
  ja: 'SunGeneはオーガーフィラー、容積式フィラー、マルチヘッド計量機、オーガードージングVFFS等の粉末充填包装機を製造。CE認証、工場直送。',
  ar: 'تصنع SunGene آلات تعبئة وتغليف المسحوق: دوازات لولبية، حجمية، موازين متعددة الرؤوس وVFFS مع الجرعات. معتمدة CE، مباشرة من المصنع.',
  th: 'SunGene ผลิตเครื่องบรรจุผงด้วยสกรู แบบปริมาตร เครื่องชั่งหลายหัว และ VFFS พร้อมระบบโดส ได้รับการรับรอง CE ตรงจากโรงงาน',
  vi: 'SunGene sản xuất máy chiết rót và đóng gói bột: máy nạp trục vít, thể tích, cân nhiều đầu và VFFS với hệ thống dosing. Chứng nhận CE, trực tiếp từ nhà máy.',
  de: 'SunGene stellt Pulverfüll- und Verpackungsmaschinen her: Schneckendosierer, Volumetrische Filler, Mehrkopfwaagen und VFFS mit Schneckendosierung. CE-zertifiziert, direkt vom Werk.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    keywords: ['powder filling machine', 'auger filler', 'powder packaging machine', 'flour filling machine', 'spice packaging machine', 'powder bagging machine', 'Taiwan powder filler'],
    alternates: {
      canonical: `${SITE_URL}/${lang}/machines/powder-filling-machine`,
      languages: {
        'en': `${SITE_URL}/en/machines/powder-filling-machine`,
        'zh-TW': `${SITE_URL}/zh/machines/powder-filling-machine`,
        'zh-CN': `${SITE_URL}/cn/machines/powder-filling-machine`,
        'fr': `${SITE_URL}/fr/machines/powder-filling-machine`,
        'es': `${SITE_URL}/es/machines/powder-filling-machine`,
        'pt': `${SITE_URL}/pt/machines/powder-filling-machine`,
        'ko': `${SITE_URL}/ko/machines/powder-filling-machine`,
        'ja': `${SITE_URL}/ja/machines/powder-filling-machine`,
        'ar': `${SITE_URL}/ar/machines/powder-filling-machine`,
        'th': `${SITE_URL}/th/machines/powder-filling-machine`,
        'vi': `${SITE_URL}/vi/machines/powder-filling-machine`,
        'de': `${SITE_URL}/de/machines/powder-filling-machine`,
        'x-default': `${SITE_URL}/en/machines/powder-filling-machine`,
      }
    },
    openGraph: {
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      url: `${SITE_URL}/${lang}/machines/powder-filling-machine`,
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

export default async function PowderFillingMachinePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      title: 'Powder Filling & Packaging Machine',
      kicker: 'POWDER FILLING EQUIPMENT',
      p1: 'We manufacture precision powder filling and packaging machines including auger fillers, volumetric fillers, multi-head weighers, VFFS with auger dosing, and standalone powder dosing systems. Accuracy from +/-0.5% to +/-1% depending on product characteristics.',
      p2: 'All machines are built with SUS304/316L stainless steel, feature dust-proof enclosed designs, and come with PLC + touchscreen control. Available with anti-bridging hoppers, dehumidification systems, and explosion-proof options for sensitive powders.',
      subTitle: 'Features & Specifications',
      machines: ['Auger Filler', 'Volumetric Filler', 'Multi-Head Weigher', 'VFFS with Auger', 'Powder Dosing System'],
      features: ['Auger filling accuracy +/-0.5%', 'Dust-proof enclosed design', 'Anti-bridging hopper system', 'PLC + Touchscreen control', 'Dehumidification option', 'Explosion-proof available', 'SUS304/316L food-grade', 'CE certified'],
      cta: 'Send us your powder characteristics — we\'ll match the right filling system.',
      whoTitle: 'Who It\'s For',
      who: [
        { title: 'Pharmaceutical Companies', desc: 'Precise dosing of pharmaceutical powders and supplements with GMP-compliant equipment.' },
        { title: 'Food & Beverage', desc: 'Filling coffee, milk powder, flour, spices, and protein powder into bags, cans, or bottles.' },
        { title: 'Chemical Industry', desc: 'Packaging detergent, cement, pesticide powder, and industrial chemicals with dust-proof systems.' },
        { title: 'Agricultural Products', desc: 'Filling fertilizer, seed coatings, and agricultural powders into bulk bags or pouches.' },
      ],
      appTitle: 'Application Scenarios',
      apps: ['Coffee', 'Milk Powder', 'Flour', 'Spices', 'Detergent', 'Cement', 'Pharmaceutical Powder', 'Protein Powder'],
      faqTitle: 'Frequently Asked Questions',
      faq: [
        { q: 'What filling accuracy can I expect?', a: 'Auger fillers achieve +/-0.5% to +/-1% accuracy depending on powder characteristics. Multi-head weighers offer even higher precision for free-flowing powders. We test with your product to confirm accuracy before shipment.' },
        { q: 'Can you handle fine, dusty powders?', a: 'Yes. Our machines feature fully enclosed dust-proof designs with vacuum dust collection. We also offer dehumidification and anti-static options for hygroscopic or electrostatically charged powders.' },
        { q: 'What fill weight range is supported?', a: 'Our powder machines support fill weights from 1g to 50kg depending on the model. Small sachet machines handle 1g-100g, while bulk powder systems go up to 25-50kg per bag.' },
        { q: 'Do you offer explosion-proof models?', a: 'Yes. We manufacture ATEX-compliant explosion-proof powder filling machines for combustible dusts like flour, starch, sugar powder, and chemical powders.' },
        { q: 'Can the machine handle both fine and coarse powders?', a: 'Yes. By changing the auger screw design and adjusting the hopper agitator, our machines adapt to different powder particle sizes and flow characteristics. We recommend sending samples for testing.' },
      ],
      notSure: 'Not sure which machine? Send us your product details.',
      btnQuote: 'Get a Quote',
      btnRecommend: 'Get a Recommendation',
    },
    cn: {
      title: '粉末充填包装机',
      kicker: '粉末充填设备',
      p1: '我们生产精密粉末充填包装机，包括螺旋充填器、容积式充填器、多头秤、带螺旋计量的立式充填封口机和独立粉末计量系统。精度根据产品特性从+/-0.5%到+/-1%。',
      p2: '所有机器均采用SUS304/316L不锈钢制造，采用防尘密封设计，配备PLC+触摸屏控制。可配防架桥料斗、除湿系统和敏感粉末的防爆选项。',
      subTitle: '特性与规格',
      machines: ['螺旋充填器', '容积式充填器', '多头秤', '带螺旋VFFS', '粉末计量系统'],
      features: ['螺旋充填精度+/-0.5%', '防尘密封设计', '防架桥料斗系统', 'PLC+触摸屏控制', '除湿选项', '防爆可选', 'SUS304/316L食品级', 'CE认证'],
      cta: '把您的粉末特性发给我们——我们将匹配合适的充填系统。',
      whoTitle: '适用客户',
      who: [
        { title: '制药企业', desc: '符合GMP的精密药粉和保健品粉末计量设备。' },
        { title: '食品饮料', desc: '将咖啡、奶粉、面粉、调味料和蛋白粉充填到袋、罐或瓶中。' },
        { title: '化工行业', desc: '用防尘系统包装洗涤剂、水泥、农药粉和工业化学品。' },
        { title: '农业产品', desc: '将肥料、种衣剂和农业粉末充填到大袋或小袋中。' },
      ],
      appTitle: '应用场景',
      apps: ['咖啡', '奶粉', '面粉', '调味料', '洗涤剂', '水泥', '药粉', '蛋白粉'],
      faqTitle: '常见问题',
      faq: [
        { q: '充填精度能达到多少？', a: '螺旋充填器精度为+/-0.5%到+/-1%，取决于粉末特性。多头秤对流动性好的粉末精度更高。发货前我们用您的产品进行测试确认精度。' },
        { q: '能处理细腻易扬尘的粉末吗？', a: '可以。我们的机器采用全封闭防尘设计，配有真空吸尘收集。还提供除湿和防静电选项。' },
        { q: '支持的充填重量范围是多少？', a: '根据机型，支持1克到50公斤。小袋机处理1克-100克，大袋粉末系统可达25-50公斤/袋。' },
        { q: '有防爆机型吗？', a: '有。我们生产符合ATEX标准的防爆粉末充填机，适用于面粉、淀粉、糖粉和化工粉末等可燃粉尘。' },
        { q: '机器能同时处理细粉和粗粉吗？', a: '可以。通过更换螺旋设计和调整料斗搅拌器，我们的机器可适应不同粒径和流动特性。建议寄送样品测试。' },
      ],
      notSure: '不确定哪款机器？把您的产品信息发给我们。',
      btnQuote: '获取报价',
      btnRecommend: '获取推荐',
    },
    zh: {
      title: '粉末充填包裝機',
      kicker: '粉末充填設備',
      p1: '我們生產精密粉末充填包裝機，包括螺旋充填器、容積式充填器、多頭秤、帶螺旋計量的立式充填封口機和獨立粉末計量系統。精度根據產品特性從+/-0.5%到+/-1%。',
      p2: '所有機器均採用SUS304/316L不鏽鋼製造，採用防塵密封設計，配備PLC+觸控螢幕控制。可配防架橋料斗、除濕系統和敏感粉末的防爆選項。',
      subTitle: '特性與規格',
      machines: ['螺旋充填器', '容積式充填器', '多頭秤', '帶螺旋VFFS', '粉末計量系統'],
      features: ['螺旋充填精度+/-0.5%', '防塵密封設計', '防架橋料斗系統', 'PLC+觸控螢幕控制', '除濕選項', '防爆可選', 'SUS304/316L食品級', 'CE認證'],
      cta: '把您的粉末特性發給我們——我們將配對合適的充填系統。',
      whoTitle: '適用客戶',
      who: [
        { title: '製藥企業', desc: '符合GMP的精密藥粉和保健品粉末計量設備。' },
        { title: '食品飲料', desc: '將咖啡、奶粉、麵粉、調味料和蛋白粉充填到袋、罐或瓶中。' },
        { title: '化工行業', desc: '用防塵系統包裝洗滌劑、水泥、農藥粉和工業化學品。' },
        { title: '農業產品', desc: '將肥料、種衣劑和農業粉末充填到大袋或小袋中。' },
      ],
      appTitle: '應用場景',
      apps: ['咖啡', '奶粉', '麵粉', '調味料', '洗滌劑', '水泥', '藥粉', '蛋白粉'],
      faqTitle: '常見問題',
      faq: [
        { q: '充填精度能達到多少？', a: '螺旋充填器精度為+/-0.5%到+/-1%，取決於粉末特性。多頭秤對流動性好的粉末精度更高。出貨前我們用您的產品進行測試確認精度。' },
        { q: '能處理細膩易揚塵的粉末嗎？', a: '可以。我們的機器採用全封閉防塵設計，配有真空吸塵收集。還提供除濕和防靜電選項。' },
        { q: '支援的充填重量範圍是多少？', a: '根據機型，支援1克到50公斤。小袋機處理1克-100克，大袋粉末系統可達25-50公斤/袋。' },
        { q: '有防爆機型嗎？', a: '有。我們生產符合ATEX標準的防爆粉末充填機，適用於麵粉、澱粉、糖粉和化工粉末等可燃粉塵。' },
        { q: '機器能同時處理細粉和粗粉嗎？', a: '可以。透過更換螺旋設計和調整料斗攪拌器，我們的機器可適應不同粒徑和流動特性。建議寄送樣品測試。' },
      ],
      notSure: '不確定哪款機器？把您的產品資訊發給我們。',
      btnQuote: '取得報價',
      btnRecommend: '取得推薦',
    },
  }

  const t = content[lang] || content['en']
  const btnLabels: Record<string, string> = { en: 'Get a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 받기', ja: '見積もりを依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Nhận báo giá', de: 'Angebot anfordern' }

  const heroPhoto = PHOTO.machines.powderFillingHero

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: t.title,
    description: t.p1,
    url: `${SITE_URL}/${lang}/machines/powder-filling-machine`,
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
      { '@type': 'ListItem', position: 3, name: 'Powder Filling Machine', item: `${SITE_URL}/${lang}/machines/powder-filling-machine` },
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
        image={{ src: heroPhoto, alt: 'Powder filling machine in factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

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
