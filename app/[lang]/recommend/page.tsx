import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import JsonLd from '@/components/JsonLd'
import RecommendForm from '@/components/RecommendForm'
import { WhatsAppLink, EmailLink } from '@/components/ContactTracker'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'

// ── Metadata ──────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  en: 'Get a Machine Recommendation | Packaging & Filling Machinery',
  cn: '获取机械推荐 | 包装与灌装机械',
  zh: '取得機械推薦 | 包裝與灌裝機械',
  fr: 'Obtenir une recommandation de machine | Machines d\'emballage et de remplissage',
  es: 'Obtener recomendación de máquina | Maquinaria de empaque y llenado',
  pt: 'Obter recomendação de máquina | Máquinas de embalagem e enchimento',
  ko: '기계 추천 받기 | 포장 및 충전 기계',
  ja: '機械の推薦を受ける | 包装・充填機械',
  ar: 'احصل على توصية بالآلة | آلات التعبئة والتغليف والملء',
  th: 'รับคำแนะนำเครื่องจักร | เครื่องบรรจุภัณฑ์และบรรจุ',
  vi: 'Nhận đề xuất máy | Máy đóng gói và chiết rót',
  de: 'Maschinenempfehlung erhalten | Verpackungs- und Abfüllmaschinen',
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
  const l = normalizeLang(lang)
  const title = metaTitles[l] ?? metaTitles.en
  const description = metaDescriptions[l] ?? metaDescriptions.en

  return buildPageMetadata({
    lang: l,
    title,
    description,
    pathname: '/recommend',
    type: 'website',
    keywords: [
      'machinery recommendation',
      'packaging machine selection',
      'filling machine recommendation',
      'machine consultation',
      'Taiwan industrial machinery',
      'VFFS machine recommendation',
      'pouch packing machine',
    ],
  })
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

const breadcrumbNames: Record<Lang, { home: string; recommend: string }> = {
  en: { home: 'Home', recommend: 'Recommendation' },
  cn: { home: '首页', recommend: '选型推荐' },
  zh: { home: '首頁', recommend: '選型推薦' },
  fr: { home: 'Accueil', recommend: 'Recommandation' },
  es: { home: 'Inicio', recommend: 'Recomendación' },
  pt: { home: 'Início', recommend: 'Recomendação' },
  ko: { home: '홈', recommend: '추천' },
  ja: { home: 'ホーム', recommend: '推薦' },
  ar: { home: 'الرئيسية', recommend: 'توصية' },
  th: { home: 'หน้าแรก', recommend: 'คำแนะนำ' },
  vi: { home: 'Trang chủ', recommend: 'Tư vấn' },
  de: { home: 'Startseite', recommend: 'Empfehlung' },
}

