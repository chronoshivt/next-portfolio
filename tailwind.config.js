module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: {
        DEFAULT: '#080613'        
      },
      white: {
        DEFAULT: '#FFFFFF'
      },
      green: {
        DEFAULT: '#B4F07F'
      },
      gray: {
        DEFAULT: '#25232E',
        light: '#676570'
      },
      purple: {
        DEFAULT: '#5744B8'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
