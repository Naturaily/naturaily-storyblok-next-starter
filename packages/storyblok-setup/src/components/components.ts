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
  pos: number;
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
          default_value: 'System',
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
