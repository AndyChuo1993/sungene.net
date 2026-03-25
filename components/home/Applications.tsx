import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function Applications({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'INDUSTRIES WE SERVE',
      title: 'Machinery for Every Production Need',
      desc: 'Our equipment serves a wide range of industries. Whatever you produce or pack, we have the right machine for your application.',
      categories: [
        { name: 'Powder & Flour Products', examples: 'Spices, Coffee, Milk Powder, Detergent, Pharmaceutical Powder', icon: '🏭' },
        { name: 'Granule & Snack Products', examples: 'Nuts, Seeds, Candy, Pet Food, Frozen Food, Rice', icon: '🔧' },
        { name: 'Liquid & Paste Filling', examples: 'Sauces, Beverages, Cooking Oil, Cosmetics, Chemicals', icon: '⚙️' },
        { name: 'Food Processing', examples: 'Meat, Bakery, Ready Meals, Seafood, Dairy, Vegetables', icon: '🍴' },
        { name: 'Consumer Goods Packaging', examples: 'Hardware, Electronics, Medical Devices, Stationery', icon: '📦' },
        { name: 'Industrial & Chemical', examples: 'Fertilizers, Cement, Adhesives, Paints, Resins', icon: '🔩' },
      ],
      cta: 'Browse All Industries'
    },
    cn: {
      kicker: '服务行业',
      title: '满足各种生产需求的机械',
      desc: '我们的设备服务于广泛的行业。无论您生产或包装什么产品，我们都有适合您应用的机器。',
      categories: [
        { name: '粉末与面粉产品', examples: '香料、咖啡、奶粉、洗涤剂、医药粉末', icon: '🏭' },
        { name: '颗粒与休闲食品', examples: '坚果、种子、糖果、宠物食品、冷冻食品、大米', icon: '🔧' },
        { name: '液体与膏体灌装', examples: '酱料、饮料、食用油、化妆品、化工品', icon: '⚙️' },
        { name: '食品加工', examples: '肉类、烘焙、即食餐、海鲜、乳制品、蔬菜', icon: '🍴' },
        { name: '消费品包装', examples: '五金、电子产品、医疗器械、文具', icon: '📦' },
        { name: '工业与化工', examples: '肥料、水泥、粘合剂、涂料、树脂', icon: '🔩' },
      ],
      cta: '浏览所有行业'
    },
    zh: {
      kicker: '服務行業',
      title: '滿足各種生產需求的機械',
      desc: '我們的設備服務於廣泛的行業。無論您生產或包裝什麼產品，我們都有適合您應用的機器。',
      categories: [
        { name: '粉末與麵粉產品', examples: '香料、咖啡、奶粉、洗滌劑、醫藥粉末', icon: '🏭' },
        { name: '顆粒與休閒食品', examples: '堅果、種子、糖果、寵物食品、冷凍食品、大米', icon: '🔧' },
        { name: '液體與膏體灌裝', examples: '醬料、飲料、食用油、化妝品、化工品', icon: '⚙️' },
        { name: '食品加工', examples: '肉類、烘焙、即食餐、海鮮、乳製品、蔬菜', icon: '🍴' },
        { name: '消費品包裝', examples: '五金、電子產品、醫療器材、文具', icon: '📦' },
        { name: '工業與化工', examples: '肥料、水泥、黏合劑、塗料、樹脂', icon: '🔩' },
      ],
      cta: '瀏覽所有行業'
    },
    fr: {
      kicker: 'INDUSTRIES DESSERVIES',
      title: 'Des machines pour chaque besoin de production',
      desc: 'Nos équipements sont utilisés dans un large éventail d\'industries. Quel que soit votre produit à fabriquer ou emballer, nous avons la machine adaptée à votre application.',
      categories: [
        { name: 'Produits en poudre et farine', examples: 'Épices, café, lait en poudre, détergents, poudres pharmaceutiques', icon: '🏭' },
        { name: 'Granulés et snacks', examples: 'Fruits à coque, graines, confiseries, aliments pour animaux, surgelés, riz', icon: '🔧' },
        { name: 'Remplissage liquides et pâtes', examples: 'Sauces, boissons, huiles alimentaires, cosmétiques, produits chimiques', icon: '⚙️' },
        { name: 'Transformation alimentaire', examples: 'Viande, boulangerie, plats préparés, fruits de mer, produits laitiers, légumes', icon: '🍴' },
        { name: 'Emballage biens de consommation', examples: 'Quincaillerie, électronique, dispositifs médicaux, papeterie', icon: '📦' },
        { name: 'Industrie et chimie', examples: 'Engrais, ciment, adhésifs, peintures, résines', icon: '🔩' },
      ],
      cta: 'Parcourir toutes les industries'
    },
    es: {
      kicker: 'INDUSTRIAS QUE SERVIMOS',
      title: 'Maquinaria para cada necesidad de producción',
      desc: 'Nuestros equipos sirven a una amplia gama de industrias. Sea lo que sea lo que produzca o empaque, tenemos la máquina adecuada para su aplicación.',
      categories: [
        { name: 'Productos en polvo y harina', examples: 'Especias, café, leche en polvo, detergentes, polvos farmacéuticos', icon: '🏭' },
        { name: 'Granulados y snacks', examples: 'Frutos secos, semillas, dulces, alimento para mascotas, congelados, arroz', icon: '🔧' },
        { name: 'Llenado de líquidos y pastas', examples: 'Salsas, bebidas, aceite de cocina, cosméticos, productos químicos', icon: '⚙️' },
        { name: 'Procesamiento de alimentos', examples: 'Carne, panadería, comidas preparadas, mariscos, lácteos, verduras', icon: '🍴' },
        { name: 'Empaque de bienes de consumo', examples: 'Ferretería, electrónica, dispositivos médicos, papelería', icon: '📦' },
        { name: 'Industrial y químico', examples: 'Fertilizantes, cemento, adhesivos, pinturas, resinas', icon: '🔩' },
      ],
      cta: 'Explorar todas las industrias'
    },
    pt: {
      kicker: 'INDÚSTRIAS QUE ATENDEMOS',
      title: 'Maquinário para Cada Necessidade de Produção',
      desc: 'Nossos equipamentos atendem a uma ampla gama de indústrias. Seja o que for que você produza ou embale, temos a máquina certa para a sua aplicação.',
      categories: [
        { name: 'Produtos em Pó e Farinha', examples: 'Temperos, café, leite em pó, detergente, pó farmacêutico', icon: '🏭' },
        { name: 'Grânulos e Snacks', examples: 'Nozes, sementes, doces, ração animal, alimentos congelados, arroz', icon: '🔧' },
        { name: 'Envase de Líquidos e Pastas', examples: 'Molhos, bebidas, óleo de cozinha, cosméticos, produtos químicos', icon: '⚙️' },
        { name: 'Processamento de Alimentos', examples: 'Carnes, panificação, refeições prontas, frutos do mar, laticínios, vegetais', icon: '🍴' },
        { name: 'Embalagem de Bens de Consumo', examples: 'Ferragens, eletrônicos, dispositivos médicos, papelaria', icon: '📦' },
        { name: 'Industrial e Químico', examples: 'Fertilizantes, cimento, adesivos, tintas, resinas', icon: '🔩' },
      ],
      cta: 'Ver Todas as Indústrias'
    },
    ko: {
      kicker: '서비스 산업',
      title: '모든 생산 요구에 맞는 기계',
      desc: '당사의 장비는 다양한 산업에 서비스를 제공합니다. 무엇을 생산하거나 포장하든, 귀사의 용도에 적합한 기계를 보유하고 있습니다.',
      categories: [
        { name: '분말 및 밀가루 제품', examples: '향신료, 커피, 분유, 세제, 의약 분말', icon: '🏭' },
        { name: '과립 및 스낵 제품', examples: '견과류, 씨앗, 사탕, 반려동물 사료, 냉동식품, 쌀', icon: '🔧' },
        { name: '액체 및 페이스트 충전', examples: '소스, 음료, 식용유, 화장품, 화학제품', icon: '⚙️' },
        { name: '식품 가공', examples: '육류, 제과제빵, 즉석식품, 해산물, 유제품, 채소', icon: '🍴' },
        { name: '소비재 포장', examples: '하드웨어, 전자제품, 의료기기, 문구류', icon: '📦' },
        { name: '산업 및 화학', examples: '비료, 시멘트, 접착제, 페인트, 수지', icon: '🔩' },
      ],
      cta: '모든 산업 보기'
    },
    ja: {
      kicker: '対応業界',
      title: 'あらゆる生産ニーズに対応する機械',
      desc: '当社の設備は幅広い業界にサービスを提供しています。何を生産・包装されても、お客様の用途に最適な機械をご用意しています。',
      categories: [
        { name: '粉末・小麦粉製品', examples: 'スパイス、コーヒー、粉ミルク、洗剤、医薬品粉末', icon: '🏭' },
        { name: '顆粒・スナック製品', examples: 'ナッツ、種子、キャンディ、ペットフード、冷凍食品、米', icon: '🔧' },
        { name: '液体・ペースト充填', examples: 'ソース、飲料、食用油、化粧品、化学薬品', icon: '⚙️' },
        { name: '食品加工', examples: '肉類、ベーカリー、調理済み食品、水産物、乳製品、野菜', icon: '🍴' },
        { name: '消費財包装', examples: '金物、電子機器、医療機器、文房具', icon: '📦' },
        { name: '工業・化学', examples: '肥料、セメント、接着剤、塗料、樹脂', icon: '🔩' },
      ],
      cta: '全業界を見る'
    },
    ar: {
      kicker: 'الصناعات التي نخدمها',
      title: 'ماكينات لكل احتياجات الإنتاج',
      desc: 'تخدم معداتنا مجموعة واسعة من الصناعات. مهما كان ما تنتجه أو تعبئه، لدينا الماكينة المناسبة لتطبيقك.',
      categories: [
        { name: 'منتجات المساحيق والدقيق', examples: 'التوابل، القهوة، الحليب المجفف، المنظفات، المساحيق الدوائية', icon: '🏭' },
        { name: 'منتجات الحبيبات والوجبات الخفيفة', examples: 'المكسرات، البذور، الحلويات، أغذية الحيوانات، الأغذية المجمدة، الأرز', icon: '🔧' },
        { name: 'تعبئة السوائل والمعاجين', examples: 'الصلصات، المشروبات، زيت الطبخ، مستحضرات التجميل، المواد الكيميائية', icon: '⚙️' },
        { name: 'تصنيع الأغذية', examples: 'اللحوم، المخبوزات، الوجبات الجاهزة، المأكولات البحرية، الألبان، الخضروات', icon: '🍴' },
        { name: 'تعبئة السلع الاستهلاكية', examples: 'الأدوات المعدنية، الإلكترونيات، الأجهزة الطبية، القرطاسية', icon: '📦' },
        { name: 'صناعي وكيميائي', examples: 'الأسمدة، الأسمنت، المواد اللاصقة، الدهانات، الراتنجات', icon: '🔩' },
      ],
      cta: 'تصفح جميع الصناعات'
    },
    th: {
      kicker: 'อุตสาหกรรมที่เราให้บริการ',
      title: 'เครื่องจักรสำหรับทุกความต้องการในการผลิต',
      desc: 'อุปกรณ์ของเราให้บริการอุตสาหกรรมที่หลากหลาย ไม่ว่าคุณจะผลิตหรือบรรจุอะไร เรามีเครื่องจักรที่เหมาะสมสำหรับการใช้งานของคุณ',
      categories: [
        { name: 'ผลิตภัณฑ์ผงและแป้ง', examples: 'เครื่องเทศ, กาแฟ, นมผง, ผงซักฟอก, ผงยา', icon: '🏭' },
        { name: 'ผลิตภัณฑ์เม็ดและขนมขบเคี้ยว', examples: 'ถั่ว, เมล็ดพืช, ลูกอม, อาหารสัตว์เลี้ยง, อาหารแช่แข็ง, ข้าว', icon: '🔧' },
        { name: 'บรรจุของเหลวและครีม', examples: 'ซอส, เครื่องดื่ม, น้ำมันปรุงอาหาร, เครื่องสำอาง, เคมีภัณฑ์', icon: '⚙️' },
        { name: 'แปรรูปอาหาร', examples: 'เนื้อสัตว์, เบเกอรี่, อาหารพร้อมทาน, อาหารทะเล, นม, ผัก', icon: '🍴' },
        { name: 'บรรจุภัณฑ์สินค้าอุปโภคบริโภค', examples: 'ฮาร์ดแวร์, อิเล็กทรอนิกส์, อุปกรณ์การแพทย์, เครื่องเขียน', icon: '📦' },
        { name: 'อุตสาหกรรมและเคมี', examples: 'ปุ๋ย, ซีเมนต์, กาว, สี, เรซิน', icon: '🔩' },
      ],
      cta: 'ดูอุตสาหกรรมทั้งหมด'
    },
    vi: {
      kicker: 'NGÀNH CÔNG NGHIỆP PHỤC VỤ',
      title: 'Máy Móc Cho Mọi Nhu Cầu Sản Xuất',
      desc: 'Thiết bị của chúng tôi phục vụ nhiều ngành công nghiệp. Dù bạn sản xuất hay đóng gói bất kỳ sản phẩm nào, chúng tôi đều có máy phù hợp cho ứng dụng của bạn.',
      categories: [
        { name: 'Sản phẩm Bột và Bột mì', examples: 'Gia vị, cà phê, sữa bột, bột giặt, bột dược phẩm', icon: '🏭' },
        { name: 'Sản phẩm Hạt và Snack', examples: 'Hạt, hạt giống, kẹo, thức ăn thú cưng, thực phẩm đông lạnh, gạo', icon: '🔧' },
        { name: 'Chiết rót Chất lỏng và Kem', examples: 'Nước sốt, đồ uống, dầu ăn, mỹ phẩm, hóa chất', icon: '⚙️' },
        { name: 'Chế biến Thực phẩm', examples: 'Thịt, bánh mì, bữa ăn sẵn, hải sản, sữa, rau củ', icon: '🍴' },
        { name: 'Đóng gói Hàng tiêu dùng', examples: 'Kim khí, điện tử, thiết bị y tế, văn phòng phẩm', icon: '📦' },
        { name: 'Công nghiệp và Hóa chất', examples: 'Phân bón, xi măng, keo dán, sơn, nhựa thông', icon: '🔩' },
      ],
      cta: 'Xem Tất Cả Ngành Nghề'
    },
    de: {
      kicker: 'BRANCHEN, DIE WIR BEDIENEN',
      title: 'Maschinen für jeden Produktionsbedarf',
      desc: 'Unsere Ausrüstung bedient ein breites Spektrum an Branchen. Was auch immer Sie produzieren oder verpacken, wir haben die richtige Maschine für Ihre Anwendung.',
      categories: [
        { name: 'Pulver- und Mehlprodukte', examples: 'Gewürze, Kaffee, Milchpulver, Waschmittel, pharmazeutisches Pulver', icon: '🏭' },
        { name: 'Granulat- und Snackprodukte', examples: 'Nüsse, Samen, Süßigkeiten, Tiernahrung, Tiefkühlkost, Reis', icon: '🔧' },
        { name: 'Flüssigkeits- und Pastenabfüllung', examples: 'Soßen, Getränke, Speiseöl, Kosmetik, Chemikalien', icon: '⚙️' },
        { name: 'Lebensmittelverarbeitung', examples: 'Fleisch, Backwaren, Fertiggerichte, Meeresfrüchte, Milchprodukte, Gemüse', icon: '🍴' },
        { name: 'Konsumgüterverpackung', examples: 'Eisenwaren, Elektronik, Medizinprodukte, Schreibwaren', icon: '📦' },
        { name: 'Industrie und Chemie', examples: 'Düngemittel, Zement, Klebstoffe, Farben, Harze', icon: '🔩' },
      ],
      cta: 'Alle Branchen durchsuchen'
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-600">{t.kicker}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">{t.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{t.desc}</p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.categories.map((cat: any, i: number) => (
            <div key={i} className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-accent-200 hover:bg-accent-50/50 hover:shadow-elev-1">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-gray-950">{cat.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{cat.examples}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href={`/${lang}/industries`} className="inline-flex items-center gap-2 text-base font-semibold text-accent-600 transition hover:text-accent-700">
            {t.cta}
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </Container>
    </section>
  )
}
