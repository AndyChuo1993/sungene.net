import type { Metadata } from 'next'
import { Lang, t } from '@/lib/i18n'
import HeroSection from '@/components/home/HeroSection'
import MachineByProduct from '@/components/home/MachineByProduct'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyUs from '@/components/home/WhyUs'
import WhoWeWorkWith from '@/components/home/WhoWeWorkWith'
import ProcessSection from '@/components/home/ProcessSection'
import Applications from '@/components/home/Applications'
import CTASection from '@/components/home/CTASection'
import FAQ from '@/components/home/FAQ'
import TrustGallery from '@/components/home/TrustGallery'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang } from '@/lib/seo'

type PageParams = {
  params: Promise<{ lang?: string }>
}

const HOME_KEYWORDS: Record<Lang, string[]> = {
  en: [
    'packaging machinery manufacturer', 'food processing equipment supplier', 'filling machine Taiwan',
    'sealing machine exporter', 'VFFS packaging machine', 'powder packaging machine',
    'liquid filling machine', 'automated production line', 'industrial machinery Taiwan',
    'packaging equipment factory', 'food machinery supplier', 'custom machinery manufacturer',
    'conveyor system supplier', 'granule packaging machine',
  ],
  zh: ['包裝機械製造商', '食品加工設備', '灌裝機', '封口機', '自動化生產線', '台灣機械出口'],
  cn: ['包装机械制造商', '食品加工设备', '灌装机', '封口机', '自动化生产线', '台湾机械出口'],
  fr: ['fabricant machines emballage', 'équipement transformation alimentaire', 'machine remplissage Taïwan', 'machine VFFS', 'ligne production automatisée', 'exportateur machines industrielles'],
  es: ['fabricante maquinaria empaque', 'equipo procesamiento alimentos', 'máquina llenado Taiwán', 'máquina VFFS', 'línea producción automatizada', 'exportador maquinaria industrial'],
  pt: ['fabricante máquinas embalagem', 'equipamento processamento alimentos', 'máquina envase Taiwan', 'máquina VFFS', 'linha produção automatizada', 'exportador maquinário industrial'],
  ko: ['포장기계 제조업체', '식품가공장비', '충진기 대만', 'VFFS 포장기', '자동화 생산라인', '산업용 기계 대만'],
  ja: ['包装機械メーカー', '食品加工機器', '充填機 台湾', 'VFFS包装機', '自動化生産ライン', '産業機械 台湾'],
  ar: ['آلات التعبئة والتغليف', 'معدات تجهيز الأغذية', 'آلة تعبئة تايوان', 'آلة VFFS', 'خط إنتاج مؤتمت', 'آلات صناعية'],
  th: ['เครื่องจักรบรรจุภัณฑ์', 'อุปกรณ์แปรรูปอาหาร', 'เครื่องบรรจุ ไต้หวัน', 'เครื่อง VFFS', 'สายการผลิตอัตโนมัติ', 'เครื่องจักรอุตสาหกรรม'],
  vi: ['máy đóng gói', 'thiết bị chế biến thực phẩm', 'máy chiết rót Đài Loan', 'máy VFFS', 'dây chuyền tự động', 'máy công nghiệp'],
  de: ['Verpackungsmaschinen Hersteller', 'Lebensmittelverarbeitungsanlagen', 'Abfüllmaschine Taiwan', 'VFFS Verpackungsmaschine', 'automatisierte Produktionslinie', 'Industriemaschinen Exporteur'],
}

