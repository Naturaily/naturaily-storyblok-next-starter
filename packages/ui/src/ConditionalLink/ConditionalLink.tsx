import { AnchorHTMLAttributes, Children, cloneElement, ReactElement } from 'react';

import { Link } from '@natu/next-link';
import { cn } from '@natu/utils';

export interface ConditionalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ConditionalLink = ({ href, children, className, ...rest }: ConditionalLinkProps) => {
  if (href) {
    return (
      <Link href={href} className={cn('inline-block', className)} {...rest}>
        {children}
      </Link>
    );
  }

  const child = Children.only(children);

  return cloneElement(child as ReactElement, {
    className,
    ...rest,
  });
};
