import { writeFile } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { storyblok } from '../utils/client.ts';
import { color } from '../utils/color.ts';
import { SPACE_ENDPOINT } from '../utils/endpoints.ts';

interface CreateAppEnvInput {
  NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER?: string;
  NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING?: string;
}

const apiEndpoints = [
  { region: 'eu', url: 'https://gapi.storyblok.com/v1/api' },
  { region: 'us', url: 'https://gapi-us.storyblok.com/v1/api' },
];

export const createAppEnv = async ({
  NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
  NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
}: CreateAppEnvInput) => {
  let NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN;

  try {
    const res = await storyblok.get(SPACE_ENDPOINT);
    NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN = res.data.space.first_token;
  } catch (err) {
    console.log(err);
  }

  const env = {
    NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
    NEXT_PUBLIC_STORYBLOK_API_URL:
      apiEndpoints.find(item => item.region === process.env.STORYBLOK_REGION)?.url ||
      'https://gapi.storyblok.com/v1/api',
    NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
    NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const envPath = resolve(__dirname, '../../../../apps/web/.env');
  try {
    await writeFile(
      envPath,
      Object.entries(env)
        .map(([key, value]) => `${key}=${value}`)
        .join('\n'),
      () => {},
    );
  } catch (err) {
    console.error(color('danger', `Setup app env error -> ${JSON.stringify(err)}`));
  }

  console.log(color('success', '✅  The .env file has been created.'));
  console.log(color('info', `Path ->  ${envPath}`));
};
