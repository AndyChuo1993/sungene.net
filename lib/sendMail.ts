import nodemailer from 'nodemailer'
import process from 'process'

type MailAttachment = { filename: string; content: Buffer }

export type SendMailOptions = {
  to: string
  from: string
  subject: string
  text: string
  replyTo?: string
  headers?: Record<string, string>
  attachments?: MailAttachment[]
}

export type SendMailResult = { ok: boolean; messageId?: string; error?: string; provider: 'resend' | 'smtp' | 'none' }

/**
 * Unified mail sender.
 *
 * Routing:
 *   - If RESEND_API_KEY is set → send via Resend HTTP API (preferred).
 *     Requires the "from" domain to be a verified Resend domain so DKIM
 *     aligns and Gmail/Outlook DMARC passes.
 *   - Otherwise → legacy nodemailer SMTP (Gmail AUTH). This path produced
 *     DMARC misalignment on Cloud Run (header_from=sungene.net vs
 *     DKIM d=gmail.com) and should only be used as a dev fallback.
 */
export async function sendMail(opts: SendMailOptions): Promise<SendMailResult> {
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) return sendViaResend(opts, resendKey)
  return sendViaSmtp(opts)
}

async function sendViaResend(opts: SendMailOptions, key: string): Promise<SendMailResult> {
  const body: Record<string, unknown> = {
    from: opts.from,
    to: [opts.to],
    subject: opts.subject,
    text: opts.text,
  }
  if (opts.replyTo) body.reply_to = opts.replyTo
  if (opts.headers) body.headers = opts.headers
  if (opts.attachments && opts.attachments.length > 0) {
    body.attachments = opts.attachments.map((a) => ({
      filename: a.filename,
      content: a.content.toString('base64'),
    }))
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      const errText = await res.text().catch(() => '')
      return { ok: false, error: `resend ${res.status}: ${errText.slice(0, 300)}`, provider: 'resend' }
    }
    const json = (await res.json().catch(() => ({}))) as { id?: string }
    return { ok: true, messageId: json.id, provider: 'resend' }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err), provider: 'resend' }
  }
}

function getSmtpTransporter() {
  const url = process.env.SMTP_URL
  const host = process.env.MAIL_HOST || process.env.SMTP_HOST
  const port = Number(process.env.MAIL_PORT || process.env.SMTP_PORT || 587)
  const user = process.env.MAIL_USER || process.env.SMTP_USER
  const rawPass = process.env.MAIL_PASS || process.env.SMTP_PASS
  const pass = rawPass ? rawPass.replace(/\s+/g, '') : undefined

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 10_000,
    })
  }
  if (url) return nodemailer.createTransport(url)
  return null
}

async function sendViaSmtp(opts: SendMailOptions): Promise<SendMailResult> {
  const transporter = getSmtpTransporter()
  if (!transporter) return { ok: false, error: 'no SMTP configured', provider: 'none' }
  try {
    const info = await transporter.sendMail({
      to: opts.to,
      from: opts.from,
      subject: opts.subject,
      text: opts.text,
      replyTo: opts.replyTo,
      headers: opts.headers,
      attachments: opts.attachments,
    })
    return { ok: true, messageId: info.messageId, provider: 'smtp' }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err), provider: 'smtp' }
  }
}

/**
 * Build the "from" address used in outgoing mail.
 *
 * When Resend is active, RESEND_FROM must be a mailbox at a verified Resend
 * domain (e.g. contact@sungene.net). Display name falls back to MAIL_FROM_NAME
 * or MAIL_FROM for backward compat.
 */
export function resolveFromAddress(): string {
  const fromName = process.env.MAIL_FROM_NAME || process.env.MAIL_FROM || 'SunGene Service Team'
  const displayName = fromName.includes('@') ? 'SunGene Service Team' : fromName
  const resendFrom = process.env.RESEND_FROM
  if (process.env.RESEND_API_KEY && resendFrom) {
    return `"${displayName}" <${resendFrom}>`
  }
  const smtpUser = process.env.MAIL_USER || process.env.SMTP_USER
  if (smtpUser) return `"${displayName}" <${smtpUser}>`
  return 'no-reply@example.com'
}

export function resolveInquiryTo(): string {
  return process.env.INQUIRY_TO || 'contact@sungene.net'
}

export function isMailEnabled(): boolean {
  if (process.env.RESEND_API_KEY) return true
  const host = process.env.MAIL_HOST || process.env.SMTP_HOST
  const user = process.env.MAIL_USER || process.env.SMTP_USER
  const pass = process.env.MAIL_PASS || process.env.SMTP_PASS
  const url = process.env.SMTP_URL
  return Boolean((host && user && pass) || url)
}
