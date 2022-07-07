/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        shake_no: {
          '0%, 100%': {transform: 'translateX(0)'},
          '10%, 30%, 50%, 70%, 90%': {transform: 'translateX(-3px)'},
          '20%, 40%, 60%, 80%': {transform: 'translateX(3px)'},
        }
      },

      animation: {
        'shake-no': 'shake_no 1s ease-in-out infinite'
      },

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

      fontFamily: {
        'merienda': ["merienda", ...defaultTheme.fontFamily.sans],
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
