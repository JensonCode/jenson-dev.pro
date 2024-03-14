import { NavItems } from '@/data/nav-items';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const UseNavItemHook = () => {
  const pathname = usePathname();

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const index = NavItems.findIndex((item) => item.pathName === pathname);
    setActiveIndex(index);
  }, [pathname]);

  return activeIndex;
};
