import { Lang } from '@/lib/i18n'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'

const titles: Record<string, string> = {
  en: 'Machinery Buying Guides & Resources | SunGene', cn: '资源中心｜SunGene', zh: '資源中心｜SunGene',
  fr: 'Guides d\'achat et ressources | SunGene', es: 'Guías de compra y recursos | SunGene',
  pt: 'Guias de Compra e Recursos | SunGene', ko: '기계 구매 가이드 및 리소스 | SunGene', ja: '機械購入ガイド・リソース | SunGene',
  ar: 'أدلة شراء الماكينات والموارد | SunGene', th: 'คู่มือการซื้อเครื่องจักรและแหล่งข้อมูล | SunGene', vi: 'Hướng Dẫn Mua Máy & Tài Nguyên | SunGene',
  de: 'Maschinenkaufratgeber & Ressourcen | SunGene',
}

const descriptions: Record<string, string> = {
  en: 'Practical buying guides for industrial machinery: how to choose packaging machines, VFFS vs HFFS comparison, import process from Taiwan, voltage requirements, and supplier evaluation tips.',
  cn: '工业机械实用采购指南：如何选择包装机械、VFFS与HFFS比较、台湾进口流程、电压要求和供应商评估技巧。',
  zh: '工業機械實用採購指南：如何選擇包裝機械、VFFS與HFFS比較、台灣進口流程、電壓要求和供應商評估技巧。',
  fr: 'Guides pratiques d\'achat de machines industrielles : choisir sa machine, VFFS vs HFFS, importation depuis Taïwan, exigences de tension et évaluation des fournisseurs.',
  es: 'Guías prácticas de compra de maquinaria industrial: elegir máquinas de empaque, VFFS vs HFFS, importación desde Taiwán, requisitos de voltaje y evaluación de proveedores.',
  pt: 'Guias práticos de compra de maquinário industrial: como escolher máquinas de embalagem, VFFS vs HFFS, importação de Taiwan, requisitos de tensão e avaliação de fornecedores.',
  ko: '산업 기계 실용 구매 가이드: 포장 기계 선택 방법, VFFS vs HFFS 비교, 대만 수입 절차, 전압 요건, 공급업체 평가 팁.',
  ja: '産業機械の実用的な購買ガイド：包装機の選び方、VFFS vs HFFS比較、台湾からの輸入手続き、電圧要件、サプライヤー評価のヒント。',
  ar: 'أدلة شراء عملية للآلات الصناعية: اختيار آلات التعبئة، مقارنة VFFS وHFFS، الاستيراد من تايوان، متطلبات الجهد وتقييم الموردين.',
  th: 'คู่มือการซื้อเครื่องจักรอุตสาหกรรม: วิธีเลือกเครื่องบรรจุภัณฑ์ VFFS กับ HFFS การนำเข้าจากไต้หวัน ข้อกำหนดแรงดันไฟฟ้า และการประเมินซัพพลายเออร์',
  vi: 'Hướng dẫn mua máy móc công nghiệp thực tế: cách chọn máy đóng gói, so sánh VFFS và HFFS, nhập khẩu từ Đài Loan, yêu cầu điện áp và đánh giá nhà cung cấp.',
  de: 'Praktische Kaufratgeber für Industriemaschinen: Verpackungsmaschinen auswählen, VFFS vs HFFS Vergleich, Import aus Taiwan, Spannungsanforderungen und Lieferantenbeurteilung.',
}

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de'].map(lang => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = (['en','zh','cn','fr','es','pt','ko','ja','ar','th','vi','de'].includes(lang)) ? lang : 'en'
  return {
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    keywords: ['packaging machine buying guide', 'how to choose packaging machine', 'VFFS HFFS comparison', 'import machinery Taiwan', 'machinery voltage requirements', 'packaging machinery guide'],
    alternates: {
      canonical: `${SITE_URL}/${l}/resources`,
      languages: {
        'en': `${SITE_URL}/en/resources`,
        'zh-TW': `${SITE_URL}/zh/resources`,
        'zh-CN': `${SITE_URL}/cn/resources`,
        'fr': `${SITE_URL}/fr/resources`,
        'es': `${SITE_URL}/es/resources`,
        'pt': `${SITE_URL}/pt/resources`,
        'ko': `${SITE_URL}/ko/resources`,
        'ja': `${SITE_URL}/ja/resources`,
        'ar': `${SITE_URL}/ar/resources`,
        'th': `${SITE_URL}/th/resources`,
        'vi': `${SITE_URL}/vi/resources`,
        'de': `${SITE_URL}/de/resources`,
        'x-default': `${SITE_URL}/en/resources`,
      }
    },
    openGraph: {
      title: titles[l] || titles.en,
      description: descriptions[l] || descriptions.en,
      url: `${SITE_URL}/${l}/resources`,
      siteName: 'SunGene Machinery',
      images: [{ url: `${SITE_URL}/og/og.png`, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: titles[l] || titles.en, description: descriptions[l] || descriptions.en, images: [`${SITE_URL}/og/og.png`] },
  }
}

// ─── article data ───────────────────────────────────────────────────────────

type Article = { title: string; desc: string; slug: string }
type Category = { id: string; label: string; articles: Article[] }

const categories: (lang: string) => Category[] = (lang) => {
  const t = {
    en: {
      comparison: 'Comparison Guides',
      selection: 'Selection Guides',
      application: 'Application Guides',
      buying: 'Buying Guides',
      readMore: 'Read more →',
      articles: {
        // Comparison
        'vffs-vs-hffs': { title: 'VFFS vs HFFS Packaging Machines', desc: 'Side-by-side comparison of vertical and horizontal form-fill-seal machines — which suits your product, speed, and bag style?' },
        'auger-vs-volumetric-filler': { title: 'Auger Filler vs Volumetric Filler', desc: 'Understand the difference between auger and volumetric dosing and choose the right filling mechanism for your powder product.' },
        'piston-vs-pump-filler': { title: 'Piston Filler vs Pump Filler', desc: 'Compare piston and pump filling for liquid and paste products — accuracy, cleanability, and cost trade-offs explained.' },
        'premade-pouch-machine-vs-vffs': { title: 'Premade Pouch Machine vs VFFS', desc: 'Compare premade pouch and VFFS systems by bag appearance, material cost, speed, and flexibility to choose the right packaging path.' },
        'semi-auto-vs-full-auto-packaging-line': { title: 'Semi-Automatic vs Fully Automatic Packaging Line', desc: 'Which automation level fits your business stage? Compare by labor, throughput, CapEx, and SKU flexibility.' },
        // Selection
        'how-to-choose-powder-filling-machine': { title: 'How to Choose a Powder Filling Machine', desc: 'Key criteria for selecting the right powder filler: product flow properties, dosing accuracy, output speed, and hygiene requirements.' },
        'how-to-choose-liquid-filling-machine': { title: 'How to Choose a Liquid Filling Machine', desc: 'From thin liquids to viscous pastes — how to match filling technology to your product viscosity, fill volume, and container type.' },
        'how-to-choose-pouch-packing-machine': { title: 'How to Choose a Pouch Packing Machine', desc: 'Premade pouch vs form-fill-seal, stand-up vs pillow — a practical guide to choosing the right pouch packaging machine.' },
        'how-to-choose-conveyor-system': { title: 'How to Choose a Conveyor System', desc: 'Match conveyor type to your product, line speed, plant layout, and integration points — a 5-step selection framework.' },
        // Application
        'spice-powder-packaging-machine': { title: 'Spice Powder Packaging Machine', desc: 'How to choose the right filling and packaging system for spices, herbs, and seasoning powders — flowability, format, and accuracy.' },
        'flour-packaging-machine-guide': { title: 'Flour Packaging Machine Guide', desc: 'Bag size, target output, and powder behavior determine machine type. What buyers should confirm before asking for a quote.' },
        'protein-powder-filling-machine': { title: 'Protein Powder Filling Machine', desc: 'Accuracy, hygiene level, and packaging format are the three deciding factors for protein powder filling machine selection.' },
        'sauce-filling-machine-selection': { title: 'Sauce Filling Machine Selection', desc: 'Match piston, pump, or gravity filling to your sauce viscosity, particulate content, and container type.' },
        'edible-oil-filling-machine': { title: 'Edible Oil Filling Machine', desc: 'Bottle range, output target, and line integration are the core decisions for edible oil filling projects.' },
        'snack-packing': { title: 'Snack Packing', desc: 'High-speed VFFS packaging for chips, puffs, nuts, and mixed snacks — weighing integration, nitrogen flushing, and film options.' },
        'detergent-powder-packaging-machine': { title: 'Detergent Powder Packaging Machine', desc: 'Dust control, seal stability, and bag format are more important than speed in detergent powder packaging design.' },
        // Buying
        'what-to-prepare-before-machine-quote': { title: 'What to Prepare Before Asking for a Quote', desc: 'The 6 essential technical inputs that turn a vague inquiry into a fast, accurate machine quotation.' },
        'voltage-customization-for-export': { title: 'Voltage Customization for Export Machinery', desc: 'How Taiwan-made machines are configured for 220V/380V 50Hz and 110V/480V 60Hz markets — what to specify before ordering.' },
        'ce-guide-for-machinery-buyers': { title: 'CE Guide for Machinery Buyers', desc: 'What CE marking means, which directives apply to packaging machinery, and what documentation to request from your supplier.' },
      },
    },
    cn: {
      comparison: '对比指南',
      selection: '选型指南',
      application: '应用指南',
      buying: '采购指南',
      readMore: '阅读更多 →',
      articles: {
        'vffs-vs-hffs': { title: 'VFFS与HFFS包装机对比', desc: '立式与卧式充填封口机的详细比较——哪种更适合您的产品、速度和袋型？' },
        'auger-vs-volumetric-filler': { title: '螺旋计量机与容积计量机', desc: '了解螺旋计量与容积计量的区别，为您的粉末产品选择正确的灌装机构。' },
        'piston-vs-pump-filler': { title: '活塞灌装机与泵式灌装机', desc: '比较液体和膏体产品的活塞与泵式灌装——精度、清洁性和成本权衡。' },
        'premade-pouch-machine-vs-vffs': { title: '预制袋机与VFFS对比', desc: '从袋型外观、包材成本、速度和灵活性比较预制袋与VFFS，选择正确的包装路线。' },
        'semi-auto-vs-full-auto-packaging-line': { title: '半自动与全自动包装线', desc: '哪种自动化程度适合您的业务阶段？从人工、产量、资本支出和SKU灵活性比较。' },
        'how-to-choose-powder-filling-machine': { title: '如何选择粉末灌装机', desc: '选择合适粉末灌装机的关键标准：产品流动性、计量精度、产速和卫生要求。' },
        'how-to-choose-liquid-filling-machine': { title: '如何选择液体灌装机', desc: '从稀液体到稠膏体——如何将灌装技术与您的产品粘度、灌装量和容器类型匹配。' },
        'how-to-choose-pouch-packing-machine': { title: '如何选择袋装包装机', desc: '预制袋与成型充填封口、自立袋与枕式袋——选择合适袋装机的实用指南。' },
        'how-to-choose-conveyor-system': { title: '如何选择输送系统', desc: '将输送机类型与产品、产线速度、厂房布局和整合点匹配——5步选型框架。' },
        'spice-powder-packaging-machine': { title: '香料粉末包装机', desc: '如何为香料、草药和调味粉选择正确的灌装和包装系统——流动性、包装形式和精度。' },
        'flour-packaging-machine-guide': { title: '面粉包装机指南', desc: '袋型、目标产量和粉体特性决定机型。买家在询价前应确认的内容。' },
        'protein-powder-filling-machine': { title: '蛋白粉灌装机', desc: '精度、卫生等级和包装形式是蛋白粉灌装机选型的三个决定因素。' },
        'sauce-filling-machine-selection': { title: '酱料灌装机选型', desc: '根据酱料粘度、颗粒含量和容器类型匹配活塞、泵式或重力灌装。' },
        'edible-oil-filling-machine': { title: '食用油灌装机', desc: '瓶型范围、目标产量和产线整合是食用油灌装项目的核心决策。' },
        'snack-packing': { title: '零食包装', desc: '薯片、膨化食品、坚果和混合零食的高速VFFS包装——称重集成、充氮和薄膜选项。' },
        'detergent-powder-packaging-machine': { title: '洗涤剂粉末包装机', desc: '防尘控制、封口稳定性和袋型比速度更重要——洗涤剂粉末包装设计要点。' },
        'what-to-prepare-before-machine-quote': { title: '询价前需要准备什么', desc: '将模糊询价转化为快速准确机械报价的6个核心技术输入。' },
        'voltage-customization-for-export': { title: '出口机械的电压定制', desc: '台湾制造的机器如何为220V/380V 50Hz和110V/480V 60Hz市场配置——订购前需要指定的内容。' },
        'ce-guide-for-machinery-buyers': { title: '机械采购商CE指南', desc: 'CE标志的含义、哪些指令适用于包装机械，以及向供应商索取哪些文件。' },
      },
    },
    zh: {
      comparison: '對比指南',
      selection: '選型指南',
      application: '應用指南',
      buying: '採購指南',
      readMore: '閱讀更多 →',
      articles: {
        'vffs-vs-hffs': { title: 'VFFS與HFFS包裝機對比', desc: '立式與臥式充填封口機的詳細比較——哪種更適合您的產品、速度和袋型？' },
        'auger-vs-volumetric-filler': { title: '螺旋計量機與容積計量機', desc: '了解螺旋計量與容積計量的區別，為您的粉末產品選擇正確的灌裝機構。' },
        'piston-vs-pump-filler': { title: '活塞灌裝機與泵式灌裝機', desc: '比較液體和膏體產品的活塞與泵式灌裝——精度、清潔性和成本權衡。' },
        'premade-pouch-machine-vs-vffs': { title: '預製袋機與VFFS對比', desc: '從袋型外觀、包材成本、速度和靈活性比較預製袋與VFFS，選擇正確的包裝路線。' },
        'semi-auto-vs-full-auto-packaging-line': { title: '半自動與全自動包裝線', desc: '哪種自動化程度適合您的業務階段？從人工、產量、資本支出和SKU靈活性比較。' },
        'how-to-choose-powder-filling-machine': { title: '如何選擇粉末灌裝機', desc: '選擇合適粉末灌裝機的關鍵標準：產品流動性、計量精度、產速和衛生要求。' },
        'how-to-choose-liquid-filling-machine': { title: '如何選擇液體灌裝機', desc: '從稀液體到稠膏體——如何將灌裝技術與您的產品黏度、灌裝量和容器類型匹配。' },
        'how-to-choose-pouch-packing-machine': { title: '如何選擇袋裝包裝機', desc: '預製袋與成型充填封口、自立袋與枕式袋——選擇合適袋裝機的實用指南。' },
        'how-to-choose-conveyor-system': { title: '如何選擇輸送系統', desc: '將輸送機類型與產品、產線速度、廠房布局和整合點匹配——5步選型框架。' },
        'spice-powder-packaging-machine': { title: '香料粉末包裝機', desc: '如何為香料、草藥和調味粉選擇正確的灌裝和包裝系統——流動性、包裝形式和精度。' },
        'flour-packaging-machine-guide': { title: '麵粉包裝機指南', desc: '袋型、目標產量和粉體特性決定機型。買家在詢價前應確認的內容。' },
        'protein-powder-filling-machine': { title: '蛋白粉灌裝機', desc: '精度、衛生等級和包裝形式是蛋白粉灌裝機選型的三個決定因素。' },
        'sauce-filling-machine-selection': { title: '醬料灌裝機選型', desc: '根據醬料黏度、顆粒含量和容器類型匹配活塞、泵式或重力灌裝。' },
        'edible-oil-filling-machine': { title: '食用油灌裝機', desc: '瓶型範圍、目標產量和產線整合是食用油灌裝項目的核心決策。' },
        'snack-packing': { title: '零食包裝', desc: '薯片、膨化食品、堅果和混合零食的高速VFFS包裝——稱重整合、充氮和薄膜選項。' },
        'detergent-powder-packaging-machine': { title: '洗滌劑粉末包裝機', desc: '防塵控制、封口穩定性和袋型比速度更重要——洗滌劑粉末包裝設計要點。' },
        'what-to-prepare-before-machine-quote': { title: '詢價前需要準備什麼', desc: '將模糊詢價轉化為快速準確機械報價的6個核心技術輸入。' },
        'voltage-customization-for-export': { title: '出口機械的電壓定制', desc: '台灣製造的機器如何為220V/380V 50Hz和110V/480V 60Hz市場配置——訂購前需要指定的內容。' },
        'ce-guide-for-machinery-buyers': { title: '機械採購商CE指南', desc: 'CE標誌的含義、哪些指令適用於包裝機械，以及向供應商索取哪些文件。' },
      },
    },
  } as Record<string, any>

  // fall back to English for unsupported languages
  const d = (t[lang] || t['en']) as typeof t['en']

  return [
    {
      id: 'comparison',
      label: d.comparison,
      articles: [
        { slug: 'vffs-vs-hffs', ...d.articles['vffs-vs-hffs'] },
        { slug: 'auger-vs-volumetric-filler', ...d.articles['auger-vs-volumetric-filler'] },
        { slug: 'piston-vs-pump-filler', ...d.articles['piston-vs-pump-filler'] },
        { slug: 'premade-pouch-machine-vs-vffs', ...d.articles['premade-pouch-machine-vs-vffs'] },
        { slug: 'semi-auto-vs-full-auto-packaging-line', ...d.articles['semi-auto-vs-full-auto-packaging-line'] },
      ],
    },
    {
      id: 'selection',
      label: d.selection,
      articles: [
        { slug: 'how-to-choose-powder-filling-machine', ...d.articles['how-to-choose-powder-filling-machine'] },
        { slug: 'how-to-choose-liquid-filling-machine', ...d.articles['how-to-choose-liquid-filling-machine'] },
        { slug: 'how-to-choose-pouch-packing-machine', ...d.articles['how-to-choose-pouch-packing-machine'] },
        { slug: 'how-to-choose-conveyor-system', ...d.articles['how-to-choose-conveyor-system'] },
      ],
    },
    {
      id: 'application',
      label: d.application,
      articles: [
        { slug: 'spice-powder-packaging-machine', ...d.articles['spice-powder-packaging-machine'] },
        { slug: 'flour-packaging-machine-guide', ...d.articles['flour-packaging-machine-guide'] },
        { slug: 'protein-powder-filling-machine', ...d.articles['protein-powder-filling-machine'] },
        { slug: 'sauce-filling-machine-selection', ...d.articles['sauce-filling-machine-selection'] },
        { slug: 'edible-oil-filling-machine', ...d.articles['edible-oil-filling-machine'] },
        { slug: 'snack-packing', ...d.articles['snack-packing'] },
        { slug: 'detergent-powder-packaging-machine', ...d.articles['detergent-powder-packaging-machine'] },
      ],
    },
    {
      id: 'buying',
      label: d.buying,
      articles: [
        { slug: 'what-to-prepare-before-machine-quote', ...d.articles['what-to-prepare-before-machine-quote'] },
        { slug: 'voltage-customization-for-export', ...d.articles['voltage-customization-for-export'] },
        { slug: 'ce-guide-for-machinery-buyers', ...d.articles['ce-guide-for-machinery-buyers'] },
      ],
    },
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

  const cats = categories(lang)

  const ctaLabels: Record<string, { heading: string; body: string; btn: string }> = {
    en: { heading: 'Can\'t find what you\'re looking for?', body: 'Tell us your requirements — we\'ll send the right machine recommendation.', btn: 'Get a Recommendation' },
    cn: { heading: '找不到您需要的内容？', body: '告诉我们您的需求——我们将发送合适的机械推荐。', btn: '获取推荐' },
    zh: { heading: '找不到您需要的內容？', body: '告訴我們您的需求——我們將發送合適的機械推薦。', btn: '取得推薦' },
    fr: { heading: 'Vous ne trouvez pas ce que vous cherchez ?', body: 'Dites-nous vos besoins — nous vous enverrons la bonne recommandation de machine.', btn: 'Obtenir une recommandation' },
    es: { heading: '¿No encuentra lo que busca?', body: 'Cuéntenos sus requisitos — le enviaremos la recomendación de máquina adecuada.', btn: 'Obtener recomendación' },
    pt: { heading: 'Não encontrou o que procura?', body: 'Diga-nos seus requisitos — enviaremos a recomendação de máquina certa.', btn: 'Obter recomendação' },
    ko: { heading: '원하시는 내용을 찾지 못하셨나요?', body: '요구 사항을 알려주시면 적합한 기계를 추천해 드리겠습니다.', btn: '추천 받기' },
    ja: { heading: 'お探しの情報が見つかりませんか？', body: 'ご要望をお聞かせください。最適な機械をご提案します。', btn: '推薦を受ける' },
    ar: { heading: 'ألا تجد ما تبحث عنه؟', body: 'أخبرنا بمتطلباتك — سنرسل لك التوصية المناسبة للآلة.', btn: 'احصل على توصية' },
    th: { heading: 'ไม่พบสิ่งที่คุณต้องการ?', body: 'บอกเราความต้องการของคุณ — เราจะส่งคำแนะนำเครื่องจักรที่เหมาะสม', btn: 'รับคำแนะนำ' },
    vi: { heading: 'Không tìm thấy những gì bạn cần?', body: 'Hãy cho chúng tôi biết yêu cầu của bạn — chúng tôi sẽ gửi đề xuất máy phù hợp.', btn: 'Nhận đề xuất' },
    de: { heading: 'Können Sie nicht finden, was Sie suchen?', body: 'Teilen Sie uns Ihre Anforderungen mit — wir senden Ihnen die passende Maschinenempfehlung.', btn: 'Empfehlung erhalten' },
  }

  const cta = ctaLabels[lang] || ctaLabels['en']

  const heroKicker = ({
    en: 'RESOURCES', cn: '资源中心', zh: '資源中心', fr: 'RESSOURCES', es: 'RECURSOS',
    pt: 'RECURSOS', ko: '리소스', ja: 'リソース', ar: 'الموارد', th: 'แหล่งข้อมูล', vi: 'TÀI NGUYÊN', de: 'RESSOURCEN',
  } as Record<string, string>)[lang] || 'RESOURCES'

  const heroTitles: Record<string, string> = {
    en: 'Machinery Buying Guides', cn: '机械采购指南', zh: '機械採購指南',
    fr: 'Guides d\'achat machines', es: 'Guías de compra de maquinaria',
    pt: 'Guias de Compra de Maquinário', ko: '기계 구매 가이드', ja: '機械購入ガイド',
    ar: 'أدلة شراء الماكينات', th: 'คู่มือการซื้อเครื่องจักร', vi: 'Hướng Dẫn Mua Máy', de: 'Maschinenkaufratgeber',
  }

  const heroDescs: Record<string, string> = {
    en: 'Practical guides to help you choose the right machinery, plan your production line, and navigate the export process. Knowledge that saves you time and money.',
    cn: '帮助您选择合适机械、规划生产线和了解出口流程的实用指南。节省您的时间和成本的知识。',
    zh: '幫助您選擇合適機械、規劃生產線和了解出口流程的實用指南。節省您的時間和成本的知識。',
    fr: 'Guides pratiques pour vous aider à choisir la bonne machine, planifier votre ligne de production et naviguer le processus d\'exportation.',
    es: 'Guías prácticas para ayudarle a elegir la maquinaria adecuada, planificar su línea de producción y navegar el proceso de exportación.',
    pt: 'Guias práticos para ajudá-lo a escolher o maquinário certo, planejar sua linha de produção e navegar pelo processo de exportação.',
    ko: '적합한 기계를 선택하고, 생산 라인을 계획하며, 수출 프로세스를 이해하는 데 도움이 되는 실용적인 가이드입니다.',
    ja: '適切な機械の選定、生産ラインの計画、輸出プロセスのナビゲーションに役立つ実用ガイドです。',
    ar: 'أدلة عملية لمساعدتك في اختيار الماكينات المناسبة وتخطيط خط الإنتاج والتعامل مع عملية التصدير.',
    th: 'คู่มือที่เป็นประโยชน์เพื่อช่วยคุณเลือกเครื่องจักรที่เหมาะสม วางแผนสายการผลิต และดำเนินกระบวนการส่งออก',
    vi: 'Các hướng dẫn thực tế giúp bạn chọn máy móc phù hợp, lên kế hoạch dây chuyền sản xuất và tìm hiểu quy trình xuất khẩu.',
    de: 'Praktische Ratgeber, die Ihnen helfen, die richtige Maschine auszuwählen, Ihre Produktionslinie zu planen und den Exportprozess zu verstehen.',
  }

  return (
    <>
      <PageHero
        kicker={heroKicker}
        title={heroTitles[lang] || heroTitles.en}
        desc={heroDescs[lang] || heroDescs.en}
        image={{ src: heroPhoto, alt: 'Machinery buying guides', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

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
              <ButtonLink href={`/${lang}/recommend`} size="lg">{cta.btn}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Choose the Right Industrial Packaging Machine',
        description: 'A step-by-step guide to selecting the optimal packaging or filling machine for your product, production goals, and budget.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Identify your product type', text: 'Determine if your product is powder, liquid, granule, solid, or a combination. This determines the filling and packaging mechanism.' },
          { '@type': 'HowToStep', position: 2, name: 'Define your packaging format', text: 'Choose between pillow bag, stand-up pouch, bottle, sachet, can, or bulk. Each format requires different machinery.' },
          { '@type': 'HowToStep', position: 3, name: 'Set your production speed target', text: 'Calculate the bags, bottles, or units per minute or per hour you need. This determines whether you need semi-automatic or fully automatic equipment.' },
          { '@type': 'HowToStep', position: 4, name: 'Confirm voltage and certification requirements', text: 'Check your local power supply (voltage, phase, frequency) and required certifications (CE, FDA, etc.) before ordering from a foreign manufacturer.' },
          { '@type': 'HowToStep', position: 5, name: 'Contact manufacturer for engineering consultation', text: 'Send your product sample, target output, and packaging specs to SunGene engineers. They will recommend the optimal machine model and provide a detailed quote.' },
        ],
      }} />
    </>
  )
}
