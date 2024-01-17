# eslint-config-custom

[Eslint](https://eslint.org/)

The package contains the appropriate `eslint` rules for the application such as validation, import sorting.

## 🎯 Getting Started

The `eslint-custom-config` package should be imported into the appropriate module as `devDependencies`. Add the appropriate script to your `packake.json`

```json
// package.json

{
  "name": "my-new-package",
  "version": "0.0.0",
  "private": true,
  "main": "./index.ts",
  "types": "./index.ts",
  "license": "MIT",
  "files": ["index.ts"],
  "scripts": {
    "eslint:format": "eslint src --fix"
  },
  "devDependencies": {
    "eslint-config-custom": "*" // <--
  }
}
```

Then execute the command:

```bash
yarn install

```

In the new package, create the `eslintrc.js` file and add the appropriate file in the `extends` plc. Rules imported from `eslint-config-custom/eslint-next.js` are default only. You can easily overwrite them or add new ones.

```js
// eslintrc.js

module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-console': 1,
  },
  extends: ['eslint-config-custom/eslint-next.js'], // <--
};
```

## 📚 Automatic sorting of imports in files

If you want eslint to automatically sort imports, make sure that your package is added to the `order-imports.js` file.

```js
// order-imports.js

const appPrefix = '@natu';

const commonOrderImports = [
  `/^${appPrefix}/jest-config/`,
  `/^${appPrefix}/googletagmanager/`,
  `/^${appPrefix}/utils/`,
  `/^${appPrefix}/env/`,
];

const nextOrderImports = [
  `/^${appPrefix}/ui/`,
  `/^${appPrefix}/next-link/`,
  `/^${appPrefix}/responsive-image/`,
  `/^${appPrefix}/hooks/`,
  `/^${appPrefix}/seo/`,
  `/^${appPrefix}/react-query-gql/`,
];

const storyblokOrderImports = [
  `/^${appPrefix}/storyblok-ui/`,
  `/^${appPrefix}/storyblok-api/`,
  `/^${appPrefix}/storyblok-utils/`,
];

module.exports = [...commonOrderImports, ...nextOrderImports, ...storyblokOrderImports];
```

### 🙏 Result

```tsx
// example component

// node_modules first
import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

// my orders
import { env } from '@natu/env';
import { getApi, keys, queryClient } from '@natu/storyblok-api';
import {
  DynamicRender,
  excludingSlugsFromRouting,
  getMetaDataFromSB,
  getSlugWithAppName,
  getSlugWithoutAppName,
  isSlugExcludedFromRouting,
} from '@natu/storyblok-utils';

// custom imports in package
import { getSlugFromParams } from './utils/getSlugFromParams';
```
