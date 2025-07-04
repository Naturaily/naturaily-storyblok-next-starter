import { getLinkPropsFromStoryblok } from '#storyblok/utils/getLinkPropsFromStoryblok/getLinkPropsFromStoryblok';
import { Spacing } from '#storyblok/utils/resolveStoryblokStyles/index';
import { resolveStoryblokStyles } from '#storyblok/utils/resolveStoryblokStyles/resolveStoryblokStyles';
import { sbEditable } from '#storyblok/utils/sbEditable/sbEditable';
import { SBProps } from '#storyblok/utils/types/SBProps/SBProps';
import { StoryblokLink } from '#storyblok/utils/types/StoryblokLink/StoryblokLink';

import { Link } from '@natu/next-link/Link';
import { Button, ButtonProps } from '@natu/ui/Button';

interface SBButtonProps {
  content?: string;
  link?: StoryblokLink;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  mtMobile?: Spacing;
  mtTablet?: Spacing;
  mtDesktop?: Spacing;
  mbMobile?: Spacing;
  mbTablet?: Spacing;
  mbDesktop?: Spacing;
}

export const SBCta = ({ blok }: SBProps<SBButtonProps>) => {
  const {
    content,
    size,
    link,
    variant,
    mbMobile,
    mbTablet,
    mbDesktop,
    mtMobile,
    mtTablet,
    mtDesktop,
  } = blok;

  const linkProps = getLinkPropsFromStoryblok(link);

  if (!linkProps.href) {
    return null;
  }

  const className = resolveStoryblokStyles({
    mt: mtMobile,
    mtTablet,
    mtDesktop,
    mb: mbMobile,
    mbTablet,
    mbDesktop,
  });

  return (
    <Button
      className={className}
      asChild
      title={content}
      variant={variant}
      size={size}
      {...sbEditable(blok)}
    >
      <Link {...linkProps}>{content}</Link>
    </Button>
  );
};
