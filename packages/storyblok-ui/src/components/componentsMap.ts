import { SBFooter } from './contentTypes/SBFooter';
import { SBHeader } from './contentTypes/SBHeader';
import { SBPage } from './contentTypes/SBPage';
import { SBColumn } from './elements/SBColumn';
import { SBContainer } from './elements/SBContainer';
import { SBCta } from './elements/SBCta';
import { SBGrid } from './elements/SBGrid';
import { SBImage } from './elements/SBImage';
import { SBRichtext } from './elements/SBRichtext';
import { SBRow } from './elements/SBRow';
import { SBTable } from './elements/SBTable';
import { SBThemeModeSwitcher } from './elements/SBThemeModeSwitcher/SBThemeModeSwitcher';
import { SBTypography } from './elements/SBTypography';

const elements = {
  cta: SBCta,
  richtext: SBRichtext,
  typography: SBTypography,
  image: SBImage,
  container: SBContainer,
  grid: SBGrid,
  column: SBColumn,
  row: SBRow,
  table: SBTable,
  themeModeSwitcher: SBThemeModeSwitcher,
};

const contentTypes = {
  page: SBPage,
  footer: SBFooter,
  header: SBHeader,
};

export const componentsMap: Record<string, unknown> = {
  ...elements,
  ...contentTypes,
};
