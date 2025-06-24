import { BlokItem, DynamicRender, SBProps, sbEditable } from '@natu/storyblok-utils';

interface SBHeaderProps {
  body?: BlokItem[];
}

export const SBHeader = ({ blok }: SBProps<SBHeaderProps>) => {
  const { body } = blok;

  return (
    <header className="w-full sticky top-0 z-20 bg-secondary" {...sbEditable(blok)}>
      <DynamicRender data={body} />
    </header>
  );
};
