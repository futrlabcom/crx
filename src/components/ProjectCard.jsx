import { Link } from 'react-router-dom'

export default function ProjectCard({ project, featured = false }) {
  return (
    <Link to={`/projekte/${project.slug}`} className="group block transition-transform duration-500 hover:-translate-y-1">
      <div
        className={`relative rounded-sm overflow-hidden mb-5 ${featured ? 'aspect-[5/4]' : 'aspect-[4/3]'}`}
        style={{ background: project.heroGradient }}
      >
        {project.cardImage && (
          <img
            src={project.cardImage}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}
        <span className={`absolute top-5 left-5 z-10 px-3 py-1.5 text-[10px] uppercase tracking-widest backdrop-blur-sm ${
          project.status === 'Fertig'
            ? 'bg-taupe-500/95 text-white'
            : 'bg-bone/95 text-stone-800'
        }`}>
          {project.status}
        </span>
      </div>

      <div className="flex justify-between items-baseline mb-2">
        <span className="text-[10px] tracking-widest uppercase text-stone-400">{project.location}</span>
        <span className="font-display text-sm text-taupe-500">{project.year}</span>
      </div>
      <h3 className={`font-display font-normal tracking-tight text-stone-800 ${
        featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-[26px]'
      }`}>
        {project.title}
      </h3>
      <p className="text-sm text-stone-600 mt-1">{project.nutzung} · {project.bgf}</p>
    </Link>
  )
}
