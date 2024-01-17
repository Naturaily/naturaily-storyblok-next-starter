# tailwind-config

Contains default Tailwind config and necessary packages.

If you’re using VS Code, **there is official Tailwind CSS IntelliSense plugin** that includes a dedicated Tailwind CSS language mode that has support for all of the custom at-rules and functions Tailwind uses.

[Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 🎯 Getting Started

The `tailwind.config.js` file contains all the default styles for the application.

1. In the new package, create a `tailwind.config.js` and `postcss.config.js` file and import the default settings as follows:

```js
// tailwind.config.js

const defaultConfig = require('tailwind-config/tailwind.config');

/** @type {import("tailwindcss").Config} */
const config = {
  presets: [defaultConfig],
};

module.exports = config;
```

```js
// postcss.config.js

module.exports = require('tailwind-config/postcss.config');
```

2. Import the `global.css` file into the global place file in your application, e.g. `layout.tsx`

```tsx
// layout.tsx

import 'tailwind-config/global.css';
```

3. You can extend and overwrite the default settings

```js
// tailwind.config.js

const defaultConfig = require('tailwind-config/tailwind.config');

/** @type {import("tailwindcss").Config} */
const config = {
  presets: [defaultConfig],
  theme: {
    extend: {
      colors: {
        primary: {
          500: #000000
        }
      }
    }
  }
};

module.exports = config;
```
