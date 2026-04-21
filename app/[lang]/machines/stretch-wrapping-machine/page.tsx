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

const PRODUCT_IMAGE = 'https://img.mweb.com.tw/thumb/758/1000x1000/product/14_Stretch_Wrapping_Machine/01_Stretch_Wrapping_Machine/Stretch_Wrapping_Machine.jpg'

const metaTitles: Record<string, string> = {
  en: 'Stretch Wrapping Configuration Route | Pallet Stability & Export Readiness',
  cn: '缠绕包装配置路线 | 稳定性与出口准备',
  zh: '纏繞包裝配置路線 | 穩定性與出口準備',
  fr: 'Banderoleuse | Évaluation de sourcing technique',
  es: 'Enfardadora | Evaluación de abastecimiento técnico',
  pt: 'Envolvedora de pallet | Avaliação de sourcing técnico',
  ko: '스트레치 랩핑기 | 기술 소싱 및 통합 평가',
  ja: 'ストレッチラップ機 | 技術ソーシングと統合評価',
  ar: 'آلة لف التمدد | تقييم التوريد والتكامل التقني',
  th: 'เครื่องพันฟิล์มสเตรช | การประเมินการจัดซื้อและการรวมเทคนิค',
  vi: 'Máy quấn màng co giãn | Đánh giá nguồn cung và tích hợp kỹ thuật',
  de: 'Stretchwickelmaschine | Technische Sourcing-Bewertung',
}

