import { ReactNode } from 'react';

import { Code, CodeProps } from '@natu/ui';

interface NodeCodeblockOptions {
  class: string;
}

const validCodeComponentLanguage = [
  { sb: 'typescript', valid: 'tsx' },
  { sb: 'javascript', valid: 'jsx' },
  { sb: 'reasonml', valid: 'reason' },
];

export const NodeCodeblock = (children: ReactNode, options: NodeCodeblockOptions) => {
  if (!children) {
    return null;
  }

  const codeData = `${children}`;

  const sbLang = options?.class?.replace('language-', '');
  const lang =
    validCodeComponentLanguage.find(item => item.sb === sbLang)?.valid || sbLang || 'tsx';

  return <Code className="no-prose" code={codeData} language={lang as CodeProps['language']} />;
};
