const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig }
 */

module.exports = {
  content: ['./src//*.{ts,tsx}'],
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
        DEFAULT: '#f07575',
      },
      secondary: {
        DEFAULT: '#2e91d9',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
