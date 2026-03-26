import Link from 'next/link'
import Image from 'next/image'
import { t, Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function Footer({ lang }: { lang: Lang }) {
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

  return (
    <footer className="bg-brand-950 text-white">
      {/* Main footer */}
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-7">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${lang}`} className="flex items-center gap-3">
              <Image src="/logo/sungene.png" alt="SunGene Logo" width={32} height={32} className="h-8 w-auto brightness-200" />
              <div>
                <span className="text-xl font-bold">SunGene</span>
                <span className="ml-2 text-xs font-medium uppercase tracking-widest text-gray-400">Machinery</span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              {({en: 'SunGene is a Taiwan-based industrial machinery manufacturer and exporter — packaging machines, food processing equipment, filling & sealing systems, and automated production lines.', cn: 'SunGene 是台湾工业机械制造商与出口商，专注于包装机械、食品加工设备、灌装封口系统与自动化生产线。', zh: 'SunGene 是台灣工業機械製造商與出口商，專注於包裝機械、食品加工設備、灌裝封口系統與自動化生產線。', fr: 'SunGene est un fabricant et exportateur taïwanais de machines industrielles — machines d\'emballage, équipements agroalimentaires, systèmes de remplissage et lignes de production automatisées.', es: 'SunGene es un fabricante y exportador taiwanés de maquinaria industrial — máquinas de empaque, equipos de procesamiento de alimentos, sistemas de llenado y líneas de producción automatizadas.', pt: 'SunGene é um fabricante e exportador taiwanês de máquinas industriais — máquinas de embalagem, equipamentos de processamento de alimentos, sistemas de envase e linhas de produção automatizadas.', ko: 'SunGene은 대만의 산업용 기계 제조업체 및 수출업체로, 포장기계·식품가공장비·충전 밀봉 시스템·자동화 생산라인을 전문으로 합니다.', ja: 'SunGeneは台湾の産業機械メーカー・輸出業者です。包装機械、食品加工機器、充填・シールシステム、自動化生産ラインを専門としています。', ar: 'SunGene شركة تايوانية لتصنيع وتصدير الآلات الصناعية — آلات التعبئة والتغليف ومعدات تصنيع الأغذية وأنظمة التعبئة والإغلاق وخطوط الإنتاج الآلية.', th: 'SunGene คือผู้ผลิตและผู้ส่งออกเครื่องจักรอุตสาหกรรมจากไต้หวัน ครอบคลุมเครื่องบรรจุภัณฑ์ อุปกรณ์แปรรูปอาหาร ระบบบรรจุและซีล และสายการผลิตอัตโนมัติ', vi: 'SunGene là nhà sản xuất và xuất khẩu máy móc công nghiệp từ Đài Loan — máy đóng gói, thiết bị chế biến thực phẩm, hệ thống chiết rót & hàn kín và dây chuyền sản xuất tự động.', de: 'SunGene ist ein taiwanesischer Hersteller und Exporteur von Industriemaschinen — Verpackungsmaschinen, Lebensmittelverarbeitungsanlagen, Abfüll- und Verschließsysteme sowie automatisierte Produktionslinien.' } as Record<string,string>)[lang] || 'SunGene is a Taiwan-based industrial machinery manufacturer and exporter — packaging machines, food processing equipment, filling & sealing systems, and automated production lines.'}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-8 items-center rounded bg-white/10 px-3 text-xs font-semibold text-gray-300">CE</div>
              <div className="flex h-8 items-center rounded bg-white/10 px-3 text-xs font-semibold text-gray-300">ISO</div>
              <div className="flex h-8 items-center rounded bg-white/10 px-3 text-xs font-semibold text-gray-300">SUS304</div>
            </div>
          </div>

          {/* Machinery */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{t(lang, 'nav_machinery')}</h4>
            <ul className="space-y-3">
              {machineryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{t(lang, 'nav_solutions')}</h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 transition hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{({en: 'Company', cn: '公司', zh: '公司', fr: 'Entreprise', es: 'Empresa', pt: 'Empresa', ko: '회사', ja: '会社', ar: 'الشركة', th: 'บริษัท', vi: 'Công ty', de: 'Unternehmen' } as Record<string,string>)[lang] || 'Company'}</h4>
            <ul className="space-y-3">
              <li><Link href={`/${lang}/about`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_about')}</Link></li>
              <li><Link href={`/${lang}/resources`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_resources')}</Link></li>
              <li><Link href={`/${lang}/industries`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_industries')}</Link></li>
              <li><Link href={`/${lang}/contact`} className="text-sm text-gray-400 transition hover:text-white">{t(lang, 'nav_contact')}</Link></li>
            </ul>
          </div>

          {/* Contact - Dual Office */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{t(lang, 'nav_contact')}</h4>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Taiwan Office */}
              <div>
                <h5 className="mb-2 text-sm font-semibold text-white">{(['cn','zh'] as string[]).includes(lang) ? '台灣辦公室' : 'Taiwan Office'}</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>上瑾錸有限公司 (SunGene Co., LTD.)</li>
                  <li>{(['cn','zh'] as string[]).includes(lang) ? '統編' : 'Tax ID'}: 94111922</li>
                  <li>台中市中區光復路201號</li>
                  <li>Tel: +886 4 3703 2705</li>
                  <li>WhatsApp: +86 18144132078</li>
                  <li>LINE: @sungene</li>
                  <li>Email: contact@sungene.net</li>
                </ul>
              </div>
              {/* Xiamen Office */}
              <div>
                <h5 className="mb-2 text-sm font-semibold text-white">{(['cn','zh'] as string[]).includes(lang) ? '厦门办公室' : 'Xiamen Office'}</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>厦门上瑾铼贸易有限公司</li>
                  <li>厦门市同安区滨海西大道6788-1号银城智谷A1栋1001单元之二</li>
                  <li>Tel: 18144132078 (WeChat)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 rounded-lg border border-accent-500/30 bg-accent-500/10 px-4 py-2 text-sm font-semibold text-accent-400 transition hover:bg-accent-500/20">
                {({en: 'Get a Quote', cn: '获取报价', zh: '取得報價', fr: 'Demander un devis', es: 'Solicitar cotización', pt: 'Solicitar orçamento', ko: '견적 요청', ja: '見積もりを依頼', ar: 'طلب عرض أسعار', th: 'ขอใบเสนอราคา', vi: 'Yêu cầu báo giá', de: 'Angebot anfordern' } as Record<string,string>)[lang] || 'Get a Quote'}
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
            <span>Alibaba: momas.en.alibaba.com</span>
            <span>|</span>
            <span>LinkedIn: SunGene Co., LTD.</span>
          </div>
        </Container>
      </div>
    </footer>
  )
}
