/* eslint-disable consistent-return */
import { type MiddlewareFunctionProps } from '@rescale/nemo';
import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@natu/env';

const isRequestFromStoryblok = (request: NextRequest): boolean => {
  const { searchParams } = new URL(request.nextUrl.href);

  const id = searchParams.get('_storyblok');
  const space = searchParams.get('_storyblok_tk[space_id]');

  return !!id && !!space;
};

const enterPreview = (request: NextRequest) => {
  const isApi = /^\/api/.test(request.nextUrl.pathname);
  /*
    Prevent redirect loop:
      /x (this file)
      /api/draft?slug=x (enter-preview.ts)
      /x redirects to
      /api/draft?slug=x redirects to
      etc.
  */
  if (isApi) {
    return NextResponse.next();
  }

  const firstPathElement = 1;
  const url = request.nextUrl.clone();
  url.pathname = '/api/draft';

  const slug = encodeURIComponent(request.nextUrl.pathname.slice(firstPathElement)) || '/';

  url.search = `${url.search}&slug=${slug}&secret=${env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN}`;

  return NextResponse.redirect(url);
};

export const storyblokMiddleware = async ({ request }: MiddlewareFunctionProps) => {
  const { isEnabled } = await draftMode();

  if (!isEnabled && isRequestFromStoryblok(request)) {
    return enterPreview(request);
  }
};
