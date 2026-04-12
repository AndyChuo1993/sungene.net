import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, BREADCRUMB_LABELS } from '@/lib/seo'
import Image from 'next/image'

const PRODUCT_IMAGE = 'https://img.mweb.com.tw/thumb/758/1000x1000/product/01_Sealer/03_Foot_Sealer_Impulse_Type/Foot_Sealer_Impulse_Type.jpg'

const metaTitles: Record<string, string> = {
  en: 'Foot Sealer (Impulse Type) | Hands-Free Pedal-Operated Bag Sealer',
  cn: '脚踏式封口机 | 双手解放的脉冲封口机',
  zh: '腳踏式封口機 | 雙手解放的脈衝封口機',
  fr: 'Soudeuse à pédale (type impulsion) | Mains libres',
  es: 'Selladora de pedal (tipo impulso) | Manos libres',
  pt: 'Seladora de pedal (tipo impulso) | Mãos livres',
  ko: '발 페달 실러 (임펄스 타입) | 핸즈프리 봉지 실러',
  ja: 'フットシーラー（インパルス式）| ハンズフリーペダル操作',
  ar: 'ختام القدم (نوع النبضة) | تشغيل بالقدم بدون أيدي',
  th: 'เครื่องซีลเท้าเหยียบ (แบบอิมพัลส์) | ปลดแขนทั้งสองข้าง',
  vi: 'Máy hàn chân (loại xung) | Vận hành rảnh tay',
  de: 'Fußschweißgerät (Impulstyp) | Freihändig bedienbar',
}

const metaDescs: Record<string, string> = {
  en: 'Foot-operated impulse bag sealer for high-throughput packaging. Both hands free to hold and position bags. Sealing lengths 300–750mm. Suitable for food, electronics, hardware, and daily necessities.',
  cn: '脚踏式脉冲封口机，双手可自由持袋与对位，适合高效包装场景，封口长度300-750mm，适用于食品、电子、五金及日用品。',
  zh: '腳踏式脈衝封口機，雙手可自由持袋與對位，適合高效包裝場景，封口長度300-750mm，適用於食品、電子、五金及日用品。',
  fr: 'Soudeuse à pédale par impulsion pour emballages à haut débit. Mains libres pour tenir et positionner les sacs. Longueurs 300–750 mm.',
  es: 'Selladora de bolsas por impulso operada con pedal para embalaje de alto rendimiento. Manos libres para sostener y posicionar bolsas. Longitudes 300–750 mm.',
  pt: 'Seladora de sacos por impulso operada por pedal para embalagem de alta produtividade. Mãos livres para segurar e posicionar os sacos. Comprimentos 300–750 mm.',
  ko: '고처리량 포장을 위한 발 페달 임펄스 봉지 실러. 양손이 자유로워 봉지를 잡고 위치 조정 가능. 실링 길이 300~750mm.',
  ja: '高スループット包装向けフットペダルインパルスシーラー。両手が自由になり袋の保持・位置合わせが容易。封口長300〜750mm。',
  ar: 'جهاز ختم أكياس بالقدم بالنبضات للتغليف عالي الإنتاجية. كلا اليدين حرتان لحمل الأكياس وتحديد مواضعها. أطوال 300–750 مم.',
  th: 'เครื่องซีลถุงแบบเหยียบเท้าระบบอิมพัลส์สำหรับงานบรรจุภัณฑ์ปริมาณมาก ทั้งสองมือว่างเพื่อจับและจัดตำแหน่งถุง ความยาวซีล 300-750 มม.',
  vi: 'Máy hàn túi xung điện điều khiển bằng chân cho đóng gói hiệu suất cao. Hai tay tự do giữ và định vị túi. Chiều dài hàn 300–750mm.',
  de: 'Fußbetätigter Impuls-Beutelschweißer für die Hochleistungsverpackung. Beide Hände frei zum Halten und Positionieren der Beutel. Schweißlängen 300–750 mm.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/foot-sealer-impulse-type',
    type: 'website',
    keywords: ['foot sealer', 'pedal sealer', 'impulse foot sealer', 'hands-free bag sealer', 'Wuu Sheng', 'Taiwan foot sealer'],
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
}

