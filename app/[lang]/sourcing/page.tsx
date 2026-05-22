import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import CompareBanner from '@/components/CompareBanner'
import { ButtonLink } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import { PageHero } from '@/components/ui/PageHero'
import QuickAssessment from '@/components/QuickAssessment'
import { PHOTO } from '@/lib/photoLibrary'
import { SITE_URL } from '@/lib/siteConfig'
import { buildPageMetadata, normalizeLang, LANG_META } from '@/lib/seo'
import type { Lang } from '@/lib/i18n'
import { getResourceArticleI18n } from '@/lib/resourceArticles'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return ['en', 'zh', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de'].map((lang) => ({ lang }))
}

const metaTitles: Record<string, string> = {
  en: 'SunGene direct sourcing from Taiwan + China',
  cn: '我们怎么合作｜直接从台湾+中国工厂买货转售',
  zh: '我們怎麼合作｜直接從台灣＋中國工廠買貨轉售',
  fr: 'Notre méthode — achat-revente direct, usines TW + CN',
  es: 'Cómo trabajamos — compra-reventa directa, TW + CN',
  pt: 'Parceiro de sourcing | Rede Taiwan + China e controle de risco',
  ko: '소싱 파트너 | 대만+중국 공급망 및 리스크 관리',
  ja: 'ソーシングパートナー | 台湾＋中国ネットワークとリスク管理',
  ar: 'شريك توريد | شبكة تايوان + الصين وإدارة المخاطر',
  th: 'พันธมิตรจัดหา | เครือข่ายไต้หวัน+จีน และการควบคุมความเสี่ยง',
  vi: 'Đối tác nguồn cung | Mạng lưới Đài Loan + Trung Quốc & kiểm soát rủi ro',
  de: 'Sourcing-Partner | Taiwan+China Netzwerk & Risikokontrolle',
}

const metaDescs: Record<string, string> = {
  en: 'Taiwan-based trading company supplying selected products through manufacturing coordination and export management across Taiwan and China. Custom packaging, home & living, outdoor. Pre-shipment AQL by in-house staff. MOQ USD 1,000.',
  cn: 'SunGene 是台湾登记贸易公司,通过台湾与中国的制造协调与出口管理,供应精选产品。三大类:定制包装、居家生活、户外。SunGene 自有员工出口前 AQL 品检。最低订单 USD 1,000。',
  zh: 'SunGene 是台灣登記貿易公司,透過台灣與中國的製造協調與出口管理,供應精選產品。三大類:客製包裝、居家生活、戶外。SunGene 自有員工出口前 AQL 品檢。最低訂單 USD 1,000。',
  fr: "Société de négoce basée à Taïwan, fournissant des produits sélectionnés par coordination manufacturière et gestion des exports entre Taïwan et la Chine. Trois domaines : emballage personnalisé, maison & vie quotidienne, extérieur. Contrôle AQL pré-expédition en interne. MOQ 1 000 USD.",
  es: 'Empresa comercial con sede en Taiwán que suministra productos seleccionados mediante coordinación de fabricación y gestión de exportación entre Taiwán y China. Tres áreas: embalaje personalizado, hogar y vida cotidiana, exterior. Inspección AQL pre-envío en interno. MOQ USD 1.000.',
  pt: 'Sourcing de embalagem, lar, jardim e beleza via Taiwan e China: avaliação de fornecedores, critérios de aceitação, inspeção pré-envio, documentação e logística de exportação.',
  ko: '대만·중국 공급망 기반 소싱: 공급업체 심사, 수락 기준, 출하 전 검사, 문서, 수출 물류로 리스크 관리.',
  ja: '台湾と中国の供給網で調達:サプライヤー審査、受入基準、出荷前検査、書類、輸出物流まで支援。',
  ar: 'توريد عبر تايوان والصين: تدقيق الموردين، معايير القبول، التفتيش قبل الشحن، المستندات، واللوجستيات للتصدير.',
  th: 'จัดหาผ่านไต้หวันและจีน: คัดกรองซัพพลายเออร์ เกณฑ์การรับมอบ การตรวจสอบก่อนส่ง เอกสาร โลจิสติกส์ส่งออก',
  vi: 'Tìm nguồn cung ứng qua Đài Loan và Trung Quốc: thẩm định nhà cung cấp, tiêu chí nghiệm thu, kiểm tra trước giao hàng, tài liệu và logistics xuất khẩu.',
  de: 'Sourcing über Taiwan und China: Lieferantenprüfung, Abnahmekriterien, Vor-Versand-Inspektion, Dokumentation, Exportlogistik.',
}

const heroKicker: Record<string, string> = {
  en: 'HOW WE WORK',
  cn: '我们怎么合作',
  zh: '我們怎麼合作',
  fr: 'NOTRE MÉTHODE',
  es: 'CÓMO TRABAJAMOS',
  pt: 'PARCEIRO DE SOURCING',
  ko: '소싱 파트너',
  ja: 'ソーシングパートナー',
  ar: 'شريك توريد',
  th: 'พันธมิตรจัดหา',
  vi: 'ĐỐI TÁC NGUỒN CUNG',
  de: 'SOURCING-PARTNER',
}

