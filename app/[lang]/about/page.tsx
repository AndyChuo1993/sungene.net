import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'en' || lang === 'zh' || lang === 'cn' || lang === 'fr' || lang === 'es') ? lang : 'en'
  const titles = {
    en: 'About SunGene | Industrial Machinery Manufacturer from Taiwan',
    cn: '关于 SunGene | 台湾工业机械制造商',
    zh: '關於 SunGene | 台灣工業機械製造商',
    fr: 'À propos de SunGene | Fabricant de machines industrielles de Taïwan',
    es: 'Acerca de SunGene | Fabricante de maquinaria industrial de Taiwán',
  }
  return { title: titles[l] }
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      kicker: 'ABOUT SUNGENE',
      title: 'Your Trusted Machinery Manufacturer in Taiwan',
      intro: 'SunGene is a Taiwan-based industrial machinery manufacturer specializing in packaging equipment, food processing machines, filling & sealing systems, and automated production lines. With over 15 years of experience and exports to 50+ countries, we are committed to delivering high-quality, CE-certified machinery at factory-direct prices.',
      mission: 'Our mission is to make industrial machinery accessible, reliable, and customizable for global buyers — from single machines to complete turnkey production lines.',
      stats: [
        { value: '15+', label: 'Years of Manufacturing' },
        { value: '500+', label: 'Machines Delivered' },
        { value: '50+', label: 'Export Countries' },
        { value: '100%', label: 'CE Certified' },
      ],
      strengthsTitle: 'Our Strengths',
      strengths: [
        { title: 'In-House Manufacturing', desc: 'Our own factory in Taichung, Taiwan ensures quality control from raw materials to final testing. No outsourcing, no middlemen.' },
        { title: 'Engineering-First Approach', desc: 'Every project starts with our engineering team understanding your application, product type, and production goals before recommending equipment.' },
        { title: 'Global Export Experience', desc: 'We handle international voltage standards, documentation, crating, and logistics for seamless delivery to any country.' },
      ],
      ctaTitle: 'Ready to Work with Us?',
      ctaDesc: 'Contact our sales team to discuss your machinery requirements.',
      ctaBtn: 'Get a Free Quote',
    },
    cn: {
      kicker: '关于我们',
      title: '您值得信赖的台湾机械制造商',
      intro: 'SunGene 是一家位于台湾的工业机械制造商，专注于包装设备、食品加工机械、灌装封口系统和自动化生产线。凭借超过15年的经验和出口至50多个国家的业绩，我们致力于以工厂直销价格提供高品质、CE认证的机械设备。',
      mission: '我们的使命是让全球买家更容易获得可靠、可定制的工业机械——从单机到完整的交钥匙生产线。',
      stats: [
        { value: '15+', label: '年制造经验' },
        { value: '500+', label: '台设备交付' },
        { value: '50+', label: '个出口国家' },
        { value: '100%', label: 'CE认证' },
      ],
      strengthsTitle: '我们的优势',
      strengths: [
        { title: '自有工厂生产', desc: '位于台湾台中的自有工厂确保从原材料到最终测试的全程品质管控。无外包，无中间商。' },
        { title: '工程优先方法', desc: '每个项目都从我们的工程团队了解您的应用、产品类型和生产目标开始，然后再推荐设备。' },
        { title: '全球出口经验', desc: '我们处理国际电压标准、文件、包装和物流，确保向任何国家无缝交付。' },
      ],
      ctaTitle: '准备好与我们合作了吗？',
      ctaDesc: '联系我们的销售团队讨论您的机械需求。',
      ctaBtn: '获取免费报价',
    },
    zh: {
      kicker: '關於我們',
      title: '您值得信賴的台灣機械製造商',
      intro: 'SunGene 是一家位於台灣的工業機械製造商，專注於包裝設備、食品加工機械、灌裝封口系統和自動化生產線。憑藉超過15年的經驗和出口至50多個國家的業績，我們致力於以工廠直銷價格提供高品質、CE認證的機械設備。',
      mission: '我們的使命是讓全球買家更容易獲得可靠、可客製的工業機械——從單機到完整的交鑰匙生產線。',
      stats: [
        { value: '15+', label: '年製造經驗' },
        { value: '500+', label: '台設備交付' },
        { value: '50+', label: '個出口國家' },
        { value: '100%', label: 'CE認證' },
      ],
      strengthsTitle: '我們的優勢',
      strengths: [
        { title: '自有工廠生產', desc: '位於台灣台中的自有工廠確保從原材料到最終測試的全程品質管控。無外包，無中間商。' },
        { title: '工程優先方法', desc: '每個專案都從我們的工程團隊了解您的應用、產品類型和生產目標開始，然後再推薦設備。' },
        { title: '全球出口經驗', desc: '我們處理國際電壓標準、文件、包裝和物流，確保向任何國家無縫交付。' },
      ],
      ctaTitle: '準備好與我們合作了嗎？',
      ctaDesc: '聯繫我們的銷售團隊討論您的機械需求。',
      ctaBtn: '取得免費報價',
    },
    fr: {
      kicker: 'À PROPOS DE SUNGENE',
      title: 'Votre fabricant de machines de confiance à Taïwan',
      intro: 'SunGene est un fabricant taïwanais de machines industrielles spécialisé dans les équipements d\'emballage, les machines de transformation alimentaire, les systèmes de remplissage et de scellage, et les lignes de production automatisées. Avec plus de 15 ans d\'expérience et des exportations vers plus de 50 pays, nous nous engageons à fournir des machines certifiées CE de haute qualité à des prix usine directs.',
      mission: 'Notre mission est de rendre les machines industrielles accessibles, fiables et personnalisables pour les acheteurs du monde entier — des machines individuelles aux lignes de production clé en main complètes.',
      stats: [
        { value: '15+', label: 'Années de fabrication' },
        { value: '500+', label: 'Machines livrées' },
        { value: '50+', label: 'Pays d\'exportation' },
        { value: '100%', label: 'Certifié CE' },
      ],
      strengthsTitle: 'Nos atouts',
      strengths: [
        { title: 'Fabrication en interne', desc: 'Notre propre usine à Taichung, Taïwan assure le contrôle qualité des matières premières aux tests finaux. Pas de sous-traitance, pas d\'intermédiaires.' },
        { title: 'Approche orientée ingénierie', desc: 'Chaque projet commence par la compréhension de votre application, type de produit et objectifs de production par notre équipe d\'ingénieurs.' },
        { title: 'Expérience export mondiale', desc: 'Nous gérons les normes de tension internationales, la documentation, la mise en caisse et la logistique pour une livraison sans faille dans tout pays.' },
      ],
      ctaTitle: 'Prêt à travailler avec nous ?',
      ctaDesc: 'Contactez notre équipe commerciale pour discuter de vos besoins en machines.',
      ctaBtn: 'Devis gratuit',
    },
    es: {
      kicker: 'SOBRE SUNGENE',
      title: 'Su fabricante de maquinaria de confianza en Taiwán',
      intro: 'SunGene es un fabricante taiwanés de maquinaria industrial especializado en equipos de empaque, máquinas de procesamiento de alimentos, sistemas de llenado y sellado, y líneas de producción automatizadas. Con más de 15 años de experiencia y exportaciones a más de 50 países, estamos comprometidos a entregar maquinaria certificada CE de alta calidad a precios directos de fábrica.',
      mission: 'Nuestra misión es hacer que la maquinaria industrial sea accesible, confiable y personalizable para compradores globales — desde máquinas individuales hasta líneas de producción llave en mano completas.',
      stats: [
        { value: '15+', label: 'Años de fabricación' },
        { value: '500+', label: 'Máquinas entregadas' },
        { value: '50+', label: 'Países de exportación' },
        { value: '100%', label: 'Certificado CE' },
      ],
      strengthsTitle: 'Nuestras fortalezas',
      strengths: [
        { title: 'Fabricación propia', desc: 'Nuestra fábrica en Taichung, Taiwán asegura el control de calidad desde las materias primas hasta las pruebas finales. Sin subcontratación, sin intermediarios.' },
        { title: 'Enfoque de ingeniería primero', desc: 'Cada proyecto comienza con nuestro equipo de ingenieros comprendiendo su aplicación, tipo de producto y objetivos de producción.' },
        { title: 'Experiencia en exportación global', desc: 'Manejamos estándares de voltaje internacionales, documentación, embalaje y logística para una entrega sin problemas a cualquier país.' },
      ],
      ctaTitle: '¿Listo para trabajar con nosotros?',
      ctaDesc: 'Contacte a nuestro equipo de ventas para discutir sus requisitos de maquinaria.',
      ctaBtn: 'Cotización gratuita',
    }
  }

  const t = content[lang] || content['en']

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 pt-8 pb-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
        <Container className="relative">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-400">{t.kicker}</span>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{t.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">{t.intro}</p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-400">{t.mission}</p>
        </Container>
      </section>

      {/* Stats */}
      <section className="-mt-10">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gray-200 shadow-elev-2 md:grid-cols-4">
            {t.stats.map((stat: { value: string; label: string }, i: number) => (
              <div key={i} className="bg-white px-6 py-8 text-center">
                <div className="text-3xl font-bold text-accent-600">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Factory Image */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/machinery/factory-floor.svg"
              alt="SunGene Factory Floor - Industrial Machinery Manufacturing Facility"
              width={1200}
              height={500}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950/40 to-transparent" />
          </div>
        </Container>
      </section>

      {/* Strengths */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">{t.strengthsTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.strengths.map((s: { title: string; desc: string }, i: number) => (
              <Card key={i} className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-lg font-bold text-accent-700">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-950">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{s.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-950 py-16 sm:py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white">{t.ctaTitle}</h2>
          <p className="mt-4 text-lg text-gray-300">{t.ctaDesc}</p>
          <div className="mt-8">
            <ButtonLink href={`/${lang}/contact`} size="lg">{t.ctaBtn}</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
