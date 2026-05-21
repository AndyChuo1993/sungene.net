# Wave 9 patcher: factual-claims.md v2.0 replacement + hook v3 Phase 2 extension
import io, os, shutil, sys, re
# Python 3.6 compat

FACTUAL_NEW = '_server_edit/_p_wave9_factual_v2.md'
FACTUAL_DEST = 'docs/factual-claims.md'
HOOK_SRC = '_server_edit/pre-commit-hook.sh'
HOOK_LIVE = '.git/hooks/pre-commit'

# === 1. Replace docs/factual-claims.md with v2.0 ===
with io.open(FACTUAL_NEW, 'r', encoding='utf-8') as f:
    new_v2 = f.read()
with io.open(FACTUAL_DEST, 'w', encoding='utf-8', newline='\n') as f:
    f.write(new_v2)
print("docs/factual-claims.md → v2.0 written ({} bytes)".format(len(new_v2)))

# === 2. Patch hook v2 → v3 ===
with io.open(HOOK_SRC, 'r', encoding='utf-8') as f:
    hook = f.read()

# 2a. Bump header comments
hook = hook.replace(
    "# Pinion Phase 1 pre-commit hook v2 — forbidden token guard",
    "# Pinion Phase 1+2 pre-commit hook v3 — forbidden token guard"
)
hook = hook.replace(
    "# Last update: 2026-05-20 (Wave 7 — n-gram cardinality variants added)",
    "# Last update: 2026-05-21 (Wave 9 — Phase 2 supplier-voice tokens + soft-WARN block)"
)
hook = hook.replace(
    "# Token list source: docs/factual-claims.md v1.2 ❌ section",
    "# Token list source: docs/factual-claims.md v2.0 ❌ section (Phase 1 + Phase 2)"
)

# 2b. Insert Phase 2 hard-block tokens before the closing `)` of forbidden_tokens
phase2_hard = """  # === Wave 9: Phase 2 supplier-voice hard-blocks ===
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
"""

anchor_close = "  '家居、园艺'\n)"
new_close = "  '家居、园艺'\n" + phase2_hard + ")"
assert anchor_close in hook, "Forbidden_tokens array close anchor not found"
hook = hook.replace(anchor_close, new_close, 1)

# 2c. Insert a new soft_warn block BEFORE the existing zh-Hans geopolitical loop
soft_warn_block = """
# Phase 2 supplier-voice soft warnings (factual-claims.md v2.0 Phase 2 ❌
# section: terms that are allowed in blog/article context discussing
# the concept itself, but should not appear as SunGene's own brand
# positioning in marketing copy). WARN-only, does not block commit.
for token in 'sourcing partner' 'sourcing agent' '採購夥伴' '採購代理' '採購顧問' \\
             'partenaire de sourcing' 'socio de sourcing' 'socio de abastecimiento' \\
             '采购伙伴' '采购代理' '采购顾问' \\
             'principal trader' 'balance sheet' 'agency model'; do
  matches=$(echo "$staged_files" | xargs -I{} grep -lF "$token" "{}" 2>/dev/null)
  if [ -n "$matches" ]; then
    echo "WARN Phase 2 supplier-voice: '$token' in staged files:"
    echo "$matches" | sed 's/^/  /'
    echo "  → OK in blog/article discussing the concept; NOT OK as SunGene's"
    echo "    own brand positioning (Hero / sub / meta / schema / about intro)."
  fi
done

"""

# Find the zh-Hans geo loop and insert soft_warn block before it
geo_anchor = "# zh-Hans geopolitical check (warn-only; allows zh-Hant occurrence)"
assert geo_anchor in hook, "geo_anchor not found"
hook = hook.replace(geo_anchor, soft_warn_block.lstrip() + "\n" + geo_anchor, 1)

with io.open(HOOK_SRC, 'w', encoding='utf-8', newline='\n') as f:
    f.write(hook)

# 2d. Sync live hook
shutil.copy2(HOOK_SRC, HOOK_LIVE)
os.chmod(HOOK_LIVE, 0o755)

# 2e. Count tokens
hard_count = len(re.findall(r"^  '[^']+'$", hook, re.MULTILINE))
print("hook v3: {} hard-block tokens (was 60)".format(hard_count))
print("hook v3: live + tracked synced")
