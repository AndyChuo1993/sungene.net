import { t, Lang } from '@/lib/i18n'
import InquiryForm, { FormField } from '@/components/InquiryForm'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'contact_title') + ' | SunGene',
    description: t(lang, 'contact_subtitle'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  const fields: FormField[] = [
    { name: 'name', label: t(lang, 'form_name'), type: 'text', required: true },
    { name: 'company', label: t(lang, 'form_company'), type: 'text', required: true },
    { name: 'email', label: t(lang, 'form_email'), type: 'email', required: true },
    { name: 'message', label: t(lang, 'form_message'), type: 'textarea', required: true, rows: 5 },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t(lang, 'contact_title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t(lang, 'contact_subtitle')}</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 bg-white p-10 md:p-16 rounded-sm shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
             <div className="text-center">
                <div className="font-bold text-gray-900 mb-1">{lang === 'zh' ? '商務合作信箱' : 'Business Email'}</div>
                <div className="text-blue-600 font-medium">contact@sungenelite.com</div>
             </div>
             <div className="text-center">
                <div className="font-bold text-gray-900 mb-1">{lang === 'zh' ? '即時聯絡' : 'Phone'}</div>
                <div className="text-blue-600 font-medium">+886 43703 2705</div>
             </div>
             <div className="text-center">
                <div className="font-bold text-gray-900 mb-1">{lang === 'zh' ? '公司所在地' : 'Location'}</div>
                <div className="text-gray-600">{lang === 'zh' ? '台中市中區光復路201號' : 'No. 201, Guangfu Rd., Central Dist., Taichung City, Taiwan'}</div>
             </div>
          </div>

          <InquiryForm 
            lang={lang}
            type="Contact"
            fields={fields}
            submitLabel={t(lang, 'contact_submit')}
            successTitle={t(lang, 'form_success_title')}
            successDesc={t(lang, 'form_success_desc')}
            errorTitle={t(lang, 'form_error_title')}
            errorDesc={t(lang, 'form_error_desc')}
          />
        </div>
      </section>
    </main>
  )
}
