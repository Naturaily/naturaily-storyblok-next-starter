import { ReactNode, ElementType } from 'react';

import { Typography, TypographyVariantProp } from '@natu/ui';

interface NodeHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

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

export const NodeHeading = (children: ReactNode, { level }: NodeHeadingProps) => {
  const { tag, variant } = headings[level - 1];

  return (
    <Typography component={tag} variant={variant}>
      {children}
    </Typography>
  );
};
