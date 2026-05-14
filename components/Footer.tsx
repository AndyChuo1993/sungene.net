import Link from 'next/link'
import Image from 'next/image'
import { t, Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function Footer({ lang }: { lang: Lang }) {
  const sourcingScopeLabel = ({ en: 'Sourcing Scope', cn: '采购范围', zh: '採購範圍', fr: 'Périmètre sourcing', es: 'Alcance de abastecimiento', pt: 'Escopo de sourcing', ko: '소싱 범위', ja: '調達範囲', ar: 'نطاق التوريد', th: 'ขอบเขตการจัดหา', vi: 'Phạm vi sourcing', de: 'Sourcing-Bereich' } as Record<string, string>)[lang] || 'Sourcing Scope'
  const commonNeedsLabel = ({ en: 'Common Needs', cn: '常见需求', zh: '常見需求', fr: 'Besoins courants', es: 'Necesidades comunes', pt: 'Necessidades comuns', ko: '주요 요구', ja: 'よくある要件', ar: 'الاحتياجات الشائعة', th: 'ความต้องการทั่วไป', vi: 'Nhu cầu phổ biến', de: 'Typische Bedarfe' } as Record<string, string>)[lang] || 'Common Needs'
  const toolsLabel = ({ en: 'Sourcing Tools', cn: '采购工具', zh: '採購工具', fr: 'Outils sourcing', es: 'Herramientas de abastecimiento', pt: 'Ferramentas de sourcing', ko: '소싱 도구', ja: '調達ツール', ar: 'أدوات التوريد', th: 'เครื่องมือจัดหา', vi: 'Công cụ sourcing', de: 'Sourcing-Tools' } as Record<string, string>)[lang] || 'Sourcing Tools'

  const machineryLinks = [
    { href: `/${lang}/machinery/packaging`, label: t(lang, 'nav_machinery_packaging') },
    { href: `/${lang}/machinery/food-processing`, label: t(lang, 'nav_machinery_food') },
    { href: `/${lang}/machinery/filling-sealing`, label: t(lang, 'nav_machinery_filling') },
    { href: `/${lang}/machinery/conveying-automation`, label: t(lang, 'nav_machinery_conveying') },
    { href: `/${lang}/machinery/custom`, label: t(lang, 'nav_machinery_custom') },
  ]

  const solutionLinks = [
    { href: `/${lang}/solutions#single`, label: t(lang, 'nav_sol_single') },
    { href: `/${lang}/solutions#semi`, label: t(lang, 'nav_sol_semi') },
    { href: `/${lang}/solutions#line`, label: t(lang, 'nav_sol_line') },
    { href: `/${lang}/solutions#custom`, label: t(lang, 'nav_sol_custom') },
  ]

  const machineLinks = [
    { href: `/${lang}/machines/pouch-packing-machine`, label: ({ en: 'Pouch Packing Machine', cn: '袋装包装机', zh: '袋裝包裝機', fr: 'Machine d\'ensachage', es: 'Empacadora de bolsas', pt: 'Máquina de sachês', ko: '파우치 포장기', ja: 'パウチ包装機', ar: 'ماكينة تعبئة الأكياس', th: 'เครื่องแพ็กถุง', vi: 'Máy đóng gói túi', de: 'Beutelverpackungsmaschine' } as Record<string, string>)[lang] || 'Pouch Packing Machine' },
    { href: `/${lang}/machines/powder-filling-machine`, label: ({ en: 'Powder Filling Machine', cn: '粉末灌装机', zh: '粉末充填機', fr: 'Remplisseuse poudre', es: 'Llenadora de polvo', pt: 'Envasadora de pó', ko: '분말 충전기', ja: '粉体充填機', ar: 'ماكينة تعبئة المساحيق', th: 'เครื่องบรรจุผง', vi: 'Máy chiết rót bột', de: 'Pulverfüllmaschine' } as Record<string, string>)[lang] || 'Powder Filling Machine' },
    { href: `/${lang}/machines/liquid-filling-machine`, label: ({ en: 'Liquid Filling Machine', cn: '液体灌装机', zh: '液體充填機', fr: 'Remplisseuse liquide', es: 'Llenadora de líquido', pt: 'Envasadora de líquido', ko: '액체 충전기', ja: '液体充填機', ar: 'ماكينة تعبئة السوائل', th: 'เครื่องบรรจุของเหลว', vi: 'Máy chiết rót chất lỏng', de: 'Flüssigkeitsfüllmaschine' } as Record<string, string>)[lang] || 'Liquid Filling Machine' },
    { href: `/${lang}/machines/snack-processing-line`, label: ({ en: 'Snack Processing Line', cn: '零食加工线', zh: '零食加工線', fr: 'Ligne snack', es: 'Línea de snacks', pt: 'Linha de snacks', ko: '스낵 가공 라인', ja: 'スナック加工ライン', ar: 'خط معالجة السناكات', th: 'ไลน์แปรรูปสแน็ก', vi: 'Dây chuyền snack', de: 'Snack-Produktionslinie' } as Record<string, string>)[lang] || 'Snack Processing Line' },
    { href: `/${lang}/machines/conveyor-system`, label: ({ en: 'Conveyor System', cn: '输送带系统', zh: '輸送帶系統', fr: 'Système de convoyage', es: 'Sistema de transporte', pt: 'Sistema de transportadores', ko: '컨베이어 시스템', ja: 'コンベアシステム', ar: 'نظام السيور الناقلة', th: 'ระบบสายพานลำเลียง', vi: 'Hệ thống băng tải', de: 'Fördersystem' } as Record<string, string>)[lang] || 'Conveyor System' },
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
                en: 'A small Taiwan + China trading company. We buy from vetted factories and resell direct in packaging, home, and garden categories. On-site QC by our own team. No factory kickbacks. Verified Alibaba.com supplier for three years.',
                cn: '台湾＋中国双公司架构的小型贸易商。直接向核查过的工厂下单、转手出货给您——包装、家居、园艺品类。亲自验货、不收红包。Alibaba.com 认证供应商三年。',
                zh: '台灣＋中國雙公司架構的小型貿易商。直接向審查過的工廠下單、轉手出貨給你——包裝、家居、園藝品類。親自驗貨、不收紅包。Alibaba.com 認證供應商三年。',
                fr: "Petite société de négoce Taïwan + Chine. Nous achetons auprès d'usines vérifiées et revendons en direct dans les catégories emballage, maison et jardin. Contrôle qualité par notre équipe. Sans commission occulte. Fournisseur Alibaba.com vérifié depuis trois ans.",
                es: 'Pequeña empresa comercial Taiwán + China. Compramos a fábricas verificadas y revendemos directamente en empaque, hogar y jardín. Control de calidad por nuestro equipo. Sin comisiones ocultas. Proveedor Alibaba.com verificado desde hace tres años.',
              } as Record<string, string>)[lang] || 'A small Taiwan + China trading company. We buy from vetted factories and resell direct in packaging, home, and garden categories. On-site QC by our own team. No factory kickbacks. Verified Alibaba.com supplier for three years.'}
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

          {/* Sourcing Scope */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{sourcingScopeLabel}</h4>
            <ul className="space-y-3">
              {machineryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Common Needs */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{commonNeedsLabel}</h4>
            <ul className="space-y-3">
              {machineLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{toolsLabel}</h4>
            <ul className="space-y-3">
              <li><Link href={`/${lang}/about`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_about')}</Link></li>
              <li><Link href={`/${lang}/sourcing`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_sourcing')}</Link></li>
              <li><Link href={`/${lang}/resources`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_resources')}</Link></li>
              <li><Link href={`/${lang}/industries`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_industries')}</Link></li>
              <li><Link href={`/${lang}/markets`} className="text-sm text-gray-400 transition hover:text-white">{({ en: 'Export Markets', zh: '出口市場', cn: '出口市场', fr: 'Marchés export', es: 'Mercados de exportación', pt: 'Mercados de exportação', ko: '수출 시장', ja: '輸出市場', ar: 'أسواق التصدير', th: 'ตลาดส่งออก', vi: 'Thị trường xuất khẩu', de: 'Exportmärkte' } as Record<string,string>)[lang] || 'Export Markets'}</Link></li>
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
                  <li>Tel: +886 4-3703-2705</li>
                  <li>WhatsApp: +86 18144132078</li>
                  <li>LINE: @sungene</li>
                  <li>Email: contact@sungene.net</li>
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
