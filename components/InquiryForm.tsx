'use client'
import { useState } from 'react'
import { t, Lang } from '@/lib/i18n'

export type FormField = {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea'
  required?: boolean
  rows?: number
}

interface InquiryFormProps {
  lang: Lang
  type: 'Free Analysis' | 'Contact' | 'Lead Gen Service'
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
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {}
    
    fields.forEach(field => {
      data[field.name] = formData.get(field.name) as string
    })

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
        name: data.name || data.company || 'Anonymous', // Fallback for name if not present (e.g. Free Analysis only asks Company)
        email: data.email,
        company: data.company,
        productName: data.product,
        targetMarket: data.market,
        message: data.message,
        ...data // Spread other fields just in case
      }

      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Submission failed')

      setStatus('success')
      // Reset form
      e.currentTarget.reset()
    } catch (err) {
      console.error(err)
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
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              required={field.required}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          )}
        </div>
      ))}

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-sm border border-red-200">
          <strong>{errorTitle || t(lang, 'form_error_title')}</strong>: {errorDesc || t(lang, 'form_error_desc')}
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
        By submitting this form, you agree to our privacy policy. We respect your data privacy.
      </p>
    </form>
  )
}
