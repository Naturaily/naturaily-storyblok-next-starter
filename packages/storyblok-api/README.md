# @natu/storyblok-api

The package responsible for communication nextjs <=> storyblok.

## 🎯 Getting Started

1. Create an `.env` file and add the `NEXT_PUBLIC_STORYBLOK_TOKEN` variable. Its value is the `draft token` from the Storyblok panel.

2. Run the script

```bash
  yarn codegen
```

It will generate types and SDK function based on your graphql queries. You can create new queries in the `src/graphql/query` folder

### 🔥 getStoryblokApi (SDK)

#### Server

In the `src/api.ts` folder there is a function that will return all the methods generated from your queries. It needs to pass the `draftMode` parameter, which is boolean. It changes the query context.

```tsx
//page.tsx / serverComponent tsx

const { isEnabled } = draftMode();
const api = getStoryblokApi({ draftMode: isEnabled });
```

**The api variable is now an object that contains all the typed methods**

An example of fetch Storyblok page data:

```tsx
import { draftMode } from 'next/headers';

import { getStoryblokApi, keys, queryClient } from '@natu/storyblok-api';

import {
  DynamicRender,
  excludingSlugsFromRouting,
  getMetaDataFromSB,
  getSlugWithAppName,
  getSlugWithoutAppName,
  isSlugExcludedFromRouting,
} from '@natu/storyblok-utils';

export const Page = async ({ params }: PageProps) => {
  const { isEnabled } = draftMode();
  const { getContentNode } = getStoryblokApi({ draftMode: isEnabled });

  const slug = getSlugWithAppName({ slug: getSlugFromParams(params.slug) });

  if (isSlugExcludedFromRouting(slug)) {
    notFound();
  }

  const story = await getContentNode({ slug });

  if (!story || !story?.ContentNode) {
    notFound();
  }

  return <DynamicRender data={story?.ContentNode?.content} />;
};
```

#### Client

To use the API in client components, you need to import the use hook `useStoryblokSdk`. It already has a context draftMode in it.

```tsx
'use-client';

import { useStoryblokSdk } from '@natu/storyblok-api';


export const Component = () => {
  const api = useStoryblokSdk();

  return <div>{...}</div>;
};
```

I recommend using custom hooks with `react-query` connection

```ts
// src/hooks/useContentNode

import { useQuery } from '@tanstack/react-query';

import { useStoryblokSdk } from '../useStoryblokSdk';

interface UseContentNodeInput {
  slug: string;
}

export const useContentNode = ({ slug }: UseContentNodeInput) => {
  const { getContentNode } = useStoryblokSdk();

  return useQuery({
    queryKey: ['page', slug],
    queryFn: () => getContentNode({ slug }),
    select: res => res.ContentNode,
  });
};
```

```tsx
'use-client';

import { useContentNode } from '@natu/storyblok-api';


export const Component = () => {
  const { data } = useContentNode({ slug:'app' });

  return <div>{...}</div>;
};
```
