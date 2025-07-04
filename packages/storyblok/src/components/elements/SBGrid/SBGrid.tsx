import { DynamicRender } from '#storyblok/utils/components/DynamicRender/DynamicRender';
import { Grid, Spacing, Size } from '#storyblok/utils/resolveStoryblokStyles/index';
import { resolveStoryblokStyles } from '#storyblok/utils/resolveStoryblokStyles/resolveStoryblokStyles';
import { sbEditable } from '#storyblok/utils/sbEditable/sbEditable';
import { BlokItem, SBProps } from '#storyblok/utils/types/SBProps/SBProps';
import type { ElementType } from 'react';

interface SBGridProps {
  body?: BlokItem[];
  gridMobile?: Grid;
  gridTablet?: Grid;
  gridDesktop?: Grid;
  gapMobile?: Spacing;
  gapTablet?: Spacing;
  gapDesktop?: Spacing;
  containerSize?: Size;
  mtMobile?: Spacing;
  mtTablet?: Spacing;
  mtDesktop?: Spacing;
  mbMobile?: Spacing;
  mbTablet?: Spacing;
  mbDesktop?: Spacing;
  tag?: string;
}

export const SBGrid = ({ blok }: SBProps<SBGridProps>) => {
  const {
    body,
    gridMobile,
    gridTablet,
    gridDesktop,
    gapMobile,
    gapTablet,
    gapDesktop,
    containerSize,
    mbMobile,
    mbTablet,
    mbDesktop,
    mtMobile,
    mtTablet,
    mtDesktop,
    tag,
  } = blok;

  const className = resolveStoryblokStyles({
    gridMobile,
    gridTablet,
    gridDesktop,
    gap: gapMobile,
    gapTablet,
    gapDesktop,
    size: containerSize,
    mt: mtMobile,
    mtTablet,
    mtDesktop,
    mb: mbMobile,
    mbTablet,
    mbDesktop,
    className: 'grid',
  });

  const Comp = (tag || 'div') as ElementType;
  const asListItem = tag === 'ul' || tag === 'ol';

  return (
    <Comp className={className} {...sbEditable(blok)}>
      <DynamicRender asListItem={asListItem} data={body} />
    </Comp>
  );
};
