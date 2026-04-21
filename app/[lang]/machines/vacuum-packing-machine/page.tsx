import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, BREADCRUMB_LABELS } from '@/lib/seo'
import { buildWuushengProductSchema } from '@/lib/productSchema'
import MachineDecisionGuide from '@/components/machines/MachineDecisionGuide'
import Image from 'next/image'

const PRODUCT_IMAGE = 'https://img.mweb.com.tw/thumb/758/1000x1000/product/12_Vacuum_Packing_Machine/01_Vacuum_Packing_Machine/Vacuum_Packing_Machine.jpg'

const metaTitles: Record<string, string> = {
  en: 'Vacuum Packaging Configuration Route | Preservation & Acceptance Planning',
  cn: '真空包装配置路线 | 保鲜与验收规划',
  zh: '真空包裝配置路線 | 保鮮與驗收規劃',
  fr: 'Machine à emballer sous vide | Sourcing technique et solutions de conservation',
  es: 'Máquina de envasado al vacío | Abastecimiento técnico y soluciones de preservación',
  pt: 'Máquina de embalagem a vácuo | Sourcing técnico e soluções de preservação',
  ko: '진공 포장기 | 기술 소싱 및 보존 솔루션',
  ja: '真空包装機 | 技術ソーシングと保存ソリューション',
  ar: 'آلة التغليف بالتفريغ | التوريد التقني وحلول الحفظ',
  th: 'เครื่องแพ็กสุญญากาศ | การจัดซื้อเชิงเทคนิคและโซลูชันการถนอมอาหาร',
  vi: 'Máy đóng gói chân không | Đánh giá nguồn cung và giải pháp bảo quản',
  de: 'Vakuumverpackungsmaschine | Technisches Sourcing & Konservierungslösungen',
}

const metaDescs: Record<string, string> = {
  en: 'Vacuum packaging sourcing support: define chamber/line configuration, verify seal and evacuation acceptance criteria, and align FAT/documents before approval.',
  cn: '真空包装采购支持：规划腔室/产线配置，确认封口与抽真空验收标准，并在核准前对齐 FAT 与文件范围。',
  zh: '真空包裝採購支援：規劃腔室/產線配置，確認封口與抽真空驗收標準，並在核准前對齊 FAT 與文件範圍。',
  fr: 'Sourcing professionnel pour machines à emballer sous vide à chambre. Validation technique des modèles WS-350/420/720 pour la conservation et la protection.',
  es: 'Abastecimiento profesional para envasadoras al vacío de cámara. Validación de ingeniería para modelos WS-350/420/720 para extensión de vida útil y protección.',
  pt: 'Sourcing profissional para máquinas de embalagem a vácuo de câmara. Validação técnica para modelos WS-350/420/720 para extensão de vida útil e proteção.',
  ko: '챔버형 진공 포장기 전문 소싱. 식품 유통기한 연장 및 전자제품 습기 보호를 위해 WS-350/420/720 모델에 대한 엔지니어링 검증을 제공합니다.',
  ja: 'チャンバー式真空包装機の専門ソーシング。食品の保存期間延長や電子機器の防湿のため、WS-350/420/720モデルの技術検証を提供します。',
  ar: 'توريد احترافي لآلات التغليف بالتفريغ. نحن نقدم تحققًا هندسيًا لطرازات WS-350/420/720 لضمان إطالة مدة الصلاحية وحماية الإلكترونيات.',
  th: 'การจัดซื้อระดับมืออาชีพสำหรับเครื่องแพ็กสุญญากาศแบบแชมเบอร์ เราให้บริการตรวจสอบทางวิศวกรรมสำหรับรุ่น WS-350/420/720 เพื่อการถนอมอาหารและป้องกันความชื้น',
  vi: 'Nguồn cung chuyên nghiệp cho máy đóng gói chân không buồng kín. Chúng tôi xác minh kỹ thuật cho dòng WS-350/420/720 để bảo quản thực phẩm và bảo vệ điện tử.',
  de: 'Professionelles Sourcing für Kammer-Vakuumverpackungsmaschinen. Wir bieten technische Prüfung der Modelle WS-350/420/720 für Haltbarkeit und Schutz.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/vacuum-packing-machine',
    type: 'website',
    keywords: ['vacuum packaging configuration', 'chamber selection', 'seal and evacuation criteria', 'FAT checklist', 'supplier vetting', 'documentation handoff'],
  })
}

