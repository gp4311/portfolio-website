/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background-color':'#ffffff',
      'nav-background-color':'#f7f6f3',
      'primary-color':'#15543c',
      'accent-color-1':'#003a37',
      'accent-color-1':'#9ec5c6',
      'accent-color-1':'#e2dfd5',
      'accent-color-1':'#dae0e5',
      'text-color-1':'#444444',
    },
    fontFamily: {
      'heading':['Playfair Display', 'sans-serif'],
      'body':['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}