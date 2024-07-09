/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#F09B37',
        secondary: '#8CC540',
        dark: '#0f172a',
        dark2: '#64748b',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

