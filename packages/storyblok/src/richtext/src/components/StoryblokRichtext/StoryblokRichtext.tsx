import { ISbRichtext } from '@storyblok/react';
import { ComponentProps } from 'react';

import { getStoryblokRichText } from './getStoryblokRichText';
import { Richtext } from '@natu/ui/RichText';

export type StoryblokRichTextData = ISbRichtext;

interface StoryblokRichtextProps extends ComponentProps<'div'> {
  data?: StoryblokRichTextData;
}

export const StoryblokRichtext = ({ data, ...rest }: StoryblokRichtextProps) => {
  if (!data) {
    return null;
  }

  const content = getStoryblokRichText(data);

  return <Richtext {...rest}>{content}</Richtext>;
};
