import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import { PHOTO } from '@/lib/photoLibrary'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META, BREADCRUMB_LABELS } from '@/lib/seo'
import { MARKETS, type MarketSlug, MARKET_SLUGS, getAllMarketParams } from '@/lib/markets'
import { MACHINE_DEFS, type MachineSlug } from '@/lib/productSchema'
import TrustBar from '@/components/TrustBar'
import QuickQuote from '@/components/QuickQuote'

// ─── Static params for all 12 langs × 18 markets = 216 pages ─────────────────
export async function generateStaticParams() {
  return getAllMarketParams()
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const l = normalizeLang(lang)
  if (!MARKET_SLUGS.includes(slug as MarketSlug)) return {}
  const market = MARKETS[slug as MarketSlug]

  const title = `${market.countryName} — Taiwan Packaging Machinery Exporter | SunGene`
  const description = `SunGene exports packaging machinery, food processing equipment, filling and sealing systems from Taiwan to ${market.countryName}. Voltage ${market.voltage}. Transit ${market.transit}. CE certified, OEM/ODM welcome.`

  return buildPageMetadata({
    lang: l,
    title,
    description,
    pathname: `/markets/${market.slug}`,
    type: 'website',
    keywords: [
      `packaging machine ${market.countryName}`,
      `Taiwan machinery exporter to ${market.countryName}`,
      `VFFS machine ${market.countryName}`,
      `filling machine ${market.countryName}`,
      `snack production line ${market.countryName}`,
      `powder packing machine ${market.countryName}`,
      `liquid filling machine ${market.countryName}`,
      `machinery supplier ${market.countryName}`,
      `CE certified machine ${market.countryName}`,
      ...market.keyIndustries.map((i) => `${i} packaging ${market.countryName}`),
    ],
  })
}

