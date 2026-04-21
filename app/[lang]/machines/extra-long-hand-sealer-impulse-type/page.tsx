import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, BREADCRUMB_LABELS } from '@/lib/seo'
import { buildWuushengProductSchema } from '@/lib/productSchema'
import MachineDecisionGuide from '@/components/machines/MachineDecisionGuide'
import Image from 'next/image'

const PRODUCT_IMAGE = 'https://img.mweb.com.tw/thumb/758/1000x1000/product/01_Sealer/02_Extra_Long_Hand_Sealer_Impulse_Type/Extra_Long_Hand_Sealer_Impulse_Type.jpg'

const metaTitles: Record<string, string> = {
  en: 'Extra-Long Sealing Configuration Route | Wide-Bag Control Planning',
  cn: '超长封口配置路线 | 大袋封口控制规划',
  zh: '超長封口配置路線 | 大袋封口控制規劃',
  fr: 'Soudeuse à main extra longue | Sourcing pour sacs grand format',
  es: 'Selladora de mano extra larga | Abastecimiento para bolsas grandes',
  pt: 'Seladora manual extra longa | Sourcing para sacos de grande porte',
  ko: '엑스트라 롱 수동 실러 | 대형 봉투 실링 기술 소싱',
  ja: '超長尺ハンドシーラー | 大型袋シーリングの技術ソーシング',
  ar: 'جهاز ختم يدوي طويل جدًا | التوريد التقني لختم الأكياس الكبيرة',
  th: 'เครื่องซีลมือแบบยาวพิเศษ | การจัดซื้อเชิงเทคนิคสำหรับการซีลถุงขนาดใหญ่',
  vi: 'Máy hàn tay cực dài | Đánh giá nguồn cung cho hàn túi khổ lớn',
  de: 'Extra langes Handschweißgerät | Sourcing für große Beutelversiegelung',
}

