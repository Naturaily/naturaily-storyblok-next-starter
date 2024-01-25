import '@natu/env/src/env/env.mjs';
const { getStoryblokRedirects } = await import('./getStoryblokRedirects.mjs');

/** @type {import("next").NextConfig} */
const config = {
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

export default config;
