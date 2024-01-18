import { Metadata } from 'next';
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { isEnabled } = draftMode();
  const { getContentNode } = getStoryblokApi({ draftMode: isEnabled });

  const slug = getSlugWithAppName({ slug: getSlugFromParams(params.slug) });

  const configData = await getContentNode({
    slug,
    relations,
  });

  return getStoryblokSeoData(configData.ContentNode?.content.seo, {
    slug: `/${getSlugFromParams(params.slug)}`,
  });
}

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

  return (
    <div>
      <DynamicRender data={story?.ContentNode?.content} />
    </div>
  );
};

export default Page;
