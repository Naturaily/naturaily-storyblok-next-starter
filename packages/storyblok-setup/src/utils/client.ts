import StoryblokClient from 'storyblok-js-client';

export const storyblok = new StoryblokClient({
  oauthToken: process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN,
  region: process.env.STORYBLOK_REGION,
});
