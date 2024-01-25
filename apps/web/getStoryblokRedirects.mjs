import StoryblokClient from 'storyblok-js-client';

const getStoryblokRedirects = async () => {
  const Storyblok = new StoryblokClient({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
    cache: {
      clear: 'auto',
      type: 'memory',
    },
  });

  let redirects = null;

  try {
    const { data } = await Storyblok.get('cdn/stories', {
      filter_query: {
        component: {
          in: 'redirect',
        },
      },
      starts_with: process.env.NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
    });
    const items = data?.stories || [];

    redirects = items.map(item => ({
      source: item?.content?.oldPath || '',
      destination: item?.content?.newPath || '',
      permanent: !(item?.content?.status === '307'),
    }));
  } catch (err) {
    console.log('getStoryblokRedirects Error');
  }

  return redirects ?? [];
};

export { getStoryblokRedirects };
