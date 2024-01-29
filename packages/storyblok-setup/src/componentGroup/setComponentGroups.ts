import { storyblok } from '../utils/client.ts';
import { color } from '../utils/color.ts';
import { componentGroups } from './componentsGroup.ts';

export interface ComponentGroup {
  name: string;
  id: number;
  uuid: string;
}

const DATASOURCES_ENDPOINT = `spaces/${process.env.STORYBLOK_SPACE_ID}/component_groups/`;

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
