import { env } from '@natu/env';

export const isDraftMode = (draftMode: boolean) =>
  draftMode ||
  process.env.NODE_ENV !== 'production' ||
  env.NEXT_PUBLIC_STORYBLOK_TOKEN_VERSION === 'draft';
