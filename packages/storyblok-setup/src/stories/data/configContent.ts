interface ConfigContentInput {
  footerUUID?: string;
  headerUUID?: string;
  notFoundUUID?: string;
}

export const configContent = ({ footerUUID, headerUUID, notFoundUUID }: ConfigContentInput) => ({
  name: 'Config',
  slug: '/',
  is_startpage: true,
  is_folder: false,
  content: {
    _uid: 'e65982e5-ba09-4c88-87ed-45c47b8962c4',
    footer: footerUUID,
    header: headerUUID,
    notFoundPage: notFoundUUID,
    siteName: 'Naturaily',
    component: 'config',
    defaultSeo: [
      {
        _uid: 'fa094dc4-dc93-4b7d-afbc-454941497d1d',
        noIndex: false,
        noFollow: false,
        component: 'seo',
        metaTitle: 'Naturaily: Jamstack & headless e-commerce agency',
        metaDescription:
          "We offer Jamstack websites, headless e-commerce, and custom web development for the utmost flexibility and performance. Let's talk!",
      },
    ],
    forcedTheme: '',
    defaultTheme: 'system',
    twitterCreator: '@naturaily',
    googleVerificationId: '',
  },
});
