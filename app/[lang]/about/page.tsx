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
    en: 'About SunGene | Industrial & Automation Sourcing Experts',
    cn: '关于 SunGene | 工业与自动化采购专家',
    zh: '關於 SunGene | 工業與自動化採購專家',
    fr: 'À propos de SunGene | Experts en sourcing industriel et automatisation',
    es: 'Acerca de SunGene | Expertos en abastecimiento industrial y automatización',
    pt: 'Sobre a SunGene | Especialistas em Sourcing Industrial e Automação',
    ko: 'SunGene 소개 | 산업 및 자동화 소싱 전문가',
    ja: 'SunGeneについて | 産業・自動化ソーシングのエキスパート',
    ar: 'عن SunGene | خبراء توريد المعدات الصناعية والأتمتة',
    th: 'เกี่ยวกับ SunGene | ผู้เชี่ยวชาญด้านการจัดหาอุปกรณ์อุตสาหกรรมและระบบอัตโนมัติ',
    vi: 'Về SunGene | Chuyên gia tìm nguồn cung ứng công nghiệp và tự động hóa',
    de: 'Über SunGene | Experten für industrielles Sourcing und Automatisierung',
  }
  const descriptions: Record<string, string> = {
    en: 'SunGene provides professional sourcing support for industrial equipment, packaging systems, and automation components across Taiwan and China.',
    cn: 'SunGene 提供专业的工业设备、包装系统与自动化零组件采购支持，涵盖台湾与中国供应链。',
    zh: 'SunGene 提供專業的工業設備、包裝系統與自動化零組件採購支援，涵蓋台灣與中國供應鏈。',
    fr: 'SunGene fournit un support professionnel de sourcing pour les équipements industriels, les systèmes d’emballage et les composants d’automatisation à Taïwan et en Chine.',
    es: 'SunGene brinda soporte profesional de abastecimiento para equipos industriales, sistemas de empaque y componentes de automatización en Taiwán y China.',
    pt: 'A SunGene oferece suporte profissional de sourcing para equipamentos industriais, sistemas de embalagem e componentes de automação em Taiwan e na China.',
    ko: 'SunGene은 대만과 중국 전역에서 산업 장비, 포장 시스템 및 자동화 부품에 대한 전문적인 소싱 지원을 제공합니다.',
    ja: 'SunGeneは、台湾と中国全域で産業機器、包装システム、自動化コンポーネントの専門的なソーシング・サポートを提供しています。',
    ar: 'توفر SunGene دعماً مهنياً في توريد المعدات الصناعية وأنظمة التعبئة والتغليف ومكونات الأتمتة عبر تايوان والصين.',
    th: 'SunGene ให้การสนับสนุนการจัดหาอย่างมืออาชีพสำหรับอุปกรณ์อุตสาหกรรม ระบบบรรจุภัณฑ์ และส่วนประกอบระบบอัตโนมัติทั่วไต้หวันและจีน',
    vi: 'SunGene cung cấp hỗ trợ tìm nguồn cung ứng chuyên nghiệp cho thiết bị công nghiệp, hệ thống đóng gói và các bộ phận tự động hóa tại Đài Loan và Trung Quốc.',
    de: 'SunGene bietet professionelle Sourcing-Unterstützung für Industrieanlagen, Verpackungssysteme und Automatisierungskomponenten in Taiwan und China.',
  }

  return buildPageMetadata({
    lang: l,
    title: (titles as Record<string, string>)[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    pathname: '/about',
    type: 'website',
    keywords: ['SunGene', 'industrial sourcing partner', 'China equipment sourcing', 'Taiwan automation components', 'packaging system integration', 'technical procurement'],
  })
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content: Record<string, any> = {
    en: {
      kicker: 'SOURCING EXPERTISE',
      title: 'Industrial & Automation Sourcing Partner',
      intro: 'SunGene specializes in sourcing industrial equipment, packaging systems, and automation components from China and Taiwan. We bridge the gap between technical requirements and supply chain reliability, helping you make the right capital commitment decisions.',
      mission: 'Our workflow: technical requirement analysis → supplier vetting & auditing → proposal with technical comparison → FAT acceptance testing → export logistics & documentation.',
      stats: [
        { value: '15+', label: 'Industry Experience' },
        { value: '500+', label: 'Projects Delivered' },
        { value: '50+', label: 'Global Destinations' },
        { value: 'Vetted', label: 'Technical Vetting' },
      ],
      strengthsTitle: 'Our Sourcing Advantages',
      strengths: [
        { title: 'Technical Vetting', desc: 'We verify supplier capability, engineering standards, and component quality before selection. You receive verified test results and videos before shipment.' },
        { title: 'Project-Based Matching', desc: 'We match equipment to your specific product behavior, hygiene level, and output target. Proposals are based on confirmed technical compatibility.' },
        { title: 'Global Risk Management', desc: 'We handle the complexities of international standards (CE/UL), local voltage requirements, and secure export logistics for technical cargo.' },
      ],
      ctaTitle: 'Request a Sourcing Evaluation',
      ctaDesc: 'Send your product specs, output targets, and technical constraints. We will provide a professional procurement suggestion.',
      ctaBtn: 'Get a Sourcing Recommendation',
    },
    cn: {
      kicker: '采购专家',
      title: '工业与自动化采购伙伴',
      intro: 'SunGene 专精于工业设备、包装系统与自动化零组件的采购。我们在技术需求与供应链可靠性之间建立桥梁，协助您在投入资本前做出正确的采购决策。',
      mission: '我们的流程：技术需求分析 → 供应商审核与评估 → 带技术对比的方案建议 → FAT 验收测试 → 出口物流与文件支持。',
      stats: [
        { value: '15+', label: '行业经验' },
        { value: '500+', label: '交付项目' },
        { value: '50+', label: '出口国家' },
        { value: '已审核', label: '技术审核' },
      ],
      strengthsTitle: '我们的采购优势',
      strengths: [
        { title: '技术审核', desc: '我们在选型前验证供应商能力、工程标准与零部件质量。出货前提供经过验证的测试记录与视频。' },
        { title: '项目适配', desc: '我们依据您的产品特性、卫生等级与产能目标，精准匹配最适合的设备，确保技术兼容性。' },
        { title: '全球风险控管', desc: '我们处理国际标准 (CE/UL)、当地电压要求以及技术类货物的出口物流等复杂环节。' },
      ],
      ctaTitle: '获取采购评估',
      ctaDesc: '请提供产品规格、产量目标与技术约束条件。我们将提供专业的采购建议。',
      ctaBtn: '获取采购评估',
    },
    zh: {
      kicker: '採購專家',
      title: '工業與自動化採購夥伴',
      intro: 'SunGene 專精於工業設備、包裝系統與自動化零組件的採購。我們在技術需求與供應鏈可靠性之間建立橋樑，協助您在投入資本前做出正確的採購決策。',
      mission: '我們的流程：技術需求分析 → 供應商審核與評估 → 帶技術對比的方案建議 → FAT 驗收測試 → 出口物流與文件支援。',
      stats: [
        { value: '15+', label: '產業經驗' },
        { value: '500+', label: '交付專案' },
        { value: '50+', label: '出口國家' },
        { value: '已審核', label: '技術審核' },
      ],
      strengthsTitle: '我們的採購優勢',
      strengths: [
        { title: '技術審核', desc: '我們在選型前驗證供應商能力、工程標準與零組件品質。出貨前提供經過驗證的測試紀錄與影片。' },
        { title: '專案適配', desc: '我們依據您的產品特性、衛生等級與產能目標，精準匹配最適合的設備，確保技術相容性。' },
        { title: '全球風險控管', desc: '我們處理國際標準 (CE/UL)、當地電壓要求以及技術類貨物的出口物流等複雜環節。' },
      ],
      ctaTitle: '取得採購評估',
      ctaDesc: '請提供產品規格、產量目標與技術約束條件。我們將提供專業的採購建議。',
      ctaBtn: '取得採購評估',
    },
    fr: {
      kicker: 'À PROPOS DE SUNGENE',
      title: 'Partenaire de sourcing industriel à Taïwan',
      intro: 'SunGene accompagne le sourcing d’équipements industriels, de systèmes d’emballage et de composants d’automatisation. Nous faisons le lien entre exigences techniques et fiabilité de la chaîne d’approvisionnement avant tout engagement CAPEX.',
      mission: 'Processus type : analyse du besoin → audit/évaluation fournisseurs → évaluation et proposition avec comparaison technique → tests (FAT/SAT) → documents export → coordination logistique.',
      stats: [
        { value: '15+', label: 'Années d’expérience' },
        { value: '500+', label: 'Projets livrés' },
        { value: '50+', label: 'Pays d\'exportation' },
        { value: 'Validé', label: 'Vérification technique' },
      ],
      strengthsTitle: 'Nos atouts',
      strengths: [
        { title: 'Audit technique', desc: 'Validation des fournisseurs, des standards d’ingénierie et des composants critiques. Preuves de test et vidéos lorsque disponibles.' },
        { title: 'Compatibilité système', desc: 'Sélection selon produit, hygiène, format et cadence, avec vérification d’interfaces et cohérence de ligne.' },
        { title: 'Gestion des risques export', desc: 'Support CE/UL, exigences tension/fréquence, documentation et coordination logistique pour équipements techniques.' },
      ],
      ctaTitle: 'Demander une évaluation',
      ctaDesc: 'Indiquez produit, format de sachet/contenant, plage de remplissage, cadence cible et tension/fréquence du pays.',
      ctaBtn: 'Obtenir une évaluation',
    },
    es: {
      kicker: 'SOBRE SUNGENE',
      title: 'Socio de abastecimiento industrial en Taiwán',
      intro: 'SunGene apoya el abastecimiento de equipos industriales, sistemas de empaque y componentes de automatización. Conectamos requisitos técnicos con una cadena de suministro confiable antes de comprometer inversión.',
      mission: 'Flujo típico: análisis de requisitos → auditoría/evaluación de proveedores → evaluación y propuesta con comparación técnica → pruebas (FAT/SAT) → documentación export → coordinación logística.',
      stats: [
        { value: '15+', label: 'Años de experiencia' },
        { value: '500+', label: 'Proyectos entregados' },
        { value: '50+', label: 'Países de exportación' },
        { value: 'Validado', label: 'Revisión técnica' },
      ],
      strengthsTitle: 'Nuestras fortalezas',
      strengths: [
        { title: 'Auditoría técnica', desc: 'Validamos proveedores, estándares de ingeniería y componentes críticos. Evidencia de pruebas y videos cuando están disponibles.' },
        { title: 'Compatibilidad de sistema', desc: 'Selección según producto, higiene, formato y velocidad, con verificación de interfaces y coherencia de línea.' },
        { title: 'Gestión de riesgo export', desc: 'Soporte CE/UL, requisitos de voltaje/frecuencia, documentación y coordinación logística para equipos técnicos.' },
      ],
      ctaTitle: 'Solicitar evaluación',
      ctaDesc: 'Comparta producto, tipo de bolsa/envase, rango de llenado, velocidad objetivo y voltaje/frecuencia del destino.',
      ctaBtn: 'Obtener evaluación',
    },
    pt: {
      kicker: 'SOBRE A SUNGENE',
      title: 'Parceiro de sourcing industrial em Taiwan',
      intro: 'A SunGene apoia o sourcing de equipamentos industriais, sistemas de embalagem e componentes de automação. Fazemos a ponte entre requisitos técnicos e confiabilidade da cadeia de suprimentos antes de qualquer investimento.',
      mission: 'Fluxo típico: análise de requisitos → auditoria/avaliação de fornecedores → avaliação e proposta com comparação técnica → testes (FAT/SAT) → documentação export → coordenação logística.',
      stats: [
        { value: '15+', label: 'Anos de experiência' },
        { value: '500+', label: 'Projetos entregues' },
        { value: '50+', label: 'Países de exportação' },
        { value: 'Validado', label: 'Verificação técnica' },
      ],
      strengthsTitle: 'Nossos diferenciais',
      strengths: [
        { title: 'Auditoria técnica', desc: 'Validamos fornecedores, padrões de engenharia e componentes críticos. Evidências e vídeos de teste quando disponíveis.' },
        { title: 'Compatibilidade do sistema', desc: 'Seleção por produto, higiene, formato e velocidade, com verificação de interfaces e coerência de linha.' },
        { title: 'Gestão de risco export', desc: 'Suporte CE/UL, requisitos de tensão/frequência, documentação e coordenação logística para equipamentos técnicos.' },
      ],
      ctaTitle: 'Solicitar avaliação',
      ctaDesc: 'Informe produto, tipo de embalagem/recipiente, faixa de enchimento, velocidade-alvo e tensão/frequência do destino.',
      ctaBtn: 'Obter avaliação',
    },
    ko: {
      kicker: 'SUNGENE 소개',
      title: '대만 산업 소싱 파트너',
      intro: 'SunGene은 산업 장비·포장 시스템·자동화 구성품 소싱을 지원합니다. 기술 요구사항과 공급망 신뢰성을 연결해 CAPEX 결정 전 리스크를 줄입니다.',
      mission: '일반 흐름: 요구사항 분석 → 공급업체 심사/평가 → 기술 비교 기반 평가/제안 → 승인 테스트(FAT/SAT) → 수출 서류 → 물류 조율.',
      stats: [
        { value: '15+', label: '년 경험' },
        { value: '500+', label: '건 프로젝트' },
        { value: '50+', label: '개국 수출' },
        { value: '검증', label: '기술 심사' },
      ],
      strengthsTitle: '우리의 강점',
      strengths: [
        { title: '기술 심사', desc: '공급업체, 엔지니어링 기준, 핵심 부품을 검증합니다. 가능 시 테스트 근거와 영상을 제공합니다.' },
        { title: '시스템 호환성', desc: '제품 특성, 위생, 포장 형식, 목표 속도 기준으로 구성하며 인터페이스와 라인 일관성을 확인합니다.' },
        { title: '수출 리스크 관리', desc: 'CE/UL, 전압·주파수 요구사항, 문서 및 물류 조율을 지원합니다.' },
      ],
      ctaTitle: '소싱 평가 요청',
      ctaDesc: '제품, 포장/용기 형식, 충전 범위, 목표 속도, 목적지 전압·주파수를 보내주세요.',
      ctaBtn: '소싱 평가 받기',
    },
    ja: {
      kicker: 'SUNGENEについて',
      title: '台湾の産業ソーシングパートナー',
      intro: 'SunGeneは産業設備・包装システム・自動化部品のソーシングを支援します。技術要件とサプライチェーンの信頼性をつなぎ、投資前の意思決定をサポートします。',
      mission: '一般的な流れ：要件分析 → サプライヤー審査/評価 → 技術比較に基づく提案 → 受入/動作確認（FAT/SAT）→ 輸出書類 → 物流調整。',
      stats: [
        { value: '15+', label: '年の経験' },
        { value: '500+', label: '件の実績' },
        { value: '50+', label: 'カ国への輸出' },
        { value: '検証', label: '技術審査' },
      ],
      strengthsTitle: '私たちの強み',
      strengths: [
        { title: '技術審査', desc: 'サプライヤー、エンジニアリング基準、重要部品を検証。可能な範囲で試験根拠と動画を提供します。' },
        { title: 'システム互換性', desc: '製品特性、衛生レベル、包装形態、目標能力に基づき、インターフェースとライン整合を確認します。' },
        { title: '輸出リスク管理', desc: 'CE/UL、電圧/周波数要件、書類、物流調整を支援します。' },
      ],
      ctaTitle: 'ソーシング評価を依頼',
      ctaDesc: '製品、袋/容器の形式、充填範囲、目標能力、仕向地の電圧/周波数をご共有ください。',
      ctaBtn: '評価を依頼',
    },
    ar: {
      kicker: 'عن SUNGENE',
      title: 'شريك توريد صناعي في تايوان',
      intro: 'تدعم SunGene توريد المعدات الصناعية وأنظمة التعبئة والتغليف ومكونات الأتمتة. نربط المتطلبات التقنية بموثوقية سلسلة التوريد قبل الالتزام برأس المال.',
      mission: 'سير العمل المعتاد: تحليل المتطلبات → تدقيق/تقييم الموردين → توصية مع مقارنة تقنية → اختبارات قبول (FAT/SAT) → وثائق التصدير → تنسيق الخدمات اللوجستية.',
      stats: [
        { value: '15+', label: 'سنة خبرة' },
        { value: '500+', label: 'مشروع مُسلّم' },
        { value: '50+', label: 'دولة تصدير' },
        { value: 'مدقق', label: 'تدقيق تقني' },
      ],
      strengthsTitle: 'نقاط قوتنا',
      strengths: [
        { title: 'تدقيق تقني', desc: 'نتحقق من الموردين والمعايير الهندسية والمكونات الحرجة. نوفر أدلة اختبار وفيديوهات عندما تتوفر.' },
        { title: 'توافق النظام', desc: 'اختيار حسب خصائص المنتج والنظافة وشكل العبوة والقدرة المطلوبة مع التحقق من الواجهات وتكامل الخط.' },
        { title: 'إدارة مخاطر التصدير', desc: 'دعم CE/UL ومتطلبات الجهد/التردد والوثائق وتنسيق الشحن للمعدات التقنية.' },
      ],
      ctaTitle: 'طلب تقييم التوريد',
      ctaDesc: 'أرسل نوع المنتج وشكل العبوة ونطاق التعبئة والسرعة المطلوبة ومعيار الجهد/التردد في بلدك.',
      ctaBtn: 'طلب تقييم',
    },
    th: {
      kicker: 'เกี่ยวกับ SUNGENE',
      title: 'พันธมิตรด้านการจัดหาอุตสาหกรรมในไต้หวัน',
      intro: 'SunGene สนับสนุนการจัดหาอุปกรณ์อุตสาหกรรม ระบบบรรจุภัณฑ์ และชิ้นส่วนอัตโนมัติ เราเชื่อมความต้องการทางเทคนิคกับความน่าเชื่อถือของซัพพลายเออร์ก่อนลงทุน',
      mission: 'ขั้นตอนทั่วไป: วิเคราะห์ความต้องการ → ตรวจสอบ/ประเมินซัพพลายเออร์ → แนะนำพร้อมเปรียบเทียบเชิงเทคนิค → ทดสอบการยอมรับ (FAT/SAT) → เอกสารส่งออก → ประสานโลจิสติกส์',
      stats: [
        { value: '15+', label: 'ปีประสบการณ์' },
        { value: '500+', label: 'โครงการที่ส่งมอบ' },
        { value: '50+', label: 'ประเทศที่ส่งออก' },
        { value: 'ตรวจสอบแล้ว', label: 'ตรวจสอบเชิงเทคนิค' },
      ],
      strengthsTitle: 'จุดแข็งของเรา',
      strengths: [
        { title: 'ตรวจสอบเชิงเทคนิค', desc: 'ตรวจสอบซัพพลายเออร์ มาตรฐานวิศวกรรม และชิ้นส่วนสำคัญ มีหลักฐาน/วิดีโอทดสอบเมื่อมีให้' },
        { title: 'ความเข้ากันได้ของระบบ', desc: 'คัดเลือกตามสินค้า สุขอนามัย รูปแบบบรรจุ และกำลังการผลิต พร้อมตรวจสอบอินเทอร์เฟซและความสอดคล้องของไลน์' },
        { title: 'บริหารความเสี่ยงส่งออก', desc: 'สนับสนุน CE/UL ข้อกำหนดแรงดัน/ความถี่ เอกสาร และประสานการขนส่งสำหรับอุปกรณ์เชิงเทคนิค' },
      ],
      ctaTitle: 'ขอการประเมินการจัดซื้อ',
      ctaDesc: 'ส่งรายละเอียดสินค้า รูปแบบถุง/ภาชนะ ช่วงการบรรจุ ความเร็วเป้าหมาย และแรงดัน/ความถี่ปลายทาง',
      ctaBtn: 'ขอการประเมินการจัดซื้อ',
    },
    vi: {
      kicker: 'VỀ SUNGENE',
      title: 'Đối tác tìm nguồn cung ứng công nghiệp tại Đài Loan',
      intro: 'SunGene hỗ trợ tìm nguồn cung thiết bị công nghiệp, hệ thống đóng gói và linh kiện tự động hóa. Chúng tôi kết nối yêu cầu kỹ thuật với độ tin cậy chuỗi cung ứng trước khi đầu tư.',
      mission: 'Quy trình thường gặp: phân tích yêu cầu → thẩm định/đánh giá nhà cung cấp → khuyến nghị có so sánh kỹ thuật → kiểm tra nghiệm thu (FAT/SAT) → hồ sơ xuất khẩu → phối hợp logistics.',
      stats: [
        { value: '15+', label: 'Năm kinh nghiệm' },
        { value: '500+', label: 'Dự án đã giao' },
        { value: '50+', label: 'Quốc gia xuất khẩu' },
        { value: 'Đã thẩm định', label: 'Thẩm định kỹ thuật' },
      ],
      strengthsTitle: 'Thế mạnh của chúng tôi',
      strengths: [
        { title: 'Thẩm định kỹ thuật', desc: 'Thẩm định nhà cung cấp, tiêu chuẩn kỹ thuật và linh kiện quan trọng. Có bằng chứng/video test khi có.' },
        { title: 'Tương thích hệ thống', desc: 'Chọn theo sản phẩm, vệ sinh, kiểu bao bì và công suất, đồng thời kiểm tra giao diện và tính nhất quán của dây chuyền.' },
        { title: 'Quản trị rủi ro xuất khẩu', desc: 'Hỗ trợ CE/UL, yêu cầu điện áp/tần số, hồ sơ và phối hợp vận chuyển cho thiết bị kỹ thuật.' },
      ],
      ctaTitle: 'Nhận đánh giá nguồn cung',
      ctaDesc: 'Gửi sản phẩm, kiểu bao bì/bao túi, dải chiết rót, tốc độ mục tiêu và điện áp/tần số tại điểm đến.',
      ctaBtn: 'Nhận đánh giá nguồn cung',
    },
    de: {
      kicker: 'ÜBER SUNGENE',
      title: 'Industrie-Sourcing-Partner in Taiwan',
      intro: 'SunGene unterstützt das Sourcing von Industrieausrüstung, Verpackungssystemen und Automationskomponenten. Wir verbinden technische Anforderungen mit einer zuverlässigen Lieferkette vor der Investitionsentscheidung.',
      mission: 'Typischer Ablauf: Anforderungsanalyse → Lieferantenaudit/-bewertung → Bewertung und Vorschlag mit technischem Vergleich → Abnahmetests (FAT/SAT) → Exportdokumente → Logistikkoordination.',
      stats: [
        { value: '15+', label: 'Jahre Erfahrung' },
        { value: '500+', label: 'Projekte geliefert' },
        { value: '50+', label: 'Exportländer' },
        { value: 'Geprüft', label: 'Technische Prüfung' },
      ],
      strengthsTitle: 'Unsere Stärken',
      strengths: [
        { title: 'Technische Prüfung', desc: 'Prüfung von Lieferanten, Engineering-Standards und kritischen Komponenten. Nachweise/Videos, wenn verfügbar.' },
        { title: 'Systemkompatibilität', desc: 'Auslegung nach Produkt, Hygiene, Format und Leistung mit Prüfung von Schnittstellen und Linien-Konsistenz.' },
        { title: 'Export-Risikomanagement', desc: 'Unterstützung bei CE/UL, Spannung/Frequenz, Dokumenten und Logistik für technische Güter.' },
      ],
      ctaTitle: 'Bewertung anfordern',
      ctaDesc: 'Senden Sie Produkt, Beutel/Behältertyp, Füllbereich, Zielleistung sowie Spannung/Frequenz am Einsatzort.',
      ctaBtn: 'Bewertung anfordern',
    }
  }

  const t = content[lang] || content['en']

  const gallery = [
    { src: PHOTO.pages.about.gallery[0], alt: 'Workshop line' },
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
      'Packaging Systems Sourcing', 'VFFS Projects', 'HFFS Flow Wrappers',
      'Powder Dosing', 'Liquid Filling Projects', 'Food Processing Equipment',
      'Conveyor Systems', 'PLC Automation', 'CE Documentation',
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
        image={{ src: PHOTO.pages.about.hero, alt: 'SunGene sourcing and engineering team', priority: true, aspectClassName: 'aspect-[16/10]' }}
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
                zh: '依採購範圍瀏覽',
                fr: 'Explorer par périmètre sourcing',
                es: 'Explorar por alcance de abastecimiento',
                pt: 'Explorar por escopo de sourcing',
                ko: '소싱 범위별 보기',
                ja: '調達範囲別に見る',
                ar: 'استكشف حسب نطاق التوريد',
                th: 'สำรวจตามขอบเขตการจัดหา',
                vi: 'Khám phá theo phạm vi sourcing',
                de: 'Nach Sourcing-Bereich entdecken',
              } as Record<string, string>)[lang] || 'Explore by sourcing scope'}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/pouch-packaging`}>{({ en: 'Pouch packaging', cn: '袋包装', zh: '袋包裝', fr: 'Ensachage', es: 'Empaque en bolsa', pt: 'Embalagem em saco', ko: '파우치', ja: 'パウチ', ar: 'أكياس', th: 'ถุง', vi: 'Túi', de: 'Beutel' } as Record<string, string>)[lang] || 'Pouch packaging'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/powder-dosing`}>{({ en: 'Powder dosing', cn: '粉体计量', zh: '粉體計量', fr: 'Poudre', es: 'Polvo', pt: 'Pó', ko: '분말', ja: '粉体', ar: 'مساحيق', th: 'ผง', vi: 'Bột', de: 'Pulver' } as Record<string, string>)[lang] || 'Powder dosing'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/liquid-filling`}>{({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Líquidos', pt: 'Líquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[lang] || 'Liquid filling'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/food-processing-line`}>{({ en: 'Food processing line', cn: '食品加工线', zh: '食品加工線', fr: 'Process', es: 'Proceso', pt: 'Processo', ko: '식품 라인', ja: '加工ライン', ar: 'معالجة', th: 'กระบวนการ', vi: 'Chế biến', de: 'Prozess' } as Record<string, string>)[lang] || 'Food processing line'}</a>
              <a className="text-accent-600 hover:underline" href={`/${lang}/resources/route/conveying-automation`}>{({ en: 'Conveying & automation', cn: '输送与自动化', zh: '輸送與自動化', fr: 'Convoyage', es: 'Transporte', pt: 'Transporte', ko: '이송/자동화', ja: '搬送/自動化', ar: 'نقل/أتمتة', th: 'ลำเลียง/อัตโนมัติ', vi: 'Băng tải/TĐH', de: 'Fördertechnik/Automation' } as Record<string, string>)[lang] || 'Conveying & automation'}</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`/${lang}/machinery`} variant="secondary" size="md">
                {({ en: 'Sourcing Scope', cn: '采购范围', zh: '採購範圍', fr: 'Périmètre sourcing', es: 'Alcance de abastecimiento', pt: 'Escopo de sourcing', ko: '소싱 범위', ja: '調達範囲', ar: 'نطاق التوريد', th: 'ขอบเขตการจัดหา', vi: 'Phạm vi sourcing', de: 'Sourcing-Bereich' } as Record<string, string>)[lang] || 'Sourcing Scope'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/assessment`} size="md">
                {({ en: 'Get Assessment', cn: '获取评估', zh: '取得評估', fr: 'Obtenir une évaluation', es: 'Obtener evaluación', pt: 'Obter avaliação', ko: '평가 받기', ja: '評価を受ける', ar: 'احصل على تقييم', th: 'รับการประเมิน', vi: 'Nhận đánh giá', de: 'Bewertung erhalten' } as Record<string, string>)[lang] || 'Get Assessment'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="secondary" size="md">
                {({ en: 'Request Assessment', cn: '获取采购评估', zh: '取得採購評估', fr: 'Demander évaluation', es: 'Solicitar evaluación', pt: 'Solicitar avaliação', ko: '평가 요청', ja: '評価依頼', ar: 'طلب تقييم', th: 'ขอการประเมิน', vi: 'Yêu cầu đánh giá', de: 'Bewertung anfordern' } as Record<string, string>)[lang] || 'Request Assessment'}
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
