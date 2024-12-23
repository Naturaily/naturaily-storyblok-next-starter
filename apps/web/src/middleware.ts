import { createMiddleware, MiddlewareFunctionProps } from '@rescale/nemo';

import { storyblokMiddleware } from '@natu/storyblok-preview/src/storyblok-middleware';

const globalMiddlewares = {
  before: async (params: MiddlewareFunctionProps) => storyblokMiddleware(params),
};

// Middlewares for specific paths
// @docs https://nemo.rescale.build/
const middlewares = {};

export const middleware = createMiddleware(middlewares, globalMiddlewares);

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - _next
   * - api (API routes)
   * - static (static files)
   * - favicon.ico (favicon file)
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
