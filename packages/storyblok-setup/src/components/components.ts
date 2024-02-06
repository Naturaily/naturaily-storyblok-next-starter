import { ComponentSchema } from './components.types.ts';
import { column } from './data/column.ts';
import { config } from './data/config.ts';
import { container } from './data/container.ts';
import { cta } from './data/cta.ts';
import { footer } from './data/footer.ts';
import { grid } from './data/grid.ts';
import { header } from './data/header.ts';
import { image } from './data/image.ts';
import { page } from './data/page.ts';
import { redirect } from './data/redirect.ts';
import { richtext } from './data/richtext.ts';
import { row } from './data/row.ts';
import { seo } from './data/seo.ts';
import { table } from './data/table.ts';
import { themeModeSwitcher } from './data/themeModeSwitcher.ts';
import { typography } from './data/typography.ts';

export const components: ComponentSchema[] = [
  container,
  grid,
  row,
  column,
  typography,
  themeModeSwitcher,
  table,
  richtext,
  image,
  cta,
  footer,
  header,
  seo,
  redirect,
  page,
  config,
];
