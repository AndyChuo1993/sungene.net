import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const icons = [
  // Packaging - box icon
  <svg key="pkg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
  // Food processing - beaker icon
  <svg key="food" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
  // Filling & Sealing - cog icon
  <svg key="fill" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" /></svg>,
  // Conveying & Automation - arrows icon
  <svg key="conv" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>,
]

const hrefs = ['packaging', 'food-processing', 'filling-sealing', 'conveying-automation']

export default function ServicesPreview({ lang }: { lang: Lang }) {
  const content: Record<string, any> = {
    en: {
      kicker: 'OUR MACHINERY',
      title: 'Complete Range of Industrial Machinery',
      desc: 'From standalone machines to fully automated production lines — we manufacture and supply equipment across packaging, food processing, filling, sealing, conveying, and custom industrial applications.',
      items: [
        { title: 'Packaging Machinery', desc: 'Vertical & horizontal form-fill-seal, pouch packaging, vacuum sealing, shrink wrapping, and carton packing machines for powder, granule, liquid, and solid products.', link: 'View Packaging Machines' },
        { title: 'Food Processing Equipment', desc: 'Mixers, grinders, slicers, cooking kettles, blanching systems, and preparation lines for meat, snack, bakery, and ready-meal production.', link: 'View Food Machines' },
        { title: 'Filling & Sealing Systems', desc: 'Automatic liquid fillers, paste fillers, powder dosing machines, cup sealers, bottle cappers, and induction sealers for various viscosities.', link: 'View Filling Systems' },
        { title: 'Conveying & Automation', desc: 'Belt conveyors, bucket elevators, screw conveyors, pick-and-place robots, palletizers, and integrated line control systems.', link: 'View Automation' },
      ]
    },
    cn: {
      kicker: '我们的机械',
      title: '全系列工业机械设备',
      desc: '从单机设备到全自动化生产线——我们制造并供应包装、食品加工、灌装封口、输送及定制工业应用设备。',
      items: [
        { title: '包装机械', desc: '立式/卧式成型充填封口机、袋装机、真空封口机、热缩包装机和装箱机，适用于粉末、颗粒、液体和固体产品。', link: '查看包装设备' },
        { title: '食品加工设备', desc: '搅拌机、研磨机、切片机、蒸煮锅、漂烫系统和备料产线，适用于肉类、休闲食品、烘焙和即食餐生产。', link: '查看食品设备' },
        { title: '灌装与封口系统', desc: '自动液体灌装机、膏体灌装机、粉末计量机、杯盖封口机、瓶盖旋盖机和电磁感应封口机。', link: '查看灌装系统' },
        { title: '输送与自动化', desc: '皮带输送机、斗式提升机、螺旋输送机、机械手、码垛机和集成产线控制系统。', link: '查看自动化设备' },
      ]
    },
    zh: {
      kicker: '我們的機械',
      title: '全系列工業機械設備',
      desc: '從單機設備到全自動化生產線——我們製造並供應包裝、食品加工、灌裝封口、輸送及客製工業應用設備。',
      items: [
        { title: '包裝機械', desc: '立式/臥式成型充填封口機、袋裝機、真空封口機、熱縮包裝機和裝箱機，適用於粉末、顆粒、液體和固體產品。', link: '查看包裝設備' },
        { title: '食品加工設備', desc: '攪拌機、研磨機、切片機、蒸煮鍋、漂燙系統和備料產線，適用於肉類、休閒食品、烘焙和即食餐生產。', link: '查看食品設備' },
        { title: '灌裝與封口系統', desc: '自動液體灌裝機、膏體灌裝機、粉末計量機、杯蓋封口機、瓶蓋旋蓋機和電磁感應封口機。', link: '查看灌裝系統' },
        { title: '輸送與自動化', desc: '皮帶輸送機、斗式提升機、螺旋輸送機、機械手、碼垛機和整合產線控制系統。', link: '查看自動化設備' },
      ]
    },
    fr: {
      kicker: 'NOS MACHINES',
      title: 'Gamme complète de machines industrielles',
      desc: 'Des machines individuelles aux lignes de production entièrement automatisées — nous fabriquons et fournissons des équipements d\'emballage, de transformation alimentaire, de remplissage, de scellage, de convoyage et pour des applications industrielles sur mesure.',
      items: [
        { title: 'Machines d\'emballage', desc: 'Ensacheuses verticales et horizontales (VFFS/HFFS), conditionneuses de sachets, scelleuses sous vide, machines de rétraction et encaisseuses pour produits en poudre, granulés, liquides et solides.', link: 'Voir les machines d\'emballage' },
        { title: 'Équipements agroalimentaires', desc: 'Mélangeurs, broyeurs, trancheuses, marmites de cuisson, systèmes de blanchiment et lignes de préparation pour la viande, les snacks, la boulangerie et les plats préparés.', link: 'Voir les machines alimentaires' },
        { title: 'Systèmes de remplissage et scellage', desc: 'Remplisseuses automatiques pour liquides et pâtes, doseuses de poudre, scelleuses de gobelets, boucheuses de bouteilles et scelleuses à induction.', link: 'Voir les systèmes de remplissage' },
        { title: 'Convoyage et automatisation', desc: 'Convoyeurs à bande, élévateurs à godets, convoyeurs à vis, robots pick-and-place, palettiseurs et systèmes de contrôle de ligne intégrés.', link: 'Voir l\'automatisation' },
      ]
    },
    es: {
      kicker: 'NUESTRA MAQUINARIA',
      title: 'Gama completa de maquinaria industrial',
      desc: 'Desde máquinas individuales hasta líneas de producción totalmente automatizadas — fabricamos y suministramos equipos de empaque, procesamiento de alimentos, llenado, sellado, transporte y aplicaciones industriales personalizadas.',
      items: [
        { title: 'Maquinaria de empaque', desc: 'Envasadoras verticales y horizontales (VFFS/HFFS), empacadoras de bolsas, selladoras al vacío, termoencogibles y encajonadoras para productos en polvo, granulados, líquidos y sólidos.', link: 'Ver máquinas de empaque' },
        { title: 'Equipos de procesamiento de alimentos', desc: 'Mezcladoras, moledoras, cortadoras, marmitas de cocción, sistemas de escaldado y líneas de preparación para carne, snacks, panadería y comidas preparadas.', link: 'Ver equipos alimentarios' },
        { title: 'Sistemas de llenado y sellado', desc: 'Llenadoras automáticas de líquidos y pastas, dosificadoras de polvo, selladoras de vasos, taponadoras de botellas y selladoras por inducción.', link: 'Ver sistemas de llenado' },
        { title: 'Transporte y automatización', desc: 'Transportadores de banda, elevadores de cangilones, transportadores de tornillo, robots pick-and-place, paletizadores y sistemas de control de línea integrados.', link: 'Ver automatización' },
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-600">{t.kicker}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl lg:text-5xl">{t.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{t.desc}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {t.items.map((item: any, i: number) => (
            <Card key={i} className="group relative overflow-hidden p-8 transition hover:shadow-elev-2 hover:ring-accent-200">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-950 text-white shadow-elev-1">
                {icons[i]}
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-950">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">{item.desc}</p>
              <Link href={`/${lang}/machinery/${hrefs[i]}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition hover:text-accent-700">
                {item.link}
                <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
