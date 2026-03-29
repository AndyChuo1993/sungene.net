'use client'

import { useState } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { Lang } from '@/lib/i18n'

interface RecommendFormProps {
  lang: Lang
}

const inputClass =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30'

const selectClass =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 appearance-none cursor-pointer'

// ── i18n strings ──────────────────────────────────────────────────────────────

const sectionTitles: Record<string, { s1: string; s2: string; submit: string }> = {
  en: {
    s1: 'Your Product Requirements',
    s2: 'Your Contact & Project Details',
    submit: 'Get My Machine Recommendation',
  },
  cn: {
    s1: '您的产品要求',
    s2: '您的联系方式与项目详情',
    submit: '获取我的机械推荐',
  },
  zh: {
    s1: '您的產品要求',
    s2: '您的聯絡方式與專案詳情',
    submit: '取得我的機械推薦',
  },
  fr: {
    s1: 'Vos exigences produit',
    s2: 'Vos coordonnées et détails du projet',
    submit: 'Obtenir ma recommandation de machine',
  },
  es: {
    s1: 'Requisitos de su producto',
    s2: 'Sus datos de contacto y proyecto',
    submit: 'Obtener mi recomendación de máquina',
  },
}

function getSectionTitles(lang: Lang) {
  return sectionTitles[lang] ?? sectionTitles.en
}

const successMessages: Record<string, { title: string; body: string; also: string; anotherBtn: string }> = {
  en: {
    title: 'Request received',
    body: 'Our engineers will review your requirements and reply within 1–2 business days.',
    also: 'To help us give a precise recommendation, please also share: product photos, existing packaging samples, or spec sheets.',
    anotherBtn: 'Submit another request',
  },
  cn: {
    title: '请求已收到',
    body: '我们的工程师将审核您的需求，并在1-2个工作日内回复。',
    also: '为了给您更精准的推荐，请同时提供：产品照片、现有包装样品或规格说明书。',
    anotherBtn: '提交新的请求',
  },
  zh: {
    title: '請求已收到',
    body: '我們的工程師將審核您的需求，並在1-2個工作日內回覆。',
    also: '為了提供更精準的推薦，請同時提供：產品照片、現有包裝樣品或規格說明書。',
    anotherBtn: '提交新的請求',
  },
}

function getSuccessMsg(lang: Lang) {
  return successMessages[lang] ?? successMessages.en
}

const privacyNote: Record<string, string> = {
  en: 'Your information is used only to process your inquiry. We never share or sell your data.',
  cn: '您的信息仅用于处理您的咨询。我们从不共享或出售您的数据。',
  zh: '您的資訊僅用於處理您的詢問。我們絕不共享或出售您的資料。',
  fr: 'Vos informations servent uniquement à traiter votre demande. Nous ne les partageons ni ne les vendons jamais.',
  es: 'Su información se usa únicamente para procesar su consulta. Nunca compartimos ni vendemos sus datos.',
}

function getPrivacy(lang: Lang) {
  return privacyNote[lang] ?? privacyNote.en
}

// ── Field helpers ──────────────────────────────────────────────────────────────

interface SelectFieldProps {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
  required?: boolean
}

