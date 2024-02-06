// @ts-ignore
import { StoryblokComponent } from '@storyblok/react/rsc';

type ComponentProps = Record<string, unknown> & { _uid: string };

export const DefaultBlokResolver = (component: string, props: ComponentProps) => {
  const blok = { ...props, component };

  // eslint-disable-next-line react/destructuring-assignment
  return <StoryblokComponent blok={blok} key={props._uid} />;
};
