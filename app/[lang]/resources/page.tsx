import { Lang } from '@/lib/i18n'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'
import Breadcrumbs from '@/components/Breadcrumbs'
import { RESOURCE_ARTICLES, getResourceArticleI18n } from '@/lib/resourceArticles'

const titles: Record<string, string> = {
  en: 'Sourcing Guides & Resources', cn: '采购指南与资源', zh: '採購指南與資源',
  fr: 'Guides sourcing & ressources', es: 'Guías de abastecimiento y recursos',
  pt: 'Guias de sourcing e recursos', ko: '소싱 가이드 및 자료', ja: '調達ガイド・リソース',
  ar: 'أدلة التوريد والموارد', th: 'คู่มือการจัดหาและแหล่งข้อมูล', vi: 'Hướng Dẫn Sourcing & Tài Nguyên',
  de: 'Sourcing-Leitfäden & Ressourcen',
}

const descriptions: Record<string, string> = {
  en: 'Practical sourcing guides for industrial equipment: configuration planning, supplier evaluation, Taiwan/China sourcing, voltage requirements, FAT preparation, and commercial risk control.',
  cn: '工业设备实用采购指南：配置规划、供应商评估、台湾/中国采购、电压要求、FAT准备与商业风险控制。',
  zh: '工業設備實用採購指南：配置規劃、供應商評估、台灣/中國採購、電壓要求、FAT準備與商務風險控管。',
  fr: 'Guides pratiques de sourcing industriel : plan de configuration, audit fournisseurs, sourcing Taïwan/Chine, tension, préparation FAT et contrôle des risques commerciaux.',
  es: 'Guías prácticas de abastecimiento industrial: planificación de configuración, evaluación de proveedores, sourcing Taiwán/China, requisitos eléctricos, preparación FAT y control de riesgos.',
  pt: 'Guias práticos de sourcing industrial: planejamento de configuração, avaliação de fornecedores, sourcing Taiwan/China, requisitos elétricos, preparação FAT e controle de risco comercial.',
  ko: '산업 장비 실무 소싱 가이드: 구성 계획, 공급업체 평가, 대만/중국 소싱, 전압 요구사항, FAT 준비 및 상업 리스크 관리.',
  ja: '産業設備の実務的な調達ガイド：構成計画、サプライヤー評価、台湾/中国調達、電圧要件、FAT準備、商務リスク管理。',
  ar: 'أدلة عملية للتوريد الصناعي: تخطيط التهيئة، تقييم الموردين، التوريد من تايوان/الصين، متطلبات الجهد، التحضير لـ FAT وضبط المخاطر التجارية.',
  th: 'คู่มือการจัดหาอุปกรณ์อุตสาหกรรมเชิงปฏิบัติ: การวางแผนการจัดวาง การประเมินซัพพลายเออร์ การจัดหาจากไต้หวัน/จีน ข้อกำหนดไฟฟ้า การเตรียม FAT และการควบคุมความเสี่ยงทางการค้า',
  vi: 'Hướng dẫn sourcing thiết bị công nghiệp thực tế: lập kế hoạch cấu hình, đánh giá nhà cung cấp, sourcing Đài Loan/Trung Quốc, yêu cầu điện áp, chuẩn bị FAT và kiểm soát rủi ro thương mại.',
  de: 'Praktische Sourcing-Leitfäden für Industrieausrüstung: Konfigurationsplanung, Lieferantenbewertung, Taiwan/China-Sourcing, Spannungsanforderungen, FAT-Vorbereitung und kaufmännische Risikosteuerung.',
}

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de'].map(lang => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    pathname: '/resources',
    type: 'website',
    keywords: ['industrial equipment sourcing guide', 'supplier evaluation checklist', 'Taiwan China sourcing', 'FAT checklist', 'voltage requirements export', 'configuration planning'],
  })
}

// ─── article data ───────────────────────────────────────────────────────────

type Article = { title: string; desc: string; slug: string }
type Category = { id: string; label: string; articles: Article[] }

