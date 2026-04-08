import { Lang, ALL_LANGS } from '@/lib/i18n'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'

// ─── Metadata ────────────────────────────────────────────────────────────────

const metaTitles: Record<string, string> = {
  en: 'Automation Solutions | Single Machine to Full Turnkey Line | SunGene',
  cn: '自动化解决方案 | 从单机到全套交钥匙生产线 | SunGene',
  zh: '自動化解決方案 | 從單機到全套交鑰匙生產線 | SunGene',
  fr: 'Solutions d\'automatisation | Machine individuelle à ligne clé en main | SunGene',
  es: 'Soluciones de automatización | De una máquina a línea llave en mano | SunGene',
  pt: 'Soluções de automação | Máquina única a linha turnkey completa | SunGene',
  ko: '자동화 솔루션 | 단일 기계에서 풀 턴키 라인까지 | SunGene',
  ja: '自動化ソリューション | 単体機械からターンキーラインまで | SunGene',
  ar: 'حلول الأتمتة | من آلة واحدة إلى خط إنتاج متكامل | SunGene',
  th: 'โซลูชันระบบอัตโนมัติ | จากเครื่องเดียวถึงสายการผลิตครบวงจร | SunGene',
  vi: 'Giải pháp tự động hóa | Từ máy đơn đến dây chuyền turnkey | SunGene',
  de: 'Automatisierungslösungen | Von der Einzelmaschine zur Turnkey-Linie | SunGene',
}

const metaDescs: Record<string, string> = {
  en: 'Automation scope from a single machine to a full turnkey line. We match by product behavior, throughput target, hygiene needs, footprint, and local utilities.',
  cn: '自动化范围从单机到整线交钥匙。我们按产品特性、目标产能、卫生要求、场地布局与现场电力/公用工程匹配方案。',
  zh: '自動化範圍從單機到整線交鑰匙。我們依產品特性、目標產能、衛生要求、場地佈局與現場電力/公用工程匹配方案。',
  fr: 'Automatisation d’une machine à une ligne clé en main. Dimensionnement selon produit, cadence, hygiène, implantation et utilités disponibles.',
  es: 'Automatización desde una máquina hasta una línea turnkey. Dimensionamos según producto, capacidad objetivo, higiene, layout e infraestructura (utilidades).',
  pt: 'Automação de uma máquina até uma linha turnkey. Dimensionamos conforme produto, meta de produção, higiene, layout e utilidades disponíveis.',
  ko: '단일 장비부터 턴키 라인까지 자동화 범위를 설계합니다. 제품 특성, 목표 생산량, 위생 요구, 설치 공간, 전기/유틸리티 조건을 기준으로 구성합니다.',
  ja: '単体機械からターンキーラインまで、製品特性・目標能力・衛生要件・レイアウト・ユーティリティ条件で最適な範囲を設計します。',
  ar: 'نطاق الأتمتة من آلة واحدة إلى خط turnkey كامل. نحدد الحل حسب خصائص المنتج والقدرة المطلوبة ومتطلبات النظافة والمساحة واليوتيليتي.',
  th: 'กำหนดขอบเขตระบบอัตโนมัติตั้งแต่เครื่องเดียวถึงไลน์ turnkey โดยพิจารณาจากลักษณะสินค้า กำลังการผลิต สุขอนามัย เลย์เอาต์ และยูทิลิตี้หน้างาน',
  vi: 'Xác định phạm vi tự động hóa từ máy đơn đến dây chuyền turnkey theo đặc tính sản phẩm, công suất mục tiêu, vệ sinh, layout và điều kiện tiện ích.',
  de: 'Automatisierung von Einzelmaschine bis Turnkey-Linie. Auslegung nach Produkteigenschaften, Zielleistung, Hygiene, Layout und verfügbaren Utilities.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/solutions',
    type: 'website',
    keywords: [
      'turnkey production line', 'automation solutions', 'single machine', 'semi-automatic packaging',
      'fully automatic line', 'custom machinery', 'packaging line integration', 'Taiwan machinery manufacturer',
    ],
  })
}

// ─── Hero copy ────────────────────────────────────────────────────────────────

const heroKicker: Record<string, string> = {
  en: 'AUTOMATION SOLUTIONS',
  cn: '自动化解决方案',
  zh: '自動化解決方案',
  fr: 'SOLUTIONS D\'AUTOMATISATION',
  es: 'SOLUCIONES DE AUTOMATIZACIÓN',
  pt: 'SOLUÇÕES DE AUTOMAÇÃO',
  ko: '자동화 솔루션',
  ja: '自動化ソリューション',
  ar: 'حلول الأتمتة',
  th: 'โซลูชันระบบอัตโนมัติ',
  vi: 'GIẢI PHÁP TỰ ĐỘNG HÓA',
  de: 'AUTOMATISIERUNGSLÖSUNGEN',
}

const heroTitle: Record<string, string> = {
  en: 'From Single Machine to Full Turnkey Line',
  cn: '从单机到全套交钥匙生产线',
  zh: '從單機到全套交鑰匙生產線',
  fr: 'De la machine individuelle à la ligne clé en main',
  es: 'De una sola máquina a una línea completa llave en mano',
  pt: 'Da máquina individual à linha turnkey completa',
  ko: '단일 기계에서 풀 턴키 라인까지',
  ja: '単体機械から完全ターンキーラインまで',
  ar: 'من آلة واحدة إلى خط إنتاج متكامل',
  th: 'จากเครื่องเดียวถึงสายการผลิตครบวงจร',
  vi: 'Từ Máy Đơn đến Dây Chuyền Turnkey Hoàn Chỉnh',
  de: 'Von der Einzelmaschine zur vollständigen Turnkey-Linie',
}

const heroDesc: Record<string, string> = {
  en: 'We scope automation by throughput, labor, hygiene, changeover needs, and footprint. Choose a level and we will map it to machines, utilities, and lead time.',
  cn: '我们按产能、用工、卫生要求、换型频率与场地空间来划分自动化层级，并给出对应设备组合、公用工程与交期。',
  zh: '我們依產能、用工、衛生要求、換型頻率與場地空間來規劃自動化層級，並給出對應設備組合、公用工程與交期。',
  fr: 'Nous dimensionnons selon cadence, main-d’œuvre, hygiène, changements de format et implantation. Choisissez un niveau, nous le traduisons en machines, utilités et délai.',
  es: 'Definimos el nivel por capacidad, mano de obra, higiene, cambios de formato y espacio. Elija un nivel y lo convertimos en equipos, utilidades y plazo.',
  pt: 'Definimos o nível por capacidade, mão de obra, higiene, trocas de formato e espaço. Escolha um nível e mapeamos para máquinas, utilidades e prazo.',
  ko: '생산량, 인력, 위생, 포맷 전환, 설치 공간 기준으로 자동화 레벨을 정합니다. 레벨을 선택하면 장비 구성, 유틸리티, 납기를 정리해 드립니다.',
  ja: '能力、人員、衛生、段取り替え頻度、設置スペースでレベルを決めます。選んだレベルを設備構成、ユーティリティ、納期に落とし込みます。',
  ar: 'نحدد المستوى حسب القدرة المطلوبة والعمالة والنظافة وتغيير المقاسات والمساحة. اختر مستوى وسنحوّله إلى معدات ويوتيليتي ومدة تسليم.',
  th: 'กำหนดระดับตามกำลังการผลิต แรงงาน สุขอนามัย ความถี่เปลี่ยนฟอร์แมต และพื้นที่ติดตั้ง เลือกระดับแล้วเราจะสรุปเครื่อง ยูทิลิตี้ และระยะเวลาส่งมอบ',
  vi: 'Xác định cấp độ theo công suất, nhân lực, vệ sinh, tần suất đổi format và diện tích. Chọn một cấp độ, chúng tôi sẽ quy đổi ra máy, tiện ích và lead time.',
  de: 'Wir legen das Level nach Leistung, Personal, Hygiene, Formatwechsel und Stellfläche fest. Wählen Sie ein Level, wir leiten Maschinen, Utilities und Lieferzeit ab.',
}

// ─── Solution levels ──────────────────────────────────────────────────────────

interface SolutionLevel {
  badge: string
  title: string
  tagline: string
  whoFor: string
  typicalConfig: string
  typicalInvestment: string
  whenToUpgrade: string
  examples: string[]
  cta: string
  ctaHref: string
}

const levelCtaHref: Array<SolutionLevel['ctaHref']> = ['/contact', '/recommend', '/recommend', '/contact']

