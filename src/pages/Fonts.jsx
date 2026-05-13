const CANDIDATES = [
  {
    id: 'geist',
    name: 'Geist',
    note: 'Contemporary, slightly tech-edged. Vercel-era precision. Sharp terminals, neutral.',
    family: '"Geist", sans-serif',
    h1Weight: 400,
    italicWeight: 300,
    tracking: '-0.035em',
  },
  {
    id: 'inter-tight',
    name: 'Inter Tight',
    note: 'Swiss-neutral, refined, condensed Inter. Workhorse for premium minimal.',
    family: '"Inter Tight", sans-serif',
    h1Weight: 400,
    italicWeight: 300,
    tracking: '-0.03em',
  },
  {
    id: 'manrope',
    name: 'Manrope',
    note: 'Geometric, warm. Slight character without being decorative. Premium-friendly.',
    family: '"Manrope", sans-serif',
    h1Weight: 400,
    italicWeight: 400,
    tracking: '-0.035em',
  },
  {
    id: 'instrument-sans',
    name: 'Instrument Sans',
    note: 'Modernist with subtle quirks. Editorial sans, less corporate than Inter.',
    family: '"Instrument Sans", sans-serif',
    h1Weight: 500,
    italicWeight: 400,
    tracking: '-0.035em',
  },
]

export default function Fonts() {
  return (
    <div className="bg-bone min-h-screen pt-28 pb-32">
      <div className="container-crx px-8 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <div className="section-num">— Font Preview · Sans</div>
          <h1 className="text-4xl md:text-5xl text-stone-800 mb-4" style={{ fontFamily: '"Inter Tight", sans-serif', fontWeight: 500, letterSpacing: '-0.025em' }}>
            Display font candidates — sans only
          </h1>
          <p className="text-stone-600 leading-relaxed" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
            Vier freie Sans-Schriften für Hero und Headlines. Gleiche Größen, gleicher Inhalt. Wähle, welche zu CRX passt.
          </p>
        </div>

        <div className="space-y-20">
          {CANDIDATES.map(c => (
            <article key={c.id} className="border-t border-stone-800/15 pt-10">
              <header className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-12">
                <div>
                  <div className="text-[11px] tracking-widest uppercase text-taupe-700 mb-2" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                    {c.id.toUpperCase()}
                  </div>
                  <h2 className="text-2xl text-stone-800" style={{ fontFamily: c.family, fontWeight: c.h1Weight, letterSpacing: c.tracking }}>
                    {c.name}
                  </h2>
                </div>
                <p className="text-sm text-stone-600 max-w-sm md:text-right" style={{ fontFamily: '"Inter Tight", sans-serif' }}>{c.note}</p>
              </header>

              {/* Hero */}
              <div className="bg-ink text-white p-10 lg:p-16 mb-10">
                <div className="text-[13px] tracking-widest uppercase text-white/55 mb-9 flex items-center gap-3" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                  <span className="w-8 h-px bg-taupe-300" />
                  Projektentwicklung · Berlin · Seit 2014
                </div>
                <h3
                  className="text-5xl md:text-7xl lg:text-[96px] leading-[0.95]"
                  style={{ fontFamily: c.family, fontWeight: c.h1Weight, letterSpacing: c.tracking }}
                >
                  Räume, die<br />
                  <span className="text-taupe-100" style={{ fontWeight: c.italicWeight }}>Generationen</span><br />
                  verbinden.
                </h3>
              </div>

              {/* Section H2 */}
              <div className="bg-cream p-10 lg:p-16 mb-10">
                <div className="section-num" style={{ fontFamily: '"Inter Tight", sans-serif' }}>— 01 / Unternehmen</div>
                <h3
                  className="text-3xl md:text-4xl lg:text-[56px] leading-[1.05] text-stone-800 mb-6"
                  style={{ fontFamily: c.family, fontWeight: c.h1Weight, letterSpacing: c.tracking }}
                >
                  Wir bauen für das,{' '}
                  <span className="text-taupe-500" style={{ fontWeight: c.italicWeight }}>was bleibt.</span>
                </h3>
                <p className="text-lg leading-relaxed text-stone-600 max-w-xl" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                  CRX Real Estate ist ein Berliner Projektentwickler mit über zehn Jahren Erfahrung. Wir realisieren nachhaltige Wohn-, Büro- und Logistikimmobilien.
                </p>
              </div>

              {/* Scale ladder */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div style={{ fontFamily: c.family }}>
                  <div className="text-[10px] tracking-widest uppercase text-stone-400 mb-3" style={{ fontFamily: '"Inter Tight", sans-serif' }}>Display 96</div>
                  <div className="text-[96px] leading-[0.95] text-stone-800" style={{ fontWeight: c.h1Weight, letterSpacing: c.tracking }}>Aa Räume</div>
                </div>
                <div style={{ fontFamily: c.family }}>
                  <div className="text-[10px] tracking-widest uppercase text-stone-400 mb-3" style={{ fontFamily: '"Inter Tight", sans-serif' }}>Light accent</div>
                  <div className="text-[96px] leading-[0.95] text-taupe-500" style={{ fontWeight: c.italicWeight, letterSpacing: c.tracking }}>Generationen</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
