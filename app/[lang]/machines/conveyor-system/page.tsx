import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { MachineFAQ } from '@/components/machines/MachineFAQ'
import JsonLd from '@/components/JsonLd'
import type { Metadata } from 'next'

const titles: Record<string, string> = {
  en: 'Conveyor & Automation Systems | Belt, Bucket, Screw, Robotic | SunGene',
  cn: '输送与自动化系统 | 皮带、斗式、螺旋、机器人 | SunGene',
  zh: '輸送與自動化系統 | 皮帶、斗式、螺旋、機器人 | SunGene',
  fr: 'Systèmes de convoyage et automatisation | Bande, Godet, Vis, Robotique | SunGene',
  es: 'Sistemas de transporte y automatización | Banda, Cangilones, Tornillo, Robótica | SunGene',
  pt: 'Sistemas de Transporte e Automação | Esteira, Elevador, Rosca, Robótica | SunGene',
  ko: '컨베이어 및 자동화 시스템 | 벨트, 버킷, 스크류, 로봇 | SunGene',
  ja: 'コンベア＆自動化システム | ベルト、バケット、スクリュー、ロボット | SunGene',
  ar: 'أنظمة النقل والأتمتة | سير، دلو، لولبي، روبوتي | SunGene',
  th: 'ระบบลำเลียงและอัตโนมัติ | สายพาน, ถังตัก, สกรู, หุ่นยนต์ | SunGene',
  vi: 'Hệ thống băng tải và tự động hóa | Băng tải, Gàu, Trục vít, Robot | SunGene',
  de: 'Förder- und Automatisierungssysteme | Band, Becherwerk, Schnecke, Robotik | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'SunGene designs conveyor and automation systems including belt conveyors, bucket elevators, screw conveyors, robotic arms, palletizers, and PLC control systems. CE certified.',
  cn: 'SunGene设计输送与自动化系统，包括皮带输送机、斗式提升机、螺旋输送机、机械臂、码垛机和PLC控制系统。CE认证。',
  zh: 'SunGene設計輸送與自動化系統，包括皮帶輸送機、斗式提升機、螺旋輸送機、機械臂、碼垛機和PLC控制系統。CE認證。',
  fr: 'SunGene conçoit des convoyeurs et systèmes d\'automatisation : convoyeurs à bandes, élévateurs à godets, convoyeurs à vis, bras robotisés, palettiseurs et systèmes de contrôle PLC. Certifiés CE.',
  es: 'SunGene diseña sistemas de transporte y automatización: cintas transportadoras, elevadores de cangilones, transportadores de tornillo, brazos robóticos, paletizadores y sistemas de control PLC. Certificados CE.',
  pt: 'SunGene projeta sistemas de transporte e automação: transportadores de correia, elevadores de caçamba, transportadores de rosca, braços robóticos, paletizadores e sistemas de controle PLC. Certificados CE.',
  ko: 'SunGene은 벨트 컨베이어, 버킷 엘리베이터, 스크류 컨베이어, 로봇 암, 팔레타이저, PLC 제어 시스템을 포함한 컨베이어 및 자동화 시스템을 설계합니다. CE 인증.',
  ja: 'SunGeneはベルトコンベア、バケットエレベーター、スクリューコンベア、ロボットアーム、パレタイザー、PLC制御システムを含むコンベア・自動化システムを設計。CE認証。',
  ar: 'SunGene تصمم أنظمة نقل وأتمتة: ناقلات سيرية، رافعات دلو، ناقلات لولبية، أذرع روبوتية، مكدسات وأنظمة تحكم PLC. معتمدة CE.',
  th: 'SunGene ออกแบบระบบลำเลียงและระบบอัตโนมัติ: สายพานลำเลียง เครื่องยกถัง สกรูลำเลียง แขนหุ่นยนต์ พาเลทไทเซอร์ และระบบควบคุม PLC รับรอง CE',
  vi: 'SunGene thiết kế hệ thống băng tải và tự động hóa: băng tải đai, gàu nâng, băng tải trục vít, cánh tay robot, máy xếp pallet và hệ thống điều khiển PLC. Chứng nhận CE.',
  de: 'SunGene entwirft Förder- und Automatisierungssysteme: Gurtförderer, Becherwerke, Schneckenförderer, Roboterarme, Palettierer und PLC-Steuerungssysteme. CE-zertifiziert.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    keywords: ['conveyor system', 'belt conveyor', 'production line automation', 'automated packaging line', 'industrial conveyor', 'PLC control system', 'factory automation Taiwan'],
    alternates: {
      canonical: `https://sungene.net/${lang}/machines/conveyor-system`,
      languages: {
        'en': 'https://sungene.net/en/machines/conveyor-system',
        'zh-TW': 'https://sungene.net/zh/machines/conveyor-system',
        'zh-CN': 'https://sungene.net/cn/machines/conveyor-system',
        'fr': 'https://sungene.net/fr/machines/conveyor-system',
        'es': 'https://sungene.net/es/machines/conveyor-system',
        'pt': 'https://sungene.net/pt/machines/conveyor-system',
        'ko': 'https://sungene.net/ko/machines/conveyor-system',
        'ja': 'https://sungene.net/ja/machines/conveyor-system',
        'ar': 'https://sungene.net/ar/machines/conveyor-system',
        'th': 'https://sungene.net/th/machines/conveyor-system',
        'vi': 'https://sungene.net/vi/machines/conveyor-system',
        'de': 'https://sungene.net/de/machines/conveyor-system',
        'x-default': 'https://sungene.net/en/machines/conveyor-system',
      }
    },
    openGraph: {
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      url: `https://sungene.net/${lang}/machines/conveyor-system`,
      siteName: 'SunGene Machinery',
      images: [{ url: 'https://sungene.net/og/og.png', width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      images: ['https://sungene.net/og/og.png'],
    },
  }
}

export default async function ConveyorSystemPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      title: 'Conveyor & Automation Systems',
      kicker: 'CONVEYING & AUTOMATION',
      p1: 'We design and manufacture conveyor and automation systems that connect, upgrade, and optimize your production lines. Our solutions include belt conveyors, bucket elevators, screw conveyors, robotic arms, palletizers, and PLC-based centralized control systems.',
      p2: 'All systems are engineered with SUS304/316L stainless steel for food-grade applications, with modular designs for easy expansion. We provide full integration with existing equipment, custom layouts for your factory floor, and remote monitoring via HMI/SCADA.',
      subTitle: 'System Components',
      machines: ['Belt Conveyor', 'Bucket Elevator', 'Screw Conveyor', 'Robotic Arm', 'Palletizer', 'PLC Control'],
      features: ['Modular, expandable design', 'SUS304/316L food-grade', 'PLC + HMI centralized control', 'SCADA remote monitoring', 'Variable speed drives', 'Integration with existing lines', 'Custom factory layout design', 'CE certified'],
      cta: 'Tell us your production layout needs — we\'ll design the automation.',
      whoTitle: 'Who It\'s For',
      who: [
        { title: 'Factory Owners Upgrading Lines', desc: 'Replace manual handling with automated conveying to reduce labor costs and increase throughput on existing production lines.' },
        { title: 'Companies Adding Automation', desc: 'Integrate robotic arms, automatic palletizing, and centralized PLC control to modernize your facility.' },
        { title: 'New Facility Planning', desc: 'Complete conveyor layout design and automation engineering for greenfield factory projects from the ground up.' },
      ],
      appTitle: 'Application Scenarios',
      apps: ['Production Line Connection', 'Automated Palletizing', 'Quality Inspection Integration', 'Vertical Material Transport', 'Powder & Grain Conveying', 'End-of-Line Packaging'],
      faqTitle: 'Frequently Asked Questions',
      faq: [
        { q: 'Can you integrate with our existing machines?', a: 'Yes. We survey your current equipment, measure interfaces, and design conveyor systems that connect seamlessly with your existing production machines. We handle mechanical, electrical, and control integration.' },
        { q: 'What conveyor types do you offer?', a: 'We manufacture belt conveyors (flat, inclined, curved), bucket elevators, screw conveyors, vibratory feeders, roller conveyors, and chain conveyors. The type depends on your product, distance, elevation change, and throughput requirements.' },
        { q: 'Do you provide PLC programming and control panels?', a: 'Yes. We design and build PLC control panels with HMI touchscreens, program the control logic, and integrate all machines into a centralized automation system. We support Siemens, Mitsubishi, Allen-Bradley, and other PLC brands.' },
        { q: 'Can you do a factory layout design?', a: 'Yes. Our engineering team provides 2D/3D factory layout designs showing conveyor routing, machine placement, operator access paths, and utility connections. We optimize for workflow efficiency and safety.' },
        { q: 'What about maintenance and spare parts?', a: 'All our conveyors use standard components (motors, bearings, belts) that are globally available. We provide maintenance manuals, recommended spare parts lists, and remote troubleshooting support.' },
        { q: 'Do you offer robotic palletizing?', a: 'Yes. We integrate robotic arms for palletizing, case packing, pick-and-place, and other end-of-line automation tasks. We support multiple robot brands and program custom palletizing patterns.' },
      ],
      notSure: 'Not sure what you need? Send us your production layout.',
      btnQuote: 'Get a Quote',
      btnRecommend: 'Get a Recommendation',
    },
    cn: {
      title: '输送与自动化系统',
      kicker: '输送与自动化',
      p1: '我们设计和制造输送与自动化系统，连接、升级和优化您的生产线。解决方案包括皮带输送机、斗式提升机、螺旋输送机、机械臂、码垛机和基于PLC的集中控制系统。',
      p2: '所有系统采用SUS304/316L不锈钢工程设计，适用于食品级应用，模块化设计便于扩展。我们提供与现有设备的完整集成、工厂定制布局和通过HMI/SCADA的远程监控。',
      subTitle: '系统组件',
      machines: ['皮带输送机', '斗式提升机', '螺旋输送机', '机械臂', '码垛机', 'PLC控制'],
      features: ['模块化可扩展设计', 'SUS304/316L食品级', 'PLC+HMI集中控制', 'SCADA远程监控', '变频驱动', '与现有产线集成', '定制工厂布局设计', 'CE认证'],
      cta: '告诉我们您的生产布局需求——我们将设计自动化方案。',
      whoTitle: '适用客户',
      who: [
        { title: '升级产线的工厂主', desc: '用自动化输送替代人工搬运，降低人力成本，提高现有产线产量。' },
        { title: '增加自动化的企业', desc: '集成机械臂、自动码垛和PLC集中控制，使工厂现代化。' },
        { title: '新建工厂规划', desc: '从零开始为新建工厂项目提供完整的输送布局设计和自动化工程。' },
      ],
      appTitle: '应用场景',
      apps: ['产线连接', '自动码垛', '质检集成', '垂直物料输送', '粉末颗粒输送', '产线末端包装'],
      faqTitle: '常见问题',
      faq: [
        { q: '能与我们现有的机器集成吗？', a: '可以。我们会勘察您的现有设备，测量接口，设计与您现有生产机器无缝连接的输送系统。我们负责机械、电气和控制集成。' },
        { q: '你们提供哪些输送机类型？', a: '我们生产皮带输送机（平面、倾斜、弯道）、斗式提升机、螺旋输送机、振动给料机、滚筒输送机和链式输送机。类型取决于产品、距离、高差和产量要求。' },
        { q: '提供PLC编程和控制柜吗？', a: '是的。我们设计和制造带HMI触摸屏的PLC控制柜，编程控制逻辑，并将所有机器集成到集中自动化系统中。支持西门子、三菱、AB等品牌。' },
        { q: '能做工厂布局设计吗？', a: '可以。我们的工程团队提供2D/3D工厂布局设计，显示输送路线、机器位置、操作通道和管线连接，优化工作流效率和安全性。' },
        { q: '维护和备件怎样？', a: '我们所有输送机使用标准组件（电机、轴承、皮带），全球可采购。我们提供维护手册、建议备件清单和远程故障排查支持。' },
        { q: '提供机器人码垛吗？', a: '是的。我们集成机械臂用于码垛、装箱、取放等产线末端自动化任务。支持多个机器人品牌，编程定制码垛方案。' },
      ],
      notSure: '不确定需要什么？把您的生产布局发给我们。',
      btnQuote: '获取报价',
      btnRecommend: '获取推荐',
    },
    zh: {
      title: '輸送與自動化系統',
      kicker: '輸送與自動化',
      p1: '我們設計和製造輸送與自動化系統，連接、升級和優化您的生產線。解決方案包括皮帶輸送機、斗式提升機、螺旋輸送機、機械臂、碼垛機和基於PLC的集中控制系統。',
      p2: '所有系統採用SUS304/316L不鏽鋼工程設計，適用於食品級應用，模組化設計便於擴展。我們提供與現有設備的完整整合、工廠客製佈局和透過HMI/SCADA的遠端監控。',
      subTitle: '系統組件',
      machines: ['皮帶輸送機', '斗式提升機', '螺旋輸送機', '機械臂', '碼垛機', 'PLC控制'],
      features: ['模組化可擴展設計', 'SUS304/316L食品級', 'PLC+HMI集中控制', 'SCADA遠端監控', '變頻驅動', '與現有產線整合', '客製工廠佈局設計', 'CE認證'],
      cta: '告訴我們您的生產佈局需求——我們將設計自動化方案。',
      whoTitle: '適用客戶',
      who: [
        { title: '升級產線的工廠主', desc: '用自動化輸送替代人工搬運，降低人力成本，提高現有產線產量。' },
        { title: '增加自動化的企業', desc: '整合機械臂、自動碼垛和PLC集中控制，使工廠現代化。' },
        { title: '新建工廠規劃', desc: '從零開始為新建工廠項目提供完整的輸送佈局設計和自動化工程。' },
      ],
      appTitle: '應用場景',
      apps: ['產線連接', '自動碼垛', '質檢整合', '垂直物料輸送', '粉末顆粒輸送', '產線末端包裝'],
      faqTitle: '常見問題',
      faq: [
        { q: '能與我們現有的機器整合嗎？', a: '可以。我們會勘察您的現有設備，測量介面，設計與您現有生產機器無縫連接的輸送系統。我們負責機械、電氣和控制整合。' },
        { q: '你們提供哪些輸送機類型？', a: '我們生產皮帶輸送機（平面、傾斜、彎道）、斗式提升機、螺旋輸送機、振動給料機、滾筒輸送機和鏈式輸送機。類型取決於產品、距離、高差和產量要求。' },
        { q: '提供PLC程式設計和控制櫃嗎？', a: '是的。我們設計和製造帶HMI觸控螢幕的PLC控制櫃，程式設計控制邏輯，並將所有機器整合到集中自動化系統中。支援西門子、三菱、AB等品牌。' },
        { q: '能做工廠佈局設計嗎？', a: '可以。我們的工程團隊提供2D/3D工廠佈局設計，顯示輸送路線、機器位置、操作通道和管線連接，優化工作流效率和安全性。' },
        { q: '維護和備件怎樣？', a: '我們所有輸送機使用標準組件（馬達、軸承、皮帶），全球可採購。我們提供維護手冊、建議備件清單和遠端故障排查支援。' },
        { q: '提供機器人碼垛嗎？', a: '是的。我們整合機械臂用於碼垛、裝箱、取放等產線末端自動化任務。支援多個機器人品牌，程式設計客製碼垛方案。' },
      ],
      notSure: '不確定需要什麼？把您的生產佈局發給我們。',
      btnQuote: '取得報價',
      btnRecommend: '取得推薦',
    },
  }

  const t = content[lang] || content['en']
  const btnLabels: Record<string, string> = { en: 'Get a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 받기', ja: '見積もりを依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Nhận báo giá', de: 'Angebot anfordern' }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Conveyor & Automation Systems',
    description: t.p1,
    brand: { '@type': 'Brand', name: 'SunGene' },
    manufacturer: { '@type': 'Organization', name: 'SunGene Co., LTD', url: 'https://www.sungene.net' },
    category: 'Industrial Automation',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      seller: { '@type': 'Organization', name: 'SunGene Co., LTD' },
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://sungene.net/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Machinery', item: `https://sungene.net/${lang}/machinery` },
      { '@type': 'ListItem', position: 3, name: 'Conveyor & Automation Systems', item: `https://sungene.net/${lang}/machines/conveyor-system` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbLd} />
      <PageHeader title={t.title} desc={t.p1} kicker={t.kicker} />

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{t.p2}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {t.machines.map((m: any, i: number) => (
                  <span key={i} className="rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700 ring-1 ring-accent-200">{m}</span>
                ))}
              </div>
              <div className="mt-8">
                <Image src="/machinery/hero-conveyor.svg" alt="Conveyor and Automation Systems" width={600} height={400} className="rounded-xl" />
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-xl font-bold text-gray-950">{t.subTitle}</h2>
                <ul className="mt-6 space-y-3">
                  {t.features.map((c: any, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-sm leading-relaxed sm:text-base">{c}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <div className="rounded-2xl bg-brand-950 p-8 text-white">
                <h2 className="text-xl font-bold">{t.cta}</h2>
                <div className="mt-6">
                  <ButtonLink href={`/${lang}/contact`} size="lg">{btnLabels[lang] || btnLabels.en}</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.whoTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.who.map((w: any, i: number) => (
              <Card key={i} className="p-6">
                <h3 className="text-lg font-bold text-gray-950">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{w.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.appTitle}</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {t.apps.map((app: any, i: number) => (
              <span key={i} className="rounded-full bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-200">{app}</span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">{t.faqTitle}</h2>
          <div className="mt-10">
            <MachineFAQ items={t.faq} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-brand-950 text-white">
        <Container className="max-w-4xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t.cta}</h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink href={`/${lang}/contact`} size="lg">{btnLabels[lang] || btnLabels.en}</ButtonLink>
            <a href={`/${lang}/recommend`} className="text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white">{t.notSure}</a>
          </div>
        </Container>
      </section>
    </>
  )
}
