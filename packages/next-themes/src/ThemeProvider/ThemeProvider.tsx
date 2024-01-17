'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export const ThemeProvider = ({
  children,
  defaultTheme,
  forcedTheme,
  ...props
}: ThemeProviderProps) => (
  <NextThemesProvider
    forcedTheme={forcedTheme || undefined}
    defaultTheme={defaultTheme || 'system'}
    {...props}
  >
    {children}
  </NextThemesProvider>
);
