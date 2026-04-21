import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import SourcingRouteGuide from '@/components/machinery/SourcingRouteGuide'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, BREADCRUMB_LABELS, LANG_META } from '@/lib/seo'

const metaTitles: Record<string, string> = {
  en: 'Custom Machinery & Spec Customization | Bespoke Equipment Integration',
  cn: '定制机械与规格定制支持 | 定制技术采购',
  zh: '客製機械與規格客製支援 | 客製技術採購',
  fr: 'Machines sur mesure & personnalisation | Intégration d’équipements',
  es: 'Maquinaria personalizada y especificaciones a medida | Integración de equipos',
  pt: 'Máquinas personalizadas e especificações sob medida | Integração de equipamentos',
  ko: '맞춤형 기계 및 사양 맞춤 | 장비 통합 지원',
  ja: 'カスタム機械と仕様カスタマイズ | 設備統合サポート',
  ar: 'الآلات المخصصة وتخصيص المواصفات | دعم تكامل المعدات',
  th: 'เครื่องจักรสั่งทำและปรับสเปก | สนับสนุนการบูรณาการอุปกรณ์',
  vi: 'Máy móc tùy chỉnh & tùy chỉnh thông số | Hỗ trợ tích hợp thiết bị',
  de: 'Sondermaschinen & Spezifikationen nach Maß | Geräteintegration',
}

const metaDescs: Record<string, string> = {
  en: 'Custom industrial machinery support for unique technical requirements: packaging, filling, food processing, and automation systems with spec customization and supplier coordination.',
  cn: '针对特殊技术需求的定制工业设备支持：包装、充填、食品加工与自动化系统，提供规格定制与供应商协调。',
  zh: '針對特殊技術需求的客製工業設備支援：包裝、充填、食品加工與自動化系統，提供規格客製與供應商協調。',
  fr: 'Support d’équipements industriels sur mesure : emballage, remplissage, transformation alimentaire et automatisation, avec personnalisation des spécifications.',
  es: 'Soporte de maquinaria industrial a medida: empaque, llenado, procesamiento de alimentos y automatización, con personalización de especificaciones.',
  pt: 'Suporte de maquinário industrial sob medida: embalagem, envase, processamento de alimentos e automação, com personalização de especificações.',
  ko: '특수 기술 요구를 위한 맞춤형 장비 지원: 포장, 충전, 식품 가공 및 자동화 시스템(사양 맞춤 및 공급업체 조율 포함).',
  ja: '特殊要件向けのカスタム設備サポート：包装、充填、食品加工、自動化システム（仕様カスタマイズとサプライヤー調整）。',
  ar: 'دعم معدات صناعية مخصصة: أنظمة تعبئة وتغليف وملء ومعالجة أغذية وأتمتة، مع تخصيص المواصفات وتنسيق الموردين.',
  th: 'สนับสนุนอุปกรณ์อุตสาหกรรมแบบกำหนดเอง: ระบบบรรจุ การเติม การแปรรูปอาหาร และอัตโนมัติ พร้อมการปรับสเปกและการประสานงานซัพพลายเออร์',
  vi: 'Hỗ trợ thiết bị công nghiệp theo yêu cầu: đóng gói, chiết rót, chế biến thực phẩm và tự động hóa, kèm tùy chỉnh thông số và điều phối nhà cung cấp.',
  de: 'Support für Sondermaschinen: Verpackung, Abfüllung, Lebensmittelverarbeitung und Automatisierung mit Spezifikationsanpassung und Lieferantenkoordination.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machinery/custom',
    type: 'website',
  })
}

