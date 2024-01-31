import { ComponentSchema } from '../components.types.ts';
import { SEO_COLOR } from '../consts.ts';

export const seo: ComponentSchema = {
  componentGroup: 'seo',
  data: {
    name: 'seo',
    display_name: 'Seo',
    is_nestable: true,
    is_root: false,
    color: SEO_COLOR,
    icon: 'block-buildin',
    schema: {
      metaTitle: {
        type: 'text',
        pos: 0,
        required: false,
      },
      metaDescription: {
        type: 'textarea',
        pos: 1,
        required: false,
      },
      metaImage: {
        type: 'asset',
        pos: 2,
        required: false,
        filetypes: ['images'],
      },
      noIndex: {
        type: 'boolean',
        pos: 3,
        required: false,
        default_value: false,
      },
      noFollow: {
        type: 'boolean',
        pos: 4,
        required: false,
        default_value: false,
      },
    },
  },
};
