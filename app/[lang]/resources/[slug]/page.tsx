import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ALL_LANGS, Lang } from '@/lib/i18n'
import { SITE_URL } from '@/lib/siteConfig'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import Breadcrumbs from '@/components/Breadcrumbs'
import MachineQuickLinks from '@/components/MachineQuickLinks'
import CopyBlock from '@/components/CopyBlock'
import { getRelatedResourceArticles, getResourceArticle, getResourceArticleI18n, RESOURCE_DEFAULT_PUBLISHED_AT, RESOURCE_SLUGS, ResourceSection } from '@/lib/resourceArticles'
import { buildPageMetadata, normalizeLang } from '@/lib/seo'
import { LANG_META } from '@/lib/seo'
import { getStableLastModifiedISO } from '@/lib/buildTime'
import { getResourceBoostSections } from '@/lib/resourceBoost'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return ALL_LANGS.flatMap(lang => RESOURCE_SLUGS.map(slug => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const l = normalizeLang(lang)
  const i18n = getResourceArticleI18n(slug, l) ?? getResourceArticleI18n(slug, 'en')
  if (!i18n) {
    return buildPageMetadata({
      lang: l,
      title: 'Resources',
      description: 'Industrial sourcing guides and practical evaluation notes.',
      pathname: '/resources',
      type: 'website',
    })
  }

  const metaTitle = i18n.metaTitle.replace(/\s*\|\s*SunGene\s*$/i, '').trim()

  return buildPageMetadata({
    lang: l,
    title: metaTitle,
    description: i18n.metaDescription,
    pathname: `/resources/${slug}`,
    type: 'article',
  })
}

function renderSection(s: ResourceSection, key: number) {
  if (s.type === 'h2') return <h2 key={key}>{s.text}</h2>
  if (s.type === 'h3') return <h3 key={key}>{s.text}</h3>
  if (s.type === 'p') return <p key={key}>{s.text}</p>
  if (s.type === 'ul') return <ul key={key}>{s.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
  if (s.type === 'table') {
    return (
      <div key={key} className="not-prose overflow-x-auto">
        <table className="table-auto w-full text-sm border-collapse">
          <thead>
            <tr className="bg-brand-50">
              {s.headers.map((h, i) => (
                <th key={i} className="border border-gray-200 px-4 py-2 text-left font-semibold text-brand-900">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.rows.map((row, r) => (
              <tr key={r} className={r % 2 === 1 ? 'bg-gray-50' : undefined}>
                {row.map((cell, c) => (
                  <td key={c} className="border border-gray-200 px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return null
}

const ui: Record<Lang, { faqTitle: string; speakTitle: string; speakBody: string; speakLink: string; viewAll: string }> = {
  en: { faqTitle: 'Frequently Asked Questions', speakTitle: 'Speak to a Sourcing Engineer', speakBody: 'Our team can advise on sourcing path, packaging compatibility, supplier fit, and line layout risk.', speakLink: 'Contact Us →', viewAll: 'View Sourcing Scope' },
  zh: { faqTitle: '常見問題', speakTitle: '與採購工程師聊聊', speakBody: '團隊可協助採購路徑、包裝相容性、供應商適配與線體風險建議。', speakLink: '聯絡我們 →', viewAll: '查看採購範圍' },
  cn: { faqTitle: '常见问题', speakTitle: '联系采购工程师', speakBody: '团队可协助采购路径、包装兼容性、供应商适配与线体风险建议。', speakLink: '联系我们 →', viewAll: '查看采购范围' },
  fr: { faqTitle: 'FAQ', speakTitle: 'Parler à un ingénieur sourcing', speakBody: 'Notre équipe conseille sur le parcours sourcing, la compatibilité emballage, l’adéquation fournisseur et le risque d’intégration.', speakLink: 'Nous contacter →', viewAll: 'Voir le périmètre sourcing' },
  es: { faqTitle: 'Preguntas frecuentes', speakTitle: 'Hable con un ingeniero de abastecimiento', speakBody: 'Nuestro equipo puede orientar sobre ruta de abastecimiento, compatibilidad de empaque, encaje del proveedor y riesgo de integración.', speakLink: 'Contáctenos →', viewAll: 'Ver alcance de abastecimiento' },
  pt: { faqTitle: 'Perguntas frequentes', speakTitle: 'Fale com um engenheiro de sourcing', speakBody: 'Nossa equipe orienta sobre caminho de sourcing, compatibilidade de embalagem, aderência do fornecedor e risco de integração.', speakLink: 'Fale conosco →', viewAll: 'Ver escopo de sourcing' },
  ko: { faqTitle: '자주 묻는 질문', speakTitle: '소싱 엔지니어 상담', speakBody: '팀이 소싱 경로, 포장 호환성, 공급업체 적합성, 라인 리스크를 안내합니다.', speakLink: '문의하기 →', viewAll: '소싱 범위 보기' },
  ja: { faqTitle: 'よくある質問', speakTitle: '調達エンジニアに相談', speakBody: '調達ルート、包装適合性、サプライヤー適合、ラインリスクについてご案内します。', speakLink: 'お問い合わせ →', viewAll: '調達範囲を見る' },
  ar: { faqTitle: 'الأسئلة الشائعة', speakTitle: 'تحدث إلى مهندس توريد', speakBody: 'يمكن لفريقنا المساعدة في مسار التوريد وتوافق التغليف وملاءمة المورد ومخاطر الخط.', speakLink: 'اتصل بنا →', viewAll: 'عرض نطاق التوريد' },
  th: { faqTitle: 'คำถามที่พบบ่อย', speakTitle: 'คุยกับวิศวกรด้านการจัดหา', speakBody: 'ทีมช่วยแนะนำเส้นทางการจัดหา ความเข้ากันได้ของบรรจุภัณฑ์ ความเหมาะสมของซัพพลายเออร์ และความเสี่ยงของไลน์.', speakLink: 'ติดต่อเรา →', viewAll: 'ดูขอบเขตการจัดหา' },
  vi: { faqTitle: 'Câu hỏi thường gặp', speakTitle: 'Trao đổi với kỹ sư sourcing', speakBody: 'Đội ngũ có thể tư vấn lộ trình sourcing, độ tương thích bao bì, mức phù hợp nhà cung cấp và rủi ro tích hợp dây chuyền.', speakLink: 'Liên hệ →', viewAll: 'Xem phạm vi sourcing' },
  de: { faqTitle: 'Häufige Fragen', speakTitle: 'Mit einem Sourcing-Ingenieur sprechen', speakBody: 'Unser Team berät zu Sourcing-Pfad, Verpackungskompatibilität, Lieferanten-Fit und Integrationsrisiken.', speakLink: 'Kontakt →', viewAll: 'Sourcing-Bereich ansehen' },
}

type TemplateFile = { label: string; href: string }
type TemplateSnippet = { title: string; text: string }

function getTemplateExtras(slug: string, lang: Lang) {
  const l: Lang = lang

  const byLang = <T,>(dict: Partial<Record<Lang, T>>): T | undefined => (dict[l] ?? dict.en) as T | undefined

  const base = `/templates/${slug}`

  if (slug === 'rfq-template-industrial-equipment') {
    const files = byLang<Record<'doc' | 'txt', string>>({
      en: { doc: `${base}/en.doc`, txt: `${base}/en.txt` },
      zh: { doc: `${base}/zh.doc`, txt: `${base}/en.txt` },
      cn: { doc: `${base}/cn.doc`, txt: `${base}/en.txt` },
    })
    const snippets = byLang<TemplateSnippet[]>({
      en: [
        {
          title: 'Email-ready RFQ (copy/paste)',
          text:
            'Subject: RFQ — [Project Name] — [Machine/Line Type]\\n\\nHello,\\nPlease quote based on the following scope. If any item is unclear, list your assumptions explicitly.\\n\\n1) Product & packaging: ___\\n2) Output target & run plan: ___\\n3) Utilities: ___\\n4) Acceptance criteria (FAT): ___\\n5) Document package required: manual + diagrams + spares list + FAT report/video + deviation log\\n\\nPlease respond in the same section order and include option breakdown and lead times.\\n\\nRegards,\\n___',
        },
      ],
      zh: [
        {
          title: 'Email 可直接複製的 RFQ 段落',
          text:
            '主旨：RFQ — [專案名稱] — [機型/線體]\\n\\n您好，\\n請依下列範圍報價。若有任何不清楚之處，請明確列出你的假設。\\n\\n1）產品與包裝：___\\n2）產能與運轉：___\\n3）公用工程：___\\n4）FAT 驗收條件：___\\n5）文件包：手冊＋圖面＋備品清單＋FAT 報告/影片＋偏差清單\\n\\n請依同一章節順序回覆，並提供選配拆項與交期。\\n\\n謝謝\\n___',
        },
      ],
      cn: [
        {
          title: 'Email 可直接复制的 RFQ 段落',
          text:
            '主题：RFQ — [项目名称] — [机型/线体]\\n\\n您好，\\n请按下列范围报价。如有任何不清楚之处，请明确列出你的假设。\\n\\n1）产品与包装：___\\n2）产能与运行：___\\n3）公用工程：___\\n4）FAT 验收条件：___\\n5）文件包：手册＋图纸＋备品清单＋FAT 报告/视频＋偏差清单\\n\\n请按同一章节顺序回复，并提供选配拆项与交期。\\n\\n谢谢\\n___',
        },
      ],
    })
    if (!files) return null
    const downloads: TemplateFile[] = [
      { label: l === 'zh' ? '下載 RFQ（Word）' : l === 'cn' ? '下载 RFQ（Word）' : 'Download RFQ (Word)', href: files.doc },
      { label: l === 'zh' ? '下載 RFQ（文字）' : l === 'cn' ? '下载 RFQ（文本）' : 'Download RFQ (Text)', href: files.txt },
    ]
    return { title: l === 'zh' ? 'RFQ 範本工具' : l === 'cn' ? 'RFQ 模板工具' : 'RFQ template tools', downloads, snippets: snippets ?? [] }
  }

  if (slug === 'fat-acceptance-checklist-template') {
    const files = byLang<Record<'doc', string>>({
      en: { doc: `${base}/en.doc` },
      zh: { doc: `${base}/zh.doc` },
      cn: { doc: `${base}/cn.doc` },
    })
    const snippets = byLang<TemplateSnippet[]>({
      en: [
        {
          title: 'Acceptance statement (copy/paste)',
          text:
            'We accept shipment after FAT passes under the above conditions and all major deviations are closed. Remaining minor deviations: ___.\\nBuyer representative: ___  Date: ___\\nSupplier representative: ___  Date: ___',
        },
        {
          title: 'Deviation log row (copy/paste)',
          text: '#__ Issue: ___\\nSeverity: Minor/Major\\nAction: ___\\nRetest: Pass/Fail\\nOwner: ___\\nDate: ___',
        },
      ],
      zh: [
        {
          title: '驗收聲明（可直接複製）',
          text:
            '本次 FAT 依上述條件驗收通過，且所有重大偏差已結案，買方同意出貨。未結案之小偏差：___。\\n買方代表：___  日期：___\\n供應商代表：___  日期：___',
        },
        {
          title: '偏差清單單筆（可直接複製）',
          text: '#__ 問題：___\\n嚴重度：Minor/Major\\n改善措施：___\\n複測：Pass/Fail\\n負責人：___\\n日期：___',
        },
      ],
      cn: [
        {
          title: '验收声明（可直接复制）',
          text:
            '本次 FAT 按上述条件验收通过，且所有重大偏差已结案，买方同意出货。未结案之小偏差：___。\\n买方代表：___  日期：___\\n供应商代表：___  日期：___',
        },
        {
          title: '偏差清单单笔（可直接复制）',
          text: '#__ 问题：___\\n严重度：Minor/Major\\n改善措施：___\\n复测：Pass/Fail\\n负责人：___\\n日期：___',
        },
      ],
    })
    if (!files) return null
    const downloads: TemplateFile[] = [
      { label: l === 'zh' ? '下載 FAT（Word）' : l === 'cn' ? '下载 FAT（Word）' : 'Download FAT (Word)', href: files.doc },
    ]
    return { title: l === 'zh' ? 'FAT 範本工具' : l === 'cn' ? 'FAT 模板工具' : 'FAT template tools', downloads, snippets: snippets ?? [] }
  }

  if (slug === 'quote-comparison-sheet-template') {
    const files = byLang<Record<'xls' | 'csv', string>>({
      en: { xls: `${base}/en.xls`, csv: `${base}/en.csv` },
      zh: { xls: `${base}/zh.xls`, csv: `${base}/zh.csv` },
      cn: { xls: `${base}/cn.xls`, csv: `${base}/cn.csv` },
    })
    const snippets = byLang<TemplateSnippet[]>({
      en: [
        { title: 'Risk note block (copy/paste)', text: 'Acceptance criteria: ___\\nDeviations: ___\\nDocuments: ___\\nSpares: ___\\nHidden integration: ___' },
      ],
      zh: [
        { title: '風險備註（可直接複製）', text: '驗收條件：___\\n偏差處理：___\\n文件包：___\\n備品：___\\n隱藏整合成本：___' },
      ],
      cn: [
        { title: '风险备注（可直接复制）', text: '验收条件：___\\n偏差处理：___\\n文件包：___\\n备品：___\\n隐藏整合成本：___' },
      ],
    })
    if (!files) return null
    const downloads: TemplateFile[] = [
      { label: l === 'zh' ? '下載對照表（Excel）' : l === 'cn' ? '下载对照表（Excel）' : 'Download sheet (Excel)', href: files.xls },
      { label: l === 'zh' ? '下載對照表（CSV）' : l === 'cn' ? '下载对照表（CSV）' : 'Download sheet (CSV)', href: files.csv },
    ]
    return { title: l === 'zh' ? '報價對照工具' : l === 'cn' ? '报价对照工具' : 'Quote comparison tools', downloads, snippets: snippets ?? [] }
  }

  if (slug === 'handover-document-package-template') {
    const files = byLang<Record<'doc', string>>({
      en: { doc: `${base}/en.doc` },
      zh: { doc: `${base}/zh.doc` },
      cn: { doc: `${base}/cn.doc` },
    })
    const snippets = byLang<TemplateSnippet[]>({
      en: [
        { title: 'Document request email (copy/paste)', text: 'Hello,\\nPlease provide the full handover package before shipment: manuals + diagrams + configuration list + settings sheet + spare parts list + FAT report/video + deviation log.\\nRegards,\\n___' },
      ],
      zh: [
        { title: '文件包要求（可直接複製）', text: '您好，\\n請在出貨前提供完整交付文件包：手冊＋圖面＋最終配置清單＋設定表＋備品清單＋FAT 報告/影片＋偏差清單。\\n謝謝\\n___' },
      ],
      cn: [
        { title: '文件包要求（可直接复制）', text: '您好，\\n请在出货前提供完整交付文件包：手册＋图纸＋最终配置清单＋设置表＋备品清单＋FAT 报告/视频＋偏差清单。\\n谢谢\\n___' },
      ],
    })
    if (!files) return null
    const downloads: TemplateFile[] = [
      { label: l === 'zh' ? '下載文件包（Word）' : l === 'cn' ? '下载文件包（Word）' : 'Download package (Word)', href: files.doc },
    ]
    return { title: l === 'zh' ? '交付文件包工具' : l === 'cn' ? '交付文件包工具' : 'Handover package tools', downloads, snippets: snippets ?? [] }
  }

  if (slug === 'supplier-audit-and-scorecard-template') {
    const files = byLang<Record<'xls' | 'csv', string>>({
      en: { xls: `${base}/en.xls`, csv: `${base}/en.csv` },
      zh: { xls: `${base}/zh.xls`, csv: `${base}/zh.csv` },
      cn: { xls: `${base}/cn.xls`, csv: `${base}/cn.csv` },
    })
    const snippets = byLang<TemplateSnippet[]>({
      en: [
        {
          title: 'Evidence request email (copy/paste)',
          text:
            'Subject: Supplier Qualification — Evidence Request\\n\\nHello,\\nTo proceed with supplier qualification, please provide the evidence below:\\n1) Similar project references (video/photos)\\n2) Draft FAT plan + sampling plan\\n3) Example wiring diagram and document revision record\\n4) Spare parts list (part numbers + photos) and recommended stock\\n5) After-sales support workflow and response time\\n\\nRegards,\\n___',
        },
      ],
      zh: [
        {
          title: '要求證據 Email（可直接複製）',
          text:
            '主旨：供應商資格審查 — 證據提供\\n\\n您好，\\n為了進行供應商資格審查，請提供以下證據：\\n1）相似專案案例（照片/影片）\\n2）FAT 計畫草案＋抽樣計畫\\n3）配線圖樣本與文件版本/修訂紀錄\\n4）備品清單（料號＋照片）與建議庫存\\n5）售後支援流程與回覆時效\\n\\n謝謝\\n___',
        },
      ],
      cn: [
        {
          title: '要求证据 Email（可直接复制）',
          text:
            '主题：供应商资格审查 — 证据提供\\n\\n您好，\\n为了进行供应商资格审查，请提供以下证据：\\n1）相似项目案例（照片/视频）\\n2）FAT 计划草案＋抽样计划\\n3）配线图样本与文件版本/修订记录\\n4）备品清单（料号＋照片）与建议库存\\n5）售后支持流程与回复时效\\n\\n谢谢\\n___',
        },
      ],
    })
    if (!files) return null
    const downloads: TemplateFile[] = [
      { label: l === 'zh' ? '下載評分表（Excel）' : l === 'cn' ? '下载评分表（Excel）' : 'Download scorecard (Excel)', href: files.xls },
      { label: l === 'zh' ? '下載評分表（CSV）' : l === 'cn' ? '下载评分表（CSV）' : 'Download scorecard (CSV)', href: files.csv },
    ]
    return { title: l === 'zh' ? '供應商審查工具' : l === 'cn' ? '供应商审查工具' : 'Supplier audit tools', downloads, snippets: snippets ?? [] }
  }

  return null
}

type MachineSlug =
  | 'powder-filling-machine'
  | 'liquid-filling-machine'
  | 'pouch-packing-machine'
  | 'snack-processing-line'
  | 'conveyor-system'

const machineLabels: Record<Lang, Record<MachineSlug, string>> = {
  en: {
    'powder-filling-machine': 'Powder Filling Machine',
    'liquid-filling-machine': 'Liquid Filling Machine',
    'pouch-packing-machine': 'Pouch Packing Machine',
    'snack-processing-line': 'Snack Processing Line',
    'conveyor-system': 'Conveyor System',
  },
  zh: {
    'powder-filling-machine': '粉末充填機',
    'liquid-filling-machine': '液體充填機',
    'pouch-packing-machine': '袋裝包裝機',
    'snack-processing-line': '零食加工線',
    'conveyor-system': '輸送帶系統',
  },
  cn: {
    'powder-filling-machine': '粉末灌装机',
    'liquid-filling-machine': '液体灌装机',
    'pouch-packing-machine': '袋装包装机',
    'snack-processing-line': '零食加工线',
    'conveyor-system': '输送带系统',
  },
  fr: {
    'powder-filling-machine': 'Machine de remplissage poudre',
    'liquid-filling-machine': 'Machine de remplissage liquide',
    'pouch-packing-machine': 'Machine de conditionnement sachets',
    'snack-processing-line': 'Ligne de snacks',
    'conveyor-system': 'Système de convoyage',
  },
  es: {
    'powder-filling-machine': 'Máquina llenadora de polvo',
    'liquid-filling-machine': 'Máquina llenadora de líquido',
    'pouch-packing-machine': 'Máquina empacadora de bolsas',
    'snack-processing-line': 'Línea de snacks',
    'conveyor-system': 'Sistema de transporte',
  },
  pt: {
    'powder-filling-machine': 'Máquina de envase de pó',
    'liquid-filling-machine': 'Máquina de envase de líquido',
    'pouch-packing-machine': 'Máquina de embalagem em sachês',
    'snack-processing-line': 'Linha de snacks',
    'conveyor-system': 'Sistema de transportadores',
  },
  ko: {
    'powder-filling-machine': '분말 충전기',
    'liquid-filling-machine': '액체 충전기',
    'pouch-packing-machine': '파우치 포장기',
    'snack-processing-line': '스낵 가공 라인',
    'conveyor-system': '컨베이어 시스템',
  },
  ja: {
    'powder-filling-machine': '粉体充填機',
    'liquid-filling-machine': '液体充填機',
    'pouch-packing-machine': 'パウチ包装機',
    'snack-processing-line': 'スナック加工ライン',
    'conveyor-system': 'コンベアシステム',
  },
  ar: {
    'powder-filling-machine': 'ماكينة تعبئة المساحيق',
    'liquid-filling-machine': 'ماكينة تعبئة السوائل',
    'pouch-packing-machine': 'ماكينة تعبئة الأكياس',
    'snack-processing-line': 'خط معالجة السناكات',
    'conveyor-system': 'نظام السيور الناقلة',
  },
  th: {
    'powder-filling-machine': 'เครื่องบรรจุผง',
    'liquid-filling-machine': 'เครื่องบรรจุของเหลว',
    'pouch-packing-machine': 'เครื่องแพ็กถุง',
    'snack-processing-line': 'ไลน์แปรรูปสแน็ก',
    'conveyor-system': 'ระบบสายพานลำเลียง',
  },
  vi: {
    'powder-filling-machine': 'Máy chiết rót bột',
    'liquid-filling-machine': 'Máy chiết rót chất lỏng',
    'pouch-packing-machine': 'Máy đóng gói túi',
    'snack-processing-line': 'Dây chuyền snack',
    'conveyor-system': 'Hệ thống băng tải',
  },
  de: {
    'powder-filling-machine': 'Pulverfüllmaschine',
    'liquid-filling-machine': 'Flüssigkeitsfüllmaschine',
    'pouch-packing-machine': 'Beutelverpackungsmaschine',
    'snack-processing-line': 'Snack-Verarbeitungslinie',
    'conveyor-system': 'Fördersystem',
  },
}

export default async function ResourceArticlePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const l = (ALL_LANGS.includes(lang as Lang) ? lang : 'en') as Lang

  const article = getResourceArticle(slug)
  if (!article) notFound()

  const i18n = getResourceArticleI18n(slug, l) ?? getResourceArticleI18n(slug, 'en')
  if (!i18n) notFound()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANG_META[l].htmlLang,
    mainEntity: i18n.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const dateModified = getStableLastModifiedISO()
  const datePublished = article.publishedAt ?? RESOURCE_DEFAULT_PUBLISHED_AT
  const ogImageUrl = (() => {
    const u = new URL(`${SITE_URL}/og-image`)
    u.searchParams.set('lang', l)
    u.searchParams.set('title', i18n.title)
    u.searchParams.set('desc', i18n.description)
    u.searchParams.set('path', `/resources/${slug}`)
    return u.toString()
  })()
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': article.category === 'selection' || article.category === 'buying' ? 'TechArticle' : 'Article',
    '@id': `${SITE_URL}/${l}/resources/${slug}#article`,
    inLanguage: LANG_META[l].htmlLang,
    headline: i18n.title,
    alternativeHeadline: i18n.metaTitle,
    description: i18n.description,
    keywords: i18n.metaTitle,
    articleSection: i18n.categoryLabel,
    wordCount: i18n.sections.reduce((acc, s) => {
      if (s.type === 'p') return acc + s.text.split(/\s+/).length
      if (s.type === 'ul') return acc + s.items.join(' ').split(/\s+/).length
      if (s.type === 'h2' || s.type === 'h3') return acc + s.text.split(/\s+/).length
      return acc
    }, 0),
    author: { '@type': 'Organization', '@id': `${SITE_URL}/#org`, name: 'SunGene Co., LTD.', url: SITE_URL },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org`, name: 'SunGene Co., LTD.', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo/sungene.png` } },
    url: `${SITE_URL}/${l}/resources/${slug}`,
    image: [ogImageUrl],
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${l}/resources/${slug}` },
    isPartOf: { '@type': 'CollectionPage', '@id': `${SITE_URL}/${l}/resources`, name: 'Industrial Sourcing Guides' },
    about: article.relatedMachine ? {
      '@type': 'Product',
      '@id': `${SITE_URL}/${l}/machines/${article.relatedMachine}#product`,
      name: (machineLabels[l] ?? machineLabels.en)[article.relatedMachine as MachineSlug],
      url: `${SITE_URL}/${l}/machines/${article.relatedMachine}`,
    } : undefined,
    ...(article.relatedMachine ? {
      mentions: {
        '@type': 'Product',
        '@id': `${SITE_URL}/${l}/machines/${article.relatedMachine}#product`,
        name: (machineLabels[l] ?? machineLabels.en)[article.relatedMachine as MachineSlug],
        url: `${SITE_URL}/${l}/machines/${article.relatedMachine}`,
        brand: { '@type': 'Brand', '@id': `${SITE_URL}/#brand`, name: 'SunGene' },
      },
    } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.lead', 'article p'],
    },
  }

  // HowTo schema — eligible for "how-to-choose-*" selection articles and
  // "what-to-prepare-*" buying guides, where the h2 sections naturally form
  // a step-by-step workflow.
  const isHowToEligible =
    (article.category === 'selection' || slug.startsWith('what-to-prepare-before-')) &&
    i18n.sections.filter((s) => s.type === 'h2').length >= 3

  const howToSchema = isHowToEligible
    ? (() => {
        const h2List = i18n.sections.filter((s): s is { type: 'h2'; text: string } => s.type === 'h2')
        const steps = h2List.slice(0, 10).map((h, i) => {
          // The step's description is the first paragraph after this h2
          const idx = i18n.sections.indexOf(h)
          const next = i18n.sections.slice(idx + 1).find((s) => s.type === 'p' || s.type === 'ul')
          const text =
            next && next.type === 'p'
              ? next.text
              : next && next.type === 'ul'
              ? next.items.join(' ')
              : h.text
          return {
            '@type': 'HowToStep',
            position: i + 1,
            name: h.text,
            text: text.slice(0, 500),
            url: `${SITE_URL}/${l}/resources/${slug}#step-${i + 1}`,
          }
        })
        return {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          '@id': `${SITE_URL}/${l}/resources/${slug}#howto`,
          inLanguage: LANG_META[l].htmlLang,
          name: i18n.title,
          description: i18n.description,
          image: ogImageUrl,
          totalTime: 'PT15M',
          estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
          supply: [
            { '@type': 'HowToSupply', name: 'Product specification sheet (name, form, size, target output)' },
            { '@type': 'HowToSupply', name: 'Site voltage and frequency' },
            { '@type': 'HowToSupply', name: 'Destination port / incoterm preference' },
          ],
          tool: [
            { '@type': 'HowToTool', name: 'SunGene sourcing assessment form' },
          ],
          step: steps,
          about: article.relatedMachine
            ? {
                '@type': 'Product',
                '@id': `${SITE_URL}/${l}/machines/${article.relatedMachine}#product`,
                name: (machineLabels[l] ?? machineLabels.en)[article.relatedMachine as MachineSlug],
              }
            : undefined,
        }
      })()
    : null

  // BreadcrumbList schema (the Breadcrumbs component already emits one inline,
  // but adding a second explicit node here ensures the article's primary
  // breadcrumb is visible to Google even if the component's id ever changes).
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: LANG_META[l].htmlLang,
    '@id': `${SITE_URL}/${l}/resources/${slug}#breadcrumbs`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${l}` },
      { '@type': 'ListItem', position: 2, name: i18n.resourcesLabel, item: `${SITE_URL}/${l}/resources` },
      { '@type': 'ListItem', position: 3, name: i18n.title, item: `${SITE_URL}/${l}/resources/${slug}` },
    ],
  }

  const t = ui[l] ?? ui.en

  const relatedMachine = article.relatedMachine as MachineSlug | undefined
  const relatedRouteHub =
    relatedMachine
      ? ({
          'pouch-packing-machine': `/${l}/resources/route/pouch-packaging`,
          'powder-filling-machine': `/${l}/resources/route/powder-dosing`,
          'liquid-filling-machine': `/${l}/resources/route/liquid-filling`,
          'snack-processing-line': `/${l}/resources/route/food-processing-line`,
          'conveyor-system': `/${l}/resources/route/conveying-automation`,
        } as Partial<Record<MachineSlug, string>>)[relatedMachine]
      : undefined

  const relatedItems = relatedMachine ? [
    {
      href: `/${l}/machines/${relatedMachine}`,
      label: (machineLabels[l] ?? machineLabels.en)[relatedMachine],
    },
    {
      href: relatedRouteHub || `/${l}/resources`,
      label: `${(machineLabels[l] ?? machineLabels.en)[relatedMachine]} — ${l === 'zh' ? '配置指南' : l === 'cn' ? '配置指南' : l === 'ja' ? '構成ガイド' : l === 'ko' ? '구성 가이드' : l === 'fr' ? 'Guides de configuration' : l === 'es' ? 'Guías de configuración' : l === 'pt' ? 'Guias de configuração' : l === 'ar' ? 'أدلة التهيئة' : l === 'th' ? 'คู่มือการกำหนดค่า' : l === 'vi' ? 'Hướng dẫn cấu hình' : l === 'de' ? 'Konfigurationsleitfäden' : 'Configuration guides'}`,
    },
  ] : []
  const relatedGuides = getRelatedResourceArticles(slug, l, 6)
  const relatedGuidesTitle =
    ({
      en: 'Related guides',
      cn: '相关指南',
      zh: '相關指南',
      fr: 'Guides associés',
      es: 'Guías relacionadas',
      pt: 'Guias relacionados',
      ko: '관련 가이드',
      ja: '関連ガイド',
      ar: 'أدلة ذات صلة',
      th: 'คู่มือที่เกี่ยวข้อง',
      vi: 'Bài hướng dẫn liên quan',
      de: 'Ähnliche Ratgeber',
    } as Record<string, string>)[l] || 'Related guides'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {howToSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      ) : null}
      <div className="bg-white">
        <Container className="py-12 lg:py-16">
          <Breadcrumbs lang={l} items={[
            { label: i18n.resourcesLabel, href: `/${l}/resources` },
            { label: i18n.title, href: `/${l}/resources/${slug}` },
          ]} />

          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
                {i18n.categoryLabel}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-brand-950 sm:text-4xl">{i18n.title}</h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{i18n.description}</p>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_300px]">
            <article className="prose prose-gray max-w-none prose-headings:text-brand-950 prose-a:text-accent-600">
              <p className="lead font-semibold text-brand-900">{i18n.lead}</p>
              {(() => {
                const extra = getTemplateExtras(slug, l)
                if (!extra) return null
                const copiedLabel = l === 'zh' ? '已複製' : l === 'cn' ? '已复制' : 'Copied'
                const copyLabel = l === 'zh' ? '複製' : l === 'cn' ? '复制' : 'Copy'
                return (
                  <div className="not-prose mt-6 space-y-4">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                      <div className="text-lg font-extrabold text-gray-950">{extra.title}</div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {extra.downloads.map((d) => (
                          <ButtonLink key={d.href} href={d.href} variant="secondary" size="sm">
                            {d.label}
                          </ButtonLink>
                        ))}
                      </div>
                    </div>
                    {extra.snippets.map((s) => (
                      <CopyBlock key={s.title} title={s.title} text={s.text} copiedLabel={copiedLabel} copyLabel={copyLabel} />
                    ))}
                  </div>
                )
              })()}
              {i18n.sections.map((s, idx) => renderSection(s, idx))}
              {getResourceBoostSections(slug, l).map((s, idx) => renderSection(s, 10_000 + idx))}
              <h2>{t.faqTitle}</h2>
              {i18n.faqs.map((f, idx) => (
                <div key={idx}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </article>

            <aside className="space-y-6">
              <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
                <h3 className="text-base font-bold text-brand-950">{i18n.sidebarCtaTitle}</h3>
                <p className="mt-2 text-sm text-gray-600">{i18n.sidebarCtaBody}</p>
                <ButtonLink href={`/${l}/assessment`} variant="primary" size="sm" className="mt-4 w-full justify-center">
                  {i18n.sidebarCtaBtn}
                </ButtonLink>
                {relatedMachine ? <MachineQuickLinks lang={l} machine={relatedMachine} /> : null}
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-bold text-brand-950">{i18n.sidebarRelatedTitle}</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {relatedItems.map((it) => (
                    <li key={it.href}>
                      <a href={it.href} className="text-accent-600 hover:underline">{it.label}</a>
                    </li>
                  ))}
                  <li>
                    <a href={`/${l}/machinery`} className="text-accent-600 hover:underline">{t.viewAll}</a>
                  </li>
                </ul>
              </div>

              {relatedGuides.length > 0 ? (
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                  <h3 className="text-base font-bold text-brand-950">{relatedGuidesTitle}</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {relatedGuides.map((g) => (
                      <li key={g.slug}>
                        <a href={`/${l}/resources/${g.slug}`} className="text-accent-600 hover:underline">{g.title}</a>
                      </li>
                    ))}
                    <li>
                      <a href={relatedRouteHub || `/${l}/resources`} className="text-accent-600 hover:underline">{i18n.readMoreLabel}</a>
                    </li>
                  </ul>
                </div>
              ) : null}

              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-brand-950">{t.speakTitle}</h3>
                <p className="mt-2 text-sm text-gray-600">{t.speakBody}</p>
                <a
                  href={`/${l}/contact`}
                  className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline"
                >
                  {t.speakLink}
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
