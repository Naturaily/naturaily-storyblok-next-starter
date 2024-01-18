'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from '@natu/next-themes';
import { ReactQueryProvider, queryClient } from '@natu/react-query-gql';
import { DraftModeProvider } from '@natu/storyblok-preview';

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
  <ReactQueryProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme={darkModeOptions?.defaultTheme || undefined}
      forcedTheme={darkModeOptions?.forcedTheme || undefined}
      enableSystem
      disableTransitionOnChange
    >
      <DraftModeProvider draftMode={draftMode}>{children}</DraftModeProvider>
    </ThemeProvider>
  </ReactQueryProvider>
);
