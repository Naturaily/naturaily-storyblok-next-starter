import { ComponentGroup } from '../componentGroup/setComponentGroups.ts';
import { storyblok } from '../utils/client.ts';
import { color } from '../utils/color.ts';
import { components } from './components.ts';

const COMPONENTS_ENDPOINT = `spaces/${process.env.STORYBLOK_SPACE_ID}/components/`;

interface SetComponentsInput {
  componentGroups?: ComponentGroup[];
}

export const setComponents = async ({ componentGroups }: SetComponentsInput) => {
  console.log(color('info', '▶️ Starting workshop on components setup...'));

  const requests = [];

  // TEST

  // await storyblok
  //   .get(`spaces/218794/components/`, {})
  //   // .get(`spaces/${process.env.STORYBLOK_SPACE_ID}/components/`, {})
  //   .then(response => {
  //     // @ts-ignore
  //     // eslint-disable-next-line no-unsafe-optional-chaining
  //     console.log(response.data.components.find(comp => comp.name === 'config').schema.header);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  // return;

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
};
