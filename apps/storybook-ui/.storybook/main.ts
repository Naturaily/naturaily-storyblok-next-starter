import type { StorybookConfig } from '@storybook/nextjs';

import { rootConfig } from '@natu/storybook';

const config: StorybookConfig = {
  ...rootConfig,
  stories: ['../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)'],
};

export default config;
