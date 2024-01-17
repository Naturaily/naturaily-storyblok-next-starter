import { env } from '@natu/env';

/**
 * This TypeScript function removes the app name from a given slug string.
 * @param {string} slug - The `slug` parameter is a string representing a URL slug. It is likely used
 * in a Next.js or Storyblok project to determine the content to display on a page.
 * @returns The `getSlugWithoutAppName` function returns a modified version of the `slug` string with
 * any occurrence of the `NEXT_PUBLIC_STORYBLOK_APP_NAME` environment variable removed. The modified
 * string is returned as the output of the function.
 */
export const getSlugWithoutAppName = (slug?: string | null) => {
  if (!slug) {
    return '';
  }

  return slug.replace(env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER, '');
};
