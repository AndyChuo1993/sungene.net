import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, BREADCRUMB_LABELS, LANG_META } from '@/lib/seo'
import { buildWuushengProductSchema } from '@/lib/productSchema'
import Image from 'next/image'

const PRODUCT_IMAGE = 'https://img.mweb.com.tw/thumb/758/1000x1000/product/01_Sealer/01_Hand_Sealer_Impulse_Type/Hand_Sealer_Impulse_Type.jpg'

const metaTitles: Record<string, string> = {
  en: 'Hand Sealer (Impulse Type) | Wuu Sheng Packaging Machines',
  cn: '手压式封口机 | 吴胜包装机械',
  zh: '手壓式封口機 | 吳勝包裝機械',
  fr: 'Soudeuse à main (type impulsion) | Machines d\'emballage Wuu Sheng',
  es: 'Selladora de mano (tipo impulso) | Máquinas de embalaje Wuu Sheng',
  pt: 'Seladora manual (tipo impulso) | Máquinas de embalagem Wuu Sheng',
  ko: '수동 임펄스 실러 | 우성 포장기계',
  ja: 'ハンドシーラー（インパルス式）| ウーシェン包装機',
  ar: 'جهاز الختم اليدوي (نوع النبضة) | آلات تغليف Wuu Sheng',
  th: 'เครื่องซีลมือ (แบบอิมพัลส์) | เครื่องจักรบรรจุภัณฑ์ Wuu Sheng',
  vi: 'Máy hàn tay (loại xung) | Máy đóng gói Wuu Sheng',
  de: 'Handschweißgerät (Impulstyp) | Wuu Sheng Verpackungsmaschinen',
}

const metaDescs: Record<string, string> = {
  en: 'Compact impulse hand sealer for food, stationery, electronics, hardware, and daily necessities. Compatible with LLDPE, PVC, OPP, PP and POF films. Models from 200mm to 520mm sealing length.',
  cn: '适用于食品、文具、电子、五金及日用品的手压式脉冲封口机，兼容LLDPE、PVC、OPP、PP和POF薄膜，封口长度200mm至520mm。',
  zh: '適用於食品、文具、電子、五金及日用品的手壓式脈衝封口機，相容LLDPE、PVC、OPP、PP和POF薄膜，封口長度200mm至520mm。',
  fr: 'Soudeuse à main à impulsion compacte pour l\'alimentation, la papeterie, l\'électronique, la quincaillerie et les articles ménagers. Compatible LLDPE, PVC, OPP, PP et POF. Modèles de 200mm à 520mm.',
  es: 'Selladora de mano por impulso para alimentos, papelería, electrónica, ferretería y artículos del hogar. Compatible con LLDPE, PVC, OPP, PP y POF. Modelos de 200mm a 520mm.',
  pt: 'Seladora manual por impulso para alimentos, papelaria, eletrônicos, ferragens e artigos domésticos. Compatível com LLDPE, PVC, OPP, PP e POF. Modelos de 200mm a 520mm.',
  ko: '식품, 문구류, 전자제품, 철물, 생활용품용 임펄스 수동 실러. LLDPE, PVC, OPP, PP, POF 필름 호환. 200mm~520mm 실링 길이 모델.',
  ja: '食品・文具・電子部品・金物・日用品向けコンパクトインパルスハンドシーラー。LLDPE、PVC、OPP、PP、POFフィルム対応。封口長200〜520mmモデル。',
  ar: 'جهاز ختم يدوي بالنبضات للأغذية والقرطاسية والإلكترونيات والأدوات المعدنية والمستلزمات اليومية. متوافق مع LLDPE وPVC وOPP وPP وPOF. موديلات من 200 إلى 520 مم.',
  th: 'เครื่องซีลมือแบบอิมพัลส์สำหรับอาหาร เครื่องเขียน อิเล็กทรอนิกส์ เครื่องมือ และของใช้ในชีวิตประจำวัน รองรับ LLDPE, PVC, OPP, PP, POF ความยาวซีล 200-520 มม.',
  vi: 'Máy hàn tay xung điện cho thực phẩm, văn phòng phẩm, điện tử, phần cứng và đồ dùng hàng ngày. Tương thích LLDPE, PVC, OPP, PP, POF. Chiều dài hàn 200-520mm.',
  de: 'Kompaktes Impuls-Handschweißgerät für Lebensmittel, Schreibwaren, Elektronik, Heimwerkerbedarf und Haushaltswaren. Kompatibel mit LLDPE, PVC, OPP, PP und POF. Modelle von 200 bis 520 mm.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/hand-sealer-impulse-type',
    type: 'website',
    keywords: ['hand sealer', 'impulse sealer', 'bag sealer', 'plastic bag sealer', 'packaging sealer', 'Wuu Sheng', 'Taiwan sealer'],
  })
}

