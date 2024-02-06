import { ComponentSchema } from '../components.types.ts';
import { ATOMS_COLOR } from '../consts.ts';

export const table: ComponentSchema = {
  componentGroup: 'atoms',
  data: {
    name: 'table',
    display_name: 'Table',
    is_nestable: true,
    is_root: false,
    color: ATOMS_COLOR,
    icon: 'block-table-2',
    schema: {
      table: { type: 'table' },
      caption: { type: 'textarea' },
      'tab-07018dfc-00e1-45d7-b2e5-d2c951c35439': {
        display_name: 'Styles',
        keys: [
          'marginTopGroup',
          'mtMobile',
          'mtTablet',
          'mtDesktop',
          'marginBottomGroup',
          'mbMobile',
          'mbTablet',
          'mbDesktop',
        ],
        pos: 0,
        type: 'tab',
      },
      marginTopGroup: { type: 'section', keys: ['mtMobile', 'mtTablet', 'mtDesktop'] },
      mtMobile: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
      },
      mtTablet: {
        type: 'option',
        use_uuid: true,
        description: 'If not set - mobile value will be used',
        source: 'internal',
        datasource_slug: 'space',
      },
      mtDesktop: {
        type: 'option',
        use_uuid: true,
        description: 'If not set - tablet value will be used',
        source: 'internal',
        datasource_slug: 'space',
      },
      marginBottomGroup: { type: 'section', keys: ['mbDesktop', 'mbTablet', 'mbMobile'] },
      mbMobile: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
      },
      mbTablet: {
        type: 'option',
        use_uuid: true,
        description: 'If not set - mobile value will be used',
        source: 'internal',
        datasource_slug: 'space',
      },
      mbDesktop: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        default_value: '',
        description: 'If not set - tablet value will be used',
      },
    },
  },
};
