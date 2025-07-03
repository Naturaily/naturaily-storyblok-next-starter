import { nextJsConfig } from 'eslint-config-custom/next-js';

/** @type {import("eslint").Linter.Config} */
export default [...nextJsConfig, { rules: { 'no-console': 0 } }];
