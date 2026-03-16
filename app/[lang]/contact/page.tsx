import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import InquiryForm, { FormField } from '@/components/InquiryForm'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  return {
    title: `${lang === 'en' ? 'Contact Us' : (lang === 'cn' ? '联系我们' : '聯絡我們')} | SunGene`,
    description:
      isChinese
        ? '與 SunGene 討論海外買家開發、經銷商開發、外銷業務外包服務與合作夥伴申請。'
        : 'Talk to SunGene about export lead generation, distributor development, sales outsourcing, or partnership applications.',
  }
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ lang: Lang }>
  searchParams?: Promise<{ type?: string }>
}) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const resolvedSearchParams = searchParams ? await searchParams : undefined
  const isPartner = resolvedSearchParams?.type === 'partner'

  const fields: FormField[] = [
    { name: 'name', label: lang === 'en' ? 'Your Name' : (lang === 'cn' ? '联系人姓名' : '聯絡人姓名'), type: 'text', required: true, autoComplete: 'name' },
    { name: 'phone', label: lang === 'en' ? 'Phone Number' : (lang === 'cn' ? '手机號碼' : '手機號碼'), type: 'tel', required: true, autoComplete: 'tel' },
    { name: 'company', label: lang === 'en' ? 'Company Name' : (lang === 'cn' ? '公司名稱' : '公司名稱'), type: 'text', required: true, autoComplete: 'organization' },
    { name: 'email', label: lang === 'en' ? 'Business Email' : (lang === 'cn' ? '邮箱' : '電子郵件'), type: 'email', required: true, autoComplete: 'email' },
    {
      name: 'message',
      label: lang === 'en' ? 'Project Details' : (lang === 'cn' ? '需求說明' : '需求說明'),
      type: 'textarea',
      required: true,
      rows: 5,
      defaultValue: isPartner
        ? isChinese
          ? '您好，我想申請加入 SunGene 合作夥伴計劃，請提供合作方式與後續流程。'
          : 'Hello, I would like to apply for the SunGene partner program. Please share the collaboration model and next steps.'
        : undefined,
      placeholder: isPartner
        ? isChinese
          ? '請補充你的公司、所在地、市場資源或合作方式。'
          : 'Please add your company, region, market access, or preferred collaboration model.'
        : isChinese
          ? '請簡單描述產品、目標市場、目前碰到的問題，或想討論的合作方向。'
          : 'Share your product, target markets, current challenges, or the collaboration you want to discuss.',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gray-900 py-24 text-white">
        <Image src="/banner/banner2.png" alt="Contact SunGene" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gray-950/70" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            {isPartner ? (lang === 'en' ? 'Partner Application' : (lang === 'cn' ? '合作夥伴申請' : '合作夥伴申請')) : lang === 'en' ? 'Contact Us' : (lang === 'cn' ? '联系我们' : '聯絡我們')}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-200">
            {isPartner
              ? isChinese
                ? '留下你的公司資訊與合作方向，我們會由商務團隊跟你接洽。'
                : 'Share your company details and partnership direction. Our business team will follow up with you.'
              : isChinese
                ? '不論你想找海外買家、建立經銷通路，還是規劃一年期的外銷開發合作，都可以直接跟我們談。'
                : 'Whether you want overseas buyers, distributor channels, or an annual export growth engagement, you can talk to us directly.'}
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{lang === 'en' ? 'Ways to reach us' : (lang === 'cn' ? '联系方式' : '聯絡方式')}</h2>
            <div>
              <div className="font-bold text-gray-900">{lang === 'en' ? 'Business Email' : (lang === 'cn' ? '商務合作信箱' : '商務合作信箱')}</div>
              <div className="mt-1 text-blue-700">contact@sungenelite.com</div>
            </div>
            <div>
              <div className="font-bold text-gray-900">{lang === 'en' ? 'Phone / LINE' : (lang === 'cn' ? '电话 / 即时通讯' : '電話 / 即時通訊')}</div>
              <div className="mt-1 text-gray-700">+886 43703 2705</div>
              <div className="mt-1 text-green-700">{lang === 'en' ? 'LINE ID: @sungene' : (lang === 'cn' ? '即时通讯帐号：@sungene' : '即時通訊帳號：@sungene')}</div>
            </div>
            <div>
              <div className="font-bold text-gray-900">{lang === 'en' ? 'WhatsApp' : (lang === 'cn' ? '即时通讯联系' : '即時通訊聯繫')}</div>
              <div className="mt-3 h-28 w-28 overflow-hidden rounded-sm border border-gray-200 bg-gray-100 shadow-sm">
                <Image src="/whatsapp-qr.png" alt={lang === 'en' ? 'WhatsApp QR Code' : (lang === 'cn' ? '即时通讯二维码' : '即時通訊 QR Code')} width={112} height={112} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="rounded-lg bg-blue-50 p-5 text-sm leading-7 text-blue-900">
              {isChinese
                ? '如果你已有明確產品與市場，建議在表單內直接寫出目標市場、買家類別型與目前遇到的卡點，這樣我們比較容易快速判斷合作方向。'
                : 'If you already have a product and target market in mind, include the buyer type and your current bottleneck in the form so we can suggest the right next step faster.'}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
            <InquiryForm
              lang={lang}
              type={isPartner ? 'Partnership Inquiry' : 'Contact'}
              fields={fields}
              submitLabel={isPartner ? (lang === 'en' ? 'Submit Partnership Request' : (lang === 'cn' ? '送出合作申請' : '送出合作申請')) : lang === 'en' ? 'Send Message' : (lang === 'cn' ? '送出需求' : '送出需求')}
              successTitle={lang === 'en' ? 'Request received' : (lang === 'cn' ? '送出成功' : '送出成功')}
              successDesc={isPartner
                ? isChinese
                  ? '我們已收到合作申請，商務團隊將盡快與您聯繫。'
                  : 'We received your partnership application. Our business team will contact you soon.'
                : isChinese
                  ? '我們已收到你的訊息，會盡快和你聯絡。'
                  : 'We received your message and will get back to you soon.'}
              errorTitle={lang === 'en' ? 'Submission failed' : (lang === 'cn' ? '送出失敗' : '送出失敗')}
              errorDesc={lang === 'en' ? 'Please try again later or email us directly.' : (lang === 'cn' ? '請稍後再試，或直接寄信給我們。' : '請稍後再試，或直接寄信給我們。')}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
