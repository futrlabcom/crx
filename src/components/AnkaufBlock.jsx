import { ankaufKriterien } from '../data/projects'

export default function AnkaufBlock() {
  return (
    <section id="ankauf" className="bg-ink text-white py-32 px-8 lg:px-12 relative overflow-hidden">
      <div
        className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,152,120,0.15) 0%, transparent 70%)' }}
      />
      <div className="container-crx grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        <div>
          <div className="section-num !text-taupe-100">— 03 / Ankaufsprofil</div>
          <h2 className="display-h2 text-4xl md:text-5xl lg:text-6xl mb-8">
            Sie haben ein Grundstück oder <em className="text-taupe-100">Bestandsobjekt?</em>
          </h2>
          <p className="text-lg leading-relaxed text-white/70 mb-10 max-w-md">
            Wir kaufen diskret und professionell – Wohn- und Gewerbeimmobilien ab 5.000 m² BGF in Berlin und ausgewählten Großstädten. Erstgespräch innerhalb von 48 Stunden.
          </p>
          <a
            href={`mailto:info@crx-re.com?subject=Objekteinreichung`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-taupe-500 hover:bg-taupe-700 text-white text-xs uppercase tracking-widest transition-colors"
          >
            Objekt einreichen <span>→</span>
          </a>
        </div>

        <div className="lg:border-l lg:border-white/10 lg:pl-12">
          <div className="text-[10px] uppercase tracking-widest text-white/40 mb-6">Unsere Kriterien</div>
          {ankaufKriterien.map((c, i) => (
            <div
              key={i}
              className={`flex justify-between items-baseline py-5 ${
                i < ankaufKriterien.length - 1 ? 'border-b border-white/[0.08]' : ''
              }`}
            >
              <span className="text-sm text-white/55">{c.key}</span>
              <span className="font-display text-lg">{c.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
