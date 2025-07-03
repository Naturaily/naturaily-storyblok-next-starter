import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  index: {
    display: 'hidden',
    theme: {
      breadcrumb: false,
    },
  },
  'getting-started': 'Getting Started',
  'project-structure': 'Project Structure',
  'folder-structure': {
    title: 'Package and application architecture',
    type: 'separator',
  },
  apps: 'Apps',
  packages: 'Packages',
  naturaily: {
    title: 'Naturaily.com',
    type: 'page',
    href: 'https://naturaily.com/',
  },
  guides: {
    title: 'Guides',
    type: 'separator',
  },
  'best-practice': 'Best Practice',
  'starter-in-practice': 'Starter In Practice',
  'shared-components': 'Shared Components',
  community: {
    title: 'Community',
    type: 'separator',
  },
  'contribution-guide': 'Contribution Guide',
};

export default meta;
