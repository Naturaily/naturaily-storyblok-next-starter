import { Link } from '@natu/next-link/Link';
import { Button, ButtonProps } from '@natu/ui/Button';

import { resolveStoryblokStyles, SBProps, StoryblokLink } from '../../../utils';
import { getLinkPropsFromStoryblok } from '../../../utils/getLinkPropsFromStoryblok/getLinkPropsFromStoryblok';
import { Spacing } from '../../../utils/resolveStoryblokStyles';
import { sbEditable } from '../../../utils/sbEditable/sbEditable';

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
