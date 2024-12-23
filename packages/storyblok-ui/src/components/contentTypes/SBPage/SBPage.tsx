import { SbBlokData, storyblokEditable } from '@storyblok/react/rsc';

import { BlokItem, DynamicRender, SBProps, sbEditable } from '@natu/storyblok-utils';

interface SBPageProps {
  body?: BlokItem[];
}

export const SBPage = ({ blok }: SBProps<SBPageProps>) => {
  const { body } = blok;

  return (
    <div {...storyblokEditable(blok as SbBlokData)}>
      <DynamicRender data={body} />
    </div>
  );
};
