# Wave 14 v2: clean rewrite with robust end-marker for compareSlug CONTENT block
import io

# ============================================================
# (A) sourcing-idx FAQ thesis pivot
# ============================================================
F = 'app/[lang]/sourcing/page.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    s = f.read()

old = """            lang === 'zh'
              ? '我們的定位是採購夥伴。我們依專案需求媒合台灣與中國供應商,並用供應商資格審查與出貨前驗貨控制風險。'
              : lang === 'cn'
                ? '我们的定位是采购伙伴。我们依项目需求匹配台湾与中国供应商,并用供应商资格审查与出货前验货控制风险。'
                : 'We are a sourcing partner. We match suppliers across Taiwan and Mainland China and control risk via supplier vetting and pre-shipment inspection.',"""
new = """            lang === 'zh'
              ? '不是。SunGene 是台灣登記貿易公司,不是純採購夥伴 —— 我們透過台灣與中國的精選製造夥伴供應產品。您是跟我們買產品,不是跟某個工廠介紹單。風險透過供應商審查 + SunGene 自有員工出口前 AQL 品檢控管。'
              : lang === 'cn'
                ? '不是。SunGene 是台湾登记贸易公司,不是纯采购伙伴 —— 我们通过台湾与中国的精选制造伙伴供应产品。您是跟我们买产品,不是跟某个工厂介绍单。风险通过供应商审查 + SunGene 自有员工出口前 AQL 品检管控。'
                : 'No. SunGene is a Taiwan-based trading company — not a pure sourcing partner. We supply selected products through coordinated manufacturing with our partners in Taiwan and China. You buy from us, not from an introduced factory. Risk is controlled via supplier vetting AND pre-shipment AQL inspection by in-house SunGene staff.',"""
assert old in s; s = s.replace(old, new, 1)

old = """            lang === 'zh'
              ? '信任來自可驗證的證據:一致的 RFQ 範圍、文件化驗收標準、出貨前驗貨影片與偏差清單、以及完整交付文件包。'
              : lang === 'cn'
                ? '信任来自可验证的证据:一致的 RFQ 范围、文件化验收标准、出货前验货视频与偏差清单,以及完整交付文件包。'
                : 'Trust comes from evidence: normalized RFQ scope, documented acceptance criteria, pre-shipment inspection video + deviation log, and a complete handover package.',"""
new = """            lang === 'zh'
              ? '信任不來自「採購夥伴」這個 label,而來自證據。SunGene 的定位是台灣登記貿易公司供應精選產品 —— 您是跟我們買、不是跟介紹的工廠買。信任訊號:一致的 RFQ 範圍、文件化驗收標準、SunGene 自有員工出口前 AQL 品檢影片與偏差清單、完整交付文件包。'
              : lang === 'cn'
                ? '信任不来自「采购伙伴」这个 label,而来自证据。SunGene 的定位是台湾登记贸易公司供应精选产品 —— 您是跟我们买、不是跟介绍的工厂买。信任信号:一致的 RFQ 范围、文件化验收标准、SunGene 自有员工出口前 AQL 品检视频与偏差清单、完整交付文件包。'
                : "Trust comes from evidence, not from the label 'sourcing partner'. SunGene is positioned as a Taiwan-based trading company supplying selected products — you buy from us, not from an introduced factory. Trust signals: normalized RFQ scope, documented acceptance criteria, pre-shipment AQL inspection video by in-house SunGene staff + deviation log, and a complete handover package.","""
assert old in s; s = s.replace(old, new, 1)

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(s)
print("sourcing/page.tsx FAQ items[0] + items[1] pivoted")

# ============================================================
# (B) compareSlug
# ============================================================
F = 'app/[lang]/[compareSlug]/page.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    c = f.read()

# B.1 - Rename slug in 3 places: SLUGS dict, type, META key, CONTENT key
c = c.replace(
    "const SLUGS: Record<CompareKey, true> = {\n  'vs-alibaba-direct': true,\n  'vs-sourcing-agent': true,\n}",
    "const SLUGS: Record<CompareKey, true> = {\n  'vs-alibaba-direct': true,\n  'vs-direct-factory': true,\n}"
)
c = c.replace("'vs-alibaba-direct' | 'vs-sourcing-agent'", "'vs-alibaba-direct' | 'vs-direct-factory'")

