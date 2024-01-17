module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['next.config.mjs'],
  extends: ['eslint-config-custom/eslint-next.js'],
};
