/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    fontFamily: {
      'merienda': ["merienda", ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}
