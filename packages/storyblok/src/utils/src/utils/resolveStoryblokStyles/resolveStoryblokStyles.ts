import { cn } from '@natu/utils';

import {
  AlignItems,
  BorderRadius,
  FontFamily,
  FontWeight,
  Grid,
  JustifyItems,
  Size,
  Spacing,
  TextAlign,
  alignItemsDesktopVariants,
  alignItemsTabletVariants,
  alignItemsVariants,
  borderRadiusVariants,
  fontFamilyVariants,
  fontWeightVariants,
  gapDesktopVariants,
  gapMobileVariants,
  gapTabletVariants,
  gridDesktopVariants,
  gridMobileVariants,
  gridTabletVariants,
  justifyItemsDesktopVariants,
  justifyItemsTabletVariants,
  justifyItemsVariants,
  mbDesktopVariants,
  mbTabletVariants,
  mbVariants,
  mtDesktopVariants,
  mtTabletVariants,
  mtVariants,
  pbDesktopVariants,
  pbMobileVariants,
  pbTabletVariants,
  plDesktopVariants,
  plMobileVariants,
  plTabletVariants,
  prDesktopVariants,
  prMobileVariants,
  prTabletVariants,
  ptDesktopVariants,
  ptMobileVariants,
  ptTabletVariants,
  sizeVariants,
  textAlignDesktopVariants,
  textAlignTabletVariants,
  textAlignVariants,
} from './styles';

// Func props
interface ResolveStoryblokStylesProps {
  // fonts
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  textAlign?: TextAlign;
  textAlignTablet?: TextAlign;
  textAlignDesktop?: TextAlign;

  // flex
  justifyItems?: JustifyItems;
  justifyItemsTablet?: JustifyItems;
  justifyItemsDesktop?: JustifyItems;
  alignItems?: AlignItems;
  alignItemsTablet?: AlignItems;
  alignItemsDesktop?: AlignItems;

  // grid
  gridMobile?: Grid;
  gridTablet?: Grid;
  gridDesktop?: Grid;

  // gap
  gap?: Spacing;
  gapTablet?: Spacing;
  gapDesktop?: Spacing;

  // size
  size?: Size;

  // margin
  mb?: Spacing;
  mbTablet?: Spacing;
  mbDesktop?: Spacing;

  mt?: Spacing;
  mtTablet?: Spacing;
  mtDesktop?: Spacing;

  // padding
  pl?: Spacing;
  plTablet?: Spacing;
  plDesktop?: Spacing;

  pr?: Spacing;
  prTablet?: Spacing;
  prDesktop?: Spacing;

  pt?: Spacing;
  ptTablet?: Spacing;
  ptDesktop?: Spacing;

  pb?: Spacing;
  pbTablet?: Spacing;
  pbDesktop?: Spacing;

  // radius
  borderRadius?: BorderRadius;

  // extra styles
  className?: string;
}

export const resolveStoryblokStyles = ({
  // fonts
  fontFamily,
  fontWeight,
  textAlign,
  textAlignTablet,
  textAlignDesktop,

  // flex
  justifyItems,
  justifyItemsTablet,
  justifyItemsDesktop,
  alignItems,
  alignItemsTablet,
  alignItemsDesktop,

  // grid
  gridMobile,
  gridTablet,
  gridDesktop,

  // gap
  gap,
  gapTablet,
  gapDesktop,

  // container size - max-w
  size,

  // margin
  mb,
  mbTablet,
  mbDesktop,

  mt,
  mtTablet,
  mtDesktop,

  // padding
  pl,
  plTablet,
  plDesktop,

  pr,
  prTablet,
  prDesktop,

  pt,
  ptTablet,
  ptDesktop,

  pb,
  pbTablet,
  pbDesktop,

  // border radius
  borderRadius,

  className,
}: ResolveStoryblokStylesProps) =>
  cn(
    // fonts
    fontFamily && fontFamilyVariants[fontFamily],
    fontWeight && fontWeightVariants[fontWeight],
    textAlign && textAlignVariants[textAlign],
    textAlignTablet && textAlignTabletVariants[textAlignTablet],
    textAlignDesktop && textAlignDesktopVariants[textAlignDesktop],

    // flex
    justifyItems && justifyItemsVariants[justifyItems],
    justifyItemsTablet && justifyItemsTabletVariants[justifyItemsTablet],
    justifyItemsDesktop && justifyItemsDesktopVariants[justifyItemsDesktop],
    alignItems && alignItemsVariants[alignItems],
    alignItemsTablet && alignItemsTabletVariants[alignItemsTablet],
    alignItemsDesktop && alignItemsDesktopVariants[alignItemsDesktop],

    // grid
    gridMobile && gridMobileVariants[gridMobile],
    gridTablet && gridTabletVariants[gridTablet],
    gridDesktop && gridDesktopVariants[gridDesktop],

    // gap
    gap && gapMobileVariants[gap],
    gapTablet && gapTabletVariants[gapTablet],
    gapDesktop && gapDesktopVariants[gapDesktop],

    // size
    size && sizeVariants[size],

    // spacing
    mb && mbVariants[mb],
    mbTablet && mbTabletVariants[mbTablet],
    mbDesktop && mbDesktopVariants[mbDesktop],

    mt && mtVariants[mt],
    mtTablet && mtTabletVariants[mtTablet],
    mtDesktop && mtDesktopVariants[mtDesktop],

    // padding
    pl && plMobileVariants[pl],
    plTablet && plTabletVariants[plTablet],
    plDesktop && plDesktopVariants[plDesktop],

    pr && prMobileVariants[pr],
    prTablet && prTabletVariants[prTablet],
    prDesktop && prDesktopVariants[prDesktop],

    pt && ptMobileVariants[pt],
    ptTablet && ptTabletVariants[ptTablet],
    ptDesktop && ptDesktopVariants[ptDesktop],

    pb && pbMobileVariants[pb],
    pbTablet && pbTabletVariants[pbTablet],
    pbDesktop && pbDesktopVariants[pbDesktop],

    // border radius
    borderRadius && borderRadiusVariants[borderRadius],

    className,
  );
