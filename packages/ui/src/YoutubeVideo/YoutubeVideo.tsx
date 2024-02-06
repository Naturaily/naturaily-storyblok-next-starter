// @ts-ignore
import { YouTubeEmbed } from '@next/third-parties/google';

import './YoutubeVideo.css';

export interface YoutubeVideoProps {
  videoid?: string;
  params?: string;
  className?: string;
  playLabel?: string;
}

export const YoutubeVideo = ({ videoid, params, playLabel, ...rest }: YoutubeVideoProps) => {
  if (!videoid) {
    return null;
  }

  return <YouTubeEmbed videoid={videoid} params={params} playlabel={playLabel} {...rest} />;
};
