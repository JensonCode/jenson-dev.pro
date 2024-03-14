import Link from 'next/link';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButttonProps = {
  children: ReactNode;
  internaLink: string;
};

export default function NavButton({ children, internaLink }: ButttonProps) {
  return (
    <Link
      href={internaLink}
      className={twMerge(
        'flex items-center justify-center ',
        'px-8 py-4 rounded-[30px] bg-white text-button-text',
        'transition-all ease-in-out delay-[100ms] animate-fade-in',
        'hover:-translate-y-[3px] focus:translate-y-[1.5px]',
        'shadow-lg hover:shadow-xl'
      )}
    >
      {children}
    </Link>
  );
}
