import { Link } from '@natu/next-link/Link';
import { Button, ButtonProps } from '@natu/ui/Button';

import { getLinkPropsFromStoryblok } from '../../../utils/getLinkPropsFromStoryblok/getLinkPropsFromStoryblok';
import { resolveStoryblokStyles, Spacing } from '../../../utils/resolveStoryblokStyles';
import { sbEditable } from '../../../utils/sbEditable/sbEditable';
import { SBProps } from '../../../utils/types/SBProps/SBProps';
import { StoryblokLink } from '../../../utils/types/StoryblokLink/StoryblokLink';

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
