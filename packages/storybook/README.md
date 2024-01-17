# @natu/storybook

**[Storybook](https://storybook.js.org/)** - Create, test, and showcase your components.

The package contains default (global) `storybook` settings

## 🎯 Getting Started

1. Import `rootConfig` into your `.storybook/main.ts` file.

```ts
// .storybook/main.ts

import type { StorybookConfig } from '@storybook/nextjs';

import { rootConfig } from '@natu/storybook';

const config: StorybookConfig = {
  ...rootConfig,
  stories: [
    '../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/ui/src/**/*.stories.mdx',
  ],
  staticDirs: ['../static'],
  addons: [
    ...rootConfig.addons!,
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async config => {
    // @see: https://github.com/framer/motion/issues/1307
    config?.module?.rules?.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      include: /node_modules/,
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config?.resolve?.alias,
        },
      },
    };
  },
};

export default config;
```

2. Import `preview` into your `.storybook/preview.ts` file.

```tsx
// .storybook/preview.ts

import React from 'react';
// import { RouterContext } from 'next/dist/shared/lib/router-context';
import { preview } from '@natu/storybook';

import 'tailwind-config/global.css';

import * as NextImage from 'next/image';
import { GridDecorator } from '../src';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

export default preview;

// This is the place responsible for grouping all decorators from the storybook app
export const decorators = [GridDecorator];
```

3. Add the script to `package.json` in your `storybook` app

```json
// package.json

 "scripts": {
    "storybook": "storybook dev -p 6006",
    "storybook:build": "storybook build"
  },
```
