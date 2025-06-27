import { StoryblokRichTextNode } from '@storyblok/richtext';
import { nanoid } from 'nanoid';
import { ReactNode } from 'react';

export const NodeLi = (node: StoryblokRichTextNode<ReactNode>) => (
  <li key={nanoid()} className="[&>p]:m-0">
    {node.children}
  </li>
);
