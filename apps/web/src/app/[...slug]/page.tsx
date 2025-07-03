import { Metadata, ResolvingMetadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { env } from '@natu/env';
import { getStoryblokSdk } from '@natu/storyblok/api';
import { StoryblokStory } from '@natu/storyblok/DynamicRender';
import { getSlugWithAppName } from '@natu/storyblok/getSlugWithAppName';
import { getSlugWithoutAppName } from '@natu/storyblok/getSlugWithoutAppName';
import { getStoryblokSeoData } from '@natu/storyblok/getStoryblokSeoData';
import { isSlugExcludedFromRouting } from '@natu/storyblok/isSlugExcludedFromRouting';
import { isExcludedSlugs } from '@natu/utils/isExcludedSlugs';
import { tryCatch } from '@natu/utils/tryCatch';

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
  const { data } = await tryCatch(
    getContentNode({
      slug,
    }),
  );

  return getStoryblokSeoData(data?.data?.story?.content?.seo, {
    slug: `/${getSlugFromParams(awaitedParas.slug)}`,
    prevData,
  });
};

export const generateStaticParams = async () => {
  // * Please add more slugs to the `excludingSlugs` array if you want to exclude more slugs from routing.
  const excludingSlugs = [`/${env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING}`];

  // https://www.storyblok.com/docs/api/content-delivery/v2/links/retrieve-multiple-links
  const { getLinks } = getStoryblokSdk({ draftMode: false });

  const { data } = await getLinks({
    page: 1,
    perPage: 1000,
  });

  if (!data) {
    return [];
  }

  const links = Object.values(data.links!).map(value => ({
    ...value,
    slug: getSlugWithoutAppName(value.slug),
  }));

  return links
    .filter(item => isExcludedSlugs({ item, excludedSlugs: excludingSlugs }))
    .map(({ slug }) => {
      if (!slug) {
        return null;
      }

      return {
        slug: slug.split('/').filter(Boolean),
      };
    })
    .filter(Boolean);
};

const Page = async ({ params }: PageProps) => {
  const { isEnabled } = await draftMode();
  const { getContentNode } = getStoryblokSdk({ draftMode: isEnabled });

  const awaitedParams = await params;

  const slug = getSlugWithAppName({ slug: getSlugFromParams(awaitedParams.slug) });

  if (isSlugExcludedFromRouting(slug)) {
    notFound();
  }

  const { data } = await tryCatch(getContentNode({ slug }));

  if (!data || !data?.data?.story?.content) {
    notFound();
  }

  return <StoryblokStory story={data?.data?.story} />;
};

export default Page;
