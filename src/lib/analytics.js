// GA4 — DSGVO-konform: lädt NUR nach erteilter Einwilligung.
//
// Enzo: Measurement-ID aus GA4 → Verwaltung → Datenströme → Web → Mess-ID
// hier eintragen. Solange der Platzhalter steht, wird GA NICHT geladen
// (loadGA bricht ab), damit kein leeres/falsches Property angesprochen wird.
export const GA_MEASUREMENT_ID = 'G-XEDEYVVD4Z'

const CONSENT_KEY = 'crx-cookie-consent' // 'granted' | 'denied'

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY) // null | 'granted' | 'denied'
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    /* localStorage nicht verfügbar — ignorieren */
  }
}

let gaLoaded = false

export function loadGA() {
  if (gaLoaded) return
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    // Noch keine echte ID hinterlegt — nichts laden.
    return
  }
  gaLoaded = true

  const s = document.createElement('script')
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  s.async = true
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true })
}

// SPA-Pageview bei Routenwechsel — nur wenn GA geladen ist.
export function trackPageview(path) {
  if (!gaLoaded || typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', { page_path: path })
}

// Bei Ablehnung: vorhandene GA-Cookies entfernen.
export function clearGACookies() {
  document.cookie.split(';').forEach(c => {
    const name = c.split('=')[0].trim()
    if (name.startsWith('_ga') || name === '_gid' || name === '_gat') {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${location.hostname}`
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
    }
  })
}
