import { getStoryblokSdk } from '@natu/storyblok/api';
import { StoryblokStory } from '@natu/storyblok/DynamicRender';
import { draftMode } from 'next/headers';

const NotFound = async () => {
  const { isEnabled } = await draftMode();
  const { getConfigNode } = getStoryblokSdk({ draftMode: isEnabled });

  const { data } = await getConfigNode();

  return <StoryblokStory story={data?.story?.content?.notFoundPage} />;
};

export default NotFound;
