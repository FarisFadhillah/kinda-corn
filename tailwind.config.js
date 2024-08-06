/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        primary: '#46973c',
        secondary: '#8ac43f',
        third: '#f5dd26',
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

