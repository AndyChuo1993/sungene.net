import type { Metadata } from 'next'
import { Lang, t } from '@/lib/i18n'
import Link from 'next/link'
import HeroSection from '@/components/home/HeroSection'
import MachineByProduct from '@/components/home/MachineByProduct'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyUs from '@/components/home/WhyUs'
import WhoWeWorkWith from '@/components/home/WhoWeWorkWith'
import ProcessSection from '@/components/home/ProcessSection'
import Applications from '@/components/home/Applications'
import CTASection from '@/components/home/CTASection'
import FAQ from '@/components/home/FAQ'
import TrustGallery from '@/components/home/TrustGallery'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'

type PageParams = {
  params: Promise<{ lang?: string }>
}

const HOME_POSITIONING: Partial<Record<Lang, {
  sourceKicker: string
  sourceTitle: string
  sourceIntro: string
  sourceItems: string[]
  beyondKicker: string
  beyondTitle: string
  beyondBody: string[]
}>> = {
  en: {
    sourceKicker: 'What we source',
    sourceTitle: 'A broader sourcing entry point for industrial and technical projects',
    sourceIntro: 'We support sourcing conversations that start with machines and expand into adjacent industrial and technical requirements.',
    sourceItems: [
      'Packaging systems',
      'Industrial equipment',
      'Automation components',
      'Selected tech-related sourcing',
    ],
    beyondKicker: 'Beyond machines',
    beyondTitle: 'Position the website for more advanced sourcing conversations',
    beyondBody: [
      'Today, sourcing is no longer just about equipment.',
      'It’s about integration, compatibility, and long-term reliability — especially in advanced industrial and technical environments.',
    ],
  },
  zh: {
    sourceKicker: '採購範圍',
    sourceTitle: '為工業與技術型專案打開更寬的採購入口',
    sourceIntro: '我們支援從機器開始、再延伸到周邊工業與技術需求的採購溝通。',
    sourceItems: [
      '包裝系統',
      '工業設備',
      '自動化零組件',
      '特定技術相關採購',
    ],
    beyondKicker: '不只機器',
    beyondTitle: '讓網站能承接更進階的採購對話',
    beyondBody: [
      '現在的採購，已經不只是買設備。',
      '更關鍵的是整合性、相容性與長期可靠性，特別是在更進階的工業與技術環境中。',
    ],
  },
  cn: {
    sourceKicker: '采购范围',
    sourceTitle: '为工业与技术型项目打开更宽的采购入口',
    sourceIntro: '我们支持从机器开始、再延伸到周边工业与技术需求的采购沟通。',
    sourceItems: [
      '包装系统',
      '工业设备',
      '自动化零组件',
      '特定技术相关采购',
    ],
    beyondKicker: '不只机器',
    beyondTitle: '让网站可以承接更进阶的采购对话',
    beyondBody: [
      '今天，采购早已不只是买设备。',
      '更关键的是整合性、兼容性与长期可靠性，特别是在更先进的工业与技术环境中。',
    ],
  },
  fr: {
    sourceKicker: 'Ce que nous sourcions',
    sourceTitle: "Un point d'entrée sourcing plus large pour les projets industriels et techniques",
    sourceIntro: "Nous accompagnons les démarches de sourcing qui démarrent par des machines et s'étendent aux besoins industriels et techniques adjacents.",
    sourceItems: [
      "Systèmes d'emballage",
      'Équipements industriels',
      "Composants d'automatisation",
      'Sourcing technique sélectionné',
    ],
    beyondKicker: 'Au-delà des machines',
    beyondTitle: 'Un partenaire de sourcing pour des conversations plus avancées',
    beyondBody: [
      "Aujourd'hui, le sourcing ne se limite plus à l'achat de matériel.",
      "Ce qui compte, c'est l'intégration, la compatibilité et la fiabilité sur le long terme — en particulier dans les environnements industriels avancés.",
    ],
  },
  es: {
    sourceKicker: 'Lo que abastecemos',
    sourceTitle: 'Un punto de entrada de sourcing más amplio para proyectos industriales y técnicos',
    sourceIntro: 'Apoyamos conversaciones de sourcing que comienzan con máquinas y se expanden hacia necesidades industriales y técnicas adyacentes.',
    sourceItems: [
      'Sistemas de empaque',
      'Equipos industriales',
      'Componentes de automatización',
      'Sourcing técnico seleccionado',
    ],
    beyondKicker: 'Más allá de las máquinas',
    beyondTitle: 'Un socio de sourcing para conversaciones más avanzadas',
    beyondBody: [
      'Hoy en día, el abastecimiento ya no se trata solo de comprar equipos.',
      'Se trata de integración, compatibilidad y confiabilidad a largo plazo — especialmente en entornos industriales avanzados.',
    ],
  },
  pt: {
    sourceKicker: 'O que fornecemos',
    sourceTitle: 'Um ponto de entrada de sourcing mais amplo para projetos industriais e técnicos',
    sourceIntro: 'Apoiamos conversas de sourcing que começam com máquinas e se expandem para necessidades industriais e técnicas adjacentes.',
    sourceItems: [
      'Sistemas de embalagem',
      'Equipamentos industriais',
      'Componentes de automação',
      'Sourcing técnico selecionado',
    ],
    beyondKicker: 'Além das máquinas',
    beyondTitle: 'Um parceiro de sourcing para conversas mais avançadas',
    beyondBody: [
      'Hoje, o sourcing não se resume mais à compra de equipamentos.',
      'Trata-se de integração, compatibilidade e confiabilidade a longo prazo — especialmente em ambientes industriais avançados.',
    ],
  },
  ko: {
    sourceKicker: '조달 범위',
    sourceTitle: '산업 및 기술 프로젝트를 위한 더 넓은 소싱 입구',
    sourceIntro: '기계에서 시작해 인접한 산업 및 기술 요구사항으로 확장되는 소싱 대화를 지원합니다.',
    sourceItems: [
      '포장 시스템',
      '산업 장비',
      '자동화 부품',
      '선별 기술 관련 소싱',
    ],
    beyondKicker: '기계 그 이상',
    beyondTitle: '더 고도화된 소싱 대화를 위한 파트너',
    beyondBody: [
      '오늘날 소싱은 단순한 장비 구매가 아닙니다.',
      '통합성, 호환성, 장기 신뢰성이 핵심입니다 — 특히 고도화된 산업 환경에서.',
    ],
  },
  ja: {
    sourceKicker: '調達範囲',
    sourceTitle: '産業・技術プロジェクトのための幅広いソーシング入口',
    sourceIntro: '機械から始まり、隣接する産業・技術ニーズへと広がるソーシング相談を支援します。',
    sourceItems: [
      '包装システム',
      '産業機器',
      '自動化部品',
      '特定技術関連ソーシング',
    ],
    beyondKicker: '機械を超えて',
    beyondTitle: 'より高度な調達対話のためのパートナー',
    beyondBody: [
      '今日の調達は、設備購入だけではありません。',
      '統合性、互換性、長期的な信頼性が重要です — 特に高度な産業環境において。',
    ],
  },
  ar: {
    sourceKicker: 'نطاق التوريد',
    sourceTitle: 'نقطة دخول توريد أوسع للمشاريع الصناعية والتقنية',
    sourceIntro: 'ندعم محادثات التوريد التي تبدأ بالآلات وتمتد إلى المتطلبات الصناعية والتقنية المجاورة.',
    sourceItems: [
      'أنظمة التعبئة والتغليف',
      'المعدات الصناعية',
      'مكونات الأتمتة',
      'توريد تقني مختار',
    ],
    beyondKicker: 'أبعد من الآلات',
    beyondTitle: 'شريك توريد لمحادثات أكثر تقدماً',
    beyondBody: [
      'اليوم، التوريد لم يعد مجرد شراء معدات.',
      'يتعلق الأمر بالتكامل والتوافق والموثوقية على المدى البعيد — خاصة في البيئات الصناعية المتقدمة.',
    ],
  },
  th: {
    sourceKicker: 'ขอบเขตการจัดหา',
    sourceTitle: 'จุดเข้าการจัดหาที่กว้างขึ้นสำหรับโครงการอุตสาหกรรมและเทคนิค',
    sourceIntro: 'เราสนับสนุนการสนทนาด้านการจัดหาที่เริ่มต้นจากเครื่องจักรและขยายไปสู่ความต้องการทางอุตสาหกรรมและเทคนิคที่เกี่ยวข้อง',
    sourceItems: [
      'ระบบบรรจุภัณฑ์',
      'อุปกรณ์อุตสาหกรรม',
      'ชิ้นส่วนระบบอัตโนมัติ',
      'การจัดหาเชิงเทคนิคที่คัดสรร',
    ],
    beyondKicker: 'เกินกว่าแค่เครื่องจักร',
    beyondTitle: 'พาร์ทเนอร์การจัดหาสำหรับการสนทนาขั้นสูง',
    beyondBody: [
      'ปัจจุบัน การจัดหาไม่ใช่แค่การซื้ออุปกรณ์อีกต่อไป',
      'สิ่งสำคัญคือการบูรณาการ ความเข้ากันได้ และความน่าเชื่อถือในระยะยาว — โดยเฉพาะในสภาพแวดล้อมอุตสาหกรรมขั้นสูง',
    ],
  },
  vi: {
    sourceKicker: 'Phạm vi tìm nguồn cung',
    sourceTitle: 'Điểm vào tìm nguồn cung rộng hơn cho các dự án công nghiệp và kỹ thuật',
    sourceIntro: 'Chúng tôi hỗ trợ các cuộc thảo luận tìm nguồn cung bắt đầu từ máy móc và mở rộng sang các yêu cầu công nghiệp và kỹ thuật liên quan.',
    sourceItems: [
      'Hệ thống đóng gói',
      'Thiết bị công nghiệp',
      'Linh kiện tự động hóa',
      'Tìm nguồn cung kỹ thuật được chọn lọc',
    ],
    beyondKicker: 'Hơn cả máy móc',
    beyondTitle: 'Đối tác tìm nguồn cung cho các cuộc thảo luận nâng cao',
    beyondBody: [
      'Ngày nay, tìm nguồn cung không chỉ là mua thiết bị.',
      'Điều quan trọng là tích hợp, tương thích và độ tin cậy lâu dài — đặc biệt trong môi trường công nghiệp tiên tiến.',
    ],
  },
  de: {
    sourceKicker: 'Was wir beschaffen',
    sourceTitle: 'Ein breiterer Sourcing-Einstiegspunkt für industrielle und technische Projekte',
    sourceIntro: 'Wir begleiten Sourcing-Gespräche, die bei Maschinen beginnen und sich auf angrenzende industrielle und technische Anforderungen ausweiten.',
    sourceItems: [
      'Verpackungssysteme',
      'Industrieanlagen',
      'Automatisierungskomponenten',
      'Ausgewähltes technisches Sourcing',
    ],
    beyondKicker: 'Mehr als Maschinen',
    beyondTitle: 'Ein Sourcing-Partner für fortgeschrittene Beschaffungsgespräche',
    beyondBody: [
      'Heute geht es beim Sourcing nicht mehr nur um den Kauf von Anlagen.',
      'Es geht um Integration, Kompatibilität und langfristige Zuverlässigkeit — besonders in fortgeschrittenen industriellen Umgebungen.',
    ],
  },
}

