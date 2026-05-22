# Wave 14c: fix FR META desc quote-style (single, not double)
import io
F = 'app/[lang]/[compareSlug]/page.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    c = f.read()
old = "desc: 'Comparaison honnête : quand acheter direct sur Alibaba marche, quand un partenaire sourcing Taïwan vaut la marge.' },"
new = "desc: 'Comparaison honnête : quand acheter en DIY sur Alibaba marche, quand une société de négoce Taïwan vaut la marge.' },"
assert old in c, "FR META desc anchor missing"
c = c.replace(old, new, 1)
with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print("Wave 14c: FR META desc fixed (single-quote)")
