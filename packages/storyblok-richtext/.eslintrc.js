module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/naming-convention': 0,
  },
  extends: ['eslint-config-custom/eslint-next.js'],
};
