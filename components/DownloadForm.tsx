"use client"

import { useState } from 'react'
import { Download, CheckCircle, Loader2 } from 'lucide-react'
import { Dictionary } from '@/lib/i18n'

interface DownloadFormProps {
  dict: Dictionary
  lang: 'cn' | 'zh' | 'en'
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
          phone: formData.phone,
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

      if (!res.ok || json?.ok === false) {
        setErrorCode(String(res.status || 'error'))
        setStatus('error')
        return
      }

      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-gray-900">
          {dict.success_title || (lang === 'en' ? 'Request Received' : (lang === 'cn' ? '提交成功' : '提交成功'))}
        </h3>
        <p className="mb-6 text-gray-600">
          {dict.success_message || (lang === 'en' ? 'We received your request and will send it to your email.' : (lang === 'cn' ? '我們已收到您的信息，將寄送至您的信箱。' : '我們已收到您的資訊，將寄送至您的信箱。'))}
        </p>
        <div className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white">
          <Download className="mr-2 h-5 w-5" />
          {lang === 'en' ? 'Request Sent' : (lang === 'cn' ? '已送出申請' : '已送出申請')}
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
      <div className="mb-8 text-center">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{lang === 'en' ? 'Get the Free Resource' : (lang === 'cn' ? '免费索取資源' : '免費索取資源')}</h3>
        <p className="text-sm text-gray-500">
          {lang === 'en' ? 'Enter your details and we’ll send the resource or analysis to your email.' : (lang === 'cn' ? '填寫数据後，我們會把資源或分析寄到你的信箱。' : '填寫資料後，我們會把資源或分析寄到你的信箱。')}
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
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
            {lang === 'en' ? 'Full Name' : (lang === 'cn' ? '姓名' : '姓名')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
            placeholder={lang === 'en' ? 'John Doe' : (lang === 'cn' ? '王小明' : '王小明')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
            {lang === 'en' ? 'Work Email' : (lang === 'cn' ? '企业信箱' : '企業信箱')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
            {lang === 'en' ? 'Phone Number' : (lang === 'cn' ? '联系電話' : '聯絡電話')} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
            placeholder={lang === 'en' ? 'e.g. +886 912 345 678' : (lang === 'cn' ? '例如：0912-345-678' : '例如：0912-345-678')}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-700">
            {lang === 'en' ? 'Company Name' : (lang === 'cn' ? '公司名稱' : '公司名稱')}
          </label>
          <input
            type="text"
            id="company"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
            placeholder={lang === 'en' ? 'Acme Corp' : (lang === 'cn' ? 'XX股份有限公司' : 'XX股份有限公司')}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="product" className="mb-1 block text-sm font-medium text-gray-700">
            {lang === 'en' ? 'Product' : (lang === 'cn' ? '產品/服务' : '產品/服務')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="product"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
            placeholder={lang === 'en' ? 'e.g. industrial equipment, plastic injection parts' : (lang === 'cn' ? '例如：工业设备、塑膠射出件' : '例如：工業設備、塑膠射出件')}
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="targetMarket" className="mb-1 block text-sm font-medium text-gray-700">
            {lang === 'en' ? 'Target Market' : (lang === 'cn' ? '目标市场' : '目標市場')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="targetMarket"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
            placeholder={lang === 'en' ? 'e.g. USA, Germany, Japan' : (lang === 'cn' ? '例如：美国、德国、日本' : '例如：美國、德國、日本')}
            value={formData.targetMarket}
            onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
          />
        </div>

        {status === 'error' && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorCode === '429'
              ? lang === 'en'
                ? 'Too many requests. Please try again in 1 minute.'
                : (lang === 'cn' ? '提交过于频繁，请 1 分钟后再试。' : '送出太頻繁，請稍候 1 分鐘後再試。')
              : dict.form_error_desc ||
                (lang === 'en' ? 'Submission failed. Please try again later or contact us.' : (lang === 'cn' ? '提交失敗，請稍候再試，或是直接聯繫我們。' : '提交失敗，請稍候再試，或是直接聯繫我們。'))}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex w-full items-center justify-center rounded-xl border border-transparent bg-blue-600 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              {lang === 'en' ? 'Processing...' : (lang === 'cn' ? '送出中...' : '送出中...')}
            </>
          ) : (
            <>
              {lang === 'en' ? 'Submit Request' : (lang === 'cn' ? '送出申請' : '送出申請')}
              <Download className="ml-2 h-5 w-5" />
            </>
          )}
        </button>

        <p className="mt-4 text-center text-xs text-gray-400">{lang === 'en' ? 'We respect your privacy.' : (lang === 'cn' ? '我們尊重你的隱私。' : '我們尊重你的隱私。')}</p>
      </div>
    </form>
  )
}
