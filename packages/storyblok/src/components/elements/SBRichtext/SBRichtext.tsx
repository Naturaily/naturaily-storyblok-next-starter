import { StoryblokRichTextNode } from '@storyblok/richtext';
import {
  StoryblokRichtext,
  StoryblokRichtextVariant,
} from '#storyblok/richtext/src/components/StoryblokRichtext/StoryblokRichtext';
import { TextAlign, FontFamily, Spacing } from '#storyblok/utils/resolveStoryblokStyles/index';
import { resolveStoryblokStyles } from '#storyblok/utils/resolveStoryblokStyles/resolveStoryblokStyles';
import { sbEditable } from '#storyblok/utils/sbEditable/sbEditable';
import { SBProps } from '#storyblok/utils/types/SBProps/SBProps';
import { ReactElement } from 'react';

interface SBRichtextProps {
  variant?: StoryblokRichtextVariant;
  content?: StoryblokRichTextNode<ReactElement>;
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
    variant,
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

  return (
    <StoryblokRichtext
      variant={variant}
      className={className}
      data={content}
      {...sbEditable(blok)}
    />
  );
};
