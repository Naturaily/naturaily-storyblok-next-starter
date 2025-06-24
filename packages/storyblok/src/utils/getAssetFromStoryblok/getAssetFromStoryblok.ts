import { StoryblokAsset } from '../../types';

interface Config {
  type: 'image' | 'video';
}

export const getAssetFromStoryblok = (
  asset?: StoryblokAsset,
  config: Config = { type: 'image' },
) => {
  if (!asset || !asset?.filename) {
    return {
      src: null,
      alt: null,
      title: null,
    };
  }

  if (config.type === 'image') {
    return {
      src: asset.filename,
      alt: asset.alt,
      title: asset.title,
      width: Number(asset.filename.split('/')[5].split('x')[0]),
      height: Number(asset.filename.split('/')[5].split('x')[1]),
    };
  }

  return {
    src: asset.filename,
    alt: asset.alt,
    title: asset.title,
  };
};
