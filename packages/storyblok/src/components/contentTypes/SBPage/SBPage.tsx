import { BlokItem, SBProps, DynamicRender } from '../../../utils';
import { sbEditable } from '../../../utils/sbEditable/sbEditable';

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
