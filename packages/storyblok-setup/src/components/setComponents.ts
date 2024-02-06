import { ComponentGroup } from '../componentGroup/setComponentGroups.ts';
import { storyblok } from '../utils/client.ts';
import { color } from '../utils/color.ts';
import { COMPONENTS_ENDPOINT } from '../utils/endpoints.ts';
import { components } from './components.ts';

interface SetComponentsInput {
  componentGroups?: ComponentGroup[];
}

export const setComponents = async ({ componentGroups }: SetComponentsInput) => {
  console.log(color('info', '▶️ Starting workshop on components setup...'));

  const requests = [];

  for (const component of components) {
    const componentGroup = componentGroups?.find(group => group.name === component.componentGroup);

    requests.push(
      storyblok.post(COMPONENTS_ENDPOINT, {
        // @ts-ignore
        component: {
          ...component.data,
          component_group_uuid: componentGroup?.uuid,
        },
      }),
    );
  }

  try {
    await Promise.all(requests);
  } catch (err) {
    console.error(color('danger', `🚨 Component -> ContentType - ${JSON.stringify(err)}`));
  }

  console.log(color('success', '✅  Components setup complete.'));
};
