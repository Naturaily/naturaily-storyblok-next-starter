'use client';

import { getStoryblokApi } from '@natu/storyblok/api';
import { ReactNode } from 'react';

interface StoryblokProviderProps {
  children?: ReactNode;
}

export const StoryblokProvider = ({ children }: StoryblokProviderProps) => {
  getStoryblokApi();

  return children;
};
