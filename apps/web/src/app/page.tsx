import { Metadata, ResolvingMetadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { env } from '@natu/env';
import { getStoryblokSdk } from '@natu/storyblok/api';
import { StoryblokStory } from '@natu/storyblok/DynamicRender';
import { getStoryblokSeoData } from '@natu/storyblok/getStoryblokSeoData';
import { tryCatch } from '@natu/utils/tryCatch';

export const generateMetadata = async (
  _: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { isEnabled } = await draftMode();
  const { getContentNode } = getStoryblokSdk({ draftMode: isEnabled });

  const prevData = await parent;

  const { data } = await tryCatch(
    getContentNode({
      slug: env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
    }),
  );

  return getStoryblokSeoData(data?.data?.story?.content?.seo, {
    slug: '/',
    prevData,
  });
};

const Page = async () => {
  const { isEnabled } = await draftMode();
  const { getContentNode } = getStoryblokSdk({ draftMode: isEnabled });

  const { data } = await tryCatch(
    getContentNode({
      slug: env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
    }),
  );

  if (!data || !data?.data?.story?.content) {
    notFound();
  }

  return <StoryblokStory story={data?.data?.story} />;
};

export default Page;
