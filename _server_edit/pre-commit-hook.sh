#!/usr/bin/env bash
# Pinion Phase 1+2 pre-commit hook v3 — forbidden token guard
# Source of truth: _server_edit/pre-commit-hook.sh (this file, tracked in repo)
# Live install path: .git/hooks/pre-commit (NOT tracked; survives `git pull`
# but lost on fresh clone — `cp _server_edit/pre-commit-hook.sh .git/hooks/
# pre-commit && chmod +x .git/hooks/pre-commit` after cloning).
#
# Last update: 2026-05-21 (Wave 9 — Phase 2 supplier-voice tokens + soft-WARN block)
# Token list source: docs/factual-claims.md v2.0 ❌ section (Phase 1 + Phase 2)
#
# Purpose: structural guardrail against re-introducing upstream supplier
# claims (OEM factory / 14 years / 15,000 m² etc.) as if they were SunGene's.
#
# Path exclusion rationale: docs/factual-claims.md is the SoT that
# DEFINES the forbidden tokens (the file legitimately enumerates them);
# _server_edit/ is engineer scratch space (commit message drafts,
# patcher scripts that map old → new tokens, hook source self-mirror).
# Neither path ships to production HTML/JS, so token presence there is
# definitional not usage.

set -u

# Get list of staged files, excluding self-referential meta files.
staged_files=$(git diff --cached --name-only --diff-filter=AM \
  | grep -vE '^(docs/factual-claims\.md|_server_edit/)')
[ -z "$staged_files" ] && exit 0

forbidden_tokens=(
  # Upstream factory claims wrongly attributed to SunGene
  'OEM factory'
  '自有工廠'
  '自有工厂'
  '我們的廠房'
  '我们的厂房'
  'our factory'
  'we manufacture'
  '我們生產'
  '我们生产'
  # Specific upstream factory data (belongs to Xiamen partner factory)
  '14 年'
  '14 years'
  '15,000 m²'
  '15000 m²'
  '廈門廠'
  '厦门厂'
  'Xiamen factory'
  # Misleading Alibaba verification terminology
  '5-star verified'
  'Verified Supplier'
  'Gold Supplier'
  'Alibaba 認證'
  'Alibaba 认证'
  'Alibaba 5-star supplier'
  # T1-T3 borderline + factual corrections (do not regress)
  'sourceadas'
  '3× faster'
  '3 倍'
  '三倍'
  'US-Taiwan IP treaties'
  '美台 IP 條約'
  '美台條約'
  'Taiwan export HS 4819.10'
  'China export HS 4819.20'
  # zh-Hans Q1 mainland Chinese localization (机率 → 概率)
  '机率'
  # Wave 5: multilingual ownership-claim translations (fr/es/cjk)
  'notre usine'
  'notre propre usine'
  'nuestra fábrica'
  'nuestra propia fábrica'
  'usine OEM'
  'fábrica OEM'
  'nous fabriquons'
  'fabricamos'
  '我們的工廠'
  '我们的工厂'
  # Wave 5: multilingual 5-star Alibaba tier (zh/cn/fr/es)
  'Alibaba 5 星認證'
  'Alibaba 5 星认证'
  'fournisseur vérifié 5 étoiles'
  'proveedor verificado 5 estrellas'
  # Wave 7 — n-gram cardinality variants (3-cat without beauté/belleza,
  # short forms, and EN no-ampersand variant)
  'emballage, maison et jardin'
  'empaque, hogar y jardín'
  'packaging, home and garden'
  'maison et jardin'
  'hogar y jardín'
  'home and garden'
  # --- Wave 8 additions: zh n-gram cardinality variants ---
  # Wave 7 caught fr/es 3-cat but missed zh equivalents in same file.
  '包裝、家居與園藝'
  '包装、家居与园艺'
  '家居與園藝'
  '家居与园艺'
  '包裝、家居、園藝'
  '包装、家居、园艺'
  '家居、園藝'
  '家居、园艺'
  # === Wave 9: Phase 2 supplier-voice hard-blocks ===
  # factual-claims.md v2.0 ❌ Phase 2 section. These break the "Taiwan-based
  # trading company" brand voice if they regress into marketing copy.
  # Margin-disclosure family (Pinion v1.2 招牌句, Phase 2 retired)
  'factory price and our margin'
  'prix usine et notre marge'
  'precio de fábrica y nuestra margen'
  '工廠價與我方利潤'
  '工厂价与我方利润'
  'transparent margin'
  # Factory-direct family (broker voice)
  'factory-direct pricing'
  'factory direct pricing'
  'factory-direct price'
  'direct from manufacturer'
  'prix usine direct'
  'precio de fábrica directo'
  '工廠直供價'
  '工廠直接價'
  '工厂直供价'
  '工厂直接价'
  # Dual-entity procurement family (sourcing-service voice)
  'dual-entity procurement'
  'dual-entity sourcing'
  'procurement sourcing'
  '雙公司採購'
  '双公司采购'
  # Specific city names in brand surfaces (Hero / sub / meta / schema only —
  # operational surfaces like Footer/Contact/About use full street addresses
  # which do not match these +/&/and conjunctions)
  'Taichung + Xiamen'
  'Taichung & Xiamen'
  'Taichung and Xiamen'
  '台中＋廈門'
  '台中＋厦门'
  '台中 + 廈門'
  '台中 + 厦门'
  '台中、廈門兩地'
  '台中、厦门两地'
)

