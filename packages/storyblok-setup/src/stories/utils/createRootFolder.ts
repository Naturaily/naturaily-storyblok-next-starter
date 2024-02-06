import prompts from 'prompts';
import slugify from 'slugify';

import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter.ts';
import { storyblok } from '../../utils/client.ts';
import { color } from '../../utils/color.ts';
import { STORIES_ENDPOINT } from '../../utils/endpoints.ts';

interface CreateRootFolderOutput {
  rootAppFolderID?: number;
  NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER: `${string}-root`;
}

export const createRootFolder = async (): Promise<CreateRootFolderOutput | undefined> => {
  const rootFolderName = await prompts({
    type: 'text',
    name: 'value',
    message: 'What is the name of your application / website?',
    initial: 'my-app',
    validate: (value?: string) => !!value,
  });

  if (!rootFolderName.value) {
    console.log(color('subtitle', 'ℹ️ No root folder name provided'));

    return;
  }

  const rootFolder = rootFolderName.value.toLowerCase();

  let rootAppFolderID: number | undefined;

  try {
    const res = await storyblok.post(STORIES_ENDPOINT, {
      story: {
        name: capitalizeFirstLetter(rootFolder),
        slug: slugify(`${rootFolder}-root`),
        is_folder: true,
        // @ts-ignore
        default_root: 'page',
        parent_id: undefined,
      },
    });

    // @ts-ignore
    rootAppFolderID = res.data.story.id;
  } catch (err) {
    console.log(err);
  }

  // eslint-disable-next-line consistent-return
  return {
    rootAppFolderID,
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER: `${rootFolder}-root`,
  };
};
