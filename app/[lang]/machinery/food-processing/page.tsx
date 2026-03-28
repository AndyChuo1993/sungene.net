import type { Metadata } from 'next'
import { Lang } from '@/lib/i18n'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import Image from 'next/image'
import { PHOTO } from '@/lib/photoLibrary'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const titles: Record<string, string> = {
    en: 'Food Processing Equipment | Snack Line, Frying, Roasting, Mixing | SunGene',
    cn: '食品加工设备 | 零食生产线、油炸、烘焙、搅拌 | SunGene',
    zh: '食品加工設備 | 零食生產線、油炸、烘焙、攪拌 | SunGene',
    fr: 'Équipement de traitement alimentaire | Ligne snack, Friture, Torréfaction | SunGene',
    es: 'Equipo de procesamiento de alimentos | Línea de snacks, Fritura, Tostado | SunGene',
    pt: 'Equipamento de processamento de alimentos | Linha de snacks, Fritura, Torração | SunGene',
    ko: '식품 가공 장비 | 스낵 라인, 튀김, 로스팅, 혼합 | SunGene',
    ja: '食品加工設備 | スナックライン、フライ、ローストミキシング | SunGene',
    ar: 'معدات تصنيع الأغذية | خط الوجبات الخفيفة والقلي والتحميص | SunGene',
    th: 'อุปกรณ์แปรรูปอาหาร | สายผลิตขนม ทอด อบ ผสม | SunGene',
    vi: 'Thiết bị chế biến thực phẩm | Dây chuyền snack, chiên, rang, trộn | SunGene',
    de: 'Lebensmittelverarbeitungsmaschinen | Snack-Linie, Frittieren, Rösten | SunGene',
  }
  const descriptions: Record<string, string> = {
    en: 'SunGene manufactures food processing equipment including snack production lines, frying machines, roasting ovens, mixing systems, and continuous cooking lines. CE certified, factory-direct from Taiwan.',
    cn: 'SunGene生产食品加工设备，包括零食生产线、油炸机、烘烤炉、搅拌系统和连续蒸煮线。CE认证，台湾工厂直销。',
    zh: 'SunGene生產食品加工設備，包括零食生產線、油炸機、烘烤爐、攪拌系統和連續蒸煮線。CE認證，台灣工廠直銷。',
    fr: 'SunGene fabrique des équipements de traitement alimentaire incluant des lignes de production de snacks, friteuses, fours de torréfaction, systèmes de mélange et lignes de cuisson continues.',
    es: 'SunGene fabrica equipos de procesamiento de alimentos incluyendo líneas de producción de snacks, máquinas de freír, hornos de tostado, sistemas de mezcla y líneas de cocción continua.',
    pt: 'SunGene fabrica equipamentos de processamento de alimentos incluindo linhas de produção de snacks, fritadeiras, fornos de torra, sistemas de mistura e linhas de cozimento contínuo.',
    ko: 'SunGene은 스낵 생산 라인, 튀김 기계, 로스팅 오븐, 혼합 시스템 및 연속 조리 라인을 포함한 식품 가공 장비를 제조합니다.',
    ja: 'SunGeneはスナック生産ライン、フライヤー、ロースティングオーブン、ミキシングシステム、連続調理ラインなどの食品加工設備を製造しています。',
    ar: 'تصنع SunGene معدات تصنيع الأغذية بما في ذلك خطوط إنتاج الوجبات الخفيفة وآلات القلي وأفران التحميص وأنظمة الخلط وخطوط الطهي المستمر.',
    th: 'SunGene ผลิตอุปกรณ์แปรรูปอาหาร รวมถึงสายการผลิตขนม เครื่องทอด เตาอบ ระบบผสม และสายการปรุงอาหารต่อเนื่อง',
    vi: 'SunGene sản xuất thiết bị chế biến thực phẩm bao gồm dây chuyền sản xuất snack, máy chiên, lò rang, hệ thống trộn và dây chuyền nấu liên tục.',
    de: 'SunGene stellt Lebensmittelverarbeitungsmaschinen her, darunter Snack-Produktionslinien, Frittiermaschinen, Röstöfen, Mischanlagen und kontinuierliche Kochlinien.',
  }
  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    alternates: { canonical: `https://sungene.net/${lang}/machinery/food-processing` },
    openGraph: {
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      url: `https://sungene.net/${lang}/machinery/food-processing`,
    },
  }
}

export default async function FoodProcessingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
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

  return (
    <>
      <PageHeader title={t.title} desc={t.p1} />
      <section className="py-16 sm:py-20">
        <Container className="max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{t.p2}</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-gray-200/60">
            <div className="relative aspect-[16/9] bg-gray-100">
              <Image src={heroPhoto} alt="Food processing machinery in factory" fill sizes="(min-width: 1024px) 72vw, 92vw" className="object-cover" />
            </div>
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
