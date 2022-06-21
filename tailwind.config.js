const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig }
 */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      min: '320px',
      xs: '475px',
      ...defaultTheme.screens,
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      yellow: '#e8d15d',
      primary: {
        DEFAULT: '#7d0909',
      },
      secondary: {
        DEFAULT: '#04175c',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
