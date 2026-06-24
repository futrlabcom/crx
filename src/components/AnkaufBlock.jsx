import { Link } from 'react-router-dom'
import { ankaufProfile } from '../data/projects'

export default function AnkaufBlock() {
  return (
    <section id="ankauf" className="bg-ink text-white py-28 lg:py-36 px-8 lg:px-12 relative overflow-hidden">
      <div
        className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,152,120,0.15) 0%, transparent 70%)' }}
      />

      <div className="container-crx relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="section-num !text-taupe-100">— Ankaufsprofil</div>
          <h2 className="display-h2 text-4xl md:text-5xl lg:text-6xl mb-8">
            Sie haben ein Grundstück oder <em className="text-taupe-100">Bestandsobjekt?</em>
          </h2>
          <p className="text-lg leading-relaxed text-white/70 max-w-2xl">
            CRX kauft diskret und entscheidet schnell. Wir suchen Entwicklungsgrundstücke und Bestandsobjekte.
          </p>
        </div>

        {/* Two-column criteria: Neubau / Bestand */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.08] mb-12 lg:mb-16">
          {[ankaufProfile.neubau, ankaufProfile.bestand].map((p, i) => (
            <div key={i} className="bg-ink p-8 lg:p-12">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-[10px] tracking-widest uppercase text-taupe-100">
                  {i === 0 ? '01 · Entwicklung' : '02 · Bestand'}
                </span>
              </div>
              <h3 className="font-display font-light text-2xl lg:text-3xl tracking-[-0.02em] mb-4">
                {p.title}
              </h3>
              <p className="text-sm lg:text-base text-white/65 leading-relaxed mb-8 max-w-md">
                {p.intro}
              </p>
              <dl className="space-y-3">
                {p.criteria.map(c => (
                  <div key={c.key} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-4 gap-y-1 py-2 border-t border-white/[0.06] first:border-t-0">
                    <dt className="text-xs uppercase tracking-widest text-white/40 sm:pt-0.5">{c.key}</dt>
                    <dd className="text-[15px] text-white/90 break-words">{c.val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-sm text-white/55 max-w-md">
            Diskretion garantiert. Auf Wunsch unter NDA. Antwort binnen 48 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-taupe-500 hover:bg-taupe-700 text-white text-xs uppercase tracking-widest transition-colors"
            >
              Objekt einreichen <span>→</span>
            </Link>
            <Link
              to="/ankaufsprofil"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-white/20 hover:border-taupe-100 hover:text-taupe-100 text-white text-xs uppercase tracking-widest transition-colors"
            >
              Ausführliches Profil <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
