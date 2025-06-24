import { ReactNode } from 'react';
import { getAssetFromStoryblok, StoryblokAsset } from '../../../../utils/src';
import { ResponsiveImage } from '@natu/ui/ResponsiveImage';

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
