import { DynamicRender } from '../../../utils/components/DynamicRender/DynamicRender';
import { sbEditable } from '../../../utils/sbEditable/sbEditable';
import { BlokItem, SBProps } from '../../../utils/types/SBProps/SBProps';

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
