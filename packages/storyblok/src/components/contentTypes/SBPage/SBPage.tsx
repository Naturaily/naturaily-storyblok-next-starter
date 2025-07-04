import { DynamicRender } from '#storyblok/utils/components/DynamicRender/DynamicRender';
import { sbEditable } from '#storyblok/utils/sbEditable/sbEditable';
import { BlokItem, SBProps } from '#storyblok/utils/types/SBProps/SBProps';

interface SBPageProps {
  body?: BlokItem[];
}

export const SBPage = ({ blok }: SBProps<SBPageProps>) => {
  const { body } = blok;

  return (
    <div {...sbEditable(blok)}>
      <DynamicRender data={body} />
    </div>
  );
};
