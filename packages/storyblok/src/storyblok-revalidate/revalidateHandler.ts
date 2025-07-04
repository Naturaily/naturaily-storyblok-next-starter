import { TAGS } from '#storyblok/api/tags';
import { getSlugWithoutAppName } from '#storyblok/utils/getSlugWithoutAppName/getSlugWithoutAppName';
import { revalidatePath, revalidateTag } from 'next/cache';

import { env } from '@natu/env';

export const revalidateHandler = async (request: Request): Promise<Response> => {
  const { searchParams } = new URL(request.url);

  const token = searchParams.get('token');

  // Check if token is valid
  if (token !== env.STORYBLOK_WEBHOOK_SECRET) {
    return new Response(JSON.stringify({ message: 'Invalid token' }), { status: 401 });
  }

  const { full_slug: storyblokSlug } = await request.json();

  if (!storyblokSlug) {
    return Response.json({
      revalidated: false,
      now: Date.now(),
      message: 'Missing path to revalidate',
    });
  }

  const slug = getSlugWithoutAppName(storyblokSlug) || '/';

  if (slug.includes(env.NEXT_PUBLIC_STORYBLOK_EXCLUDED_FOLDERS_FROM_ROUTING)) {
    revalidatePath('/', 'layout');
    revalidatePath('/[slug]', 'layout');
    revalidateTag(TAGS.SB_CONFIG);

    return Response.json({ revalidated: true, now: Date.now(), slug, tags: [TAGS.SB_CONFIG] });
  }

  revalidatePath(slug);

  return Response.json({ revalidated: true, now: Date.now(), slug });
};
