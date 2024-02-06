import { setComponentGroups } from './componentGroup/setComponentGroups.ts';
import { setComponents } from './components/setComponents.ts';
import { setDatasources } from './datasource/setDatasource.ts';
import { createAppEnv } from './env/createAppEnv.ts';
import { setStories } from './stories/setStories.ts';
import { checkEnv } from './utils/checkEnv.ts';
import { color } from './utils/color.ts';

const setup = async () => {
  console.log(color('info', '⏱️  Starting setup... (~1m)'));

  if (!checkEnv()) {
    return;
  }

  await setDatasources();
  const componentGroups = await setComponentGroups();
  await setComponents({ componentGroups });
  const {
    NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
  } = await setStories();

  await createAppEnv({
    NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
  });

  console.log(color('success', '🔥  Setup complete!'));
};

setup();