# B.2 - Replace META block for vs-sourcing-agent with vs-direct-factory full new META
old_meta = """  'vs-sourcing-agent': {
    en: { title: 'SunGene vs commission sourcing agents — what changes?', desc: 'Commission agents earn % on factory prices you cannot see. SunGene buys then resells with margin disclosed. 8-row comparison of incentives & accountability.' },
    zh: { title: 'SunGene vs 抽佣採購代理 — 差別在哪?', desc: '抽佣代理按你看不到的工廠價抽成。SunGene 買斷後加上揭露利潤轉售。逐項對比。' },
    cn: { title: 'SunGene vs 抽佣采购代理 — 差别在哪?', desc: '抽佣代理按您看不到的工厂价抽成。SunGene 买断后加上揭露利润转售。逐项对比。' },
    fr: { title: 'SunGene vs agent à commission — la différence', desc: \"L'agent à commission se rémunère sur un prix usine que vous ne voyez pas. SunGene achète puis revend avec marge déclarée.\" },
    es: { title: 'SunGene vs agente a comisión — la diferencia', desc: 'El agente a comisión gana sobre un precio de fábrica que usted no ve. SunGene compra y revende con margen declarado.' },
    pt: { title: 'SunGene vs agente comissão', desc: 'A diferença real.' },
    ko: { title: 'SunGene vs 커미션 에이전트', desc: '실제 차이.' },
    ja: { title: 'SunGene vs コミッション代理店', desc: '実際の違い。' },
    ar: { title: 'SunGene مقابل وكلاء العمولة', desc: 'الفرق الحقيقي.' },
    th: { title: 'SunGene vs ตัวแทนคอมมิชชั่น', desc: 'ความแตกต่างจริง' },
    vi: { title: 'SunGene vs Đại lý hoa hồng', desc: 'Sự khác biệt thực sự.' },
    de: { title: 'SunGene vs Provisionsagent', desc: 'Echter Unterschied.' },
  },"""

new_meta = """  'vs-direct-factory': {
    en: { title: 'SunGene vs direct factory order — what changes?', desc: 'Going direct to a Chinese factory saves the trading-company margin but transfers QC, export documentation, dispute handling, and timeline risk to you. Comparison of who handles what.' },
    zh: { title: 'SunGene vs 直接向工廠下單 — 差別在哪?', desc: '直接向中國工廠下單可以省掉貿易公司的利潤,但 QC、出口文件、爭議處理、時程風險全部轉到您身上。逐項對比誰負責什麼。' },
    cn: { title: 'SunGene vs 直接向工厂下单 — 差别在哪?', desc: '直接向中国工厂下单可以省掉贸易公司的利润,但 QC、出口文件、争议处理、时程风险全部转到您身上。逐项对比谁负责什么。' },
    fr: { title: \"SunGene vs commande directe usine — ce qui change\", desc: \"Aller directement chez une usine chinoise économise la marge de la société de négoce, mais transfère le contrôle qualité, les documents d'export, la gestion des litiges et le risque de délai à vous. Comparaison de qui gère quoi.\" },
    es: { title: 'SunGene vs pedido directo a fábrica — la diferencia', desc: 'Ir directo a una fábrica china ahorra la margen de la empresa comercial, pero transfiere el control de calidad, la documentación de exportación, la gestión de disputas y el riesgo de plazo a usted. Comparación de quién gestiona qué.' },
    pt: { title: 'SunGene vs pedido direto à fábrica', desc: 'Comparação honesta.' },
    ko: { title: 'SunGene vs 공장 직거래', desc: '솔직한 비교.' },
    ja: { title: 'SunGene vs 工場直接発注', desc: '正直な比較。' },
    ar: { title: 'SunGene مقابل الطلب المباشر من المصنع', desc: 'مقارنة صادقة.' },
    th: { title: 'SunGene vs สั่งซื้อตรงจากโรงงาน', desc: 'เปรียบเทียบตรงไปตรงมา' },
    vi: { title: 'SunGene vs Đặt hàng trực tiếp từ nhà máy', desc: 'So sánh thẳng thắn.' },
    de: { title: 'SunGene vs Direkter Werksauftrag', desc: 'Ehrlicher Vergleich.' },
  },"""
