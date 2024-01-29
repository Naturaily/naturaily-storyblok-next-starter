import Storyblok from 'storyblok-js-client/dist/types';

type Part = 'datasources' | 'stories' | 'components';

export const setStoryblokPart = async (
  Client: Storyblok,
  spaceId: string,
  part: Part,
  data: object,
) => {
  await Client.post(`spaces/${spaceId}/${part}/`, data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
