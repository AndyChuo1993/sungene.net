import { Lang } from '@/lib/i18n'
import InquiryForm from '@/components/InquiryForm'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'en' || lang === 'zh' || lang === 'cn') ? lang : 'en'
  const titles = {
    en: 'Get a Free Quote | Contact SunGene Machinery',
    cn: '获取免费报价 | 联系 SunGene 机械',
    zh: '取得免費報價 | 聯繫 SunGene 機械',
  }
  const descriptions = {
    en: 'Request a free quote for packaging machinery, food processing equipment, or any industrial machinery. Our engineers will respond within 24 hours with a customized recommendation.',
    cn: '请求包装机械、食品加工设备或任何工业机械的免费报价。我们的工程师将在24小时内提供定制建议。',
    zh: '請求包裝機械、食品加工設備或任何工業機械的免費報價。我們的工程師將在24小時內提供客製建議。',
  }
  return { title: titles[l], description: descriptions[l] }
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  const content = {
    en: {
      kicker: 'GET A FREE QUOTE',
      title: 'Tell Us What You Need',
      desc: 'Share your product type, target output, and requirements. Our engineering team will analyze your needs and provide a customized machinery recommendation within 24 hours.',
      infoTitle: 'What to Include',
      formList: [
        'What product do you process or pack?',
        'Target output per hour or per day',
        'Packaging format (bags, bottles, pouches, etc.)',
        'Automation level preference',
        'Destination country & voltage',
        'Budget range (optional)',
      ],
      contactTitle: 'Direct Contact',
      contacts: [
        { label: 'Email', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: 'Location', value: 'Taichung, Taiwan' },
        { label: 'Hours', value: 'Mon-Fri 9:00-18:00 (GMT+8)' },
      ],
      btn: 'Submit Inquiry',
      responseNote: 'Average response time: < 24 hours',
    },
    cn: {
      kicker: '获取免费报价',
      title: '告诉我们您的需求',
      desc: '分享您的产品类型、目标产能和要求。我们的工程团队将在24小时内分析您的需求并提供定制机械建议。',
      infoTitle: '请提供以下信息',
      formList: [
        '您加工或包装什么产品？',
        '每小时或每天的目标产量',
        '包装形式（袋装、瓶装、袋包等）',
        '自动化水平偏好',
        '目的国及电压要求',
        '预算范围（可选）',
      ],
      contactTitle: '直接联系',
      contacts: [
        { label: '邮箱', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: '地址', value: '台湾台中' },
        { label: '工作时间', value: '周一至周五 9:00-18:00 (GMT+8)' },
      ],
      btn: '提交询价',
      responseNote: '平均回复时间：< 24小时',
    },
    zh: {
      kicker: '取得免費報價',
      title: '告訴我們您的需求',
      desc: '分享您的產品類型、目標產能和要求。我們的工程團隊將在24小時內分析您的需求並提供客製機械建議。',
      infoTitle: '請提供以下資訊',
      formList: [
        '您加工或包裝什麼產品？',
        '每小時或每天的目標產量',
        '包裝形式（袋裝、瓶裝、袋包等）',
        '自動化水平偏好',
        '目的國及電壓要求',
        '預算範圍（可選）',
      ],
      contactTitle: '直接聯繫',
      contacts: [
        { label: '信箱', value: 'contact@sungene.net' },
        { label: 'WhatsApp', value: '+886 4-3703-2705' },
        { label: '地址', value: '台灣台中' },
        { label: '工作時間', value: '週一至週五 9:00-18:00 (GMT+8)' },
      ],
      btn: '提交詢價',
      responseNote: '平均回覆時間：< 24小時',
    }
  }

  const t = content[lang] || content['en']

  return (
    <>
      {/* Header */}
      <section className="bg-brand-950 pt-8 pb-16">
        <Container>
          <span className="text-sm font-bold uppercase tracking-wider text-accent-400">{t.kicker}</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{t.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">{t.desc}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* Left side - info */}
            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-lg font-bold text-gray-950">{t.infoTitle}</h2>
                <ul className="mt-5 space-y-3">
                  {t.formList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8">
                <h2 className="text-lg font-bold text-gray-950">{t.contactTitle}</h2>
                <ul className="mt-5 space-y-4">
                  {t.contacts.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-sm font-semibold text-gray-500 w-20">{c.label}</span>
                      <span className="text-sm text-gray-900">{c.value}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="rounded-xl bg-accent-50 p-4 text-center">
                <p className="text-sm font-semibold text-accent-700">{t.responseNote}</p>
              </div>
            </div>

            {/* Right side - form */}
            <Card className="p-8">
              <InquiryForm
                lang={lang}
                type="Contact"
                submitLabel={t.btn}
                fields={[
                  { name: 'name', label: lang === 'en' ? 'Your Name' : (lang === 'cn' ? '联系人姓名' : '聯絡人姓名'), type: 'text', required: true, autoComplete: 'name' },
                  { name: 'email', label: lang === 'en' ? 'Email Address' : (lang === 'cn' ? '邮箱地址' : '電子郵件'), type: 'email', required: true, autoComplete: 'email' },
                  { name: 'company', label: lang === 'en' ? 'Company Name' : (lang === 'cn' ? '公司名称' : '公司名稱'), type: 'text', autoComplete: 'organization' },
                  { name: 'product', label: lang === 'en' ? 'Product / Application' : (lang === 'cn' ? '产品 / 应用' : '產品 / 應用'), type: 'text', required: true, placeholder: lang === 'en' ? 'e.g., Powder packaging, Liquid filling, Food processing...' : '' },
                  { name: 'capacity', label: lang === 'en' ? 'Target Output' : (lang === 'cn' ? '目标产能' : '目標產能'), type: 'text', placeholder: lang === 'en' ? 'e.g., 30 bags/min, 1000 bottles/hour...' : '' },
                  { name: 'country', label: lang === 'en' ? 'Destination Country' : (lang === 'cn' ? '使用国家' : '使用國家'), type: 'text' },
                  { name: 'voltage', label: lang === 'en' ? 'Voltage (if known)' : (lang === 'cn' ? '电压（如已知）' : '電壓（如已知）'), type: 'text', placeholder: lang === 'en' ? 'e.g., 220V/380V/480V, 50Hz/60Hz' : '' },
                  { name: 'budget', label: lang === 'en' ? 'Budget Range (USD)' : (lang === 'cn' ? '预算范围（美元）' : '預算範圍（美元）'), type: 'text' },
                  { name: 'message', label: lang === 'en' ? 'Additional Details' : (lang === 'cn' ? '补充说明' : '補充說明'), type: 'textarea', rows: 5, placeholder: lang === 'en' ? 'Tell us more about your requirements, current production setup, or any specific features you need...' : '' },
                ]}
              />
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
