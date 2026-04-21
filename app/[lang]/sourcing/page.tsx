import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
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
  en: 'Sourcing Partner | Taiwan + China Supplier Network & Risk Control',
  cn: '采购伙伴 | 台湾+中国供应链整合与风险控制',
  zh: '採購夥伴 | 台灣＋中國供應鏈整合與風險控制',
  fr: 'Partenaire de sourcing | Réseau Taïwan + Chine & contrôle des risques',
  es: 'Socio de abastecimiento | Red Taiwán + China y control de riesgo',
  pt: 'Parceiro de sourcing | Rede Taiwan + China e controle de risco',
  ko: '소싱 파트너 | 대만+중국 공급망 및 리스크 관리',
  ja: 'ソーシングパートナー | 台湾＋中国ネットワークとリスク管理',
  ar: 'شريك توريد | شبكة تايوان + الصين وإدارة المخاطر',
  th: 'พันธมิตรจัดหา | เครือข่ายไต้หวัน+จีน และการควบคุมความเสี่ยง',
  vi: 'Đối tác nguồn cung | Mạng lưới Đài Loan + Trung Quốc & kiểm soát rủi ro',
  de: 'Sourcing-Partner | Taiwan+China Netzwerk & Risikokontrolle',
}

const metaDescs: Record<string, string> = {
  en: 'We help buyers source industrial equipment across Taiwan and China with supplier vetting, acceptance criteria, FAT, documentation, and export logistics.',
  cn: '我们协助买方整合台湾与中国供应链：供应商筛选、验收标准、FAT、文件交付与出口物流，降低采购风险。',
  zh: '我們協助買方整合台灣與中國供應鏈：供應商篩選、驗收標準、FAT、文件交付與出口物流，降低採購風險。',
  fr: 'Sourcing d’équipements via Taïwan et la Chine : sélection fournisseurs, critères d’acceptation, FAT, documents et logistique export.',
  es: 'Sourcing de equipos vía Taiwán y China: evaluación de proveedores, criterios de aceptación, FAT, documentación y logística de exportación.',
  pt: 'Sourcing de equipamentos via Taiwan e China: avaliação de fornecedores, critérios de aceitação, FAT, documentação e logística de exportação.',
  ko: '대만과 중국 공급망 기반 소싱: 공급업체 심사, 수락 기준, FAT, 문서 및 수출 물류로 리스크를 줄입니다.',
  ja: '台湾と中国の供給網で設備を調達：サプライヤー審査、受入基準、FAT、書類、輸出物流まで支援します。',
  ar: 'توريد معدات عبر تايوان والصين: تدقيق الموردين، معايير القبول، FAT، المستندات، واللوجستيات للتصدير.',
  th: 'จัดหาเครื่องจักรผ่านไต้หวันและจีน: คัดกรองซัพพลายเออร์ เกณฑ์การรับมอบ FAT เอกสาร และโลจิสติกส์ส่งออก',
  vi: 'Tìm nguồn cung ứng qua Đài Loan và Trung Quốc: thẩm định nhà cung cấp, tiêu chí nghiệm thu, FAT, tài liệu và logistics xuất khẩu.',
  de: 'Sourcing von Anlagen über Taiwan und China: Lieferantenprüfung, Abnahmekriterien, FAT, Dokumentation und Exportlogistik.',
}

const heroKicker: Record<string, string> = {
  en: 'SOURCING PARTNER',
  cn: '采购伙伴',
  zh: '採購夥伴',
  fr: 'PARTENAIRE DE SOURCING',
  es: 'SOCIO DE ABASTECIMIENTO',
  pt: 'PARCEIRO DE SOURCING',
  ko: '소싱 파트너',
  ja: 'ソーシングパートナー',
  ar: 'شريك توريد',
  th: 'พันธมิตรจัดหา',
  vi: 'ĐỐI TÁC NGUỒN CUNG',
  de: 'SOURCING-PARTNER',
}

