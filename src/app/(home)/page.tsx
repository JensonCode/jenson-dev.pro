import NavButton from '@/components/layout/NavButton';
import { Greeting, Introduction } from '@/data/home';
import { WorkRounded, Contactless } from '@mui/icons-material';

export default function Home() {
  return (
    <section
      id='home'
      className='flex flex-col items-center justify-center md:space-y-10 py-5'
    >
      <h1
        id='greeting'
        className='animate-fade-in text-3xl font-bold text-main-turquoise'
      >
        {Greeting}
      </h1>

      <p
        id='introduction'
        className='animate-fade-in text-black font-semibold md:w-[40%] py-6 '
      >
        {Introduction}
      </p>

      <ButtonGroup />
    </section>
  );
}

const ButtonGroup = () => {
  return (
    <div
      id='nav-buttons'
      className='flex flex-col space-y-6 font-bold md:text-lg'
    >
      <NavButton internaLink='/project'>
        Explore my projects <WorkRounded className='animate-bounce ml-2' />
      </NavButton>
      <NavButton internaLink='/#footer'>
        Connect with me <Contactless className='ml-2' />
      </NavButton>
    </div>
  );
};
