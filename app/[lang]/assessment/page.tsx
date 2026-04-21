import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import JsonLd from '@/components/JsonLd'
import AssessmentForm from '@/components/AssessmentForm'
import { WhatsAppLink, EmailLink } from '@/components/ContactTracker'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'

// ── Metadata ──────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  en: 'Get a Sourcing Assessment | Packaging, Filling & Automation',
  cn: '获取采购评估 | 包装、灌装与自动化',
  zh: '取得採購評估 | 包裝、灌裝與自動化',
  fr: 'Obtenir une évaluation sourcing | Emballage, remplissage & automatisation',
  es: 'Obtener evaluación de abastecimiento | Empaque, llenado y automatización',
  pt: 'Obter avaliação de sourcing | Embalagem, envase e automação',
  ko: '소싱 평가 받기 | 포장, 충전 및 자동화',
  ja: '調達評価を受ける | 包装・充填・自動化',
  ar: 'احصل على تقييم توريد | التعبئة والتغليف والملء والأتمتة',
  th: 'รับการประเมินการจัดหา | บรรจุภัณฑ์ การบรรจุ และระบบอัตโนมัติ',
  vi: 'Nhận đánh giá sourcing | Đóng gói, chiết rót & tự động hóa',
  de: 'Sourcing-Bewertung erhalten | Verpackung, Abfüllung & Automatisierung',
}

const metaDescriptions: Record<string, string> = {
  en: 'Describe your product and target output. Our team will reply with the right sourcing path, packaging or filling configuration, and next steps within 1–2 business days.',
  cn: '描述您的产品和目标产能。我们的团队将在1-2个工作日内回复合适的采购路径、包装或灌装配置与下一步建议。',
  zh: '描述您的產品和目標產能。我們的團隊將在1-2個工作日內回覆合適的採購路徑、包裝或灌裝配置與下一步建議。',
  fr: 'Décrivez votre produit et vos objectifs. Notre équipe répond avec le bon parcours sourcing, la configuration d’emballage/remplissage et les prochaines étapes sous 1 à 2 jours ouvrés.',
  es: 'Describa su producto y su salida objetivo. Nuestro equipo responde con la ruta de sourcing correcta, la configuración de empaque/llenado y los siguientes pasos en 1-2 días hábiles.',
  pt: 'Descreva seu produto e a saída-alvo. Nossa equipe responde com o caminho de sourcing certo, a configuração de embalagem/envase e os próximos passos em 1 a 2 dias úteis.',
  ko: '제품과 목표 처리량을 알려주세요. 1-2 영업일 내에 적합한 소싱 경로, 포장/충전 구성, 다음 단계를 안내합니다.',
  ja: '製品と目標処理量を教えてください。エンジニアが1〜2営業日以内に適切な包装・充填機械を無料でご提案します。',
  ar: 'صف منتجك والقدرة المستهدفة. سيقترح مهندسونا الآلة المناسبة للتعبئة أو التغليف مجاناً خلال 1-2 يوم عمل.',
  th: 'อธิบายผลิตภัณฑ์และเป้าหมายกำลังการผลิตของคุณ วิศวกรจะแนะนำเครื่องบรรจุหรือเครื่องบรรจุภัณฑ์ที่เหมาะสม ฟรี ภายใน 1-2 วันทำการ',
  vi: 'Mô tả sản phẩm và công suất mục tiêu. Kỹ sư sẽ đề xuất máy đóng gói hoặc chiết rót phù hợp — miễn phí, trong 1-2 ngày làm việc.',
  de: 'Beschreiben Sie Ihr Produkt und Ihre Zielleistung. Unser Team antwortet mit dem passenden Sourcing-Pfad, der Verpackungs-/Abfüllkonfiguration und den nächsten Schritten innerhalb von 1–2 Werktagen.',
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
    pathname: '/assessment',
    type: 'website',
    keywords: [
      'sourcing assessment',
      'packaging system selection',
      'filling project assessment',
      'configuration consultation',
      'Taiwan industrial sourcing',
      'VFFS configuration guidance',
      'pouch packaging configuration',
    ],
  })
}

// ── Page copy ─────────────────────────────────────────────────────────────────

