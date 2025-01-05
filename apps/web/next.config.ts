import '@natu/env/src/env/env.js';
import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

import { getStoryblokRedirects } from './getStoryblokRedirects';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
    ],
  },
  reactStrictMode: true,
  transpilePackages: ['@natu/env', '@natu/ui'],
  async redirects() {
    const storyblokRedirectsItems = await getStoryblokRedirects();

    return [...storyblokRedirectsItems];
  },
  async rewrites() {
    return [
      {
        source: `/${process.env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER}/:path*`,
        destination: '/:path*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ];
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default withBundleAnalyzer(nextConfig as any);
