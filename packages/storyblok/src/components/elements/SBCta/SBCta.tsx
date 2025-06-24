import { Link } from '@natu/next-link';
import {
  SBProps,
  Spacing,
  StoryblokLink,
  getLinkPropsFromStoryblok,
  resolveStoryblokStyles,
  sbEditable,
} from '@natu/storyblok-utils';
import { Button, ButtonProps } from '@natu/ui';

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
