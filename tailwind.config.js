module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: {
        DEFAULT: '#001011'        
      },
      white: {
        DEFAULT: '#F7EDF0'
      },
      green: {
        DEFAULT: '#95E45F'
      },
      gray: {
        DEFAULT: '#60432F',
        light: '#8D6346'
      },
      purple: {
        DEFAULT: '#8D6346'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
