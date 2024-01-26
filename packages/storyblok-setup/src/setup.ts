import StoryblokClient from 'storyblok-js-client';

import { setStoryblokPart } from './setStoryblokPart.ts';
// import fs from 'fs'

const Storyblok = new StoryblokClient({
  oauthToken: process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN,
});

export const setup = (() => {
  if (!process.env.STORYBLOK_SPACE_ID) {
    console.log('Storyblok Space ID was not provided.');

    return;
  }

  setStoryblokPart(Storyblok, process.env.STORYBLOK_SPACE_ID, 'datasources', {});

  // Storyblok.get('cdn/stories', {
  //   per_page: 100
  // })
  // .then(response => {
  //   fs.writeFileSync('data.json', JSON.stringify(response.data.stories));
  // }).catch(error => {
  //   console.log(error)
  // })
})();