const content: Record<string, PageContent> = {
  en: {
    kicker: 'SEALING EQUIPMENT',
    heroTitle: 'Foot Sealer (Impulse Type)',
    heroSubtitle: 'A floor-standing, foot-pedal operated impulse sealer that frees both hands for holding, aligning, and positioning bags. Ideal for operators sealing large volumes continuously. Available in 300mm to 750mm sealing lengths.',
    featuresTitle: 'Key Features',
    features: [
      'Foot pedal operation — both hands free to position and guide bags precisely',
      'Transient impulse heating for fast, clean, energy-efficient seals',
      'Adjustable time and temperature for different film thicknesses',
      'Floor-standing unit with stable base — no table required',
      'Available in 300mm, 450mm, 600mm, and 750mm sealing lengths',
      'Sealing width 2.7mm or 5mm options',
      'Suitable for LLDPE, PVC, OPP, PP, and POF films',
      'Easy one-person operation and simple maintenance',
    ],
    specsTitle: 'Technical Specifications',
    applicationsTitle: 'Applications',
    applications: ['Food packaging lines', 'Bakery & fresh produce', 'Electronics assembly', 'Hardware distribution', 'Pharmaceuticals', 'Textile & garment', 'Retail & e-commerce', 'Industrial parts bagging'],
    ctaTitle: 'Want to free up your operators\' hands? Ask about the foot sealer for your production floor.',
    ctaBtn: 'Get a Quote',
  },
  cn: {
    kicker: '封口设备',
    heroTitle: '脚踏式封口机',
    heroSubtitle: '落地式脚踏操作脉冲封口机，双手可自由持袋、对位，适合大批量连续封口场景。封口长度从300mm至750mm，满足不同宽度袋型需求。',
    featuresTitle: '主要特点',
    features: [
      '脚踏操作——双手自由精准持袋定位',
      '瞬间脉冲加热，封口快速整洁，省电',
      '时间与温度可调，适应不同薄膜厚度',
      '落地式稳固底座，无需桌面',
      '封口长度可选300mm、450mm、600mm及750mm',
      '封口宽度2.7mm或5mm可选',
      '适合LLDPE、PVC、OPP、PP及POF薄膜',
      '单人操作，维护简便',
    ],
    specsTitle: '技术规格',
    applicationsTitle: '应用领域',
    applications: ['食品包装线', '烘焙与生鲜', '电子装配', '五金配送', '医药', '纺织服装', '零售与电商', '工业零件装袋'],
    ctaTitle: '想解放操作员的双手？了解脚踏封口机如何提升生产效率。',
    ctaBtn: '获取报价',
  },
  zh: {
    kicker: '封口設備',
    heroTitle: '腳踏式封口機',
    heroSubtitle: '落地式腳踏操作脈衝封口機，雙手可自由持袋、對位，適合大批量連續封口場景。封口長度從300mm至750mm，滿足不同寬度袋型需求。',
    featuresTitle: '主要特點',
    features: [
      '腳踏操作——雙手自由精準持袋定位',
      '瞬間脈衝加熱，封口快速整潔，省電',
      '時間與溫度可調，適應不同薄膜厚度',
      '落地式穩固底座，無需桌面',
      '封口長度可選300mm、450mm、600mm及750mm',
      '封口寬度2.7mm或5mm可選',
      '適合LLDPE、PVC、OPP、PP及POF薄膜',
      '單人操作，維護簡便',
    ],
    specsTitle: '技術規格',
    applicationsTitle: '應用領域',
    applications: ['食品包裝線', '烘焙與生鮮', '電子裝配', '五金配送', '醫藥', '紡織服裝', '零售與電商', '工業零件裝袋'],
    ctaTitle: '想解放操作員的雙手？了解腳踏封口機如何提升生產效率。',
    ctaBtn: '取得報價',
  },
  fr: {
    kicker: 'ÉQUIPEMENT DE SCELLAGE',
    heroTitle: 'Soudeuse à pédale (type impulsion)',
    heroSubtitle: 'Soudeuse à impulsion sur pied, commandée par pédale, libérant les deux mains pour tenir, aligner et positionner les sacs. Idéale pour les opérateurs scellant de grands volumes en continu. Disponible de 300 à 750 mm.',
    featuresTitle: 'Caractéristiques principales',
    features: [
      'Commande au pied — deux mains libres pour positionner les sacs',
      'Chauffage par impulsion transitoire pour des soudures rapides, nettes et économes',
      'Temps et température réglables pour différentes épaisseurs de film',
      'Unité sur pied avec base stable — pas de table requise',
      'Longueurs 300, 450, 600 et 750 mm',
      'Largeurs de soudure 2,7 mm ou 5 mm',
      'Compatible LLDPE, PVC, OPP, PP et POF',
      'Une seule personne suffit, entretien simple',
    ],
    specsTitle: 'Spécifications techniques',
    applicationsTitle: 'Applications',
    applications: ['Lignes emballage alimentaire', 'Boulangerie et produits frais', 'Assemblage électronique', 'Distribution quincaillerie', 'Pharmaceutique', 'Textile et habillement', 'Retail et e-commerce', 'Ensachage pièces industrielles'],
    ctaTitle: 'Souhaitez-vous libérer les mains de vos opérateurs ? Demandez-nous notre soudeuse à pédale.',
    ctaBtn: 'Demander un devis',
  },
  es: {
    kicker: 'EQUIPO DE SELLADO',
    heroTitle: 'Selladora de pedal (tipo impulso)',
    heroSubtitle: 'Selladora de impulso de piso, operada con pedal, que libera ambas manos para sostener, alinear y posicionar bolsas. Ideal para operadores que sellan grandes volúmenes continuamente. Disponible de 300 a 750 mm.',
    featuresTitle: 'Características principales',
    features: [
      'Operación con pedal — ambas manos libres para posicionar bolsas con precisión',
      'Calentamiento por impulso transitorio para sellos rápidos, limpios y eficientes',
      'Tiempo y temperatura ajustables para diferentes espesores de film',
      'Unidad de piso con base estable — no requiere mesa',
      'Longitudes de sellado 300, 450, 600 y 750 mm',
      'Opciones de ancho de sellado 2.7mm o 5mm',
      'Compatible con LLDPE, PVC, OPP, PP y POF',
      'Operación por una persona, mantenimiento sencillo',
    ],
    specsTitle: 'Especificaciones técnicas',
    applicationsTitle: 'Aplicaciones',
    applications: ['Líneas de empaque de alimentos', 'Panadería y productos frescos', 'Ensamblaje electrónico', 'Distribución de ferretería', 'Farmacéutico', 'Textil y confección', 'Retail y e-commerce', 'Enbolsado de piezas industriales'],
    ctaTitle: '¿Quiere liberar las manos de sus operadores? Consulte sobre la selladora de pedal.',
    ctaBtn: 'Solicitar cotización',
  },
  pt: {
    kicker: 'EQUIPAMENTO DE SELAGEM',
    heroTitle: 'Seladora de pedal (tipo impulso)',
    heroSubtitle: 'Seladora por impulso de chão, acionada por pedal, que libera ambas as mãos para segurar, alinhar e posicionar sacos. Ideal para operadores que selam grandes volumes continuamente. Disponível de 300 a 750 mm.',
    featuresTitle: 'Principais características',
    features: [
      'Operação por pedal — ambas as mãos livres para posicionar sacos',
      'Aquecimento por impulso transitório para selagens rápidas e limpas',
      'Tempo e temperatura ajustáveis para diferentes espessuras de filme',
      'Unidade de chão com base estável — sem necessidade de mesa',
      'Comprimentos de selagem 300, 450, 600 e 750 mm',
      'Largura de selagem 2,7 mm ou 5 mm',
      'Compatível com LLDPE, PVC, OPP, PP e POF',
      'Operação por uma pessoa, manutenção simples',
    ],
    specsTitle: 'Especificações técnicas',
    applicationsTitle: 'Aplicações',
    applications: ['Linhas de embalagem de alimentos', 'Padaria e hortifruti', 'Montagem eletrônica', 'Distribuição de ferragens', 'Farmacêutico', 'Têxtil e confecção', 'Varejo e e-commerce', 'Ensaque de peças industriais'],
    ctaTitle: 'Quer liberar as mãos dos seus operadores? Pergunte-nos sobre a seladora de pedal.',
    ctaBtn: 'Solicitar orçamento',
  },
  ko: {
    kicker: '실링 장비',
    heroTitle: '발 페달 실러 (임펄스 타입)',
    heroSubtitle: '바닥 설치형 발 페달 임펄스 실러로 양손이 자유로워져 봉지를 잡고 정렬하는 데 집중할 수 있습니다. 대량 연속 실링 작업에 이상적이며 실링 길이 300~750mm를 지원합니다.',
    featuresTitle: '주요 특징',
    features: [
      '발 페달 조작 — 양손이 자유로워 봉지를 정확히 위치 조정 가능',
      '순간 임펄스 가열로 빠르고 깔끔한 에너지 효율적 실링',
      '필름 두께에 맞게 시간 및 온도 조절 가능',
      '바닥 설치형으로 테이블 불필요',
      '실링 길이 300mm, 450mm, 600mm, 750mm 지원',
      '실링 폭 2.7mm 또는 5mm 옵션',
      'LLDPE, PVC, OPP, PP, POF 필름 호환',
      '1인 조작, 간편 유지보수',
    ],
    specsTitle: '기술 사양',
    applicationsTitle: '적용 분야',
    applications: ['식품 포장 라인', '베이커리·신선식품', '전자부품 조립', '철물 유통', '의약품', '섬유·의류', '소매·전자상거래', '산업용 부품 백'],
    ctaTitle: '작업자의 양손을 자유롭게 하고 싶으신가요? 발 페달 실러를 문의해 보세요.',
    ctaBtn: '견적 받기',
  },
  ja: {
    kicker: 'シーリング機器',
    heroTitle: 'フットシーラー（インパルス式）',
    heroSubtitle: 'フロア設置型のフットペダル操作インパルスシーラー。両手が自由になり袋の保持・整列・位置合わせに集中できます。大量連続シールに最適。封口長300〜750mm対応。',
    featuresTitle: '主な特長',
    features: [
      'フットペダル操作 — 袋の保持・位置合わせに両手を使用可能',
      '瞬間インパルス加熱で高速・クリーン・省エネなシール',
      'フィルム厚みに応じた時間・温度調整',
      'フロア設置型で安定 — テーブル不要',
      '封口長300・450・600・750mm対応',
      'シール幅2.7mmまたは5mm選択可',
      'LLDPE、PVC、OPP、PP、POFフィルム対応',
      '一人操作・メンテナンス容易',
    ],
    specsTitle: '技術仕様',
    applicationsTitle: '適用分野',
    applications: ['食品包装ライン', 'ベーカリー・生鮮食品', '電子部品組立', '金物流通', '医薬品', '繊維・アパレル', '小売・EC', '工業用部品袋詰め'],
    ctaTitle: '作業者の両手を解放したい？フットシーラーについてお問い合わせください。',
    ctaBtn: '見積もりを依頼',
  },
  ar: {
    kicker: 'معدات الختم',
    heroTitle: 'ختام القدم (نوع النبضة)',
    heroSubtitle: 'جهاز ختم بالنبضات مثبت على الأرضية يُشغَّل بالقدم، مما يحرر كلتا اليدين لحمل الأكياس ومحاذاتها وتحديد مواضعها. مثالي للمشغلين الذين يختمون كميات كبيرة بشكل متواصل. متوفر من 300 إلى 750 مم.',
    featuresTitle: 'الميزات الرئيسية',
    features: [
      'تشغيل بالقدم — كلتا اليدين حرتان لتحديد مواضع الأكياس بدقة',
      'تسخين نبضي عابر لختم سريع ونظيف وموفر للطاقة',
      'وقت وحرارة قابلان للضبط لأسماك أغشية مختلفة',
      'وحدة أرضية بقاعدة ثابتة — لا تحتاج طاولة',
      'أطوال 300 و450 و600 و750 مم',
      'عرض الختم 2.7 مم أو 5 مم',
      'متوافق مع LLDPE وPVC وOPP وPP وPOF',
      'تشغيل بشخص واحد، صيانة سهلة',
    ],
    specsTitle: 'المواصفات التقنية',
    applicationsTitle: 'التطبيقات',
    applications: ['خطوط تغليف الأغذية', 'المخابز والمنتجات الطازجة', 'تجميع الإلكترونيات', 'توزيع الأدوات', 'الصناعات الدوائية', 'المنسوجات والملابس', 'التجزئة والتجارة الإلكترونية', 'تعبئة القطع الصناعية'],
    ctaTitle: 'هل تريد تحرير أيدي المشغلين؟ استفسر عن ختام القدم لخط إنتاجك.',
    ctaBtn: 'طلب عرض سعر',
  },
  th: {
    kicker: 'อุปกรณ์ซีล',
    heroTitle: 'เครื่องซีลเท้าเหยียบ (แบบอิมพัลส์)',
    heroSubtitle: 'เครื่องซีลแบบอิมพัลส์ตั้งพื้นควบคุมด้วยเท้า ช่วยให้มือทั้งสองข้างว่างเพื่อจับ จัดเรียง และวางตำแหน่งถุงได้อย่างแม่นยำ เหมาะสำหรับงานที่ต้องซีลปริมาณมากต่อเนื่อง รองรับความยาว 300-750 มม.',
    featuresTitle: 'คุณสมบัติหลัก',
    features: [
      'ควบคุมด้วยเท้า — มือทั้งสองว่างเพื่อจัดตำแหน่งถุงได้แม่นยำ',
      'ความร้อนแบบอิมพัลส์ชั่วคราว ซีลเร็ว สะอาด ประหยัดพลังงาน',
      'ปรับเวลาและอุณหภูมิได้ตามความหนาของฟิล์ม',
      'ตั้งพื้น ฐานมั่นคง ไม่ต้องใช้โต๊ะ',
      'ความยาวซีล 300, 450, 600 และ 750 มม.',
      'ความกว้างซีล 2.7 มม. หรือ 5 มม.',
      'รองรับ LLDPE, PVC, OPP, PP, POF',
      'ใช้คนเดียว บำรุงรักษาง่าย',
    ],
    specsTitle: 'ข้อมูลจำเพาะทางเทคนิค',
    applicationsTitle: 'การใช้งาน',
    applications: ['สายการบรรจุอาหาร', 'เบเกอรี่และสินค้าสด', 'ประกอบชิ้นส่วนอิเล็กทรอนิกส์', 'จัดจำหน่ายเครื่องมือ', 'เภสัชกรรม', 'สิ่งทอและเสื้อผ้า', 'ค้าปลีกและอีคอมเมิร์ซ', 'บรรจุชิ้นส่วนอุตสาหกรรม'],
    ctaTitle: 'ต้องการให้มือของผู้ปฏิบัติงานว่างมากขึ้น? สอบถามเกี่ยวกับเครื่องซีลเท้าเหยียบ',
    ctaBtn: 'ขอใบเสนอราคา',
  },
  vi: {
    kicker: 'THIẾT BỊ DÁN KÍN',
    heroTitle: 'Máy hàn chân (loại xung)',
    heroSubtitle: 'Máy hàn xung điện đứng sàn, điều khiển bằng chân, giải phóng cả hai tay để giữ, căn chỉnh và định vị túi. Lý tưởng cho những nơi hàn liên tục khối lượng lớn. Có các chiều dài hàn từ 300 đến 750mm.',
    featuresTitle: 'Tính năng chính',
    features: [
      'Điều khiển bằng chân — hai tay tự do để định vị túi chính xác',
      'Gia nhiệt xung tức thời cho đường hàn nhanh, sạch, tiết kiệm điện',
      'Điều chỉnh thời gian và nhiệt độ cho các độ dày màng khác nhau',
      'Đứng sàn với đế ổn định — không cần bàn',
      'Chiều dài hàn 300, 450, 600 và 750mm',
      'Chiều rộng đường hàn 2.7mm hoặc 5mm',
      'Tương thích LLDPE, PVC, OPP, PP, POF',
      'Vận hành một người, bảo trì đơn giản',
    ],
    specsTitle: 'Thông số kỹ thuật',
    applicationsTitle: 'Ứng dụng',
    applications: ['Dây chuyền đóng gói thực phẩm', 'Bánh mì và rau củ tươi', 'Lắp ráp điện tử', 'Phân phối phần cứng', 'Dược phẩm', 'Dệt may', 'Bán lẻ và thương mại điện tử', 'Đóng túi linh kiện công nghiệp'],
    ctaTitle: 'Muốn giải phóng tay cho công nhân? Hỏi về máy hàn chân cho dây chuyền sản xuất.',
    ctaBtn: 'Nhận báo giá',
  },
  de: {
    kicker: 'VERSIEGELUNGSGERÄTE',
    heroTitle: 'Fußschweißgerät (Impulstyp)',
    heroSubtitle: 'Bodenstehendes, fußpedalgesteuertes Impulsschweißgerät, das beide Hände zum Halten, Ausrichten und Positionieren von Beuteln freilässt. Ideal für Bediener, die kontinuierlich große Mengen verschweißen. Schweißlängen 300–750 mm.',
    featuresTitle: 'Hauptmerkmale',
    features: [
      'Fußpedalsteuerung — beide Hände frei für präzises Beutelpositionieren',
      'Transientes Impulsheizen für schnelle, saubere, energiesparende Schweißnähte',
      'Einstellbare Zeit und Temperatur für verschiedene Folienstärken',
      'Bodenstehend mit stabilem Fuß — kein Tisch erforderlich',
      'Schweißlängen 300, 450, 600 und 750 mm',
      'Schweißbreite 2,7 mm oder 5 mm',
      'Kompatibel mit LLDPE, PVC, OPP, PP und POF',
      'Einpersonenbetrieb, einfache Wartung',
    ],
    specsTitle: 'Technische Daten',
    applicationsTitle: 'Anwendungen',
    applications: ['Lebensmittelverpackungslinien', 'Bäckerei & Frischprodukte', 'Elektronikmontage', 'Heimwerkerdistribution', 'Pharmazie', 'Textil & Bekleidung', 'Einzelhandel & E-Commerce', 'Industrieteile-Abpackung'],
    ctaTitle: 'Möchten Sie die Hände Ihrer Bediener freihalten? Fragen Sie nach dem Fußschweißgerät für Ihre Produktion.',
    ctaBtn: 'Angebot anfordern',
  },
}

