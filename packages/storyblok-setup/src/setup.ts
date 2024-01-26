import { setupDatasources } from './steps/setupDatasources.ts';
// import fs from 'fs'
// import StoryblokClient from 'storyblok-js-client'

// const Storyblok = new StoryblokClient({
//   accessToken: '',
// });

export const setup = (() => {
  setupDatasources();

  // Storyblok.get('cdn/stories', {
  //   per_page: 100
  // })
  // .then(response => {
  //   fs.writeFileSync('data.json', JSON.stringify(response.data.stories));
  // }).catch(error => {
  //   console.log(error)
  // })
})();
