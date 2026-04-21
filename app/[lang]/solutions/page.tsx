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
  en: 'Sourcing Solutions | From Single Machines to Integrated Lines',
  cn: '采购解决方案 | 从单机到整线集成',
  zh: '採購解決方案 | 從單機到整線整合',
  fr: 'Solutions de sourcing | De la machine seule à la ligne intégrée',
  es: 'Soluciones de abastecimiento | De una sola máquina a líneas integradas',
  pt: 'Soluções de sourcing | Da máquina única a linhas integradas',
  ko: '소싱 솔루션 | 단일 기계에서 통합 라인까지',
  ja: 'ソーシング・ソリューション | 単体機械から統合ラインまで',
  ar: 'حلول التوريد | من آلة واحدة إلى خطوط متكاملة',
  th: 'โซลูชันการจัดหา | จากเครื่องเดียวถึงการบูรณาการไลน์ครบวงจร',
  vi: 'Giải pháp tìm nguồn cung ứng | Từ máy đơn đến dây chuyền tích hợp',
  de: 'Sourcing-Lösungen | Von der Einzelmaschine zur integrierten Linie',
}

const metaDescs: Record<string, string> = {
  en: 'Strategic sourcing for industrial automation. We match equipment by product behavior, throughput targets, and technical compatibility across Taiwan and China.',
  cn: '工业自动化的战略采购。我们根据产品特性、产能目标以及台湾与中国的技术兼容性来匹配设备。',
  zh: '工業自動化的戰略採購。我們根據產品特性、產能目標以及台灣與中國的技術相容性來匹配設備。',
  fr: 'Sourcing stratégique pour l’automatisation industrielle. Sélection d’équipements selon le produit, les cadences et la compatibilité technique.',
  es: 'Abastecimiento estratégico para automatización industrial. Seleccionamos equipos según producto, capacidad y compatibilidad técnica.',
  pt: 'Sourcing estratégico para automação industrial. Selecionamos equipamentos conforme o produto, metas de produção e compatibilidade técnica.',
  ko: '산업 자동화를 위한 전략적 소싱. 제품 특성, 생산 목표 및 대만/중국의 기술적 호환성을 기준으로 장비를 매칭합니다.',
  ja: '産業オートメーションのための戦略的ソーシング。製品特性、目標能力、技術的な互換性を基準に最適な設備をマッチングします。',
  ar: 'توريد استراتيجي للأتمتة الصناعية. نختار المعدات حسب خصائص المنتج والقدرة المطلوبة والتوافق التقني.',
  th: 'การจัดหาเชิงกลยุทธ์สำหรับระบบอัตโนมัติในอุตสาหกรรม เราจับคู่เครื่องจักรตามลักษณะสินค้า กำลังการผลิต และความเข้ากันได้ทางเทคนิค',
  vi: 'Tìm nguồn cung ứng chiến lược cho tự động hóa công nghiệp. Chúng tôi kết nối thiết bị theo đặc tính sản phẩm, công suất và độ tương thích kỹ thuật.',
  de: 'Strategisches Sourcing für die Industrieautomation. Wir wählen Anlagen nach Produkteigenschaften, Zielleistung und technischer Kompatibilität aus.',
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
      'turnkey line integration', 'automation solutions', 'single machine', 'semi-automatic packaging',
      'fully automatic line', 'custom machinery', 'packaging line integration', 'Taiwan sourcing partner',
    ],
  })
}

// ─── Hero copy ────────────────────────────────────────────────────────────────

const heroKicker: Record<string, string> = {
  en: 'SOURCING SOLUTIONS',
  cn: '采购解决方案',
  zh: '採購解決方案',
  fr: 'SOLUTIONS DE SOURCING',
  es: 'SOLUCIONES DE ABASTECIMIENTO',
  pt: 'SOLUÇÕES DE SOURCING',
  ko: '소싱 솔루션',
  ja: 'ソーシング・ソリューション',
  ar: 'حلول التوريد',
  th: 'โซลูชันระบบอัตโนมัติ',
  vi: 'GIẢI PHÁP TÌM NGUỒN CUNG ỨNG',
  de: 'SOURCING-LÖSUNGEN',
}

