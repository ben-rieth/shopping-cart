/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/assets/images/bookstore.jpg')"
      }
    },
    fontFamily: {
      'merienda': ["merienda", ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}
