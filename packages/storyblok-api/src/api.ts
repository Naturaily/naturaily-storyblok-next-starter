import { env } from '@natu/env';
import { ApiFetcher } from '@natu/next-api-fetcher';
import { isDraftMode } from '@natu/storyblok-preview';

import { Sdk, SdkFunctionWrapper, getSdk } from './sdk';

const defaultRequestHeaders = {
  token: env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  version: 'published',
};

const { fetcher } = new ApiFetcher(env.NEXT_PUBLIC_STORYBLOK_API_URL, {
  headers: defaultRequestHeaders,
  cache: 'force-cache',
});

export interface GetStoryblokApiInput {
  draftMode: boolean;
}

/**
 * This TypeScript function returns an SDK with methods that make GraphQL requests, and sets headers
 * based on whether draft mode is enabled.
 * @param {GetStoryblokApiInput}  - - `GetApiInput`: an object containing the `draftMode` boolean parameter,
 * which defaults to `false`.
 * @returns A function that returns an SDK object with methods for making GraphQL requests, wrapped in
 * a function that sets headers based on the `draftMode` parameter.
 */
export const getStoryblokApi = ({ draftMode = false }: GetStoryblokApiInput): Sdk => {
  const isDraftModeEnabled = isDraftMode(draftMode);

  const wrapper: SdkFunctionWrapper = action => {
    // set headers based on draftMode (previewMode)
    const headers = {
      version: isDraftModeEnabled ? 'draft' : 'published',
    };

    return action({
      headers,
      cache: isDraftModeEnabled ? 'no-store' : 'force-cache',
    }); // pass other global fetch options
  };

  // Return all methods from the SDK
  return getSdk(fetcher, wrapper);
};
