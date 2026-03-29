/**
 * Central site configuration.
 * Set NEXT_PUBLIC_SITE_URL in production to override the default domain.
 */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || 'https://sungene.net').replace(/\/$/, '')
