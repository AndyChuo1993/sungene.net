import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function Applications({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'WHAT WE SOURCE',
      title: 'Categories we cover today',
      desc: 'These are the buckets where we have a working supplier list and active monthly buying. Adjacent items are taken case-by-case for long-term partners.',
      categories: [
        { name: 'Flexible packaging', examples: 'Stand-up pouches, ziplock bags, kraft bags, films, sachets, vacuum bags', icon: '🛍️' },
        { name: 'Rigid packaging', examples: 'Glass jars, plastic bottles, tin containers, gift boxes, pumps & closures', icon: '🫙' },
        { name: 'Kitchen & dining', examples: 'Cookware, storage containers, utensils, glassware, table accessories', icon: '🍽️' },
        { name: 'Home decor & organisation', examples: 'Baskets, storage bins, candles, fragrance, small living accessories', icon: '🏠' },
        { name: 'Garden & outdoor', examples: 'Hand tools, planters, watering cans, hose accessories, patio items', icon: '🪴' },
        { name: 'Beauty & personal care containers', examples: 'Cosmetic jars, dropper bottles, airless pumps, lipstick tubes, sample vials', icon: '🧴' },
      ],
      cta: 'Talk to us about your category'
    },
    cn: {
      kicker: '我们的采购品类',
      title: '现在覆盖的品类',
      desc: '下面这些是我们已经有稳定供应商名单、每月都在买的品类。相邻品类对长期合作客户我们按个案接。',
      categories: [
        { name: '软包装', examples: '立袋、夹链袋、牛皮纸袋、薄膜、随身包、真空袋', icon: '🛍️' },
        { name: '硬包装', examples: '玻璃罐、塑胶瓶、马口铁罐、礼盒、泵头与封口', icon: '🫙' },
        { name: '厨房与餐桌', examples: '锅具、保鲜盒、餐具、玻璃器皿、餐桌配件', icon: '🍽️' },
        { name: '家居布置与收纳', examples: '收纳篮、收纳箱、蜡烛、香氛、生活小物', icon: '🏠' },
        { name: '园艺与户外', examples: '园艺工具、花盆、洒水壶、水管配件、户外用品', icon: '🪴' },
        { name: '美容个护容器', examples: '美容罐、滴管瓶、真空泵瓶、口红管、试用小瓶', icon: '🧴' },
      ],
      cta: '聊聊您的品类'
    },
    zh: {
      kicker: '我們的採購品類',
      title: '現在覆蓋的品類',
      desc: '下面這些是我們已經有穩定供應商名單、每月都在買的品類。相鄰品類對長期合作客戶我們依個案接。',
      categories: [
        { name: '軟包裝', examples: '立袋、夾鏈袋、牛皮紙袋、薄膜、隨身包、真空袋', icon: '🛍️' },
        { name: '硬包裝', examples: '玻璃罐、塑膠瓶、馬口鐵罐、禮盒、泵頭與封口', icon: '🫙' },
        { name: '廚房與餐桌', examples: '鍋具、保鮮盒、餐具、玻璃器皿、餐桌配件', icon: '🍽️' },
        { name: '家居佈置與收納', examples: '收納籃、收納箱、蠟燭、香氛、生活小物', icon: '🏠' },
        { name: '園藝與戶外', examples: '園藝工具、花盆、灑水壺、水管配件、戶外用品', icon: '🪴' },
        { name: '美容個護容器', examples: '美容罐、滴管瓶、真空泵瓶、口紅管、試用小瓶', icon: '🧴' },
      ],
      cta: '聊聊你的品類'
    },
    fr: {
      kicker: 'CE QUE NOUS SOURÇONS',
      title: 'Les catégories que nous couvrons aujourd’hui',
      desc: "Ce sont les domaines où nous avons une liste de fournisseurs active et un volume d'achats mensuel. Catégories voisines : au cas par cas pour les partenaires de long terme.",
      categories: [
        { name: 'Emballage souple', examples: 'Pochettes stand-up, sachets zip, sacs kraft, films, sachets, sacs sous vide', icon: '🛍️' },
        { name: 'Emballage rigide', examples: 'Bocaux verre, flacons plastique, boîtes métal, coffrets cadeaux, pompes & fermetures', icon: '🫙' },
        { name: 'Cuisine & table', examples: 'Ustensiles, boîtes hermétiques, couverts, verrerie, accessoires de table', icon: '🍽️' },
        { name: 'Déco maison & rangement', examples: 'Paniers, bacs, bougies, parfums d’intérieur, petits accessoires', icon: '🏠' },
        { name: 'Jardin & extérieur', examples: 'Outils, jardinières, arrosoirs, accessoires tuyau, articles patio', icon: '🪴' },
        { name: 'Cosmétique & flaconnage', examples: 'Pots, flacons compte-gouttes, pompes airless, étuis rouge à lèvres, échantillons', icon: '🧴' },
      ],
      cta: 'Parlez-nous de votre catégorie'
    },
    es: {
      kicker: 'LO QUE ABASTECEMOS',
      title: 'Categorías que cubrimos hoy',
      desc: 'Estas son las áreas donde tenemos una lista de proveedores activa y volumen de compra mensual. Categorías vecinas: caso por caso para socios de largo plazo.',
      categories: [
        { name: 'Empaque flexible', examples: 'Bolsas stand-up, bolsas con cierre, bolsas kraft, films, sobres, bolsas al vacío', icon: '🛍️' },
        { name: 'Empaque rígido', examples: 'Frascos de vidrio, botellas plásticas, latas, cajas regalo, bombas y cierres', icon: '🫙' },
        { name: 'Cocina y mesa', examples: 'Utensilios, recipientes herméticos, cubiertos, cristalería, accesorios de mesa', icon: '🍽️' },
        { name: 'Decoración y organización', examples: 'Cestas, cajas organizadoras, velas, fragancias, accesorios pequeños', icon: '🏠' },
        { name: 'Jardín y exterior', examples: 'Herramientas, macetas, regaderas, accesorios para manguera, artículos de patio', icon: '🪴' },
        { name: 'Belleza y envase cosmético', examples: 'Tarros, frascos cuentagotas, bombas airless, tubos de labial, viales de muestra', icon: '🧴' },
      ],
      cta: 'Cuéntenos sobre su categoría'
    },
    pt: {
      kicker: 'INDÚSTRIAS QUE ATENDEMOS',
      title: 'Maquinário para Cada Necessidade de Embalagem e Processamento',
      desc: 'Nossos equipamentos atendem a uma ampla gama de indústrias. Seja o que for que você processe ou embale, podemos recomendar a configuração certa para a sua aplicação.',
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
      title: '모든 포장/가공 니즈에 맞는 기계',
      desc: '당사의 장비는 다양한 산업에 서비스를 제공합니다. 무엇을 포장하거나 가공하든, 귀사의 용도에 맞는 구성을 추천할 수 있습니다.',
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
      title: 'あらゆる包装・加工ニーズに対応する機械',
      desc: '当社の設備は幅広い業界にサービスを提供しています。何を加工・包装されても、お客様の用途に合う構成をご提案できます。',
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
