import { ComponentName } from '../componentGroup/componentsGroup';

interface SelectOption {
  name: string;
  value: string;
}
type FieldTypes = 'images' | 'videos' | 'audios' | 'texts';

interface ComponentSchema {
  type:
    | 'bloks'
    | 'text'
    | 'textarea'
    | 'table'
    | 'richtext'
    | 'markdown'
    | 'number'
    | 'datetime'
    | 'boolean'
    | 'options'
    | 'option'
    | 'asset'
    | 'multiasset'
    | 'multilink'
    | 'section'
    | 'custom'
    | 'tab';
  pos?: number;
  required?: boolean;
  default_value?: string | boolean | number;
  description?: string;
  max_length?: number;
  maximum?: number;
  restrict_components?: boolean;
  restrict_content_types?: boolean;
  display_name?: string;
  options?: SelectOption[];
  filetypes?: FieldTypes[];
  component_whitelist?: string[];
  source?: 'internal_stories' | 'internal';
  filter_content_type?: string[];
  keys?: string[];
  folder_slug?: '{0}/';
  link_scope?: '{0}/';
  email_link_type?: boolean;
  show_anchor?: boolean;
  allow_target_blank?: boolean;
  force_link_scope?: true;
  use_uuid?: true;
  datasource_slug?: string;
  allow_custom_attributes?: boolean;
  exclude_empty_option?: boolean;
  key?: string;
}

interface ContentType {
  componentGroup: ComponentName;
  data: {
    name: string;
    display_name: string;
    schema: Record<string, ComponentSchema>;
    is_root: boolean;
    is_nestable: boolean;
    color?: string;
    icon?: string;
  };
}