const SPEC_HEADERS = ['Model', 'Power', 'Electric Heating', 'Machine Size (L×W×H)', 'Machine Weight', 'Sealer Length', 'Sealer Width']
const SPEC_ROWS = [
  ['WS-30', '110V / 220V', '450W', '38×34×88 cm', '16 KG', '300 mm', '2.7 mm / 5 mm'],
  ['WS-45', '110V / 220V', '600W', '53×34×88 cm', '18 KG', '450 mm', '2.7 mm / 5 mm'],
  ['WS-60', '110V / 220V', '800W', '68×34×88 cm', '19.5 KG', '600 mm', '2.7 mm / 5 mm'],
  ['WS-75', '110V / 220V', '1000W', '83×34×88 cm', '21 KG', '750 mm', '2.7 mm / 5 mm'],
]

const packagingLabels: Record<string, string> = {
  en: 'Packaging', cn: '包装机械', zh: '包裝機械', fr: 'Emballage', es: 'Embalaje',
  pt: 'Embalagem', ko: '포장', ja: '包装', ar: 'التغليف', th: 'บรรจุภัณฑ์', vi: 'Đóng gói', de: 'Verpackung',
}

export default async function FootSealerPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content['en']

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: metaTitles[lang] || metaTitles.en,
    description: metaDescs[lang] || metaDescs.en,
    image: PRODUCT_IMAGE,
    brand: { '@type': 'Brand', name: 'Wuu Sheng' },
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'SunGene' } },
  }

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
          <Breadcrumbs lang={lang} items={[
            { label: BREADCRUMB_LABELS[lang]?.machinery ?? 'Machinery', href: `/${lang}/machinery` },
            { label: packagingLabels[lang] ?? 'Packaging', href: `/${lang}/machinery/packaging` },
            { label: t.heroTitle, href: `/${lang}/machines/foot-sealer-impulse-type` },
          ]} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100">
              <Image src={PRODUCT_IMAGE} alt={t.heroTitle} width={800} height={600} unoptimized className="h-full w-full object-contain p-8" />
            </div>
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

      <section className="bg-gray-50 py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">{t.specsTitle}</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-brand-950 text-white">
                <tr>{SPEC_HEADERS.map((h, i) => <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SPEC_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                    {row.map((cell, j) => <td key={j} className="px-4 py-3 text-sm text-gray-700">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

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
