import { Lang } from '@/lib/i18n'

export type BlogFaq = { q: Record<Lang, string>; a: Record<Lang, string> }

export type BlogSection = {
  id: string
  heading: Record<Lang, string>
  content: Record<Lang, string[]>
}

export type BlogPost = {
  slug: string
  date: string
  heroImage: string
  title: Record<Lang, string>
  description: Record<Lang, string>
  sections: BlogSection[]
  faq: BlogFaq[]
  internalLinks: {
    servicePath: string
    caseStudyPath: string
    leadMagnetPath: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-find-overseas-buyers',
    date: '2026-03-13',
    heroImage: '/articles/lead-gen-guide.svg',
    title: {
      zh: '如何找到海外買家：7 種方法＋工具＋完整流程（製造業 B2B）',
      en: 'How to Find Overseas Buyers: 7 Methods, Tools, and a Step-by-step Process',
    },
    description: {
      zh: '用可複製的方法找到海外買家：名單來源、搜尋技巧、開發信框架、跟進節奏、以及可用工具與清單。',
      en: 'A repeatable way to find overseas buyers: data sources, search tactics, outreach framework, follow-ups, tools, and a checklist.',
    },
    sections: [
      {
        id: 'summary',
        heading: { zh: '摘要（Summary）', en: 'Summary' },
        content: {
          zh: [
            '要找到海外買家，關鍵不是「寄更多信」，而是用正確的買家畫像（ICP）與可驗證的價值主張，建立一套從名單到跟進的流程。',
            '本文提供 7 種常見且可落地的方法，並附上工具、範例與清單，讓製造業能更快獲得可追蹤的詢盤。',
          ],
          en: [
            'Finding overseas buyers is not about sending more emails. It is about ICP clarity, proof-based positioning, and a repeatable list-to-follow-up workflow.',
            'This guide gives 7 practical methods with tools, examples, and a checklist to help manufacturers generate trackable inquiries faster.',
          ],
        },
      },
      {
        id: 'definition',
        heading: { zh: '什麼是海外買家（Definition）', en: 'What Are Overseas Buyers (Definition)' },
        content: {
          zh: [
            '海外買家通常包含：進口商、經銷商、品牌商（Private Label/OEM）、系統整合商、以及終端工廠採購。',
            '不同買家角色的採購標準不同：進口商重視供應穩定與毛利，品牌商重視差異化與交期，終端工廠重視規格與導入成本。',
          ],
          en: [
            'Overseas buyers can be importers, distributors, brand owners (private label/OEM), system integrators, and end-user factories.',
            'Each buyer type has different criteria: distributors care about margin and stability; brands care about differentiation and lead time; factories care about specs and onboarding cost.',
          ],
        },
      },
      {
        id: 'framework',
        heading: { zh: '框架（Framework）：ICP → 清單 → 訊息 → 跟進 → 轉化', en: 'Framework: ICP → List → Message → Follow-up → Conversion' },
        content: {
          zh: [
            '你可以用 5 個步驟做成一個可複製的開發系統：',
            '1) ICP：定義理想買家（國家、產業、通路角色、規模、採購方式）。',
            '2) 清單：用多來源蒐集，並做資料驗證（網站、職位、Email）。',
            '3) 訊息：一封信只講一個痛點＋一個證據＋一個 CTA。',
            '4) 跟進：4–6 次節奏式跟進，避免一次寄完就放棄。',
            '5) 轉化：把回覆分類與下一步（報價/樣品/會議）標準化。',
          ],
          en: [
            'Use a 5-step system to make buyer finding repeatable:',
            '1) ICP: define countries, industries, channel roles, company size, and buying style.',
            '2) Lists: collect from multiple sources and verify contacts.',
            '3) Message: one pain point + one proof + one CTA.',
            '4) Follow-up: 4–6 structured follow-ups.',
            '5) Conversion: standardize reply triage and next steps (quote/sample/call).',
          ],
        },
      },
      {
        id: 'methods',
        heading: { zh: '7 種方法找海外買家', en: '7 Methods to Find Overseas Buyers' },
        content: {
          zh: [
            '方法 1：Google 搜尋（用「產品＋角色＋國家」組合關鍵字）。',
            '方法 2：LinkedIn（以職位與產業篩選採購角色）。',
            '方法 3：展會名單（展前邀約與展後跟進）。',
            '方法 4：產業目錄與協會網站（建立候選名單）。',
            '方法 5：競品的合作通路（找分銷/代理版圖）。',
            '方法 6：B2B 市集（用於驗證需求，但不建議只靠平台）。',
            '方法 7：海關/進出口資料（針對有持續進口紀錄的買家）。',
          ],
          en: [
            '1) Google search with “product + role + country” queries.',
            '2) LinkedIn targeting by role and industry.',
            '3) Trade fair lists with pre-show invites and post-show follow-ups.',
            '4) Directories and associations for candidate building.',
            '5) Competitor channel mapping to find distributors/agents.',
            '6) B2B marketplaces (good for validation, not as a single source).',
            '7) Customs/import data to target consistent importers.',
          ],
        },
      },
      {
        id: 'tools',
        heading: { zh: '工具（Tools）', en: 'Tools' },
        content: {
          zh: [
            '資料蒐集：Google、LinkedIn、產業目錄、展會網站。',
            'Email 驗證：用工具驗證格式與可投遞性（避免跳退）。',
            '追蹤與管理：用簡單 CRM 或表格記錄狀態（已寄/已回/待跟進）。',
          ],
          en: [
            'Sourcing: Google, LinkedIn, directories, trade fair sites.',
            'Email validation: verify deliverability to reduce bounces.',
            'Tracking: a simple CRM or spreadsheet for status and follow-ups.',
          ],
        },
      },
      {
        id: 'examples',
        heading: { zh: '範例（Examples）', en: 'Examples' },
        content: {
          zh: [
            '開發信主旨範例：「{產品} for {應用} – quick question」',
            '開頭範例：一句話說明你是誰＋你解決什麼問題。',
            'CTA 範例：只問一個可回覆的問題（例如：你們是否有在找替代供應商？）。',
          ],
          en: [
            'Subject example: “{Product} for {Use Case} – quick question”',
            'Opening example: who you are + one problem you solve.',
            'CTA example: ask one replyable question (e.g., are you evaluating alternative suppliers?).',
          ],
        },
      },
      {
        id: 'checklist',
        heading: { zh: '清單（Checklist）', en: 'Checklist' },
        content: {
          zh: [
            '定義 ICP（市場/產業/角色/規模）。',
            '建立 100–300 家候選清單並驗證 Email。',
            '準備 1 頁產品摘要（規格/差異點/交期/MOQ）。',
            '設計 4–6 次跟進節奏與回覆分類規則。',
          ],
          en: [
            'Define ICP (market, industry, role, size).',
            'Build and validate a list of 100–300 prospects.',
            'Prepare a one-page product brief (specs, differentiation, lead time, MOQ).',
            'Create a 4–6 follow-up cadence and reply triage rules.',
          ],
        },
      },
    ],
    faq: [
      {
        q: { zh: '沒有買家名單也能開始嗎？', en: 'Can we start without a buyer list?' },
        a: { zh: '可以，但你需要先定義 ICP，並從 2–3 個來源建立一份小清單做驗證。', en: 'Yes. Start with ICP clarity and build a small list from 2–3 sources for validation.' },
      },
      {
        q: { zh: '跟進要寄幾次？', en: 'How many follow-ups should we send?' },
        a: { zh: '建議 4–6 次，間隔 3–7 天，並在不同封加入不同證據（案例/規格/應用）。', en: 'Send 4–6 follow-ups 3–7 days apart, adding different proof points in each.' },
      },
      {
        q: { zh: '要怎麼避免寄信被當垃圾信？', en: 'How to avoid spam filters?' },
        a: { zh: '避免附件、避免一次寄太多人、內容聚焦且真實；並做好名單驗證與網域信譽管理。', en: 'Avoid attachments and bulk blasts; keep messaging specific and real; validate emails and maintain domain reputation.' },
      },
    ],
    internalLinks: {
      servicePath: '/export-lead-generation',
      caseStudyPath: '/case-studies',
      leadMagnetPath: '/export-market-analysis',
    },
  },
  {
    slug: 'how-to-find-international-distributors',
    date: '2026-03-13',
    heroImage: '/articles/industry-packaging.svg',
    title: { zh: '如何找到海外經銷商：通路地圖、篩選方法與合作條件', en: 'How to Find International Distributors: Mapping, Vetting, and Partnership Terms' },
    description: { zh: '用可落地的通路策略找經銷商：怎麼找、怎麼篩、怎麼談合作條件與區域。', en: 'A practical channel strategy to find and vet distributors and negotiate partnership terms.' },
    sections: [
      { id: 'summary', heading: { zh: '摘要（Summary）', en: 'Summary' }, content: { zh: ['經銷商開發不是寄更多信，而是先把市場分層、把合作條件說清楚，讓對方算得出利潤。'], en: ['Distributor outreach works when you segment markets and present clear partnership economics.'] } },
      { id: 'definition', heading: { zh: '定義（Definition）', en: 'Definition' }, content: { zh: ['經銷商通常擁有當地客戶關係與銷售/售後能力，能加速你進入市場。'], en: ['Distributors provide local relationships and sales/service capacity to accelerate market entry.'] } },
      { id: 'framework', heading: { zh: '框架（Framework）', en: 'Framework' }, content: { zh: ['市場分層 → 通路角色拆解 → 名單 → 合作 Offer → 跟進與簽約'], en: ['Market segmentation → channel roles → list → offer → follow-ups and agreement'] } },
      { id: 'step-by-step', heading: { zh: '步驟（Step-by-step guide）', en: 'Step-by-step guide' }, content: { zh: ['步驟 1：決定哪些產品線適合通路。', '步驟 2：定義經銷商類型（Importer/Distributor/Agent/Integrator）。', '步驟 3：建立候選名單並驗證。', '步驟 4：設計合作條件（MOQ、區域、價格層級、支援）。', '步驟 5：節奏式跟進推進試單。'], en: ['1) Choose products suitable for channels.', '2) Define partner types.', '3) Build and verify the list.', '4) Design terms (MOQ, territory, tiers, support).', '5) Follow up to drive trial orders.'] } },
      { id: 'tools', heading: { zh: '工具（Tools）', en: 'Tools' }, content: { zh: ['Google/LinkedIn/展會名單/協會目錄。', '用表格或 CRM 記錄合作進度。'], en: ['Google, LinkedIn, trade fairs, associations.', 'Track progress in a spreadsheet or CRM.'] } },
      { id: 'examples', heading: { zh: '範例（Examples）', en: 'Examples' }, content: { zh: ['合作提案可用 3 句話說清楚：你賣什麼、你要找誰、你提供什麼支援。'], en: ['Use a 3-sentence pitch: what you sell, who you want, what support you provide.'] } },
      { id: 'checklist', heading: { zh: '清單（Checklist）', en: 'Checklist' }, content: { zh: ['市場分層完成。', '合作條件草案完成。', '建立 100 家候選名單。', '安排 4 次跟進節奏。'], en: ['Market tiers done.', 'Draft partnership terms.', 'List of 100 candidates.', '4 follow-ups scheduled.'] } },
    ],
    faq: [
      { q: { zh: '要先給獨家嗎？', en: 'Should we offer exclusivity?' }, a: { zh: '不建議。可用里程碑換取區域保護，先以試單驗證能力。', en: 'Avoid upfront exclusivity; use milestones and start with trial orders.' } },
      { q: { zh: '經銷商怎麼篩選？', en: 'How to vet distributors?' }, a: { zh: '看產品線是否互補、客群是否匹配、是否有售後能力與在地倉儲。', en: 'Check product fit, customer base, service capacity, and local warehousing.' } },
    ],
    internalLinks: { servicePath: '/distributor-development', caseStudyPath: '/case-studies', leadMagnetPath: '/distributor-list' },
  },
]

export function getBlogPosts() {
  return blogPosts
}

export function getBlogPost(slug: string) {
  return blogPosts.find(p => p.slug === slug)
}

