
import StoryblokClient from "storyblok-js-client";

const getDatasources = () => [
  {
    name: 'Align Items',
    slug: 'align-items',
    dimensions: [
      { name: 'start', value: 'start' },
      { name: 'center', value: 'center' },
      { name: 'end', value: 'end' },
      { name: 'baseline', value: 'baseline' },
    ],
  },
  {
    name: 'Container Size',
    slug: 'container-size',
    dimensions: [
      { name: 'full', value: 'full' },
      { name: '1536px', value: 'screen-2xl' },
      { name: '1280px', value: 'screen-xl' },
      { name: '768px', value: 'screen-md' },
    ],
  },
  {
    name: 'CTA',
    slug: 'cta',
    dimensions: [
      { name: 'default', value: 'default' },
      { name: 'destructive', value: 'destructive' },
      { name: 'outline', value: 'outline' },
      { name: 'secondary', value: 'secondary' },
      { name: 'ghost', value: 'ghost' },
      { name: 'link', value: 'link' },
    ],
  },
  { name: 'Font family', slug: 'font-family', dimensions: [{ name: 'primary', value: 'primary' }] },
  {
    name: 'Font size',
    slug: 'font-size',
    dimensions: [
      { name: '12px', value: 'text-xs' },
      { name: '14px', value: 'text-sm' },
      { name: '16px', value: 'text-base' },
      { name: '18px', value: 'text-lg' },
      { name: '20px', value: 'text-xl' },
      { name: '24px', value: 'text-2xl' },
      { name: '30px', value: 'text-3xl' },
      { name: '36px', value: 'text-4xl' },
      { name: '48px', value: 'text-5xl' },
      { name: '60px', value: 'text-6xl' },
      { name: '72px', value: 'text-7xl' },
      { name: '96px', value: 'text-8xl' },
      { name: '128px', value: 'text-9xl' },
    ],
  },
  {
    name: 'Grid variants',
    slug: 'grid-variants',
    dimensions: [
      { name: '1-col', value: '1-col' },
      { name: '2-col', value: '2-col' },
      { name: '3-col', value: '3-col' },
      { name: '4-col', value: '4-col' },
      { name: '5-col', value: '5-col' },
      { name: '1/2', value: '1/2' },
      { name: '2/1', value: '2/1' },
    ],
  },
  {
    name: 'Justify Items',
    slug: 'justify-items',
    dimensions: [
      { name: 'start', value: 'start' },
      { name: 'end', value: 'end' },
      { name: 'spaceBetween', value: 'spaceBetween' },
      { name: 'center', value: 'center' },
      { name: 'around', value: 'around' },
      { name: 'evenly', value: 'evenly' },
    ],
  },
  {
    name: 'Space',
    slug: 'space',
    dimensions: [
      { name: '8px', value: '2' },
      { name: '16px', value: '4' },
      { name: '24px', value: '6' },
      { name: '32px', value: '8' },
      { name: '40px', value: '10' },
      { name: '48px', value: '12' },
      { name: '64px', value: '16' },
      { name: '80px', value: '20' },
    ],
  },
  {
    name: 'Text Align',
    slug: 'text-align',
    dimensions: [
      { name: 'left', value: 'left' },
      { name: 'center', value: 'center' },
      { name: 'right', value: 'right' },
      { name: 'justify', value: 'justify' },
    ],
  },
];

const styles = {
  success: {open: '\u001b[32;1m', close: '\u001b[0m'},
  danger: {open: '\u001b[31;1m', close: '\u001b[0m'},
  info: {open: '\u001b[36;1m', close: '\u001b[0m'},
  subtitle: {open: '\u001b[2;1m', close: '\u001b[0m'},
}

type Color =  keyof typeof styles; 

const color = (modifier:Color, string:string) =>  styles[modifier].open + string + styles[modifier].close

const storyblok = new StoryblokClient({
  oauthToken: process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN,
});

const DATASOURCES_ENDPOINT = `spaces/${process.env.STORYBLOK_SPACE_ID}/datasources/`;
const DATASOURCES_ENTRY_ENDPOINT = `spaces/${process.env.STORYBLOK_SPACE_ID}/datasource_entries/`;

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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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