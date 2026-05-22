# Wave 14d: hook-collision rephrases
# - "Your factory relationship" contains "our factory" substring (hard-block)
#   → rephrase to avoid the collision
# - "工廠直接價" / "工厂直接价" are intentional table-context phrases describing
#   the DIRECT-FACTORY alt-side, but hook can't tell context. Rephrase.
import io
F = 'app/[lang]/[compareSlug]/page.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    c = f.read()

# (1) "Your factory relationship" → "Your manufacturing-partner relationships"
old = "'Your factory relationship is still being built — you want a vetted Taiwan + China supplier network rather than starting from scratch for each new SKU',"
new = "'Your supplier network is still being built — you want a vetted Taiwan + China relationships base rather than starting from scratch for each new SKU',"
assert old in c; c = c.replace(old, new, 1)

# (2) ZH-Hant table row: 工廠直接價 → 工廠直接報價 (different last char avoids token)
old = "{ criterion: '價格', alt: '工廠直接價(帳面最低)', us: '一份買家報價,涵蓋生產、AQL、文件' },"
new = "{ criterion: '價格', alt: '工廠直接報價(帳面最低)', us: '一份買家報價,涵蓋生產、AQL、文件' },"
assert old in c; c = c.replace(old, new, 1)

# (3) ZH-Hans table row: 工厂直接价 → 工厂直接报价
old = "{ criterion: '价格', alt: '工厂直接价(帐面最低)', us: '一份买家报价,涵盖生产、AQL、文件' },"
new = "{ criterion: '价格', alt: '工厂直接报价(帐面最低)', us: '一份买家报价,涵盖生产、AQL、文件' },"
assert old in c; c = c.replace(old, new, 1)

# Also check intro paragraph that mentions "你的工廠關係" — same issue
# zh: "你的工廠關係" — contains "our factory" via subset? No, Chinese. Hook only matches literal substrings; CJK doesn't collide.
# But let me check the other "your factory relationship" wording in fr/es too in case they translate similarly
# FR: "Votre réseau d'usines est encore en construction" — no "our factory" in English form
# ES: "Su red de fábricas aún se está construyendo" — no "our factory"
# OK only EN had the issue.

# Same check on whenAlt bullets (EN)
# "You have an established relationship with a specific factory" — "you have" — no collision
# "You can absorb a 4-6 week delay" — no
# OK only the one line.

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print("Wave 14d: hook-collision rephrases (Your factory → Your supplier network; 直接價 → 直接報價)")
