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
  en: 'Food Processing Equipment | Snack Line, Frying, Roasting, Mixing',
  cn: '食品加工设备 | 零食生产线、油炸、烘焙、搅拌',
  zh: '食品加工設備 | 零食生產線、油炸、烘焙、攪拌',
  fr: 'Équipement de traitement alimentaire | Ligne snack, Friture, Torréfaction',
  es: 'Equipo de procesamiento de alimentos | Línea de snacks, Fritura, Tostado',
  pt: 'Equipamento de processamento de alimentos | Linha de snacks, Fritura, Torração',
  ko: '식품 가공 장비 | 스낵 라인, 튀김, 로스팅, 혼합',
  ja: '食品加工設備 | スナックライン、フライ、ローストミキシング',
  ar: 'معدات تصنيع الأغذية | خط الوجبات الخفيفة والقلي والتحميص',
  th: 'อุปกรณ์แปรรูปอาหาร | สายผลิตขนม ทอด อบ ผสม',
  vi: 'Thiết bị chế biến thực phẩm | Dây chuyền snack, chiên, rang, trộn',
  de: 'Lebensmittelverarbeitungsmaschinen | Snack-Linie, Frittieren, Rösten',
}

const metaDescs: Record<string, string> = {
  en: 'Food processing equipment including snack lines, frying machines, roasters, mixing systems, and continuous cooking lines.',
  cn: '食品加工设备：零食生产线、油炸机、烘烤炉、搅拌系统与连续蒸煮线。',
  zh: '食品加工設備：零食生產線、油炸機、烘烤爐、攪拌系統與連續蒸煮線。',
  fr: 'Équipements de traitement alimentaire : lignes snack, friteuses, fours de torréfaction, systèmes de mélange et lignes de cuisson continues.',
  es: 'Equipos de procesamiento de alimentos: líneas de snacks, freidoras, hornos de tostado, sistemas de mezcla y líneas de cocción continua.',
  pt: 'Equipamentos de processamento de alimentos: linhas de snacks, fritadeiras, fornos de torra, sistemas de mistura e linhas de cozimento contínuo.',
  ko: '식품 가공 장비: 스낵 라인, 튀김, 로스팅, 혼합 시스템 및 연속 조리 라인.',
  ja: '食品加工設備：スナックライン、フライヤー、ロースト、混合、連続調理ライン。',
  ar: 'معدات تصنيع الأغذية: خطوط السناك، آلات القلي، أفران التحميص، أنظمة الخلط وخطوط الطهي المستمر.',
  th: 'อุปกรณ์แปรรูปอาหาร: ไลน์ขนม เครื่องทอด เตาอบ/คั่ว ระบบผสม และไลน์ปรุงต่อเนื่อง',
  vi: 'Thiết bị chế biến thực phẩm gồm dây chuyền snack, máy chiên, lò rang, hệ thống trộn và dây chuyền nấu liên tục.',
  de: 'Lebensmitteltechnik: Snack-Linien, Frittiermaschinen, Röstöfen, Mischsysteme und kontinuierliche Kochlinien.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machinery/food-processing',
    type: 'website',
  })
}

