import { BlokItem, DynamicRender, SBProps } from '../../../utils';
import { sbEditable } from '../../../utils/sbEditable/sbEditable';

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
