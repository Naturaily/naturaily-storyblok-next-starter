'use server';

import { timingSafeEqual } from 'crypto';
import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@natu/env';

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
