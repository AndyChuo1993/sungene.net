import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import JsonLd from '@/components/JsonLd'
import RecommendForm from '@/components/RecommendForm'
import { WhatsAppLink, EmailLink } from '@/components/ContactTracker'

// ── Metadata ──────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  en: 'Get a Machine Recommendation | Packaging & Filling Machinery | SunGene',
  cn: '获取机械推荐 | 包装与灌装机械 | SunGene',
  zh: '取得機械推薦 | 包裝與灌裝機械 | SunGene',
  fr: 'Obtenir une recommandation de machine | Machines d\'emballage et de remplissage | SunGene',
  es: 'Obtener recomendación de máquina | Maquinaria de empaque y llenado | SunGene',
  pt: 'Obter recomendação de máquina | Máquinas de embalagem e enchimento | SunGene',
  ko: '기계 추천 받기 | 포장 및 충전 기계 | SunGene',
  ja: '機械の推薦を受ける | 包装・充填機械 | SunGene',
  ar: 'احصل على توصية بالآلة | آلات التعبئة والتغليف والملء | SunGene',
  th: 'รับคำแนะนำเครื่องจักร | เครื่องบรรจุภัณฑ์และบรรจุ | SunGene',
  vi: 'Nhận đề xuất máy | Máy đóng gói và chiết rót | SunGene',
  de: 'Maschinenempfehlung erhalten | Verpackungs- und Abfüllmaschinen | SunGene',
}

const metaDescriptions: Record<string, string> = {
  en: 'Describe your product and production goals. Our engineers will match you with the right packaging or filling machine — free, within 1–2 business days. No model numbers needed.',
  cn: '描述您的产品和生产目标。我们的工程师将在1-2个工作日内为您匹配合适的包装或灌装机械——免费，无需型号。',
  zh: '描述您的產品和生產目標。我們的工程師將在1-2個工作日內為您匹配合適的包裝或灌裝機械——免費，無需型號。',
  fr: 'Décrivez votre produit et vos objectifs. Nos ingénieurs vous recommandent la bonne machine d\'emballage ou de remplissage — gratuitement, sous 1 à 2 jours ouvrés.',
  es: 'Describa su producto y metas de producción. Nuestros ingenieros le recomendarán la máquina de empaque o llenado adecuada — gratis, en 1-2 días hábiles.',
  pt: 'Descreva seu produto e metas de produção. Nossos engenheiros indicarão a máquina de embalagem ou enchimento certa — gratuitamente, em 1 a 2 dias úteis.',
  ko: '제품과 생산 목표를 설명해 주세요. 당사 엔지니어가 1-2 영업일 내에 적합한 포장 또는 충전 기계를 무료로 추천해 드립니다.',
  ja: '製品と生産目標を教えてください。エンジニアが1〜2営業日以内に適切な包装・充填機械を無料でご提案します。',
  ar: 'صف منتجك وأهداف إنتاجك. سيقترح مهندسونا الآلة المناسبة للتعبئة أو التغليف مجاناً خلال 1-2 يوم عمل.',
  th: 'อธิบายผลิตภัณฑ์และเป้าหมายการผลิตของคุณ วิศวกรจะแนะนำเครื่องบรรจุหรือเครื่องบรรจุภัณฑ์ที่เหมาะสม ฟรี ภายใน 1-2 วันทำการ',
  vi: 'Mô tả sản phẩm và mục tiêu sản xuất. Kỹ sư sẽ đề xuất máy đóng gói hoặc chiết rót phù hợp — miễn phí, trong 1-2 ngày làm việc.',
  de: 'Beschreiben Sie Ihr Produkt und Ihre Produktionsziele. Unsere Ingenieure empfehlen die passende Verpackungs- oder Abfüllmaschine — kostenlos, innerhalb von 1–2 Werktagen.',
}

