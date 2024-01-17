import {
  AlignItems,
  BlokItem,
  DynamicRender,
  JustifyItems,
  SBProps,
  Spacing,
  resolveStoryblokStyles,
  sbEditable,
} from '@natu/storyblok-utils';

interface SBColumnProps {
  body?: BlokItem[];
  gapMobile?: Spacing;
  gapTablet?: Spacing;
  gapDesktop?: Spacing;
  yPosition?: JustifyItems;
  yPositionTablet?: JustifyItems;
  yPositionDesktop?: JustifyItems;
  xPosition?: AlignItems;
  xPositionTablet?: AlignItems;
  xPositionDesktop?: AlignItems;
  mtMobile?: Spacing;
  mtTablet?: Spacing;
  mtDesktop?: Spacing;
  mbMobile?: Spacing;
  mbTablet?: Spacing;
  mbDesktop?: Spacing;
  tag?: string;
}

export const SBColumn = ({ blok }: SBProps<SBColumnProps>) => {
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
    tag,
  } = blok;

  const className = resolveStoryblokStyles({
    className: 'flex flex-col',
    gap: gapMobile,
    gapTablet,
    gapDesktop,
    justifyItems: yPosition,
    justifyItemsTablet: yPositionTablet,
    justifyItemsDesktop: yPositionDesktop,
    alignItems: xPosition,
    alignItemsTablet: xPositionTablet,
    alignItemsDesktop: xPositionDesktop,
    mt: mtMobile,
    mtTablet,
    mtDesktop,
    mb: mbMobile,
    mbTablet,
    mbDesktop,
  });

  const Comp = tag || 'div';
  const asListItem = tag === 'ul' || tag === 'ol';

  return (
    <Comp className={className} {...sbEditable(blok)}>
      <DynamicRender asListItem={asListItem} data={body} />
    </Comp>
  );
};