interface PageContent {
  kicker: string
  heroTitle: string
  heroSubtitle: string
  featuresTitle: string
  features: string[]
  specsTitle: string
  applicationsTitle: string
  applications: string[]
  ctaTitle: string
  ctaBtn: string
  packagingLabel: string
}

const content: Record<string, PageContent> = {
  en: {
    kicker: 'SEALING EQUIPMENT',
    heroTitle: 'Hand Sealer (Impulse Type)',
    heroSubtitle: 'A reliable, energy-efficient impulse hand sealer for sealing plastic bags used in food, stationery, electronics, hardware, and daily necessities. Compatible with LLDPE, PVC, OPP, PP, and POF films.',
    featuresTitle: 'Key Features',
    features: [
      'Transient impulse heating — only heats during the sealing moment, saving electricity',
      'Adjustable time and temperature controller for consistent seal quality',
      'Single-person operation — fast, simple, and ergonomic',
      'Easy maintenance with readily available replacement heating elements',
      'Compact and lightweight design for benchtop or portable use',
      'Available in 110V and 220V configurations',
    ],
    specsTitle: 'Technical Specifications',
    applicationsTitle: 'Applications',
    applications: ['Food packaging', 'Stationery & office supplies', 'Electronics & components', 'Hardware & tools', 'Daily necessities', 'Cosmetics & personal care', 'Medical supplies', 'Industrial parts'],
    ctaTitle: 'Need a hand sealer for your production line? Contact us for pricing and availability.',
    ctaBtn: 'Get a Quote',
    packagingLabel: 'Packaging',
  },
  cn: {
    kicker: '封口设备',
    heroTitle: '手压式封口机',
    heroSubtitle: '可靠节能的脉冲手压封口机，适用于食品、文具、电子、五金及日用品的塑料袋封口，兼容LLDPE、PVC、OPP、PP及POF薄膜。',
    featuresTitle: '主要特点',
    features: [
      '瞬间脉冲加热——仅在封口瞬间加热，节省电力',
      '时间与温度可调节控制器，确保封口质量稳定',
      '单人操作——快捷、简便、人体工学设计',
      '易于维护，发热元件随时可更换',
      '紧凑轻便，适合桌面或便携使用',
      '支持110V和220V双电压配置',
    ],
    specsTitle: '技术规格',
    applicationsTitle: '应用领域',
    applications: ['食品包装', '文具与办公用品', '电子元器件', '五金工具', '日用消费品', '化妆品与个护', '医疗耗材', '工业零件'],
    ctaTitle: '需要为您的生产线配备手压封口机？联系我们获取报价与供货信息。',
    ctaBtn: '获取报价',
    packagingLabel: '包装机械',
  },
  zh: {
    kicker: '封口設備',
    heroTitle: '手壓式封口機',
    heroSubtitle: '可靠節能的脈衝手壓封口機，適用於食品、文具、電子、五金及日用品的塑膠袋封口，相容LLDPE、PVC、OPP、PP及POF薄膜。',
    featuresTitle: '主要特點',
    features: [
      '瞬間脈衝加熱——僅在封口瞬間加熱，節省電力',
      '時間與溫度可調節控制器，確保封口品質穩定',
      '單人操作——快捷、簡便、符合人體工學設計',
      '易於維護，發熱元件隨時可更換',
      '緊湊輕便，適合桌面或攜帶式使用',
      '支援110V和220V雙電壓配置',
    ],
    specsTitle: '技術規格',
    applicationsTitle: '應用領域',
    applications: ['食品包裝', '文具與辦公用品', '電子元器件', '五金工具', '日用消費品', '化妝品與個人護理', '醫療耗材', '工業零件'],
    ctaTitle: '需要為您的生產線配備手壓封口機？聯繫我們獲取報價與供貨資訊。',
    ctaBtn: '取得報價',
    packagingLabel: '包裝機械',
  },
  fr: {
    kicker: 'ÉQUIPEMENT DE SCELLAGE',
    heroTitle: 'Soudeuse à main (type impulsion)',
    heroSubtitle: 'Soudeuse à main par impulsion fiable et économe en énergie pour le scellage de sacs plastique utilisés dans les secteurs alimentaire, papeterie, électronique, quincaillerie et articles ménagers. Compatible LLDPE, PVC, OPP, PP et POF.',
    featuresTitle: 'Caractéristiques principales',
    features: [
      'Chauffage par impulsion transitoire — chauffe uniquement au moment du scellage, économie d\'énergie',
      'Contrôleur de temps et de température réglable pour une qualité de soudure constante',
      'Opération par une seule personne — rapide, simple et ergonomique',
      'Entretien facile avec des éléments chauffants de remplacement disponibles',
      'Design compact et léger pour utilisation sur table ou portable',
      'Disponible en configurations 110V et 220V',
    ],
    specsTitle: 'Spécifications techniques',
    applicationsTitle: 'Applications',
    applications: ['Emballage alimentaire', 'Papeterie & fournitures de bureau', 'Électronique & composants', 'Quincaillerie & outils', 'Articles ménagers', 'Cosmétiques & soins', 'Fournitures médicales', 'Pièces industrielles'],
    ctaTitle: 'Besoin d\'une soudeuse à main pour votre ligne de production ? Contactez-nous pour un devis.',
    ctaBtn: 'Demander un devis',
    packagingLabel: 'Emballage',
  },
  es: {
    kicker: 'EQUIPO DE SELLADO',
    heroTitle: 'Selladora de mano (tipo impulso)',
    heroSubtitle: 'Selladora de mano por impulso confiable y eficiente en energía para sellar bolsas plásticas usadas en alimentos, papelería, electrónica, ferretería y artículos del hogar. Compatible con LLDPE, PVC, OPP, PP y POF.',
    featuresTitle: 'Características principales',
    features: [
      'Calentamiento por impulso transitorio — solo calienta en el momento del sellado, ahorra electricidad',
      'Controlador de tiempo y temperatura ajustable para calidad de sellado constante',
      'Operación por una sola persona — rápida, simple y ergonómica',
      'Fácil mantenimiento con elementos calefactores de repuesto disponibles',
      'Diseño compacto y ligero para uso en mesa o portátil',
      'Disponible en configuraciones de 110V y 220V',
    ],
    specsTitle: 'Especificaciones técnicas',
    applicationsTitle: 'Aplicaciones',
    applications: ['Envasado de alimentos', 'Papelería y suministros de oficina', 'Electrónica y componentes', 'Ferretería y herramientas', 'Artículos de uso diario', 'Cosméticos y cuidado personal', 'Suministros médicos', 'Piezas industriales'],
    ctaTitle: '¿Necesita una selladora de mano para su línea de producción? Contáctenos para precios y disponibilidad.',
    ctaBtn: 'Solicitar cotización',
    packagingLabel: 'Embalaje',
  },
  pt: {
    kicker: 'EQUIPAMENTO DE SELAGEM',
    heroTitle: 'Seladora manual (tipo impulso)',
    heroSubtitle: 'Seladora manual por impulso confiável e eficiente em energia para selar sacos plásticos usados em alimentos, papelaria, eletrônicos, ferragens e artigos domésticos. Compatível com LLDPE, PVC, OPP, PP e POF.',
    featuresTitle: 'Principais características',
    features: [
      'Aquecimento por impulso transitório — aquece apenas no momento da selagem, economizando energia',
      'Controlador de tempo e temperatura ajustável para qualidade de selagem consistente',
      'Operação por uma pessoa — rápida, simples e ergonômica',
      'Fácil manutenção com elementos de aquecimento de reposição disponíveis',
      'Design compacto e leve para uso em bancada ou portátil',
      'Disponível em configurações de 110V e 220V',
    ],
    specsTitle: 'Especificações técnicas',
    applicationsTitle: 'Aplicações',
    applications: ['Embalagem de alimentos', 'Papelaria e material de escritório', 'Eletrônicos e componentes', 'Ferragens e ferramentas', 'Artigos de uso diário', 'Cosméticos e cuidados pessoais', 'Suprimentos médicos', 'Peças industriais'],
    ctaTitle: 'Precisa de uma seladora manual para sua linha de produção? Entre em contato para preços e disponibilidade.',
    ctaBtn: 'Solicitar orçamento',
    packagingLabel: 'Embalagem',
  },
  ko: {
    kicker: '실링 장비',
    heroTitle: '수동 임펄스 실러',
    heroSubtitle: '식품, 문구류, 전자제품, 철물, 생활용품 포장에 사용되는 비닐봉지를 밀봉하는 신뢰성 높고 에너지 효율적인 임펄스 수동 실러. LLDPE, PVC, OPP, PP, POF 필름 호환.',
    featuresTitle: '주요 특징',
    features: [
      '순간 임펄스 가열 — 실링 순간에만 가열되어 전력 절약',
      '일정한 실링 품질을 위한 시간 및 온도 조절 컨트롤러',
      '1인 작동 — 빠르고 간편하며 인체공학적 설계',
      '손쉬운 유지보수 및 교체 가능한 발열체',
      '테이블탑 또는 휴대용으로 사용 가능한 콤팩트하고 가벼운 디자인',
      '110V 및 220V 구성 모두 지원',
    ],
    specsTitle: '기술 사양',
    applicationsTitle: '적용 분야',
    applications: ['식품 포장', '문구류 및 사무용품', '전자부품', '철물 및 공구', '생활용품', '화장품 및 뷰티', '의료용품', '산업용 부품'],
    ctaTitle: '생산 라인에 수동 실러가 필요하신가요? 가격 및 재고 문의는 지금 바로 연락해 주세요.',
    ctaBtn: '견적 받기',
    packagingLabel: '포장',
  },
  ja: {
    kicker: 'シーリング機器',
    heroTitle: 'ハンドシーラー（インパルス式）',
    heroSubtitle: '食品・文具・電子部品・金物・日用品のプラスチック袋封口に対応した信頼性の高い省エネインパルスハンドシーラー。LLDPE、PVC、OPP、PP、POFフィルム対応。',
    featuresTitle: '主な特長',
    features: [
      '瞬間インパルス加熱 — シール時のみ加熱するため省エネルギー',
      '安定した封口品質のための時間・温度調節コントローラー',
      '一人で操作可能 — 迅速・簡単・人間工学的設計',
      '発熱体の交換も簡単でメンテナンスが容易',
      '卓上または持ち運びに便利なコンパクト軽量設計',
      '110Vと220V両対応',
    ],
    specsTitle: '技術仕様',
    applicationsTitle: '適用分野',
    applications: ['食品包装', '文具・事務用品', '電子部品', '金物・工具', '日用品', '化粧品・パーソナルケア', '医療用品', '産業用部品'],
    ctaTitle: '生産ラインにハンドシーラーをお探しですか？価格・在庫については今すぐお問い合わせください。',
    ctaBtn: '見積もりを依頼',
    packagingLabel: '包装',
  },
  ar: {
    kicker: 'معدات الختم',
    heroTitle: 'جهاز الختم اليدوي (نوع النبضة)',
    heroSubtitle: 'جهاز ختم يدوي بالنبضات موثوق وموفر للطاقة لختم الأكياس البلاستيكية المستخدمة في الأغذية والقرطاسية والإلكترونيات والأدوات المعدنية والمستلزمات اليومية. متوافق مع LLDPE وPVC وOPP وPP وPOF.',
    featuresTitle: 'الميزات الرئيسية',
    features: [
      'تسخين نبضي عابر — يسخن فقط لحظة الختم مما يوفر الكهرباء',
      'وحدة تحكم قابلة للضبط للوقت والحرارة لجودة ختم ثابتة',
      'تشغيل بشخص واحد — سريع وبسيط وبتصميم مريح',
      'صيانة سهلة مع توافر عناصر التسخين الاستبدالية',
      'تصميم مدمج وخفيف للاستخدام على الطاولة أو المحمول',
      'متاح بتوصيلات 110 فولت و220 فولت',
    ],
    specsTitle: 'المواصفات التقنية',
    applicationsTitle: 'التطبيقات',
    applications: ['تغليف الأغذية', 'القرطاسية ومستلزمات المكتب', 'الإلكترونيات والمكونات', 'الأدوات المعدنية والعدد', 'المستلزمات اليومية', 'مستحضرات التجميل والعناية الشخصية', 'المستلزمات الطبية', 'القطع الصناعية'],
    ctaTitle: 'هل تحتاج إلى جهاز ختم يدوي لخط إنتاجك؟ تواصل معنا للحصول على الأسعار والتوافر.',
    ctaBtn: 'طلب عرض سعر',
    packagingLabel: 'التغليف',
  },
  th: {
    kicker: 'อุปกรณ์ซีล',
    heroTitle: 'เครื่องซีลมือ (แบบอิมพัลส์)',
    heroSubtitle: 'เครื่องซีลมือแบบอิมพัลส์ที่เชื่อถือได้และประหยัดพลังงาน สำหรับซีลถุงพลาสติกที่ใช้ในอาหาร เครื่องเขียน อิเล็กทรอนิกส์ เครื่องมือและของใช้ในชีวิตประจำวัน รองรับ LLDPE, PVC, OPP, PP และ POF',
    featuresTitle: 'คุณสมบัติหลัก',
    features: [
      'ความร้อนแบบอิมพัลส์ชั่วคราว — ให้ความร้อนเฉพาะขณะซีล ประหยัดไฟ',
      'ตัวควบคุมเวลาและอุณหภูมิที่ปรับได้ เพื่อคุณภาพการซีลที่สม่ำเสมอ',
      'ใช้งานคนเดียว — รวดเร็ว เรียบง่าย และออกแบบตามหลักการยศาสตร์',
      'บำรุงรักษาง่าย มีชิ้นส่วนทดแทนพร้อมจำหน่าย',
      'ออกแบบกะทัดรัดและเบา ใช้งานบนโต๊ะหรือพกพาได้',
      'รองรับไฟ 110V และ 220V',
    ],
    specsTitle: 'ข้อมูลจำเพาะทางเทคนิค',
    applicationsTitle: 'การใช้งาน',
    applications: ['บรรจุภัณฑ์อาหาร', 'เครื่องเขียนและอุปกรณ์สำนักงาน', 'อิเล็กทรอนิกส์และชิ้นส่วน', 'เครื่องมือและอุปกรณ์', 'ของใช้ประจำวัน', 'เครื่องสำอางและการดูแลส่วนตัว', 'อุปกรณ์การแพทย์', 'ชิ้นส่วนอุตสาหกรรม'],
    ctaTitle: 'ต้องการเครื่องซีลมือสำหรับสายการผลิตของคุณ? ติดต่อเราเพื่อขอราคาและข้อมูลเพิ่มเติม',
    ctaBtn: 'ขอใบเสนอราคา',
    packagingLabel: 'บรรจุภัณฑ์',
  },
  vi: {
    kicker: 'THIẾT BỊ DÁN KÍN',
    heroTitle: 'Máy hàn tay (loại xung)',
    heroSubtitle: 'Máy hàn tay xung điện đáng tin cậy, tiết kiệm năng lượng để hàn kín túi nhựa dùng trong thực phẩm, văn phòng phẩm, điện tử, phần cứng và đồ dùng hàng ngày. Tương thích LLDPE, PVC, OPP, PP, POF.',
    featuresTitle: 'Tính năng chính',
    features: [
      'Gia nhiệt xung tức thời — chỉ gia nhiệt khi hàn, tiết kiệm điện',
      'Bộ điều chỉnh thời gian và nhiệt độ để đảm bảo chất lượng hàn ổn định',
      'Vận hành một người — nhanh, đơn giản và tiện dụng',
      'Bảo trì dễ dàng với phụ tùng thay thế sẵn có',
      'Thiết kế nhỏ gọn, nhẹ cho bàn làm việc hoặc mang đi',
      'Có thể dùng điện 110V và 220V',
    ],
    specsTitle: 'Thông số kỹ thuật',
    applicationsTitle: 'Ứng dụng',
    applications: ['Đóng gói thực phẩm', 'Văn phòng phẩm', 'Linh kiện điện tử', 'Phần cứng và công cụ', 'Đồ dùng hàng ngày', 'Mỹ phẩm và chăm sóc cá nhân', 'Vật tư y tế', 'Linh kiện công nghiệp'],
    ctaTitle: 'Cần máy hàn tay cho dây chuyền sản xuất? Liên hệ chúng tôi để báo giá và tình trạng hàng.',
    ctaBtn: 'Nhận báo giá',
    packagingLabel: 'Đóng gói',
  },
  de: {
    kicker: 'VERSIEGELUNGSGERÄTE',
    heroTitle: 'Handschweißgerät (Impulstyp)',
    heroSubtitle: 'Zuverlässiges, energieeffizientes Impuls-Handschweißgerät zum Versiegeln von Plastikbeuteln für Lebensmittel, Schreibwaren, Elektronik, Heimwerkerbedarf und Haushaltswaren. Kompatibel mit LLDPE, PVC, OPP, PP und POF.',
    featuresTitle: 'Hauptmerkmale',
    features: [
      'Transientes Impulsheizen — heizt nur im Schweißmoment, spart Strom',
      'Einstellbarer Zeit- und Temperaturregler für gleichbleibende Schweißqualität',
      'Einpersonenbetrieb — schnell, einfach und ergonomisch',
      'Einfache Wartung mit leicht verfügbaren Ersatzheizelementen',
      'Kompaktes und leichtes Design für die Tischaufstellung oder den mobilen Einsatz',
      'Erhältlich in 110V- und 220V-Ausführung',
    ],
    specsTitle: 'Technische Daten',
    applicationsTitle: 'Anwendungen',
    applications: ['Lebensmittelverpackung', 'Schreibwaren & Bürobedarf', 'Elektronik & Komponenten', 'Heimwerkerbedarf & Werkzeuge', 'Haushaltswaren', 'Kosmetik & Körperpflege', 'Medizinisches Verbrauchsmaterial', 'Industrieteile'],
    ctaTitle: 'Benötigen Sie ein Handschweißgerät für Ihre Produktionslinie? Kontaktieren Sie uns für Preise und Verfügbarkeit.',
    ctaBtn: 'Angebot anfordern',
    packagingLabel: 'Verpackung',
  },
}

