# Wave 14b: final cleanup on compareSlug
# - vs-alibaba-direct META desc 5 langs: "sourcing partner" → "trading company"
# - vs-alibaba-direct FR whenUs.title (was using different French phrasing not caught by previous anchor)
# - cross-link references to vs-sourcing-agent → vs-direct-factory + label updates
import io
F = 'app/[lang]/[compareSlug]/page.tsx'
with io.open(F, 'r', encoding='utf-8') as f:
    c = f.read()

# (1) META vs-alibaba-direct desc 5 langs
c = c.replace(
    "desc: 'Honest comparison: when direct Alibaba purchasing makes sense, when a Taiwan-based sourcing partner pays off, and the 8 criteria buyers should weigh first.' },",
    "desc: 'Honest comparison: when DIY Alibaba sourcing makes sense, when a Taiwan-based trading company pays off, and the 8 criteria buyers should weigh first.' },",
    1
)
c = c.replace(
    "desc: '誠實對比:何時直接在 Alibaba 採購可以,何時找台灣採購夥伴值得多付一點。' },",
    "desc: '誠實對比:何時自己在 Alibaba 採購可以,何時找台灣貿易公司值得多付一點。' },",
    1
)
c = c.replace(
    "desc: '诚实对比:何时直接在 Alibaba 采购可以,何时找台湾采购伙伴值得多付一点。' },",
    "desc: '诚实对比:何时自己在 Alibaba 采购可以,何时找台湾贸易公司值得多付一点。' },",
    1
)
c = c.replace(
    'desc: "Comparaison honnête : quand acheter direct sur Alibaba marche, quand un partenaire sourcing Taïwan vaut la marge." },',
    'desc: "Comparaison honnête : quand acheter en DIY sur Alibaba marche, quand une société de négoce Taïwan vaut la marge." },',
    1
)
c = c.replace(
    "desc: 'Comparación honesta: cuándo comprar directo en Alibaba funciona, cuándo un socio de sourcing en Taiwán vale la margen.' },",
    "desc: 'Comparación honesta: cuándo comprar en DIY en Alibaba funciona, cuándo una empresa comercial en Taiwán vale la margen.' },",
    1
)

# (2) FR whenUs.title (vs-alibaba-direct) — different phrasing than vs-direct-factory
c = c.replace(
    "whenUs: { title: 'Un partenaire de sourcing Taïwan a du sens quand :', bullets: [",
    "whenUs: { title: 'Une société de négoce basée à Taïwan a du sens quand :', bullets: [",
    1
)

# (3) Cross-link references — vs-sourcing-agent URL → vs-direct-factory
c = c.replace("`/${l}/vs-sourcing-agent`", "`/${l}/vs-direct-factory`")

# (4) Cross-link labels — 5 langs
c = c.replace(
    "{({ en: 'SunGene vs commission sourcing agents →', zh: 'SunGene vs 抽佣代理 →', cn: 'SunGene vs 抽佣代理 →', fr: 'SunGene vs agents à commission →', es: 'SunGene vs agentes a comisión →' } as Record<string, string>)[l] || 'SunGene vs commission sourcing agents →'}",
    "{({ en: 'SunGene vs direct factory order →', zh: 'SunGene vs 直接向工廠下單 →', cn: 'SunGene vs 直接向工厂下单 →', fr: 'SunGene vs commande directe usine →', es: 'SunGene vs pedido directo a fábrica →' } as Record<string, string>)[l] || 'SunGene vs direct factory order →'}",
    1
)

with io.open(F, 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

# Also check vs-direct-factory cross-link block (mirrors vs-alibaba-direct on the OTHER page)
# Re-read and look for "vs-alibaba-direct" cross-link from vs-sourcing-agent context

print("Wave 14b: vs-alibaba-direct META desc + FR whenUs + cross-link references all fixed")
