// Client-side reCAPTCHA v3 helper. Returns a token for the given action,
// or undefined if reCAPTCHA isn't loaded (form still submits — server falls
// back to no-captcha verification when RECAPTCHA_SECRET is unset).
//
// Safe to call from any client component:
//   const token = await getRecaptchaToken('inquiry')

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, opts: { action: string }) => Promise<string>
    }
  }
}

export async function getRecaptchaToken(action: string): Promise<string | undefined> {
  if (typeof window === 'undefined') return undefined
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY
  if (!siteKey || !window.grecaptcha) return undefined
  try {
    return await new Promise<string>((resolve, reject) => {
      window.grecaptcha!.ready(async () => {
        try {
          const token = await window.grecaptcha!.execute(siteKey, { action })
          resolve(token)
        } catch (e) {
          reject(e)
        }
      })
    })
  } catch {
    return undefined
  }
}
