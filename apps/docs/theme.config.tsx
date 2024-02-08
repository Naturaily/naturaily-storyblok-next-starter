import React from 'react';
import Image from 'next/image';

import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: <Image src="/naturaily-logo.svg" alt="Naturaily logo" width={100} height={50} />,
  project: {
    link: 'https://github.com/Naturaily/naturaily-starter',
  },
  docsRepositoryBase: 'https://github.com/Naturaily/naturaily-starter',
  footer: {
    text: 'Storyblok Nextjs docs',
  },
  feedback: {
    labels: 'feedback',
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    component: null,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Naturaily',
      };
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Naturaily" />
      <meta property="og:description" content="Naturaily Next.js Storyblok starter" />
    </>
  ),
};

export default config;
