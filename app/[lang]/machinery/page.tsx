import { Lang } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const titles = {
    en: 'Industrial Machinery Catalog | Packaging, Food Processing & Automation | SunGene',
    cn: '工业机械目录 | 包装、食品加工与自动化 | SunGene',
    zh: '工業機械目錄 | 包裝、食品加工與自動化 | SunGene',
    fr: 'Catalogue de machines industrielles | Emballage, Agroalimentaire & Automatisation | SunGene',
    es: 'Catálogo de maquinaria industrial | Empaque, Procesamiento de alimentos y Automatización | SunGene',
  }
  const descriptions = {
    en: 'Browse our complete range of industrial machinery: packaging machines, food processing equipment, filling & sealing systems, conveyor automation, and custom-engineered solutions. CE certified, factory-direct from Taiwan.',
    cn: '浏览我们的全系列工业机械：包装机、食品加工设备、灌装封口系统、输送自动化和定制解决方案。CE认证，台湾工厂直销。',
    zh: '瀏覽我們的全系列工業機械：包裝機、食品加工設備、灌裝封口系統、輸送自動化和客製解決方案。CE認證，台灣工廠直銷。',
    fr: 'Parcourez notre gamme complète de machines industrielles : machines d\'emballage, équipements agroalimentaires, systèmes de remplissage et scellage, automatisation de convoyage et solutions sur mesure. Certifié CE, direct usine depuis Taïwan.',
    es: 'Explore nuestra gama completa de maquinaria industrial: máquinas de empaque, equipos de procesamiento de alimentos, sistemas de llenado y sellado, automatización de transporte y soluciones de ingeniería a medida. Certificado CE, directo de fábrica desde Taiwán.',
  }
  const l = (lang === 'en' || lang === 'zh' || lang === 'cn' || lang === 'fr' || lang === 'es') ? lang : 'en'
  return { title: titles[l], description: descriptions[l] }
}

const categoryIcons = [
  <svg key="0" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
  <svg key="1" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
  <svg key="2" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" /></svg>,
  <svg key="3" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>,
  <svg key="4" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h11.8M4.26 19.72A9.96 9.96 0 0012 22a9.96 9.96 0 007.74-2.28" /></svg>,
]

