import React from 'react';
import Image from 'next/image';

import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <Image src="/naturaily-logo.svg" alt="Naturaily logo" width={100} height={50} />,
  project: {
    link: 'https://github.com/Naturaily/naturaily-starter',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Storyblok Nextjs docs',
  },
};

export default config;
