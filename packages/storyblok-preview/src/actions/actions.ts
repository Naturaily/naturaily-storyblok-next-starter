'use server';

/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { timingSafeEqual } from 'crypto';
import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextMiddleware, NextFetchEvent, NextRequest } from 'next/server';

import { env } from '@natu/env';

/**
 * This TypeScript function checks if a request is coming from Storyblok based on the presence of
 * specific query parameters.
 * @param {NextRequest} request - The `request` parameter is an object that represents an incoming HTTP
 * request in a Next.js application. It contains information about the request, such as the HTTP
 * method, headers, URL, and query parameters.
 * @returns A boolean value indicating whether the request is from Storyblok or not.
 */
const isRequestFromStoryblok = (request: NextRequest): boolean => {
  const { searchParams } = new URL(request.nextUrl.href);

  const id = searchParams.get('_storyblok');
  const space = searchParams.get('_storyblok_tk[space_id]');

  return !!id && !!space;
};

/**
 * This function redirects the user to a preview page for a specific slug if the URL matches a certain
 * pattern.
 * @param {NextRequest} request - `request` is an object that contains information about the incoming
 * HTTP request, such as the URL, headers, and query parameters. It is of type `NextRequest`, which is
 * a custom type defined by the Next.js framework.
 * @returns The function `enterPreview` returns a `NextResponse` object that redirects the user to a
 * preview URL. If the URL path starts with `/api`, the function returns `undefined`.
 */
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

/**
 * The function `withStoryblokPreviewMiddleware` checks if the request is from Storyblok and enters
 * preview mode if necessary, otherwise it calls the provided middleware.
 * @param {NextMiddleware} middleware - The `middleware` parameter is a function that represents the
 * next middleware in the chain. It takes in a `request` and `event` as parameters and returns a
 * response.
 * @returns the result of calling the `middleware` function with the `request` and `event` arguments.
 */
export const withStoryblokPreviewMiddleware =
  (middleware: NextMiddleware) => async (request: NextRequest, event: NextFetchEvent) => {
    // const isDraftModeEnabled = request.cookies.has('__prerender_bypass');
    const { isEnabled } = draftMode();

    if (!isEnabled && isRequestFromStoryblok(request)) {
      console.log('isRequestFromStoryblok: entering preview mode');

      return enterPreview(request);
    }

    return middleware(request, event);
  };

export const draftHandler = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);

  const slug = searchParams.get('slug') || '';
  const pageId = searchParams.get('pageId');
  const secret = searchParams.get('secret');

  // Check if secret is valid
  try {
    if (secret) {
      timingSafeEqual(Buffer.from(secret), Buffer.from(env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN)); // Throws an error if doesn't match.
    } else {
      throw new Error();
    }
  } catch {
    return new Response(
      JSON.stringify({ message: 'Invalid token', time: new Date().toISOString() }),
    );
  }

  const host = request.headers.get('host') || env.NEXT_PUBLIC_APP_URL;
  const url = new URL(request.url || '', `https://${host}`);

  url.pathname = slug;

  if (pageId) {
    url.search += `&_storyblok=${pageId}`;
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable();

  // Redirect to the path from Storyblok
  return NextResponse.redirect(url);
};

export const handleDisableDraft = async () => {
  draftMode().disable();
};