const categories: (lang: string) => Category[] = (lang) => {
  const labelsByLang: Record<string, { comparison: string; selection: string; application: string; buying: string }> = {
    en: { comparison: 'Comparison Guides', selection: 'Selection Guides', application: 'Application Guides', buying: 'Buying Guides' },
    zh: { comparison: '對比指南', selection: '選型指南', application: '應用指南', buying: '採購指南' },
    cn: { comparison: '对比指南', selection: '选型指南', application: '应用指南', buying: '采购指南' },
    fr: { comparison: 'Guides comparatifs', selection: 'Guides de sélection', application: 'Guides d’application', buying: 'Guides d’achat' },
    es: { comparison: 'Guías comparativas', selection: 'Guías de selección', application: 'Guías de aplicación', buying: 'Guías de compra' },
    pt: { comparison: 'Guias comparativos', selection: 'Guias de seleção', application: 'Guias de aplicação', buying: 'Guias de compra' },
    ko: { comparison: '비교 가이드', selection: '선정 가이드', application: '적용 가이드', buying: '구매 가이드' },
    ja: { comparison: '比較ガイド', selection: '選定ガイド', application: '用途ガイド', buying: '購入ガイド' },
    ar: { comparison: 'أدلة المقارنة', selection: 'أدلة الاختيار', application: 'أدلة التطبيقات', buying: 'أدلة الشراء' },
    th: { comparison: 'คู่มือเปรียบเทียบ', selection: 'คู่มือการเลือก', application: 'คู่มือการใช้งาน', buying: 'คู่มือการซื้อ' },
    vi: { comparison: 'Hướng dẫn so sánh', selection: 'Hướng dẫn lựa chọn', application: 'Hướng dẫn ứng dụng', buying: 'Hướng dẫn mua hàng' },
    de: { comparison: 'Vergleichsleitfäden', selection: 'Auswahlleitfäden', application: 'Anwendungsleitfäden', buying: 'Kaufleitfäden' },
  }

  const labels = labelsByLang[lang] || labelsByLang.en

  function list(catId: 'comparison' | 'selection' | 'application' | 'buying'): Article[] {
    return RESOURCE_ARTICLES
      .filter((a) => a.category === catId)
      .map((a) => {
        const i18n = getResourceArticleI18n(a.slug, lang as Lang) || getResourceArticleI18n(a.slug, 'en')
        return {
          slug: a.slug,
          title: i18n?.title ?? a.slug,
          desc: i18n?.description ?? '',
        }
      })
  }

  return [
    { id: 'comparison', label: labels.comparison, articles: list('comparison') },
    { id: 'selection', label: labels.selection, articles: list('selection') },
    { id: 'application', label: labels.application, articles: list('application') },
    { id: 'buying', label: labels.buying, articles: list('buying') },
  ]
}

const categoryBadgeColors: Record<string, string> = {
  comparison: 'bg-blue-100 text-blue-700',
  selection: 'bg-emerald-100 text-emerald-700',
  application: 'bg-amber-100 text-amber-700',
  buying: 'bg-violet-100 text-violet-700',
}

