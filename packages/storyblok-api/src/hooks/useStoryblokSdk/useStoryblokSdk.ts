import { useDraftModeContext } from '@natu/storyblok-preview';

import { getStoryblokApi } from '../../api';
import { Sdk } from '../../sdk';

/**
 * This function returns the Storyblok SDK with draft mode enabled or disabled based on the current
 * context.
 * @returns The `useStoryblokSdk` function returns an instance of the `Sdk` class, which is obtained by
 * calling the `getStoryblokApi` function with the `draftMode` value obtained from the `useDraftModeContext`
 * hook.
 */
export const useStoryblokSdk = (): Sdk => {
  const { draftMode } = useDraftModeContext();

  return getStoryblokApi({ draftMode });
};
