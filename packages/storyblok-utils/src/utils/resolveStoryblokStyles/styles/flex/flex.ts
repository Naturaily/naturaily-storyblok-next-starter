export type JustifyItems = 'center' | 'end' | 'spaceBetween' | 'start' | 'around' | 'evenly';

export const justifyItemsVariants: Record<JustifyItems, string> = {
  center: 'justify-center',
  end: 'justify-end',
  spaceBetween: 'justify-between',
  start: 'justify-start',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

export const justifyItemsTabletVariants: Record<JustifyItems, string> = {
  center: 'md:justify-center',
  end: 'md:justify-end',
  spaceBetween: 'md:justify-between',
  start: 'md:justify-start',
  around: 'md:justify-around',
  evenly: 'md:justify-evenly',
};

export const justifyItemsDesktopVariants: Record<JustifyItems, string> = {
  center: 'lg:justify-center',
  end: 'lg:justify-end',
  spaceBetween: 'lg:justify-between',
  start: 'lg:justify-start',
  around: 'lg:justify-around',
  evenly: 'lg:justify-evenly',
};

export type AlignItems = 'start' | 'center' | 'end' | 'baseline';

export const alignItemsVariants: Record<AlignItems, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
};

export const alignItemsTabletVariants: Record<AlignItems, string> = {
  start: 'md:items-start',
  center: 'md:items-center',
  end: 'md:items-end',
  baseline: 'md:items-baseline',
};

export const alignItemsDesktopVariants: Record<AlignItems, string> = {
  start: 'lg:items-start',
  center: 'lg:items-center',
  end: 'lg:items-end',
  baseline: 'lg:items-baseline',
};
