module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: {
        DEFAULT: '#28352C'
      },
      white: {
        DEFAULT: '#F4EBDD'
      },
      green: {
        DEFAULT: '#A3B18A'
      },
      gray: {
        DEFAULT: '#5F4B3A',
        light: '#C8B6A6'
      },
      purple: {
        DEFAULT: '#8A6246'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
