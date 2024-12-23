'use client';

import { ReactNode } from 'react';

import { getStoryblokApi } from '@natu/storyblok-ui';

interface StoryblokProviderProps {
  children?: ReactNode;
}

export const StoryblokProvider = ({ children }: StoryblokProviderProps) => {
  getStoryblokApi();

  return children;
};
