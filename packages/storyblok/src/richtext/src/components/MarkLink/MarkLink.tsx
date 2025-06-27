import { StoryblokRichTextNode } from '@storyblok/richtext';
import { nanoid } from 'nanoid';
import { ReactElement } from 'react';

import { env } from '@natu/env';
import { Link } from '@natu/next-link/Link';
import { buttonVariants } from '@natu/ui/Button';

import { getLinkPropsFromStoryblok } from '../../../../utils/getLinkPropsFromStoryblok/getLinkPropsFromStoryblok';
import { StoryblokLink } from '../../../../utils/types/StoryblokLink/StoryblokLink';

/**
 * This function creates a StoryblokLink object from the node's attributes and returns a Link
 * component using the link properties obtained from the StoryblokLink object.
 * @param {StoryblokRichTextNode} node - The Storyblok rich text node containing text and attributes
 * @returns The `markLink` function returns a JSX element that renders a Link component
 */

export const MarkLink = (node: StoryblokRichTextNode<ReactElement>) => {
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
      key={nanoid()}
      className={buttonVariants({ variant: 'link', size: 'link' })}
    >
      {text}
    </Link>
  );
};
