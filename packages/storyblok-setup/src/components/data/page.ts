import { ComponentSchema } from '../components.types';
import { CONTENT_TYPE_COLOR } from '../consts.ts';

export const page: ComponentSchema = {
  componentGroup: 'content type',
  data: {
    name: 'page',
    display_name: 'Page',
    is_root: true,
    is_nestable: false,
    color: CONTENT_TYPE_COLOR,
    icon: 'block-wallet',
    schema: {
      body: {
        type: 'bloks',
        pos: 0,
      },
      seo: {
        type: 'bloks',
        pos: 0,
        maximum: 1,
        description: 'By filling in this field you will overwrite global seo settings',
        restrict_components: true,
        component_whitelist: ['seo'],
      },
      tab: {
        display_name: 'Seo',
        type: 'tab',
        pos: 2,
        keys: ['seo'],
      },
    },
  },
};