const heroTitles: Record<string, string> = {
  en: 'Direct sourcing from Taiwan + China factories — paper gift packaging + corporate gifts',
  cn: '直接采购台湾 + 中国工厂 — 纸盒礼品包装 + 企业礼赠品',
  zh: '直接採購台灣 + 中國工廠 — 紙盒禮品包裝 + 企業禮贈品',
  fr: "Sourcing direct depuis usines Taïwan + Chine — emballage cadeau papier + cadeaux corporate",
  es: 'Sourcing directo de fábricas Taiwán + China — embalaje regalo papel + regalos corporativos',
  pt: 'Rede Taiwan + China, com entrega controlada por critérios de aceitação',
  ko: '대만+중국 공급망, 수락 기준으로 리스크를 통제합니다',
  ja: '台湾＋中国ネットワーク。受入基準でリスクを管理',
  ar: 'شبكة تايوان + الصين مع تسليم مضبوط بمعايير قبول',
  th: 'เครือข่ายไต้หวัน+จีน พร้อมเกณฑ์รับมอบเพื่อควบคุมความเสี่ยง',
  vi: 'Mạng lưới Đài Loan + Trung Quốc, giao hàng kiểm soát rủi ro bằng tiêu chí nghiệm thu',
  de: 'Taiwan+China Netzwerk, mit risikokontrollierter Lieferung',
}

const heroDescs: Record<string, string> = {
  en: 'We buy the goods from the factory and resell to you. Our margin sits on top, fully disclosed. We inspect the goods ourselves before they leave the factory or the forwarder warehouse. The whole transaction sits between you and one Taiwan-registered company — not a three-way thread with an unreachable factory.',
  cn: '我们把货从工厂买下，再转卖给您。我们的转售利润揭露在外面。出货前由我们亲自把关——台湾的工厂直接到场、中国的货进我们合作货代仓库由我们验货。整笔交易落在您和一家台湾注册公司之间，而不是「写信给工厂等三天没回应」的三方信件。',
  zh: '我們把貨從工廠買下，再轉賣給你。我們的轉售利潤揭露在外面。出貨前由我們親自把關——台灣的工廠直接到場、中國的貨進我們合作貨代倉庫由我們驗貨。整筆交易落在你和一家台灣註冊公司之間，而不是「寫信給工廠等三天沒回應」的三方信件。',
  fr: "Nous achetons la marchandise à l'usine et vous la revendons. Notre marge est clairement affichée. Nous inspectons nous-mêmes avant que la marchandise ne quitte l'usine ou l'entrepôt du transitaire. Toute la transaction passe entre vous et une société taïwanaise enregistrée — pas une chaîne d'e-mails à trois avec une usine injoignable.",
  es: 'Compramos la mercancía a la fábrica y se la revendemos. Nuestro margen está claramente mostrado. Inspeccionamos nosotros mismos antes de que la mercancía salga de la fábrica o del almacén del agente de carga. Toda la transacción está entre usted y una empresa registrada en Taiwán — no una cadena de correos a tres con una fábrica que no responde.',
  pt: 'Não afirmamos fabricar tudo. Convertimos requisitos em critérios de aceitação verificáveis, auditamos fornecedores, realizamos inspeção pré-envio e entregamos documentação completa.',
  ko: '우리는 모든 것을 제조한다고 주장하지 않습니다. 요구사항을 검증 가능한 수락 기준으로 바꾸고, 공급업체를 심사하며, 출하 전 검사와 문서 패키지를 제공합니다.',
  ja: 'すべてを製造すると主張しません。要件を検証可能な受入基準に落とし込み、サプライヤー審査、出荷前検査、文書パッケージまで提供します。',
  ar: 'لا ندّعي أننا نصنع كل شيء. نحول متطلباتك إلى معايير قبول قابلة للتحقق، ندقق الموردين، نجري التفتيش قبل الشحن، ونوفر حزمة مستندات كاملة.',
  th: 'เราไม่ได้อ้างว่าผลิตทุกอย่างเอง เราแปลงความต้องการให้เป็นเกณฑ์รับมอบที่ตรวจสอบได้ คัดกรองซัพพลายเออร์ ทำการตรวจสอบก่อนส่ง และส่งมอบเอกสารครบถ้วน',
  vi: 'Chúng tôi không tuyên bố tự sản xuất mọi thứ. Chúng tôi chuyển yêu cầu thành tiêu chí nghiệm thu kiểm chứng được, thẩm định nhà cung cấp, chạy kiểm tra trước giao hàng và bàn giao bộ tài liệu.',
  de: 'Wir behaupten nicht, alles selbst zu fertigen. Wir übersetzen Anforderungen in prüfbare Abnahmekriterien, prüfen Lieferanten, führen Vor-Versand-Inspektion durch und liefern ein Dokumentationspaket.',
}

const sectionTitles: Record<
  string,
  { process: string; deliver: string; evidence: string; scorecard: string; trust: string; guides: string; start: string }