const HOME_KEYWORDS: Record<Lang, string[]> = {
  en: [
    'industrial equipment sourcing', 'automation components sourcing', 'packaging systems supplier',
    'technical sourcing support', 'industrial sourcing partner China', 'industrial sourcing Taiwan China',
    'industrial equipment supplier', 'machinery sourcing partner', 'automation integration sourcing',
    'packaging equipment sourcing', 'technical procurement partner', 'selected tech sourcing',
    'industrial equipment Taiwan China sourcing',
  ],
  zh: ['工業設備採購', '自動化零組件', '包裝系統', '技術採購支援', '中國採購合作夥伴', '台灣中國供應鏈'],
  cn: ['工业设备采购', '自动化零组件', '包装系统', '技术采购支持', '中国采购合作伙伴', '台湾中国供应链'],
  fr: ['partenaire de sourcing', 'machines d’emballage', 'équipement agroalimentaire', 'machine de remplissage Taïwan', 'machine VFFS', 'ligne automatisée', 'exportateur taïwanais'],
  es: ['socio de abastecimiento', 'maquinaria de empaque', 'equipo de procesamiento de alimentos', 'máquina de llenado Taiwán', 'máquina VFFS', 'línea automatizada', 'exportador taiwanés'],
  pt: ['parceiro de sourcing', 'máquinas de embalagem', 'equipamento de processamento de alimentos', 'máquina de envase Taiwan', 'máquina VFFS', 'linha automatizada', 'exportador taiwanês'],
  ko: ['소싱 파트너', '포장기계', '식품가공장비', '충진기 대만', 'VFFS 포장기', '자동화 라인', '대만 수출'],
  ja: ['ソーシングパートナー', '包装機械', '食品加工機器', '充填機 台湾', 'VFFS包装機', '自動化ライン', '台湾 輸出'],
  ar: ['آلات التعبئة والتغليف', 'معدات تجهيز الأغذية', 'آلة تعبئة تايوان', 'آلة VFFS', 'خط إنتاج مؤتمت', 'آلات صناعية'],
  th: ['เครื่องจักรบรรจุภัณฑ์', 'อุปกรณ์แปรรูปอาหาร', 'เครื่องบรรจุ ไต้หวัน', 'เครื่อง VFFS', 'ไลน์อัตโนมัติ', 'เครื่องจักรอุตสาหกรรม'],
  vi: ['máy đóng gói', 'thiết bị chế biến thực phẩm', 'máy chiết rót Đài Loan', 'máy VFFS', 'dây chuyền tự động', 'máy công nghiệp'],
  de: ['Sourcing-Partner', 'Verpackungsmaschinen', 'Lebensmittelverarbeitungsanlagen', 'Abfüllmaschine Taiwan', 'VFFS Verpackungsmaschine', 'automatisierte Linie', 'Export aus Taiwan'],
}

