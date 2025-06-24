import {
  SBProps,
  Spacing,
  StoryblokAsset,
  StoryblokLink,
  getAssetFromStoryblok,
  getLinkPropsFromStoryblok,
  resolveStoryblokStyles,
  sbEditable,
} from '@natu/storyblok-utils';
import { AspectRatio, ConditionalLink, ResponsiveImage } from '@natu/ui';
import { cn } from '@natu/utils';

interface SBImageProps {
  asset?: StoryblokAsset;
  aspectRatioX?: string;
  aspectRatioY?: string;
  priority?: boolean;
  link?: StoryblokLink;
  mtMobile?: Spacing;
  mtTablet?: Spacing;
  mtDesktop?: Spacing;
  mbMobile?: Spacing;
  mbTablet?: Spacing;
  mbDesktop?: Spacing;
  fullWidth?: boolean;
  width?: string;
  height?: string;
}

export const SBImage = ({ blok }: SBProps<SBImageProps>) => {
  const {
    asset,
    aspectRatioX,
    aspectRatioY,
    priority,
    link,
    mbMobile,
    mbTablet,
    mbDesktop,
    mtMobile,
    mtTablet,
    mtDesktop,
    fullWidth,
    width: customWidth,
    height: customHeight,
  } = blok;

  const image = getAssetFromStoryblok(asset, { type: 'image' });

  if (!image.src) {
    return null;
  }
  const linkProps = getLinkPropsFromStoryblok(link);

  const className = resolveStoryblokStyles({
    mt: mtMobile,
    mtTablet,
    mtDesktop,
    mb: mbMobile,
    mbTablet,
    mbDesktop,
    className: cn(fullWidth && 'w-full'),
  });

  if (aspectRatioX && aspectRatioY) {
    const { alt, src, title } = image;

    return (
      <ConditionalLink className={className} {...linkProps} {...sbEditable(blok)}>
        <AspectRatio ratio={Number(aspectRatioX) / Number(aspectRatioY)}>
          <ResponsiveImage
            src={src}
            alt={alt}
            title={title}
            priority={priority}
            className="object-cover"
            fill
          />
        </AspectRatio>
      </ConditionalLink>
    );
  }

  const { alt, src, title, height, width } = image;

  return (
    <ConditionalLink {...linkProps} className={className} {...sbEditable(blok)}>
      <ResponsiveImage
        src={src}
        alt={alt}
        title={title}
        width={Number(customWidth) || width}
        height={Number(customHeight) || height}
        priority={priority}
      />
    </ConditionalLink>
  );
};
