import { sbEditable } from '#storyblok/utils/sbEditable/sbEditable';
import { SBProps } from '#storyblok/utils/types/SBProps/SBProps';

import { ThemeModeSwitcher } from '@natu/next-themes/ThemeModeSwitcher';

export const SBThemeModeSwitcher = ({ blok }: SBProps) => (
  <ThemeModeSwitcher {...sbEditable(blok)} />
);
