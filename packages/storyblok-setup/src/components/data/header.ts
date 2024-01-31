import { ComponentSchema } from '../components.types.ts';
import { LAYOUT_COLOR } from '../consts.ts';

export const header: ComponentSchema = {
  componentGroup: 'layout',
  data: {
    name: 'header',
    display_name: 'Header',
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
