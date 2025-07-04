import { SbComponentType } from '#storyblok/utils/types/SBProps/SBProps';
import { StoryblokAsset } from '#storyblok/utils/types/StoryblokAsset/StoryblokAsset';
import { Metadata, ResolvingMetadata } from 'next';

import { env } from '@natu/env';

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
  const [seoComponent] = data || [];
  const { googleVerificationId, slug, twitterCreator, siteName, prevData } = config || {};

  const metaTitle = seoComponent?.metaTitle || prevData?.title || '';
  const metaDescription = seoComponent?.metaDescription || prevData?.description || '';

  const seo: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: slug,
    },
    robots: {
      follow: !seoComponent?.noFollow,
      index: !seoComponent?.noIndex,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: slug,
      siteName,
      ...(seoComponent?.metaImage?.filename && {
        images: [
          {
            url: seoComponent?.metaImage?.filename,
            alt: seoComponent?.metaImage?.alt,
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
      ...(seoComponent?.metaImage?.filename && {
        images: [
          {
            url: seoComponent?.metaImage?.filename,
            alt: seoComponent?.metaImage?.alt,
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

  return seo;
};
