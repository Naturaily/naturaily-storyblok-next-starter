import { middlewareChain } from '@natu/middleware-chain';
import { withStoryblokPreviewMiddleware } from '@natu/storyblok-preview';

const middlewares = [withStoryblokPreviewMiddleware];

export default middlewareChain(middlewares);

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
