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
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10'
      },
      screens: {
        'sm': '530px',
      },
    },
    fontFamily: {
      'merienda': ["merienda", ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
