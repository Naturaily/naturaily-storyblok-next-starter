import { setComponentGroups } from './componentGroup/setComponentGroups.ts';
import { setComponents } from './components/setComponents.ts';
import { setDatasources } from './datasource/setDatasource.ts';
import { setStories } from './stories/setStories.ts';
import { checkEnv } from './utils/checkEnv.ts';
import { color } from './utils/color.ts';

const setup = async () => {
  console.log(color('info', '⏱️  Starting setup...'));

  if (!checkEnv()) {
    return;
  }

  await setDatasources();
  const componentGroups = await setComponentGroups();
  await setComponents({ componentGroups });
  await setStories();

  console.log(color('success', '🔥  Setup complete!'));
};

setup();
