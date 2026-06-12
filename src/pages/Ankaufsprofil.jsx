import { Link } from 'react-router-dom'
import { ankaufProfile, ankaufProzess, contact } from '../data/projects'
import PageHero from '../components/PageHero'

export default function Ankaufsprofil() {
  return (
    <>
      {/* HERO */}
      <PageHero
        breadcrumb="CRX / Ankaufsprofil"
        titleLine1="Was wir"
        titleLine2="suchen."
        subtitle="CRX kauft diskret und entscheidet schnell. Wir suchen Entwicklungsgrundstücke und vermietete Bestandsobjekte – langfristig, ohne Umwege, mit klarem Profil."
      >
        <img
          src="/heroes/ankaufsprofil.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,9,7,0.55) 0%, rgba(10,9,7,0.3) 35%, rgba(10,9,7,0.92) 100%)',
          }}
        />
        <div className="absolute inset-0 grid-overlay pointer-events-none opacity-50" />
      </PageHero>

      {/* PROFILE CARDS — Neubau / Bestand */}
      <section className="bg-bone py-24 lg:py-32 px-8 lg:px-12">
        <div className="container-crx">
          <div className="mb-16 max-w-2xl">
            <div className="section-num">— 01 / Zwei Profile</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px]">
              Entwickeln <em className="text-taupe-500">und</em> halten.
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 mt-6">
              CRX kauft diskret und entscheidet schnell. Wir suchen Entwicklungsgrundstücke und Bestandsobjekte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[ankaufProfile.neubau, ankaufProfile.bestand].map((p, i) => (
              <div key={i} className="bg-cream p-10 lg:p-14">
                <div className="text-[11px] tracking-widest uppercase text-taupe-500 mb-4">
                  {i === 0 ? '01 · Entwicklung' : '02 · Bestand'}
                </div>
                <h3 className="font-display font-light text-3xl lg:text-4xl tracking-[-0.02em] text-stone-800 mb-5">
                  {p.title}
                </h3>
                <p className="text-base lg:text-lg text-stone-600 leading-relaxed mb-10 max-w-md">
                  {p.intro}
                </p>
                <dl className="space-y-0">
                  {p.criteria.map(c => (
                    <div key={c.key} className="grid grid-cols-[140px_1fr] gap-4 py-4 border-t border-stone-400/20">
                      <dt className="text-[11px] uppercase tracking-widest text-stone-400 pt-1">{c.key}</dt>
                      <dd className="text-[15px] text-stone-800">{c.val}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — 4 steps */}
      <section className="bg-cream py-24 lg:py-32 px-8 lg:px-12">
        <div className="container-crx">
          <div className="mb-16 max-w-2xl">
            <div className="section-num">— 02 / Ablauf</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px]">
              Vier Schritte, <em className="text-taupe-500">kurze Wege.</em>
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 mt-6 max-w-xl">
              Wir entscheiden schnell und zuverlässig. Vom Erstkontakt bis zum Notartermin vergehen typischerweise acht bis zwölf Wochen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-400/20 border border-stone-400/20">
            {ankaufProzess.map(s => (
              <div key={s.step} className="bg-cream p-8 lg:p-10">
                <div className="font-display font-light text-5xl lg:text-6xl text-taupe-500 tracking-[-0.04em] mb-6 leading-none">
                  {s.step}
                </div>
                <h4 className="font-display text-xl text-stone-800 mb-3 tracking-[-0.01em]">
                  {s.title}
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-ink text-white py-28 lg:py-36 px-8 lg:px-12 relative overflow-hidden text-center">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,152,120,0.16) 0%, transparent 60%)' }}
        />
        <div className="container-crx relative z-10 max-w-3xl mx-auto">
          <div className="section-num !text-taupe-100">— 03 / Einreichen</div>
          <h2 className="display-h2 text-4xl md:text-5xl lg:text-[64px] mb-8">
            Wir freuen uns auf <em className="text-taupe-100">Ihr Objekt.</em>
          </h2>
          <p className="text-lg leading-relaxed text-white/70 mb-10 max-w-xl mx-auto">
            Schicken Sie Exposé oder Eckdaten direkt an unser Team.
          </p>
          <div className="flex justify-center items-center mb-10">
            <a
              href={`mailto:${contact.email}?subject=Objekteinreichung`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-taupe-500 hover:bg-taupe-700 text-white text-xs uppercase tracking-widest transition-colors"
            >
              INFO@CRX-RE.COM <span>→</span>
            </a>
          </div>
          <Link
            to="/projekte"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/55 hover:text-taupe-100 transition-colors"
          >
            ← Zurück zu den Projekten
          </Link>
        </div>
      </section>
    </>
  )
}
