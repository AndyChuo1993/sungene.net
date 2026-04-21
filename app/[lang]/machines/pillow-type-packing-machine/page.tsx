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

const PRODUCT_IMAGE = 'https://img.mweb.com.tw/thumb/758/1000x1000/product/11_Horizontal_Packing_Mac/01_Pillow_Type_Packing_Machine/Pillow_Type_Packing_Machine.gif'

const metaTitles: Record<string, string> = {
  en: 'Pillow Packaging Configuration Route | Flow Wrap & Integration Planning',
  cn: '枕式包装配置路线 | 流包与整合规划',
  zh: '枕式包裝配置路線 | 流包與整合規劃',
  fr: 'Machine d\'emballage oreiller | Sourcing et intégration Flow Pack',
  es: 'Máquina de empaque tipo almohada | Abastecimiento técnico e integración',
  pt: 'Máquina de embalagem tipo travesseiro | Sourcing técnico e integração',
  ko: '베개형 포장기 | 기술 소싱 및 플로우 랩 통합',
  ja: 'ピロー包装機 | 技術ソーシングとフロー包装統合',
  ar: 'آلة التغليف بالوسادة | التوريد التقني وتكامل تغليف التدفق',
  th: 'เครื่องแพ็กแบบหมอน | การจัดซื้อเชิงเทคนิคและการรวมการห่อฟลูว์',
  vi: 'Máy đóng gói kiểu gối | Đánh giá nguồn cung và tích hợp đóng gói',
  de: 'Kissenverpackungsmaschine | Technisches Sourcing & Integration',
}

