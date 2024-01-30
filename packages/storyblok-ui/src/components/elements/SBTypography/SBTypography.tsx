import { ElementType } from 'react';

import {
  SBProps,
  resolveStoryblokStyles,
  sbEditable,
  FontWeight,
  TextAlign,
  FontFamily,
  Spacing,
} from '@natu/storyblok-utils';
import { Typography, TypographyVariant } from '@natu/ui';

interface SBTypographyProps {
  content?: string;
  fontSizeMobile?: TypographyVariant;
  fontSizeTablet?: TypographyVariant;
  fontSizeDesktop?: TypographyVariant;
  tag?: ElementType;
  fontWeight?: FontWeight;
  textAlignMobile?: TextAlign;
  textAlignTablet?: TextAlign;
  textAlignDesktop?: TextAlign;
  fontFamily?: FontFamily;
  mtMobile?: Spacing;
  mtTablet?: Spacing;
  mtDesktop?: Spacing;
  mbMobile?: Spacing;
  mbTablet?: Spacing;
  mbDesktop?: Spacing;
}

export const SBTypography = ({ blok }: SBProps<SBTypographyProps>) => {
  const {
    content,
    tag,
    fontSizeMobile,
    fontSizeTablet,
    fontSizeDesktop,
    fontWeight,
    textAlignMobile,
    textAlignTablet,
    textAlignDesktop,
    fontFamily,
    mbMobile,
    mbTablet,
    mbDesktop,
    mtMobile,
    mtTablet,
    mtDesktop,
  } = blok;

  const fontSizeVariant = [
    fontSizeMobile,
    fontSizeTablet || fontSizeMobile,
    fontSizeDesktop || fontSizeTablet || fontSizeMobile,
  ];

  const className = resolveStoryblokStyles({
    fontWeight,
    textAlign: textAlignMobile,
    textAlignTablet,
    textAlignDesktop,
    fontFamily,
    mt: mtMobile,
    mtTablet,
    mtDesktop,
    mb: mbMobile,
    mbTablet,
    mbDesktop,
  });

  return (
    <Typography
      component={tag || 'p'}
      variant={fontSizeVariant}
      className={className}
      {...sbEditable(blok)}
    >
      {content}
    </Typography>
  );
};
