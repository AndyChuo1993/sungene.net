# Wave 13 patcher: Homepage 3-card capability section
# Replaces the current Source/Beyond's "sourceItems" 2-col grid with a
# restrained 3-card layout (Custom Packaging / Home & Living / Outdoor).
# Beauty deliberately excluded from homepage main rotation per Phase 2.
# Design rules (per owner brief): no icon show-off, no gradient, no hover
# animation, no "we can source anything" — just category name, 1 supply
# sentence, 3 examples, low-key CTA.
import io

F = 'app/[lang]/page.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    src = f.read()

# ─── (A) Insert CAPABILITIES data structure after HOME_POSITIONING block ───
# Anchor: the closing `}` of HOME_POSITIONING (line 117) immediately before
# HOME_KEYWORDS. Use the unique " },\n}\n\nconst HOME_KEYWORDS" boundary.

cap_block = '''}

type Capability = {
  slug: 'packaging' | 'home' | 'garden'
  name: string
  supplyLine: string
  examples: string[]
  ctaLabel: string
}

// Phase 2 W13: homepage 3-card capability section.
// Beauty intentionally not in this rotation (deprioritized, /sourcing/beauty
// page kept but not promoted to hero homepage card).
const CAPABILITIES: Partial<Record<Lang, Capability[]>> = {
  en: [
    {
      slug: 'packaging',
      name: 'Custom Packaging',
      supplyLine: 'Custom-spec packaging supplied through selected manufacturing partners in Taiwan and China. Public Alibaba.com storefront catalog.',
      examples: ['Mooncake gift boxes', 'Premium rigid gift boxes', 'Corrugated mailer cartons'],
      ctaLabel: 'View packaging',
    },
    {
      slug: 'home',
      name: 'Home & Living',
      supplyLine: 'Drinkware, ceramics, kitchen accessories, and branded soft goods supplied through selected manufacturing partners.',
      examples: ['Mugs and tumblers', 'Ceramic gift sets', 'Branded blankets and throws'],
      ctaLabel: 'View home & living',
    },
    {
      slug: 'garden',
      name: 'Outdoor',
      supplyLine: 'Outdoor products and event swag for trade shows, retreats, and brand activations.',
      examples: ['Picnic blankets', 'Caps and sunhats', 'Cooler bags and umbrellas'],
      ctaLabel: 'View outdoor',
    },
  ],
  zh: [
    {
      slug: 'packaging',
      name: '客製包裝',
      supplyLine: '透過台灣與中國的精選製造夥伴供應客製包裝。Alibaba.com 公開店面目錄。',
      examples: ['月餅禮盒', '精裝品牌禮盒', '瓦楞 mailer 紙箱'],
      ctaLabel: '查看包裝',
    },
    {
      slug: 'home',
      name: '居家生活',
      supplyLine: '透過精選製造夥伴供應馬克杯、陶瓷、廚房配件與品牌軟織品。',
      examples: ['馬克杯與保溫杯', '陶瓷禮盒組', '品牌毛毯與披毯'],
      ctaLabel: '查看居家生活',
    },
    {
      slug: 'garden',
      name: '戶外',
      supplyLine: '展會、企業活動、品牌活動的戶外產品與活動贈品。',
      examples: ['野餐墊', '棒球帽與太陽帽', '保冷袋與品牌雨傘'],
      ctaLabel: '查看戶外',
    },
  ],
  cn: [
    {
      slug: 'packaging',
      name: '定制包装',
      supplyLine: '通过台湾与中国的精选制造伙伴供应定制包装。Alibaba.com 公开店面目录。',
      examples: ['月饼礼盒', '精装品牌礼盒', '瓦楞 mailer 纸箱'],
      ctaLabel: '查看包装',
    },
    {
      slug: 'home',
      name: '居家生活',
      supplyLine: '通过精选制造伙伴供应马克杯、陶瓷、厨房配件与品牌软织品。',
      examples: ['马克杯与保温杯', '陶瓷礼盒组', '品牌毛毯与披毯'],
      ctaLabel: '查看居家生活',
    },
    {
      slug: 'garden',
      name: '户外',
      supplyLine: '展会、企业活动、品牌活动的户外产品与活动赠品。',
      examples: ['野餐垫', '棒球帽与太阳帽', '保冷袋与品牌雨伞'],
      ctaLabel: '查看户外',
    },
  ],
  fr: [
    {
      slug: 'packaging',
      name: 'Emballage personnalisé',
      supplyLine: "Emballage sur mesure fourni par nos partenaires manufacturiers sélectionnés à Taïwan et en Chine. Catalogue boutique Alibaba.com publique.",
      examples: ['Boîtes mooncake', 'Boîtes-cadeaux premium rigides', 'Cartons mailer ondulés'],
      ctaLabel: "Voir l'emballage",
    },
    {
      slug: 'home',
      name: 'Maison & vie quotidienne',
      supplyLine: 'Mugs, céramique, accessoires cuisine et textiles personnalisés fournis par nos partenaires manufacturiers sélectionnés.',
      examples: ['Mugs et gourdes', 'Sets céramiques', 'Plaids et textiles personnalisés'],
      ctaLabel: 'Voir maison & vie',
    },
    {
      slug: 'garden',
      name: 'Extérieur',
      supplyLine: "Produits extérieur et articles événementiels pour salons, séminaires et activations de marque.",
      examples: ['Plaids de pique-nique', 'Casquettes et chapeaux soleil', 'Sacs isothermes et parapluies'],
      ctaLabel: "Voir l'extérieur",
    },
  ],
  es: [
    {
      slug: 'packaging',
      name: 'Embalaje personalizado',
      supplyLine: 'Embalaje a medida suministrado por nuestros socios manufactureros seleccionados en Taiwán y China. Catálogo tienda Alibaba.com pública.',
      examples: ['Cajas mooncake', 'Cajas regalo premium rígidas', 'Cartones mailer corrugados'],
      ctaLabel: 'Ver embalaje',
    },
    {
      slug: 'home',
      name: 'Hogar y vida cotidiana',
      supplyLine: 'Tazas, cerámica, accesorios cocina y textiles de marca suministrados por socios manufactureros seleccionados.',
      examples: ['Tazas y termos', 'Sets cerámicos', 'Mantas y textiles de marca'],
      ctaLabel: 'Ver hogar y vida',
    },
    {
      slug: 'garden',
      name: 'Exterior',
      supplyLine: 'Productos de exterior y artículos para eventos para ferias, retiros y activaciones de marca.',
      examples: ['Mantas de picnic', 'Gorras y sombreros', 'Bolsas térmicas y paraguas'],
      ctaLabel: 'Ver exterior',
    },
  ],
}'''

