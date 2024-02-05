const shadcnPreset = require('./shadcd-preset');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  mode: 'jit',
  darkMode: ['class'],
  presets: [shadcnPreset],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};

module.exports = tailwindConfig;
