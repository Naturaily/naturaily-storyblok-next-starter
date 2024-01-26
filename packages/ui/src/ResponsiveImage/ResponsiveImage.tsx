import Image, { ImageProps } from 'next/image';

export type ResponsiveImageProps = ImageProps;

export const ResponsiveImage = async ({ src, ...rest }: ResponsiveImageProps) => (
  <Image src={src} {...rest} />
);
