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
  en: 'Industries & Applications | SunGene',
  cn: '行业与应用｜SunGene',
  zh: '產業與應用｜SunGene',
  fr: 'Industries et applications | SunGene',
  es: 'Industrias y aplicaciones | SunGene',
  pt: 'Indústrias e Aplicações | SunGene',
  ko: '산업 및 응용 분야 | SunGene',
  ja: '業界・用途 | SunGene',
  ar: 'الصناعات والتطبيقات | SunGene',
  th: 'อุตสาหกรรมและการประยุกต์ใช้ | SunGene',
  vi: 'Ngành Công Nghiệp & Ứng Dụng | SunGene',
  de: 'Branchen & Anwendungen | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'SunGene machinery serves food, beverage, pharmaceutical, cosmetic, and industrial sectors. Packaging, filling, processing, and automation equipment for powder, liquid, granule, and solid products.',
  cn: 'SunGene机械服务于食品、饮料、制药、化妆品和工业行业。适用于粉末、液体、颗粒和固体产品的包装、灌装、加工和自动化设备。',
  zh: 'SunGene機械服務於食品、飲料、製藥、化妝品和工業行業。適用於粉末、液體、顆粒和固體產品的包裝、灌裝、加工和自動化設備。',
  fr: 'Les machines SunGene servent les secteurs alimentaire, boisson, pharmaceutique, cosmétique et industriel. Équipements pour produits en poudre, liquide, granulé et solide.',
  es: 'Maquinaria SunGene sirve a industrias alimentaria, bebidas, farmacéutica, cosmética e industrial. Equipos de empaque, llenado, procesamiento y automatización.',
  pt: 'Maquinário SunGene atende setores de alimentos, bebidas, farmacêutico, cosmético e industrial. Equipamentos para produtos em pó, líquido, grânulo e sólido.',
  ko: 'SunGene 기계는 식품, 음료, 제약, 화장품, 산업 분야를 지원합니다. 분말, 액체, 과립, 고체 제품용 포장, 충전, 가공, 자동화 장비.',
  ja: 'SunGeneの機械は食品、飲料、製薬、化粧品、工業分野に対応。粉末、液体、顆粒、固体製品向けの包装・充填・加工・自動化設備。',
  ar: 'تخدم آلات SunGene قطاعات الأغذية والمشروبات والأدوية ومستحضرات التجميل والصناعة. معدات تعبئة وتغليف ومعالجة وأتمتة للمنتجات المسحوقة والسائلة والحبيبية والصلبة.',
  th: 'เครื่องจักร SunGene ให้บริการอุตสาหกรรมอาหาร เครื่องดื่ม ยา เครื่องสำอาง และอุตสาหกรรม อุปกรณ์บรรจุภัณฑ์ การเติม การแปรรูป และระบบอัตโนมัติ',
  vi: 'Máy SunGene phục vụ ngành thực phẩm, đồ uống, dược phẩm, mỹ phẩm và công nghiệp. Thiết bị đóng gói, chiết rót, chế biến và tự động hóa.',
  de: 'SunGene-Maschinen bedienen Lebensmittel-, Getränke-, Pharma-, Kosmetik- und Industriesektoren. Ausrüstung für Pulver-, Flüssigkeits-, Granulat- und Feststoffprodukte.',
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
    keywords: ['food packaging machinery', 'beverage filling equipment', 'pharmaceutical packaging', 'cosmetic filling machine', 'powder packaging industry', 'liquid filling industry', 'industrial packaging solutions'],
  })
}

