'use client'

// Simple analytics tracking for machinery product lines
export function trackEvent(category: string, action: string, label?: string, value?: number) {
  try {
    // Send to our analytics endpoint
    const payload = {
      category,
      action,
      label,
      value,
      page: typeof window !== 'undefined' ? window.location.pathname : '',
      timestamp: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    }

    // Non-blocking beacon
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics', JSON.stringify(payload))
    } else if (typeof fetch !== 'undefined') {
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {}) // silently fail
    }

    // Also send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  } catch {
    // Never throw from analytics
  }
}

// Track page view with product line context
export function trackPageView(productLine?: string) {
  trackEvent('page_view', 'view', productLine || 'general')
}

// Track CTA click
export function trackCTAClick(ctaName: string, productLine?: string) {
  trackEvent('cta_click', ctaName, productLine)
}

// Track form submission
export function trackFormSubmission(formType: string, productLine?: string) {
  trackEvent('form_submit', formType, productLine)
}

// Track dwell time (call on unmount)
export function trackDwellTime(productLine: string, seconds: number) {
  trackEvent('dwell_time', productLine, undefined, Math.round(seconds))
}
