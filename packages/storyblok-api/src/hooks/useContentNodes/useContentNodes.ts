import { useQuery } from '@tanstack/react-query';

import { useStoryblokSdk } from '../useStoryblokSdk';

interface UseContentNodeInput {
  page?: number;
  perPage?: number;
}

export const useContentNodes = ({ page, perPage }: UseContentNodeInput) => {
  const { getContentNodes } = useStoryblokSdk();

  const variables = {
    page,
    perPage,
  };

  return useQuery({
    queryKey: ['pages'],
    queryFn: () => getContentNodes(variables),
    select: res => res,
  });
};
