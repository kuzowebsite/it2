const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
    './safelist.txt'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ["'Varela Round', sans-serif", ...defaultTheme.fontFamily.sans],
        head: ["'M PLUS Rounded 1c', sans-serif", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'mdWhite': '0 4px 6px -1px rgba(229, 231, 235, 0.1), 0 2px 4px -1px rgba(229, 231, 235, 0.03)',
      },
      colors: {
        primary: "#f86d70"
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['active','responsive', 'hover', 'dark'],
      gridColumn: ['responsive', 'hover'],
      gridColumnStart: ['responsive', 'hover'],
    },
  },
  plugins: [],
}
