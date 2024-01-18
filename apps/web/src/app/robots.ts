import { MetadataRoute } from 'next';

import { env } from '@natu/env';

const Robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: `${env.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
});

export default Robots;
