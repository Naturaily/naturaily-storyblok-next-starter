import { color } from '../utils/color.ts';
import { createConfig } from './utils/createConfig.ts';
import { createConfigElements } from './utils/createConfigElements.ts';
import { createConfigFolder } from './utils/createConfigFolder.ts';
import { createHomepage } from './utils/createHomepage.ts';
import { createLayoutsStories } from './utils/createLayoutsStories.ts';
import { createRootFolder } from './utils/createRootFolder.ts';
import { createSpecialPagesStories } from './utils/createSpecialPagesStories.ts';

export const setStories = async () => {
  console.log(color('info', '▶️ Starting workshop on stories setup...'));

  const { rootAppFolderID, NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER } =
    (await createRootFolder()) || {};

  const { rootConfigFolderID, NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING } =
    (await createConfigFolder({ parentID: rootAppFolderID })) || {};

  const { layoutFolderID, specialPagesFolderID } =
    (await createConfigElements({ rootConfigFolderID })) || {};

  const { homepageUUID } = await createHomepage({
    parentFolderID: rootAppFolderID,
  });

  const { layoutsUUID } = await createLayoutsStories({
    parentFolderID: layoutFolderID,
    homepageUUID,
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
  });

  const { specialPagesUUID } = await createSpecialPagesStories({
    parentFolderID: specialPagesFolderID,
    homepageUUID,
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
  });

  await createConfig({ parentFolderID: rootConfigFolderID, layoutsUUID, specialPagesUUID });

  console.log(color('success', '✅  Stories setup complete.'));

  return {
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
    NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
  };
};