const SPEC_HEADERS = ['Model', 'Power', 'Electric Heating', 'Machine Size (L×W×H)', 'Machine Weight', 'Sealer Length', 'Sealer Width']
const SPEC_ROWS = [
  ['WS-20-1', '110V / 220V', '290W', '320×80×215 mm', '2.5 KG', '200 mm', '2 mm / 5 mm / Round'],
  ['WS-30-1', '110V / 220V', '370W', '430×80×255 mm', '3.3 KG', '300 mm', '2 mm / 5 mm / Round'],
  ['WS-40-1', '110V / 220V', '530W', '530×90×270 mm', '4.8 KG', '400 mm', '2 mm / 5 mm / Round'],
  ['WS-52-1', '110V / 220V', '600W', '650×90×280 mm', '6.0 KG', '520 mm', '2 mm / 5 mm / Round'],
]

const packagingLabels: Record<string, string> = {
  en: 'Packaging', cn: '包装机械', zh: '包裝機械', fr: 'Emballage', es: 'Embalaje',
  pt: 'Embalagem', ko: '포장', ja: '包装', ar: 'التغليف', th: 'บรรจุภัณฑ์', vi: 'Đóng gói', de: 'Verpackung',
}

export default async function HandSealerPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content['en']

  const productSchema = buildWuushengProductSchema({
    lang,
    slug: 'hand-sealer-impulse-type',
    name: metaTitles[lang] || metaTitles.en,
    description: metaDescs[lang] || metaDescs.en,
    image: PRODUCT_IMAGE,
    sku: 'WS-HAND-SEALER',
    priceLow: 35,
    priceHigh: 180,
    offerCount: 4,
    category: 'Impulse Heat Sealing Machines',
  })

  return (
    <>
      <JsonLd data={[productSchema]} />
      <PageHero
        kicker={t.kicker}
        title={t.heroTitle}
        desc={t.heroSubtitle}
        image={{ src: PRODUCT_IMAGE, alt: t.heroTitle, priority: true, aspectClassName: 'aspect-[16/9]' }}
      />
      <section className="bg-white py-6">
        <Container className="max-w-6xl">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: BREADCRUMB_LABELS[lang]?.machinery ?? 'Machinery', href: `/${lang}/machinery` },
              { label: packagingLabels[lang] ?? 'Packaging', href: `/${lang}/machinery/packaging` },
              { label: t.heroTitle, href: `/${lang}/machines/hand-sealer-impulse-type` },
            ]}
          />
        </Container>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product image */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={PRODUCT_IMAGE}
                alt={t.heroTitle}
                width={800}
                height={600}
                unoptimized
                className="h-full w-full object-contain p-8"
              />
            </div>
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">{t.featuresTitle}</h2>
              <ul className="mt-6 space-y-4">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm leading-relaxed sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Specs Table */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">{t.specsTitle}</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-brand-950 text-white">
                <tr>
                  {SPEC_HEADERS.map((h, i) => (
                    <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SPEC_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-sm text-gray-700">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">{t.applicationsTitle}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {t.applications.map((a, i) => (
              <span key={i} className="rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700 ring-1 ring-accent-200">{a}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-950 py-16 sm:py-20">
        <Container className="max-w-4xl text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">{t.ctaTitle}</h2>
          <div className="mt-8">
            <ButtonLink href={`/${lang}/contact`} size="lg">{t.ctaBtn}</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
