interface SpecialPagesContentInput {
  homepageUUID?: string;
  NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER?: string;
}

export const specialPagesContent = ({
  NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
  homepageUUID,
}: SpecialPagesContentInput) => [
  {
    name: 'Not found - 404',
    slug: 'not-found-404',
    is_startpage: false,
    is_folder: false,
    content: {
      seo: [],
      _uid: 'f596677d-46e6-459d-91f2-a3682ac7b9c0',
      body: [
        {
          tag: 'div',
          _uid: 'a20d6340-33a6-456f-9094-39de9c8ab13d',
          body: [
            {
              tag: 'div',
              _uid: 'badb56cb-0b50-4348-ad32-ddc0582e2b52',
              body: [
                {
                  tag: 'div',
                  _uid: '1fe3ac49-2d5f-4c37-81c2-d07912e87f69',
                  body: [
                    {
                      tag: 'h1',
                      _uid: '68c5a4e7-b985-4a92-9ec3-3a7eeb7b1258',
                      content: '404',
                      mbMobile: '',
                      mbTablet: '',
                      mtMobile: '',
                      mtTablet: '',
                      component: 'typography',
                      mbDesktop: '',
                      mtDesktop: '',
                      fontFamily: 'primary',
                      fontWeight: 'bold',
                      fontSizeMobile: 'text-4xl',
                      fontSizeTablet: '',
                      fontSizeDesktop: 'text-6xl',
                      textAlignMobile: '',
                      textAlignTablet: '',
                      textAlignDesktop: '',
                    },
                    {
                      _uid: '430022ea-3e32-4329-8e87-cfaac4f1fedf',
                      content: {
                        type: 'doc',
                        content: [
                          {
                            type: 'heading',
                            attrs: { level: 4 },
                            content: [
                              { text: "Well, there's no such page... ", type: 'text' },
                              {
                                type: 'emoji',
                                attrs: {
                                  name: 'slightly_smiling_face',
                                  emoji: '🙂',
                                  fallbackImage:
                                    'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f642.png',
                                },
                              },
                              { text: ' ', type: 'text' },
                            ],
                          },
                        ],
                      },
                      mbMobile: '',
                      mbTablet: '',
                      mtMobile: '',
                      mtTablet: '',
                      component: 'richtext',
                      mbDesktop: '',
                      mtDesktop: '',
                      fontFamily: 'primary',
                      textAlignMobile: 'center',
                      textAlignTablet: '',
                      textAlignDesktop: '',
                    },
                    {
                      _uid: '284e1cff-bf73-471e-819c-05ce8fd9c279',
                      link: {
                        id: homepageUUID,
                        url: '',
                        linktype: 'story',
                        fieldtype: 'multilink',
                        cached_url: NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
                      },
                      size: 'default',
                      content: 'Back to home',
                      variant: 'default',
                      mbMobile: '',
                      mbTablet: '',
                      mtMobile: '',
                      mtTablet: '',
                      component: 'cta',
                      mbDesktop: '',
                      mtDesktop: '',
                    },
                  ],
                  mbMobile: '',
                  mbTablet: '',
                  mtMobile: '',
                  mtTablet: '',
                  component: 'column',
                  gapMobile: '4',
                  gapTablet: '',
                  mbDesktop: '',
                  mtDesktop: '',
                  xPosition: 'center',
                  yPosition: 'center',
                  gapDesktop: '',
                  xPositionTablet: '',
                  yPositionTablet: '',
                  xPositionDesktop: '',
                  yPositionDesktop: '',
                },
              ],
              mbMobile: '',
              mbTablet: '',
              mtMobile: '',
              mtTablet: '',
              component: 'grid',
              gapMobile: '4',
              gapTablet: '',
              mbDesktop: '',
              mtDesktop: '',
              gapDesktop: '',
              gridMobile: '1-col',
              gridTablet: '',
              gridDesktop: '',
              containerSize: 'screen-2xl',
            },
          ],
          mbMobile: '10',
          mbTablet: '',
          mtMobile: '10',
          mtTablet: '20',
          pxMobile: '4',
          pxTablet: '6',
          pyMobile: '',
          pyTablet: '',
          component: 'container',
          mbDesktop: '',
          mtDesktop: '',
          pxDesktop: '8',
          pyDesktop: '',
          containerSize: 'full',
        },
      ],
      component: 'page',
    },
  },
];