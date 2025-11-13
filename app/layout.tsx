import type { Metadata } from 'next';
import './globals.css';

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Agentic Greeting',
  description: 'A friendly AI-powered greeting experience.'
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
