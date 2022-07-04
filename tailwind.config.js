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
      },
      screens: {
        'sm': '530px',
      },
    },
    fontFamily: {
      'merienda': ["merienda", ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}