const metaDescs: Record<string, string> = {
  en: 'Extra-long sealing sourcing support: verify heat consistency across wide widths, confirm film compatibility, and align acceptance/spare-part scope before approval.',
  cn: '超长封口采购支持：验证宽幅加热一致性、确认膜材兼容，并在核准前对齐验收与备件范围。',
  zh: '超長封口採購支援：驗證寬幅加熱一致性、確認膜材相容，並在核准前對齊驗收與備件範圍。',
  fr: 'Sourcing professionnel pour soudeuses à main extra longues. Validation technique des longueurs 450–750 mm pour emballages industriels grand format.',
  es: 'Abastecimiento profesional para selladoras de mano extra largas. Evaluación técnica para longitudes de 450–750 mm y empaques industriales sobredimensionados.',
  pt: 'Sourcing profissional para seladoras manuais extra longas. Validação técnica para comprimentos de 450–750 mm e embalagens industriais de grande porte.',
  ko: '엑스트라 롱 임펄스 수동 실러 전문 소싱. 넓은 봉투 및 대형 산업용 포장의 일관된 실링을 보장하기 위해 450~750mm 실링 길이에 대한 기술 심사를 제공합니다.',
  ja: '超長尺インパルスハンドシーラーの専門ソーシング。幅広袋や大型工業用包装の安定したシールを実現するため、450〜750mmの封口長に関する技術審査を提供します。',
  ar: 'توريد احترافي لأجهزة ختم الأكياس اليدوية الطويلة جدًا. نحن نقدم تدقيقًا فنيًا لأطوال الختم من 450 إلى 750 مم لضمان ختم ثابت للأكياس العريضة.',
  th: 'การจัดซื้อระดับมืออาชีพสำหรับเครื่องซีลมือแบบยาวพิเศษ เราให้บริการตรวจสอบทางเทคนิคสำหรับความยาวซีล 450-750 มม. เพื่อความสม่ำเสมอในการซีลถุงขนาดใหญ่พิเศษ',
  vi: 'Nguồn cung chuyên nghiệp cho máy hàn tay xung điện cực dài. Thẩm định kỹ thuật cho chiều dài hàn 450–750mm để đảm bảo đường hàn ổn định cho túi khổ lớn.',
  de: 'Professionelles Sourcing für extra lange Impuls-Handschweißgeräte. Technische Prüfung der 450–750 mm Schweißlängen für breite Beutel und Industrieverpackungen.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/extra-long-hand-sealer-impulse-type',
    type: 'website',
    keywords: ['extra-long sealing configuration', 'wide-bag sealing consistency', 'film compatibility', 'acceptance checklist', 'spare parts planning', 'supplier vetting', 'documentation handoff'],
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
    heroTitle: 'Extra Long Hand Sealer (Impulse Type)',
    heroSubtitle: 'Designed for wide bags and oversized packaging, this extra long impulse hand sealer provides clean, consistent seals up to 750mm. Optional cutting knife makes it a two-in-one seal-and-cut tool. Compatible with LLDPE, PVC, OPP, PP, and POF films.',
    featuresTitle: 'Key Features',
    features: [
      'Electronic impulse control — precise and easy to operate',
      'Sealing lengths of 450mm, 600mm, and 750mm for wide-format bags',
      'Optional integrated cutting knife for seal-and-cut in one operation',
      'Powder-coat painted steel frame for durability and corrosion resistance',
      'Easy maintenance design with replaceable heating elements',
      'Maximum sealing temperature up to 250°C for thick or multi-layer films',
      'Available in 110V and 220V configurations',
    ],
    specsTitle: 'Technical Specifications',
    applicationsTitle: 'Applications',
    applications: ['Wide bag sealing', 'Textile & fabric packaging', 'Industrial parts bags', 'Large food portions', 'Oversized retail packaging', 'Agricultural supplies', 'Construction materials', 'Export packaging'],
    ctaTitle: 'Dealing with oversized bags? Request a professional sourcing assessment for our extra long sealer range.',
    ctaBtn: 'Get Sourcing Assessment',
  },
  cn: {
    kicker: '封口设备',
    heroTitle: '特长手压式封口机',
    heroSubtitle: '专为宽袋及大尺寸包装设计，封口长度最长达750mm，封口效果整洁美观。可选配切刀，实现封口裁切一步完成。兼容LLDPE、PVC、OPP、PP及POF薄膜。',
    featuresTitle: '主要特点',
    features: [
      '电子脉冲控制——精准易操作',
      '封口长度450mm、600mm及750mm，适合大宽度袋型',
      '可选集成切刀，一步完成封口裁切',
      '喷粉涂装钢架，耐用防腐',
      '易维护，发热元件可替换',
      '最高封口温度达250°C，适合厚膜或多层膜',
      '支持110V和220V双电压',
    ],
    specsTitle: '技术规格',
    applicationsTitle: '应用领域',
    applications: ['宽袋封口', '纺织品包装', '工业零件袋', '大份量食品', '大型零售包装', '农业用品', '建材包装', '出口包装'],
    ctaTitle: '处理超大尺寸包装袋？申请专业采购评估，了解我们的特长封口机系列。',
    ctaBtn: '获取采购评估',
  },
  zh: {
    kicker: '封口設備',
    heroTitle: '特長手壓式封口機',
    heroSubtitle: '專為寬袋及大尺寸包裝設計，封口長度最長達750mm，封口效果整潔美觀。可選配切刀，實現封口裁切一步完成。相容LLDPE、PVC、OPP、PP及POF薄膜。',
    featuresTitle: '主要特點',
    features: [
      '電子脈衝控制——精準易操作',
      '封口長度450mm、600mm及750mm，適合大寬度袋型',
      '可選集成切刀，一步完成封口裁切',
      '噴粉塗裝鋼架，耐用防腐',
      '易維護，發熱元件可替換',
      '最高封口溫度達250°C，適合厚膜或多層膜',
      '支援110V和220V雙電壓',
    ],
    specsTitle: '技術規格',
    applicationsTitle: '應用領域',
    applications: ['寬袋封口', '紡織品包裝', '工業零件袋', '大份量食品', '大型零售包裝', '農業用品', '建材包裝', '出口包裝'],
    ctaTitle: '處理超大尺寸包裝袋？申請專業採購評估，了解我們的特長封口機系列。',
    ctaBtn: '獲取採購評估',
  },
  fr: {
    kicker: 'ÉQUIPEMENT DE SCELLAGE',
    heroTitle: 'Soudeuse à main extra-longue (type impulsion)',
    heroSubtitle: 'Conçue pour les grands sacs et emballages surdimensionnés, cette soudeuse à impulsion extra-longue offre des soudures nettes jusqu\'à 750 mm. Couteau coupeur en option pour sceller et couper en une seule opération.',
    featuresTitle: 'Caractéristiques principales',
    features: [
      'Commande électronique par impulsion — précise et facile à utiliser',
      'Longueurs de soudure 450, 600 et 750 mm pour grands sacs',
      'Couteau coupeur intégré en option pour scellage et découpe simultanés',
      'Cadre en acier peint par poudrage pour durabilité et résistance à la corrosion',
      'Entretien facile avec éléments chauffants remplaçables',
      'Température maximale jusqu\'à 250°C pour films épais ou multicouches',
      'Disponible en 110V et 220V',
    ],
    specsTitle: 'Spécifications techniques',
    applicationsTitle: 'Applications',
    applications: ['Scellage de grands sacs', 'Emballage textile', 'Sachets de pièces industrielles', 'Grandes portions alimentaires', 'Emballages retail grand format', 'Fournitures agricoles', 'Matériaux de construction', 'Emballage export'],
    ctaTitle: 'Vous traitez des sacs hors normes ? Demandez une évaluation de sourcing pour notre gamme extra longue.',
    ctaBtn: 'Obtenir une évaluation',
  },
  es: {
    kicker: 'EQUIPO DE SELLADO',
    heroTitle: 'Selladora de mano extra larga (tipo impulso)',
    heroSubtitle: 'Diseñada para bolsas anchas y embalajes grandes, esta selladora de mano extra larga por impulso proporciona sellos limpios y consistentes de hasta 750mm. Cuchilla cortadora opcional para sellar y cortar en una sola operación.',
    featuresTitle: 'Características principales',
    features: [
      'Control electrónico por impulso — preciso y fácil de operar',
      'Longitudes de sellado de 450, 600 y 750mm para bolsas anchas',
      'Cuchilla cortadora integrada opcional para sellado y corte simultáneos',
      'Marco de acero pintado en polvo para durabilidad y resistencia a la corrosión',
      'Fácil mantenimiento con elementos calefactores reemplazables',
      'Temperatura máxima hasta 250°C para films gruesos o multicapa',
      'Disponible en 110V y 220V',
    ],
    specsTitle: 'Especificaciones técnicas',
    applicationsTitle: 'Aplicaciones',
    applications: ['Sellado de bolsas anchas', 'Embalaje textil', 'Bolsas de piezas industriales', 'Porciones grandes de alimentos', 'Embalaje retail gran formato', 'Suministros agrícolas', 'Materiales de construcción', 'Embalaje de exportación'],
    ctaTitle: '¿Maneja bolsas de gran tamaño? Solicite una evaluación de abastecimiento para nuestra gama extra larga.',
    ctaBtn: 'Obtener evaluación',
  },
  pt: {
    kicker: 'EQUIPAMENTO DE SELAGEM',
    heroTitle: 'Seladora manual extra longa (tipo impulso)',
    heroSubtitle: 'Projetada para sacos largos e embalagens grandes, esta seladora manual por impulso extra longa proporciona selagens limpas de até 750mm. Faca de corte opcional para selar e cortar em uma única operação.',
    featuresTitle: 'Principais características',
    features: [
      'Controle eletrônico por impulso — preciso e fácil de operar',
      'Comprimentos de selagem de 450, 600 e 750mm para sacos largos',
      'Faca de corte integrada opcional para selagem e corte simultâneos',
      'Estrutura de aço pintada a pó para durabilidade e resistência à corrosão',
      'Fácil manutenção com elementos de aquecimento substituíveis',
      'Temperatura máxima até 250°C para filmes espessos ou multicamadas',
      'Disponível em 110V e 220V',
    ],
    specsTitle: 'Especificações técnicas',
    applicationsTitle: 'Aplicações',
    applications: ['Selagem de sacos largos', 'Embalagem têxtil', 'Sacos para peças industriais', 'Grandes porções de alimentos', 'Embalagem retail grande formato', 'Insumos agrícolas', 'Materiais de construção', 'Embalagem de exportação'],
    ctaTitle: 'Trabalha com sacos de grandes dimensões? Peça uma avaliação de sourcing para nossa linha extra longa.',
    ctaBtn: 'Obter avaliação',
  },
  ko: {
    kicker: '실링 장비',
    heroTitle: '특장형 수동 임펄스 실러',
    heroSubtitle: '넓은 봉지 및 대형 포장용으로 설계된 특장형 임펄스 수동 실러로 최대 750mm까지 깔끔한 실링을 제공합니다. 옵션 커팅 나이프로 실링과 절단을 한 번에 처리할 수 있습니다. LLDPE, PVC, OPP, PP, POF 필름 호환.',
    featuresTitle: '주요 특징',
    features: [
      '전자식 임펄스 제어 — 정밀하고 조작 용이',
      '450mm, 600mm, 750mm 실링 길이로 대형 봉지 대응',
      '옵션 통합 커팅 나이프로 실링+절단 원스톱 처리',
      '분체 도장 스틸 프레임으로 내구성 및 내부식성 확보',
      '발열체 교체 가능한 간편 유지보수 설계',
      '최대 250°C까지 지원하여 두꺼운 필름이나 복합 필름도 실링 가능',
      '110V 및 220V 모두 지원',
    ],
    specsTitle: '기술 사양',
    applicationsTitle: '적용 분야',
    applications: ['대형 봉지 실링', '섬유·직물 포장', '공업용 부품 백', '대용량 식품', '대형 소매 포장', '농자재', '건축자재 포장', '수출 포장'],
    ctaTitle: '대형 봉투를 처리하시나요? 엑스트라 롱 실러 제품군에 대한 전문 소싱 평가를 신청하세요.',
    ctaBtn: '소싱 평가 받기',
  },
  ja: {
    kicker: 'シーリング機器',
    heroTitle: '特長ハンドシーラー（インパルス式）',
    heroSubtitle: '大型袋・大寸法包装向けに設計された特長インパルスハンドシーラー。最大750mmの封口に対応。オプションのカッターで封口と切断を一度に行えます。LLDPE、PVC、OPP、PP、POFフィルム対応。',
    featuresTitle: '主な特長',
    features: [
      '電子インパルス制御 — 高精度・操作簡単',
      '封口長450・600・750mm対応、大型袋に最適',
      'オプションカッター付きで封口と切断を同時に実施可能',
      '粉体塗装鋼フレームで耐久性・耐食性を確保',
      '発熱体交換可能なメンテナンス性重視設計',
      '最高250°Cまで対応、厚膜・多層フィルムも封口可能',
      '110V・220V両対応',
    ],
    specsTitle: '技術仕様',
    applicationsTitle: '適用分野',
    applications: ['大型袋の封口', '繊維・布地の包装', '工業部品袋', '大容量食品', '大型小売包装', '農業資材', '建材包装', '輸出向け包装'],
    ctaTitle: '大型袋の封口でお困りですか？超長尺シーラーシリーズの専門ソーシング評価をご依頼ください。',
    ctaBtn: 'ソーシング評価を依頼',
  },
  ar: {
    kicker: 'معدات الختم',
    heroTitle: 'جهاز الختم اليدوي فائق الطول (نوع النبضة)',
    heroSubtitle: 'مصمم للأكياس الواسعة والتغليف الكبير الحجم، يوفر هذا الجهاز ختمًا نظيفًا وثابتًا حتى 750 مم. خيار سكين القطع لعملية ختم وقطع في خطوة واحدة. متوافق مع LLDPE وPVC وOPP وPP وPOF.',
    featuresTitle: 'الميزات الرئيسية',
    features: [
      'تحكم إلكتروني بالنبضات — دقيق وسهل الاستخدام',
      'أطوال الختم 450 و600 و750 مم للأكياس ذات العرض الكبير',
      'سكين قطع متكاملة اختيارية للختم والقطع في عملية واحدة',
      'إطار فولاذي مطلي بمسحوق للمتانة ومقاومة التآكل',
      'تصميم سهل الصيانة مع عناصر تسخين قابلة للاستبدال',
      'درجة حرارة قصوى حتى 250°C للأغشية السميكة أو متعددة الطبقات',
      'متاح بتوصيلات 110 فولت و220 فولت',
    ],
    specsTitle: 'المواصفات التقنية',
    applicationsTitle: 'التطبيقات',
    applications: ['ختم الأكياس الواسعة', 'تغليف المنسوجات', 'أكياس القطع الصناعية', 'كميات غذائية كبيرة', 'تغليف تجزئة كبير الحجم', 'مستلزمات زراعية', 'مواد البناء', 'تغليف التصدير'],
    ctaTitle: 'هل تتعامل مع أكياس ذات أحجام ضخمة؟ اطلب تقييم توريد لمجموعتنا الطويلة جدًا.',
    ctaBtn: 'طلب تقييم التوريد',
  },
  th: {
    kicker: 'อุปกรณ์ซีล',
    heroTitle: 'เครื่องซีลมือยาวพิเศษ (แบบอิมพัลส์)',
    heroSubtitle: 'ออกแบบมาสำหรับถุงขนาดกว้างและบรรจุภัณฑ์ขนาดใหญ่ รองรับการซีลได้ยาวถึง 750 มม. ออพชันใบมีดตัดสำหรับซีลและตัดพร้อมกันในขั้นตอนเดียว รองรับฟิล์ม LLDPE, PVC, OPP, PP และ POF',
    featuresTitle: 'คุณสมบัติหลัก',
    features: [
      'ควบคุมด้วยระบบอิมพัลส์อิเล็กทรอนิกส์ — แม่นยำและใช้งานง่าย',
      'ความยาวซีล 450, 600 และ 750 มม. สำหรับถุงขนาดกว้าง',
      'ออพชันใบมีดตัดในตัว ซีลและตัดในขั้นตอนเดียว',
      'โครงเหล็กเคลือบสีฝุ่น ทนทาน ป้องกันการกัดกร่อน',
      'ออกแบบให้บำรุงรักษาง่าย เปลี่ยนชิ้นส่วนทดแทนได้',
      'อุณหภูมิสูงสุดถึง 250°C สำหรับฟิล์มหนาหรือหลายชั้น',
      'รองรับไฟ 110V และ 220V',
    ],
    specsTitle: 'ข้อมูลจำเพาะทางเทคนิค',
    applicationsTitle: 'การใช้งาน',
    applications: ['ซีลถุงขนาดกว้าง', 'บรรจุภัณฑ์สิ่งทอ', 'ถุงชิ้นส่วนอุตสาหกรรม', 'อาหารปริมาณมาก', 'บรรจุภัณฑ์ค้าปลีกขนาดใหญ่', 'วัสดุการเกษตร', 'วัสดุก่อสร้าง', 'บรรจุภัณฑ์ส่งออก'],
    ctaTitle: 'จัดการกับถุงขนาดใหญ่พิเศษอยู่ใช่ไหม? ขอรับการประเมินการจัดซื้อสำหรับกลุ่มเครื่องซีลยาวพิเศษของเรา',
    ctaBtn: 'ขอการประเมินการจัดซื้อ',
  },
  vi: {
    kicker: 'THIẾT BỊ DÁN KÍN',
    heroTitle: 'Máy hàn tay siêu dài (loại xung)',
    heroSubtitle: 'Thiết kế cho túi rộng và bao bì cỡ lớn, máy hàn tay xung điện siêu dài này cho đường hàn sạch và đều lên đến 750mm. Tùy chọn dao cắt tích hợp để hàn và cắt trong một thao tác.',
    featuresTitle: 'Tính năng chính',
    features: [
      'Điều khiển xung điện tử — chính xác, dễ vận hành',
      'Chiều dài hàn 450mm, 600mm và 750mm cho túi khổ rộng',
      'Tùy chọn dao cắt tích hợp để hàn và cắt đồng thời',
      'Khung thép sơn tĩnh điện bền bỉ, chống ăn mòn',
      'Thiết kế dễ bảo trì, thay thế dây nhiệt dễ dàng',
      'Nhiệt độ tối đa 250°C phù hợp màng dày hoặc nhiều lớp',
      'Hỗ trợ điện 110V và 220V',
    ],
    specsTitle: 'Thông số kỹ thuật',
    applicationsTitle: 'Ứng dụng',
    applications: ['Hàn túi rộng', 'Đóng gói dệt may', 'Túi linh kiện công nghiệp', 'Thực phẩm số lượng lớn', 'Bao bì bán lẻ khổ lớn', 'Vật tư nông nghiệp', 'Vật liệu xây dựng', 'Bao bì xuất khẩu'],
    ctaTitle: 'Đang xử lý các loại túi quá khổ? Nhận đánh giá nguồn cung cho dòng máy hàn cực dài của chúng tôi.',
    ctaBtn: 'Nhận đánh giá nguồn cung',
  },
  de: {
    kicker: 'VERSIEGELUNGSGERÄTE',
    heroTitle: 'Extra langes Handschweißgerät (Impulstyp)',
    heroSubtitle: 'Für breite Beutel und übergroße Verpackungen konzipiert – dieses extra lange Impuls-Handschweißgerät liefert saubere, gleichmäßige Schweißnähte bis 750mm. Optionales Schneidemesser für Schweißen und Schneiden in einem Arbeitsgang.',
    featuresTitle: 'Hauptmerkmale',
    features: [
      'Elektronische Impulssteuerung — präzise und einfach zu bedienen',
      'Schweißlängen 450, 600 und 750 mm für breite Beutel',
      'Optionales integriertes Schneidemesser für gleichzeitiges Schweißen und Schneiden',
      'Pulverbeschichteter Stahlrahmen für Langlebigkeit und Korrosionsschutz',
      'Einfache Wartung mit austauschbaren Heizelementen',
      'Maximaltemperatur bis 250°C für dicke oder Mehrschichtfolien',
      'Erhältlich in 110V und 220V',
    ],
    specsTitle: 'Technische Daten',
    applicationsTitle: 'Anwendungen',
    applications: ['Versiegeln breiter Beutel', 'Textilverpackung', 'Industrieteile-Säcke', 'Große Lebensmittelportionen', 'Großformat-Retailverpackung', 'Agrarversorgung', 'Baumaterialien', 'Exportverpackung'],
    ctaTitle: 'Haben Sie es mit übergroßen Beuteln zu tun? Fordern Sie eine Sourcing-Bewertung an.',
    ctaBtn: 'Bewertung anfordern',
  },
}

