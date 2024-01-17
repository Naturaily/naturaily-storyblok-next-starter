import { StoryblokLink, StoryblokLinkType, TargetLinkOptions } from '../../types';
import { getSlugWithoutAppName } from '../getSlugWithoutAppName';

interface TargetResult {
  target: '_blank';
  rel: 'noreferrer';
}

/**
 * This function takes a StoryblokLink or string and returns an object with href and target options for
 * use in a link.
 * @param {StoryblokLink | string} [link] - The `link` parameter is an optional object that represents
 * a link in Storyblok CMS. It can contain properties such as `linktype`, `cached_url`, `url`, `email`,
 * `anchor`, and `target`. It can also be a string representing a URL.
 * @returns The function `getLinkPropsFromStoryblok` returns an object with `href` and `target`
 * properties. The `href` property is a string representing the URL of the link, and the `target`
 * property is an object containing the `target` and `rel` attributes for the link. If the `link`
 * parameter is not provided, the function returns an object with a default
 */
export const getLinkPropsFromStoryblok = (link?: StoryblokLink | string | null) => {
  if (!link) {
    return {
      href: '',
    };
  }

  if (typeof link === 'string') {
    return {
      href: getSlugWithoutAppName(link),
    };
  }

  const { linktype, cached_url: cachedUrl, url, email, anchor, target } = link;

  const storyblokLinkOptions: Record<StoryblokLinkType, string> = {
    story: getSlugWithoutAppName(cachedUrl) || '',
    url: url ?? '',
    email: `mailto:${email}`,
  };

  const targetOptions: Record<TargetLinkOptions, TargetResult> = {
    _blank: {
      target: '_blank',
      rel: 'noreferrer',
    },
  };

  const targetOption = target ? targetOptions[target] : null;
  const anchorID = anchor ? `#${anchor}` : '';
  const href = storyblokLinkOptions[linktype] + anchorID;

  return {
    href,
    ...targetOption,
  };
};
