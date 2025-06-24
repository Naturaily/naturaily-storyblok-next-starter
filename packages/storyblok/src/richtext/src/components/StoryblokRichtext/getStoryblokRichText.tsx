import { ISbRichtext } from '@storyblok/react';
import {
  render,
  MARK_LINK,
  NODE_IMAGE,
  NODE_HEADING,
  MARK_CODE,
  NODE_CODEBLOCK,
  NODE_LI,
} from 'storyblok-rich-text-react-renderer';

import { DefaultBlokResolver } from '../DefaultBlokResolver';
import { MarkCode } from '../MarkCode';
import { MarkLink } from '../MarkLink';
import { NodeCodeblock } from '../NodeCodeblock';
import { NodeHeading } from '../NodeHeading';
import { NodeImage } from '../NodeImage';
import { NodeLi } from '../NodeLi';

export const getStoryblokRichText = (data: ISbRichtext) =>
  render(data, {
    markResolvers: {
      [MARK_LINK]: MarkLink,
      [MARK_CODE]: MarkCode,
    },
    nodeResolvers: {
      [NODE_HEADING]: NodeHeading,
      [NODE_IMAGE]: NodeImage,
      [NODE_CODEBLOCK]: NodeCodeblock,
      [NODE_LI]: NodeLi,
    },
    defaultBlokResolver: DefaultBlokResolver,
  });
