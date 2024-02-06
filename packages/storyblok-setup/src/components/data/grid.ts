import { ComponentSchema } from '../components.types.ts';
import { ORGANISMS_COLOR } from '../consts.ts';

export const grid: ComponentSchema = {
  componentGroup: 'organisms',
  data: {
    name: 'grid',
    display_name: 'Grid',
    is_nestable: true,
    is_root: false,
    color: ORGANISMS_COLOR,
    icon: 'block-table-2',
    schema: {
      containerSize: {
        type: 'option',
        pos: 0,
        use_uuid: true,
        default_value: 'screen-2xl',
        source: 'internal',
        datasource_slug: 'container-size',
      },
      gridGroup: {
        type: 'section',
        pos: 1,
        keys: ['gridMobile', 'gridTablet', 'gridDesktop'],
      },
      gridMobile: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'grid-variants',
        default_value: '2-col',
        pos: 2,
      },
      gridTablet: {
        type: 'option',
        use_uuid: true,
        description: 'If not set - mobile value will be used',
        source: 'internal',
        datasource_slug: 'grid-variants',
        pos: 3,
      },
      gridDesktop: {
        type: 'option',
        use_uuid: true,
        description: 'If not set - tablet value will be used',
        source: 'internal',
        datasource_slug: 'grid-variants',
        pos: 4,
      },
      gapGroup: {
        type: 'section',
        pos: 5,
        keys: ['gapTablet', 'gapMobile', 'gapDesktop'],
      },
      gapMobile: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        default_value: '4',
        pos: 6,
      },
      gapTablet: {
        type: 'option',
        use_uuid: true,
        description: 'If not set - mobile value will be used',
        source: 'internal',
        datasource_slug: 'space',
        pos: 7,
      },
      gapDesktop: {
        type: 'option',
        use_uuid: true,
        description: 'If not set - tablet value will be used',
        source: 'internal',
        datasource_slug: 'space',
        pos: 8,
      },
      marginTopGroup: {
        type: 'section',
        pos: 9,
        keys: ['mtDesktop', 'mtMobile', 'mtTablet'],
      },
      mtMobile: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        pos: 10,
      },
      mtTablet: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        description: 'If not set - mobile value will be used',
        pos: 11,
      },
      mtDesktop: {
        type: 'option',
        use_uuid: true,
        description: 'If not set - tablet value will be used',
        source: 'internal',
        datasource_slug: 'space',
        pos: 12,
      },
      marginBottomGroup: {
        type: 'section',
        pos: 13,
        keys: ['mbDesktop', 'mbTablet', 'mbMobile'],
      },
      mbMobile: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        pos: 14,
      },
      mbTablet: {
        type: 'option',
        use_uuid: true,
        description: 'If not set - mobile value will be used',
        source: 'internal',
        datasource_slug: 'space',
        pos: 15,
      },
      mbDesktop: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        description: 'If not set - tablet value will be used',
        pos: 16,
      },
      tag: {
        type: 'option',
        use_uuid: true,
        description:
          'Changes the tag rendered in HTML.\n' +
          '\n' +
          'If "ul" or "ol" is selected, the "li" elements will be added automatically.',
        options: [
          {
            name: 'div',
            value: 'div',
          },
          {
            value: 'section',
            name: 'section',
          },
          {
            value: 'article',
            name: 'article',
          },
          {
            value: 'ol',
            name: 'ol',
          },
          {
            value: 'ul',
            name: 'ul',
          },
        ],
        default_value: 'div',
        pos: 17,
      },
      body: { type: 'bloks', use_uuid: true, pos: 18 },
      'tab-4c92d50f-47c6-4f6e-b808-fb4de79ec429': {
        display_name: 'Styles',
        keys: [
          'containerSize',
          'gridMobile',
          'gridTablet',
          'gridDesktop',
          'gridGroup',
          'gapMobile',
          'gapTablet',
          'gapDesktop',
          'gapGroup',
          'mtMobile',
          'mtTablet',
          'mtDesktop',
          'marginTopGroup',
          'mbMobile',
          'mbTablet',
          'mbDesktop',
          'marginBottomGroup',
        ],
        pos: 19,
        type: 'tab',
      },
    },
  },
};
