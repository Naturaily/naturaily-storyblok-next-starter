import Image from 'next/image';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={<Image src="/naturaily-logo.svg" alt="Naturaily logo" width={100} height={50} />}
    projectLink="https://github.com/Naturaily/naturaily-starter"
  />
);

const footer = (
  <Footer>
    <span>
      MIT {new Date().getFullYear()}{' '}
      <a
        href="https://naturaily.com/"
        target="_blank"
        style={{ color: '#FF5E45' }}
        rel="noreferrer noopener"
      >
        © Naturaily
      </a>
    </span>
  </Footer>
);

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const socialCard = 'https://a.storyblok.com/f/218794/1280x493/b6190f92c3/og-image.jpg';

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
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
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Naturaily/naturaily-starter"
          footer={footer}
          feedback={{
            labels: 'feedback',
          }}
          toc={{
            backToTop: true,
          }}
          sidebar={{
            defaultMenuCollapseLevel: 1,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
