# SunGene 可宣稱事實清單 (Source of Truth)

**Purpose**: 任何人(包括 LLM)寫 sungene.net 的 site copy / articles / schema /
marketing 文案前,先讀本檔。對應每一條 trust signal,確認在 ✅ 區才寫。

**Last updated**: 2026-05-20 (v1.2, post R29 + Pinion Phase 1 alignment)

**Rule of thumb 一句**:
> 寫任何 trust signal 之前先問——「這條客戶想驗證,他能去哪裡看到第三方證明?」
> 看得到 → 可寫(✅ 區)
> 看不到、只能自己說 → 不能寫(❌ 區)
> 不確定 → ⚠️ 區,要老闆 case-by-case 確認

---

## ✅ 可宣稱事實(each backed by 3rd-party verifiable evidence)

### Legal entities

- **Taiwan entity**: SunGene Co., LTD.(上瑾錸有限公司),Tax ID **94111922**,founded 2023
  - Verify: 經濟部商工登記公示資料 https://findbiz.nat.gov.tw/(search by Tax ID)
  - Address: 201 Guangfu Rd., Central District, Taichung 40041, Taiwan R.O.C.
- **China entity**: Mainland China registration with Xiamen address
  - Address: Rm. 1001-2, Bldg. A1, Yincheng Zhigu, No. 6788-1 Binhai W. Ave.,
    Tong'an District, Xiamen, China
  - **CRITICAL**: This is an OFFICE for factory liaison + QC staff base, NOT a
    factory or production facility.

### Alibaba storefront

- **Alibaba.com supplier storefront**: https://momas.en.alibaba.com/
  - Active 3+ years (operational since ~2023)
  - Star rating + verification badges: publicly visible on storefront
    (let the buyer check the badge level directly — do NOT paraphrase
    Alibaba's verification tiers in our own copy, as "Verified Supplier"
    means business-license verification only, not factory audit)
  - **NOTE for writers**: The storefront markets paper packaging products
    and references upstream supplier factory data (14 years, 15,000 m²).
    This data belongs to the SUPPLIER factory, NOT SunGene. Do not import
    these numbers as SunGene's own claims. See ❌ section.

### Specialty / catalog

- **Primary catalog visible on Alibaba**: custom paper gift packaging
  - Gift boxes (premium, two-piece, magnetic closure, foil/UV/emboss)
  - Mooncake gift boxes
  - Printed packaging boxes (cake, cookie, food-grade with window cutouts)
  - Custom corrugated cartons / mailer boxes
  - Paper tubes & paper bag packaging
  - Book / lookbook printing & binding services
- **Adjacent confirmed catalog**: branded blankets (flannel, sherpa, lamb-wool),
  MOQ 20-30 pieces, USD 1.85-7.09/piece per Alibaba storefront listings

### Operational capabilities

- **Dedicated in-house QC staff** (verified by owner): SunGene employs
  full-time QC personnel based at the China office who travel to partner
  factories for on-site pre-shipment AQL inspection. NOT subcontracted to
  third-party inspection companies (QIMA / Bureau Veritas / TÜV etc.).
- **Multi-factory partner network**: SunGene works with multiple long-term
  partner factories across Mainland China for paper packaging production.
  Specific factory locations are NOT disclosed publicly to protect supplier
  relationships. Writers should NOT name cities for partner factories.
- **Taiwan-registered invoicing entity**: All buyer payments flow through the
  Taiwan entity; banking trail and dispute resolution path are in Taiwan
  jurisdiction.
- **Principal/trader model** (not commission agent): SunGene purchases goods
  from factories (FOB or EXW), resells to buyers with margin disclosed
  separately. Goods sit on SunGene's balance sheet between factory and buyer.
- **MOQ USD 1,000 per shipment**

### Commercial terms

- 30% deposit / 70% before shipment (default)
- Payment recipient: Taiwan entity
- Quote structure: resale price + underlying FOB/EXW factory price
  (on request) + SunGene margin transparent
