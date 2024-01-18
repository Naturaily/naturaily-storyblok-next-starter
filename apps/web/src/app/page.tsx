import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { env } from '@natu/env';
import { relations, getStoryblokApi } from '@natu/storyblok-api';
import { getStoryblokSeoData } from '@natu/storyblok-seo';
import { DynamicRender } from '@natu/storyblok-utils';

export const generateMetadata = async (): Promise<Metadata> => {
  const { isEnabled } = draftMode();
  const { getContentNode } = getStoryblokApi({ draftMode: isEnabled });

  const configData = await getContentNode({
    slug: env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
    relations,
  });

  return getStoryblokSeoData(configData.ContentNode?.content.seo, {
    slug: '/',
  });
};

const Page = async () => {
  const { isEnabled } = draftMode();
  const { getContentNode } = getStoryblokApi({ draftMode: isEnabled });

  const story = await getContentNode({
    slug: env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
    relations,
  });

  if (!story || !story?.ContentNode) {
    return notFound();
  }

  return <DynamicRender data={story.ContentNode.content} />;
};

export default Page;
