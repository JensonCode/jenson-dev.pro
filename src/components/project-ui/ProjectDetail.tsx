'use client';
import { Project } from '@/data/project';
import ProjectScreenshot from './ProjectScreenshot';
import StackList from './StackList';
import { useObserver } from '@/hooks/IntercationObserver';

const ProjectDetail = ({ project }: { project: Project }) => {
  const { pic, outcomes, stacks, link } = project;

  useObserver();
  return (
    <div
      id='project-detail'
      className='project-detail grid grid-cols-12 gap-2 lg:grid-rows-2'
    >
      <div className='project-screenshot max-lg:col-span-12 row-span-2 lg:row-start-1 lg:col-start-5 lg:col-end-[-1] peer z-[1] hover:z-10 '>
        <ProjectScreenshot
          src={pic}
          link={link}
        />
      </div>
      <div className='project-content max-lg:col-span-12 row-span-1 lg:row-start-1 lg:col-start-1 lg:col-end-6 px-2 z-[3] py-6 '>
        <div
          id='content'
          className='text-black bg-main-yellow/80 p-4'
        >
          <h2 className='font-semibold '>Outcomes</h2>
          {outcomes.map((item: string, index: number) => (
            <div
              key={index}
              className='flex items-center justify-start font-medium '
            >
              <h2>╘ {item}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className='project-stack max-lg:col-span-12 row-span-1 lg:row-start-2  lg:col-start-2 lg:col-end-8 px-2 z-[2]'>
        <StackList stacks={stacks} />
      </div>
    </div>
  );
};

export default ProjectDetail;
