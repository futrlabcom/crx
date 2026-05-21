import { useRef, useState } from 'react'
import logoWhite from '../assets/logo_white.png'

// Renders the project card image with an optional hover-video swap.
// Image is always rendered for fast paint + SEO. If `video` is set,
// a muted/loop video overlays it and starts playing on hover.
// If no image (or image fails to load), shows a black-gradient
// placeholder with a small CRX wordmark centered.
//
// Drop this inside an aspect-ratio container (e.g. `aspect-[4/3] overflow-hidden`).
export default function ProjectMedia({ image, video, alt, className = '', imgClassName = '', imgFilter }) {
  const videoRef = useRef(null)
  const [imgFailed, setImgFailed] = useState(false)

  const showPlaceholder = !image || imgFailed

  const handleEnter = () => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    const p = v.play()
    if (p && typeof p.catch === 'function') p.catch(() => {})
  }

  const handleLeave = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
  }

  return (
    <div
      className={`absolute inset-0 ${className}`}
      onMouseEnter={video ? handleEnter : undefined}
      onMouseLeave={video ? handleLeave : undefined}
    >
      {/* Placeholder: black gradient + small CRX logo. Always present so it
          sits underneath the img and shows through if the image 404s. */}
      {showPlaceholder && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, #2E2A24 0%, #0A0907 75%)' }}
          aria-hidden="true"
        >
          <img
            src={logoWhite}
            alt=""
            className="h-7 lg:h-9 w-auto opacity-25"
          />
        </div>
      )}

      {image && !imgFailed && (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          onError={() => setImgFailed(true)}
          style={imgFilter ? { filter: imgFilter } : undefined}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imgClassName}`}
        />
      )}

      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
      )}
    </div>
  )
}