- Incoterms: typically FOB Xiamen / FOB Keelung; EXW or CIF available
- Currency: USD primary; CNY/TWD for specific cases

---

## ❌ 不可宣稱(each with reason)

| 主張 | 為什麼不能寫 |
|---|---|
| 「14 年廠齡」/「14 years of experience」 | 這是上游合作工廠的數據,不是 SunGene 公司的。SunGene Co., LTD. 2023 年成立,~2-3 年資歷。 |
| 「15,000 m² 廠房」/「15,000 m² floorspace」 | 同上,是上游合作工廠的設施。SunGene 兩個 office 都不是 production facility。 |
| 「OEM factory」/「自有工廠」/「自有產線」/「our factory」/「我們的廠房」 | SunGene 是 trader/sourcing partner,不擁有任何製造設施。 |
| 「we make」/「we manufacture」/「我們生產 X」 | 同上。正確說法:「we source from」「we partner with factories that produce」「透過合作工廠網絡採購」。 |
| 「在廈門有 [品檢員/產線/廠房]」 | 廈門是辦公室,不是製造或品檢的物理駐點。品檢員 base 在中國辦公室,出差到合作工廠執行抽檢。正確說法:「中國辦公室專職品檢員親自到合作工廠做 AQL 品檢」。 |
| 「5-star verified」/「Alibaba 5-star supplier」(肯定式) | 自己 llms.txt 記錄星等「fluctuates 3-5 stars by period」。寫死「5-star」跟內部紀錄矛盾。改成「Alibaba 公開高星商家」或讓買家直接看 storefront。 |
| 「Alibaba Verified Supplier」/「Alibaba Gold Supplier」當成 trust signal | Alibaba 官方術語,實際 Verified 只是 business-license 驗證、Gold 是付費等級。買家會誤解為廠房稽核。改說「Alibaba 公開高星商家」並讓買家直接看 storefront badge,不要 paraphrase Alibaba 的 verification tiers。 |
| 「員工 50-200 人」/「50-200 employees」 | 未經老闆確認的數字不寫。Schema 目前 5-25(合 trader 規模合理),在老闆確認前維持。 |
| 「Made in our factory in [city]」 | 同前,無自有 facility。 |
| 「ISO 9001 / FSC / BRC 認證」掛 SunGene 名下 | 除非 SunGene 公司本身持有該認證,否則只能寫「合作工廠持有 FSC,可提供證書 PDF」。 |
| 任何指涉「SunGene 做了 X 年」(X > 公司年資 ~2-3 年) | SunGene 公司年資為基準,不是合作廠或創辦人個人經驗。 |
| 指名合作工廠所在城市(廣州 / 溫州 / 廈門 / 福建 etc.) | 保護供應商關係。可描述「中國紙盒工廠行業集中於東南沿海」這類普遍行業常識,不可指名「我們的廠在 X 城」。 |
| Article 2 早稿:「訓練過的眼睛比通用 ISO 驗貨員至少快 3 倍」 | 無第三方驗證的量化 claim。改質性陳述「訓練過的眼睛能抓到通用 ISO 驗貨員常漏掉的類別專屬瑕疵」。 |
| Article 3 早稿:「Taiwan export HS 4819.10、China export HS 4819.20」 | HS code 是 WCO 國際統一,不分國別。同樣月餅禮盒不論台灣或中國出口都歸 HS 4819.20。改寫成「HS 4819.20 regardless of origin;差別在 country-of-origin tariff treatment (Section 301 vs MFN)」。 |
| Article 3 早稿:「US-Taiwan IP treaties」/「美台 IP 條約」 | 美台因外交承認問題沒正式 treaty,有的是 TIFA / AIT framework。改通俗精確版「bilateral IP cooperation arrangements with key trade partners」/「與主要貿易夥伴的雙邊智財合作架構」。 |

---

## 🌏 Geopolitical context for zh-Hans translations

When translating from zh-Hant to zh-Hans, do not character-convert blindly.
The audience differs:
- zh-Hant readers: Taiwan, HK, overseas TW diaspora
- zh-Hans readers: Mainland China, SG B2B buyers, overseas SC diaspora

