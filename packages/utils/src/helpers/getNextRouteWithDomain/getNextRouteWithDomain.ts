import { env } from '@natu/env';

export const getNextRouteWithDomain = (routePath: string) =>
  `${env.NEXT_PUBLIC_APP_URL}${routePath}`;
