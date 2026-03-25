import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'

export default function WhyUs({ lang }: { lang: Lang }) {
  const content = {
    en: {
      kicker: 'WHY CHOOSE US',
      title: 'Your Trusted Machinery Partner from Asia',
      desc: 'We go beyond selling machines. From sourcing the right equipment to managing export logistics, we provide end-to-end support that global buyers depend on.',
      items: [
        { icon: '01', title: 'Factory-Direct Pricing', desc: 'As a manufacturer with our own production facilities, we offer competitive factory-direct pricing without middleman markups.' },
        { icon: '02', title: 'Turnkey Solutions', desc: 'From single machines to complete production lines, we design and deliver integrated solutions tailored to your specific requirements.' },
        { icon: '03', title: 'Global Export Expertise', desc: 'Experienced in exporting to 50+ countries with full documentation, voltage customization, and international shipping support.' },
        { icon: '04', title: 'After-Sales & Training', desc: 'Remote video installation guidance, operator training, spare parts supply, and 24/7 technical support for all our equipment.' },
        { icon: '05', title: 'OEM & Custom Engineering', desc: 'Our R&D team can customize dimensions, materials, output capacity, and automation levels to match your production environment.' },
        { icon: '06', title: 'Quality Certified', desc: 'CE certified machinery built with food-grade stainless steel (SUS304/316L), meeting international safety and hygiene standards.' },
      ]
    },
    cn: {
      kicker: '为什么选择我们',
      title: '您值得信赖的亚洲机械合作伙伴',
      desc: '我们不仅仅是卖机器。从设备选型到出口物流管理，我们提供全球买家信赖的端到端服务支持。',
      items: [
        { icon: '01', title: '工厂直销价格', desc: '作为拥有自有生产设施的制造商，我们提供有竞争力的工厂直销价格，无中间商加价。' },
        { icon: '02', title: '交钥匙解决方案', desc: '从单机到整套生产线，我们设计并交付针对您特定需求定制的集成解决方案。' },
        { icon: '03', title: '全球出口经验', desc: '出口经验覆盖50多个国家，提供完整文件、电压定制和国际物流支持。' },
        { icon: '04', title: '售后与培训', desc: '远程视频安装指导、操作培训、备件供应及全天候技术支持。' },
        { icon: '05', title: 'OEM与定制工程', desc: '我们的研发团队可定制尺寸、材料、产能和自动化水平以匹配您的生产环境。' },
        { icon: '06', title: '品质认证', desc: 'CE认证机械，采用食品级不锈钢（SUS304/316L），符合国际安全与卫生标准。' },
      ]
    },
    zh: {
      kicker: '為什麼選擇我們',
      title: '您值得信賴的亞洲機械合作夥伴',
      desc: '我們不僅僅是賣機器。從設備選型到出口物流管理，我們提供全球買家信賴的端到端服務支援。',
      items: [
        { icon: '01', title: '工廠直銷價格', desc: '作為擁有自有生產設施的製造商，我們提供有競爭力的工廠直銷價格，無中間商加價。' },
        { icon: '02', title: '交鑰匙解決方案', desc: '從單機到整套生產線，我們設計並交付針對您特定需求客製的整合解決方案。' },
        { icon: '03', title: '全球出口經驗', desc: '出口經驗覆蓋50多個國家，提供完整文件、電壓客製和國際物流支援。' },
        { icon: '04', title: '售後與培訓', desc: '遠端視訊安裝指導、操作培訓、備件供應及全天候技術支援。' },
        { icon: '05', title: 'OEM與客製工程', desc: '我們的研發團隊可客製尺寸、材料、產能和自動化水平以匹配您的生產環境。' },
        { icon: '06', title: '品質認證', desc: 'CE認證機械，採用食品級不鏽鋼（SUS304/316L），符合國際安全與衛生標準。' },
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-20 sm:py-28 bg-gray-50 border-y border-gray-200/60">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-600">{t.kicker}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl lg:text-5xl">{t.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{t.desc}</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <div key={i} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-600 text-sm font-bold text-white shadow-elev-1">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-950">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust badge row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-gray-200 pt-12">
          <div className="flex items-center gap-3 text-gray-500">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
            <span className="text-sm font-semibold">CE Certified</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            <span className="text-sm font-semibold">Export to 50+ Countries</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h11.8M4.26 19.72A9.96 9.96 0 0012 22a9.96 9.96 0 007.74-2.28" /></svg>
            <span className="text-sm font-semibold">SUS304/316L Stainless Steel</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
            <span className="text-sm font-semibold">15+ Years Experience</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
