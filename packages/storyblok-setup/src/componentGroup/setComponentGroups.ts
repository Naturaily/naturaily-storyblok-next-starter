import StoryblokClient from 'storyblok-js-client';

interface ComponentGroup {
  name: string;
  id: number;
  uuid: string;
}

const styles = {
  success: { open: '\u001b[32;1m', close: '\u001b[0m' },
  danger: { open: '\u001b[31;1m', close: '\u001b[0m' },
  info: { open: '\u001b[36;1m', close: '\u001b[0m' },
  subtitle: { open: '\u001b[2;1m', close: '\u001b[0m' },
};

type Color = keyof typeof styles;

const color = (modifier: Color, string: string) =>
  styles[modifier].open + string + styles[modifier].close;

const componentGroups = [
  { name: 'atoms' },
  { name: 'molecules' },
  { name: 'organisms' },
  { name: 'content type' },
  { name: 'layout' },
  { name: 'seo' },
  { name: 'templates' },
];

const DATASOURCES_ENDPOINT = `spaces/${process.env.STORYBLOK_SPACE_ID}/component_groups/`;

const storyblok = new StoryblokClient({
  oauthToken: process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN,
});

export const setComponentGroups = async (): Promise<ComponentGroup[] | undefined> => {
  console.log(color('info', '▶️ Starting workshop on component group setup...'));

  const requests = [];

  for (const group of componentGroups) {
    requests.push(
      storyblok.post(DATASOURCES_ENDPOINT, {
        // @ts-ignore
        component_group: {
          name: group.name,
        },
      }),
    );
  }
  let componentGroupRes;

  try {
    componentGroupRes = await Promise.all(requests);
  } catch (err) {
    console.error(color('danger', `🚨  Component group error - ${JSON.stringify(err)}`));
  }

  if (!componentGroupRes) {
    console.error(color('danger', '🚨  Component group error - Empty componentGroupRes array'));

    return undefined;
  }

  console.log(color('success', '✅  Component group setup complete.'));

  // @ts-ignore
  return componentGroupRes.map(group => group.data.component_group);
};
