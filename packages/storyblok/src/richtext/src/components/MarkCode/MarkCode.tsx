import { StoryblokRichTextNode } from '@storyblok/richtext';
import { uid } from 'radash';
import { ReactElement } from 'react';

export const MarkCode = (node: StoryblokRichTextNode<ReactElement>) => (
  <code
    key={uid(5)}
    className="not-prose text-foreground rounded border border-slate-400 bg-slate-100 px-1 py-px dark:border-slate-500 dark:bg-slate-700"
  >
    {node.text}
  </code>
);
