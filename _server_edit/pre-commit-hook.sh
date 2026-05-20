#!/usr/bin/env bash
# Pinion Phase 1 pre-commit hook v2 — forbidden token guard
# Source of truth: _server_edit/pre-commit-hook.sh (this file, tracked in repo)
# Live install path: .git/hooks/pre-commit (NOT tracked; survives `git pull`
# but lost on fresh clone — `cp _server_edit/pre-commit-hook.sh .git/hooks/
# pre-commit && chmod +x .git/hooks/pre-commit` after cloning).
#
# Last update: 2026-05-20 (Wave 5 — multilingual extension + path exclusion)
# Token list source: docs/factual-claims.md v1.2 ❌ section
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