export default async function FoodProcessingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const metaTitle = metaTitles[lang] || metaTitles.en
  const metaDesc = metaDescs[lang] || metaDescs.en
  const heroPhoto = PHOTO.machinery.subpageHeroes.foodProcessing
  const content: Record<string, any> = {
    en: {
      title: 'Food Processing Machinery Solutions',
      p1: 'Food processing projects vary widely depending on product type, hygiene requirements, workflow, output volume, and downstream packaging needs. We support customers evaluating machinery for food preparation, handling, mixing, cutting, and selected production processes.',
      p2: 'At the early stage, buyers often do not need a long catalog. They need a clearer understanding of what type of machinery setup is practical for their product and production objective. That is where our support starts.',
      subTitle: 'Suitable for Buyers Looking At',
      cons: ['Food preparation processes', 'Semi-automatic production upgrades', 'New line planning', 'Product handling improvements', 'Export-oriented equipment sourcing'],
      cta: 'Share your product and target capacity to start the discussion.'
    },
    cn: {
      title: '食品加工机械解决方案',
      p1: '食品加工项目因产品类型、卫生要求、工作流、产量及下游包装需求而异。我们协助评估用于食品备料、处理、混合、切割及特定生产流程的机械。',
      p2: '在初期阶段，买家通常不需要长篇的目录。他们需要更清晰地了解哪种类型的机械配置对其产品和生产目标是务实的。这就是我们支持的起点。',
      subTitle: '适合正在寻找以下方案的买家',
      cons: ['食品备料流程', '半自动生产升级', '新产线规划', '产品处理改进', '出口导向设备采购'],
      cta: '分享您的产品和目标产能以开始讨论。'
    },
    zh: {
      title: '食品加工機械解決方案',
      p1: '食品加工專案因產品類型、衛生要求、工作流、產量及下游包裝需求而異。我們協助評估用於食品備料、處理、混合、切割及特定生產流程的機械。',
      p2: '在初期階段，買家通常不需要長篇的目錄。他們需要更清晰地了解哪種類型的機械配置對其產品和生產目標是務實的。這就是我們支援的起點。',
      subTitle: '適合正在尋找以下方案的買家',
      cons: ['食品備料流程', '半自動生產升級', '新產線規劃', '產品處理改進', '出口導向設備採購'],
      cta: '分享您的產品和目標產能以開始討論。'
    },
    fr: {
      title: 'Solutions de machines de transformation alimentaire',
      p1: 'Les projets de transformation alimentaire varient considérablement selon le type de produit, les exigences d\'hygiène, le flux de travail, le volume de production et les besoins d\'emballage en aval. Nous accompagnons les clients dans l\'évaluation des machines pour la préparation, la manipulation, le mélange, la découpe et certains processus de production alimentaire.',
      p2: 'Au stade initial, les acheteurs n\'ont souvent pas besoin d\'un long catalogue. Ils ont besoin d\'une compréhension plus claire du type de configuration de machines adapté à leur produit et à leur objectif de production. C\'est là que commence notre accompagnement.',
      subTitle: 'Adapté aux acheteurs recherchant',
      cons: ['Processus de préparation alimentaire', 'Mises à niveau de production semi-automatique', 'Planification de nouvelles lignes', 'Améliorations de la manipulation des produits', 'Approvisionnement en équipements orientés export'],
      cta: 'Partagez votre produit et votre capacité cible pour démarrer la discussion.'
    },
    es: {
      title: 'Soluciones de maquinaria de procesamiento de alimentos',
      p1: 'Los proyectos de procesamiento de alimentos varían ampliamente según el tipo de producto, requisitos de higiene, flujo de trabajo, volumen de producción y necesidades de empaque posteriores. Apoyamos a los clientes en la evaluación de maquinaria para preparación, manipulación, mezclado, corte y procesos de producción seleccionados.',
      p2: 'En la etapa inicial, los compradores a menudo no necesitan un catálogo extenso. Necesitan una comprensión más clara de qué tipo de configuración de maquinaria es práctica para su producto y objetivo de producción. Ahí es donde comienza nuestro apoyo.',
      subTitle: 'Adecuado para compradores que buscan',
      cons: ['Procesos de preparación de alimentos', 'Mejoras de producción semiautomática', 'Planificación de nuevas líneas', 'Mejoras en el manejo de productos', 'Abastecimiento de equipos orientados a la exportación'],
      cta: 'Comparta su producto y capacidad objetivo para iniciar la discusión.'
    },
    pt: {
      title: 'Soluções em Máquinas de Processamento de Alimentos',
      p1: 'Projetos de processamento de alimentos variam amplamente dependendo do tipo de produto, requisitos de higiene, fluxo de trabalho, volume de produção e necessidades de embalagem a jusante. Apoiamos clientes na avaliação de máquinas para preparação, manuseio, mistura, corte e processos de produção selecionados.',
      p2: 'Na fase inicial, os compradores geralmente não precisam de um catálogo extenso. Eles precisam de uma compreensão mais clara de qual tipo de configuração de máquinas é prática para seu produto e objetivo de produção. É aí que nosso suporte começa.',
      subTitle: 'Adequado para compradores que buscam',
      cons: ['Processos de preparação de alimentos', 'Upgrades de produção semiautomática', 'Planejamento de novas linhas', 'Melhorias no manuseio de produtos', 'Aquisição de equipamentos para exportação'],
      cta: 'Compartilhe seu produto e capacidade-alvo para iniciar a discussão.'
    },
    ko: {
      title: '식품 가공 기계 솔루션',
      p1: '식품 가공 프로젝트는 제품 유형, 위생 요건, 작업 흐름, 생산량 및 후속 포장 요구에 따라 크게 다릅니다. 당사는 식품 준비, 취급, 혼합, 절단 및 선별 생산 공정을 위한 기계 평가를 지원합니다.',
      p2: '초기 단계에서 구매자는 긴 카탈로그가 필요하지 않은 경우가 많습니다. 자신의 제품과 생산 목표에 어떤 유형의 기계 구성이 실용적인지 더 명확하게 이해하는 것이 필요합니다. 바로 여기서 당사의 지원이 시작됩니다.',
      subTitle: '다음을 찾고 있는 구매자에게 적합',
      cons: ['식품 준비 공정', '반자동 생산 업그레이드', '새 라인 계획', '제품 취급 개선', '수출 지향 장비 조달'],
      cta: '제품과 목표 생산량을 공유하여 논의를 시작하세요.'
    },
    ja: {
      title: '食品加工機械ソリューション',
      p1: '食品加工プロジェクトは、製品の種類、衛生要件、ワークフロー、生産量、下流の包装ニーズによって大きく異なります。当社は、食品の調理、取り扱い、混合、カット、および特定の生産プロセス向けの機械評価をサポートしています。',
      p2: '初期段階では、バイヤーは長いカタログを必要としないことがほとんどです。自社の製品と生産目標に対して、どのタイプの機械構成が実用的かをより明確に理解することが必要です。それが当社のサポートの出発点です。',
      subTitle: '以下をお探しのバイヤーに最適',
      cons: ['食品調理プロセス', '半自動生産のアップグレード', '新ライン計画', '製品取り扱いの改善', '輸出向け機器調達'],
      cta: '製品と目標生産能力を共有して、ディスカッションを開始してください。'
    },
    ar: {
      title: 'حلول آلات تجهيز الأغذية',
      p1: 'تختلف مشاريع تجهيز الأغذية بشكل كبير حسب نوع المنتج ومتطلبات النظافة وسير العمل وحجم الإنتاج واحتياجات التعبئة والتغليف. نحن ندعم العملاء في تقييم الآلات المخصصة لإعداد الأغذية والمناولة والخلط والتقطيع وعمليات الإنتاج المختارة.',
      p2: 'في المرحلة المبكرة، غالبًا لا يحتاج المشترون إلى كتالوج طويل. إنهم بحاجة إلى فهم أوضح لنوع إعداد الآلات العملي لمنتجهم وهدف إنتاجهم. هنا يبدأ دعمنا.',
      subTitle: 'مناسب للمشترين الذين يبحثون عن',
      cons: ['عمليات إعداد الأغذية', 'ترقيات الإنتاج شبه الآلي', 'تخطيط خطوط جديدة', 'تحسينات مناولة المنتجات', 'توريد معدات موجهة للتصدير'],
      cta: 'شاركنا منتجك والطاقة المستهدفة لبدء النقاش.'
    },
    th: {
      title: 'โซลูชันเครื่องจักรแปรรูปอาหาร',
      p1: 'โครงการแปรรูปอาหารมีความแตกต่างกันอย่างมากขึ้นอยู่กับประเภทผลิตภัณฑ์ ข้อกำหนดด้านสุขอนามัย เวิร์กโฟลว์ ปริมาณการผลิต และความต้องการบรรจุภัณฑ์ปลายทาง เราสนับสนุนลูกค้าในการประเมินเครื่องจักรสำหรับการเตรียม การจัดการ การผสม การตัด และกระบวนการผลิตที่เลือก',
      p2: 'ในระยะเริ่มต้น ผู้ซื้อมักไม่ต้องการแคตตาล็อกยาว พวกเขาต้องการความเข้าใจที่ชัดเจนยิ่งขึ้นว่าการตั้งค่าเครื่องจักรประเภทใดที่เหมาะกับผลิตภัณฑ์และเป้าหมายการผลิตของตน นั่นคือจุดเริ่มต้นของการสนับสนุนจากเรา',
      subTitle: 'เหมาะสำหรับผู้ซื้อที่กำลังมองหา',
      cons: ['กระบวนการเตรียมอาหาร', 'การอัปเกรดการผลิตแบบกึ่งอัตโนมัติ', 'การวางแผนสายการผลิตใหม่', 'การปรับปรุงการจัดการผลิตภัณฑ์', 'การจัดหาอุปกรณ์เพื่อการส่งออก'],
      cta: 'แบ่งปันผลิตภัณฑ์และกำลังการผลิตเป้าหมายของคุณเพื่อเริ่มการสนทนา'
    },
    vi: {
      title: 'Giải pháp máy chế biến thực phẩm',
      p1: 'Các dự án chế biến thực phẩm rất đa dạng tùy thuộc vào loại sản phẩm, yêu cầu vệ sinh, quy trình làm việc, sản lượng và nhu cầu đóng gói hạ nguồn. Chúng tôi hỗ trợ khách hàng đánh giá máy móc cho việc chuẩn bị, xử lý, trộn, cắt và các quy trình sản xuất được chọn.',
      p2: 'Ở giai đoạn đầu, người mua thường không cần một danh mục dài. Họ cần hiểu rõ hơn về loại cấu hình máy móc nào phù hợp với sản phẩm và mục tiêu sản xuất của mình. Đó là nơi sự hỗ trợ của chúng tôi bắt đầu.',
      subTitle: 'Phù hợp cho người mua đang tìm kiếm',
      cons: ['Quy trình chuẩn bị thực phẩm', 'Nâng cấp sản xuất bán tự động', 'Lập kế hoạch dây chuyền mới', 'Cải thiện xử lý sản phẩm', 'Mua sắm thiết bị hướng xuất khẩu'],
      cta: 'Chia sẻ sản phẩm và công suất mục tiêu của bạn để bắt đầu thảo luận.'
    },
    de: {
      title: 'Lebensmittelverarbeitungsmaschinen-Lösungen',
      p1: 'Lebensmittelverarbeitungsprojekte variieren stark je nach Produkttyp, Hygieneanforderungen, Arbeitsablauf, Produktionsvolumen und nachgelagerten Verpackungsanforderungen. Wir unterstützen Kunden bei der Bewertung von Maschinen für die Lebensmittelzubereitung, -handhabung, -mischung, -schneidung und ausgewählte Produktionsprozesse.',
      p2: 'In der Anfangsphase benötigen Käufer oft keinen langen Katalog. Sie benötigen ein klareres Verständnis dafür, welche Art von Maschinenkonfiguration für ihr Produkt und ihr Produktionsziel praktisch ist. Hier beginnt unsere Unterstützung.',
      subTitle: 'Geeignet für Käufer, die suchen',
      cons: ['Lebensmittelzubereitungsprozesse', 'Halbautomatische Produktions-Upgrades', 'Neue Linienplanung', 'Verbesserungen der Produkthandhabung', 'Exportorientierte Gerätebeschaffung'],
      cta: 'Teilen Sie Ihr Produkt und Ihre Zielkapazität, um die Diskussion zu starten.'
    }
  }
  const t = content[lang] || content['en']

  const pageUrl = `${SITE_URL}/${lang}/machinery/food-processing`
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
      { '@type': 'ListItem', position: 1, name: 'Snack Processing Line', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machines/snack-processing-line`, url: `${SITE_URL}/${lang}/machines/snack-processing-line`, name: 'Snack Processing Line' } },
      { '@type': 'ListItem', position: 2, name: 'Snack Processing Buying Guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/topic/snack-processing-line`, url: `${SITE_URL}/${lang}/resources/topic/snack-processing-line`, name: 'Snack Processing Buying Guides' } },
    ],
  }

  return (
    <>
      <JsonLd data={[collectionSchema, itemListSchema]} />
      <PageHero
        kicker={({ en: 'FOOD PROCESSING', cn: '食品加工', zh: '食品加工', fr: 'AGROALIMENTAIRE', es: 'PROCESAMIENTO DE ALIMENTOS', pt: 'PROCESSAMENTO DE ALIMENTOS', ko: '식품 가공', ja: '食品加工', ar: 'معالجة الأغذية', th: 'แปรรูปอาหาร', vi: 'CHẾ BIẾN THỰC PHẨM', de: 'LEBENSMITTELVERARBEITUNG' } as Record<string,string>)[lang] || 'FOOD PROCESSING'}
        title={t.title}
        desc={t.p1}
        image={{ src: heroPhoto, alt: 'Food processing machinery in factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />
      <section className="bg-white py-6">
        <Container className="max-w-5xl">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: BREADCRUMB_LABELS[lang].machinery, href: `/${lang}/machinery` },
              { label: t.title, href: `/${lang}/machinery/food-processing` },
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
