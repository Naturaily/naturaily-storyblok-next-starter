import { StoryblokRichTextNode } from '@storyblok/richtext';
import { StoryblokRichtextVariant } from '#storyblok/richtext/src/components/StoryblokRichtext/StoryblokRichtext';
import { getLinkPropsFromStoryblok } from '#storyblok/utils/getLinkPropsFromStoryblok/getLinkPropsFromStoryblok';
import { StoryblokLink } from '#storyblok/utils/types/StoryblokLink/StoryblokLink';
import { cva, type VariantProps } from 'class-variance-authority';
import { uid } from 'radash';
import { ReactElement } from 'react';

import { env } from '@natu/env';
import { Link } from '@natu/next-link/Link';
import { buttonVariants } from '@natu/ui/Button';
import { cn } from '@natu/utils/cn';

const markLinkVariants = cva('', {
  variants: {
    variant: {
      default: '',
      prose: '',
    } as Record<StoryblokRichtextVariant, string>,
  },
  defaultVariants: {
    variant: 'prose',
  },
});

export type MarkLinkProps = VariantProps<typeof markLinkVariants>;

/**
 * This function creates a StoryblokLink object from the node's attributes and returns a Link
 * component using the link properties obtained from the StoryblokLink object.
 * @param {StoryblokRichTextNode} node - The Storyblok rich text node containing text and attributes
 * @param {StoryblokRichtextVariant} variant - The variant to use for styling (default or prose)
 * @returns The `markLink` function returns a JSX element that renders a Link component
 */
export const MarkLink = (
  node: StoryblokRichTextNode<ReactElement>,
  { variant }: { variant: StoryblokRichtextVariant },
) => {
  const { linktype, href, target, anchor, uuid } = node.attrs || {};
  const text = node.text;

  const hrefWithoutAppFolder = href?.replace(`${env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER}/`, '');

  const storyblokLink = {
    id: uuid,
    linktype,
    cached_url: hrefWithoutAppFolder,
    email: hrefWithoutAppFolder,
    url: hrefWithoutAppFolder,
    target,
    anchor,
  } as StoryblokLink;

  const linkProps = getLinkPropsFromStoryblok(storyblokLink);

  return (
    <Link
      {...linkProps}
      key={uid(5)}
      className={cn(
        buttonVariants({ variant: 'link', size: 'link' }),
        markLinkVariants({ variant }),
      )}
    >
      {text}
    </Link>
  );
};