export default async function CustomMachineryPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const metaTitle = metaTitles[lang] || metaTitles.en
  const metaDesc = metaDescs[lang] || metaDescs.en
  const heroPhoto = PHOTO.machinery.subpageHeroes.custom
  const content: Record<string, any> = {
    en: {
      title: 'Customized Machinery Support',
      p1: 'Not every production need can be solved with a standard machine. Some projects require modifications in machine size, structure, handling method, workflow connection, or application-specific function.',
      p2: 'We support buyers who are exploring non-standard machinery directions and need a more practical way to move from concept to workable equipment planning.',
      subTitle: 'When Customization May Be Needed',
      cons: ['Special product shape or material behavior', 'Non-standard layout requirements', 'Integration with existing workflow', 'Unique packaging or handling logic', 'Market-specific technical conditions'],
      cta: 'If your project does not fit a standard machine easily, tell us the application and challenge.'
    },
    cn: {
      title: '定制机械支持',
      p1: '并非每个生产需求都能通过标准机器解决。有些项目需要在机器尺寸、结构、处理方式、工作流连接或特定应用功能上进行调整。',
      p2: '我们支持正在探索非标准机械方向的买家，帮助他们以更务实的方式从概念推进到可行的设备规划。',
      subTitle: '何时可能需要定制化',
      cons: ['特殊产品形状或物料特性', '非标准布局需求', '与现有工作流整合', '独特的包装或处理逻辑', '特定市场的技术条件'],
      cta: '如果您的项目不易匹配标准机器，请告诉我们您的应用和挑战。'
    },
    zh: {
      title: '客製機械支援',
      p1: '並非每個生產需求都能透過標準機器解決。有些專案需要在機器尺寸、結構、處理方式、工作流連接或特定應用功能上進行調整。',
      p2: '我們支援正在探索非標準機械方向的買家，幫助他們以更務實的方式從概念推進到可行的設備規劃。',
      subTitle: '何時可能需要客製化',
      cons: ['特殊產品形狀或物料特性', '非標準佈局需求', '與現有工作流整合', '獨特的包裝或處理邏輯', '特定市場的技術條件'],
      cta: '如果您的專案不易匹配標準機器，請告訴我們您的應用和挑戰。'
    },
    fr: {
      title: 'Support machines sur mesure',
      p1: 'Chaque besoin de production ne peut pas être résolu avec une machine standard. Certains projets nécessitent des modifications de taille, de structure, de méthode de manipulation, de connexion de flux de travail ou de fonction spécifique à l\'application.',
      p2: 'Nous accompagnons les acheteurs qui explorent des directions de machines non standard et qui ont besoin d\'une approche plus pratique pour passer du concept à une planification d\'équipement viable.',
      subTitle: 'Quand la personnalisation peut être nécessaire',
      cons: ['Forme de produit ou comportement de matériau spécial', 'Exigences de disposition non standard', 'Intégration avec le flux de travail existant', 'Logique d\'emballage ou de manipulation unique', 'Conditions techniques spécifiques au marché'],
      cta: 'Si votre projet ne correspond pas facilement à une machine standard, parlez-nous de l\'application et du défi.'
    },
    es: {
      title: 'Soporte de maquinaria personalizada',
      p1: 'No todas las necesidades de producción pueden resolverse con una máquina estándar. Algunos proyectos requieren modificaciones en el tamaño, estructura, método de manipulación, conexión del flujo de trabajo o función específica de la aplicación.',
      p2: 'Apoyamos a los compradores que exploran direcciones de maquinaria no estándar y necesitan una forma más práctica de pasar del concepto a la planificación de equipos viables.',
      subTitle: 'Cuándo puede ser necesaria la personalización',
      cons: ['Forma de producto o comportamiento de material especial', 'Requisitos de diseño no estándar', 'Integración con flujo de trabajo existente', 'Lógica de empaque o manipulación única', 'Condiciones técnicas específicas del mercado'],
      cta: 'Si su proyecto no se adapta fácilmente a una máquina estándar, cuéntenos sobre la aplicación y el desafío.'
    },
    pt: {
      title: 'Suporte para máquinas personalizadas',
      p1: 'Nem toda necessidade de produção pode ser resolvida com uma máquina padrão. Alguns projetos requerem modificações no tamanho, estrutura, método de manuseio, conexão de fluxo de trabalho ou função específica da aplicação.',
      p2: 'Apoiamos compradores que estão explorando direções de máquinas não padronizadas e precisam de uma forma mais prática de avançar do conceito ao planejamento de equipamentos viáveis.',
      subTitle: 'Quando a personalização pode ser necessária',
      cons: ['Forma de produto ou comportamento de material especial', 'Requisitos de layout não padrão', 'Integração com fluxo de trabalho existente', 'Lógica de embalagem ou manuseio única', 'Condições técnicas específicas do mercado'],
      cta: 'Se seu projeto não se encaixa facilmente em uma máquina padrão, conte-nos sobre a aplicação e o desafio.'
    },
    ko: {
      title: '맞춤형 기계 지원',
      p1: '모든 생산 요구를 표준 기계로 해결할 수 있는 것은 아닙니다. 일부 프로젝트는 기계 크기, 구조, 취급 방법, 워크플로 연결 또는 애플리케이션별 기능의 수정이 필요합니다.',
      p2: '비표준 기계 방향을 탐색 중인 구매자를 지원하며, 개념에서 실행 가능한 장비 계획으로 보다 실질적으로 진행할 수 있도록 도와드립니다.',
      subTitle: '맞춤화가 필요할 수 있는 경우',
      cons: ['특수한 제품 형태 또는 소재 특성', '비표준 레이아웃 요구사항', '기존 워크플로와의 통합', '고유한 포장 또는 처리 로직', '시장별 기술 조건'],
      cta: '프로젝트가 표준 기계에 쉽게 맞지 않는다면, 애플리케이션과 과제를 알려주세요.'
    },
    ja: {
      title: 'カスタム機械サポート',
      p1: 'すべての生産ニーズが標準機械で解決できるわけではありません。一部のプロジェクトでは、機械のサイズ、構造、取り扱い方法、ワークフロー接続、またはアプリケーション固有の機能の変更が必要です。',
      p2: '非標準的な機械の方向性を模索しているバイヤーをサポートし、コンセプトから実行可能な機器計画へとより実用的に進める方法を提供しています。',
      subTitle: 'カスタマイズが必要な場合',
      cons: ['特殊な製品形状や素材の挙動', '非標準的なレイアウト要件', '既存ワークフローとの統合', '独自の包装・取り扱いロジック', '市場固有の技術条件'],
      cta: 'プロジェクトが標準機械に簡単に適合しない場合は、用途と課題をお知らせください。'
    },
    ar: {
      title: 'دعم الآلات المخصصة',
      p1: 'لا يمكن حل كل احتياج إنتاجي بآلة قياسية. تتطلب بعض المشاريع تعديلات في حجم الآلة أو هيكلها أو طريقة المناولة أو اتصال سير العمل أو الوظيفة الخاصة بالتطبيق.',
      p2: 'ندعم المشترين الذين يستكشفون اتجاهات آلات غير قياسية ويحتاجون إلى طريقة أكثر عملية للانتقال من المفهوم إلى تخطيط المعدات القابلة للتنفيذ.',
      subTitle: 'متى قد تكون التخصيص ضرورياً',
      cons: ['شكل منتج خاص أو سلوك مادة', 'متطلبات تخطيط غير قياسية', 'التكامل مع سير العمل الحالي', 'منطق تعبئة أو مناولة فريد', 'ظروف تقنية خاصة بالسوق'],
      cta: 'إذا لم يكن مشروعك يتناسب بسهولة مع آلة قياسية، أخبرنا عن التطبيق والتحدي.'
    },
    th: {
      title: 'การสนับสนุนเครื่องจักรแบบกำหนดเอง',
      p1: 'ไม่ใช่ทุกความต้องการในการผลิตจะสามารถแก้ไขได้ด้วยเครื่องจักรมาตรฐาน บางโครงการต้องการการปรับเปลี่ยนในขนาดเครื่อง โครงสร้าง วิธีการจัดการ การเชื่อมต่อเวิร์กโฟลว์ หรือฟังก์ชันเฉพาะของแอปพลิเคชัน',
      p2: 'เราสนับสนุนผู้ซื้อที่กำลังสำรวจทิศทางเครื่องจักรที่ไม่เป็นมาตรฐาน และต้องการวิธีที่เป็นรูปธรรมมากขึ้นในการก้าวจากแนวคิดไปสู่การวางแผนอุปกรณ์ที่ใช้งานได้จริง',
      subTitle: 'เมื่อใดที่อาจต้องการการปรับแต่ง',
      cons: ['รูปทรงผลิตภัณฑ์พิเศษหรือพฤติกรรมวัสดุ', 'ข้อกำหนดเลย์เอาต์ที่ไม่เป็นมาตรฐาน', 'การบูรณาการกับเวิร์กโฟลว์ที่มีอยู่', 'ตรรกะการบรรจุภัณฑ์หรือการจัดการที่เป็นเอกลักษณ์', 'เงื่อนไขทางเทคนิคเฉพาะตลาด'],
      cta: 'หากโครงการของคุณไม่เหมาะกับเครื่องจักรมาตรฐาน บอกเราเกี่ยวกับการใช้งานและความท้าทาย'
    },
    vi: {
      title: 'Hỗ trợ máy móc tùy chỉnh',
      p1: 'Không phải mọi nhu cầu sản xuất đều có thể giải quyết bằng máy tiêu chuẩn. Một số dự án yêu cầu sửa đổi về kích thước máy, cấu trúc, phương pháp xử lý, kết nối quy trình làm việc hoặc chức năng dành riêng cho ứng dụng.',
      p2: 'Chúng tôi hỗ trợ người mua đang khám phá hướng đi máy móc không tiêu chuẩn và cần cách thực tế hơn để chuyển từ khái niệm sang lập kế hoạch thiết bị khả thi.',
      subTitle: 'Khi nào có thể cần tùy chỉnh',
      cons: ['Hình dạng sản phẩm hoặc đặc tính vật liệu đặc biệt', 'Yêu cầu bố trí không tiêu chuẩn', 'Tích hợp với quy trình làm việc hiện có', 'Logic đóng gói hoặc xử lý độc đáo', 'Điều kiện kỹ thuật đặc thù thị trường'],
      cta: 'Nếu dự án của bạn không dễ phù hợp với máy tiêu chuẩn, hãy cho chúng tôi biết ứng dụng và thách thức.'
    },
    de: {
      title: 'Unterstützung für kundenspezifische Maschinen',
      p1: 'Nicht jeder Produktionsbedarf kann mit einer Standardmaschine gelöst werden. Einige Projekte erfordern Anpassungen bei Maschinengröße, Struktur, Handhabungsmethode, Workflow-Verbindung oder anwendungsspezifischer Funktion.',
      p2: 'Wir unterstützen Käufer, die nicht standardmäßige Maschinenrichtungen erkunden und einen praktischeren Weg vom Konzept zur realisierbaren Ausrüstungsplanung benötigen.',
      subTitle: 'Wann eine Anpassung erforderlich sein kann',
      cons: ['Spezielle Produktform oder Materialverhalten', 'Nicht standardmäßige Layout-Anforderungen', 'Integration in bestehende Arbeitsabläufe', 'Einzigartige Verpackungs- oder Handhabungslogik', 'Marktspezifische technische Bedingungen'],
      cta: 'Wenn Ihr Projekt nicht leicht zu einer Standardmaschine passt, teilen Sie uns die Anwendung und Herausforderung mit.'
    }
  }
  const t = content[lang] || content['en']
  const routeGuide = {
    notFit: ({
      en: ['Projects that only need a standard machine but have not reviewed existing options', 'Requests without drawings, process targets, or acceptance criteria', 'Custom requests where budget, lead time, and ownership are still open-ended'],
      zh: ['其實標準機就能滿足、但尚未先比較現成方案的專案', '沒有圖面、製程目標或驗收標準的客製需求', '預算、交期與責任分工都尚未定義的客製專案'],
      cn: ['其实标准机就能满足、但尚未先比较现成方案的项目', '没有图面、制程目标或验收标准的定制需求', '预算、交期与责任分工都尚未定义的定制项目'],
    } as Record<string, string[]>)[lang] || ['Projects that only need a standard machine but have not reviewed existing options', 'Requests without drawings, process targets, or acceptance criteria', 'Custom requests where budget, lead time, and ownership are still open-ended'],
    compare: ({
      en: ['What is custom vs standard, and how much engineering change is really required', 'Responsibility split for design review, trial samples, utilities, and site conditions', 'Milestones: drawing approval, fabrication lead time, FAT content, and change-order control'],
      zh: ['哪些是標準件、哪些是真正需要客製的工程變更', '設計審查、打樣、公用工程與現場條件由誰負責', '圖面確認、製造交期、FAT 內容與變更管理里程碑'],
      cn: ['哪些是标准件、哪些是真正需要定制的工程变更', '设计审查、打样、公用工程与现场条件由谁负责', '图面确认、制造交期、FAT 内容与变更管理里程碑'],
    } as Record<string, string[]>)[lang] || ['What is custom vs standard, and how much engineering change is really required', 'Responsibility split for design review, trial samples, utilities, and site conditions', 'Milestones: drawing approval, fabrication lead time, FAT content, and change-order control'],
    acceptance: ({
      en: ['Do not release fabrication until drawings and acceptance criteria are approved', 'Use staged FAT with key functions, safety logic, and performance checks', 'Lock document package, spare parts, and post-installation support before shipment'],
      zh: ['圖面與驗收標準未核准前，不要放行製造', '用分階段 FAT 驗證關鍵功能、安全邏輯與性能', '出貨前鎖定文件包、備件與安裝後支援內容'],
      cn: ['图面与验收标准未核准前，不要放行制造', '用分阶段 FAT 验证关键功能、安全逻辑与性能', '出货前锁定文件包、备件与安装后支持内容'],
    } as Record<string, string[]>)[lang] || ['Do not release fabrication until drawings and acceptance criteria are approved', 'Use staged FAT with key functions, safety logic, and performance checks', 'Lock document package, spare parts, and post-installation support before shipment'],
  }

  const pageUrl = `${SITE_URL}/${lang}/machinery/custom`
  const itemListId = `${pageUrl}#itemlist`
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': pageUrl,
    url: pageUrl,
    inLanguage: LANG_META[lang].htmlLang,
    name: metaTitle,
    description: metaDesc,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
    mainEntity: { '@id': itemListId },
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': itemListId,
    inLanguage: LANG_META[lang].htmlLang,
    name: metaTitle,
    isPartOf: { '@id': pageUrl },
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Packaging Machinery', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machinery/packaging`, url: `${SITE_URL}/${lang}/machinery/packaging`, name: 'Packaging Machinery' } },
      { '@type': 'ListItem', position: 2, name: 'Food Processing Equipment', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machinery/food-processing`, url: `${SITE_URL}/${lang}/machinery/food-processing`, name: 'Food Processing Equipment' } },
      { '@type': 'ListItem', position: 3, name: 'Filling & Sealing Systems', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machinery/filling-sealing`, url: `${SITE_URL}/${lang}/machinery/filling-sealing`, name: 'Filling & Sealing Systems' } },
      { '@type': 'ListItem', position: 4, name: 'Conveying & Automation', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machinery/conveying-automation`, url: `${SITE_URL}/${lang}/machinery/conveying-automation`, name: 'Conveying & Automation' } },
      { '@type': 'ListItem', position: 5, name: 'Contact', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/contact`, url: `${SITE_URL}/${lang}/contact`, name: 'Contact' } },
    ],
  }

  return (
    <>
      <JsonLd data={[collectionSchema, itemListSchema]} />
      <PageHero
        kicker={({ en: 'CUSTOM ENGINEERING', cn: '定制工程', zh: '客製工程', fr: 'SUR MESURE', es: 'INGENIERÍA A MEDIDA', pt: 'ENGENHARIA SOB MEDIDA', ko: '맞춤 엔지니어링', ja: 'カスタム設計', ar: 'هندسة مخصصة', th: 'งานสั่งทำ', vi: 'TÙY CHỈNH', de: 'SONDERANFERTIGUNG' } as Record<string,string>)[lang] || 'CUSTOM ENGINEERING'}
        title={t.title}
        desc={t.p1}
        image={{ src: heroPhoto, alt: 'Custom engineering and sourcing support', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />
      <section className="bg-white py-6">
        <Container className="max-w-5xl">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: BREADCRUMB_LABELS[lang].machinery, href: `/${lang}/machinery` },
              { label: t.title, href: `/${lang}/machinery/custom` },
            ]}
          />
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{t.p2}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="p-8">
              <h2 className="text-xl font-semibold text-gray-950">{t.subTitle}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {t.cons.map((c: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded bg-brand-50 text-brand-900 ring-1 ring-brand-100">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed sm:text-base">{c}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="rounded-2xl bg-brand-950 p-8 text-white shadow-elev-2">
              <h2 className="text-xl font-semibold">{t.cta}</h2>
              <div className="mt-8">
                <ButtonLink href={`/${lang}/contact`} size="lg">
                  {({
                    en: 'Request Assessment',
                    cn: '获取采购评估',
                    zh: '取得採購評估',
                    fr: 'Demander évaluation',
                    es: 'Solicitar evaluación',
                    pt: 'Solicitar avaliação',
                    ko: '평가 요청',
                    ja: '評価依頼',
                    ar: 'طلب تقييم',
                    th: 'ขอการประเมิน',
                    vi: 'Yêu cầu đánh giá',
                    de: 'Bewertung anfordern',
                  } as Record<string, string>)[lang] || 'Request Assessment'}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SourcingRouteGuide
        lang={lang}
        fitItems={t.cons}
        notFitItems={routeGuide.notFit}
        compareItems={routeGuide.compare}
        acceptanceItems={routeGuide.acceptance}
      />
    </>
  )
}
