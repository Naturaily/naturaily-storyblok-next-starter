import { ReactNode } from 'react';

export const MarkCode = (children: ReactNode) => (
  <code className="not-prose text-foreground rounded border border-slate-400 bg-slate-100 px-1 py-px dark:border-slate-500 dark:bg-slate-700">
    {children}
  </code>
);
