import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Vercel parst JSON-Body automatisch; Fallback falls String
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
  const { name, email, phone, subject, message, website } = body

  // Honeypot — wenn 'website' gefüllt ist, ist es ein Bot: still ok, keine Mail
  if (website) {
    return res.status(200).json({ ok: true })
  }

  // Pflichtfeld-Validierung
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Bitte alle Pflichtfelder ausfüllen.' })
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ error: 'Bitte eine gültige E-Mail-Adresse angeben.' })
  }
  if (String(message).trim().length < 10) {
    return res.status(400).json({ error: 'Die Nachricht ist zu kurz.' })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY fehlt in den Environment Variables.')
    return res.status(500).json({ error: 'Versand momentan nicht möglich. Bitte schreiben Sie an info@crx-re.com.' })
  }

  try {
    await resend.emails.send({
      from: 'CRX Kontaktformular <kontakt@send.crx-re.com>',
      to: 'info@crx-re.com',
      replyTo: email,
      subject: `Kontaktanfrage: ${subject}`,
      text:
        `Neue Kontaktanfrage über crx-re.com\n\n` +
        `Name: ${name}\n` +
        `E-Mail: ${email}\n` +
        `Telefon: ${phone || '—'}\n` +
        `Betreff: ${subject}\n\n` +
        `Nachricht:\n${message}\n`,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Versand fehlgeschlagen. Bitte später erneut versuchen.' })
  }
}