const faqByLang: Record<Lang, { q: string; a: string }[]> = {
  en: [
    { q: 'How long does it take to get a recommendation?', a: 'Typically 1–2 business days after we receive your product and packaging details.' },
    { q: 'What information should I prepare?', a: 'Product type/state, package format, fill range, target output, and destination voltage/frequency.' },
    { q: 'Do I need to know the exact machine model?', a: 'No. Describe your product and goals — we will match the right machine type and configuration.' },
  ],
  zh: [
    { q: '多久可以拿到推薦配置？', a: '通常在收到產品與包裝需求後 1–2 個工作日內回覆。' },
    { q: '詢問前要準備哪些資料？', a: '產品類型/狀態、包材/容器形式、灌裝範圍、目標產速，以及目的地電壓/頻率。' },
    { q: '一定要知道機型或型號嗎？', a: '不需要。描述產品與目標即可，我們會回覆適合的機型路線與配置。' },
  ],
  cn: [
    { q: '多久可以拿到推荐配置？', a: '通常在收到产品与包装需求后 1–2 个工作日内回复。' },
    { q: '询问前要准备哪些资料？', a: '产品类型/形态、包装/容器形式、灌装范围、目标产速，以及目的地电压/频率。' },
    { q: '一定要知道机型或型号吗？', a: '不需要。描述产品与目标即可，我们会给出合适的机型方向与配置建议。' },
  ],
  fr: [
    { q: 'Quel délai pour recevoir une recommandation ?', a: 'En général 1 à 2 jours ouvrés après réception de vos informations produit/emballage.' },
    { q: 'Quelles informations préparer ?', a: 'Type/état du produit, format d’emballage, plage de dosage, cadence cible, tension/fréquence.' },
    { q: 'Faut-il connaître le modèle exact ?', a: 'Non. Décrivez votre produit et vos objectifs : nous recommandons le bon type de machine et la configuration.' },
  ],
  es: [
    { q: '¿Cuánto tarda la recomendación?', a: 'Normalmente 1–2 días hábiles después de recibir los datos de producto y empaque.' },
    { q: '¿Qué información debo preparar?', a: 'Tipo/estado del producto, formato, rango de llenado, velocidad objetivo y voltaje/frecuencia.' },
    { q: '¿Necesito saber el modelo exacto?', a: 'No. Describa su producto y objetivo; recomendamos el tipo de máquina y la configuración adecuada.' },
  ],
  pt: [
    { q: 'Quanto tempo leva para receber a recomendação?', a: 'Normalmente 1–2 dias úteis após recebermos os dados do produto e da embalagem.' },
    { q: 'Que informações devo preparar?', a: 'Tipo/estado do produto, formato, faixa de enchimento, velocidade-alvo e tensão/frequência.' },
    { q: 'Preciso saber o modelo exato da máquina?', a: 'Não. Descreva o produto e a meta; recomendamos o tipo de máquina e a configuração.' },
  ],
  ko: [
    { q: '추천을 받는 데 얼마나 걸리나요?', a: '제품/포장 정보가 확인되면 보통 1–2영업일 내에 답변합니다.' },
    { q: '어떤 정보를 준비하면 되나요?', a: '제품 종류/상태, 포장 형식, 충전 범위, 목표 속도, 목적지 전압/주파수.' },
    { q: '정확한 모델을 알아야 하나요?', a: '아니요. 제품과 목표만 알려주시면 적합한 기종과 구성을 제안합니다.' },
  ],
  ja: [
    { q: '提案までの目安は？', a: '製品・包装条件の確認後、通常 1〜2 営業日で回答します。' },
    { q: '事前に用意する情報は？', a: '製品の状態、包装形態、充填範囲、目標能力、仕向地の電圧/周波数。' },
    { q: '機種名や型番は必要ですか？', a: '不要です。製品と目標を共有いただければ、適切な機種と構成をご提案します。' },
  ],
  ar: [
    { q: 'كم يستغرق الحصول على التوصية؟', a: 'عادةً خلال 1–2 يوم عمل بعد استلام معلومات المنتج والتعبئة.' },
    { q: 'ما المعلومات التي يجب تجهيزها؟', a: 'نوع المنتج/حالته، شكل العبوة، نطاق التعبئة، القدرة المطلوبة، الجهد/التردد.' },
    { q: 'هل يجب معرفة موديل الماكينة بالضبط؟', a: 'لا. شارك تفاصيل المنتج والهدف وسنقترح نوع الماكينة والتكوين المناسب.' },
  ],
  th: [
    { q: 'ใช้เวลานานแค่ไหนกว่าจะได้คำแนะนำ?', a: 'โดยทั่วไป 1–2 วันทำการหลังได้รับข้อมูลสินค้าและรูปแบบบรรจุภัณฑ์' },
    { q: 'ควรเตรียมข้อมูลอะไรบ้าง?', a: 'ชนิด/สภาพสินค้า, รูปแบบบรรจุภัณฑ์, ช่วงการบรรจุ, ความเร็วเป้าหมาย, แรงดัน/ความถี่' },
    { q: 'ต้องรู้รุ่นเครื่องที่แน่นอนไหม?', a: 'ไม่จำเป็น บอกสินค้าและเป้าหมาย แล้วเราจะแนะนำชนิดเครื่องและสเปกที่เหมาะสม' },
  ],
  vi: [
    { q: 'Mất bao lâu để nhận tư vấn?', a: 'Thường 1–2 ngày làm việc sau khi nhận đủ thông tin sản phẩm và bao bì.' },
    { q: 'Cần chuẩn bị thông tin gì?', a: 'Loại/trạng thái sản phẩm, format bao bì, dải chiết rót, tốc độ mục tiêu, điện áp/tần số.' },
    { q: 'Có cần biết đúng model máy không?', a: 'Không cần. Chỉ cần mô tả sản phẩm và mục tiêu, chúng tôi sẽ đề xuất loại máy và cấu hình phù hợp.' },
  ],
  de: [
    { q: 'Wie lange dauert eine Empfehlung?', a: 'In der Regel 1–2 Werktage nach Eingang Ihrer Produkt- und Verpackungsdaten.' },
    { q: 'Welche Informationen sollte ich vorbereiten?', a: 'Produkttyp/-zustand, Verpackungsformat, Füllbereich, Zielleistung, Spannung/Frequenz.' },
    { q: 'Muss ich das genaue Maschinenmodell kennen?', a: 'Nein. Beschreiben Sie Produkt und Ziel — wir empfehlen Typ und Konfiguration.' },
  ],
}

function buildJsonLd(lang: Lang) {
  const pageUrl = `${SITE_URL}/${lang}/recommend`
  const faqs = faqByLang[lang] ?? faqByLang.en
  const bc = breadcrumbNames[lang] ?? breadcrumbNames.en

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANG_META[lang].htmlLang,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: LANG_META[lang].htmlLang,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: bc.home,
        item: `${SITE_URL}/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: bc.recommend,
        item: pageUrl,
      },
    ],
  }

  const steps = howItWorks[lang] ?? howItWorks.en
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    inLanguage: LANG_META[lang].htmlLang,
    name: howItWorksTitle[lang] ?? howItWorksTitle.en,
    description: (metaDescriptions[lang] ?? metaDescriptions.en),
    step: steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: text,
      text,
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    inLanguage: LANG_META[lang].htmlLang,
    name: 'Machine Recommendation Service',
    description: 'Free machinery recommendation based on product specs, packaging format, target output, and destination voltage.',
    provider: { '@type': 'Organization', name: 'SunGene Co., LTD.', url: SITE_URL },
    serviceType: 'Machinery Consultation',
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    url: pageUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free machine recommendation — no obligation',
    },
  }

  return [faqSchema, breadcrumbSchema, howToSchema, serviceSchema]
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
