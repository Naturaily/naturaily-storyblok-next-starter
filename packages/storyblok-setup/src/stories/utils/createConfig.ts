import { storyblok } from '../../utils/client.ts';
import { STORIES_ENDPOINT } from '../../utils/endpoints.ts';
import { configContent } from '../data/configContent.ts';
import { LayoutStoryData } from './createLayoutsStories.ts';

interface CreateConfigInput {
  parentFolderID?: number;
  layoutsUUID?: LayoutStoryData[];
  specialPagesUUID?: LayoutStoryData[];
}

export const createConfig = async ({ parentFolderID, layoutsUUID }: CreateConfigInput) => {
  const footerUUID = layoutsUUID?.find(layout => layout.slug === 'footer')?.uuid;
  const headerUUID = layoutsUUID?.find(layout => layout.slug === 'header')?.uuid;

  try {
    await storyblok.post(STORIES_ENDPOINT, {
      story: {
        ...configContent({ footerUUID, headerUUID }),
        parent_id: `${parentFolderID}`,
      },
      publish: 1,
    });
  } catch (err) {
    console.log(err);
  }
};
