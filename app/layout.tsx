import type { Metadata } from 'next';
import { FC } from 'react';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='relative flex flex-col h-screen'>
          <Header />
          <main className='container mx-auto px-12 flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
