import { draftMode } from 'next/headers';

import { env } from '@natu/env';
import { TAGS, getStoryblokApi, relations } from '@natu/storyblok-api';
import { DynamicRender, getSlugWithAppName } from '@natu/storyblok-utils';

const NotFound = async () => {
  const { isEnabled } = draftMode();
  const { getConfigNode } = getStoryblokApi({ draftMode: isEnabled });

  const slug = getSlugWithAppName({
    slug: env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
  });

  const configData = await getConfigNode(
    {
      slug,
      skipFooter: true,
      skipHeader: true,
      skipSeo: true,
      relations,
    },
    {
      next: {
        tags: [TAGS.SB_CONFIG],
      },
    },
  );

  return <DynamicRender data={configData.ConfigItem?.content?.notFoundPage?.content} />;
};

export default NotFound;
