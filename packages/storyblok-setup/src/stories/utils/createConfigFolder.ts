import { storyblok } from '../../utils/client.ts';
import { color } from '../../utils/color.ts';
import { STORIES_ENDPOINT } from '../../utils/endpoints.ts';

const rootSlug = 'configuration-a93cfcb3';

interface CreateConfigFolderInput {
  parentID?: number | string;
}

interface CreateConfigFolderOutput {
  rootConfigFolderID?: number;
  NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING: string;
}

export const createConfigFolder = async ({
  parentID,
}: CreateConfigFolderInput): Promise<CreateConfigFolderOutput | undefined> => {
  let rootConfigFolderID: number | undefined;

  if (!parentID) {
    console.log(color('subtitle', 'ℹ️  Missing "rootAppFolderID".'));

    return;
  }

  try {
    const res = await storyblok.post(STORIES_ENDPOINT, {
      story: {
        name: 'Config',
        slug: rootSlug,
        is_folder: true,
        // @ts-ignore
        default_root: 'page',
        disble_fe_editor: true,
        parent_id: `${parentID}`,
      },
    });

    // @ts-ignore
    rootConfigFolderID = res.data.story.id;
  } catch (err) {
    console.log(err);
  }

  // eslint-disable-next-line consistent-return
  return {
    rootConfigFolderID,
    NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING: rootSlug,
  };
};
