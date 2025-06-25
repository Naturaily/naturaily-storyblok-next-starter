import { BlokItem, SBProps, DynamicRender } from '../../../utils';
import { sbEditable } from '../../../utils/sbEditable/sbEditable';

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
