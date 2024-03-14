'use client';

import { UseNavItemHook } from '@/hooks/NavItemHook';
import { NavItems } from '@/data/nav-items';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Menu } from '@mui/icons-material';
import { UseStatePropType } from '@/lib/useStateProps';
import MobileSidebar from './MobileSidebar';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <header
        id='nav-bar'
        className='sticky top-0 w-full z-10 bg-main-turquoise border-b border-gray-200 shadow-sm text-orange'
      >
        <nav
          id='nav'
          className={`flex items-center justify-between w-full h-[80px] px-[5%]`}
        >
          <Logo />
          <NavbarItems />

          <SidebarToggle
            state={showMobileMenu}
            setState={setShowMobileMenu}
          />
        </nav>
      </header>
      <MobileSidebar
        state={showMobileMenu}
        setState={setShowMobileMenu}
      />
    </>
  );
}

const Logo = () => {
  return (
    <Link
      href='/'
      id='nav-brand'
      className='cursor-pointer'
    >
      <Image
        src='/Jenson.png'
        alt='nav-brand'
        height={80}
        width={100}
        priority={false}
      />
    </Link>
  );
};

const NavbarItems = () => {
  const activeIndex = UseNavItemHook();

  return (
    <div
      id='nav-items'
      className='hidden lg:flex text-lg font-bold'
    >
      {NavItems.map((item, index) => (
        <Link
          key={'navbar-item' + index}
          href={item.pathName}
        >
          <div
            className={twMerge(
              'h-full hover:text-white p-4',
              index === activeIndex &&
                'border-b-4 border-main-yellow text-white'
            )}
          >
            {item.navbarLabel.toUpperCase()}
          </div>
        </Link>
      ))}
    </div>
  );
};

const SidebarToggle = (props: UseStatePropType<boolean>) => {
  return (
    <div
      id='mobile-toggle'
      className='lg:hidden'
    >
      <button
        id='toggle'
        aria-label='toggle'
        onClick={() => props.setState(!props.state)}
      >
        <Menu className='text-3xl text-white' />
      </button>
    </div>
  );
};
