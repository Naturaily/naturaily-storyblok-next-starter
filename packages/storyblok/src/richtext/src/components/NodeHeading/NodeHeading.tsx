import { StoryblokRichTextNode } from '@storyblok/richtext';
import { cva } from 'class-variance-authority';
import { uid } from 'radash';
import { ElementType, ReactElement } from 'react';

import { Typography } from '@natu/ui/Typography';

import { TypographyVariantProp } from '../../../../../../ui/src/Typography/Typography.type';
import { StoryblokRichtextVariant } from '../StoryblokRichtext/StoryblokRichtext';

interface Heading {
  tag: ElementType;
  variant: TypographyVariantProp;
}

const nodeHeadingVariants = cva('', {
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

export const NodeHeading = (
  node: StoryblokRichTextNode<ReactElement>,
  { variant: cvaVariant }: { variant: StoryblokRichtextVariant },
) => {
  const { tag, variant } = headings[node?.attrs?.level - 1];

  return (
    <Typography
      className={nodeHeadingVariants({ variant: cvaVariant })}
      key={uid(5)}
      component={tag}
      variant={variant}
    >
      {node.children}
    </Typography>
  );
};
