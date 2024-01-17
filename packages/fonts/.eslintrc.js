module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/export': 0,
  },
  extends: ['eslint-config-custom/eslint-next.js'],
  ignorePatterns: ['src/Bariol/files/*', 'src/BariolSerif/files/*'],
};
