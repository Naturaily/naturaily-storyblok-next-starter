import { storyblok } from '../../utils/client.ts';
import { configContent } from '../data/configContent.ts';
import { LayoutStoryData } from './createLayoutsStories.ts';

const STORIES_ENDPOINT = `spaces/${process.env.STORYBLOK_SPACE_ID}/stories/`;

interface CreateConfigInput {
  parentFolderID?: number;
  layoutsUUID?: LayoutStoryData[];
  specialPagesUUID?: LayoutStoryData[];
}

export const createConfig = async ({
  parentFolderID,
  layoutsUUID,
  specialPagesUUID,
}: CreateConfigInput) => {
  const footerUUID = layoutsUUID?.find(layout => layout.slug === 'footer')?.uuid;
  const headerUUID = layoutsUUID?.find(layout => layout.slug === 'header')?.uuid;
  const notFoundUUID = specialPagesUUID?.find(item => item.slug === 'not-found-404')?.uuid;

  try {
    await storyblok.post(STORIES_ENDPOINT, {
      story: {
        ...configContent({ footerUUID, headerUUID, notFoundUUID }),
        parent_id: `${parentFolderID}`,
      },
      publish: 1,
    });
  } catch (err) {
    console.log(err);
  }
};
