import type { StorybookConfig } from '@storybook/nextjs';

export const rootConfig: Omit<StorybookConfig, 'stories'> = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y', // Additional addon for accessibility
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: false, // Generate docs automatically for each story
  },
};