const SCHEMA_TEXT: Record<Lang, {
  listName: string
  listDesc: string
  categories: { packaging: string; food: string; filling: string; conveying: string; custom: string }
  faq: { q: string; a: string }[]
}> = {
  en: {
    listName: 'SunGene Industrial Equipment Sourcing',
    listDesc: 'Industrial equipment and automation sourcing support: packaging, food processing, filling & sealing, conveying, and turnkey integration.',
    categories: { packaging: 'Packaging Systems Sourcing', food: 'Food Equipment Sourcing', filling: 'Filling & Sealing Projects', conveying: 'Conveying & Automation Integration', custom: 'Custom Project Coordination' },
    faq: [
      { q: 'What is the minimum order quantity?', a: 'MOQ is 1 unit. Machines are configured to your product, packaging format, and target output.' },
      { q: 'Can you customize machines?', a: 'Yes. Materials, dimensions, capacity, voltage/frequency, and automation modules can be configured to your requirements.' },
      { q: 'What countries do you export to?', a: 'We export to 50+ countries across Southeast Asia, Middle East, Europe, Americas, and Africa. Voltage and frequency are configured to your local standard.' },
      { q: 'What is the delivery lead time?', a: 'Lead time depends on configuration. Typical ranges: 15–30 days for single machines, 45–90 days for full lines.' },
      { q: 'Do you provide FAT/SAT tests?', a: 'When applicable, we coordinate supplier FAT/SAT and function checks before shipment. Test videos and results can be provided as part of the handover.' },
      { q: 'What certifications do your machines have?', a: 'We support CE documentation for export where applicable. Food-contact surfaces can be specified as food-grade SUS304/316L stainless steel.' },
      { q: 'What after-sales support do you offer?', a: 'Remote video installation guidance, operator training, spare parts typically shipped within 48 hours (subject to stock and destination), and long-term technical support by phone or video call.' },
    ],
  },
  zh: {
    listName: 'SunGene 工業採購範圍',
    listDesc: '包裝系統、食品設備、灌裝封口專案與輸送/自動化整合。',
    categories: { packaging: '包裝系統採購', food: '食品設備採購', filling: '灌裝與封口專案', conveying: '輸送與自動化整合', custom: '客製專案協調' },
    faq: [
      { q: '最小訂購量是多少？', a: '最小訂購量為 1 台。可依產品、包材形式與目標產速進行配置。' },
      { q: '可以客製化嗎？', a: '可以。材質、尺寸、產能、電壓/頻率與自動化模組皆可依需求調整。' },
      { q: '出口到哪些國家？', a: '已出口 50+ 國家，涵蓋東南亞、中東、歐洲、美洲與非洲。電壓與頻率可依目的地標準配置。' },
      { q: '交期大約多久？', a: '交期取決於配置與整線範圍。常見區間：單機 15–30 天、整線 45–90 天。' },
      { q: '出貨前會做 FAT/SAT 測試嗎？', a: '視設備與供應商而定，我們可協調供應商端的 FAT/SAT 與功能檢測；並可提供測試影片與結果作為交付文件。' },
      { q: '機器有哪些認證？', a: '可提供 CE 文件支援（依設備/供應商而定），接觸面可指定食品級 SUS304/316L 不鏽鋼。' },
      { q: '售後支援包含哪些？', a: '遠端視訊安裝指導、操作培訓、備件通常於 48 小時內出貨（視庫存與目的地而定），以及長期電話或視訊技術支援。' },
    ],
  },
  cn: {
    listName: 'SunGene 工业机械',
    listDesc: '包装机械、食品加工设备、灌装封口系统与输送/自动化整线。',
    categories: { packaging: '包装机械', food: '食品加工设备', filling: '灌装与封口系统', conveying: '输送与自动化', custom: '定制机械' },
    faq: [
      { q: '最小订购量是多少？', a: '最小订购量为 1 台。可按产品、包装形式与目标产速进行配置。' },
      { q: '可以定制吗？', a: '可以。材质、尺寸、产能、电压/频率与自动化模块都可按需求调整。' },
      { q: '出口到哪些国家？', a: '已出口 50+ 国家，涵盖东南亚、中东、欧洲、美洲与非洲。电压与频率可按目的地标准配置。' },
      { q: '交期大约多久？', a: '交期取决于配置与整线范围。常见区间：单机 15–30 天、整线 45–90 天。' },
      { q: '出货前会做 FAT/SAT 测试吗？', a: '视设备与供应商而定，我们可协调供应商端的 FAT/SAT 与功能检测，并提供测试视频与结果作为交付文件。' },
      { q: '机器有哪些认证？', a: '可提供 CE 文件支持（视设备/供应商而定），接触面可指定食品级 SUS304/316L 不锈钢。' },
      { q: '售后支持包含哪些？', a: '远程视频安装指导、操作培训、备件通常在 48 小时内发货（视库存与目的地而定），以及长期电话或视频技术支持。' },
    ],
  },
  fr: {
    listName: 'SunGene — Machines industrielles',
    listDesc: 'Machines d’emballage, équipements agroalimentaires, remplissage/scellage et convoyage/automatisation.',
    categories: { packaging: 'Machines d’emballage', food: 'Équipements agroalimentaires', filling: 'Remplissage & scellage', conveying: 'Convoyage & automatisation', custom: 'Machines sur mesure' },
    faq: [
      { q: 'Quelle est la quantité minimum de commande ?', a: 'MOQ : 1 machine. Configuration selon produit, format et cadence cible.' },
      { q: 'Faites-vous du sur-mesure ?', a: 'Oui. Matériaux, dimensions, capacité, tension/fréquence et modules d’automatisation sont configurables.' },
      { q: 'Vers quels pays exportez-vous ?', a: 'Export vers 50+ pays en Asie du Sud-Est, Moyen-Orient, Europe, Amériques et Afrique. Tension et fréquence adaptées.' },
      { q: 'Quel est le délai de livraison ?', a: 'Selon configuration : en général 15–30 jours (machine) et 45–90 jours (ligne complète).' },
      { q: 'Faites-vous des tests FAT/SAT avant expédition ?', a: 'Selon l’équipement et le fournisseur, nous coordonnons des tests FAT/SAT et des contrôles fonctionnels avant expédition. Vidéo et résultats peuvent être fournis.' },
      { q: 'Quelles certifications sont disponibles ?', a: 'Nous accompagnons la documentation CE à l’export lorsque c’est applicable. Les surfaces en contact produit peuvent être spécifiées en SUS304/316L de grade alimentaire.' },
      { q: 'Quel SAV proposez-vous ?', a: 'Assistance vidéo à distance, formation opérateur, pièces détachées généralement expédiées sous 48h (selon stock et destination) et support technique long terme.' },
    ],
  },
  es: {
    listName: 'SunGene — Maquinaria industrial',
    listDesc: 'Maquinaria de empaque, equipos de alimentos, llenado/sellado y transporte/automatización.',
    categories: { packaging: 'Maquinaria de empaque', food: 'Equipos de alimentos', filling: 'Llenado y sellado', conveying: 'Transporte y automatización', custom: 'Maquinaria a medida' },
    faq: [
      { q: '¿Cuál es el pedido mínimo?', a: 'MOQ: 1 unidad. Se configura según producto, formato y velocidad objetivo.' },
      { q: '¿Pueden personalizar máquinas?', a: 'Sí. Materiales, dimensiones, capacidad, voltaje/frecuencia y módulos de automatización son configurables.' },
      { q: '¿A qué países exportan?', a: 'Exportamos a 50+ países en Asia, Medio Oriente, Europa, América y África. Voltaje y frecuencia se ajustan al estándar local.' },
      { q: '¿Cuál es el plazo de entrega?', a: 'Depende de la configuración: típico 15–30 días (máquina) y 45–90 días (línea completa).' },
      { q: '¿Realizan pruebas FAT/SAT antes del envío?', a: 'Según el equipo y el proveedor, coordinamos pruebas FAT/SAT y verificaciones funcionales antes del envío. Se pueden proporcionar video y resultados.' },
      { q: '¿Qué certificaciones están disponibles?', a: 'Apoyamos la documentación CE para exportación cuando aplique. Las superficies en contacto con el producto pueden especificarse en SUS304/316L de grado alimentario.' },
      { q: '¿Qué soporte posventa ofrecen?', a: 'Asistencia remota por video, capacitación, repuestos normalmente enviados en 48 horas (según stock y destino) y soporte técnico a largo plazo.' },
    ],
  },
  pt: {
    listName: 'SunGene — Máquinas industriais',
    listDesc: 'Máquinas de embalagem, equipamentos de alimentos, envase/selagem e transporte/automação.',
    categories: { packaging: 'Máquinas de embalagem', food: 'Equipamentos de alimentos', filling: 'Envase e selagem', conveying: 'Transporte e automação', custom: 'Máquinas sob medida' },
    faq: [
      { q: 'Qual é o pedido mínimo?', a: 'MOQ: 1 unidade. Configuração conforme produto, formato e velocidade-alvo.' },
      { q: 'Vocês fazem personalização?', a: 'Sim. Materiais, dimensões, capacidade, tensão/frequência e módulos de automação são configuráveis.' },
      { q: 'Para quais países vocês exportam?', a: 'Exportamos para 50+ países na Ásia, Oriente Médio, Europa, Américas e África. Tensão e frequência são ajustadas.' },
      { q: 'Qual é o prazo de entrega?', a: 'Depende da configuração: típico 15–30 dias (máquina) e 45–90 dias (linha completa).' },
      { q: 'Vocês realizam testes FAT/SAT antes do envio?', a: 'Conforme o equipamento e o fornecedor, coordenamos testes FAT/SAT e verificações funcionais antes do envio. Vídeo e resultados podem ser fornecidos.' },
      { q: 'Quais certificações estão disponíveis?', a: 'Apoiamos documentação CE para exportação quando aplicável. Superfícies de contato podem ser especificadas em aço inoxidável alimentar SUS304/316L.' },
      { q: 'Que suporte pós-venda vocês oferecem?', a: 'Assistência remota por vídeo, treinamento, peças normalmente enviadas em 48 horas (conforme estoque e destino) e suporte técnico de longo prazo.' },
    ],
  },
  ko: {
    listName: 'SunGene 산업용 기계',
    listDesc: '포장기계, 식품가공장비, 충전/밀봉, 컨베이어/자동화 라인.',
    categories: { packaging: '포장기계', food: '식품가공장비', filling: '충전 및 밀봉', conveying: '컨베이어 및 자동화', custom: '맞춤형 기계' },
    faq: [
      { q: '최소 주문 수량은?', a: 'MOQ는 1대입니다. 제품, 포장 형식, 목표 생산속도에 맞춰 구성합니다.' },
      { q: '맞춤 제작이 가능한가요?', a: '가능합니다. 재질, 치수, 생산능력, 전압/주파수, 자동화 모듈을 요구사항에 맞춰 구성합니다.' },
      { q: '어느 나라로 수출하나요?', a: '동남아, 중동, 유럽, 미주, 아프리카 등 50개국 이상 수출합니다. 전압과 주파수는 현지 표준에 맞춰 설정합니다.' },
      { q: '납기는 얼마나 걸리나요?', a: '구성에 따라 다릅니다. 일반적으로 단일 장비 15–30일, 라인 45–90일 범위입니다.' },
      { q: '출하 전 FAT/SAT 테스트를 하나요?', a: '장비와 공급사에 따라 FAT/SAT 및 기능 검사를 조율할 수 있으며, 테스트 영상과 결과를 제공할 수 있습니다.' },
      { q: '어떤 인증을 지원하나요?', a: '수출을 위한 CE 문서 지원이 가능하며(해당 시), 접촉면은 식품급 SUS304/316L 스테인리스강으로 지정할 수 있습니다.' },
      { q: '애프터서비스는 어떻게 되나요?', a: '원격 영상 설치 안내, 운전자 교육, 예비 부품은 보통 48시간 내 발송(재고 및 목적지에 따라), 장기 기술 지원을 제공합니다.' },
    ],
  },
  ja: {
    listName: 'SunGene 産業機械',
    listDesc: '包装機械、食品加工機器、充填/シール、搬送/自動化ライン。',
    categories: { packaging: '包装機械', food: '食品加工機器', filling: '充填・シール', conveying: '搬送・自動化', custom: 'カスタム機械' },
    faq: [
      { q: '最小注文数量は？', a: 'MOQは1台です。製品、包装形態、目標能力に合わせて構成します。' },
      { q: 'カスタマイズは可能？', a: '可能です。材質、寸法、能力、電圧/周波数、各種モジュールを要件に合わせて設定します。' },
      { q: 'どの国に輸出していますか？', a: '東南アジア、中東、欧州、米州、アフリカなど50か国以上に輸出しています。電圧・周波数は現地規格に合わせます。' },
      { q: '納期は？', a: '構成によります。目安：単体 15–30日、ライン 45–90日。' },
      { q: '出荷前にFAT/SATテストは実施しますか？', a: '設備とサプライヤーにより、FAT/SATおよび機能確認を出荷前に調整できます。テスト動画と結果を提供可能です。' },
      { q: 'どのような認証に対応していますか？', a: '該当する場合、輸出向けCE文書をサポートします。接触面は食品グレードSUS304/316Lステンレス鋼を指定可能です。' },
      { q: 'アフターサポートの内容は？', a: 'リモートビデオでの設置支援、オペレーター研修、部品は通常48時間以内に発送（在庫・仕向地により）、長期技術サポートをご提供します。' },
    ],
  },
  ar: {
    listName: 'SunGene — معدات صناعية',
    listDesc: 'آلات التعبئة والتغليف، معدات الأغذية، التعبئة/الإغلاق، وأنظمة النقل/الأتمتة.',
    categories: { packaging: 'آلات التعبئة والتغليف', food: 'معدات تصنيع الأغذية', filling: 'التعبئة والإغلاق', conveying: 'النقل والأتمتة', custom: 'آلات مخصصة' },
    faq: [
      { q: 'ما هو الحد الأدنى للطلب؟', a: 'الحد الأدنى: آلة واحدة. نضبط المواصفات حسب المنتج وشكل العبوة والسرعة المطلوبة.' },
      { q: 'هل يمكن التخصيص؟', a: 'نعم. المواد والأبعاد والقدرة والجهد/التردد ووحدات الأتمتة قابلة للتخصيص.' },
      { q: 'إلى أي دول تقومون بالتصدير؟', a: 'نصدر إلى أكثر من 50 دولة في جنوب شرق آسيا والشرق الأوسط وأوروبا والأمريكتين وأفريقيا.' },
      { q: 'كم يستغرق وقت التسليم؟', a: 'يعتمد على التكوين: غالبًا 15–30 يومًا للآلة و45–90 يومًا للخط الكامل.' },
      { q: 'هل تجرون اختبارات FAT/SAT قبل الشحن؟', a: 'حسب المعدة والمورد، نقوم بتنسيق اختبارات FAT/SAT وفحوصات الوظائف قبل الشحن. يمكن توفير فيديو ونتائج الاختبار.' },
      { q: 'ما هي الشهادات المتاحة؟', a: 'ندعم وثائق CE للتصدير عند توفرها. ويمكن تحديد الأسطح الملامسة للمنتج من ستانلس ستيل غذائي SUS304/316L.' },
      { q: 'ما هو دعم ما بعد البيع؟', a: 'دعم تركيب عن بُعد عبر الفيديو، تدريب المشغلين، قطع غيار تُشحن عادة خلال 48 ساعة (حسب المخزون والوجهة)، ودعم فني طويل الأجل.' },
    ],
  },
  th: {
    listName: 'SunGene เครื่องจักรอุตสาหกรรม',
    listDesc: 'เครื่องบรรจุภัณฑ์ อุปกรณ์แปรรูปอาหาร ระบบบรรจุ/ซีล และสายพาน/อัตโนมัติ',
    categories: { packaging: 'เครื่องบรรจุภัณฑ์', food: 'อุปกรณ์แปรรูปอาหาร', filling: 'ระบบบรรจุและซีล', conveying: 'ลำเลียงและอัตโนมัติ', custom: 'เครื่องจักรสั่งทำ' },
    faq: [
      { q: 'สั่งขั้นต่ำกี่เครื่อง?', a: 'ขั้นต่ำ 1 เครื่อง สามารถปรับสเปกตามสินค้า รูปแบบบรรจุภัณฑ์ และความเร็วเป้าหมาย' },
      { q: 'สั่งทำ/ปรับแต่งได้ไหม?', a: 'ได้ ปรับวัสดุ ขนาด กำลังการผลิต แรงดัน/ความถี่ และโมดูลอัตโนมัติได้ตามความต้องการ' },
      { q: 'ส่งออกไปประเทศไหนบ้าง?', a: 'ส่งออกมากกว่า 50 ประเทศในเอเชียตะวันออกเฉียงใต้ ตะวันออกกลาง ยุโรป อเมริกา และแอฟริกา' },
      { q: 'ระยะเวลาจัดหาและส่งมอบนานไหม?', a: 'ขึ้นอยู่กับสเปก โดยทั่วไปเครื่องเดี่ยว 15–30 วัน และไลน์ 45–90 วัน' },
      { q: 'มีการทดสอบก่อนส่งมอบไหม?', a: 'ตามอุปกรณ์และซัพพลายเออร์ เราสามารถประสานการทดสอบ FAT/SAT และการตรวจสอบการทำงานก่อนส่ง พร้อมวิดีโอและรายงานผล' },
      { q: 'มีใบรับรองอะไรบ้าง?', a: 'เราสนับสนุนเอกสาร CE สำหรับการส่งออกเมื่อเหมาะสม และสามารถระบุพื้นผิวสัมผัสเป็นสแตนเลสเกรดอาหาร SUS304/316L ได้' },
      { q: 'บริการหลังการขายมีอะไรบ้าง?', a: 'แนะนำติดตั้งผ่านวิดีโอ ฝึกอบรมผู้ปฏิบัติงาน อะไหล่โดยทั่วไปส่งภายใน 48 ชม. (ขึ้นอยู่กับสต็อกและปลายทาง) และสนับสนุนเทคนิคระยะยาว' },
    ],
  },
  vi: {
    listName: 'SunGene — Máy móc công nghiệp',
    listDesc: 'Máy đóng gói, thiết bị thực phẩm, chiết rót/hàn kín và băng tải/tự động hóa.',
    categories: { packaging: 'Máy đóng gói', food: 'Thiết bị thực phẩm', filling: 'Chiết rót & hàn kín', conveying: 'Băng tải & tự động hóa', custom: 'Máy tùy chỉnh' },
    faq: [
      { q: 'MOQ là bao nhiêu?', a: 'MOQ: 1 máy. Cấu hình theo sản phẩm, kiểu bao bì và công suất mục tiêu.' },
      { q: 'Có thể tùy chỉnh không?', a: 'Có. Vật liệu, kích thước, công suất, điện áp/tần số và module tự động hóa đều có thể cấu hình.' },
      { q: 'Xuất khẩu đến những nước nào?', a: 'Xuất khẩu 50+ quốc gia tại Đông Nam Á, Trung Đông, Châu Âu, Châu Mỹ và Châu Phi.' },
      { q: 'Thời gian giao hàng?', a: 'Tùy cấu hình: thường 15–30 ngày (máy đơn) và 45–90 ngày (dây chuyền).' },
      { q: 'Có test FAT/SAT trước khi giao không?', a: 'Tùy theo thiết bị và nhà cung cấp, chúng tôi có thể điều phối FAT/SAT và kiểm tra chức năng trước khi giao. Có thể cung cấp video và kết quả.' },
      { q: 'Máy có chứng nhận gì?', a: 'Chúng tôi hỗ trợ tài liệu CE cho xuất khẩu khi phù hợp. Bề mặt tiếp xúc có thể chỉ định inox thực phẩm SUS304/316L.' },
      { q: 'Hỗ trợ sau bán hàng gồm những gì?', a: 'Hướng dẫn lắp đặt qua video, đào tạo vận hành, phụ tùng thường giao trong 48 giờ (tùy tồn kho và điểm đến) và hỗ trợ kỹ thuật dài hạn.' },
    ],
  },
  de: {
    listName: 'SunGene — Industriemaschinen',
    listDesc: 'Verpackungsmaschinen, Lebensmittelanlagen, Abfüll-/Verschließsysteme sowie Fördertechnik/Automatisierung.',
    categories: { packaging: 'Verpackungsmaschinen', food: 'Lebensmittelanlagen', filling: 'Abfüllen & Verschließen', conveying: 'Fördertechnik & Automatisierung', custom: 'Sondermaschinen' },
    faq: [
      { q: 'Wie hoch ist die Mindestbestellmenge?', a: 'MOQ: 1 Maschine. Konfiguration nach Produkt, Verpackungsformat und Zielleistung.' },
      { q: 'Ist kundenspezifische Ausführung möglich?', a: 'Ja. Material, Abmessungen, Leistung, Spannung/Frequenz und Automationsmodule sind konfigurierbar.' },
      { q: 'In welche Länder exportieren Sie?', a: 'Export in 50+ Länder in Südostasien, Nahost, Europa, Amerika und Afrika. Spannung und Frequenz werden angepasst.' },
      { q: 'Wie lange ist die Lieferzeit?', a: 'Abhängig von der Konfiguration: typ. 15–30 Tage (Einzelmaschine) und 45–90 Tage (Linie).' },
      { q: 'Gibt es FAT/SAT-Tests vor der Lieferung?', a: 'Je nach Maschine und Lieferant koordinieren wir FAT/SAT und Funktionsprüfungen vor dem Versand. Testvideo und Ergebnisse können bereitgestellt werden.' },
      { q: 'Welche Zertifizierungen sind verfügbar?', a: 'Wir unterstützen CE-Dokumentation für den Export, sofern zutreffend. Produktberührende Flächen können in lebensmittelechtem Edelstahl SUS304/316L spezifiziert werden.' },
      { q: 'Welchen After-Sales-Support bieten Sie?', a: 'Ferninstallation per Video, Schulung, Ersatzteile werden in der Regel innerhalb von 48 Stunden versandt (abhängig von Lagerbestand und Ziel) und langfristiger technischer Support.' },
    ],
  },
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  return buildPageMetadata({
    lang: safeLang,
    title: t(safeLang, 'meta_home_title'),
    description: t(safeLang, 'meta_home_desc'),
    pathname: '/',
    type: 'website',
    keywords: HOME_KEYWORDS[safeLang] ?? HOME_KEYWORDS.en,
  })
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const safeLang = normalizeLang(lang)
  const s = SCHEMA_TEXT[safeLang] ?? SCHEMA_TEXT.en
  const positioning = HOME_POSITIONING[safeLang] ?? HOME_POSITIONING.en!

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: LANG_META[safeLang].htmlLang,
    name: s.listName,
    description: s.listDesc,
    numberOfItems: 5,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: s.categories.packaging, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/machinery/packaging`, url: `${SITE_URL}/${safeLang}/machinery/packaging`, name: s.categories.packaging } },
      { '@type': 'ListItem', position: 2, name: s.categories.food, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/machinery/food-processing`, url: `${SITE_URL}/${safeLang}/machinery/food-processing`, name: s.categories.food } },
      { '@type': 'ListItem', position: 3, name: s.categories.filling, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/machinery/filling-sealing`, url: `${SITE_URL}/${safeLang}/machinery/filling-sealing`, name: s.categories.filling } },
      { '@type': 'ListItem', position: 4, name: s.categories.conveying, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/machinery/conveying-automation`, url: `${SITE_URL}/${safeLang}/machinery/conveying-automation`, name: s.categories.conveying } },
      { '@type': 'ListItem', position: 5, name: s.categories.custom, item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/machinery/custom`, url: `${SITE_URL}/${safeLang}/machinery/custom`, name: s.categories.custom } },
    ]
  }

  const topicHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: LANG_META[safeLang].htmlLang,
    name: 'Configuration guides by route',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pouch packaging configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/route/pouch-packaging`, url: `${SITE_URL}/${safeLang}/resources/route/pouch-packaging`, name: 'Pouch packaging configuration guides' } },
      { '@type': 'ListItem', position: 2, name: 'Powder dosing configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/route/powder-dosing`, url: `${SITE_URL}/${safeLang}/resources/route/powder-dosing`, name: 'Powder dosing configuration guides' } },
      { '@type': 'ListItem', position: 3, name: 'Liquid filling configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/route/liquid-filling`, url: `${SITE_URL}/${safeLang}/resources/route/liquid-filling`, name: 'Liquid filling configuration guides' } },
      { '@type': 'ListItem', position: 4, name: 'Food processing line configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/route/food-processing-line`, url: `${SITE_URL}/${safeLang}/resources/route/food-processing-line`, name: 'Food processing line configuration guides' } },
      { '@type': 'ListItem', position: 5, name: 'Conveying & automation configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${safeLang}/resources/route/conveying-automation`, url: `${SITE_URL}/${safeLang}/resources/route/conveying-automation`, name: 'Conveying & automation configuration guides' } },
    ],
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: s.listName,
    url: `${SITE_URL}/${safeLang}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.lead', '.hero-desc'],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANG_META[safeLang].htmlLang,
    mainEntity: s.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(topicHubSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <HeroSection lang={safeLang} />
      <MachineByProduct lang={safeLang} />
      <ServicesPreview lang={safeLang} />
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-accent-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                  {positioning.sourceKicker}
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                {positioning.sourceTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
                {positioning.sourceIntro}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {positioning.sourceItems.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-accent-500" />
                    <p className="text-base font-semibold text-gray-900">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-brand-950 py-16 text-white sm:py-20">
        <Container className="max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-accent-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">
                {positioning.beyondKicker}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {positioning.beyondTitle}
            </h2>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-brand-200 sm:text-lg">
              {positioning.beyondBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white py-8">
        <Container className="max-w-7xl">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">
              {({
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
              } as Record<string, string>)[safeLang] || 'Configuration guides by route'}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/pouch-packaging`}>
                {({ en: 'Pouch packing', cn: '袋装包装', zh: '袋裝包裝', fr: 'Ensachage', es: 'Empaque en bolsa', pt: 'Embalagem em saco', ko: '파우치 포장', ja: 'パウチ包装', ar: 'تعبئة الأكياس', th: 'บรรจุถุง', vi: 'Đóng gói túi', de: 'Beutelverpackung' } as Record<string, string>)[safeLang] || 'Pouch packing'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/powder-dosing`}>
                {({ en: 'Powder filling', cn: '粉末灌装', zh: '粉末灌裝', fr: 'Poudre', es: 'Polvo', pt: 'Pó', ko: '분말', ja: '粉体', ar: 'مساحيق', th: 'ผง', vi: 'Bột', de: 'Pulver' } as Record<string, string>)[safeLang] || 'Powder filling'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/liquid-filling`}>
                {({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Líquidos', pt: 'Líquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[safeLang] || 'Liquid filling'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/food-processing-line`}>
                {({ en: 'Snack processing', cn: '休闲食品', zh: '休閒食品', fr: 'Snack', es: 'Snacks', pt: 'Snacks', ko: '스낵', ja: 'スナック', ar: 'سناكات', th: 'สแน็ค', vi: 'Snack', de: 'Snack' } as Record<string, string>)[safeLang] || 'Snack processing'}
              </Link>
              <Link className="text-accent-600 hover:underline" href={`/${safeLang}/resources/route/conveying-automation`}>
                {({ en: 'Conveyors', cn: '输送', zh: '輸送', fr: 'Convoyeurs', es: 'Transporte', pt: 'Transporte', ko: '컨베이어', ja: '搬送', ar: 'نقل', th: 'ลำเลียง', vi: 'Băng tải', de: 'Fördertechnik' } as Record<string, string>)[safeLang] || 'Conveyors'}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${safeLang}/assessment`} size="md">
                {({ en: 'Get Assessment', cn: '获取评估', zh: '取得評估', fr: 'Obtenir une évaluation', es: 'Obtener evaluación', pt: 'Obter avaliação', ko: '평가 받기', ja: '評価を受ける', ar: 'احصل على تقييم', th: 'รับการประเมิน', vi: 'Nhận đánh giá', de: 'Bewertung erhalten' } as Record<string, string>)[safeLang] || 'Get Assessment'}
              </ButtonLink>
              <ButtonLink href={`/${safeLang}/contact`} variant="secondary" size="md">
                {({ en: 'Request Assessment', cn: '获取采购评估', zh: '取得採購評估', fr: 'Demander évaluation', es: 'Solicitar evaluación', pt: 'Solicitar avaliação', ko: '평가 요청', ja: '評価依頼', ar: 'طلب تقييم', th: 'ขอการประเมิน', vi: 'Yêu cầu đánh giá', de: 'Bewertung anfordern' } as Record<string, string>)[safeLang] || 'Request Assessment'}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <WhyUs lang={safeLang} />
      <WhoWeWorkWith lang={safeLang} />
      <ProcessSection lang={safeLang} />
      <TrustGallery lang={safeLang} />
      <Applications lang={safeLang} />
      <CTASection lang={safeLang} />
      <FAQ lang={safeLang} />
    </>
  )
}
