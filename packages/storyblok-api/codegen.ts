import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_STORYBLOK_API_URL!]: {
        headers: {
          Token: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN!,
          Version: 'draft',
        },
      },
    },
  ],
  overwrite: true,
  config: {
    namingConvention: {
      typeNames: 'change-case-all#pascalCase',
    },
  },
  documents: ['./src/**/*.graphql'],
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        {
          add: {
            content: '/* eslint-disable @typescript-eslint/no-unused-vars */',
          },
        },
        {
          add: {
            content: '/* eslint-disable @typescript-eslint/no-explicit-any */',
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-document-nodes',
      ],
      hooks: {
        afterOneFileWrite: ['prettier --write', 'eslint --fix'],
      },
    },
  },
};

export default config;
