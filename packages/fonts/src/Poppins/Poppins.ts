import { Poppins } from 'next/font/google';

export const poppinsFont = Poppins({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-primary',
});
