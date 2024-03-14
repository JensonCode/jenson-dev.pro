'use client';

import { NavItems } from '@/data/nav-items';
import Link from 'next/link';

import { twMerge } from 'tailwind-merge';
import { UseNavItemHook } from '@/hooks/NavItemHook';
import SocialMediaGroup from './SocialMediaGroup';

export default function Footer() {
  return (
    <footer
      id='footer'
      className='w-full px-[5%] bg-main-turquoise pb-10'
    >
      <FooterItems />
      <div className='px-4'>
        <SocialMediaGroup />
      </div>

      <div className='text-gray-400 px-4 text-sm'>
        <p>App powered by Next.js, TailwindCSS & Vercel</p>
        <p>Last Update: 1/2/2024</p>
      </div>
    </footer>
  );
}

const FooterItems = () => {
  const activeIndex = UseNavItemHook();
  return (
    <nav
      id='nav'
      className='flex max-lg:flex-col text-main-orange font-bold pt-4'
    >
      {NavItems.map((item, index) => (
        <div
          key={'footer-item' + index}
          className='py-4'
        >
          <Link
            href={item.pathName}
            className={twMerge(
              'p-4 hover:text-white',
              index === activeIndex &&
                'border-b-2 border-main-yellow text-white'
            )}
          >
            {item.footerLabel.toUpperCase()}
          </Link>
        </div>
      ))}
    </nav>
  );
};
