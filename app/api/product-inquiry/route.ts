import nodemailer from 'nodemailer'
import { rateLimit } from '@/lib/rateLimit'
import process from 'process'
import { promises as fs } from 'fs'
import path from 'path'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getText(value: FormDataEntryValue | null, max = 2000): string | undefined {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  if (!trimmed) return undefined
  return trimmed.slice(0, max)
}

function getTransporter() {
  const url = process.env.SMTP_URL
  const host = process.env.MAIL_HOST || process.env.SMTP_HOST
  const port = Number(process.env.MAIL_PORT || process.env.SMTP_PORT || 587)
  const user = process.env.MAIL_USER || process.env.SMTP_USER
  const rawPass = process.env.MAIL_PASS || process.env.SMTP_PASS
  const pass = rawPass ? rawPass.replace(/\s+/g, '') : undefined

  const to = process.env.INQUIRY_TO || 'contact@sungene.net'
  let transporter: any
  let emailEnabled = true

  if (host && user && pass) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 10_000,
    })
  } else if (url) {
    transporter = nodemailer.createTransport(url)
  } else {
    emailEnabled = false
  }

  const fromName = process.env.MAIL_FROM || 'SunGene Service Team'
  const fromAddr = user ? `"${fromName}" <${user}>` : 'no-reply@example.com'

  return { transporter, fromAddr, to, emailEnabled }
}

function jsonFail(status: number, error: string) {
  return Response.json({ ok: false, error }, { status })
}

export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0] || 'unknown'
  const reqId = `PI-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`

  const rl = rateLimit(`product-inquiry:${ip}`, 5, 60_000)
  if (!rl.ok) return jsonFail(429, 'Too Many Requests')

  let formData: FormData
  try {
    formData = await req.formData()
  } catch {
    return jsonFail(400, 'Invalid form data')
  }

  // Honeypot check
  const website = formData.get('website')
  if (typeof website === 'string' && website.trim().length > 0) {
    return Response.json({ ok: true })
  }

  // Extract fields
  const name = getText(formData.get('name'), 120)
  const email = getText(formData.get('email'), 200)?.toLowerCase()
  const productType = getText(formData.get('productType'), 500)
  const targetOutput = getText(formData.get('targetOutput'), 200)
  const packageType = getText(formData.get('packageType'), 300)
  const country = getText(formData.get('country'), 100)
  const sourceMachine = getText(formData.get('sourceMachine'), 50)
  const photoEntry = formData.get('photo')

  // Validate required fields
  if (!name) return jsonFail(400, 'Name is required')
  if (!email || !emailRegex.test(email)) return jsonFail(400, 'Valid email is required')
  if (!productType) return jsonFail(400, 'Product type is required')

  // Handle photo attachment
  let photoAttachment: { filename: string; content: Buffer } | null = null
  if (photoEntry instanceof File && photoEntry.size > 0) {
    try {
      const arrayBuffer = await photoEntry.arrayBuffer()
      photoAttachment = {
        filename: photoEntry.name || 'product-photo.jpg',
        content: Buffer.from(arrayBuffer),
      }
    } catch {
      // If photo fails to process, continue without it
      photoAttachment = null
    }
  }

  const id = `PI-${Date.now().toString(36)}`
  const submittedAt = new Date().toISOString()

  // Persist to NDJSON
  try {
    const record = {
      id,
      reqId,
      date: submittedAt,
      name,
      email,
      productType,
      targetOutput: targetOutput || null,
      packageType: packageType || null,
      country: country || null,
      sourceMachine: sourceMachine || null,
      hasPhoto: photoAttachment !== null,
    }
    const ndjsonPath = path.join(process.cwd(), 'data', 'product-inquiries.ndjson')
    await fs.mkdir(path.dirname(ndjsonPath), { recursive: true })
    await fs.appendFile(ndjsonPath, `${JSON.stringify(record)}\n`, 'utf8')
  } catch (err) {
    console.error('[product-inquiry] persist failed:', err)
  }

  const { transporter, fromAddr, to, emailEnabled } = getTransporter()

  if (!emailEnabled) {
    return Response.json({ ok: true, id, reqId, emailEnabled: false })
  }

  // Build admin email
  const adminText =
`New Product Inquiry — ID: ${id}
ReqID: ${reqId}
Submitted: ${submittedAt}

=== CONTACT ===
Name:          ${name}
Email:         ${email}
Country:       ${country || '-'}

=== PRODUCT DETAILS ===
Product:       ${productType}
Target Output: ${targetOutput || '-'}
Package Type:  ${packageType || '-'}
Source:        ${sourceMachine || '-'}

${photoAttachment ? `[Photo attached: ${photoAttachment.filename}]` : '[No photo attached]'}
`

  const adminMailOptions: any = {
    to,
    from: fromAddr,
    subject: `New Product Inquiry #${id} — ${name} (${productType})`,
    text: adminText,
    replyTo: email,
    headers: { 'X-Request-ID': reqId },
  }

  if (photoAttachment) {
    adminMailOptions.attachments = [photoAttachment]
  }

  // Send admin email
  let adminOk = false
  try {
    const info = await transporter.sendMail(adminMailOptions)
    console.log('[product-inquiry] admin email sent:', info.messageId)
    adminOk = true
  } catch (err) {
    console.error('[product-inquiry] admin email failed:', err)
    return jsonFail(500, 'Email send failed')
  }

  if (!adminOk) {
    return jsonFail(500, 'Email send failed')
  }

  // Send acknowledgement to customer (fire-and-forget)
  const ackText =
`Hi ${name},

Thank you for reaching out to SunGene!

We've received your product inquiry for "${productType}" (Ref: ${id}).

Our technical team will review your requirements and send you a personalized machine recommendation within 24 hours.

Here's what we received:
- Product: ${productType}
- Target Output: ${targetOutput || 'Not specified'}
- Package Type: ${packageType || 'Not specified'}

If you have more details to share (additional photos, drawings, specifications), feel free to reply to this email.

Best regards,
SunGene Service Team
Email: contact@sungene.net
Tel: +886 4 3703 2705
WhatsApp: +86 18144132078
LINE: @sungene

---

您好 ${name}，

感謝您聯繫 SunGene！

我們已收到您的產品詢問（編號：${id}），產品：「${productType}」。

我們的技術團隊將在 24 小時內審閱您的需求，並向您提供個性化的機器推薦。

如有更多資料（照片、圖紙、規格），歡迎直接回覆此郵件。

此致
SunGene 服務團隊`

  void transporter.sendMail({
    to: email,
    from: fromAddr,
    subject: `We received your product inquiry (Ref: ${id}) | 已收到您的產品詢問`,
    text: ackText,
    headers: { 'X-Request-ID': reqId },
  }).catch((err: unknown) => {
    console.error('[product-inquiry] ack email failed:', err)
  })

  return Response.json({ ok: true, id, reqId })
}
