module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'import/export': 0,
  },
  extends: ['eslint-config-custom/eslint-next.js'],
};
