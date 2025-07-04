import { StoryblokRichTextNode } from '@storyblok/richtext';
import { StoryblokRichtextVariant } from '#storyblok/richtext/src/components/StoryblokRichtext/StoryblokRichtext';
import { cva } from 'class-variance-authority';
import { uid } from 'radash';
import { ReactNode } from 'react';

import { cn } from '@natu/utils/cn';

const nodeLiVariants = cva('', {
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

export const NodeLi = (
  node: StoryblokRichTextNode<ReactNode>,
  { variant }: { variant: StoryblokRichtextVariant },
) => (
  <li key={uid(5)} className={cn('[&>p]:m-0', nodeLiVariants({ variant }))}>
    {node.children}
  </li>
);
