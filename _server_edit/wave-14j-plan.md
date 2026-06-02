# Wave 14j Plan — Broker-voice family full cleanup
Status: drafted 2026-06-01, awaiting owner decisions before execution
Surfaced by: Wave 14i pre-push self-test with provisional "sourcing assessment" + "technical sourcing assessment" tokens

## Scope
40+ strings across 13 files using retired Phase 1 broker phrasing:
- en: "sourcing assessment", "Sourcing Assessment", "sourcing path", "configuration direction"
- zh: "採購評估", "採購路徑"
- cn: "采购评估", "采购路径"

## File inventory (verified 2026-06-01)

### Group A — UI CTA buttons (3 files, all 12-lang Request Assessment)
- app/[lang]/about/page.tsx:553       — sticky CTA
- app/[lang]/page.tsx:595              — homepage CTA
- components/Footer.tsx:135            — site-wide footer CTA

→ Decision: rename CTA label site-wide?
  - Option A: "Request Assessment" → "Request a Quotation"
  - Option B: "Request Assessment" → "Get a Quote"
  - Owner pick one; 12-lang dict translations needed (verifier should NOT guess — pull from existing W14h-2 sidebar CTA dict which already exists).

### Group B — JSON-LD / schema (1 file)
- app/[lang]/resources/[slug]/page.tsx:497  — HowToTool name "SunGene sourcing assessment form"

→ Mechanical swap: → "SunGene quotation form". Google reads structured data — should match new CTA framing.

### Group C — Page descriptions / intros (3 files)
- app/[lang]/resources/page.tsx:150-152          — en/cn/zh resources hub description
- app/[lang]/resources/[slug]/page.tsx:88-89     — zh/cn speakBody "team helps with sourcing path..."
- app/[lang]/resources/route/[slug]/page.tsx:132-155  — en/zh/cn intro + quoteTitle (6 strings)

→ Phrasings:
  - "right sourcing path" → "right product recommendation"
  - "before you request a sourcing assessment" → "before you request a quotation"
  - "申請採購評估前" → "申請報價前"
  - "Request sourcing assessment" → "Request a quotation"
  - "取得採購評估" → "索取報價"  (W14h-2 already uses)
  - "获取采购评估" → "索取报价"  (W14h-2 already uses)

### Group D — Resources checklist text
- app/[lang]/resources/page.tsx:184,195   — zh/cn "提交规格以评估" + "采购评估与建议"

→ "采购评估与建议" → "报价与建议"

### Group E — Sourcing page primary CTA
- app/[lang]/sourcing/page.tsx:429        — primaryCta dict zh="取得採購評估" cn="获取采购评估" en="Request assessment"

→ Mirror Group A decision.

### Group F — Email response template
- app/api/product-inquiry/route.ts:164    — auto-reply: "send you a personalized sourcing assessment within 24 hours"

→ → "send you a personalized quotation within 24 hours"

### Group G — Form component "SendProductForm" (9 strings)
- components/SendProductForm.tsx:14,15,29,37,38,52,60,61,75

| Line | Current | Proposed |
|------|---------|----------|
| 14 en sectionTitle | "Send Your Product — Get a Sourcing Assessment" | "Send Your Product — Get a Quotation" |
| 15 en sectionDesc | "...sourcing path, configuration direction, and next steps..." | "...product recommendation, configuration, and next steps..." |
| 29 en successDesc | "...reply with a sourcing assessment within 24 hours" | "...reply with a quotation within 24 hours" |
| 37 cn sectionTitle | "发送您的产品 — 获取采购评估" | "发送您的产品 — 索取报价" |
| 38 cn sectionDesc | "...采购路径、配置方向..." | "...产品推荐与配置..." |
| 52 cn successDesc | "...回复采购评估" | "...回复报价" |
| 60 zh sectionTitle | "傳送您的產品 — 取得採購評估" | "傳送您的產品 — 索取報價" |
| 61 zh sectionDesc | "...採購路徑、配置方向..." | "...產品推薦與配置..." |
| 75 zh successDesc | "...回覆採購評估" | "...回覆報價" |

### Group H — QuickAssessment component (3 strings + file/component NAME)
- components/QuickAssessment.tsx:61,67,78

→ DECISION POINT: rename whole component to QuickQuotation?
  - If yes: file rename + every import statement updates (use git grep "QuickAssessment" first)
  - If no: just swap inner strings, leave component name (creates name/voice mismatch but localized)
  - Owner pick.

### Group I — Site navigation menu (lib/i18n.ts)
- lib/i18n.ts:15,33  — cn/zh nav_recommend + nav_free_analysis

→ DECISION POINT: nav menu labels.
  - Current cn nav_recommend = "采购评估", nav_free_analysis = "免费采购评估"
  - Current zh nav_recommend = "採購評估", nav_free_analysis = "免費採購評估"
  - Phase 2 candidates: "報價" / "免費報價" or "選品建議" / "免費選品建議" (latter is product-recommendation framing)
  - Owner pick — affects every page (nav menu is site-wide).

### Group J — Topic hub FAQ + resourceBoost copy (2 files)
- lib/resourceBoost.ts:16,43,70    — en/zh/cn heading "Inputs we need for an accurate sourcing assessment"
- lib/topicHubFaq.ts:61,75,582,583 — q1 + reusable template

→ Mechanical "accurate sourcing assessment" → "accurate quotation" + zh/cn equivalents.

## Decision points summary (owner needs to choose)

1. CTA wording Group A/E: "Request a Quotation" / "Get a Quote" / other (12-lang dict needed)
2. QuickAssessment Group H: rename component? or just inner strings?
3. Nav menu Group I: "報價" or "選品建議" or other?

Once decisions in, execution is mechanical ~60 min:
- Group A+E (CTAs)
- Group B+C+D (page text)
- Group F (email)
- Group G (form, 9 strings cn/zh from grep verbatim)
- Group H (per decision)
- Group I (per decision)
- Group J (mechanical)
- Add tokens to .husky/_forbidden-tokens.sh AFTER all leaks cleared so pre-push stays green

## After execution

- 5 langs LIVE smoke test
- Pre-push self-test must exit 0 (proves all leaks gone)
- Commit message anchor: "Wave 14j — broker-voice family full cleanup (40 strings, 13 files)"