// ─── Localized labels (stable, short) ────────────────────────────────────────
const labels: Record<Lang, {
  kicker: string
  heroSubtitleTemplate: (country: string) => string
  factsTitle: string
  industriesTitle: string
  machinesTitle: string
  shippingTitle: string
  ctaTitle: (country: string) => string
  ctaSub: (country: string) => string
  ctaBtn1: string
  ctaBtn2: string
  voltage: string
  transit: string
  ports: string
  incoterm: string
  hs: string
  price: string
  region: string
}> = {
  en: {
    kicker: 'EXPORT MARKET',
    heroSubtitleTemplate: (c) => `SunGene has been exporting packaging machinery, food processing equipment and filling lines from Taiwan to ${c} since 2010. CE certified, SUS304/316L stainless steel, voltage and frequency configured per order, transit from Taichung Port.`,
    factsTitle: 'Key facts for buyers in',
    industriesTitle: 'Local industries we commonly supply',
    machinesTitle: 'Machines exported to this market',
    shippingTitle: 'Shipping & logistics',
    ctaTitle: (c) => `Talk to SunGene — Taiwan machinery exporter to ${c}`,
    ctaSub: (c) => `Share your product, target output, voltage and destination port. Our engineers in Taichung will revert with a configured quote, voltage matched to ${c}, and CIF shipping estimate.`,
    ctaBtn1: 'Get a Machine Recommendation',
    ctaBtn2: 'Request a Quote',
    voltage: 'Voltage / frequency',
    transit: 'Transit time from Taichung',
    ports: 'Destination ports',
    incoterm: 'Preferred incoterm',
    hs: 'HS code reference',
    price: 'Typical price band',
    region: 'Region',
  },
  zh: {
    kicker: '出口市場',
    heroSubtitleTemplate: (c) => `SunGene 自 2010 年起出口台灣製造的包裝機、食品加工設備與灌裝整線到${c}。CE 認證、SUS304/316L 不鏽鋼、電壓與頻率依訂單配置，由台中港出口。`,
    factsTitle: '買家重點資訊',
    industriesTitle: '常見當地產業',
    machinesTitle: '出口至此市場的機型',
    shippingTitle: '物流與航程',
    ctaTitle: (c) => `聯絡 SunGene — 台灣至${c}機械出口商`,
    ctaSub: (c) => `請提供產品、目標產速、電壓與目的港；我們台中的工程團隊會回覆完整配置報價、符合${c}電壓頻率、並附 CIF 運費估算。`,
    ctaBtn1: '取得機型推薦',
    ctaBtn2: '索取報價',
    voltage: '電壓 / 頻率',
    transit: '由台中港運送',
    ports: '目的港',
    incoterm: '建議貿易條件',
    hs: 'HS 編碼',
    price: '常見價格區間',
    region: '區域',
  },
  cn: {
    kicker: '出口市场',
    heroSubtitleTemplate: (c) => `SunGene 自 2010 年起出口台湾制造的包装机、食品加工设备与灌装整线到${c}。CE 认证、SUS304/316L 不锈钢、电压与频率依订单配置，由台中港出口。`,
    factsTitle: '买家重点信息',
    industriesTitle: '常见当地产业',
    machinesTitle: '出口至此市场的机型',
    shippingTitle: '物流与航程',
    ctaTitle: (c) => `联系 SunGene — 台湾至${c}机械出口商`,
    ctaSub: (c) => `请提供产品、目标产速、电压与目的港；我们台中的工程团队会回复完整配置报价、符合${c}电压频率、并附 CIF 运费估算。`,
    ctaBtn1: '获取机型推荐',
    ctaBtn2: '索取报价',
    voltage: '电压 / 频率',
    transit: '由台中港运送',
    ports: '目的港',
    incoterm: '建议贸易条件',
    hs: 'HS 编码',
    price: '常见价格区间',
    region: '区域',
  },
  fr: {
    kicker: 'MARCHÉ EXPORT',
    heroSubtitleTemplate: (c) => `SunGene exporte depuis 2010 des machines d'emballage, équipements de transformation alimentaire et lignes de remplissage de Taïwan vers ${c}. Certifié CE, inox SUS304/316L, tension et fréquence configurées par commande, départ port de Taichung.`,
    factsTitle: 'Informations clés pour les acheteurs',
    industriesTitle: 'Industries locales typiques',
    machinesTitle: 'Machines exportées sur ce marché',
    shippingTitle: 'Logistique et transit',
    ctaTitle: (c) => `Contactez SunGene — exportateur de machines de Taïwan vers ${c}`,
    ctaSub: (c) => `Indiquez votre produit, cadence cible, tension et port de destination. Nos ingénieurs à Taichung reviennent avec un devis configuré, tension adaptée à ${c} et estimation CIF.`,
    ctaBtn1: 'Obtenir une recommandation',
    ctaBtn2: 'Demander un devis',
    voltage: 'Tension / fréquence',
    transit: 'Transit depuis Taichung',
    ports: 'Ports de destination',
    incoterm: 'Incoterm préféré',
    hs: 'Code HS',
    price: 'Fourchette de prix typique',
    region: 'Région',
  },
  es: {
    kicker: 'MERCADO DE EXPORTACIÓN',
    heroSubtitleTemplate: (c) => `SunGene exporta desde 2010 maquinaria de empaque, equipos de procesamiento de alimentos y líneas de llenado desde Taiwán a ${c}. Certificado CE, acero inoxidable SUS304/316L, tensión y frecuencia configuradas por pedido, salida por el puerto de Taichung.`,
    factsTitle: 'Datos clave para compradores',
    industriesTitle: 'Industrias locales habituales',
    machinesTitle: 'Máquinas exportadas a este mercado',
    shippingTitle: 'Logística y tránsito',
    ctaTitle: (c) => `Hable con SunGene — exportador de maquinaria taiwanés a ${c}`,
    ctaSub: (c) => `Comparta su producto, velocidad objetivo, tensión y puerto de destino. Nuestros ingenieros en Taichung responden con una cotización configurada, tensión adaptada a ${c} y estimación CIF.`,
    ctaBtn1: 'Obtener recomendación',
    ctaBtn2: 'Solicitar cotización',
    voltage: 'Tensión / frecuencia',
    transit: 'Tránsito desde Taichung',
    ports: 'Puertos de destino',
    incoterm: 'Incoterm preferido',
    hs: 'Código HS',
    price: 'Rango de precio típico',
    region: 'Región',
  },
  pt: {
    kicker: 'MERCADO DE EXPORTAÇÃO',
    heroSubtitleTemplate: (c) => `A SunGene exporta desde 2010 máquinas de embalagem, equipamentos de processamento de alimentos e linhas de envase de Taiwan para ${c}. Certificação CE, aço inox SUS304/316L, tensão e frequência configuradas por pedido, saída pelo porto de Taichung.`,
    factsTitle: 'Dados-chave para compradores',
    industriesTitle: 'Indústrias locais típicas',
    machinesTitle: 'Máquinas exportadas para este mercado',
    shippingTitle: 'Logística e trânsito',
    ctaTitle: (c) => `Fale com a SunGene — exportadora de máquinas de Taiwan para ${c}`,
    ctaSub: (c) => `Informe o produto, velocidade-alvo, tensão e porto de destino. Nossos engenheiros em Taichung retornam com cotação configurada, tensão adequada a ${c} e estimativa CIF.`,
    ctaBtn1: 'Obter recomendação',
    ctaBtn2: 'Solicitar orçamento',
    voltage: 'Tensão / frequência',
    transit: 'Trânsito a partir de Taichung',
    ports: 'Portos de destino',
    incoterm: 'Incoterm preferido',
    hs: 'Código HS',
    price: 'Faixa típica de preço',
    region: 'Região',
  },
  ko: {
    kicker: '수출 시장',
    heroSubtitleTemplate: (c) => `SunGene은 2010년부터 대만에서 제조한 포장 기계, 식품 가공 장비, 충진 라인을 ${c}에 수출합니다. CE 인증, SUS304/316L 스테인리스, 주문별 전압/주파수 구성, 타이중 항 출하.`,
    factsTitle: '바이어를 위한 핵심 정보',
    industriesTitle: '현지 주요 산업',
    machinesTitle: '이 시장에 수출되는 기계',
    shippingTitle: '물류 및 운송',
    ctaTitle: (c) => `SunGene에 문의 — 대만에서 ${c}으로의 기계 수출사`,
    ctaSub: (c) => `제품, 목표 생산량, 전압, 도착 항구를 알려주세요. 타이중의 엔지니어가 구성 견적, ${c} 전압 매칭, CIF 배송 견적과 함께 회신합니다.`,
    ctaBtn1: '기계 추천 받기',
    ctaBtn2: '견적 요청',
    voltage: '전압 / 주파수',
    transit: '타이중 항 출발 운송',
    ports: '도착 항구',
    incoterm: '선호 인코텀즈',
    hs: 'HS 코드',
    price: '일반적인 가격대',
    region: '지역',
  },
  ja: {
    kicker: '輸出市場',
    heroSubtitleTemplate: (c) => `SunGeneは2010年から台湾製の包装機械、食品加工機器、充填ラインを${c}へ輸出しています。CE認証、SUS304/316Lステンレス、電圧・周波数は注文ごとに設定、台中港から出荷。`,
    factsTitle: 'バイヤー向けの重要情報',
    industriesTitle: '主な現地産業',
    machinesTitle: 'この市場への輸出機種',
    shippingTitle: '物流・輸送',
    ctaTitle: (c) => `SunGeneへお問い合わせ — 台湾から${c}への機械輸出業者`,
    ctaSub: (c) => `製品、目標能力、電圧、仕向港をお知らせください。台中のエンジニアが構成見積り、${c}電圧マッチング、CIF見積もりをご返信します。`,
    ctaBtn1: '機種の推薦を受ける',
    ctaBtn2: '見積もりを依頼',
    voltage: '電圧・周波数',
    transit: '台中港からの輸送',
    ports: '仕向港',
    incoterm: '推奨インコタームズ',
    hs: 'HSコード',
    price: '一般的な価格帯',
    region: '地域',
  },
  ar: {
    kicker: 'سوق التصدير',
    heroSubtitleTemplate: (c) => `منذ 2010 تُصدّر SunGene آلات التعبئة والتغليف ومعدات تصنيع الأغذية وخطوط التعبئة من تايوان إلى ${c}. شهادة CE، فولاذ مقاوم للصدأ SUS304/316L، الجهد والتردد يُهيَّآن حسب الطلب، الشحن من ميناء تايتشونغ.`,
    factsTitle: 'حقائق أساسية للمشترين',
    industriesTitle: 'الصناعات المحلية الرئيسية',
    machinesTitle: 'الآلات المُصدَّرة إلى هذا السوق',
    shippingTitle: 'الشحن واللوجستيات',
    ctaTitle: (c) => `تواصل مع SunGene — مُصدِّر آلات من تايوان إلى ${c}`,
    ctaSub: (c) => `شارك المنتج والسرعة المستهدفة والجهد وميناء الوصول. فريقنا في تايتشونغ سيرد بعرض سعر مُهيَّأ، وبجهد يناسب ${c}، وتقدير شحن CIF.`,
    ctaBtn1: 'احصل على توصية الآلة',
    ctaBtn2: 'اطلب عرض سعر',
    voltage: 'الجهد / التردد',
    transit: 'مدة العبور من تايتشونغ',
    ports: 'موانئ الوصول',
    incoterm: 'الإنكوترم المفضل',
    hs: 'رمز النظام المنسق HS',
    price: 'نطاق السعر التقريبي',
    region: 'المنطقة',
  },
  th: {
    kicker: 'ตลาดส่งออก',
    heroSubtitleTemplate: (c) => `SunGene ส่งออกเครื่องบรรจุภัณฑ์ อุปกรณ์แปรรูปอาหาร และสายการบรรจุจากไต้หวันไปยัง${c}ตั้งแต่ปี 2010 ผ่านการรับรอง CE, สแตนเลส SUS304/316L, ปรับแรงดัน/ความถี่ตามคำสั่งซื้อ, จัดส่งจากท่าเรือไทจง`,
    factsTitle: 'ข้อมูลสำคัญสำหรับผู้ซื้อ',
    industriesTitle: 'อุตสาหกรรมท้องถิ่นที่พบบ่อย',
    machinesTitle: 'เครื่องที่ส่งออกไปยังตลาดนี้',
    shippingTitle: 'การขนส่งและโลจิสติกส์',
    ctaTitle: (c) => `ติดต่อ SunGene — ผู้ส่งออกเครื่องจักรจากไต้หวันสู่${c}`,
    ctaSub: (c) => `แจ้งสินค้า ความเร็วเป้าหมาย แรงดันไฟฟ้า และท่าเรือปลายทาง วิศวกรของเราที่ไทจงจะตอบกลับด้วยใบเสนอราคาที่ตรงกับแรงดันของ${c}และประมาณการค่าขนส่ง CIF`,
    ctaBtn1: 'รับคำแนะนำเครื่อง',
    ctaBtn2: 'ขอใบเสนอราคา',
    voltage: 'แรงดัน / ความถี่',
    transit: 'ระยะเวลาขนส่งจากไทจง',
    ports: 'ท่าเรือปลายทาง',
    incoterm: 'อินโคเทิร์มที่แนะนำ',
    hs: 'รหัสภาษี HS',
    price: 'ช่วงราคามาตรฐาน',
    region: 'ภูมิภาค',
  },
  vi: {
    kicker: 'THỊ TRƯỜNG XUẤT KHẨU',
    heroSubtitleTemplate: (c) => `Từ năm 2010, SunGene xuất khẩu máy đóng gói, thiết bị chế biến thực phẩm và dây chuyền chiết rót từ Đài Loan sang ${c}. Đạt chứng nhận CE, inox SUS304/316L, điện áp và tần số cấu hình theo đơn hàng, xuất từ cảng Đài Trung.`,
    factsTitle: 'Thông tin quan trọng cho người mua',
    industriesTitle: 'Các ngành sản xuất địa phương',
    machinesTitle: 'Máy móc xuất khẩu vào thị trường này',
    shippingTitle: 'Vận chuyển & logistics',
    ctaTitle: (c) => `Liên hệ SunGene — nhà xuất khẩu máy móc Đài Loan sang ${c}`,
    ctaSub: (c) => `Hãy cho chúng tôi biết sản phẩm, tốc độ mục tiêu, điện áp và cảng đến. Kỹ sư tại Đài Trung sẽ phản hồi với báo giá cấu hình, khớp điện áp ${c} và ước tính cước CIF.`,
    ctaBtn1: 'Nhận đề xuất máy',
    ctaBtn2: 'Yêu cầu báo giá',
    voltage: 'Điện áp / tần số',
    transit: 'Thời gian vận chuyển từ Đài Trung',
    ports: 'Cảng đến',
    incoterm: 'Incoterm khuyến nghị',
    hs: 'Mã HS',
    price: 'Mức giá tham khảo',
    region: 'Khu vực',
  },
  de: {
    kicker: 'EXPORTMARKT',
    heroSubtitleTemplate: (c) => `Seit 2010 exportiert SunGene Verpackungsmaschinen, Lebensmitteltechnik und Abfüllanlagen aus Taiwan nach ${c}. CE-zertifiziert, Edelstahl SUS304/316L, Spannung und Frequenz nach Auftrag konfiguriert, Versand ab Hafen Taichung.`,
    factsTitle: 'Wichtige Informationen für Einkäufer',
    industriesTitle: 'Typische lokale Branchen',
    machinesTitle: 'In diesen Markt exportierte Maschinen',
    shippingTitle: 'Logistik & Transit',
    ctaTitle: (c) => `Kontaktieren Sie SunGene — Maschinenexporteur aus Taiwan nach ${c}`,
    ctaSub: (c) => `Teilen Sie uns Produkt, Zielleistung, Spannung und Bestimmungshafen mit. Unsere Ingenieure in Taichung antworten mit einem konfigurierten Angebot, passend zur Spannung in ${c}, und CIF-Frachtschätzung.`,
    ctaBtn1: 'Maschinen-Empfehlung erhalten',
    ctaBtn2: 'Angebot anfordern',
    voltage: 'Spannung / Frequenz',
    transit: 'Transit ab Taichung',
    ports: 'Bestimmungshäfen',
    incoterm: 'Bevorzugter Incoterm',
    hs: 'HS-Code',
    price: 'Typische Preisspanne',
    region: 'Region',
  },
}

