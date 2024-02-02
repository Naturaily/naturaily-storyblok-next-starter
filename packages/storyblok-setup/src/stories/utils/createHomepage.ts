import { storyblok } from '../../utils/client.ts';
import { color } from '../../utils/color.ts';
import { homepageContent } from '../data/homepageContent.ts';

interface CreateHomepageInput {
  parentFolderID?: number;
}

const STORIES_ENDPOINT = `spaces/${process.env.STORYBLOK_SPACE_ID}/stories/`;

export const createHomepage = async ({ parentFolderID }: CreateHomepageInput) => {
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
    console.log(res);
  } catch (err) {
    console.error(color('danger', `🚨  CreateHomepage - ${JSON.stringify(err)}`));
  }
};
