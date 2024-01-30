import { ComponentSchema } from '../components.types.ts';
import { ATOMS_COLOR } from '../consts.ts';

export const themeModeSwitcher: ComponentSchema = {
  componentGroup: 'atoms',
  data: {
    name: 'themeModeSwitcher',
    display_name: 'Theme mode switcher',
    is_nestable: true,
    is_root: false,
    color: ATOMS_COLOR,
    icon: 'block-sticker',
    schema: {},
  },
};
