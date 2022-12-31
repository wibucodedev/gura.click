module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#2A6794',
        second: '#CD6F67'
      }
    },
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
