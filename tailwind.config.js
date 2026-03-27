const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        brand: {
          50:  '#f2f5f7',
          100: '#e2e9ee',
          200: '#c5d3dc',
          300: '#a0b4c0',
          400: '#6f8fa0',
          500: '#4e7080',
          600: '#375a6d',
          700: '#274658',
          800: '#1a3345',
          900: '#0f2233',
          950: '#081520',
        },
        accent: {
          50:  '#fff5ed',
          100: '#ffe8d0',
          200: '#ffcfa0',
          300: '#ffad66',
          400: '#ff8533',
          500: '#f96b0b',
          600: '#e85407',
          700: '#c23f08',
          800: '#9b330e',
          900: '#7d2c0f',
          950: '#441305',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Liberation Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },
      boxShadow: {
        'elev-1': '0 1px 3px rgba(2, 6, 23, 0.08), 0 1px 2px rgba(2, 6, 23, 0.06)',
        'elev-2': '0 10px 30px rgba(2, 6, 23, 0.12), 0 4px 10px rgba(2, 6, 23, 0.06)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(1200px circle at 10% -10%, rgba(16, 42, 67, 0.16), transparent 55%), radial-gradient(900px circle at 90% 0%, rgba(234, 88, 12, 0.12), transparent 50%)',
      },
    },
  },
  plugins: []
}
