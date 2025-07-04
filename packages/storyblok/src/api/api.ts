// import { componentsMap } from '@/components/componentsMap';
import { apiPlugin, ISbStoriesParams, storyblokInit } from '@storyblok/react/rsc';
import { relations } from '#storyblok/api/relations';
import { getSdk, SdkFunctionWrapper } from '#storyblok/api/sdk';
import { componentsMap } from '#storyblok/components/componentsMap';
import { isDraftMode } from '#storyblok/storyblok-preview/isDraftMode';

import { env } from '@natu/env';

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
    const options: ISbStoriesParams = {
      version: isDraftModeEnabled ? 'draft' : 'published',
      resolve_relations: relations,
    };

    return action(options);
  };

  return getSdk(getStoryblokApi, wrapper);
};
