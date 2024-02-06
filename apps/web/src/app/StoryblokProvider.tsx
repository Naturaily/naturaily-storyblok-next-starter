// @ts-ignore
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';
// @ts-ignore
import { storyblokInit } from '@storyblok/react/rsc';
import React, { ReactNode } from 'react';

import { env } from '@natu/env';
import { componentsMap } from '@natu/storyblok-ui';

storyblokInit({
  // @ts-ignore
  accessToken: env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  components: componentsMap,
});

interface StoryblokProviderProps {
  children?: ReactNode;
}

export const StoryblokProvider = ({ children }: StoryblokProviderProps) => (
  <>
    {children}
    <StoryblokBridgeLoader />
  </>
);
