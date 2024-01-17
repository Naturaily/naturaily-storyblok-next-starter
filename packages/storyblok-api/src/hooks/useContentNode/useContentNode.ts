import { useQuery } from '@tanstack/react-query';

import { useStoryblokSdk } from '../useStoryblokSdk';

interface UseContentNodeInput {
  slug: string;
}

/**
 * This function uses the Storyblok SDK to retrieve a content node based on a given slug and returns it
 * as a query result.
 * @param {UseContentNodeInput}  - - `slug`: a string representing the unique identifier of the content
 * node to be fetched.
 * @returns The `useContentNode` function is returning a `useQuery` hook that takes in an object with
 * three properties: `queryKey`, `queryFn`, and `select`. The `queryKey` is an array that contains two
 * elements: the first element is a string key that identifies the type of content being fetched (in
 * this case, it's "page"), and the second element is the
 */
export const useContentNode = ({ slug }: UseContentNodeInput) => {
  const { getContentNode } = useStoryblokSdk();

  return useQuery({
    queryKey: ['page', slug],
    queryFn: () => getContentNode({ slug }),
    select: res => res.ContentNode,
  });
};
