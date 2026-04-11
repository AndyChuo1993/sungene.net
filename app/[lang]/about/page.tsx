import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'
import Breadcrumbs from '@/components/Breadcrumbs'
import { COMPANY_FAQS } from '@/lib/companyFaq'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  const titles = {
    en: 'About SunGene | Industrial Machinery Manufacturer from Taiwan',
    cn: '关于 SunGene | 台湾工业机械制造商',
    zh: '關於 SunGene | 台灣工業機械製造商',
    fr: 'À propos de SunGene | Fabricant de machines industrielles de Taïwan',
    es: 'Acerca de SunGene | Fabricante de maquinaria industrial de Taiwán',
    pt: 'Sobre a SunGene | Fabricante de Máquinas Industriais de Taiwan',
    ko: 'SunGene 소개 | 대만 산업 기계 제조업체',
    ja: 'SunGeneについて | 台湾の産業機械メーカー',
    ar: 'عن SunGene | شركة تصنيع الآلات الصناعية من تايوان',
    th: 'เกี่ยวกับ SunGene | ผู้ผลิตเครื่องจักรอุตสาหกรรมจากไต้หวัน',
    vi: 'Về SunGene | Nhà sản xuất máy móc công nghiệp từ Đài Loan',
    de: 'Über SunGene | Industriemaschinenhersteller aus Taiwan',
  }
  const descriptions: Record<string, string> = {
    en: 'SunGene builds packaging, filling, food processing, and automation equipment in Taiwan for export projects and line integration.',
    cn: 'SunGene 在台湾制造包装、灌装、食品加工与自动化设备，面向出口项目与整线整合。',
    zh: 'SunGene 在台灣製造包裝、灌裝、食品加工與自動化設備，面向出口專案與整線整合。',
    fr: 'SunGene fabrique à Taïwan des équipements d’emballage, de remplissage, de process alimentaire et d’automatisation pour projets export et intégration de ligne.',
    es: 'SunGene fabrica en Taiwán equipos de empaque, llenado, procesamiento de alimentos y automatización para proyectos de exportación e integración de líneas.',
    pt: 'A SunGene fabrica em Taiwan equipamentos de embalagem, envase, processamento de alimentos e automação para exportação e integração de linha.',
    ko: 'SunGene은 대만에서 포장·충전·식품가공·자동화 설비를 제조하며, 수출 프로젝트와 라인 통합을 지원합니다.',
    ja: 'SunGeneは台湾で包装・充填・食品加工・自動化設備を製造し、輸出案件とライン統合に対応します。',
    ar: 'تصنع SunGene في تايوان معدات التعبئة والتغليف والتعبئة ومعالجة الأغذية والأتمتة لمشاريع التصدير وتكامل الخطوط.',
    th: 'SunGene ผลิตอุปกรณ์บรรจุภัณฑ์ บรรจุ/ซีล แปรรูปอาหาร และระบบอัตโนมัติในไต้หวัน สำหรับงานส่งออกและการรวมไลน์ผลิต',
    vi: 'SunGene sản xuất thiết bị đóng gói, chiết rót, chế biến thực phẩm và tự động hóa tại Đài Loan cho dự án xuất khẩu và tích hợp dây chuyền.',
    de: 'SunGene fertigt in Taiwan Verpackungs-, Abfüll-, Lebensmittelprozess- und Automatisierungstechnik für Exportprojekte und Linienintegration.',
  }

  return buildPageMetadata({
    lang: l,
    title: (titles as Record<string, string>)[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    pathname: '/about',
    type: 'website',
    keywords: ['SunGene', 'Taiwan machinery manufacturer', 'packaging machinery', 'food processing equipment', 'filling machine', 'industrial automation'],
  })
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      kicker: 'ABOUT SUNGENE',
      title: 'Industrial Machinery Manufacturer in Taiwan',
      intro: 'SunGene manufactures packaging, filling & sealing, food processing, and conveying/automation equipment in Taichung, Taiwan. For export projects, we confirm your product, packaging format, target output, and local voltage/frequency before quotation.',
      mission: 'Typical workflow: share requirements → we propose machine type and options → confirm utilities and drawings → factory test (FAT) with video → export crating and documents → shipment support.',
      stats: [
        { value: '15+', label: 'Years of Manufacturing' },
        { value: '500+', label: 'Machines Delivered' },
        { value: '50+', label: 'Export Countries' },
        { value: '100%', label: 'CE Certified' },
      ],
      strengthsTitle: 'Our Strengths',
      strengths: [
        { title: 'In-House Manufacturing', desc: 'Fabrication, wiring, assembly, and factory tests are handled in our Taichung facility. You receive test results and videos before shipment.' },
        { title: 'Engineering-First Selection', desc: 'We select by product behavior, hygiene level, packaging format, and target speed. Quotes are based on confirmed technical inputs.' },
        { title: 'Export-Ready Delivery', desc: 'Supports 110/220/380/480V, 50/60Hz. CE documentation, manuals, export packing, and shipping coordination are available.' },
      ],
      ctaTitle: 'Request a Quote',
      ctaDesc: 'Send your product, package/bag type, fill range, target speed, and destination voltage/frequency.',
      ctaBtn: 'Get a Free Quote',
    },
    cn: {
      kicker: '关于我们',
      title: '台湾工业机械制造商',
      intro: 'SunGene 在台湾台中制造包装、灌装与封口、食品加工、输送与自动化设备。针对出口项目，我们会先确认产品特性、包装形式、目标产能以及目的地电压/频率，再进入报价。',
      mission: '常见流程：提交需求 → 推荐机型与选配 → 确认公用工程与图纸 → 工厂测试（含视频）→ 出口包装与文件 → 协助出货。',
      stats: [
        { value: '15+', label: '年制造经验' },
        { value: '500+', label: '台设备交付' },
        { value: '50+', label: '个出口国家' },
        { value: '100%', label: 'CE认证' },
      ],
      strengthsTitle: '我们的优势',
      strengths: [
        { title: '自有工厂制造', desc: '在台中完成加工、配线、组装与出厂测试。出货前提供测试记录与视频。' },
        { title: '以工程条件选型', desc: '按产品特性、卫生等级、包装形式与目标速度选型，报价基于已确认的技术输入。' },
        { title: '出口交付能力', desc: '支持 110/220/380/480V、50/60Hz；提供 CE 文件、说明书、出口包装与物流协调。' },
      ],
      ctaTitle: '获取报价',
      ctaDesc: '请提供产品、包装/容器形式、灌装范围、目标速度，以及目的地电压/频率。',
      ctaBtn: '获取免费报价',
    },
    zh: {
      kicker: '關於我們',
      title: '台灣工業機械製造商',
      intro: 'SunGene 在台灣台中製造包裝、灌裝與封口、食品加工、輸送與自動化設備。針對出口專案，我們會先確認產品特性、包材形式、目標產能，以及目的地電壓/頻率，再進入報價。',
      mission: '常見流程：提交需求 → 推薦機型與選配 → 確認公用工程與圖面 → 工廠測試（含影片）→ 出口包裝與文件 → 協助出貨。',
      stats: [
        { value: '15+', label: '年製造經驗' },
        { value: '500+', label: '台設備交付' },
        { value: '50+', label: '個出口國家' },
        { value: '100%', label: 'CE認證' },
      ],
      strengthsTitle: '我們的優勢',
      strengths: [
        { title: '自有工廠製造', desc: '在台中完成加工、配線、組裝與出廠測試。出貨前提供測試紀錄與影片。' },
        { title: '以工程條件選型', desc: '依產品特性、衛生等級、包裝形式與目標速度選型，報價基於已確認的技術輸入。' },
        { title: '出口交付能力', desc: '支援 110/220/380/480V、50/60Hz；提供 CE 文件、說明書、出口包裝與物流協調。' },
      ],
      ctaTitle: '取得報價',
      ctaDesc: '請提供產品、包材/容器形式、灌裝範圍、目標速度，以及目的地電壓/頻率。',
      ctaBtn: '取得免費報價',
    },
    fr: {
      kicker: 'À PROPOS DE SUNGENE',
      title: 'Fabricant de machines industrielles à Taïwan',
      intro: 'SunGene fabrique à Taichung (Taïwan) des équipements d’emballage, de remplissage/scellage, de process alimentaire et d’automatisation. Pour l’export, nous validons d’abord le produit, le format, la cadence cible et la tension/fréquence locales avant devis.',
      mission: 'Processus type : besoin → proposition de solution → validation utilités/plans → tests usine (vidéo) → mise en caisse & documents → coordination d’expédition.',
      stats: [
        { value: '15+', label: 'Années de fabrication' },
        { value: '500+', label: 'Machines livrées' },
        { value: '50+', label: 'Pays d\'exportation' },
        { value: '100%', label: 'Certifié CE' },
      ],
      strengthsTitle: 'Nos atouts',
      strengths: [
        { title: 'Fabrication en interne', desc: 'Usinage, câblage, assemblage et tests sont réalisés à Taichung. Nous fournissons des résultats et vidéos de test avant expédition.' },
        { title: 'Sélection technique', desc: 'Choix basé sur le comportement produit, le niveau d’hygiène, le format et la cadence. Devis sur données techniques validées.' },
        { title: 'Livraison export', desc: 'Options 110/220/380/480V, 50/60Hz. Dossiers CE, manuels, mise en caisse export et coordination logistique.' },
      ],
      ctaTitle: 'Demander un devis',
      ctaDesc: 'Indiquez produit, format de sachet/contenant, plage de remplissage, cadence cible et tension/fréquence du pays.',
      ctaBtn: 'Devis gratuit',
    },
    es: {
      kicker: 'SOBRE SUNGENE',
      title: 'Fabricante de maquinaria industrial en Taiwán',
      intro: 'SunGene fabrica en Taichung (Taiwán) equipos de empaque, llenado/sellado, procesamiento de alimentos y automatización. Para proyectos de exportación, confirmamos producto, formato, velocidad objetivo y voltaje/frecuencia antes de cotizar.',
      mission: 'Flujo típico: requisitos → propuesta de solución → validación de utilidades/planos → prueba en fábrica (video) → embalaje export y documentos → coordinación de envío.',
      stats: [
        { value: '15+', label: 'Años de fabricación' },
        { value: '500+', label: 'Máquinas entregadas' },
        { value: '50+', label: 'Países de exportación' },
        { value: '100%', label: 'Certificado CE' },
      ],
      strengthsTitle: 'Nuestras fortalezas',
      strengths: [
        { title: 'Fabricación propia', desc: 'Maquinado, cableado, ensamblaje y pruebas se realizan en Taichung. Entregamos resultados y videos de prueba antes del envío.' },
        { title: 'Selección técnica', desc: 'Seleccionamos por comportamiento del producto, higiene, formato y velocidad. La cotización se basa en datos técnicos confirmados.' },
        { title: 'Entrega para exportación', desc: 'Opciones 110/220/380/480V, 50/60Hz. Documentación CE, manuales, embalaje para exportación y coordinación logística.' },
      ],
      ctaTitle: 'Solicitar cotización',
      ctaDesc: 'Comparta producto, tipo de bolsa/envase, rango de llenado, velocidad objetivo y voltaje/frecuencia del destino.',
      ctaBtn: 'Cotización gratuita',
    },
    pt: {
      kicker: 'SOBRE A SUNGENE',
      title: 'Fabricante de máquinas industriais em Taiwan',
      intro: 'A SunGene fabrica em Taichung (Taiwan) equipamentos de embalagem, envase/selagem, processamento de alimentos e automação. Para exportação, confirmamos produto, formato, velocidade-alvo e tensão/frequência antes do orçamento.',
      mission: 'Fluxo típico: requisitos → proposta → validação de utilidades/plantas → teste de fábrica (vídeo) → embalagem export e documentos → coordenação de envio.',
      stats: [
        { value: '15+', label: 'Anos de fabricação' },
        { value: '500+', label: 'Máquinas entregues' },
        { value: '50+', label: 'Países de exportação' },
        { value: '100%', label: 'Certificação CE' },
      ],
      strengthsTitle: 'Nossos diferenciais',
      strengths: [
        { title: 'Fabricação própria', desc: 'Usinagem, elétrica, montagem e testes em Taichung. Enviamos resultados e vídeos de teste antes do despacho.' },
        { title: 'Seleção técnica', desc: 'Escolha por comportamento do produto, higiene, formato e velocidade. Orçamento baseado em dados técnicos confirmados.' },
        { title: 'Entrega para exportação', desc: 'Opções 110/220/380/480V, 50/60Hz. Documentação CE, manuais, embalagem de exportação e coordenação logística.' },
      ],
      ctaTitle: 'Solicitar orçamento',
      ctaDesc: 'Informe produto, tipo de embalagem/recipiente, faixa de enchimento, velocidade-alvo e tensão/frequência do destino.',
      ctaBtn: 'Solicitar orçamento grátis',
    },
    ko: {
      kicker: 'SUNGENE 소개',
      title: '대만 산업용 기계 제조사',
      intro: 'SunGene은 대만 타이중에서 포장, 충전·밀봉, 식품 가공, 컨베이어·자동화 설비를 제조합니다. 수출 프로젝트는 제품/포장 형식/목표 속도와 현지 전압·주파수 확인 후 견적을 진행합니다.',
      mission: '일반 흐름: 요구사항 공유 → 솔루션 제안 → 유틸리티/도면 확정 → 공장 시험(FAT, 영상 제공) → 수출 포장·서류 → 선적 지원.',
      stats: [
        { value: '15+', label: '년 제조 경험' },
        { value: '500+', label: '대 장비 납품' },
        { value: '50+', label: '개국 수출' },
        { value: '100%', label: 'CE 인증' },
      ],
      strengthsTitle: '우리의 강점',
      strengths: [
        { title: '자체 생산 및 시험', desc: '가공·배선·조립·출하 시험을 타이중에서 수행합니다. 출하 전 시험 결과와 영상을 제공합니다.' },
        { title: '기술 기반 선정', desc: '분말/액상 특성, 위생 수준, 포장 형식, 목표 속도 기준으로 구성합니다. 견적은 확인된 조건을 기준으로 합니다.' },
        { title: '수출 대응', desc: '110/220/380/480V, 50/60Hz 지원. CE 서류, 매뉴얼, 수출 포장 및 물류 조율이 가능합니다.' },
      ],
      ctaTitle: '견적 요청',
      ctaDesc: '제품, 포장/용기 형식, 충전 범위, 목표 속도, 목적지 전압·주파수를 보내주세요.',
      ctaBtn: '무료 견적 받기',
    },
    ja: {
      kicker: 'SUNGENEについて',
      title: '台湾の産業機械メーカー',
      intro: 'SunGeneは台湾・台中で、包装、充填・シール、食品加工、搬送・自動化設備を製造しています。輸出案件は、製品・包装形態・目標能力と現地の電圧/周波数を確認してから見積します。',
      mission: '一般的な流れ：要件共有 → 方案提案 → ユーティリティ/図面確認 → 工場試験（FAT・動画）→ 輸出梱包と書類 → 出荷サポート。',
      stats: [
        { value: '15+', label: '年の製造実績' },
        { value: '500+', label: '台の納入実績' },
        { value: '50+', label: 'カ国への輸出' },
        { value: '100%', label: 'CE認証取得' },
      ],
      strengthsTitle: '私たちの強み',
      strengths: [
        { title: '自社製造・試験', desc: '加工、配線、組立、出荷前試験を台中で実施。出荷前に試験結果と動画を共有します。' },
        { title: '技術条件で選定', desc: '製品特性、衛生レベル、包装形態、目標能力で構成。見積は確認済みの技術条件を前提に作成します。' },
        { title: '輸出対応', desc: '110/220/380/480V、50/60Hzに対応。CE書類、マニュアル、輸出梱包、物流調整が可能です。' },
      ],
      ctaTitle: '見積依頼',
      ctaDesc: '製品、袋/容器の形式、充填範囲、目標能力、仕向地の電圧/周波数をご共有ください。',
      ctaBtn: '無料見積もりを取得',
    },
    ar: {
      kicker: 'عن SUNGENE',
      title: 'مصنّع آلات صناعية في تايوان',
      intro: 'تصنع SunGene في تايتشونغ (تايوان) معدات التعبئة والتغليف، التعبئة/الختم، معالجة الأغذية، وأنظمة النقل/الأتمتة. لمشاريع التصدير نؤكد نوع المنتج وشكل العبوة والسرعة المطلوبة ومعيار الجهد/التردد قبل التسعير.',
      mission: 'سير العمل المعتاد: مشاركة المتطلبات → اقتراح الحل → تأكيد المرافق والرسومات → اختبار المصنع (فيديو) → تعبئة التصدير والوثائق → تنسيق الشحن.',
      stats: [
        { value: '15+', label: 'سنة من التصنيع' },
        { value: '500+', label: 'آلة تم تسليمها' },
        { value: '50+', label: 'دولة تصدير' },
        { value: '100%', label: 'شهادة CE' },
      ],
      strengthsTitle: 'نقاط قوتنا',
      strengths: [
        { title: 'تصنيع واختبار داخلي', desc: 'التصنيع والتوصيل الكهربائي والتجميع والاختبارات تتم في تايتشونغ. نوفر نتائج وفيديوهات الاختبار قبل الشحن.' },
        { title: 'اختيار وفق شروط تقنية', desc: 'نحدد الحل حسب خصائص المنتج ومستوى النظافة وشكل العبوة والقدرة المطلوبة. التسعير يعتمد على بيانات مؤكدة.' },
        { title: 'جاهزية للتصدير', desc: 'خيارات 110/220/380/480V و50/60Hz. مستندات CE، كتيبات، تعبئة تصدير وتنسيق لوجستي.' },
      ],
      ctaTitle: 'طلب عرض سعر',
      ctaDesc: 'أرسل نوع المنتج وشكل العبوة ونطاق التعبئة والسرعة المطلوبة ومعيار الجهد/التردد في بلدك.',
      ctaBtn: 'احصل على عرض سعر مجاني',
    },
    th: {
      kicker: 'เกี่ยวกับ SUNGENE',
      title: 'ผู้ผลิตเครื่องจักรอุตสาหกรรมในไต้หวัน',
      intro: 'SunGene ผลิตอุปกรณ์บรรจุภัณฑ์ บรรจุ/ซีล แปรรูปอาหาร และระบบลำเลียง/อัตโนมัติที่ไถจง ไต้หวัน สำหรับงานส่งออก เราจะยืนยันสินค้า รูปแบบบรรจุภัณฑ์ ความเร็วเป้าหมาย และแรงดัน/ความถี่ก่อนเสนอราคา',
      mission: 'ขั้นตอนทั่วไป: ส่งความต้องการ → เสนอแนวทางเครื่องและออปชัน → ยืนยันยูทิลิตี้/แบบ → ทดสอบโรงงาน (มีวิดีโอ) → แพ็กกิ้งส่งออกและเอกสาร → ประสานการขนส่ง',
      stats: [
        { value: '15+', label: 'ปีด้านการผลิต' },
        { value: '500+', label: 'เครื่องจักรที่ส่งมอบ' },
        { value: '50+', label: 'ประเทศที่ส่งออก' },
        { value: '100%', label: 'ได้รับรอง CE' },
      ],
      strengthsTitle: 'จุดแข็งของเรา',
      strengths: [
        { title: 'ผลิตและทดสอบในโรงงาน', desc: 'งานผลิต เดินสาย ประกอบ และทดสอบทำที่ไถจง ส่งผลทดสอบและวิดีโอก่อนจัดส่ง' },
        { title: 'เลือกตามเงื่อนไขเทคนิค', desc: 'เลือกตามคุณสมบัติสินค้า สุขอนามัย รูปแบบแพ็ก และกำลังการผลิต เปรียบเทียบจากข้อมูลที่ยืนยันแล้ว' },
        { title: 'รองรับงานส่งออก', desc: 'รองรับ 110/220/380/480V และ 50/60Hz จัดเตรียมเอกสาร CE คู่มือ แพ็กกิ้งส่งออก และประสานโลจิสติกส์' },
      ],
      ctaTitle: 'ขอใบเสนอราคา',
      ctaDesc: 'ส่งรายละเอียดสินค้า รูปแบบถุง/ภาชนะ ช่วงการบรรจุ ความเร็วเป้าหมาย และแรงดัน/ความถี่ปลายทาง',
      ctaBtn: 'ขอใบเสนอราคาฟรี',
    },
    vi: {
      kicker: 'VỀ SUNGENE',
      title: 'Nhà sản xuất máy móc công nghiệp tại Đài Loan',
      intro: 'SunGene sản xuất tại Đài Trung (Đài Loan) thiết bị đóng gói, chiết rót/hàn kín, chế biến thực phẩm và băng tải/tự động hóa. Với dự án xuất khẩu, chúng tôi xác nhận sản phẩm, kiểu bao bì, công suất mục tiêu và điện áp/tần số trước khi báo giá.',
      mission: 'Quy trình thường gặp: gửi yêu cầu → đề xuất giải pháp → xác nhận tiện ích/bản vẽ → test tại nhà máy (có video) → đóng gói xuất khẩu & hồ sơ → hỗ trợ vận chuyển.',
      stats: [
        { value: '15+', label: 'Năm sản xuất' },
        { value: '500+', label: 'Máy đã giao' },
        { value: '50+', label: 'Quốc gia xuất khẩu' },
        { value: '100%', label: 'Chứng nhận CE' },
      ],
      strengthsTitle: 'Thế mạnh của chúng tôi',
      strengths: [
        { title: 'Sản xuất & test nội bộ', desc: 'Gia công, điện, lắp ráp và test tại Đài Trung. Cung cấp kết quả và video test trước khi giao hàng.' },
        { title: 'Chọn theo điều kiện kỹ thuật', desc: 'Chọn theo đặc tính sản phẩm, mức vệ sinh, kiểu bao bì và công suất. Báo giá dựa trên dữ liệu đã xác nhận.' },
        { title: 'Sẵn sàng cho xuất khẩu', desc: 'Hỗ trợ 110/220/380/480V, 50/60Hz. Hồ sơ CE, tài liệu, đóng gói xuất khẩu và phối hợp logistics.' },
      ],
      ctaTitle: 'Yêu cầu báo giá',
      ctaDesc: 'Gửi sản phẩm, kiểu bao bì/bao túi, dải chiết rót, tốc độ mục tiêu và điện áp/tần số tại điểm đến.',
      ctaBtn: 'Nhận báo giá miễn phí',
    },
    de: {
      kicker: 'ÜBER SUNGENE',
      title: 'Industriemaschinenhersteller in Taiwan',
      intro: 'SunGene fertigt in Taichung (Taiwan) Verpackungs-, Abfüll-/Verschließ-, Lebensmittelprozess- sowie Förder-/Automatisierungstechnik. Für Exportprojekte bestätigen wir Produkt, Format, Zielleistung und lokale Spannung/Frequenz vor der Angebotserstellung.',
      mission: 'Typischer Ablauf: Anforderungen → Lösungsvorschlag → Utilities/Zeichnungen bestätigen → Werkstest (Video) → Exportverpackung & Dokumente → Versandkoordination.',
      stats: [
        { value: '15+', label: 'Jahre Fertigung' },
        { value: '500+', label: 'Maschinen geliefert' },
        { value: '50+', label: 'Exportländer' },
        { value: '100%', label: 'CE-zertifiziert' },
      ],
      strengthsTitle: 'Unsere Stärken',
      strengths: [
        { title: 'Eigene Fertigung & Tests', desc: 'Bearbeitung, Elektrik, Montage und Tests in Taichung. Testergebnisse und Videos vor Versand.' },
        { title: 'Technische Auslegung', desc: 'Auslegung nach Produkteigenschaften, Hygieneanforderung, Format und Leistung. Angebote basieren auf bestätigten Daten.' },
        { title: 'Exportbereit', desc: '110/220/380/480V, 50/60Hz. CE-Unterlagen, Handbücher, Exportverpackung und Logistikkoordination.' },
      ],
      ctaTitle: 'Angebot anfordern',
      ctaDesc: 'Senden Sie Produkt, Beutel/Behältertyp, Füllbereich, Zielleistung sowie Spannung/Frequenz am Einsatzort.',
      ctaBtn: 'Kostenloses Angebot anfordern',
    }
  }

  const t = content[lang] || content['en']

  const gallery = [
    { src: PHOTO.pages.about.gallery[0], alt: 'Factory workshop line' },
    { src: PHOTO.pages.about.gallery[1], alt: 'Bottling line in operation' },
    { src: PHOTO.pages.about.gallery[2], alt: 'Industrial filling system detail' },
    { src: PHOTO.pages.about.gallery[3], alt: 'Control system and automation' },
  ]
  const aboutLabel =
    ({
      en: 'About',
      cn: '关于',
      zh: '關於',
      fr: 'À propos',
      es: 'Acerca de',
      pt: 'Sobre',
      ko: '회사 소개',
      ja: '会社概要',
      ar: 'من نحن',
      th: 'เกี่ยวกับเรา',
      vi: 'Giới thiệu',
      de: 'Über uns',
    } as Record<string, string>)[lang] || 'About'

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org`,
    name: 'SunGene Co., LTD.',
    alternateName: '上瑾錸有限公司',
    url: SITE_URL,
    logo: `${SITE_URL}/logo/sungene.png`,
    foundingDate: '2010',
    description: t.intro,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '201 Guangfu Rd., Central District',
      addressLocality: 'Taichung',
      postalCode: '40041',
      addressCountry: 'TW',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 24.1433, longitude: 120.6845 },
    telephone: '+886-4-3703-2705',
    email: 'contact@sungene.net',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 200 },
    knowsAbout: [
      'Packaging Machinery', 'VFFS Machines', 'HFFS Flow Wrappers',
      'Powder Filling Machines', 'Liquid Filling Machines', 'Food Processing Equipment',
      'Conveyor Systems', 'PLC Automation', 'CE Certification',
    ],
    sameAs: [
      'https://www.linkedin.com/company/sungene-machinery',
      'https://sungene.en.alibaba.com',
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/${lang}/about#faq`,
    inLanguage: LANG_META[lang].htmlLang,
    mainEntity: (COMPANY_FAQS[lang] || COMPANY_FAQS.en).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        kicker={t.kicker}
        title={t.title}
        desc={(
          <>
            <p className="text-white/85">{t.intro}</p>
            <p className="mt-4 text-base text-white/70">{t.mission}</p>
          </>
        )}
        image={{ src: PHOTO.pages.about.hero, alt: 'SunGene manufacturing and factory', priority: true, aspectClassName: 'aspect-[16/10]' }}
        below={(
          <div className="pt-10 border-t border-white/10 grid grid-cols-2 gap-px md:grid-cols-4">
            {t.stats.map((stat: { value: string; label: string }, i: number) => (
              <div key={i} className="flex flex-col items-center py-6 px-4 first:pl-0 last:pr-0">
                <div className="text-4xl font-black text-accent-400">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-white/70 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        className="border-b-0"
      />

      {/* Strengths */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <Breadcrumbs lang={lang} items={[{ label: aboutLabel, href: `/${lang}/about` }]} />
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500" />
            <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em]">{t.strengthsTitle}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl max-w-2xl">{t.strengthsTitle}</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((p) => (
              <div key={p.alt} className="overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-gray-200/60">
                <div className="relative aspect-[4/3]">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw" className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.strengths.map((s: { title: string; desc: string }, i: number) => (
              <Card key={i} className="p-8 border-0 shadow-elev-1 hover:shadow-elev-2 transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 border border-accent-200">
                  <span className="text-base font-black text-accent-600">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-950">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{s.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-14 sm:pb-18">
        <Container>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">
              {({
                en: 'Explore by machine',
                cn: '按机型浏览',
                zh: '依機型瀏覽',
                fr: 'Explorer par machine',
                es: 'Explorar por máquina',
                pt: 'Explorar por máquina',
                ko: '기계별 탐색',
                ja: '機種別に見る',
                ar: 'استكشف حسب الماكينة',
                th: 'สำรวจตามเครื่อง',
                vi: 'Khám phá theo máy',
                de: 'Nach Maschine entdecken',
              } as Record<string, string>)[lang] || 'Explore by machine'}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/topic/pouch-packing-machine`}>{({ en: 'Pouch packing', cn: '袋装包装', zh: '袋裝包裝', fr: 'Ensachage', es: 'Empaque en bolsa', pt: 'Embalagem em saco', ko: '파우치 포장', ja: 'パウチ包装', ar: 'تعبئة الأكياس', th: 'บรรจุถุง', vi: 'Đóng gói túi', de: 'Beutelverpackung' } as Record<string, string>)[lang] || 'Pouch packing'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/topic/powder-filling-machine`}>{({ en: 'Powder filling', cn: '粉末灌装', zh: '粉末灌裝', fr: 'Poudre', es: 'Polvo', pt: 'Pó', ko: '분말', ja: '粉体', ar: 'مساحيق', th: 'ผง', vi: 'Bột', de: 'Pulver' } as Record<string, string>)[lang] || 'Powder filling'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/topic/liquid-filling-machine`}>{({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Líquidos', pt: 'Líquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[lang] || 'Liquid filling'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/topic/snack-processing-line`}>{({ en: 'Snack processing', cn: '休闲食品', zh: '休閒食品', fr: 'Snack', es: 'Snacks', pt: 'Snacks', ko: '스낵', ja: 'スナック', ar: 'سناكات', th: 'สแน็ค', vi: 'Snack', de: 'Snack' } as Record<string, string>)[lang] || 'Snack processing'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/topic/conveyor-system`}>{({ en: 'Conveyors', cn: '输送', zh: '輸送', fr: 'Convoyeurs', es: 'Transporte', pt: 'Transporte', ko: '컨베이어', ja: '搬送', ar: 'نقل', th: 'ลำเลียง', vi: 'Băng tải', de: 'Fördertechnik' } as Record<string, string>)[lang] || 'Conveyors'}</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${lang}/machinery`} variant="secondary" size="md">
                {({ en: 'Machinery', cn: '机械目录', zh: '機械目錄', fr: 'Catalogue', es: 'Catálogo', pt: 'Catálogo', ko: '기계', ja: '機械', ar: 'الآلات', th: 'เครื่องจักร', vi: 'Danh mục máy', de: 'Katalog' } as Record<string, string>)[lang] || 'Machinery'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/recommend`} size="md">
                {({ en: 'Get a Recommendation', cn: '获取推荐', zh: '取得推薦', fr: 'Obtenir une recommandation', es: 'Obtener recomendación', pt: 'Obter recomendação', ko: '추천 받기', ja: '推薦を受ける', ar: 'احصل على توصية', th: 'รับคำแนะนำ', vi: 'Nhận đề xuất', de: 'Empfehlung erhalten' } as Record<string, string>)[lang] || 'Get a Recommendation'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="secondary" size="md">
                {({ en: 'Request a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 요청', ja: '見積依頼', ar: 'طلب عرض سعر', th: 'ขอใบเสนอราคา', vi: 'Yêu cầu báo giá', de: 'Angebot anfordern' } as Record<string, string>)[lang] || 'Request a Quote'}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative bg-brand-950 bg-industrial-grid py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/80 to-brand-950/90 pointer-events-none" />
        <Container className="relative text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">{t.ctaDesc}</p>
          <div className="mt-10">
            <ButtonLink href={`/${lang}/contact`} size="lg" className="shadow-lg shadow-accent-700/30">{t.ctaBtn}</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
