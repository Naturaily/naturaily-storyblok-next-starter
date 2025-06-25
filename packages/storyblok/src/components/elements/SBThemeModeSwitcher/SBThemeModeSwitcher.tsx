import { ThemeModeSwitcher } from '@natu/next-themes/ThemeModeSwitcher';

import { SBProps } from '../../../utils';
import { sbEditable } from '../../../utils/sbEditable/sbEditable';

export const SBThemeModeSwitcher = ({ blok }: SBProps) => (
  <ThemeModeSwitcher {...sbEditable(blok)} />
);
