'use client';

import { ReactNode } from 'react';

import { getStoryblokApi } from '@natu/storyblok/api';

interface StoryblokProviderProps {
  children?: ReactNode;
}

export const StoryblokProvider = ({ children }: StoryblokProviderProps) => {
  getStoryblokApi();

  return children;
};
