import { ThemeModeSwitcher } from '@natu/next-themes';
import { SBProps, sbEditable } from '@natu/storyblok-utils';

export const SBThemeModeSwitcher = ({ blok }: SBProps) => (
  <ThemeModeSwitcher {...sbEditable(blok)} />
);