const metaDescs: Record<string, string> = {
  en: 'Pallet wrapping sourcing support: verify load stability, film/stretch settings, and conveyor handoff; align FAT and shipping requirements before release.',
  cn: '托盘缠绕采购支持：确认堆栈稳定、拉伸膜参数与输送衔接，并在放行前对齐 FAT 与出货要求。',
  zh: '棧板纏繞採購支援：確認堆棧穩定、拉伸膜參數與輸送銜接，並在放行前對齊 FAT 與出貨要求。',
  fr: 'Sourcing technique pour banderoleuses de palettes. Nous assurons la validation des fournisseurs et la vérification technique pour la série WSV.',
  es: 'Abastecimiento técnico para enfardadoras de palés. Proporcionamos auditoría de proveedores y verificación de ingeniería para la serie WSV.',
  pt: 'Sourcing técnico para envolvedoras de pallet. Oferecemos auditoria de fornecedores e verificação de engenharia para a série WSV.',
  ko: '팔레트 스트레치 랩핑기 기술 소싱. WSV 시리즈에 대한 공급업체 심사 및 엔지니어링 검증을 통해 안전한 수출 물류를 보장합니다.',
  ja: 'パレットストレッチラッパーの技術ソーシング。WSVシリーズのサプライヤー審査と技術検証により、安全な輸出物流を実現します。',
  ar: 'التوريد التقني لآلات لف الطبق. نحن نقدم تدقيق الموردين والتحقق الهندسي لسلسلة WSV لضمان الخدمات اللوجستية للتصدير الآمن.',
  th: 'การจัดซื้อเชิงเทคนิคสำหรับเครื่องพันฟิล์มพาเลท เราให้บริการตรวจสอบซัพพลายเออร์และยืนยันทางวิศวกรรมสำหรับซีรีส์ WSV',
  vi: 'Nguồn cung kỹ thuật cho máy quấn pallet. Chúng tôi cung cấp dịch vụ thẩm định nhà cung cấp và xác minh kỹ thuật cho dòng WSV.',
  de: 'Technisches Sourcing für Palettenwickler. Wir bieten Lieferantenprüfung und technische Verifizierung für die WSV-Serie.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/machines/stretch-wrapping-machine',
    type: 'website',
    keywords: ['stretch wrapping configuration', 'pallet stability verification', 'film tension setting', 'FAT checklist', 'shipping readiness', 'supplier vetting', 'documentation handoff'],
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
    kicker: 'PALLET WRAPPING',
    heroTitle: 'Stretch Wrapping Machine',
    heroSubtitle: 'Turntable-based pallet stretch wrapping machines that secure goods on pallets for safe storage and transport. Prevents damage during delivery, keeps loads clean, and reduces product loss. Two turntable sizes — 1500mm and 1800mm — for standard and oversized pallets.',
    featuresTitle: 'Key Features',
    features: [
      'Speed-adjustable stretch film carriage with smooth vertical movement via inverter control',
      'Stable turntable with adjustable speed (5–15 RPM) for consistent, tight wrapping',
      'Inverter-controlled motors for steady, vibration-free operation',
      'Two-notch base for easy forklift loading and pallet positioning',
      'Photoelectric height sensor automatically reads pallet height — no manual adjustment needed',
      'Pre-stretch film system available as option to reduce film consumption by up to 200%',
      'Wrapping height up to 2100mm to accommodate tall pallets',
      'Available turntable diameters: 1500mm (WSV-1521) and 1800mm (WSV-1821)',
    ],
    specsTitle: 'Technical Specifications',
    applicationsTitle: 'Applications',
    applications: ['Export goods palletizing', 'Warehouse bundling', 'Food & beverage pallets', 'Carton & case stacking', 'Paint & chemical drums', 'Glass & fragile goods', 'Plastic & industrial resin', 'Electronics & appliances'],
    ctaTitle: 'Need technical advice on securing pallets for export? Request a professional sourcing assessment for the WSV series.',
    ctaBtn: 'Get Sourcing Assessment',
  },
  cn: {
    kicker: '托盘缠绕',
    heroTitle: '缠绕膜包装机',
    heroSubtitle: '转台式托盘缠绕机，将货物牢固捆绑在托盘上，保障储运安全。防止运输中损坏，保持货物清洁，减少货损。1500mm和1800mm两种转台尺寸，适应标准及超大托盘。',
    featuresTitle: '主要特点',
    features: [
      '拉伸膜架速度可调，变频控制，上下移动顺畅',
      '转台速度可调（5-15RPM），缠绕均匀紧实',
      '变频电机驱动，运行平稳无振动',
      '底座双凹槽，叉车装卸方便，托盘定位灵活',
      '光电高度传感器自动检测托盘高度，无需手动调整',
      '可选预拉伸系统，薄膜用量减少高达200%',
      '缠绕高度最高2100mm，适应高托盘',
      '转台直径可选：1500mm（WSV-1521）或1800mm（WSV-1821）',
    ],
    specsTitle: '技术规格',
    applicationsTitle: '应用领域',
    applications: ['出口商品托盘化', '仓库捆扎', '食品饮料托盘', '纸箱码垛', '涂料与化工桶', '玻璃与易碎品', '塑料与工业树脂', '电子与家电'],
    ctaTitle: '需要出口托盘固定的技术建议？申请WSV系列的专业采购评估。',
    ctaBtn: '获取采购评估',
  },
  zh: {
    kicker: '棧板纏繞',
    heroTitle: '纏繞膜包裝機',
    heroSubtitle: '轉台式棧板纏繞機，將貨物牢固捆綁在棧板上，保障儲運安全。防止運輸中損壞，保持貨物清潔，減少貨損。1500mm和1800mm兩種轉台尺寸，適應標準及超大棧板。',
    featuresTitle: '主要特點',
    features: [
      '拉伸膜架速度可調，變頻控制，上下移動順暢',
      '轉台速度可調（5-15RPM），纏繞均勻緊實',
      '變頻電機驅動，運行平穩無振動',
      '底座雙凹槽，叉車裝卸方便，棧板定位靈活',
      '光電高度感測器自動偵測棧板高度，無需手動調整',
      '可選預拉伸系統，薄膜用量減少高達200%',
      '纏繞高度最高2100mm，適應高棧板',
      '轉台直徑可選：1500mm（WSV-1521）或1800mm（WSV-1821）',
    ],
    specsTitle: '技術規格',
    applicationsTitle: '應用領域',
    applications: ['出口商品棧板化', '倉庫捆紮', '食品飲料棧板', '紙箱碼垛', '塗料與化工桶', '玻璃與易碎品', '塑料與工業樹脂', '電子與家電'],
    ctaTitle: '需要出口棧板固定的技術建議？申請WSV系列的專業採購評估。',
    ctaBtn: '獲取採購評估',
  },
  fr: {
    kicker: 'BANDEROLAGE DE PALETTES',
    heroTitle: 'Banderoleuse',
    heroSubtitle: 'Banderoleuses à plateau tournant pour sécuriser les charges sur palettes pour le stockage et le transport. Deux diamètres de plateau — 1500 mm et 1800 mm — pour palettes standard et extra-larges.',
    featuresTitle: 'Caractéristiques principales',
    features: [
      'Chariot film à vitesse réglable avec mouvement vertical fluide par variateur',
      'Plateau tournant stable à vitesse réglable (5–15 tr/min) pour un banderolage serré',
      'Moteurs contrôlés par variateur pour un fonctionnement régulier sans vibrations',
      'Base à deux encoches pour chargement facile au chariot élévateur',
      'Capteur photoélectrique de hauteur — détection automatique sans réglage manuel',
      'Système de pré-étirement optionnel pour réduire la consommation de film jusqu\'à 200%',
      'Hauteur de banderolage jusqu\'à 2100 mm',
      'Plateaux disponibles : 1500 mm (WSV-1521) et 1800 mm (WSV-1821)',
    ],
    specsTitle: 'Spécifications techniques',
    applicationsTitle: 'Applications',
    applications: ['Palettisation de marchandises export', 'Groupage en entrepôt', 'Palettes alimentaires et boissons', 'Empilage de cartons', 'Fûts de peinture et produits chimiques', 'Verre et produits fragiles', 'Plastiques et résines industrielles', 'Électronique et électroménager'],
    ctaTitle: 'Besoin d\'un conseil technique pour l\'export ? Demandez une évaluation de sourcing professionnelle.',
    ctaBtn: 'Obtenir une évaluation',
  },
  es: {
    kicker: 'FLEJADO DE PALÉS',
    heroTitle: 'Enfardadora',
    heroSubtitle: 'Enfardadoras de palés con plataforma giratoria para asegurar la carga en palés para almacenamiento y transporte. Dos diámetros de plataforma — 1500 mm y 1800 mm — para palés estándar y sobredimensionados.',
    featuresTitle: 'Características principales',
    features: [
      'Carro de film de velocidad ajustable con movimiento vertical suave por variador',
      'Plataforma giratoria estable con velocidad ajustable (5–15 RPM)',
      'Motores controlados por variador para operación estable sin vibraciones',
      'Base de dos muescas para carga fácil con carretilla elevadora',
      'Sensor fotoeléctrico de altura — detección automática sin ajuste manual',
      'Sistema de preestiramiento opcional para reducir consumo de film hasta 200%',
      'Altura de enfardado hasta 2100 mm',
      'Plataformas disponibles: 1500 mm (WSV-1521) y 1800 mm (WSV-1821)',
    ],
    specsTitle: 'Especificaciones técnicas',
    applicationsTitle: 'Aplicaciones',
    applications: ['Paletización de mercancías de exportación', 'Agrupamiento en almacén', 'Palés de alimentos y bebidas', 'Apilado de cajas', 'Barriles de pintura y productos químicos', 'Vidrio y productos frágiles', 'Plásticos y resinas industriales', 'Electrónica y electrodomésticos'],
    ctaTitle: '¿Necesita asesoramiento técnico para exportación? Solicite una evaluación de abastecimiento.',
    ctaBtn: 'Obtener evaluación',
  },
  pt: {
    kicker: 'EMBRULHO DE PALLET',
    heroTitle: 'Envolvedora de pallet',
    heroSubtitle: 'Envolvedoras de pallet com plataforma giratória para proteger cargas em pallets para armazenamento e transporte. Dois diâmetros de plataforma — 1500 mm e 1800 mm — para pallets padrão e extra-largos.',
    featuresTitle: 'Principais características',
    features: [
      'Carro de filme com velocidade ajustável e movimento vertical suave por inversor',
      'Plataforma giratória estável com velocidade ajustável (5–15 RPM)',
      'Motores controlados por inversor para operação estável sem vibrações',
      'Base com dois entalhes para fácil carregamento com empilhadeira',
      'Sensor fotoelétrico de altura — detecção automática sem ajuste manual',
      'Sistema de pré-estiramento opcional para reduzir consumo de filme em até 200%',
      'Altura de embrulho até 2100 mm',
      'Plataformas disponíveis: 1500 mm (WSV-1521) e 1800 mm (WSV-1821)',
    ],
    specsTitle: 'Especificações técnicas',
    applicationsTitle: 'Aplicações',
    applications: ['Paletização de exportação', 'Agrupamento em armazém', 'Pallets de alimentos e bebidas', 'Empilhamento de caixas', 'Tambores de tinta e produtos químicos', 'Vidro e produtos frágeis', 'Plásticos e resinas industriais', 'Eletrônicos e eletrodomésticos'],
    ctaTitle: 'Precisa de consultoria técnica para exportação? Peça uma avaliação de sourcing.',
    ctaBtn: 'Obter avaliação',
  },
  ko: {
    kicker: '팔레트 랩핑',
    heroTitle: '스트레치 랩핑기',
    heroSubtitle: '팔레트 위에 상품을 안전하게 고정하는 턴테이블식 스트레치 랩핑기. 운송 중 손상을 방지하고 화물을 청결하게 유지합니다. 1500mm와 1800mm 두 가지 턴테이블 크기로 표준 및 대형 팔레트에 대응합니다.',
    featuresTitle: '주요 특징',
    features: [
      '인버터 제어로 필름 캐리지 속도 조절 및 부드러운 상하 이동',
      '안정적인 턴테이블, 속도 조절 가능(5~15RPM), 균일하고 단단한 랩핑',
      '인버터 제어 모터로 안정적, 무진동 운전',
      '베이스 2-노치 디자인으로 지게차 로딩·팔레트 위치 조정 용이',
      '광전식 높이 센서가 팔레트 높이를 자동 감지 — 수동 조정 불필요',
      '사전 인장 시스템 옵션으로 필름 소모량 최대 200% 절감',
      '랩핑 높이 최대 2100mm로 높은 팔레트도 커버',
      '턴테이블 직경: 1500mm(WSV-1521), 1800mm(WSV-1821)',
    ],
    specsTitle: '기술 사양',
    applicationsTitle: '적용 분야',
    applications: ['수출 상품 팔레타이징', '창고 번들링', '식품·음료 팔레트', '카톤·케이스 적재', '페인트·화학 드럼', '유리·파손 주의 제품', '플라스틱·공업용 수지', '전자제품·가전'],
    ctaTitle: '수출을 위한 기술적 조언이 필요하십니까? WSV 시리즈 소싱 평가를 신청하세요.',
    ctaBtn: '소싱 평가 받기',
  },
  ja: {
    kicker: 'パレット包装',
    heroTitle: 'ストレッチラップ機',
    heroSubtitle: 'ターンテーブル式パレットストレッチラッパーで、保管・輸送のためにパレット上の荷物を安全に固定します。1500mmと1800mmの2種類のターンテーブル径で標準・大型パレットに対応。',
    featuresTitle: '主な特長',
    features: [
      'インバータ制御でフィルムキャリッジ速度を調整、スムーズな上下移動',
      '安定したターンテーブルに速度調整機能（5〜15RPM）、均一で堅固な巻き付け',
      'インバータ制御モータで安定・無振動運転',
      'ベース2溝設計でフォークリフト積載・位置決めが容易',
      '光電センサーがパレット高さを自動検出 — 手動調整不要',
      'プリストレッチシステムオプションでフィルム消費量を最大200%削減',
      '巻き付け高さ最大2100mm、背の高いパレットにも対応',
      'ターンテーブル径：1500mm（WSV-1521）・1800mm（WSV-1821）',
    ],
    specsTitle: '技術仕様',
    applicationsTitle: '適用分野',
    applications: ['輸出品パレタイジング', '倉庫バンドリング', '食品・飲料パレット', 'カートン・ケース積み', '塗料・化学品ドラム', 'ガラス・精密品', 'プラスチック・工業用樹脂', '電子機器・家電'],
    ctaTitle: '輸出パレット固定の技術相談が必要ですか？WSVシリーズのソーシング評価をご依頼ください。',
    ctaBtn: 'ソーシング評価を依頼',
  },
  ar: {
    kicker: 'تلفيف الطبق',
    heroTitle: 'آلة لف التمدد',
    heroSubtitle: 'ملفوفات طبق دوار لتثبيت البضائع على الطبق للتخزين الآمن والنقل. قطرا طبق 1500 مم و1800 مم للطبق القياسي وكبير الحجم.',
    featuresTitle: 'الميزات الرئيسية',
    features: [
      'حامل فيلم قابل لضبط السرعة مع حركة عمودية سلسة عبر محول التردد',
      'طبق دوار مستقر بسرعة قابلة للضبط (5–15 دورة/دقيقة)',
      'محركات يتحكم بها محول تردد لتشغيل منتظم بدون اهتزاز',
      'قاعدة بفتحتين لتحميل سهل بالرافعة الشوكية',
      'مستشعر ضوئي لقراءة ارتفاع الطبق تلقائيًا — بدون ضبط يدوي',
      'نظام ما قبل الشد الاختياري لتوفير استهلاك الفيلم حتى 200%',
      'ارتفاع لف يصل إلى 2100 مم',
      'أقطار الطبق: 1500 مم (WSV-1521) و1800 مم (WSV-1821)',
    ],
    specsTitle: 'المواصفات التقنية',
    applicationsTitle: 'التطبيقات',
    applications: ['تلفيف بضائع التصدير', 'ربط المستودع', 'طبق الأغذية والمشروبات', 'تكديس الكراتين', 'براميل الدهانات والمواد الكيميائية', 'الزجاج والبضائع الهشة', 'البلاستيك والراتنج الصناعي', 'الإلكترونيات والأجهزة'],
    ctaTitle: 'هل تحتاج إلى نصيحة تقنية لتأمين الشحنات؟ اطلب تقييم توريد احترافي لسلسلة WSV.',
    ctaBtn: 'طلب تقييم التوريد',
  },
  th: {
    kicker: 'พันฟิล์มพาเลท',
    heroTitle: 'เครื่องพันฟิล์มสเตรช',
    heroSubtitle: 'เครื่องพันฟิล์มพาเลทแบบจานหมุนสำหรับยึดสินค้าบนพาเลทเพื่อการเก็บและขนส่งที่ปลอดภัย จานหมุนสองขนาด 1500mm และ 1800mm รองรับพาเลทมาตรฐานและขนาดใหญ่พิเศษ',
    featuresTitle: 'คุณสมบัติหลัก',
    features: [
      'รถฟิล์มปรับความเร็วได้ เคลื่อนที่ขึ้นลงราบเรียบด้วยอินเวอร์เตอร์',
      'จานหมุนมั่นคง ปรับความเร็วได้ 5-15 รอบ/นาที พันฟิล์มสม่ำเสมอ',
      'มอเตอร์ควบคุมด้วยอินเวอร์เตอร์ ทำงานเรียบ ไม่มีการสั่น',
      'ฐานมีร่อง 2 จุด รองรับรถยกเพื่อการโหลดและจัดตำแหน่งพาเลทได้ง่าย',
      'เซ็นเซอร์แสงอ่านความสูงพาเลทอัตโนมัติ ไม่ต้องปรับด้วยมือ',
      'ระบบ Pre-stretch เป็นออพชัน ลดการใช้ฟิล์มได้ถึง 200%',
      'พันได้สูงถึง 2100mm รองรับพาเลทสูง',
      'เส้นผ่าศูนย์กลางจาน: 1500mm (WSV-1521) และ 1800mm (WSV-1821)',
    ],
    specsTitle: 'ข้อมูลจำเพาะทางเทคนิค',
    applicationsTitle: 'การใช้งาน',
    applications: ['จัดพาเลทสินค้าส่งออก', 'มัดรวมในคลังสินค้า', 'พาเลทอาหารและเครื่องดื่ม', 'วางซ้อนกล่องและลัง', 'ถังสีและสารเคมี', 'แก้วและสินค้าแตกง่าย', 'พลาสติกและเรซินอุตสาหกรรม', 'อิเล็กทรอนิกส์และเครื่องใช้ไฟฟ้า'],
    ctaTitle: 'ต้องการคำแนะนำด้านเทคนิคสำหรับการส่งออก? ขอรับการประเมินการจัดซื้อสำหรับซีรีส์ WSV',
    ctaBtn: 'ขอการประเมินการจัดซื้อ',
  },
  vi: {
    kicker: 'QUẤN MÀNG PALLET',
    heroTitle: 'Máy quấn màng co giãn',
    heroSubtitle: 'Máy quấn pallet dạng bàn xoay để cố định hàng hóa trên pallet cho bảo quản và vận chuyển an toàn. Hai đường kính bàn xoay — 1500mm và 1800mm — cho pallet tiêu chuẩn và cỡ lớn.',
    featuresTitle: 'Tính năng chính',
    features: [
      'Xe đẩy màng điều chỉnh tốc độ, di chuyển lên xuống mượt mà qua bộ biến tần',
      'Bàn xoay ổn định, điều chỉnh tốc độ được (5–15 RPM), quấn đều và chắc',
      'Động cơ điều khiển biến tần, vận hành ổn định không rung',
      'Đế 2 rãnh cho phép xe nâng dễ dàng di chuyển và định vị pallet',
      'Cảm biến quang tự động đo chiều cao pallet — không cần điều chỉnh tay',
      'Hệ thống pre-stretch tùy chọn giảm tiêu thụ màng tới 200%',
      'Chiều cao quấn tới 2100mm, phù hợp pallet cao',
      'Đường kính bàn xoay: 1500mm (WSV-1521) và 1800mm (WSV-1821)',
    ],
    specsTitle: 'Thông số kỹ thuật',
    applicationsTitle: 'Ứng dụng',
    applications: ['Ghép pallet hàng xuất khẩu', 'Bó hàng trong kho', 'Pallet thực phẩm & đồ uống', 'Xếp chồng thùng carton', 'Thùng sơn và hóa chất', 'Thủy tinh và hàng dễ vỡ', 'Nhựa và nhựa công nghiệp', 'Điện tử và thiết bị'],
    ctaTitle: 'Cần tư vấn kỹ thuật về đóng gói xuất khẩu? Nhận đánh giá nguồn cung cho dòng máy WSV.',
    ctaBtn: 'Nhận đánh giá nguồn cung',
  },
  de: {
    kicker: 'PALETTENWICKLUNG',
    heroTitle: 'Stretchwickelmaschine',
    heroSubtitle: 'Drehtisch-Palettenwickler, die Waren auf Paletten für sichere Lagerung und Transport sichern. Zwei Drehtischdurchmesser — 1500 mm und 1800 mm — für Standard- und Übergrößenpaletten.',
    featuresTitle: 'Hauptmerkmale',
    features: [
      'Geschwindigkeitsregelbarer Filmwagen mit sanfter Vertikalbewegung via Frequenzumrichter',
      'Stabiler Drehtisch mit einstellbarer Geschwindigkeit (5–15 U/min) für festes Wickeln',
      'Frequenzumrichter-gesteuerte Motoren für ruhigen, vibrationsfreien Betrieb',
      'Zwei-Kerb-Basis für einfache Gabelstaplerbewegung und Palettenpositionierung',
      'Photoelektrischer Höhensensor liest Palettenhöhe automatisch — kein manuelles Einstellen',
      'Optionales Vorstreckssystem reduziert Folienverbrauch um bis zu 200%',
      'Wickelhöhe bis 2100 mm für hohe Paletten',
      'Drehtischdurchmesser: 1500 mm (WSV-1521) und 1800 mm (WSV-1821)',
    ],
    specsTitle: 'Technische Daten',
    applicationsTitle: 'Anwendungen',
    applications: ['Palettenwicklung für Export', 'Lager-Bündelung', 'Lebensmittel- und Getränkepaletten', 'Karton- und Kistenpalettierung', 'Farbfässer und Chemikalien', 'Glas und Zerbrechliches', 'Kunststoffe und Industrieharze', 'Elektronik und Haushaltsgeräte'],
    ctaTitle: 'Benötigen Sie technische Beratung zur Ladungssicherung? Fordern Sie eine Sourcing-Bewertung an.',
    ctaBtn: 'Bewertung anfordern',
  },
}

