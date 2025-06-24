import { ComponentProps, ReactNode } from 'react';

import { cn } from '@natu/utils/cn';

export interface LayoutProps extends ComponentProps<'div'> {
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

export const Layout = ({
  children,
  className,
  header = null,
  footer = null,
  ...rest
}: LayoutProps) => {
  const wrapperStyles = cn('flex min-h-screen flex-col', className);

  return (
    <div className={wrapperStyles} {...rest}>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </div>
  );
};
