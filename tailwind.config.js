/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Obsidian Noir Luxury Dark Palette
        noir: {
          deep: '#040406',
          DEFAULT: '#08080A',
          card: '#111116',
          subtle: '#181822',
          border: 'rgba(212, 175, 55, 0.28)',
        },
        navy: {
          deep: '#040406',
          DEFAULT: '#08080A',
          card: '#111116',
          subtle: '#181822',
          border: 'rgba(212, 175, 55, 0.28)',
        },
        // 24K Gold & Metallic Foil Accents
        gold: {
          light: '#FFF0A8',
          DEFAULT: '#D4AF37',
          '24k': '#F3D053',
          antique: '#AA852C',
          dark: '#7A5F19',
        },
        champagne: {
          50: '#FDFBF7',
          100: '#F8F3E5',
          light: '#FFF0A8',
          DEFAULT: '#D4AF37',
          muted: '#D5CDC0',
          dark: '#AA852C',
          antique: '#AA852C',
          deep: '#7A5F19',
        },
        // Pure Crisp Ivory Palette
        ivory: {
          soft: '#FBF8F1',
          DEFAULT: '#FFFDF9',
          muted: '#D5CDC0',
          subtle: '#9E9688',
          dark: '#141419',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        manrope: ['"Manrope"', 'system-ui', 'sans-serif'],
        arabic: ['"Amiri"', 'serif'],
      },
      letterSpacing: {
        widest1: '0.15em',
        widest2: '0.22em',
        widest3: '0.3em',
      },
      boxShadow: {
        'gold-subtle': '0 0 20px rgba(212, 175, 55, 0.2)',
        'gold-glow': '0 0 35px rgba(243, 208, 83, 0.4)',
        'champagne-subtle': '0 0 20px rgba(212, 175, 55, 0.2)',
        'champagne-glow': '0 0 35px rgba(243, 208, 83, 0.4)',
        'luxury-card': '0 20px 45px -15px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(212, 175, 55, 0.3)',
        'ivory-card': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
}
