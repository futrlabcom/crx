import { projectStats } from '../data/projects'

export default function StatsBar() {
  return (
    <section className="bg-char text-white py-16 px-8 lg:px-12 border-t border-white/5">
      <div className="container-crx grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8">
        {projectStats.map((s, i) => (
          <div
            key={i}
            className={`px-4 md:px-8 ${i > 0 ? 'lg:border-l border-white/10' : ''}`}
          >
            <div className="font-display font-light text-5xl md:text-6xl leading-none tracking-tight">
              {s.num}
              {s.unit && <span className="text-base text-taupe-100 ml-1">{s.unit}</span>}
            </div>
            <div className="text-[10px] tracking-widest uppercase text-white/45 mt-4">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
