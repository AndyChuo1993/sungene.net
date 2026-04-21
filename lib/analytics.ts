// GA4 client-side event tracking utility
// All events carry: page_type, lang, content_type, product_cluster, cta_position, utm_*

function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const p = new URLSearchParams(window.location.search)
  const result: Record<string, string> = {}
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  keys.forEach(k => { const v = p.get(k); if (v) result[k] = v })
  return result
}

function gtag(event: string, params: Record<string, string | number>) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    ;(window as any).gtag('event', event, params)
  }
}

function shouldSendInternalAnalytics() {
  return typeof window !== 'undefined' && process.env.NEXT_PUBLIC_INTERNAL_ANALYTICS === '1'
}

function sanitizeInternalParams(params?: Record<string, string | number>) {
  if (!params) return undefined
  const blocked = /email|phone|message|name|company/i
  const safe: Record<string, string | number> = {}
  for (const [k, v] of Object.entries(params)) {
    if (blocked.test(k)) continue
    if (typeof v === 'number') {
      if (Number.isFinite(v)) safe[k] = v
      continue
    }
    const s = String(v)
    safe[k] = s.length > 200 ? s.slice(0, 200) : s
  }
  return safe
}

function sendInternalAnalytics(payload: { eventName: string; params?: Record<string, string | number> }) {
  if (!shouldSendInternalAnalytics()) return
  try {
    const body = {
      eventName: payload.eventName,
      params: sanitizeInternalParams(payload.params),
      url: window.location.href,
      referrer: document.referrer || undefined,
      clientTime: new Date().toISOString(),
    }

    const data = JSON.stringify(body)
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([data], { type: 'application/json' })
      navigator.sendBeacon('/api/analytics', blob)
      return
    }

    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: data,
      keepalive: true,
    }).catch(() => {})
  } catch {
    return
  }
}

export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  gtag(eventName, { ...getUtmParams(), ...(params || {}) })
  sendInternalAnalytics({ eventName, params })
}

// ─── Page view (supplement Next.js auto pageview) ────────────────────────────
export function trackPageView(params: {
  page_type: string
  lang: string
  content_type?: string
  product_cluster?: string
}) {
  gtag('page_view', { ...getUtmParams(), ...params })
  sendInternalAnalytics({ eventName: 'page_view', params })
}

// ─── Machine page CTA click ───────────────────────────────────────────────────
export function trackMachineCtaClick(params: {
  product_cluster: string   // e.g. 'pouch_packing' | 'powder_filling' | etc.
  cta_position: string      // e.g. 'hero' | 'cta_band' | 'sidebar' | 'inline'
  cta_label: string
  lang: string
  page_type?: string
}) {
  gtag('machine_cta_click', { page_type: 'machine', ...getUtmParams(), ...params })
}

// ─── Recommend flow ───────────────────────────────────────────────────────────
export function trackRecommendStart(params: {
  lang: string
  source_page?: string
  cta_position?: string
}) {
  gtag('recommend_start', { page_type: 'recommend', content_type: 'rfq_form', ...getUtmParams(), ...params })
}

export function trackRecommendSubmit(params: {
  lang: string
  product_type?: string
  product_state?: string
  packaging_format?: string
  automation_level?: string
  budget?: string
  country?: string
}) {
  gtag('recommend_submit', { page_type: 'recommend', content_type: 'rfq_form', ...getUtmParams(), ...params })
}

// ─── Generic form events ──────────────────────────────────────────────────────
export function trackFormSubmitSuccess(params: {
  form_type: string         // 'inquiry' | 'product_inquiry' | 'recommend'
  lang: string
  page_type?: string
  product_cluster?: string
  ref_id?: string
}) {
  gtag('form_submit_success', { ...getUtmParams(), ...params })
}

export function trackFormSubmitFail(params: {
  form_type: string
  lang: string
  error_type?: string       // 'validation' | 'recaptcha' | 'server'
  page_type?: string
}) {
  gtag('form_submit_fail', { ...getUtmParams(), ...params })
}

// ─── Article / resource CTA ───────────────────────────────────────────────────
export function trackArticleCtaClick(params: {
  article_slug: string
  cta_position: string      // 'inline' | 'bottom' | 'sidebar'
  cta_label: string
  lang: string
  content_type?: string     // 'comparison' | 'selection_guide' | 'application_guide' | 'buying_guide'
  product_cluster?: string
}) {
  gtag('article_cta_click', { page_type: 'article', ...getUtmParams(), ...params })
}

// ─── WhatsApp / contact clicks ────────────────────────────────────────────────
export function trackWhatsappClick(params: {
  lang: string
  source_page: string
  cta_position?: string
  product_cluster?: string
}) {
  gtag('whatsapp_click', { content_type: 'contact', ...getUtmParams(), ...params })
}

export function trackContactClick(params: {
  lang: string
  source_page: string
  contact_type: string      // 'email' | 'phone' | 'form'
  cta_position?: string
}) {
  gtag('contact_click', { content_type: 'contact', ...getUtmParams(), ...params })
}

// ─── Legacy aliases (keep backward-compat) ───────────────────────────────────
export function trackCTAClick(ctaLabel: string, sourcePage: string) {
  gtag('cta_click', { cta_label: ctaLabel, source_page: sourcePage, ...getUtmParams() })
}

export function trackFormSubmit(formType: string, sourcePage: string) {
  gtag('form_submit', { form_type: formType, source_page: sourcePage, ...getUtmParams() })
}
