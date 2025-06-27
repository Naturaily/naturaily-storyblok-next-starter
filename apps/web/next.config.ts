// ! The inferred type of 'default' cannot be named without a reference to '.pnpm/next@14.2.30_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next'. This is likely not portable. A type annotation is necessary.
// * This will be propably fixed when the docs are updated.
// import withBundleAnalyzer from '@next/bundle-analyzer';
// import { env } from '../../packages/env/src/env/env';
// const bundleAnalyzer = withBundleAnalyzer();

import '@natu/env';
import type { NextConfig } from 'next';

import { getStoryblokRedirects } from './getStoryblokRedirects';

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

    return [...(storyblokRedirectsItems || [])];
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

export default nextConfig;
