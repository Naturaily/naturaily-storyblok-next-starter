import { ISbLink } from 'storyblok-js-client';

type IsExcludedSlugsInput = {
  excludedSlugs?: string[];
  item: ISbLink;
};

export const isExcludedSlugs = ({ excludedSlugs, item }: IsExcludedSlugsInput) => {
  if (item.slug === '/') return false;

  if (item.is_folder) {
    return false;
  }

  if (!excludedSlugs) {
    return true;
  }

  return !excludedSlugs.some(restrictedSlug => item?.slug?.startsWith(restrictedSlug));
};
