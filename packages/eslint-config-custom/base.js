import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  { plugins: { turbo: turboPlugin }, rules: { 'turbo/no-undeclared-env-vars': 'warn' } },
  {
    ignores: [
      '**/public/**',
      'dist/**',
      '**/node_modules/*',
      'node_modules/*',
      'apps/docs/*',
      '**/out/*',
      '**/.next/*',
      'coverage',
      '**/*.js',
      '**/*.json',
      '**/*.css',
      'public',
      'styles',
      '.next',
      'dist',
      '.turbo',
      'README.md',
      'schema.gql',
      'favicon.ico',
      'global.css',
      'styles.module.css',
      '**/*.graphql',
    ],
  },
];
