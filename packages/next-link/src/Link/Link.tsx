import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { HTMLAttributes, forwardRef } from 'react';

export type LinkProps = NextLinkProps & HTMLAttributes<HTMLAnchorElement>;

const externalLinkPrefix = ['http', 'mailto', 'tel'];

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, href, ...rest }, ref) => {
  const isExternalLink =
    typeof href === 'string' && externalLinkPrefix.some(prefix => href.startsWith(prefix));

  if (isExternalLink) {
    return (
      <a ref={ref} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink ref={ref} href={href} {...rest}>
      {children}
    </NextLink>
  );
});