const levelBadges: Record<Lang, string[]> = {
  en: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
  cn: ['层级 1', '层级 2', '层级 3', '层级 4'],
  zh: ['層級 1', '層級 2', '層級 3', '層級 4'],
  fr: ['Niveau 1', 'Niveau 2', 'Niveau 3', 'Niveau 4'],
  es: ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4'],
  pt: ['Nível 1', 'Nível 2', 'Nível 3', 'Nível 4'],
  ko: ['레벨 1', '레벨 2', '레벨 3', '레벨 4'],
  ja: ['レベル 1', 'レベル 2', 'レベル 3', 'レベル 4'],
  ar: ['المستوى 1', 'المستوى 2', 'المستوى 3', 'المستوى 4'],
  th: ['ระดับ 1', 'ระดับ 2', 'ระดับ 3', 'ระดับ 4'],
  vi: ['Cấp 1', 'Cấp 2', 'Cấp 3', 'Cấp 4'],
  de: ['Stufe 1', 'Stufe 2', 'Stufe 3', 'Stufe 4'],
}

type LevelDetail = Pick<SolutionLevel, 'whoFor' | 'typicalConfig' | 'typicalInvestment' | 'whenToUpgrade' | 'examples'>

const levelDetails: Record<Lang, LevelDetail[]> = {
  en: [
    {
      whoFor: 'Startups, small factories, or teams removing one clear bottleneck.',
      typicalConfig: 'One filling, sealing, or processing machine — standalone with manual feeding, or a basic feeder.',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: 'When the next step becomes the new bottleneck, or when labor reduction becomes the priority.',
      examples: ['Auger filler for spice powder', 'Piston filler for sauces', 'VFFS machine for snacks', 'Continuous fryer for snack line'],
    },
    {
      whoFor: 'Growing operations that want stable throughput with flexible changeovers.',
      typicalConfig: '2–4 machines linked by conveyors, with operators at feeding, inspection, or packing-out.',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: 'When labor cost is significant, or when output/quality consistency needs more automation.',
      examples: ['VFFS + multi-head weigher + metal detector', 'Liquid filler + capper + labeler', 'Frying line + seasoning + cooling conveyor'],
    },
    {
      whoFor: 'Established producers targeting high volume, export consistency, or strict hygiene standards.',
      typicalConfig: 'End-to-end line from feeding to finished output — PLC/HMI controlled, minimal manual steps.',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: 'When volume justifies the investment, or compliance/traceability requirements increase.',
      examples: ['VFFS powder line: silo → auger → VFFS → checkweigher → case packer', 'Bottle line: fill → cap → label', 'Complete snack frying + packing line'],
    },
    {
      whoFor: 'New facility builds, unique products, OEM partners, or buyers who want one point of responsibility.',
      typicalConfig: 'Full engineering project: process design → machine selection → custom fabrication → FAT → installation → commissioning → training.',
      typicalInvestment: 'From $150,000 USD — project-based',
      whenToUpgrade: 'When standard machines cannot meet your product, hygiene, throughput, or compliance requirements.',
      examples: ['Pharma powder sachet filling line', 'Multi-format flexible packaging line', 'Full snack processing + packaging facility'],
    },
  ],
  cn: [
    {
      whoFor: '初创/小型工厂，或需要先解决一个明确瓶颈的团队。',
      typicalConfig: '单台灌装、封口或加工设备；可独立运行，人工上料，或搭配基础上料机。',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: '当后段工序成为新瓶颈，或希望进一步减少用工时。',
      examples: ['香料粉螺杆计量/充填', '酱料活塞灌装', '零食用 VFFS 包装机', '零食线连续油炸机'],
    },
    {
      whoFor: '想要更稳定的产速，同时保留换型灵活度的成长型工厂。',
      typicalConfig: '2–4 台设备由输送连接；人员负责上料、检验或装箱等环节。',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: '当人工成本明显、产量目标提升，或一致性/品质要求更高时。',
      examples: ['VFFS + 多头秤 + 金检', '液体灌装 + 旋盖 + 贴标', '油炸线 + 调味 + 冷却输送'],
    },
    {
      whoFor: '追求较高产能、出口一致性，或对卫生有严格要求的生产商。',
      typicalConfig: '从上料到成品输出的完整产线；PLC/HMI 控制，尽量减少人工步骤。',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: '当产能足以支撑投资，或法规/追溯/出口要求提升时。',
      examples: ['粉末 VFFS 线：料仓 → 螺杆 → VFFS → 检重 → 装箱', '瓶装线：灌装 → 旋盖 → 贴标', '完整零食油炸 + 包装线'],
    },
    {
      whoFor: '新建厂、特殊产品、OEM 合作，或希望由单一窗口负责整案的买家。',
      typicalConfig: '整案工程：工艺设计 → 设备选型 → 定制制造 → FAT 测试 → 安装 → 调试 → 培训。',
      typicalInvestment: '从 $150,000 USD 起（按项目核算）',
      whenToUpgrade: '当标准设备无法满足产品特性、卫生、产能或合规要求时。',
      examples: ['药用粉末小袋充填线', '多规格柔性包装线', '完整零食加工 + 包装工厂'],
    },
  ],
  zh: [
    {
      whoFor: '初創/小型工廠，或需要先解決一個明確瓶頸的團隊。',
      typicalConfig: '單台灌裝、封口或加工設備；可獨立運行，人工上料，或搭配基礎上料機。',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: '當後段工序成為新瓶頸，或希望進一步降低用工時。',
      examples: ['香料粉螺桿計量/充填', '醬料活塞灌裝', '零食用 VFFS 包裝機', '零食線連續油炸機'],
    },
    {
      whoFor: '想要更穩定的產速，同時保留換型彈性的成長型工廠。',
      typicalConfig: '2–4 台設備由輸送連接；人員負責上料、檢驗或裝箱等環節。',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: '當人力成本明顯、產量目標提升，或一致性/品質要求更高時。',
      examples: ['VFFS + 多頭秤 + 金檢', '液體灌裝 + 旋蓋 + 貼標', '油炸線 + 調味 + 冷卻輸送'],
    },
    {
      whoFor: '追求較高產能、出口一致性，或對衛生有嚴格要求的生產商。',
      typicalConfig: '從上料到成品輸出的完整產線；PLC/HMI 控制，盡量減少人工步驟。',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: '當產能足以支撐投資，或法規/追溯/出口要求提升時。',
      examples: ['粉末 VFFS 線：料倉 → 螺桿 → VFFS → 檢重 → 裝箱', '瓶裝線：灌裝 → 旋蓋 → 貼標', '完整零食油炸 + 包裝線'],
    },
    {
      whoFor: '新建廠、特殊產品、OEM 合作，或希望由單一窗口負責整案的買家。',
      typicalConfig: '整案工程：製程設計 → 設備選型 → 客製製造 → FAT 測試 → 安裝 → 調試 → 培訓。',
      typicalInvestment: '從 $150,000 USD 起（按專案核算）',
      whenToUpgrade: '當標準設備無法滿足產品特性、衛生、產能或合規要求時。',
      examples: ['藥用粉末小袋充填線', '多規格柔性包裝線', '完整零食加工 + 包裝工廠'],
    },
  ],
  fr: [
    {
      whoFor: 'Démarrage, petites unités, ou équipes qui doivent éliminer un goulot d’étranglement.',
      typicalConfig: 'Une machine de remplissage, scellage ou process — autonome avec alimentation manuelle, ou un convoyeur/alimentation simple.',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: 'Quand l’étape suivante devient le nouveau goulot, ou si la réduction de main-d’œuvre devient prioritaire.',
      examples: ['Doseur à vis pour poudres', 'Remplisseuse à piston pour sauces', 'Machine VFFS pour snacks', 'Friteuse continue pour ligne snack'],
    },
    {
      whoFor: 'Sites en croissance cherchant un débit stable avec des changements de format fréquents.',
      typicalConfig: '2 à 4 machines reliées par convoyeurs, avec opérateurs à l’alimentation, inspection ou mise en carton.',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: 'Quand le coût main-d’œuvre augmente, ou si la constance débit/qualité nécessite plus d’automatisation.',
      examples: ['VFFS + peseuse multi-têtes + détecteur de métaux', 'Remplissage liquide + bouchonnage + étiquetage', 'Friture + assaisonnement + convoyeur de refroidissement'],
    },
    {
      whoFor: 'Producteurs établis visant volume élevé, constance export, ou hygiène stricte.',
      typicalConfig: 'Ligne complète de l’alimentation à la sortie produit fini — pilotée PLC/HMI, peu d’étapes manuelles.',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: 'Quand le volume justifie l’investissement, ou si les exigences de conformité/traçabilité augmentent.',
      examples: ['Ligne poudre VFFS : silo → vis → VFFS → contrôle de poids → mise en carton', 'Ligne bouteilles : remplissage → bouchage → étiquetage', 'Ligne snack complète : friture + emballage'],
    },
    {
      whoFor: 'Nouveaux sites, produits atypiques, OEM, ou besoin d’un interlocuteur unique responsable.',
      typicalConfig: 'Projet d’ingénierie complet : process → sélection → fabrication → FAT → installation → mise en service → formation.',
      typicalInvestment: 'À partir de $150,000 USD — selon projet',
      whenToUpgrade: 'Quand les solutions standards ne répondent pas au produit, hygiène, débit ou conformité.',
      examples: ['Ligne sachets poudre pharma', 'Ligne d’emballage flexible multi-formats', 'Usine complète snacks : process + emballage'],
    },
  ],
  es: [
    {
      whoFor: 'Startups, plantas pequeñas o equipos que deben eliminar un cuello de botella puntual.',
      typicalConfig: 'Una máquina de llenado, sellado o proceso — autónoma con alimentación manual o con un alimentador básico.',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: 'Cuando la siguiente etapa se convierte en el nuevo cuello de botella, o cuando se prioriza reducir mano de obra.',
      examples: ['Dosificador de tornillo para polvos', 'Llenadora de pistón para salsas', 'VFFS para snacks', 'Freidora continua para línea de snacks'],
    },
    {
      whoFor: 'Operaciones en crecimiento que buscan un flujo estable con cambios de formato frecuentes.',
      typicalConfig: '2–4 máquinas unidas por transportadores, con operadores en alimentación, inspección o encajado.',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: 'Cuando el costo de mano de obra es alto o se requiere mayor consistencia de producción/calidad.',
      examples: ['VFFS + multicabezal + detector de metales', 'Llenado líquido + taponadora + etiquetadora', 'Fritura + sazonado + transportador de enfriado'],
    },
    {
      whoFor: 'Productores establecidos que requieren alto volumen, consistencia para exportación o higiene estricta.',
      typicalConfig: 'Línea completa desde alimentación hasta producto final — control PLC/HMI y mínimas tareas manuales.',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: 'Cuando el volumen justifica la inversión o aumentan requisitos de cumplimiento/trazabilidad.',
      examples: ['Línea VFFS polvo: silo → tornillo → VFFS → control de peso → encajado', 'Línea botellas: llenar → tapar → etiquetar', 'Línea snack completa: freír + empacar'],
    },
    {
      whoFor: 'Nuevas plantas, productos especiales, OEM o compradores que quieren un responsable único.',
      typicalConfig: 'Proyecto integral: diseño de proceso → selección de equipos → fabricación → FAT → instalación → puesta en marcha → capacitación.',
      typicalInvestment: 'Desde $150,000 USD — según proyecto',
      whenToUpgrade: 'Cuando equipos estándar no cubren producto, higiene, capacidad o requisitos normativos.',
      examples: ['Línea de sachets de polvo pharma', 'Línea flexible multi-formato', 'Planta snack completa: proceso + empaque'],
    },
  ],
  pt: [
    {
      whoFor: 'Startups, fábricas pequenas ou equipes removendo um gargalo específico.',
      typicalConfig: 'Uma máquina de envase, selagem ou processo — standalone com alimentação manual ou alimentador simples.',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: 'Quando a etapa seguinte vira o novo gargalo ou quando reduzir mão de obra vira prioridade.',
      examples: ['Dosador por rosca para pós', 'Envasadora de pistão para molhos', 'VFFS para snacks', 'Fritadeira contínua para linha de snacks'],
    },
    {
      whoFor: 'Operações em crescimento que querem vazão estável e trocas de formato frequentes.',
      typicalConfig: '2–4 máquinas ligadas por transportadores, com operadores em alimentação, inspeção ou encaixotamento.',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: 'Quando o custo de mão de obra é relevante ou quando a consistência de produção/qualidade exige mais automação.',
      examples: ['VFFS + multicabeçote + detector de metais', 'Envase líquido + tampadora + rotuladora', 'Fritura + tempero + esteira de resfriamento'],
    },
    {
      whoFor: 'Produtores estabelecidos buscando alto volume, consistência para exportação ou higiene rigorosa.',
      typicalConfig: 'Linha completa da alimentação à saída do produto — PLC/HMI, com poucas etapas manuais.',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: 'Quando o volume justifica o investimento ou aumentam exigências de conformidade/rastreabilidade.',
      examples: ['Linha VFFS pó: silo → rosca → VFFS → checkweigher → encaixotador', 'Linha de garrafas: envasar → tampar → rotular', 'Linha completa de snacks: fritar + embalar'],
    },
    {
      whoFor: 'Novas plantas, produtos especiais, OEM ou compradores que querem um único responsável pelo projeto.',
      typicalConfig: 'Projeto completo: processo → seleção → fabricação → FAT → instalação → comissionamento → treinamento.',
      typicalInvestment: 'A partir de $150,000 USD — por projeto',
      whenToUpgrade: 'Quando soluções padrão não atendem produto, higiene, capacidade ou conformidade.',
      examples: ['Linha de sachês de pó pharma', 'Linha flexível multi-formato', 'Planta completa de snacks: processo + embalagem'],
    },
  ],
  ko: [
    {
      whoFor: '스타트업/소규모 공장, 또는 한 가지 병목을 먼저 해결하려는 경우.',
      typicalConfig: '충전/밀봉/가공 장비 1대. 단독 운전(수동 투입) 또는 간단한 피더와 조합.',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: '다음 공정이 새로운 병목이 되거나, 인력 절감이 우선 과제가 될 때.',
      examples: ['향신료 분말 오거 충전', '소스용 피스톤 충전', '스낵용 VFFS', '스낵 라인 연속 튀김기'],
    },
    {
      whoFor: '생산량을 안정화하면서 포맷 전환 유연성이 필요한 성장 단계.',
      typicalConfig: '2–4대 장비를 컨베이어로 연결. 투입, 검사, 포장 마감에 작업자 참여.',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: '인건비 비중이 커지거나, 생산/품질 일관성을 위해 자동화가 더 필요할 때.',
      examples: ['VFFS + 멀티헤드 계량 + 금속검출', '액체 충전 + 캡핑 + 라벨링', '튀김 + 시즈닝 + 냉각 컨베이어'],
    },
    {
      whoFor: '고용량, 수출 품질 일관성, 엄격한 위생 기준이 필요한 생산자.',
      typicalConfig: '투입부터 완제품 배출까지 일괄 라인. PLC/HMI 제어, 수동 공정을 최소화.',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: '물량이 투자 타당성을 만들거나, 규정/추적성 요구가 강화될 때.',
      examples: ['분말 VFFS 라인: 사일로 → 오거 → VFFS → 체크웨이어 → 케이스 패킹', '병 라인: 충전 → 캡핑 → 라벨', '스낵 튀김 + 포장 완전 라인'],
    },
    {
      whoFor: '신규 공장, 표준 장비로 어려운 제품, OEM 파트너, 단일 책임 창구가 필요한 프로젝트.',
      typicalConfig: '전체 엔지니어링: 공정 설계 → 장비 선정 → 맞춤 제작 → FAT → 설치 → 시운전 → 교육.',
      typicalInvestment: '$150,000 USD부터 (프로젝트 기준)',
      whenToUpgrade: '표준 장비로 제품 특성/위생/능력/규정 요구를 만족시키기 어려울 때.',
      examples: ['제약 분말 사셰 충전 라인', '멀티 포맷 플렉시블 포장 라인', '스낵 공정 + 포장 전체 설비'],
    },
  ],
  ja: [
    {
      whoFor: 'スタートアップ/小規模工場、または明確なボトルネックを先に解消したい場合。',
      typicalConfig: '充填・シール・加工機の単体。手投入の単独運転、または簡易フィーダーと組み合わせ。',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: '次工程が新たなボトルネックになる、または省人化が優先になったとき。',
      examples: ['スパイス粉のオーガー充填', 'ソース用ピストン充填', 'スナック向けVFFS', 'スナックライン用連続フライヤー'],
    },
    {
      whoFor: '安定したスループットを得つつ、段取り替えの柔軟性も必要な成長段階。',
      typicalConfig: '2〜4台をコンベアで連結。供給、検査、箱詰めなどで作業者が関与。',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: '人件費が大きい、または生産/品質の一貫性のために自動化が必要になったとき。',
      examples: ['VFFS＋マルチヘッド計量＋金属検出', '液体充填＋キャッパー＋ラベラー', 'フライ＋調味＋冷却搬送'],
    },
    {
      whoFor: '高能力、輸出品質の安定、厳格な衛生基準が必要な生産者。',
      typicalConfig: '供給から完成品排出までの一貫ライン。PLC/HMI制御で手作業を最小化。',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: '数量が投資に見合う、または規制/トレーサビリティ要件が増したとき。',
      examples: ['粉体VFFSライン：サイロ→オーガー→VFFS→重量検査→箱詰め', 'ボトルライン：充填→キャップ→ラベル', 'スナック加工＋包装の一貫ライン'],
    },
    {
      whoFor: '新工場、標準機では難しい製品、OEM、単一窓口で責任を持たせたい案件。',
      typicalConfig: 'フルエンジニアリング：工程設計→選定→カスタム製作→FAT→据付→立上げ→教育。',
      typicalInvestment: '$150,000 USD〜（プロジェクトベース）',
      whenToUpgrade: '標準機で製品特性/衛生/能力/法規要件を満たせない場合。',
      examples: ['医薬粉末サシェ充填ライン', 'マルチフォーマット柔軟包装ライン', 'スナック工場：加工＋包装一式'],
    },
  ],
  ar: [
    {
      whoFor: 'المشاريع الناشئة أو المصانع الصغيرة أو حل عنق زجاجة واحد بشكل سريع.',
      typicalConfig: 'آلة تعبئة أو ختم أو معالجة واحدة — مستقلة مع تغذية يدوية أو مغذي بسيط.',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: 'عندما تصبح الخطوة التالية عنق الزجاجة، أو عندما تكون أولوية خفض العمالة أعلى.',
      examples: ['تعبئة مسحوق بالتغذية اللولبية', 'تعبئة صلصات بمكبس', 'آلة VFFS للوجبات الخفيفة', 'قلاية مستمرة لخط سناك'],
    },
    {
      whoFor: 'عمليات في طور النمو تحتاج إنتاجًا ثابتًا مع مرونة في تغيير المقاسات.',
      typicalConfig: '٢–٤ آلات مرتبطة بسيور، مع تدخل المشغل في التغذية أو الفحص أو التعبئة النهائية.',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: 'عندما تزيد تكلفة العمالة أو تحتاج إلى ثبات أعلى في الإنتاج/الجودة.',
      examples: ['VFFS + ميزان متعدد الرؤوس + كاشف معادن', 'تعبئة سوائل + إغلاق أغطية + وضع ملصقات', 'قلي + تتبيل + سير تبريد'],
    },
    {
      whoFor: 'منتجون قائمون يستهدفون حجمًا عاليًا أو ثباتًا للتصدير أو معايير نظافة صارمة.',
      typicalConfig: 'خط متكامل من التغذية إلى خروج المنتج النهائي — تحكم PLC/HMI وخطوات يدوية قليلة.',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: 'عندما يبرر الحجم الاستثمار أو ترتفع متطلبات الامتثال/التتبع.',
      examples: ['خط مسحوق VFFS: صومعة → لولب → VFFS → فحص وزن → تعبئة كراتين', 'خط عبوات: تعبئة → تغطية → ملصقات', 'خط سناك كامل: قلي + تعبئة'],
    },
    {
      whoFor: 'إنشاء مصنع جديد، منتجات خاصة، OEM، أو مشروع يحتاج جهة واحدة مسؤولة.',
      typicalConfig: 'مشروع هندسي كامل: تصميم العملية → اختيار المعدات → تصنيع مخصص → FAT → تركيب → تشغيل تجريبي → تدريب.',
      typicalInvestment: 'من $150,000 USD — حسب المشروع',
      whenToUpgrade: 'عندما لا تفي الحلول القياسية بمتطلبات المنتج أو النظافة أو القدرة أو الالتزام.',
      examples: ['خط ساشيه مسحوق دوائي', 'خط تعبئة مرن متعدد المقاسات', 'منشأة سناك كاملة: معالجة + تعبئة'],
    },
  ],
  th: [
    {
      whoFor: 'สตาร์ทอัพ โรงงานขนาดเล็ก หรือแก้คอขวดเฉพาะจุดก่อน',
      typicalConfig: 'เครื่องบรรจุ/ซีล/แปรรูป 1 เครื่อง ทำงานเดี่ยว ป้อนมือ หรือมีเครื่องป้อนพื้นฐาน',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: 'เมื่อขั้นตอนถัดไปกลายเป็นคอขวด หรือเมื่ออยากลดแรงงานในขั้นตอนข้างเคียง',
      examples: ['ออเกอร์สำหรับผงเครื่องเทศ', 'ลูกสูบสำหรับซอส', 'VFFS สำหรับขนม', 'เครื่องทอดต่อเนื่องสำหรับไลน์สแน็ค'],
    },
    {
      whoFor: 'ธุรกิจที่กำลังเติบโต ต้องการกำลังการผลิตสม่ำเสมอและเปลี่ยนฟอร์แมตบ่อย',
      typicalConfig: 'เครื่อง 2–4 เครื่องเชื่อมด้วยสายพาน มีพนักงานช่วยป้อน ตรวจ หรือจัดแพ็กปลายไลน์',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: 'เมื่อค่าแรงมีผลมาก หรือเมื่อความสม่ำเสมอของผลผลิต/คุณภาพต้องใช้ระบบอัตโนมัติมากขึ้น',
      examples: ['VFFS + เครื่องชั่งหลายหัว + ตรวจโลหะ', 'บรรจุของเหลว + ปิดฝา + ติดฉลาก', 'ทอด + ปรุงรส + สายพานทำความเย็น'],
    },
    {
      whoFor: 'ผู้ผลิตที่ต้องการกำลังการผลิตสูง ความสม่ำเสมอสำหรับการส่งออก หรือสุขอนามัยเข้มงวด',
      typicalConfig: 'ไลน์ครบตั้งแต่ป้อนวัตถุดิบจนถึงออกสินค้า ควบคุมด้วย PLC/HMI ลดงานมือให้เหลือน้อยที่สุด',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: 'เมื่อปริมาณผลิตคุ้มกับการลงทุน หรือเมื่อข้อกำหนดด้านมาตรฐาน/การตรวจสอบย้อนกลับเพิ่มขึ้น',
      examples: ['ไลน์ผง VFFS: ไซโล → ออเกอร์ → VFFS → เช็คเวย์เออร์ → บรรจุกล่อง', 'ไลน์ขวด: บรรจุ → ปิดฝา → ติดฉลาก', 'ไลน์สแน็คครบ: ทอด + บรรจุ'],
    },
    {
      whoFor: 'สร้างโรงงานใหม่ สินค้าเฉพาะ OEM หรืออยากให้มีผู้รับผิดชอบโครงการรายเดียว',
      typicalConfig: 'โครงการวิศวกรรมครบ: ออกแบบกระบวนการ → เลือกเครื่อง → ผลิตสั่งทำ → FAT → ติดตั้ง → คอมมิชชั่น → เทรนนิ่ง',
      typicalInvestment: 'เริ่มจาก $150,000 USD — ตามโครงการ',
      whenToUpgrade: 'เมื่อเครื่องมาตรฐานไม่ตอบโจทย์สินค้า สุขอนามัย กำลังการผลิต หรือข้อกำหนดกฎหมาย',
      examples: ['ไลน์ซองผงยา', 'ไลน์แพ็กยืดหยุ่นหลายฟอร์แมต', 'โรงงานสแน็คครบ: แปรรูป + บรรจุ'],
    },
  ],
  vi: [
    {
      whoFor: 'Startup, xưởng nhỏ hoặc cần xử lý một nút thắt rõ ràng trước.',
      typicalConfig: '1 máy chiết rót/hàn kín/chế biến — chạy độc lập, cấp liệu thủ công hoặc có cấp liệu cơ bản.',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: 'Khi công đoạn kế tiếp trở thành nút thắt, hoặc khi cần ưu tiên giảm nhân công.',
      examples: ['Trục vít cho bột gia vị', 'Piston cho nước sốt', 'VFFS cho snack', 'Máy chiên liên tục cho line snack'],
    },
    {
      whoFor: 'Nhà máy đang tăng trưởng cần thông lượng ổn định và đổi format thường xuyên.',
      typicalConfig: '2–4 máy nối bằng băng tải, có công nhân tham gia ở cấp liệu, kiểm tra hoặc đóng thùng.',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: 'Khi chi phí nhân công tăng, hoặc cần nâng độ ổn định sản lượng/chất lượng.',
      examples: ['VFFS + cân nhiều đầu + dò kim loại', 'Chiết rót lỏng + đóng nắp + dán nhãn', 'Chiên + tẩm gia vị + băng tải làm nguội'],
    },
    {
      whoFor: 'Nhà sản xuất ổn định hướng đến sản lượng cao, độ ổn định cho xuất khẩu hoặc vệ sinh nghiêm ngặt.',
      typicalConfig: 'Dây chuyền từ cấp liệu đến ra thành phẩm — PLC/HMI điều khiển, tối thiểu thao tác thủ công.',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: 'Khi sản lượng đủ để tối ưu đầu tư hoặc yêu cầu tuân thủ/truy xuất tăng.',
      examples: ['Line bột VFFS: silo → trục vít → VFFS → checkweigher → đóng thùng', 'Line chai: chiết → đóng nắp → dán nhãn', 'Line snack hoàn chỉnh: chiên + đóng gói'],
    },
    {
      whoFor: 'Xây nhà máy mới, sản phẩm đặc thù, OEM hoặc muốn một đầu mối chịu trách nhiệm toàn bộ.',
      typicalConfig: 'Dự án kỹ thuật trọn gói: thiết kế quy trình → chọn máy → chế tạo theo yêu cầu → FAT → lắp đặt → chạy thử → đào tạo.',
      typicalInvestment: 'Từ $150,000 USD — theo dự án',
      whenToUpgrade: 'Khi máy tiêu chuẩn không đáp ứng đặc tính sản phẩm, vệ sinh, công suất hoặc yêu cầu tuân thủ.',
      examples: ['Line sachet bột dược phẩm', 'Line đóng gói linh hoạt nhiều format', 'Nhà máy snack: chế biến + đóng gói trọn bộ'],
    },
  ],
  de: [
    {
      whoFor: 'Start-ups, kleine Betriebe oder wenn ein klarer Engpass zuerst gelöst werden soll.',
      typicalConfig: 'Eine Abfüll-, Verschließ- oder Prozessmaschine — standalone mit manueller Beschickung oder einfachem Zuführer.',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: 'Wenn der nächste Schritt zum Engpass wird oder wenn Personaleinsparung Priorität bekommt.',
      examples: ['Schneckendosierer für Pulver', 'Kolbenfüller für Soßen', 'VFFS für Snacks', 'Durchlauffriteuse für Snack-Linie'],
    },
    {
      whoFor: 'Wachsende Betriebe mit Bedarf an stabilem Durchsatz und häufigen Formatwechseln.',
      typicalConfig: '2–4 Maschinen per Fördertechnik verbunden, mit Bedienern bei Zuführung, Kontrolle oder Kartonierung.',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: 'Wenn Lohnkosten relevant sind oder wenn mehr Konsistenz bei Output/Qualität nötig ist.',
      examples: ['VFFS + Mehrkopfwaage + Metalldetektor', 'Flüssigfüller + Verschließer + Etikettierer', 'Frittieren + Würzen + Kühlförderer'],
    },
    {
      whoFor: 'Etablierte Produzenten mit hohem Volumen, Exportkonsistenz oder strengen Hygieneanforderungen.',
      typicalConfig: 'Komplette Linie von Zuführung bis Endprodukt — PLC/HMI, minimale manuelle Schritte.',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: 'Wenn das Volumen die Investition rechtfertigt oder Compliance/Traceability-Anforderungen steigen.',
      examples: ['VFFS-Pulverlinie: Silo → Schnecke → VFFS → Kontrollwaage → Kartonierer', 'Flaschenlinie: Füllen → Verschließen → Etikettieren', 'Snack-Linie komplett: Frittieren + Verpacken'],
    },
    {
      whoFor: 'Neubau, Sonderprodukte, OEM oder Projekte mit einem verantwortlichen Ansprechpartner.',
      typicalConfig: 'Komplettes Engineering: Prozessdesign → Auswahl → Sonderbau → FAT → Installation → Inbetriebnahme → Schulung.',
      typicalInvestment: 'Ab $150,000 USD — projektbasiert',
      whenToUpgrade: 'Wenn Standardlösungen Produkt, Hygiene, Leistung oder Compliance nicht erfüllen.',
      examples: ['Pharma-Pulver-Sachetlinie', 'Flexible Verpackungslinie mit mehreren Formaten', 'Komplette Snack-Anlage: Prozess + Verpackung'],
    },
  ],
}

