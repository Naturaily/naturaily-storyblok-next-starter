const defaultConfig = require('tailwind-config/tailwind.config');

/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    // ui
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    // responsive image
    '../../packages/next-responsive-image/src/ResponsiveImage/ResponsiveImage.tsx',
    // storybook
    './src/decorators/decorators/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [defaultConfig],
};

module.exports = config;
