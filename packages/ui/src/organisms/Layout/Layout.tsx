import { ComponentProps, ReactNode } from 'react';

import { cn } from '@natu/utils';

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
  const wrapperStyles = cn('flex flex-col min-h-screen', className);

  return (
    <div className={wrapperStyles} {...rest}>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </div>
  );
};
