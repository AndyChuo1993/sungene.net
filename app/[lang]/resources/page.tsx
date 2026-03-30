import { Lang } from '@/lib/i18n'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import { SITE_URL } from '@/lib/siteConfig'
import { getArticlesByCategory } from '@/lib/articleData'

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
    fr: {
      comparison: 'Guides comparatifs',
      selection: 'Guides de sélection',
      application: 'Guides d’application',
      buying: 'Guides d’achat',
      readMore: 'Lire la suite →',
      articles: {
        'vffs-vs-hffs': { title: 'VFFS vs HFFS : machines d’emballage', desc: 'Comparatif VFFS/HFFS : quel système convient à votre produit, cadence et style de sachet ?' },
        'auger-vs-volumetric-filler': { title: 'Doseuse à vis vs doseuse volumétrique', desc: 'Différences vis/volumétrique et comment choisir le bon mécanisme pour vos poudres.' },
        'piston-vs-pump-filler': { title: 'Remplissage à piston vs à pompe', desc: 'Liquides et pâtes : précision, nettoyage et compromis de coût entre piston et pompe.' },
        'premade-pouch-machine-vs-vffs': { title: 'Poche préformée vs VFFS', desc: 'Comparer poche préformée et VFFS : rendu, coût film/sachet, vitesse et flexibilité.' },
        'semi-auto-vs-full-auto-packaging-line': { title: 'Ligne semi-auto vs entièrement automatique', desc: 'Quel niveau d’automatisation ? Comparaison main-d’œuvre, débit, investissement et flexibilité SKU.' },
        'how-to-choose-powder-filling-machine': { title: 'Comment choisir une remplisseuse de poudres', desc: 'Critères clés : fluidité, précision de dosage, cadence et exigences d’hygiène.' },
        'how-to-choose-liquid-filling-machine': { title: 'Comment choisir une remplisseuse de liquides', desc: 'Du liquide fluide aux pâtes visqueuses : adapter la technologie au produit, volume et contenant.' },
        'how-to-choose-pouch-packing-machine': { title: 'Comment choisir une machine d’emballage en pouch', desc: 'Poche préformée vs FFS, doypack vs pillow : guide pratique pour choisir la bonne solution.' },
        'how-to-choose-conveyor-system': { title: 'Comment choisir un système de convoyage', desc: 'Type de convoyeur, vitesse de ligne, implantation et points d’intégration : cadre de sélection en 5 étapes.' },
        'spice-powder-packaging-machine': { title: 'Machine d’emballage pour poudres d’épices', desc: 'Choisir le bon système pour épices et assaisonnements : fluidité, format, précision et poussière.' },
        'flour-packaging-machine-guide': { title: 'Guide machine d’emballage pour farine', desc: 'Le type de sac, la cadence et le comportement poudre déterminent la solution. À confirmer avant devis.' },
        'protein-powder-filling-machine': { title: 'Machine de dosage pour protéine en poudre', desc: 'Précision, niveau d’hygiène et format d’emballage : 3 facteurs décisifs pour la protéine.' },
        'sauce-filling-machine-selection': { title: 'Choisir une remplisseuse pour sauces', desc: 'Adapter piston, pompe ou gravité à la viscosité, particules et type de contenant.' },
        'edible-oil-filling-machine': { title: 'Remplissage d’huile alimentaire', desc: 'Gamme de bouteilles, cadence et intégration de ligne : décisions clés pour les projets d’huile.' },
        'snack-packing': { title: 'Emballage de snacks', desc: 'VFFS haute cadence pour chips, noix, snacks : pesage, injection d’azote et options de film.' },
        'detergent-powder-packaging-machine': { title: 'Machine d’emballage pour poudre détergente', desc: 'Dépoussiérage, stabilité de soudure et format de sac sont plus critiques que la vitesse.' },
        'what-to-prepare-before-machine-quote': { title: 'Que préparer avant de demander un devis', desc: 'Les 6 informations techniques essentielles pour un devis rapide et précis.' },
        'voltage-customization-for-export': { title: 'Personnalisation de tension pour l’export', desc: 'Configurer 220/380V 50Hz ou 110/480V 60Hz : quoi spécifier avant commande.' },
        'ce-guide-for-machinery-buyers': { title: 'Guide CE pour acheteurs de machines', desc: 'CE : signification, directives applicables et documents à demander au fournisseur.' },
      },
    },
    es: {
      comparison: 'Guías comparativas',
      selection: 'Guías de selección',
      application: 'Guías de aplicación',
      buying: 'Guías de compra',
      readMore: 'Leer más →',
      articles: {
        'vffs-vs-hffs': { title: 'VFFS vs HFFS en máquinas de empaque', desc: 'Comparación VFFS/HFFS: qué sistema conviene según producto, velocidad y tipo de bolsa.' },
        'auger-vs-volumetric-filler': { title: 'Sinfin vs volumétrico', desc: 'Diferencias entre dosificación por sinfín y volumétrica para elegir el sistema correcto en polvos.' },
        'piston-vs-pump-filler': { title: 'Pistón vs bomba para llenado', desc: 'Líquidos y pastas: precisión, limpieza y costo comparando llenadoras de pistón y de bomba.' },
        'premade-pouch-machine-vs-vffs': { title: 'Pouch preformado vs VFFS', desc: 'Compare pouch preformado y VFFS por apariencia, costo de material, velocidad y flexibilidad.' },
        'semi-auto-vs-full-auto-packaging-line': { title: 'Línea semiautomática vs totalmente automática', desc: 'Automatización ideal según su etapa: mano de obra, throughput, inversión y flexibilidad de SKU.' },
        'how-to-choose-powder-filling-machine': { title: 'Cómo elegir una llenadora de polvo', desc: 'Criterios clave: fluidez, precisión, velocidad objetivo y requisitos de higiene.' },
        'how-to-choose-liquid-filling-machine': { title: 'Cómo elegir una llenadora de líquidos', desc: 'De líquidos ligeros a pastas viscosas: tecnología según viscosidad, volumen y envase.' },
        'how-to-choose-pouch-packing-machine': { title: 'Cómo elegir una máquina para pouch', desc: 'Preformado vs FFS, doypack vs pillow: guía práctica para seleccionar su empaque.' },
        'how-to-choose-conveyor-system': { title: 'Cómo elegir un sistema de transporte', desc: 'Tipo de transportador, velocidad de línea, layout e integración: marco de selección en 5 pasos.' },
        'spice-powder-packaging-machine': { title: 'Máquina para empaque de especias en polvo', desc: 'Selección por fluidez, formato y precisión para especias y condimentos; control de polvo incluido.' },
        'flour-packaging-machine-guide': { title: 'Guía de máquina para empaque de harina', desc: 'Tamaño de bolsa, velocidad y comportamiento del polvo definen la solución. Qué confirmar antes del presupuesto.' },
        'protein-powder-filling-machine': { title: 'Máquina de llenado para proteína en polvo', desc: 'Precisión, higiene y formato de empaque: los 3 factores decisivos para proteína en polvo.' },
        'sauce-filling-machine-selection': { title: 'Selección de máquina para llenado de salsas', desc: 'Pistón, bomba o gravedad según viscosidad, partículas y tipo de envase.' },
        'edible-oil-filling-machine': { title: 'Máquina para llenado de aceite comestible', desc: 'Rango de botellas, capacidad y integración de línea: decisiones clave para proyectos de aceite.' },
        'snack-packing': { title: 'Empaque de snacks', desc: 'Empaque VFFS de alta velocidad para chips, nueces y snacks: pesaje, nitrógeno y opciones de film.' },
        'detergent-powder-packaging-machine': { title: 'Máquina para empaque de detergente en polvo', desc: 'Control de polvo, estabilidad de sellado y formato de bolsa importan más que la velocidad.' },
        'what-to-prepare-before-machine-quote': { title: 'Qué preparar antes de pedir una cotización', desc: 'Las 6 entradas técnicas esenciales para obtener una cotización rápida y precisa.' },
        'voltage-customization-for-export': { title: 'Personalización de voltaje para exportación', desc: 'Cómo configurar 220/380V 50Hz y 110/480V 60Hz; qué especificar antes de comprar.' },
        'ce-guide-for-machinery-buyers': { title: 'Guía CE para compradores de maquinaria', desc: 'Qué significa CE, qué directivas aplican y qué documentos pedir al proveedor.' },
      },
    },
    pt: {
      comparison: 'Guias comparativos',
      selection: 'Guias de seleção',
      application: 'Guias de aplicação',
      buying: 'Guias de compra',
      readMore: 'Ler mais →',
      articles: {
        'vffs-vs-hffs': { title: 'VFFS vs HFFS em máquinas de embalagem', desc: 'Comparação lado a lado: qual sistema combina com seu produto, velocidade e tipo de saco.' },
        'auger-vs-volumetric-filler': { title: 'Dosador de rosca vs volumétrico', desc: 'Entenda as diferenças e escolha o mecanismo certo de dosagem para seus pós.' },
        'piston-vs-pump-filler': { title: 'Enchedora de pistão vs bomba', desc: 'Líquidos e pastas: precisão, limpeza e custo na comparação entre pistão e bomba.' },
        'premade-pouch-machine-vs-vffs': { title: 'Pouch pré-formado vs VFFS', desc: 'Compare por aparência do pacote, custo de material, velocidade e flexibilidade.' },
        'semi-auto-vs-full-auto-packaging-line': { title: 'Linha semiautomática vs totalmente automática', desc: 'Qual nível de automação? Compare mão de obra, throughput, investimento e flexibilidade de SKU.' },
        'how-to-choose-powder-filling-machine': { title: 'Como escolher uma enchedora de pó', desc: 'Critérios: fluidez do produto, precisão de dosagem, velocidade alvo e higiene.' },
        'how-to-choose-liquid-filling-machine': { title: 'Como escolher uma enchedora de líquidos', desc: 'De líquidos finos a pastas viscosas: tecnologia por viscosidade, volume e recipiente.' },
        'how-to-choose-pouch-packing-machine': { title: 'Como escolher uma máquina para pouch', desc: 'Pouch pré-formado vs FFS, stand-up vs pillow: guia prático de seleção.' },
        'how-to-choose-conveyor-system': { title: 'Como escolher um sistema de transportadores', desc: 'Tipo de transportador, velocidade, layout e integração: estrutura de decisão em 5 passos.' },
        'spice-powder-packaging-machine': { title: 'Máquina para embalagem de temperos em pó', desc: 'Seleção para especiarias e condimentos: fluidez, formato, precisão e controle de pó.' },
        'flour-packaging-machine-guide': { title: 'Guia de máquina para embalagem de farinha', desc: 'Tipo de saco, output e comportamento do pó definem a solução. O que confirmar antes do orçamento.' },
        'protein-powder-filling-machine': { title: 'Máquina de enchimento para proteína em pó', desc: 'Precisão, higiene e formato de embalagem: 3 fatores decisivos para proteína em pó.' },
        'sauce-filling-machine-selection': { title: 'Seleção de máquina para enchimento de molhos', desc: 'Pistão, bomba ou gravidade conforme viscosidade, particulados e tipo de recipiente.' },
        'edible-oil-filling-machine': { title: 'Máquina para enchimento de óleo comestível', desc: 'Faixa de frascos, output e integração de linha: decisões-chave em projetos de óleo.' },
        'snack-packing': { title: 'Embalagem de snacks', desc: 'VFFS de alta velocidade para chips, nuts e snacks: pesagem, nitrogênio e opções de filme.' },
        'detergent-powder-packaging-machine': { title: 'Máquina para embalagem de detergente em pó', desc: 'Controle de pó, estabilidade de selagem e formato do saco importam mais que velocidade.' },
        'what-to-prepare-before-machine-quote': { title: 'O que preparar antes de pedir cotação', desc: 'As 6 informações técnicas essenciais para uma cotação rápida e precisa.' },
        'voltage-customization-for-export': { title: 'Customização de tensão para exportação', desc: 'Configurar 220/380V 50Hz e 110/480V 60Hz: o que especificar antes de comprar.' },
        'ce-guide-for-machinery-buyers': { title: 'Guia CE para compradores de máquinas', desc: 'O que é CE, quais diretrizes se aplicam e quais documentos solicitar ao fornecedor.' },
      },
    },
    ko: {
      comparison: '비교 가이드',
      selection: '선정 가이드',
      application: '적용 가이드',
      buying: '구매 가이드',
      readMore: '더 읽기 →',
      articles: {
        'vffs-vs-hffs': { title: 'VFFS vs HFFS 포장기 비교', desc: '제품, 속도, 봉투 형태에 맞는 VFFS/HFFS 선택을 한눈에 정리했습니다.' },
        'auger-vs-volumetric-filler': { title: '오거(스크류) vs 용적식 충진', desc: '분말 제품에 맞는 계량 방식 선택: 오거와 용적식의 차이를 설명합니다.' },
        'piston-vs-pump-filler': { title: '피스톤 vs 펌프 충진', desc: '액체/점도 제품에서 피스톤과 펌프의 정확도, 세척성, 비용을 비교합니다.' },
        'premade-pouch-machine-vs-vffs': { title: '프리메이드 파우치 vs VFFS', desc: '외관, 포장재 비용, 속도, 유연성 기준으로 두 방식을 비교합니다.' },
        'semi-auto-vs-full-auto-packaging-line': { title: '반자동 vs 전자동 포장 라인', desc: '인력, 처리량, 투자비, SKU 유연성 기준으로 자동화 수준을 비교합니다.' },
        'how-to-choose-powder-filling-machine': { title: '분말 충진기 선택 방법', desc: '유동성, 정확도, 목표 속도, 위생 요구사항으로 분말 충진기를 선택합니다.' },
        'how-to-choose-liquid-filling-machine': { title: '액체 충진기 선택 방법', desc: '묽은 액체부터 점도가 높은 페이스트까지: 점도/용기/용량에 맞춰 선택합니다.' },
        'how-to-choose-pouch-packing-machine': { title: '파우치 포장기 선택 방법', desc: '프리메이드 vs FFS, 스탠드업 vs 필로우: 실무 기준으로 정리한 선택 가이드입니다.' },
        'how-to-choose-conveyor-system': { title: '컨베이어 시스템 선택 방법', desc: '제품, 라인 속도, 레이아웃, 통합 포인트를 기준으로 5단계로 선택합니다.' },
        'spice-powder-packaging-machine': { title: '향신료 분말 포장기', desc: '유동성, 포장 형태, 정확도, 분진 제어 관점에서 향신료/시즈닝 포장 선택을 안내합니다.' },
        'flour-packaging-machine-guide': { title: '밀가루 포장기 가이드', desc: '봉투 크기, 처리량, 분말 특성이 장비를 결정합니다. 견적 전 확인 사항을 정리했습니다.' },
        'protein-powder-filling-machine': { title: '단백질 분말 충진기', desc: '정확도, 위생 수준, 포장 형태 3가지가 단백질 분말 충진기의 핵심 결정 요소입니다.' },
        'sauce-filling-machine-selection': { title: '소스 충진기 선택', desc: '점도/입자/용기 형태에 따라 피스톤·펌프·중력식 충진을 매칭합니다.' },
        'edible-oil-filling-machine': { title: '식용유 충진기', desc: '병 범위, 목표 생산량, 라인 통합이 식용유 충진 프로젝트의 핵심입니다.' },
        'snack-packing': { title: '스낵 포장', desc: '칩·견과·스낵용 고속 VFFS: 계량 연동, 질소 충전, 필름 옵션을 다룹니다.' },
        'detergent-powder-packaging-machine': { title: '세제 분말 포장기', desc: '속도보다 분진 제어, 씰 안정성, 봉투 형태가 더 중요합니다.' },
        'what-to-prepare-before-machine-quote': { title: '견적 요청 전 준비사항', desc: '빠르고 정확한 견적을 위한 6가지 핵심 기술 정보를 정리했습니다.' },
        'voltage-customization-for-export': { title: '수출 장비 전압 커스터마이징', desc: '220/380V 50Hz 및 110/480V 60Hz 시장 대응: 주문 전 지정해야 할 항목.' },
        'ce-guide-for-machinery-buyers': { title: '기계 구매자용 CE 가이드', desc: 'CE 의미, 적용 지침, 공급업체에 요청해야 할 문서를 정리했습니다.' },
      },
    },
    ja: {
      comparison: '比較ガイド',
      selection: '選定ガイド',
      application: '用途ガイド',
      buying: '購入ガイド',
      readMore: '続きを読む →',
      articles: {
        'vffs-vs-hffs': { title: 'VFFS vs HFFS 包装機 比較', desc: '製品・速度・袋形状に合わせてVFFS/HFFSを比較し、最適な選択を解説します。' },
        'auger-vs-volumetric-filler': { title: 'オーガー式 vs 容積式 充填', desc: '粉体に適した計量方式を選ぶために、オーガーと容積式の違いを整理します。' },
        'piston-vs-pump-filler': { title: 'ピストン式 vs ポンプ式 充填', desc: '液体・ペースト向けに、精度・洗浄性・コストの観点で比較します。' },
        'premade-pouch-machine-vs-vffs': { title: '既製パウチ機 vs VFFS', desc: '見栄え、包材コスト、速度、柔軟性で既製パウチとVFFSを比較します。' },
        'semi-auto-vs-full-auto-packaging-line': { title: '半自動ライン vs 全自動ライン', desc: '人員、処理量、投資額、SKUの柔軟性で自動化レベルを比較します。' },
        'how-to-choose-powder-filling-machine': { title: '粉体充填機の選び方', desc: '流動性、精度、目標速度、衛生要件の観点で粉体充填機を選定します。' },
        'how-to-choose-liquid-filling-machine': { title: '液体充填機の選び方', desc: '低粘度から高粘度まで：粘度・容量・容器タイプに合わせた選定ガイド。' },
        'how-to-choose-pouch-packing-machine': { title: 'パウチ包装機の選び方', desc: '既製パウチ vs FFS、スタンドパウチ vs ピロー：実務目線の選定ガイド。' },
        'how-to-choose-conveyor-system': { title: '搬送（コンベヤ）システムの選び方', desc: '製品、ライン速度、レイアウト、連携点を基に5ステップで選定します。' },
        'spice-powder-packaging-machine': { title: 'スパイス粉末 包装機', desc: '流動性、包装形式、精度、粉じん対策からスパイス・調味粉の最適構成を解説。' },
        'flour-packaging-machine-guide': { title: '小麦粉 包装機ガイド', desc: '袋サイズ、処理量、粉体特性で機種が決まります。見積前の確認項目を整理。' },
        'protein-powder-filling-machine': { title: 'プロテイン粉末 充填機', desc: '精度、衛生レベル、包装形式の3点が選定の決め手です。' },
        'sauce-filling-machine-selection': { title: 'ソース充填機の選定', desc: '粘度・具材・容器タイプに合わせてピストン／ポンプ／重力式を選びます。' },
        'edible-oil-filling-machine': { title: '食用油 充填機', desc: 'ボトル範囲、目標能力、ライン統合が食用油プロジェクトの重要ポイントです。' },
        'snack-packing': { title: 'スナック包装', desc: 'チップス、ナッツ等の高速VFFS：計量連携、窒素充填、フィルム選定を解説。' },
        'detergent-powder-packaging-machine': { title: '洗剤粉末 包装機', desc: '速度よりも粉じん対策、シール安定性、袋形式が重要です。' },
        'what-to-prepare-before-machine-quote': { title: '見積依頼前に準備すること', desc: '曖昧な問い合わせを、迅速で正確な見積に変える6つの必須情報。' },
        'voltage-customization-for-export': { title: '輸出向け電圧カスタム', desc: '220/380V 50Hz と 110/480V 60Hz 対応：発注前に指定すべき項目。' },
        'ce-guide-for-machinery-buyers': { title: '機械購入者向け CE ガイド', desc: 'CEの意味、適用指令、サプライヤーへ求めるべき書類を整理します。' },
      },
    },
    ar: {
      comparison: 'أدلة المقارنة',
      selection: 'أدلة الاختيار',
      application: 'أدلة التطبيقات',
      buying: 'أدلة الشراء',
      readMore: 'اقرأ المزيد →',
      articles: {
        'vffs-vs-hffs': { title: 'مقارنة VFFS و HFFS', desc: 'مقارنة عملية لاختيار النظام الأنسب حسب المنتج والسرعة ونوع الكيس.' },
        'auger-vs-volumetric-filler': { title: 'لولبي (أوجر) مقابل حجمي', desc: 'فهم الفرق بين الجرعات اللولبية والحجمية لاختيار آلية التعبئة المناسبة للمساحيق.' },
        'piston-vs-pump-filler': { title: 'مكبس مقابل مضخة للتعبئة', desc: 'للسوائل والمعاجين: مقارنة الدقة وسهولة التنظيف والتكلفة بين المكبس والمضخة.' },
        'premade-pouch-machine-vs-vffs': { title: 'أكياس جاهزة مقابل VFFS', desc: 'مقارنة المظهر وتكلفة مواد التغليف والسرعة والمرونة لاختيار المسار الصحيح.' },
        'semi-auto-vs-full-auto-packaging-line': { title: 'خط نصف آلي مقابل خط آلي بالكامل', desc: 'اختيار مستوى الأتمتة حسب المرحلة: العمالة والإنتاجية والاستثمار ومرونة SKU.' },
        'how-to-choose-powder-filling-machine': { title: 'كيفية اختيار آلة تعبئة المساحيق', desc: 'معايير الاختيار: قابلية الانسياب، دقة الجرعات، السرعة المستهدفة، ومتطلبات النظافة.' },
        'how-to-choose-liquid-filling-machine': { title: 'كيفية اختيار آلة تعبئة السوائل', desc: 'من السوائل الخفيفة إلى المعاجين: مطابقة تقنية التعبئة مع اللزوجة والحجم ونوع العبوة.' },
        'how-to-choose-pouch-packing-machine': { title: 'كيفية اختيار آلة تعبئة الأكياس', desc: 'أكياس جاهزة أم FFS؟ دويباك أم وسادة؟ دليل عملي للاختيار.' },
        'how-to-choose-conveyor-system': { title: 'كيفية اختيار نظام ناقل', desc: 'اختيار نوع الناقل حسب المنتج وسرعة الخط ومخطط المصنع ونقاط التكامل ضمن 5 خطوات.' },
        'spice-powder-packaging-machine': { title: 'آلة تغليف مسحوق التوابل', desc: 'اختيار النظام المناسب للتوابل والمساحيق: الانسيابية، الشكل، الدقة، والتحكم بالغبار.' },
        'flour-packaging-machine-guide': { title: 'دليل آلة تغليف الدقيق', desc: 'حجم الكيس والإنتاجية وسلوك المسحوق تحدد الحل. ما يجب تأكيده قبل طلب السعر.' },
        'protein-powder-filling-machine': { title: 'آلة تعبئة مسحوق البروتين', desc: 'الدقة، مستوى النظافة، وشكل العبوة هي العوامل الثلاثة الحاسمة لاختيار الآلة.' },
        'sauce-filling-machine-selection': { title: 'اختيار آلة تعبئة الصلصات', desc: 'مطابقة المكبس أو المضخة أو الجاذبية مع لزوجة الصلصة والجزيئات ونوع العبوة.' },
        'edible-oil-filling-machine': { title: 'آلة تعبئة زيت الطعام', desc: 'نطاق العبوات، الإنتاجية، وتكامل الخط هي القرارات الأساسية لمشاريع الزيوت.' },
        'snack-packing': { title: 'تغليف السناكات', desc: 'تغليف VFFS عالي السرعة للشيبس والمكسرات: تكامل الوزن والنيتروجين وخيارات الفيلم.' },
        'detergent-powder-packaging-machine': { title: 'آلة تغليف مسحوق المنظفات', desc: 'التحكم بالغبار وثبات اللحام وشكل الكيس أهم من السرعة في تصميم تغليف المنظفات.' },
        'what-to-prepare-before-machine-quote': { title: 'ما الذي يجب تحضيره قبل طلب عرض سعر', desc: '6 معلومات تقنية أساسية للحصول على عرض سعر سريع ودقيق.' },
        'voltage-customization-for-export': { title: 'تخصيص الجهد للتصدير', desc: 'تهيئة 220/380V 50Hz و 110/480V 60Hz: ما الذي يجب تحديده قبل الطلب.' },
        'ce-guide-for-machinery-buyers': { title: 'دليل CE لمشتري الآلات', desc: 'ماذا تعني علامة CE، ما التوجيهات المطبقة، وما الوثائق التي يجب طلبها من المورد.' },
      },
    },
    th: {
      comparison: 'คู่มือเปรียบเทียบ',
      selection: 'คู่มือการเลือก',
      application: 'คู่มือการใช้งาน',
      buying: 'คู่มือการซื้อ',
      readMore: 'อ่านเพิ่มเติม →',
      articles: {
        'vffs-vs-hffs': { title: 'เปรียบเทียบ VFFS vs HFFS', desc: 'เปรียบเทียบแบบเห็นภาพ: เลือกระบบที่เหมาะกับสินค้า ความเร็ว และรูปแบบถุงของคุณ' },
        'auger-vs-volumetric-filler': { title: 'สกรู (ออเกอร์) vs วอลุ่มเมตริก', desc: 'เข้าใจความต่างของการจ่ายแบบสกรูและแบบปริมาตร เพื่อเลือกการเติมที่เหมาะกับผง' },
        'piston-vs-pump-filler': { title: 'ลูกสูบ vs ปั๊มสำหรับการบรรจุ', desc: 'เปรียบเทียบความแม่นยำ การทำความสะอาด และต้นทุน สำหรับของเหลว/เพสต์' },
        'premade-pouch-machine-vs-vffs': { title: 'ถุงสำเร็จรูป vs VFFS', desc: 'เปรียบเทียบความสวยงาม ต้นทุนวัสดุ ความเร็ว และความยืดหยุ่น เพื่อเลือกแนวทางบรรจุ' },
        'semi-auto-vs-full-auto-packaging-line': { title: 'ไลน์กึ่งอัตโนมัติ vs อัตโนมัติเต็มรูปแบบ', desc: 'เลือกระดับอัตโนมัติจากแรงงาน กำลังผลิต เงินลงทุน และความยืดหยุ่นของ SKU' },
        'how-to-choose-powder-filling-machine': { title: 'วิธีเลือกเครื่องบรรจุผง', desc: 'เกณฑ์หลัก: การไหลของสินค้า ความแม่นยำ ความเร็วเป้าหมาย และข้อกำหนดสุขอนามัย' },
        'how-to-choose-liquid-filling-machine': { title: 'วิธีเลือกเครื่องบรรจุของเหลว', desc: 'จากเหลวใสถึงเพสต์ข้น: เลือกเทคโนโลยีตามความหนืด ปริมาตร และภาชนะ' },
        'how-to-choose-pouch-packing-machine': { title: 'วิธีเลือกเครื่องบรรจุถุง/พาวช์', desc: 'ถุงสำเร็จรูป vs FFS, ถุงตั้ง vs ถุงหมอน: คู่มือเลือกแบบใช้งานจริง' },
        'how-to-choose-conveyor-system': { title: 'วิธีเลือกระบบสายพาน/ลำเลียง', desc: 'จับคู่ชนิดสายพานกับสินค้า ความเร็วไลน์ เลย์เอาต์ และจุดเชื่อมต่อ ด้วยกรอบ 5 ขั้นตอน' },
        'spice-powder-packaging-machine': { title: 'เครื่องบรรจุผงเครื่องเทศ', desc: 'เลือกระบบสำหรับเครื่องเทศ/ผงปรุง: การไหล รูปแบบถุง ความแม่นยำ และการควบคุมฝุ่น' },
        'flour-packaging-machine-guide': { title: 'คู่มือเครื่องบรรจุแป้ง', desc: 'ขนาดถุง กำลังผลิต และพฤติกรรมของผงเป็นตัวกำหนดชนิดเครื่อง ควรยืนยันก่อนขอราคา' },
        'protein-powder-filling-machine': { title: 'เครื่องบรรจุผงโปรตีน', desc: 'ความแม่นยำ สุขอนามัย และรูปแบบบรรจุ คือ 3 ปัจจัยตัดสินใจหลัก' },
        'sauce-filling-machine-selection': { title: 'การเลือกเครื่องบรรจุซอส', desc: 'จับคู่ลูกสูบ ปั๊ม หรือแรงโน้มถ่วง ตามความหนืด อนุภาค และภาชนะ' },
        'edible-oil-filling-machine': { title: 'เครื่องบรรจุน้ำมันพืช', desc: 'ช่วงขนาดขวด กำลังผลิต และการเชื่อมไลน์ คือหัวใจของโปรเจ็กต์น้ำมัน' },
        'snack-packing': { title: 'การบรรจุขนม/สแน็ก', desc: 'VFFS ความเร็วสูงสำหรับชิป ถั่ว และสแน็ก: ชั่งน้ำหนัก เติมไนโตรเจน และฟิล์ม' },
        'detergent-powder-packaging-machine': { title: 'เครื่องบรรจุผงซักฟอก', desc: 'การควบคุมฝุ่น ความเสถียรของซีล และรูปแบบถุง สำคัญกว่าความเร็ว' },
        'what-to-prepare-before-machine-quote': { title: 'ควรเตรียมอะไรก่อนขอใบเสนอราคา', desc: '6 ข้อมูลเทคนิคสำคัญเพื่อให้ได้ใบเสนอราคาที่เร็วและแม่นยำ' },
        'voltage-customization-for-export': { title: 'การปรับแรงดันไฟสำหรับส่งออก', desc: 'การตั้งค่า 220/380V 50Hz และ 110/480V 60Hz: สิ่งที่ต้องระบุก่อนสั่งซื้อ' },
        'ce-guide-for-machinery-buyers': { title: 'คู่มือ CE สำหรับผู้ซื้อเครื่องจักร', desc: 'CE คืออะไร ใช้กับเครื่องบรรจุอย่างไร และควรขอเอกสารอะไรจากผู้ผลิต' },
      },
    },
    vi: {
      comparison: 'Hướng dẫn so sánh',
      selection: 'Hướng dẫn lựa chọn',
      application: 'Hướng dẫn ứng dụng',
      buying: 'Hướng dẫn mua hàng',
      readMore: 'Đọc thêm →',
      articles: {
        'vffs-vs-hffs': { title: 'So sánh VFFS vs HFFS', desc: 'So sánh thực tế: chọn hệ thống phù hợp theo sản phẩm, tốc độ và kiểu túi.' },
        'auger-vs-volumetric-filler': { title: 'Trục vít vs định lượng thể tích', desc: 'Hiểu khác biệt để chọn cơ cấu định lượng phù hợp cho sản phẩm dạng bột.' },
        'piston-vs-pump-filler': { title: 'Piston vs bơm chiết rót', desc: 'So sánh độ chính xác, vệ sinh và chi phí cho chất lỏng/nhớt.' },
        'premade-pouch-machine-vs-vffs': { title: 'Túi làm sẵn vs VFFS', desc: 'So sánh theo hình thức bao bì, chi phí vật liệu, tốc độ và độ linh hoạt.' },
        'semi-auto-vs-full-auto-packaging-line': { title: 'Dây chuyền bán tự động vs tự động hoàn toàn', desc: 'Chọn mức tự động hóa theo nhân công, năng suất, đầu tư và độ linh hoạt SKU.' },
        'how-to-choose-powder-filling-machine': { title: 'Cách chọn máy chiết rót bột', desc: 'Tiêu chí: độ chảy, độ chính xác, tốc độ mục tiêu và yêu cầu vệ sinh.' },
        'how-to-choose-liquid-filling-machine': { title: 'Cách chọn máy chiết rót chất lỏng', desc: 'Từ lỏng loãng đến sệt đặc: chọn công nghệ theo độ nhớt, thể tích và loại chai/túi.' },
        'how-to-choose-pouch-packing-machine': { title: 'Cách chọn máy đóng gói túi', desc: 'Túi làm sẵn vs FFS, túi đứng vs túi gối: hướng dẫn chọn thực tế.' },
        'how-to-choose-conveyor-system': { title: 'Cách chọn hệ thống băng tải', desc: 'Chọn theo sản phẩm, tốc độ line, bố trí nhà xưởng và điểm tích hợp — khung 5 bước.' },
        'spice-powder-packaging-machine': { title: 'Máy đóng gói bột gia vị', desc: 'Chọn hệ thống cho gia vị/bột nêm: độ chảy, định dạng bao bì, độ chính xác và kiểm soát bụi.' },
        'flour-packaging-machine-guide': { title: 'Hướng dẫn máy đóng gói bột mì', desc: 'Kích thước túi, năng suất và tính chất bột quyết định loại máy. Nên xác nhận trước khi báo giá.' },
        'protein-powder-filling-machine': { title: 'Máy chiết rót bột protein', desc: 'Độ chính xác, vệ sinh và định dạng bao bì là 3 yếu tố quyết định khi chọn máy.' },
        'sauce-filling-machine-selection': { title: 'Chọn máy chiết rót sốt', desc: 'Ghép piston/bơm/đổ trọng lực theo độ nhớt, hạt và loại bao bì.' },
        'edible-oil-filling-machine': { title: 'Máy chiết rót dầu ăn', desc: 'Dải chai, năng suất và tích hợp dây chuyền là quyết định cốt lõi cho dự án dầu ăn.' },
        'snack-packing': { title: 'Đóng gói đồ ăn nhẹ', desc: 'VFFS tốc độ cao cho chips, hạt, snack: tích hợp cân, thổi nitơ và lựa chọn màng.' },
        'detergent-powder-packaging-machine': { title: 'Máy đóng gói bột giặt', desc: 'Kiểm soát bụi, độ ổn định đường hàn và định dạng túi quan trọng hơn tốc độ.' },
        'what-to-prepare-before-machine-quote': { title: 'Chuẩn bị gì trước khi yêu cầu báo giá', desc: '6 thông tin kỹ thuật thiết yếu để nhận báo giá nhanh và chính xác.' },
        'voltage-customization-for-export': { title: 'Tùy chỉnh điện áp cho xuất khẩu', desc: 'Cấu hình 220/380V 50Hz và 110/480V 60Hz: cần chỉ rõ gì trước khi đặt hàng.' },
        'ce-guide-for-machinery-buyers': { title: 'Hướng dẫn CE cho người mua máy', desc: 'CE nghĩa là gì, áp dụng chỉ thị nào và cần yêu cầu tài liệu gì từ nhà cung cấp.' },
      },
    },
    de: {
      comparison: 'Vergleichsleitfäden',
      selection: 'Auswahlleitfäden',
      application: 'Anwendungsleitfäden',
      buying: 'Kaufleitfäden',
      readMore: 'Mehr lesen →',
      articles: {
        'vffs-vs-hffs': { title: 'VFFS vs HFFS Verpackungsmaschinen', desc: 'Direkter Vergleich: welches System passt zu Produkt, Geschwindigkeit und Beuteltyp?' },
        'auger-vs-volumetric-filler': { title: 'Schneckenfüller vs volumetrischer Füller', desc: 'Unterschiede verstehen und den richtigen Dosiermechanismus für Pulver wählen.' },
        'piston-vs-pump-filler': { title: 'Kolbenfüller vs Pumpenfüller', desc: 'Für Flüssigkeiten und Pasten: Genauigkeit, Reinigbarkeit und Kosten im Vergleich.' },
        'premade-pouch-machine-vs-vffs': { title: 'Vorgefertigter Beutel vs VFFS', desc: 'Vergleich nach Packungsoptik, Materialkosten, Geschwindigkeit und Flexibilität.' },
        'semi-auto-vs-full-auto-packaging-line': { title: 'Halbautomatische vs vollautomatische Linie', desc: 'Passender Automatisierungsgrad: Personal, Durchsatz, Investition und SKU-Flexibilität.' },
        'how-to-choose-powder-filling-machine': { title: 'Pulverfüllmaschine auswählen', desc: 'Kriterien: Rieselfähigkeit, Dosiergenauigkeit, Zielleistung und Hygieneanforderungen.' },
        'how-to-choose-liquid-filling-machine': { title: 'Flüssigkeitsfüllmaschine auswählen', desc: 'Von dünn bis viskos: Technologie nach Viskosität, Füllmenge und Behältertyp wählen.' },
        'how-to-choose-pouch-packing-machine': { title: 'Beutelverpackungsmaschine auswählen', desc: 'Vorgefertigt vs FFS, Standbeutel vs Kissenbeutel: praxisnaher Auswahlleitfaden.' },
        'how-to-choose-conveyor-system': { title: 'Fördersystem auswählen', desc: 'Fördertyp passend zu Produkt, Liniengeschwindigkeit, Layout und Integrationspunkten — 5 Schritte.' },
        'spice-powder-packaging-machine': { title: 'Gewürzpulver-Verpackungsmaschine', desc: 'Auswahl nach Fließeigenschaften, Packformat, Genauigkeit und Staubmanagement.' },
        'flour-packaging-machine-guide': { title: 'Mehl-Verpackungsmaschine: Leitfaden', desc: 'Beutelgröße, Zielleistung und Pulververhalten bestimmen die Lösung. Was vor dem Angebot zu klären ist.' },
        'protein-powder-filling-machine': { title: 'Proteinpulver-Füllmaschine', desc: 'Genauigkeit, Hygiene und Packformat sind die drei entscheidenden Faktoren.' },
        'sauce-filling-machine-selection': { title: 'Soßenfüllmaschine auswählen', desc: 'Kolben, Pumpe oder Gravitation passend zu Viskosität, Partikeln und Behältertyp.' },
        'edible-oil-filling-machine': { title: 'Speiseöl-Füllmaschine', desc: 'Flaschenbandbreite, Zielleistung und Linienintegration sind die Kernentscheidungen.' },
        'snack-packing': { title: 'Snack-Verpackung', desc: 'Hochgeschwindigkeits-VFFS für Chips, Nüsse, Snacks: Wägeintegration, Stickstoff und Folienoptionen.' },
        'detergent-powder-packaging-machine': { title: 'Waschmittelpulver-Verpackungsmaschine', desc: 'Staubkontrolle, Siegelstabilität und Beutelformat sind wichtiger als reine Geschwindigkeit.' },
        'what-to-prepare-before-machine-quote': { title: 'Vorbereitung für Angebotsanfrage', desc: 'Die 6 wichtigsten technischen Angaben für ein schnelles, präzises Maschinenangebot.' },
        'voltage-customization-for-export': { title: 'Spannungsanpassung für Exportmaschinen', desc: '220/380V 50Hz und 110/480V 60Hz: was vor der Bestellung spezifiziert werden sollte.' },
        'ce-guide-for-machinery-buyers': { title: 'CE-Leitfaden für Maschinenkäufer', desc: 'Was CE bedeutet, welche Richtlinien gelten und welche Dokumente Sie anfordern sollten.' },
      },
    },
  } as Record<string, any>

  // fall back to English for unsupported languages
  const d = (t[lang] || t['en']) as typeof t['en']

  return [
    {
      id: 'comparison',
      label: d.comparison,
      articles: getArticlesByCategory('comparison').map(a => ({ slug: a.slug, ...d.articles[a.slug] })),
    },
    {
      id: 'selection',
      label: d.selection,
      articles: getArticlesByCategory('selection').map(a => ({ slug: a.slug, ...d.articles[a.slug] })),
    },
    {
      id: 'application',
      label: d.application,
      articles: getArticlesByCategory('application').map(a => ({ slug: a.slug, ...d.articles[a.slug] })),
    },
    {
      id: 'buying',
      label: d.buying,
      articles: getArticlesByCategory('buying').map(a => ({ slug: a.slug, ...d.articles[a.slug] })),
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
                  href={`/en/resources/${article.slug}`}
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
