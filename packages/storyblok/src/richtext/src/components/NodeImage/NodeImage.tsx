import { ReactNode } from 'react';

import { StoryblokAsset, getAssetFromStoryblok } from '@natu/storyblok-utils';
import { ResponsiveImage } from '@natu/ui';

interface NodeImageProps {
  alt?: string;
  title?: string;
  src?: string;
}

export const NodeImage = (_: ReactNode, { alt, src: imageSrc, title }: NodeImageProps) => {
  const storyblokImage = {
    alt,
    filename: imageSrc,
    title,
  } as StoryblokAsset;

  const image = getAssetFromStoryblok(storyblokImage, { type: 'image' });

  if (!image.src) {
    return null;
  }

  return <ResponsiveImage {...image} />;
};
