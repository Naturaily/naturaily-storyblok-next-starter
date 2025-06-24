import { SbComponentType } from '../SBProps';

interface StoryblokTableColumn extends SbComponentType<'_table_col'> {
  value?: string;
}

interface StoryblokTableBody extends SbComponentType<'_table_row'> {
  body?: StoryblokTableColumn[];
}

interface StoryblokTableHead extends SbComponentType<'_table_head'> {
  value?: string;
}

export interface StoryblokTable {
  fieldtype: 'table';
  thead?: StoryblokTableHead[];
  tbody?: StoryblokTableBody[];
}
