import { cn } from '@natu/utils/cn';
import { Link } from '@natu/next-link/Link';
import { AnchorHTMLAttributes, Children, cloneElement, ReactElement } from 'react';

export type ConditionalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

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
    // @ts-ignore
    className,
    ...rest,
  });
};
