'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from '@natu/next-themes';
import { ReactQueryProvider, queryClient } from '@natu/react-query-gql';
import { DraftModeProvider } from '@natu/storyblok-preview';

interface DarkModeOptions {
  defaultTheme?: 'light' | 'dark' | 'system';
  forcedTheme?: 'light' | 'dark';
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
      defaultTheme={darkModeOptions?.defaultTheme}
      forcedTheme={darkModeOptions?.forcedTheme}
      enableSystem
      disableTransitionOnChange
    >
      <DraftModeProvider draftMode={draftMode}>{children}</DraftModeProvider>
    </ThemeProvider>
  </ReactQueryProvider>
);
