// @ts-ignore
import { StoryblokServerComponent } from '@storyblok/react/rsc';

import { BlokItem } from '../../types';

export interface StoryblokComponentsProps {
  data?: BlokItem | BlokItem[];
  asListItem?: boolean;
  parentProps?: Record<string, unknown>;
}

export const DynamicRender = ({
  data,
  asListItem = false,
  parentProps,
}: StoryblokComponentsProps) => {
  if (!data) {
    return null;
  }

  if (Array.isArray(data)) {
    if (asListItem) {
      return data.map(blok => (
        <li className="flex" key={blok._uid}>
          <StoryblokServerComponent blok={{ ...blok, parentProps }} />
        </li>
      ));
    }

    return data.map(blok => (
      <StoryblokServerComponent key={blok._uid} blok={{ ...blok, parentProps }} />
    ));
  }

  return <StoryblokServerComponent key={data._uid} blok={{ ...data, parentProps }} />;
};
