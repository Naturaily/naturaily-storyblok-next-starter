import { ReactNode } from 'react';

import { ResponsiveImage } from '@natu/ui/ResponsiveImage';

import { getAssetFromStoryblok } from '../../../../utils/getAssetFromStoryblok/getAssetFromStoryblok';
import { StoryblokAsset } from '../../../../utils/types/StoryblokAsset/StoryblokAsset';

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
