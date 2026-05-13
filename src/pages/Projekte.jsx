import { useState, useMemo } from 'react'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom'
import AnkaufBlock from '../components/AnkaufBlock'

const categories = ['Alle', 'Wohnen', 'Büro', 'Logistik']

export default function Projekte() {
  const [filter, setFilter] = useState('Alle')

  const filtered = useMemo(() => (
    filter === 'Alle' ? projects : projects.filter(p => p.category === filter)
  ), [filter])

  // Editorial layout pattern — applied to first 6 projects
  const layoutPattern = [
    { col: 'lg:col-span-7', pad: '',           aspect: 'aspect-[16/10]', titleSize: 'text-3xl md:text-4xl' },
    { col: 'lg:col-span-5', pad: 'lg:pt-10',   aspect: 'aspect-[4/5]',   titleSize: 'text-2xl md:text-[26px]' },
    { col: 'lg:col-span-5', pad: '',           aspect: 'aspect-[5/4]',   titleSize: 'text-2xl md:text-[26px]' },
    { col: 'lg:col-span-7', pad: 'lg:pt-16',   aspect: 'aspect-[16/10]', titleSize: 'text-3xl md:text-[32px]' },
    { col: 'lg:col-span-6', pad: '',           aspect: 'aspect-[3/2]',   titleSize: 'text-2xl md:text-[26px]' },
    { col: 'lg:col-span-6', pad: 'lg:pt-10',   aspect: 'aspect-[3/2]',   titleSize: 'text-2xl md:text-[26px]' },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[480px] h-[60vh] bg-ink text-white overflow-hidden flex items-end px-8 lg:px-12 pb-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 30% 60%, rgba(168,152,120,0.3) 0%, transparent 55%), linear-gradient(180deg, rgba(10,9,7,0.4) 0%, #0A0907 100%)',
          }}
        />
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <div className="container-crx relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40 mb-6">
              CRX <span className="text-taupe-100">/</span> Projekte
            </div>
            <h1 className="display-h1 text-6xl md:text-8xl lg:text-[120px]">
              Ausgewählte<br />
              <em className="text-taupe-100 font-light">Arbeiten.</em>
            </h1>
          </div>
          <div className="pb-3">
            <div className="font-display font-light text-6xl md:text-7xl text-taupe-100 leading-none tracking-tight">
              {String(projects.length).padStart(2, '0')}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-white/50 mt-2">
              Projekte gelistet
            </div>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <div className="bg-cream border-b border-stone-400/15 px-8 lg:px-12 py-6 sticky top-0 z-30 backdrop-blur-sm">
        <div className="container-crx flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-1">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all ${
                  filter === c
                    ? 'bg-char text-white'
                    : 'text-stone-600 hover:text-taupe-500'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="font-display text-sm text-stone-400">
            {filtered.length} von {projects.length} · sortiert nach Fertigstellung
          </div>
        </div>
      </div>

      {/* GRID */}
      <section className="bg-cream py-20 lg:py-32 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-10">
          {filtered.map((p, i) => {
            const layout = layoutPattern[i % 6]
            return (
              <Link
                key={p.slug}
                to={`/projekte/${p.slug}`}
                className={`${layout.col} ${layout.pad} group block transition-transform duration-500 hover:-translate-y-1.5`}
              >
                <div
                  className={`relative rounded-sm overflow-hidden mb-5 ${layout.aspect}`}
                  style={{ background: p.heroGradient }}
                >
                  {p.cardImage && (
                    <img
                      src={p.cardImage}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}
                  <span className={`absolute top-5 left-5 z-10 px-3 py-1.5 text-[10px] uppercase tracking-widest backdrop-blur-sm ${
                    p.status === 'Fertig'
                      ? 'bg-taupe-500/95 text-white'
                      : p.status === 'In Planung'
                      ? 'bg-white/95 text-stone-600'
                      : 'bg-bone/95 text-stone-800'
                  }`}>
                    {p.status}
                  </span>
                  <span className="absolute bottom-5 right-5 z-10 font-display text-sm text-white/85">
                    {String(i + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-[10px] tracking-widest uppercase text-stone-400">{p.location}</span>
                  <span className="font-display text-sm text-taupe-500">{p.year}</span>
                </div>
                <h3 className={`font-display font-normal text-stone-800 tracking-tight ${layout.titleSize}`}>
                  {p.title}
                </h3>
                <p className="text-sm text-stone-600 mt-1">{p.nutzung} · {p.bgf}</p>
                <span className="inline-block mt-3 text-[10px] uppercase tracking-widest text-taupe-500 border-b border-taupe-100 pb-0.5">
                  Projekt ansehen →
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ANKAUF */}
      <AnkaufBlock />
    </>
  )
}