const VALID_LANGS = ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = VALID_LANGS.includes(lang) ? lang : 'en'
  const title = metaTitles[l] ?? metaTitles.en
  const description = metaDescriptions[l] ?? metaDescriptions.en

  return {
    title,
    description,
    keywords: [
      'machinery recommendation',
      'packaging machine selection',
      'filling machine recommendation',
      'free machine consultation',
      'find the right packaging machine',
      'Taiwan industrial machinery',
      'VFFS machine recommendation',
      'pouch packing machine',
    ],
    alternates: {
      canonical: `${SITE_URL}/${l}/recommend`,
      languages: {
        en: `${SITE_URL}/en/recommend`,
        'zh-TW': `${SITE_URL}/zh/recommend`,
        'zh-CN': `${SITE_URL}/cn/recommend`,
        fr: `${SITE_URL}/fr/recommend`,
        es: `${SITE_URL}/es/recommend`,
        pt: `${SITE_URL}/pt/recommend`,
        ko: `${SITE_URL}/ko/recommend`,
        ja: `${SITE_URL}/ja/recommend`,
        ar: `${SITE_URL}/ar/recommend`,
        th: `${SITE_URL}/th/recommend`,
        vi: `${SITE_URL}/vi/recommend`,
        de: `${SITE_URL}/de/recommend`,
        'x-default': `${SITE_URL}/en/recommend`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${l}/recommend`,
      siteName: 'SunGene Machinery',
      images: [{ url: `${SITE_URL}/og/og.png`, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/og/og.png`],
    },
  }
}

// ── Page copy ─────────────────────────────────────────────────────────────────

const kicker: Record<string, string> = {
  en: 'FREE RECOMMENDATION',
  cn: '免费选型推荐',
  zh: '免費選型推薦',
  fr: 'RECOMMANDATION GRATUITE',
  es: 'RECOMENDACIÓN GRATUITA',
  pt: 'RECOMENDAÇÃO GRATUITA',
  ko: '무료 추천',
  ja: '無料推薦',
  ar: 'توصية مجانية',
  th: 'คำแนะนำฟรี',
  vi: 'TƯ VẤN MIỄN PHÍ',
  de: 'KOSTENLOSE EMPFEHLUNG',
}

const h1: Record<string, string> = {
  en: "Tell us what you need to pack — we'll match the right machine.",
  cn: '告诉我们您要包装什么——我们为您匹配合适的机械方案。',
  zh: '告訴我們您要包裝什麼——我們為您匹配合適的機械方案。',
  fr: 'Dites-nous ce que vous souhaitez emballer — nous vous recommandons la bonne machine.',
  es: 'Cuéntenos qué desea empacar — encontraremos la máquina adecuada para usted.',
  pt: 'Diga-nos o que você precisa embalar — recomendaremos a máquina certa.',
  ko: '포장해야 하는 것을 알려주세요 — 최적의 기계를 추천해 드립니다.',
  ja: '包装したいものを教えてください — 最適な機械をご提案します。',
  ar: 'أخبرنا بما تحتاج لتعبئته — سنقترح لك الآلة المناسبة.',
  th: 'บอกเราว่าคุณต้องการบรรจุอะไร — เราจะแนะนำเครื่องจักรที่เหมาะสม',
  vi: 'Cho chúng tôi biết bạn cần đóng gói gì — chúng tôi sẽ đề xuất máy phù hợp.',
  de: 'Sagen Sie uns, was Sie verpacken möchten — wir empfehlen die richtige Maschine.',
}

