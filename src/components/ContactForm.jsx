import { useState } from 'react'
import { Link } from 'react-router-dom'

const EMPTY = { name: '', email: '', phone: '', subject: '', message: '', website: '' }

export default function ContactForm() {
  const [data, setData] = useState(EMPTY)
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const set = (k) => (e) => setData(d => ({ ...d, [k]: e.target.value }))

  const validate = () => {
    const err = {}
    if (!data.name.trim()) err.name = 'Bitte geben Sie Ihren Namen an.'
    if (!data.email.trim()) err.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) err.email = 'Bitte eine gültige E-Mail-Adresse angeben.'
    if (!data.subject.trim()) err.subject = 'Bitte geben Sie einen Betreff an.'
    if (!data.message.trim()) err.message = 'Bitte geben Sie eine Nachricht ein.'
    else if (data.message.trim().length < 10) err.message = 'Die Nachricht ist zu kurz (mind. 10 Zeichen).'
    if (!consent) err.consent = 'Bitte stimmen Sie der Datenschutzerklärung zu.'
    return err
  }

  const submit = async (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-stone-400/30 bg-cream p-10 lg:p-14">
        <div className="section-num">— Gesendet</div>
        <h3 className="font-display font-light text-3xl lg:text-4xl tracking-[-0.02em] text-stone-800 mb-4">
          Vielen Dank für Ihre Nachricht.
        </h3>
        <p className="text-lg text-stone-600 leading-relaxed max-w-md">
          Wir melden uns zeitnah bei Ihnen.
        </p>
      </div>
    )
  }

  const inputClass = (field) =>
    `w-full bg-transparent border-b py-3 text-stone-800 placeholder-stone-400 focus:outline-none transition-colors ${
      errors[field] ? 'border-red-700/60' : 'border-stone-400/40 focus:border-taupe-500'
    }`
  const labelClass = 'block text-[11px] uppercase tracking-widest text-stone-500 mb-2'
  const errClass = 'text-[12px] text-red-700/80 mt-1.5'

  return (
    <form onSubmit={submit} noValidate className="space-y-7">
      {/* Honeypot — für Menschen unsichtbar */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="website">Website (nicht ausfüllen)</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={set('website')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label className={labelClass} htmlFor="cf-name">Name *</label>
          <input id="cf-name" type="text" value={data.name} onChange={set('name')} className={inputClass('name')} />
          {errors.name && <p className={errClass}>{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-phone">Telefon</label>
          <input id="cf-phone" type="tel" value={data.phone} onChange={set('phone')} className={inputClass('phone')} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-email">E-Mail *</label>
        <input id="cf-email" type="email" value={data.email} onChange={set('email')} className={inputClass('email')} />
        {errors.email && <p className={errClass}>{errors.email}</p>}
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-subject">Betreff *</label>
        <input id="cf-subject" type="text" value={data.subject} onChange={set('subject')} className={inputClass('subject')} />
        {errors.subject && <p className={errClass}>{errors.subject}</p>}
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-message">Nachricht *</label>
        <textarea id="cf-message" rows={5} value={data.message} onChange={set('message')} className={`${inputClass('message')} resize-y`} />
        {errors.message && <p className={errClass}>{errors.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer text-sm text-stone-600 leading-relaxed">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 accent-taupe-500 w-4 h-4 shrink-0"
          />
          <span>
            Ich habe die{' '}
            <Link to="/datenschutz" className="text-taupe-700 underline underline-offset-2 hover:text-char">
              Datenschutzerklärung
            </Link>{' '}
            gelesen und stimme zu.
          </span>
        </label>
        {errors.consent && <p className={errClass}>{errors.consent}</p>}
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-700/90 leading-relaxed">
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie direkt an{' '}
          <a href="mailto:info@crx-re.com" className="underline underline-offset-2">info@crx-re.com</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center gap-3 px-8 py-4 bg-taupe-500 hover:bg-taupe-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs uppercase tracking-widest transition-colors"
      >
        {status === 'sending' ? 'Wird gesendet…' : <>Nachricht senden <span>→</span></>}
      </button>
    </form>
  )
}