interface PageContent {
  kicker: string
  heroTitle: string
  heroSubtitle: string
  featuresTitle: string
  features: string[]
  specsTitle: string
  applicationsTitle: string
  applications: string[]
  ctaTitle: string
  ctaBtn: string
}

const content: Record<string, PageContent> = {
  en: {
    kicker: 'VACUUM PACKAGING',
    heroTitle: 'Vacuum Packing Machine',
    heroSubtitle: 'Double-chamber and single-chamber vacuum packing machines for extending food storage life and preventing oxidation, contamination, and moisture. Also suitable for electronics and precision parts to prevent corrosion, dust, and humidity damage.',
    featuresTitle: 'Key Features',
    features: [
      'Extends food shelf life — prevents oxidation, contamination, and bacterial growth',
      'Protects electronic parts and precision components from corrosion, dust, and moisture',
      'High-quality vacuum pump (1/2HP to 3HP) with low failure rate',
      'Stable, moisture-proof electronic circuit board for reliable long-term operation',
      'Easy-to-use operator panel with straightforward controls',
      'Double sealing bars on WS-420 and WS-720 for simultaneous dual-bag sealing',
      'Chamber sizes from 340×330×120mm up to 805×560×140mm',
      'Stainless steel interior for food-grade hygiene compliance',
    ],
    specsTitle: 'Technical Specifications',
    applicationsTitle: 'Applications',
    applications: ['Fresh meat & seafood', 'Cheese & dairy products', 'Processed food', 'Nuts & dried goods', 'Medical & pharmaceutical', 'Electronic components', 'Precision instruments', 'Industrial parts storage'],
    ctaTitle: 'Need technical advice on vacuum preservation or industrial parts protection? Request a professional sourcing assessment.',
    ctaBtn: 'Get Sourcing Assessment',
  },
  cn: {
    kicker: '真空包装',
    heroTitle: '真空包装机',
    heroSubtitle: '单腔与双腔真空包装机，延长食品储存期，防止氧化、污染及水分侵入。同样适用于电子元件与精密零件，防止腐蚀、灰尘与湿气损害。',
    featuresTitle: '主要特点',
    features: [
      '延长食品货架期——防止氧化、污染与细菌滋生',
      '保护电子元件与精密零件免受腐蚀、灰尘与湿气侵害',
      '高质量真空泵（1/2HP至3HP），故障率低',
      '稳定防潮电路板，保障长期可靠运行',
      '操作面板简洁直观，使用便捷',
      'WS-420和WS-720配备双封口棒，可同时封两袋',
      '腔体尺寸从340×330×120mm至805×560×140mm',
      '不锈钢内腔，符合食品级卫生标准',
    ],
    specsTitle: '技术规格',
    applicationsTitle: '应用领域',
    applications: ['新鲜肉类与海鲜', '奶酪与乳制品', '加工食品', '坚果与干货', '医疗与制药', '电子元器件', '精密仪器', '工业零件存储'],
    ctaTitle: '需要真空保鲜或工业零件保护的技术建议？申请专业采购评估。',
    ctaBtn: '获取采购评估',
  },
  zh: {
    kicker: '真空包裝',
    heroTitle: '真空包裝機',
    heroSubtitle: '單腔與雙腔真空包裝機，延長食品儲存期，防止氧化、污染及水分侵入。同樣適用於電子元件與精密零件，防止腐蝕、灰塵與濕氣損害。',
    featuresTitle: '主要特點',
    features: [
      '延長食品貨架期——防止氧化、污染與細菌滋生',
      '保護電子元件與精密零件免受腐蝕、灰塵與濕氣侵害',
      '高品質真空泵（1/2HP至3HP），故障率低',
      '穩定防潮電路板，保障長期可靠運行',
      '操作面板簡潔直覺，使用便捷',
      'WS-420和WS-720配備雙封口棒，可同時封兩袋',
      '腔體尺寸從340×330×120mm至805×560×140mm',
      '不鏽鋼內腔，符合食品級衛生標準',
    ],
    specsTitle: '技術規格',
    applicationsTitle: '應用領域',
    applications: ['新鮮肉類與海鮮', '乳酪與乳製品', '加工食品', '堅果與乾貨', '醫療與製藥', '電子元器件', '精密儀器', '工業零件存儲'],
    ctaTitle: '需要真空保鮮或工業零件保護的技术建議？申請專業採購評估。',
    ctaBtn: '獲取採購評估',
  },
  fr: {
    kicker: 'EMBALLAGE SOUS VIDE',
    heroTitle: 'Machine à emballer sous vide',
    heroSubtitle: 'Machines à emballer sous vide à simple et double chambre pour prolonger la durée de conservation des aliments et prévenir l\'oxydation, la contamination et l\'humidité. Aussi adaptées aux composants électroniques et pièces de précision.',
    featuresTitle: 'Caractéristiques principales',
    features: [
      'Prolonge la durée de conservation des aliments — prévient oxydation, contamination et croissance bactérienne',
      'Protège les composants électroniques et pièces de précision contre corrosion, poussière et humidité',
      'Pompe à vide haute qualité (1/2 à 3 CV) avec faible taux de panne',
      'Carte électronique stable et étanche pour un fonctionnement fiable à long terme',
      'Panneau opérateur simple d\'utilisation',
      'Double barres de soudure sur WS-420 et WS-720 pour scellage simultané de deux sacs',
      'Chambres de 340×330×120 mm à 805×560×140 mm',
      'Intérieur en acier inoxydable pour conformité aux normes d\'hygiène alimentaire',
    ],
    specsTitle: 'Spécifications techniques',
    applicationsTitle: 'Applications',
    applications: ['Viandes fraîches et fruits de mer', 'Fromages et produits laitiers', 'Aliments transformés', 'Noix et produits secs', 'Médical et pharmaceutique', 'Composants électroniques', 'Instruments de précision', 'Stockage pièces industrielles'],
    ctaTitle: 'Besoin d\'un conseil technique sur la mise sous vide ? Demandez une évaluation de sourcing.',
    ctaBtn: 'Obtenir une évaluation',
  },
  es: {
    kicker: 'ENVASADO AL VACÍO',
    heroTitle: 'Máquina de envasado al vacío',
    heroSubtitle: 'Envasadoras al vacío de cámara simple y doble para prolongar la vida útil de los alimentos y prevenir oxidación, contaminación y humedad. También apta para componentes electrónicos y piezas de precisión.',
    featuresTitle: 'Características principales',
    features: [
      'Prolonga la vida útil de los alimentos — previene oxidación, contaminación y crecimiento bacteriano',
      'Protege los componentes electrónicos y piezas de precisión contra corrosión, polvo y humedad',
      'Bomba de vacío de alta calidad (1/2 a 3 HP) con baja tasa de fallos',
      'Tarjeta de circuito electrónico estable y a prueba de humedad',
      'Panel de operación simple e intuitivo',
      'Dobles barras de sellado en WS-420 y WS-720 para sellar dos bolsas simultáneamente',
      'Cámaras de 340×330×120 mm a 805×560×140 mm',
      'Interior de acero inoxidable para cumplimiento de higiene alimentaria',
    ],
    specsTitle: 'Especificaciones técnicas',
    applicationsTitle: 'Aplicaciones',
    applications: ['Carne fresca y mariscos', 'Quesos y lácteos', 'Alimentos procesados', 'Frutos secos y deshidratados', 'Médico y farmacéutico', 'Componentes electrónicos', 'Instrumentos de precisión', 'Almacenamiento de piezas industriales'],
    ctaTitle: '¿Necesita asesoramiento técnico sobre preservación al vacío? Solicite una evaluación.',
    ctaBtn: 'Obtener evaluación',
  },
  pt: {
    kicker: 'EMBALAGEM A VÁCUO',
    heroTitle: 'Máquina de embalagem a vácuo',
    heroSubtitle: 'Máquinas de embalagem a vácuo de câmara simples e dupla para prolongar a vida útil dos alimentos e evitar oxidação, contaminação e umidade. Também adequada para componentes eletrônicos e peças de precisão.',
    featuresTitle: 'Principais características',
    features: [
      'Prolonga a vida útil dos alimentos — evita oxidação, contaminação e crescimento bacteriano',
      'Protege componentes eletrônicos e peças de precisão contra corrosão, poeira e umidade',
      'Bomba de vácuo de alta qualidade (1/2 a 3 HP) com baixa taxa de falhas',
      'Placa de circuito eletrônico estável e à prova de umidade',
      'Painel de operação simples e intuitivo',
      'Duplas barras de selagem no WS-420 e WS-720 para selar dois sacos simultaneamente',
      'Câmaras de 340×330×120 mm a 805×560×140 mm',
      'Interior em aço inoxidável para conformidade com higiene alimentar',
    ],
    specsTitle: 'Especificações técnicas',
    applicationsTitle: 'Aplicações',
    applications: ['Carnes frescas e frutos do mar', 'Queijos e laticínios', 'Alimentos processados', 'Nozes e secos', 'Médico e farmacêutico', 'Componentes eletrônicos', 'Instrumentos de precisão', 'Armazenamento de peças industriais'],
    ctaTitle: 'Precisa de consultoria técnica sobre preservação a vácuo? Peça uma avaliação.',
    ctaBtn: 'Obter avaliação',
  },
  ko: {
    kicker: '진공 포장',
    heroTitle: '진공 포장기',
    heroSubtitle: '단일 챔버 및 이중 챔버 진공 포장기로 식품 유통기한을 연장하고 산화, 오염, 습기를 방지합니다. 전자 부품 및 정밀 부품의 부식, 먼지, 습기 손상 방지에도 적합합니다.',
    featuresTitle: '주요 특징',
    features: [
      '식품 유통기한 연장 — 산화, 오염, 세균 번식 방지',
      '전자 부품 및 정밀 부품을 부식, 먼지, 습기로부터 보호',
      '고품질 진공 펌프(1/2HP~3HP), 낮은 고장률',
      '안정적인 방습 전자 회로 기판으로 장기 신뢰 운용',
      '직관적인 조작 패널로 사용이 쉬움',
      'WS-420, WS-720은 이중 실링 바로 동시에 2봉지 실링 가능',
      '챔버 크기 340×330×120mm ~ 805×560×140mm',
      '스테인리스 스틸 내부로 식품 위생 기준 준수',
    ],
    specsTitle: '기술 사양',
    applicationsTitle: '적용 분야',
    applications: ['신선 육류·해산물', '치즈·유제품', '가공식품', '견과류·건조식품', '의료·제약', '전자 부품', '정밀 기기', '산업 부품 보관'],
    ctaTitle: '진공 보존이나 산업 부품 보호에 대한 기술적 조언이 필요하십니까? 전문 소싱 평가를 신청하세요.',
    ctaBtn: '소싱 평가 받기',
  },
  ja: {
    kicker: '真空包装',
    heroTitle: '真空包装機',
    heroSubtitle: '単室・複室チャンバー式真空包装機で食品の保存期間を延長し、酸化・汚染・湿気を防止します。電子部品・精密部品の腐食・ほこり・湿気対策にも最適です。',
    featuresTitle: '主な特長',
    features: [
      '食品の保存期間延長 — 酸化・汚染・菌の繁殖を防止',
      '電子部品・精密部品を腐食・ほこり・湿気から保護',
      '高品質真空ポンプ（1/2〜3HP）、低故障率',
      '安定した防湿電子回路基板で長期信頼運転',
      '操作パネルが直感的で使いやすい',
      'WS-420・WS-720はダブルシールバーで2袋同時シール可能',
      'チャンバーサイズ340×330×120mm〜805×560×140mm',
      'ステンレス鋼内装で食品衛生基準適合',
    ],
    specsTitle: '技術仕様',
    applicationsTitle: '適用分野',
    applications: ['生鮮肉・水産物', 'チーズ・乳製品', '加工食品', 'ナッツ・乾物', '医療・医薬品', '電子部品', '精密機器', '工業部品保管'],
    ctaTitle: '真空保存や工業部品保護の技術相談が必要ですか？専門ソーシング評価をご依頼ください。',
    ctaBtn: 'ソーシング評価を依頼',
  },
  ar: {
    kicker: 'التعبئة بالتفريغ',
    heroTitle: 'آلة التغليف بالتفريغ',
    heroSubtitle: 'آلات تغليف بالتفريغ بغرفة مفردة ومزدوجة لإطالة مدة صلاحية الأغذية ومنع الأكسدة والتلوث والرطوبة. مناسبة أيضًا للمكونات الإلكترونية والقطع الدقيقة.',
    featuresTitle: 'الميزات الرئيسية',
    features: [
      'تطيل مدة صلاحية الأغذية — تمنع الأكسدة والتلوث ونمو البكتيريا',
      'تحمي المكونات الإلكترونية والقطع الدقيقة من التآكل والغبار والرطوبة',
      'مضخة تفريغ عالية الجودة (1/2 إلى 3 حصان) بمعدل أعطال منخفض',
      'لوحة دوائر إلكترونية مستقرة ومقاومة للرطوبة',
      'لوحة تشغيل سهلة الاستخدام',
      'أشرطة ختم مزدوجة في WS-420 وWS-720 لختم كيسين في آنٍ واحد',
      'أحجام الغرفة من 340×330×120 مم إلى 805×560×140 مم',
      'داخلية من الفولاذ المقاوم للصدأ للامتثال للمعايير الصحية الغذائية',
    ],
    specsTitle: 'المواصفات التقنية',
    applicationsTitle: 'التطبيقات',
    applications: ['اللحوم الطازجة والمأكولات البحرية', 'الجبن ومنتجات الألبان', 'الأغذية المصنعة', 'المكسرات والمجففات', 'الطبي والدوائي', 'المكونات الإلكترونية', 'الأجهزة الدقيقة', 'تخزين القطع الصناعية'],
    ctaTitle: 'هل تحتاج إلى نصيحة تقنية بشأن الحفظ بالتفريغ؟ اطلب تقييم توريد احترافي.',
    ctaBtn: 'طلب تقييم التوريد',
  },
  th: {
    kicker: 'บรรจุภัณฑ์สุญญากาศ',
    heroTitle: 'เครื่องแพ็กสุญญากาศ',
    heroSubtitle: 'เครื่องแพ็กสุญญากาศแบบห้องเดี่ยวและห้องคู่สำหรับยืดอายุการเก็บรักษาอาหารและป้องกันการออกซิเดชัน การปนเปื้อน และความชื้น รวมถึงเหมาะสำหรับชิ้นส่วนอิเล็กทรอนิกส์และชิ้นส่วนความละเอียดสูง',
    featuresTitle: 'คุณสมบัติหลัก',
    features: [
      'ยืดอายุอาหาร — ป้องกันการออกซิเดชัน การปนเปื้อน และการเจริญเติบโตของแบคทีเรีย',
      'ป้องกันชิ้นส่วนอิเล็กทรอนิกส์และชิ้นส่วนละเอียดจากการกัดกร่อน ฝุ่น และความชื้น',
      'ปั๊มสุญญากาศคุณภาพสูง (1/2 ถึง 3 HP) อัตราความเสียหายต่ำ',
      'แผงวงจรอิเล็กทรอนิกส์ที่เสถียรและกันความชื้น ทนงานระยะยาว',
      'แผงควบคุมใช้งานง่าย ตรงไปตรงมา',
      'WS-420 และ WS-720 มีแถบซีลคู่สำหรับซีล 2 ถุงพร้อมกัน',
      'ขนาดห้องตั้งแต่ 340×330×120 มม. ถึง 805×560×140 มม.',
      'ภายในสแตนเลสสตีลตามมาตรฐานสุขอนามัยอาหาร',
    ],
    specsTitle: 'ข้อมูลจำเพาะทางเทคนิค',
    applicationsTitle: 'การใช้งาน',
    applications: ['เนื้อสดและอาหารทะเล', 'ชีสและผลิตภัณฑ์นม', 'อาหารแปรรูป', 'ถั่วและของแห้ง', 'การแพทย์และเภสัชกรรม', 'ชิ้นส่วนอิเล็กทรอนิกส์', 'เครื่องมือวัดละเอียด', 'เก็บชิ้นส่วนอุตสาหกรรม'],
    ctaTitle: 'ต้องการคำแนะนำด้านเทคนิคเกี่ยวกับการถนอมอาหารด้วยสุญญากาศ? ขอรับการประเมินการจัดซื้อ',
    ctaBtn: 'ขอการประเมินการจัดซื้อ',
  },
  vi: {
    kicker: 'ĐÓNG GÓI CHÂN KHÔNG',
    heroTitle: 'Máy đóng gói chân không',
    heroSubtitle: 'Máy đóng gói chân không buồng đơn và buồng đôi để kéo dài hạn sử dụng thực phẩm và ngăn chặn oxy hóa, nhiễm bẩn và ẩm. Cũng phù hợp cho linh kiện điện tử và chi tiết chính xác.',
    featuresTitle: 'Tính năng chính',
    features: [
      'Kéo dài hạn dùng thực phẩm — ngăn oxy hóa, nhiễm khuẩn và vi sinh vật phát triển',
      'Bảo vệ linh kiện điện tử và chi tiết chính xác khỏi ăn mòn, bụi và ẩm',
      'Bơm chân không chất lượng cao (1/2 đến 3 HP), ít hỏng hóc',
      'Bo mạch điện tử ổn định, chống ẩm, hoạt động tin cậy lâu dài',
      'Bảng điều khiển đơn giản, dễ sử dụng',
      'WS-420 và WS-720 có hai thanh hàn để hàn đồng thời 2 túi',
      'Kích thước buồng từ 340×330×120mm đến 805×560×140mm',
      'Nội thất thép không gỉ đạt tiêu chuẩn vệ sinh thực phẩm',
    ],
    specsTitle: 'Thông số kỹ thuật',
    applicationsTitle: 'Ứng dụng',
    applications: ['Thịt tươi và hải sản', 'Phô mai và sữa', 'Thực phẩm chế biến', 'Hạt và đồ khô', 'Y tế và dược phẩm', 'Linh kiện điện tử', 'Dụng cụ chính xác', 'Lưu trữ chi tiết công nghiệp'],
    ctaTitle: 'Cần tư vấn kỹ thuật về bảo quản chân không? Nhận đánh giá nguồn cung chuyên nghiệp.',
    ctaBtn: 'Nhận đánh giá nguồn cung',
  },
  de: {
    kicker: 'VAKUUMVERPACKUNG',
    heroTitle: 'Vakuumverpackungsmaschine',
    heroSubtitle: 'Einkammer- und Doppelkammer-Vakuumverpackungsmaschinen zur Verlängerung der Lebensmittelhaltbarkeit und zur Verhinderung von Oxidation, Kontamination und Feuchtigkeit. Auch geeignet für Elektronikkomponenten und Präzisionsteile.',
    featuresTitle: 'Hauptmerkmale',
    features: [
      'Verlängert die Lebensmittelhaltbarkeit — verhindert Oxidation, Kontamination und Bakterienwachstum',
      'Schützt Elektronikbauteile und Präzisionsteile vor Korrosion, Staub und Feuchtigkeit',
      'Hochwertige Vakuumpumpe (1/2 bis 3 PS) mit niedriger Ausfallrate',
      'Stabile, feuchtigkeitsgeschützte Elektronikplatine für zuverlässigen Dauerbetrieb',
      'Einfach zu bedienendes Bedienfeld',
      'Doppel-Schweißstäbe bei WS-420 und WS-720 für gleichzeitiges Schweißen zweier Beutel',
      'Kammergrößen von 340×330×120 mm bis 805×560×140 mm',
      'Edelstahlinnere für Lebensmittelhygiene-Konformität',
    ],
    specsTitle: 'Technische Daten',
    applicationsTitle: 'Anwendungen',
    applications: ['Frischfleisch & Meeresfrüchte', 'Käse & Milchprodukte', 'Verarbeitete Lebensmittel', 'Nüsse & Trockenware', 'Medizin & Pharmazie', 'Elektronikkomponenten', 'Präzisionsinstrumente', 'Lagerung von Industrieteilen'],
    ctaTitle: 'Benötigen Sie technische Beratung zur Vakuumkonservierung? Fordern Sie eine Sourcing-Bewertung an.',
    ctaBtn: 'Bewertung anfordern',
  },
}

