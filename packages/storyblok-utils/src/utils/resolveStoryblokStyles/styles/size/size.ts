export type Size = 'full' | 'screen-md' | 'screen-xl' | 'screen-2xl';

export const sizeVariants: Record<Size, string> = {
  full: 'w-full',
  'screen-md': 'max-w-screen-md w-full mx-auto', // 768px
  'screen-xl': 'max-w-screen-xl w-full mx-auto', // 1280px
  'screen-2xl': 'max-w-screen-2xl w-full mx-auto', // 1536px
};
