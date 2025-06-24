import { Typography } from '@natu/ui/Typography';
import { ElementType } from 'react';

import {
  FontWeight,
  TextAlign,
  FontFamily,
  Spacing,
  SBProps,
  resolveStoryblokStyles,
  sbEditable,
} from '../../../utils/src';
import {
  TypographyVariant,
  TypographyVariantProp,
} from '../../../../../ui/src/Typography/Typography.type';

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
