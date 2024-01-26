import Storyblok from 'storyblok-js-client/dist/types';

type Part = 'datasources' | 'stories' | 'components';

export const setStoryblokPart = (Client: Storyblok, spaceId: string, part: Part, data: object) => {
  Client.post(`spaces/${spaceId}/${part}/`, data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