function SelectField({ id, label, value, onChange, options, required }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={selectClass}
        >
          <option value="">— Select —</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

interface RadioFieldProps {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
  required?: boolean
}

function RadioField({ id, label, value, onChange, options, required }: RadioFieldProps) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-700">{label}</p>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name={id}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              required={required && !value}
              className="h-4 w-4 cursor-pointer accent-accent-500 border-gray-300 focus:ring-accent-500"
            />
            <span className="text-sm text-gray-700">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

interface TextFieldProps {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  type?: 'text' | 'email' | 'tel'
  required?: boolean
  placeholder?: string
  autoComplete?: string
}

function TextField({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required,
  placeholder,
  autoComplete,
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </div>
  )
}

interface TextareaFieldProps {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  rows?: number
  required?: boolean
  placeholder?: string
}

function TextareaField({
  id,
  label,
  value,
  onChange,
  rows = 4,
  required,
  placeholder,
}: TextareaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className={`${inputClass} resize-y`}
      />
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

type FormState = {
  // Section 1
  productType: string
  productState: string
  packagingFormat: string
  fillWeight: string
  targetOutput: string
  automationLevel: string
  fullLine: string
  // Section 2
  name: string
  company: string
  email: string
  phone: string
  country: string
  voltage: string
  materialReq: string
  budget: string
  timeline: string
  message: string
  // Honeypot
  website: string
}

const initialState: FormState = {
  productType: '',
  productState: '',
  packagingFormat: '',
  fillWeight: '',
  targetOutput: '',
  automationLevel: '',
  fullLine: '',
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  voltage: '',
  materialReq: '',
  budget: '',
  timeline: '',
  message: '',
  website: '',
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function RecommendForm({ lang }: RecommendFormProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [refId, setRefId] = useState('')

  const st = getSectionTitles(lang)
  const sm = getSuccessMsg(lang)
  const privacy = getPrivacy(lang)

  function set(field: keyof FormState) {
    return (value: string) => setForm((prev) => ({ ...prev, [field]: value }))
  }

  function getDeviceType(): string {
    if (typeof navigator === 'undefined') return 'unknown'
    const ua = navigator.userAgent
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) return 'mobile'
    if (/Tablet|iPad/i.test(ua)) return 'tablet'
    return 'desktop'
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Honeypot check
    if (form.website) return

    setStatus('loading')
    setErrorMsg('')

    const payload = {
      ...form,
      // hidden fields
      _source_url: pathname,
      _lang: lang,
      _utm_source: searchParams.get('utm_source') ?? '',
      _utm_medium: searchParams.get('utm_medium') ?? '',
      _utm_campaign: searchParams.get('utm_campaign') ?? '',
      _utm_term: searchParams.get('utm_term') ?? '',
      _utm_content: searchParams.get('utm_content') ?? '',
      _device: getDeviceType(),
      _form_type: 'machinery_recommendation',
    }

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data?.error ?? `Server error ${res.status}`)
      }

      setRefId(data?.id ?? data?.ref ?? '')
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Unexpected error. Please try again.')
      setStatus('error')
    }
  }

  function handleReset() {
    setForm(initialState)
    setStatus('idle')
    setErrorMsg('')
    setRefId('')
  }

  // ── Success state ──────────────────────────────────────────────────────────

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 px-8 py-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-7 w-7 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-xl font-semibold text-green-800">
          {sm.title}
          {refId && (
            <span className="ml-2 font-mono text-base text-green-600">— Ref: {refId}</span>
          )}
        </p>
        <p className="mt-3 text-gray-700">{sm.body}</p>
        <p className="mt-4 rounded-lg bg-white px-6 py-4 text-left text-sm text-gray-600 shadow-sm ring-1 ring-green-100">
          {sm.also}
        </p>
        <a
          href="mailto:contact@sungene.net?subject=Additional%20Files%20for%20My%20Recommendation%20Request"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Send Files / Additional Info
        </a>
        <div className="mt-4">
          <button
            type="button"
            onClick={handleReset}
            className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-700"
          >
            {sm.anotherBtn}
          </button>
        </div>
      </div>
    )
  }

  // ── Form ───────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot */}
      <div aria-hidden="true" className="hidden">
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* ── SECTION 1 ── */}
      <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">{st.s1}</h2>
        <div className="space-y-5">
          <SelectField
            id="productType"
            label="Product Type *"
            value={form.productType}
            onChange={set('productType')}
            required
            options={[
              'Powder / Flour',
              'Granule / Pellet',
              'Liquid / Sauce',
              'Paste / Cream',
              'Solid / Block',
              'Snack / Food Item',
              'Other',
            ]}
          />

          <RadioField
            id="productState"
            label="Product State *"
            value={form.productState}
            onChange={set('productState')}
            required
            options={['Dry / Free-flowing', 'Sticky / Clumping', 'Viscous / Thick', 'Liquid / Watery']}
          />

          <SelectField
            id="packagingFormat"
            label="Target Packaging Format *"
            value={form.packagingFormat}
            onChange={set('packagingFormat')}
            required
            options={[
              'Pillow Bag (VFFS)',
              'Stand-up Pouch / Doypack',
              'Zipper Pouch',
              'Pre-made Pouch (HFFS)',
              'Bottle / Jar',
              'Cup / Tray',
              'Sachet / Stick Pack',
              'Bulk Bag',
              'Other / Not Sure',
            ]}
          />

          <TextField
            id="fillWeight"
            label="Fill Weight or Volume (e.g. 50g, 500ml)"
            value={form.fillWeight}
            onChange={set('fillWeight')}
            placeholder="e.g. 250g or 500ml"
          />

          <SelectField
            id="targetOutput"
            label="Target Output *"
            value={form.targetOutput}
            onChange={set('targetOutput')}
            required
            options={[
              '< 20 bags/min',
              '20–60 bags/min',
              '60–120 bags/min',
              '> 120 bags/min',
              'Not sure — advise me',
            ]}
          />

          <SelectField
            id="automationLevel"
            label="Automation Level *"
            value={form.automationLevel}
            onChange={set('automationLevel')}
            required
            options={[
              'Single manual-fed machine',
              'Semi-automatic (operator assisted)',
              'Fully automatic line',
              'Turnkey / complete line',
              'Not sure — advise me',
            ]}
          />

          <RadioField
            id="fullLine"
            label="Do you need a full production line?"
            value={form.fullLine}
            onChange={set('fullLine')}
            options={['Single machine only', 'Partial line integration', 'Full turnkey line']}
          />
        </div>
      </div>

      {/* ── SECTION 2 ── */}
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-gray-900">{st.s2}</h2>
        <div className="space-y-5">
          <TextField
            id="name"
            label="Your Name *"
            value={form.name}
            onChange={set('name')}
            required
            autoComplete="name"
          />

          <TextField
            id="company"
            label="Company / Factory Name"
            value={form.company}
            onChange={set('company')}
            autoComplete="organization"
          />

          <TextField
            id="email"
            label="Email *"
            value={form.email}
            onChange={set('email')}
            type="email"
            required
            autoComplete="email"
          />

          <TextField
            id="phone"
            label="WhatsApp / Phone"
            value={form.phone}
            onChange={set('phone')}
            type="tel"
            placeholder="+1 555 123 4567"
            autoComplete="tel"
          />

          <TextField
            id="country"
            label="Country *"
            value={form.country}
            onChange={set('country')}
            required
            placeholder="e.g. Mexico, Nigeria, Vietnam"
            autoComplete="country-name"
          />

          <SelectField
            id="voltage"
            label="Local Voltage & Frequency"
            value={form.voltage}
            onChange={set('voltage')}
            options={[
              '220V/50Hz',
              '380V/50Hz',
              '110V/60Hz',
              '220V/60Hz',
              'Other / Tell me what you need',
            ]}
          />

          <RadioField
            id="materialReq"
            label="Material Requirement"
            value={form.materialReq}
            onChange={set('materialReq')}
            options={[
              'Standard (SUS304)',
              'Food-grade (SUS316L)',
              'Pharmaceutical grade',
              'Not sure',
            ]}
          />

          <SelectField
            id="budget"
            label="Estimated Budget (USD)"
            value={form.budget}
            onChange={set('budget')}
            options={[
              '< $5,000',
              '$5,000–$15,000',
              '$15,000–$50,000',
              '$50,000–$150,000',
              '> $150,000',
              'Prefer not to say',
            ]}
          />

          <SelectField
            id="timeline"
            label="When do you need the machine?"
            value={form.timeline}
            onChange={set('timeline')}
            options={[
              'Urgent (< 1 month)',
              '1–3 months',
              '3–6 months',
              '> 6 months',
              'Planning stage',
            ]}
          />

          <TextareaField
            id="message"
            label="Additional Requirements or Questions"
            value={form.message}
            onChange={set('message')}
            rows={4}
            placeholder="Describe your product, current pain points, or any specific requirements..."
          />
        </div>
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg || 'Something went wrong. Please try again or email contact@sungene.net.'}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-accent-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          st.submit
        )}
      </button>

      {/* Privacy */}
      <p className="mt-3 text-center text-xs text-gray-400">{privacy}</p>
    </form>
  )
}
