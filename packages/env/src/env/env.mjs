import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const skipValidation =
  !!process.env.SKIP_ENV_VALIDATION &&
  process.env.SKIP_ENV_VALIDATION !== 'false' &&
  process.env.SKIP_ENV_VALIDATION !== '0';

export const env = createEnv({
  skipValidation,
  server: {},
  client: {
    NEXT_PUBLIC_APP_URL: z.string(),
    NEXT_PUBLIC_STORYBLOK_API_URL: z.string(),
    NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN: z.string(),
    NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING: z.string(),
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER: z.string(),
    NEXT_PUBLIC_STORYBLOK_TOKEN_VERSION: z
      .union([z.literal('draft'), z.literal('published')])
      .nullish(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_STORYBLOK_API_URL: process.env.NEXT_PUBLIC_STORYBLOK_API_URL,
    NEXT_PUBLIC_STORYBLOK_TOKEN_VERSION: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN_VERSION,
    NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER: process.env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
    NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING:
      process.env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
  },
});
