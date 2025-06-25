import {
  StoryblokRichtext,
  StoryblokRichTextData,
} from '../../../richtext/src/components/StoryblokRichtext/StoryblokRichtext';
import { SBProps, resolveStoryblokStyles, sbEditable } from '../../../utils';
import { TextAlign, FontFamily, Spacing } from '../../../utils/resolveStoryblokStyles';

interface SBRichtextProps {
  content?: StoryblokRichTextData;
  textAlignMobile?: TextAlign;
  textAlignTablet?: TextAlign;
  textAlignDesktop?: TextAlign;
  fontFamily?: FontFamily;
  mtMobile?: Spacing;
  mtTablet?: Spacing;
  mtDesktop?: Spacing;
  mbMobile?: Spacing;
  mbTablet?: Spacing;
  mbDesktop?: Spacing;
}

export const SBRichtext = ({ blok }: SBProps<SBRichtextProps>) => {
  const {
    content,
    textAlignMobile,
    textAlignTablet,
    textAlignDesktop,
    fontFamily,
    mtMobile,
    mtTablet,
    mtDesktop,
    mbMobile,
    mbTablet,
    mbDesktop,
  } = blok;

  const className = resolveStoryblokStyles({
    textAlign: textAlignMobile,
    textAlignTablet,
    textAlignDesktop,
    fontFamily,
    mt: mtMobile,
    mtTablet,
    mtDesktop,
    mb: mbMobile,
    mbTablet,
    mbDesktop,
  });

  return <StoryblokRichtext className={className} data={content} {...sbEditable(blok)} />;
};