const subtitle: Record<string, string> = {
  en: 'No model numbers, no catalog browsing. Describe your product and production goals, and our engineers will recommend the right machine configuration for your specific application.',
  cn: '无需型号，无需目录。描述您的产品和生产目标，我们的工程师将为您的具体应用推荐合适的机械配置。',
  zh: '無需型號，無需目錄。描述您的產品和生產目標，我們的工程師將為您的具體應用推薦合適的機械配置。',
  fr: 'Pas de numéro de modèle, pas de catalogue. Décrivez votre produit et vos objectifs, nos ingénieurs recommanderont la bonne configuration de machine pour votre application.',
  es: 'Sin números de modelo, sin catálogos. Describa su producto y metas de producción, nuestros ingenieros recomendarán la configuración de máquina adecuada para su aplicación.',
  pt: 'Sem números de modelo, sem catálogos. Descreva seu produto e metas de produção, nossos engenheiros recomendarão a configuração de máquina certa para sua aplicação.',
  ko: '모델 번호나 카탈로그 없이도 됩니다. 제품과 생산 목표를 설명하면 엔지니어가 맞춤 기계 구성을 추천해 드립니다.',
  ja: '型番やカタログは不要です。製品と生産目標をお伝えください。エンジニアが最適な機械構成をご提案します。',
  ar: 'لا أرقام نماذج، لا كتالوجات. صف منتجك وأهدافك الإنتاجية، سيوصي مهندسونا بتهيئة الآلة المناسبة لتطبيقك.',
  th: 'ไม่ต้องการหมายเลขรุ่นหรือแคตตาล็อก อธิบายผลิตภัณฑ์และเป้าหมายการผลิต วิศวกรจะแนะนำการกำหนดค่าเครื่องจักรที่เหมาะสม',
  vi: 'Không cần số model, không cần duyệt catalog. Mô tả sản phẩm và mục tiêu sản xuất, kỹ sư sẽ đề xuất cấu hình máy phù hợp cho ứng dụng của bạn.',
  de: 'Keine Modellnummern, kein Katalog. Beschreiben Sie Ihr Produkt und Ihre Produktionsziele — unsere Ingenieure empfehlen die richtige Maschinenkonfiguration für Ihre Anwendung.',
}

function getSubtitle(lang: Lang): string {
  return subtitle[lang] ?? subtitle.en
}

// ── How it works steps ────────────────────────────────────────────────────────

const howItWorksTitle: Record<string, string> = {
  en: 'How it works',
  cn: '如何运作',
  zh: '如何運作',
  fr: 'Comment ça marche',
  es: 'Cómo funciona',
  pt: 'Como funciona',
  ko: '진행 방법',
  ja: 'ご利用の流れ',
  ar: 'كيف يعمل',
  th: 'วิธีการทำงาน',
  vi: 'Quy trình',
  de: 'So funktioniert es',
}