// Per-language overrides for level titles/taglines/cta (en as fallback for all others)
const levelTranslations: Record<string, {
  sectionTitle: string
  whoForLabel: string
  configLabel: string
  investmentLabel: string
  upgradeLabel: string
  examplesLabel: string
  compTitle: string
  compHeaders: string[]
  compRows: { label: string; cells: string[] }[]
  ctaSection: string
  ctaButton: string
  levels: { title: string; tagline: string; cta: string }[]
}> = {
  en: {
    sectionTitle: 'Choose Your Automation Level',
    whoForLabel: 'Best for',
    configLabel: 'Typical configuration',
    investmentLabel: 'Typical investment',
    upgradeLabel: 'When to upgrade',
    examplesLabel: 'Example applications',
    compTitle: 'Which level is right for you?',
    compHeaders: ['', 'Single Machine', 'Semi-Auto', 'Full Auto', 'Turnkey'],
    compRows: [
      { label: 'Operators needed', cells: ['1–2', '1–3', '1–2', '1 (supervisor)'] },
      { label: 'Output range', cells: ['Low–Medium', 'Medium', 'Medium–High', 'High–Very High'] },
      { label: 'Format flexibility', cells: ['High', 'High', 'Medium', 'By design'] },
      { label: 'Initial investment', cells: ['$', '$$', '$$$', '$$$$'] },
      { label: 'Lead time', cells: ['30–45 days', '45–75 days', '60–120 days', '90–180 days'] },
      { label: 'Best for', cells: ['Single bottleneck', 'Growing operation', 'Scale & consistency', 'New build / OEM'] },
    ],
    ctaSection: "Not sure which level fits your operation?",
    ctaButton: 'Get a Free Recommendation',
    levels: [
      { title: 'Single Machine', tagline: 'One specific task. One machine. Immediate impact.', cta: 'Get a Single Machine Quote' },
      { title: 'Semi-Automatic Setup', tagline: 'Core automation, flexible operator involvement.', cta: 'Design a Semi-Auto Setup' },
      { title: 'Fully Automatic Line', tagline: 'High throughput. Minimal labor. Consistent quality.', cta: 'Request a Line Design' },
      { title: 'Turnkey / Custom Engineering', tagline: 'Your product. Your process. Built from scratch.', cta: 'Discuss Your Project' },
    ],
  },
  cn: {
    sectionTitle: '选择您的自动化层级',
    whoForLabel: '适用于',
    configLabel: '典型配置',
    investmentLabel: '典型投资',
    upgradeLabel: '何时升级',
    examplesLabel: '应用示例',
    compTitle: '哪个层级适合您？',
    compHeaders: ['', '单机', '半自动', '全自动', '交钥匙'],
    compRows: [
      { label: '所需操作人员', cells: ['1–2人', '1–3人', '1–2人', '1人（监督）'] },
      { label: '产量范围', cells: ['低–中', '中', '中–高', '高–极高'] },
      { label: '格式灵活性', cells: ['高', '高', '中', '按设计'] },
      { label: '初始投资', cells: ['$', '$$', '$$$', '$$$$'] },
      { label: '交货期', cells: ['30–45天', '45–75天', '60–120天', '90–180天'] },
      { label: '最适合', cells: ['解决单一瓶颈', '成长型企业', '规模化与一致性', '新建厂/OEM'] },
    ],
    ctaSection: '不确定哪个层级适合您的工厂？',
    ctaButton: '获取免费推荐',
    levels: [
      { title: '单机', tagline: '一项任务。一台设备。立竿见影。', cta: '获取单机报价' },
      { title: '半自动配置', tagline: '核心自动化，灵活的操作员参与。', cta: '设计半自动方案' },
      { title: '全自动生产线', tagline: '高产量。最少人工。稳定品质。', cta: '申请产线设计' },
      { title: '交钥匙/定制工程', tagline: '您的产品。您的工艺。从头定制。', cta: '讨论您的项目' },
    ],
  },
  zh: {
    sectionTitle: '選擇您的自動化層級',
    whoForLabel: '適用於',
    configLabel: '典型配置',
    investmentLabel: '典型投資',
    upgradeLabel: '何時升級',
    examplesLabel: '應用範例',
    compTitle: '哪個層級適合您？',
    compHeaders: ['', '單機', '半自動', '全自動', '交鑰匙'],
    compRows: [
      { label: '所需操作人員', cells: ['1–2人', '1–3人', '1–2人', '1人（監督）'] },
      { label: '產量範圍', cells: ['低–中', '中', '中–高', '高–極高'] },
      { label: '格式靈活性', cells: ['高', '高', '中', '按設計'] },
      { label: '初始投資', cells: ['$', '$$', '$$$', '$$$$'] },
      { label: '交貨期', cells: ['30–45天', '45–75天', '60–120天', '90–180天'] },
      { label: '最適合', cells: ['解決單一瓶頸', '成長型企業', '規模化與一致性', '新建廠/OEM'] },
    ],
    ctaSection: '不確定哪個層級適合您的工廠？',
    ctaButton: '取得免費推薦',
    levels: [
      { title: '單機', tagline: '一項任務。一台設備。立竿見影。', cta: '取得單機報價' },
      { title: '半自動配置', tagline: '核心自動化，靈活的操作員參與。', cta: '設計半自動方案' },
      { title: '全自動生產線', tagline: '高產量。最少人工。穩定品質。', cta: '申請產線設計' },
      { title: '交鑰匙/客製工程', tagline: '您的產品。您的工藝。從頭客製。', cta: '討論您的專案' },
    ],
  },
}

