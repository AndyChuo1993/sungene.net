import Image from 'next/image'
import { t, Lang } from '@/lib/i18n'
import InquiryForm, { FormField } from '@/components/InquiryForm'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'contact_title') + ' | SunGene',
    description: t(lang, 'contact_subtitle'),
  }
}

export default function Page({
  params,
  searchParams,
}: {
  params: { lang: Lang }
  searchParams?: { type?: string }
}) {
  const lang = params.lang
  const isPartner = searchParams?.type === 'partner'

  const fields: FormField[] = [
    { name: 'name', label: t(lang, 'form_name'), type: 'text', required: true, autoComplete: 'name' },
    { name: 'phone', label: lang === 'zh' ? '手機號碼' : 'Phone Number', type: 'tel', required: true, autoComplete: 'tel' },
    { name: 'company', label: t(lang, 'form_company'), type: 'text', required: true, autoComplete: 'organization' },
    { name: 'email', label: t(lang, 'form_email'), type: 'email', required: true, autoComplete: 'email' },
    {
      name: 'message',
      label: t(lang, 'form_message'),
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
        : undefined,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isPartner ? (lang === 'zh' ? '合作夥伴申請' : 'Partner Application') : t(lang, 'contact_title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {isPartner
              ? lang === 'zh'
                ? '留下你的公司資訊與合作方向，我們會由商務團隊跟你接洽。'
                : 'Share your company details and partnership direction. Our business team will follow up with you.'
              : t(lang, 'contact_subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 bg-white p-10 md:p-16 rounded-sm shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 mb-12 max-w-2xl mx-auto">
             <div className="text-center md:text-left flex-1">
                <div className="font-bold text-gray-900 mb-1">{lang === 'zh' ? '商務合作信箱' : 'Business Email'}</div>
                <div className="text-blue-600 font-medium">contact@sungenelite.com</div>
             </div>
             <div className="text-center md:text-left flex-1">
                <div className="font-bold text-gray-900 mb-1">{lang === 'zh' ? '即時聯絡' : 'Phone / LINE'}</div>
                <div className="text-blue-600 font-medium">+886 43703 2705</div>
                <div className="text-green-600 font-medium mt-1">LINE ID: @sungene</div>
             </div>
             <div className="text-center flex flex-col items-center flex-1 md:items-end">
                <div className="font-bold text-gray-900 mb-2">WhatsApp</div>
                <div className="h-24 w-24 overflow-hidden rounded-sm border border-gray-200 bg-gray-100 shadow-sm">
                    <Image src="/whatsapp-qr.png" alt="WhatsApp QR Code" width={96} height={96} className="h-full w-full object-cover" />
                </div>
             </div>
          </div>

          <InquiryForm 
            lang={lang}
            type={isPartner ? 'Partnership Inquiry' : 'Contact'}
            fields={fields}
            submitLabel={isPartner ? (lang === 'zh' ? '送出合作申請' : 'Submit Partnership Request') : t(lang, 'contact_submit')}
            successTitle={t(lang, 'form_success_title')}
            successDesc={isPartner
              ? lang === 'zh'
                ? '我們已收到合作申請，商務團隊將盡快與您聯繫。'
                : 'We received your partnership application. Our business team will contact you soon.'
              : t(lang, 'form_success_desc')}
            errorTitle={t(lang, 'form_error_title')}
            errorDesc={t(lang, 'form_error_desc')}
          />
        </div>
      </section>
    </main>
  )
}