const SPEC_HEADERS = ['Model', 'Machine Size (L×W×H)', 'Chamber Size (L×W×H)', 'Sealer Length', 'Vacuum Pump', 'Electrical Heating']
const SPEC_ROWS = [
  ['WS-350', '370×440×880 mm', '340×330×120 mm', '310 mm', '1/2 HP', '0.4 KW'],
  ['WS-420', '690×580×910 mm', '480×450×140 mm', '420 mm × 2', '1 HP', '1 KW'],
  ['WS-720', '850×810×1300 mm', '805×560×140 mm', '720 mm × 2', '3 HP', '1.9 KW'],
]

const packagingLabels: Record<string, string> = {
  en: 'Packaging', cn: '包装机械', zh: '包裝機械', fr: 'Emballage', es: 'Embalaje',
  pt: 'Embalagem', ko: '포장', ja: '包装', ar: 'التغليف', th: 'บรรจุภัณฑ์', vi: 'Đóng gói', de: 'Verpackung',
}

export default async function VacuumPackingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content['en']

  const productSchema = buildWuushengProductSchema({
    lang,
    slug: 'vacuum-packing-machine',
    name: metaTitles[lang] || metaTitles.en,
    description: metaDescs[lang] || metaDescs.en,
    image: PRODUCT_IMAGE,
    sku: 'WS-VACUUM-PACKER',
    priceLow: 300, priceHigh: 2500, offerCount: 4,
    category: 'Vacuum Packaging Machines',
  })

  return (
    <>
      <JsonLd data={[productSchema]} />
      <PageHero
        kicker={t.kicker}
        title={t.heroTitle}
        desc={t.heroSubtitle}
        image={{ src: PRODUCT_IMAGE, alt: t.heroTitle, priority: true, aspectClassName: 'aspect-[16/9]' }}
      />
      <section className="bg-white py-6">
        <Container className="max-w-6xl">
          <Breadcrumbs lang={lang} items={[
            { label: BREADCRUMB_LABELS[lang]?.machinery ?? 'Machinery', href: `/${lang}/machinery` },
            { label: packagingLabels[lang] ?? 'Packaging', href: `/${lang}/machinery/packaging` },
            { label: t.heroTitle, href: `/${lang}/machines/vacuum-packing-machine` },
          ]} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100">
              <Image src={PRODUCT_IMAGE} alt={t.heroTitle} width={800} height={600} unoptimized className="h-full w-full object-contain p-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">{t.featuresTitle}</h2>
              <ul className="mt-6 space-y-4">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm leading-relaxed sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">{t.specsTitle}</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-brand-950 text-white">
                <tr>{SPEC_HEADERS.map((h, i) => <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SPEC_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                    {row.map((cell, j) => <td key={j} className="px-4 py-3 text-sm text-gray-700">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">{t.applicationsTitle}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {t.applications.map((a, i) => (
              <span key={i} className="rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700 ring-1 ring-accent-200">{a}</span>
            ))}
          </div>
        </Container>
      </section>

      <MachineDecisionGuide lang={lang} fitScenarios={t.applications} />

      <section className="bg-brand-950 py-16 sm:py-20">
        <Container className="max-w-4xl text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">{t.ctaTitle}</h2>
          <div className="mt-8">
            <ButtonLink href={`/${lang}/contact`} size="lg">{t.ctaBtn}</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
