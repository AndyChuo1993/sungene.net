import { ServiceSeo } from '@/components/ServiceSeoPage'

export const coreServices = {
  exportLeadGeneration: {
    slug: 'export-lead-generation',
    path: '/services/export-lead-generation',
    title: {
      zh: '外貿客戶開發（Export Lead Generation）｜製造業海外買家開發',
      en: 'Export Lead Generation for Manufacturers | Find Overseas Buyers',
    },
    description: {
      zh: '我們協助製造業識別海外買家、建立可直接使用的名單，並用系統化開發節奏交付合格詢盤。',
      en: 'We help manufacturers identify overseas buyers, build targeted prospect lists, and generate qualified export leads.',
    },
    h1: { zh: '外貿客戶開發服務（製造業）', en: 'Export Lead Generation for Manufacturers' },
    problem: {
      zh: ['靠展會與平台被動等詢盤，品質不穩定、價格競爭激烈。', '名單品質差：找不到決策人、Email 無效、或根本不是適合的買家角色。', '寄信一次就停，沒有節奏式跟進與回覆分類，導致大量商機流失。'],
      en: ['Inbound from fairs and platforms is unstable and often price-driven.', 'Poor lists: wrong roles, invalid emails, and weak buyer fit.', 'One-and-done outreach without cadence or reply triage causes lead leakage.'],
    },
    solution: {
      zh: ['我們把外貿開發做成一套可複製的系統：ICP → 名單 → 訊息 → 跟進 → 轉化，並以「合格詢盤」作為可交付成果。', '你會得到可直接使用的名單（寄信名單 + 開信名單 Excel）、可追蹤的開發節奏，以及可交付的詢盤整理。'],
      en: ['We make export outreach repeatable with ICP → list → message → follow-up → conversion, and deliver qualified inquiries as outcomes.', 'You receive ready-to-use lists (sent list + opens list), a trackable cadence, and organized inquiry hand-offs.'],
    },
    whatIs: {
      zh: ['外貿客戶開發（Export Lead Generation）是針對特定市場與買家角色，建立可驗證的海外買家名單，並透過多觸點開發節奏獲取詢盤。'],
      en: ['Export lead generation builds verified overseas prospect lists for specific markets and buyer roles, then runs multi-touch outreach to generate inquiries.'],
    },
    howWorks: {
      zh: ['製造業要找到海外買家，核心不是寄更多信，而是先把買家畫像（ICP）與買家角色（Importer/Distributor/Brand/Factory）定義清楚，再用名單驗證與節奏式跟進提高回覆率。'],
      en: ['Manufacturers win overseas buyers by clarifying ICP and buyer roles first, then using verified lists and structured follow-ups to improve reply rates.'],
    },
    process: {
      zh: ['定義 ICP：市場、產業、通路角色、規模與採購方式。', '建立名單：多來源蒐集 + 人工/系統驗證（公司、職位、Email）。', '訊息框架：一封信只講一個痛點 + 一個證據 + 一個 CTA。', '跟進節奏：4–6 次節奏式跟進，逐步加證據（案例/規格/應用）。', '回覆分類：合格/待培育/不匹配，並交付詢盤摘要與對話紀錄。'],
      en: ['Define ICP: market, industry, channel role, size, and buying style.', 'Build lists: multi-source collection with human + system validation.', 'Messaging: one pain point + one proof + one CTA per email.', 'Cadence: 4–6 structured follow-ups with different proof points.', 'Reply triage: qualified / nurture / no-fit, delivered with summaries and logs.'],
    },
    tools: {
      zh: ['名單來源：Google、LinkedIn、產業協會/目錄、展會名單、進出口資料（依市場）。', 'Email 驗證與寄送規範：降低跳退並維持網域信譽。', '追蹤與管理：表格或 CRM（已寄/已回/待跟進/已交付）。'],
      en: ['Sourcing: Google, LinkedIn, directories/associations, trade fairs, import data (where applicable).', 'Deliverability: validation + sending discipline to reduce bounces and protect domain reputation.', 'Tracking: spreadsheet or CRM (sent/replied/follow-up/hand-off).'],
    },
    checklist: {
      zh: ['定義 ICP（市場/產業/角色/規模）。', '建立 100–300 家候選清單並驗證 Email。', '準備 1 頁產品摘要（規格/差異點/交期/MOQ）。', '設計 4–6 次跟進節奏與回覆分類規則。'],
      en: ['Define ICP (market, industry, role, size).', 'Build and validate a list of 100–300 prospects.', 'Prepare a one-page product brief (specs, proof, lead time, MOQ).', 'Create a 4–6 follow-up cadence and reply triage rules.'],
    },
    results: {
      zh: [
        { label: '名單交付', value: 'Excel', desc: '寄信名單 + 開信名單，可直接用於業務開發。' },
        { label: '詢盤交付', value: '可追蹤', desc: '每個詢盤包含公司、聯絡方式、需求資訊與對話紀錄。' },
        { label: '流程資產', value: '可複製', desc: '把「一次性開發」變成可持續的海外開發系統。' },
      ],
      en: [
        { label: 'Buyer lists delivered', value: 'Excel', desc: 'Sent list + opens list ready for your team to use.' },
        { label: 'Qualified inquiries', value: 'Trackable', desc: 'Each inquiry includes company, contact, needs, and conversation logs.' },
        { label: 'Process assets', value: 'Repeatable', desc: 'Turn one-off outreach into a sustainable export growth system.' },
      ],
    },
    funnel: {
      zh: [
        { label: '目標公司', value: '5000' },
        { label: '候選名單', value: '500' },
        { label: '有效回覆', value: '100' },
        { label: '合格詢盤', value: '20' },
        { label: '會議/下一步', value: '10' },
      ],
      en: [
        { label: 'Target companies', value: '5000' },
        { label: 'Prospects', value: '500' },
        { label: 'Replies', value: '100' },
        { label: 'Qualified', value: '20' },
        { label: 'Meetings', value: '10' },
      ],
    },
    workflow: {
      zh: ['市場研究', '目標買家清單', '線索資格審核', '主動開發', '會議'],
      en: ['Market Research', 'Target Buyer List', 'Lead Qualification', 'Cold Outreach', 'Meetings'],
    },
    industries: {
      zh: ['機械設備', '電子零組件', '五金工具', '包材/材料', '工業設備'],
      en: ['Machinery', 'Electronics', 'Hardware Tools', 'Packaging/Materials', 'Industrial Equipment'],
    },
    caseStudy: {
      title: { zh: '五金工具製造商：3 個月累計 50–60 個有效詢盤', en: 'Hardware manufacturer: 50–60 qualified inquiries in 3 months' },
      desc: { zh: '建立 500+ 目標名單並優化開信率至 40%+，超過 10 個潛在客戶進入樣品與報價階段。', en: 'Built 500+ targets, improved open rates to 40%+, and moved 10+ prospects into sampling and quoting.' },
      link: '/case-studies/hardware',
    },
    faq: [
      {
        q: { zh: '你們交付什麼？', en: 'What do you deliver?' },
        a: {
          zh: '主要交付包含：寄信名單與開信名單（Excel）、詢盤整理（公司/聯絡方式/需求/對話紀錄），以及可追蹤的跟進節奏建議。',
          en: 'Deliverables include: sent list + opens list (Excel), organized inquiries (company/contact/needs/logs), and a trackable follow-up cadence.',
        },
      },
      {
        q: { zh: '多久會看到結果？', en: 'How soon will we see results?' },
        a: {
          zh: '通常前 2–4 週完成 ICP、名單與訊息測試；第 4–8 週開始穩定累積回覆與詢盤（視產業/市場而定）。',
          en: 'Typically 2–4 weeks for ICP, lists, and message testing; weeks 4–8 to see consistent replies and inquiries depending on market/industry.',
        },
      },
      {
        q: { zh: '如何避免寄信進垃圾信？', en: 'How do you avoid spam filters?' },
        a: {
          zh: '以名單驗證與寄送規範降低跳退，避免一次大量寄送；內容聚焦且真實，並以節奏式跟進取代爆量寄信。',
          en: 'We validate lists, avoid bulk blasting, keep messages specific and real, and use cadence-based follow-ups instead of volume.',
        },
      },
    ],
    ctaTitle: { zh: '取得你的出口市場分析', en: 'Get Your Export Market Analysis' },
    ctaDesc: { zh: '提交產品與目標市場，我們回覆市場切入、買家角色與可行的開發策略。', en: 'Submit your product and markets. We’ll reply with entry approach, buyer roles, and a feasible lead-gen strategy.' },
    relatedLinks: [
      { label: { zh: '經銷商開發（核心服務）', en: 'Distributor Development (Core)' }, href: '/services/distributor-development' },
      { label: { zh: '外貿業務外包（核心服務）', en: 'Export Sales Outsourcing (Core)' }, href: '/services/export-sales-outsourcing' },
      { label: { zh: '方法：Buyer Database Building', en: 'Method: Buyer Database Building' }, href: '/buyer-database-building' },
      { label: { zh: '指南：How to find overseas buyers', en: 'Guide: How to find overseas buyers' }, href: '/resources/blog/how-to-find-overseas-buyers' },
    ],
  } satisfies ServiceSeo,
  distributorDevelopment: {
    slug: 'distributor-development',
    path: '/services/distributor-development',
    title: { zh: '經銷商開發（Distributor Development）｜建立海外通路網路', en: 'Distributor Development | Build Overseas Channels' },
    description: { zh: '用市場分層與通路策略，開發海外經銷/代理與批發通路，建立更可預期的出貨與覆蓋。', en: 'Develop distributors and agents with market segmentation and channel strategy to build predictable coverage and revenue.' },
    h1: { zh: '經銷商開發服務', en: 'Distributor Development for Manufacturers' },
    problem: {
      zh: ['海外市場有需求，但找不到可靠的通路夥伴與對口人。', '不清楚通路角色（Importer/Distributor/Agent/Integrator）差異，合作條件談不攏。', '經銷開發靠亂槍打鳥，沒有可追蹤 pipeline，結果不可預期。'],
      en: ['You see demand overseas but can’t find reliable channel partners.', 'Partner roles differ (importer/distributor/agent/integrator) and terms get stuck.', 'Outreach is random without a trackable pipeline, so results are unpredictable.'],
    },
    solution: {
      zh: ['我們用「市場分層 + 通路地圖 + 合作 Offer 設計 + 多觸點跟進」把經銷開發做成系統，讓合作條件可被評估、可被推進。', '你會得到一份可追蹤的經銷名單、清晰的合作條款框架，以及可複製的跟進節奏。'],
      en: ['We systemize channel development with market tiers, channel mapping, partnership offer design, and multi-touch follow-ups.', 'You get a trackable shortlist, clear term frameworks, and a repeatable cadence to drive agreements.'],
    },
    whatIs: {
      zh: ['經銷商開發是以「市場－通路－合作模式」為骨架，找到具備銷售能力的通路夥伴，並用可落地的合作方案推進簽約。'],
      en: ['Distributor development finds capable channel partners and moves them toward agreement with a practical partnership offer.'],
    },
    howWorks: {
      zh: ['我們先定義適合通路合作的產品線與市場，再建立候選經銷名單、設計合作話術與條件，最後以多觸點跟進推進合作。'],
      en: ['We define products and markets suitable for channels, build a shortlist, design partnership messaging and terms, then drive multi-touch follow-ups.'],
    },
    process: {
      zh: ['市場分層：優先市場/次要市場與切入策略。', '通路地圖：Importer/Distributor/Agent/Integrator 角色拆解。', '名單建立：依產品線與地區建立可追蹤清單。', '合作 Offer 設計：MOQ、區域保護、價格層級與支援條件。', '跟進節奏：Email + LinkedIn + 會議邀約，推進簽約與試單。'],
      en: ['Market prioritization with entry tactics.', 'Channel mapping by role type.', 'Trackable distributor list building by product and region.', 'Partnership offer design: MOQ, territory, pricing tiers, support.', 'Multi-touch cadence to drive agreements and trial orders.'],
    },
    tools: {
      zh: ['通路來源：產業協會/展會名單/經銷目錄/Google 搜尋/LinkedIn。', '名單驗證：公司網站/通路範圍/產品線互補性/決策人職位。', '追蹤推進：以表格或 CRM 記錄分層（有機會/需培育/不匹配）。'],
      en: ['Sourcing: associations, trade fairs, distributor directories, Google, LinkedIn.', 'Verification: websites, territory scope, product-line fit, decision-maker roles.', 'Tracking: spreadsheet or CRM segmentation (fit/nurture/no-fit).'],
    },
    checklist: {
      zh: ['完成市場分層與切入假設。', '定義合作條件草案（MOQ/區域/價格層級/支援）。', '建立 50–150 家候選經銷清單並驗證。', '安排 4–6 次節奏式跟進與會議邀約。'],
      en: ['Finish market tiers and entry hypotheses.', 'Draft partnership terms (MOQ, territory, tiers, support).', 'Build and verify a shortlist of 50–150 partners.', 'Run a 4–6 touch follow-up cadence and meeting invites.'],
    },
    results: {
      zh: [
        { label: '通路名單交付', value: '可追蹤', desc: '依市場/角色分層，讓開發不再亂槍打鳥。' },
        { label: '合作條件框架', value: '可談判', desc: '用可計算的 Offer 讓對方能算出利潤與風險。' },
        { label: '會議與試單推進', value: '可預期', desc: '以多觸點節奏推進會議，縮短信任建立時間。' },
      ],
      en: [
        { label: 'Trackable partner shortlist', value: 'Structured', desc: 'Tiered by market and role so outreach is not random.' },
        { label: 'Negotiable terms', value: 'Clear', desc: 'A calculable offer helps partners evaluate profit and risk.' },
        { label: 'Meetings and trials', value: 'Predictable', desc: 'Multi-touch cadence drives calls and trial orders faster.' },
      ],
    },
    funnel: {
      zh: [
        { label: '候選通路', value: '500' },
        { label: '驗證名單', value: '150' },
        { label: '有效回覆', value: '40' },
        { label: '商務會議', value: '15' },
        { label: '簽約/試單', value: '3' },
      ],
      en: [
        { label: 'Candidates', value: '500' },
        { label: 'Verified', value: '150' },
        { label: 'Replies', value: '40' },
        { label: 'Meetings', value: '15' },
        { label: 'Signed/Trials', value: '3' },
      ],
    },
    workflow: {
      zh: ['市場研究', '通路地圖', '夥伴名單', '合作條件', '簽約/試單'],
      en: ['Market Research', 'Channel Mapping', 'Partner Shortlist', 'Offer & Terms', 'Signed/Trials'],
    },
    industries: { zh: ['工業設備', '五金工具', '電子零組件', '包材/材料', '醫療耗材'], en: ['Industrial Equipment', 'Hardware Tools', 'Electronics', 'Packaging/Materials', 'Medical Consumables'] },
    caseStudy: {
      title: { zh: '自動化設備：安排 15 場經銷商會議，簽約 3 家代理', en: 'Machinery: 15 distributor meetings, 3 agents signed' },
      desc: { zh: '建立越南/泰國通路名單，搭配多觸點推進與會議邀約，加速通路落地。', en: 'Built VN/TH channel lists and ran cadence + meeting invites to accelerate partner onboarding.' },
      link: '/case-studies/machinery',
    },
    faq: [
      { q: { zh: '經銷商會排斥新的供應商嗎？', en: 'Do distributors reject new suppliers?' }, a: { zh: '不一定。關鍵在於你能提供差異化、穩定交付與清晰合作條件，讓他們算得出利潤與風險。', en: 'Not always. Differentiation, stable delivery, and clear terms help them evaluate profit and risk.' } },
      { q: { zh: '要先給獨家嗎？', en: 'Should we offer exclusivity upfront?' }, a: { zh: '通常不建議。可以用階段性條件（達成量/覆蓋/推廣）來換取區域保護，降低風險。', en: 'Usually no. Use milestone-based terms to earn territory protection and reduce risk.' } },
    ],
    ctaTitle: { zh: '建立你的海外通路網路', en: 'Build your overseas channel network' },
    ctaDesc: { zh: '我們協助你用市場分層＋合作條件設計，把經銷開發做成可持續的系統。', en: 'We combine market segmentation and partnership terms to make channel development repeatable.' },
    relatedLinks: [
      { label: { zh: '外貿客戶開發（核心服務）', en: 'Export Lead Generation (Core)' }, href: '/services/export-lead-generation' },
      { label: { zh: '外貿業務外包（核心服務）', en: 'Export Sales Outsourcing (Core)' }, href: '/services/export-sales-outsourcing' },
      { label: { zh: '免費出口市場分析（CTA）', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
      { label: { zh: '如何找到海外經銷商（指南）', en: 'How to find international distributors (Guide)' }, href: '/resources/blog/how-to-find-international-distributors' },
    ],
  } satisfies ServiceSeo,
  exportSalesOutsourcing: {
    slug: 'export-sales-outsourcing',
    path: '/services/export-sales-outsourcing',
    title: { zh: '外貿業務外包（Export Sales Outsourcing）｜讓企業只需報價與出貨', en: 'Export Sales Outsourcing | You Quote & Ship, We Do the Rest' },
    description: { zh: '我們承接除「報價與出貨」以外的外貿業務行為：名單、開發、跟進、回覆分類與詢盤交付，讓外貿開發變成可複製的系統。', en: 'We run export sales operations except quotation and shipping: lists, outreach, follow-ups, reply triage, and qualified inquiry delivery.' },
    h1: { zh: '外貿業務外包服務', en: 'Export Sales Outsourcing for Manufacturers' },
    problem: {
      zh: ['外貿人手不足，業務被開發與跟進拖垮，無法專注成交。', '詢盤與名單沒有系統，跟進節奏靠個人記憶，容易流失。', '想拓展海外，但招募/培訓一個可上手的外貿團隊成本太高、週期太長。'],
      en: ['Your sales team is overloaded, so follow-ups slip and deals stall.', 'Lists and inquiries are not tracked systematically, causing lead leakage.', 'Hiring and training an export team is expensive and slow.'],
    },
    solution: {
      zh: ['我們用「流程 + 名單 + 節奏 + 回覆分類」把外貿開發做成可交付的系統，讓企業只需專注：報價與出貨。', '你會獲得可追蹤的 pipeline 與可複製的 SOP，降低對個人能力的依賴。'],
      en: ['We turn outbound into a deliverable system (process, lists, cadence, reply triage) so you only focus on quoting and shipping.', 'You get a trackable pipeline and repeatable SOP instead of relying on individual heroics.'],
    },
    whatIs: {
      zh: ['外貿業務外包是由專業團隊承接海外客戶開發與跟進，把外貿流程標準化並持續交付合格詢盤，讓企業不用先擴編也能做海外增長。'],
      en: ['Export sales outsourcing is a managed workflow that standardizes outreach and follow-up to continuously deliver qualified export inquiries without hiring a full team.'],
    },
    howWorks: {
      zh: ['製造業要找到海外買家，關鍵不是「寄更多信」，而是：先把 ICP 與市場優先序定清楚，再用可驗證的名單、訊息框架與跟進節奏，建立一條可追蹤的 pipeline。'],
      en: ['Manufacturers win overseas buyers by clarifying ICP and market priorities first, then building a verified list and running a repeatable message + follow-up cadence that creates a trackable pipeline.'],
    },
    process: {
      zh: ['建立買家畫像與市場優先順序。', '建置買家名單與資料驗證。', '撰寫開發信與多觸點節奏（Email/LinkedIn）。', '回覆分類與初步需求確認。', '將合格詢盤交付給你的團隊推進成交。'],
      en: ['Define ICP and market priorities.', 'Build and verify buyer lists.', 'Write outreach and multi-touch cadence.', 'Qualify replies and confirm requirements.', 'Hand off qualified inquiries for closing.'],
    },
    tools: {
      zh: ['買家資料：Google/LinkedIn/產業目錄/展會名單/進出口資料（依市場適用）。', 'Email 驗證與投遞：名單驗證與寄送規範，降低跳退與垃圾信風險。', '追蹤：用表格或 CRM 記錄狀態（已寄/已回/待跟進/已交付）。'],
      en: ['Data sourcing: Google, LinkedIn, directories, trade fairs, import data (where applicable).', 'Deliverability: email validation and sending discipline to reduce bounces.', 'Tracking: spreadsheet or CRM status tracking (sent/replied/follow-up/hand-off).'],
    },
    checklist: {
      zh: ['定義 ICP（產業/角色/國家/規模）。', '準備 1 頁產品摘要（規格/差異點/交期/MOQ）。', '建立 100–300 家候選名單並驗證聯絡方式。', '設計 4–6 次跟進節奏與回覆分類規則。'],
      en: ['Define ICP (industry, role, country, size).', 'Prepare a one-page product brief (specs, proof, lead time, MOQ).', 'Build and validate a list of 100–300 prospects.', 'Create a 4–6 follow-up cadence and reply triage rules.'],
    },
    results: {
      zh: [
        { label: '合格詢盤交付', value: '持續交付', desc: '回覆分類與下一步標準化，讓團隊可以穩定跟進。' },
        { label: '流程標準化', value: 'SOP 化', desc: '把開發與跟進做成系統，而不是靠運氣或個人。' },
        { label: '不擴編也能做', value: '降低成本', desc: '不用先招募完整外貿團隊，也能啟動海外開發。' },
      ],
      en: [
        { label: 'Qualified inquiry delivery', value: 'Ongoing', desc: 'Standardized triage and next steps for consistent follow-ups.' },
        { label: 'Repeatable operations', value: 'SOP', desc: 'Make outreach a system, not a gamble or a person-dependent task.' },
        { label: 'Scale without hiring', value: 'Lean', desc: 'Start export development without building a full in-house team first.' },
      ],
    },
    funnel: {
      zh: [
        { label: '目標公司', value: '5000' },
        { label: '候選名單', value: '500' },
        { label: '有效回覆', value: '100' },
        { label: '合格詢盤', value: '20' },
        { label: '會議/下一步', value: '10' },
      ],
      en: [
        { label: 'Target companies', value: '5000' },
        { label: 'Prospects', value: '500' },
        { label: 'Replies', value: '100' },
        { label: 'Qualified', value: '20' },
        { label: 'Meetings', value: '10' },
      ],
    },
    workflow: {
      zh: ['ICP 與市場', '名單建立', '開發節奏', '跟進與資格審核', '詢盤交付'],
      en: ['ICP & Markets', 'List Building', 'Outreach Cadence', 'Follow-up & Qualify', 'Inquiry Hand-off'],
    },
    industries: { zh: ['機械設備', '電子零組件', '塑膠/材料', '工業設備'], en: ['Machinery', 'Electronics', 'Plastics/Materials', 'Industrial Equipment'] },
    caseStudy: {
      title: { zh: '五金工具製造商：3 個月累計 50–60 個有效詢盤', en: 'Hardware manufacturer: 50–60 qualified inquiries in 3 months' },
      desc: { zh: '建立 500+ 目標名單，優化開信率至 40%+，並把詢盤導入報價與樣品階段。', en: 'Built 500+ targets, improved open rates to 40%+, and moved inquiries into quoting and sampling stages.' },
      link: '/case-studies/hardware',
    },
    faq: [
      { q: { zh: '你們會幫忙回覆客戶嗎？', en: 'Do you reply to buyers for us?' }, a: { zh: '可以依合作模式調整：可做初步需求確認與篩選，也可只交付回覆由你們自行跟進。', en: 'Yes, depending on engagement: we can do initial qualification or simply deliver replies for your team to follow up.' } },
      { q: { zh: '如何確保詢盤品質？', en: 'How do you ensure lead quality?' }, a: { zh: '透過名單篩選規則、訊息框架與回覆分類流程，把不匹配的詢盤在前段就過濾掉。', en: 'Through list qualification rules, messaging frameworks, and reply triage to filter poor fits early.' } },
    ],
    ctaTitle: { zh: '想建立可複製的海外開發能力？', en: 'Want repeatable export sales growth?' },
    ctaDesc: { zh: '用流程＋內容＋節奏，把一次性開發變成穩定的增長系統。', en: 'Turn one-off outreach into a stable growth system with process, content, and cadence.' },
    relatedLinks: [
      { label: { zh: '外貿客戶開發（核心服務）', en: 'Export Lead Generation (Core)' }, href: '/services/export-lead-generation' },
      { label: { zh: '經銷商開發（核心服務）', en: 'Distributor Development (Core)' }, href: '/services/distributor-development' },
      { label: { zh: '免費出口市場分析（CTA）', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
      { label: { zh: '成功案例（證據）', en: 'Case Studies (Proof)' }, href: '/case-studies' },
    ],
  } satisfies ServiceSeo,
} as const

