import { convertAttributesInElement } from '@storyblok/react';
import {
  BlockTypes,
  MarkTypes,
  richTextResolver,
  StoryblokRichTextNode,
  StoryblokRichTextOptions,
} from '@storyblok/richtext';
import { MarkCode } from '#storyblok/richtext/src/components/MarkCode/MarkCode';
import { MarkLink } from '#storyblok/richtext/src/components/MarkLink/MarkLink';
import { NodeCodeblock } from '#storyblok/richtext/src/components/NodeCodeblock/NodeCodeblock';
import { NodeHeading } from '#storyblok/richtext/src/components/NodeHeading/NodeHeading';
import { NodeImage } from '#storyblok/richtext/src/components/NodeImage/NodeImage';
import { NodeLi } from '#storyblok/richtext/src/components/NodeLi/NodeLi';
import React from 'react';
import { createElement, ReactElement } from 'react';

import { Richtext } from '@natu/ui/Richtext';
import { cn } from '@natu/utils/cn';

export type StoryblokRichtextVariant = 'default' | 'prose';

export interface StoryblokRichtextProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: StoryblokRichTextNode<ReactElement>;
  variant?: StoryblokRichtextVariant;
}

// * For future reference
// https://github.com/storyblok/richtext/blob/main/playground/react/src/App.tsx
// https://www.storyblok.com/docs/packages/storyblok-react#example-overriding-default-resolvers
// https://www.storyblok.com/docs/packages/storyblok-richtext#react

// * The keys for each custom component in the resolvers are generated using uid() from radash; there’s no downgrade in bundle size or performance.
// * The keyedResolvers should handle this, but it doesn’t work for some custom components in the resolvers object, e.g., MarkLink and NodeLi.

export const StoryblokRichtext = ({
  data,
  variant = 'prose',
  className: externalClassName,
  ...rest
}: StoryblokRichtextProps) => {
  if (!data) return null;

  const options: StoryblokRichTextOptions<ReactElement> = {
    renderFn: createElement,
    keyedResolvers: true,
    resolvers: {
      [MarkTypes.LINK]: (node: StoryblokRichTextNode<ReactElement>) => {
        return MarkLink(node, { variant });
      },
      [MarkTypes.CODE]: (node: StoryblokRichTextNode<ReactElement>) => {
        return MarkCode(node);
      },
      [BlockTypes.CODE_BLOCK]: (node: StoryblokRichTextNode<ReactElement>) => {
        return NodeCodeblock(node);
      },
      [BlockTypes.HEADING]: (node: StoryblokRichTextNode<ReactElement>) => {
        return NodeHeading(node, { variant });
      },
      [BlockTypes.LIST_ITEM]: (node: StoryblokRichTextNode<ReactElement>) => {
        return NodeLi(node, { variant });
      },
      [BlockTypes.IMAGE]: (node: StoryblokRichTextNode<ReactElement>) => {
        return NodeImage(node);
      },
    },
  };

  const html = richTextResolver<ReactElement>(options).render(data);
  const formattedHtml = convertAttributesInElement(html);

  const combinedClassName = cn(
    {
      '': variant === 'default',
      'prose dark:prose-invert max-w-none': variant === 'prose',
    },
    externalClassName,
  );

  return (
    <Richtext className={combinedClassName} {...rest}>
      {formattedHtml}
    </Richtext>
  );
};
