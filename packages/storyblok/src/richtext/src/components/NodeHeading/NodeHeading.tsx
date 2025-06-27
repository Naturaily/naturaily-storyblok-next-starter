import { StoryblokRichTextNode } from '@storyblok/richtext';
import { nanoid } from 'nanoid';
import { ElementType, ReactElement } from 'react';

import { Typography } from '@natu/ui/Typography';

import { TypographyVariantProp } from '../../../../../../ui/src/Typography/Typography.type';

interface Heading {
  tag: ElementType;
  variant: TypographyVariantProp;
}

const headings: Heading[] = [
  {
    tag: 'h1',
    variant: ['text-4xl', 'text-5xl', 'text-6xl'],
  },
  {
    tag: 'h2',
    variant: ['text-3xl', 'text-4xl', 'text-5xl'],
  },
  {
    tag: 'h3',
    variant: ['text-2xl', 'text-3xl', 'text-4xl'],
  },
  {
    tag: 'h4',
    variant: ['text-xl', 'text-2xl', 'text-3xl'],
  },
  {
    tag: 'h5',
    variant: ['text-lg', 'text-xl', 'text-2xl'],
  },
  {
    tag: 'h6',
    variant: ['text-base', 'text-lg', 'text-xl'],
  },
];

export const NodeHeading = (node: StoryblokRichTextNode<ReactElement>) => {
  const { tag, variant } = headings[node?.attrs?.level - 1];

  return (
    <Typography key={nanoid()} component={tag} variant={variant}>
      {node.children}
    </Typography>
  );
};
