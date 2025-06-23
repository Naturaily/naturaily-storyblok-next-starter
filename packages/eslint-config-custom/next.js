import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import pluginNext from '@next/eslint-plugin-next';
import importHelpers from 'eslint-plugin-import-helpers';
import { config as baseConfig } from './base.js';
import { orderImports } from './order-imports.js';

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const nextJsConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: { ...globals.serviceworker, ...globals.node },
    },
  },
  {
    plugins: { '@next/next': pluginNext },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 0,
      'no-restricted-imports': [
        2,
        { paths: [{ name: 'next/link', message: 'Use `@capitalise/next-link` instead.' }] },
      ],
    },
  },
  {
    plugins: { 'import-helpers': importHelpers },
    rules: {
      'global-require': 0,
      'no-underscore-dangle': 0,
      'no-plusplus': 0,
      'no-console': 2,
      '@typescript-eslint/no-unused-vars': 2,
      '@typescript-eslint/lines-between-class-members': 0,
      '@typescript-eslint/no-throw-literal': 0,
      'import/prefer-default-export': 0,
      'import/no-extraneous-dependencies': 0,
      'newline-before-return': 2,
      '@typescript-eslint/no-var-requires': 1,
      '@typescript-eslint/ban-ts-comment': 0,
      'import-helpers/order-imports': [
        2,
        {
          newlinesBetween: 'always',
          groups: [['/^next/', 'module'], orderImports, [('parent', 'sibling', 'index')]],
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
    },
  },
  {
    plugins: { 'react-hooks': pluginReactHooks },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 0,
      'react/jsx-props-no-spreading': 0,
      'react/prop-types': 0,
      'react/button-has-type': 0,
      'react/destructuring-assignment': 0,
      'react/require-default-props': 0,
      'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    },
  },
];