const howItWorks: Record<string, string[]> = {
  en: [
    'Fill in your requirements (2 minutes)',
    'Our engineers review your product specs',
    'We reply with a matched machine path + options',
    'You request samples, videos, or a detailed quote',
  ],
  cn: [
    '填写您的需求（2分钟）',
    '我们的工程师审查您的产品规格',
    '我们回复匹配的机械方案与选项',
    '您索取样品、视频或详细报价',
  ],
  zh: [
    '填寫您的需求（2分鐘）',
    '我們的工程師審查您的產品規格',
    '我們回覆匹配的機械方案與選項',
    '您索取樣品、影片或詳細報價',
  ],
  fr: [
    'Remplissez vos exigences (2 minutes)',
    'Nos ingénieurs examinent vos spécifications',
    'Nous répondons avec un chemin machine adapté',
    'Vous demandez des échantillons, vidéos ou un devis détaillé',
  ],
  es: [
    'Complete sus requisitos (2 minutos)',
    'Nuestros ingenieros revisan sus especificaciones',
    'Respondemos con una solución de máquina adaptada',
    'Solicita muestras, videos o cotización detallada',
  ],
  pt: [
    'Preencha seus requisitos (2 minutos)',
    'Nossos engenheiros revisam suas especificações',
    'Respondemos com a solução de máquina adequada',
    'Solicite amostras, vídeos ou orçamento detalhado',
  ],
  ko: [
    '요구사항 입력 (2분)',
    '엔지니어가 제품 사양 검토',
    '적합한 기계 경로 및 옵션으로 답변',
    '샘플, 영상 또는 상세 견적 요청',
  ],
  ja: [
    '要件を入力（2分）',
    'エンジニアが製品仕様を確認',
    '最適な機械パスとオプションをご提案',
    'サンプル、動画、または詳細見積を依頼',
  ],
  ar: [
    'أدخل متطلباتك (دقيقتان)',
    'يراجع مهندسونا مواصفات منتجك',
    'نرد بمسار الآلة المناسب والخيارات',
    'تطلب عينات أو مقاطع فيديو أو عرض أسعار مفصل',
  ],
  th: [
    'กรอกข้อกำหนดของคุณ (2 นาที)',
    'วิศวกรตรวจสอบข้อมูลผลิตภัณฑ์ของคุณ',
    'เราตอบกลับพร้อมเส้นทางเครื่องจักรที่เหมาะสม',
    'คุณขอตัวอย่าง วิดีโอ หรือใบเสนอราคาโดยละเอียด',
  ],
  vi: [
    'Điền yêu cầu của bạn (2 phút)',
    'Kỹ sư xem xét thông số kỹ thuật sản phẩm',
    'Chúng tôi trả lời với giải pháp máy phù hợp',
    'Bạn yêu cầu mẫu, video hoặc báo giá chi tiết',
  ],
  de: [
    'Anforderungen ausfüllen (2 Minuten)',
    'Unsere Ingenieure prüfen Ihre Produktspezifikationen',
    'Wir antworten mit passendem Maschinenweg + Optionen',
    'Sie fordern Muster, Videos oder ein Detailangebot an',
  ],
}

const whatWeHelpTitle: Record<string, string> = {
  en: 'What we can help with',
  cn: '我们能帮助的范围',
  zh: '我們能幫助的範圍',
  fr: 'Ce que nous pouvons faire',
  es: 'En qué podemos ayudar',
  pt: 'O que podemos ajudar',
  ko: '지원 가능 분야',
  ja: '対応可能な分野',
  ar: 'ما يمكننا مساعدتك به',
  th: 'สิ่งที่เราช่วยได้',
  vi: 'Những gì chúng tôi hỗ trợ',
  de: 'Womit wir helfen können',
}

