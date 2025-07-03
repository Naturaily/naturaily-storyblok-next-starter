/* eslint-disable no-console */
import StoryblokClient from 'storyblok-js-client';

type RedirectItem = {
  name: string;
  created_at: string;
  published_at: string;
  updated_at: string;
  id: number;
  uuid: string;
  content: {
    _uid: string;
    status?: string;
    newPath?: string;
    oldPath?: string;
    component?: string;
  };
  slug: string;
  full_slug: string;
  sort_by_date: null | string;
  position: number;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: null | Record<string, unknown>;
  group_id: string;
  first_published_at: string;
  release_id: null | number;
  lang: string;
  path: null | string;
  alternates: string[];
  default_full_slug: null | string;
  translated_slugs: null | string[];
};

export const getStoryblokRedirects = async () => {
  const Storyblok = new StoryblokClient({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
    maxRetries: 0,
    resolveNestedRelations: false,
    cache: {
      clear: 'auto',
      type: 'memory',
    },
  });

  let hasNextPage = true;
  let page = 1;
  const perPage = 100;
  const items: RedirectItem[] = [];

  try {
    while (hasNextPage) {
      const { data, total } = await Storyblok.get('cdn/stories', {
        page,
        per_page: perPage,
        filter_query: {
          component: {
            in: 'redirect',
          },
          oldPath: {
            is: 'not_empty',
          },
          newPath: {
            is: 'not_empty',
          },
          status: {
            is: 'not_empty',
          },
        },
        starts_with: process.env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
      });

      items.push(...data.stories);

      hasNextPage = total > page * perPage;
      page = page + 1;

      const redirects = items
        .map(item => ({
          source: item?.content?.oldPath || '',
          destination: item?.content?.newPath || '',
          permanent: !(item?.content?.status === '307'),
        }))
        .filter(
          item =>
            item.source &&
            item.source.startsWith('/') &&
            item.destination &&
            item.destination.startsWith('/'),
        );

      return redirects;
    }
  } catch (err) {
    console.log('getStoryblokRedirects Error -> ', err);

    return [];
  }
};
