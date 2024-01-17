// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { storyblokInit } from '@storyblok/react/rsc';
import { ReactNode } from 'react';

import { env } from '@natu/env';

interface StoryblokProviderProps {
  children?: ReactNode;
  componentsMap: Record<string, unknown>;
}

// eslint-disable-next-line react/jsx-no-useless-fragment
export const StoryblokProvider = ({ children, componentsMap }: StoryblokProviderProps) => {
  storyblokInit({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    accessToken: env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
    components: componentsMap,
  });

  return (
    <>
      {children}
      <StoryblokBridgeLoader />
    </>
  );
};
