const { emerald, warmGray } = require('tailwindcss/colors')


module.exports = {
  purge: {
    content: ['docs/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {    
      colors:{
        emerald: emerald,
        warmGray: warmGray
      }
    },
  },
  variants: {},
  plugins: [],
}