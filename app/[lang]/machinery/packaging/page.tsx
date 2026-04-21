import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import type { Metadata } from 'next'
import { PHOTO } from '@/lib/photoLibrary'
import { PageHero } from '@/components/ui/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import SourcingRouteGuide from '@/components/machinery/SourcingRouteGuide'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, BREADCRUMB_LABELS, LANG_META } from '@/lib/seo'
import Image from 'next/image'

const titles: Record<string, string> = {
  en: 'Packaging Systems Sourcing | VFFS, HFFS, Pouch & Carton',
  cn: '包装系统采购 | VFFS/HFFS/制袋与装箱', zh: '包裝系統採購 | VFFS/HFFS/製袋與裝箱',
  fr: 'Machines d\'emballage | VFFS, HFFS, sachets et cartons',
  es: 'Maquinaria de empaque | VFFS, HFFS, bolsas y cartones',
  pt: 'Máquinas de Embalagem | VFFS, HFFS, Sachês e Cartões',
  ko: '포장 기계 | VFFS, HFFS, 파우치 및 카톤 포장',
  ja: '包装機械 | VFFS、HFFS、パウチ＆カートン包装',
  ar: 'آلات التعبئة والتغليف | VFFS، HFFS، أكياس وكراتين',
  th: 'เครื่องบรรจุภัณฑ์ | VFFS, HFFS, ซองและกล่อง',
  vi: 'Máy đóng gói | VFFS, HFFS, Túi & Thùng carton',
  de: 'Verpackungsmaschinen | VFFS, HFFS, Beutel- & Kartonverpackung',
}

const descriptions: Record<string, string> = {
  en: 'Packaging systems sourcing: configuration planning, supplier vetting, VFFS/HFFS and pouch routes, sealing quality checkpoints, and export-ready documentation.',
  cn: '包装系统采购：配置规划、供应商审查、VFFS/HFFS 与袋包装路线、封口验收要点与出口文件支持。',
  zh: '包裝系統採購：配置規劃、供應商審查、VFFS/HFFS 與袋包裝路線、封口驗收要點與出口文件支援。',
  fr: 'Machines d’emballage : VFFS, HFFS, sachets préformés, sous vide, rétraction et mise en carton. Pour poudres, granulés, liquides et solides.',
  es: 'Maquinaria de empaque: VFFS, HFFS, bolsa preformada, vacío, termoencogible y encajado. Para polvo, granulado, líquido y sólido.',
  pt: 'Máquinas de embalagem: VFFS, HFFS, pouch pré-formado, vácuo, termoencolhível e encaixotamento. Para pó, grânulos, líquidos e sólidos.',
  ko: '포장 설비: VFFS, HFFS, 프리메이드 파우치, 진공, 수축, 박스 포장. 분말/과립/액체/고체 제품용.',
  ja: '包装機械：VFFS、HFFS、プレメードパウチ、真空、シュリンク、カートン包装。粉末・顆粒・液体・固体向け。',
  ar: 'آلات التعبئة والتغليف: VFFS وHFFS والأكياس الجاهزة والتفريغ الحراري والتغليف بالشرنك ووضعها في الكراتين. للمساحيق والحبيبات والسوائل والمواد الصلبة.',
  th: 'เครื่องบรรจุภัณฑ์: VFFS, HFFS, ถุงสำเร็จรูป, สุญญากาศ, ฟิล์มหด และบรรจุกล่อง สำหรับผง เม็ด ของเหลว และของแข็ง',
  vi: 'Máy đóng gói: VFFS, HFFS, túi thành phẩm, chân không, co nhiệt và đóng thùng. Cho bột, hạt, lỏng và rắn.',
  de: 'Verpackungsmaschinen: VFFS, HFFS, Fertigbeutel, Vakuum, Schrumpffolie und Kartonierung. Für Pulver, Granulate, Flüssigkeiten und Feststoffe.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: titles[l] || titles.en,
    description: descriptions[l] || descriptions.en,
    pathname: '/machinery/packaging',
    type: 'website',
    keywords: ['packaging systems sourcing', 'VFFS', 'HFFS', 'pouch packaging configuration', 'supplier vetting', 'acceptance criteria', 'export documentation'],
  })
}