# Anchor: end of HOME_POSITIONING block followed by HOME_KEYWORDS. The
# closing `}` of HOME_POSITIONING is at line 117 in the current file.
# Use the unique sequence "...beyondBody...]\n  },\n}\n\nconst HOME_KEYWORDS"
old_anchor = """  },
}

const HOME_KEYWORDS"""
new_anchor = """  },
""" + cap_block + """

const HOME_KEYWORDS"""

assert old_anchor in src, "HOME_POSITIONING closing anchor not found"
src = src.replace(old_anchor, new_anchor, 1)

# ─── (B) Add capabilities variable definition next to positioning ───
old_pos = "  const positioning = HOME_POSITIONING[safeLang] ?? HOME_POSITIONING.en!"
new_pos = "  const positioning = HOME_POSITIONING[safeLang] ?? HOME_POSITIONING.en!\n  const capabilities = CAPABILITIES[safeLang] ?? CAPABILITIES.en!"
assert old_pos in src
src = src.replace(old_pos, new_pos, 1)

# ─── (C) Replace the existing "What we supply" section JSX with 3-card layout ───
old_section = """      <section className=\"bg-white py-16 sm:py-20\">
        <Container className=\"max-w-7xl\">
          <div className=\"grid gap-8 lg:grid-cols-[1.1fr_0.9fr]\">
            <div className=\"rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10\">
              <div className=\"flex items-center gap-3\">
                <div className=\"h-px w-8 bg-accent-500\" />
                <span className=\"text-xs font-bold uppercase tracking-[0.2em] text-accent-600\">
                  {positioning.sourceKicker}
                </span>
              </div>
              <h2 className=\"mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl\">
                {positioning.sourceTitle}
              </h2>
              <p className=\"mt-4 max-w-2xl text-base leading-relaxed text-gray-600\">
                {positioning.sourceIntro}
              </p>
            </div>
            <div className=\"grid gap-4 sm:grid-cols-2\">
              {positioning.sourceItems.map((item) => (
                <div key={item} className=\"rounded-2xl border border-gray-200 bg-white p-6 shadow-sm\">
                  <div className=\"flex items-start gap-3\">
                    <div className=\"mt-1 h-2.5 w-2.5 rounded-full bg-accent-500\" />
                    <p className=\"text-base font-semibold text-gray-900\">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>"""

new_section = """      <section className=\"bg-white py-16 sm:py-20\">
        <Container className=\"max-w-7xl\">
          {/* Section header — restrained, full width */}
          <div className=\"max-w-3xl\">
            <div className=\"flex items-center gap-3\">
              <div className=\"h-px w-8 bg-accent-500\" />
              <span className=\"text-xs font-bold uppercase tracking-[0.2em] text-accent-600\">
                {positioning.sourceKicker}
              </span>
            </div>
            <h2 className=\"mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl\">
              {positioning.sourceTitle}
            </h2>
            <p className=\"mt-4 text-base leading-relaxed text-gray-600\">
              {positioning.sourceIntro}
            </p>
          </div>

          {/* 3 capability cards — Custom Packaging / Home & Living / Outdoor.
              Beauty deliberately omitted (deprioritized to /sourcing/beauty).
              Design: border-only, no shadow, no gradient, no hover animation. */}
          <div className=\"mt-10 grid gap-6 md:grid-cols-3\">
            {capabilities.map((cap) => (
              <div key={cap.slug} className=\"flex flex-col rounded-xl border border-gray-200 bg-white p-6 sm:p-7\">
                <h3 className=\"text-lg font-bold tracking-tight text-gray-950\">{cap.name}</h3>
                <p className=\"mt-3 text-sm leading-relaxed text-gray-600\">{cap.supplyLine}</p>
                <ul className=\"mt-5 space-y-1.5 text-sm text-gray-700\">
                  {cap.examples.map((ex) => (
                    <li key={ex} className=\"flex items-start gap-2\">
                      <span className=\"mt-[7px] inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gray-400\" aria-hidden />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
                <div className=\"mt-auto pt-6\">
                  <Link
                    href={`/${safeLang}/sourcing/${cap.slug}`}
                    className=\"text-sm font-semibold text-accent-600\"
                  >
                    {cap.ctaLabel} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>"""

assert old_section in src, "What-we-supply section JSX anchor not found"
src = src.replace(old_section, new_section, 1)

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(src)

print("Wave 13 complete: CAPABILITIES data + capabilities variable + 3-card JSX")
print("  - 5 active langs × 3 cards (Packaging / Home / Outdoor)")
print("  - Beauty intentionally not in homepage rotation")
print("  - Design: border-only, no shadow/gradient/hover animation")
