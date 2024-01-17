# @natu/react-query-gql

**[TanStack Query (react-query)](https://tanstack.com/query/latest/)** - Powerful asynchronous state management for TS/JS.

**[Codegen](https://the-guild.dev/graphql/codegen)** - Generate code from your GraphQL schema.

## 🎯 Getting Started

1. Create `query client`

```tsx
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
```

2. Import `ReactQueryProvider` into Provider file in your app and pass `query client` as a prop

```tsx
'use client';

import { ReactNode } from 'react';

import { ReactQueryProvider } from '@natu/react-query-gql';
import { queryClient } from '@natu/storyblok-api';

interface ProvidersProps {
  children?: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <ReactQueryProvider client={queryClient}>{children}</ReactQueryProvider>
);
```

3. [OPTION 1] Fetch the data with function `prefetchQuery` and pass it to the `Hydrate` component before passing it to the `dehydrate` function

```tsx
import { ReactNode } from 'react';
import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

// import your queryClient
import { queryClient } from '@natu/storyblok-api';

interface ComponentProps {
  children?: ReactNode;
}

export const Component = async ({ children }) => {
  await queryClient.prefetchQuery(['page', 'app'], () => myCustomFetch({ slug: 'app' }));
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
```

4. [OPTION 2 - without `Hydrate` component] Fetch the data and pass it to the custom client component.

```tsx
// Server component

// import your queryClient
import { queryClient } from '@natu/storyblok-api';


export const Component = async () => {
  const data = await myCustomFetch({ slug: 'app' });

  return <Posts initialData={data} />
};

----------------------------------

'use client'

import { useQuery } from '@tanstack/react-query';


interface PostsProps {
  initialData: YourInterface
}

const Posts = ({ initialData }:PostsProps) => {
  const { data } = useQuery({
    queryKey: ['app'],
    queryFn: () => myCustomFetch({ slug: 'app' }),
    initialData, // <-- your initial data fetched on server
  });

  return <div>{...}</div>
};
```

## 👨‍💻 Codegen example

If you want to generate `types` and `SDK function` use this configuration

```ts
// codegen.ts

import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      // my endpoit for schema - can be also local schema
      'https://gapi.storyblok.com/v1/api': {
        headers: {
          // Custom headers
          Token: process.env.MY_SECRET_TOKEN as string,
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
  documents: ['./src/**/*.graphql'], // my queries and mutations
  generates: {
    // Output
    'src/generated/graphql.ts': {
      plugins: [
        {
          add: {
            content: '/* eslint-disable @typescript-eslint/no-unused-vars */',
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      hooks: {
        afterOneFileWrite: ['prettier --write', 'eslint --fix'],
      },
    },
  },
};

export default config;
```

Add the script to `package.json`

```json
   "scripts": {
    "codegen": "yarn graphql-code-generator --config codegen.ts" // path to your codgen file
  },

```
