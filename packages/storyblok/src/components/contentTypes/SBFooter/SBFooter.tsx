import { DynamicRender } from '#storyblok/utils/components/DynamicRender/DynamicRender';
import { sbEditable } from '#storyblok/utils/sbEditable/sbEditable';
import { BlokItem, SBProps } from '#storyblok/utils/types/SBProps/SBProps';

interface SBFooterProps {
  body?: BlokItem[];
}

export const SBFooter = ({ blok }: SBProps<SBFooterProps>) => {
  const { body } = blok;

  return (
    <footer className="bg-secondary text-foreground text-center" {...sbEditable(blok)}>
      <DynamicRender data={body} />
    </footer>
  );
};
