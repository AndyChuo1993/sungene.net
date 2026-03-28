import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

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
  const langs = ['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de']
  const l = langs.includes(lang) ? lang : 'en'
  return {
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    keywords: ['food packaging machinery', 'beverage filling equipment', 'pharmaceutical packaging', 'cosmetic filling machine', 'powder packaging industry', 'liquid filling industry', 'industrial packaging solutions'],
    alternates: {
      canonical: `https://sungene.net/${l}/industries`,
      languages: {
        'en': 'https://sungene.net/en/industries',
        'zh-TW': 'https://sungene.net/zh/industries',
        'zh-CN': 'https://sungene.net/cn/industries',
        'fr': 'https://sungene.net/fr/industries',
        'es': 'https://sungene.net/es/industries',
        'pt': 'https://sungene.net/pt/industries',
        'ko': 'https://sungene.net/ko/industries',
        'ja': 'https://sungene.net/ja/industries',
        'ar': 'https://sungene.net/ar/industries',
        'th': 'https://sungene.net/th/industries',
        'vi': 'https://sungene.net/vi/industries',
        'de': 'https://sungene.net/de/industries',
        'x-default': 'https://sungene.net/en/industries',
      }
    },
    openGraph: {
      title: titles[l] || titles.en,
      description: descriptions[l] || descriptions.en,
      url: `https://sungene.net/${l}/industries`,
      siteName: 'SunGene Machinery',
      images: [{ url: 'https://sungene.net/og/og.png', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: titles[l] || titles.en, description: descriptions[l] || descriptions.en, images: ['https://sungene.net/og/og.png'] },
  }
}

export default async function IndustriesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, { title: string; desc: string; cats: { title: string; desc: string; href: string }[] }> = {
    en: {
      title: 'Industries & Applications',
      desc: 'Our machinery serves diverse industries worldwide. By understanding your product type, workflow, and output expectations, we recommend the most suitable equipment for your production environment.',
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
      desc: '我们的机械服务于全球多种行业。通过了解您的产品类型、工作流和产能期望，我们推荐最适合您生产环境的设备。',
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
      desc: '我們的機械服務於全球多種行業。透過了解您的產品類型、工作流和產能期望，我們推薦最適合您生產環境的設備。',
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
      desc: 'Nos machines servent diverses industries dans le monde entier. En comprenant votre type de produit, votre flux de travail et vos attentes de production, nous recommandons l\'équipement le plus adapté.',
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
      desc: 'Nuestra maquinaria sirve a diversas industrias en todo el mundo. Al comprender su tipo de producto, flujo de trabajo y expectativas de producción, recomendamos el equipo más adecuado.',
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
      desc: 'Nosso maquinário atende diversas indústrias em todo o mundo. Ao compreender o tipo de produto, fluxo de trabalho e expectativas de produção, recomendamos o equipamento mais adequado para seu ambiente de produção.',
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
      desc: '당사의 기계는 전 세계 다양한 산업에 서비스를 제공합니다. 제품 유형, 작업 흐름 및 생산 기대치를 파악하여 생산 환경에 가장 적합한 장비를 추천합니다.',
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
      desc: '当社の機械は世界中の多様な業界にサービスを提供しています。お客様の製品タイプ、ワークフロー、生産目標を理解し、最適な設備をご提案します。',
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
      desc: 'تخدم ماكيناتنا صناعات متنوعة حول العالم. من خلال فهم نوع منتجك وسير العمل وتوقعات الإنتاج، نوصي بالمعدات الأنسب لبيئة الإنتاج الخاصة بك.',
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
      desc: 'เครื่องจักรของเราให้บริการอุตสาหกรรมที่หลากหลายทั่วโลก ด้วยการเข้าใจประเภทผลิตภัณฑ์ ขั้นตอนการทำงาน และความคาดหวังด้านการผลิตของคุณ เราจะแนะนำอุปกรณ์ที่เหมาะสมที่สุด',
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
      desc: 'Máy móc của chúng tôi phục vụ nhiều ngành công nghiệp trên toàn thế giới. Bằng cách hiểu loại sản phẩm, quy trình làm việc và kỳ vọng sản xuất, chúng tôi đề xuất thiết bị phù hợp nhất.',
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
      desc: 'Unsere Maschinen bedienen verschiedenste Branchen weltweit. Durch das Verständnis Ihres Produkttyps, Arbeitsablaufs und Ihrer Produktionserwartungen empfehlen wir die am besten geeignete Ausrüstung.',
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

  return (
    <>
      <PageHeader title={t.title} desc={t.desc} />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {t.cats.map((c, i) => (
              <Link key={i} href={c.href} className="block transition hover:opacity-90">
                <Card className="p-8 h-full">
                  <h2 className="text-lg font-semibold text-gray-950 sm:text-xl">{c.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">{c.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: t.title,
        description: t.desc,
        itemListElement: t.cats.map((cat: any, i: number) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: cat.title,
          description: cat.desc,
          url: `https://sungene.net${cat.href}`,
        })),
      }} />
    </>
  )
}
