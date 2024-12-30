import 'tailwind-config/global.css';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { ReactNode } from 'react';

import { poppinsFont } from '@natu/fonts';
import { getStoryblokSeoData } from '@natu/storyblok-seo';
import { getStoryblokSdk } from '@natu/storyblok-ui';
import { DynamicRender, StoryblokStory } from '@natu/storyblok-utils';
import { Layout } from '@natu/ui';

import { Providers } from './Providers';
import { StoryblokProvider } from './StoryblokProvider';

export const generateMetadata = async (): Promise<Metadata> => {
  const { isEnabled } = await draftMode();
  const { getConfigNode } = getStoryblokSdk({ draftMode: isEnabled });

  const { data } = await getConfigNode();

  const configContent = data?.story?.content;

  return getStoryblokSeoData(configContent?.defaultSeo, {
    slug: '/',
    twitterCreator: configContent?.twitterCreator || '',
    googleVerificationId: configContent?.googleVerificationId || '',
    siteName: configContent?.siteName || '',
  });
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const { isEnabled } = await draftMode();
  const { getConfigNode } = getStoryblokSdk({ draftMode: isEnabled });

  const { data } = await getConfigNode();

  const { header, footer, defaultTheme, forcedTheme } = data?.story?.content || {};

  return (
    <StoryblokProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={poppinsFont.variable} suppressHydrationWarning>
          <Providers
            darkModeOptions={{
              defaultTheme,
              forcedTheme,
            }}
            draftMode={isEnabled}
          >
            <Layout
              header={<StoryblokStory story={header} />}
              footer={<StoryblokStory story={footer} />}
            >
              {children}
            </Layout>
          </Providers>
        </body>
      </html>
    </StoryblokProvider>
  );
};

export default RootLayout;
