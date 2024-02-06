import { storyblok } from '../../utils/client.ts';
import { color } from '../../utils/color.ts';
import { layoutContent } from '../data/layoutContent.ts';

export interface LayoutStoryData {
  uuid: string;
  slug: string;
}
interface CreateLayoutsStoriesInput {
  parentFolderID?: number;
  homepageUUID?: string;
  NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER?: string;
}
interface CreateLayoutsStoriesOutput {
  layoutsUUID?: LayoutStoryData[];
}

const STORIES_ENDPOINT = `spaces/${process.env.STORYBLOK_SPACE_ID}/stories/`;

export const createLayoutsStories = async ({
  parentFolderID,
  homepageUUID,
  NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER,
}: CreateLayoutsStoriesInput): Promise<CreateLayoutsStoriesOutput> => {
  const requests = [];

  for (const layout of layoutContent({
    homepageUUID,
    NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER: `${NEXT_PUBLIC_STORYBLOK_MAIN_APP_FOLDER}/`,
  })) {
    requests.push(
      storyblok.post(STORIES_ENDPOINT, {
        story: {
          ...layout,
          parent_id: `${parentFolderID}`,
        },
        publish: 1,
      }),
    );
  }

  let layoutsUUID;

  try {
    const res = await Promise.all(requests);

    layoutsUUID = res.map(item => ({
      // @ts-ignore
      uuid: item.data.story.uuid,
      // @ts-ignore
      slug: item.data.story.slug,
    }));
  } catch (err) {
    console.error(color('danger', `🚨  Layout stories - ${JSON.stringify(err)}`));
  }

  return {
    layoutsUUID,
  };
};
