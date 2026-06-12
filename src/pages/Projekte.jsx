import { useState, useMemo } from 'react'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom'
import AnkaufBlock from '../components/AnkaufBlock'
import ProjectMedia from '../components/ProjectMedia'
import PageHero from '../components/PageHero'

// Filter springt zu den jeweiligen Anker-Sektionen statt das Grid zu filtern
const FILTERS = [
  { label: 'Alle',    target: null },
  { label: 'Neubau',  target: 'neubau' },
  { label: 'Bestand', target: 'bestand' },
]

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
        <span>{p.hide_location ? '' : p.location}</span>
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

function ProjectsGrid({ items, eyebrow, num, title, anchor }) {
  if (!items.length) return null
  return (
    <section id={anchor} className="bg-bone py-20 lg:py-28 px-8 lg:px-12 scroll-mt-24">
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

// Frontier wird ans Ende der Neubau-Liste sortiert (21.05.2026)
function sortFrontierLast(list) {
  const others = list.filter(p => p.slug !== 'frontier')
  const frontier = list.filter(p => p.slug === 'frontier')
  return [...others, ...frontier]
}

export default function Projekte() {
  const [filter, setFilter] = useState('Alle')

  const neubau   = useMemo(() => sortFrontierLast(projects.filter(p => p.type === 'neubau')),  [])
  const bestand  = useMemo(() => projects.filter(p => p.type === 'bestand'), [])

  const handleFilter = (f) => {
    setFilter(f.label)
    if (f.target) {
      const el = document.getElementById(f.target)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* HERO */}
      <PageHero
        breadcrumb="CRX / Projekte"
        titleLine1="Unsere"
        titleLine2="Projekte."
        rightContent={
          <div className="lg:text-right">
            <div
              className="font-display font-light text-taupe-100 leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)' }}
            >
              {String(projects.length).padStart(2, '0')}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-white/50 mt-2">
              Projekte gelistet
            </div>
          </div>
        }
      >
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
      </PageHero>

      {/* FILTER — springt zu Anker-Sektion */}
      <div className="bg-cream border-b border-stone-400/15 px-8 lg:px-12 py-6 sticky top-0 z-30 backdrop-blur-sm">
        <div className="container-crx flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-1">
            {FILTERS.map(f => (
              <button
                key={f.label}
                onClick={() => handleFilter(f)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all ${
                  filter === f.label
                    ? 'bg-char text-white'
                    : 'text-stone-600 hover:text-taupe-500'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="font-display text-sm text-stone-400">
            {neubau.length + bestand.length} Projekte
          </div>
        </div>
      </div>

      {/* NEUBAUPROJEKTE */}
      <ProjectsGrid
        items={neubau}
        num="01"
        eyebrow="Neubauprojekte"
        title={<>Was wir <em className="text-taupe-500">bauen.</em></>}
        anchor="neubau"
      />

      {/* BESTANDSOBJEKTE */}
      <ProjectsGrid
        items={bestand}
        num="02"
        eyebrow="Bestandsobjekte"
        title={<>Was wir <em className="text-taupe-500">halten.</em></>}
        anchor="bestand"
      />

      {/* ANKAUF */}
      <AnkaufBlock />
    </>
  )
}
