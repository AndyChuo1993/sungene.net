import { Lang } from '@/lib/i18n'

export default function FAQ({ lang }: { lang: Lang }) {
  const content = {
    en: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'We are not sure what machine we need yet. Can we still contact you?', a: 'Yes. Many customers start with a product requirement rather than a specific machine model. We can begin from your application and production target.' },
        { q: 'Do you only supply one type of machinery?', a: 'No. We support multiple machinery directions related to packaging, food processing, automation support, and selected customized equipment.' },
        { q: 'Can you help with export-oriented projects?', a: 'Yes. We work in a way that supports international buyers evaluating machinery for overseas use.' },
        { q: 'Do you support customized requirements?', a: 'Yes. If standard machinery does not fit your application well, we can explore a more suitable customized direction.' },
        { q: 'What information should we prepare before inquiry?', a: 'It helps to provide your product type, capacity target, packaging format or workflow, destination country, and automation preference.' }
      ]
    },
    cn: {
      title: '常见问题',
      items: [
        { q: '我们还不确定需要哪种机器，可以联系你们吗？', a: '可以的。许多客户都是从产品需求而非特定的机器型号开始的。我们可以从您的应用场景和生产目标着手讨论。' },
        { q: '你们只提供一种类型的机械吗？', a: '不是的。我们支持多种机械方向，涵盖包装、食品加工、自动化支持以及特定的定制设备。' },
        { q: '你们能协助出口导向的项目吗？', a: '是的。我们的工作模式专门支援正在为海外使用评估机械的国际买家。' },
        { q: '你们支持定制化需求吗？', a: '是的。如果标准机械无法很好地满足您的应用，我们可以探讨更合适的定制化方向。' },
        { q: '在询价前我们应该准备哪些信息？', a: '提供您的产品类型、产能目标、包装格式或工作流、目标国家以及对自动化程度的偏好，将会非常有帮助。' }
      ]
    },
    zh: {
      title: '常見問題',
      items: [
        { q: '我們還不確定需要哪種機器，可以聯絡你們嗎？', a: '可以的。許多客戶都是從產品需求而非特定的機器型號開始的。我們可以從您的應用場景和生產目標著手討論。' },
        { q: '你們只提供一種類型的機械嗎？', a: '不是的。我們支援多種機械方向，涵蓋包裝、食品加工、自動化支援以及特定的客製設備。' },
        { q: '你們能協助出口導向的專案嗎？', a: '是的。我們的工作模式專門支援正在為海外使用評估機械的國際買家。' },
        { q: '你們支援客製化需求嗎？', a: '是的。如果標準機械無法很好地滿足您的應用，我們可以探討更合適的客製化方向。' },
        { q: '在詢價前我們應該準備哪些資訊？', a: '提供您的產品類型、產能目標、包裝格式或工作流、目標國家以及對自動化程度的偏好，將會非常有幫助。' }
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.title}</h2>
        <div className="space-y-6">
          {t.items.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
