module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'import/export': 0,
    'import/extensions': 0,
    'no-console': 0,
    'no-restricted-syntax': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
  extends: ['eslint-config-custom/eslint-next.js'],
};
