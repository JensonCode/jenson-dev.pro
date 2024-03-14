import Image from 'next/image';
import Link from 'next/link';

export default function ProjectScreenshot(props: {
  src: string;
  link: string;
}) {
  return (
    <Link
      href={props.link}
      target='_blank'
      className='relative shadow-lg'
      id='project-screenshot'
    >
      <div className='absolute inset-0 z-[1] bg-gray-500/30 transition hover:bg-gray-500/0 hover:scale-110 easy-in-out duration-500 peer' />
      <Image
        id='project picture'
        className='w-full z-[-1] transition transform peer-hover:translate-x-[-5px] peer-hover:translate-y-[-5px] easy-in-out duration-700 peer-hover:border-orange-500/80 peer-hover:border-b-4 peer-hover:border-r-4 '
        src={props.src}
        alt={props.src}
        height={450}
        width={950}
      />
    </Link>
  );
}