const metaDescs: Record<string, string> = {
  en: 'Flow-wrap sourcing support: align HFFS configuration with product and film, verify seal/cut consistency, and lock FAT/acceptance criteria before release.',
  cn: '流包采购支持：让 HFFS 配置与产品和膜材匹配，验证封切一致性，并在放行前锁定 FAT 与验收标准。',
  zh: '流包採購支援：讓 HFFS 配置與產品和膜材匹配，驗證封切一致性，並在放行前鎖定 FAT 與驗收標準。',
  fr: 'Sourcing professionnel pour emballeuses flow pack horizontales (HFFS). Validation technique des modèles WS-600/800 pour vos lignes d’emballage.',
  es: 'Abastecimiento profesional para envolvedoras horizontales (HFFS). Validación técnica para modelos WS-600/800 y compatibilidad con sus líneas de empaque.',
  pt: 'Sourcing profissional para empacotadoras flowpack horizontais (HFFS). Validação técnica dos modelos WS-600/800 para suas linhas de embalagem.',
  ko: '수평형 베개형 플로우 래퍼(HFFS) 전문 소싱. 스낵, 베이커리 또는 고형 식품 포장 라인과의 호환성을 보장하기 위해 WS-600/800 모델에 대한 기술 심사를 제공합니다.',
  ja: '横型ピロー式フロー包装機（HFFS）の専門ソーシング。スナック、ベーカリー、固形食品の包装ラインとの適合性を確保するため、WS-600/800モデルの技術審査を提供します。',
  ar: 'توريد احترافي لآلات تغليف التدفق الأفقي (HFFS). نقدم تدقيقًا فنيًا لطرازي WS-600/800 لضمان التوافق مع خطوط التغليف الخاصة بك.',
  th: 'การจัดซื้อระดับมืออาชีพสำหรับเครื่องห่อฟลูว์แพ็คแนวนอน (HFFS) เราให้บริการตรวจสอบทางเทคนิคสำหรับรุ่น WS-600/800 เพื่อความเข้ากันได้กับไลน์บรรจุภัณฑ์ของคุณ',
  vi: 'Nguồn cung chuyên nghiệp cho máy đóng gói dòng chảy nằm ngang (HFFS). Chúng tôi thẩm định kỹ thuật dòng WS-600/800 để đảm bảo tương thích với dây chuyền đóng gói.',
  de: 'Professionelles Sourcing für horizontale Schlauchbeutelmaschinen (HFFS). Technische Prüfung der Modelle WS-600/800 für Ihre Verpackungslinien.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/pillow-type-packing-machine',
    type: 'website',
    keywords: ['pillow packaging configuration', 'flow wrap setup', 'HFFS configuration', 'seal cut consistency', 'acceptance criteria', 'FAT checklist', 'supplier vetting', 'documentation handoff'],
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
    kicker: 'HORIZONTAL PACKAGING',
    heroTitle: 'Pillow Type Packing Machine',
    heroSubtitle: 'A horizontal flow wrapper (HFFS) that forms, fills, and seals bags in pillow-pack style. Designed for biscuits, bread, ice cream bars, chewing gum, chocolate bars, and other solid products. Compatible with OPP, CPP, KOP, PET, aluminum foil, and back-laminated paper.',
    featuresTitle: 'Key Features',
    features: [
      'Continuous horizontal form-fill-seal for pillow-style packaging',
      'Compatible with OPP, CPP, KOP, PET, aluminum foil, and laminated paper',
      'Wide product range: biscuits, instant noodles, ice cream, gum, chocolate, bread',
      'Adjustable packing length, width, and height for flexible product changeover',
      'Package dimensions and position controlled directly from the control panel',
      'All product-contact surfaces made of stainless steel for food safety',
      'High-quality electrical components for long service life and low failure rate',
      'Output speed 30–200 pcs/min depending on product and film type',
    ],
    specsTitle: 'Technical Specifications',
    applicationsTitle: 'Applications',
    applications: ['Biscuits & crackers', 'Instant noodles', 'Ice cream bars', 'Chewing gum & candy', 'Chocolate bars', 'Bread & bakery', 'Soap & detergent bars', 'Hardware components'],
    ctaTitle: 'Planning a horizontal flow wrap line? Request a professional sourcing assessment for technical vetting and integration support.',
    ctaBtn: 'Request Sourcing Assessment',
  },
  cn: {
    kicker: '卧式包装',
    heroTitle: '枕式包装机（卧式）',
    heroSubtitle: '卧式充填封口包装机（HFFS），成型、充填、封口一体，生产枕型包装。适用于饼干、面包、冰棒、口香糖、巧克力棒等固体产品，兼容OPP、CPP、KOP、PET、铝箔及背封纸。',
    featuresTitle: '主要特点',
    features: [
      '连续卧式充填封口，生产枕型包装',
      '兼容OPP、CPP、KOP、PET、铝箔及复合纸',
      '广泛适用：饼干、方便面、冰淇淋、口香糖、巧克力、面包',
      '包装长度、宽度和高度可调，灵活换型',
      '包装尺寸和位置可直接在控制面板上调整',
      '所有接触食品的表面均采用不锈钢，符合食品安全标准',
      '高质量电气元件，使用寿命长，故障率低',
      '产速30-200件/分钟（视产品和薄膜类型而定）',
    ],
    specsTitle: '技术规格',
    applicationsTitle: '应用领域',
    applications: ['饼干与苏打', '方便面', '冰棒与冰淇淋', '口香糖与糖果', '巧克力棒', '面包与烘焙', '香皂与洗涤块', '五金零件'],
    ctaTitle: '计划卧式流动包装线体？申请专业采购评估，获取技术审核与整合支持。',
    ctaBtn: '获取采购评估',
  },
  zh: {
    kicker: '臥式包裝',
    heroTitle: '枕式包裝機（臥式）',
    heroSubtitle: '臥式充填封口包裝機（HFFS），成型、充填、封口一體，生產枕型包裝。適用於餅乾、麵包、冰棒、口香糖、巧克力棒等固體產品，相容OPP、CPP、KOP、PET、鋁箔及背封紙。',
    featuresTitle: '主要特點',
    features: [
      '連續臥式充填封口，生產枕型包裝',
      '相容OPP、CPP、KOP、PET、鋁箔及複合紙',
      '廣泛適用：餅乾、方便麵、冰淇淋、口香糖、巧克力、麵包',
      '包裝長度、寬度和高度可調，靈活換型',
      '包裝尺寸和位置可直接在控制面板上調整',
      '所有接觸食品的表面均採用不鏽鋼，符合食品安全標準',
      '高品質電氣元件，使用壽命長，故障率低',
      '產速30-200件/分鐘（視產品和薄膜類型而定）',
    ],
    specsTitle: '技術規格',
    applicationsTitle: '應用領域',
    applications: ['餅乾與蘇打', '方便麵', '冰棒與冰淇淋', '口香糖與糖果', '巧克力棒', '麵包與烘焙', '香皂與洗滌塊', '五金零件'],
    ctaTitle: '計劃臥式流動包裝線體？申請專業採購評估，獲取技術審核與整合支持。',
    ctaBtn: '獲取採購評估',
  },
  fr: {
    kicker: 'EMBALLAGE HORIZONTAL',
    heroTitle: 'Machine d\'emballage de type oreiller',
    heroSubtitle: 'Emballeuse horizontale HFFS qui forme, remplit et scelle des sachets en format oreiller. Pour biscuits, pain, glaces, chewing-gums, tablettes de chocolat et autres produits solides. Compatible OPP, CPP, KOP, PET, aluminium et papier contrecollé.',
    featuresTitle: 'Caractéristiques principales',
    features: [
      'Conditionnement continu horizontal pour emballage oreiller',
      'Compatible OPP, CPP, KOP, PET, aluminium et papier laminé',
      'Large gamme : biscuits, nouilles instantanées, glaces, chewing-gum, chocolat, pain',
      'Longueur, largeur et hauteur d\'emballage réglables pour changements rapides',
      'Dimensions et position réglables depuis le panneau de commande',
      'Toutes les surfaces au contact des produits en acier inoxydable',
      'Composants électriques haute qualité pour longue durée de vie',
      'Cadence 30–200 pcs/min selon produit et film',
    ],
    specsTitle: 'Spécifications techniques',
    applicationsTitle: 'Applications',
    applications: ['Biscuits et crackers', 'Nouilles instantanées', 'Glaces et sorbet', 'Chewing-gum et bonbons', 'Tablettes de chocolat', 'Pain et viennoiseries', 'Savon et détergent en barre', 'Composants industriels'],
    ctaTitle: 'Vous planifiez une ligne flow pack ? Demandez une évaluation de sourcing professionnelle.',
    ctaBtn: 'Demander une évaluation',
  },
  es: {
    kicker: 'EMPAQUE HORIZONTAL',
    heroTitle: 'Máquina de empaque tipo almohada',
    heroSubtitle: 'Empaquetadora horizontal HFFS que forma, llena y sella bolsas en formato almohada. Para galletas, pan, helados, chicle, barras de chocolate y otros productos sólidos. Compatible con OPP, CPP, KOP, PET, aluminio y papel laminado.',
    featuresTitle: 'Características principales',
    features: [
      'Sellado de forma y llenado horizontal continuo para empaque tipo almohada',
      'Compatible con OPP, CPP, KOP, PET, aluminio y papel laminado',
      'Amplia gama: galletas, fideos instantáneos, helados, chicle, chocolate, pan',
      'Longitud, ancho y alto de embalaje ajustables para cambios rápidos de producto',
      'Dimensiones y posición ajustables desde el panel de control',
      'Todas las superficies en contacto con el producto en acero inoxidable',
      'Componentes eléctricos de alta calidad para larga vida útil',
      'Velocidad 30–200 uds/min según producto y film',
    ],
    specsTitle: 'Especificaciones técnicas',
    applicationsTitle: 'Aplicaciones',
    applications: ['Galletas y crackers', 'Fideos instantáneos', 'Paletas y helados', 'Chicle y caramelos', 'Barras de chocolate', 'Pan y bollería', 'Jabón y detergente en barra', 'Componentes industriales'],
    ctaTitle: '¿Planea una línea de flujo horizontal? Solicite una evaluación de abastecimiento profesional.',
    ctaBtn: 'Solicitar evaluación',
  },
  pt: {
    kicker: 'EMBALAGEM HORIZONTAL',
    heroTitle: 'Máquina de embalagem tipo travesseiro',
    heroSubtitle: 'Empacotadora horizontal HFFS que forma, preenche e sela sacos em formato travesseiro. Para biscoitos, pão, picolés, chiclete, barras de chocolate e outros produtos sólidos. Compatível com OPP, CPP, KOP, PET, alumínio e papel laminado.',
    featuresTitle: 'Principais características',
    features: [
      'Embalagem contínua horizontal tipo travesseiro',
      'Compatível com OPP, CPP, KOP, PET, alumínio e papel laminado',
      'Ampla gama: biscoitos, macarrão instantâneo, picolés, chiclete, chocolate, pão',
      'Comprimento, largura e altura ajustáveis para mudanças rápidas de produto',
      'Dimensões e posição ajustáveis pelo painel de controle',
      'Todas as superfícies em contato com o produto em aço inoxidável',
      'Componentes elétricos de alta qualidade para longa vida útil',
      'Velocidade 30–200 pçs/min conforme produto e filme',
    ],
    specsTitle: 'Especificações técnicas',
    applicationsTitle: 'Aplicações',
    applications: ['Biscoitos e crackers', 'Macarrão instantâneo', 'Picolés e sorvetes', 'Chiclete e balas', 'Barras de chocolate', 'Pão e confeitaria', 'Sabão e detergente em barra', 'Componentes industriais'],
    ctaTitle: 'Planejando uma linha flowpack? Peça uma avaliação de sourcing profissional.',
    ctaBtn: 'Solicitar avaliação',
  },
  ko: {
    kicker: '수평 포장',
    heroTitle: '베개형 포장기 (수評式)',
    heroSubtitle: '수평 성형-충전-밀봉(HFFS) 방식으로 베개형 봉지를 형성·충전·밀봉하는 포장기. 비스킷, 빵, 아이스크림 바, 껌, 초콜릿 바 등 고형 제품에 적합. OPP, CPP, KOP, PET, 알루미늄 포일, 라미네이팅지 호환.',
    featuresTitle: '주요 특징',
    features: [
      '베개형 포장을 위한 연속 수평 성형충전밀봉',
      'OPP, CPP, KOP, PET, 알루미늄 포일, 라미네이팅지 호환',
      '광범위한 제품: 비스킷, 라면, 아이스크림, 껌, 초콜릿, 빵',
      '포장 길이·폭·높이 조정 가능, 빠른 제품 전환',
      '제어판에서 직접 포장 크기 및 위치 조정 가능',
      '모든 식품 접촉면 스테인리스 스틸 소재',
      '고품질 전기 부품으로 긴 수명, 낮은 고장률',
      '생산 속도 30~200개/분 (제품 및 필름 종류에 따라 다름)',
    ],
    specsTitle: '기술 사양',
    applicationsTitle: '적용 분야',
    applications: ['비스킷·크래커', '라면·면류', '아이스크림 바', '껌·사탕', '초콜릿 바', '빵·베이커리', '비누·세제 바', '공업용 부품'],
    ctaTitle: '수평 플로우 랩 라인을 계획 중이신가요? 기술 심사 및 통합 지원을 위한 소싱 평가를 신청하세요.',
    ctaBtn: '소싱 평가 신청',
  },
  ja: {
    kicker: '横型包装',
    heroTitle: 'ピロー包装機（横型）',
    heroSubtitle: '横型フォームフィルシール（HFFS）方式でピロー袋を成形・充填・シールします。ビスケット、パン、アイスクリームバー、ガム、チョコレートバーなどの固形製品に対応。OPP・CPP・KOP・PET・アルミ箔・ラミネート紙対応制。',
    featuresTitle: '主な特長',
    features: [
      'ピロー包装のための連続横型フォームフィルシール',
      'OPP・CPP・KOP・PET・アルミ箔・ラミネート紙対応',
      '幅広い対応品目：ビスケット・インスタント麺・アイス・ガム・チョコ・パン',
      '包装長さ・幅・高さ調整可能、迅速な品種切替',
      '包装サイズ・位置はコントロールパネルから直接調整',
      '食品接触面はすべてステンレス鋼製',
      '高品質電気部品による長寿命・低故障',
      '生産速度30〜200個/分（製品・フィルムにより異なる）',
    ],
    specsTitle: '技術仕様',
    applicationsTitle: '適用分野',
    applications: ['ビスケット・クラッカー', 'インスタント麺', 'アイスクリームバー', 'ガム・キャンディ', 'チョコレートバー', 'パン・焼き菓子', '石鹸・洗剤バー', '工業部品'],
    ctaTitle: '横型フロー包装ラインをご検討中ですか？技術審査と統合サポートのためのソーシング評価をご依頼ください。',
    ctaBtn: 'ソーシング評価を依頼',
  },
  ar: {
    kicker: 'التعبئة الأفقية',
    heroTitle: 'آلة التغليف بالوسادة',
    heroSubtitle: 'ماكينة التغليف الأفقي HFFS لتشكيل الأكياس وتعبئتها وختمها بأسلوب الوسادة. للبسكويت والخبز والآيس كريم وعلكة المضغ وألواح الشوكولاتة والمنتجات الصلبة الأخرى.',
    featuresTitle: 'الميزات الرئيسية',
    features: [
      'تغليف أفقي متواصل بأسلوب الوسادة',
      'متوافق مع OPP وCPP وKOP وPET والألومنيوم والورق المبطن',
      'نطاق واسع: بسكويت، نودلز فوري، آيس كريم، علكة، شوكولاتة، خبز',
      'طول وعرض وارتفاع التغليف قابل للضبط للتبديل السريع',
      'ضبط الأبعاد والوضع مباشرة من لوحة التحكم',
      'جميع أسطح التلامس مع المنتجات من الفولاذ المقاوم للصدأ',
      'مكونات كهربائية عالية الجودة لعمر تشغيلي طويل',
      'سرعة إنتاج 30–200 قطعة/دقيقة',
    ],
    specsTitle: 'المواصفات التقنية',
    applicationsTitle: 'التطبيقات',
    applications: ['البسكويت والمقرمشات', 'النودلز الفوري', 'الآيس كريم', 'العلكة والحلوى', 'ألواح الشوكولاتة', 'الخبز والمخبوزات', 'الصابون وقوالب المنظفات', 'المكونات الصناعية'],
    ctaTitle: 'هل تخطط لخط تغليف أفقي؟ اطلب تقييم توريد احترافيًا للتدقيق الفني ودعم التكامل.',
    ctaBtn: 'طلب تقييم التوريد',
  },
  th: {
    kicker: 'บรรจุภัณฑ์แนวนอน',
    heroTitle: 'เครื่องแพ็กแบบหมอน (แนวนอน)',
    heroSubtitle: 'เครื่องบรรจุแบบฟลูว์แพ็คแนวนอน (HFFS) สำหรับขึ้นรูป บรรจุ และซีลถุงแบบหมอน เหมาะสำหรับบิสกิต ขนมปัง ไอศกรีม หมากฝรั่ง ช็อกโกแลต และสินค้าแข็งอื่นๆ รองรับ OPP, CPP, KOP, PET, ฟอยล์ และกระดาษลามิเนต',
    featuresTitle: 'คุณสมบัติหลัก',
    features: [
      'ฟลูว์แพ็คแบบแนวนอนต่อเนื่องสำหรับถุงแบบหมอน',
      'รองรับ OPP, CPP, KOP, PET, ฟอยล์อะลูมิเนียม และกระดาษลามิเนต',
      'รองรับผลิตภัณฑ์หลากหลาย: บิสกิต บะหมี่ ไอศกรีม หมากฝรั่ง ช็อกโกแลต ขนมปัง',
      'ปรับความยาว ความกว้าง และความสูงการบรรจุได้ เปลี่ยนรุ่นสินค้าได้เร็ว',
      'ปรับขนาดและตำแหน่งการบรรจุจากแผงควบคุม',
      'ทุกพื้นผิวสัมผัสอาหารทำจากสแตนเลสสตีล',
      'ชิ้นส่วนไฟฟ้าคุณภาพสูง อายุการใช้งานนาน',
      'ความเร็วผลิต 30-200 ชิ้น/นาที',
    ],
    specsTitle: 'ข้อมูลจำเพาะทางเทคนิค',
    applicationsTitle: 'การใช้งาน',
    applications: ['บิสกิตและแครกเกอร์', 'บะหมี่กึ่งสำเร็จรูป', 'ไอศกรีมและไอติม', 'หมากฝรั่งและขนม', 'ช็อกโกแลตบาร์', 'ขนมปังและเบเกอรี่', 'สบู่และผลิตภัณฑ์ทำความสะอาด', 'ชิ้นส่วนอุตสาหกรรม'],
    ctaTitle: 'กำลังวางแผนการบูรณาการไลน์ฟลูว์แพ็คแนวนอน? ขอรับการประเมินการจัดซื้อเพื่อการตรวจสอบทางเทคนิค',
    ctaBtn: 'ขอการประเมินการจัดซื้อ',
  },
  vi: {
    kicker: 'ĐÓNG GÓI NẰM NGANG',
    heroTitle: 'Máy đóng gói kiểu gối (nằm ngang)',
    heroSubtitle: 'Máy đóng gói dòng chảy nằm ngang (HFFS) tạo hình, rót và hàn túi kiểu gối. Dành cho bánh quy, bánh mì, kem que, kẹo cao su, thanh sô cô la và sản phẩm rắn. Tương thích OPP, CPP, KOP, PET, giấy bạc nhôm, giấy laminat.',
    featuresTitle: 'Tính năng chính',
    features: [
      'Đóng gói dòng chảy nằm ngang liên tục kiểu gối',
      'Tương thích OPP, CPP, KOP, PET, giấy bạc nhôm và giấy laminat',
      'Phạm vi sản phẩm rộng: bánh quy, mì ăn liền, kem, kẹo cao su, sô cô la, bánh mì',
      'Điều chỉnh chiều dài, rộng và cao của gói, thay đổi sản phẩm nhanh',
      'Kích thước và vị trí gói điều chỉnh trực tiếp từ bảng điều khiển',
      'Tất cả bề mặt tiếp xúc thực phẩm bằng thép không gỉ',
      'Linh kiện điện chất lượng cao, tuổi thọ cao, ít hỏng hóc',
      'Năng suất 30–200 cái/phút tùy sản phẩm và màng',
    ],
    specsTitle: 'Thông số kỹ thuật',
    applicationsTitle: 'Ứng dụng',
    applications: ['Bánh quy và bánh giòn', 'Mì ăn liền', 'Kem que và kem cốc', 'Kẹo cao su và kẹo', 'Thanh sô cô la', 'Bánh mì và bánh ngọt', 'Xà phòng và chất tẩy rửa dạng bánh', 'Linh kiện công nghiệp'],
    ctaTitle: 'Đang lên kế hoạch cho dây chuyền đóng gói nằm ngang? Yêu cầu đánh giá nguồn cung để được hỗ trợ kỹ thuật.',
    ctaBtn: 'Yêu cầu đánh giá',
  },
  de: {
    kicker: 'HORIZONTALVERPACKUNG',
    heroTitle: 'Kissenverpackungsmaschine (Horizontal)',
    heroSubtitle: 'Horizontale HFFS-Schlauchbeutelmaschine, die Kissenbeutel formt, befüllt und versiegelt. Für Kekse, Brot, Eisriegel, Kaugummi, Schokoriegel und andere feste Produkte. Kompatibel mit OPP, CPP, KOP, PET, Alufolie und laminiertem Papier.',
    featuresTitle: 'Hauptmerkmale',
    features: [
      'Kontinuierliche horizontale Kissenverpackung',
      'Kompatibel mit OPP, CPP, KOP, PET, Alufolie und laminiertem Papier',
      'Breite Produktpalette: Kekse, Instantnudeln, Eisriegel, Kaugummi, Schokolade, Brot',
      'Verpackungslänge, -breite und -höhe einstellbar für schnellen Produktwechsel',
      'Maße und Position direkt am Bedienfeld einstellbar',
      'Alle produktberührenden Flächen aus Edelstahl',
      'Hochwertige elektrische Komponenten für lange Lebensdauer',
      'Leistung 30–200 Stk/min je nach Produkt und Folie',
    ],
    specsTitle: 'Technische Daten',
    applicationsTitle: 'Anwendungen',
    applications: ['Kekse und Cracker', 'Instantnudeln', 'Eisriegel und Eis', 'Kaugummi und Bonbons', 'Schokoriegel', 'Brot und Backwaren', 'Seife und Waschmittelriegel', 'Industriekomponenten'],
    ctaTitle: 'Planen Sie eine horizontale Schlauchbeutel-Linie? Fordern Sie eine professionelle Sourcing-Bewertung an.',
    ctaBtn: 'Bewertung anfordern',
  },
}

