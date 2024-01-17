// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { YouTubeEmbed } from '@next/third-parties/google';

import './YoutubeVideo.css';

export interface YoutubeVideoProps {
  videoid?: string;
  params?: string;
  className?: string;
  playLabel?: string;
}

export const YoutubeVideo = ({ videoid, params, playLabel, ...rest }: YoutubeVideoProps) => (
  <YouTubeEmbed videoid={videoid} params={params} playlabel={playLabel} {...rest} />
);
