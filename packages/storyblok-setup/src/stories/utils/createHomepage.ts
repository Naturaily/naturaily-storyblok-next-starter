import { storyblok } from '../../utils/client.ts';
import { color } from '../../utils/color.ts';
import { STORIES_ENDPOINT } from '../../utils/endpoints.ts';
import { homepageContent } from '../data/homepageContent.ts';

interface CreateHomepageInput {
  parentFolderID?: number;
}

export const createHomepage = async ({ parentFolderID }: CreateHomepageInput) => {
  let homepageUUID;

  try {
    const res = await storyblok.post(STORIES_ENDPOINT, {
      story: {
        name: 'Homepage',
        slug: '/',
        is_startpage: true,
        is_folder: false,
        parent_id: `${parentFolderID}`,
        content: {
          ...homepageContent,
        },
      },
      publish: 1,
    });
    // @ts-ignore
    homepageUUID = res.data.story.uuid;
  } catch (err) {
    console.error(color('danger', `🚨  CreateHomepage - ${JSON.stringify(err)}`));
  }

  return {
    homepageUUID,
  };
};
