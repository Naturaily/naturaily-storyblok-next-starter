import { DynamicRender } from '#storyblok/utils/components/DynamicRender/DynamicRender';
import { sbEditable } from '#storyblok/utils/sbEditable/sbEditable';
import { BlokItem, SBProps } from '#storyblok/utils/types/SBProps/SBProps';

interface SBHeaderProps {
  body?: BlokItem[];
}

export const SBHeader = ({ blok }: SBProps<SBHeaderProps>) => {
  const { body } = blok;

  return (
    <header className="bg-secondary sticky top-0 z-20 w-full" {...sbEditable(blok)}>
      <DynamicRender data={body} />
    </header>
  );
};
