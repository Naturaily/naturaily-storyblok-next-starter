import { color } from './color.ts';

/**
 * The function checks if the required environment variables STORYBLOK_SPACE_ID and
 * STORYBLOK_PERSONAL_ACCESS_TOKEN are set and returns true if they are, otherwise it logs an error
 * message and returns false.
 * @returns The function `checkEnv` returns a boolean value. It returns `true` if both
 * `process.env.STORYBLOK_SPACE_ID` and `process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN` are truthy
 * values. Otherwise, it returns `false`.
 */
export const checkEnv = () => {
  console.log(color('info', '▶️ Starting to check the correctness of environmental variables'));

  if (
    !process.env.STORYBLOK_SPACE_ID ||
    !process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN ||
    !process.env.STORYBLOK_REGION
  ) {
    console.error(color('danger', '🚨  The environmental variables are incorrect.'));
    console.table({
      STORYBLOK_SPACE_ID: process.env.STORYBLOK_SPACE_ID,
      STORYBLOK_PERSONAL_ACCESS_TOKEN: process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN,
      STORYBLOK_REGION: process.env.STORYBLOK_REGION,
    });

    return false;
  }

  console.log(color('success', '✅  The environmental variables are correct.'));

  return true;
};
