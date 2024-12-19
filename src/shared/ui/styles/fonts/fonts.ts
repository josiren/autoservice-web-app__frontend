import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
});

const montserrat = Montserrat({ subsets: ['cyrillic'], weight: ['500', '600'] });

export const Fonts = {
  inter,
  montserrat,
};
