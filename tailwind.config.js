const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Slate for metallic feel
        gray: colors.slate,
        brand: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#081a2a',
        },
        accent: colors.orange,
      }
    },
      fontFamily: {
        sans: [
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
        'elev-1': '0 1px 2px rgba(2, 6, 23, 0.06), 0 1px 1px rgba(2, 6, 23, 0.04)',
        'elev-2': '0 8px 24px rgba(2, 6, 23, 0.10)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(1200px circle at 10% -10%, rgba(16, 42, 67, 0.16), transparent 55%), radial-gradient(900px circle at 90% 0%, rgba(234, 88, 12, 0.12), transparent 50%)',
      },
  },
  plugins: []
}
