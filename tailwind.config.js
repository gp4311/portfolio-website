/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background-color':'#f8f8f8',

      'nav-text-color':'#999999',
      'nav-text-color-selected':'#404040',

      'color-1a':'#fcd560',
      'color-1b':'#fed049',
      
      'color-2a':'#f8bac6',
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

      'text-color':'#404040',
    },
    fontFamily: {
      'heading':['Calistoga', 'sans-serif'],
      'body':['IBM Plex Sans', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}