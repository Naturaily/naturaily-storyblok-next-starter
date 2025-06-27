import { convertAttributesInElement } from '@storyblok/react';
import {
  BlockTypes,
  MarkTypes,
  richTextResolver,
  StoryblokRichTextNode,
  StoryblokRichTextOptions,
} from '@storyblok/richtext';
import { createElement, ReactElement } from 'react';
import React from 'react';

import { Richtext } from '@natu/ui/Richtext';

import { MarkCode } from '../MarkCode/MarkCode';
import { MarkLink } from '../MarkLink/MarkLink';
import { NodeCodeblock } from '../NodeCodeblock/NodeCodeblock';
import { NodeHeading } from '../NodeHeading/NodeHeading';
import { NodeImage } from '../NodeImage/NodeImage';
import { NodeLi } from '../NodeLi/NodeLi';

export interface StoryblokRichtextProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: StoryblokRichTextNode<ReactElement>;
}

// * For future reference
// https://github.com/storyblok/richtext/blob/main/playground/react/src/App.tsx
// https://www.storyblok.com/docs/packages/storyblok-react#example-overriding-default-resolvers
// https://www.storyblok.com/docs/packages/storyblok-richtext#react

// * The keys for each custom component in the resolvers are generated using nanoid(); there’s no downgrade in bundle size or performance.
// * The keyedResolvers should handle this, but it doesn’t work for some custom components in the resolvers object, e.g., MarkLink and NodeLi.

const options: StoryblokRichTextOptions<ReactElement> = {
  renderFn: createElement,
  keyedResolvers: true,
  resolvers: {
    [MarkTypes.LINK]: (node: StoryblokRichTextNode<ReactElement>) => {
      return MarkLink(node);
    },
    [MarkTypes.CODE]: (node: StoryblokRichTextNode<ReactElement>) => {
      return MarkCode(node);
    },
    [BlockTypes.CODE_BLOCK]: (node: StoryblokRichTextNode<ReactElement>) => {
      return NodeCodeblock(node);
    },
    [BlockTypes.HEADING]: (node: StoryblokRichTextNode<ReactElement>) => {
      return NodeHeading(node);
    },
    [BlockTypes.LIST_ITEM]: (node: StoryblokRichTextNode<ReactElement>) => {
      return NodeLi(node);
    },
    [BlockTypes.IMAGE]: node => {
      return NodeImage(node.children, {
        alt: node.attrs?.alt,
        title: node.attrs?.title,
        src: node.attrs?.src,
      });
    },
  },
};

export const StoryblokRichtext = ({ data, ...rest }: StoryblokRichtextProps) => {
  if (!data) {
    return null;
  }

  const html = richTextResolver<ReactElement>(options).render(data);
  const formattedHtml = convertAttributesInElement(html);

  return <Richtext {...rest}>{formattedHtml}</Richtext>;
};
