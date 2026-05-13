/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Themeable neutrals — swap via [data-theme] on <html>
        bone:   'rgb(var(--c-bone) / <alpha-value>)',
        cream:  'rgb(var(--c-cream) / <alpha-value>)',
        sand:   'rgb(var(--c-sand) / <alpha-value>)',
        // Taupe — primary brand accent system (themeable)
        taupe: {
          100: 'rgb(var(--c-taupe-100) / <alpha-value>)',
          300: 'rgb(var(--c-taupe-300) / <alpha-value>)',
          500: 'rgb(var(--c-taupe-500) / <alpha-value>)',
          700: 'rgb(var(--c-taupe-700) / <alpha-value>)',
        },
        // Warm grays for text
        stone: {
          400: '#8C8478',
          600: '#5A544A',
          800: '#2E2A24',
        },
        // Black anchors
        char: '#1A1814',
        ink:  '#0A0907',
      },
      fontFamily: {
        display: ['Geist', 'sans-serif'],
        sans:    ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider:  '0.15em',
      },
      maxWidth: {
        '8xl': '90rem',  // 1440px container
      },
      animation: {
        'fade-up': 'fadeUp 1.2s ease-out backwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
