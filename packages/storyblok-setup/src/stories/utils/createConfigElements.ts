/* eslint-disable consistent-return */
import { storyblok } from '../../utils/client.ts';
import { color } from '../../utils/color.ts';
import { STORIES_ENDPOINT } from '../../utils/endpoints.ts';
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
      specialPagesFolderID: null,
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
  let specialPagesFolderID;

  try {
    const res = await Promise.all(configColderRequests);

    const folders = res.map(item => ({
      // @ts-ignore
      id: item.data.story.id,
      // @ts-ignore
      layout: item.data.story.slug,
    }));

    layoutFolderID = folders.find(folder => folder.layout === 'layout')?.id;
    specialPagesFolderID = folders.find(folder => folder.layout === 'special-pages')?.id;
  } catch (err) {
    console.error(color('danger', `🚨  CreateConfigElements - ${JSON.stringify(err)}`));
  }

  return {
    layoutFolderID,
    specialPagesFolderID,
  };
};
