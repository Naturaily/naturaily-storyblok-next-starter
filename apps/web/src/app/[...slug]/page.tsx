import { Metadata, ResolvingMetadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { getStoryblokSdk } from '@natu/storyblok/api';
import { StoryblokStory } from '@natu/storyblok/DynamicRender';
import { getSlugWithAppName } from '@natu/storyblok/getSlugWithAppName';
import { getStoryblokSeoData } from '@natu/storyblok/getStoryblokSeoData';
import { isSlugExcludedFromRouting } from '@natu/storyblok/isSlugExcludedFromRouting';

const getSlugFromParams = <T extends string[] | string>(slug?: T) => {
  const path = (slug && Array.isArray(slug) && slug.join('/')) || '';

  return path;
};

interface PageProps {
  params: {
    slug: string[];
  };
}

export const generateMetadata = async (
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { isEnabled } = await draftMode();
  const { getContentNode } = getStoryblokSdk({ draftMode: isEnabled });

  const awaitedParas = await params;

  const slug = getSlugWithAppName({ slug: getSlugFromParams(awaitedParas.slug) });

  const prevData = await parent;
  const { data } = await getContentNode({
    slug,
  });

  return getStoryblokSeoData(data?.story?.content?.seo, {
    slug: `/${getSlugFromParams(awaitedParas.slug)}`,
    prevData,
  });
};

const Page = async ({ params }: PageProps) => {
  const { isEnabled } = await draftMode();
  const { getContentNode } = getStoryblokSdk({ draftMode: isEnabled });

  const awaitedParams = await params;

  const slug = getSlugWithAppName({ slug: getSlugFromParams(awaitedParams.slug) });

  if (isSlugExcludedFromRouting(slug)) {
    notFound();
  }

  const { data } = await getContentNode({ slug });

  if (!data || !data?.story?.content) {
    notFound();
  }

  return <StoryblokStory story={data.story} />;
};

export default Page;
