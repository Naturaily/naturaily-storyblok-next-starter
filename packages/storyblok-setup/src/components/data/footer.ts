import { ComponentSchema } from '../components.types.ts';
import { LAYOUT_COLOR } from '../consts.ts';

export const footer: ComponentSchema = {
  componentGroup: 'layout',
  data: {
    name: 'footer',
    display_name: 'Footer',
    is_nestable: true,
    is_root: true,
    color: LAYOUT_COLOR,
    icon: 'block-monitor',
    schema: {
      body: {
        type: 'bloks',
        pos: 0,
        required: false,
      },
    },
  },
};
