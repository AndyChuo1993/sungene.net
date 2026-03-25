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