const kicker: Record<string, string> = {
  en: 'FREE ASSESSMENT',
  cn: '免费采购评估',
  zh: '免費採購評估',
  fr: 'ÉVALUATION GRATUITE',
  es: 'EVALUACIÓN GRATUITA',
  pt: 'AVALIAÇÃO GRATUITA',
  ko: '무료 평가',
  ja: '無料評価',
  ar: 'تقييم مجاني',
  th: 'การประเมินฟรี',
  vi: 'TƯ VẤN MIỄN PHÍ',
  de: 'KOSTENLOSE BEWERTUNG',
}

const h1: Record<string, string> = {
  en: "Tell us what you need to pack — we'll assess and propose the right configuration.",
  cn: '告诉我们您要包装什么——我们为您匹配合适的机械方案。',
  zh: '告訴我們您要包裝什麼——我們為您匹配合適的機械方案。',
  fr: 'Dites-nous ce que vous souhaitez emballer — nous évaluons et proposons la configuration adaptée.',
  es: 'Cuéntenos qué desea empacar — encontraremos la máquina adecuada para usted.',
  pt: 'Diga-nos o que você precisa embalar — avaliaremos e proporemos a configuração certa.',
  ko: '포장해야 하는 것을 알려주세요 — 평가 후 최적의 구성을 제안해 드립니다.',
  ja: '包装したいものを教えてください — 最適な機械をご提案します。',
  ar: 'أخبرنا بما تحتاج لتعبئته — سنقترح لك الآلة المناسبة.',
  th: 'บอกเราว่าคุณต้องการบรรจุอะไร — เราจะแนะนำเครื่องจักรที่เหมาะสม',
  vi: 'Cho chúng tôi biết bạn cần đóng gói gì — chúng tôi sẽ đề xuất máy phù hợp.',
  de: 'Sagen Sie uns, was Sie verpacken möchten — wir bewerten und schlagen die passende Konfiguration vor.',
}

