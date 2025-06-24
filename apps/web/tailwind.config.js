import defaultConfig from 'tailwind-config/tailwind.config';

/** @type {import("tailwindcss").Config} */
const config = {
  presets: [defaultConfig],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    // next-theme
    '../../packages/next-themes/src/**/*.{js,ts,jsx,tsx}',
    // ui
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    // storyblok
    '../../packages/storyblok/src/components/**/*.{js,ts,jsx,tsx}',
    '../../packages/storyblok/src/richtext/**/*.{js,ts,jsx,tsx}',
    '../../packages/storyblok/src/storyblok-preview/**/*.{js,ts,jsx,tsx}',
    '../../packages/storyblok/src/utils/resolveStoryblokStyles/styles/**/*.{js,ts,jsx,tsx}',
  ],
};

export default config;
