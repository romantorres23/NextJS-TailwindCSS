const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#b3bcf5',
        DEFAULT: '#4f83cc',
        dark: '#202e78',
      },
      gray: colors.coolGray,
      white: colors.white
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      width: {
        '400': '400px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
