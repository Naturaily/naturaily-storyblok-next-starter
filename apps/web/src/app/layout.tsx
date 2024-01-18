import 'tailwind-config/global.css';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { ReactNode } from 'react';

import { env } from '@natu/env';
import { poppinsFont } from '@natu/fonts';
import { TAGS, getStoryblokApi, relations } from '@natu/storyblok-api';
import { getStoryblokSeoData } from '@natu/storyblok-seo';
import { DynamicRender, getSlugWithAppName } from '@natu/storyblok-utils';
import { Layout } from '@natu/ui';

import { Providers } from './Providers';
import { StoryblokProvider } from './StoryblokProvider';

export const generateMetadata = async (): Promise<Metadata> => {
  const { isEnabled } = draftMode();
  const { getConfigNode } = getStoryblokApi({ draftMode: isEnabled });

  // get slug to root config in storyblok CMS
  const configSlug = getSlugWithAppName({
    slug: env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
  });
  // get access to root config in storyblok CMS
  const configData = await getConfigNode(
    {
      slug: configSlug,
      skipNotFoundPage: true,
      skipFooter: true,
      skipHeader: true,
      relations,
    },
    {
      next: {
        tags: [TAGS.SB_CONFIG],
      },
    },
  );

  return getStoryblokSeoData(configData.ConfigItem?.content?.defaultSeo, {
    slug: '/',
    twitterCreator: configData.ConfigItem?.content?.twitterCreator || '',
    googleVerificationId: configData.ConfigItem?.content?.googleVerificationId || '',
    siteName: configData.ConfigItem?.content?.siteName || '',
  });
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const { isEnabled } = draftMode();
  const { getConfigNode } = getStoryblokApi({ draftMode: isEnabled });

  const configSlug = getSlugWithAppName({
    slug: env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
  });

  const configData = await getConfigNode(
    {
      slug: configSlug,
      skipNotFoundPage: true,
      skipSeo: true,
      relations,
    },
    {
      next: {
        tags: [TAGS.SB_CONFIG],
      },
    },
  );

  const { header, footer, defaultTheme, forcedTheme } = configData.ConfigItem?.content || {};

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppinsFont.variable} suppressHydrationWarning>
        <StoryblokProvider>
          <Providers
            darkModeOptions={{
              defaultTheme,
              forcedTheme,
            }}
            draftMode={isEnabled}
          >
            <Layout
              header={<DynamicRender data={header?.content} />}
              footer={<DynamicRender data={footer?.content} />}
            >
              {children}
            </Layout>
          </Providers>
        </StoryblokProvider>
      </body>
    </html>
  );
};

export default RootLayout;
