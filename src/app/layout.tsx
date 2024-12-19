import type { Metadata } from 'next';
import { Root } from '@/components';
import { Header } from '@/shared';

export const metadata: Metadata = {
  title: 'Авто-диагностика',
  description:
    'This project leverages a modern tech stack designed to enhance performance, maintainability, and user experience. Below is the breakdown of each technology used in the project:',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Root>
      <Header />
      <main className="flex-col">{children}</main>
    </Root>
  );
}
