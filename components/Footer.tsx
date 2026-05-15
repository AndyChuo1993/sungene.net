import Link from 'next/link'
import Image from 'next/image'
import { t, Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function Footer({ lang }: { lang: Lang }) {
  const sourcingScopeLabel = ({ en: 'Sourcing Scope', cn: '采购范围', zh: '採購範圍', fr: 'Périmètre sourcing', es: 'Alcance de abastecimiento', pt: 'Escopo de sourcing', ko: '소싱 범위', ja: '調達範囲', ar: 'نطاق التوريد', th: 'ขอบเขตการจัดหา', vi: 'Phạm vi sourcing', de: 'Sourcing-Bereich' } as Record<string, string>)[lang] || 'Sourcing Scope'
  const commonNeedsLabel = ({ en: 'Common Needs', cn: '常见需求', zh: '常見需求', fr: 'Besoins courants', es: 'Necesidades comunes', pt: 'Necessidades comuns', ko: '주요 요구', ja: 'よくある要件', ar: 'الاحتياجات الشائعة', th: 'ความต้องการทั่วไป', vi: 'Nhu cầu phổ biến', de: 'Typische Bedarfe' } as Record<string, string>)[lang] || 'Common Needs'
  const toolsLabel = ({ en: 'Sourcing Tools', cn: '采购工具', zh: '採購工具', fr: 'Outils sourcing', es: 'Herramientas de abastecimiento', pt: 'Ferramentas de sourcing', ko: '소싱 도구', ja: '調達ツール', ar: 'أدوات التوريد', th: 'เครื่องมือจัดหา', vi: 'Công cụ sourcing', de: 'Sourcing-Tools' } as Record<string, string>)[lang] || 'Sourcing Tools'

  // Footer category links.
  // The labels reflect the new positioning: packaging, home, garden categories.
  const categoryLinks = [
    { href: `/${lang}/sourcing#packaging`, label: ({ en: 'Packaging', zh: '包裝', cn: '包装', fr: 'Emballage', es: 'Empaque' } as Record<string, string>)[lang] || 'Packaging' },
    { href: `/${lang}/sourcing#home`, label: ({ en: 'Home goods', zh: '家居用品', cn: '家居用品', fr: 'Maison', es: 'Hogar' } as Record<string, string>)[lang] || 'Home goods' },
    { href: `/${lang}/sourcing#garden`, label: ({ en: 'Garden & outdoor', zh: '園藝戶外', cn: '园艺户外', fr: 'Jardin & extérieur', es: 'Jardín y exterior' } as Record<string, string>)[lang] || 'Garden & outdoor' },
    { href: `/${lang}/sourcing#beauty`, label: ({ en: 'Beauty containers', zh: '美容容器', cn: '美容容器', fr: 'Flaconnage', es: 'Envase cosmético' } as Record<string, string>)[lang] || 'Beauty containers' },
    { href: `/${lang}/sourcing`, label: ({ en: 'How we work', zh: '合作方式', cn: '合作方式', fr: 'Notre méthode', es: 'Cómo trabajamos' } as Record<string, string>)[lang] || 'How we work' },
  ]

  return (
    <footer className="bg-brand-950 text-white">
      {/* Main footer */}
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${lang}`} className="flex items-center gap-3">
              <Image src="/logo/sungene.png" alt="SunGene Logo" width={32} height={32} className="h-8 w-auto brightness-200" />
              <div>
                <span className="text-xl font-bold">SunGene</span>
                <span className="ml-2 text-xs font-medium uppercase tracking-widest text-gray-400">Sourcing</span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              {({
                en: 'SunGene is a Taiwan + China dual-entity trading company. We buy from vetted factories and resell direct in packaging, home, and garden categories. On-site QC by our own team. No factory kickbacks. Verified Alibaba.com supplier.',
                cn: 'SunGene 是一家台湾＋中国双主体的贸易公司。直接向审核过的工厂采购、转手出货给您——包装、家居、园艺品类。亲自验货、不收红包。Alibaba.com 认证供应商。',
                zh: 'SunGene 是一家台灣＋中國雙主體的貿易公司。直接向審核過的工廠採購、轉手出貨給你——包裝、家居、園藝品類。親自驗貨、不收紅包。Alibaba.com 認證供應商。',
                fr: "SunGene est une société de négoce à double entité Taïwan + Chine. Nous achetons auprès d'usines vérifiées et revendons en direct dans les catégories emballage, maison et jardin. Contrôle qualité par notre équipe. Sans commission occulte. Fournisseur Alibaba.com vérifié.",
                es: 'SunGene es una empresa comercial con doble entidad Taiwán + China. Compramos a fábricas verificadas y revendemos directamente en empaque, hogar y jardín. Control de calidad por nuestro equipo. Sin comisiones ocultas. Proveedor Alibaba.com verificado.',
              } as Record<string, string>)[lang] || 'SunGene is a Taiwan + China dual-entity trading company. We buy from vetted factories and resell direct in packaging, home, and garden categories. On-site QC by our own team. No factory kickbacks. Verified Alibaba.com supplier.'}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://momas.en.alibaba.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex h-8 items-center rounded bg-white/10 px-3 text-xs font-semibold text-gray-300 hover:bg-white/20 transition-colors"
              >
                Alibaba.com ↗
              </a>
              <div className="flex h-8 items-center rounded bg-white/10 px-3 text-xs font-semibold text-gray-300">TW Co.</div>
              <div className="flex h-8 items-center rounded bg-white/10 px-3 text-xs font-semibold text-gray-300">CN Co.</div>
            </div>
          </div>

          {/* What we source */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{sourcingScopeLabel}</h4>
            <ul className="space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Common Sourcing Questions */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{commonNeedsLabel}</h4>
            <ul className="space-y-3">
              <li><Link href={`/${lang}/sourcing`} className="text-sm text-gray-400 transition hover:text-white">{({ en: 'How pricing works', zh: '報價如何計算', cn: '报价如何计算', fr: 'Comment notre prix est calculé', es: 'Cómo calculamos el precio' } as Record<string, string>)[lang] || 'How pricing works'}</Link></li>
              <li><Link href={`/${lang}/sourcing`} className="text-sm text-gray-400 transition hover:text-white">{({ en: 'How we inspect', zh: '我們怎麼驗貨', cn: '我们怎么验货', fr: 'Comment nous inspectons', es: 'Cómo inspeccionamos' } as Record<string, string>)[lang] || 'How we inspect'}</Link></li>
              <li><Link href={`/${lang}/about`} className="text-sm text-gray-400 transition hover:text-white">{({ en: 'No factory kickbacks', zh: '不收工廠紅包', cn: '不收工厂红包', fr: 'Pas de pourboire usine', es: 'Sin sobres a fábrica' } as Record<string, string>)[lang] || 'No factory kickbacks'}</Link></li>
              <li><a href="https://momas.en.alibaba.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-gray-400 transition hover:text-white">{({ en: 'Verify us on Alibaba.com ↗', zh: '到 Alibaba.com 查證 ↗', cn: '到 Alibaba.com 查证 ↗', fr: 'Vérifier sur Alibaba.com ↗', es: 'Verificar en Alibaba.com ↗' } as Record<string, string>)[lang] || 'Verify us on Alibaba.com ↗'}</a></li>
              <li><Link href={`/${lang}/contact`} className="text-sm text-gray-400 transition hover:text-white">{({ en: 'Minimum order USD 1,000', zh: '最低訂單 USD 1,000', cn: '最低订单 USD 1,000', fr: 'Commande min. USD 1 000', es: 'Pedido mín. USD 1 000' } as Record<string, string>)[lang] || 'Minimum order USD 1,000'}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{toolsLabel}</h4>
            <ul className="space-y-3">
              <li><Link href={`/${lang}/about`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_about')}</Link></li>
              <li><Link href={`/${lang}/sourcing`} className="text-sm text-gray-400 transition hover:text-white">{({ en: 'How we work', zh: '合作方式', cn: '合作方式', fr: 'Notre méthode', es: 'Cómo trabajamos' } as Record<string, string>)[lang] || 'How we work'}</Link></li>
              <li><Link href={`/${lang}/resources`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_resources')}</Link></li>
              <li><Link href={`/${lang}/sourcing`} className="text-sm text-gray-400 transition hover:text-white">{({ en: 'Export Markets', zh: '出口市場', cn: '出口市场', fr: 'Marchés export', es: 'Mercados de exportación' } as Record<string,string>)[lang] || 'Export Markets'}</Link></li>
              <li><Link href={`/${lang}/contact`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_contact')}</Link></li>
            </ul>
          </div>

          {/* Contact - Dual Office */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{t(lang, 'nav_contact')}</h4>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Taiwan Office */}
              <div>
                <h5 className="mb-2 text-sm font-semibold text-white">
                  {({'zh':'台灣辦公室','cn':'台湾办公室','fr':'Bureau Taïwan','es':'Oficina Taiwán','pt':'Escritório Taiwan','ko':'대만 사무소','ja':'台湾事務所','ar':'مكتب تايوان','th':'สำนักงานไต้หวัน','vi':'Văn phòng Đài Loan','de':'Büro Taiwan'} as Record<string,string>)[lang] || 'Taiwan Office'}
                </h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    {lang === 'zh' ? '上瑾錸有限公司' : lang === 'cn' ? '上瑾錸有限公司' : 'SunGene Co., LTD.'}
                  </li>
                  <li>
                    {({'zh':'40041 台中市中區光復路201號','cn':'台中市中区光复路201号','fr':'201 Guangfu Rd., Taichung, Taïwan','es':'201 Guangfu Rd., Taichung, Taiwán','pt':'201 Guangfu Rd., Taichung, Taiwan','ko':'201 Guangfu Rd., 타이중, 대만','ja':'台湾台中市中区光復路201号','ar':'201 Guangfu Rd.، تايتشونغ، تايوان','th':'201 Guangfu Rd., ไทจุง, ไต้หวัน','vi':'201 Đường Guangfu, Đài Trung, Đài Loan','de':'Guangfu-Str. 201, Taichung, Taiwan'} as Record<string,string>)[lang] || '201 Guangfu Rd., Central District, Taichung 40041, Taiwan'}
                  </li>
                  <li>Tel: <a href="tel:+886437032705" className="hover:text-white transition">+886 4-3703-2705</a></li>
                  <li>WhatsApp: <a href="https://wa.me/8618144132078" target="_blank" rel="noopener" className="hover:text-white transition">+86 18144132078</a></li>
                  <li>LINE: @sungene</li>
                  <li>Email: <a href="mailto:contact@sungene.net" className="hover:text-white transition">contact@sungene.net</a></li>
                </ul>
              </div>
              {/* Xiamen Office */}
              <div>
                <h5 className="mb-2 text-sm font-semibold text-white">
                  {({'zh':'廈門辦公室','cn':'厦门办公室','fr':'Bureau Xiamen','es':'Oficina Xiamen','pt':'Escritório Xiamen','ko':'샤먼 사무소','ja':'厦門事務所','ar':'مكتب شيامن','th':'สำนักงานเซียเหมิน','vi':'Văn phòng Hạ Môn','de':'Büro Xiamen'} as Record<string,string>)[lang] || 'Xiamen Office'}
                </h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    {lang === 'zh' ? '廈門上瑾錸貿易有限公司' : lang === 'cn' ? '厦门上瑾铼贸易有限公司' : 'SunGene Co., LTD.'}
                  </li>
                  <li>
                    {lang === 'zh' ? '廈門市同安區濱海西大道6788-1號銀城智谷A1棟1001單元之二' : lang === 'cn' ? '厦门市同安区滨海西大道6788-1号银城智谷A1栋1001单元之二' : 'Rm. 1001-2, Bldg. A1, Yincheng Zhigu, No. 6788-1 Binhai W. Ave., Tong\'an, Xiamen, China'}
                  </li>
                  <li>Tel: +86 18144132078 (WeChat)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 rounded-lg border border-accent-500/30 bg-accent-500/10 px-4 py-2 text-sm font-semibold text-accent-400 transition hover:bg-accent-500/20">
                {({en: 'Request Assessment', cn: '获取采购评估', zh: '取得採購評估', fr: 'Demander évaluation', es: 'Solicitar evaluación', pt: 'Solicitar avaliação', ko: '평가 요청', ja: '評価依頼', ar: 'طلب تقييم', th: 'ขอการประเมิน', vi: 'Yêu cầu đánh giá', de: 'Bewertung anfordern' } as Record<string,string>)[lang] || 'Request Assessment'}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">{t(lang, 'footer_copyright')}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="https://momas.en.alibaba.com/" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-gray-300 transition-colors">Alibaba: momas.en.alibaba.com ↗</a>
            <span>|</span>
            <span>LinkedIn: SunGene Co., LTD.</span>
          </div>
        </Container>
      </div>
    </footer>
  )
}