const heroTitles: Record<string, string> = {
  en: 'Taiwan + China supplier network, with risk-controlled delivery',
  cn: '台湾+中国供应链整合，用验收标准控制风险',
  zh: '台灣＋中國供應鏈整合，用驗收標準控制風險',
  fr: 'Réseau Taïwan + Chine, avec livraison maîtrisée par critères d’acceptation',
  es: 'Red Taiwán + China, con entrega controlada por criterios de aceptación',
  pt: 'Rede Taiwan + China, com entrega controlada por critérios de aceitação',
  ko: '대만+중국 공급망, 수락 기준으로 리스크를 통제합니다',
  ja: '台湾＋中国ネットワーク。受入基準でリスクを管理',
  ar: 'شبكة تايوان + الصين مع تسليم مضبوط بمعايير قبول',
  th: 'เครือข่ายไต้หวัน+จีน พร้อมเกณฑ์รับมอบเพื่อควบคุมความเสี่ยง',
  vi: 'Mạng lưới Đài Loan + Trung Quốc, giao hàng kiểm soát rủi ro bằng tiêu chí nghiệm thu',
  de: 'Taiwan+China Netzwerk, mit risikokontrollierter Lieferung',
}

const heroDescs: Record<string, string> = {
  en: 'We don’t claim to manufacture everything. We convert your requirements into testable acceptance criteria, vet suppliers, run FAT, and deliver a documented handover package.',
  cn: '我们不宣称“什么都自产”。我们把需求转成可验收的标准，筛选供应商，执行 FAT，并交付可追溯的文件包。',
  zh: '我們不宣稱「什麼都自產」。我們把需求轉成可驗收的標準，篩選供應商，執行 FAT，並交付可追溯的文件包。',
  fr: 'Nous ne prétendons pas tout fabriquer. Nous transformons vos besoins en critères d’acceptation mesurables, auditons les fournisseurs, réalisons le FAT et livrons un dossier complet.',
  es: 'No afirmamos fabricar todo. Convertimos requisitos en criterios de aceptación verificables, auditamos proveedores, realizamos FAT y entregamos documentación completa.',
  pt: 'Não afirmamos fabricar tudo. Convertimos requisitos em critérios de aceitação verificáveis, auditamos fornecedores, realizamos FAT e entregamos documentação completa.',
  ko: '우리는 모든 것을 제조한다고 주장하지 않습니다. 요구사항을 검증 가능한 수락 기준으로 바꾸고, 공급업체를 심사하며, FAT와 문서 패키지를 제공합니다.',
  ja: 'すべてを製造すると主張しません。要件を検証可能な受入基準に落とし込み、サプライヤー審査、FAT、文書パッケージまで提供します。',
  ar: 'لا ندّعي أننا نصنع كل شيء. نحول متطلباتك إلى معايير قبول قابلة للتحقق، ندقق الموردين، نجري FAT، ونوفر حزمة مستندات كاملة.',
  th: 'เราไม่ได้อ้างว่าผลิตทุกอย่างเอง เราแปลงความต้องการให้เป็นเกณฑ์รับมอบที่ตรวจสอบได้ คัดกรองซัพพลายเออร์ ทำ FAT และส่งมอบเอกสารครบถ้วน',
  vi: 'Chúng tôi không tuyên bố tự sản xuất mọi thứ. Chúng tôi chuyển yêu cầu thành tiêu chí nghiệm thu kiểm chứng được, thẩm định nhà cung cấp, chạy FAT và bàn giao bộ tài liệu.',
  de: 'Wir behaupten nicht, alles selbst zu fertigen. Wir übersetzen Anforderungen in prüfbare Abnahmekriterien, prüfen Lieferanten, führen FAT durch und liefern ein Dokumentationspaket.',
}

const sectionTitles: Record<
  string,
  { process: string; deliver: string; evidence: string; scorecard: string; trust: string; guides: string; start: string }
