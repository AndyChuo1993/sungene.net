// GA4 client-side event tracking utility
export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    ;(window as any).gtag('event', eventName, params)
  }
}

export function trackCTAClick(ctaLabel: string, sourcePage: string) {
  trackEvent('cta_click', { cta_label: ctaLabel, source_page: sourcePage })
}

export function trackFormSubmit(formType: string, sourcePage: string) {
  trackEvent('form_submit', { form_type: formType, source_page: sourcePage })
}
