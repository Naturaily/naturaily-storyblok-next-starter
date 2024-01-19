import { Metadata, ResolvingMetadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { getStoryblokApi, relations } from '@natu/storyblok-api';
import { getStoryblokSeoData } from '@natu/storyblok-seo';
import {
  DynamicRender,
  getSlugWithAppName,
  isSlugExcludedFromRouting,
} from '@natu/storyblok-utils';

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
  const { isEnabled } = draftMode();
  const { getContentNode } = getStoryblokApi({ draftMode: isEnabled });

  const slug = getSlugWithAppName({ slug: getSlugFromParams(params.slug) });

  const prevData = await parent;
  const configData = await getContentNode({
    slug,
    relations,
  });

  return getStoryblokSeoData(configData.ContentNode?.content.seo, {
    slug: `/${getSlugFromParams(params.slug)}`,
    prevData,
  });
};

const Page = async ({ params }: PageProps) => {
  const { isEnabled } = draftMode();
  const { getContentNode } = getStoryblokApi({ draftMode: isEnabled });

  const slug = getSlugWithAppName({ slug: getSlugFromParams(params.slug) });

  if (isSlugExcludedFromRouting(slug)) {
    return notFound();
  }

  const story = await getContentNode({ slug, relations });

  if (!story || !story?.ContentNode) {
    return notFound();
  }

  return <DynamicRender data={story?.ContentNode?.content} />;
};

export default Page;