assert old_meta in c, "META block anchor missing"
c = c.replace(old_meta, new_meta, 1)

# B.3 - CONTENT block rename + rewrite
# First rename key
c = c.replace("  'vs-sourcing-agent': {\n    en: {\n      intro:",
              "  'vs-direct-factory': {\n    en: {\n      intro:", 1)

# Now find the bounds of the CONTENT[vs-direct-factory] block.
# Start: '  'vs-direct-factory': {\n    en: {\n      intro:'
# End: the closing of the block — find by walking forward.
start_marker = "  'vs-direct-factory': {\n    en: {\n      intro:"
start_idx = c.find(start_marker)
assert start_idx >= 0, "Could not find CONTENT vs-direct-factory start"

# End: look for next "\n  },\n}" which is the close of vs-direct-factory block
# (`  },`) followed by close of CONTENT outer dict (`}`).
end_marker = "\n  },\n}"
end_idx = c.find(end_marker, start_idx)
assert end_idx > start_idx, "Could not find CONTENT vs-direct-factory end"
end_idx += len("\n  },")  # include the block's `  },` close but not the outer dict close

old_block = c[start_idx:end_idx]
# Identify where dead-langs start (one-line pt:)
pt_idx = c.find("    pt: {", start_idx)
assert pt_idx > start_idx and pt_idx < end_idx, "Could not find pt: anchor"
preserved_tail = c[pt_idx:end_idx]  # dead-lang one-liners + closing "  },"

