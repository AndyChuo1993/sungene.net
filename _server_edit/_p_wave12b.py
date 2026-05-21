import io
F = 'app/[lang]/sourcing/[category]/page.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    s = f.read()

# Fix the 2 packaging ctaDesc that still have broker phrasing
fr_old = 'ctaDesc: "Envoyez une image de référence (ou lien concurrent), quantité cible, pays de destination et toute spécification de décoration. Réponse le jour même avec 2–3 directions usines et la fourchette de prix attendue.",'
fr_new = 'ctaDesc: "Envoyez une image de référence (ou lien concurrent), quantité cible, pays de destination et spécification de décoration. Réponse le jour même avec un devis acheteur et délai.",'
assert fr_old in s
s = s.replace(fr_old, fr_new, 1)

es_old = "ctaDesc: 'Envíe una imagen de referencia (o enlace de la competencia), cantidad objetivo, país de destino y cualquier especificación de decoración. Respuesta el mismo día con 2–3 direcciones de fábrica y el rango de precios esperado.',"
es_new = "ctaDesc: 'Envíe imagen de referencia (o enlace de competidor), cantidad objetivo, país de destino y especificación de decoración. Respuesta el mismo día con una cotización para el comprador y plazo.',"
assert es_old in s
s = s.replace(es_old, es_new, 1)

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(s)
print("Wave 12b: packaging fr+es ctaDesc broker phrasing fixed")
