"use client"

import { useState } from 'react'
import { Download, CheckCircle, Loader2 } from 'lucide-react'
import { Dictionary } from '@/lib/i18n'

interface DownloadFormProps {
  dict: Dictionary
  lang: 'zh' | 'en'
  resourceId: string
}

export default function DownloadForm({ dict, lang, resourceId }: DownloadFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorCode, setErrorCode] = useState<string | null>(null)
  const [startedAt] = useState(() => Date.now())
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    targetMarket: '',
    website: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorCode(null)

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Lead Magnet',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          productName: formData.product,
          targetMarket: formData.targetMarket,
          message: `Lead Magnet Request: ${resourceId}`,
          topic: `lead-magnet:${resourceId}`,
          website: formData.website,
          clientTimeMs: Date.now() - startedAt,
          pagePath: typeof window !== 'undefined' ? window.location.pathname : '',
          lang,
        }),
      })

      let json: any = null
      try {
        json = await res.clone().json()
      } catch {
        json = null
      }

      if (!res.ok && !json?.ok) {
        setErrorCode(String(res.status || 'error'))
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {dict.success_title || (lang === 'zh' ? '提交成功' : 'Request Received')}
        </h3>
        <p className="text-gray-600 mb-6">
          {dict.success_message || (lang === 'zh' ? '我們已收到您的資訊，將寄送至您的信箱。' : 'We received your request and will send it to your email.')}
        </p>
        <div className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600">
          <Download className="w-5 h-5 mr-2" />
          {lang === 'zh' ? '已送出申請' : 'Request Sent'}
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {lang === 'zh' ? '免費索取資源' : 'Get the Free Resource'}
        </h3>
        <p className="text-gray-500 text-sm">
          {lang === 'zh'
            ? '填寫資料後，我們會把資源或分析寄到你的信箱。'
            : 'Enter your details and we’ll send the resource or analysis to your email.'}
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          className="hidden"
          aria-hidden="true"
        />
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {lang === 'zh' ? '姓名' : 'Full Name'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder={lang === 'zh' ? '王小明' : 'John Doe'}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {lang === 'zh' ? '企業信箱' : 'Work Email'} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {lang === 'zh' ? '聯絡電話' : 'Phone Number'} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder={lang === 'zh' ? '例如：0912-345-678' : 'e.g. +886 912 345 678'}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            {lang === 'zh' ? '公司名稱' : 'Company Name'}
          </label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder={lang === 'zh' ? 'XX股份有限公司' : 'Acme Corp'}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
            {lang === 'zh' ? '產品/服務' : 'Product'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="product"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder={lang === 'zh' ? '例如：工業設備、塑膠射出件' : 'e.g. industrial equipment, plastic injection parts'}
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="targetMarket" className="block text-sm font-medium text-gray-700 mb-1">
            {lang === 'zh' ? '目標市場' : 'Target Market'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="targetMarket"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder={lang === 'zh' ? '例如：美國、德國、日本' : 'e.g. USA, Germany, Japan'}
            value={formData.targetMarket}
            onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
          />
        </div>

        {status === 'error' && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorCode === '429'
              ? (lang === 'zh' ? '送出太頻繁，請稍候 1 分鐘後再試。' : 'Too many requests. Please try again in 1 minute.')
              : (dict.form_error_desc || (lang === 'zh' ? '提交失敗，請稍候再試，或是直接聯繫我們。' : 'Submission failed. Please try again later or contact us.'))}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              {lang === 'zh' ? '送出中...' : 'Processing...'}
            </>
          ) : (
            <>
              {lang === 'zh' ? '送出申請' : 'Submit Request'}
              <Download className="ml-2 w-5 h-5" />
            </>
          )}
        </button>
        
        <p className="text-xs text-center text-gray-400 mt-4">
          {lang === 'zh' ? '我們尊重你的隱私。' : 'We respect your privacy.'}
        </p>
      </div>
    </form>
  )
}
