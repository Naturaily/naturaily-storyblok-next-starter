import { ComponentSchema } from '../components.types.ts';
import { ATOMS_COLOR } from '../consts.ts';

export const image: ComponentSchema = {
  componentGroup: 'atoms',
  data: {
    name: 'image',
    display_name: 'Image',
    is_nestable: true,
    is_root: false,
    color: ATOMS_COLOR,
    icon: 'block-image',
    schema: {
      asset: { type: 'asset', filetypes: ['images'], pos: 0 },
      aspectRatio: { type: 'section', pos: 1, keys: ['aspectRatioY', 'aspectRatioX'] },
      aspectRatioX: {
        type: 'number',
        description:
          'For the value to work, the Ratio X and Y aspect must be filled\n' +
          '\n' +
          'The image proportions adjust to the entered values. The image will also get a cover property.\n' +
          '\n' +
          'Cover: https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit\n' +
          '\n' +
          'If the values   are empty, the image will be displayed in the default image proportions',
        pos: 2,
      },
      aspectRatioY: {
        type: 'number',
        description:
          'For the value to work, the Ratio X and Y aspect must be filled\n' +
          '\n' +
          'The image proportions adjust to the entered values. The image will also get a cover property.\n' +
          '\n' +
          'Cover: https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit\n' +
          '\n' +
          'If the values   are empty, the image will be displayed in the default image proportions',
        pos: 3,
      },
      size: { type: 'section', pos: 4, keys: ['height', 'width'] },
      width: {
        type: 'number',
        description: 'Custom width. By default it is taken from the file. You can overwrite it.',
        pos: 5,
      },
      height: {
        type: 'number',
        description: 'Custom height. By default it is taken from the file. You can overwrite it.',
        pos: 6,
      },
      fullWidth: {
        type: 'boolean',
        description: 'The image will stretch to the maximum width of the container.',
      },
      priority: {
        type: 'boolean',
        description:
          'Changes the way an image is loaded. Thanks to this option, the photo will be loaded faster, which will have a positive impact on the lighthouse result.\n' +
          '\n' +
          'Select this option only if your image is on the top of the page',
      },
      link: {
        type: 'multilink',
        description: 'If a link is provided, the entire image will be treated as an anchor.',
        email_link_type: true,
        show_anchor: true,
        allow_target_blank: true,
        allow_custom_attributes: true,
        force_link_scope: true,
        link_scope: '{0}/',
      },
      'tab-ae43833f-f88e-4168-9fe3-b65c0e41dde9': {
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
      marginTopGroup: { type: 'section', keys: ['mtTablet', 'mtMobile', 'mtDesktop'] },
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
      marginBottomGroup: { type: 'section', keys: ['mbTablet', 'mbDesktop', 'mbMobile'] },
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
        description: 'If not set - tablet value will be used',
        source: 'internal',
        datasource_slug: 'space',
      },
    },
  },
};
