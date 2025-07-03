'use client';

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';

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
