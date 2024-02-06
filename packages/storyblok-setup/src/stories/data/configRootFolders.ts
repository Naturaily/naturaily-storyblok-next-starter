interface FolderSchema {
  name: string;
  slug: string;
  is_folder?: boolean;
  // @ts-ignore
  default_root: 'page' | 'redirect' | 'footer' | 'header';
  parent_id?: number;
  disble_fe_editor?: boolean;
}

export const configRootFolders: FolderSchema[] = [
  {
    name: 'Redirects',
    slug: 'redirects',
    is_folder: true,
    default_root: 'redirect',
    disble_fe_editor: true,
  },
  {
    name: 'Special pages',
    slug: 'special-pages',
    default_root: 'page',
    is_folder: true,
  },
  {
    name: 'Layout',
    slug: 'layout',
    default_root: 'page',
    is_folder: true,
  },
];
