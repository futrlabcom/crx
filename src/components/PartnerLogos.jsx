import { useState } from 'react'
import { partners } from '../data/projects'

// Logo-Image mit Fallback auf Partner-Name als Text, wenn das Asset
// (noch) nicht vorhanden ist.
function PartnerLogoImg({ partner, className, style }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <span
        className="font-display text-sm md:text-base lg:text-lg tracking-[-0.01em] text-stone-800/70 px-2 text-center"
        title={partner.name}
      >
        {partner.name}
      </span>
    )
  }
  return (
    <img
      src={partner.logo}
      alt={partner.name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      style={style}
    />
  )
}

// Trust-Anchor: zentral verwaltete Partner-Logos. Zwei Varianten:
//
//   variant="full"    — für Unternehmen-Seite. Statisches Grid mit
//                       Section-Label + großem Titel.
//
//   variant="compact" — für Homepage. Fullscreen-Marquee: Logos
//                       scrollen horizontal endlos durch, brechen aus
//                       dem Container aus und füllen die volle Viewport-
//                       Breite. Pause on hover.
//
// Logo-Quelle: src/data/projects.js → `partners`

const BG_CLASSES = {
  bone:  'bg-bone',
  cream: 'bg-cream',
  white: 'bg-white',
}

export default function PartnerLogos({
  variant = 'full',
  caption,
  showSectionLabel = true,
  background = variant === 'full' ? 'cream' : 'bone',
}) {
  const isCompact = variant === 'compact'
  const captionText = caption ?? (isCompact
    ? 'In Zusammenarbeit mit'
    : 'In Zusammenarbeit mit renommierten Häusern.')

  if (isCompact) {
    // Duplicate the list for a seamless loop. The track translates
    // exactly -50% (one full set width) and snaps back invisibly.
    const looped = [...partners, ...partners]
    return (
      <section className={`${BG_CLASSES[background] || 'bg-bone'} py-16 lg:py-20 overflow-hidden`}>
        <div className="container-crx px-8 lg:px-12 mb-10 lg:mb-12">
          <div className="text-center text-[11px] tracking-[0.2em] uppercase text-taupe-500">
            {captionText}
          </div>
        </div>

        <div className="group relative w-full overflow-hidden">
          <div
            className="flex items-center gap-9 lg:gap-24 will-change-transform animate-marquee group-hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {looped.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="shrink-0 flex items-center justify-center opacity-65 hover:opacity-100 transition-opacity duration-300 min-w-[120px] lg:min-w-[200px] h-24 lg:h-24"
                title={p.name}
              >
                <PartnerLogoImg
                  partner={p}
                  className="h-24 lg:h-24 w-auto max-w-[200px] object-contain"
                  style={{ filter: 'brightness(0)' }}
                />
              </div>
            ))}
          </div>

          {/* edge fades to suggest infinite scroll */}
          <div
            className="absolute inset-y-0 left-0 w-24 lg:w-40 pointer-events-none"
            style={{ background: `linear-gradient(90deg, ${background === 'bone' ? 'rgb(var(--c-bone))' : background === 'cream' ? 'rgb(var(--c-cream))' : '#fff'} 0%, transparent 100%)` }}
          />
          <div
            className="absolute inset-y-0 right-0 w-24 lg:w-40 pointer-events-none"
            style={{ background: `linear-gradient(270deg, ${background === 'bone' ? 'rgb(var(--c-bone))' : background === 'cream' ? 'rgb(var(--c-cream))' : '#fff'} 0%, transparent 100%)` }}
          />
        </div>
      </section>
    )
  }

  // ── FULL (Unternehmen) ──────────────────────────────────────
  return (
    <section className={`${BG_CLASSES[background] || 'bg-cream'} py-24 lg:py-28 px-8 lg:px-12`}>
      <div className="container-crx">
        <div className="text-center">
          {showSectionLabel && (
            <div className="section-num">— 04 / Partner & Investoren</div>
          )}
          <h3 className="font-display font-light text-3xl text-stone-800 mb-14">
            {captionText.includes('renommierten')
              ? <>In Zusammenarbeit mit <em className="text-taupe-500">renommierten Häusern.</em></>
              : captionText}
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 border-t border-l border-stone-400/20">
          {partners.map(p => (
            <div
              key={p.name}
              className="group aspect-[2/1] border-r border-b border-stone-400/20 flex items-center justify-center p-4 lg:p-6"
              title={p.name}
            >
              <PartnerLogoImg
                partner={p}
                className="max-h-24 lg:max-h-32 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: 'brightness(0)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
