import { useEffect, useState } from 'react'

const THEMES = [
  { id: 'stone', label: 'Stone', swatch: '#C5C1B7' },
  { id: 'beige', label: 'Beige', swatch: '#DDD2BC' },
  { id: 'creme', label: 'Creme', swatch: '#E5D5AC' },
]

const STORAGE_KEY = 'crx-theme'
const DEFAULT_THEME = 'beige'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(DEFAULT_THEME)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && THEMES.some(t => t.id === saved)) setTheme(saved)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-ink/85 backdrop-blur-md border border-white/10 shadow-lg">
      {THEMES.map(t => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          aria-label={`Theme: ${t.label}`}
          title={t.label}
          className={`w-6 h-6 rounded-full transition-all duration-200 ${
            theme === t.id ? 'ring-2 ring-white ring-offset-2 ring-offset-ink scale-110' : 'opacity-70 hover:opacity-100'
          }`}
          style={{ backgroundColor: t.swatch }}
        />
      ))}
    </div>
  )
}
