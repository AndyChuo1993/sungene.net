# Wave 7 patcher: about fr/es strengths[2] Pinion alignment + hook n-gram extension
import io, sys, os
# Python 3.6 compat: no sys.stdout.reconfigure

ABOUT = 'app/[lang]/about/page.tsx'
HOOK_SRC = '_server_edit/pre-commit-hook.sh'
HOOK_LIVE = '.git/hooks/pre-commit'

# === 1. about fr strengths[2] ===
fr_old_title = "Expertise concentrée sur emballage, maison et jardin"
fr_old_desc  = "Nous investissons en profondeur dans les relations fournisseurs au sein des catégories emballage, maison et jardin plutôt que de nous disperser sur des secteurs sans lien. Les catégories voisines sont chiffrées sur demande, dans la limite de notre réseau fournisseur."
fr_new_title = "Spécialiste emballage cadeau papier + cadeaux corporate via usines partenaires"
fr_new_desc  = "L'emballage cadeau papier sur mesure (boîtes mooncake, boîtes-cadeaux de marque, emballage retail, cartons ondulés, sacs papier) est notre spécialité vérifiable sur Alibaba. Pour les autres catégories de cadeaux corporate — plaids, vêtements, mugs, papeterie, articles brandés — nous sourçons via des usines partenaires de longue date plutôt que de redécouvrir des fournisseurs à chaque commande."

# === 2. about es strengths[2] ===
es_old_title = "Experiencia concentrada en empaque, hogar y jardín"
es_old_desc  = "Invertimos en profundidad en relaciones con proveedores dentro de las categorías de empaque, hogar y jardín, en lugar de dispersarnos en sectores no relacionados. Las categorías vecinas se cotizan bajo petición, dentro del alcance de nuestra red de proveedores."
es_new_title = "Especialista embalaje regalo papel + regalos corporativos vía fábricas asociadas"
es_new_desc  = "El embalaje regalo papel personalizado (cajas mooncake, cajas regalo de marca, embalaje retail, cartones corrugados, bolsas de papel) es nuestra especialidad verificable en Alibaba. Para otras categorías de regalos corporativos — mantas, ropa, tazas, papelería, mercancía marca — abastecemos vía fábricas asociadas de largo plazo en lugar de redescubrir proveedores en cada pedido."

with io.open(ABOUT, 'r', encoding='utf-8') as f:
    src = f.read()

orig = src

# FR replacements (string is double-quoted in source — desc uses `"..."`)
assert fr_old_title in src, "FR title anchor not found"
assert fr_old_desc in src, "FR desc anchor not found"
src = src.replace(fr_old_title, fr_new_title, 1)
src = src.replace(fr_old_desc, fr_new_desc, 1)

# ES replacements (string is single-quoted — no apostrophes in either side)
assert es_old_title in src, "ES title anchor not found"
assert es_old_desc in src, "ES desc anchor not found"
src = src.replace(es_old_title, es_new_title, 1)
src = src.replace(es_old_desc, es_new_desc, 1)

# Sanity: count changes
assert src.count(fr_new_title) == 1
assert src.count(es_new_title) == 1
assert fr_old_title not in src
assert es_old_title not in src
assert fr_old_desc not in src
assert es_old_desc not in src

with io.open(ABOUT, 'w', encoding='utf-8', newline='\n') as f:
    f.write(src)

print("ABOUT: fr title+desc OK, es title+desc OK (4 string replacements)")

# === 3. Hook n-gram extension ===
new_tokens = [
    "  'emballage, maison et jardin'",
    "  'empaque, hogar y jardín'",
    "  'packaging, home and garden'",
    "  'maison et jardin'",
    "  'hogar y jardín'",
    "  'home and garden'",
]

with io.open(HOOK_SRC, 'r', encoding='utf-8') as f:
    hook = f.read()

# Insert before the closing `)` of forbidden_tokens array.
# Anchor: 'proveedor verificado 5 estrellas'\n)
anchor = "  'proveedor verificado 5 estrellas'\n)"
assert anchor in hook, "Hook array close anchor not found"

block = "  'proveedor verificado 5 estrellas'\n"
block += "  # Wave 7 — n-gram cardinality variants (3-cat without beauté/belleza,\n"
block += "  # short forms, and EN no-ampersand variant)\n"
for t in new_tokens:
    block += t + "\n"
block += ")"

hook = hook.replace(anchor, block, 1)

# Also bump the "Last update" line
hook = hook.replace(
    "# Last update: 2026-05-20 (Wave 5 — multilingual extension + path exclusion)",
    "# Last update: 2026-05-20 (Wave 7 — n-gram cardinality variants added)"
)

with io.open(HOOK_SRC, 'w', encoding='utf-8', newline='\n') as f:
    f.write(hook)

# Copy to live hook
import shutil
shutil.copy2(HOOK_SRC, HOOK_LIVE)
os.chmod(HOOK_LIVE, 0o755)

print("HOOK: 6 n-gram tokens appended; live hook updated")

# Verify token count
import re
n = len(re.findall(r"^  '[^']+'$", hook, re.MULTILINE))
print(f"HOOK token count: {n}")