const SPEC_HEADERS = ['Model', 'Packing Height', 'Turntable Diameter', 'Turntable Height', 'Turntable Speed', 'Electrical Heating', 'Machine Size (L×W×H)']
const SPEC_ROWS = [
  ['WSV-1521', '2100 mm', '1500 mm', '80 mm', '5–15 RPM', '1.2 KW', '2623×1500×2410 mm'],
  ['WSV-1821', '2100 mm', '1800 mm', '80 mm', '5–15 RPM', '1.5 KW', '2623×1500×2410 mm'],
]

const packagingLabels: Record<string, string> = {
  en: 'Packaging', cn: '包装机械', zh: '包裝機械', fr: 'Emballage', es: 'Embalaje',
  pt: 'Embalagem', ko: '포장', ja: '包装', ar: 'التغليف', th: 'บรรจุภัณฑ์', vi: 'Đóng gói', de: 'Verpackung',
}

export default async function StretchWrappingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = content[lang] || content['en']

  const productSchema = buildWuushengProductSchema({
    lang,
    slug: 'stretch-wrapping-machine',
    name: metaTitles[lang] || metaTitles.en,
    description: metaDescs[lang] || metaDescs.en,
    image: PRODUCT_IMAGE,
    sku: 'WS-STRETCH-WRAPPER',
    priceLow: 1500, priceHigh: 6000, offerCount: 4,
    category: 'Stretch Wrapping Machines',
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
            { label: t.heroTitle, href: `/${lang}/machines/stretch-wrapping-machine` },
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
