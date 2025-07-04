import { StoryblokRichTextNode } from '@storyblok/richtext';
import { getAssetFromStoryblok } from '#storyblok/utils/getAssetFromStoryblok/getAssetFromStoryblok';
import { StoryblokAsset } from '#storyblok/utils/types/StoryblokAsset/StoryblokAsset';
import { uid } from 'radash';
import { Fragment, ReactElement } from 'react';

import { ResponsiveImage } from '@natu/ui/ResponsiveImage';

export const NodeImage = (node: StoryblokRichTextNode<ReactElement>) => {
  const { alt, src: imageSrc, title } = node.attrs || {};

  const storyblokImage = {
    alt,
    filename: imageSrc,
    title,
  } as StoryblokAsset;

  const image = getAssetFromStoryblok(storyblokImage, { type: 'image' });

  if (!image.src) {
    return <Fragment />;
  }

  return <ResponsiveImage key={uid(5)} {...image} />;
};
