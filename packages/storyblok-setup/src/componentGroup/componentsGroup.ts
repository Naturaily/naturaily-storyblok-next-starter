export type ComponentName =
  | 'atoms'
  | 'molecules'
  | 'organisms'
  | 'content type'
  | 'layout'
  | 'seo'
  | 'templates';

interface ComponentGroupElement {
  name: ComponentName;
}
export const componentGroups: ComponentGroupElement[] = [
  // { name: 'atoms' },
  // { name: 'molecules' },
  // { name: 'organisms' },
  { name: 'content type' },
  { name: 'layout' },
  { name: 'seo' },
  // { name: 'templates' },
];
