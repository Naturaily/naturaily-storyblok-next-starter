import {
  BlokItem,
  DynamicRender,
  Grid,
  SBProps,
  Size,
  Spacing,
  resolveStoryblokStyles,
  sbEditable,
} from '@natu/storyblok-utils';

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

  const Comp = tag || 'div';
  const asListItem = tag === 'ul' || tag === 'ol';

  return (
    <Comp className={className} {...sbEditable(blok)}>
      <DynamicRender asListItem={asListItem} data={body} />
    </Comp>
  );
};
