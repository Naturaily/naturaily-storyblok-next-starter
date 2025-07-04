import { storyblok } from '#storyblok-setup/utils/client';
import { color } from '#storyblok-setup/utils/color';
import { STORIES_ENDPOINT } from '#storyblok-setup/utils/endpoints';

import { configRootFolders } from '../data/configRootFolders.ts';

interface CreateConfigElementsOutput {
  layoutFolderID?: number | null;
  specialPagesFolderID?: number | null;
}
interface CreateConfigElementsInput {
  rootConfigFolderID?: number;
}

export const createConfigElements = async ({
  rootConfigFolderID,
}: CreateConfigElementsInput): Promise<CreateConfigElementsOutput> => {
  const configColderRequests = [];

  if (!rootConfigFolderID) {
    console.log(color('subtitle', 'ℹ️  Missing rootConfigFolderID.'));

    return {
      layoutFolderID: null,
    };
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

  let layoutFolderID;

  try {
    const res = await Promise.all(configColderRequests);

    const folders = res.map(item => ({
      // @ts-ignore
      id: item.data.story.id,
      // @ts-ignore
      layout: item.data.story.slug,
    }));

    layoutFolderID = folders.find(folder => folder.layout === 'layout')?.id;
  } catch (err) {
    console.error(color('danger', `🚨  CreateConfigElements - ${JSON.stringify(err)}`));
  }

  return {
    layoutFolderID,
  };
};
