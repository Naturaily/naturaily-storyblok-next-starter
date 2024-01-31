import { ComponentSchema } from '../components.types.ts';
import { CONTENT_TYPE_COLOR } from '../consts.ts';

export const config: ComponentSchema = {
  componentGroup: 'content type',
  data: {
    name: 'config',
    display_name: 'Config',
    is_nestable: false,
    is_root: true,
    color: CONTENT_TYPE_COLOR,
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
};
