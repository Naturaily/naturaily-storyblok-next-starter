import { ThemeModeSwitcher } from '@natu/next-themes/ThemeModeSwitcher';

import { sbEditable } from '../../../utils/sbEditable/sbEditable';
import { SBProps } from '../../../utils/types';

export const SBThemeModeSwitcher = ({ blok }: SBProps) => (
  <ThemeModeSwitcher {...sbEditable(blok)} />
);
