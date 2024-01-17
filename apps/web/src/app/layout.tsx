import 'tailwind-config/global.css';
import { draftMode } from 'next/headers';
import { ReactNode } from 'react';

import { env } from '@natu/env';
import { poppinsFont } from '@natu/fonts';
import { TAGS, getStoryblokApi, relations } from '@natu/storyblok-api';
import { StoryblokProvider } from '@natu/storyblok-ui';
import { DynamicRender, getSlugWithAppName } from '@natu/storyblok-utils';
import { Layout } from '@natu/ui';

import { Providers } from './Providers';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const { isEnabled } = draftMode();
  const { getContentNode } = getStoryblokApi({ draftMode: isEnabled });

  // Get config data
  const configData = await getContentNode(
    {
      slug: getSlugWithAppName({
        slug: env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING,
      }),
      relations,
    },
    {
      next: {
        tags: [TAGS.SB_CONFIG],
      },
    },
  );

  const { header, footer, defaultTheme, forcedTheme } = configData.ContentNode?.content || {};

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
