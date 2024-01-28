import { setDatasources } from './datasource/setDatasource.ts';
import { checkEnv } from './utils/checkEnv.ts';
import { color } from './utils/color.ts';

const setup = async () => {
  console.log(color('info', '▶️  Starting setup...'));

  if (!checkEnv()) {
    return;
  }

  await setDatasources();

  console.log(color('success', '✅  Setup complete...'))
};

setup();
