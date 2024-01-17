import { cn } from '@natu/utils';

import { TypographyVariant, TypographyVariantProp } from '../../Typography.type';

type VariantOptions = Record<TypographyVariant, string>;

export const typographyVariantsMobile: VariantOptions = {
  'text-9xl': 'text-9xl',
  'text-8xl': 'text-8xl',
  'text-7xl': 'text-7xl',
  'text-6xl': 'text-6xl',
  'text-5xl': 'text-5xl',
  'text-4xl': 'text-4xl',
  'text-3xl': 'text-3xl',
  'text-2xl': 'text-2xl',
  'text-xl': 'text-xl',
  'text-lg': 'text-lg',
  'text-base': 'text-base',
  'text-sm': 'text-sm',
  'text-xs': 'text-xs',
};

const typographyVariantsTablet: VariantOptions = {
  'text-9xl': 'md:text-9xl',
  'text-8xl': 'md:text-8xl',
  'text-7xl': 'md:text-7xl',
  'text-6xl': 'md:text-6xl',
  'text-5xl': 'md:text-5xl',
  'text-4xl': 'md:text-4xl',
  'text-3xl': 'md:text-3xl',
  'text-2xl': 'md:text-2xl',
  'text-xl': 'md:text-xl',
  'text-lg': 'md:text-lg',
  'text-base': 'md:text-base',
  'text-sm': 'md:text-sm',
  'text-xs': 'md:text-xs',
};

const typographyVariantsDesktop: VariantOptions = {
  'text-9xl': 'xl:text-9xl',
  'text-8xl': 'xl:text-8xl',
  'text-7xl': 'xl:text-7xl',
  'text-6xl': 'xl:text-6xl',
  'text-5xl': 'xl:text-5xl',
  'text-4xl': 'xl:text-4xl',
  'text-3xl': 'xl:text-3xl',
  'text-2xl': 'xl:text-2xl',
  'text-xl': 'xl:text-xl',
  'text-lg': 'xl:text-lg',
  'text-base': 'xl:text-base',
  'text-sm': 'xl:text-sm',
  'text-xs': 'xl:text-xs',
};

export const getTypographyVariantStyles = (variant?: TypographyVariantProp) => {
  if (typeof variant === 'string') {
    return cn(typographyVariantsMobile[variant]);
  }

  if (Array.isArray(variant) && variant.length > 0) {
    const [mobile, tablet, desktop] = variant;

    return cn(
      typographyVariantsMobile[mobile],
      tablet && typographyVariantsTablet[tablet],
      desktop && typographyVariantsDesktop[desktop],
    );
  }

  return 'text-inherit';
};
