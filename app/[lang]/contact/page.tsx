import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import InquiryForm, { FormField } from '@/components/InquiryForm'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: `${lang === 'zh' ? '聯絡我們' : 'Contact Us'} | SunGene`,
    description:
      lang === 'zh'
        ? '與 SunGene 討論海外買家開發、經銷商開發、外銷業務外套件與合作夥伴申請。'
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
  const resolvedSearchParams = searchParams ? await searchParams : undefined
  const isPartner = resolvedSearchParams?.type === 'partner'

  const fields: FormField[] = [
    { name: 'name', label: lang === 'zh' ? '聯絡人姓名' : 'Your Name', type: 'text', required: true, autoComplete: 'name' },
    { name: 'phone', label: lang === 'zh' ? '手機號碼' : 'Phone Number', type: 'tel', required: true, autoComplete: 'tel' },
    { name: 'company', label: lang === 'zh' ? '公司名稱' : 'Company Name', type: 'text', required: true, autoComplete: 'organization' },
    { name: 'email', label: lang === 'zh' ? '電子郵件' : 'Business Email', type: 'email', required: true, autoComplete: 'email' },
    {
      name: 'message',
      label: lang === 'zh' ? '需求說明' : 'Project Details',
      type: 'textarea',
      required: true,
      rows: 5,
      defaultValue: isPartner
        ? lang === 'zh'
          ? '您好，我想申請加入 SunGene 合作夥伴計劃，請提供合作方式與後續流程。'
          : 'Hello, I would like to apply for the SunGene partner program. Please share the collaboration model and next steps.'
        : undefined,
      placeholder: isPartner
        ? lang === 'zh'
          ? '請補充你的公司、所在地、市場資源或合作方式。'
          : 'Please add your company, region, market access, or preferred collaboration model.'
        : lang === 'zh'
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
            {isPartner ? (lang === 'zh' ? '合作夥伴申請' : 'Partner Application') : lang === 'zh' ? '聯絡我們' : 'Contact Us'}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-200">
            {isPartner
              ? lang === 'zh'
                ? '留下你的公司資訊與合作方向，我們會由商務團隊跟你接洽。'
                : 'Share your company details and partnership direction. Our business team will follow up with you.'
              : lang === 'zh'
                ? '不論你想找海外買家、建立經銷通路，還是規劃一年期的外銷開發合作，都可以直接跟我們談。'
                : 'Whether you want overseas buyers, distributor channels, or an annual export growth engagement, you can talk to us directly.'}
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{lang === 'zh' ? '聯絡方式' : 'Ways to reach us'}</h2>
            <div>
              <div className="font-bold text-gray-900">{lang === 'zh' ? '商務合作信箱' : 'Business Email'}</div>
              <div className="mt-1 text-blue-700">contact@sungenelite.com</div>
            </div>
            <div>
              <div className="font-bold text-gray-900">{lang === 'zh' ? '電話 / LINE' : 'Phone / LINE'}</div>
              <div className="mt-1 text-gray-700">+886 43703 2705</div>
              <div className="mt-1 text-green-700">LINE ID: @sungene</div>
            </div>
            <div>
              <div className="font-bold text-gray-900">WhatsApp</div>
              <div className="mt-3 h-28 w-28 overflow-hidden rounded-sm border border-gray-200 bg-gray-100 shadow-sm">
                <Image src="/whatsapp-qr.png" alt="WhatsApp QR Code" width={112} height={112} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="rounded-lg bg-blue-50 p-5 text-sm leading-7 text-blue-900">
              {lang === 'zh'
                ? '如果你已有明確產品與市場，建議在表單內直接寫出目標市場、買家類別型與目前遇到的卡點，這樣我們比較容易快速判斷合作方向。'
                : 'If you already have a product and target market in mind, include the buyer type and your current bottleneck in the form so we can suggest the right next step faster.'}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
            <InquiryForm
              lang={lang}
              type={isPartner ? 'Partnership Inquiry' : 'Contact'}
              fields={fields}
              submitLabel={isPartner ? (lang === 'zh' ? '送出合作申請' : 'Submit Partnership Request') : lang === 'zh' ? '送出需求' : 'Send Message'}
              successTitle={lang === 'zh' ? '送出成功' : 'Request received'}
              successDesc={isPartner
                ? lang === 'zh'
                  ? '我們已收到合作申請，商務團隊將盡快與您聯繫。'
                  : 'We received your partnership application. Our business team will contact you soon.'
                : lang === 'zh'
                  ? '我們已收到你的訊息，會盡快和你聯絡。'
                  : 'We received your message and will get back to you soon.'}
              errorTitle={lang === 'zh' ? '送出失敗' : 'Submission failed'}
              errorDesc={lang === 'zh' ? '請稍後再試，或直接寄信給我們。' : 'Please try again later or email us directly.'}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
