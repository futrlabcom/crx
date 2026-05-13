/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutrals — bone, cream, sand
        bone:   '#F5F1E8',
        cream:  '#EDE6D6',
        sand:   '#DDD2BC',
        // Taupe — primary brand accent system
        taupe: {
          100: '#C9BBA0',
          300: '#A89878',
          500: '#8A7A5C',  // primary accent
          700: '#5C4F3A',
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
