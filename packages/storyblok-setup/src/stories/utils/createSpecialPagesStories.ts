import { storyblok } from '../../utils/client.ts';
import { color } from '../../utils/color.ts';
import { STORIES_ENDPOINT } from '../../utils/endpoints.ts';
import { specialPagesContent } from '../data/specialPagesContent.ts';

interface SpecialPagesUUIDData {
  uuid: string;
  slug: string;
}

interface CreateSpecialPagesStoriesInput {
  parentFolderID?: number | null;
  homepageUUID?: string;
  NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER?: string;
}

interface CreateSpecialPagesStoriesOutput {
  specialPagesUUID?: SpecialPagesUUIDData[];
}

export const createSpecialPagesStories = async ({
  parentFolderID,
  NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
  homepageUUID,
}: CreateSpecialPagesStoriesInput): Promise<CreateSpecialPagesStoriesOutput> => {
  const requests = [];

  for (const story of specialPagesContent({
    homepageUUID,
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER: `${NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER}/`,
  })) {
    requests.push(
      storyblok.post(STORIES_ENDPOINT, {
        story: {
          ...story,
          parent_id: `${parentFolderID}`,
        },
        publish: 1,
      }),
    );
  }
  let specialPagesUUID;

  try {
    const res = await Promise.all(requests);
    specialPagesUUID = res.map(item => ({
      // @ts-ignore
      uuid: item.data.story.uuid,
      // @ts-ignore
      slug: item.data.story.slug,
    }));
  } catch (err) {
    console.error(color('danger', `🚨  Layout stories - ${JSON.stringify(err)}`));
  }

  return { specialPagesUUID };
};
