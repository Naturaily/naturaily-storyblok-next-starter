import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import { env } from '@natu/env';
import { isDraftMode } from '@natu/storyblok-preview';

import { componentsMap } from '../components/componentsMap';
import { relations } from './relations';
import { FetchOptions, getSdk, SdkFunctionWrapper } from './sdk';

export const getStoryblokApi = storyblokInit({
  accessToken: env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components: componentsMap,
});

interface GetStoryblokSdkInput {
  draftMode: boolean;
}

export const getStoryblokSdk = ({ draftMode }: GetStoryblokSdkInput) => {
  const isDraftModeEnabled = isDraftMode(draftMode);

  const wrapper: SdkFunctionWrapper = action => {
    const options: FetchOptions = {
      version: isDraftModeEnabled ? 'draft' : 'published',
      resolve_relations: relations,
    };

    return action(options);
  };

  return getSdk(getStoryblokApi, wrapper);
};
