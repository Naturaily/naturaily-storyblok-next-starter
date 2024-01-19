import { Metadata, ResolvingMetadata } from 'next';

import { env } from '@natu/env';
import { SbComponentType, StoryblokAsset } from '@natu/storyblok-utils';

interface StoryblokSeoComponent extends SbComponentType<'seo'> {
  metaTitle: string;
  metaDescription: string;
  metaImage: StoryblokAsset;
  noIndex: boolean;
  noFollow: boolean;
}

interface Config {
  slug?: string;
  twitterCreator?: string;
  googleVerificationId?: string;
  siteName?: string;
  prevData?: Awaited<ResolvingMetadata>;
}

export const getStoryblokSeoData = (data?: StoryblokSeoComponent[], config?: Config): Metadata => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return {};
  }

  const [{ metaDescription, metaImage, metaTitle, noIndex, noFollow }] = data;
  const { googleVerificationId, slug, twitterCreator, siteName, prevData } = config || {};

  const prevTitle = prevData?.title || '';
  const prevDescription = prevData?.description || '';
  const prevTwitter = prevData?.twitter;

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: metaTitle || prevTitle,
    description: metaDescription || prevDescription,
    alternates: {
      canonical: slug,
    },
    robots: {
      follow: !noFollow,
      index: !noIndex,
    },
    openGraph: {
      title: metaTitle || prevTitle,
      description: metaDescription || prevDescription,
      url: slug,
      siteName,
      ...(metaImage?.filename && {
        images: [
          {
            url: metaImage.filename,
            alt: metaImage.alt,
          },
        ],
      }),
      type: 'website',
    },
    twitter:
      {
        card: 'summary_large_image',
        title: metaTitle || prevTitle,
        description: metaDescription || prevDescription,
        site: twitterCreator,
        creator: twitterCreator,
        ...(metaImage?.filename && {
          images: [
            {
              url: metaImage.filename,
              alt: metaImage.alt,
            },
          ],
        }),
      } || prevTwitter,
    ...(googleVerificationId && {
      verification: {
        google: `google-site-verification=${googleVerificationId}`,
      },
    }),
  };
};
