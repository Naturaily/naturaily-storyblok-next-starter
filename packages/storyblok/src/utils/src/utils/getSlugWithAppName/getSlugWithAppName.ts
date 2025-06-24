import { env } from '@natu/env';

interface GetSlugWithAppNameInput {
  slug?: string;
}

/**
 * The function `getSlugWithAppName` returns a slug with the app name if it exists, otherwise it
 * returns just the app name.
 * @param {GetSlugWithAppNameInput}  - - `slug`: A string representing the slug value.
 */
export const getSlugWithAppName = ({ slug }: GetSlugWithAppNameInput) =>
  slug
    ? `${env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER}/${slug.replace('index', '')}`
    : env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER;