export default async function PackagingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const metaTitle = titles[lang] || titles.en
  const metaDesc = descriptions[lang] || descriptions.en
  const btnLabels: Record<string, string> = {
    en: 'Get Assessment',
    cn: '获取评估',
    zh: '取得評估',
    fr: 'Demander évaluation',
    es: 'Solicitar evaluación',
    pt: 'Solicitar avaliação',
    ko: '평가 요청',
    ja: '評価依頼',
    ar: 'طلب تقييم',
    th: 'ขอการประเมิน',
    vi: 'Yêu cầu đánh giá',
    de: 'Bewertung anfordern',
  }
  const heroPhoto = PHOTO.machinery.subpageHeroes.packaging

  const content: Record<string, { title: string; p1: string; p2: string; subTitle: string; cons: string[]; cta: string; machines: string[] }> = {
    en: {
      title: 'Packaging Machinery',
      p1: 'We provide a complete range of packaging machines for powder, granule, liquid, solid, and mixed products. Our technical sourcing scope covers VFFS, HFFS, premade pouch, vacuum, shrink wrap, and carton packing systems for global industries.',
      p2: 'Every sourcing project includes technical vetting of SUS304/316L materials, CE compliance, and engineering evaluation of output speed and automation levels. We provide verification videos before shipment.',
      subTitle: 'Machine Types Available',
      cons: ['Vertical Form-Fill-Seal (VFFS)', 'Horizontal Form-Fill-Seal (HFFS)', 'Premade Pouch Packing', 'Multi-Head Weighers', 'Carton/Case Packing', 'Labeling & Date Coding'],
      cta: 'Tell us your product and packaging format — we\'ll provide an assessment and propose the right configuration.',
      machines: ['Powder Packaging', 'Granule Packaging', 'Liquid Packaging', 'Solid/Piece Packaging']
    },
    cn: {
      title: '包装机械',
      p1: '我们提供全系列包装机采购支持，适用于粉末、颗粒、液体、固体和混合产品。我们的技术采购范围涵盖立式充填封口机、卧式充填封口机、预制袋包装机、真空包装机、热缩包装机和装箱系统。',
      p2: '每个采购项目均包含 SUS304/316L 材料的技术审核、CE 合规性检查以及对产速和自动化水平的工程评估。发货前提供验证视频。',
      subTitle: '可用机型',
      cons: ['立式充填封口机 (VFFS)', '卧式充填封口机 (HFFS)', '预制袋包装机', '多头秤', '装箱/纸箱包装', '贴标与打码'],
      cta: '告诉我们您的产品和包装形式——我们将提供评估并给出合适的配置建议。',
      machines: ['粉末包装', '颗粒包装', '液体包装', '固体/单件包装']
    },
    zh: {
      title: '包裝機械',
      p1: '我們提供全系列包裝機採購支援，適用於粉末、顆粒、液體、固體和混合產品。我們的技術採購範圍涵蓋立式充填封口機、臥式充填封口機、預製袋包裝機、真空包裝機、熱縮包裝機和裝箱系統。',
      p2: '每個採購項目均包含 SUS304/316L 材料的技術審核、CE 合規性檢查以及對產速和自動化水平的工程評估。出貨前提供驗證影片。',
      subTitle: '可用機型',
      cons: ['立式充填封口機 (VFFS)', '臥式充填封口機 (HFFS)', '預製袋包裝機', '多頭秤', '裝箱/紙箱包裝', '貼標與打碼'],
      cta: '告訴我們您的產品和包裝形式——我們將提供評估並給出合適的配置建議。',
      machines: ['粉末包裝', '顆粒包裝', '液體包裝', '固體/單件包裝']
    },
    fr: {
      title: 'Machines d\'emballage',
      p1: 'Nous accompagnons le sourcing de machines d’emballage pour produits en poudre, granulés, liquides, solides et mixtes. Notre périmètre couvre VFFS, HFFS, sachets préformés, sous vide, rétractables et encaissage, pour des industries partout dans le monde.',
      p2: 'Chaque projet inclut la vérification technique des matériaux SUS304/316L, la conformité CE et l’évaluation de la cadence et de l’automatisation. Nous fournissons des vidéos de vérification avant expédition.',
      subTitle: 'Types de machines disponibles',
      cons: ['Ensacheuse verticale (VFFS)', 'Ensacheuse horizontale (HFFS)', 'Conditionnement en sachets préformés', 'Peseuses multi-têtes', 'Encaissage/mise en carton', 'Étiquetage et datage'],
      cta: 'Décrivez-nous votre produit et format d\'emballage — nous fournirons une évaluation et proposerons la configuration adaptée.',
      machines: ['Conditionnement poudre', 'Conditionnement granulés', 'Conditionnement liquide', 'Conditionnement solide']
    },
    es: {
      title: 'Maquinaria de empaque',
      p1: 'Acompañamos el sourcing de maquinaria de empaque para productos en polvo, granulados, líquidos, sólidos y mixtos. Cubrimos VFFS, HFFS, bolsas premade, vacío, termoencogibles y encajadoras para industrias globales.',
      p2: 'Cada proyecto incluye verificación técnica de materiales SUS304/316L, cumplimiento CE y evaluación de velocidad y automatización. Proporcionamos videos de verificación antes del envío.',
      subTitle: 'Tipos de máquinas disponibles',
      cons: ['Empacadora vertical (VFFS)', 'Empacadora horizontal (HFFS)', 'Empaque en bolsas premade', 'Pesadoras multicabezal', 'Encajado/embalaje en cartón', 'Etiquetado y codificación'],
      cta: 'Cuéntenos sobre su producto y formato de empaque — le daremos una evaluación y propondremos la configuración adecuada.',
      machines: ['Empaque de polvo', 'Empaque de granulados', 'Empaque de líquidos', 'Empaque de sólidos']
    },
    pt: {
      title: 'Máquinas de Embalagem',
      p1: 'Apoiamos o sourcing de máquinas de embalagem para produtos em pó, grânulos, líquidos, sólidos e mistos. Cobrimos VFFS, HFFS, sachês pré-formados, vácuo, termocontráteis e encaixotadoras para indústrias globais.',
      p2: 'Cada projeto inclui verificação técnica de materiais SUS304/316L, conformidade CE e avaliação de velocidade e automação. Fornecemos vídeos de verificação antes do envio.',
      subTitle: 'Tipos de máquinas disponíveis',
      cons: ['Empacotadora Vertical (VFFS)', 'Empacotadora Horizontal (HFFS)', 'Embalagem em sachês pré-formados', 'Pesadoras multicabeçotes', 'Encaixotamento/embalagem em cartão', 'Rotulagem e codificação'],
      cta: 'Conte-nos sobre seu produto e formato de embalagem — forneceremos uma avaliação e proporemos a configuração ideal.',
      machines: ['Embalagem de pó', 'Embalagem de grânulos', 'Embalagem de líquidos', 'Embalagem de sólidos']
    },
    ko: {
      title: '포장 기계',
      p1: '분말, 과립, 액체, 고체 및 혼합 제품을 위한 포장 설비 소싱을 지원합니다. VFFS, HFFS, 프리메이드 파우치, 진공, 수축 포장, 카톤 포장 시스템을 전 세계 산업에 제공합니다.',
      p2: '각 프로젝트에는 SUS304/316L 재질 검증, CE 문서 확인, 속도/자동화 수준 평가가 포함됩니다. 출하 전 검증 영상을 제공합니다.',
      subTitle: '사용 가능한 기계 유형',
      cons: ['수직 성형 충전 밀봉기 (VFFS)', '수평 성형 충전 밀봉기 (HFFS)', '프리메이드 파우치 포장', '멀티헤드 계량기', '카톤/케이스 포장', '라벨링 및 날짜 인쇄'],
      cta: '제품과 포장 형태를 알려주세요 — 평가 후 적합한 구성으로 안내해 드립니다.',
      machines: ['분말 포장', '과립 포장', '액체 포장', '고체/단품 포장']
    },
    ja: {
      title: '包装機械',
      p1: '粉末、顆粒、液体、固体、混合製品向けの包装機械ソーシングを支援します。VFFS、HFFS、既製パウチ、真空、シュリンク、カートン包装などに対応します。',
      p2: '各プロジェクトにはSUS304/316Lの材質確認、CE書類の確認、能力と自動化レベルの評価が含まれます。出荷前に検証動画を提供します。',
      subTitle: '対応機種',
      cons: ['縦型製袋充填シール機（VFFS）', '横型製袋充填シール機（HFFS）', '既製パウチ包装', 'マルチヘッド計量機', 'カートン/ケース包装', 'ラベリング＆日付印字'],
      cta: '製品と包装形態をお知らせください — 最適な機械をご提案します。',
      machines: ['粉末包装', '顆粒包装', '液体包装', '固体・個体包装']
    },
    ar: {
      title: 'آلات التعبئة والتغليف',
      p1: 'ندعم توريد آلات التعبئة والتغليف للمنتجات المسحوقة والحبيبية والسائلة والصلبة والمختلطة. يشمل نطاقنا VFFS وHFFS والأكياس الجاهزة والتفريغ والشرنك وتعبئة الكراتين لصناعات عالمية.',
      p2: 'يشمل كل مشروع التحقق من مواد SUS304/316L ودعم وثائق CE وتقييم السرعة ومستوى الأتمتة. نقدم فيديوهات تحقق قبل الشحن.',
      subTitle: 'أنواع الآلات المتوفرة',
      cons: ['آلة التشكيل والتعبئة والختم العمودية (VFFS)', 'آلة التشكيل والتعبئة والختم الأفقية (HFFS)', 'تعبئة الأكياس الجاهزة', 'ميزان متعدد الرؤوس', 'تعبئة الكراتين/الصناديق', 'الملصقات والترميز'],
      cta: 'أخبرنا عن منتجك وشكل التعبئة — سنقدم تقييماً ونقترح التهيئة المناسبة.',
      machines: ['تعبئة المساحيق', 'تعبئة الحبيبات', 'تعبئة السوائل', 'تعبئة المنتجات الصلبة']
    },
    th: {
      title: 'เครื่องบรรจุภัณฑ์',
      p1: 'เราสนับสนุนการจัดซื้อเครื่องบรรจุภัณฑ์สำหรับผลิตภัณฑ์ผง เม็ด ของเหลว ของแข็ง และผสม ครอบคลุม VFFS, HFFS, ซองสำเร็จรูป, สุญญากาศ, ห่อหด และบรรจุกล่องสำหรับอุตสาหกรรมทั่วโลก',
      p2: 'ทุกโปรเจกต์มีการตรวจสอบวัสดุ SUS304/316L การสนับสนุนเอกสาร CE และการประเมินความเร็ว/ระดับอัตโนมัติ เราจัดส่งวิดีโอยืนยันก่อนจัดส่ง',
      subTitle: 'ประเภทเครื่องที่มี',
      cons: ['เครื่องบรรจุแนวตั้ง (VFFS)', 'เครื่องบรรจุแนวนอน (HFFS)', 'บรรจุซองสำเร็จรูป', 'เครื่องชั่งหลายหัว', 'บรรจุกล่อง/ลัง', 'ติดฉลากและพิมพ์วันที่'],
      cta: 'บอกเราเกี่ยวกับผลิตภัณฑ์และรูปแบบบรรจุภัณฑ์ของคุณ — เราจะแนะนำเครื่องที่เหมาะสม',
      machines: ['บรรจุผง', 'บรรจุเม็ด', 'บรรจุของเหลว', 'บรรจุของแข็ง/ชิ้น']
    },
    vi: {
      title: 'Máy đóng gói',
      p1: 'Chúng tôi hỗ trợ sourcing máy đóng gói cho sản phẩm bột, hạt, lỏng, rắn và hỗn hợp. Phạm vi gồm VFFS, HFFS, túi làm sẵn, hút chân không, co màng và đóng thùng carton cho các ngành toàn cầu.',
      p2: 'Mỗi dự án gồm xác minh vật liệu SUS304/316L, hỗ trợ tài liệu CE và đánh giá tốc độ/mức tự động hóa. Chúng tôi cung cấp video kiểm chứng trước khi giao hàng.',
      subTitle: 'Các loại máy có sẵn',
      cons: ['Máy đóng gói dọc (VFFS)', 'Máy đóng gói ngang (HFFS)', 'Đóng gói túi làm sẵn', 'Cân đa đầu', 'Đóng thùng/carton', 'Dán nhãn và in date'],
      cta: 'Cho chúng tôi biết sản phẩm và định dạng đóng gói — chúng tôi sẽ đề xuất máy phù hợp.',
      machines: ['Đóng gói bột', 'Đóng gói hạt', 'Đóng gói chất lỏng', 'Đóng gói rắn/miếng']
    },
    de: {
      title: 'Verpackungsmaschinen',
      p1: 'Wir unterstützen das Sourcing von Verpackungsmaschinen für Pulver-, Granulat-, Flüssig-, Fest- und Mischprodukte. Abgedeckt sind VFFS, HFFS, Fertigbeutel, Vakuum, Schrumpffolie und Kartonverpackung für globale Branchen.',
      p2: 'Jedes Projekt umfasst die Prüfung von SUS304/316L, CE-Unterstützung und die Bewertung von Leistung und Automatisierungsgrad. Wir liefern Verifikationsvideos vor dem Versand.',
      subTitle: 'Verfügbare Maschinentypen',
      cons: ['Vertikale Schlauchbeutelmaschine (VFFS)', 'Horizontale Schlauchbeutelmaschine (HFFS)', 'Fertigbeutelverpackung', 'Mehrkopfwaagen', 'Karton-/Kistenverpackung', 'Etikettierung und Datumskodierung'],
      cta: 'Teilen Sie uns Ihr Produkt und Verpackungsformat mit — wir empfehlen die passende Maschine.',
      machines: ['Pulververpackung', 'Granulatverpackung', 'Flüssigkeitsverpackung', 'Feststoffverpackung']
    }
  }
  const t = content[lang] || content['en']
  const packagingRoute = {
    notFit: ({
      en: ['Only manual sealing with no automation plan', 'Projects without fixed bag format, film, or target output', 'Lines where upstream/downstream scope is still undefined'],
      zh: ['只有人工封口需求且沒有自動化規劃', '尚未確定袋型、膜材或目標產能的專案', '前後段整合範圍仍未定義的產線'],
      cn: ['只有人工封口需求且没有自动化规划', '尚未确定袋型、膜材或目标产能的项目', '前后段整合范围仍未定义的产线'],
    } as Record<string, string[]>)[lang] || ['Only manual sealing with no automation plan', 'Projects without fixed bag format, film, or target output', 'Lines where upstream/downstream scope is still undefined'],
    compare: ({
      en: ['Film compatibility, sealing quality, and real speed on your product', 'Included scope: feeding, weighing, coding, nitrogen flush, inspection, and change parts', 'Supplier proof: running videos, export references, FAT scope, and spare-parts readiness'],
      zh: ['膜材相容性、封口品質，以及在你產品上的真實速度', '報價是否包含上料、計量、打碼、充氮、檢測與換型件', '供應商是否能提供運轉影片、出口案例、FAT 範圍與備件準備'],
      cn: ['膜材兼容性、封口质量，以及在你产品上的真实速度', '报价是否包含上料、计量、打码、充氮、检测与换型件', '供应商是否能提供运行视频、出口案例、FAT 范围与备件准备'],
    } as Record<string, string[]>)[lang] || ['Film compatibility, sealing quality, and real speed on your product', 'Included scope: feeding, weighing, coding, nitrogen flush, inspection, and change parts', 'Supplier proof: running videos, export references, FAT scope, and spare-parts readiness'],
    acceptance: ({
      en: ['Approve pass/fail samples using your actual product and film', 'Lock weight tolerance, seal integrity, and changeover time before PO release', 'Require FAT records, manuals, electrical list, and critical spare parts before shipment'],
      zh: ['用你的實際產品與膜材確認 FAT 合格樣', '下單前鎖定重量公差、封口完整性與換線時間', '出貨前確認 FAT 紀錄、說明書、電氣清單與關鍵備件'],
      cn: ['用你的实际产品与膜材确认 FAT 合格样', '下单前锁定重量公差、封口完整性与换线时间', '出货前确认 FAT 记录、说明书、电气清单与关键备件'],
    } as Record<string, string[]>)[lang] || ['Approve pass/fail samples using your actual product and film', 'Lock weight tolerance, seal integrity, and changeover time before PO release', 'Require FAT records, manuals, electrical list, and critical spare parts before shipment'],
  }

  const pageUrl = `${SITE_URL}/${lang}/machinery/packaging`
  const itemListId = `${pageUrl}#itemlist`
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': pageUrl,
    url: pageUrl,
    inLanguage: LANG_META[lang].htmlLang,
    name: metaTitle,
    description: metaDesc,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org` },
    mainEntity: { '@id': itemListId },
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': itemListId,
    inLanguage: LANG_META[lang].htmlLang,
    name: metaTitle,
    isPartOf: { '@id': pageUrl },
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pouch Packing Machine', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machines/pouch-packing-machine`, url: `${SITE_URL}/${lang}/machines/pouch-packing-machine`, name: 'Pouch Packing Machine' } },
      { '@type': 'ListItem', position: 2, name: 'Powder Filling Machine', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machines/powder-filling-machine`, url: `${SITE_URL}/${lang}/machines/powder-filling-machine`, name: 'Powder Filling Machine' } },
      { '@type': 'ListItem', position: 3, name: 'Liquid Filling Machine', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/machines/liquid-filling-machine`, url: `${SITE_URL}/${lang}/machines/liquid-filling-machine`, name: 'Liquid Filling Machine' } },
      { '@type': 'ListItem', position: 4, name: 'Pouch packaging configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/route/pouch-packaging`, url: `${SITE_URL}/${lang}/resources/route/pouch-packaging`, name: 'Pouch packaging configuration guides' } },
      { '@type': 'ListItem', position: 5, name: 'Powder dosing configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/route/powder-dosing`, url: `${SITE_URL}/${lang}/resources/route/powder-dosing`, name: 'Powder dosing configuration guides' } },
      { '@type': 'ListItem', position: 6, name: 'Liquid filling configuration guides', item: { '@type': 'WebPage', '@id': `${SITE_URL}/${lang}/resources/route/liquid-filling`, url: `${SITE_URL}/${lang}/resources/route/liquid-filling`, name: 'Liquid filling configuration guides' } },
    ],
  }

  return (
    <>
      <JsonLd data={[collectionSchema, itemListSchema]} />
      <PageHero
        kicker={({ en: 'PACKAGING EQUIPMENT', cn: '包装设备', zh: '包裝設備', fr: 'ÉQUIPEMENT D\'EMBALLAGE', es: 'EQUIPO DE EMPAQUE', pt: 'EQUIPAMENTO DE EMBALAGEM', ko: '포장 장비', ja: '包装機器', ar: 'معدات التعبئة والتغليف', th: 'อุปกรณ์บรรจุภัณฑ์', vi: 'THIẾT BỊ ĐÓNG GÓI', de: 'VERPACKUNGSANLAGEN' } as Record<string,string>)[lang] || 'PACKAGING EQUIPMENT'}
        title={t.title}
        desc={t.p1}
        image={{ src: heroPhoto, alt: 'Packaging equipment sourcing support', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />
      <section className="bg-white py-6">
        <Container className="max-w-6xl">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: BREADCRUMB_LABELS[lang].machinery, href: `/${lang}/machinery` },
              { label: t.title, href: `/${lang}/machinery/packaging` },
            ]}
          />
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{t.p2}</p>

              {/* Machine type tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {t.machines.map((m, i) => (
                  <span key={i} className="rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700 ring-1 ring-accent-200">{m}</span>
                ))}
              </div>

            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-xl font-bold text-gray-950">{t.subTitle}</h2>
                <ul className="mt-6 space-y-3">
                  {t.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-sm leading-relaxed sm:text-base">{c}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="rounded-2xl bg-brand-950 p-8 text-white">
                <h2 className="text-xl font-bold">{t.cta}</h2>
                <div className="mt-6">
                  <ButtonLink href={`/${lang}/contact`} size="lg">{btnLabels[lang] || btnLabels.en}</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SourcingRouteGuide
        lang={lang}
        fitItems={t.machines}
        notFitItems={packagingRoute.notFit}
        compareItems={packagingRoute.compare}
        acceptanceItems={packagingRoute.acceptance}
      />

      {/* Sealing & Wrapping Equipment */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
            {({ en: 'Sealing & Wrapping Equipment', cn: '封口与包装设备', zh: '封口與包裝設備', fr: 'Équipements de scellage et d\'emballage', es: 'Equipos de sellado y embalaje', pt: 'Equipamentos de selagem e embalagem', ko: '실링 및 포장 장비', ja: 'シーリング・ラッピング機器', ar: 'معدات الختم والتغليف', th: 'อุปกรณ์ซีลและห่อ', vi: 'Thiết bị dán kín và đóng gói', de: 'Versiegelungs- und Verpackungsanlagen' } as Record<string, string>)[lang] ?? 'Sealing & Wrapping Equipment'}
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            {({ en: 'A complete range of sealing, vacuum, shrink, pillow-pack, and stretch-wrapping solutions for finished goods packaging.', cn: '一整套用于成品包装的封口、真空、收缩、枕式及缠绕解决方案。', zh: '一整套用於成品包裝的封口、真空、收縮、枕式及纏繞解決方案。', fr: 'Une gamme complète de solutions de scellage, sous vide, rétraction, oreiller et banderolage pour les produits finis.', es: 'Una gama completa de soluciones de sellado, vacío, retracción, almohada y enfardado para productos terminados.', pt: 'Uma gama completa de soluções de selagem, vácuo, retração, travesseiro e embrulho para produtos acabados.', ko: '완제품 포장을 위한 실링, 진공, 수축, 베개형, 랩핑 솔루션 전 라인업.', ja: '完成品梱包向けのシーリング、真空、シュリンク、ピロー、ストレッチラップの全ラインアップ。', ar: 'مجموعة كاملة من حلول الختم والتفريغ والتغليف الحراري والوسادة ولف التمدد.', th: 'ครบวงจรสำหรับซีล สุญญากาศ ฟิล์มหด พันหมอน และพันฟิล์มสเตรชสำหรับสินค้าสำเร็จรูป', vi: 'Đầy đủ các giải pháp dán kín, chân không, co màng, kiểu gối và quấn màng cho đóng gói thành phẩm.', de: 'Vollständige Palette von Versiegelungs-, Vakuum-, Schrumpf-, Kissen- und Wickellösungen für Fertigprodukte.' } as Record<string, string>)[lang] ?? 'A complete range of sealing, vacuum, shrink, pillow-pack, and stretch-wrapping solutions.'}
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { slug: 'hand-sealer-impulse-type', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/01_Sealer/01_Hand_Sealer_Impulse_Type/Hand_Sealer_Impulse_Type.jpg', name: { en: 'Hand Sealer (Impulse)', cn: '手压式封口机', zh: '手壓式封口機', fr: 'Soudeuse à main (impulsion)', es: 'Selladora de mano', pt: 'Seladora manual', ko: '수동 임펄스 실러', ja: 'ハンドシーラー', ar: 'ختام يدوي', th: 'เครื่องซีลมือ', vi: 'Máy hàn tay', de: 'Handschweißgerät' } },
              { slug: 'extra-long-hand-sealer-impulse-type', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/01_Sealer/02_Extra_Long_Hand_Sealer_Impulse_Type/Extra_Long_Hand_Sealer_Impulse_Type.jpg', name: { en: 'Extra Long Hand Sealer', cn: '特长手压封口机', zh: '特長手壓封口機', fr: 'Soudeuse à main longue', es: 'Selladora extra larga', pt: 'Seladora extra longa', ko: '특장형 실러', ja: '特長ハンドシーラー', ar: 'ختام يدوي طويل', th: 'เครื่องซีลมือยาวพิเศษ', vi: 'Máy hàn tay siêu dài', de: 'Langer Handschweißer' } },
              { slug: 'foot-sealer-impulse-type', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/01_Sealer/03_Foot_Sealer_Impulse_Type/Foot_Sealer_Impulse_Type.jpg', name: { en: 'Foot Sealer (Impulse)', cn: '脚踏式封口机', zh: '腳踏式封口機', fr: 'Soudeuse à pédale', es: 'Selladora de pedal', pt: 'Seladora de pedal', ko: '발 페달 실러', ja: 'フットシーラー', ar: 'ختام القدم', th: 'เครื่องซีลเท้าเหยียบ', vi: 'Máy hàn chân', de: 'Fußschweißgerät' } },
              { slug: 'vacuum-packing-machine', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/12_Vacuum_Packing_Machine/01_Vacuum_Packing_Machine/Vacuum_Packing_Machine.jpg', name: { en: 'Vacuum Packing Machine', cn: '真空包装机', zh: '真空包裝機', fr: 'Machine sous vide', es: 'Envasadora al vacío', pt: 'Máquina de vácuo', ko: '진공 포장기', ja: '真空包装機', ar: 'آلة التغليف بالتفريغ', th: 'เครื่องแพ็กสุญญากาศ', vi: 'Máy đóng gói chân không', de: 'Vakuumverpackungsmaschine' } },
              { slug: 'shrinking-machine', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/03_Shrinking_Tunnel/01_Shrinking_Machine/Shrinking_Machine.jpg', name: { en: 'Shrink Wrapping Machine', cn: '收缩包装机', zh: '收縮包裝機', fr: 'Tunnel de rétraction', es: 'Túnel de retracción', pt: 'Máquina de retração', ko: '열수축 포장기', ja: 'シュリンク包装機', ar: 'آلة التغليف الحراري', th: 'เครื่องห่อหดฟิล์ม', vi: 'Máy co màng nhiệt', de: 'Schrumpfverpackungsmaschine' } },
              { slug: 'pillow-type-packing-machine', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/11_Horizontal_Packing_Mac/01_Pillow_Type_Packing_Machine/Pillow_Type_Packing_Machine.gif', name: { en: 'Pillow Type Packing Machine', cn: '枕式包装机', zh: '枕式包裝機', fr: 'Machine type oreiller', es: 'Empaquetadora tipo almohada', pt: 'Embaladora tipo travesseiro', ko: '베개형 포장기', ja: 'ピロー包装機', ar: 'آلة تغليف الوسادة', th: 'เครื่องแพ็กแบบหมอน', vi: 'Máy đóng gói kiểu gối', de: 'Kissenverpackungsmaschine' } },
              { slug: 'stretch-wrapping-machine', img: 'https://img.mweb.com.tw/thumb/758/1000x1000/product/14_Stretch_Wrapping_Machine/01_Stretch_Wrapping_Machine/Stretch_Wrapping_Machine.jpg', name: { en: 'Stretch Wrapping Machine', cn: '缠绕膜包装机', zh: '纏繞膜包裝機', fr: 'Banderoleuse palettes', es: 'Enfardadora de palés', pt: 'Envolvedora de pallet', ko: '스트레치 랩핑기', ja: 'ストレッチラップ機', ar: 'آلة لف التمدد', th: 'เครื่องพันฟิล์มสเตรช', vi: 'Máy quấn màng co giãn', de: 'Stretchwickelmaschine' } },
            ].map((p) => (
              <a key={p.slug} href={`/${lang}/machines/${p.slug}`} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md hover:border-accent-300">
                <div className="relative h-44 overflow-hidden bg-gray-50">
                  <Image
                    src={p.img}
                    alt={(p.name as Record<string, string>)[lang] ?? p.name.en}
                    fill
                    unoptimized
                    className="object-contain p-4 transition group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-900 text-sm">{(p.name as Record<string, string>)[lang] ?? p.name.en}</p>
                  <p className="mt-1 text-xs text-accent-600">
                    {({ en: 'View specs →', cn: '查看规格 →', zh: '查看規格 →', fr: 'Voir specs →', es: 'Ver specs →', pt: 'Ver specs →', ko: '사양 보기 →', ja: '仕様を見る →', ar: 'عرض المواصفات →', th: 'ดูสเปค →', vi: 'Xem thông số →', de: 'Specs ansehen →' } as Record<string, string>)[lang] ?? 'View specs →'}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