const heroTitle: Record<string, string> = {
  en: 'Sourcing Strategy & Line Integration',
  cn: '采购策略与整线集成',
  zh: '採購策略與整線整合',
  fr: 'Stratégie de sourcing et intégration de ligne',
  es: 'Estrategia de abastecimiento e integración de líneas',
  pt: 'Estrategia de sourcing e integração de linha',
  ko: '소싱 전략 및 라인 통합',
  ja: 'ソーシング戦略とライン統合',
  ar: 'استراتيجية التوريد وتكامل الخطوط',
  th: 'กลยุทธ์การจัดหาและการรวมไลน์ผลิต',
  vi: 'Chiến lược tìm nguồn cung ứng & Tích hợp dây chuyền',
  de: 'Sourcing-Strategie und Linienintegration',
}

const heroDesc: Record<string, string> = {
  en: 'We don’t just supply equipment — we design the sourcing strategy that ensures your machines, components, and logic work as one unified system. We help you vet suppliers and verify technical compatibility before you commit capital.',
  cn: '我们不仅提供设备，更为您规划采购策略，确保机械、零组件与控制逻辑能作为一个统一的系统高效运作。在您投入资本前，我们协助审核供应商并验证技术兼容性。',
  zh: '我們不僅提供設備，更為您規劃採購策略，確保機械、零組件與控制邏輯能作為一個統一的系統高效運作。在您投入資本前，我們協助審核供應商並驗證技術相容性。',
  fr: 'Nous ne fournissons pas seulement des équipements, nous concevons la stratégie de sourcing qui garantit que vos machines, composants et automatismes fonctionnent comme un système unifié.',
  es: 'No solo suministramos equipos: diseñamos la estrategia de abastecimiento que garantiza que sus máquinas, componentes y lógica funcionen como un sistema unificado.',
  pt: 'Não apenas fornecemos equipamentos — projetamos a estratégia de sourcing que garante que suas máquinas, componentes e lógica funcionem como um sistema unificado.',
  ko: '우리는 단순한 장비 공급을 넘어, 기계, 부품 및 로직이 하나의 통합된 시스템으로 작동하도록 소싱 전략을 설계합니다. 자본을 투자하기 전에 공급업체를 심사하고 기술적 호환성을 검증하도록 돕습니다.',
  ja: '単なる設備供給にとどまらず、機械、コンポーネント、ロジックが一つの統合システムとして機能するようソーシング戦略を設計します。投資前にサプライヤーを審査し、技術的な互換性を検証します。',
  ar: 'نحن لا نورد المعدات فحسب، بل نصمم استراتيجية التوريد التي تضمن عمل الماكينات والمكونات والمنطق كنظام واحد موحد.',
  th: 'เราไม่ได้แค่จัดหาอุปกรณ์ แต่เราออกแบบกลยุทธ์การจัดหาเพื่อให้มั่นใจว่าเครื่องจักร ส่วนประกอบ และระบบควบคุมทำงานร่วมกันเป็นหนึ่งเดียว เราช่วยตรวจสอบซัพพลายเออร์และความเข้ากันได้ทางเทคนิคก่อนคุณตัดสินใจลงทุน',
  vi: 'Chúng tôi không chỉ cung cấp thiết bị — chúng tôi thiết kế chiến lược tìm nguồn cung ứng để đảm bảo máy móc, linh kiện và logic vận hành như một hệ thống thống nhất.',
  de: 'Wir liefern nicht nur Anlagen – wir entwerfen die Sourcing-Strategie, die sicherstellt, dass Ihre Maschinen, Komponenten und Logik als ein einheitliches System funktionieren.',
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

const levelCtaHref: Array<SolutionLevel['ctaHref']> = ['/contact', '/assessment', '/assessment', '/contact']

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
      whoFor: 'Startups or small teams needing specific technical components or single-function machinery.',
      typicalConfig: 'One specific machine (filling, processing, or packing) or high-spec industrial components sourced to your requirement.',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: 'When you need to connect multiple steps or reduce manual handling between machines.',
      examples: ['Auger filler for spice powder', 'Industrial sensors & PLC modules', 'VFFS machine for snacks', 'Continuous fryer'],
    },
    {
      whoFor: 'Growing operations moving from manual steps to semi-automated, integrated workstations.',
      typicalConfig: '2–4 machines linked by conveyors and sensors. We ensure logic compatibility between different equipment.',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: 'When labor costs become the primary bottleneck or when high consistency across large volumes is required.',
      examples: ['VFFS + Multi-head weigher integration', 'Liquid filler + Capper + Labeler setup', 'Frying line + Seasoning + Cooling'],
    },
    {
      whoFor: 'Established producers targeting high volume, export consistency, and minimal human intervention.',
      typicalConfig: 'Full end-to-end lines from feeding to palletizing. Vetted suppliers and integrated PLC/HMI controls.',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: 'When volume justifies the investment or when strict compliance/traceability requires a unified digital layer.',
      examples: ['Full VFFS powder line with case packing', 'Automatic bottling line (Fill-Cap-Label-Pack)', 'Complete snack processing line'],
    },
    {
      whoFor: 'New facility builds, complex technical projects, or project owners needing a single point of technical responsibility.',
      typicalConfig: 'Full engineering scope: technical auditing → process design → machine selection → system integration → FAT → Handover.',
      typicalInvestment: 'From $150,000 USD — project-based',
      whenToUpgrade: 'When standard machinery cannot meet your product behavior, hygiene standards, or throughput requirements.',
      examples: ['Pharma-grade powder sachet line', 'Multi-format flexible packaging facility', 'Integrated food processing facility'],
    },
  ],
  cn: [
    {
      whoFor: '初创或小型团队，需要特定技术组件或单一功能机械。',
      typicalConfig: '根据您的要求采购的特定设备（灌装、加工或包装）或高规格工业零组件。',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: '当您需要连接多个工序或减少机器之间的人工搬运时。',
      examples: ['香料粉螺杆充填机', '工业传感器与 PLC 模块', '零食 VFFS 包装机', '连续式油炸机'],
    },
    {
      whoFor: '处于成长阶段，正从人工操作转向半自动、集成化工作站的企业。',
      typicalConfig: '由输送带和传感器连接的 2-4 台设备。我们确保不同设备间的控制逻辑兼容性。',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: '当人工成本成为主要瓶颈，或在大批量生产中需要高度一致性时。',
      examples: ['VFFS + 多头秤集成', '液体灌装 + 旋盖 + 贴标配置', '油炸线 + 调味 + 冷却'],
    },
    {
      whoFor: '追求高产能、出口一致性并希望将人工干预降至最低的成熟企业。',
      typicalConfig: '从上料到码垛的全流程线体整合。采用经过审核的供应商并集成统一的 PLC/HMI 控制。',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: '当产能足以支撑投资，或严格的合规性/追溯要求需要统一的数字化层级时。',
      examples: ['带装箱功能的粉末 VFFS 全线', '全自动瓶装线 (灌-旋-贴-装)', '完整零食加工线体'],
    },
    {
      whoFor: '新建场地、复杂技术项目或需要单一技术责任窗口的项目方。',
      typicalConfig: '全方位工程范围：技术审计 → 工艺设计 → 设备选型 → 系统集成 → FAT 测试 → 交付。',
      typicalInvestment: '从 $150,000 USD 起（按项目核算）',
      whenToUpgrade: '当标准设备无法满足您的产品特性、卫生标准或产能要求时。',
      examples: ['医药级粉末小袋包装线', '多规格柔性包装设施', '集成化食品加工设施'],
    },
  ],
  zh: [
    {
      whoFor: '初創或小型團隊，需要特定技術組件或單一功能機械。',
      typicalConfig: '根據您的要求採購的特定設備（灌裝、加工或包裝）或高規格工業零組件。',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: '當您需要連接多個工序或減少機器之間的人工搬運時。',
      examples: ['香料粉螺桿充填機', '工業感測器與 PLC 模組', '零食 VFFS 包裝機', '連續式油炸機'],
    },
    {
      whoFor: '處於成長階段，正從人工操作轉向半自動、整合化工作站的企業。',
      typicalConfig: '由輸送帶和感測器連接的 2-4 台設備。我們確保不同設備間的控制邏輯相容性。',
      typicalInvestment: '$15,000 – $80,000 USD',
      whenToUpgrade: '當人工成本成為主要瓶頸，或在大批量生產中需要高度一致性時。',
      examples: ['VFFS + 多頭秤整合', '液體灌裝 + 旋蓋 + 貼標配置', '油炸線 + 調味 + 冷卻'],
    },
    {
      whoFor: '追求高產能、出口一致性並希望將人工干預降至最低的成熟企業。',
      typicalConfig: '從上料到碼垛的全流程線體整合。採用經過審核的供應商並整合統一的 PLC/HMI 控制。',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: '當產能足以支撐投資，或嚴格的合規性/追溯要求需要統一的數位化層級時。',
      examples: ['帶裝箱功能的粉末 VFFS 全線', '全自動瓶裝線 (灌-旋-貼-裝)', '完整零食加工線體'],
    },
    {
      whoFor: '新建場地、複雜技術專案或需要單一技術責任窗口的專案方。',
      typicalConfig: '全方位工程範圍：技術審核 → 製程設計 → 設備選型 → 系統整合 → FAT 測試 → 交付。',
      typicalInvestment: '從 $150,000 USD 起（按專案核算）',
      whenToUpgrade: '當標準設備無法滿足您的產品特性、衛生標準或產能要求時。',
      examples: ['醫藥級粉末小袋包裝線', '多規格柔性包裝設施', '整合化食品加工設施'],
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
      whoFor: 'Nouveaux sites, produits atypiques, ou besoin d’un interlocuteur unique responsable.',
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
      whoFor: 'Nuevas plantas, productos especiales o compradores que quieren un responsable único.',
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
      whoFor: 'Produtores estabelecidos buscando alto volume, consistencia para exportação ou higiene rigorosa.',
      typicalConfig: 'Linha completa da alimentação à saída do produto — PLC/HMI, com poucas etapas manuais.',
      typicalInvestment: '$80,000 – $300,000 USD',
      whenToUpgrade: 'Quando o volume justifica o investimento ou aumentam exigências de conformidade/rastreabilidade.',
      examples: ['Linha VFFS pó: silo → rosca → VFFS → checkweigher → encaixotador', 'Linha de garrafas: envasar → tampar → rotular', 'Linha completa de snacks: fritar + embalar'],
    },
    {
      whoFor: 'Novas plantas, produtos especiais ou compradores que querem um único responsável pelo projeto.',
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
      whoFor: '신규 공장, 표준 장비로 어려운 제품, 단일 책임 창구가 필요한 프로젝트.',
      typicalConfig: '전체 엔지니어링: 공정 설계 → 장비 선정 → 맞춤 제작 → FAT → 설치 → 시운전 → 교육.',
      typicalInvestment: '$150,000 USD부터 (프로젝트 기준)',
      whenToUpgrade: '표준 장비로 제품 특성/위생/능력/규정 요구를 만족시키기 어려울 때.',
      examples: ['제약 분말 사셰 충전 라인', '멀티 포맷 플렉시블 포장 라인', '스낵 공정 + 포장 전체 설비'],
    },
  ],
  ja: [
    {
      whoFor: 'スタートアップ/小規模工場, または明確なボトルネックを先に解消したい場合。',
      typicalConfig: '充填・シール・加工機の単体。手投入の単独運転、または簡易フィーダーと組み合わせ。',
      typicalInvestment: '$3,000 – $30,000 USD',
      whenToUpgrade: '次工程が新たなボトルネックになる、または省人化が優先になったとき.',
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
      whoFor: '新工場、標準機では難しい製品、単一窓口で責任を持たせたい案件。',
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
      whoFor: 'إنشاء موقع جديد، منتجات خاصة، أو مشروع يحتاج جهة واحدة مسؤولة.',
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
      whoFor: 'สร้างหน้างานใหม่ สินค้าเฉพาะ หรืออยากให้มีผู้รับผิดชอบโครงการรายเดียว',
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
      whoFor: 'Xây nhà máy mới, sản phẩm đặc thù hoặc muốn một đầu mối chịu trách nhiệm toàn bộ.',
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
      whoFor: 'Neubau, Sonderprodukte oder Projekte mit einem verantwortlichen Ansprechpartner.',
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
    sectionTitle: 'Strategic Sourcing Levels',
    whoForLabel: 'Strategic fit',
    configLabel: 'Typical scope',
    investmentLabel: 'Investment range',
    upgradeLabel: 'Scale path',
    examplesLabel: 'Technical examples',
    compTitle: 'Which Sourcing Strategy is Right for You?',
    compHeaders: ['', 'Component/Machine', 'Workstation', 'End-to-End', 'Turnkey'],
    compRows: [
      { label: 'Technical vetting', cells: ['Basic', 'High', 'Advanced', 'Strategic'] },
      { label: 'Output range', cells: ['Low–Medium', 'Medium', 'Medium–High', 'High–Very High'] },
      { label: 'System logic', cells: ['Standalone', 'Integrated', 'Centralized', 'Unified'] },
      { label: 'Initial investment', cells: ['$', '$$', '$$$', '$$$$'] },
      { label: 'Typical timeline', cells: ['30–45 days', '45–75 days', '60–120 days', '90–180 days'] },
      { label: 'Best for', cells: ['Single task', 'Growing flow', 'High volume', 'New build/turnkey'] },
    ],
    ctaSection: "Need a technical sourcing evaluation?",
    ctaButton: 'Get a Sourcing Recommendation',
    levels: [
      { title: 'Component & Machine Sourcing', tagline: 'One specific technical task. Immediate impact.', cta: 'Get Machine Sourcing Advice' },
      { title: 'Integrated Workstations', tagline: 'Linking core steps. Multi-vendor compatibility.', cta: 'Design an Integrated Workstation' },
      { title: 'End-to-End Line Integration', tagline: 'High throughput. Unified control logic.', cta: 'Request a Line Sourcing Plan' },
      { title: 'Strategic Turnkey Projects', tagline: 'Full site scope. Single technical accountability.', cta: 'Discuss Your Strategic Project' },
    ],
  },
  cn: {
    sectionTitle: '战略采购层级',
    whoForLabel: '战略适配',
    configLabel: '典型范围',
    investmentLabel: '投资范围',
    upgradeLabel: '升级路径',
    examplesLabel: '技术示例',
    compTitle: '哪种采购策略适合您？',
    compHeaders: ['', '零部件/单机', '集成工作站', '端到端产线', '交钥匙项目'],
    compRows: [
      { label: '技术审核', cells: ['基础', '高级', '深度', '战略级'] },
      { label: '产量范围', cells: ['低–中', '中', '中–高', '高–极高'] },
      { label: '系统逻辑', cells: ['独立运行', '集成控制', '集中管理', '统一平台'] },
      { label: '初始投资', cells: ['$', '$$', '$$$', '$$$$'] },
      { label: '交货期', cells: ['30–45天', '45–75天', '60–120天', '90–180天'] },
      { label: '最适合', cells: ['单一任务', '流程优化', '高产能需求', '新建场地/交钥匙'] },
    ],
    ctaSection: '需要专业的技术采购评估？',
    ctaButton: '获取采购评估',
    levels: [
      { title: '零部件与单机采购', tagline: '解决单一技术任务。立竿见影。', cta: '获取单机采购建议' },
      { title: '集成工作站', tagline: '连接核心工序。多供应商兼容。', cta: '设计集成工作站' },
      { title: '端到端线体整合', tagline: '高产出。统一控制逻辑。', cta: '申请整线采购计划' },
      { title: '战略级交钥匙项目', tagline: '全厂建设范围。单一技术责任窗口。', cta: '讨论您的战略项目' },
    ],
  },
  zh: {
    sectionTitle: '戰略採購層級',
    whoForLabel: '戰略適配',
    configLabel: '典型範圍',
    investmentLabel: '投資範圍',
    upgradeLabel: '升級路徑',
    examplesLabel: '技術範例',
    compTitle: '哪種採購策略適合您？',
    compHeaders: ['', '零組件/單機', '整合工作站', '端到端產線', '交鑰匙專案'],
    compRows: [
      { label: '技術審核', cells: ['基礎', '高級', '深度', '戰略級'] },
      { label: '產量範圍', cells: ['低–中', '中', '中–高', '高–極高'] },
      { label: '系統邏輯', cells: ['獨立運作', '整合控制', '集中管理', '統一平台'] },
      { label: '初始投資', cells: ['$', '$$', '$$$', '$$$$'] },
      { label: '交貨期', cells: ['30–45天', '45–75天', '60–120天', '90–180天'] },
      { label: '最適合', cells: ['單一任務', '流程優化', '高產能需求', '新建場地/交鑰匙'] },
    ],
    ctaSection: '需要專業的技術採購評估？',
    ctaButton: '取得採購評估',
    levels: [
      { title: '零組件與單機採購', tagline: '解決單一技術任務。立竿見影。', cta: '取得單機採購建議' },
      { title: '整合工作站', tagline: '連接核心工序。多供應商相容。', cta: '設計整合工作站' },
      { title: '端到端線體整合', tagline: '高產出。統一控制邏輯。', cta: '申請整線採購計畫' },
      { title: '戰略級交鑰匙專案', tagline: '全廠建設範圍。單一技術責任窗口。', cta: '討論您的戰略專案' },
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

const faqItemsByLang: Partial<Record<Lang, FaqItem[]>> = {
  en: [
    { q: 'What is strategic industrial sourcing?', a: 'It is the process of vetting suppliers, verifying engineering standards, and ensuring technical compatibility across different machines and components before procurement. We act as your technical eyes on the ground.' },
    { q: 'How do you ensure technical compatibility?', a: 'We review electrical diagrams, PLC protocols, and physical footprints of all sourced items. We coordinate between different vendors to ensure they work as a unified line system.' },
    { q: 'Can you source machines from specific regions?', a: 'Yes. We specialize in sourcing high-performance equipment and components from both Taiwan and China, matching the right supplier to your budget and quality requirements.' },
    { q: 'What is your vetting process for suppliers?', a: 'We perform on-site audits, check component origins (e.g., Siemens PLC, SMC pneumatics), and verify past export performance and after-sales support capabilities.' },
  ],
  cn: [
    { q: '什么是战略性工业采购？', a: '这是在采购前审核供应商、验证工程标准并确保不同机器与组件之间技术兼容性的过程。我们作为您在当地的技术窗口，为您把关。' },
    { q: '你们如何确保技术兼容性？', a: '我们审查所有采购项目的电路图、PLC 协议和物理布局。我们协调不同供应商，确保它们能作为一个统一的线体系统运行。' },
    { q: '你们可以从特定地区采购吗？', a: '可以。我们专精于从台湾和中国采购高性能设备与零部件，根据您的预算和质量要求匹配最合适的供应商。' },
    { q: '你们对供应商的审核流程是怎样的？', a: '我们进行现场审计，检查核心部件来源（如西门子 PLC、SMC 气动元件），并验证其过往出口表现和售后支持能力。' },
  ],
  zh: [
    { q: '什麼是戰略性工業採購？', a: '這是在採購前審核供應商、驗證工程標準並確保不同機器與組件之間技術相容性的過程。我們作為您在當地的技術窗口，為您把關。' },
    { q: '你們如何確保技術相容性？', a: '我們審查所有採購項目的電路圖、PLC 協定和物理佈局。我們協調不同供應商，確保它們能作為一個統一的線體系統運作。' },
    { q: '你們可以從特定地區採購嗎？', a: '可以。我們專精於從台灣和中國採購高性能設備與零組件，根據您的預算和品質要求匹配最適合的供應商。' },
    { q: '你們對供應商的審核流程是怎樣的？', a: '我們進行現場審計，檢查核心部件來源（如西門子 PLC、SMC 氣動元件），並驗證其過往出口表現和售後支援能力。' },
  ],
}

const ctaDescByLang: Record<Lang, string> = {
  en: 'Send your product specs, output targets, and technical constraints. We will provide a professional sourcing assessment.',
  cn: '请提供产品规格、产量目标与技术约束条件。我们将提供专业的采购建议。',
  zh: '請提供產品規格、產量目標與技術約束條件。我們將提供專業的採購建議。',
  fr: 'Indiquez produit, format, cadence cible et tension/fréquence du pays. Nous proposons un périmètre d’automatisation réaliste.',
  es: 'Comparta producto, formato, capacidad objetivo y voltaje/frecuencia del destino. Proponemos un alcance de automatización práctico.',
  pt: 'Informe produto, formato, meta de produção e tensão/frequência do destino. Propomos um escopo de automação prático.',
  ko: '제품, 포장 형식, 목표 생산량, 목적지 전압/주파수를 보내주시면 현실적인 자동화 범위를 제안합니다.',
  ja: '製品、包装形態、目標能力、仕向地の電圧/周波数をご共有ください。現実的な自動化範囲をご提案します。',
  ar: 'أرسل نوع المنتج وشكل العبوة والقدرة المطلوبة ومعيار الجهد/التردد. سنقترح نطاق أتمتة عمليًا.',
  th: 'ส่งรายละเอียดสินค้า รูปแบบบรรจุภัณฑ์ กำลังการผลิตเป้าหมาย และแรงดัน/ความถี่ปลายทาง เราจะเสนอขอบเขตอัตโนมัติที่ใช้งานได้จริง',
  vi: 'Gửi sản phẩm, kiểu bao bì, công suất mục tiêu và điện áp/tần số tại điểm đến. Chúng tôi sẽ đề xuất phạm vi tự động hóa thực tế.',
  de: 'Senden Sie Produkt, Format, Zielleistung und Spannung/Frequenz am Einsatzort. Wir schlagen einen praxisnahen Automationsumfang vor.',
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
  const faqItems = faqItemsByLang[lang] || faqItemsByLang.en || []
  const bc = breadcrumbNames[lang] || breadcrumbNames.en
  const heroPhoto = PHOTO.pages.solutions.hero
  const metaTitle = metaTitles[lang] || metaTitles.en
  const metaDesc = metaDescs[lang] || metaDescs.en

  const guidesTitle =
    ({
      en: 'Configuration guides by route',
      cn: '按配置路线浏览指南',
      zh: '依配置路線瀏覽指南',
      fr: 'Guides par parcours de configuration',
      es: 'Guías por ruta de configuración',
      pt: 'Guias por rota de configuração',
      ko: '구성 경로별 가이드',
      ja: '構成ルート別 ガイド',
      ar: 'أدلة حسب مسار التهيئة',
      th: 'คู่มือตามเส้นทางการกำหนดค่า',
      vi: 'Hướng dẫn theo lộ trình cấu hình',
      de: 'Leitfäden nach Konfigurationspfad',
    } as Record<string, string>)[lang] || 'Configuration guides by route'

  const getRecLabel =
    ({
      en: 'Get Assessment',
      cn: '获取评估',
      zh: '取得評估',
      fr: 'Obtenir une évaluation',
      es: 'Obtener evaluación',
      pt: 'Obter avaliação',
      ko: '평가 받기',
      ja: '評価を受ける',
      ar: 'احصل على تقييم',
      th: 'รับการประเมิน',
      vi: 'Nhận đánh giá',
      de: 'Bewertung erhalten',
    } as Record<string, string>)[lang] || 'Get Assessment'

  const quoteLabel =
    ({
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
    } as Record<string, string>)[lang] || 'Request Assessment'

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
    '@id': `${SITE_URL}/${lang}/solutions#itemlist`,
    inLanguage: LANG_META[lang].htmlLang,
    name: guidesTitle,
    isPartOf: { '@id': `${SITE_URL}/${lang}/solutions` },
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pouch packaging configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/route/pouch-packaging`, url: `${SITE_URL}/${lang}/resources/route/pouch-packaging`, name: 'Pouch packaging configuration guides' } },
      { '@type': 'ListItem', position: 2, name: 'Powder dosing configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/route/powder-dosing`, url: `${SITE_URL}/${lang}/resources/route/powder-dosing`, name: 'Powder dosing configuration guides' } },
      { '@type': 'ListItem', position: 3, name: 'Liquid filling configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/route/liquid-filling`, url: `${SITE_URL}/${lang}/resources/route/liquid-filling`, name: 'Liquid filling configuration guides' } },
      { '@type': 'ListItem', position: 4, name: 'Food processing line configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/route/food-processing-line`, url: `${SITE_URL}/${lang}/resources/route/food-processing-line`, name: 'Food processing line configuration guides' } },
      { '@type': 'ListItem', position: 5, name: 'Conveying & automation configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/route/conveying-automation`, url: `${SITE_URL}/${lang}/resources/route/conveying-automation`, name: 'Conveying & automation configuration guides' } },
    ],
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/${lang}/solutions`,
    url: `${SITE_URL}/${lang}/solutions`,
    inLanguage: LANG_META[lang].htmlLang,
    name: metaTitle,
    description: metaDesc,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
    mainEntity: { '@id': `${SITE_URL}/${lang}/solutions#itemlist` },
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
        image={{ src: heroPhoto, alt: 'Automated packaging line integration', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

      <section className="bg-white py-8">
        <Container className="max-w-6xl">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">{guidesTitle}</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/pouch-packaging`}>{({ en: 'Pouch packaging', cn: '袋包装', zh: '袋包裝', fr: 'Ensachage', es: 'Empaque en bolsa', pt: 'Embalagem em saco', ko: '파우치', ja: 'パウチ', ar: 'أكياس', th: 'ถุง', vi: 'Túi', de: 'Beutel' } as Record<string, string>)[lang] || 'Pouch packaging'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/powder-dosing`}>{({ en: 'Powder dosing', cn: '粉体计量', zh: '粉體計量', fr: 'Poudre', es: 'Polvo', pt: 'Pó', ko: '분말', ja: '粉体', ar: 'مساحيق', th: 'ผง', vi: 'Bột', de: 'Pulver' } as Record<string, string>)[lang] || 'Powder dosing'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/liquid-filling`}>{({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Líquidos', pt: 'Líquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[lang] || 'Liquid filling'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/food-processing-line`}>{({ en: 'Food processing line', cn: '食品加工线', zh: '食品加工線', fr: 'Process', es: 'Proceso', pt: 'Processo', ko: '식품 라인', ja: '加工ライン', ar: 'معالجة', th: 'กระบวนการ', vi: 'Chế biến', de: 'Prozess' } as Record<string, string>)[lang] || 'Food processing line'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/conveying-automation`}>{({ en: 'Conveying & automation', cn: '输送与自动化', zh: '輸送與自動化', fr: 'Convoyage', es: 'Transporte', pt: 'Transporte', ko: '이송/자동화', ja: '搬送/自動化', ar: 'نقل/أتمتة', th: 'ลำเลียง/อัตโนมัติ', vi: 'Băng tải/TĐH', de: 'Fördertechnik/Automation' } as Record<string, string>)[lang] || 'Conveying & automation'}</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${lang}/assessment`} size="md">{getRecLabel}</ButtonLink>
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
            <ButtonLink href={`/${lang}/assessment?product=${encodeURIComponent(heroTitle[lang] || heroTitle.en)}`} size="lg">
              {tx.ctaButton}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
