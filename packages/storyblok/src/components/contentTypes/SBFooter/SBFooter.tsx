import { DynamicRender } from '../../../utils/components/DynamicRender/DynamicRender';
import { sbEditable } from '../../../utils/sbEditable/sbEditable';
import { BlokItem, SBProps } from '../../../utils/types';

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