const SPEC_HEADERS = ['Model', 'Packing Length', 'Packing Width', 'Packing Height', 'Capacity', 'Longitudinal Heater', 'Cross Heater', 'Machine Size']
const SPEC_ROWS = [
  ['WS-600', '80–300 mm', '10–100 mm', '10–60 mm', '30–200 pcs/min', '400W × 2', '300W × 4', '3400×800×1600 mm'],
  ['WS-800', '80–400 mm', '10–180 mm', '10–100 mm', '30–200 pcs/min', '400W × 2', '300W × 4', '4200×900×1700 mm'],
]

const packagingLabels: Record<string, string> = {
  en: 'Packaging', cn: '包装机械', zh: '包裝機械', fr: 'Emballage', es: 'Embalaje',
  pt: 'Embalagem', ko: '포장', ja: '包装', ar: 'التغليف', th: 'บรรจุภัณฑ์', vi: 'Đóng gói', de: 'Verpackung',
}

export default async function PillowPackingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content['en']

  const productSchema = buildWuushengProductSchema({
    lang,
    slug: 'pillow-type-packing-machine',
    name: metaTitles[lang] || metaTitles.en,
    description: metaDescs[lang] || metaDescs.en,
    image: PRODUCT_IMAGE,
    sku: 'WS-PILLOW-PACKER',
    priceLow: 5000, priceHigh: 25000, offerCount: 4,
    category: 'Horizontal Packing Machines',
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
            { label: t.heroTitle, href: `/${lang}/machines/pillow-type-packing-machine` },
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
