import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, BREADCRUMB_LABELS, LANG_META } from '@/lib/seo'

const metaTitles: Record<string, string> = {
  en: 'Custom Machinery & OEM Solutions | Bespoke Production Equipment',
  cn: '定制机械与OEM解决方案 | 定制生产设备',
  zh: '客製機械與OEM解決方案 | 客製生產設備',
  fr: 'Machines sur mesure & solutions OEM | Équipements de production personnalisés',
  es: 'Maquinaria personalizada y soluciones OEM | Equipos de producción a medida',
  pt: 'Máquinas personalizadas e soluções OEM | Equipamentos de produção sob medida',
  ko: '맞춤형 기계 및 OEM 솔루션 | 주문 제작 생산 장비',
  ja: 'カスタム機械とOEMソリューション | オーダーメイド生産設備',
  ar: 'الآلات المخصصة وحلول OEM | معدات الإنتاج المصنوعة حسب الطلب',
  th: 'เครื่องจักรสั่งทำและโซลูชัน OEM | อุปกรณ์การผลิตแบบกำหนดเอง',
  vi: 'Máy móc tùy chỉnh và giải pháp OEM | Thiết bị sản xuất theo yêu cầu',
  de: 'Sondermaschinen & OEM-Lösungen | Maßgefertigte Produktionsanlagen',
}

const metaDescs: Record<string, string> = {
  en: 'Custom industrial machinery and OEM solutions for unique production requirements: packaging, filling, food processing, and automation systems.',
  cn: '针对特殊生产需求的定制工业机械与OEM方案：包装、充填、食品加工与自动化系统。',
  zh: '針對特殊生產需求的客製工業機械與OEM方案：包裝、充填、食品加工與自動化系統。',
  fr: 'Machines industrielles sur mesure et solutions OEM pour des besoins uniques : emballage, remplissage, traitement alimentaire et automatisation.',
  es: 'Maquinaria industrial personalizada y soluciones OEM: empaque, llenado, procesamiento de alimentos y automatización.',
  pt: 'Maquinário industrial personalizado e soluções OEM: embalagem, envase, processamento de alimentos e automação.',
  ko: '맞춤형 산업 기계 및 OEM 솔루션: 포장, 충전, 식품 가공 및 자동화 시스템.',
  ja: 'カスタム産業機械とOEM：包装、充填、食品加工、自動化システム。',
  ar: 'آلات صناعية مخصصة وحلول OEM: أنظمة تعبئة وتغليف وملء ومعالجة أغذية وأتمتة.',
  th: 'เครื่องจักรสั่งทำและโซลูชัน OEM: บรรจุภัณฑ์ การเติม การแปรรูปอาหาร และระบบอัตโนมัติ',
  vi: 'Máy móc công nghiệp tùy chỉnh và giải pháp OEM: đóng gói, chiết rót, chế biến thực phẩm và tự động hóa.',
  de: 'Sondermaschinen und OEM-Lösungen: Verpackung, Abfüllung, Lebensmittelverarbeitung und Automatisierung.',
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
        image={{ src: heroPhoto, alt: 'Custom machinery engineering in factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
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
                  {lang === 'en' ? 'Send an Inquiry' : (lang === 'cn' ? '提交询价' : '提交詢價')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
