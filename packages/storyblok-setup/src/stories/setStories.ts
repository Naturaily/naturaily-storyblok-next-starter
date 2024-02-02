// import { writeFile } from 'fs';

// import { storyblok } from '../utils/client.ts';
import { color } from '../utils/color.ts';
import { createConfigElements } from './utils/createConfigElements.ts';
import { createConfigFolder } from './utils/createConfigFolder.ts';
import { createHomepage } from './utils/createHomepage.ts';
import { createRootFolder } from './utils/createRootFolder.ts';

export const setStories = async () => {
  console.log(color('info', '▶️ Starting workshop on stories setup...'));

  // // TEST;
  // // const STORIES_ENDPOINT = `spaces/${process.env.STORYBLOK_SPACE_ID}/stories/`;
  // const STORIES_ENDPOINT = `spaces/218794/stories/434843344`;
  // const stories = await storyblok.get(STORIES_ENDPOINT);
  // console.log(stories.data.story.content.body);

  // await writeFile('./test.json', JSON.stringify(stories.data.story.content.body), () => {});

  // return;

  const { rootAppFolderID, NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER } =
    (await createRootFolder()) || {};

  const { rootConfigFolderID, NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING } =
    (await createConfigFolder({ parentID: rootAppFolderID })) || {};

  await createConfigElements({ rootConfigFolderID });

  await createHomepage({
    parentFolderID: rootAppFolderID,
  });

  console.log({ rootConfigFolderID, rootAppFolderID });
  console.log('ENV:');
  console.table({
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
    NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
  });

  console.log(color('success', '✅  Stories setup complete.'));
};
