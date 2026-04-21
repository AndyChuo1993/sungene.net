import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'
import { ButtonLink } from '@/components/ui/Button'

const titles: Record<string, string> = {
  en: 'Industries & Applications',
  cn: '行业与应用',
  zh: '產業與應用',
  fr: 'Industries et applications',
  es: 'Industrias y aplicaciones',
  pt: 'Indústrias e Aplicações',
  ko: '산업 및 응용 분야',
  ja: '業界・用途',
  ar: 'الصناعات والتطبيقات',
  th: 'อุตสาหกรรมและการประยุกต์ใช้',
  vi: 'Ngành Công Nghiệp & Ứng Dụng',
  de: 'Branchen & Anwendungen',
}

const descriptions: Record<string, string> = {
  en: 'SunGene sourcing expertise serves food, beverage, pharmaceutical, cosmetic, and industrial sectors. Technical evaluation for powder, liquid, granule, and solid line integrations.',
  cn: 'SunGene采购专业知识服务于食品、饮料、制药、化妆品和工业行业。为粉末、液体、颗粒和固体线体整合提供技术评估。',
  zh: 'SunGene採購專業知識服務於食品、飲料、製藥、化妝品和工業行業。為粉末、液體、顆粒和固體線體整合提供技術評估。',
  fr: 'L\'expertise en sourcing de SunGene sert les secteurs alimentaire, boisson, pharmaceutique, cosmétique et industriel. Évaluation technique pour intégration de lignes.',
  es: 'La experiencia en abastecimiento de SunGene sirve a industrias alimentaria, bebidas, farmacéutica, cosmética e industrial. Evaluación técnica para integración de líneas.',
  pt: 'A expertise em sourcing da SunGene atende setores de alimentos, bebidas, farmacêutico, cosmético e industrial. Avaliação técnica para integração de linhas.',
  ko: 'SunGene 소싱 전문 지식은 식품, 음료, 제약, 화장품, 산업 분야를 지원합니다. 분말, 액체, 과립, 고체 라인 통합을 위한 기술 평가.',
  ja: 'SunGeneのソーシング専門知識は食品、飲料、製薬、化粧品、工業分野に対応。粉末、液体、顆粒、固体のライン統合向けの技術評価。',
  ar: 'تخدم خبرة SunGene في التوريد قطاعات الأغذية والمشروبات والأدوية ومستحضرات التجميل والصناعة. تقييم تقني لتكامل الخطوط.',
  th: 'ความเชี่ยวชาญในการจัดหาของ SunGene ให้บริการอุตสาหกรรมอาหาร เครื่องดื่ม ยา เครื่องสำอาง และอุตสาหกรรม การประเมินทางเทคนิคสำหรับการบูรณาการไลน์',
  vi: 'Chuyên môn nguồn cung của SunGene phục vụ ngành thực phẩm, đồ uống, dược phẩm, mỹ phẩm và công nghiệp. Đánh giá kỹ thuật cho tích hợp dây chuyền.',
  de: 'SunGene Sourcing-Expertise bedient Lebensmittel-, Getränke-, Pharma-, Kosmetik- und Industriesektoren. Technische Bewertung für Linienintegration.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    pathname: '/industries',
    type: 'website',
    keywords: ['industrial sourcing partner', 'machinery procurement Taiwan', 'food packaging evaluation', 'filling line integration', 'technical supplier vetting', 'industrial automation sourcing'],
  })
}