const SPEC_HEADERS = ['Model', 'Power', 'Electrical Heating', 'Machine Size', 'Machine Weight', 'Sealing Size', 'Sealing Width', 'Max. Temp.']
const SPEC_ROWS = [
  ['WS-45', '110V / 220V', '600W', '66×13×25 cm', '9 KG', '450 mm', '2.7 mm / 5 mm', '250°C'],
  ['WS-60', '110V / 220V', '800W', '81×13×25 cm', '9.5 KG', '600 mm', '2.7 mm / 5 mm', '250°C'],
  ['WS-75', '110V / 220V', '1000W', '96×13×25 cm', '11 KG', '750 mm', '2.7 mm / 5 mm', '250°C'],
]

const packagingLabels: Record<string, string> = {
  en: 'Packaging', cn: '包装机械', zh: '包裝機械', fr: 'Emballage', es: 'Embalaje',
  pt: 'Embalagem', ko: '포장', ja: '包装', ar: 'التغليف', th: 'บรรจุภัณฑ์', vi: 'Đóng gói', de: 'Verpackung',
}

export default async function ExtraLongHandSealerPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content['en']

  const productSchema = buildWuushengProductSchema({
    lang,
    slug: 'extra-long-hand-sealer-impulse-type',
    name: metaTitles[lang] || metaTitles.en,
    description: metaDescs[lang] || metaDescs.en,
    image: PRODUCT_IMAGE,
    sku: 'WS-EXTRA-LONG-SEALER',
    priceLow: 80,
    priceHigh: 280,
    offerCount: 3,
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
          <Breadcrumbs lang={lang} items={[
            { label: BREADCRUMB_LABELS[lang]?.machinery ?? 'Machinery', href: `/${lang}/machinery` },
            { label: packagingLabels[lang] ?? 'Packaging', href: `/${lang}/machinery/packaging` },
            { label: t.heroTitle, href: `/${lang}/machines/extra-long-hand-sealer-impulse-type` },
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

      <MachineDecisionGuide lang={lang} fitScenarios={t.applications} />

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