> = {
  en: {
    process: 'How it works',
    deliver: 'What you receive',
    evidence: 'Evidence you can ask to see',
    scorecard: 'Supplier screening scorecard',
    trust: 'How trust is built',
    guides: 'Popular buyer guides',
    start: 'Start with your scope',
  },
  zh: {
    process: '流程怎麼跑',
    deliver: '你會拿到什麼',
    evidence: '你可以要求看到的證據',
    scorecard: '供應商篩選評分表',
    trust: '信任怎麼建立',
    guides: '熱門採購指南',
    start: '用範圍啟動',
  },
  cn: {
    process: '流程怎么跑',
    deliver: '你会拿到什么',
    evidence: '你可以要求看到的证据',
    scorecard: '供应商筛选评分表',
    trust: '信任怎么建立',
    guides: '热门采购指南',
    start: '用范围启动',
  },
  fr: {
    process: 'Comment ça marche',
    deliver: 'Ce que vous recevez',
    evidence: 'Preuves que vous pouvez demander',
    scorecard: 'Grille d’évaluation des fournisseurs',
    trust: 'Comment bâtir la confiance',
    guides: 'Guides populaires',
    start: 'Démarrer par votre périmètre',
  },
  es: {
    process: 'Cómo funciona',
    deliver: 'Qué recibes',
    evidence: 'Evidencia que puedes pedir',
    scorecard: 'Tabla de evaluación de proveedores',
    trust: 'Cómo se construye la confianza',
    guides: 'Guías populares',
    start: 'Empieza con tu alcance',
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
    keywords: ['sourcing partner', 'Taiwan sourcing', 'China sourcing', 'supplier vetting', 'FAT', 'industrial equipment procurement', 'risk control'],
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
              ? '我們的定位是採購夥伴。我們會依專案需求匹配台灣與中國供應鏈，並用供應商資格審查與 FAT 驗收來控制風險。'
              : lang === 'cn'
                ? '我们的定位是采购伙伴。我们会按项目需求匹配台湾与中国供应链，并用供应商资格审查与 FAT 验收控制风险。'
                : 'We are a sourcing partner. We match suppliers across Taiwan and China and control risk via supplier vetting and FAT acceptance.',
        },
      },
      {
        '@type': 'Question',
        name: (lang === 'zh' ? '為什麼採購夥伴不會更不可信？' : lang === 'cn' ? '为什么采购伙伴不会更不可信？' : 'Does using a sourcing partner reduce trust?'),
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'zh'
              ? '信任來自可驗證的證據：一致的 RFQ 範圍、文件化驗收標準、FAT 影片與偏差清單、以及完整交付文件包。'
              : lang === 'cn'
                ? '信任来自可验证的证据：一致的 RFQ 范围、文件化验收标准、FAT 视频与偏差清单，以及完整交付文件包。'
                : 'Trust comes from evidence: normalized RFQ scope, documented acceptance criteria, FAT video + deviation log, and a complete handover package.',
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
                : 'Product + packaging format, target output, destination voltage/frequency, and any hard constraints (space, hygiene, compliance). Photos help.',
        },
      },
      {
        '@type': 'Question',
        name: (lang === 'zh' ? '你們如何避免“報價看起來一樣但其實範圍不同”？' : lang === 'cn' ? '你们如何避免“报价看起来一样但其实范围不同”？' : 'How do you make quotes comparable?'),
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'zh'
              ? '我們會先把 RFQ 內容標準化：包裝/容器範圍、產能目標、檢測模組、公用工程、文件包與 FAT 條件都對齊，讓不同供應商的報價可比較。'
              : lang === 'cn'
                ? '我们会先把 RFQ 内容标准化：包装/容器范围、产能目标、检测模块、公用工程、文件包与 FAT 条件都对齐，让不同供应商的报价可比较。'
                : 'We normalize RFQ scope (range, output target, inspection modules, utilities, documents, FAT conditions) so quotes become comparable.',
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
          { title: 'FAT 驗收', body: '用抽樣計畫、影片與偏差清單證明性能，出貨前先把問題關掉。' },
          { title: '交付與物流', body: '交付文件包、備品清單與出貨文件一致性核對，降低清關與維修風險。' },
        ]
      : lang === 'cn'
        ? [
            { title: '需求拆解', body: '把产品、包装形式、产能与限制转成可验证的规格与验收条件。' },
            { title: '供应商筛选', body: '用资格审查与风险筛选建立短名单，避免不明来源风险。' },
            { title: 'RFQ 对齐', body: '标准化范围让报价可比较，避免后续追加造成成本漂移。' },
            { title: 'FAT 验收', body: '用抽样计划、视频与偏差清单证明性能，出货前先把问题关掉。' },
            { title: '交付与物流', body: '交付文件包、备品清单与出货文件一致性核对，降低清关与维修风险。' },
          ]
        : [
            { title: 'Requirement capture', body: 'Convert intent into testable requirements and acceptance criteria.' },
            { title: 'Supplier vetting', body: 'Shortlist suppliers with capability and risk screening.' },
            { title: 'RFQ normalization', body: 'Standardize scope so quotes are comparable and stable.' },
            { title: 'FAT acceptance', body: 'Prove performance with sampling plan, video, and deviation log.' },
            { title: 'Handover & logistics', body: 'Deliver documentation, spares list, and verify shipment documents.' },
          ]

  const deliverItems: string[] =
    lang === 'zh'
      ? ['可比較的 RFQ 範圍與配置對照', '供應商資格審查重點與風險點', 'FAT 驗收清單＋抽樣計畫', '偏差清單（含改善與複測）', '交付文件包（手冊/圖面/備品）', '出貨文件一致性核對']
      : lang === 'cn'
        ? ['可比较的 RFQ 范围与配置对照', '供应商资格审查要点与风险点', 'FAT 验收清单＋抽样计划', '偏差清单（含改善与复测）', '交付文件包（手册/图纸/备品）', '出货文件一致性核对']
        : ['Comparable RFQ scope + configuration alignment', 'Supplier qualification evidence + risk notes', 'FAT checklist + sampling plan', 'Deviation log with corrective actions', 'Handover document package', 'Shipment document verification']

  const trustItems: Array<{ title: string; body: string }> =
    lang === 'zh'
      ? [
          { title: '責任邊界寫清楚', body: '我們不靠話術建立信任，而是用範圍、文件、驗收條件與證據。' },
          { title: '證據導向的驗收', body: 'FAT 影片＋抽樣結果＋偏差結案，讓性能與交付可被追溯。' },
          { title: '跨區供應鏈實作', body: '台灣＋中國團隊協作，讓選型、交付與溝通更順。' },
        ]
      : lang === 'cn'
        ? [
            { title: '责任边界写清楚', body: '我们不靠话术建立信任，而是用范围、文件、验收条件与证据。' },
            { title: '证据导向的验收', body: 'FAT 视频＋抽样结果＋偏差结案，让性能与交付可被追溯。' },
            { title: '跨区供应链实作', body: '台湾＋中国团队协作，让选型、交付与沟通更顺。' },
          ]
        : [
            { title: 'Clear responsibilities', body: 'Trust is built through scope, documents, acceptance criteria, and evidence.' },
            { title: 'Evidence-based acceptance', body: 'FAT video + sampling results + closed deviations make delivery traceable.' },
            { title: 'Cross-border execution', body: 'Taiwan + China presence supports faster coordination and risk control.' },
          ]

  const evidenceItems: Array<{ title: string; body: string; example: string }> =
    lang === 'zh'
      ? [
          { title: '書面驗收標準', body: '把「跑得起來」變成可判定的 pass/fail 條件，而不是口頭承諾。', example: 'FAT scope\n- Output: ___ bags/min\n- Accuracy: ___%\n- Run time: ___ min\n- Pass/Fail: ___' },
          { title: 'FAT 影片＋報告', body: '用長時間運轉與抽樣結果證明性能，避免短 demo 造成誤判。', example: 'FAT evidence\n- Video link: ___\n- Samples: ___ pcs\n- Result: ___\n- Deviation: ___' },
          { title: '偏差清單（含複測）', body: '所有問題都要落在偏差清單，寫明改善措施與複測結果。', example: 'Deviation log\n#12 Seal contamination\nAction: add dust removal\nRetest: pass\nDate: ___' },
          { title: '交付文件包', body: '手冊、圖面、電控/氣路、備品清單與設定表，讓售後可追溯。', example: 'Handover package\n- Manual\n- Wiring diagram\n- Spare parts\n- Settings sheet\n- FAT report' },
          { title: '備品/耗材策略', body: '用料號＋照片＋工位對應，避免現場找不到料、停機等交期。', example: 'Spares\nStation: Sealing\nPart: Heater bar\nQty: 2\nLead time: ___' },
          { title: '出貨文件一致性核對', body: '發票、裝箱單、HS code、箱號與備品標示一致，降低清關風險。', example: 'Shipping docs\nInvoice: ___\nPacking list: ___\nHS code: ___\nCOO: ___' },
        ]
      : lang === 'cn'
        ? [
            { title: '书面验收标准', body: '把“跑得起来”变成可判定的 pass/fail 条件，而不是口头承诺。', example: 'FAT scope\n- Output: ___ bags/min\n- Accuracy: ___%\n- Run time: ___ min\n- Pass/Fail: ___' },
            { title: 'FAT 视频＋报告', body: '用长时间运行与抽样结果证明性能，避免短 demo 造成误判。', example: 'FAT evidence\n- Video link: ___\n- Samples: ___ pcs\n- Result: ___\n- Deviation: ___' },
            { title: '偏差清单（含复测）', body: '所有问题都要落在偏差清单，写明改善措施与复测结果。', example: 'Deviation log\n#12 Seal contamination\nAction: add dust removal\nRetest: pass\nDate: ___' },
            { title: '交付文件包', body: '手册、图纸、电控/气路、备品清单与设置表，让售后可追溯。', example: 'Handover package\n- Manual\n- Wiring diagram\n- Spare parts\n- Settings sheet\n- FAT report' },
            { title: '备品/耗材策略', body: '用料号＋照片＋工位对应，避免现场找不到料、停机等交期。', example: 'Spares\nStation: Sealing\nPart: Heater bar\nQty: 2\nLead time: ___' },
            { title: '出货文件一致性核对', body: '发票、装箱单、HS code、箱号与备品标识一致，降低清关风险。', example: 'Shipping docs\nInvoice: ___\nPacking list: ___\nHS code: ___\nCOO: ___' },
          ]
        : [
            { title: 'Written acceptance criteria', body: 'Turn promises into pass/fail conditions you can verify.', example: 'FAT scope\n- Output: ___ bags/min\n- Accuracy: ___%\n- Run time: ___ min\n- Pass/Fail: ___' },
            { title: 'FAT video + report', body: 'Performance proof across time with sampling results, not a short demo.', example: 'FAT evidence\n- Video link: ___\n- Samples: ___ pcs\n- Result: ___\n- Deviation: ___' },
            { title: 'Deviation log (with retest)', body: 'Every issue is logged with corrective action and retest evidence.', example: 'Deviation log\n#12 Seal contamination\nAction: add dust removal\nRetest: pass\nDate: ___' },
            { title: 'Handover document package', body: 'Manuals, diagrams, spares list, and settings sheet for traceable service.', example: 'Handover package\n- Manual\n- Wiring diagram\n- Spare parts\n- Settings sheet\n- FAT report' },
            { title: 'Spare parts plan', body: 'Part numbers + photos + station mapping to reduce downtime after shipment.', example: 'Spares\nStation: Sealing\nPart: Heater bar\nQty: 2\nLead time: ___' },
            { title: 'Shipment document verification', body: 'Invoice, packing list, HS code, crate IDs aligned to avoid customs delays.', example: 'Shipping docs\nInvoice: ___\nPacking list: ___\nHS code: ___\nCOO: ___' },
          ]

  const scorecardRows: Array<{ area: string; weight: string; focus: string }> =
    lang === 'zh'
      ? [
          { area: '技術適配', weight: '30%', focus: '產品特性、包裝形式、節拍與接口' },
          { area: '品質系統', weight: '25%', focus: '檢核表、來料檢驗、配線標準、版本控管' },
          { area: '驗收能力', weight: '25%', focus: 'FAT 計畫、抽樣、偏差處理與複測' },
          { area: '交付/售後', weight: '20%', focus: '文件包、備品策略、回覆流程與升級機制' },
        ]
      : lang === 'cn'
        ? [
            { area: '技术适配', weight: '30%', focus: '产品特性、包装形式、节拍与接口' },
            { area: '质量系统', weight: '25%', focus: '检查表、来料检验、配线标准、版本控制' },
            { area: '验收能力', weight: '25%', focus: 'FAT 计划、抽样、偏差处理与复测' },
            { area: '交付/售后', weight: '20%', focus: '文件包、备品策略、回复流程与升级机制' },
          ]
        : [
            { area: 'Technical fit', weight: '30%', focus: 'Product behavior, packaging format, throughput, interfaces' },
            { area: 'Quality system', weight: '25%', focus: 'Checklists, incoming inspection, wiring standards, revision control' },
            { area: 'Acceptance capability', weight: '25%', focus: 'FAT plan, sampling, deviation handling and retest' },
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
    'incoterms-for-machinery-and-automation',
    'payment-terms-risk-control',
    'third-party-inspection-vs-fat',
    'rfq-template-industrial-equipment',
    'fat-acceptance-checklist-template',
    'quote-comparison-sheet-template',
    'handover-document-package-template',
  ]

  const guides = guideSlugs.map((slug) => {
    const i18n = getResourceArticleI18n(slug, lang) || getResourceArticleI18n(slug, 'en')
    return { slug, title: i18n?.title ?? slug, desc: i18n?.description ?? '' }
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
                  cn: '采购伙伴',
                  zh: '採購夥伴',
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
                {lang === 'zh' ? '看 FAT vs 檢驗' : lang === 'cn' ? '看 FAT vs 检验' : 'FAT vs Inspection'}
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
                    : ['Product + packaging format (photos help)', 'Target output (bpm or units/day)', 'Destination voltage/frequency', 'Hard constraints: space, hygiene, compliance, changeover frequency']
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
                  ? ['配置路線與關鍵限制清單', '可比較的 RFQ 範圍（含選配模組）', '驗收條件草案（FAT）', '下一步需要你補的資料']
                  : lang === 'cn'
                    ? ['配置路线与关键限制清单', '可比较的 RFQ 范围（含选配模块）', '验收条件草案（FAT）', '下一步需要你补的资料']
                    : ['Configuration path + critical constraints list', 'Comparable RFQ scope (including options)', 'Acceptance criteria draft (FAT)', 'Next data points we need from you']
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
                  ? ['要求 RFQ 範圍標準化（含文件包與 FAT 條件）', '要求偏差清單＋複測才出貨', '用里程碑付款對齊驗收證據', '備品清單要「料號＋照片＋工位」']
                  : lang === 'cn'
                    ? ['要求 RFQ 范围标准化（含文件包与 FAT 条件）', '要求偏差清单＋复测才出货', '用里程碑付款对齐验收证据', '备品清单要“料号＋照片＋工位”']
                    : ['Normalize RFQ scope (including documents + FAT conditions)', 'Require deviation log + retest before shipment', 'Align milestone payments to acceptance evidence', 'Demand spare list with part numbers + photos + station mapping']
                ).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink href={`/${lang}/resources/payment-terms-risk-control`} variant="secondary" size="sm">
                  {lang === 'zh' ? '付款條件' : lang === 'cn' ? '付款条件' : 'Payment terms'}
                </ButtonLink>
                <ButtonLink href={`/${lang}/resources/incoterms-for-machinery-and-automation`} variant="soft" size="sm">
                  Incoterms
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
        </Container>
      </section>

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
              <ButtonLink href={`/${lang}/assessment?source=sourcing`} variant="primary" size="lg">
                {primaryCta}
              </ButtonLink>
              <ButtonLink href={`/${lang}/quote`} variant="secondary" size="lg">
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
