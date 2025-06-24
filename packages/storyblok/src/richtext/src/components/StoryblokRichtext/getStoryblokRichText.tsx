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
import { MarkLink } from '../MarkLink/MarkLink';
import { MarkCode } from '../MarkCode/MarkCode';
import { NodeHeading } from '../NodeHeading/NodeHeading';
import { NodeImage } from '../NodeImage/NodeImage';
import { NodeCodeblock } from '../NodeCodeblock/NodeCodeblock';
import { NodeLi } from '../NodeLi/NodeLi';
import { DefaultBlokResolver } from '../DefaultBlokResolver/DefaultBlokResolver';

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
