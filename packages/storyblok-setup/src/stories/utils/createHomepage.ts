import { storyblok } from '../../utils/client.ts';
import { color } from '../../utils/color.ts';
import { homepageContent } from '../data/homepageContent.ts';

interface CreateHomepageInput {
  parentFolderID?: number;
}

const STORIES_ENDPOINT = `spaces/${process.env.STORYBLOK_SPACE_ID}/stories/`;

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
