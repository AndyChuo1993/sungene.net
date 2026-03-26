'use client'
import { useState, useRef } from 'react'
import { Lang } from '@/lib/i18n'
import { trackCTAClick } from '@/lib/analytics'

interface SendProductFormProps {
  lang: Lang
  sourceMachine: 'powder' | 'liquid' | 'pouch' | 'conveyor'
}

const labels: Record<string, Record<string, string>> = {
  en: {
    sectionTitle: 'Send Your Product — Get a Machine Recommendation',
    sectionDesc: 'Fill in your product details and we\'ll recommend the best machine for your needs within 24 hours.',
    name: 'Your Name',
    email: 'Email Address',
    productType: 'Your Product',
    productPlaceholder: 'e.g. protein powder, hot sauce, coffee beans',
    photo: 'Product Photo (optional)',
    targetOutput: 'Target Daily Output',
    targetOutputPlaceholder: 'e.g. 5,000 bags/day',
    packageType: 'Package Type / Size',
    packagePlaceholder: 'e.g. 100g stand-up pouch',
    country: 'Your Country',
    submit: 'Send Product Details →',
    submitting: 'Sending...',
    successTitle: 'Thank you!',
    successDesc: 'We\'ve received your product details! Our team will send you a machine recommendation within 24 hours.',
    submitAnother: 'Submit another request',
    errorTitle: 'Submission Failed',
    errorDesc: 'Something went wrong. Please try again or contact us directly.',
    required: 'required',
    photoPreview: 'Photo selected',
  },
  cn: {
    sectionTitle: '发送您的产品 — 获取机器推荐',
    sectionDesc: '填写您的产品信息，我们将在24小时内为您推荐最合适的机器。',
    name: '您的姓名',
    email: '电子邮箱',
    productType: '您的产品',
    productPlaceholder: '例如：蛋白粉、辣椒酱、咖啡豆',
    photo: '产品照片（可选）',
    targetOutput: '目标日产量',
    targetOutputPlaceholder: '例如：5000袋/天',
    packageType: '包装类型/规格',
    packagePlaceholder: '例如：100g自立袋',
    country: '您的国家',
    submit: '发送产品信息 →',
    submitting: '发送中...',
    successTitle: '感谢您！',
    successDesc: '我们已收到您的产品信息！我们的团队将在24小时内向您发送机器推荐。',
    submitAnother: '再次提交',
    errorTitle: '提交失败',
    errorDesc: '出现错误，请重试或直接联系我们。',
    required: '必填',
    photoPreview: '已选择照片',
  },
  zh: {
    sectionTitle: '傳送您的產品 — 獲取機器推薦',
    sectionDesc: '填寫您的產品資訊，我們將在24小時內為您推薦最合適的機器。',
    name: '您的姓名',
    email: '電子郵件',
    productType: '您的產品',
    productPlaceholder: '例如：蛋白粉、辣椒醬、咖啡豆',
    photo: '產品照片（可選）',
    targetOutput: '目標日產量',
    targetOutputPlaceholder: '例如：5000袋/天',
    packageType: '包裝類型/規格',
    packagePlaceholder: '例如：100g自立袋',
    country: '您的國家',
    submit: '傳送產品資訊 →',
    submitting: '傳送中...',
    successTitle: '感謝您！',
    successDesc: '我們已收到您的產品資訊！我們的團隊將在24小時內向您傳送機器推薦。',
    submitAnother: '再次提交',
    errorTitle: '提交失敗',
    errorDesc: '發生錯誤，請重試或直接聯繫我們。',
    required: '必填',
    photoPreview: '已選擇照片',
  },
}

export default function SendProductForm({ lang, sourceMachine }: SendProductFormProps) {
  const t = labels[lang] || labels['en']
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [photoName, setPhotoName] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPhotoName(file.name)
      const reader = new FileReader()
      reader.onload = (ev) => {
        setPhotoPreview(ev.target?.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPhotoPreview(null)
      setPhotoName('')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch('/api/product-inquiry', {
        method: 'POST',
        body: formData,
      })

      let json: any = null
      try {
        json = await res.json()
      } catch {
        json = null
      }

      if (!res.ok || json?.ok === false) {
        throw new Error(json?.error || `Submission failed (${res.status})`)
      }

      trackCTAClick('send_product_form_submit', sourceMachine)
      setStatus('success')
      form.reset()
      setPhotoPreview(null)
      setPhotoName('')
    } catch (err: any) {
      console.error('[SendProductForm]', err)
      setErrorMsg(err.message || 'Unknown error')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.successTitle}</h3>
        <p className="text-gray-600 leading-relaxed">{t.successDesc}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-accent-600 font-medium hover:underline"
        >
          {t.submitAnother}
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-white shadow-elev-1 ring-1 ring-gray-200/60 p-8">
      <h2 className="text-xl font-bold text-gray-950 mb-2">{t.sectionTitle}</h2>
      <p className="text-sm text-gray-500 mb-6">{t.sectionDesc}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        {/* Hidden source machine */}
        <input type="hidden" name="sourceMachine" value={sourceMachine} />

        {/* Name */}
        <div>
          <label htmlFor="spf-name" className="block text-sm font-medium text-gray-700 mb-1">
            {t.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="spf-name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="spf-email" className="block text-sm font-medium text-gray-700 mb-1">
            {t.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="spf-email"
            name="email"
            required
            autoComplete="email"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          />
        </div>

        {/* Product Type */}
        <div>
          <label htmlFor="spf-productType" className="block text-sm font-medium text-gray-700 mb-1">
            {t.productType} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="spf-productType"
            name="productType"
            required
            placeholder={t.productPlaceholder}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          />
        </div>

        {/* Photo upload */}
        <div>
          <label htmlFor="spf-photo" className="block text-sm font-medium text-gray-700 mb-1">
            {t.photo}
          </label>
          <input
            type="file"
            id="spf-photo"
            name="photo"
            accept="image/*"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-gray-900 text-sm outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-accent-50 file:text-accent-700 hover:file:bg-accent-100"
          />
          {photoPreview && (
            <div className="mt-3 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photoPreview}
                alt="Product preview"
                className="h-16 w-16 rounded-lg object-cover border border-gray-200"
              />
              <span className="text-sm text-gray-500">{photoName}</span>
            </div>
          )}
        </div>

        {/* Target Output */}
        <div>
          <label htmlFor="spf-targetOutput" className="block text-sm font-medium text-gray-700 mb-1">
            {t.targetOutput}
          </label>
          <input
            type="text"
            id="spf-targetOutput"
            name="targetOutput"
            placeholder={t.targetOutputPlaceholder}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          />
        </div>

        {/* Package Type */}
        <div>
          <label htmlFor="spf-packageType" className="block text-sm font-medium text-gray-700 mb-1">
            {t.packageType}
          </label>
          <input
            type="text"
            id="spf-packageType"
            name="packageType"
            placeholder={t.packagePlaceholder}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="spf-country" className="block text-sm font-medium text-gray-700 mb-1">
            {t.country}
          </label>
          <input
            type="text"
            id="spf-country"
            name="country"
            autoComplete="country-name"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          />
        </div>

        {/* Error message */}
        {status === 'error' && (
          <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <strong>{t.errorTitle}:</strong> {errorMsg || t.errorDesc}
          </div>
        )}

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-md bg-accent-600 px-6 py-4 text-base font-semibold text-white shadow-elev-1 transition hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? t.submitting : t.submit}
          </button>
        </div>

        <p className="text-xs text-center text-gray-400">
          By submitting, you agree to our privacy policy. We respect your data privacy and will never share your information.
        </p>
      </form>
    </div>
  )
}
