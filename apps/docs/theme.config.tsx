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
    text: (
      <span>
        MIT {new Date().getFullYear()}{' '}
        <a href="https://naturaily.com/" target="_blank" style={{ color: '#FF5E45' }}>
          © Naturaily
        </a>
      </span>
    ),
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
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Naturaily',
      };
    }
  },
  head: function useHead() {
    const socialCard = 'https://a.storyblok.com/f/218794/1280x493/b6190f92c3/og-image.jpg';

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Naturaily" />
        <meta name="description" content="Naturaily Next.js Storyblok starter" />
        <meta property="og:description" content="Naturaily Next.js Storyblok starter" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="naturailycom" />
        <meta name="twitter:url" content="https://twitter.com/naturailycom" />
        <meta name="og:title" content="Naturaily" />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Naturaily" />
        <link
          rel="icon"
          href="https://a.storyblok.com/f/218794/96x96/a777015fb4/favicon.png"
          type="image/png"
        />
        <link
          rel="icon"
          href="https://a.storyblok.com/f/218794/96x96/a777015fb4/favicon.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />

        <></>
      </>
    );
  },
};

export default config;
