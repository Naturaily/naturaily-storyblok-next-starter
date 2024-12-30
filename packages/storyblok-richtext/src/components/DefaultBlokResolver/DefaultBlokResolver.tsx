import { StoryblokServerComponent } from '@storyblok/react/rsc';

type ComponentProps = Record<string, unknown> & { _uid: string };

export const DefaultBlokResolver = (component: string, props: ComponentProps) => {
  const blok = { ...props, component };

  return <StoryblokServerComponent blok={blok} key={props._uid} />;
};