export default async function IndustriesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, { title: string; desc: string; cats: { title: string; desc: string; href: string }[] }> = {
    en: {
      title: 'Industries & Applications',
      desc: 'Use this page to map your product category to the right machine families. For a fast recommendation, share product state, package type, fill range, target speed, and basic line layout.',
      cats: [
        { title: 'Powder Products', desc: 'Spices, coffee, milk powder, flour, detergent, pharmaceutical powder — filling, dosing, and packaging machinery.', href: `/${lang}/machinery/packaging` },
        { title: 'Liquid Products', desc: 'Beverages, sauces, cooking oil, cosmetics, chemicals — filling, sealing, conveying, and labeling systems.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Granule & Snack Products', desc: 'Nuts, seeds, candy, pet food, frozen food, rice — weighing, feeding, packaging, and case packing.', href: `/${lang}/machinery/food-processing` },
        { title: 'Food Production', desc: 'Meat, bakery, ready meals, seafood, dairy — processing, cooking, mixing, and preparation lines.', href: `/${lang}/machinery/food-processing` },
        { title: 'Consumer & Industrial Goods', desc: 'Hardware, electronics, medical devices, fertilizers, cement — packaging, palletizing, and automation.', href: `/${lang}/machinery/packaging` }
      ]
    },
    cn: {
      title: '行业与应用',
      desc: '这页用于把“产品类型”对应到合适的设备方向。若需快速推荐，请提供产品形态、包装/容器、灌装范围、目标产速，以及现场布局概况。',
      cats: [
        { title: '粉末产品', desc: '香料、咖啡、奶粉、面粉、洗涤剂、医药粉末——灌装、计量和包装机械。', href: `/${lang}/machinery/packaging` },
        { title: '液体产品', desc: '饮料、酱料、食用油、化妆品、化工品——灌装、封口、输送和贴标系统。', href: `/${lang}/machinery/filling-sealing` },
        { title: '颗粒与休闲食品', desc: '坚果、种子、糖果、宠物食品、冷冻食品、大米——称重、进料、包装和装箱。', href: `/${lang}/machinery/food-processing` },
        { title: '食品生产', desc: '肉类、烘焙、即食餐、海鲜、乳制品——加工、蒸煮、搅拌和备料产线。', href: `/${lang}/machinery/food-processing` },
        { title: '消费品与工业品', desc: '五金、电子、医疗器械、肥料、水泥——包装、码垛和自动化。', href: `/${lang}/machinery/packaging` }
      ]
    },
    zh: {
      title: '產業與應用',
      desc: '這頁用來把「產品類型」對應到合適的設備方向。若需要快速推薦，請提供產品形態、包材/容器、灌裝範圍、目標產速，以及現場佈局概況。',
      cats: [
        { title: '粉末產品', desc: '香料、咖啡、奶粉、麵粉、洗滌劑、醫藥粉末——灌裝、計量和包裝機械。', href: `/${lang}/machinery/packaging` },
        { title: '液體產品', desc: '飲料、醬料、食用油、化妝品、化工品——灌裝、封口、輸送和貼標系統。', href: `/${lang}/machinery/filling-sealing` },
        { title: '顆粒與休閒食品', desc: '堅果、種子、糖果、寵物食品、冷凍食品、大米——稱重、進料、包裝和裝箱。', href: `/${lang}/machinery/food-processing` },
        { title: '食品生產', desc: '肉類、烘焙、即食餐、海鮮、乳製品——加工、蒸煮、攪拌和備料產線。', href: `/${lang}/machinery/food-processing` },
        { title: '消費品與工業品', desc: '五金、電子、醫療器材、肥料、水泥——包裝、碼垛和自動化。', href: `/${lang}/machinery/packaging` }
      ]
    },
    fr: {
      title: 'Industries et applications',
      desc: 'Cette page aide à relier votre catégorie de produit aux familles de machines. Pour une recommandation rapide, indiquez l’état du produit, le format, la plage de dosage, la cadence cible et le layout.',
      cats: [
        { title: 'Produits en poudre', desc: 'Épices, café, lait en poudre, farine, détergents, poudre pharmaceutique — machines de dosage, remplissage et conditionnement.', href: `/${lang}/machinery/packaging` },
        { title: 'Produits liquides', desc: 'Boissons, sauces, huile alimentaire, cosmétiques, produits chimiques — systèmes de remplissage, scellage, convoyage et étiquetage.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Granulés et snacks', desc: 'Noix, graines, confiseries, aliments pour animaux, surgelés, riz — pesage, alimentation, conditionnement et mise en carton.', href: `/${lang}/machinery/food-processing` },
        { title: 'Production alimentaire', desc: 'Viande, boulangerie, plats préparés, fruits de mer, produits laitiers — lignes de transformation, cuisson, mélange et préparation.', href: `/${lang}/machinery/food-processing` },
        { title: 'Biens de consommation et industriels', desc: 'Quincaillerie, électronique, dispositifs médicaux, engrais, ciment — conditionnement, palettisation et automatisation.', href: `/${lang}/machinery/packaging` }
      ]
    },
    es: {
      title: 'Industrias y aplicaciones',
      desc: 'Esta página conecta su categoría de producto con familias de máquinas. Para una recomendación rápida, comparta estado del producto, formato, rango de llenado, velocidad objetivo y layout de línea.',
      cats: [
        { title: 'Productos en polvo', desc: 'Especias, café, leche en polvo, harina, detergentes, polvo farmacéutico — máquinas de dosificación, llenado y envasado.', href: `/${lang}/machinery/packaging` },
        { title: 'Productos líquidos', desc: 'Bebidas, salsas, aceite de cocina, cosméticos, químicos — sistemas de llenado, sellado, transporte y etiquetado.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Granulados y snacks', desc: 'Nueces, semillas, dulces, alimento para mascotas, congelados, arroz — pesaje, alimentación, empaque y encajado.', href: `/${lang}/machinery/food-processing` },
        { title: 'Producción alimentaria', desc: 'Carne, panadería, comidas preparadas, mariscos, lácteos — líneas de procesamiento, cocción, mezclado y preparación.', href: `/${lang}/machinery/food-processing` },
        { title: 'Bienes de consumo e industriales', desc: 'Ferretería, electrónica, dispositivos médicos, fertilizantes, cemento — empaque, paletizado y automatización.', href: `/${lang}/machinery/packaging` }
      ]
    },
    pt: {
      title: 'Indústrias e Aplicações',
      desc: 'Esta página liga sua categoria de produto às famílias de máquinas. Para uma recomendação rápida, informe estado do produto, formato, faixa de dosagem, velocidade-alvo e layout da linha.',
      cats: [
        { title: 'Produtos em Pó', desc: 'Temperos, café, leite em pó, farinha, detergente, pó farmacêutico — máquinas de envase, dosagem e embalagem.', href: `/${lang}/machinery/packaging` },
        { title: 'Produtos Líquidos', desc: 'Bebidas, molhos, óleo de cozinha, cosméticos, produtos químicos — sistemas de envase, selagem, transporte e rotulagem.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Grânulos e Snacks', desc: 'Nozes, sementes, doces, ração animal, alimentos congelados, arroz — pesagem, alimentação, embalagem e encaixotamento.', href: `/${lang}/machinery/food-processing` },
        { title: 'Produção de Alimentos', desc: 'Carnes, panificação, refeições prontas, frutos do mar, laticínios — linhas de processamento, cozimento, mistura e preparação.', href: `/${lang}/machinery/food-processing` },
        { title: 'Bens de Consumo e Industriais', desc: 'Ferragens, eletrônicos, dispositivos médicos, fertilizantes, cimento — embalagem, paletização e automação.', href: `/${lang}/machinery/packaging` }
      ]
    },
    ko: {
      title: '산업 및 응용 분야',
      desc: '이 페이지는 제품 카테고리별로 적합한 장비군을 빠르게 찾기 위한 안내입니다. 추천이 필요하면 제품 형태, 포장 형식, 충전 범위, 목표 속도, 라인 레이아웃을 알려주세요.',
      cats: [
        { title: '분말 제품', desc: '향신료, 커피, 분유, 밀가루, 세제, 의약 분말 — 충전, 계량 및 포장 기계.', href: `/${lang}/machinery/packaging` },
        { title: '액체 제품', desc: '음료, 소스, 식용유, 화장품, 화학제품 — 충전, 밀봉, 이송 및 라벨링 시스템.', href: `/${lang}/machinery/filling-sealing` },
        { title: '과립 및 스낵 제품', desc: '견과류, 씨앗, 사탕, 반려동물 사료, 냉동식품, 쌀 — 계량, 공급, 포장 및 케이스 패킹.', href: `/${lang}/machinery/food-processing` },
        { title: '식품 생산', desc: '육류, 제과제빵, 즉석식품, 해산물, 유제품 — 가공, 조리, 혼합 및 준비 라인.', href: `/${lang}/machinery/food-processing` },
        { title: '소비재 및 산업재', desc: '하드웨어, 전자제품, 의료기기, 비료, 시멘트 — 포장, 팔레타이징 및 자동화.', href: `/${lang}/machinery/packaging` }
      ]
    },
    ja: {
      title: '業界・用途',
      desc: 'このページは、製品カテゴリーから設備の方向性を素早く把握するためのガイドです。推奨が必要な場合は、製品状態、包装形態、充填範囲、目標能力、ラインレイアウトをご共有ください。',
      cats: [
        { title: '粉末製品', desc: 'スパイス、コーヒー、粉ミルク、小麦粉、洗剤、医薬品粉末 — 充填、計量、包装機械。', href: `/${lang}/machinery/packaging` },
        { title: '液体製品', desc: '飲料、ソース、食用油、化粧品、化学薬品 — 充填、シーリング、搬送、ラベリングシステム。', href: `/${lang}/machinery/filling-sealing` },
        { title: '顆粒・スナック製品', desc: 'ナッツ、種子、キャンディ、ペットフード、冷凍食品、米 — 計量、供給、包装、ケースパッキング。', href: `/${lang}/machinery/food-processing` },
        { title: '食品生産', desc: '肉類、ベーカリー、調理済み食品、水産物、乳製品 — 加工、調理、混合、準備ライン。', href: `/${lang}/machinery/food-processing` },
        { title: '消費財・産業財', desc: '金物、電子機器、医療機器、肥料、セメント — 包装、パレタイジング、自動化。', href: `/${lang}/machinery/packaging` }
      ]
    },
    ar: {
      title: 'الصناعات والتطبيقات',
      desc: 'هذه الصفحة تربط فئة منتجك بعائلات الماكينات المناسبة. للحصول على توصية سريعة، شارك حالة المنتج ونوع العبوة ونطاق التعبئة والسرعة المطلوبة وتخطيط الخط.',
      cats: [
        { title: 'منتجات المساحيق', desc: 'التوابل، القهوة، الحليب المجفف، الدقيق، المنظفات، المساحيق الدوائية — ماكينات التعبئة والجرعات والتغليف.', href: `/${lang}/machinery/packaging` },
        { title: 'المنتجات السائلة', desc: 'المشروبات، الصلصات، زيت الطبخ، مستحضرات التجميل، المواد الكيميائية — أنظمة التعبئة والختم والنقل ووضع العلامات.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'منتجات الحبيبات والوجبات الخفيفة', desc: 'المكسرات، البذور، الحلويات، أغذية الحيوانات، الأغذية المجمدة، الأرز — الوزن والتغذية والتعبئة والتعليب.', href: `/${lang}/machinery/food-processing` },
        { title: 'إنتاج الأغذية', desc: 'اللحوم، المخبوزات، الوجبات الجاهزة، المأكولات البحرية، الألبان — خطوط المعالجة والطبخ والخلط والتحضير.', href: `/${lang}/machinery/food-processing` },
        { title: 'السلع الاستهلاكية والصناعية', desc: 'الأدوات المعدنية، الإلكترونيات، الأجهزة الطبية، الأسمدة، الأسمنت — التعبئة والتحميل على المنصات والأتمتة.', href: `/${lang}/machinery/packaging` }
      ]
    },
    th: {
      title: 'อุตสาหกรรมและการประยุกต์ใช้',
      desc: 'หน้านี้ช่วยจับคู่ “ประเภทสินค้า” กับกลุ่มเครื่องจักรที่เหมาะสม หากต้องการคำแนะนำเร็ว ๆ โปรดแจ้งลักษณะสินค้า รูปแบบบรรจุภัณฑ์ ช่วงการบรรจุ ความเร็วเป้าหมาย และเลย์เอาต์ไลน์',
      cats: [
        { title: 'ผลิตภัณฑ์ผง', desc: 'เครื่องเทศ, กาแฟ, นมผง, แป้ง, ผงซักฟอก, ผงยา — เครื่องบรรจุ, ตวงจ่าย และบรรจุภัณฑ์', href: `/${lang}/machinery/packaging` },
        { title: 'ผลิตภัณฑ์ของเหลว', desc: 'เครื่องดื่ม, ซอส, น้ำมันปรุงอาหาร, เครื่องสำอาง, เคมีภัณฑ์ — ระบบบรรจุ, ปิดผนึก, ลำเลียง และติดฉลาก', href: `/${lang}/machinery/filling-sealing` },
        { title: 'ผลิตภัณฑ์เม็ดและขนมขบเคี้ยว', desc: 'ถั่ว, เมล็ดพืช, ลูกอม, อาหารสัตว์เลี้ยง, อาหารแช่แข็ง, ข้าว — ชั่งน้ำหนัก, ป้อน, บรรจุ และจัดเรียง', href: `/${lang}/machinery/food-processing` },
        { title: 'การผลิตอาหาร', desc: 'เนื้อสัตว์, เบเกอรี่, อาหารพร้อมทาน, อาหารทะเล, นม — สายการแปรรูป, ปรุงอาหาร, ผสม และเตรียม', href: `/${lang}/machinery/food-processing` },
        { title: 'สินค้าอุปโภคบริโภคและอุตสาหกรรม', desc: 'ฮาร์ดแวร์, อิเล็กทรอนิกส์, อุปกรณ์การแพทย์, ปุ๋ย, ซีเมนต์ — บรรจุภัณฑ์, จัดเรียงพาเลท และอัตโนมัติ', href: `/${lang}/machinery/packaging` }
      ]
    },
    vi: {
      title: 'Ngành Công Nghiệp & Ứng Dụng',
      desc: 'Trang này giúp ghép “nhóm sản phẩm” với các dòng máy phù hợp. Để nhận tư vấn nhanh, hãy gửi trạng thái sản phẩm, kiểu bao bì, dải chiết rót, tốc độ mục tiêu và layout dây chuyền.',
      cats: [
        { title: 'Sản phẩm Bột', desc: 'Gia vị, cà phê, sữa bột, bột mì, bột giặt, bột dược phẩm — máy chiết rót, định lượng và đóng gói.', href: `/${lang}/machinery/packaging` },
        { title: 'Sản phẩm Lỏng', desc: 'Đồ uống, nước sốt, dầu ăn, mỹ phẩm, hóa chất — hệ thống chiết rót, seal, băng tải và dán nhãn.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Sản phẩm Hạt và Snack', desc: 'Hạt, hạt giống, kẹo, thức ăn thú cưng, thực phẩm đông lạnh, gạo — cân, nạp liệu, đóng gói và đóng thùng.', href: `/${lang}/machinery/food-processing` },
        { title: 'Sản xuất Thực phẩm', desc: 'Thịt, bánh mì, bữa ăn sẵn, hải sản, sữa — dây chuyền chế biến, nấu, trộn và chuẩn bị.', href: `/${lang}/machinery/food-processing` },
        { title: 'Hàng Tiêu dùng & Công nghiệp', desc: 'Kim khí, điện tử, thiết bị y tế, phân bón, xi măng — đóng gói, xếp pallet và tự động hóa.', href: `/${lang}/machinery/packaging` }
      ]
    },
    de: {
      title: 'Branchen & Anwendungen',
      desc: 'Diese Seite ordnet Produktkategorien den passenden Maschinenfamilien zu. Für eine schnelle Empfehlung: Produktzustand, Verpackungsformat, Füllbereich, Zielleistung und Layout der Linie senden.',
      cats: [
        { title: 'Pulverprodukte', desc: 'Gewürze, Kaffee, Milchpulver, Mehl, Waschmittel, Pharmapulver — Abfüll-, Dosier- und Verpackungsmaschinen.', href: `/${lang}/machinery/packaging` },
        { title: 'Flüssigprodukte', desc: 'Getränke, Soßen, Speiseöl, Kosmetik, Chemikalien — Abfüll-, Versiegelungs-, Förder- und Etikettiersysteme.', href: `/${lang}/machinery/filling-sealing` },
        { title: 'Granulat- und Snackprodukte', desc: 'Nüsse, Samen, Süßigkeiten, Tiernahrung, Tiefkühlkost, Reis — Wiegen, Zuführen, Verpacken und Kartonieren.', href: `/${lang}/machinery/food-processing` },
        { title: 'Lebensmittelproduktion', desc: 'Fleisch, Backwaren, Fertiggerichte, Meeresfrüchte, Milchprodukte — Verarbeitungs-, Koch-, Misch- und Vorbereitungslinien.', href: `/${lang}/machinery/food-processing` },
        { title: 'Konsumgüter und Industriegüter', desc: 'Eisenwaren, Elektronik, Medizinprodukte, Düngemittel, Zement — Verpackung, Palettierung und Automatisierung.', href: `/${lang}/machinery/packaging` }
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
        ({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Líquidos', pt: 'Líquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[lang] ||
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
                    <Image src={cardPhotos[i] || heroPhoto} alt={`${c.title} factory photo`} fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
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
                    href={`/${lang}/resources/topic/${categoryMachines[i]}`}
                  >
                    {`${(exploreLinks.find((x) => x.machine === categoryMachines[i])?.label) || 'Machine'} — ${guidesLabel}`}
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={c.href} variant="secondary" size="sm">
                    {viewCategoryLabel}
                  </ButtonLink>
                  <ButtonLink href={`/${lang}/recommend?machine=${encodeURIComponent(categoryMachines[i])}`} size="sm">
                    {({ en: 'Get a Recommendation', cn: '获取推荐', zh: '取得推薦', fr: 'Obtenir une recommandation', es: 'Obtener recomendación', pt: 'Obter recomendação', ko: '추천 받기', ja: '推薦を受ける', ar: 'احصل على توصية', th: 'รับคำแนะนำ', vi: 'Nhận đề xuất', de: 'Empfehlung erhalten' } as Record<string, string>)[lang] || 'Get a Recommendation'}
                  </ButtonLink>
                  <ButtonLink
                    href={`/${lang}/contact?machine=${encodeURIComponent(categoryMachines[i])}&product=${encodeURIComponent(c.title)}`}
                    variant="secondary"
                    size="sm"
                  >
                    {({ en: 'Request a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 요청', ja: '見積依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Yêu cầu báo giá', de: 'Angebot anfordern' } as Record<string, string>)[lang] || 'Request a Quote'}
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">{exploreByMachineTitle}</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {exploreLinks.map((l) => (
                <Link key={l.machine} className="text-accent-600 hover:underline" href={`/${lang}/resources/topic/${l.machine}`}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${lang}/recommend`} size="md">
                {({ en: 'Get a Recommendation', cn: '获取推荐', zh: '取得推薦', fr: 'Obtenir une recommandation', es: 'Obtener recomendación', pt: 'Obter recomendação', ko: '추천 받기', ja: '推薦を受ける', ar: 'احصل على توصية', th: 'รับคำแนะนำ', vi: 'Nhận đề xuất', de: 'Empfehlung erhalten' } as Record<string, string>)[lang] || 'Get a Recommendation'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="secondary" size="md">
                {({ en: 'Request a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 요청', ja: '見積依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Yêu cầu báo giá', de: 'Angebot anfordern' } as Record<string, string>)[lang] || 'Request a Quote'}
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
          name: t.title,
          description: t.desc,
          isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
          publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          inLanguage: LANG_META[lang].htmlLang,
          name: t.title,
          description: t.desc,
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
