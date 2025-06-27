import { StoryblokRichTextNode } from '@storyblok/richtext';
import { nanoid } from 'nanoid';
import { Fragment, ReactElement } from 'react';

import { Code, CodeProps } from '@natu/ui/Code';

const validCodeComponentLanguage = [
  { sb: 'typescript', valid: 'tsx' },
  { sb: 'javascript', valid: 'jsx' },
  { sb: 'reasonml', valid: 'reason' },
];

export const NodeCodeblock = (node: StoryblokRichTextNode<ReactElement>) => {
  if (!node.children) {
    return <Fragment />;
  }

  const codeData = `${node.children}`;

  const sbLang = node?.attrs?.class?.replace('language-', '');
  const lang =
    validCodeComponentLanguage.find(item => item.sb === sbLang)?.valid || sbLang || 'tsx';

  return (
    <Code
      key={nanoid()}
      className="no-prose"
      code={codeData}
      language={lang as CodeProps['language']}
    />
  );
};