export default async function ResourcesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const heroPhoto = PHOTO.pages.resources.hero
  const metaTitle = titles[lang] || titles.en
  const metaDesc = descriptions[lang] || descriptions.en

  const cats = categories(lang)

  const ctaLabels: Record<string, { heading: string; body: string; btn: string }> = {
    en: { heading: 'Can\'t find the sourcing angle you need?', body: 'Tell us your requirements — we\'ll reply with a sourcing path, configuration direction, and acceptance checkpoints.', btn: 'Request an Assessment' },
    cn: { heading: '找不到需要的采购角度？', body: '告诉我们您的需求——我们将回复采购路径、配置方向与验收重点。', btn: '申请评估' },
    zh: { heading: '找不到需要的採購角度？', body: '告訴我們您的需求——我們將回覆採購路徑、配置方向與驗收重點。', btn: '申請評估' },
    fr: { heading: 'Vous ne trouvez pas l’angle sourcing recherché ?', body: 'Décrivez vos besoins — nous répondrons avec un parcours sourcing, une direction de configuration et des points d’acceptation.', btn: 'Demander une évaluation' },
    es: { heading: '¿No encuentra el ángulo de abastecimiento que necesita?', body: 'Cuéntenos sus requisitos — responderemos con la ruta de abastecimiento, la dirección de configuración y los puntos de aceptación.', btn: 'Solicitar evaluación' },
    pt: { heading: 'Não encontrou o ângulo de sourcing que precisa?', body: 'Conte-nos seus requisitos — responderemos com o caminho de sourcing, a direção de configuração e os pontos de aceitação.', btn: 'Solicitar avaliação' },
    ko: { heading: '원하는 소싱 관점을 찾지 못하셨나요?', body: '요구 사항을 알려주시면 소싱 경로, 구성 방향, 검수 포인트를 안내해드립니다.', btn: '평가 요청' },
    ja: { heading: '必要な調達の切り口が見つかりませんか？', body: '要件を送っていただければ、調達ルート、構成方針、受入ポイントを返信します。', btn: '評価を依頼' },
    ar: { heading: 'ألا تجد زاوية التوريد التي تحتاجها؟', body: 'أخبرنا بمتطلباتك وسنرد بمسار التوريد واتجاه التهيئة ونقاط القبول.', btn: 'اطلب تقييمًا' },
    th: { heading: 'ยังไม่พบมุมการจัดหาที่ต้องการ?', body: 'บอกความต้องการของคุณ แล้วเราจะตอบกลับด้วยเส้นทางการจัดหา ทิศทางการจัดวาง และจุดตรวจรับ', btn: 'ขอการประเมิน' },
    vi: { heading: 'Chưa thấy đúng góc nhìn sourcing bạn cần?', body: 'Hãy cho chúng tôi biết yêu cầu của bạn — chúng tôi sẽ phản hồi với lộ trình sourcing, hướng cấu hình và các điểm nghiệm thu.', btn: 'Yêu cầu đánh giá' },
    de: { heading: 'Finden Sie den gewünschten Sourcing-Blickwinkel nicht?', body: 'Teilen Sie uns Ihre Anforderungen mit — wir antworten mit Sourcing-Pfad, Konfigurationsrichtung und Abnahmepunkten.', btn: 'Bewertung anfordern' },
  }

  const cta = ctaLabels[lang] || ctaLabels['en']

  const heroKicker = ({
    en: 'RESOURCES', cn: '资源中心', zh: '資源中心', fr: 'RESSOURCES', es: 'RECURSOS',
    pt: 'RECURSOS', ko: '리소스', ja: 'リソース', ar: 'الموارد', th: 'แหล่งข้อมูล', vi: 'TÀI NGUYÊN', de: 'RESSOURCEN',
  } as Record<string, string>)[lang] || 'RESOURCES'

  const heroTitles: Record<string, string> = {
    en: 'Industrial Sourcing Guides', cn: '工业采购指南', zh: '工業採購指南',
    fr: 'Guides de sourcing industriel', es: 'Guías de abastecimiento industrial',
    pt: 'Guias de sourcing industrial', ko: '산업 소싱 가이드', ja: '産業調達ガイド',
    ar: 'أدلة التوريد الصناعي', th: 'คู่มือการจัดหาอุตสาหกรรม', vi: 'Hướng Dẫn Sourcing Công Nghiệp', de: 'Industrie-Sourcing-Leitfäden',
  }

  const heroDescs: Record<string, string> = {
    en: 'Practical guides to help you define the right sourcing path, evaluate suppliers, prepare FAT criteria, and control integration risk before you commit capital.',
    cn: '帮助您定义合适采购路径、评估供应商、准备FAT条件并控制整合风险的实用指南。',
    zh: '幫助您定義合適採購路徑、評估供應商、準備FAT條件並控管整合風險的實用指南。',
    fr: 'Guides pratiques pour vous aider à choisir la bonne machine, planifier votre intégration de ligne et naviguer le processus d\'exportation.',
    es: 'Guías prácticas para ayudarle a elegir la maquinaria adecuada, planificar su línea de producción y navegar el proceso de exportación.',
    pt: 'Guias práticos para ajudá-lo a escolher o maquinário certo, planejar sua linha de produção e navegar pelo processo de exportação.',
    ko: '적합한 기계를 선택하고, 생산 라인을 계획하며, 수출 프로세스를 이해하는 데 도움이 되는 실용적인 가이드입니다.',
    ja: '適切な機械の選定、生産ラインの計画、輸出プロセスのナビゲーションに役立つ実用ガイドです。',
    ar: 'أدلة عملية لمساعدتك في اختيار الماكينات المناسبة وتخطيط خط الإنتاج والتعامل مع عملية التصدير.',
    th: 'คู่มือที่เป็นประโยชน์เพื่อช่วยคุณเลือกเครื่องจักรที่เหมาะสม วางแผนการบูรณาการไลน์ และดำเนินกระบวนการส่งออก',
    vi: 'Các hướng dẫn thực tế giúp bạn chọn máy móc phù hợp, lên kế hoạch tích hợp dây chuyền và tìm hiểu quy trình xuất khẩu.',
    de: 'Praktische Ratgeber, die Ihnen helfen, die richtige Maschine auszuwählen, Ihre Produktionslinie zu planen und den Exportprozess zu verstehen.',
  }

  const howToByLang: Record<string, { name: string; description: string; steps: { name: string; text: string }[] }> = {
    en: {
      name: 'How to Plan Industrial Equipment Sourcing',
      description: 'A practical checklist for planning packaging, filling, or processing projects.',
      steps: [
        { name: 'Confirm product state', text: 'Powder, liquid, granule, solid, or mixed. This decides dosing and feeding.' },
        { name: 'Confirm package format', text: 'Bag/bottle/jar/sachet/can, plus dimensions and material.' },
        { name: 'Set output target', text: 'Units per minute/hour and expected uptime.' },
        { name: 'Check utilities', text: 'Voltage/phase/frequency, compressed air, and hygiene requirements.' },
        { name: 'Send specs for assessment', text: 'Share samples or technical specs so we can provide an assessment based on confirmed inputs.' },
      ],
    },
    cn: {
      name: '如何选择工业机械（实用清单）',
      description: '用于选购包装、灌装或加工设备的简明步骤。',
      steps: [
        { name: '确认产品形态', text: '粉末/液体/颗粒/固体或混合，决定计量与上料方式。' },
        { name: '确认包装形式', text: '袋/瓶/罐/条包等，并提供尺寸与材质。' },
        { name: '设定产能目标', text: '每分钟/每小时产量与预期稼动率。' },
        { name: '确认公用工程', text: '电压/相数/频率、压缩空气，以及卫生等级需求。' },
        { name: '提交规格以评估', text: '提供样品或技术资料，我们将基于已确认条件给出采购评估与建议。' },
      ],
    },
    zh: {
      name: '如何選擇工業機械（實用清單）',
      description: '用於選購包裝、灌裝或加工設備的簡明步驟。',
      steps: [
        { name: '確認產品形態', text: '粉末/液體/顆粒/固體或混合，決定計量與上料方式。' },
        { name: '確認包材形式', text: '袋/瓶/罐/條包等，並提供尺寸與材質。' },
        { name: '設定產能目標', text: '每分鐘/每小時產量與預期稼動率。' },
        { name: '確認公用工程', text: '電壓/相數/頻率、壓縮空氣，以及衛生等級需求。' },
        { name: '提交規格以評估', text: '提供樣品或技術資料，我們將基於已確認條件給出採購評估與建議。' },
      ],
    },
    fr: {
      name: 'Choisir une machine industrielle (checklist)',
      description: 'Étapes pratiques pour sélectionner emballage, remplissage ou process.',
      steps: [
        { name: 'État du produit', text: 'Poudre, liquide, granulé, solide ou mixte : dosage et alimentation.' },
        { name: 'Format d’emballage', text: 'Sachet/bouteille/pot, dimensions et matériau.' },
        { name: 'Cadence cible', text: 'Unités/min ou h et taux d’utilisation.' },
        { name: 'Utilités', text: 'Tension/phases/fréquence, air comprimé, hygiène.' },
        { name: 'Envoyer les specs', text: 'Échantillons ou specs pour une évaluation sur données confirmées.' },
      ],
    },
    es: {
      name: 'Cómo elegir maquinaria industrial (checklist)',
      description: 'Pasos prácticos para seleccionar empaque, llenado o proceso.',
      steps: [
        { name: 'Estado del producto', text: 'Polvo, líquido, granulado, sólido o mixto.' },
        { name: 'Formato de empaque', text: 'Bolsa/botella/frasco, dimensiones y material.' },
        { name: 'Capacidad objetivo', text: 'Unidades/min u hora y disponibilidad.' },
        { name: 'Utilidades', text: 'Voltaje/fases/frecuencia, aire comprimido, higiene.' },
        { name: 'Enviar especificaciones', text: 'Muestras o specs para una evaluación basada en datos confirmados.' },
      ],
    },
    pt: {
      name: 'Como escolher máquinas industriais (checklist)',
      description: 'Passos práticos para selecionar embalagem, envase ou processo.',
      steps: [
        { name: 'Estado do produto', text: 'Pó, líquido, granulado, sólido ou misto.' },
        { name: 'Formato de embalagem', text: 'Saco/garrafa/pote, dimensões e material.' },
        { name: 'Meta de produção', text: 'Unidades/min ou hora e disponibilidade.' },
        { name: 'Utilidades', text: 'Tensão/fases/frequência, ar comprimido, higiene.' },
        { name: 'Enviar especificações', text: 'Amostras ou specs para uma avaliação com dados confirmados.' },
      ],
    },
    ko: {
      name: '산업용 기계 선택 방법(체크리스트)',
      description: '포장/충전/가공 설비를 고를 때 필요한 핵심 단계입니다.',
      steps: [
        { name: '제품 상태 확인', text: '분말/액상/과립/고체/혼합 여부.' },
        { name: '포장 형식 확인', text: '파우치/병/용기 등, 규격과 재질.' },
        { name: '목표 생산량', text: '분당/시간당 목표와 예상 가동률.' },
        { name: '유틸리티 확인', text: '전압/상/주파수, 압축 공기, 위생 요구.' },
        { name: '사양 전달', text: '샘플/사양을 기반으로 확인된 조건에 맞춰 소싱 평가를 제공합니다.' },
      ],
    },
    ja: {
      name: '産業機械の選び方（チェックリスト）',
      description: '包装・充填・加工設備を選定するための実務的な手順です。',
      steps: [
        { name: '製品状態の確認', text: '粉体・液体・顆粒・固体・混合。' },
        { name: '包装形態の確認', text: '袋/ボトル/容器、寸法と材質。' },
        { name: '目標能力', text: '分/時あたりの数量と稼働率。' },
        { name: 'ユーティリティ', text: '電圧/相/周波数、圧縮空気、衛生要件。' },
        { name: '仕様の共有', text: 'サンプル/仕様を基に、確定条件で調達評価します。' },
      ],
    },
    ar: {
      name: 'كيفية اختيار معدات صناعية (قائمة تحقق)',
      description: 'خطوات عملية لاختيار معدات التعبئة أو التعبئة/الختم أو المعالجة.',
      steps: [
        { name: 'حالة المنتج', text: 'مسحوق/سائل/حبيبات/صلب أو خليط.' },
        { name: 'شكل العبوة', text: 'كيس/زجاجة/وعاء مع الأبعاد والمادة.' },
        { name: 'القدرة المطلوبة', text: 'عدد الوحدات بالدقيقة/الساعة ونسبة التشغيل.' },
        { name: 'المرافق', text: 'الجهد/الطور/التردد، هواء مضغوط، ومتطلبات النظافة.' },
        { name: 'إرسال المواصفات', text: 'إرسال عينات/مواصفات لتقييم يعتمد على بيانات مؤكدة.' },
      ],
    },
    th: {
      name: 'วิธีเลือกเครื่องจักรอุตสาหกรรม (เช็กลิสต์)',
      description: 'ขั้นตอนสั้น ๆ สำหรับเลือกเครื่องบรรจุ/เติม/แปรรูป',
      steps: [
        { name: 'ยืนยันลักษณะสินค้า', text: 'ผง/ของเหลว/เม็ด/ของแข็ง/ผสม' },
        { name: 'ยืนยันรูปแบบบรรจุภัณฑ์', text: 'ถุง/ขวด/ภาชนะ พร้อมขนาดและวัสดุ' },
        { name: 'กำหนดกำลังการผลิต', text: 'หน่วยต่อนาที/ชั่วโมง และอัตราการเดินเครื่อง' },
        { name: 'ตรวจยูทิลิตี้', text: 'แรงดัน/เฟส/ความถี่, ลมอัด, สุขอนามัย' },
        { name: 'ส่งสเปกเพื่อประเมิน', text: 'ส่งตัวอย่างหรือสเปกเพื่อทำการประเมินตามข้อมูลที่ยืนยันแล้ว' },
      ],
    },
    vi: {
      name: 'Cách chọn máy công nghiệp (checklist)',
      description: 'Các bước thực tế để chọn máy đóng gói, chiết rót hoặc chế biến.',
      steps: [
        { name: 'Xác định trạng thái sản phẩm', text: 'Bột/lỏng/hạt/rắn/hỗn hợp.' },
        { name: 'Xác định format bao bì', text: 'Túi/chai/hũ… kèm kích thước và vật liệu.' },
        { name: 'Đặt mục tiêu công suất', text: 'Số lượng theo phút/giờ và mức uptime.' },
        { name: 'Kiểm tra tiện ích', text: 'Điện áp/pha/tần số, khí nén, yêu cầu vệ sinh.' },
        { name: 'Gửi thông số', text: 'Gửi mẫu/spec để đánh giá theo dữ liệu đã xác nhận.' },
      ],
    },
    de: {
      name: 'Industriemaschinen auswählen (Checkliste)',
      description: 'Praktische Schritte zur Auswahl von Verpackungs-, Abfüll- oder Prozessanlagen.',
      steps: [
        { name: 'Produktzustand klären', text: 'Pulver, Flüssigkeit, Granulat, Feststoff oder Mix.' },
        { name: 'Verpackungsformat klären', text: 'Beutel/Flasche/Behälter inkl. Maße und Material.' },
        { name: 'Zielleistung festlegen', text: 'Einheiten pro Minute/Stunde und Auslastung.' },
        { name: 'Utilities prüfen', text: 'Spannung/Phasen/Frequenz, Druckluft, Hygiene.' },
        { name: 'Spezifikationen senden', text: 'Muster/Specs senden – Bewertung auf bestätigten Daten.' },
      ],
    },
  }

  const how = howToByLang[lang] || howToByLang.en
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    inLanguage: LANG_META[lang].htmlLang,
    name: how.name,
    description: how.description,
    step: how.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  }

  const itemListItems = cats.flatMap((cat) => cat.articles)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/${lang}/resources#itemlist`,
    inLanguage: LANG_META[lang].htmlLang,
    name: metaTitle,
    isPartOf: { '@id': `${SITE_URL}/${lang}/resources` },
    itemListElement: itemListItems.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.title,
      item: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/${lang}/resources/${a.slug}`,
        url: `${SITE_URL}/${lang}/resources/${a.slug}`,
        name: a.title,
      },
    })),
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/${lang}/resources`,
    inLanguage: LANG_META[lang].htmlLang,
    name: metaTitle,
    description: metaDesc,
    url: `${SITE_URL}/${lang}/resources`,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    about: { '@type': 'Thing', name: 'Industrial Equipment Sourcing' },
    numberOfItems: itemListItems.length,
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
    mainEntity: { '@id': `${SITE_URL}/${lang}/resources#itemlist` },
  }

  return (
    <>
      <PageHero
        kicker={heroKicker}
        title={heroTitles[lang] || heroTitles.en}
        desc={heroDescs[lang] || heroDescs.en}
        image={{ src: heroPhoto, alt: 'Industrial sourcing guides', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

      <section className="py-6 bg-white">
        <Container>
          <Breadcrumbs
            lang={lang}
            items={[
              {
                label: ({
                  en: 'Resources',
                  cn: '资源中心',
                  zh: '資源中心',
                  fr: 'Ressources',
                  es: 'Recursos',
                  pt: 'Recursos',
                  ko: '리소스',
                  ja: 'リソース',
                  ar: 'الموارد',
                  th: 'แหล่งข้อมูล',
                  vi: 'Tài nguyên',
                  de: 'Ressourcen',
                } as Record<string, string>)[lang] || 'Resources',
                href: `/${lang}/resources`,
              },
            ]}
          />
        </Container>
      </section>

      <section className="py-8 bg-white">
        <Container>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-base font-bold text-gray-950">
              {({ en: 'Guides by machine', cn: '按机型浏览', zh: '依機型瀏覽', fr: 'Guides par machine', es: 'Guías por máquina', pt: 'Guias por máquina', ko: '기계별 가이드', ja: '機種別ガイド', ar: 'أدلة حسب الماكينة', th: 'คู่มือตามเครื่อง', vi: 'Hướng dẫn theo máy', de: 'Ratgeber nach Maschine' } as Record<string, string>)[lang] || 'Guides by machine'}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link className="text-accent-600 hover:underline" href={`/${lang}/resources/route/pouch-packaging`}>{({ en: 'Pouch packaging', cn: '袋包装', zh: '袋包裝', fr: 'Ensachage', es: 'Empaque en bolsa', pt: 'Embalagem em saco', ko: '파우치', ja: 'パウチ', ar: 'أكياس', th: 'ถุง', vi: 'Túi', de: 'Beutel' } as Record<string, string>)[lang] || 'Pouch packaging'}</Link>
              <Link className="text-accent-600 hover:underline" href={`/${lang}/resources/route/powder-dosing`}>{({ en: 'Powder dosing', cn: '粉体计量', zh: '粉體計量', fr: 'Poudre', es: 'Polvo', pt: 'Pó', ko: '분말', ja: '粉体', ar: 'مساحيق', th: 'ผง', vi: 'Bột', de: 'Pulver' } as Record<string, string>)[lang] || 'Powder dosing'}</Link>
              <Link className="text-accent-600 hover:underline" href={`/${lang}/resources/route/liquid-filling`}>{({ en: 'Liquid filling', cn: '液体灌装', zh: '液體灌裝', fr: 'Liquide', es: 'Líquidos', pt: 'Líquidos', ko: '액체', ja: '液体', ar: 'سوائل', th: 'ของเหลว', vi: 'Chất lỏng', de: 'Flüssig' } as Record<string, string>)[lang] || 'Liquid filling'}</Link>
              <Link className="text-accent-600 hover:underline" href={`/${lang}/resources/route/food-processing-line`}>{({ en: 'Food processing line', cn: '食品加工线', zh: '食品加工線', fr: 'Process', es: 'Proceso', pt: 'Processo', ko: '식품 라인', ja: '加工ライン', ar: 'معالجة', th: 'กระบวนการ', vi: 'Chế biến', de: 'Prozess' } as Record<string, string>)[lang] || 'Food processing line'}</Link>
              <Link className="text-accent-600 hover:underline" href={`/${lang}/resources/route/conveying-automation`}>{({ en: 'Conveying & automation', cn: '输送与自动化', zh: '輸送與自動化', fr: 'Convoyage', es: 'Transporte', pt: 'Transporte', ko: '이송/자동화', ja: '搬送/自動化', ar: 'نقل/أتمتة', th: 'ลำเลียง/อัตโนมัติ', vi: 'Băng tải/TĐH', de: 'Fördertechnik/Automation' } as Record<string, string>)[lang] || 'Conveying & automation'}</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Category nav anchors */}
      <div className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <Container>
          <nav className="flex gap-1 overflow-x-auto py-3 scrollbar-none sm:gap-2" aria-label="Resource categories">
            {cats.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex shrink-0 items-center rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 transition hover:border-accent-400 hover:bg-accent-50 hover:text-accent-700"
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Category sections */}
      {cats.map((cat) => (
        <section key={cat.id} id={cat.id} className="scroll-mt-16 py-14 sm:py-18 odd:bg-gray-50">
          <Container>
            <div className="mb-8 flex items-center gap-3">
              <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${categoryBadgeColors[cat.id] || 'bg-gray-100 text-gray-700'}`}>
                {cat.label}
              </span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cat.articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${lang}/resources/${article.slug}`}
                  className="group flex flex-col rounded-2xl bg-white p-6 shadow-elev-1 ring-1 ring-gray-200/60 transition hover:shadow-elev-2 hover:ring-accent-200"
                >
                  <span className={`mb-3 inline-flex self-start rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryBadgeColors[cat.id] || 'bg-gray-100 text-gray-700'}`}>
                    {cat.label}
                  </span>
                  <h2 className="text-base font-bold leading-snug text-gray-950 group-hover:text-accent-700">
                    {article.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {article.desc}
                  </p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:text-accent-700">
                    {({ en: 'Read more', cn: '阅读更多', zh: '閱讀更多', fr: 'Lire la suite', es: 'Leer más', pt: 'Ler mais', ko: '더 읽기', ja: '続きを読む', ar: 'اقرأ المزيد', th: 'อ่านเพิ่มเติม', vi: 'Đọc thêm', de: 'Mehr lesen' } as Record<string, string>)[lang] || 'Read more'}
                    {' →'}
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl bg-brand-950 px-8 py-12 text-center sm:px-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{cta.heading}</h2>
            <p className="mt-3 text-base text-brand-200 sm:text-lg">{cta.body}</p>
            <div className="mt-8">
              <ButtonLink href={`/${lang}/assessment`} size="lg">{cta.btn}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <JsonLd data={[howToSchema, itemListSchema, collectionSchema]} />
    </>
  )
}
