import { apiPlugin, ISbStoriesParams, storyblokInit } from '@storyblok/react/rsc';

import { env } from '@natu/env';
import { isDraftMode } from '@natu/storyblok-preview';

import { componentsMap } from '../components/componentsMap';
import { SBFooter } from '../components/contentTypes/SBFooter';
import { SBHeader } from '../components/contentTypes/SBHeader';
import { SBPage } from '../components/contentTypes/SBPage';
import { SBColumn } from '../components/elements/SBColumn';
import { SBContainer } from '../components/elements/SBContainer';
import { SBCta } from '../components/elements/SBCta';
import { SBGrid } from '../components/elements/SBGrid';
import { SBImage } from '../components/elements/SBImage';
import { SBRichtext } from '../components/elements/SBRichtext';
import { SBRow } from '../components/elements/SBRow';
import { SBTable } from '../components/elements/SBTable';
import { SBThemeModeSwitcher } from '../components/elements/SBThemeModeSwitcher/SBThemeModeSwitcher';
import { SBTypography } from '../components/elements/SBTypography';
import { relations } from './relations';
import { getSdk, SdkFunctionWrapper } from './sdk';

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
