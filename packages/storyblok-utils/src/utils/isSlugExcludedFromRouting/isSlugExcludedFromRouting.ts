import { env } from '@natu/env';

const excludingSlugsFromRouting =
  env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING?.split(',');

/**
 * The function checks if a given slug is excluded from routing based on a list of excluded slugs.
 * @param {string} slug - The `slug` parameter is a string that represents a URL slug. A slug is a
 * user-friendly URL component that typically represents a page or resource on a website. It is often
 * used in routing to determine which page or resource to display based on the URL.
 * @returns a boolean value. It returns true if the given slug is included in the array of
 * excludingSlugsFromRouting, and false otherwise.
 */
export const isSlugExcludedFromRouting = (slug: string) => {
  if (!excludingSlugsFromRouting) {
    return false;
  }

  return excludingSlugsFromRouting.some((excludedSlug: string) => slug.includes(excludedSlug));
};
