import type { Metadata } from 'next';
import { Athiti } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'RPKM',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${athiti.variable} ${season.variable} ${sarun.variable} w-full min-h-screen bg-1 font-athiti`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

const athiti = Athiti({
  subsets: ['latin', 'thai'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--athiti',
});

const season = localFont({
  variable: '--season',
  src: [
    {
      path: '../../public/fonts/english/theseasons-reg.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/english/theseasons-lt.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/english/theseasons-bd.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/english/theseasons-it.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/english/theseasons-ltit.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/english/theseasons-bdit.otf',
      weight: '700',
      style: 'italic',
    },
  ],
});

const sarun = localFont({
  variable: '--sarun',
  src: [
    {
      path: '../../public/fonts/thai/Sarun.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});
