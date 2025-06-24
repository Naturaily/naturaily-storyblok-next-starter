import type { ElementType } from 'react';

import { cn } from '@natu/utils';
import {
  BlokItem,
  Spacing,
  AlignItems,
  JustifyItems,
  SBProps,
  resolveStoryblokStyles,
  sbEditable,
  DynamicRender,
} from '../../../utils/src';

interface SBRowProps {
  body?: BlokItem[];
  gapMobile?: Spacing;
  gapTablet?: Spacing;
  gapDesktop?: Spacing;
  yPosition?: AlignItems;
  yPositionTablet?: AlignItems;
  yPositionDesktop?: AlignItems;
  xPosition?: JustifyItems;
  xPositionTablet?: JustifyItems;
  xPositionDesktop?: JustifyItems;
  mtMobile?: Spacing;
  mtTablet?: Spacing;
  mtDesktop?: Spacing;
  mbMobile?: Spacing;
  mbTablet?: Spacing;
  mbDesktop?: Spacing;
  itemsWrap?: boolean;
  tag?: string;
}

export const SBRow = ({ blok }: SBProps<SBRowProps>) => {
  const {
    body,
    gapMobile,
    gapTablet,
    gapDesktop,
    yPosition,
    yPositionTablet,
    yPositionDesktop,
    xPosition,
    xPositionTablet,
    xPositionDesktop,
    mtMobile,
    mtTablet,
    mtDesktop,
    mbMobile,
    mbTablet,
    mbDesktop,
    itemsWrap,
    tag,
  } = blok;

  const className = resolveStoryblokStyles({
    className: cn('flex', itemsWrap && 'flex-wrap'),
    gap: gapMobile,
    gapTablet,
    gapDesktop,
    justifyItems: xPosition,
    justifyItemsTablet: xPositionTablet,
    justifyItemsDesktop: xPositionDesktop,
    alignItems: yPosition,
    alignItemsTablet: yPositionTablet,
    alignItemsDesktop: yPositionDesktop,
    mt: mtMobile,
    mtTablet,
    mtDesktop,
    mb: mbMobile,
    mbTablet,
    mbDesktop,
  });

  const Comp = (tag || 'div') as ElementType;
  const asListItem = tag === 'ul' || tag === 'ol';

  return (
    <Comp className={className} {...sbEditable(blok)}>
      <DynamicRender asListItem={asListItem} data={body} />
    </Comp>
  );
};
