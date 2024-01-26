/* eslint-disable react/no-array-index-key */

'use client';

import { Check, Copy } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';
import { useEffect, useState } from 'react';

import { cn } from '@natu/utils';

import { Button } from '../Button';
import { Typography } from '../Typography';

type Language =
  | 'jsx'
  | 'tsx'
  | 'swift'
  | 'kotlin'
  | 'objectivec'
  | 'js-extras'
  | 'reason'
  | 'rust'
  | 'graphql'
  | 'yaml'
  | 'go'
  | 'cpp'
  | 'markdown'
  | 'html'
  | 'python';

export interface CodeProps {
  code?: string;
  className?: string;
  language?: Language;
}

export const Code = ({ code, className, language = 'tsx', ...rest }: CodeProps) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  if (!code) {
    return null;
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
  };

  return (
    <div className={cn('bg-slate-800 rounded-lg overflow-clip relative', className)} {...rest}>
      <div className="absolute right-4 top-4">
        <Button variant="outline" size="icon" onClick={handleCopyToClipboard}>
          {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <Highlight code={code} theme={themes.nightOwl} language={language}>
        {({ className: highlightClassName, tokens, getLineProps, getTokenProps }) => (
          <pre className={cn(highlightClassName, 'p-4')}>
            <code aria-hidden="true">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, className: 'hover:bg-slate-900' })}>
                  <span className={cn('w-5 inline-block mr-4')}>{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
      <Typography
        component="span"
        variant="text-xs"
        className="absolute text-slate-400 bottom-4 right-4"
      >
        {language}
      </Typography>
    </div>
  );
};
