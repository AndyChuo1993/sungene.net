import { Lang } from '@/lib/i18n'

export default function ProcessSection({ lang }: { lang: Lang }) {
  const content = {
    en: {
      title: 'How We Work',
      items: [
        { title: '1. Understand Your Application', desc: 'We review your product type, output target, packaging format, production workflow, and market requirements.' },
        { title: '2. Define the Right Direction', desc: 'We help narrow the equipment type, automation level, and configuration based on your priorities.' },
        { title: '3. Match Suitable Options', desc: 'We present suitable machinery directions, including standard or customized possibilities.' },
        { title: '4. Confirm Technical & Commercial Details', desc: 'We align on specifications, voltage, layout logic, lead time, and delivery expectations.' },
        { title: '5. Support Export Delivery', desc: 'We coordinate the next steps toward order execution and shipment arrangement.' }
      ]
    },
    cn: {
      title: '解决方案流程',
      items: [
        { title: '1. 了解您的应用需求', desc: '我们评估您的产品类型、产能目标、包装格式、生产流程与市场要求。' },
        { title: '2. 确立正确方向', desc: '根据您的优先考量，协助缩小设备类型、自动化程度与配置选项的范围。' },
        { title: '3. 匹配合适方案', desc: '提供合适的机械方向，包含标准机型或定制化可能性。' },
        { title: '4. 确认技术与商务细节', desc: '对接规格、电压、产线布局、交期与交付期望。' },
        { title: '5. 支持出口交付', desc: '协调订单执行与发货安排的后续步骤。' }
      ]
    },
    zh: {
      title: '解決方案流程',
      items: [
        { title: '1. 了解您的應用需求', desc: '我們評估您的產品類型、產能目標、包裝格式、生產流程與市場要求。' },
        { title: '2. 確立正確方向', desc: '根據您的優先考量，協助縮小設備類型、自動化程度與配置選項的範圍。' },
        { title: '3. 匹配合適方案', desc: '提供合適的機械方向，包含標準機型或客製化可能性。' },
        { title: '4. 確認技術與商務細節', desc: '對接規格、電壓、產線佈局、交期與交付期望。' },
        { title: '5. 支援出口交付', desc: '協調訂單執行與發貨安排的後續步驟。' }
      ]
    }
  }

  const t = content[lang] || content['en']

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">{t.title}</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {t.items.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 items-start bg-slate-800 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-blue-400 w-full md:w-1/3 shrink-0">{item.title}</h3>
              <p className="text-gray-300 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
