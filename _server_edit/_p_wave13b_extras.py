# Wave 13b extras — drop broker-defensive "envelope" voice from FAQ items[3]
# (5 langs, inspection question). Reword to neutral supplier-voice description
# of in-house QC process without the implicit "we're not the kind who takes
# bribes" defensive framing.
import io
F = 'components/home/FAQ.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    s = f.read()

# EN items[3]
old = "{ q: 'How do you handle factory inspection?', a: 'We inspect personally. Taiwan factories: our team drives to the site. China factories: goods enter our forwarder’s warehouse and we inspect before export. We have walked away from factories that offered envelopes to pass sub-spec goods. Inspection videos and photos with every shipment.' },"
new = "{ q: 'How do you handle factory inspection?', a: 'In-house SunGene staff inspect personally. Taiwan factories: our team drives to the site. China factories: goods enter our forwarder’s warehouse and we inspect before export. AQL 2.5 sampling, photo and video documentation with every shipment.' },"
assert old in s; s = s.replace(old, new, 1)

# FR items[3]
old = '{ q: "Comment se passe l\'inspection en usine ?", a: "Nous inspectons en personne. Usines à Taïwan : notre équipe se déplace. Usines en Chine : la marchandise arrive à l\'entrepôt de notre transitaire et nous inspectons avant export. Nous avons refusé des usines qui proposaient une enveloppe pour faire passer de la marchandise hors spécification. Vidéos et photos d\'inspection à chaque expédition." },'
new = '{ q: "Comment se passe l\'inspection en usine ?", a: "Le personnel SunGene en interne inspecte en personne. Usines à Taïwan : notre équipe se déplace. Usines en Chine : la marchandise arrive à l\'entrepôt de notre transitaire et nous inspectons avant export. Échantillonnage AQL 2,5, photos et vidéo à chaque expédition." },'
assert old in s; s = s.replace(old, new, 1)

# ES items[3]
old = "{ q: '¿Cómo realizan la inspección en fábrica?', a: 'Inspeccionamos en persona. Fábricas en Taiwán: nuestro equipo se desplaza. Fábricas en China: la mercancía entra al almacén de nuestro agente de carga y la inspeccionamos antes de exportar. Hemos rechazado fábricas que ofrecían sobres para aprobar mercancía fuera de especificación. Video y fotos de inspección con cada envío.' },"
new = "{ q: '¿Cómo realizan la inspección en fábrica?', a: 'Personal interno de SunGene inspecciona en persona. Fábricas en Taiwán: nuestro equipo se desplaza. Fábricas en China: la mercancía entra al almacén de nuestro agente de carga y la inspeccionamos antes de exportar. Muestreo AQL 2.5, fotos y video con cada envío.' },"
assert old in s; s = s.replace(old, new, 1)

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(s)
print("FAQ.tsx items[3] broker-defensive voice retired (en/fr/es)")
