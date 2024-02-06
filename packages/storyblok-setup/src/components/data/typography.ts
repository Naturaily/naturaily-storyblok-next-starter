import { ComponentSchema } from '../components.types.ts';
import { ATOMS_COLOR } from '../consts.ts';

export const typography: ComponentSchema = {
  componentGroup: 'atoms',
  data: {
    name: 'typography',
    display_name: 'Typography',
    is_nestable: true,
    is_root: false,
    color: ATOMS_COLOR,
    icon: 'block-text-l',
    schema: {
      fontFamily: {
        type: 'option',
        use_uuid: true,
        pos: 0,
        source: 'internal',
        datasource_slug: 'font-family',
        default_value: 'primary',
      },
      fontWeight: {
        type: 'option',
        use_uuid: true,
        options: [
          {
            name: 'normal [400]',
            value: 'normal',
          },
          {
            value: 'bold',
            name: 'bold [700]',
          },
        ],
        default_value: 'normal',
        pos: 1,
      },
      fontSizeGroup: {
        type: 'section',
        pos: 2,
        keys: ['fontSizeMobile', 'fontSizeTablet', 'fontSizeDesktop'],
      },
      fontSizeMobile: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'font-size',
        pos: 3,
      },
      fontSizeTablet: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'font-size',
        pos: 4,
      },
      fontSizeDesktop: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'font-size',
        pos: 5,
      },
      textAlignGroup: {
        type: 'section',
        pos: 6,
        keys: ['textAlignMobile', 'textAlignTablet', 'textAlignDesktop'],
      },
      textAlignMobile: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'text-align',
        pos: 7,
      },
      textAlignTablet: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'text-align',
        pos: 8,
      },
      textAlignDesktop: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'text-align',
        pos: 9,
      },
      marginTopGroup: {
        type: 'section',
        pos: 10,
        keys: ['mtMobile', 'mtTablet', 'mtDesktop'],
      },
      mtMobile: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        pos: 11,
      },
      mtTablet: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        pos: 12,
      },
      mtDesktop: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        pos: 13,
      },
      marginBottomGroup: {
        type: 'section',
        pos: 14,
        keys: ['mbTablet', 'mbMobile', 'mbDesktop'],
      },
      mbMobile: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        pos: 15,
      },
      mbTablet: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        pos: 16,
      },
      mbDesktop: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        pos: 17,
      },
      content: { type: 'textarea', pos: 18 },
      tag: {
        type: 'option',
        use_uuid: true,
        options: [
          {
            name: 'p',
            value: 'p',
          },
          {
            value: 'h1',
            name: 'h1',
          },
          {
            value: 'h2',
            name: 'h2',
          },
          {
            value: 'h3',
            name: 'h3',
          },
          {
            value: 'h4',
            name: 'h4',
          },
          {
            value: 'h5',
            name: 'h5',
          },
          {
            value: 'h6',
            name: 'h6',
          },
          {
            value: 'strong',
            name: 'strong',
          },
          {
            value: 'span',
            name: 'span',
          },
        ],
        default_value: 'p',
        pos: 19,
      },
      tab: {
        display_name: 'Styles',
        keys: [
          'fontSizeMobile',
          'fontSizeTablet',
          'fontSizeDesktop',
          'fontWeight',
          'textAlignMobile',
          'textAlignTablet',
          'textAlignDesktop',
          'fontFamily',
          'mtMobile',
          'mtTablet',
          'mtDesktop',
          'mbMobile',
          'mbTablet',
          'mbDesktop',
          'fontSizeGroup',
          'textAlignGroup',
          'marginBottomGroup',
          'marginTopGroup',
        ],
        pos: 20,
        type: 'tab',
      },
    },
  },
};