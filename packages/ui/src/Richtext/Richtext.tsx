import { ComponentProps, ReactNode } from 'react';

import { cn } from '@natu/utils';

export interface RichtextProps extends ComponentProps<'div'> {
  children?: ReactNode;
  html?: string | TrustedHTML;
}

export const Richtext = ({ className, children, html, ...rest }: RichtextProps) => {
  const styles = cn('prose max-w-none dark:prose-invert', className);

  if (html) {
    return <div className={styles} dangerouslySetInnerHTML={{ __html: html }} {...rest} />;
  }

  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
};
