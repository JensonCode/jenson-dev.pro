import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/style/globals.css';

import { ReactNode } from 'react';
import Footer from '@/components/layout/Footer';
import SocialMediaGroup from '@/components/layout/SocialMediaGroup';
import Navbar from '@/components/layout/Navbar';

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jenson Code | Developer Portfolio',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log();
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <SocialMediaTab />
        <Background>{children}</Background>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

function Background(props: { children: ReactNode }) {
  return (
    <div className='relative overflow-hidden'>
      <main className='px-[6%] py-[7%] min-h-[92vh]'>{props.children}</main>

      <div className='absolute inset-0 -z-10'>
        <div className='bg-wave bg-wave-one '>
          <div className='curve before:bg-wave-two after:bg-wave-one' />
        </div>
        <div className='bg-wave bg-wave-two'>
          <div className='curve before:bg-wave-three after:bg-wave-two' />
        </div>
        <div className='bg-wave bg-wave-three'>
          <div className='curve before:bg-wave-one after:bg-wave-three' />
        </div>
        <div className='bg-wave bg-wave-one'>
          <div className='curve before:bg-wave-two after:bg-wave-one' />
        </div>
        <div className='bg-wave bg-wave-two'>
          <div className='curve before:bg-wave-three after:bg-wave-two' />
        </div>
        <div className='bg-wave bg-wave-three'></div>
      </div>
    </div>
  );
}

function SocialMediaTab() {
  return (
    <div className='bg-black/50 rounded-l-[20px] fixed right-0 top-64 bottom-0 z-10 w-[50px] h-[146px]'>
      <SocialMediaGroup fixed={true} />
    </div>
  );
}
