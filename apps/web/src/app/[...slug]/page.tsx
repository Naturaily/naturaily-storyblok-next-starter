import { Metadata, ResolvingMetadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { getStoryblokSeoData } from '@natu/storyblok-seo';
import { getStoryblokSdk } from '@natu/storyblok-ui';
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

  try {
    const { data } = await getContentNode({ slug });

    return <DynamicRender data={data.story.content} />;
  } catch (err) {
    return notFound();
  }
};

export default Page;
