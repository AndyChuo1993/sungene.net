const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Industrial steel blue / dark navy palette
        blue: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43', // Deep industrial navy
        },
        // Slate for metallic feel
        gray: colors.slate,
      }
    }
  },
  plugins: []
}
