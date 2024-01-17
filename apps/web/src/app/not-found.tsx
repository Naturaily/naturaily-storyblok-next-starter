import { draftMode } from 'next/headers';

import { env } from '@natu/env';
import { TAGS, getStoryblokApi, relations } from '@natu/storyblok-api';
import { DynamicRender, getSlugWithAppName } from '@natu/storyblok-utils';

const NotFound = async () => {
  const { isEnabled } = draftMode();
  const { getContentNode } = getStoryblokApi({ draftMode: isEnabled });

  const slug = getSlugWithAppName({
    slug: env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
  });

  const { ContentNode } = await getContentNode(
    { slug, relations },
    {
      next: {
        tags: [TAGS.SB_CONFIG],
      },
    },
  );

  return <DynamicRender data={ContentNode?.content?.notFoundPage?.content} />;
};

export default NotFound;
