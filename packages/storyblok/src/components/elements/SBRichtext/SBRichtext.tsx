import {
  StoryblokRichtext,
  StoryblokRichTextData,
} from '../../../richtext/src/components/StoryblokRichtext/StoryblokRichtext';
import {
  TextAlign,
  FontFamily,
  Spacing,
  resolveStoryblokStyles,
} from '../../../utils/resolveStoryblokStyles';
import { sbEditable } from '../../../utils/sbEditable/sbEditable';
import { SBProps } from '../../../utils/types/SBProps/SBProps';

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