const MACHINE_SLUGS_IN_ORDER: MachineSlug[] = [
  'pouch-packing-machine',
  'powder-filling-machine',
  'liquid-filling-machine',
  'snack-processing-line',
  'conveyor-system',
]

export default async function MarketPage({
  params,
}: {
  params: Promise<{ lang: Lang; slug: string }>
}) {
  const { lang, slug } = await params
  if (!MARKET_SLUGS.includes(slug as MarketSlug)) notFound()
  const market = MARKETS[slug as MarketSlug]
  const t = labels[lang] || labels.en
  const heroPhoto = PHOTO.home.hero
  const pageUrl = `${SITE_URL}/${lang}/markets/${market.slug}`

  // ── Schemas ────────────────────────────────────────────────────────────────
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${market.countryName} — Taiwan Packaging Machinery Export by SunGene`,
    description: t.heroSubtitleTemplate(market.countryName),
    inLanguage: LANG_META[lang].htmlLang,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#org` },
    primaryImageOfPage: `${SITE_URL}${heroPhoto}`,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.market-intro'] },
  }

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${pageUrl}#place`,
    name: market.countryName,
    address: { '@type': 'PostalAddress', addressCountry: market.countryCode },
    containedInPlace: { '@type': 'Place', name: market.region },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: `Packaging Machinery Export to ${market.countryName}`,
    serviceType: 'Industrial Machinery Export',
    description: `Export of CE-certified packaging, filling, food processing, and conveyor machinery from Taiwan (Taichung Port) to ${market.countryName}. Voltage ${market.voltage}. Transit ${market.transit}.`,
    provider: { '@id': `${SITE_URL}/#org` },
    areaServed: { '@type': 'Country', name: market.countryName },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/${lang}/contact`,
      availableLanguage: ['en', 'zh-Hant', 'zh-Hans', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Machines available to ${market.countryName}`,
      itemListElement: MACHINE_SLUGS_IN_ORDER.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          '@id': `${SITE_URL}/${lang}/machines/${s}#product`,
          name: MACHINE_DEFS[s].name,
          url: `${SITE_URL}/${lang}/machines/${s}`,
        },
      })),
    },
    inLanguage: LANG_META[lang].htmlLang,
  }

  return (
    <>
      <JsonLd data={[webPageSchema, placeSchema, serviceSchema]} />

      <PageHero
        kicker={t.kicker}
        title={`${market.countryName} — Taiwan Machinery Export`}
        desc={t.heroSubtitleTemplate(market.countryName)}
        image={{
          src: heroPhoto,
          alt: `Shipping packaging machinery from Taiwan to ${market.countryName}`,
          priority: true,
          aspectClassName: 'aspect-[16/10]',
        }}
      />

      <section className="bg-white py-6">
        <Container className="max-w-6xl">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: BREADCRUMB_LABELS[lang].home, href: `/${lang}` },
              { label: 'Markets', href: `/${lang}/markets/${market.slug}` },
              { label: market.countryName, href: `/${lang}/markets/${market.slug}` },
            ]}
          />
        </Container>
      </section>

      <TrustBar lang={lang} />

      {/* ── Facts table ─────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">
            {t.factsTitle} {market.countryName}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Fact label={t.region} value={market.region} />
            <Fact label={t.voltage} value={market.voltage} />
            <Fact label={t.transit} value={market.transit} />
            <Fact label={t.ports} value={market.destinationPorts.join(' · ')} />
            <Fact label={t.incoterm} value={market.incoterm} />
            <Fact label={t.hs} value={market.hsReference} />
            <Fact label={t.price} value={market.samplePriceUsd} />
          </div>
        </Container>
      </section>

      {/* ── Local industries ────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.industriesTitle}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {market.keyIndustries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
              >
                {ind}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Machines for this market ────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.machinesTitle}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MACHINE_SLUGS_IN_ORDER.map((s) => {
              const def = MACHINE_DEFS[s]
              return (
                <a
                  key={s}
                  href={`/${lang}/machines/${s}`}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 transition hover:border-brand-400 hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-gray-950 group-hover:text-brand-700">{def.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{def.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-accent-600">{def.category} →</span>
                </a>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── Shipping detail ─────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.shippingTitle}</h2>
          <Card className="mt-8 p-6">
            <dl className="grid gap-3 text-sm">
              <div className="flex gap-3">
                <dt className="w-44 shrink-0 font-semibold text-gray-700">{t.transit}</dt>
                <dd className="text-gray-600">{market.transit}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-44 shrink-0 font-semibold text-gray-700">{t.ports}</dt>
                <dd className="text-gray-600">{market.destinationPorts.join(', ')}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-44 shrink-0 font-semibold text-gray-700">{t.incoterm}</dt>
                <dd className="text-gray-600">{market.incoterm}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-44 shrink-0 font-semibold text-gray-700">{t.hs}</dt>
                <dd className="text-gray-600">{market.hsReference}</dd>
              </div>
            </dl>
          </Card>
        </Container>
      </section>

      <QuickQuote lang={lang} context={market.countryName} source="market" />

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-950 py-16 sm:py-20 text-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t.ctaTitle(market.countryName)}</h2>
          <p className="mt-4 text-base text-white/70">{t.ctaSub(market.countryName)}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink href={`/${lang}/recommend`} size="lg">
              {t.ctaBtn1}
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

// ─── Small internal component ───────────────────────────────────────────────
function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 px-5 py-4">
      <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{label}</div>
      <div className="mt-1 text-sm leading-relaxed text-gray-800">{value}</div>
    </div>
  )
}