const subtitle: Record<string, string> = {
  en: 'No model numbers, no catalog browsing. Describe your product and target output, and our engineers will assess and propose the right configuration for your application.',
  cn: '无需型号，无需目录。描述您的产品和目标产能，我们的工程师将为您的具体应用提供评估并给出合适的配置建议。',
  zh: '無需型號，無需目錄。描述您的產品和目標產能，我們的工程師將為您的具體應用提供評估並給出合適的配置建議。',
  fr: 'Pas de numéro de modèle, pas de catalogue. Décrivez votre produit et vos objectifs : nos ingénieurs évalueront et proposeront la configuration adaptée.',
  es: 'Sin números de modelo, sin catálogos. Describa su producto y su salida objetivo: nuestros ingenieros evaluarán y propondrán la configuración adecuada.',
  pt: 'Sem números de modelo, sem catálogos. Descreva seu produto e a saída-alvo — nossos engenheiros avaliarão e proporão a configuração certa.',
  ko: '모델 번호나 카탈로그 없이도 됩니다. 제품과 목표 처리량을 알려주시면 엔지니어가 평가 후 최적 구성을 제안해 드립니다.',
  ja: '型番やカタログは不要です。製品と目標処理量をお伝えください。エンジニアが最適な構成をご提案します。',
  ar: 'لا أرقام نماذج، لا كتالوجات. صف منتجك والقدرة المستهدفة — سيوصي مهندسونا بالتهيئة المناسبة لتطبيقك.',
  th: 'ไม่ต้องการหมายเลขรุ่นหรือแคตตาล็อก อธิบายผลิตภัณฑ์และเป้าหมายกำลังการผลิต วิศวกรจะแนะนำการกำหนดค่าที่เหมาะสม',
  vi: 'Không cần số model, không cần duyệt catalog. Mô tả sản phẩm và công suất mục tiêu — kỹ sư sẽ đề xuất cấu hình phù hợp cho ứng dụng của bạn.',
  de: 'Keine Modellnummern, kein Katalog. Beschreiben Sie Ihr Produkt und Ihre Zielleistung — unsere Ingenieure bewerten und schlagen die passende Konfiguration vor.',
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
    'We reply with a matched configuration route + options',
    'You request samples, videos, or a sourcing assessment',
  ],
  cn: [
    '填写您的需求（2分钟）',
    '我们的工程师审查您的产品规格',
    '我们回复匹配的配置路线与选项',
    '您索取样品、视频或采购评估',
  ],
  zh: [
    '填寫您的需求（2分鐘）',
    '我們的工程師審查您的產品規格',
    '我們回覆匹配的配置路線與選項',
    '您索取樣品、影片或採購評估',
  ],
  fr: [
    'Remplissez vos exigences (2 minutes)',
    'Nos ingénieurs examinent vos spécifications',
    'Nous répondons avec une route de configuration adaptée',
    'Vous demandez des échantillons, vidéos ou une évaluation',
  ],
  es: [
    'Complete sus requisitos (2 minutos)',
    'Nuestros ingenieros revisan sus especificaciones',
    'Respondemos con una ruta de configuración adaptada',
    'Solicita muestras, videos o una evaluación',
  ],
  pt: [
    'Preencha seus requisitos (2 minutos)',
    'Nossos engenheiros revisam suas especificações',
    'Respondemos com a rota de configuração adequada',
    'Solicite amostras, vídeos ou uma avaliação',
  ],
  ko: [
    '요구사항 입력 (2분)',
    '엔지니어가 제품 사양 검토',
    '적합한 구성 경로 및 옵션으로 답변',
    '샘플, 영상 또는 소싱 평가 요청',
  ],
  ja: [
    '要件を入力（2分）',
    'エンジニアが製品仕様を確認',
    '最適な構成ルートとオプションをご提案',
    'サンプル、動画、またはソーシング評価を依頼',
  ],
  ar: [
    'أدخل متطلباتك (دقيقتان)',
    'يراجع مهندسونا مواصفات منتجك',
    'نرد بمسار الآلة المناسب والخيارات',
    'تطلب عينات أو مقاطع فيديو أو تقييم توريد',
  ],
  th: [
    'กรอกข้อกำหนดของคุณ (2 นาที)',
    'วิศวกรตรวจสอบข้อมูลผลิตภัณฑ์ของคุณ',
    'เราตอบกลับพร้อมเส้นทางเครื่องจักรที่เหมาะสม',
    'คุณขอตัวอย่าง วิดีโอ หรือการประเมินการจัดซื้อ',
  ],
  vi: [
    'Điền yêu cầu của bạn (2 phút)',
    'Kỹ sư xem xét thông số kỹ thuật sản phẩm',
    'Chúng tôi trả lời với giải pháp máy phù hợp',
    'Bạn yêu cầu mẫu, video hoặc đánh giá nguồn cung',
  ],
  de: [
    'Anforderungen ausfüllen (2 Minuten)',
    'Unsere Ingenieure prüfen Ihre Produktspezifikationen',
    'Wir antworten mit passendem Konfigurationspfad + Optionen',
    'Sie fordern Muster, Videos oder eine Beschaffungsbewertung an',
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
  en: ['Powder, flour, granule filling & packaging', 'Liquid, sauce, paste filling systems', 'Pouch, bag, sachet packaging', 'Snack & food processing lines', 'Conveying & line automation', 'Custom machinery engineering'],
  cn: ['粉末、面粉、颗粒灌装与包装', '液体、酱料、膏体灌装系统', '袋装、包装袋、小袋包装', '零食与食品加工线体', '输送与线体自动化', '定制机械工程'],
  zh: ['粉末、麵粉、顆粒灌裝與包裝', '液體、醬料、膏體灌裝系統', '袋裝、包裝袋、小袋包裝', '零食與食品加工線體', '輸送與線體自動化', '定制機械工程'],
  fr: ['Remplissage et conditionnement poudre, farine, granulés', 'Systèmes de remplissage liquide, sauce, pâte', 'Conditionnement sachet, pouch, stick', 'Lignes de transformation alimentaire et snacks', 'Automatisation de convoyage et de lignes', 'Ingénierie sur mesure'],
  es: ['Llenado y envasado de polvo, harina, granulado', 'Sistemas de llenado de líquidos, salsas, pastas', 'Envasado en pouch, bolsa, sachet', 'Líneas de procesamiento de snacks y alimentos', 'Automatización e integración de líneas y conveyors', 'Ingeniería personalizada'],
  pt: ['Enchimento e embalagem de pó, farinha, granulado', 'Sistemas de enchimento de líquidos, molhos, pastas', 'Embalagem em sachê, bolsa, pouch', 'Linhas de processamento de snacks e alimentos', 'Automação de transporte e linhas', 'Engenharia personalizada'],
  ko: ['분말, 밀가루, 과립 충진 및 포장', '액체, 소스, 페이스트 충진 시스템', '파우치, 백, 사쉐 포장', '스낵 및 식품 가공 라인', '컨베이어 및 라인 자동화', '맞춤형 기계 엔지니어링'],
  ja: ['粉末・小麦粉・顆粒の充填・包装', '液体・ソース・ペーストの充填システム', 'パウチ・袋・スティックパック包装', 'スナック・食品加工ライン', 'コンベヤ・ライン自動化', 'カスタム機械エンジニアリング'],
  ar: ['تعبئة وتغليف المساحيق والطحين والحبيبات', 'أنظمة تعبئة السوائل والصلصات والمعاجين', 'التغليف في الأكياس والمحافظ والأكياس الصغيرة', 'خطوط تجهيز الوجبات الخفيفة والمواد الغذائية', 'أتمتة الناقل وتكامل الخطوط', 'هندسة الآلات المخصصة'],
  th: ['บรรจุและแพ็คผง แป้ง เม็ด', 'ระบบบรรจุของเหลว ซอส เพสต์', 'บรรจุภัณฑ์ถุง ซอง สแต็ก', 'ไลน์แปรรูปขนมและอาหาร', 'ระบบสายพานและอัตโนมัติไลน์', 'วิศวกรรมเครื่องจักรเฉพาะ'],
  vi: ['Chiết rót và đóng gói bột, bột mì, hạt', 'Hệ thống chiết rót chất lỏng, sốt, bột nhão', 'Đóng gói túi, bao, gói nhỏ', 'Dây chuyền chế biến đồ ăn nhẹ và thực phẩm', 'Tự động hóa băng tải và tích hợp dây chuyền', 'Kỹ thuật máy móc tùy chỉnh'],
  de: ['Abfüllen und Verpacken von Pulver, Mehl, Granulat', 'Flüssigkeits-, Soßen- und Pastenfüllsysteme', 'Verpackung in Beutel, Sachet, Stick', 'Snack- und Lebensmittelverarbeitungslinien', 'Fördertechnik und Linienautomatisierung', 'Maßgefertigte Maschinentechnik'],
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
  en: ['CE documentation support (where applicable)', 'SUS304 / SUS316L Food-Grade Materials', 'Supplier-vetted sourcing', 'Custom Voltage & Configuration', 'Exported to 50+ Countries', 'Custom engineering available'],
  cn: ['CE 文件支持（视机型与目的地而定）', 'SUS304 / SUS316L 食品级材料', '供应商审查与选型', '定制电压与配置', '出口50多个国家', '提供定制工程服务'],
  zh: ['CE 文件支援（視機型與目的地而定）', 'SUS304 / SUS316L 食品級材料', '供應商審查與選型', '定制電壓與配置', '出口50多個國家', '提供定制工程服務'],
  fr: ['Support documentaire CE (selon machine et destination)', 'Matériaux alimentaires SUS304 / SUS316L', 'Sourcing avec fournisseurs audités', 'Tension et configuration sur mesure', 'Exportation vers 50+ pays', 'Ingénierie sur mesure disponible'],
  es: ['Soporte de documentación CE (según máquina y destino)', 'Materiales alimentarios SUS304 / SUS316L', 'Sourcing con proveedores auditados', 'Voltaje y configuración personalizados', 'Exportado a 50+ países', 'Ingeniería personalizada disponible'],
  pt: ['Suporte de documentação CE (conforme máquina e destino)', 'Materiais alimentares SUS304 / SUS316L', 'Sourcing com fornecedores auditados', 'Voltagem e configuração personalizados', 'Exportado para 50+ países', 'Engenharia personalizada disponível'],
  ko: ['CE 문서 지원(기종/목적지에 따라)', 'SUS304 / SUS316L 식품용 소재', '공급업체 검증 소싱', '맞춤형 전압 및 구성', '50개국 이상 수출', '맞춤 엔지니어링 가능'],
  ja: ['CE書類サポート（機種・仕向地により）', 'SUS304 / SUS316L 食品用材料', 'サプライヤー審査付きソーシング', 'カスタム電圧・仕様', '50カ国以上に輸出', 'カスタムエンジニアリング対応'],
  ar: ['دعم وثائق CE (حسب الماكينة والوجهة)', 'مواد SUS304 / SUS316L مخصصة للأغذية', 'سورسينغ مع تدقيق الموردين', 'جهد كهربائي وتكوين مخصص', 'تصدير لأكثر من 50 دولة', 'هندسة مخصصة متاحة'],
  th: ['สนับสนุนเอกสาร CE (ขึ้นอยู่กับรุ่นและปลายทาง)', 'วัสดุสัมผัสอาหาร SUS304 / SUS316L', 'ซอร์สซิ่งพร้อมตรวจสอบซัพพลายเออร์', 'แรงดันและการกำหนดค่าเฉพาะ', 'ส่งออกกว่า 50 ประเทศ', 'รองรับวิศวกรรมเฉพาะ'],
  vi: ['Hỗ trợ tài liệu CE (tùy máy và điểm đến)', 'Vật liệu thực phẩm SUS304 / SUS316L', 'Sourcing với nhà cung cấp được thẩm định', 'Tùy chỉnh điện áp và cấu hình', 'Xuất khẩu đến 50+ quốc gia', 'Hỗ trợ kỹ thuật tùy chỉnh'],
  de: ['CE-Dokumentationssupport (je nach Maschine/Zielmarkt)', 'SUS304 / SUS316L Lebensmittelmaterialien', 'Sourcing mit geprüften Lieferanten', 'Spannung und Konfiguration anpassbar', 'Export in 50+ Länder', 'Kundenspezifische Technik verfügbar'],
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
  en: { home: 'Home', recommend: 'Assessment' },
  cn: { home: '首页', recommend: '采购评估' },
  zh: { home: '首頁', recommend: '採購評估' },
  fr: { home: 'Accueil', recommend: 'Évaluation' },
  es: { home: 'Inicio', recommend: 'Evaluación' },
  pt: { home: 'Início', recommend: 'Avaliação' },
  ko: { home: '홈', recommend: '평가' },
  ja: { home: 'ホーム', recommend: '評価' },
  ar: { home: 'الرئيسية', recommend: 'تقييم' },
  th: { home: 'หน้าแรก', recommend: 'การประเมิน' },
  vi: { home: 'Trang chủ', recommend: 'Đánh giá' },
  de: { home: 'Startseite', recommend: 'Bewertung' },
}

