import { SbReactComponentsMap } from '@storyblok/react/rsc';

import { SBFooter } from './contentTypes/SBFooter/SBFooter';
import { SBHeader } from './contentTypes/SBHeader/SBHeader';
import { SBPage } from './contentTypes/SBPage/SBPage';
import { SBColumn } from './elements/SBColumn/SBColumn';
import { SBContainer } from './elements/SBContainer/SBContainer';
import { SBCta } from './elements/SBCta/SBCta';
import { SBGrid } from './elements/SBGrid/SBGrid';
import { SBImage } from './elements/SBImage/SBImage';
import { SBRichtext } from './elements/SBRichtext/SBRichtext';
import { SBRow } from './elements/SBRow/SBRow';
import { SBTable } from './elements/SBTable/SBTable';
import { SBThemeModeSwitcher } from './elements/SBThemeModeSwitcher/SBThemeModeSwitcher';
import { SBTypography } from './elements/SBTypography/SBTypography';

const elements = {
  cta: SBCta,
  image: SBImage,
  richtext: SBRichtext,
  table: SBTable,
  container: SBContainer,
  themeModeSwitcher: SBThemeModeSwitcher,
  typography: SBTypography,
  grid: SBGrid,
  column: SBColumn,
  row: SBRow,
};

const contentTypes = {
  page: SBPage,
  footer: SBFooter,
  header: SBHeader,
};

export const componentsMap: SbReactComponentsMap = {
  ...elements,
  ...contentTypes,
};
