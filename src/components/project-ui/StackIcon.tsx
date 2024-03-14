import Image from 'next/image';

const getStackIcon = (stackName: string) => {
  const name = stackName.toLowerCase().replace(/[.\s]/g, '-');
  return `/icons/${name}.svg`;
};

export default function StackIcon({ stack }: { stack: string }) {
  return (
    <>
      <div className='flex items-center text-sm md:text-base lg:text-sm'>
        <Image
          src={`${getStackIcon(stack)}`}
          alt={`${stack} icon`}
          height={25}
          width={25}
        />
        <span className={`pl-2 text-slate-800 text-sm`}>{stack}</span>
      </div>
    </>
  );
}
