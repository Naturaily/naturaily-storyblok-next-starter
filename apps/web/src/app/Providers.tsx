'use client';

import { ReactNode } from 'react';

import { DraftModeProvider } from '@natu/storyblok/DraftModeProvider';
import { ThemeProvider } from '@natu/next-themes/ThemeProvider';

interface DarkModeOptions {
  defaultTheme?: 'light' | 'dark' | 'system' | null | string;
  forcedTheme?: 'light' | 'dark' | null | string;
}

interface ProvidersProps {
  children?: ReactNode;
  draftMode?: boolean;
  darkModeOptions?: DarkModeOptions;
}

export const Providers = ({ children, draftMode, darkModeOptions }: ProvidersProps) => (
  <ThemeProvider
    attribute="class"
    defaultTheme={darkModeOptions?.defaultTheme || undefined}
    forcedTheme={darkModeOptions?.forcedTheme || undefined}
    enableSystem
    disableTransitionOnChange
  >
    <DraftModeProvider draftMode={draftMode}>{children}</DraftModeProvider>
  </ThemeProvider>
);
