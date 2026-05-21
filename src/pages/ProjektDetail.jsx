import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import logoWhite from '../assets/logo_white.png'

export default function ProjektDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const [heroImgFailed, setHeroImgFailed] = useState(false)

  if (!project) return <Navigate to="/projekte" replace />

  const related = projects.filter(p => p.slug !== slug).slice(0, 3)
  const projectIndex = projects.findIndex(p => p.slug === slug)
  const heroImgSrc = project.heroImage || project.cardImage
  const showHeroPlaceholder = !project.heroVideo && (!heroImgSrc || heroImgFailed)

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[520px] h-[70vh] text-white overflow-hidden flex items-end px-8 lg:px-12 pb-20"
        style={{ background: project.heroGradient }}
      >
        {showHeroPlaceholder && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, #2E2A24 0%, #0A0907 75%)' }}
            aria-hidden="true"
          >
            <img src={logoWhite} alt="" className="h-16 lg:h-20 w-auto opacity-20" />
          </div>
        )}

        {project.heroVideo ? (
          <video
            src={project.heroVideo}
            poster={heroImgSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : heroImgSrc && !heroImgFailed && (
          <img
            src={heroImgSrc}
            alt={project.title}
            onError={() => setHeroImgFailed(true)}
            style={project.heroImageFilter ? { filter: project.heroImageFilter } : undefined}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,9,7,0.45) 0%, rgba(10,9,7,0.25) 35%, rgba(10,9,7,0.85) 100%)',
          }}
        />
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        <div className="container-crx relative z-10">
          <div className="text-xs uppercase tracking-widest text-white/50 mb-8">
            <Link to="/" className="hover:text-taupe-100 transition-colors">CRX</Link>
            <span className="text-taupe-100 mx-2">/</span>
            <Link to="/projekte" className="hover:text-taupe-100 transition-colors">Projekte</Link>
            <span className="text-taupe-100 mx-2">/</span>
            {project.title}
          </div>

          <span className="inline-block px-3.5 py-1.5 bg-taupe-500 text-white text-[10px] uppercase tracking-widest mb-6">
            {project.type === 'bestand'
              ? 'Im Bestand'
              : project.status + (project.year ? ` · Fertigstellung ${project.year}` : '')}
          </span>

          <h1 className="display-h1 text-7xl md:text-9xl lg:text-[180px] leading-[0.88] mb-8">
            {project.title}
          </h1>

          <div className="pt-8 border-t border-white/15 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-end">
            <div className="font-display font-light text-xl md:text-2xl text-white/75 leading-snug max-w-2xl">
              {project.tagline}
            </div>
            <div className="md:text-right">
              <div className="font-display font-light text-5xl text-taupe-100 leading-none">
                {String(projectIndex + 1).padStart(2, '0')}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 mt-2">
                {project.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS BAR */}
      <section className="bg-char text-white py-8 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6">
          {(project.type === 'bestand' ? [
            { key: 'Nutzung',          val: project.nutzung },
            project.units_residential && { key: 'Wohneinheiten', val: project.units_residential },
            project.units_commercial  && { key: 'Gewerbeeinheiten', val: project.units_commercial },
            { key: 'Standort',         val: project.address },
            project.tenants && project.tenants.length && { key: 'Mieter', val: project.tenants.join(' · '), accent: true },
          ] : [
            { key: 'Nutzung',          val: project.nutzung },
            { key: 'Geschossfläche',   val: project.bgf },
            project.facadeLength && { key: 'Fassadenlänge', val: project.facadeLength },
            project.wohnungsmix  && { key: 'Wohnungsmix',   val: project.wohnungsmix },
            project.baubeginn    && { key: 'Baubeginn',     val: project.baubeginn },
            project.fertigstellung && { key: 'Fertigstellung', val: project.fertigstellung, accent: true },
            { key: 'Standort',         val: project.address },
            !project.fertigstellung && { key: 'Status',     val: project.status, accent: true },
          ]).filter(Boolean).map((f, i) => (
            <div key={i} className={`px-4 lg:px-8 ${i > 0 ? 'lg:border-l border-white/10' : ''}`}>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">{f.key}</div>
              <div className={`font-display text-base lg:text-lg ${f.accent ? 'text-taupe-100' : ''}`}>{f.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-bone py-32 lg:py-36 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
          <div>
            <div className="section-num">— 01 / Vision</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px]">
              {project.title === 'Frontier' ? (
                <>Eine neue Ära für<br /><em className="text-taupe-500">Neukölln.</em></>
              ) : (
                <>Das Projekt im <em className="text-taupe-500">Detail.</em></>
              )}
            </h2>
          </div>
          <div>
            {project.description.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-stone-600 mb-5 max-w-2xl">
                {para}
              </p>
            ))}
            {project.pullquote && (
              <blockquote className="font-display font-light text-2xl md:text-3xl leading-snug text-taupe-700 border-l-2 border-taupe-500 pl-8 py-2 my-10">
                "{project.pullquote}"
              </blockquote>
            )}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-cream py-32 lg:py-36 px-8 lg:px-12">
        <div className="container-crx mb-14">
          <div className="section-num">— 02 / Galerie</div>
          <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px] mt-3">
            Architektur, die <em className="text-taupe-500">atmet.</em>
          </h2>
        </div>

        <div className="container-crx grid grid-cols-1 lg:grid-cols-6 gap-4">
          {project.gallery.map((img, i) => {
            // Editorial layout: alternating spans
            const spanClasses = [
              'lg:col-span-4 aspect-[16/9]',
              'lg:col-span-2 aspect-[4/5]',
              'lg:col-span-2 aspect-[4/5]',
              'lg:col-span-4 aspect-[16/9]',
              'lg:col-span-3 aspect-[4/3]',
              'lg:col-span-3 aspect-[4/3]',
            ]
            return (
              <div
                key={i}
                className={`relative rounded-sm overflow-hidden bg-sand ${spanClasses[i % 6]}`}
              >
                {img.src && (
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 100%)' }}
                />
                <div className="absolute bottom-4 left-5 font-display text-sm text-white/95">
                  {img.caption}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-ink text-white py-32 lg:py-36 px-8 lg:px-12 relative overflow-hidden">
        <div
          className="absolute -top-72 -right-72 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,152,120,0.12) 0%, transparent 60%)' }}
        />
        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center relative z-10">
          <div>
            <div className="section-num !text-taupe-100">— 03 / Standort</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[64px] mb-6">
              {project.title === 'Frontier' ? (
                <>Grenzallee 100.<br /><em className="text-taupe-100">Neuköllns neue Mitte.</em></>
              ) : (
                <>Standort.<br /><em className="text-taupe-100">{project.location}.</em></>
              )}
            </h2>
            <p className="text-lg leading-relaxed text-white/70 max-w-md mb-5">
              {project.locationCopy || `Hochwertige Lage in ${project.location} mit exzellenter Anbindung.`}
            </p>
            <div className="mt-8 bg-white/5 border border-white/10 p-8 rounded-sm">
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Adresse</div>
              <div className="font-display text-xl leading-snug">{project.address}</div>
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-stone-800 border border-white/10 rounded-sm overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(201,187,160,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,187,160,0.06) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="absolute top-[45%] left-[55%]">
              <div
                className="w-4 h-4 bg-taupe-500 rounded-full"
                style={{ boxShadow: '0 0 0 8px rgba(138,122,92,0.3), 0 0 0 16px rgba(138,122,92,0.15)' }}
              />
              <div className="absolute -top-8 left-6 font-display text-sm text-taupe-100">
                {project.title}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-bone py-32 lg:py-36 px-8 lg:px-12">
        <div className="container-crx mb-14 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <div className="section-num">— 04 / Weiter erkunden</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px] mt-3">
              Verwandte <em className="text-taupe-500">Projekte.</em>
            </h2>
          </div>
          <Link
            to="/projekte"
            className="self-start md:self-end text-xs uppercase tracking-widest text-stone-800 border-b border-taupe-500 pb-1 hover:text-taupe-500 transition-colors"
          >
            Alle Projekte →
          </Link>
        </div>

        <div className="container-crx grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map(r => (
            <Link
              key={r.slug}
              to={`/projekte/${r.slug}`}
              className="group block transition-transform duration-400 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4 bg-sand">
                {r.cardImage && (
                  <img
                    src={r.cardImage}
                    alt={r.title}
                    loading="lazy"
                    style={r.cardImageFilter ? { filter: r.cardImageFilter } : undefined}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                )}
              </div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-[10px] tracking-widest uppercase text-stone-400">{r.location}</span>
                <span className="font-display text-sm text-taupe-500">{r.year}</span>
              </div>
              <h3 className="font-display font-normal text-2xl text-stone-800">{r.title}</h3>
              <p className="text-sm text-stone-600 mt-1">{r.nutzung} · {r.bgf}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
