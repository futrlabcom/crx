import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getConsent, setConsent, loadGA, trackPageview, clearGACookies } from '../lib/analytics'

// DSGVO/TTDSG-konformer Cookie-Consent:
// - Banner erscheint beim ersten Besuch (consent === null)
// - "Akzeptieren" und "Ablehnen" gleichwertig (gleiche Größe/Gewicht)
// - Entscheidung in localStorage, kein Banner-Spam bei Reload
// - GA lädt NUR nach "granted"
// - Footer-Link "Cookie-Einstellungen" feuert window-Event 'crx:open-cookie-settings'
//   → Banner öffnet erneut (Widerruf jederzeit)
export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  // Initial: Consent-Status prüfen
  useEffect(() => {
    const consent = getConsent()
    if (consent === 'granted') {
      loadGA()
    } else if (consent === null) {
      setVisible(true)
    }
  }, [])

  // Footer-Link öffnet Banner erneut
  useEffect(() => {
    const open = () => setVisible(true)
    window.addEventListener('crx:open-cookie-settings', open)
    return () => window.removeEventListener('crx:open-cookie-settings', open)
  }, [])

  // SPA-Pageview bei Routenwechsel (greift nur wenn GA geladen ist)
  useEffect(() => {
    trackPageview(pathname)
  }, [pathname])

  const accept = () => {
    setConsent('granted')
    loadGA()
    trackPageview(pathname)
    setVisible(false)
  }

  const decline = () => {
    setConsent('denied')
    clearGACookies()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-[100] bg-ink border-t border-white/15 text-white shadow-[0_-8px_40px_rgba(0,0,0,0.5)]"
      style={{ backgroundColor: '#0A0907' }}
    >
      <div className="container-crx px-6 sm:px-8 lg:px-12 py-5 lg:py-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
        <p className="text-sm leading-relaxed text-white/90 max-w-2xl">
          Wir verwenden Cookies, um die Nutzung unserer Website zu analysieren und zu verbessern. Sie entscheiden, ob Sie dem zustimmen.{' '}
          <Link to="/datenschutz" className="text-taupe-100 underline underline-offset-2 hover:text-white transition-colors">
            Mehr in der Datenschutzerklärung
          </Link>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 lg:ml-auto shrink-0">
          <button
            type="button"
            onClick={decline}
            className="w-full sm:w-auto px-6 py-3.5 border border-white/25 hover:border-white/60 text-white text-xs uppercase tracking-widest transition-colors"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={accept}
            className="w-full sm:w-auto px-6 py-3.5 bg-taupe-500 hover:bg-taupe-700 text-white text-xs uppercase tracking-widest transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
