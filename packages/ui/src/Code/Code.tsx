'use client';

import { Check, Copy } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';
import { useEffect, useState } from 'react';

import { cn } from '@natu/utils/cn';

import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

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
    <div className={cn('relative overflow-clip rounded-lg bg-slate-800', className)} {...rest}>
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
                  <span className={cn('mr-4 inline-block w-5')}>{i + 1}</span>
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
        className="absolute bottom-4 right-4 text-slate-400"
      >
        {language}
      </Typography>
    </div>
  );
};
