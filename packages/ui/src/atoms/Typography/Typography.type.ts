export type TypographyVariant =
  | 'text-9xl'
  | 'text-8xl'
  | 'text-7xl'
  | 'text-6xl'
  | 'text-5xl'
  | 'text-4xl'
  | 'text-3xl'
  | 'text-2xl'
  | 'text-xl'
  | 'text-lg'
  | 'text-base'
  | 'text-sm'
  | 'text-xs';

export type TypographyVariantProp =
  | TypographyVariant
  | [TypographyVariant, TypographyVariant?, TypographyVariant?];
