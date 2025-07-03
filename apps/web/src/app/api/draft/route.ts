import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@natu/env';

type ValidateStoryblokPreviewTokenInput = {
  /**
   * The preview token from storyblok CMS to use for validation.
   */
  previewToken: string;
  /**
   * The query parameters to use for validation.
   */
  queryParams: URLSearchParams;
};

/**
 * Validation of `_storyblok_tk[token]` query param provided by Storyblok when accessing its preview.
 * @param {ValidateStoryblokPreviewTokenInput}  - The `validateStoryblokPreviewToken` function is used
 * to validate a preview token received from Storyblok. The function takes an object as input with the
 * following properties:
 * @returns The function `validateStoryblokPreviewToken` returns a boolean value indicating whether the
 * provided preview token is valid or not. If the spaceId, timestamp, and token are present in the
 * queryParams and the token is properly validated, it returns `true`. Otherwise, it returns `false`.
 */
const validateStoryblokPreviewToken = async ({
  previewToken,
  queryParams,
}: ValidateStoryblokPreviewTokenInput) => {
  const spaceId = queryParams.get('_storyblok_tk[space_id]');
  const timestamp = queryParams.get('_storyblok_tk[timestamp]');
  const token = queryParams.get('_storyblok_tk[token]');

  if (!spaceId || !timestamp || !token) {
    return false;
  }

  const validationString = [spaceId, previewToken, timestamp].join(':');

  const data = new TextEncoder().encode(validationString);
  const sha1Hash = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(sha1Hash));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  const properlyValidated = hashHex === token;

  if (!properlyValidated && token) {
    // eslint-disable-next-line no-console
    console.error(
      "`_storyblok_tk[token]` wasn't validated properly. Please, check if you're using the oldest Preview Access Token in Storyblok.",
    );
  }

  return properlyValidated;
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  const isValid = await validateStoryblokPreviewToken({
    queryParams: searchParams,
    previewToken: env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  });

  if (!isValid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const draft = await draftMode();

  const redirectSlug = !slug ? '/' : `/${slug}`;

  if (draft.isEnabled) {
    redirect(`${redirectSlug}?${searchParams.toString()}`);
  }

  draft.enable();

  redirect(`${redirectSlug}?${searchParams.toString()}`);
};