> = {
  en: {
    process: 'Our 5-step workflow',
    deliver: 'What you get with every shipment',
    evidence: 'Evidence you can ask us for at any time',
    scorecard: 'How we shortlist factories',
    trust: 'How we earn trust the first time',
    guides: 'Helpful reading',
    start: 'Start a sourcing conversation',
  },
  zh: {
    process: '我們的 5 步流程',
    deliver: '每批貨你會拿到什麼',
    evidence: '你隨時可以跟我們要的證據',
    scorecard: '我們怎麼篩工廠',
    trust: '我們怎麼贏得第一次信任',
    guides: '可以順便看的資料',
    start: '開始一次採購對話',
  },
  cn: {
    process: '我们的 5 步流程',
    deliver: '每批货您会拿到什么',
    evidence: '您随时可以跟我们要的证据',
    scorecard: '我们怎么筛工厂',
    trust: '我们怎么赢得第一次信任',
    guides: '可以顺便看的资料',
    start: '开始一次采购对话',
  },
  fr: {
    process: 'Notre processus en 5 étapes',
    deliver: 'Ce que vous recevez à chaque expédition',
    evidence: 'Preuves que vous pouvez demander à tout moment',
    scorecard: 'Comment nous présélectionnons les usines',
    trust: 'Comment nous gagnons la première confiance',
    guides: 'Lectures utiles',
    start: 'Démarrer une conversation sourcing',
  },
  es: {
    process: 'Nuestro proceso en 5 pasos',
    deliver: 'Lo que recibe en cada envío',
    evidence: 'Evidencia que puede pedirnos en cualquier momento',
    scorecard: 'Cómo preseleccionamos fábricas',
    trust: 'Cómo nos ganamos la primera confianza',
    guides: 'Lecturas útiles',
    start: 'Iniciar una conversación de sourcing',
  },
  pt: {
    process: 'Como funciona',
    deliver: 'O que você recebe',
    evidence: 'Evidências que você pode solicitar',
    scorecard: 'Scorecard de avaliação de fornecedores',
    trust: 'Como a confiança é construída',
    guides: 'Guias populares',
    start: 'Comece pelo escopo',
  },
  ko: {
    process: '진행 방식',
    deliver: '제공 항목',
    evidence: '요청 가능한 증빙',
    scorecard: '공급업체 평가표',
    trust: '신뢰를 만드는 방식',
    guides: '인기 구매 가이드',
    start: '스코프로 시작',
  },
  ja: {
    process: '進め方',
    deliver: '受け取れるもの',
    evidence: '提示を求められる証拠',
    scorecard: 'サプライヤー評価表',
    trust: '信頼の作り方',
    guides: '人気ガイド',
    start: 'スコープから開始',
  },
  ar: {
    process: 'كيف يعمل',
    deliver: 'ما الذي ستحصل عليه',
    evidence: 'أدلة يمكنك طلبها',
    scorecard: 'نموذج تقييم الموردين',
    trust: 'كيف نبني الثقة',
    guides: 'أدلة شائعة',
    start: 'ابدأ بنطاقك',
  },
  th: {
    process: 'ขั้นตอนการทำงาน',
    deliver: 'สิ่งที่คุณจะได้รับ',
    evidence: 'หลักฐานที่คุณขอดูได้',
    scorecard: 'แบบประเมินซัพพลายเออร์',
    trust: 'สร้างความน่าเชื่อถืออย่างไร',
    guides: 'คู่มือยอดนิยม',
    start: 'เริ่มจากขอบเขตงาน',
  },
  vi: {
    process: 'Cách làm việc',
    deliver: 'Bạn nhận được gì',
    evidence: 'Bằng chứng bạn có thể yêu cầu',
    scorecard: 'Bảng đánh giá nhà cung cấp',
    trust: 'Cách xây dựng niềm tin',
    guides: 'Hướng dẫn phổ biến',
    start: 'Bắt đầu từ phạm vi',
  },
  de: {
    process: 'So läuft es ab',
    deliver: 'Was Sie erhalten',
    evidence: 'Nachweise, die Sie anfordern können',
    scorecard: 'Lieferanten-Scorecard',
    trust: 'So entsteht Vertrauen',
    guides: 'Beliebte Ratgeber',
    start: 'Start mit dem Umfang',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = normalizeLang(lang)
  return buildPageMetadata({
    lang: l,
    title: metaTitles[l] || metaTitles.en,
    description: metaDescs[l] || metaDescs.en,
    pathname: '/sourcing',
    type: 'website',
    keywords: ['Taiwan-based trading company', 'Asia product supply', 'manufacturing coordination', 'export management', 'custom packaging Taiwan China', 'home and living products', 'outdoor products supply', 'Alibaba.com supplier', 'pre-shipment AQL inspection'],
  })
}

export default async function SourcingPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const t = sectionTitles[lang] || sectionTitles.en

  const pageUrl = `${SITE_URL}/${lang}/sourcing`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Sourcing', item: pageUrl },
    ],
  }

  const faq: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: (lang === 'zh' ? '你們是製造商嗎？' : lang === 'cn' ? '你们是制造商吗？' : 'Are you a manufacturer?'),
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'zh'
              ? '不是。SunGene 是台灣登記貿易公司,不是純採購夥伴 —— 我們透過台灣與中國的精選製造夥伴供應產品。您是跟我們買產品,不是跟某個工廠介紹單。風險透過供應商審查 + SunGene 自有員工出口前 AQL 品檢控管。'
              : lang === 'cn'
                ? '不是。SunGene 是台湾登记贸易公司,不是纯采购伙伴 —— 我们通过台湾与中国的精选制造伙伴供应产品。您是跟我们买产品,不是跟某个工厂介绍单。风险通过供应商审查 + SunGene 自有员工出口前 AQL 品检管控。'
                : 'No. SunGene is a Taiwan-based trading company — not a pure sourcing partner. We supply selected products through coordinated manufacturing with our partners in Taiwan and China. You buy from us, not from an introduced factory. Risk is controlled via supplier vetting AND pre-shipment AQL inspection by in-house SunGene staff.',
        },
      },
      {
        '@type': 'Question',
        name: (lang === 'zh' ? '為什麼採購夥伴不會更不可信？' : lang === 'cn' ? '为什么采购伙伴不会更不可信？' : 'Does using a sourcing partner reduce trust?'),
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'zh'
              ? '信任不來自「採購夥伴」這個 label,而來自證據。SunGene 的定位是台灣登記貿易公司供應精選產品 —— 您是跟我們買、不是跟介紹的工廠買。信任訊號:一致的 RFQ 範圍、文件化驗收標準、SunGene 自有員工出口前 AQL 品檢影片與偏差清單、完整交付文件包。'
              : lang === 'cn'
                ? '信任不来自「采购伙伴」这个 label,而来自证据。SunGene 的定位是台湾登记贸易公司供应精选产品 —— 您是跟我们买、不是跟介绍的工厂买。信任信号:一致的 RFQ 范围、文件化验收标准、SunGene 自有员工出口前 AQL 品检视频与偏差清单、完整交付文件包。'
                : "Trust comes from evidence, not from the label 'sourcing partner'. SunGene is positioned as a Taiwan-based trading company supplying selected products — you buy from us, not from an introduced factory. Trust signals: normalized RFQ scope, documented acceptance criteria, pre-shipment AQL inspection video by in-house SunGene staff + deviation log, and a complete handover package.",
        },
      },
      {
        '@type': 'Question',
        name: (lang === 'zh' ? '我需要提供哪些資訊才能開始？' : lang === 'cn' ? '我需要提供哪些信息才能开始？' : 'What do you need to start?'),
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'zh'
              ? '提供產品/包裝形式、目標產能、目的地電壓/頻率，以及任何硬限制（場地、衛生、合規）。照片會加速評估。'
              : lang === 'cn'
                ? '提供产品/包装形式、目标产能、目的地电压/频率，以及任何硬限制（场地、卫生、合规）。照片会加速评估。'
                : 'Product category, target quantity per shipment, packaging spec, destination market, and any hard constraints (certification, lead time, custom branding). Reference photos or Alibaba links help.',
        },
      },
      {
        '@type': 'Question',
        name: (lang === 'zh' ? '你們如何避免“報價看起來一樣但其實範圍不同”？' : lang === 'cn' ? '你们如何避免“报价看起来一样但其实范围不同”？' : 'How do you make quotes comparable?'),
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'zh'
              ? '我們會先把 RFQ 內容標準化:產品規格範圍、訂購數量、品質要求、包材規格、文件包與驗貨條件都對齊,讓不同供應商的報價可比較。'
              : lang === 'cn'
                ? '我们会先把 RFQ 内容标准化:产品规格范围、订购数量、品质要求、包材规格、文件包与验货条件都对齐,让不同供应商的报价可比较。'
                : 'We normalize RFQ scope (product spec range, order quantity, quality criteria, packaging spec, documents, inspection conditions) so quotes become comparable.',
        },
      },
    ],
  }

  const processItems: Array<{ title: string; body: string }> =
    lang === 'zh'
      ? [
          { title: '需求拆解', body: '把產品、包裝形式、產能與限制轉成可驗證的規格與驗收條件。' },
          { title: '供應商篩選', body: '用資格審查與風險篩選建立短名單，避免不明來源風險。' },
          { title: 'RFQ 對齊', body: '標準化範圍讓報價可比較，避免後續追加造成成本漂移。' },
          { title: '出貨前驗貨', body: '用 AQL 抽樣計畫、影片與偏差清單證明合規,出貨前先把問題關掉。' },
          { title: '交付與物流', body: '交付文件包、備品清單與出貨文件一致性核對，降低清關與維修風險。' },
        ]
      : lang === 'cn'
        ? [
            { title: '需求拆解', body: '把产品、包装形式、产能与限制转成可验证的规格与验收条件。' },
            { title: '供应商筛选', body: '用资格审查与风险筛选建立短名单，避免不明来源风险。' },
            { title: 'RFQ 对齐', body: '标准化范围让报价可比较，避免后续追加造成成本漂移。' },
            { title: '出货前验货', body: '用 AQL 抽样计划、视频与偏差清单证明合规,出货前先把问题关掉。' },
            { title: '交付与物流', body: '交付文件包、备品清单与出货文件一致性核对，降低清关与维修风险。' },
          ]
        : [
            { title: 'Requirement capture', body: 'Convert intent into testable requirements and acceptance criteria.' },
            { title: 'Supplier vetting', body: 'Shortlist suppliers with capability and risk screening.' },
            { title: 'RFQ normalization', body: 'Standardize scope so quotes are comparable and stable.' },
            { title: 'Pre-shipment inspection', body: 'Prove compliance with AQL sampling plan, video, and deviation log before container loading.' },
            { title: 'Handover & logistics', body: 'Deliver documentation, spares list, and verify shipment documents.' },
          ]

  const deliverItems: string[] =
    lang === 'zh'
      ? ['可比較的 RFQ 範圍與配置對照', '供應商資格審查重點與風險點', '出貨前驗貨清單＋AQL 抽樣計畫', '偏差清單（含改善與複測）', '交付文件包（包材規格/標準/條碼）', '出貨文件一致性核對']
      : lang === 'cn'
        ? ['可比较的 RFQ 范围与配置对照', '供应商资格审查要点与风险点', '出货前验货清单＋AQL 抽样计划', '偏差清单（含改善与复测）', '交付文件包（包材规格/标准/条码）', '出货文件一致性核对']
        : ['Comparable RFQ scope + spec alignment', 'Supplier qualification evidence + risk notes', 'Pre-shipment inspection checklist + AQL sampling plan', 'Deviation log with corrective actions', 'Handover document package (specs, standards, barcodes)', 'Shipment document verification']

  const trustItems: Array<{ title: string; body: string }> =
    lang === 'zh'
      ? [
          { title: '責任邊界寫清楚', body: '我們不靠話術建立信任，而是用範圍、文件、驗收條件與證據。' },
          { title: '證據導向的驗收', body: '驗貨影片＋AQL 抽樣結果＋偏差結案,讓品質與交付可被追溯。' },
          { title: '跨區供應鏈實作', body: '台灣＋中國團隊協作，讓選型、交付與溝通更順。' },
        ]
      : lang === 'cn'
        ? [
            { title: '责任边界写清楚', body: '我们不靠话术建立信任，而是用范围、文件、验收条件与证据。' },
            { title: '证据导向的验收', body: '验货视频＋AQL 抽样结果＋偏差结案,让品质与交付可被追溯。' },
            { title: '跨区供应链实作', body: '台湾＋中国团队协作，让选型、交付与沟通更顺。' },
          ]
        : [
            { title: 'Clear responsibilities', body: 'Trust is built through scope, documents, acceptance criteria, and evidence.' },
            { title: 'Evidence-based acceptance', body: 'Inspection video + AQL sampling results + closed deviations make every delivery traceable.' },
            { title: 'Cross-border execution', body: 'Taiwan + China presence supports faster coordination and risk control.' },
          ]

  const evidenceItems: Array<{ title: string; body: string; example: string }> =
    lang === 'zh'
      ? [
          { title: '書面驗收標準', body: '把「跑得起來」變成可判定的 pass/fail 條件，而不是口頭承諾。', example: 'QC scope\n- Inspected lot: ___ pcs\n- AQL: 2.5 / 4.0\n- Critical defects: 0\n- Major defects: ___\n- Pass / Fail: ___' },
          { title: '驗貨影片＋報告', body: '用裝櫃前的完整驗貨流程影片與抽樣結果證明合規,而非只看樣品。', example: 'Inspection evidence\n- Video link: ___\n- Samples: ___ pcs\n- Result: ___\n- Deviation: ___' },
          { title: '偏差清單（含複測）', body: '所有問題都要落在偏差清單，寫明改善措施與複測結果。', example: 'Deviation log\n#12 Seal contamination\nAction: add dust removal\nRetest: pass\nDate: ___' },
          { title: '交付文件包', body: '產品規格、材質證明、包裝/條碼/標準、合規文件,讓貨況可追溯。', example: 'Handover package\n- Product spec\n- Material cert\n- Packing list + barcode\n- Compliance doc\n- Inspection report' },
          { title: '備品/耗材策略', body: '用料號＋照片＋工位對應，避免現場找不到料、停機等交期。', example: 'Spares\nStation: Sealing\nPart: Heater bar\nQty: 2\nLead time: ___' },
          { title: '出貨文件一致性核對', body: '發票、裝箱單、HS code、箱號與備品標示一致，降低清關風險。', example: 'Shipping docs\nInvoice: ___\nPacking list: ___\nHS code: ___\nCOO: ___' },
        ]
      : lang === 'cn'
        ? [
            { title: '书面验收标准', body: '把“跑得起来”变成可判定的 pass/fail 条件，而不是口头承诺。', example: 'QC scope\n- Inspected lot: ___ pcs\n- AQL: 2.5 / 4.0\n- Critical defects: 0\n- Major defects: ___\n- Pass / Fail: ___' },
            { title: '验货视频＋报告', body: '用装柜前的完整验货流程视频与抽样结果证明合规,而非只看样品。', example: 'Inspection evidence\n- Video link: ___\n- Samples: ___ pcs\n- Result: ___\n- Deviation: ___' },
            { title: '偏差清单（含复测）', body: '所有问题都要落在偏差清单，写明改善措施与复测结果。', example: 'Deviation log\n#12 Seal contamination\nAction: add dust removal\nRetest: pass\nDate: ___' },
            { title: '交付文件包', body: '产品规格、材质证明、包装/条码/标准、合规文件,让货况可追溯。', example: 'Handover package\n- Product spec\n- Material cert\n- Packing list + barcode\n- Compliance doc\n- Inspection report' },
            { title: '备品/耗材策略', body: '用料号＋照片＋工位对应，避免现场找不到料、停机等交期。', example: 'Spares\nStation: Sealing\nPart: Heater bar\nQty: 2\nLead time: ___' },
            { title: '出货文件一致性核对', body: '发票、装箱单、HS code、箱号与备品标识一致，降低清关风险。', example: 'Shipping docs\nInvoice: ___\nPacking list: ___\nHS code: ___\nCOO: ___' },
          ]
        : [
            { title: 'Written acceptance criteria', body: 'Turn promises into pass/fail conditions you can verify.', example: 'QC scope\n- Inspected lot: ___ pcs\n- AQL: 2.5 / 4.0\n- Critical defects: 0\n- Major defects: ___\n- Pass / Fail: ___' },
            { title: 'Inspection video + report', body: 'Full pre-shipment inspection footage and AQL sampling results, not just a sample.', example: 'Inspection evidence\n- Video link: ___\n- Samples: ___ pcs\n- Result: ___\n- Deviation: ___' },
            { title: 'Deviation log (with retest)', body: 'Every issue is logged with corrective action and retest evidence.', example: 'Deviation log\n#12 Seal contamination\nAction: add dust removal\nRetest: pass\nDate: ___' },
            { title: 'Handover document package', body: 'Product specs, material certs, packing lists, barcodes, compliance docs for traceable delivery.', example: 'Handover package\n- Product spec\n- Material cert\n- Packing list + barcode\n- Compliance doc\n- Inspection report' },
            { title: 'Spare parts plan', body: 'Part numbers + photos + station mapping to reduce downtime after shipment.', example: 'Spares\nStation: Sealing\nPart: Heater bar\nQty: 2\nLead time: ___' },
            { title: 'Shipment document verification', body: 'Invoice, packing list, HS code, crate IDs aligned to avoid customs delays.', example: 'Shipping docs\nInvoice: ___\nPacking list: ___\nHS code: ___\nCOO: ___' },
          ]

  const scorecardRows: Array<{ area: string; weight: string; focus: string }> =
    lang === 'zh'
      ? [
          { area: '技術適配', weight: '30%', focus: '產品特性、包裝形式、節拍與接口' },
          { area: '品質系統', weight: '25%', focus: '檢核表、來料檢驗、配線標準、版本控管' },
          { area: '驗貨能力', weight: '25%', focus: '驗貨計畫、AQL 抽樣、偏差處理與複驗' },
          { area: '交付/售後', weight: '20%', focus: '文件包、備品策略、回覆流程與升級機制' },
        ]
      : lang === 'cn'
        ? [
            { area: '技术适配', weight: '30%', focus: '产品特性、包装形式、节拍与接口' },
            { area: '质量系统', weight: '25%', focus: '检查表、来料检验、配线标准、版本控制' },
            { area: '验货能力', weight: '25%', focus: '验货计画、AQL 抽样、偏差处理与复验' },
            { area: '交付/售后', weight: '20%', focus: '文件包、备品策略、回复流程与升级机制' },
          ]
        : [
            { area: 'Technical fit', weight: '30%', focus: 'Product behavior, packaging format, throughput, interfaces' },
            { area: 'Quality system', weight: '25%', focus: 'Checklists, incoming inspection, wiring standards, revision control' },
            { area: 'Inspection capability', weight: '25%', focus: 'Inspection plan, AQL sampling, deviation handling and retest' },
            { area: 'Delivery & service', weight: '20%', focus: 'Document package, spare plan, support workflow and escalation' },
          ]

  const redFlags: string[] =
    lang === 'zh'
      ? ['沒有書面驗收標準（只說會測）', '拿不出配線圖或版本修訂', '關鍵零件型號不固定或頻繁替換', '拒絕偏差清單或不做複測', '備品沒有料號/照片/工位對應']
      : lang === 'cn'
        ? ['没有书面验收标准（只说会测）', '拿不出配线图或版本修订', '关键零件型号不固定或频繁替换', '拒绝偏差清单或不做复测', '备品没有料号/照片/工位对应']
        : ['No written acceptance criteria', 'No wiring diagrams or revision history', 'Key components change frequently without justification', 'No deviation log or retest evidence', 'Spare parts list without part numbers/photos/station mapping']

  const guideSlugs = [
    'taiwan-china-sourcing-partner-model',
    'supplier-qualification-checklist',
    'how-to-compare-quotes-apples-to-apples',
    'payment-terms-risk-control',
    'third-party-inspection-vs-fat',
    'rfq-template-industrial-equipment',
    'fat-acceptance-checklist-template',
    'quote-comparison-sheet-template',
    'handover-document-package-template',
  ]

  // Filter to slugs that actually have a resource article. Prevents the page
  // from linking to /resources/{slug} URLs that 404 (was the #1 source of
  // "Not found (404)" reports in Google Search Console).
  const guides = guideSlugs.flatMap((slug) => {
    const i18n = getResourceArticleI18n(slug, lang) || getResourceArticleI18n(slug, 'en')
    if (!i18n) return []
    return [{ slug, title: i18n.title, desc: i18n.description }]
  })

  const startTitle = sectionTitles[lang]?.start || sectionTitles.en.start
  const primaryCta = lang === 'zh' ? '取得採購評估' : lang === 'cn' ? '获取采购评估' : 'Request assessment'
  const secondaryCta = lang === 'zh' ? '先看報價入口' : lang === 'cn' ? '先看报价入口' : 'Explore quote pages'
  const contactCta = lang === 'zh' ? '聯絡我們' : lang === 'cn' ? '联系我们' : 'Contact'

  return (
    <>
      <JsonLd data={[breadcrumb, faq]} />

      <PageHero
        kicker={heroKicker[lang] || heroKicker.en}
        title={heroTitles[lang] || heroTitles.en}
        desc={heroDescs[lang] || heroDescs.en}
        image={{ src: PHOTO.pages.solutions.hero, alt: 'Sourcing partner', priority: true, aspectClassName: 'aspect-[16/10]' }}
      />

      <section className="py-6 bg-white">
        <Container>
          <Breadcrumbs
            lang={lang}
            items={[
              {
                label: ({
                  en: 'Sourcing',
                  cn: '产品',
                  zh: '產品',
                  fr: 'Sourcing',
                  es: 'Sourcing',
                  pt: 'Sourcing',
                  ko: '소싱',
                  ja: 'ソーシング',
                  ar: 'التوريد',
                  th: 'การจัดหา',
                  vi: 'Nguồn cung',
                  de: 'Sourcing',
                } as Record<string, string>)[lang] || 'Sourcing',
                href: `/${lang}/sourcing`,
              },
            ]}
          />
        </Container>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <Container className="max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <h2 className="text-2xl font-bold text-gray-950">{t.process}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {processItems.map((it) => (
                  <Card key={it.title} className="p-5">
                    <div className="text-base font-bold text-gray-950">{it.title}</div>
                    <div className="mt-2 text-sm text-gray-700">{it.body}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <QuickAssessment lang={lang} context="sourcing" source="sourcing" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-950">{t.deliver}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverItems.map((x) => (
              <Card key={x} className="p-5">
                <div className="text-sm font-semibold text-gray-950">{x}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 bg-white border-t border-gray-200/60">
        <Container className="max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-950">{t.evidence}</h2>
              <p className="mt-2 text-sm text-gray-600">
                {lang === 'zh'
                  ? '如果你想要更安心，請直接要求「證據」，而不是看話術。以下每一項都能具體驗證。'
                  : lang === 'cn'
                    ? '如果你想更安心，请直接要求“证据”，而不是看话术。以下每一项都能具体验证。'
                    : 'If you want confidence, request evidence—not claims. Each item below is verifiable.'}
              </p>
            </div>
            <div className="flex gap-3">
              <ButtonLink href={`/${lang}/resources/third-party-inspection-vs-fat`} variant="secondary" size="md">
                {lang === 'zh' ? '看驗貨流程指南' : lang === 'cn' ? '看验货流程指南' : 'View inspection process'}
              </ButtonLink>
              <ButtonLink href="/case-studies" variant="soft" size="md">
                {lang === 'zh' ? '看案例' : lang === 'cn' ? '看案例' : 'Case studies'}
              </ButtonLink>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {evidenceItems.map((e) => (
              <Card key={e.title} className="p-6">
                <div className="text-base font-bold text-gray-950">{e.title}</div>
                <div className="mt-2 text-sm text-gray-700">{e.body}</div>
                <div className="mt-4 rounded-xl bg-gray-950 p-4">
                  <pre className="whitespace-pre-wrap text-[11px] leading-relaxed text-white/80">{e.example}</pre>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr,1fr]">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-base font-bold text-gray-950">
                {lang === 'zh' ? '你可以先提供的最小資訊' : lang === 'cn' ? '你可以先提供的最小信息' : 'Minimum inputs to start'}
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {(lang === 'zh'
                  ? ['產品與包裝形式（照片最好）', '目標產能（bpm 或 日產）', '目的地電壓/頻率', '硬限制：場地、衛生、法規、換型頻率']
                  : lang === 'cn'
                    ? ['产品与包装形式（照片最好）', '目标产能（bpm 或 日产）', '目的地电压/频率', '硬限制：场地、卫生、法规、换型频率']
                    : ['Product category + reference photos or Alibaba link', 'Quantity per shipment (e.g. 5,000 pcs)', 'Destination market / shipping country', 'Hard constraints: certification, lead time, branding, packaging spec']
                ).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-base font-bold text-gray-950">
                {lang === 'zh' ? '我們會回覆的格式（讓你可比較）' : lang === 'cn' ? '我们会回复的格式（让你可比较）' : 'What we reply with (so you can compare)'}
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {(lang === 'zh'
                  ? ['品類路線與關鍵限制清單', '可比較的 RFQ 範圍（含客製選項）', '驗收條件草案（出貨前驗貨）', '下一步需要你補的資料']
                  : lang === 'cn'
                    ? ['品类路线与关键限制清单', '可比较的 RFQ 范围（含定制选项）', '验收条件草案（出货前验货）', '下一步需要您补的资料']
                    : ['Category path + critical constraints list', 'Comparable RFQ scope (including customization options)', 'Acceptance criteria draft (pre-shipment inspection)', 'Next data points we need from you']
                ).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 bg-gray-50 border-t border-gray-200/60">
        <Container className="max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-950">{t.scorecard}</h2>
              <p className="mt-2 text-sm text-gray-600">
                {lang === 'zh'
                  ? '如果你要在台灣/中國供應商之間做選擇，建議先用同一套評分表，避免只看產速或最低價。'
                  : lang === 'cn'
                    ? '如果你要在台湾/中国供应商之间做选择，建议先用同一套评分表，避免只看产速或最低价。'
                    : 'Use one scorecard across Taiwan/China suppliers so you don’t compare only speed or lowest price.'}
              </p>
            </div>
            <div className="flex gap-3">
              <ButtonLink href={`/${lang}/resources/supplier-qualification-checklist`} variant="secondary" size="md">
                {lang === 'zh' ? '供應商審查' : lang === 'cn' ? '供应商审查' : 'Supplier qualification'}
              </ButtonLink>
              <ButtonLink href={`/${lang}/resources/how-to-compare-quotes-apples-to-apples`} variant="soft" size="md">
                {lang === 'zh' ? '報價比較' : lang === 'cn' ? '报价比较' : 'Compare quotes'}
              </ButtonLink>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-5 py-3 font-bold">{lang === 'zh' ? '面向' : lang === 'cn' ? '维度' : 'Area'}</th>
                  <th className="px-5 py-3 font-bold">{lang === 'zh' ? '權重' : lang === 'cn' ? '权重' : 'Weight'}</th>
                  <th className="px-5 py-3 font-bold">{lang === 'zh' ? '看什麼' : lang === 'cn' ? '看什么' : 'What to check'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {scorecardRows.map((r) => (
                  <tr key={r.area}>
                    <td className="px-5 py-4 font-semibold text-gray-950">{r.area}</td>
                    <td className="px-5 py-4 text-gray-700">{r.weight}</td>
                    <td className="px-5 py-4 text-gray-700">{r.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,1fr]">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="text-base font-bold text-gray-950">
                {lang === 'zh' ? '常見紅旗' : lang === 'cn' ? '常见红旗' : 'Common red flags'}
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {redFlags.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="text-base font-bold text-gray-950">
                {lang === 'zh' ? '你可以怎麼做得更可控' : lang === 'cn' ? '你可以怎么做得更可控' : 'How to control risk quickly'}
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {(lang === 'zh'
                  ? ['要求 RFQ 範圍標準化（含文件包與出貨前驗貨條件）', '要求偏差清單＋複驗才出貨', '用里程碑付款對齊驗收證據', '裝箱清單要「品號＋照片＋條碼」']
                  : lang === 'cn'
                    ? ['要求 RFQ 范围标准化（含文件包与出货前验货条件）', '要求偏差清单＋复验才出货', '用里程碑付款对齐验收证据', '装箱清单要「品号＋照片＋条码」']
                    : ['Normalize RFQ scope (including documents + pre-shipment inspection conditions)', 'Require deviation log + retest before shipment', 'Align milestone payments to inspection evidence', 'Demand packing list with item codes + photos + barcodes']
                ).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink href={`/${lang}/resources/payment-terms-risk-control`} variant="secondary" size="sm">
                  {lang === 'zh' ? '付款條件' : lang === 'cn' ? '付款条件' : 'Payment terms'}
                </ButtonLink>
                <ButtonLink href={`/${lang}/resources/spare-parts-and-wear-parts-planning`} variant="soft" size="sm">
                  {lang === 'zh' ? '備品策略' : lang === 'cn' ? '备品策略' : 'Spares'}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 bg-white border-t border-gray-200/60">
        <Container className="max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-950">{t.trust}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {trustItems.map((x) => (
              <Card key={x.title} className="p-6">
                <div className="text-base font-bold text-gray-950">{x.title}</div>
                <div className="mt-2 text-sm text-gray-700">{x.body}</div>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {PHOTO.home.trustGallery.slice(0, 4).map((src) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                <div className="relative aspect-[4/3]">
                  <Image src={src} alt="Trust evidence" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 bg-white border-t border-gray-200/60">
        <Container className="max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-950">{t.guides}</h2>
              <p className="mt-2 text-sm text-gray-600">
                {lang === 'zh'
                  ? '先用指南把關鍵規格與風險點釐清，再進入詢價會更快更準。'
                  : lang === 'cn'
                    ? '先用指南把关键规格与风险点理清，再进入询价会更快更准。'
                    : 'Use these guides to clarify scope and risks before requesting quotes.'}
              </p>
            </div>
            <ButtonLink href={`/${lang}/resources`} variant="secondary" size="md">
              {lang === 'zh' ? '資源中心' : lang === 'cn' ? '资源中心' : 'Resources'}
            </ButtonLink>
          </div>

          {guides.length > 0 && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {guides.map((g) => (
                <a
                  key={g.slug}
                  href={`/${lang}/resources/${g.slug}`}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-accent-300 hover:bg-accent-50"
                >
                  <div className="text-sm font-bold text-gray-950">{g.title}</div>
                  <div className="mt-2 text-sm text-gray-600">{g.desc}</div>
                </a>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CompareBanner lang={lang} />
      <section className="py-12 sm:py-16 bg-brand-950 text-white">
        <Container className="max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
            <div>
              <div className="text-sm font-bold tracking-[0.18em] text-white/70">{startTitle}</div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {lang === 'zh'
                  ? '把需求說清楚，我們就能把風險控住'
                  : lang === 'cn'
                    ? '把需求说清楚，我们就能把风险控住'
                    : 'Define your scope, and we’ll control the risk'}
              </h2>
              <p className="mt-3 text-sm text-white/70">
                {lang === 'zh'
                  ? '先用快速評估送出產品、產能、目的地電壓/頻率與限制條件。我們會回覆配置方向與驗收清單。'
                  : lang === 'cn'
                    ? '先用快速评估提交产品、产能、目的地电压/频率与限制条件。我们会回复配置方向与验收清单。'
                    : 'Start with a quick assessment (product, output target, utilities, constraints). We reply with a configuration path and acceptance checklist.'}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href={`/${lang}/contact`} variant="primary" size="lg">
                {primaryCta}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact`} variant="secondary" size="lg">
                {secondaryCta}
              </ButtonLink>
              <ButtonLink href={`/${lang}/contact?source=sourcing`} variant="soft" size="lg">
                {contactCta}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