const whatWeHelp: Record<string, string[]> = {
  en: ['Powder, flour, granule filling & packaging', 'Liquid, sauce, paste filling systems', 'Pouch, bag, sachet packaging', 'Snack & food processing lines', 'Conveyor & production line automation', 'Custom or OEM machinery engineering'],
  cn: ['粉末、面粉、颗粒灌装与包装', '液体、酱料、膏体灌装系统', '袋装、包装袋、小袋包装', '零食与食品加工生产线', '输送与生产线自动化', '定制与OEM机械工程'],
  zh: ['粉末、麵粉、顆粒灌裝與包裝', '液體、醬料、膏體灌裝系統', '袋裝、包裝袋、小袋包裝', '零食與食品加工生產線', '輸送與生產線自動化', '定制與OEM機械工程'],
  fr: ['Remplissage et conditionnement poudre, farine, granulés', 'Systèmes de remplissage liquide, sauce, pâte', 'Conditionnement sachet, pouch, stick', 'Lignes de transformation alimentaire et snacks', 'Automatisation de convoyage et de lignes', 'Ingénierie sur mesure et OEM'],
  es: ['Llenado y envasado de polvo, harina, granulado', 'Sistemas de llenado de líquidos, salsas, pastas', 'Envasado en pouch, bolsa, sachet', 'Líneas de procesamiento de snacks y alimentos', 'Automatización de conveyors y líneas de producción', 'Ingeniería personalizada y OEM'],
  pt: ['Enchimento e embalagem de pó, farinha, granulado', 'Sistemas de enchimento de líquidos, molhos, pastas', 'Embalagem em sachê, bolsa, pouch', 'Linhas de processamento de snacks e alimentos', 'Automação de transporte e linhas', 'Engenharia personalizada e OEM'],
  ko: ['분말, 밀가루, 과립 충진 및 포장', '액체, 소스, 페이스트 충진 시스템', '파우치, 백, 사쉐 포장', '스낵 및 식품 가공 라인', '컨베이어 및 생산 라인 자동화', '맞춤형 및 OEM 기계 엔지니어링'],
  ja: ['粉末・小麦粉・顆粒の充填・包装', '液体・ソース・ペーストの充填システム', 'パウチ・袋・スティックパック包装', 'スナック・食品加工ライン', 'コンベヤ・生産ライン自動化', 'カスタム・OEM機械エンジニアリング'],
  ar: ['تعبئة وتغليف المساحيق والطحين والحبيبات', 'أنظمة تعبئة السوائل والصلصات والمعاجين', 'التغليف في الأكياس والمحافظ والأكياس الصغيرة', 'خطوط تجهيز الوجبات الخفيفة والمواد الغذائية', 'أتمتة الناقل وخطوط الإنتاج', 'هندسة الآلات المخصصة وOEM'],
  th: ['บรรจุและแพ็คผง แป้ง เม็ด', 'ระบบบรรจุของเหลว ซอส เพสต์', 'บรรจุภัณฑ์ถุง ซอง สแต็ก', 'สายการผลิตขนมและอาหาร', 'ระบบสายพานและอัตโนมัติสายผลิต', 'วิศวกรรมเครื่องจักรเฉพาะและ OEM'],
  vi: ['Chiết rót và đóng gói bột, bột mì, hạt', 'Hệ thống chiết rót chất lỏng, sốt, bột nhão', 'Đóng gói túi, bao, gói nhỏ', 'Dây chuyền chế biến đồ ăn nhẹ và thực phẩm', 'Tự động hóa băng tải và dây chuyền sản xuất', 'Kỹ thuật máy móc tùy chỉnh và OEM'],
  de: ['Abfüllen und Verpacken von Pulver, Mehl, Granulat', 'Flüssigkeits-, Soßen- und Pastenfüllsysteme', 'Verpackung in Beutel, Sachet, Stick', 'Snack- und Lebensmittelverarbeitungslinien', 'Förder- und Produktionslinienautomatisierung', 'Maßgefertigte und OEM-Maschinentechnik'],
}

const trustTitle: Record<string, string> = {
  en: 'Why SunGene',
  cn: '为什么选择 SunGene',
  zh: '為什麼選擇 SunGene',
  fr: 'Pourquoi SunGene',
  es: 'Por qué SunGene',
  pt: 'Por que SunGene',
  ko: 'SunGene를 선택하는 이유',
  ja: 'SunGeneを選ぶ理由',
  ar: 'لماذا SunGene',
  th: 'ทำไมต้องเลือก SunGene',
  vi: 'Tại sao chọn SunGene',
  de: 'Warum SunGene',
}

