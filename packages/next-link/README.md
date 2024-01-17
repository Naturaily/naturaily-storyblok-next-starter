# @natu/next-link

The package contains a wrapper for the `next` link. Use it instead of the usual link from `nextjs`

## 🎯 Getting Started

```tsx
// my custom component

import { ReactNode } from 'react';

import { Link } from '@natu/next-link';

export interface AnchorProps {
  children: ReactNode;
  href: string;
}

export const Component = ({ href, children }: AnchorProps) => (
  <Link className="my-custom-class" href={href}>
    {children}
  </Link>
);
```
