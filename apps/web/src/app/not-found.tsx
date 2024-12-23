import { draftMode } from 'next/headers';

import { getStoryblokSdk } from '@natu/storyblok-ui';
import { DynamicRender } from '@natu/storyblok-utils';

const NotFound = async () => {
  const { isEnabled } = await draftMode();
  const { getConfigNode } = getStoryblokSdk({ draftMode: isEnabled });

  const { data } = await getConfigNode();

  return <DynamicRender data={data?.story?.content?.notFoundPage?.content} />;
};

export default NotFound;