const trustSignals: Record<string, string[]> = {
  en: ['CE Certified Machinery', 'SUS304 / SUS316L Food-Grade Materials', 'Factory-Direct from Taiwan', 'Custom Voltage & Configuration', 'Exported to 50+ Countries', 'OEM & Custom Engineering Available'],
  cn: ['CE 认证机械', 'SUS304 / SUS316L 食品级材料', '台湾工厂直销', '定制电压与配置', '出口50多个国家', '提供OEM与定制工程服务'],
  zh: ['CE 認證機械', 'SUS304 / SUS316L 食品級材料', '台灣工廠直銷', '定制電壓與配置', '出口50多個國家', '提供OEM與定制工程服務'],
  fr: ['Machines certifiées CE', 'Matériaux alimentaires SUS304 / SUS316L', 'Vente directe usine Taiwan', 'Tension et configuration sur mesure', 'Exportation vers 50+ pays', 'OEM et ingénierie sur mesure disponibles'],
  es: ['Maquinaria certificada CE', 'Materiales alimentarios SUS304 / SUS316L', 'Venta directa de fábrica Taiwan', 'Voltaje y configuración personalizados', 'Exportado a 50+ países', 'OEM e ingeniería personalizada disponibles'],
  pt: ['Máquinas certificadas CE', 'Materiais alimentares SUS304 / SUS316L', 'Venda direta da fábrica Taiwan', 'Voltagem e configuração personalizados', 'Exportado para 50+ países', 'OEM e engenharia personalizada disponíveis'],
  ko: ['CE 인증 기계', 'SUS304 / SUS316L 식품용 소재', '대만 공장 직판', '맞춤형 전압 및 구성', '50개국 이상 수출', 'OEM 및 맞춤 엔지니어링 가능'],
  ja: ['CE認証取得機械', 'SUS304 / SUS316L 食品用材料', '台湾工場直販', 'カスタム電圧・仕様', '50カ国以上に輸出', 'OEM・カスタムエンジニアリング対応'],
  ar: ['آلات حاصلة على شهادة CE', 'مواد SUS304 / SUS316L مخصصة للأغذية', 'مباشرة من مصنع تايوان', 'جهد كهربائي وتكوين مخصص', 'تصدير لأكثر من 50 دولة', 'OEM والهندسة المخصصة متاحة'],
  th: ['เครื่องจักรได้รับการรับรอง CE', 'วัสดุสัมผัสอาหาร SUS304 / SUS316L', 'ส่งตรงจากโรงงานในไต้หวัน', 'แรงดันและการกำหนดค่าเฉพาะ', 'ส่งออกกว่า 50 ประเทศ', 'รองรับ OEM และวิศวกรรมเฉพาะ'],
  vi: ['Máy được chứng nhận CE', 'Vật liệu thực phẩm SUS304 / SUS316L', 'Trực tiếp từ nhà máy Đài Loan', 'Tùy chỉnh điện áp và cấu hình', 'Xuất khẩu đến 50+ quốc gia', 'OEM và kỹ thuật tùy chỉnh'],
  de: ['CE-zertifizierte Maschinen', 'SUS304 / SUS316L Lebensmittelmaterialien', 'Direkt ab Werk Taiwan', 'Spannung und Konfiguration anpassbar', 'Export in 50+ Länder', 'OEM und kundenspezifische Technik verfügbar'],
}

const talkTitle: Record<string, string> = {
  en: 'Need to talk first?',
  cn: '想先聊聊？',
  zh: '想先聊聊？',
  fr: 'Vous voulez d\'abord discuter ?',
  es: '¿Quiere hablar primero?',
  pt: 'Quer conversar primeiro?',
  ko: '먼저 대화하고 싶으신가요?',
  ja: 'まず話し合いたいですか？',
  ar: 'تريد التحدث أولاً؟',
  th: 'ต้องการพูดคุยก่อนไหม?',
  vi: 'Muốn trao đổi trước?',
  de: 'Möchten Sie zuerst sprechen?',
}