exit_code=0

# Grep against current file content (post-edit), NOT the diff.
# Rationale: `git diff -G` matches the ENTIRE patch including `-` removal
# lines, which falsely blocks legitimate removals of forbidden tokens.
# We only care whether the post-change file STILL contains the token.
for token in "${forbidden_tokens[@]}"; do
  matches=$(echo "$staged_files" | xargs -I{} grep -lF "$token" "{}" 2>/dev/null)
  if [ -n "$matches" ]; then
    echo "BLOCK: forbidden token '$token' in staged files:"
    echo "$matches" | sed 's/^/  /'
    exit_code=1
  fi
done

# Phase 2 supplier-voice soft warnings (factual-claims.md v2.0 Phase 2 ❌
# section: terms that are allowed in blog/article context discussing
# the concept itself, but should not appear as SunGene's own brand
# positioning in marketing copy). WARN-only, does not block commit.
for token in 'sourcing partner' 'sourcing agent' '採購夥伴' '採購代理' '採購顧問' \
             'partenaire de sourcing' 'socio de sourcing' 'socio de abastecimiento' \
             '采购伙伴' '采购代理' '采购顾问' \
             'principal trader' 'balance sheet' 'agency model'; do
  matches=$(echo "$staged_files" | xargs -I{} grep -lF "$token" "{}" 2>/dev/null)
  if [ -n "$matches" ]; then
    echo "WARN Phase 2 supplier-voice: '$token' in staged files:"
    echo "$matches" | sed 's/^/  /'
    echo "  → OK in blog/article discussing the concept; NOT OK as SunGene's"
    echo "    own brand positioning (Hero / sub / meta / schema / about intro)."
  fi
done


# zh-Hans geopolitical check (warn-only; allows zh-Hant occurrence)
for token in '中華民國' 'ROC' '兩岸' '两岸'; do
  matches=$(echo "$staged_files" | xargs -I{} grep -lF "$token" "{}" 2>/dev/null)
  if [ -n "$matches" ]; then
    echo "WARN zh-Hans geopolitical: '$token' in staged files:"
    echo "$matches" | sed 's/^/  /'
    echo "  → If inside cn: i18n block, replace with neutral term (台湾 / 台湾法律 / bilateral)."
    echo "  → If inside zh: i18n block (zh-Hant readership), OK to keep."
  fi
done

if [ "$exit_code" -ne 0 ]; then
  echo ""
  echo "Pre-commit BLOCKED. To bypass intentionally (e.g. for hook-source"
  echo "or docs/factual-claims.md updates where the token is definitional"
  echo "and NOT covered by the path-exclusion), use: git commit --no-verify"
  echo "Otherwise edit the file(s) above and re-stage."
fi

exit $exit_code
