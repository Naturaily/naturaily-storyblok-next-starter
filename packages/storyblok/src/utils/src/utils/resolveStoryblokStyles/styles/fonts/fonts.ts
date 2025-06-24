import { cn } from '@natu/utils';

export const fontFamilyVariants = {
  primary: cn('font-primary'),
  secondary: cn('font-secondary'),
};

export type FontFamily = keyof typeof fontFamilyVariants;

export const fontWeightVariants = {
  normal: 'font-normal', // 400
  bold: 'font-bold', // 700
};

export type FontWeight = keyof typeof fontWeightVariants;

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export const textAlignVariants: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export const textAlignTabletVariants: Record<TextAlign, string> = {
  left: 'md:text-left',
  center: 'md:text-center',
  right: 'md:text-right',
  justify: 'md:text-justify',
};

export const textAlignDesktopVariants: Record<TextAlign, string> = {
  left: 'lg:text-left',
  center: 'lg:text-center',
  right: 'lg:text-right',
  justify: 'lg:text-justify',
};
