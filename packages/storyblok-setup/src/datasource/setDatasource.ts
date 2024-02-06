import { storyblok } from '../utils/client.ts';
import { color } from '../utils/color.ts';
import { DATASOURCES_ENDPOINT, DATASOURCES_ENTRY_ENDPOINT } from '../utils/endpoints.ts';
import { getDatasources } from './datasource.ts';

export const setDatasources = async () => {
  console.log(color('info', '▶️ Starting workshop on datasources setup...'));
  const datasources = getDatasources();
  const requests = [];

  for (const datasource of datasources) {
    requests.push(storyblok.post(DATASOURCES_ENDPOINT, datasource));
  }

  let datasourcesRes;

  try {
    datasourcesRes = await Promise.all(requests);
  } catch (err) {
    console.error(color('danger', `🚨  Datasources error - ${JSON.stringify(err)}`));
  }

  if (!datasourcesRes) {
    console.error(color('danger', '🚨  Datasources error - Empty datasourcesRes array'));

    return;
  }

  console.log(color('success', '✅  Datasources setup complete.'));
  console.log(color('info', '▶️ Starting workshop on datasources entry setup...'));

  const datasourcesEntryRequests: Promise<unknown>[] = [];

  for (const datasourceItem of datasourcesRes) {
    // @ts-ignore
    const { id, slug } = datasourceItem.data.datasource || {};

    if (!slug || !id) {
      return;
    }

    const currentDatasource = datasources.find(datasource => datasource.slug === slug);

    if (!currentDatasource) {
      return;
    }

    currentDatasource.dimensions.forEach(item => {
      datasourcesEntryRequests.push(
        storyblok.post(DATASOURCES_ENTRY_ENDPOINT, {
          // @ts-ignore
          datasource_entry: {
            ...item,
            datasource_id: id,
          },
        }),
      );
    });
  }

  try {
    datasourcesRes = await Promise.all(datasourcesEntryRequests);
  } catch (err) {
    console.error(color('danger', `🚨  DatasourcesEntry - ${JSON.stringify(err)}`));
  }

  console.log(color('success', '✅  DatasourcesEntry setup complete.'));
};
