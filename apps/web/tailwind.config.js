const defaultConfig = require('tailwind-config/tailwind.config');

/** @type {import("tailwindcss").Config} */
const config = {
  presets: [defaultConfig],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    // ui
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    // storyblok-preview
    '../../packages/storyblok-preview/src/components/**/*.{js,ts,jsx,tsx}',
    // storyblok-utils - resolve storyblok styles func
    '../../packages/storyblok-utils/src/utils/resolveStoryblokStyles/styles/**/*.{js,ts,jsx,tsx}',
    // storyblok-richtext
    '../../packages/storyblok-richtext/src/components/**/*.{js,ts,jsx,tsx}',
    // storyblok-ui
    '../../packages/storyblok-ui/src/components/**/*.{js,ts,jsx,tsx}',
    // next-theme
    '../../packages/next-themes/src/**/*.{js,ts,jsx,tsx}',
    // theme-customizer
    '../../packages/theme-customizer/src/components/**/*.{js,ts,jsx,tsx}',
  ],
};

module.exports = config;
