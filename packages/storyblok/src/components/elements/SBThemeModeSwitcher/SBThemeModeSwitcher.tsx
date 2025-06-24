import { ThemeModeSwitcher } from '@natu/next-themes/ThemeModeSwitcher';

import { SBProps, sbEditable } from '../../../utils';

export const SBThemeModeSwitcher = ({ blok }: SBProps) => (
  <ThemeModeSwitcher {...sbEditable(blok)} />
);
