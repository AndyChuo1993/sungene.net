import { t, Lang } from '@/lib/i18n'
import InquiryForm, { FormField } from '@/components/InquiryForm'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'analysis_title') + ' | SunGene',
    description: t(lang, 'analysis_subtitle'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  const fields: FormField[] = [
    { name: 'company', label: t(lang, 'form_company'), type: 'text', required: true },
    { name: 'name', label: lang === 'zh' ? '聯絡人姓名' : 'Contact Person', type: 'text', required: true },
    { name: 'product', label: t(lang, 'form_product'), type: 'text', required: true },
    { name: 'market', label: t(lang, 'form_market'), type: 'text', required: true },
    { name: 'currentChannels', label: lang === 'zh' ? '目前主要出口方式' : 'Current Export Channels', type: 'text' },
    { name: 'targetCountry', label: lang === 'zh' ? '想開發的國家' : 'Target Countries', type: 'text' },
    { name: 'goals', label: lang === 'zh' ? '每月預估開發目標' : 'Monthly Growth Goal', type: 'text' },
    { name: 'email', label: t(lang, 'form_email'), type: 'email', required: true },
    { name: 'details', label: lang === 'zh' ? '補充說明' : 'Notes', type: 'textarea', rows: 3 },
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t(lang, 'analysis_title')}</h1>
          <p className="text-xl text-gray-600">{t(lang, 'analysis_subtitle')}</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg border border-gray-100">
          <InquiryForm 
            lang={lang}
            type="Free Analysis"
            fields={fields}
            submitLabel={t(lang, 'form_submit')}
            successTitle={t(lang, 'form_success_title')}
            successDesc={t(lang, 'form_success_desc')}
            errorTitle={t(lang, 'form_error_title')}
            errorDesc={t(lang, 'form_error_desc')}
          />
        </div>
      </div>
    </main>
  )
}