export default async function IndustriesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const metaTitle = titles[lang] || titles.en
  const metaDesc = descriptions[lang] || descriptions.en

  const content: Record<string, { title: string; desc: string; cats: { title: string; desc: string; href: string }[] }> = {
    en: {
      title: 'Industries & Applications',
      desc: 'Map your product category to the right equipment strategies. For a professional assessment, share product state, package type, fill range, target speed, and line layout.',
      cats: [
        { title: 'Powder Products', desc: 'Spices, coffee, milk powder, flour, detergent, pharmaceutical powder — sourcing for filling, dosing, and packaging lines.', href: `/${lang}/machinery/packaging` },
        { title: 'Liquid Products', desc: 'Beverages, sauces, cooking oil, cosmetics, chemicals — integration for filling, sealing, conveying, and labeling.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Granule & Snack Products', desc: 'Nuts, seeds, candy, pet food, frozen food, rice — technical vetting for weighing, feeding, and case packing.', href: `/${lang}/machinery/food-processing` },
        { title: 'Food Processing', desc: 'Meat, bakery, ready meals, seafood, dairy — end-to-end sourcing for processing, cooking, and preparation.', href: `/${lang}/machinery/food-processing` },
        { title: 'Consumer & Industrial Goods', desc: 'Hardware, electronics, medical devices, fertilizers, cement — automation sourcing for packaging and palletizing.', href: `/${lang}/machinery/packaging` }
      ]
    },
    cn: {
      title: '行业与应用',
      desc: '将您的产品类别对应到合适的设备策略。如需专业评估，请提供产品状态、包装类型、灌装范围、目标速度和线体布局。',
      cats: [
        { title: '粉末产品', desc: '香料、咖啡、奶粉、面粉、洗涤剂、医药粉末——为灌装、计量和包装线提供采购。', href: `/${lang}/machinery/packaging` },
        { title: '液体产品', desc: '饮料、酱料、食用油、化妆品、化工品——灌装、封口、输送和贴标的系统集成。', href: `/${lang}/machinery/filling-sealing` },
        { title: '颗粒与休闲食品', desc: '坚果、种子、糖果、宠物食品、冷冻食品、大米——称重、进料和装箱的技术审核。', href: `/${lang}/machinery/food-processing` },
        { title: '食品加工', desc: '肉类、烘焙、即食餐、海鲜、乳制品——加工、烹饪和备料的端到端采购。', href: `/${lang}/machinery/food-processing` },
        { title: '消费品与工业品', desc: '五金、电子、医疗器械、化肥、水泥——包装和码垛的自动化采购。', href: `/${lang}/machinery/packaging` }
      ]
    },
    zh: {
      title: '產業與應用',
      desc: '將您的產品類別對應到合適的設備策略。如需專業評估，請提供產品狀態、包裝類型、灌裝範圍、目標速度和線體佈局。',
      cats: [
        { title: '粉末產品', desc: '香料、咖啡、奶粉、麵粉、洗滌劑、醫藥粉末——為灌裝、計量和包裝線提供採購。', href: `/${lang}/machinery/packaging` },
        { title: '液體產品', desc: '飲料、醬料、食用油、化妝品、化工品——灌裝、封口、輸送和貼標的系統整合。', href: `/${lang}/machinery/filling-sealing` },
        { title: '顆粒與休閒食品', desc: '堅果、種子、糖果、寵物食品、冷凍食品、大米——稱重、進料和裝箱的技術審核。', href: `/${lang}/machinery/food-processing` },
        { title: '食品加工', desc: '肉類、烘焙、即食餐、海鮮、乳製品——加工、烹飪和備料的端到端採購。', href: `/${lang}/machinery/food-processing` },
        { title: '消費品與工業品', desc: '五金、電子、醫療器材、化肥、水泥——包裝和碼垛的自動化採購。', href: `/${lang}/machinery/packaging` }
      ]
    },
    fr: {
      title: 'Industries et applications',
      desc: 'Reliez votre catégorie de produit aux bonnes stratégies d\'équipement. Pour une évaluation professionnelle, indiquez l\'état du produit, le format et la cadence.',
      cats: [
        { title: 'Produits en poudre', desc: 'Épices, café, lait en poudre — sourcing pour lignes de dosage, remplissage et conditionnement.', href: `/${lang}/machinery/packaging` },
        { title: 'Produits liquides', desc: 'Boissons, sauces, cosmétiques — intégration pour remplissage, scellage et étiquetage.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Granulés et snacks', desc: 'Noix, confiseries, surgelés — audit technique pour pesage, alimentation et mise en carton.', href: `/${lang}/machinery/food-processing` },
        { title: 'Transformation alimentaire', desc: 'Viande, boulangerie, produits laitiers — sourcing complet pour transformation et préparation.', href: `/${lang}/machinery/food-processing` },
        { title: 'Biens de consommation', desc: 'Quincaillerie, électronique, médical — sourcing d\'automatisation pour emballage et palettisation.', href: `/${lang}/machinery/packaging` }
      ]
    },
    es: {
      title: 'Industrias y aplicaciones',
      desc: 'Conecte su categoría de producto con las estrategias de equipo adecuadas. Para una evaluación profesional, comparta detalles técnicos y layout.',
      cats: [
        { title: 'Productos en polvo', desc: 'Especias, café, harina — abastecimiento para líneas de llenado, dosificación y empaque.', href: `/${lang}/machinery/packaging` },
        { title: 'Productos líquidos', desc: 'Bebidas, salsas, cosméticos — integración para llenado, sellado y etiquetado.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Granulados y snacks', desc: 'Nueces, dulces, congelados — auditoría técnica para pesaje, alimentación y encajado.', href: `/${lang}/machinery/food-processing` },
        { title: 'Procesamiento de alimentos', desc: 'Carne, panadería, lácteos — abastecimiento integral para procesamiento y preparación.', href: `/${lang}/machinery/food-processing` },
        { title: 'Bienes industriales', desc: 'Ferretería, electrónica, médico — abastecimiento de automatización para empaque y paletizado.', href: `/${lang}/machinery/packaging` }
      ]
    },
    pt: {
      title: 'Indústrias e Aplicações',
      desc: 'Relacione sua categoria de produto às estratégias de equipamento corretas. Para uma avaliação profissional, informe detalhes técnicos e layout.',
      cats: [
        { title: 'Produtos em Pó', desc: 'Temperos, café, farinha — sourcing para linhas de envase, dosagem e embalagem.', href: `/${lang}/machinery/packaging` },
        { title: 'Produtos Líquidos', desc: 'Bebidas, molhos, cosméticos — integração para envase, selagem e rotulagem.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Grânulos e Snacks', desc: 'Nozes, doces, congelados — auditoria técnica para pesagem, alimentação e encaixotamento.', href: `/${lang}/machinery/food-processing` },
        { title: 'Processamento de Alimentos', desc: 'Carnes, panificação, laticínios — sourcing ponta a ponta para processamento e preparação.', href: `/${lang}/machinery/food-processing` },
        { title: 'Bens Industriais', desc: 'Ferragens, eletrônicos, médico — sourcing de automação para embalagem e paletização.', href: `/${lang}/machinery/packaging` }
      ]
    },
    ko: {
      title: '산업 및 응용 분야',
      desc: '제품 카테고리에 맞는 최적의 장비 전략을 확인하세요. 전문가의 평가를 위해 제품 상태, 포장 유형, 목표 속도 및 레이아웃을 공유해 주세요.',
      cats: [
        { title: '분말 제품', desc: '향신료, 커피, 밀가루 — 충전, 계량 및 포장 라인을 위한 소싱.', href: `/${lang}/machinery/packaging` },
        { title: '액체 제품', desc: '음료, 소스, 화장품 — 충전, 밀봉 및 라벨링을 위한 통합 솔루션.', href: `/${lang}/machinery/filling-sealing` },
        { title: '과립 및 스낵 제품', desc: '견과류, 사탕, 냉동식품 — 계량, 공급 및 케이스 패킹을 위한 기술 검증.', href: `/${lang}/machinery/food-processing` },
        { title: '식품 가공', desc: '육류, 제과제빵, 유제품 — 가공 및 준비를 위한 엔드투엔드 소싱.', href: `/${lang}/machinery/food-processing` },
        { title: '산업재', desc: '하드웨어, 전자, 의료기기 — 포장 및 팔레타이징을 위한 자동화 소싱.', href: `/${lang}/machinery/packaging` }
      ]
    },
    ja: {
      title: '業界・用途',
      desc: '製品カテゴリーに最適な設備戦略をご確認ください。専門的な評価のために、製品状態、包装形態、目標能力、レイアウトをご共有ください。',
      cats: [
        { title: '粉末製品', desc: 'スパイス、コーヒー、小麦粉 — 充填、計量、包装ライン向けのソーシング。', href: `/${lang}/machinery/packaging` },
        { title: '液体製品', desc: '飲料、ソース、化粧品 — 充填、シーリング、ラベリング向けの統合ソリューション。', href: `/${lang}/machinery/filling-sealing` },
        { title: '顆粒・スナック製品', desc: 'ナッツ、菓子、冷凍食品 — 計量、供給、ケースパッキング向けの技術審査。', href: `/${lang}/machinery/food-processing` },
        { title: '食品加工', desc: '肉類、ベーカリー、乳製品 — 加工・準備向けのエンドツーエンドのソーシング。', href: `/${lang}/machinery/food-processing` },
        { title: '産業財', desc: '金物、電子機器、医療機器 — 包装・パレタイジング向けの自動化ソーシング。', href: `/${lang}/machinery/packaging` }
      ]
    },
    ar: {
      title: 'الصناعات والتطبيقات',
      desc: 'اربط فئة منتجك باستراتيجيات المعدات الصحيحة. للحصول على تقييم مهني، شارك حالة المنتج ونوع العبوة والسرعة المطلوبة وتخطيط الخط.',
      cats: [
        { title: 'منتجات المساحيق', desc: 'التوابل، القهوة — توريد لخطوط التعبئة والجرعات والتغليف.', href: `/${lang}/machinery/packaging` },
        { title: 'المنتجات السائلة', desc: 'المشروبات، الصلصات، مستحضرات التجميل — تكامل لأنظمة التعبئة والختم ووضع العلامات.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'منتجات الحبيبات', desc: 'المكسرات، الحلويات — تدقيق تقني للوزن والتغذية والتعليب.', href: `/${lang}/machinery/food-processing` },
        { title: 'إنتاج الأغذية', desc: 'اللحوم، المخبوزات — توريد متكامل لعمليات المعالجة والتحضير.', href: `/${lang}/machinery/food-processing` },
        { title: 'السلع الصناعية', desc: 'الأدوات، الإلكترونيات — توريد الأتمتة للتغليف والتحميل على المنصات.', href: `/${lang}/machinery/packaging` }
      ]
    },
    th: {
      title: 'อุตสาหกรรมและการประยุกต์ใช้',
      desc: 'จับคู่ประเภทสินค้าของคุณกับกลยุทธ์อุปกรณ์ที่เหมาะสม สำหรับการประเมินอย่างมืออาชีพ โปรดแจ้งรายละเอียดสินค้าและเลย์เอาต์ไลน์',
      cats: [
        { title: 'ผลิตภัณฑ์ผง', desc: 'เครื่องเทศ, กาแฟ — การจัดหาสำหรับสายการบรรจุ, ตวงจ่าย และบรรจุภัณฑ์', href: `/${lang}/machinery/packaging` },
        { title: 'ผลิตภัณฑ์ของเหลว', desc: 'เครื่องดื่ม, ซอส — การรวมระบบสำหรับการบรรจุ, ปิดผนึก และติดฉลาก', href: `/${lang}/machinery/filling-sealing` },
        { title: 'ผลิตภัณฑ์เม็ด', desc: 'ถั่ว, ลูกอม — การตรวจสอบทางเทคนิคสำหรับการชั่งน้ำหนักและการบรรจุลงกล่อง', href: `/${lang}/machinery/food-processing` },
        { title: 'การผลิตอาหาร', desc: 'เนื้อสัตว์, เบเกอรี่ — การจัดหาแบบครบวงจรสำหรับการแปรรูปและการเตรียม', href: `/${lang}/machinery/food-processing` },
        { title: 'สินค้าอุตสาหกรรม', desc: 'ฮาร์ดแวร์, อิเล็กทรอนิกส์ — การจัดหาระบบอัตโนมัติสำหรับบรรจุภัณฑ์และจัดเรียงพาเลท', href: `/${lang}/machinery/packaging` }
      ]
    },
    vi: {
      title: 'Ngành Công Nghiệp & Ứng Dụng',
      desc: 'Ghép nhóm sản phẩm của bạn với các chiến lược thiết bị phù hợp. Để nhận đánh giá chuyên nghiệp, hãy chia sẻ thông tin kỹ thuật và layout.',
      cats: [
        { title: 'Sản phẩm Bột', desc: 'Gia vị, cà phê — nguồn cung cho dây chuyền chiết rót, định lượng và đóng gói.', href: `/${lang}/machinery/packaging` },
        { title: 'Sản phẩm Lỏng', desc: 'Đồ uống, nước sốt — tích hợp cho chiết rót, seal và dán nhãn.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Sản phẩm Hạt', desc: 'Hạt, kẹo — thẩm định kỹ thuật cho cân, nạp liệu và đóng thùng.', href: `/${lang}/machinery/food-processing` },
        { title: 'Sản xuất Thực phẩm', desc: 'Thịt, bánh mì — nguồn cung trọn gói cho chế biến và chuẩn bị.', href: `/${lang}/machinery/food-processing` },
        { title: 'Hàng Công nghiệp', desc: 'Kim khí, điện tử — nguồn cung tự động hóa cho đóng gói và xếp pallet.', href: `/${lang}/machinery/packaging` }
      ]
    },
    de: {
      title: 'Branchen & Anwendungen',
      desc: 'Ordnen Sie Ihre Produktkategorie den richtigen Ausrüstungsstrategien zu. Für eine professionelle Bewertung: Produktdetails und Layout senden.',
      cats: [
        { title: 'Pulverprodukte', desc: 'Gewürze, Kaffee — Sourcing für Abfüll-, Dosier- und Verpackungslinien.', href: `/${lang}/machinery/packaging` },
        { title: 'Flüssigprodukte', desc: 'Getränke, Soßen — Integration für Abfüllung, Versiegelung und Etikettierung.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Granulatprodukte', desc: 'Nüsse, Süßigkeiten — technische Prüfung für Wiegen, Zuführen und Kartonieren.', href: `/${lang}/machinery/food-processing` },
        { title: 'Lebensmittelproduktion', desc: 'Fleisch, Backwaren — End-to-End-Sourcing für Verarbeitung und Vorbereitung.', href: `/${lang}/machinery/food-processing` },
        { title: 'Industriegüter', desc: 'Eisenwaren, Elektronik — Automatisierungs-Sourcing für Verpackung und Palettierung.', href: `/${lang}/machinery/packaging` }
      ]
    }
  }

  const t = content[lang] || content['en']
  const heroPhoto = PHOTO.pages.industries.hero

  const cardPhotos = PHOTO.pages.industries.cards
  const exploreByMachineTitle =
    ({
      en: 'Explore by machine',
      cn: '按机型浏览',
      zh: '依機型瀏覽',
      fr: 'Explorer par machine',
      es: 'Explorar por máquina',
      pt: 'Explorar por máquina',
      ko: '기계별 탐색',
      ja: '機種別に見る',
      ar: 'استكشف حسب الماكينة',
      th: 'สำรวจตามเครื่อง',
      vi: 'Khám phá theo máy',
      de: 'Nach Maschine entdecken',
    } as Record<string, string>)[lang] || 'Explore by machine'

  const exploreLinks = [
    {
      machine: 'pouch-packing-machine',
      label:
        ({ en: 'Pouch packing', cn: '袋装包装', zh: '袋裝包裝', fr: 'Ensachage', es: 'Empaque en bolsa', pt: 'Embalagem em saco', ko: '파우치 포장', ja: 'パウチ包装', ar: 'تعبئة الأكياس', th: 'บรรจุถุง', vi: 'Đóng gói túi', de: 'Beutelverpackung' } as Record<string, string>)[lang] ||
        'Pouch packing',
    },
    {
      machine: 'powder-filling-machine',
      label:
        ({ en: 'Powder filling', cn: '粉末灌装', zh: '粉末灌裝', fr: 'Poudre', es: 'Polvo', pt: 'Pó', ko: '분말', ja: '粉体', ar: 'مساحيق', th: 'ผง', vi: 'Bột', de: 'Pulver' } as Record<string, string>)[lang] ||
        'Powder filling',
    },
    {
      machine: 'liquid-filling-machine',
      label:
        ({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Liquidos', pt: 'Liquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[lang] ||
        'Liquid filling',
    },
    {
      machine: 'snack-processing-line',
      label:
        ({ en: 'Snack processing', cn: '休闲食品', zh: '休閒食品', fr: 'Snack', es: 'Snacks', pt: 'Snacks', ko: '스낵', ja: 'スナック', ar: 'سناكات', th: 'สแน็ค', vi: 'Snack', de: 'Snack' } as Record<string, string>)[lang] ||
        'Snack processing',
    },
    {
      machine: 'conveyor-system',
      label:
        ({ en: 'Conveyors', cn: '输送', zh: '輸送', fr: 'Convoyeurs', es: 'Transporte', pt: 'Transporte', ko: '컨베이어', ja: '搬送', ar: 'نقل', th: 'ลำเลียง', vi: 'Băng tải', de: 'Fördertechnik' } as Record<string, string>)[lang] ||
        'Conveyors',
    },
  ] as const

  const guidesLabel =
    ({
      en: 'Buying guides',
      cn: '采购指南',
      zh: '採購指南',
      fr: 'Guides d’achat',
      es: 'Guías de compra',
      pt: 'Guias de compra',
      ko: '구매 가이드',
      ja: '購入ガイド',
      ar: 'أدلة الشراء',
      th: 'คู่มือการเลือกซื้อ',
      vi: 'Hướng dẫn mua',
      de: 'Kaufratgeber',
    } as Record<string, string>)[lang] || 'Buying guides'

  const viewCategoryLabel =
    ({
      en: 'View category',
      cn: '查看分类',
      zh: '查看分類',
      fr: 'Voir la catégorie',
      es: 'Ver categoría',
      pt: 'Ver categoria',
      ko: '카테고리 보기',
      ja: 'カテゴリを見る',
      ar: 'عرض الفئة',
      th: 'ดูหมวดหมู่',
      vi: 'Xem danh mục',
      de: 'Kategorie ansehen',
    } as Record<string, string>)[lang] || 'View category'

  const categoryMachines = [
    'powder-filling-machine',
    'liquid-filling-machine',
    'pouch-packing-machine',
    'snack-processing-line',
    'conveyor-system',
  ] as const

  const routeHubByMachine = {
    'pouch-packing-machine': `/${lang}/resources/route/pouch-packaging`,
    'powder-filling-machine': `/${lang}/resources/route/powder-dosing`,
    'liquid-filling-machine': `/${lang}/resources/route/liquid-filling`,
    'snack-processing-line': `/${lang}/resources/route/food-processing-line`,
    'conveyor-system': `/${lang}/resources/route/conveying-automation`,
  } as Record<(typeof categoryMachines)[number], string>

  return (
    <>
      <PageHero
        kicker={({ en: 'INDUSTRIES', cn: '行业应用', zh: '產業應用', fr: 'INDUSTRIES', es: 'INDUSTRIAS', pt: 'INDÚSTRIAS', ko: '산업', ja: '業界', ar: 'الصناعات', th: 'อุตสาหกรรม', vi: 'NGÀNH', de: 'BRANCHEN' } as Record<string, string>)[lang] || 'INDUSTRIES'}
        title={t.title}
        desc={t.desc}
        image={{ src: heroPhoto, alt: 'Industrial applications', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />
      <section className="bg-white py-6">
        <Container>
          <Breadcrumbs lang={lang} items={[{ label: t.title, href: `/${lang}/industries` }]} />
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {t.cats.map((c, i) => (
              <Card key={i} className="p-8 h-full transition hover:opacity-95">
                <Link href={c.href} className="block">
                  <div className="relative mb-6 aspect-[3/2] overflow-hidden rounded-xl bg-gray-100">
                    <Image src={cardPhotos[i] || heroPhoto} alt={`${c.title} project photo`} fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-950 sm:text-xl">{c.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">{c.desc}</p>
                </Link>

                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <Link
                    className="text-accent-600 hover:underline"
                    href={`/${lang}/machines/${categoryMachines[i]}`}
                  >
                    {(exploreLinks.find((x) => x.machine === categoryMachines[i])?.label) || 'Machine'}
                  </Link>
                  <Link
                    className="text-accent-600 hover:underline"
                    href={routeHubByMachine[categoryMachines[i]]}
                  >
                    {`${(exploreLinks.find((x) => x.machine === categoryMachines[i])?.label) || 'Machine'} — ${guidesLabel}`}
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={c.href} variant="secondary" size="sm">
                    {viewCategoryLabel}
                  </ButtonLink>
                  <ButtonLink href={`/${lang}/assessment`} size="sm">
                    {({ en: 'Get Sourcing Advice', cn: '获取采购建议', zh: '取得採購建議', fr: 'Obtenir conseil', es: 'Obtener asesoría', pt: 'Obter assessoria', ko: '소싱 조언 받기', ja: '調達アドバイスを受ける', ar: 'احصل على نصيحة توريد', th: 'รับคำแนะนำการจัดหา', vi: 'Nhận tư vấn nguồn cung', de: 'Sourcing-Beratung erhalten' } as Record<string, string>)[lang] || 'Get Sourcing Advice'}
                  </ButtonLink>
                  <ButtonLink
                    href={`/${lang}/contact`}
                    variant="secondary"
                    size="sm"
                  >
                    {({ en: 'Request Assessment', cn: '获取评估', zh: '取得評估', fr: 'Demander évaluation', es: 'Solicitar evaluación', pt: 'Solicitar avaliação', ko: '평가 요청', ja: '評価依頼', ar: 'طلب تقييم', th: 'ขอการประเมิน', vi: 'Yêu cầu đánh giá', de: 'Bewertung anfordern' } as Record<string, string>)[lang] || 'Request Assessment'}
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">{exploreByMachineTitle}</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {exploreLinks.map((l) => (
                <Link key={l.machine} className="text-accent-600 hover:underline" href={routeHubByMachine[l.machine as (typeof categoryMachines)[number]]}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${lang}/assessment`} size="md">
                {({ en: 'Get Sourcing Advice', cn: '获取采购建议', zh: '取得採購建議', fr: 'Obtenir conseil', es: 'Obtener asesoría', pt: 'Obter assessoria', ko: '소싱 조언 받기', ja: '調達アドバイスを受ける', ar: 'احصل على نصيحة توريد', th: 'รับคำแนะนำการจัดหา', vi: 'Nhận tư vấn nguồn cung', de: 'Sourcing-Beratung erhalten' } as Record<string, string>)[lang] || 'Get Sourcing Advice'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="secondary" size="md">
                {({ en: 'Request Assessment', cn: '获取评估', zh: '取得評估', fr: 'Demander évaluation', es: 'Solicitar evaluación', pt: 'Solicitar avaliação', ko: '평가 요청', ja: '評価依頼', ar: 'طلب تقييم', th: 'ขอการประเมิน', vi: 'Yêu cầu đánh giá', de: 'Bewertung anfordern' } as Record<string, string>)[lang] || 'Request Assessment'}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': `${SITE_URL}/${lang}/industries`,
          url: `${SITE_URL}/${lang}/industries`,
          inLanguage: LANG_META[lang].htmlLang,
          name: metaTitle,
          description: metaDesc,
          isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
          publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
          mainEntity: { '@id': `${SITE_URL}/${lang}/industries#itemlist` },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          '@id': `${SITE_URL}/${lang}/industries#itemlist`,
          inLanguage: LANG_META[lang].htmlLang,
          name: metaTitle,
          description: metaDesc,
          isPartOf: { '@id': `${SITE_URL}/${lang}/industries` },
          itemListElement: t.cats.map((cat: any, i: number) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: cat.title,
            description: cat.desc,
            item: { '@type': 'WebPage', '@id': `${SITE_URL}${cat.href}`, url: `${SITE_URL}${cat.href}`, name: cat.title },
          })),
        },
      ]} />
    </>
  )
}
