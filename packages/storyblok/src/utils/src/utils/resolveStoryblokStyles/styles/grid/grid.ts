export type Grid = '1-col' | '2-col' | '3-col' | '4-col' | '5-col' | '1/2' | '2/1';

export const gridMobileVariants: Record<Grid, string> = {
  '1-col': 'grid-cols-1',
  '2-col': 'grid-cols-2',
  '3-col': 'grid-cols-3',
  '4-col': 'grid-cols-4',
  '5-col': 'grid-cols-5',
  '1/2': 'grid-cols-[1fr_2fr]',
  '2/1': 'grid-cols-[2fr_1fr]',
};

export const gridTabletVariants: Record<Grid, string> = {
  '1-col': 'md:grid-cols-1',
  '2-col': 'md:grid-cols-2',
  '3-col': 'md:grid-cols-3',
  '4-col': 'md:grid-cols-4',
  '5-col': 'md:grid-cols-5',
  '1/2': 'md:grid-cols-[1fr_2fr]',
  '2/1': 'md:grid-cols-[2fr_1fr]',
};

export const gridDesktopVariants: Record<Grid, string> = {
  '1-col': 'lg:grid-cols-1',
  '2-col': 'lg:grid-cols-2',
  '3-col': 'lg:grid-cols-3',
  '4-col': 'lg:grid-cols-4',
  '5-col': 'lg:grid-cols-5',
  '1/2': 'lg:grid-cols-[1fr_2fr]',
  '2/1': 'lg:grid-cols-[2fr_1fr]',
};
