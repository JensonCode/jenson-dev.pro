import { UseStatePropType } from '@/lib/useStateProps';
import React from 'react';
import { MenuOpen } from '@mui/icons-material';
import Link from 'next/link';
import SocialMediaGroup from './SocialMediaGroup';
import { UseNavItemHook } from '@/hooks/NavItemHook';
import { NavItems } from '@/data/nav-items';

export default function MobileSidebar(props: UseStatePropType<boolean>) {
  const { state, setState } = props;
  const activeIndex = UseNavItemHook();

  return (
    <aside id='mobile-sidebar'>
      {/* backdrop */}
      {state && (
        <div
          id='backdrop'
          className='fixed inset-0 bg-black/30 z-20 '
          onClick={() => setState(!state)}
        />
      )}
      <div
        id='sidebar'
        className={
          `fixed top-0 right-0 w-[60vw] md:w-[40vw] h-full bg-main-turquoise shadow-lg z-20 transition-transform duration-700 ease-in-out ` +
          (!state && ' translate-x-full ')
        }
      >
        <button
          id='toggle'
          onClick={() => setState(!state)}
          className={
            'px-[5%] h-[80px] transition-transform duration-700 ease-in-out ' +
            (state && ' rotate-180 ')
          }
        >
          <MenuOpen className='text-3xl text-primary text-white' />
        </button>

        <div className='flex flex-col justify-between'>
          <div
            id='sidebar-items'
            className='flex flex-col px-4'
          >
            {NavItems.map((item, index) => (
              <div
                key={'sidebar-item' + index}
                className={`flex justify-center items-center  ${
                  index === activeIndex
                    ? 'border-b-4 border-main-yellow text-white'
                    : 'text-orange'
                }`}
                onClick={() => setState(!state)}
              >
                <Link
                  href={item.pathName}
                  className='flex h-full p-6 font-bold md:text-2xl md:ps-10'
                >
                  {item.navbarLabel.toUpperCase()}
                </Link>
              </div>
            ))}
          </div>
          <div className='mx-auto'>
            <SocialMediaGroup />
          </div>
        </div>
      </div>
    </aside>
  );
}
