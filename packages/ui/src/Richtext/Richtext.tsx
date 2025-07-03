import { ComponentProps, ReactNode } from 'react';

export interface RichtextProps extends ComponentProps<'div'> {
  children?: ReactNode;
  html?: string | TrustedHTML;
}

export const Richtext = ({ className, children, html, ...rest }: RichtextProps) => {
  if (html) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: html }} {...rest} />;
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};
