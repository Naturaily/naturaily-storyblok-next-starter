# tsconfig

Contains default TypeScript config. It consists of a base configuration extended with recommended settings for the next.js application.

These are base shared `tsconfig.json`s from which all other `tsconfig.json`'s inherit from.

[TS](https://www.typescriptlang.org/)

## 🎯 Getting Started

Create a `tsconfig.json` file in your package and extend it with the `tsconfig/nextjs.json` file

```json
// tsconfig.json
{
  "extends": "tsconfig/nextjs.json",
  "include": ["."],
  "exclude": ["node_modules", ".next", "coverage", ".turbo"]
}
```
