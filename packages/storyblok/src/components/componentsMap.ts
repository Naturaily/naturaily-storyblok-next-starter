import { SbReactComponentsMap } from '@storyblok/react/rsc';
import { SBFooter } from '#storyblok/components/contentTypes/SBFooter/SBFooter';
import { SBHeader } from '#storyblok/components/contentTypes/SBHeader/SBHeader';
import { SBPage } from '#storyblok/components/contentTypes/SBPage/SBPage';
import { SBColumn } from '#storyblok/components/elements/SBColumn/SBColumn';
import { SBContainer } from '#storyblok/components/elements/SBContainer/SBContainer';
import { SBCta } from '#storyblok/components/elements/SBCta/SBCta';
import { SBGrid } from '#storyblok/components/elements/SBGrid/SBGrid';
import { SBImage } from '#storyblok/components/elements/SBImage/SBImage';
import { SBRichtext } from '#storyblok/components/elements/SBRichtext/SBRichtext';
import { SBRow } from '#storyblok/components/elements/SBRow/SBRow';
import { SBTable } from '#storyblok/components/elements/SBTable/SBTable';
import { SBThemeModeSwitcher } from '#storyblok/components/elements/SBThemeModeSwitcher/SBThemeModeSwitcher';
import { SBTypography } from '#storyblok/components/elements/SBTypography/SBTypography';

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
