const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#191929',
          '50': '#7F7F9F',
          '100': '#707094',
          '200': '#5A5A77',
          '300': '#44445A',
          '400': '#2E2E3D',
          '450': '#27273C',
          '500': '#181820',
          '600': '#020203',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000',
        },
        'secondary': {
          DEFAULT: '#389961',
        }
      },
      fontFamily: {
        sans: ['Titillium Web', ...defaultTheme.fontFamily.sans]
      },
      maxHeight: {
        '0': '0',
        '2/5': '40%',
        '1/5': '20%',
       }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const extendUtilities = {
        '.line-through1': {
            'text-decoration': 'line-through',
            'text-decoration-color': '#e05797',
            },   
          } 

      addUtilities(extendUtilities)
    }) 
  ],
}

   