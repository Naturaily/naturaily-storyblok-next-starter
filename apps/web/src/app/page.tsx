import { Metadata, ResolvingMetadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { env } from '@natu/env';
import { getStoryblokSeoData } from '@natu/storyblok-seo';
import { getStoryblokSdk } from '@natu/storyblok-ui';
import { DynamicRender, StoryblokStory } from '@natu/storyblok-utils';

export const generateMetadata = async (
  _: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { isEnabled } = await draftMode();
  const { getContentNode } = getStoryblokSdk({ draftMode: isEnabled });

  const prevData = await parent;
  const configData = await getContentNode({
    slug: env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
  });

  return getStoryblokSeoData(configData?.data?.story?.content?.seo, {
    slug: '/',
    prevData,
  });
};

const Page = async () => {
  const { isEnabled } = await draftMode();
  const { getContentNode } = getStoryblokSdk({ draftMode: isEnabled });

  const { data } = await getContentNode({
    slug: env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
  });

  if (!data || !data?.story?.content) {
    notFound();
  }

  return <StoryblokStory story={data.story} />;
};

export default Page;
