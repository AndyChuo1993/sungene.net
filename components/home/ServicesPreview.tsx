import { Lang } from '@/lib/i18n'

export default function ServicesPreview({ lang }: { lang: Lang }) {
  const content = {
    en: {
      title: 'What We Support',
      desc: 'We support machinery needs across a range of applications, including packaging, food processing, conveying, filling, sealing, and selected customized industrial equipment. Whether you need a single machine, a semi-automatic setup, or a more complete production solution, we help narrow down the right direction.',
      items: [
        { title: 'Packaging Machinery', desc: 'Solutions for pouch, powder, liquid, granule, and related packaging applications.' },
        { title: 'Food Processing Machinery', desc: 'Equipment options for preparation, processing, mixing, cutting, and handling of food products.' },
        { title: 'Automation & Integration', desc: 'Support for conveyors, line coordination, workflow matching, and practical production layouts.' },
        { title: 'Customized Machinery', desc: 'For applications that require non-standard dimensions, functions, or configuration logic.' },
      ]
    },
    cn: {
      title: '我们提供的支持',
      desc: '我们支持多种应用场景的机械需求，包含包装、食品加工、输送、灌装、封口以及特定的定制化工业设备。无论您需要单机、半自动配置或更完整的生产方案，我们都能协助您锁定正确的方向。',
      items: [
        { title: '包装机械', desc: '针对袋装、粉末、液体、颗粒及相关包装应用的解决方案。' },
        { title: '食品加工机械', desc: '适用于食品备料、加工、混合、切割与处理的设备选项。' },
        { title: '自动化与整合', desc: '提供输送机、产线协调、工作流匹配及实用生产布局的支持。' },
        { title: '定制机械', desc: '针对需要非标准尺寸、功能或配置逻辑的应用需求。' },
      ]
    },
    zh: {
      title: '我們提供的支援',
      desc: '我們支援多種應用場景的機械需求，包含包裝、食品加工、輸送、灌裝、封口以及特定的客製化工業設備。無論您需要單機、半自動配置或更完整的生產方案，我們都能協助您鎖定正確的方向。',
      items: [
        { title: '包裝機械', desc: '針對袋裝、粉末、液體、顆粒及相關包裝應用的解決方案。' },
        { title: '食品加工機械', desc: '適用於食品備料、加工、混合、切割與處理的設備選項。' },
        { title: '自動化與整合', desc: '提供輸送機、產線協調、工作流匹配及實用生產佈局的支援。' },
        { title: '客製機械', desc: '針對需要非標準尺寸、功能或配置邏輯的應用需求。' },
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 md:text-4xl">{t.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t.desc}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {t.items.map((item, i) => (
            <div key={i} className="p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
