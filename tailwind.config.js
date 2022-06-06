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
      primary: {
        DEFAULT: '#31d6ad',
      },
      secondary: {
        DEFAULT: '#5653b0',
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
