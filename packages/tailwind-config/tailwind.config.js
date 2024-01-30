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
      typography: theme => ({
        DEFAULT: {
          css: {
            'ul, ol': {
              '& > li > p': {
                margin: '0',
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};

module.exports = tailwindConfig;
