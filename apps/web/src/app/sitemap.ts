/* eslint-disable no-await-in-loop */
import { MetadataRoute } from 'next';
import { draftMode } from 'next/headers';

import { env } from '@natu/env';
import { getStoryblokSdk } from '@natu/storyblok-ui';
import { getSlugWithAppName, getSlugWithoutAppName } from '@natu/storyblok-utils';

// add more content types -> "page,other-content-type,other"
const validSitemapComponents = 'page';

// Google's limit is 50,000 URLs per sitemap
const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const { isEnabled } = await draftMode();
  const { getContentNodes } = getStoryblokSdk({ draftMode: isEnabled });

  let hasNextPage = true;
  let page = 1;
  const items = [];

  while (hasNextPage) {
    const { total, data } = await getContentNodes({
      startsWith: env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
      page,
      perPage: 100,
      excludingSlugs: getSlugWithAppName({
        slug: `${env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING}/*`,
      }),
      relations: '',
      filterQuery: {
        component: {
          in: validSitemapComponents,
        },
      },
    });

    items.push(...data.stories);
    page++;
    hasNextPage = items.length < total;
  }

  if (items.length === 0) {
    // eslint-disable-next-line no-console
    console.error('No items found');

    return [];
  }

  return items
    .filter(item => {
      const [seo] = item?.content?.seo || [];

      if (seo?.noIndex) {
        return false;
      }

      return true;
    })
    .map(item => ({
      url: `${env.NEXT_PUBLIC_APP_URL}${getSlugWithoutAppName(item?.full_slug)}`.replace(/\/$/, ''),
      lastModified: item?.published_at || item?.first_published_at || new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }));
};

export default Sitemap;