export const components: ContentType[] = [
  {
    componentGroup: 'templates',
    data: {
      name: 'container',
      display_name: 'Container',
      is_nestable: true,
      is_root: false,
      color: '#ff6159',
      icon: 'block-resize-fc',
      schema: {
        containerSize: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'container-size',
          default_value: 'full',
          pos: 0,
        },
        marginTopGroup: {
          type: 'section',
          pos: 1,
          keys: ['mtMobile', 'mtTablet', 'mtDesktop'],
        },
        mtMobile: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          pos: 2,
        },
        mtTablet: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - mobile value will be used',
          source: 'internal',
          datasource_slug: 'space',
          pos: 3,
        },
        mtDesktop: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          description: 'If not set - tablet value will be used',
          pos: 4,
        },
        marginBottomGroup: {
          type: 'section',
          pos: 5,
          keys: ['mbTablet', 'mbDesktop', 'mbMobile'],
        },
        mbMobile: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          pos: 6,
        },
        mbTablet: {
          type: 'option',
          description: 'If not set - mobile value will be used',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          pos: 7,
        },
        mbDesktop: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          description: 'If not set - tablet value will be used',
          pos: 8,
        },
        paddingXGroup: {
          type: 'section',
          pos: 9,
          keys: ['pxDesktop', 'pxMobile', 'pxTablet'],
        },
        pxMobile: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          default_value: '4',
          pos: 10,
        },
        pxTablet: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          default_value: '6',
          description: 'If not set - mobile value will be used',
          pos: 11,
        },
        pxDesktop: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          default_value: '8',
          description: 'If not set - tablet value will be used',
          pos: 12,
        },
        paddingYGroup: {
          type: 'section',
          pos: 13,
          keys: ['pyDesktop', 'pyTablet', 'pyMobile'],
        },
        pyMobile: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          pos: 14,
        },
        pyTablet: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - mobile value will be used',
          source: 'internal',
          datasource_slug: 'space',
          pos: 15,
        },
        pyDesktop: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - tablet value will be used',
          source: 'internal',
          datasource_slug: 'space',
          pos: 16,
        },
        tag: {
          type: 'option',
          pos: 17,
          use_uuid: true,
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
          ],
          default_value: 'div',
          description: 'Changes the tag rendered in HTML.',
        },
        tab: {
          display_name: 'Styles',
          keys: [
            'containerSize',
            'mtMobile',
            'mtTablet',
            'mtDesktop',
            'marginTopGroup',
            'mbMobile',
            'mbTablet',
            'mbDesktop',
            'marginBottomGroup',
            'pxMobile',
            'pxTablet',
            'pxDesktop',
            'paddingXGroup',
            'pyMobile',
            'pyTablet',
            'pyDesktop',
            'paddingYGroup',
          ],
          pos: 18,
          type: 'tab',
        },
        body: { type: 'bloks', pos: 19 },
      },
    },
  },
  {
    componentGroup: 'organisms',
    data: {
      name: 'grid',
      display_name: 'Grid',
      is_nestable: true,
      is_root: false,
      color: '#2db47d',
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
  },
  {
    componentGroup: 'molecules',
    data: {
      name: 'row',
      display_name: 'Row',
      is_nestable: true,
      is_root: false,
      color: '#ff6159',
      icon: 'block-text-img-c',
      schema: {
        itemsWrap: {
          type: 'boolean',
          default_value: true,
          description: 'True: This will cause elements to wrap if they have no space.',
          pos: 0,
          key: 'itemsWrap',
        },
        xPositionGroup: {
          type: 'section',
          pos: 1,
          keys: ['xPosition', 'xPositionTablet', 'xPositionDesktop'],
          key: 'xPositionGroup',
        },
        xPosition: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'justify-items',
          pos: 2,
          key: 'xPosition',
        },
        xPositionTablet: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - mobile value will be used',
          source: 'internal',
          datasource_slug: 'justify-items',
          pos: 3,
          key: 'xPositionTablet',
        },
        xPositionDesktop: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - tablet value will be used',
          source: 'internal',
          datasource_slug: 'justify-items',
          pos: 4,
          key: 'xPositionDesktop',
        },
        yPositionGroup: {
          type: 'section',
          keys: ['yPosition', 'yPositionTablet', 'yPositionDesktop'],
          key: 'yPositionGroup',
          pos: 5,
        },
        yPosition: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'align-items',
          key: 'yPosition',
          pos: 6,
        },
        yPositionTablet: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - mobile value will be used',
          source: 'internal',
          datasource_slug: 'align-items',
          key: 'yPositionTablet',
          pos: 7,
        },
        yPositionDesktop: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'align-items',
          description: 'If not set - tablet value will be used',
          key: 'yPositionDesktop',
          pos: 8,
        },
        gapGroup: {
          type: 'section',
          key: 'gapSpacing',
          pos: 9,
          keys: ['gapMobile', 'gapTablet', 'gapDesktop'],
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
              value: 'ul',
              name: 'ul',
            },
            {
              value: 'ol',
              name: 'ol',
            },
            {
              value: 'section',
              name: 'section',
            },
            {
              value: 'article',
              name: 'article',
            },
          ],
          default_value: 'div',
          pos: 10,
          key: 'tag',
        },
        body: { type: 'bloks', pos: 11, key: 'body' },
        'tab-38bcff02-0d04-471b-a2dd-398d05c2a404': {
          display_name: 'Styles',
          keys: [
            'itemsWrap',
            'xPosition',
            'xPositionTablet',
            'xPositionDesktop',
            'xPositionGroup',
            'yPositionGroup',
            'yPosition',
            'yPositionTablet',
            'yPositionDesktop',
            'gapSpacing',
            'gapGroup',
            'gapMobile',
            'gapTablet',
            'gapDesktop',
            'marginTopGroup',
            'mtMobile',
            'mtTablet',
            'mtDesktop',
            'marginBottomGroup',
            'mbMobile',
            'mbTablet',
            'mbDesktop',
          ],
          pos: 12,
          type: 'tab',
          key: 'tab-38bcff02-0d04-471b-a2dd-398d05c2a404',
        },
        gapMobile: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          default_value: '4',
        },
        gapTablet: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - mobile value will be used',
          source: 'internal',
          datasource_slug: 'space',
        },
        gapDesktop: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - tablet value will be used',
          source: 'internal',
          datasource_slug: 'space',
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
          description: 'If not set - mobile value will be used',
          source: 'internal',
          datasource_slug: 'space',
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
  },
  {
    componentGroup: 'molecules',
    data: {
      name: 'column',
      display_name: 'Column',
      is_nestable: true,
      is_root: false,
      color: '#ff6159',
      icon: 'block-center-m',
      schema: {
        xPositionGroup: {
          type: 'section',
          pos: 0,
          keys: ['xPositionDesktop', 'xPositionTablet', 'xPosition'],
          key: 'xPositionGroup',
        },
        xPosition: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'align-items',
          pos: 1,
          key: 'xPosition',
        },
        xPositionTablet: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'align-items',
          description: 'If not set - mobile value will be used',
          pos: 2,
          key: 'xPositionTablet',
        },
        xPositionDesktop: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - tablet value will be used',
          source: 'internal',
          datasource_slug: 'align-items',
          pos: 3,
          key: 'xPositionDesktop',
        },
        yPositionGroup: {
          type: 'section',
          pos: 4,
          keys: ['yPosition', 'yPositionTablet', 'yPositionDesktop'],
          key: 'yPositionGroup',
        },
        yPosition: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'justify-items',
          pos: 5,
          key: 'yPosition',
        },
        yPositionTablet: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'justify-items',
          description: 'If not set - mobile value will be used',
          pos: 6,
          key: 'yPositionTablet',
        },
        yPositionDesktop: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - tablet value will be used',
          source: 'internal',
          datasource_slug: 'justify-items',
          pos: 7,
          key: 'yPositionDesktop',
        },
        gapGroup: {
          type: 'section',
          pos: 8,
          keys: ['gapDesktop', 'gapTablet', 'gapMobile'],
          key: 'gapGroup',
        },
        gapMobile: {
          type: 'option',
          use_uuid: true,
          default_value: '4',
          source: 'internal',
          datasource_slug: 'space',
          pos: 9,
          key: 'gapMobile',
        },
        gapTablet: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - mobile value will be used',
          source: 'internal',
          datasource_slug: 'space',
          pos: 10,
          key: 'gapTablet',
        },
        gapDesktop: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - tablet value will be used',
          source: 'internal',
          datasource_slug: 'space',
          pos: 11,
          key: 'gapDesktop',
        },
        marginTopGroup: {
          type: 'section',
          keys: ['mtTablet', 'mtMobile', 'mtDesktop'],
          pos: 12,
        },
        mtMobile: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          key: 'mtMobile',
          pos: 13,
        },
        mtTablet: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - mobile value will be used',
          source: 'internal',
          datasource_slug: 'space',
          key: 'mbTablet',
          pos: 14,
        },
        mtDesktop: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          description: 'If not set - tablet value will be used',
          pos: 15,
        },
        marginBottomGroup: {
          type: 'section',
          pos: 16,
          keys: ['mbTablet', 'mbMobile', 'mbDesktop'],
        },
        mbMobile: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          pos: 17,
        },
        mbTablet: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          datasource_slug: 'space',
          description: 'If not set - mobile value will be used',
          pos: 18,
        },
        mbDesktop: {
          type: 'option',
          use_uuid: true,
          description: 'If not set - tablet value will be used',
          source: 'internal',
          datasource_slug: 'space',
          pos: 19,
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
              value: 'ul',
              name: 'ul',
            },
            {
              value: 'ol',
              name: 'ol',
            },
            {
              value: 'section',
              name: 'section',
            },
            {
              value: 'article',
              name: 'article',
            },
          ],
          default_value: 'div',
          pos: 20,
          key: 'tag',
        },
        body: { type: 'bloks', pos: 21, key: 'body' },
        'tab-81c7457d-3e89-4d83-9937-11ba36adce29': {
          display_name: 'Styles',
          keys: [
            'xPosition',
            'xPositionTablet',
            'xPositionDesktop',
            'xPositionGroup',
            'yPosition',
            'yPositionTablet',
            'yPositionDesktop',
            'yPositionGroup',
            'gapMobile',
            'gapTablet',
            'gapDesktop',
            'gapGroup',
            'mtMobile',
            'mbTablet',
            'mtTablet',
            'mtDesktop',
            'marginTopGroup',
            'mbMobile',
            'mbTablet',
            'mbDesktop',
            'marginBottomGroup',
          ],
          pos: 22,
          type: 'tab',
          key: 'tab-81c7457d-3e89-4d83-9937-11ba36adce29',
        },
      },
    },
  },
  {
    componentGroup: 'atoms',
    data: {
      name: 'typography',
      display_name: 'Typography',
      is_nestable: true,
      is_root: false,
      color: '#ffac00',
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
  },
  {
    componentGroup: 'atoms',
    data: {
      name: 'themeModeSwitcher',
      display_name: 'Theme mode switcher',
      is_nestable: true,
      is_root: false,
      color: '#ffac00',
      icon: 'block-sticker',
      schema: {},
    },
  },
  {
    componentGroup: 'atoms',
    data: {
      name: 'table',
      display_name: 'Table',
      is_nestable: true,
      is_root: false,
      color: '#ffac00',
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
  },
  {
    componentGroup: 'atoms',
    data: {
      name: 'richtext',
      display_name: 'Richtext',
      is_nestable: true,
      is_root: false,
      color: '#ffac00',
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
  },
  {
    componentGroup: 'atoms',
    data: {
      name: 'image',
      display_name: 'Image',
      is_nestable: true,
      is_root: false,
      color: '#ffac00',
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
  },
  {
    componentGroup: 'atoms',
    data: {
      name: 'cta',
      display_name: 'CTA',
      is_nestable: true,
      is_root: false,
      color: '#ffac00',
      icon: 'block-arrow-pointer',
      schema: {
        link: {
          type: 'multilink',
          email_link_type: true,
          show_anchor: true,
          allow_target_blank: true,
          force_link_scope: true,
          link_scope: '{0}/',
          pos: 1,
          description: 'Field required. If not filled out, the component will not render.',
        },
        content: {
          type: 'text',
          pos: 1,
        },
        variant: {
          type: 'option',
          use_uuid: true,
          description: 'Change the styles for component',
          source: 'internal',
          datasource_slug: 'cta',
          default_value: 'default',
        },
        size: {
          type: 'option',
          use_uuid: true,
          options: [
            { name: 'default', value: 'default' },
            { name: 'sm', value: 'sm' },
            { name: 'lg', value: 'lg' },
            { name: 'icon', value: 'icon' },
            { name: 'link', value: 'link' },
          ],
          default_value: 'default',
        },
        tab: {
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
          source: 'internal',
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
          description: 'If not set - mobile value will be used',
          source: 'internal',
          datasource_slug: 'space',
        },
        mbDesktop: {
          type: 'option',
          use_uuid: true,
          source: 'internal',
          description: 'If not set - tablet value will be used',
          datasource_slug: 'space',
        },
      },
    },
  },
  {
    componentGroup: 'layout',
    data: {
      name: 'footer',
      display_name: 'Footer',
      is_nestable: true,
      is_root: true,
      color: '#00b3b0',
      icon: 'block-monitor',
      schema: {
        body: {
          type: 'bloks',
          pos: 0,
          required: false,
        },
      },
    },
  },
  {
    componentGroup: 'layout',
    data: {
      name: 'header',
      display_name: 'Header',
      is_nestable: true,
      is_root: true,
      color: '#00b3b0',
      icon: 'block-monitor',
      schema: {
        body: {
          type: 'bloks',
          pos: 0,
          required: false,
        },
      },
    },
  },
  {
    componentGroup: 'seo',
    data: {
      name: 'seo',
      display_name: 'Seo',
      is_nestable: true,
      is_root: false,
      color: '#395ece',
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
  },
  {
    componentGroup: 'content type',
    data: {
      name: 'redirect',
      display_name: 'Redirect',
      is_root: true,
      is_nestable: false,
      color: '#1b243f',
      icon: 'block-wallet',
      schema: {
        oldPath: {
          type: 'text',
          pos: 0,
          required: true,
          description: `Valid value:
  /
  /new-path
  /new/new-path
  /blog/:slug
  ....

  The link should start with "/"`,
        },
        newPath: {
          type: 'text',
          pos: 1,
          required: true,
          description: `Valid value:
  /
  /new-path
  /new/new-path
  /blog/:slug
  ....

  The link should start with "/"`,
        },
        status: {
          type: 'option',
          pos: 2,
          required: true,
          default_value: '308',
          options: [
            {
              name: 'Permanent - 308',
              value: '308',
            },
            {
              name: 'Temporary - 307',
              value: '307',
            },
          ],
        },
      },
    },
  },
  {
    componentGroup: 'content type',
    data: {
      name: 'page',
      display_name: 'Page',
      is_root: true,
      is_nestable: false,
      color: '#1b243f',
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
  },
  {
    componentGroup: 'content type',
    data: {
      name: 'config',
      display_name: 'Config',
      is_nestable: false,
      is_root: true,
      color: '#1b243f',
      icon: 'block-wallet',
      schema: {
        header: {
          type: 'option',
          source: 'internal_stories',
          pos: 0,
          required: true,
          restrict_content_types: true,
          folder_slug: '{0}/',
          filter_content_type: ['header'],
        },
        footer: {
          type: 'option',
          source: 'internal_stories',
          pos: 1,
          required: true,
          restrict_content_types: true,
          folder_slug: '{0}/',
          filter_content_type: ['footer'],
        },
        notFoundPage: {
          type: 'option',
          source: 'internal_stories',
          pos: 2,
          required: true,
          folder_slug: '{0}/',
          restrict_content_types: true,
          filter_content_type: ['page'],
        },
        defaultTheme: {
          type: 'option',
          pos: 3,
          required: true,
          description:
            'The default theme for users who visit your website for the first time. They can overwrite it individually. Their re-entry to the page will set the value they set.',
          default_value: 'system',
          options: [
            {
              name: 'System',
              value: 'system',
            },
            {
              name: 'Light',
              value: 'light',
            },
            {
              name: 'Dark',
              value: 'dark',
            },
          ],
        },
        forcedTheme: {
          type: 'option',
          pos: 4,
          description: 'Selecting this will only allow users to access the selected theme.',
          options: [
            {
              name: 'light',
              value: 'light',
            },
            {
              name: 'dark',
              value: 'dark',
            },
          ],
        },
        tab: {
          display_name: 'Dark mode',
          type: 'tab',
          pos: 5,
          keys: ['defaultTheme', 'forcedTheme'],
        },
        siteName: {
          type: 'text',
          pos: 6,
          required: true,
        },
        twitterCreator: {
          type: 'text',
          pos: 7,
        },
        googleVerificationId: {
          type: 'text',
          pos: 8,
        },
        defaultSeo: {
          type: 'bloks',
          pos: 9,
          required: true,
          maximum: 1,
          restrict_components: true,
          component_whitelist: ['seo'],
        },
        tabSeo: {
          display_name: 'Seo',
          type: 'tab',
          pos: 5,
          keys: ['siteName', 'twitterCreator', 'googleVerificationId', 'defaultSeo'],
        },
      },
    },
  },
];
