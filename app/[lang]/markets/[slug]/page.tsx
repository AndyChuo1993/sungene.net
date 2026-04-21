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
import QuickAssessment from '@/components/QuickAssessment'
import SourcingRouteGuide from '@/components/machinery/SourcingRouteGuide'

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

  const title = `${market.countryName} — Industrial equipment sourcing support | SunGene`
  const description = `SunGene supports industrial equipment and automation sourcing for buyers in ${market.countryName}. Voltage ${market.voltage}. Transit ${market.transit}. Supplier-vetted sourcing, CE documentation support, export coordination.`

  return buildPageMetadata({
    lang: l,
    title,
    description,
    pathname: `/markets/${market.slug}`,
    type: 'website',
    keywords: [
      `industrial equipment sourcing ${market.countryName}`,
      `sourcing assessment ${market.countryName}`,
      `configuration planning ${market.countryName}`,
      `machinery procurement ${market.countryName}`,
      `supplier vetting ${market.countryName}`,
      `CE documentation support ${market.countryName}`,
      `voltage frequency ${market.countryName}`,
      `FAT checklist ${market.countryName}`,
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
  prepTitle: string
  prepLead: string
  quoteTitle: string
  quoteLead: string
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
    heroSubtitleTemplate: (c) => `SunGene has supported sourcing for packaging systems, food processing equipment and filling lines for buyers in ${c} since 2010. Supplier-vetted sourcing, CE documentation support, voltage/frequency matched per order, export coordination from Taichung Port.`,
    factsTitle: 'Key facts for buyers in',
    industriesTitle: 'Local industries we commonly supply',
    machinesTitle: 'Suggested configuration routes',
    shippingTitle: 'Shipping & logistics',
    prepTitle: 'Before You Request Pricing',
    prepLead: 'Send these inputs to avoid generic quotes and reduce rework:',
    quoteTitle: 'Quote Comparison Checklist',
    quoteLead: 'Use the same checklist across suppliers to keep comparisons fair:',
    ctaTitle: (c) => `Talk to SunGene — sourcing partner for ${c}`,
    ctaSub: (c) => `Share your product, target output, voltage and destination port. Our engineers in Taichung respond with a sourcing assessment, voltage match for ${c}, and CIF shipping estimate.`,
    ctaBtn1: 'Get a Sourcing Assessment',
    ctaBtn2: 'Request Sourcing Assessment',
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
    heroSubtitleTemplate: (c) => `SunGene 自 2010 年起協助${c}買家採購包裝系統、食品加工設備與灌裝整線。供應商審查與技術把關、CE 文件支援、電壓與頻率依訂單匹配，並由台中港進行出口協調。`,
    factsTitle: '買家重點資訊',
    industriesTitle: '常見當地產業',
    machinesTitle: '建議配置路線',
    shippingTitle: '物流與航程',
    prepTitle: '詢價前先準備',
    prepLead: '先提供這些資料，避免拿到泛用報價、反覆補問：',
    quoteTitle: '報價比對清單',
    quoteLead: '用同一份清單比對不同供應商，避免比到不同範圍：',
    ctaTitle: (c) => `聯絡 SunGene — 面向${c}的採購夥伴`,
    ctaSub: (c) => `請提供產品、目標產速、電壓與目的港；我們台中的工程團隊會回覆採購評估、符合${c}電壓頻率，並附 CIF 運費估算。`,
    ctaBtn1: '取得採購評估',
    ctaBtn2: '申請採購評估',
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
    heroSubtitleTemplate: (c) => `SunGene 自 2010 年起协助${c}买家采购包装系统、食品加工设备与灌装整线。供应商审查与技术把关、CE 文件支持、电压与频率依订单匹配，并由台中港进行出口协调。`,
    factsTitle: '买家重点信息',
    industriesTitle: '常见当地产业',
    machinesTitle: '建议配置路线',
    shippingTitle: '物流与航程',
    prepTitle: '询价前先准备',
    prepLead: '先提供这些资料，避免拿到泛用报价、反复补问：',
    quoteTitle: '报价比对清单',
    quoteLead: '用同一份清单比对不同供应商，避免比到不同范围：',
    ctaTitle: (c) => `联系 SunGene — 面向${c}的采购伙伴`,
    ctaSub: (c) => `请提供产品、目标产速、电压与目的港；我们台中的工程团队会回复采购评估、符合${c}电压频率，并附 CIF 运费估算。`,
    ctaBtn1: '获取采购评估',
    ctaBtn2: '申请采购评估',
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
    heroSubtitleTemplate: (c) => `Depuis 2010, SunGene accompagne le sourcing de systèmes d’emballage, équipements de transformation alimentaire et lignes de remplissage pour les acheteurs en ${c}. Fournisseurs audités, support CE, tension/fréquence adaptées par commande, coordination export depuis le port de Taichung.`,
    factsTitle: 'Informations clés pour les acheteurs',
    industriesTitle: 'Industries locales typiques',
    machinesTitle: 'Machines exportées sur ce marché',
    shippingTitle: 'Logistique et transit',
    prepTitle: 'Avant de demander un prix',
    prepLead: 'Envoyez ces informations pour éviter des devis génériques :',
    quoteTitle: 'Checklist de comparaison',
    quoteLead: 'Utilisez la même checklist pour comparer équitablement :',
    ctaTitle: (c) => `Contactez SunGene — partenaire de sourcing pour ${c}`,
    ctaSub: (c) => `Indiquez votre produit, cadence cible, tension et port de destination. Nos ingénieurs à Taichung reviennent avec une évaluation, tension adaptée à ${c} et estimation CIF.`,
    ctaBtn1: 'Obtenir une évaluation',
    ctaBtn2: 'Demander une évaluation',
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
    heroSubtitleTemplate: (c) => `Desde 2010, SunGene apoya el sourcing de sistemas de empaque, equipos de procesamiento de alimentos y líneas de llenado para compradores en ${c}. Proveedores auditados, soporte CE, tensión y frecuencia configuradas por pedido, coordinación de exportación desde el puerto de Taichung.`,
    factsTitle: 'Datos clave para compradores',
    industriesTitle: 'Industrias locales habituales',
    machinesTitle: 'Máquinas exportadas a este mercado',
    shippingTitle: 'Logística y tránsito',
    prepTitle: 'Antes de pedir precio',
    prepLead: 'Envíe estos datos para evitar cotizaciones genéricas:',
    quoteTitle: 'Checklist de comparación',
    quoteLead: 'Use la misma checklist para comparar de forma justa:',
    ctaTitle: (c) => `Hable con SunGene — socio de sourcing para ${c}`,
    ctaSub: (c) => `Comparta su producto, velocidad objetivo, tensión y puerto de destino. Nuestros ingenieros en Taichung responden con una evaluación, tensión adaptada a ${c} y estimación CIF.`,
    ctaBtn1: 'Obtener evaluación',
    ctaBtn2: 'Solicitar evaluación',
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
    heroSubtitleTemplate: (c) => `Desde 2010, a SunGene apoia o sourcing de sistemas de embalagem, equipamentos de processamento de alimentos e linhas de envase para compradores em ${c}. Fornecedores auditados, suporte CE, tensão e frequência configuradas por pedido, coordenação de exportação a partir do porto de Taichung.`,
    factsTitle: 'Dados-chave para compradores',
    industriesTitle: 'Indústrias locais típicas',
    machinesTitle: 'Máquinas exportadas para este mercado',
    shippingTitle: 'Logística e trânsito',
    prepTitle: 'Antes de solicitar preço',
    prepLead: 'Envie estes dados para evitar cotações genéricas:',
    quoteTitle: 'Checklist de comparação',
    quoteLead: 'Use a mesma checklist para comparar de forma justa:',
    ctaTitle: (c) => `Fale com a SunGene — parceiro de sourcing para ${c}`,
    ctaSub: (c) => `Informe o produto, velocidade-alvo, tensão e porto de destino. Nossos engenheiros em Taichung retornam com uma avaliação, tensão adequada a ${c} e estimativa CIF.`,
    ctaBtn1: 'Obter avaliação',
    ctaBtn2: 'Solicitar avaliação',
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
    heroSubtitleTemplate: (c) => `SunGene은 2010년부터 ${c} 바이어를 위해 포장 시스템, 식품 가공 장비, 충진 라인 소싱을 지원해 왔습니다. 공급업체 검증, CE 문서 지원, 주문별 전압/주파수 매칭, 타이중 항 수출 조정.`,
    factsTitle: '바이어를 위한 핵심 정보',
    industriesTitle: '현지 주요 산업',
    machinesTitle: '이 시장에 수출되는 기계',
    shippingTitle: '물류 및 운송',
    prepTitle: '견적 요청 전 준비사항',
    prepLead: '아래 정보를 주시면 일반 견적을 줄이고 재확인을 줄일 수 있습니다:',
    quoteTitle: '견적 비교 체크리스트',
    quoteLead: '동일 기준으로 공급업체를 비교하세요:',
    ctaTitle: (c) => `SunGene에 문의 — ${c} 소싱 파트너`,
    ctaSub: (c) => `제품, 목표 생산량, 전압, 도착 항구를 알려주세요. 타이중의 엔지니어가 소싱 평가, ${c} 전압 매칭, CIF 배송 추정치와 함께 회신합니다.`,
    ctaBtn1: '소싱 평가 받기',
    ctaBtn2: '소싱 평가 요청',
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
    heroSubtitleTemplate: (c) => `SunGeneは2010年から包装機械、食品加工機器、充填ラインの調達を${c}向けに支援しています。輸出向けCE関連書類のサポート（該当する場合）、SUS304/316L指定、電圧・周波数は注文ごとに設定し、台中港から出荷します。`,
    factsTitle: 'バイヤー向けの重要情報',
    industriesTitle: '主な現地産業',
    machinesTitle: 'この市場への輸出機種',
    shippingTitle: '物流・輸送',
    prepTitle: '見積依頼前の準備',
    prepLead: '一般的な見積を避けるため、次の情報を共有してください：',
    quoteTitle: '見積比較チェックリスト',
    quoteLead: '同じチェックリストで公平に比較してください：',
    ctaTitle: (c) => `SunGeneへお問い合わせ — ${c}向けソーシングパートナー`,
    ctaSub: (c) => `製品、目標能力、電圧、仕向港をお知らせください。台中のエンジニアが調達評価、${c}電圧マッチング、CIF運賃の概算をご返信します。`,
    ctaBtn1: '調達評価を受ける',
    ctaBtn2: '調達評価を依頼',
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
    heroSubtitleTemplate: (c) => `منذ 2010 تدعم SunGene توريد أنظمة التعبئة والتغليف ومعدات تصنيع الأغذية وخطوط التعبئة للمشترين في ${c}. تدقيق الموردين، دعم CE، تهيئة الجهد/التردد حسب الطلب، وتنسيق التصدير من ميناء تايتشونغ.`,
    factsTitle: 'حقائق أساسية للمشترين',
    industriesTitle: 'الصناعات المحلية الرئيسية',
    machinesTitle: 'الآلات المُصدَّرة إلى هذا السوق',
    shippingTitle: 'الشحن واللوجستيات',
    prepTitle: 'قبل طلب السعر',
    prepLead: 'أرسل هذه المعلومات لتجنب عروض أسعار عامة:',
    quoteTitle: 'قائمة مقارنة العروض',
    quoteLead: 'استخدم نفس القائمة للمقارنة بشكل عادل:',
    ctaTitle: (c) => `تواصل مع SunGene — شريك توريد إلى ${c}`,
    ctaSub: (c) => `شارك المنتج والسرعة المستهدفة والجهد وميناء الوصول. فريقنا في تايتشونغ سيرد بتقييم توريد، وبجهد يناسب ${c}، وتقدير شحن CIF.`,
    ctaBtn1: 'احصل على تقييم',
    ctaBtn2: 'اطلب تقييم التوريد',
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
    heroSubtitleTemplate: (c) => `ตั้งแต่ปี 2010 SunGene สนับสนุนการจัดซื้อระบบบรรจุภัณฑ์ อุปกรณ์แปรรูปอาหาร และสายการบรรจุสำหรับผู้ซื้อใน${c} มีการตรวจสอบซัพพลายเออร์ รองรับเอกสาร CE ปรับแรงดัน/ความถี่ตามคำสั่งซื้อ และประสานงานการส่งออกจากท่าเรือไทจง`,
    factsTitle: 'ข้อมูลสำคัญสำหรับผู้ซื้อ',
    industriesTitle: 'อุตสาหกรรมท้องถิ่นที่พบบ่อย',
    machinesTitle: 'เครื่องที่ส่งออกไปยังตลาดนี้',
    shippingTitle: 'การขนส่งและโลจิสติกส์',
    prepTitle: 'ก่อนขอราคา',
    prepLead: 'ส่งข้อมูลเหล่านี้เพื่อลดการเสนอราคาแบบทั่วไป:',
    quoteTitle: 'เช็กลิสต์เปรียบเทียบราคา',
    quoteLead: 'ใช้เช็กลิสต์เดียวกันเพื่อเปรียบเทียบอย่างยุติธรรม:',
    ctaTitle: (c) => `ติดต่อ SunGene — พันธมิตรจัดซื้อสำหรับ${c}`,
    ctaSub: (c) => `แจ้งสินค้า ความเร็วเป้าหมาย แรงดันไฟฟ้า และท่าเรือปลายทาง วิศวกรที่ไทจงจะตอบกลับด้วยการประเมินการจัดซื้อ แรงดันที่เหมาะสมกับ${c} และประมาณการค่าขนส่ง CIF`,
    ctaBtn1: 'รับคำแนะนำเครื่อง',
    ctaBtn2: 'ขอการประเมินการจัดซื้อ',
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
    heroSubtitleTemplate: (c) => `Từ năm 2010, SunGene hỗ trợ sourcing hệ thống đóng gói, thiết bị chế biến thực phẩm và dây chuyền chiết rót cho người mua tại ${c}. Thẩm định nhà cung cấp, hỗ trợ CE, cấu hình điện áp/tần số theo đơn hàng và điều phối xuất khẩu từ cảng Đài Trung.`,
    factsTitle: 'Thông tin quan trọng cho người mua',
    industriesTitle: 'Các ngành sản xuất địa phương',
    machinesTitle: 'Máy móc xuất khẩu vào thị trường này',
    shippingTitle: 'Vận chuyển & logistics',
    prepTitle: 'Trước khi yêu cầu báo giá',
    prepLead: 'Gửi các thông tin sau để tránh báo giá chung chung:',
    quoteTitle: 'Checklist so sánh báo giá',
    quoteLead: 'Dùng cùng checklist để so sánh công bằng:',
    ctaTitle: (c) => `Liên hệ SunGene — đối tác sourcing cho ${c}`,
    ctaSub: (c) => `Hãy cho chúng tôi biết sản phẩm, tốc độ mục tiêu, điện áp và cảng đến. Kỹ sư tại Đài Trung sẽ phản hồi với đánh giá nguồn cung, khớp điện áp ${c} và ước tính cước CIF.`,
    ctaBtn1: 'Nhận đánh giá',
    ctaBtn2: 'Yêu cầu đánh giá',
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
    heroSubtitleTemplate: (c) => `Seit 2010 unterstützt SunGene das Sourcing von Verpackungssystemen, Lebensmitteltechnik und Abfüllanlagen für Käufer in ${c}. Geprüfte Lieferanten, CE-Unterstützung, Spannung/Frequenz nach Auftrag konfiguriert, Exportkoordination ab Hafen Taichung.`,
    factsTitle: 'Wichtige Informationen für Einkäufer',
    industriesTitle: 'Typische lokale Branchen',
    machinesTitle: 'In diesen Markt exportierte Maschinen',
    shippingTitle: 'Logistik & Transit',
    prepTitle: 'Vor der Preisanfrage',
    prepLead: 'Senden Sie diese Angaben, um generische Angebote zu vermeiden:',
    quoteTitle: 'Vergleichs-Checkliste',
    quoteLead: 'Vergleichen Sie Anbieter mit derselben Checkliste:',
    ctaTitle: (c) => `Kontaktieren Sie SunGene — Sourcing-Partner für ${c}`,
    ctaSub: (c) => `Teilen Sie uns Produkt, Zielleistung, Spannung und Bestimmungshafen mit. Unsere Ingenieure in Taichung antworten mit einer Beschaffungsbewertung, passend zur Spannung in ${c}, und CIF-Frachtschätzung.`,
    ctaBtn1: 'Bewertung erhalten',
    ctaBtn2: 'Bewertung anfordern',
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
    name: `${market.countryName} — Industrial equipment sourcing by SunGene`,
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
    name: `Industrial Equipment Sourcing Support for ${market.countryName}`,
    serviceType: 'Industrial Equipment Sourcing',
    description: `Sourcing support for CE-documented packaging, filling, food processing, and conveyor projects from Taiwan and China to ${market.countryName}. Voltage ${market.voltage}. Transit ${market.transit}.`,
    provider: { '@id': `${SITE_URL}/#org` },
    areaServed: { '@type': 'Country', name: market.countryName },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/${lang}/contact`,
      availableLanguage: ['en', 'zh-Hant', 'zh-Hans', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Sourcing scope available to ${market.countryName}`,
      itemListElement: MACHINE_SLUGS_IN_ORDER.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${SITE_URL}/${lang}/machines/${s}#webpage`,
          name: `${MACHINE_DEFS[s].name} configuration`,
          url: `${SITE_URL}/${lang}/machines/${s}`,
        },
      })),
    },
    inLanguage: LANG_META[lang].htmlLang,
  }

  const decisionGuide = {
    notFit: ({
      en: [
        'Buyers without destination port, voltage, and incoterm preference confirmed.',
        'Projects that skip HS/code and documents planning until after production.',
        'Teams expecting “same spec” imports without verifying local electrical standards and safety scope.',
      ],
      zh: [
        '尚未確認目的港、電壓與貿易條件的詢價需求。',
        '把 HS/文件規劃拖到生產後才補的專案。',
        '期待「規格一樣就能進口」，但未核對當地電氣與安全範圍的做法。',
      ],
      cn: [
        '尚未确认目的港、电压与贸易条件的询价需求。',
        '把 HS/文件规划拖到生产后才补的项目。',
        '期待“规格一样就能进口”，但未核对当地电气与安全范围的做法。',
      ],
    } as Record<string, string[]>)[lang] || [
      'Buyers without destination port, voltage, and incoterm preference confirmed.',
      'Projects that skip HS/code and documents planning until after production.',
      'Teams expecting “same spec” imports without verifying local electrical standards and safety scope.',
    ],
    compare: ({
      en: [
        'Voltage/frequency, plug standard, labeling language, and document package scope.',
        'Incoterm, packaging/crating spec, and insurance coverage clarity.',
        'Timeline: lead time + FAT schedule + shipping/transit + customs readiness.',
      ],
      zh: [
        '電壓/頻率、插頭標準、標示語言與文件包範圍。',
        '貿易條件、包裝木箱規格與保險範圍是否清楚。',
        '時程：製造交期＋FAT 排程＋航程＋清關準備。',
      ],
      cn: [
        '电压/频率、插头标准、标示语言与文件包范围。',
        '贸易条件、包装木箱规格与保险范围是否清楚。',
        '时程：制造交期＋FAT 排程＋航程＋清关准备。',
      ],
    } as Record<string, string[]>)[lang] || [
      'Voltage/frequency, plug standard, labeling language, and document package scope.',
      'Incoterm, packaging/crating spec, and insurance coverage clarity.',
      'Timeline: lead time + FAT schedule + shipping/transit + customs readiness.',
    ],
    acceptance: ({
      en: [
        'Lock voltage match, electrical standard, and safety scope before PO.',
        'Confirm the export document list required for your customs broker.',
        'Approve FAT records, packing list, and spare parts list before shipment release.',
      ],
      zh: [
        '下單前鎖定電壓匹配、電氣標準與安全範圍。',
        '先確認報關行需要的出口文件清單。',
        '出貨前核准 FAT 紀錄、裝箱清單與備件清單。',
      ],
      cn: [
        '下单前锁定电压匹配、电气标准与安全范围。',
        '先确认报关行需要的出口文件清单。',
        '出货前核准 FAT 记录、装箱清单与备件清单。',
      ],
    } as Record<string, string[]>)[lang] || [
      'Lock voltage match, electrical standard, and safety scope before PO.',
      'Confirm the export document list required for your customs broker.',
      'Approve FAT records, packing list, and spare parts list before shipment release.',
    ],
  }

  return (
    <>
      <JsonLd data={[webPageSchema, placeSchema, serviceSchema]} />

      <PageHero
        kicker={t.kicker}
        title={`${market.countryName} — Sourcing Support`}
        desc={t.heroSubtitleTemplate(market.countryName)}
        image={{
          src: heroPhoto,
          alt: `Industrial equipment sourcing support for ${market.countryName}`,
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
          <p className="mt-4 max-w-3xl text-gray-600">
            {({
              en: 'Start from voltage, destination ports, and your industry context — then choose the configuration route. These links are routes, not just model pages.',
              zh: '先從電壓、目的港與產業情境出發，再決定配置路線。以下連結是路線，不只是型號頁。',
              cn: '先从电压、目的港与产业情境出发，再决定配置路线。以下链接是路线，不只是型号页。',
            } as Record<string, string>)[lang] ||
              'Start from voltage, destination ports, and your industry context — then choose the configuration route. These links are routes, not just model pages.'}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MACHINE_SLUGS_IN_ORDER.map((s) => {
              const def = MACHINE_DEFS[s]
              const route = (() => {
                const ind = market.keyIndustries.slice(0, 3).join(' / ')
                const ports = market.destinationPorts.slice(0, 2).join(', ')
                if (s === 'pouch-packing-machine') {
                  return {
                    title: ({ en: 'Packaging Route: Pouch Systems', zh: '包裝路線：袋類系統', cn: '包装路线：袋类系统' } as Record<string, string>)[lang] || 'Packaging Route: Pouch Systems',
                    bullets: [
                      ({ en: `Fit for: ${ind || 'packaging-heavy operations'}`, zh: `適用：${ind || '以包裝為主的產線'}`, cn: `适用：${ind || '以包装为主的产线'}` } as Record<string, string>)[lang] || `Fit for: ${ind || 'packaging-heavy operations'}`,
                      ({ en: `Market electrical: ${market.voltage}`, zh: `電壓/頻率：${market.voltage}`, cn: `电压/频率：${market.voltage}` } as Record<string, string>)[lang] || `Market electrical: ${market.voltage}`,
                      ({ en: `Shipping: ${ports || market.countryName} · ${market.incoterm}`, zh: `物流：${ports || market.countryName} · ${market.incoterm}`, cn: `物流：${ports || market.countryName} · ${market.incoterm}` } as Record<string, string>)[lang] || `Shipping: ${ports || market.countryName} · ${market.incoterm}`,
                    ],
                  }
                }
                if (s === 'powder-filling-machine') {
                  return {
                    title: ({ en: 'Dosing Route: Powders', zh: '計量路線：粉體', cn: '计量路线：粉体' } as Record<string, string>)[lang] || 'Dosing Route: Powders',
                    bullets: [
                      ({ en: `Fit for: ${ind || 'powder and dry goods'}`, zh: `適用：${ind || '粉體/乾燥產品'}`, cn: `适用：${ind || '粉体/干燥产品'}` } as Record<string, string>)[lang] || `Fit for: ${ind || 'powder and dry goods'}`,
                      ({ en: `Key checkpoints: dust control, accuracy, and cleaning path`, zh: '重點：粉塵控制、精度與清潔路徑', cn: '重点：粉尘控制、精度与清洁路径' } as Record<string, string>)[lang] || 'Key checkpoints: dust control, accuracy, and cleaning path',
                      ({ en: `Export readiness: documents + spares + FAT scope aligned`, zh: '出口準備：文件＋備件＋FAT 範圍先對齊', cn: '出口准备：文件＋备件＋FAT 范围先对齐' } as Record<string, string>)[lang] || 'Export readiness: documents + spares + FAT scope aligned',
                    ],
                  }
                }
                if (s === 'liquid-filling-machine') {
                  return {
                    title: ({ en: 'Filling Route: Liquids & Pastes', zh: '充填路線：液體/膏體', cn: '灌装路线：液体/膏体' } as Record<string, string>)[lang] || 'Filling Route: Liquids & Pastes',
                    bullets: [
                      ({ en: `Fit for: ${ind || 'liquid and viscous products'}`, zh: `適用：${ind || '液體/黏稠產品'}`, cn: `适用：${ind || '液体/黏稠产品'}` } as Record<string, string>)[lang] || `Fit for: ${ind || 'liquid and viscous products'}`,
                      ({ en: `Key checkpoints: dripping/foaming, accuracy, washdown`, zh: '重點：滴漏/起泡、精度、清洗與衛生', cn: '重点：滴漏/起泡、精度、清洗与卫生' } as Record<string, string>)[lang] || 'Key checkpoints: dripping/foaming, accuracy, washdown',
                      ({ en: `Electrical + safety scope locked for ${market.countryName}`, zh: `先鎖定符合 ${market.countryName} 的電氣與安全範圍`, cn: `先锁定符合 ${market.countryName} 的电气与安全范围` } as Record<string, string>)[lang] || `Electrical + safety scope locked for ${market.countryName}`,
                    ],
                  }
                }
                if (s === 'snack-processing-line') {
                  return {
                    title: ({ en: 'Line Route: Food Processing Integration', zh: '整線路線：食品加工整合', cn: '整线路线：食品加工整合' } as Record<string, string>)[lang] || 'Line Route: Food Processing Integration',
                    bullets: [
                      ({ en: `Fit for: ${ind || 'process + packaging projects'}`, zh: `適用：${ind || '製程＋包裝整合專案'}`, cn: `适用：${ind || '制程＋包装整合项目'}` } as Record<string, string>)[lang] || `Fit for: ${ind || 'process + packaging projects'}`,
                      ({ en: `Timeline: lead time + FAT + transit (${market.transit})`, zh: `時程：製造＋FAT＋航程（${market.transit}）`, cn: `时程：制造＋FAT＋航程（${market.transit}）` } as Record<string, string>)[lang] || `Timeline: lead time + FAT + transit (${market.transit})`,
                      ({ en: 'Key checkpoints: hygiene, utilities, layout, commissioning & training', zh: '重點：衛生、能源、公用工程、佈局、調試與訓練', cn: '重点：卫生、能源、公用工程、布局、调试与培训' } as Record<string, string>)[lang] || 'Key checkpoints: hygiene, utilities, layout, commissioning & training',
                    ],
                  }
                }
                if (s === 'conveyor-system') {
                  return {
                    title: ({ en: 'Automation Route: Conveying & Controls', zh: '自動化路線：輸送與控制', cn: '自动化路线：输送与控制' } as Record<string, string>)[lang] || 'Automation Route: Conveying & Controls',
                    bullets: [
                      ({ en: `Fit for: ${ind || 'line integration and inspection points'}`, zh: `適用：${ind || '整線整合與檢測節點'}`, cn: `适用：${ind || '整线整合与检测节点'}` } as Record<string, string>)[lang] || `Fit for: ${ind || 'line integration and inspection points'}`,
                      ({ en: `Electrical: ${market.voltage} · documents aligned with import`, zh: `電氣：${market.voltage} · 文件與進口對齊`, cn: `电气：${market.voltage} · 文件与进口对齐` } as Record<string, string>)[lang] || `Electrical: ${market.voltage} · documents aligned with import`,
                      ({ en: 'Key checkpoints: IO ownership, safety interlocks, parameter backup', zh: '重點：IO 對接責任、安全互鎖、參數備份', cn: '重点：IO 对接责任、安全互锁、参数备份' } as Record<string, string>)[lang] || 'Key checkpoints: IO ownership, safety interlocks, parameter backup',
                    ],
                  }
                }
                return {
                  title: ({ en: `Route: ${def.name} configuration`, zh: `路線：${def.name} 配置`, cn: `路线：${def.name} 配置` } as Record<string, string>)[lang] || `Route: ${def.name} configuration`,
                  bullets: [
                    ({ en: `Market electrical: ${market.voltage}`, zh: `電壓/頻率：${market.voltage}`, cn: `电压/频率：${market.voltage}` } as Record<string, string>)[lang] || `Market electrical: ${market.voltage}`,
                    ({ en: `Incoterm: ${market.incoterm}`, zh: `貿易條件：${market.incoterm}`, cn: `贸易条件：${market.incoterm}` } as Record<string, string>)[lang] || `Incoterm: ${market.incoterm}`,
                    ({ en: `HS reference: ${market.hsReference}`, zh: `HS 參考：${market.hsReference}`, cn: `HS 参考：${market.hsReference}` } as Record<string, string>)[lang] || `HS reference: ${market.hsReference}`,
                  ],
                }
              })()
              return (
                <a
                  key={s}
                  href={`/${lang}/machines/${s}`}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 transition hover:border-brand-400 hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-gray-950 group-hover:text-brand-700">{route.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {route.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-block text-sm font-semibold text-accent-600">
                    {({ en: 'See details →', zh: '查看細節 →', cn: '查看细节 →' } as Record<string, string>)[lang] || 'See details →'}
                  </span>
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

      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-950">{t.prepTitle}</h2>
              <p className="mt-3 text-sm text-gray-600">{t.prepLead}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {[
                  ({ en: 'Product + packaging format (samples/photos if possible)', zh: '產品＋包裝形式（可附樣品/照片）', cn: '产品＋包装形式（可附样品/照片）' } as Record<string, string>)[lang] || 'Product + packaging format (samples/photos if possible)',
                  ({ en: `Target output and shift assumptions (typical line speed)`, zh: '目標產速與班次假設（線速/節拍）', cn: '目标产速与班次假设（线速/节拍）' } as Record<string, string>)[lang] || 'Target output and shift assumptions (typical line speed)',
                  ({ en: `Voltage/frequency for ${market.countryName}: ${market.voltage}`, zh: `${market.countryName} 電壓/頻率：${market.voltage}`, cn: `${market.countryName} 电压/频率：${market.voltage}` } as Record<string, string>)[lang] || `Voltage/frequency for ${market.countryName}: ${market.voltage}`,
                  ({ en: `Destination port(s): ${market.destinationPorts.join(', ')}`, zh: `目的港：${market.destinationPorts.join('、')}`, cn: `目的港：${market.destinationPorts.join('、')}` } as Record<string, string>)[lang] || `Destination port(s): ${market.destinationPorts.join(', ')}`,
                  ({ en: `Incoterm preference: ${market.incoterm}`, zh: `貿易條件：${market.incoterm}`, cn: `贸易条件：${market.incoterm}` } as Record<string, string>)[lang] || `Incoterm preference: ${market.incoterm}`,
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-950">{t.quoteTitle}</h2>
              <p className="mt-3 text-sm text-gray-600">{t.quoteLead}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {[
                  ({ en: 'Exact scope included/excluded (feeding, coding, inspection, guarding, commissioning)', zh: '包含/不含範圍（上料、打碼、檢測、防護、調試）', cn: '包含/不含范围（上料、打码、检测、防护、调试）' } as Record<string, string>)[lang] || 'Exact scope included/excluded (feeding, coding, inspection, guarding, commissioning)',
                  ({ en: 'Document package (CE-related docs where applicable, wiring list, manuals)', zh: '文件包（必要時含 CE 相關、配線清單、手冊）', cn: '文件包（必要时含 CE 相关、配线清单、手册）' } as Record<string, string>)[lang] || 'Document package (CE-related docs where applicable, wiring list, manuals)',
                  ({ en: 'FAT plan + pass/fail criteria with your real product', zh: 'FAT 計畫＋用實際產品定義合格標準', cn: 'FAT 计划＋用实际产品定义合格标准' } as Record<string, string>)[lang] || 'FAT plan + pass/fail criteria with your real product',
                  ({ en: 'Lead time + spares list + after-sales response path', zh: '交期＋備件清單＋售後回覆路徑', cn: '交期＋备件清单＋售后回复路径' } as Record<string, string>)[lang] || 'Lead time + spares list + after-sales response path',
                  ({ en: `HS reference: ${market.hsReference}`, zh: `HS 參考：${market.hsReference}`, cn: `HS 参考：${market.hsReference}` } as Record<string, string>)[lang] || `HS reference: ${market.hsReference}`,
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-brand-700" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <SourcingRouteGuide
        lang={lang}
        fitItems={market.keyIndustries.slice(0, 4)}
        notFitItems={decisionGuide.notFit}
        compareItems={decisionGuide.compare}
        acceptanceItems={decisionGuide.acceptance}
      />

      <QuickAssessment lang={lang} context={market.countryName} source="market" />

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-950 py-16 sm:py-20 text-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t.ctaTitle(market.countryName)}</h2>
          <p className="mt-4 text-base text-white/70">{t.ctaSub(market.countryName)}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink href={`/${lang}/assessment`} size="lg">
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