const SCHEMA_TEXT: Record<Lang, {
  listName: string
  listDesc: string
  categories: { packaging: string; food: string; filling: string; conveying: string; custom: string }
  faq: { q: string; a: string }[]
}> = {
  en: {
    listName: 'SunGene Industrial Machinery',
    listDesc: 'Packaging machinery, food processing equipment, filling & sealing systems, and conveying/automation.',
    categories: { packaging: 'Packaging Machinery', food: 'Food Processing Equipment', filling: 'Filling & Sealing Systems', conveying: 'Conveying & Automation', custom: 'Customized Machinery' },
    faq: [
      { q: 'What is the minimum order quantity?', a: 'MOQ is 1 unit. Machines are configured to your product, packaging format, and target output.' },
      { q: 'Can you customize machines?', a: 'Yes. Materials, dimensions, capacity, voltage/frequency, and automation modules can be configured to your requirements.' },
      { q: 'What countries do you export to?', a: 'We export to 50+ countries. Voltage and frequency are configured to your local standard.' },
      { q: 'What is the production lead time?', a: 'Lead time depends on configuration. Typical ranges: 15–30 days for single machines, 45–90 days for full lines.' },
    ],
  },
  zh: {
    listName: 'SunGene 工業機械',
    listDesc: '包裝機械、食品加工設備、灌裝封口系統與輸送/自動化整線。',
    categories: { packaging: '包裝機械', food: '食品加工設備', filling: '灌裝與封口系統', conveying: '輸送與自動化', custom: '客製機械' },
    faq: [
      { q: '最小訂購量是多少？', a: '最小訂購量為 1 台。可依產品、包材形式與目標產速進行配置。' },
      { q: '可以客製化嗎？', a: '可以。材質、尺寸、產能、電壓/頻率與自動化模組皆可依需求調整。' },
      { q: '出口到哪些國家？', a: '已出口 50+ 國家。電壓與頻率可依目的地標準配置。' },
      { q: '交期大約多久？', a: '交期取決於配置與整線範圍。常見區間：單機 15–30 天、整線 45–90 天。' },
    ],
  },
  cn: {
    listName: 'SunGene 工业机械',
    listDesc: '包装机械、食品加工设备、灌装封口系统与输送/自动化整线。',
    categories: { packaging: '包装机械', food: '食品加工设备', filling: '灌装与封口系统', conveying: '输送与自动化', custom: '定制机械' },
    faq: [
      { q: '最小订购量是多少？', a: '最小订购量为 1 台。可按产品、包装形式与目标产速进行配置。' },
      { q: '可以定制吗？', a: '可以。材质、尺寸、产能、电压/频率与自动化模块都可按需求调整。' },
      { q: '出口到哪些国家？', a: '已出口 50+ 国家。电压与频率可按目的地标准配置。' },
      { q: '交期大约多久？', a: '交期取决于配置与整线范围。常见区间：单机 15–30 天、整线 45–90 天。' },
    ],
  },
  fr: {
    listName: 'SunGene — Machines industrielles',
    listDesc: 'Machines d’emballage, équipements agroalimentaires, remplissage/scellage et convoyage/automatisation.',
    categories: { packaging: 'Machines d’emballage', food: 'Équipements agroalimentaires', filling: 'Remplissage & scellage', conveying: 'Convoyage & automatisation', custom: 'Machines sur mesure' },
    faq: [
      { q: 'Quelle est la quantité minimum de commande ?', a: 'MOQ : 1 machine. Configuration selon produit, format et cadence cible.' },
      { q: 'Faites-vous du sur-mesure ?', a: 'Oui. Matériaux, dimensions, capacité, tension/fréquence et modules d’automatisation sont configurables.' },
      { q: 'Vers quels pays exportez-vous ?', a: 'Export vers 50+ pays. Tension et fréquence adaptées au standard local.' },
      { q: 'Quel est le délai de production ?', a: 'Selon configuration : en général 15–30 jours (machine) et 45–90 jours (ligne complète).' },
    ],
  },
  es: {
    listName: 'SunGene — Maquinaria industrial',
    listDesc: 'Maquinaria de empaque, equipos de alimentos, llenado/sellado y transporte/automatización.',
    categories: { packaging: 'Maquinaria de empaque', food: 'Equipos de alimentos', filling: 'Llenado y sellado', conveying: 'Transporte y automatización', custom: 'Maquinaria a medida' },
    faq: [
      { q: '¿Cuál es el pedido mínimo?', a: 'MOQ: 1 unidad. Se configura según producto, formato y velocidad objetivo.' },
      { q: '¿Pueden personalizar máquinas?', a: 'Sí. Materiales, dimensiones, capacidad, voltaje/frecuencia y módulos de automatización son configurables.' },
      { q: '¿A qué países exportan?', a: 'Exportamos a 50+ países. Voltaje y frecuencia se ajustan al estándar local.' },
      { q: '¿Cuál es el plazo de producción?', a: 'Depende de la configuración: típico 15–30 días (máquina) y 45–90 días (línea completa).' },
    ],
  },
  pt: {
    listName: 'SunGene — Máquinas industriais',
    listDesc: 'Máquinas de embalagem, equipamentos de alimentos, envase/selagem e transporte/automação.',
    categories: { packaging: 'Máquinas de embalagem', food: 'Equipamentos de alimentos', filling: 'Envase e selagem', conveying: 'Transporte e automação', custom: 'Máquinas sob medida' },
    faq: [
      { q: 'Qual é o pedido mínimo?', a: 'MOQ: 1 unidade. Configuração conforme produto, formato e velocidade-alvo.' },
      { q: 'Vocês fazem personalização?', a: 'Sim. Materiais, dimensões, capacidade, tensão/frequência e módulos de automação são configuráveis.' },
      { q: 'Para quais países vocês exportam?', a: 'Exportamos para 50+ países. Tensão e frequência são ajustadas ao padrão local.' },
      { q: 'Qual é o prazo de produção?', a: 'Depende da configuração: típico 15–30 dias (máquina) e 45–90 dias (linha completa).' },
    ],
  },
  ko: {
    listName: 'SunGene 산업용 기계',
    listDesc: '포장기계, 식품가공장비, 충전/밀봉, 컨베이어/자동화 라인.',
    categories: { packaging: '포장기계', food: '식품가공장비', filling: '충전 및 밀봉', conveying: '컨베이어 및 자동화', custom: '맞춤형 기계' },
    faq: [
      { q: '최소 주문 수량은?', a: 'MOQ는 1대입니다. 제품, 포장 형식, 목표 생산속도에 맞춰 구성합니다.' },
      { q: '맞춤 제작이 가능한가요?', a: '가능합니다. 재질, 치수, 생산능력, 전압/주파수, 자동화 모듈을 요구사항에 맞춰 구성합니다.' },
      { q: '어느 나라로 수출하나요?', a: '50개국 이상 수출합니다. 전압과 주파수는 현지 표준에 맞춰 설정합니다.' },
      { q: '납기는 얼마나 걸리나요?', a: '구성에 따라 다릅니다. 일반적으로 단일 장비 15–30일, 라인 45–90일 범위입니다.' },
    ],
  },
  ja: {
    listName: 'SunGene 産業機械',
    listDesc: '包装機械、食品加工機器、充填/シール、搬送/自動化ライン。',
    categories: { packaging: '包装機械', food: '食品加工機器', filling: '充填・シール', conveying: '搬送・自動化', custom: 'カスタム機械' },
    faq: [
      { q: '最小注文数量は？', a: 'MOQは1台です。製品、包装形態、目標能力に合わせて構成します。' },
      { q: 'カスタマイズは可能？', a: '可能です。材質、寸法、能力、電圧/周波数、各種モジュールを要件に合わせて設定します。' },
      { q: 'どの国に輸出していますか？', a: '50か国以上に輸出しています。電圧・周波数は現地規格に合わせます。' },
      { q: '納期は？', a: '構成によります。目安：単体 15–30日、ライン 45–90日。' },
    ],
  },
  ar: {
    listName: 'SunGene — معدات صناعية',
    listDesc: 'آلات التعبئة والتغليف، معدات الأغذية، التعبئة/الإغلاق، وأنظمة النقل/الأتمتة.',
    categories: { packaging: 'آلات التعبئة والتغليف', food: 'معدات تصنيع الأغذية', filling: 'التعبئة والإغلاق', conveying: 'النقل والأتمتة', custom: 'آلات مخصصة' },
    faq: [
      { q: 'ما هو الحد الأدنى للطلب؟', a: 'الحد الأدنى: آلة واحدة. نضبط المواصفات حسب المنتج وشكل العبوة والسرعة المطلوبة.' },
      { q: 'هل يمكن التخصيص؟', a: 'نعم. المواد والأبعاد والقدرة والجهد/التردد ووحدات الأتمتة قابلة للتخصيص.' },
      { q: 'إلى أي دول تقومون بالتصدير؟', a: 'نصدر إلى أكثر من 50 دولة. نضبط الجهد والتردد حسب معيار بلدك.' },
      { q: 'كم يستغرق وقت الإنتاج؟', a: 'يعتمد على التكوين: غالبًا 15–30 يومًا للآلة و45–90 يومًا للخط الكامل.' },
    ],
  },
  th: {
    listName: 'SunGene เครื่องจักรอุตสาหกรรม',
    listDesc: 'เครื่องบรรจุภัณฑ์ อุปกรณ์แปรรูปอาหาร ระบบบรรจุ/ซีล และสายพาน/อัตโนมัติ',
    categories: { packaging: 'เครื่องบรรจุภัณฑ์', food: 'อุปกรณ์แปรรูปอาหาร', filling: 'ระบบบรรจุและซีล', conveying: 'ลำเลียงและอัตโนมัติ', custom: 'เครื่องจักรสั่งทำ' },
    faq: [
      { q: 'สั่งขั้นต่ำกี่เครื่อง?', a: 'ขั้นต่ำ 1 เครื่อง สามารถปรับสเปกตามสินค้า รูปแบบบรรจุภัณฑ์ และความเร็วเป้าหมาย' },
      { q: 'สั่งทำ/ปรับแต่งได้ไหม?', a: 'ได้ ปรับวัสดุ ขนาด กำลังการผลิต แรงดัน/ความถี่ และโมดูลอัตโนมัติได้ตามความต้องการ' },
      { q: 'ส่งออกไปประเทศไหนบ้าง?', a: 'ส่งออกมากกว่า 50 ประเทศ ตั้งค่าแรงดันและความถี่ตามมาตรฐานพื้นที่ปลายทาง' },
      { q: 'ระยะเวลาผลิตนานไหม?', a: 'ขึ้นอยู่กับสเปก โดยทั่วไปเครื่องเดี่ยว 15–30 วัน และไลน์ 45–90 วัน' },
    ],
  },
  vi: {
    listName: 'SunGene — Máy móc công nghiệp',
    listDesc: 'Máy đóng gói, thiết bị thực phẩm, chiết rót/hàn kín và băng tải/tự động hóa.',
    categories: { packaging: 'Máy đóng gói', food: 'Thiết bị thực phẩm', filling: 'Chiết rót & hàn kín', conveying: 'Băng tải & tự động hóa', custom: 'Máy tùy chỉnh' },
    faq: [
      { q: 'MOQ là bao nhiêu?', a: 'MOQ: 1 máy. Cấu hình theo sản phẩm, kiểu bao bì và công suất mục tiêu.' },
      { q: 'Có thể tùy chỉnh không?', a: 'Có. Vật liệu, kích thước, công suất, điện áp/tần số và module tự động hóa đều có thể cấu hình.' },
      { q: 'Xuất khẩu đến những nước nào?', a: 'Xuất khẩu 50+ quốc gia. Điện áp và tần số được cấu hình theo tiêu chuẩn địa phương.' },
      { q: 'Thời gian sản xuất?', a: 'Tùy cấu hình: thường 15–30 ngày (máy đơn) và 45–90 ngày (dây chuyền).' },
    ],
  },
  de: {
    listName: 'SunGene — Industriemaschinen',
    listDesc: 'Verpackungsmaschinen, Lebensmittelanlagen, Abfüll-/Verschließsysteme sowie Fördertechnik/Automatisierung.',
    categories: { packaging: 'Verpackungsmaschinen', food: 'Lebensmittelanlagen', filling: 'Abfüllen & Verschließen', conveying: 'Fördertechnik & Automatisierung', custom: 'Sondermaschinen' },
    faq: [
      { q: 'Wie hoch ist die Mindestbestellmenge?', a: 'MOQ: 1 Maschine. Konfiguration nach Produkt, Verpackungsformat und Zielleistung.' },
      { q: 'Ist kundenspezifische Ausführung möglich?', a: 'Ja. Material, Abmessungen, Leistung, Spannung/Frequenz und Automationsmodule sind konfigurierbar.' },
      { q: 'In welche Länder exportieren Sie?', a: 'Export in 50+ Länder. Spannung und Frequenz werden an den lokalen Standard angepasst.' },
      { q: 'Wie lange ist die Lieferzeit?', a: 'Abhängig von der Konfiguration: typ. 15–30 Tage (Einzelmaschine) und 45–90 Tage (Linie).' },
    ],
  },
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  return buildPageMetadata({
    lang: safeLang,
    title: t(safeLang, 'meta_home_title'),
    description: t(safeLang, 'meta_home_desc'),
    pathname: '/',
    type: 'website',
    keywords: HOME_KEYWORDS[safeLang] ?? HOME_KEYWORDS.en,
  })
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  const s = SCHEMA_TEXT[safeLang] ?? SCHEMA_TEXT.en

  // Product schema for SEO
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: s.listName,
    description: s.listDesc,
    numberOfItems: 5,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: s.categories.packaging, url: `${SITE_URL}/${safeLang}/machinery/packaging` },
      { '@type': 'ListItem', position: 2, name: s.categories.food, url: `${SITE_URL}/${safeLang}/machinery/food-processing` },
      { '@type': 'ListItem', position: 3, name: s.categories.filling, url: `${SITE_URL}/${safeLang}/machinery/filling-sealing` },
      { '@type': 'ListItem', position: 4, name: s.categories.conveying, url: `${SITE_URL}/${safeLang}/machinery/conveying-automation` },
      { '@type': 'ListItem', position: 5, name: s.categories.custom, url: `${SITE_URL}/${safeLang}/machinery/custom` },
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeroSection lang={safeLang} />
      <MachineByProduct lang={safeLang} />
      <ServicesPreview lang={safeLang} />
      <WhyUs lang={safeLang} />
      <WhoWeWorkWith lang={safeLang} />
      <ProcessSection lang={safeLang} />
      <TrustGallery lang={safeLang} />
      <Applications lang={safeLang} />
      <CTASection lang={safeLang} />
      <FAQ lang={safeLang} />
    </>
  )
}
