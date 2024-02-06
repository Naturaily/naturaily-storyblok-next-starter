import { ComponentSchema } from '../components.types.ts';
import { ATOMS_COLOR } from '../consts.ts';

export const richtext: ComponentSchema = {
  componentGroup: 'atoms',
  data: {
    name: 'richtext',
    display_name: 'Richtext',
    is_nestable: true,
    is_root: false,
    color: ATOMS_COLOR,
    icon: 'block-text-c',
    schema: {
      content: {
        type: 'richtext',
        allow_target_blank: true,
        allow_custom_attributes: true,
      },
      tab: {
        display_name: 'Styles',
        keys: [
          'fontFamily',
          'textAlginGroup',
          'textAlignMobile',
          'textAlignTablet',
          'textAlignDesktop',
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
      fontFamily: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'font-family',
        default_value: 'primary',
      },
      textAlginGroup: {
        type: 'section',
        keys: ['textAlignDesktop', 'textAlignTablet', 'textAlignMobile'],
      },
      textAlignMobile: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'text-align',
      },
      textAlignTablet: {
        type: 'option',
        use_uuid: true,
        description: 'If not set - mobile value will be used',
        source: 'internal',
        datasource_slug: 'text-align',
      },
      textAlignDesktop: {
        type: 'option',
        use_uuid: true,
        description: 'If not set - tablet value will be used',
        source: 'internal',
        datasource_slug: 'text-align',
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
        source: 'internal',
        exclude_empty_option: false,
        datasource_slug: 'space',
        description: 'If not set - mobile value will be used',
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
        source: 'internal',
        datasource_slug: 'space',
        description: 'If not set - mobile value will be used',
      },
      mbDesktop: {
        type: 'option',
        use_uuid: true,
        source: 'internal',
        datasource_slug: 'space',
        description: 'If not set - tablet value will be used',
      },
    },
  },
};