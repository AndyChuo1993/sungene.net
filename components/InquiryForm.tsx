'use client'
import { useState } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { t, Lang } from '@/lib/i18n'

export type FormField = {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea' | 'tel'
  required?: boolean
  rows?: number
  defaultValue?: string
  placeholder?: string
  autoComplete?: string
}

interface InquiryFormProps {
  lang: Lang
  type:
    | 'Free Analysis'
    | 'Contact'
    | 'Export Lead Generation'
    | 'Distributor Development'
    | 'Export Sales Outsourcing'
    | 'Partnership Inquiry'
    | 'Lead Generation'
    | 'Outreach Service'
    | 'Sales Outsourcing'
  fields: FormField[]
  submitLabel: string
  successTitle?: string
  successDesc?: string
  errorTitle?: string
  errorDesc?: string
}

export default function InquiryForm({
  lang,
  type,
  fields,
  submitLabel,
  successTitle,
  successDesc,
  errorTitle,
  errorDesc
}: InquiryFormProps) {
  const isChinese = lang !== 'en'
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'email_error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setLoading(true)
    setStatus('idle')

    const formData = new FormData(form)
    const data: Record<string, string> = {}
    
    fields.forEach(field => {
      data[field.name] = formData.get(field.name) as string
    })

    // Validate email if present
    if (data.email && !validateEmail(data.email)) {
        setStatus('email_error')
        setLoading(false)
        return
    }

    try {
      // Map form fields to API expected fields
      // The API expects: name, email, company, message, productName, targetMarket, etc.
      // Our forms use specific field names. We need to map them or ensure they match.
      // Or just send everything and let the API store it (if the API is flexible).
      // The API route picks specific fields. Let's make sure our form fields match API fields.
      // Common fields: name, email, company, message.
      // Free Analysis fields: company, product -> productName, market -> targetMarket, email.
      
      const payload = {
        type,
        name: data.name || data.company || 'Anonymous',
        email: data.email,
        company: data.company,
        productName: data.product,
        targetMarket: data.market,
        message: data.message,
        website: (formData.get('website') as string) || '',
        pageSource: pathname,
        lang: lang,
        utm_source: searchParams.get('utm_source') || '',
        utm_medium: searchParams.get('utm_medium') || '',
        utm_campaign: searchParams.get('utm_campaign') || '',
        ...data // Spread other fields just in case
      }

      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      let json: any = null
      try {
        const text = await res.text()
        if (text) {
          json = JSON.parse(text)
        }
      } catch (e) {
        console.error('JSON Parse Error:', e)
        json = null
      }

      if (!res.ok || json?.ok === false) {
        const msg = json?.error || `Submission failed (${res.status})`
        throw new Error(msg)
      }

      setStatus('success')
      // Reset form
      form.reset()
    } catch (err: any) {
      console.error(err)
      setErrorMessage(err.message || 'Unknown error')
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center p-8 bg-green-50 rounded-sm border border-green-200">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{successTitle || t(lang, 'form_success_title')}</h3>
        <p className="text-gray-600">{successDesc || t(lang, 'form_success_desc')}</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-blue-600 font-medium hover:underline"
        >
          {lang === 'en' ? 'Submit another request' : (lang === 'cn' ? '再次提交需求' : '再次提交需求')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={field.rows || 4}
              required={field.required}
              defaultValue={field.defaultValue}
              placeholder={field.placeholder}
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              required={field.required}
              defaultValue={field.defaultValue}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>
      ))}

      {status === 'error' && (
        <div className="rounded-sm border border-red-200 bg-red-50 p-4 text-red-700">
          <strong>{errorTitle || t(lang, 'form_error_title')}</strong>:{' '}
          {errorMessage || errorDesc || t(lang, 'form_error_desc')}
        </div>
      )}

      {status === 'email_error' && (
        <div className="p-4 bg-yellow-50 text-yellow-800 rounded-sm border border-yellow-200">
          <strong>{lang === 'en' ? 'Invalid Email' : (lang === 'cn' ? '邮箱格式错误' : '電子郵件格式錯誤')}</strong>: {lang === 'en' ? 'Please enter a valid email address.' : (lang === 'cn' ? '请输入有效的邮箱地址。' : '請輸入有效的電子郵件地址。')}
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-sm hover:bg-blue-700 transition duration-300 shadow-md text-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? t(lang, 'form_submitting') : submitLabel}
        </button>
      </div>
      
      <p className="text-xs text-center text-gray-400 mt-4">
        {isChinese 
          ? '提交表單即代表您同意我們的隱私權政策。我們尊重您的資料隱私。'
          : 'By submitting this form, you agree to our privacy policy. We respect your data privacy.'}
      </p>
    </form>
  )
}
