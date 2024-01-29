import { MetadataRoute } from 'next';
import { draftMode } from 'next/headers';

import { env } from '@natu/env';
import { getStoryblokApi } from '@natu/storyblok-api';
import { getSlugWithAppName, getSlugWithoutAppName } from '@natu/storyblok-utils';

// add more -> "page,other-content-type,other"
const validSitemapComponents = 'page';

// Google's limit is 50,000 URLs per sitemap
const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const { isEnabled } = draftMode();
  const { getContentNodes } = getStoryblokApi({ draftMode: isEnabled });

  const perPage = 100;
  const index = 1;
  const requests = [];

  const initial = await getContentNodes({
    startsWith: env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
    page: 1,
    perPage: 1,
    skipContent: true,
    excludingSlugs: getSlugWithAppName({
      slug: `${env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING}/*`,
    }),
    filterQuery: {
      component: {
        in: validSitemapComponents,
      },
    },
  });

  const totalPostItems = initial?.ContentNodes?.total || perPage;
  const totalPages = Math.ceil(totalPostItems / perPage);

  for (let i = index; i <= totalPages; i++) {
    requests.push(
      getContentNodes({
        startsWith: env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
        perPage,
        page: i,
        excludingSlugs: getSlugWithAppName({
          slug: `${env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING}/*`,
        }),
        filterQuery: {
          component: {
            in: validSitemapComponents,
          },
        },
      }),
    );
  }

  const responses = await Promise.all(requests).catch(err => {
    throw new Error(`Generate sitemap error -> ${err}`);
  });

  if (!Array.isArray(responses)) {
    throw new Error('Generate sitemap error');
  }

  const allItems = responses.map(res => res?.ContentNodes?.items).flat();

  return allItems
    .filter(item => {
      const [seo] = item?.content?.seo || [];

      if (seo?.noIndex) {
        return false;
      }

      return true;
    })
    .map(item => ({
      url: `${env.NEXT_PUBLIC_APP_URL}${getSlugWithoutAppName(item?.full_slug)}`,
      lastModified: item?.published_at || item?.first_published_at || new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }));
};

export default Sitemap;
