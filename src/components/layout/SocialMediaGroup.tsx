import Link from 'next/link';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { twMerge } from 'tailwind-merge';

const SocialMediaGroup = (props: { fixed?: boolean }) => {
  const socialMedia = [
    {
      icon: (
        <GitHub className='text-[#6e5494] text-3xl md:text-4xl lg:text-3xl' />
      ),
      link: 'https://github.com/JensonCode',
    },
    {
      icon: (
        <LinkedIn className='text-[#0077b5] text-3xl md:text-4xl lg:text-3xl' />
      ),
      link: 'https://www.linkedin.com/in/jenson-li-dev/',
    },
    // {
    //   icon: (
    //     <Twitter className='text-[#00acee] text-3xl md:text-4xl lg:text-3xl' />
    //   ),
    //   link: 'https://twitter.com/lcllcl1457501',
    // },
  ];
  return (
    <div
      className={twMerge(
        'flex w-full py-4 my-2 an delay-1000 duration-700 easy-in-out',
        props.fixed
          ? 'flex-col items-center justify-center space-y-4'
          : 'space-x-4'
      )}
      aria-label='socialmedia'
    >
      {socialMedia.map((elem, index) => (
        <Link
          key={index}
          href={elem.link}
          target='_blank'
          className=' hover:bg-white/60 rounded-full h-10 w-10 flex items-center justify-center'
        >
          {elem.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaGroup;
