import { storyblok } from '../../utils/client.ts';
import { color } from '../../utils/color.ts';
import { configRootFolders } from '../data/configRootFolders.ts';

interface CreateConfigElementsInput {
  rootConfigFolderID?: number;
}

const STORIES_ENDPOINT = `spaces/${process.env.STORYBLOK_SPACE_ID}/stories/`;

export const createConfigElements = async ({ rootConfigFolderID }: CreateConfigElementsInput) => {
  const configColderRequests = [];

  if (!rootConfigFolderID) {
    console.log(color('subtitle', 'ℹ️  Missing rootConfigFolderID.'));

    return;
  }

  for (const configColder of configRootFolders) {
    configColderRequests.push(
      storyblok.post(STORIES_ENDPOINT, {
        // @ts-ignore
        story: {
          ...configColder,
          parent_id: `${rootConfigFolderID}`,
        },
      }),
    );
  }

  try {
    await Promise.all(configColderRequests);
  } catch (err) {
    console.error(color('danger', `🚨  CreateConfigElements - ${JSON.stringify(err)}`));
  }
};