export default async function MachineryPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content = {
    en: {
      kicker: 'MACHINERY CATALOG',
      title: 'Our Industrial Machinery',
      desc: 'Browse our complete range of industrial equipment. From packaging and food processing to custom-engineered automation systems — all manufactured in Taiwan with CE certification.',
      cats: [
        { title: 'Packaging Machinery', desc: 'VFFS, HFFS, pouch packaging, vacuum sealers, shrink wrappers, carton packers, and multi-head weighers for powder, granule, liquid, and solid products.', badge: 'Most Popular' },
        { title: 'Food Processing Equipment', desc: 'Industrial mixers, meat grinders, vegetable slicers, cooking kettles, blanching systems, and complete food preparation lines.', badge: '' },
        { title: 'Filling & Sealing Systems', desc: 'Automatic liquid fillers, paste fillers, powder dosers, cup sealers, bottle cappers, induction sealers, and tube filling machines.', badge: '' },
        { title: 'Conveying & Automation', desc: 'Belt conveyors, bucket elevators, screw feeders, pick-and-place robots, palletizers, and PLC-integrated line control systems.', badge: '' },
        { title: 'Customized Machinery', desc: 'OEM machinery design, custom dimensions, special materials, modified output capacity, and application-specific engineering.', badge: 'Engineering Team' }
      ],
      cta: 'Need help choosing? Get a free consultation.',
      ctaBtn: 'Contact Our Engineers',
    },
    cn: {
      kicker: '机械目录',
      title: '我们的工业机械',
      desc: '浏览我们的全系列工业设备。从包装和食品加工到定制自动化系统——均在台湾制造，CE认证。',
      cats: [
        { title: '包装机械', desc: '立式/卧式充填封口机、袋装机、真空封口机、热缩包装机、装箱机和多头秤，适用于粉末、颗粒、液体和固体产品。', badge: '最受欢迎' },
        { title: '食品加工设备', desc: '工业搅拌机、绞肉机、切菜机、蒸煮锅、漂烫系统和完整食品备料产线。', badge: '' },
        { title: '灌装与封口系统', desc: '自动液体灌装机、膏体灌装机、粉末计量机、杯盖封口机、瓶盖旋盖机和管装充填机。', badge: '' },
        { title: '输送与自动化', desc: '皮带输送机、斗式提升机、螺旋给料机、机械手、码垛机和PLC集成控制系统。', badge: '' },
        { title: '定制机械', desc: 'OEM设计、定制尺寸、特殊材料、改装产能和应用专属工程。', badge: '工程团队' }
      ],
      cta: '需要选型帮助？获取免费咨询。',
      ctaBtn: '联系我们的工程师',
    },
    zh: {
      kicker: '機械目錄',
      title: '我們的工業機械',
      desc: '瀏覽我們的全系列工業設備。從包裝和食品加工到客製自動化系統——均在台灣製造，CE認證。',
      cats: [
        { title: '包裝機械', desc: '立式/臥式充填封口機、袋裝機、真空封口機、熱縮包裝機、裝箱機和多頭秤，適用於粉末、顆粒、液體和固體產品。', badge: '最受歡迎' },
        { title: '食品加工設備', desc: '工業攪拌機、絞肉機、切菜機、蒸煮鍋、漂燙系統和完整食品備料產線。', badge: '' },
        { title: '灌裝與封口系統', desc: '自動液體灌裝機、膏體灌裝機、粉末計量機、杯蓋封口機、瓶蓋旋蓋機和管裝充填機。', badge: '' },
        { title: '輸送與自動化', desc: '皮帶輸送機、斗式提升機、螺旋給料機、機械手、碼垛機和PLC整合控制系統。', badge: '' },
        { title: '客製機械', desc: 'OEM設計、客製尺寸、特殊材料、改裝產能和應用專屬工程。', badge: '工程團隊' }
      ],
      cta: '需要選型幫助？取得免費諮詢。',
      ctaBtn: '聯繫我們的工程師',
    },
    fr: {
      kicker: 'CATALOGUE MACHINES',
      title: 'Nos machines industrielles',
      desc: 'Parcourez notre gamme complète d\'équipements industriels. De l\'emballage et la transformation alimentaire aux systèmes d\'automatisation sur mesure — tous fabriqués à Taïwan avec certification CE.',
      cats: [
        { title: 'Machines d\'emballage', desc: 'Ensacheuses VFFS et HFFS, conditionneuses de sachets, scelleuses sous vide, machines de rétraction, encaisseuses et peseuses multi-têtes pour produits en poudre, granulés, liquides et solides.', badge: 'Les plus demandées' },
        { title: 'Équipements agroalimentaires', desc: 'Mélangeurs industriels, hachoirs à viande, trancheuses de légumes, marmites de cuisson, systèmes de blanchiment et lignes complètes de préparation alimentaire.', badge: '' },
        { title: 'Systèmes de remplissage et scellage', desc: 'Remplisseuses automatiques pour liquides et pâtes, doseuses de poudre, scelleuses de gobelets, boucheuses, scelleuses à induction et remplisseuses de tubes.', badge: '' },
        { title: 'Convoyage et automatisation', desc: 'Convoyeurs à bande, élévateurs à godets, alimentateurs à vis, robots pick-and-place, palettiseurs et systèmes de contrôle de ligne intégrés PLC.', badge: '' },
        { title: 'Machines sur mesure', desc: 'Conception OEM, dimensions personnalisées, matériaux spéciaux, capacité de production modifiée et ingénierie spécifique à l\'application.', badge: 'Équipe d\'ingénierie' }
      ],
      cta: 'Besoin d\'aide pour choisir ? Consultation gratuite.',
      ctaBtn: 'Contacter nos ingénieurs',
    },
    es: {
      kicker: 'CATÁLOGO DE MAQUINARIA',
      title: 'Nuestra maquinaria industrial',
      desc: 'Explore nuestra gama completa de equipos industriales. Desde empaque y procesamiento de alimentos hasta sistemas de automatización a medida — todos fabricados en Taiwán con certificación CE.',
      cats: [
        { title: 'Maquinaria de empaque', desc: 'Envasadoras VFFS y HFFS, empacadoras de bolsas, selladoras al vacío, termoencogibles, encajonadoras y pesadoras multicabezal para productos en polvo, granulados, líquidos y sólidos.', badge: 'Más popular' },
        { title: 'Equipos de procesamiento de alimentos', desc: 'Mezcladoras industriales, picadoras de carne, cortadoras de verduras, marmitas de cocción, sistemas de escaldado y líneas completas de preparación de alimentos.', badge: '' },
        { title: 'Sistemas de llenado y sellado', desc: 'Llenadoras automáticas de líquidos y pastas, dosificadoras de polvo, selladoras de vasos, taponadoras, selladoras por inducción y llenadoras de tubos.', badge: '' },
        { title: 'Transporte y automatización', desc: 'Transportadores de banda, elevadores de cangilones, alimentadores de tornillo, robots pick-and-place, paletizadores y sistemas de control de línea integrados con PLC.', badge: '' },
        { title: 'Maquinaria personalizada', desc: 'Diseño OEM, dimensiones personalizadas, materiales especiales, capacidad de producción modificada e ingeniería específica para cada aplicación.', badge: 'Equipo de ingeniería' }
      ],
      cta: '¿Necesita ayuda para elegir? Consulta gratuita.',
      ctaBtn: 'Contactar a nuestros ingenieros',
    }
  }

  const t = content[lang] || content['en']
  const categoryHrefs = [
    `/${lang}/machinery/packaging`,
    `/${lang}/machinery/food-processing`,
    `/${lang}/machinery/filling-sealing`,
    `/${lang}/machinery/conveying-automation`,
    `/${lang}/machinery/custom`,
  ]

  return (
    <>
      <section className="bg-brand-950 pt-8 pb-16">
        <Container>
          <span className="text-sm font-bold uppercase tracking-wider text-accent-400">{t.kicker}</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{t.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">{t.desc}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {t.cats.map((c, i) => (
              <Link
                key={i}
                href={categoryHrefs[i] || `/${lang}/machinery`}
                className="group relative rounded-2xl bg-white p-8 shadow-elev-1 ring-1 ring-gray-200/60 transition hover:shadow-elev-2 hover:ring-accent-200"
              >
                {c.badge && (
                  <span className="absolute top-4 right-4 rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700">{c.badge}</span>
                )}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-950 text-white">
                  {categoryIcons[i]}
                </div>
                <h2 className="mt-5 text-xl font-bold text-gray-950">{c.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{c.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent-600 group-hover:text-accent-700">
                  {{ en: 'View Details', cn: '查看详情', zh: '查看詳情', fr: 'Voir les détails', es: 'Ver detalles' }[lang] || 'View Details'}
                  <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-brand-950 p-8 text-center sm:p-12">
            <p className="text-xl font-bold text-white">{t.cta}</p>
            <div className="mt-6">
              <ButtonLink href={`/${lang}/contact`} size="lg">{t.ctaBtn}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
