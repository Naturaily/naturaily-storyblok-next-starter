import { Metadata } from 'next';

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
}

export const getStoryblokSeoData = (data?: StoryblokSeoComponent[], config?: Config): Metadata => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return {};
  }

  const [{ metaDescription, metaImage, metaTitle }] = data;
  const { googleVerificationId, slug, twitterCreator, siteName } = config || {};

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: slug,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
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
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
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
    },
    ...(googleVerificationId && {
      verification: {
        google: `google-site-verification=${googleVerificationId}`,
      },
    }),
  };
};
