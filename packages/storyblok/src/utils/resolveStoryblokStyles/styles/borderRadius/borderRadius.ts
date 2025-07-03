export type BorderRadius = 'lg' | 'md' | 'sm' | 'full';

// check shadcn preset & global styles variable
export const borderRadiusVariants: Record<BorderRadius, string> = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};
