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
    marketOrIndustryPath?: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-find-overseas-buyers',
    date: '2026-03-13',
    heroImage: '/articles/lead-gen-guide.svg',
    title: {
      zh: '如何找到海外買家：7 種方法＋工具＋完整流程（製造業）',
      en: 'How to Find Overseas Buyers: 7 Methods, Tools, and a Step-by-step Process',
    },
    description: {
      zh: '用可複製的方法找到海外買家：名單來源、搜尋技巧、開發信框架、跟進節奏、以及可用工具與清單。',
      en: 'A repeatable way to find overseas buyers: data sources, search tactics, outreach framework, follow-ups, tools, and a checklist.',
    },
    sections: [
      {
        id: 'summary',
        heading: { zh: '摘要', en: 'Summary' },
        content: {
          zh: [
            '要找到海外買家，關鍵不是「寄更多信」，而是用正確的買家畫像與可驗證的價值主張，建立一套從名單到跟進的流程。',
            '本文提供 7 種常見且可落地的方法，並附上工具、範例與清單，讓製造業能更快獲得可追蹤的詢價。',
          ],
          en: [
            'Finding overseas buyers is not about sending more emails. It is about ICP clarity, proof-based positioning, and a repeatable list-to-follow-up workflow.',
            'This guide gives 7 practical methods with tools, examples, and a checklist to help manufacturers generate trackable inquiries faster.',
          ],
        },
      },
      {
        id: 'definition',
        heading: { zh: '什麼是海外買家', en: 'What Are Overseas Buyers (Definition)' },
        content: {
          zh: [
            '海外買家通常套件含：進口商、經銷商、品牌商（代工或貼牌）、系統整合商、以及終端工廠採購。',
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
        heading: { zh: '框架：理想買家 → 清單 → 訊息 → 跟進 → 轉化', en: 'Framework: ICP → List → Message → Follow-up → Conversion' },
        content: {
          zh: [
            '你可以用 5 個步驟做成一個可複製的開發系統：',
            '1) 理想買家：定義理想客戶（國家、產業、通路角色、規模、採購方式）。',
            '2) 清單：用多來源蒐集，並做資料驗證（網站、職位、電子郵件）。',
            '3) 訊息：一封信只講一個痛點＋一個證據＋一個下一步。',
            '4) 跟進：4–6 次節奏式跟進，避免一次寄完就放棄。',
            '5) 轉化：把回覆分類別與下一步（報價/樣品/會議）標準化。',
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
            '方法 1：搜尋引擎搜尋（用「產品＋角色＋國家」組合關鍵字）。',
            '方法 2：LinkedIn（以職位與產業篩選採購角色）。',
            '方法 3：展會名單（展前邀約與展後跟進）。',
            '方法 4：產業目錄與協會網站（建立候選名單）。',
            '方法 5：競品的合作通路（找分銷/代理版圖）。',
            '方法 6：企業採購平台（用於驗證需求，但不建議只靠平台）。',
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
        heading: { zh: '工具與資料來源', en: 'Tools' },
        content: {
          zh: [
            '資料蒐集：搜尋引擎、商務社群平台、產業目錄、展會網站。',
            '電子郵件驗證：用工具驗證格式與可投遞性（避免跳退）。',
            '追蹤與管理：用簡單的客戶管理系統或表格記錄狀態（已寄/已回/待跟進）。',
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
        heading: { zh: '範例說明', en: 'Examples' },
        content: {
          zh: [
            '開發信主旨範例：「{產品} 用於 {應用}－想請教一個問題」',
            '開頭範例：一句話說明你是誰＋你解決什麼問題。',
            '下一步範例：只問一個可回覆的問題（例如：你們是否有在找替代供應商？）。',
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
        heading: { zh: '檢查清單', en: 'Checklist' },
        content: {
          zh: [
            '定義理想客戶（市場/產業/角色/規模）。',
            '建立 100–300 家候選清單並驗證電子郵件。',
            '準備一頁式產品摘要（規格/差異點/交期/最小訂購量）。',
            '設計 4–6 次跟進節奏與回覆分類別規則。',
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
        a: { zh: '可以，但你需要先定義理想客戶，並從 2–3 個來源建立一份小清單做驗證。', en: 'Yes. Start with ICP clarity and build a small list from 2–3 sources for validation.' },
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
      servicePath: '/services/export-lead-generation',
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
      { id: 'summary', heading: { zh: '摘要', en: 'Summary' }, content: { zh: ['經銷商開發不是寄更多信，而是先把市場分層、把合作條件說清楚，讓對方算得出利潤。'], en: ['Distributor outreach works when you segment markets and present clear partnership economics.'] } },
      { id: 'definition', heading: { zh: '定義', en: 'Definition' }, content: { zh: ['經銷商通常擁有當地客戶關係與銷售與售後能力，能加速你進入市場。'], en: ['Distributors provide local relationships and sales/service capacity to accelerate market entry.'] } },
      { id: 'framework', heading: { zh: '框架', en: 'Framework' }, content: { zh: ['市場分層 → 通路角色拆解 → 名單 → 合作方案 → 跟進與簽約'], en: ['Market segmentation → channel roles → list → offer → follow-ups and agreement'] } },
      { id: 'step-by-step', heading: { zh: '步驟教學', en: 'Step-by-step guide' }, content: { zh: ['步驟 1：決定哪些產品線適合通路。', '步驟 2：定義經銷商類別型（進口商/經銷商/代理商/系統整合商）。', '步驟 3：建立候選名單並驗證。', '步驟 4：設計合作條件（最小訂購量、區域、價格層級、支援）。', '步驟 5：節奏式跟進推進試單。'], en: ['1) Choose products suitable for channels.', '2) Define partner types.', '3) Build and verify the list.', '4) Design terms (MOQ, territory, tiers, support).', '5) Follow up to drive trial orders.'] } },
      { id: 'tools', heading: { zh: '工具', en: 'Tools' }, content: { zh: ['搜尋引擎/LinkedIn/展會名單/協會目錄。', '用表格或客戶管理系統記錄合作進度。'], en: ['Google, LinkedIn, trade fairs, associations.', 'Track progress in a spreadsheet or CRM.'] } },
      { id: 'examples', heading: { zh: '範例', en: 'Examples' }, content: { zh: ['合作提案可用 3 句話說清楚：你賣什麼、你要找誰、你提供什麼支援。'], en: ['Use a 3-sentence pitch: what you sell, who you want, what support you provide.'] } },
      { id: 'checklist', heading: { zh: '清單', en: 'Checklist' }, content: { zh: ['市場分層完成。', '合作條件草案完成。', '建立 100 家候選名單。', '安排 4 次跟進節奏。'], en: ['Market tiers done.', 'Draft partnership terms.', 'List of 100 candidates.', '4 follow-ups scheduled.'] } },
    ],
    faq: [
      { q: { zh: '要先給獨家嗎？', en: 'Should we offer exclusivity?' }, a: { zh: '不建議。可用里程碑換取區域保護，先以試單驗證能力。', en: 'Avoid upfront exclusivity; use milestones and start with trial orders.' } },
      { q: { zh: '經銷商怎麼篩選？', en: 'How to vet distributors?' }, a: { zh: '看產品線是否互補、客群是否匹配、是否有售後能力與在地倉儲。', en: 'Check product fit, customer base, service capacity, and local warehousing.' } },
    ],
    internalLinks: { servicePath: '/services/distributor-development', caseStudyPath: '/case-studies', leadMagnetPath: '/distributor-list' },
  },
  {
    slug: 'how-manufacturers-export-products',
    date: '2026-03-13',
    heroImage: '/articles/industry-electronics.svg',
    title: { zh: '製造業如何外銷：從市場選擇到第一筆訂單的完整流程', en: 'How Manufacturers Export Products: A Practical Step-by-step Playbook' },
    description: { zh: '用框架拆解外銷流程：市場分層、買家角色、開發節奏、樣品/報價、付款與出貨，降低試錯成本。', en: 'A practical framework for exporting: market tiers, buyer roles, outreach cadence, samples/quotes, payment, and shipping.' },
    sections: [
      { id: 'summary', heading: { zh: '摘要', en: 'Summary' }, content: { zh: ['外銷不是一次性的找客戶，而是一套可複製流程：先定市場與角色，再用名單與節奏獲取詢價，最後用標準化成交流程提高轉化。'], en: ['Exporting is not a one-off campaign. It is a repeatable system: pick markets and buyer roles, generate inquiries via lists and cadence, and close with standardized execution.'] } },
      { id: 'definition', heading: { zh: '定義', en: 'Definition' }, content: { zh: ['外銷的本質是建立跨國供應關係：你提供可交付的價值（規格/品質/交期/服務），買家以可預期的採購節奏回報。'], en: ['Exporting builds cross-border supply relationships where you deliver consistent value (specs, quality, lead time, service) and buyers purchase with predictable cycles.'] } },
      { id: 'framework', heading: { zh: '框架', en: 'Framework' }, content: { zh: ['市場分層 → 買家角色 → 合作條件與證據 → 名單與節奏 → 會議/樣品 → 報價/談判 → 付款/出貨。'], en: ['Market tiers → buyer roles → offer & proof → lists & cadence → meetings/samples → quoting/negotiation → payment/shipping.'] } },
      { id: 'steps', heading: { zh: '步驟', en: 'Steps' }, content: { zh: ['步驟 1：選 1–2 個優先市場與清楚買家角色。', '步驟 2：準備一頁式產品摘要（規格/差異點/交期/最小訂購量/驗證）。', '步驟 3：建立 100–300 家驗證名單並啟動 4–6 次跟進節奏。', '步驟 4：回覆分類別與下一步標準化（會議/樣品/報價）。'], en: ['1) Choose 1–2 priority markets and buyer roles.', '2) Prepare a one-page product brief (specs, proof, lead time, MOQ, certs).', '3) Build 100–300 verified prospects and run a 4–6 touch cadence.', '4) Triage replies and standardize next steps (call/sample/quote).'] } },
      { id: 'checklist', heading: { zh: '清單', en: 'Checklist' }, content: { zh: ['一頁式產品摘要', '目標市場與買家角色', '可接受條件（付款/交期/最小訂購量）', '可追蹤名單與跟進節奏'], en: ['One-page product brief', 'Markets and buyer roles', 'Acceptable terms (payment, lead time, MOQ)', 'Trackable list and cadence'] } },
    ],
    faq: [
      { q: { zh: '先做哪個市場比較好？', en: 'Which market should we start with?' }, a: { zh: '從你最有證據與交付優勢的市場開始：已有客戶/案例、運輸可行、競品定位清楚的市場通常更快出結果。', en: 'Start where you have proof and delivery advantage—existing customers/cases, feasible logistics, and clear competitive positioning. That usually yields faster results.' } },
      { q: { zh: '外銷最常見失敗原因是什麼？', en: 'What is the most common reason exporters fail?' }, a: { zh: '沒有把流程做成系統：只做一次名單或只寄一次信，沒有跟進節奏與回覆分類別，導致大量商機流失。', en: 'Lack of a system—one-off lists and one-and-done outreach without cadence and triage causes massive lead leakage.' } },
    ],
    internalLinks: { servicePath: '/services/export-lead-generation', caseStudyPath: '/case-studies', leadMagnetPath: '/export-market-analysis' },
  },
  {
    slug: 'how-to-build-a-distributor-network',
    date: '2026-03-13',
    heroImage: '/articles/market-eu.svg',
    title: { zh: '如何建立經銷商網路：通路地圖、篩選與合作條件（可落地）', en: 'How to Build a Distributor Network: Mapping, Vetting, and Partnership Terms' },
    description: { zh: '用市場分層與通路角色拆解，建立可推進的經銷開發管線，並用條款框架加速簽約與試單。', en: 'Build a progressable distributor pipeline with market tiers, channel mapping, and a clear terms framework.' },
    sections: [
      { id: 'summary', heading: { zh: '摘要', en: 'Summary' }, content: { zh: ['建立經銷網路的關鍵是「可計算的合作方案」與「可追蹤的推進節奏」。沒有合作條件框架，就算找到名單也很難談成。'], en: ['Distributor networks are built with a calculable offer and a trackable cadence. Without a terms framework, lists rarely turn into agreements.'] } },
      { id: 'definition', heading: { zh: '定義', en: 'Definition' }, content: { zh: ['經銷商通常具備當地客戶關係、銷售與售後能力，能加速市場覆蓋與出貨。'], en: ['Distributors provide local relationships, selling capacity, and service coverage to accelerate market penetration.'] } },
      { id: 'framework', heading: { zh: '框架', en: 'Framework' }, content: { zh: ['市場分層 → 通路角色 → 夥伴名單 → 合作條款 → 節奏式跟進 → 會議/試單 → 合作。'], en: ['Market tiers → roles → shortlist → offer/terms → cadence → meetings/trials → agreement.'] } },
      { id: 'steps', heading: { zh: '步驟', en: 'Steps' }, content: { zh: ['步驟 1：決定哪些產品線適合通路合作。', '步驟 2：建立通路角色地圖與篩選條件。', '步驟 3：建立候選名單並驗證。', '步驟 4：設計合作條件（最小訂購量/區域/價格層級/支援）。', '步驟 5：多觸點推進會議與試單。'], en: ['1) Choose channel-suitable product lines.', '2) Map roles and vetting criteria.', '3) Build and validate a shortlist.', '4) Design terms (MOQ, territory, tiers, support).', '5) Use multi-touch cadence to drive meetings and trials.'] } },
      { id: 'checklist', heading: { zh: '清單', en: 'Checklist' }, content: { zh: ['市場分層完成', '合作條款草案', '100 家候選名單', '4 次跟進節奏', '試單與里程碑'], en: ['Market tiers', 'Draft terms', '100 candidates', '4-touch cadence', 'Trial + milestones'] } },
    ],
    faq: [
      { q: { zh: '要先給獨家嗎？', en: 'Should we offer exclusivity upfront?' }, a: { zh: '通常不建議。可以用里程碑（達成量/覆蓋/推廣）換取區域保護，先用試單驗證能力。', en: 'Usually no. Use milestones (volume, coverage, promotion) to earn territory protection and validate with trials first.' } },
      { q: { zh: '如何快速判斷經銷商品質？', en: 'How to quickly vet distributor quality?' }, a: { zh: '看產品線互補、客群匹配、售後能力、在地倉儲，以及是否能清楚說出他們的銷售管道與年度目標。', en: 'Check product fit, customer base, service capacity, local warehousing, and whether they can articulate channels and annual targets.' } },
    ],
    internalLinks: { servicePath: '/services/distributor-development', caseStudyPath: '/case-studies', leadMagnetPath: '/distributor-list' },
  },
  {
    slug: 'how-to-generate-b2b-export-leads',
    date: '2026-03-13',
    heroImage: '/articles/lead-gen-guide.svg',
    title: { zh: '如何產生企業客戶外銷詢問：流程、節奏與交付內容', en: 'How to Generate B2B Export Leads: Process, Cadence, and Deliverables' },
    description: { zh: '把外銷開發做成系統：從理想客戶定義、名單驗證、訊息框架到 4–6 次跟進，最後交付可追蹤的詢問。', en: 'Turn export outreach into a system: ICP, list validation, messaging, 4–6 follow-ups, and trackable inquiry delivery.' },
    sections: [
      { id: 'definition', heading: { zh: '定義', en: 'Definition' }, content: { zh: ['企業外銷詢價指的是已完成初步需求確認、具備可跟進上下文的商機，而不是只有一個聯絡信箱。'], en: ['B2B export leads are not just emails. They are inquiries with initial qualification and context that your sales team can follow up effectively.'] } },
      { id: 'process', heading: { zh: '流程', en: 'Process' }, content: { zh: ['市場研究 → 目標買家清單 → 線索資格審核 → 主動開發 → 會議。每一步都要有輸出物與追蹤指標。'], en: ['Market Research → Target Buyer List → Lead Qualification → Cold Outreach → Meetings. Each step needs deliverables and measurable metrics.'] } },
      { id: 'cadence', heading: { zh: '節奏', en: 'Cadence' }, content: { zh: ['常見有效做法是 4–6 次跟進、間隔 3–7 天，每次加入不同證據點（案例/規格/應用）。'], en: ['A practical cadence is 4–6 follow-ups, 3–7 days apart, each adding different proof points (cases, specs, applications).'] } },
      { id: 'deliverables', heading: { zh: '交付', en: 'Deliverables' }, content: { zh: ['寄信名單與開信名單（試算表）、回覆分類別（合格、待培養、不匹配）、詢問摘要與對話紀錄、下一步建議。'], en: ['Sent list + opens list (Excel), reply triage (qualified/nurture/no-fit), inquiry summaries and logs, next-step suggestions.'] } },
      { id: 'checklist', heading: { zh: '檢查清單', en: 'Checklist' }, content: { zh: ['理想客戶清晰', '名單驗證', '訊息框架', '跟進節奏', '回覆分類別', '交付格式'], en: ['ICP clarity', 'List validation', 'Messaging framework', 'Cadence', 'Reply triage', 'Delivery format'] } },
    ],
    faq: [
      { q: { zh: '為什麼寄了很多信還是沒回覆？', en: 'Why do we get no replies even after sending many emails?' }, a: { zh: '通常是三個原因：名單角色不對、訊息沒有證據點、或跟進節奏不連續。先把這三件事做成可追蹤流程。', en: 'Usually three reasons: wrong roles, no proof in messaging, or inconsistent follow-ups. Fix these with a trackable system first.' } },
    ],
    internalLinks: { servicePath: '/services/export-lead-generation', caseStudyPath: '/case-studies', leadMagnetPath: '/buyers-list' },
  },
  {
    slug: 'how-to-export-to-usa',
    date: '2026-03-13',
    heroImage: '/articles/market-na.svg',
    title: { zh: '如何外銷到美國：買家角色、通路選擇與開發清單', en: 'How to Export to the USA: Buyer Roles, Channels, and a Practical Checklist' },
    description: { zh: '針對美國市場的外銷開發：常見買家角色、通路策略、以及可落地的開發與跟進流程。', en: 'A practical USA export guide: buyer roles, channels, and a step-by-step outreach checklist.' },
    sections: [
      { id: 'roles', heading: { zh: '美國常見買家角色', en: 'Common buyer roles in the USA' }, content: { zh: ['常見角色套件含：經銷商、進口商、品牌商、代工買家與工業整合商。不同角色的採購節奏與決策鏈不同。'], en: ['Common roles include distributors, importers, brands, OEM buyers, and industrial integrators. Each role has different buying cycles and decision chains.'] } },
      { id: 'channels', heading: { zh: '通路策略', en: 'Channel strategy' }, content: { zh: ['若要快速擴大市場涵蓋，可以優先找區域型經銷商；若要掌握定價與品牌，則可直接找品牌商或大型終端客戶。'], en: ['For faster coverage, prioritize regional distributors. For pricing and brand control, target brands or large end customers directly.'] } },
      { id: 'steps', heading: { zh: '開發流程', en: 'Outreach flow' }, content: { zh: ['Market research → target list → qualification → outreach → meetings。建議先做小規模訊息測試，再放大名單。'], en: ['Market research → target list → qualification → outreach → meetings. Start with small message tests before scaling lists.'] } },
      { id: 'checklist', heading: { zh: '檢查清單', en: 'Checklist' }, content: { zh: ['英文產品摘要', '合規與驗證整理', '最低訂購量、交期與付款條件', '100 家驗證名單', '4–6 次跟進節奏'], en: ['English product brief', 'Compliance/certs', 'MOQ/lead time/payment terms', '100 verified prospects', '4–6 follow-ups'] } },
    ],
    faq: [
      { q: { zh: '要先找經銷商還是終端客戶？', en: 'Should we start with distributors or end customers?' }, a: { zh: '看你的目標：要覆蓋就找經銷商；要毛利與長期合作就找品牌或終端。也可兩條線並行但要分開訊息與條件。', en: 'Depends on goals: distributors for coverage; brands/end customers for margin and long-term accounts. You can run both, but separate messaging and terms.' } },
    ],
    internalLinks: { servicePath: '/services/export-lead-generation', caseStudyPath: '/case-studies', leadMagnetPath: '/export-market-analysis' },
  },
  {
    slug: 'how-to-export-to-germany',
    date: '2026-03-13',
    heroImage: '/articles/market-eu.svg',
    title: { zh: '如何外銷到德國：工業買家、經銷通路與合作條件要點', en: 'How to Export to Germany: Industrial Buyers, Distributors, and Partnership Terms' },
    description: { zh: '德國市場重視規格、驗證與交付穩定。本文提供買家角色、通路策略與可落地的開發清單。', en: 'Germany values specs, certifications, and stable delivery. This guide covers buyer roles, channels, and a practical checklist.' },
    sections: [
      { id: 'buyers', heading: { zh: '德國買家與通路角色', en: 'Buyer and channel roles in Germany' }, content: { zh: ['常見套件含：工業經銷商、系統整合商，以及品牌商或代工買家。重點是證據資料，例如規格、驗證與案例，都要準備齊全。'], en: ['Common roles include industrial distributors, system integrators, and brand/OEM buyers. Proof points (specs, certs, cases) matter.'] } },
      { id: 'terms', heading: { zh: '合作條件要點', en: 'Key partnership terms' }, content: { zh: ['建議準備：最低訂購量、交期、售後支援、價格層級，以及區域合作條件。用可計算的條款讓對方能評估利潤。'], en: ['Prepare MOQ, lead time, service support, pricing tiers, and territory terms. Calculable terms help partners evaluate profitability.'] } },
      { id: 'checklist', heading: { zh: '清單（Checklist）', en: 'Checklist' }, content: { zh: ['德英版產品摘要', '規格/驗證', '案例或應用證據', '100 家驗證名單', '多觸點跟進節奏'], en: ['DE/EN product brief', 'Specs/certs', 'Proof assets', '100 verified prospects', 'Multi-touch cadence'] } },
    ],
    faq: [
      { q: { zh: '德國市場回覆率偏低怎麼辦？', en: 'What if reply rates are low in Germany?' }, a: { zh: '優先最佳化名單角色與證據點：把職位鎖定在技術/採購/通路決策者，並在跟進信中逐步加入規格、驗證與案例。', en: 'Optimize role targeting and proof: focus on technical/procurement/channel decision-makers and add specs, certifications, and cases across follow-ups.' } },
    ],
    internalLinks: { servicePath: '/services/distributor-development', caseStudyPath: '/case-studies', leadMagnetPath: '/distributor-list' },
  },
  {
    slug: 'how-to-export-to-japan',
    date: '2026-03-13',
    heroImage: '/articles/market-jp.svg',
    title: { zh: '如何外銷到日本：買家角色、合作節奏與信任建立', en: 'How to Export to Japan: Buyer Roles, Cadence, and Trust-building' },
    description: { zh: '日本市場重視信任與交付穩定。本文提供買家角色拆解、開發節奏與合作條件準備清單。', en: 'Japan values trust and delivery stability. This guide covers roles, cadence, and a preparation checklist.' },
    sections: [
      { id: 'roles', heading: { zh: '日本買家角色', en: 'Buyer roles in Japan' }, content: { zh: ['常見角色套件括貿易商、經銷商，以及品牌商或代工買家。不同角色需要不同的證據資料與合作條件表述方式。'], en: ['Common roles include trading companies, distributors, and brand/OEM buyers. Each needs different proof and terms framing.'] } },
      { id: 'cadence', heading: { zh: '節奏與信任建立', en: 'Cadence and trust-building' }, content: { zh: ['建議採多觸點與較長節奏：先以資料與規格建立可信度，再逐步推進會議與樣品。'], en: ['Use multi-touch and longer cadence: build credibility with data/specs first, then progress to calls and samples.'] } },
      { id: 'checklist', heading: { zh: '檢查清單', en: 'Checklist' }, content: { zh: ['日文與英文版產品摘要', '規格、驗證與品質文件', '樣品政策與交期', '目標名單與跟進節奏'], en: ['JP/EN brief', 'Specs/certs/quality docs', 'Sample policy and lead time', 'Target list and cadence'] } },
    ],
    faq: [
      { q: { zh: '需要日文開發信嗎？', en: 'Do we need Japanese outreach emails?' }, a: { zh: '不一定。可先用英文＋清晰規格與證據點；若鎖定日系通路或採購，日文版本會提高回覆率與信任感。', en: 'Not always. English with clear specs and proof can work, but Japanese versions often improve trust and replies for local decision-makers.' } },
    ],
    internalLinks: { servicePath: '/services/export-lead-generation', caseStudyPath: '/case-studies', leadMagnetPath: '/buyers-list' },
  },
  {
    slug: 'b2b-cold-email-outreach-framework',
    date: '2026-03-13',
    heroImage: '/articles/cold-email-mistakes.svg',
    title: { zh: '企業客戶外銷開發信框架：主旨、內容、跟進節奏與範例', en: 'B2B Export Cold Email Framework: Subject, Copy, Follow-ups, and Examples' },
    description: { zh: '一封信只講一個痛點、一個證據與一個明確下一步。本文提供可直接套用的框架、跟進節奏與範例。', en: 'One pain point, one proof, one CTA. Templates, cadence, and examples you can reuse.' },
    sections: [
      { id: 'framework', heading: { zh: '開發信框架', en: 'Framework' }, content: { zh: ['主旨要簡短、具體、像真人撰寫。開頭說明你是誰與為何聯絡對方；內文聚焦一個痛點與一個證據；最後只提出一個可回覆的問題。'], en: ['Subject: short, specific, human. Opening: who you are + why them. Body: one pain point + one proof. CTA: one replyable question.'] } },
      { id: 'cadence', heading: { zh: '跟進節奏', en: 'Cadence' }, content: { zh: ['建議 4–6 封、間隔 3–7 天，每封加入不同證據點，例如案例、規格、應用情境或示範影片。'], en: ['Run 4–6 emails, 3–7 days apart. Add different proof points each time (case, specs, use cases, demo).'] } },
      { id: 'examples', heading: { zh: '範例', en: 'Examples' }, content: { zh: ['主旨範例："{產品} 用於 {應用情境}，想請教一個問題"', '下一步範例："你們目前是否正在評估 {類別別} 的替代供應商？"'], en: ['Subject: “{Product} for {Use case} – quick question”', 'CTA: “Are you evaluating alternative suppliers for {category}?”'] } },
      { id: 'checklist', heading: { zh: '檢查清單', en: 'Checklist' }, content: { zh: ['名單角色正確', '避免使用附件', '寄送量控制得宜', '內容真實具體', '回覆分類別與下一步明確'], en: ['Right roles', 'No attachments', 'Controlled sending volume', 'Specific and real content', 'Reply triage + next steps'] } },
    ],
    faq: [
      { q: { zh: '開發信要多長？', en: 'How long should the email be?' }, a: { zh: '越短越好但要具體：通常 80–140 字（英文）就足夠，重點是證據點與一個可回覆 CTA。', en: 'Short but specific. Often 80–140 words is enough. Focus on proof and one replyable CTA.' } },
    ],
    internalLinks: { servicePath: '/services/export-sales-outsourcing', caseStudyPath: '/case-studies', leadMagnetPath: '/buyers-list' },
  },
  {
    slug: 'importers-vs-distributors',
    date: '2026-03-13',
    heroImage: '/articles/industry-hardware.svg',
    title: { zh: '進口商與經銷商的差異：合作方式與開發重點', en: 'Importers vs Distributors: Differences, Terms, and Outreach Tips' },
    description: { zh: '拆解兩種通路角色差異，並提供合作條件與開發訊息的實作重點。', en: 'A practical breakdown of importer vs distributor roles with terms and outreach tips.' },
    sections: [
      { id: 'definition', heading: { zh: '角色差異', en: 'Differences' }, content: { zh: ['進口商偏向供應鏈與採購；經銷商則更重視市場布局、銷售與售後服務。你提供的證據資料與合作條件也會因此不同。'], en: ['Importers focus on supply chain and buying; distributors focus on coverage and selling/service. Your proof and terms should match the role.'] } },
      { id: 'terms', heading: { zh: '合作條件', en: 'Terms' }, content: { zh: ['進口商常重視交期、品質與價格層級；經銷商則更重視區域安排、利潤空間、行銷支援與售後服務。'], en: ['Importers care about lead time, quality, and tiers; distributors care about territory, margin, marketing support, and service.'] } },
      { id: 'outreach', heading: { zh: '開發重點', en: 'Outreach' }, content: { zh: ['一開始就把對方角色講清楚：你要談的是進口合作，還是通路合作；並用一個明確證據，例如案例、規格或驗證，提高可信度。'], en: ['State the role you are targeting (import vs channel) and add one proof point (case, specs, certifications) to improve credibility.'] } },
    ],
    faq: [
      { q: { zh: '我應該先找哪一種？', en: 'Which should we target first?' }, a: { zh: '如果目標是快速覆蓋與落地，通常先找經銷商；若你已能直接服務大客戶或品牌，則可先找終端/品牌＋進口端。', en: 'For faster coverage, start with distributors. If you can serve large accounts directly, start with brands/end customers plus import-side partners.' } },
    ],
    internalLinks: { servicePath: '/services/distributor-development', caseStudyPath: '/case-studies', leadMagnetPath: '/distributor-list' },
  },
  {
    slug: 'how-to-qualify-b2b-export-leads',
    date: '2026-03-13',
    heroImage: '/articles/lead-gen-guide.svg',
    title: { zh: '如何審核外銷詢價：篩選標準、回覆分類別與交付格式', en: 'How to Qualify Export Leads: Criteria, Reply Triage, and Delivery Format' },
    description: { zh: '把回覆做前段分類別（合格/培育/不匹配），並用一致格式交付，讓業務更快進入報價與成交。', en: 'Triage replies (qualified/nurture/no-fit) and deliver standardized lead packages for faster closing.' },
    sections: [
      { id: 'criteria', heading: { zh: '篩選標準', en: 'Criteria' }, content: { zh: ['常見篩選條件套件含：買家角色、需求清晰度、數量與交期、是否符合最低訂購量，以及是否有應用情境與採購時間表。'], en: ['Common criteria: buyer role, clarity of requirements, quantity/lead time, MOQ fit, use case, and buying timeline.'] } },
      { id: 'triage', heading: { zh: '回覆分類別', en: 'Reply triage' }, content: { zh: ['合格：需求清楚，可進入報價；待培養：需求還不完整，需要補資料；不匹配：角色不對或條件不符。'], en: ['Qualified: ready to quote; Nurture: needs more information; No-fit: wrong role or misaligned terms.'] } },
      { id: 'delivery', heading: { zh: '交付格式', en: 'Delivery format' }, content: { zh: ['每筆詢問都套件含公司、聯絡方式、需求摘要、對話紀錄與下一步建議，讓業務不需要重新整理背景。'], en: ['Each lead includes company, contacts, requirement summary, conversation logs, and next-step suggestions.'] } },
    ],
    faq: [
      { q: { zh: '沒有數量或規格的回覆要算詢問嗎？', en: 'Do replies without specs/quantity count as leads?' }, a: { zh: '通常先歸為待培養。用 1 至 2 個追問把需求補齊，再判定是否屬於合格詢問。', en: 'Treat them as nurture leads. Ask 1–2 follow-up questions to confirm requirements before qualifying.' } },
    ],
    internalLinks: { servicePath: '/services/export-lead-generation', caseStudyPath: '/case-studies', leadMagnetPath: '/buyers-list' },
  },
  {
    slug: 'distributor-agreement-terms',
    date: '2026-03-13',
    heroImage: '/articles/market-eu.svg',
    title: { zh: '經銷合作條件怎麼談：MOQ、區域、價格層級與支援條款', en: 'Distributor Agreement Terms: MOQ, Territory, Pricing Tiers, and Support' },
    description: { zh: '用可計算的條款框架，讓經銷商能評估利潤與風險，合作更容易推進。', en: 'A calculable terms framework that helps distributors evaluate economics and move faster.' },
    sections: [
      { id: 'terms', heading: { zh: '核心條款（Core terms）', en: 'Core terms' }, content: { zh: ['建議準備四大塊：MOQ、區域/保護、價格層級（含階梯）、以及行銷/售後支援。'], en: ['Prepare four blocks: MOQ, territory/protection, pricing tiers (with volume steps), and marketing/service support.'] } },
      { id: 'milestones', heading: { zh: '里程碑（Milestones）', en: 'Milestones' }, content: { zh: ['用達成量/覆蓋/推廣里程碑換取區域保護，避免一開始就給獨家造成風險。'], en: ['Use milestones (volume, coverage, promotion) to earn territory protection and avoid risky upfront exclusivity.'] } },
      { id: 'checklist', heading: { zh: '清單（Checklist）', en: 'Checklist' }, content: { zh: ['MOQ/交期', '區域範圍', '價格層級', '保固與售後', '行銷資源', '試單流程'], en: ['MOQ/lead time', 'Territory scope', 'Pricing tiers', 'Warranty/service', 'Marketing assets', 'Trial process'] } },
    ],
    faq: [
      { q: { zh: '區域保護要不要給？', en: 'Should we offer territory protection?' }, a: { zh: '可以給，但建議是「條件式」：達成量與推廣義務完成後才生效，並保留調整空間。', en: 'You can, but make it conditional: activate after milestones are met and keep adjustment clauses.' } },
    ],
    internalLinks: { servicePath: '/services/distributor-development', caseStudyPath: '/case-studies', leadMagnetPath: '/distributor-list' },
  },
  {
    slug: 'trade-show-follow-up-playbook',
    date: '2026-03-13',
    heroImage: '/articles/cold-email-mistakes.svg',
    title: { zh: '展會名單如何跟進：展前邀約、展後節奏與詢價分類別', en: 'Trade Show Follow-up: Pre-show Invites, Post-show Cadence, and Lead Triage' },
    description: { zh: '把展會名單變成可成交詢價：邀約模板、跟進節奏、回覆分類別與下一步。', en: 'Turn trade show lists into real pipeline: templates, cadence, triage, and next steps.' },
    sections: [
      { id: 'pre', heading: { zh: '展前邀約', en: 'Pre-show invites' }, content: { zh: ['展前 2–3 週開始邀約，明確提出一個可回覆問題並提供一個證據點（案例/應用/規格）。'], en: ['Start 2–3 weeks before the show. Ask one replyable question and include one proof point (case, use case, specs).'] } },
      { id: 'post', heading: { zh: '展後節奏', en: 'Post-show cadence' }, content: { zh: ['展後 48 小時內第一封，之後 4–6 次節奏式跟進，把對話推進到會議/樣品/報價。'], en: ['Send the first email within 48 hours, then run a 4–6 touch cadence to move to meetings/samples/quotes.'] } },
      { id: 'triage', heading: { zh: '回覆分類別', en: 'Reply triage' }, content: { zh: ['合格/培育/不匹配，並為每一類別設定下一步模板。'], en: ['Qualified/nurture/no-fit and define next-step templates for each category.'] } },
    ],
    faq: [
      { q: { zh: '展後第一封信要寫什麼？', en: 'What should the first post-show email say?' }, a: { zh: '簡短回顧接觸情境、補一個證據點、並只問一個下一步（安排 15 分鐘通話或確認需求）。', en: 'Recap context briefly, add one proof point, and ask one next step (15-min call or requirement confirmation).' } },
    ],
    internalLinks: { servicePath: '/services/export-lead-generation', caseStudyPath: '/case-studies', leadMagnetPath: '/buyers-list' },
  },
  {
    slug: 'how-to-export-to-southeast-asia',
    date: '2026-03-13',
    heroImage: '/articles/industry-packaging.svg',
    title: { zh: '如何外銷到東南亞：市場分層、通路選擇與落地清單', en: 'How to Export to Southeast Asia: Market Tiers, Channels, and a Practical Checklist' },
    description: { zh: '用市場分層拆解東南亞出口策略：先挑 1–2 個市場、定角色、跑名單與節奏，再推進會議與試單。', en: 'A practical SEA export approach: pick 1–2 markets, define roles, run lists + cadence, then progress to meetings and trials.' },
    sections: [
      { id: 'tiers', heading: { zh: '市場分層（Market tiers）', en: 'Market tiers' }, content: { zh: ['東南亞不是單一市場。建議先用「需求強度、競品密度、驗證門檻、物流可行性」分層，再選 1–2 個優先市場。'], en: ['Southeast Asia is not one market. Tier by demand, competitive density, compliance, and logistics, then pick 1–2 priority markets.'] } },
      { id: 'roles', heading: { zh: '買家角色（Buyer roles）', en: 'Buyer roles' }, content: { zh: ['常見角色：Distributor、Importer、Project-based integrator。不同角色需要不同條件（區域、價格層級、交期）。'], en: ['Common roles: distributors, importers, project-based integrators. Each role needs different terms (territory, tiers, lead time).'] } },
      { id: 'checklist', heading: { zh: '清單（Checklist）', en: 'Checklist' }, content: { zh: ['產品摘要（英語）', '可接受條件（MOQ/交期/付款）', '100 家驗證名單', '4–6 次節奏跟進', '回覆分類別與交付格式'], en: ['English brief', 'Acceptable terms (MOQ/lead time/payment)', '100 verified prospects', '4–6 touch cadence', 'Reply triage + delivery format'] } },
    ],
    faq: [
      { q: { zh: '要先用經銷商模式嗎？', en: 'Should we start with distributors?' }, a: { zh: '多數製造業想要快速覆蓋會先走經銷，但仍建議同時確認是否存在大客戶/專案型買家，避免通路單一化。', en: 'Distributors are common for fast coverage, but also validate direct large accounts/project buyers to avoid over-relying on one channel.' } },
    ],
    internalLinks: { servicePath: '/services/distributor-development', caseStudyPath: '/case-studies', leadMagnetPath: '/export-market-analysis' },
  },
  {
    slug: 'how-to-export-to-middle-east',
    date: '2026-03-13',
    heroImage: '/articles/market-na.svg',
    title: { zh: '如何外銷到中東：通路角色、專案型買家與開發策略', en: 'How to Export to the Middle East: Channel Roles, Project Buyers, and Outreach Strategy' },
    description: { zh: '中東常見專案型需求與通路型採購。本文提供角色拆解、條件準備與可落地的開發流程。', en: 'The Middle East often involves project-based demand plus channel procurement. Roles, terms, and a practical outreach flow.' },
    sections: [
      { id: 'roles', heading: { zh: '買家與通路角色', en: 'Buyer and channel roles' }, content: { zh: ['常見套件含：Distributor/Agent、Project contractor、System integrator、Importer。要先判斷你產品更適合通路覆蓋還是專案推進。'], en: ['Common roles include distributors/agents, project contractors, system integrators, and importers. Decide whether you fit channel coverage or project selling.'] } },
      { id: 'proof', heading: { zh: '證據點（Proof）', en: 'Proof points' }, content: { zh: ['專案型買家通常重視案例、交付能力與售後；通路型夥伴重視毛利、區域與支援。'], en: ['Project buyers care about cases, delivery, and service; channel partners care about margin, territory, and support.'] } },
      { id: 'checklist', heading: { zh: '清單（Checklist）', en: 'Checklist' }, content: { zh: ['案例與應用整理', '合作條款框架', '100 家候選名單', '多觸點節奏跟進'], en: ['Cases and use cases', 'Terms framework', '100 prospects', 'Multi-touch cadence'] } },
    ],
    faq: [
      { q: { zh: '要先找代理還是找專案承套件商？', en: 'Agent first or contractors first?' }, a: { zh: '看產品與成交方式：標準品通常走通路；解決方案/系統型產品可同時觸達承套件商與整合商。', en: 'Depends on product and selling motion: standardized products often go through channels; solution/system products should target contractors and integrators in parallel.' } },
    ],
    internalLinks: { servicePath: '/services/distributor-development', caseStudyPath: '/case-studies', leadMagnetPath: '/export-market-analysis' },
  },
  {
    slug: 'how-to-find-overseas-buyers-using-linkedin',
    date: '2026-03-13',
    heroImage: '/articles/industry-electronics.svg',
    title: { zh: '用 LinkedIn 找海外買家：搜尋、名單、訊息與跟進節奏', en: 'Finding Overseas Buyers on LinkedIn: Search, Lists, Messaging, and Cadence' },
    description: { zh: '用 LinkedIn 觸達決策鏈：從搜尋到名單，再到訊息框架與多觸點跟進，形成可追蹤 pipeline。', en: 'Use LinkedIn to reach decision chains: search → list → messaging → multi-touch cadence, with trackable pipeline. ' },
    sections: [
      { id: 'search', heading: { zh: '搜尋（Search）', en: 'Search' }, content: { zh: ['先定角色：Importer/Distributor/Procurement/Engineering。再用產業、地區、職位與關鍵字組合篩選。'], en: ['Start with roles (importer/distributor/procurement/engineering), then filter by industry, region, titles, and keywords.'] } },
      { id: 'list', heading: { zh: '名單（Lists）', en: 'Lists' }, content: { zh: ['把名單做成可追蹤：公司、職位、Email（若可）、角色標籤、以及下一步狀態。'], en: ['Make lists trackable: company, title, email (if available), role tags, and next-step status.'] } },
      { id: 'cadence', heading: { zh: '節奏（Cadence）', en: 'Cadence' }, content: { zh: ['建議 LinkedIn + Email 多觸點：連線邀請 → 第一訊息 → 跟進 → 補證據點 → 邀約會議。'], en: ['Use LinkedIn + email multi-touch: connect → first message → follow-up → add proof → meeting invite.'] } },
    ],
    faq: [
      { q: { zh: '只用 LinkedIn 不用 Email 可以嗎？', en: 'Can we use only LinkedIn without email?' }, a: { zh: '可以，但效率通常較低。最佳做法是 LinkedIn 用於建立關係與確認角色，Email 用於節奏式跟進與可追蹤交付。', en: 'Possible, but usually less efficient. Best practice: LinkedIn for relationship and role validation, email for cadence and trackable delivery.' } },
    ],
    internalLinks: { servicePath: '/services/export-lead-generation', caseStudyPath: '/case-studies', leadMagnetPath: '/buyers-list' },
  },
  {
    slug: 'b2b-trade-directories-for-overseas-buyers',
    date: '2026-03-13',
    heroImage: '/articles/lead-gen-guide.svg',
    title: { zh: '用產業目錄找海外買家：常見來源、驗證方法與避坑清單', en: 'Using Trade Directories to Find Overseas Buyers: Sources, Validation, and Pitfalls' },
    description: { zh: '產業目錄可以做名單起點，但必須做驗證與角色標籤，否則開發效率會被稀釋。', en: 'Directories can seed prospect lists, but validation and role tagging are essential to avoid wasted outreach.' },
    sections: [
      { id: 'sources', heading: { zh: '常見來源（Sources）', en: 'Sources' }, content: { zh: ['常見套件含：產業協會名錄、展會參展名單、B2B 平台分類別頁、以及特定產業 directory。'], en: ['Common sources: association directories, trade show exhibitor lists, B2B platform category pages, and niche industry directories.'] } },
      { id: 'validation', heading: { zh: '驗證（Validation）', en: 'Validation' }, content: { zh: ['驗證至少套件含：公司網站、產品匹配、地區覆蓋、以及決策鏈角色。把名單變成可追蹤資料函式庫。'], en: ['Validate via website, product fit, coverage, and decision-chain roles. Turn raw lists into a trackable database.'] } },
      { id: 'checklist', heading: { zh: '避坑清單', en: 'Pitfalls checklist' }, content: { zh: ['避免「沒角色標籤」就寄信', '避免「過期名單」', '避免「一次寄完」不跟進'], en: ['Avoid outreach without role tags', 'Avoid outdated lists', 'Avoid one-and-done sending without follow-ups'] } },
    ],
    faq: [
      { q: { zh: '目錄名單回覆率很低怎麼辦？', en: 'What if directory lists have low reply rates?' }, a: { zh: '先做角色與條件驗證，再用節奏式跟進補證據點；同時把名單來源分群，找出最有效的來源。', en: 'Validate roles and criteria, run cadence-based follow-ups with proof points, and segment list sources to find what works.' } },
    ],
    internalLinks: { servicePath: '/services/export-lead-generation', caseStudyPath: '/case-studies', leadMagnetPath: '/buyers-list' },
  },
  {
    slug: 'industry-associations-to-find-distributors',
    date: '2026-03-13',
    heroImage: '/articles/market-eu.svg',
    title: { zh: '用產業協會找經銷商：名單來源、合作角色與推進節奏', en: 'Finding Distributors via Industry Associations: Sources, Roles, and Cadence' },
    description: { zh: '產業協會名錄常含高品質通路與會員。本文提供名單建置、角色拆解與合作推進框架。', en: 'Associations often contain high-quality channel members. A practical framework for lists, roles, and partnership cadence.' },
    sections: [
      { id: 'sources', heading: { zh: '名單來源', en: 'Sources' }, content: { zh: ['協會會員名錄、活動名單、委員會名單、合作夥伴頁面，都是建立通路名單的高品質起點。'], en: ['Member directories, event attendees, committee lists, and partner pages are high-quality starting points for channel lists.'] } },
      { id: 'roles', heading: { zh: '角色拆解', en: 'Role mapping' }, content: { zh: ['先判斷對方是 Distributor、Agent、Integrator 還是 Importer，並準備對應的合作條款框架。'], en: ['Identify whether the member is a distributor, agent, integrator, or importer, then tailor the terms framework accordingly.'] } },
      { id: 'cadence', heading: { zh: '推進節奏', en: 'Cadence' }, content: { zh: ['第一封先建立可信度（規格/驗證/案例），第二封補合作條款，第三封邀約會議。'], en: ['Email 1 builds credibility (specs/certs/cases), email 2 adds terms, email 3 invites a meeting.'] } },
    ],
    faq: [
      { q: { zh: '協會名單需要再驗證嗎？', en: 'Do association lists still need validation?' }, a: { zh: '需要。協會提升可信度但不代表角色與產品匹配。建議做產品線、地區覆蓋與決策鏈職位驗證。', en: 'Yes. Associations increase trust but do not guarantee role or fit. Validate product lines, coverage, and decision-chain titles.' } },
    ],
    internalLinks: { servicePath: '/services/distributor-development', caseStudyPath: '/case-studies', leadMagnetPath: '/distributor-list' },
  },
  {
    slug: 'b2b-databases-for-overseas-buyers',
    date: '2026-03-13',
    heroImage: '/articles/lead-gen-guide.svg',
    title: { zh: '7 種常見 B2B 資料函式庫：找海外買家、匯出名單與驗證方法', en: '7 Common B2B Databases: Find Overseas Buyers, Export Lists, and Validate' },
    description: { zh: 'B2B 資料函式庫是名單起點，不是答案。本文用清單整理常見資料函式庫類別型與驗證方法，避免名單稀釋。', en: 'B2B databases are list seeds, not the answer. A practical list of database types and validation tips.' },
    sections: [
      { id: 'list', heading: { zh: '資料函式庫類別型（7 Types）', en: 'Database types (7)' }, content: { zh: ['類別型套件含：公司資料函式庫、海關/進出口資料、展會名單、產業目錄、協會名錄、招標/專案資料、社群/職涯資料。'], en: ['Types include company databases, import/export data, trade show lists, directories, association lists, tender/project data, and social/career data.'] } },
      { id: 'validation', heading: { zh: '驗證流程', en: 'Validation workflow' }, content: { zh: ['用網站、產品匹配、地區覆蓋、以及決策鏈職位做二次驗證，再進入節奏式開發。'], en: ['Validate via website, product fit, coverage, and decision-chain roles before outreach cadence.'] } },
      { id: 'checklist', heading: { zh: '清單（Checklist）', en: 'Checklist' }, content: { zh: ['資料來源分群', '角色標籤', '去重與清洗', '驗證欄位一致', '節奏與回覆分類別'], en: ['Segment sources', 'Role tags', 'Dedup and clean', 'Consistent fields', 'Cadence and triage'] } },
    ],
    faq: [
      { q: { zh: '買資料函式庫名單就夠了嗎？', en: 'Is buying a database list enough?' }, a: { zh: '通常不夠。你仍需要驗證與角色標籤，並用節奏式開發把名單轉成可交付詢價。', en: 'Usually not. You still need validation and role tags, plus cadence-based outreach to convert lists into deliverable inquiries.' } },
    ],
    internalLinks: { servicePath: '/services/export-lead-generation', caseStudyPath: '/case-studies', leadMagnetPath: '/buyers-list' },
  },
  {
    slug: 'buyer-database-building-for-manufacturers',
    date: '2026-03-13',
    heroImage: '/articles/lead-gen-guide.svg',
    title: { zh: '製造業買家資料函式庫建立：欄位設計、驗證流程與交付格式', en: 'Buyer Database Building for Manufacturers: Fields, Validation, and Delivery' },
    description: { zh: '名單不是越多越好，而是越可用越好。本文提供資料函式庫欄位與驗證流程，讓開發更可追蹤。', en: 'Lists should be usable, not just large. A practical database field set and validation workflow for trackable outreach.' },
    sections: [
      { id: 'fields', heading: { zh: '欄位設計（Fields）', en: 'Fields' }, content: { zh: ['建議至少套件含：公司、網站、地區、買家角色、產品匹配、職位/部門、Email、來源、狀態與下一步。'], en: ['Recommended fields: company, website, region, buyer role, product fit, title/department, email, source, status, next step.'] } },
      { id: 'validation', heading: { zh: '驗證流程（Validation）', en: 'Validation' }, content: { zh: ['先做公司層驗證（產品/地區/角色），再做決策鏈驗證（採購/技術/通路）。最後去重與清洗。'], en: ['Validate at company level (product/region/role), then decision-chain level (procurement/technical/channel). Finish with dedup and cleaning.'] } },
      { id: 'delivery', heading: { zh: '交付格式（Delivery）', en: 'Delivery' }, content: { zh: ['交付 Excel/Sheet 時要有一致欄位、狀態與篩選，讓你可以直接啟動節奏式開發。'], en: ['Deliver with consistent fields, statuses, and filters so you can start cadence-based outreach immediately.'] } },
    ],
    faq: [
      { q: { zh: '資料函式庫需要多久更新一次？', en: 'How often should we refresh the database?' }, a: { zh: '建議每月做清洗與補齊，並把「回覆結果」回饋到名單，形成越跑越準的資料資產。', en: 'Monthly cleanup is a good baseline. Feed reply outcomes back into the database to build a compounding asset.' } },
    ],
    internalLinks: { servicePath: '/services/export-lead-generation', caseStudyPath: '/case-studies', leadMagnetPath: '/buyers-list' },
  },
  {
    slug: 'channel-partner-vetting-checklist',
    date: '2026-03-13',
    heroImage: '/articles/market-eu.svg',
    title: { zh: '通路夥伴篩選清單：如何判斷經銷商是否值得合作', en: 'Channel Partner Vetting Checklist: How to Evaluate Distributors' },
    description: { zh: '用清單快速評估經銷商：產品線、客群、覆蓋、售後、倉儲、行銷能力與年度目標。', en: 'A checklist to evaluate distributors: product lines, customers, coverage, service, warehousing, marketing capacity, and targets.' },
    sections: [
      { id: 'checklist', heading: { zh: '篩選清單（Checklist）', en: 'Checklist' }, content: { zh: ['產品線互補與價格帶', '客群與產業匹配', '地區覆蓋與銷售管道', '售後與技術支援能力', '是否能給出年度目標與推廣計畫'], en: ['Product complement and pricing band', 'Customer/industry fit', 'Coverage and channels', 'Service and technical support', 'Clear targets and promotion plan'] } },
      { id: 'questions', heading: { zh: '建議問的 5 個問題', en: '5 questions to ask' }, content: { zh: ['你們的主要客群與前 5 大產品線是什麼？', '你們覆蓋哪些地區與哪些管道？', '你們的售後與維修如何處理？', '你們希望的毛利與合作條件？', '你們的年度銷售目標與推廣計畫？'], en: ['Who are your main customers and top 5 lines?', 'Which regions and channels do you cover?', 'How do you handle service and warranty?', 'What margins and terms do you expect?', 'What are your annual targets and promotion plan?'] } },
    ],
    faq: [
      { q: { zh: '篩選後如何推進下一步？', en: 'How do we progress after vetting?' }, a: { zh: '用條款框架與里程碑設計推進：先試單/試銷，再以達成量換取區域合作或更高權限。', en: 'Use a terms framework and milestones: start with trials, then exchange performance for territory or deeper partnership.' } },
    ],
    internalLinks: { servicePath: '/services/distributor-development', caseStudyPath: '/case-studies', leadMagnetPath: '/distributor-list' },
  },
]

export function getBlogPosts() {
  return blogPosts
}

export function getBlogPost(slug: string) {
  return blogPosts.find(p => p.slug === slug)
}
