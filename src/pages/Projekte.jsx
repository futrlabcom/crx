import { useState, useMemo } from 'react'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom'
import AnkaufBlock from '../components/AnkaufBlock'
import ProjectMedia from '../components/ProjectMedia'

const categories = ['Alle', 'Wohnen', 'Büro', 'Logistik', 'Gewerbe']

function ProjectCardLink({ p }) {
  return (
    <Link to={`/projekte/${p.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand mb-6">
        <ProjectMedia
          image={p.cardImage}
          video={p.cardVideo}
          imgFilter={p.cardImageFilter}
          alt={p.title}
          imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex items-baseline justify-between mb-3 text-[11px] tracking-widest uppercase text-stone-400">
        <span>{p.location}</span>
        <span>{p.status}{p.year ? ` · ${p.year}` : ''}</span>
      </div>
      <h3 className="font-display font-light text-3xl lg:text-[40px] leading-[1.05] tracking-[-0.02em] text-stone-800 mb-2">
        {p.title}
      </h3>
      <p className="text-base text-stone-600">
        {p.nutzung}
        {p.bgf && <><span className="text-stone-400 mx-1.5">·</span> {p.bgf}</>}
        {p.units && <><span className="text-stone-400 mx-1.5">·</span> {p.units}</>}
        {p.units_residential && <><span className="text-stone-400 mx-1.5">·</span> {p.units_residential} Wohneinheiten</>}
        {p.units_commercial && <><span className="text-stone-400 mx-1.5">·</span> {p.units_commercial} Gewerbe</>}
      </p>
    </Link>
  )
}

function ProjectsGrid({ items, eyebrow, num, title }) {
  if (!items.length) return null
  return (
    <section className="bg-bone py-20 lg:py-28 px-8 lg:px-12">
      <div className="container-crx mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="section-num">— {num} / {eyebrow}</div>
          <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px]">
            {title}
          </h2>
        </div>
        <div className="font-display text-sm text-stone-400">
          {items.length} {items.length === 1 ? 'Projekt' : 'Projekte'}
        </div>
      </div>
      <div className="container-crx grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-16 lg:gap-y-24">
        {items.map(p => <ProjectCardLink key={p.slug} p={p} />)}
      </div>
    </section>
  )
}

export default function Projekte() {
  const [filter, setFilter] = useState('Alle')

  const filtered = useMemo(() => (
    filter === 'Alle' ? projects : projects.filter(p => p.category === filter)
  ), [filter])

  const neubau   = filtered.filter(p => p.type === 'neubau')
  const bestand  = filtered.filter(p => p.type === 'bestand')

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[520px] h-[70vh] bg-ink text-white overflow-hidden flex items-end px-8 lg:px-12 pb-20">
        <img
          src="/heroes/projekte.jpg"
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
          <div className="pb-3 md:text-right">
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
            {filtered.length} von {projects.length}
          </div>
        </div>
      </div>

      {/* NEUBAUPROJEKTE */}
      <ProjectsGrid
        items={neubau}
        num="01"
        eyebrow="Neubauprojekte"
        title={<>Was wir <em className="text-taupe-500">bauen.</em></>}
      />

      {/* BESTANDSOBJEKTE */}
      <ProjectsGrid
        items={bestand}
        num="02"
        eyebrow="Bestandsobjekte"
        title={<>Was wir <em className="text-taupe-500">halten.</em></>}
      />

      {/* ANKAUF */}
      <AnkaufBlock />
    </>
  )
}
