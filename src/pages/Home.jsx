import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import StatsBar from '../components/StatsBar'
import ProjectCard from '../components/ProjectCard'
import AnkaufBlock from '../components/AnkaufBlock'

export default function Home() {
  const featured = projects[0]                    // Frontier
  const secondary = projects[1]                   // Cloud No. 7
  const bottom = projects.slice(2, 5)             // Walsrode, SW122, NK Living

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[720px] h-screen bg-ink text-white overflow-hidden flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 75% 35%, rgba(168,152,120,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 85%, rgba(201,187,160,0.08) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        <div className="container-crx px-8 lg:px-12 pb-24 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-end relative z-10 w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="text-[13px] tracking-widest uppercase text-white/55 mb-9 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-taupe-300" />
              Projektentwicklung · Berlin · Seit 2014
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.25 }}
              className="display-h1 text-6xl md:text-8xl lg:text-[104px]"
            >
              Räume, die<br />
              <em className="italic text-taupe-100 font-light">Generationen</em><br />
              verbinden.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="pb-3"
          >
            <p className="text-base leading-relaxed text-white/70 max-w-sm mb-9">
              Wir entwickeln Wohn-, Büro- und Logistikimmobilien mit einem Projektvolumen von über 500 Millionen Euro – kompromisslos in Qualität, ruhig in der Geste.
            </p>
            <Link
              to="/projekte"
              className="inline-flex items-center gap-3.5 px-7 py-4 border border-white/25 hover:bg-taupe-500 hover:border-taupe-500 text-white text-xs uppercase tracking-widest transition-all duration-300 group"
            >
              Unsere Projekte
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-white/35">
          SCROLL ↓
        </div>
      </section>

      {/* STATS */}
      <StatsBar />

      {/* ABOUT */}
      <section className="bg-bone py-32 lg:py-36 px-8 lg:px-12">
        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
          <div>
            <div className="section-num">— 01 / Unternehmen</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px]">
              Wir bauen für das, <em className="italic text-taupe-500">was bleibt.</em>
            </h2>
          </div>
          <div className="pt-3">
            <p className="text-lg leading-relaxed text-stone-600 mb-6 max-w-xl">
              CRX Real Estate ist ein Berliner Projektentwickler mit über zehn Jahren Erfahrung. Wir realisieren nachhaltige Wohn-, Büro- und Logistikimmobilien – nicht für die nächste Konjunktur, sondern für die nächste Generation.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 mb-6 max-w-xl">
              Unser Fokus: langfristige Wertsteigerung, ökologische Verantwortung und Architektur, die das städtische Umfeld bereichert statt belastet.
            </p>
            <Link
              to="/unternehmen"
              className="inline-flex items-center gap-3 text-taupe-700 hover:text-char text-xs uppercase tracking-widest border-b border-taupe-300 hover:border-char pb-1 mt-3 transition-colors"
            >
              Mehr über uns →
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-cream py-32 lg:py-36 px-8 lg:px-12" id="projekte">
        <div className="container-crx mb-16 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <div className="section-num">— 02 / Portfolio</div>
            <h2 className="display-h2 text-4xl md:text-5xl lg:text-[56px]">
              Ausgewählte <em className="italic text-taupe-500">Arbeiten.</em>
            </h2>
          </div>
          <Link
            to="/projekte"
            className="self-start md:self-end text-xs uppercase tracking-widest text-stone-800 border-b border-taupe-500 pb-1 hover:text-taupe-500 transition-colors"
          >
            Alle Projekte →
          </Link>
        </div>

        <div className="container-crx grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          <ProjectCard project={featured} featured />
          <ProjectCard project={secondary} />
        </div>

        <div className="container-crx grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {bottom.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      {/* ANKAUF */}
      <AnkaufBlock />
    </>
  )
}
