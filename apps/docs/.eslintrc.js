module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  settings: {
    'mdx/code-blocks': true,
    'mdx/language-mapper': {},
  },
  extends: ['plugin:mdx/recommended'],
};
