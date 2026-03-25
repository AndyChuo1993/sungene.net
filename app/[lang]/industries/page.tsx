import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const titles: Record<string, string> = {
  en: 'Industries & Applications | SunGene',
  cn: '行业与应用｜SunGene',
  zh: '產業與應用｜SunGene',
  fr: 'Industries et applications | SunGene',
  es: 'Industrias y aplicaciones | SunGene',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return { title: titles[lang] || titles.en }
}

export default async function IndustriesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, { title: string; desc: string; cats: { title: string; desc: string }[] }> = {
    en: {
      title: 'Industries & Applications',
      desc: 'Our machinery serves diverse industries worldwide. By understanding your product type, workflow, and output expectations, we recommend the most suitable equipment for your production environment.',
      cats: [
        { title: 'Powder Products', desc: 'Spices, coffee, milk powder, flour, detergent, pharmaceutical powder — filling, dosing, and packaging machinery.' },
        { title: 'Liquid Products', desc: 'Beverages, sauces, cooking oil, cosmetics, chemicals — filling, sealing, conveying, and labeling systems.' },
        { title: 'Granule & Snack Products', desc: 'Nuts, seeds, candy, pet food, frozen food, rice — weighing, feeding, packaging, and case packing.' },
        { title: 'Food Production', desc: 'Meat, bakery, ready meals, seafood, dairy — processing, cooking, mixing, and preparation lines.' },
        { title: 'Consumer & Industrial Goods', desc: 'Hardware, electronics, medical devices, fertilizers, cement — packaging, palletizing, and automation.' }
      ]
    },
    cn: {
      title: '行业与应用',
      desc: '我们的机械服务于全球多种行业。通过了解您的产品类型、工作流和产能期望，我们推荐最适合您生产环境的设备。',
      cats: [
        { title: '粉末产品', desc: '香料、咖啡、奶粉、面粉、洗涤剂、医药粉末——灌装、计量和包装机械。' },
        { title: '液体产品', desc: '饮料、酱料、食用油、化妆品、化工品——灌装、封口、输送和贴标系统。' },
        { title: '颗粒与休闲食品', desc: '坚果、种子、糖果、宠物食品、冷冻食品、大米——称重、进料、包装和装箱。' },
        { title: '食品生产', desc: '肉类、烘焙、即食餐、海鲜、乳制品——加工、蒸煮、搅拌和备料产线。' },
        { title: '消费品与工业品', desc: '五金、电子、医疗器械、肥料、水泥——包装、码垛和自动化。' }
      ]
    },
    zh: {
      title: '產業與應用',
      desc: '我們的機械服務於全球多種行業。透過了解您的產品類型、工作流和產能期望，我們推薦最適合您生產環境的設備。',
      cats: [
        { title: '粉末產品', desc: '香料、咖啡、奶粉、麵粉、洗滌劑、醫藥粉末——灌裝、計量和包裝機械。' },
        { title: '液體產品', desc: '飲料、醬料、食用油、化妝品、化工品——灌裝、封口、輸送和貼標系統。' },
        { title: '顆粒與休閒食品', desc: '堅果、種子、糖果、寵物食品、冷凍食品、大米——稱重、進料、包裝和裝箱。' },
        { title: '食品生產', desc: '肉類、烘焙、即食餐、海鮮、乳製品——加工、蒸煮、攪拌和備料產線。' },
        { title: '消費品與工業品', desc: '五金、電子、醫療器材、肥料、水泥——包裝、碼垛和自動化。' }
      ]
    },
    fr: {
      title: 'Industries et applications',
      desc: 'Nos machines servent diverses industries dans le monde entier. En comprenant votre type de produit, votre flux de travail et vos attentes de production, nous recommandons l\'équipement le plus adapté.',
      cats: [
        { title: 'Produits en poudre', desc: 'Épices, café, lait en poudre, farine, détergents, poudre pharmaceutique — machines de dosage, remplissage et conditionnement.' },
        { title: 'Produits liquides', desc: 'Boissons, sauces, huile alimentaire, cosmétiques, produits chimiques — systèmes de remplissage, scellage, convoyage et étiquetage.' },
        { title: 'Granulés et snacks', desc: 'Noix, graines, confiseries, aliments pour animaux, surgelés, riz — pesage, alimentation, conditionnement et mise en carton.' },
        { title: 'Production alimentaire', desc: 'Viande, boulangerie, plats préparés, fruits de mer, produits laitiers — lignes de transformation, cuisson, mélange et préparation.' },
        { title: 'Biens de consommation et industriels', desc: 'Quincaillerie, électronique, dispositifs médicaux, engrais, ciment — conditionnement, palettisation et automatisation.' }
      ]
    },
    es: {
      title: 'Industrias y aplicaciones',
      desc: 'Nuestra maquinaria sirve a diversas industrias en todo el mundo. Al comprender su tipo de producto, flujo de trabajo y expectativas de producción, recomendamos el equipo más adecuado.',
      cats: [
        { title: 'Productos en polvo', desc: 'Especias, café, leche en polvo, harina, detergentes, polvo farmacéutico — máquinas de dosificación, llenado y envasado.' },
        { title: 'Productos líquidos', desc: 'Bebidas, salsas, aceite de cocina, cosméticos, químicos — sistemas de llenado, sellado, transporte y etiquetado.' },
        { title: 'Granulados y snacks', desc: 'Nueces, semillas, dulces, alimento para mascotas, congelados, arroz — pesaje, alimentación, empaque y encajado.' },
        { title: 'Producción alimentaria', desc: 'Carne, panadería, comidas preparadas, mariscos, lácteos — líneas de procesamiento, cocción, mezclado y preparación.' },
        { title: 'Bienes de consumo e industriales', desc: 'Ferretería, electrónica, dispositivos médicos, fertilizantes, cemento — empaque, paletizado y automatización.' }
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
              <Card key={i} className="p-8">
                <h2 className="text-lg font-semibold text-gray-950 sm:text-xl">{c.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{c.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
