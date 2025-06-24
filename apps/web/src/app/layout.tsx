import 'tailwind-config/global.css';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { draftMode } from 'next/headers';
import { ReactNode } from 'react';

import { getStoryblokSdk } from '@natu/storyblok/api';
import { StoryblokStory } from '@natu/storyblok/DynamicRender';
import { getStoryblokSeoData } from '@natu/storyblok/getStoryblokSeoData';
import { Layout } from '@natu/ui/Layout';

import { Providers } from './Providers';
import { StoryblokProvider } from './StoryblokProvider';

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const generateMetadata = async (): Promise<Metadata> => {
  const { isEnabled } = await draftMode();
  const { getConfigNode } = getStoryblokSdk({ draftMode: isEnabled });

  const { data } = await getConfigNode();

  const configContent = data?.story?.content;

  return getStoryblokSeoData(configContent?.defaultSeo, {
    slug: '/',
    googleVerificationId: configContent?.googleVerificationId || '',
    twitterCreator: configContent?.twitterCreator || '',
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
