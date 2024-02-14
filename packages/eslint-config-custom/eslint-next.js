const orderImports = require('./order-imports');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:security/recommended-legacy',
    'prettier',
  ],
  plugins: ['import', 'eslint-plugin-import-helpers', '@typescript-eslint', 'security'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mdx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  rules: {
    'global-require': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-console': 2,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'newline-before-return': 2,
    '@typescript-eslint/no-var-requires': 1,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 0,
    '@next/next/no-html-link-for-pages': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'import-helpers/order-imports': [
      2,
      {
        newlinesBetween: 'always',
        groups: [['/^next/', 'module'], orderImports, [('parent', 'sibling', 'index')]],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'no-restricted-imports': [
      2,
      {
        paths: [
          {
            name: 'next/link',
            message: 'Use `@natu/next-link` instead.',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      settings: {
        next: {
          rootDir: ['apps/*/', 'packages/*/'],
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.mdx'],
        },
      },
      files: '*.mdx',
      parser: 'eslint-mdx',
    },
  ],
};
