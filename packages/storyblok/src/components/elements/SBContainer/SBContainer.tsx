import type { ElementType } from 'react';

import { BlokItem, SBProps, resolveStoryblokStyles, DynamicRender } from '../../../utils';
import { Size, Spacing } from '../../../utils/resolveStoryblokStyles';
import { sbEditable } from '../../../utils/sbEditable/sbEditable';

interface SBContainerProps {
  body?: BlokItem[];
  containerSize?: Size;
  mtMobile?: Spacing;
  mtTablet?: Spacing;
  mtDesktop?: Spacing;
  mbMobile?: Spacing;
  mbTablet?: Spacing;
  mbDesktop?: Spacing;
  pxMobile?: Spacing;
  pxTablet?: Spacing;
  pxDesktop?: Spacing;
  pyMobile?: Spacing;
  pyTablet?: Spacing;
  pyDesktop?: Spacing;
  tag?: string;
}

export const SBContainer = ({ blok }: SBProps<SBContainerProps>) => {
  const {
    body,
    containerSize,
    mbMobile,
    mbTablet,
    mbDesktop,
    mtMobile,
    mtTablet,
    mtDesktop,
    pxMobile,
    pxTablet,
    pxDesktop,
    pyMobile,
    pyTablet,
    pyDesktop,
    tag,
  } = blok;

  const className = resolveStoryblokStyles({
    size: containerSize,
    mt: mtMobile,
    mtTablet,
    mtDesktop,
    mb: mbMobile,
    mbTablet,
    mbDesktop,
    pr: pxMobile,
    prTablet: pxTablet,
    prDesktop: pxDesktop,
    pl: pxMobile,
    plTablet: pxTablet,
    plDesktop: pxDesktop,
    pt: pyMobile,
    ptTablet: pyTablet,
    ptDesktop: pyDesktop,
    pb: pyMobile,
    pbTablet: pyTablet,
    pbDesktop: pyDesktop,
  });

  const Comp = (tag || 'div') as ElementType;

  return (
    <Comp className={className} {...sbEditable(blok)}>
      <DynamicRender data={body} />
    </Comp>
  );
};
