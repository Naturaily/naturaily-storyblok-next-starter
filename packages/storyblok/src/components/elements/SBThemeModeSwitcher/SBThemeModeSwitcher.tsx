import { ThemeModeSwitcher } from '@natu/next-themes/ThemeModeSwitcher';
import { sbEditable, SBProps } from '../../../utils/src';

export const SBThemeModeSwitcher = ({ blok }: SBProps) => (
  <ThemeModeSwitcher {...sbEditable(blok)} />
);
