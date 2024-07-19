/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background-color':'#ffffff',

      'nav-background-color':'#f4f4f4',
      'nav-text-color':'#999999',
      'nav-text-color-selected':'#404040',

      'color-1a':'#f6e0a6',
      'color-1b':'#f9dc91',
      'color-1c':'#fbd978',
      'color-1d':'#fcd560',
      'color-1e':'#fed049',

      'color-2a': '#f8bac6',
      'color-2b':'#f38ca1',
      'color-2c':'#e46e88',
      'color-2d':'#d5506f',
      'color-2e':'#c43354',
      'color-2f':'#b4163a',

      'color-3a':'#d6f3f5',
      'color-3b':'#b6e9ec',
      'color-3c':'#94cfce',
      'color-3d':'#71b3b2',
      'color-3e':'#4f9796',
      'color-3f':'#2b7b7c',

      'color-4a':'#edf6e5',
      'color-4b':'#d1e2be',
      'color-4c':'#b4cf9a',
      'color-4d':'#98bc72',
      'color-4e':'#7ba84b',

      'main-text-color-1':'#404040',
    },
    fontFamily: {
      'heading':['Amaranth', 'sans-serif'],
      'body':['Roboto', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}