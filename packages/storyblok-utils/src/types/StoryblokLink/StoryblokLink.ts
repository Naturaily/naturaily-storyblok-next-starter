export type StoryblokLinkType = 'url' | 'story' | 'email';
export type TargetLinkOptions = '_blank';

export interface StoryblokLink {
  cached_url: string;
  email: string | null;
  fieldtype: string;
  id: string;
  linktype: StoryblokLinkType;
  url: string | null;
  anchor?: string;
  target?: TargetLinkOptions;
}
