import Image, { ImageProps } from 'next/image';

export type ResponsiveImageProps = ImageProps;

export const ResponsiveImage = ({ src, ...rest }: ResponsiveImageProps) => (
  <Image src={src} {...rest} />
);
