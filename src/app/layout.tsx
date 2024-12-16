import type { Metadata } from 'next';
import { Root } from '@/components';

export const metadata: Metadata = {
  title: 'Telegram MiniApp Template',
  description:
    'This project leverages a modern tech stack designed to enhance performance, maintainability, and user experience. Below is the breakdown of each technology used in the project:',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Root>{children}</Root>;
}