Specifically for SunGene (Taiwan-China dual entity sourcing):
- 「中華民國」/「ROC」 → 「台湾」 in zh-Hans only (keep "ROC" in en/fr/es)
- 「兩岸」 → contextually OK, but check tone (avoid sounding either
  pro-unification or pro-independence)
- Do not import Mainland political terms like 「祖国大陆」 either — stay neutral
- Same rule: write only what's factually verifiable; politics is borderline
  territory, default to neutral commercial terms

Grep tokens to flag in zh-Hans drafts:
中華民國 | ROC (in zh-Hans context) | 兩岸 | 反共 | 統一 | 獨立 (political sense)

---

## ⚠️ Borderline — 需老闆 case-by-case 確認

| 主張 | 為什麼是 borderline |
|---|---|
| 確切員工數 | Schema 目前 minValue:5, maxValue:25。實際數字老闆未明確告知。 |
| 累積出貨櫃數 / cumulative containers shipped | 真實但無第三方驗證來源。寫之前老闆 sign-off。 |
| 累積服務客戶數 / N+ clients served | 同上。 |
| 美國禮贈品客戶 case study | 真實存在,需該客戶 opt-in 書面同意後才能 anonymized 揭露。 |
| 「廠房 audit / 工廠視察」服務 | 真實做的話可寫,但要明確說「我們員工去合作工廠視察」,不是「視察我們自己的廠」。 |
| Tax ID 公開 | 94111922 在台灣公開查得到,但 schema 寫 Tax ID 可能被誤判為敏感資訊。目前 sungene.net schema 已含,維持。 |

---

## 🚨 寫 copy 前的 4 步檢查(LLM / 工程師 / 內容寫手必跑)

1. **讀本檔 ✅ / ❌ / 🌏 / ⚠️ 四區**(每次寫 copy 前)
2. **準備寫的每條 trust signal**,逐條問自己:
   - 在 ✅ 區裡 → 可寫
   - 在 ❌ 區裡 → 改寫或刪掉
   - 不在任何區 → 加進 ⚠️ 區,標 TODO 等老闆 confirm
3. **寫完後 grep 自己的 draft** 對下列 forbidden tokens(zh + en + zh-Hans 地緣):

```
OEM factory | 自有工廠 | 我們的廠房 | our factory | we manufacture | 我們生產
14 年 | 14 years | 15,000 m² | 15000 m²
廈門廠 | Xiamen factory | 5-star verified | Verified Supplier | Gold Supplier
Alibaba 認證 | Alibaba 5-star supplier | sourceadas
3× faster | 3 倍 | 三倍
US-Taiwan IP treaties | 美台 IP 條約 | 美台條約
Taiwan export HS 4819.10 | China export HS 4819.20
中華民國 (zh-Hans only) | ROC (zh-Hans only) | 兩岸 (zh-Hans politicized)
```

有任一個 → 改掉或刪掉,再 commit。Pre-commit hook 自動 block。

4. **反向測試**:預想客戶讀完文案後問「這個 X 我能去哪驗證?」,答不出第三方來源 = 不要寫。

---

## Historical context(給未來讀檔的人)

這個檔產生的原因:audit 流程中 LLM-generated content 和人類工程師寫的 copy
反覆把 Alibaba storefront 上的工廠數據(14 yr OEM、15,000 m²)當成 SunGene
自己的能力寫進文案。R22-R30 的 process notes 多次記錄這個 regression,**同樣
錯誤連續發生 3+ 次**。Source of truth 集中放在 repo 內並要求每次寫 copy 前必讀,
是減少 regression 的結構性方法。

詳細案例參考:
- Engineer 端: commit msg `4fd3bc7` (R28) / `558bb63` (R26) 的 Process notes 段落
- Auditor 端: `~/.claude/projects/.../memory/process_audit_antipatterns.md`

未來新增 / 修改本檔 = 必經 PR review,不是任意 commit。
