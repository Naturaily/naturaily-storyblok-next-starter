import {
  FontWeight,
  TextAlign,
  FontFamily,
  Spacing,
} from '#storyblok/utils/resolveStoryblokStyles/index';
import { resolveStoryblokStyles } from '#storyblok/utils/resolveStoryblokStyles/resolveStoryblokStyles';
import { sbEditable } from '#storyblok/utils/sbEditable/sbEditable';
import { SBProps } from '#storyblok/utils/types/SBProps/SBProps';
import { ElementType } from 'react';

import { Typography } from '@natu/ui/Typography';
import { TypographyVariant, TypographyVariantProp } from '@natu/ui/TypographyTypes';

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
  ] as TypographyVariantProp;

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