function getLevelTx(lang: string) {
  return levelTranslations[lang] || levelTranslations.en
}

function getLevels(lang: Lang): SolutionLevel[] {
  const tx = getLevelTx(lang)
  const details = levelDetails[lang] || levelDetails.en
  const badges = levelBadges[lang] || levelBadges.en
  return levelCtaHref.map((ctaHref, i) => ({
    badge: badges[i] || levelBadges.en[i] || `Level ${i + 1}`,
    title: tx.levels[i]?.title || levelTranslations.en.levels[i].title,
    tagline: tx.levels[i]?.tagline || levelTranslations.en.levels[i].tagline,
    whoFor: details[i]?.whoFor || levelDetails.en[i].whoFor,
    typicalConfig: details[i]?.typicalConfig || levelDetails.en[i].typicalConfig,
    typicalInvestment: details[i]?.typicalInvestment || levelDetails.en[i].typicalInvestment,
    whenToUpgrade: details[i]?.whenToUpgrade || levelDetails.en[i].whenToUpgrade,
    examples: details[i]?.examples || levelDetails.en[i].examples,
    cta: tx.levels[i]?.cta || levelTranslations.en.levels[i].cta,
    ctaHref,
  }))
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

type FaqItem = { q: string; a: string }

const faqTitle: Record<Lang, string> = {
  en: 'Frequently Asked Questions',
  cn: '常见问题',
  zh: '常見問題',
  fr: 'Questions fréquentes',
  es: 'Preguntas frecuentes',
  pt: 'Perguntas frequentes',
  ko: '자주 묻는 질문',
  ja: 'よくある質問',
  ar: 'الأسئلة الشائعة',
  th: 'คำถามที่พบบ่อย',
  vi: 'Câu hỏi thường gặp',
  de: 'Häufige Fragen',
}

const faqItemsByLang: Record<Lang, FaqItem[]> = {
  en: [
    { q: 'What is a turnkey packaging line?', a: 'A complete, integrated production system built to your specification — from feeding to filling, sealing, inspection, packing-out, and palletizing. We cover design, manufacturing, factory testing, and handover.' },
    { q: 'How do I choose between a single machine and a full line?', a: 'Choose a single machine for one bottleneck. Choose semi-auto/full line when throughput and consistency matter and you want to reduce manual steps. Choose turnkey when building a new facility or changing process scope.' },
    { q: 'Can SunGene integrate machines from other brands?', a: 'Yes. We can integrate with existing equipment where feasible and design controls (PLC/HMI) for mixed-brand lines based on interface conditions.' },
    { q: 'What is the typical lead time for a fully automatic line?', a: 'Typically 60–120 days depending on scope and customization. Single machines may ship in 30–45 days when configuration is straightforward.' },
  ],
  cn: [
    { q: '什么是交钥匙包装生产线？', a: '按您的规格设计并集成的一整套系统：从上料、计量/灌装、封口、检验、装箱到码垛。我们负责方案、制造、出厂测试与交付。' },
    { q: '如何在单机与整线之间选择？', a: '若只需要解决一个瓶颈，先选单机。若要稳定产速并减少人工环节，选半自动/全自动产线。若是新建厂或制程范围变更，建议交钥匙项目。' },
    { q: '可以整合其他品牌设备吗？', a: '可以。在接口条件可行的前提下，我们可与现有设备整合，并按控制需求设计 PLC/HMI 方案。' },
    { q: '全自动产线的典型交期？', a: '通常 60–120 天，取决于范围与客制程度。配置较简单的单机常见为 30–45 天。' },
  ],
  zh: [
    { q: '什麼是交鑰匙包裝生產線？', a: '依您的規格設計並整合的一整套系統：從上料、計量/灌裝、封口、檢驗、裝箱到碼垛。我們負責方案、製造、出廠測試與交付。' },
    { q: '如何在單機與整線之間選擇？', a: '若只需要解決一個瓶頸，先選單機。若要穩定產速並減少人工環節，選半自動/全自動產線。若是新建廠或製程範圍變更，建議交鑰匙專案。' },
    { q: '可以整合其他品牌設備嗎？', a: '可以。在介面條件可行的前提下，我們可與既有設備整合，並依控制需求設計 PLC/HMI 方案。' },
    { q: '全自動產線的典型交期？', a: '通常 60–120 天，取決於範圍與客製程度。配置較簡單的單機常見為 30–45 天。' },
  ],
  fr: [
    { q: 'Qu’est-ce qu’une ligne d’emballage turnkey ?', a: 'Un système complet et intégré selon votre cahier des charges : alimentation, dosage/remplissage, scellage, contrôle, mise en carton et palettisation. Conception, fabrication, tests usine et remise inclus.' },
    { q: 'Comment choisir entre une machine et une ligne complète ?', a: 'Une machine si vous avez un seul goulot. Semi-auto/ligne si le débit et la constance comptent et que vous voulez réduire le manuel. Turnkey pour une nouvelle usine ou un changement de périmètre process.' },
    { q: 'Pouvez-vous intégrer des machines d’autres marques ?', a: 'Oui. Si les interfaces le permettent, nous intégrons votre existant et définissons le contrôle PLC/HMI pour des lignes multi-marques.' },
    { q: 'Quel est le délai typique pour une ligne full auto ?', a: 'En général 60–120 jours selon le périmètre et la personnalisation. Une machine seule peut être expédiée en 30–45 jours si la configuration est simple.' },
  ],
  es: [
    { q: '¿Qué es una línea turnkey de empaque?', a: 'Un sistema completo e integrado según su especificación: alimentación, dosificación/llenado, sellado, inspección, encajado y paletizado. Incluye diseño, fabricación, pruebas en fábrica y entrega.' },
    { q: '¿Cómo elijo entre una máquina y una línea completa?', a: 'Una máquina si hay un solo cuello de botella. Semi-auto/línea si necesita rendimiento y consistencia y desea reducir pasos manuales. Turnkey si construye una planta nueva o cambia el alcance del proceso.' },
    { q: '¿Pueden integrar máquinas de otras marcas?', a: 'Sí. Si las interfaces son compatibles, integramos equipos existentes y definimos PLC/HMI para líneas multi-marca.' },
    { q: '¿Plazo típico para una línea full auto?', a: 'Normalmente 60–120 días según alcance y personalización. Una máquina sola puede salir en 30–45 días si la configuración es simple.' },
  ],
  pt: [
    { q: 'O que é uma linha turnkey de embalagem?', a: 'Um sistema completo e integrado conforme sua especificação: alimentação, dosagem/envase, selagem, inspeção, encaixotamento e paletização. Inclui projeto, fabricação, testes em fábrica e entrega.' },
    { q: 'Como escolher entre uma máquina e uma linha completa?', a: 'Uma máquina para um gargalo específico. Semi-auto/linha quando vazão e consistência importam e você quer reduzir etapas manuais. Turnkey para planta nova ou mudança de escopo de processo.' },
    { q: 'A SunGene integra máquinas de outras marcas?', a: 'Sim. Quando as interfaces permitem, integramos o existente e definimos PLC/HMI para linhas multi-marca.' },
    { q: 'Prazo típico para uma linha full auto?', a: 'Em geral 60–120 dias dependendo do escopo e da personalização. Máquina única pode ser enviada em 30–45 dias quando a configuração é simples.' },
  ],
  ko: [
    { q: '턴키 포장 라인이란 무엇인가요?', a: '요구사항에 맞춰 설계/통합되는 전체 시스템입니다. 투입, 계량/충전, 밀봉, 검사, 박스 포장, 팔레타이징까지 포함하며 설계·제작·출하 시험·인계를 지원합니다.' },
    { q: '단일 장비와 전체 라인은 어떻게 선택하나요?', a: '한 가지 병목이면 단일 장비가 적합합니다. 처리량/일관성이 중요하고 수작업을 줄이고 싶다면 반자동/전체 라인을 권장합니다. 신규 공장이나 공정 범위 변경이면 턴키가 적합합니다.' },
    { q: '타사 장비와도 통합할 수 있나요?', a: '가능합니다. 인터페이스 조건이 맞으면 기존 장비와 통합하고, 멀티 브랜드 라인에 맞춰 PLC/HMI 제어를 설계합니다.' },
    { q: '전자동 라인의 일반 납기는?', a: '범위와 커스터마이징에 따라 보통 60–120일입니다. 단일 장비는 구성 단순 시 30–45일 출하가 가능합니다.' },
  ],
  ja: [
    { q: 'ターンキー包装ラインとは？', a: '要件に合わせて設計・統合する一式システムです。供給、計量/充填、シール、検査、箱詰め、パレタイズまで含み、設計・製作・工場試験・引渡しを対応します。' },
    { q: '単体機械とラインはどう選ぶ？', a: 'ボトルネックが1点なら単体機械。スループットと安定性が重要で手作業を減らしたいなら半自動/ライン。新工場や工程範囲変更ならターンキーが適します。' },
    { q: '他社機との統合は可能？', a: '可能です。インターフェース条件が合えば既存設備と統合し、マルチブランドに対応したPLC/HMI制御を設計します。' },
    { q: '全自動ラインの一般的な納期は？', a: '範囲とカスタム度合いにより通常60〜120日です。単体機械は構成がシンプルなら30〜45日で出荷可能です。' },
  ],
  ar: [
    { q: 'ما هو خط تعبئة وتغليف turnkey؟', a: 'نظام متكامل حسب مواصفاتك من التغذية إلى التعبئة/الختم والفحص والتعبئة في كراتين والباليتة. يشمل التصميم والتصنيع والاختبار في المصنع والتسليم.' },
    { q: 'كيف أختار بين آلة واحدة وخط كامل؟', a: 'اختر آلة واحدة إذا كان لديك عنق زجاجة محدد. اختر شبه آلي/خط كامل إذا كان الثبات والإنتاجية مهمين وتريد تقليل العمل اليدوي. اختر turnkey لمصنع جديد أو تغيير نطاق العملية.' },
    { q: 'هل يمكن دمج معدات من علامات أخرى؟', a: 'نعم. إذا كانت الواجهات مناسبة، ندمج المعدات الموجودة ونصمم PLC/HMI لخطوط متعددة العلامات.' },
    { q: 'ما مدة التسليم المعتادة لخط full auto؟', a: 'عادة 60–120 يومًا حسب النطاق والتخصيص. الآلة الواحدة قد تُشحن خلال 30–45 يومًا إذا كانت الإعدادات بسيطة.' },
  ],
  th: [
    { q: 'ไลน์บรรจุภัณฑ์แบบ turnkey คืออะไร?', a: 'ระบบที่ออกแบบและรวมเครื่องตามสเปกของคุณ ตั้งแต่ป้อนวัตถุดิบ บรรจุ/ซีล ตรวจสอบ จัดแพ็ก และพาเลทไทซิ่ง รวมงานออกแบบ ผลิต ทดสอบโรงงาน และส่งมอบ' },
    { q: 'ควรเลือกเครื่องเดียวหรือทั้งไลน์?', a: 'ถ้ามีคอขวดจุดเดียว เริ่มจากเครื่องเดียว ถ้าต้องการ throughput และความสม่ำเสมอ พร้อมลดงานมือ เลือกกึ่งอัตโนมัติ/ทั้งไลน์ ถ้าสร้างโรงงานใหม่หรือเปลี่ยนกระบวนการ แนะนำ turnkey' },
    { q: 'รวมเครื่องยี่ห้ออื่นได้ไหม?', a: 'ได้ หากอินเทอร์เฟซเข้ากัน เราสามารถผสานกับเครื่องเดิม และออกแบบ PLC/HMI สำหรับไลน์หลายยี่ห้อ' },
    { q: 'ระยะเวลาส่งมอบไลน์ full auto โดยทั่วไป?', a: 'ปกติ 60–120 วันตามขอบเขตและระดับการสั่งทำ เครื่องเดี่ยวอาจส่งได้ใน 30–45 วันเมื่อสเปกไม่ซับซ้อน' },
  ],
  vi: [
    { q: 'Dây chuyền turnkey đóng gói là gì?', a: 'Hệ thống tích hợp theo spec của bạn: cấp liệu, định lượng/chiết rót, hàn kín, kiểm tra, đóng thùng và palletizing. Bao gồm thiết kế, chế tạo, test tại nhà máy và bàn giao.' },
    { q: 'Chọn máy đơn hay cả dây chuyền?', a: 'Máy đơn khi chỉ có một nút thắt. Bán tự động/line khi cần thông lượng ổn định và giảm thao tác thủ công. Turnkey khi xây nhà máy mới hoặc thay đổi phạm vi quy trình.' },
    { q: 'Có thể tích hợp máy của hãng khác không?', a: 'Có. Nếu điều kiện giao tiếp phù hợp, chúng tôi tích hợp thiết bị hiện có và thiết kế PLC/HMI cho line đa thương hiệu.' },
    { q: 'Lead time cho line full auto thường là bao lâu?', a: 'Thường 60–120 ngày tùy phạm vi và mức tùy chỉnh. Máy đơn có thể 30–45 ngày khi cấu hình đơn giản.' },
  ],
  de: [
    { q: 'Was ist eine Turnkey-Verpackungslinie?', a: 'Ein vollständig integriertes System nach Ihrer Spezifikation: Zuführung, Dosieren/Abfüllen, Verschließen, Kontrolle, Kartonieren und Palettieren. Inklusive Design, Fertigung, Werkstest und Übergabe.' },
    { q: 'Wie wähle ich zwischen Einzelmaschine und kompletter Linie?', a: 'Einzelmaschine bei einem klaren Engpass. Semi-Auto/Linie, wenn Durchsatz und Konstanz wichtig sind und manuelle Schritte reduziert werden sollen. Turnkey bei Neubau oder Prozess-Umfangsänderung.' },
    { q: 'Kann SunGene Maschinen anderer Marken integrieren?', a: 'Ja. Wenn Schnittstellen passen, integrieren wir Bestand und definieren PLC/HMI-Steuerung für Multi-Brand-Linien.' },
    { q: 'Typische Lieferzeit für eine Full-Auto-Linie?', a: 'In der Regel 60–120 Tage je nach Umfang und Anpassung. Einzelmaschinen können bei einfacher Konfiguration in 30–45 Tagen versendet werden.' },
  ],
}

const ctaDescByLang: Record<Lang, string> = {
  en: 'Send your product, packaging format, output target, and destination voltage/frequency. We will recommend a practical automation scope.',
  cn: '请提供产品、包装形式、目标产能，以及目的地电压/频率，我们将给出可落地的自动化配置建议。',
  zh: '請提供產品、包材形式、目標產能，以及目的地電壓/頻率，我們會給出可落地的自動化配置建議。',
  fr: 'Indiquez produit, format, cadence cible et tension/fréquence du pays. Nous recommandons un périmètre d’automatisation réaliste.',
  es: 'Comparta producto, formato, capacidad objetivo y voltaje/frecuencia del destino. Recomendamos un alcance de automatización práctico.',
  pt: 'Informe produto, formato, meta de produção e tensão/frequência do destino. Recomendamos um escopo de automação prático.',
  ko: '제품, 포장 형식, 목표 생산량, 목적지 전압/주파수를 보내주시면 현실적인 자동화 범위를 제안합니다.',
  ja: '製品、包装形態、目標能力、仕向地の電圧/周波数をご共有ください。現実的な自動化範囲をご提案します。',
  ar: 'أرسل نوع المنتج وشكل العبوة والقدرة المطلوبة ومعيار الجهد/التردد. سنقترح نطاق أتمتة عمليًا.',
  th: 'ส่งรายละเอียดสินค้า รูปแบบบรรจุภัณฑ์ กำลังการผลิตเป้าหมาย และแรงดัน/ความถี่ปลายทาง เราจะเสนอขอบเขตอัตโนมัติที่ใช้งานได้จริง',
  vi: 'Gửi sản phẩm, kiểu bao bì, công suất mục tiêu và điện áp/tần số tại điểm đến. Chúng tôi sẽ đề xuất phạm vi tự động hóa thực tế.',
  de: 'Senden Sie Produkt, Format, Zielleistung und Spannung/Frequenz am Einsatzort. Wir empfehlen einen praxisnahen Automationsumfang.',
}

const breadcrumbNames: Record<Lang, { home: string; solutions: string }> = {
  en: { home: 'Home', solutions: 'Solutions' },
  cn: { home: '首页', solutions: '解决方案' },
  zh: { home: '首頁', solutions: '解決方案' },
  fr: { home: 'Accueil', solutions: 'Solutions' },
  es: { home: 'Inicio', solutions: 'Soluciones' },
  pt: { home: 'Início', solutions: 'Soluções' },
  ko: { home: '홈', solutions: '솔루션' },
  ja: { home: 'ホーム', solutions: 'ソリューション' },
  ar: { home: 'الرئيسية', solutions: 'الحلول' },
  th: { home: 'หน้าแรก', solutions: 'โซลูชัน' },
  vi: { home: 'Trang chủ', solutions: 'Giải pháp' },
  de: { home: 'Start', solutions: 'Lösungen' },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function SolutionsPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const tx = getLevelTx(lang)
  const levels = getLevels(lang)
  const faqItems = faqItemsByLang[lang] || faqItemsByLang.en
  const bc = breadcrumbNames[lang] || breadcrumbNames.en
  const heroPhoto = PHOTO.pages.solutions.hero

  const guidesTitle =
    ({
      en: 'Buying guides by machine',
      cn: '按机型浏览采购指南',
      zh: '依機型瀏覽採購指南',
      fr: 'Guides d’achat par machine',
      es: 'Guías de compra por máquina',
      pt: 'Guias de compra por máquina',
      ko: '기계별 구매 가이드',
      ja: '機種別 購入ガイド',
      ar: 'أدلة الشراء حسب الماكينة',
      th: 'คู่มือการเลือกซื้อตามเครื่อง',
      vi: 'Hướng dẫn mua theo máy',
      de: 'Kaufratgeber nach Maschine',
    } as Record<string, string>)[lang] || 'Buying guides by machine'

  const getRecLabel =
    ({
      en: 'Get a Recommendation',
      cn: '获取推荐',
      zh: '取得推薦',
      fr: 'Obtenir une recommandation',
      es: 'Obtener recomendación',
      pt: 'Obter recomendação',
      ko: '추천 받기',
      ja: '推薦を受ける',
      ar: 'احصل على توصية',
      th: 'รับคำแนะนำ',
      vi: 'Nhận đề xuất',
      de: 'Empfehlung erhalten',
    } as Record<string, string>)[lang] || 'Get a Recommendation'

  const quoteLabel =
    ({
      en: 'Request a Quote',
      cn: '获取报价',
      zh: '取得報價',
      fr: 'Demander un devis',
      es: 'Solicitar cotización',
      pt: 'Solicitar orçamento',
      ko: '견적 요청',
      ja: '見積依頼',
      ar: 'طلب عرض سعر',
      th: 'ขอใบเสนอราคา',
      vi: 'Yêu cầu báo giá',
      de: 'Angebot anfordern',
    } as Record<string, string>)[lang] || 'Request a Quote'

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANG_META[lang].htmlLang,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: LANG_META[lang].htmlLang,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: bc.home, item: `${SITE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: bc.solutions, item: `${SITE_URL}/${lang}/solutions` },
    ],
  }

  const topicHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: LANG_META[lang].htmlLang,
    name: guidesTitle,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pouch packing buying guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/topic/pouch-packing-machine`, url: `${SITE_URL}/${lang}/resources/topic/pouch-packing-machine`, name: 'Pouch packing buying guides' } },
      { '@type': 'ListItem', position: 2, name: 'Powder filling buying guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/topic/powder-filling-machine`, url: `${SITE_URL}/${lang}/resources/topic/powder-filling-machine`, name: 'Powder filling buying guides' } },
      { '@type': 'ListItem', position: 3, name: 'Liquid filling buying guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/topic/liquid-filling-machine`, url: `${SITE_URL}/${lang}/resources/topic/liquid-filling-machine`, name: 'Liquid filling buying guides' } },
      { '@type': 'ListItem', position: 4, name: 'Snack processing buying guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/topic/snack-processing-line`, url: `${SITE_URL}/${lang}/resources/topic/snack-processing-line`, name: 'Snack processing buying guides' } },
      { '@type': 'ListItem', position: 5, name: 'Conveyor buying guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/topic/conveyor-system`, url: `${SITE_URL}/${lang}/resources/topic/conveyor-system`, name: 'Conveyor buying guides' } },
    ],
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/${lang}/solutions`,
    url: `${SITE_URL}/${lang}/solutions`,
    inLanguage: LANG_META[lang].htmlLang,
    name: heroTitle[lang] || heroTitle.en,
    description: heroDesc[lang] || heroDesc.en,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
  }

  const levelColors = [
    'from-blue-600 to-blue-700',
    'from-emerald-600 to-emerald-700',
    'from-orange-500 to-orange-600',
    'from-purple-600 to-purple-700',
  ]

  const levelBorderColors = [
    'border-blue-200',
    'border-emerald-200',
    'border-orange-200',
    'border-purple-200',
  ]

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={topicHubSchema} />

      {/* Hero */}
      <PageHero
        kicker={heroKicker[lang] || heroKicker.en}
        title={heroTitle[lang] || heroTitle.en}
        desc={heroDesc[lang] || heroDesc.en}
        image={{ src: heroPhoto, alt: 'Automated packaging production line in factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

      <section className="bg-white py-8">
        <Container className="max-w-6xl">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">{guidesTitle}</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/topic/pouch-packing-machine`}>{({ en: 'Pouch packing', cn: '袋装包装', zh: '袋裝包裝', fr: 'Ensachage', es: 'Empaque en bolsa', pt: 'Embalagem em saco', ko: '파우치 포장', ja: 'パウチ包装', ar: 'تعبئة الأكياس', th: 'บรรจุถุง', vi: 'Đóng gói túi', de: 'Beutelverpackung' } as Record<string, string>)[lang] || 'Pouch packing'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/topic/powder-filling-machine`}>{({ en: 'Powder filling', cn: '粉末灌装', zh: '粉末灌裝', fr: 'Poudre', es: 'Polvo', pt: 'Pó', ko: '분말', ja: '粉体', ar: 'مساحيق', th: 'ผง', vi: 'Bột', de: 'Pulver' } as Record<string, string>)[lang] || 'Powder filling'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/topic/liquid-filling-machine`}>{({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Líquidos', pt: 'Líquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[lang] || 'Liquid filling'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/topic/snack-processing-line`}>{({ en: 'Snack processing', cn: '休闲食品', zh: '休閒食品', fr: 'Snack', es: 'Snacks', pt: 'Snacks', ko: '스낵', ja: 'スナック', ar: 'سناكات', th: 'สแน็ค', vi: 'Snack', de: 'Snack' } as Record<string, string>)[lang] || 'Snack processing'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/topic/conveyor-system`}>{({ en: 'Conveyors', cn: '输送', zh: '輸送', fr: 'Convoyeurs', es: 'Transporte', pt: 'Transporte', ko: '컨베이어', ja: '搬送', ar: 'نقل', th: 'ลำเลียง', vi: 'Băng tải', de: 'Fördertechnik' } as Record<string, string>)[lang] || 'Conveyors'}</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${lang}/recommend`} size="md">{getRecLabel}</ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="secondary" size="md">{quoteLabel}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 Solution Levels */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">
            {tx.sectionTitle}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {levels.map((level, i) => {
              const txLevel = tx.levels[i]
              return (
                <Card key={i} className={`overflow-hidden border-2 ${levelBorderColors[i]} p-0`}>
                  {/* Badge header */}
                  <div className={`bg-gradient-to-r ${levelColors[i]} px-6 py-4 flex items-center gap-4`}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white font-bold text-sm">
                      {level.badge}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">{txLevel?.title || level.title}</h3>
                      <p className="text-sm text-white/80 leading-snug mt-0.5">{txLevel?.tagline || level.tagline}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{tx.whoForLabel}</span>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700">{level.whoFor}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{tx.configLabel}</span>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700">{level.typicalConfig}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{tx.investmentLabel}:</span>
                      <span className="text-sm font-bold text-gray-950">{level.typicalInvestment}</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{tx.upgradeLabel}</span>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{level.whenToUpgrade}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{tx.examplesLabel}</span>
                      <ul className="mt-2 space-y-1">
                        {level.examples.map((ex, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <ButtonLink
                        href={`/${lang}${level.ctaHref}?product=${encodeURIComponent(txLevel?.title || level.title)}`}
                        size="sm"
                      >
                        {txLevel?.cta || level.cta}
                      </ButtonLink>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 sm:py-24">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl text-center">
            {tx.compTitle}
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  {tx.compHeaders.map((h, i) => (
                    <th
                      key={i}
                      className={`px-4 py-3 text-left text-sm font-bold tracking-wide ${
                        i === 0
                          ? 'text-gray-500 w-40'
                          : 'text-gray-950 bg-white border border-gray-200 rounded-t text-center'
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tx.compRows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700 border border-gray-200">
                      {row.label}
                    </td>
                    {row.cells.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-sm text-gray-700 border border-gray-200 text-center">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl text-center mb-10">
            {faqTitle[lang] || faqTitle.en}
          </h2>
          <div className="divide-y divide-gray-200">
            {faqItems.map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="text-base font-semibold text-gray-950">{item.q}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-950 py-16 sm:py-20 text-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{tx.ctaSection}</h2>
          <p className="mt-4 text-base text-white/70">
            {ctaDescByLang[lang] || ctaDescByLang.en}
          </p>
          <div className="mt-8">
            <ButtonLink href={`/${lang}/recommend?product=${encodeURIComponent(heroTitle[lang] || heroTitle.en)}`} size="lg">
              {tx.ctaButton}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
