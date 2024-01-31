import { ComponentSchema } from '../components.types.ts';
import { CONTENT_TYPE_COLOR } from '../consts.ts';

export const redirect: ComponentSchema = {
  componentGroup: 'content type',
  data: {
    name: 'redirect',
    display_name: 'Redirect',
    is_root: true,
    is_nestable: false,
    color: CONTENT_TYPE_COLOR,
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
};