const responseTime: Record<string, string> = {
  en: 'Response within 1–2 business days',
  cn: '1-2个工作日内回复',
  zh: '1-2個工作日內回覆',
  fr: 'Réponse sous 1 à 2 jours ouvrés',
  es: 'Respuesta en 1-2 días hábiles',
  pt: 'Resposta em 1-2 dias úteis',
  ko: '1-2 영업일 내 답변',
  ja: '1〜2営業日以内に返信',
  ar: 'الرد خلال 1-2 يوم عمل',
  th: 'ตอบกลับภายใน 1-2 วันทำการ',
  vi: 'Phản hồi trong 1-2 ngày làm việc',
  de: 'Antwort innerhalb von 1–2 Werktagen',
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

function buildJsonLd(lang: string) {
  const pageUrl = `${SITE_URL}/${lang}/recommend`

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to get a recommendation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our engineers typically respond within 1–2 business days after reviewing your product and packaging requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to know the exact machine model?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Describe what you want to pack and your target output — we\'ll identify the right machine type and configuration.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information should I prepare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Product type, state (powder/liquid/solid), target packaging format, fill weight, required output speed, and your location/voltage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a cost for the recommendation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The recommendation service is free. We only ask that you provide accurate product details so we can give you the most useful advice.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you handle custom or non-standard requirements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We specialize in custom machinery engineering for unusual products, special packaging formats, or specific hygiene/material requirements.',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Recommend',
        item: pageUrl,
      },
    ],
  }

  return [faqSchema, breadcrumbSchema]
}

// ── Sidebar blocks ────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function NumberBadge({ n }: { n: number }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-600 text-xs font-bold text-white">
      {n}
    </span>
  )
}

function SidebarCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

// ── Page component ────────────────────────────────────────────────────────────

export default async function RecommendPage({
  params,
}: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params
  const jsonLdData = buildJsonLd(lang)

  return (
    <>
      <JsonLd data={jsonLdData} />

      {/* Hero strip */}
      <section className="bg-brand-950 py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent-400">
              {kicker[lang] ?? kicker.en}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
              {h1[lang] ?? h1.en}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
              {getSubtitle(lang)}
            </p>
          </div>
        </Container>
      </section>

      {/* Main two-column layout */}
      <section className="py-14 sm:py-18 bg-gray-50">
        <Container>
          <div className="gap-10 lg:grid lg:grid-cols-5">
            {/* Left: Form — ~60% */}
            <div className="lg:col-span-3">
              <RecommendForm lang={lang} />
            </div>

            {/* Right: Sidebar — ~40% */}
            <aside className="mt-10 space-y-6 lg:col-span-2 lg:mt-0">
              {/* How it works */}
              <SidebarCard>
                <h2 className="mb-4 text-base font-semibold text-gray-900">{howItWorksTitle[lang] ?? howItWorksTitle.en}</h2>
                <ol className="space-y-3">
                  {(howItWorks[lang] ?? howItWorks.en).map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <NumberBadge n={i + 1} />
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </SidebarCard>

              {/* What we can help with */}
              <SidebarCard>
                <h2 className="mb-4 text-base font-semibold text-gray-900">{whatWeHelpTitle[lang] ?? whatWeHelpTitle.en}</h2>
                <ul className="space-y-2">
                  {(whatWeHelp[lang] ?? whatWeHelp.en).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SidebarCard>

              {/* Trust signals */}
              <SidebarCard>
                <h2 className="mb-4 text-base font-semibold text-gray-900">{trustTitle[lang] ?? trustTitle.en}</h2>
                <ul className="space-y-2">
                  {(trustSignals[lang] ?? trustSignals.en).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SidebarCard>

              {/* Need to talk first */}
              <SidebarCard className="border-accent-200 bg-accent-50">
                <h2 className="mb-3 text-base font-semibold text-gray-900">{talkTitle[lang] ?? talkTitle.en}</h2>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.104 1.523 5.83L.057 23.27a.75.75 0 00.916.948l5.42-1.47A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                    <WhatsAppLink
                      lang={lang}
                      sourcePage="recommend"
                      className="font-medium text-accent-700 hover:underline"
                    >
                      WhatsApp: +86 181 4413 2078
                    </WhatsAppLink>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-accent-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <EmailLink
                      lang={lang}
                      sourcePage="recommend"
                      className="font-medium text-accent-700 hover:underline"
                    >
                      contact@sungene.net
                    </EmailLink>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-gray-500">{responseTime[lang] ?? responseTime.en}</p>
              </SidebarCard>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