new_active = '''  'vs-direct-factory': {
    en: {
      intro: "Going direct to a Chinese factory is the lowest-cost path on paper. We're not pretending our margin is invisible — SunGene is a Taiwan-based trading company and you do pay for what we add. The honest question is: what do you take on yourself when you go direct, and is it actually cheaper after that?",
      whenAlt: {
        title: 'Going direct to a factory works when:',
        bullets: [
          'You have an established relationship with a specific factory that already produces your SKU and have shipped from them multiple times without incident',
          'You have in-house QC capacity (a person who flies, or an inspection agency on retainer) to verify pre-shipment quality on every order',
          'You have an in-house export operations team handling Incoterms, packing lists, commercial invoices, country-of-origin docs, and customs broker coordination',
          'You can absorb a 4-6 week delay or a defective shipment as a learning cost without harming downstream production or commitments',
          'You only need one or two SKUs from one factory — no multi-supplier consolidation, no cross-supplier coordination',
          'Your home country has a clean bilateral payment and dispute resolution path to mainland China',
        ],
      },
      whenUs: {
        title: 'A Taiwan-based trading company makes sense when:',
        bullets: [
          'You want one accountable counterparty — quote, production schedule, QC, export documentation, and any post-shipment claim all flow through SunGene',
          'You want pre-shipment AQL inspection performed by SunGene staff in person, not the factory inspecting itself',
          'You want payment to flow through a Taiwan-registered entity for cleaner banking and Taiwan-jurisdiction dispute path',
          'You need to consolidate multiple suppliers (custom packaging from Factory A + drinkware from Factory B + blankets from Factory C) into one shipment',
          'You need export documentation handled (CE / FDA / FSC / country-of-origin / Incoterms) without building that operations capacity in-house',
          'Your factory relationship is still being built — you want a vetted Taiwan + China supplier network rather than starting from scratch for each new SKU',
        ],
      },
      tableRows: [
        { criterion: 'Counterparty', alt: 'A specific Chinese factory you signed with', us: 'SunGene Co., LTD. (Taiwan-registered)' },
        { criterion: 'Pricing', alt: 'Direct factory price (lowest on paper)', us: 'Single buyer-facing price covering production, AQL, docs' },
        { criterion: 'QC', alt: 'You arrange (fly, agency, or trust the factory)', us: 'In-house SunGene staff, AQL 2.5 pre-shipment' },
        { criterion: 'Export docs', alt: 'You assemble (or pay forwarder extra)', us: 'Included by Taiwan + China teams' },
        { criterion: 'Payment', alt: 'Wire to a Chinese bank, China-side dispute path', us: 'Wire to Taiwan entity, Taiwan-jurisdiction recourse' },
        { criterion: 'Consolidation', alt: 'One factory per shipment, no cross-supplier coordination', us: 'Multi-supplier consolidated in one container' },
        { criterion: 'Lead time risk', alt: 'You manage delays and rework with the factory directly', us: 'We coordinate, escalate, and reroute when needed' },
        { criterion: 'Ideal for', alt: 'Stable single-SKU buyer with QC + export ops in-house', us: 'Multi-category buyer, growing supplier base, no in-house export ops' },
      ],
      bottomLine: "Direct factory order works for buyers with mature QC and export operations who only buy a known SKU from a known partner. SunGene works for buyers who want one accountable counterparty across both markets, in-house QC, consolidated shipping, and a Taiwan-jurisdiction dispute path. Both can be the right answer — the difference is what you take on yourself.",
    },
    zh: {
      intro: "直接向中國工廠下單,在帳面上是成本最低的路。我們不會假裝我們的利潤不存在 —— SunGene 是台灣登記貿易公司,您確實有付一份貿易公司的成本。誠實的問題是:直接走,有哪些東西轉到您身上、加上之後真的比較便宜嗎?",
      whenAlt: {
        title: '直接向工廠下單適合你,當:',
        bullets: [
          '你跟某家工廠已有穩定關係,他們已經為你生產過同樣 SKU、出過幾批沒出事',
          '你有自己的 QC 人力(自己飛、或包年驗貨代理),能在每批出貨前現場驗貨',
          '你有自己的出口營運團隊處理 Incoterms、裝箱單、商業發票、原產地證明、報關行協調',
          '一旦延遲 4-6 週或某批瑕疵,你能吸收 —— 不影響下游生產與客戶承諾',
          '你只需要 1-2 個 SKU、來自 1 家工廠 —— 沒有多廠整合、沒有跨供應商協調',
          '你的母國對中國大陸有清楚的雙邊付款與爭議解決路徑',
        ],
      },
      whenUs: {
        title: '台灣貿易公司比較合理,當:',
        bullets: [
          '你想要單一對口窗口 —— 報價、生產排程、QC、出口文件、出貨後 claim,全部經過 SunGene',
          '你希望出口前 AQL 品檢由 SunGene 員工親自執行,而不是工廠自己驗',
          '你希望付款匯入台灣登記公司,銀行紀錄與爭議路徑走台灣司法管轄',
          '你需要整合多家供應商(例如 A 廠客製包裝 + B 廠杯具 + C 廠毛毯)到同一個出貨櫃',
          '你需要出口文件處理(CE / FDA / FSC / 原產地證明 / Incoterms),而不想在內部建立這個營運能力',
          '你的工廠關係還在累積中 —— 你寧可用一個已審核過的台灣 + 中國供應商網絡,而不是每換一個 SKU 就從零 onboard 一家工廠',
        ],
      },
      tableRows: [
        { criterion: '對口方', alt: '你自己跟某家中國工廠簽約', us: 'SunGene Co., LTD.(台灣登記)' },
        { criterion: '價格', alt: '工廠直接價(帳面最低)', us: '一份買家報價,涵蓋生產、AQL、文件' },
        { criterion: '驗貨', alt: '你自己安排(飛、代理、或相信工廠)', us: 'SunGene 自有員工執行 AQL 2.5 出口前品檢' },
        { criterion: '出口文件', alt: '你自己組(或請貨代另外收費)', us: '已含,由台灣與中國團隊處理' },
        { criterion: '付款', alt: '匯到中國銀行,中國司法處理爭議', us: '匯到台灣登記公司,台灣司法處理' },
        { criterion: '併櫃', alt: '一廠一櫃,沒有跨供應商協調', us: '多家供應商整合到同一個櫃' },
        { criterion: '時程風險', alt: '你直接跟工廠管理延遲與重做', us: '我們協調、升級、必要時轉廠' },
        { criterion: '適合', alt: '單一 SKU、有自己 QC + 出口營運的買家', us: '多品類、供應商還在擴張、沒有自己的出口營運' },
      ],
      bottomLine: '直接向工廠下單適合有成熟 QC 與出口營運能力、且只跟熟悉工廠買固定 SKU 的買家。SunGene 適合想要單一對口、自有 QC、合併出貨、台灣司法管轄爭議路徑的買家。兩個都可以是對的答案 —— 差別在於哪些東西你願意自己扛。',
    },
    cn: {
      intro: '直接向中国工厂下单,在帐面上是成本最低的路。我们不会假装我们的利润不存在 —— SunGene 是台湾登记贸易公司,您确实有付一份贸易公司的成本。诚实的问题是:直接走,有哪些东西转到您身上、加上之后真的比较便宜吗?',
      whenAlt: {
        title: '直接向工厂下单适合您,当:',
        bullets: [
          '您跟某家工厂已有稳定关系,他们已经为您生产过同样 SKU、出过几批没出事',
          '您有自己的 QC 人力(自己飞、或包年验货代理),能在每批出货前现场验货',
          '您有自己的出口营运团队处理 Incoterms、装箱单、商业发票、原产地证明、报关行协调',
          '一旦延迟 4-6 周或某批瑕疵,您能吸收 —— 不影响下游生产与客户承诺',
          '您只需要 1-2 个 SKU、来自 1 家工厂 —— 没有多厂整合、没有跨供应商协调',
          '您的母国对中国大陆有清楚的双边付款与争议解决路径',
        ],
      },
      whenUs: {
        title: '台湾贸易公司比较合理,当:',
        bullets: [
          '您想要单一对口窗口 —— 报价、生产排程、QC、出口文件、出货后 claim,全部经过 SunGene',
          '您希望出口前 AQL 品检由 SunGene 员工亲自执行,而不是工厂自己验',
          '您希望付款汇入台湾登记公司,银行记录与争议路径走台湾司法管辖',
          '您需要整合多家供应商(例如 A 厂定制包装 + B 厂杯具 + C 厂毛毯)到同一个出货柜',
          '您需要出口文件处理(CE / FDA / FSC / 原产地证明 / Incoterms),而不想在内部建立这个营运能力',
          '您的工厂关系还在累积中 —— 您宁可用一个已审核过的台湾 + 中国供应商网络,而不是每换一个 SKU 就从零 onboard 一家工厂',
        ],
      },
      tableRows: [
        { criterion: '对口方', alt: '您自己跟某家中国工厂签约', us: 'SunGene Co., LTD.(台湾登记)' },
        { criterion: '价格', alt: '工厂直接价(帐面最低)', us: '一份买家报价,涵盖生产、AQL、文件' },
        { criterion: '验货', alt: '您自己安排(飞、代理、或相信工厂)', us: 'SunGene 自有员工执行 AQL 2.5 出口前品检' },
        { criterion: '出口文件', alt: '您自己组(或请货代另外收费)', us: '已含,由台湾与中国团队处理' },
        { criterion: '付款', alt: '汇到中国银行,中国司法处理争议', us: '汇到台湾登记公司,台湾司法处理' },
        { criterion: '并柜', alt: '一厂一柜,没有跨供应商协调', us: '多家供应商整合到同一个柜' },
        { criterion: '时程风险', alt: '您直接跟工厂管理延迟与重做', us: '我们协调、升级、必要时转厂' },
        { criterion: '适合', alt: '单一 SKU、有自己 QC + 出口营运的买家', us: '多品类、供应商还在扩张、没有自己的出口营运' },
      ],
      bottomLine: '直接向工厂下单适合有成熟 QC 与出口营运能力、且只跟熟悉工厂买固定 SKU 的买家。SunGene 适合想要单一对口、自有 QC、合并出货、台湾司法管辖争议路径的买家。两个都可以是对的答案 —— 差别在于哪些东西您愿意自己扛。',
    },
    fr: {
      intro: "Aller directement chez une usine chinoise est, sur le papier, le chemin au coût le plus bas. Nous ne prétendons pas que notre marge n'existe pas — SunGene est une société de négoce basée à Taïwan et vous payez bien un coût de société de négoce. La vraie question : qu'est-ce qui vous revient sur les épaules quand vous allez en direct, et au total est-ce moins cher après ?",
      whenAlt: {
        title: 'Commander directement à une usine fonctionne quand :',
        bullets: [
          "Vous avez une relation établie avec une usine spécifique qui produit déjà votre SKU et vous a expédié plusieurs fois sans incident",
          "Vous avez une capacité de contrôle qualité en interne (quelqu'un qui se déplace, ou une agence d'inspection au forfait) pour vérifier chaque expédition",
          "Vous avez une équipe d'opérations export en interne qui gère Incoterms, listes de colisage, factures commerciales, certificats d'origine et coordination transitaire",
          "Vous pouvez absorber un retard de 4-6 semaines ou un lot défectueux comme coût d'apprentissage sans nuire à votre production aval",
          "Vous n'avez besoin que d'un ou deux SKU d'une seule usine — pas de consolidation multi-fournisseurs",
          "Votre pays a un chemin clair pour les paiements et les litiges avec la Chine continentale",
        ],
      },
      whenUs: {
        title: 'Une société de négoce basée à Taïwan a du sens quand :',
        bullets: [
          "Vous voulez un seul interlocuteur responsable — devis, planning, QC, documentation export et réclamations post-expédition passent par SunGene",
          "Vous voulez un contrôle AQL pré-expédition réalisé par le personnel SunGene en personne, pas par l'usine qui s'inspecte elle-même",
          "Vous voulez que les paiements transitent par une entité enregistrée à Taïwan pour un parcours bancaire et juridique plus propre",
          "Vous devez consolider plusieurs fournisseurs (emballage personnalisé + arts de la table + plaids) dans une seule expédition",
          "Vous avez besoin de gérer la documentation export (CE / FDA / FSC / origine / Incoterms) sans construire cette capacité en interne",
          "Votre réseau d'usines est encore en construction — vous préférez un réseau Taïwan + Chine déjà vérifié",
        ],
      },
      tableRows: [
        { criterion: 'Interlocuteur', alt: 'Une usine chinoise spécifique avec laquelle vous avez signé', us: 'SunGene Co., LTD. (enregistrée à Taïwan)' },
        { criterion: 'Prix', alt: 'Prix usine direct (le plus bas sur le papier)', us: 'Un seul devis acheteur couvrant production, AQL, documents' },
        { criterion: 'Contrôle qualité', alt: "Vous l'organisez (déplacement, agence, ou confiance à l'usine)", us: 'Personnel SunGene en interne, AQL 2,5 pré-expédition' },
        { criterion: 'Documents export', alt: 'Vous les assemblez (ou payez le transitaire en plus)', us: 'Inclus, gérés par les équipes Taïwan + Chine' },
        { criterion: 'Paiement', alt: 'Virement vers une banque chinoise, juridiction Chine pour les litiges', us: 'Virement vers entité taïwanaise, juridiction Taïwan' },
        { criterion: 'Consolidation', alt: "Une usine par expédition, pas de coordination multi-fournisseurs", us: 'Multi-fournisseurs consolidés dans un même conteneur' },
        { criterion: 'Risque de délai', alt: "Vous gérez les retards et reprises directement avec l'usine", us: "Nous coordonnons, escaladons et redirigeons si besoin" },
        { criterion: 'Adapté à', alt: 'Acheteur SKU unique stable avec QC + ops export en interne', us: 'Acheteur multi-catégories, base fournisseurs en croissance, sans ops export en interne' },
      ],
      bottomLine: "La commande directe à l'usine fonctionne pour les acheteurs avec une opération QC + export mature, qui n'achètent qu'un SKU connu chez une usine connue. SunGene fonctionne pour les acheteurs qui veulent un seul interlocuteur responsable sur les deux marchés, QC en interne, expédition consolidée et un parcours de litige sous juridiction Taïwan. Les deux peuvent être la bonne réponse — la différence est ce que vous prenez en charge vous-même.",
    },
    es: {
      intro: 'Ir directo a una fábrica china es, sobre el papel, el camino al costo más bajo. No fingimos que nuestra margen no existe — SunGene es una empresa comercial con sede en Taiwán y usted sí paga un costo de empresa comercial. La pregunta honesta: ¿qué le toca a usted cuando va directo, y al sumar todo realmente sale más barato?',
      whenAlt: {
        title: 'Pedir directo a una fábrica funciona cuando:',
        bullets: [
          'Tiene una relación establecida con una fábrica específica que ya produce su SKU y ha enviado varias veces sin incidentes',
          'Tiene capacidad de control de calidad interna (alguien que viaja, o una agencia de inspección con contrato) para verificar cada pedido pre-envío',
          'Tiene un equipo de operaciones de exportación interno que maneja Incoterms, listas de empaque, facturas comerciales, certificados de origen y coordinación con agente de carga',
          'Puede absorber un retraso de 4-6 semanas o un lote defectuoso como costo de aprendizaje sin afectar producción downstream',
          'Solo necesita 1-2 SKU de una sola fábrica — sin consolidación multi-proveedor',
          'Su país tiene un camino claro de pagos y resolución de disputas con China continental',
        ],
      },
      whenUs: {
        title: 'Una empresa comercial con sede en Taiwán tiene sentido cuando:',
        bullets: [
          'Quiere un único interlocutor responsable — cotización, programa de producción, QC, documentación de exportación y reclamaciones post-envío pasan por SunGene',
          'Quiere inspección AQL pre-envío realizada por personal de SunGene en persona, no la fábrica inspeccionándose a sí misma',
          'Quiere que el pago fluya a una entidad registrada en Taiwán para un rastro bancario y jurídico más limpio',
          'Necesita consolidar múltiples proveedores (embalaje personalizado + sets cerámicos + mantas) en un solo envío',
          'Necesita manejar documentación de exportación (CE / FDA / FSC / origen / Incoterms) sin construir esa capacidad operativa internamente',
          'Su red de fábricas aún se está construyendo — prefiere una red Taiwán + China ya verificada en lugar de empezar de cero por cada SKU nuevo',
        ],
      },
      tableRows: [
        { criterion: 'Contraparte', alt: 'Una fábrica china específica con la que firmó', us: 'SunGene Co., LTD. (registrada en Taiwán)' },
        { criterion: 'Precio', alt: 'Precio directo de fábrica (el más bajo sobre el papel)', us: 'Una sola cotización para el comprador que cubre producción, AQL, documentos' },
        { criterion: 'Control de calidad', alt: 'Usted lo organiza (viaja, agencia o confía en la fábrica)', us: 'Personal interno de SunGene, AQL 2.5 pre-envío' },
        { criterion: 'Documentos de exportación', alt: 'Usted los arma (o paga al agente de carga extra)', us: 'Incluido, gestionado por equipos en Taiwán + China' },
        { criterion: 'Pago', alt: 'Transferencia a banco chino, jurisdicción China para disputas', us: 'Transferencia a entidad taiwanesa, jurisdicción Taiwán' },
        { criterion: 'Consolidación', alt: 'Una fábrica por envío, sin coordinación multi-proveedor', us: 'Multi-proveedores consolidados en un contenedor' },
        { criterion: 'Riesgo de plazo', alt: 'Usted gestiona retrasos y retrabajos directamente con la fábrica', us: 'Coordinamos, escalamos y redirigimos cuando es necesario' },
        { criterion: 'Ideal para', alt: 'Comprador de un solo SKU estable con QC + ops de exportación interno', us: 'Comprador multi-categoría, base de proveedores en crecimiento, sin ops de exportación interno' },
      ],
      bottomLine: 'El pedido directo a fábrica funciona para compradores con operación de QC + exportación madura, que solo compran un SKU conocido a una fábrica conocida. SunGene funciona para compradores que quieren un único interlocutor responsable en ambos mercados, QC interno, envío consolidado y un camino de disputa bajo jurisdicción de Taiwán. Ambos pueden ser la respuesta correcta — la diferencia es qué le toca asumir a usted mismo.',
    },
'''

new_block = new_active + preserved_tail
c = c[:start_idx] + new_block + c[end_idx:]

# B.4 - vs-alibaba-direct surgical fixes: whenUs.title 5 langs
c = c.replace("title: 'A Taiwan-based sourcing partner makes sense when:',",
              "title: 'A Taiwan-based trading company makes sense when:',")
c = c.replace("title: '找台灣採購夥伴比較合理,當:',",
              "title: '找台灣貿易公司比較合理,當:',")
c = c.replace("title: '找台湾采购伙伴比较合理,当:',",
              "title: '找台湾贸易公司比较合理,当:',")
c = c.replace("title: 'Un partenaire sourcing basé à Taïwan a du sens quand :',",
              "title: 'Une société de négoce basée à Taïwan a du sens quand :',")
c = c.replace("title: 'Un partner sourcing basado en Taiwán tiene sentido cuando:',",
              "title: 'Una empresa comercial con sede en Taiwán tiene sentido cuando:',")

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print("compareSlug: slug rename + META + CONTENT vs-direct-factory full rewrite + vs-alibaba-direct surgical fixes")

print("\nWave 14 done.")
