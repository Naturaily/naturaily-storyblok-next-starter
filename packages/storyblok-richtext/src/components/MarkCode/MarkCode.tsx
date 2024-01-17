import { ReactNode } from 'react';

export const MarkCode = (children: ReactNode) => (
  <code className="not-prose bg-slate-100 px-1 py-px border border-slate-400 rounded dark:bg-slate-700 dark:border-slate-500 text-foreground">
    {children}
  </code>
);
