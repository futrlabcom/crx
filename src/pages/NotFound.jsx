import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  // 404-Seiten nicht indexieren (SPA liefert technisch 200 — noindex verhindert,
  // dass Google leere Fehlerseiten in den Index nimmt).
  useEffect(() => {
    const robots = document.querySelector('meta[name="robots"]')
    const prev = robots?.getAttribute('content')
    if (robots) robots.setAttribute('content', 'noindex, follow')
    document.title = '404 – Seite nicht gefunden · CRX Real Estate'
    return () => {
      if (robots && prev) robots.setAttribute('content', prev)
    }
  }, [])

  return (
    <section className="bg-ink text-white min-h-[80vh] flex items-center px-8 lg:px-12 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,152,120,0.14) 0%, transparent 60%)' }}
      />
      <div className="absolute inset-0 grid-overlay pointer-events-none opacity-40" />

      <div className="container-crx relative z-10 pt-24">
        <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-6">
          CRX <span className="text-taupe-100 mx-2">/</span> Fehler 404
        </div>
        <h1
          className="font-display leading-[0.95] mb-8"
          style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 600, letterSpacing: '-0.03em' }}
        >
          Seite nicht<br />
          <em className="not-italic text-taupe-100" style={{ fontWeight: 300 }}>gefunden.</em>
        </h1>
        <p className="text-lg leading-relaxed text-white/70 max-w-md mb-10">
          Die gewünschte Seite existiert nicht oder wurde verschoben.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-taupe-500 hover:bg-taupe-700 text-white text-xs uppercase tracking-widest transition-colors"
          >
            Zurück zur Startseite <span>→</span>
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-white/55">
            <Link to="/projekte" className="hover:text-taupe-100 transition-colors">Projekte</Link>
            <Link to="/unternehmen" className="hover:text-taupe-100 transition-colors">Unternehmen</Link>
            <Link to="/investments" className="hover:text-taupe-100 transition-colors">Investments</Link>
            <Link to="/ankaufsprofil" className="hover:text-taupe-100 transition-colors">Ankaufsprofil</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