const faqByLang: Record<Lang, { q: string; a: string }[]> = {
  en: [
    { q: 'How long does it take to get an assessment?', a: 'Typically 1–2 business days after we receive your product and packaging details.' },
    { q: 'What information should I prepare?', a: 'Product type/state, package format, fill range, target output, and destination voltage/frequency.' },
    { q: 'Do I need to know the exact machine model?', a: 'No. Describe your product and goals — we will match the right machine type and configuration.' },
  ],
  zh: [
    { q: '多久可以拿到評估結果？', a: '通常在收到產品與包裝需求後 1–2 個工作日內回覆。' },
    { q: '申請採購評估前要準備哪些資料？', a: '產品類型/狀態、包材/容器形式、灌裝範圍、目標產速，以及目的地電壓/頻率。' },
    { q: '一定要知道機型或型號嗎？', a: '不需要。描述產品與目標即可，我們會回覆適合的機型路線與配置。' },
  ],
  cn: [
    { q: '多久可以拿到评估结果？', a: '通常在收到产品与包装需求后 1–2 个工作日内回复。' },
    { q: '申请采购评估前要准备哪些资料？', a: '产品类型/形态、包装/容器形式、灌装范围、目标产速，以及目的地电压/频率。' },
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
    { q: '평가를 받는 데 얼마나 걸리나요?', a: '제품/포장 정보가 확인되면 보통 1–2영업일 내에 답변합니다.' },
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
    { q: 'Wie lange dauert eine Bewertung?', a: 'In der Regel 1–2 Werktage nach Eingang Ihrer Produkt- und Verpackungsdaten.' },
    { q: 'Welche Informationen sollte ich vorbereiten?', a: 'Produkttyp/-zustand, Verpackungsformat, Füllbereich, Zielleistung, Spannung/Frequenz.' },
    { q: 'Muss ich das genaue Maschinenmodell kennen?', a: 'Nein. Beschreiben Sie Produkt und Ziel — wir empfehlen Typ und Konfiguration.' },
  ],
}

function buildJsonLd(lang: Lang) {
  const pageUrl = `${SITE_URL}/${lang}/assessment`
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
    name: 'Sourcing Assessment Service',
    description: 'Free sourcing assessment based on product specs, packaging format, target output, and destination requirements.',
    provider: { '@type': 'Organization', name: 'SunGene Co., LTD.', url: SITE_URL },
    serviceType: 'Industrial Sourcing Consultation',
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    url: pageUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free sourcing assessment — no obligation',
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
              <AssessmentForm lang={lang} />
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
                      sourcePage="assessment"
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
                      sourcePage="assessment"
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
