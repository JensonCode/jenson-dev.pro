import ProjectDetail from '@/components/project-ui/ProjectDetail';

import { projects } from '@/data/project';

export default function Project() {
  return (
    <main id='project'>
      <section id='project-work'>
        {projects.map((project, index) => (
          <div
            className='pb-[10%]'
            key={'work-' + index}
          >
            <h1
              className={`flex items-center justify-center rounded-[10px] text-sm md:text-base bg-main-turquoise text-white font-bold h-10 w-40 shadow-md mb-4 `}
            >
              {project.name}
            </h1>
            <h2 className='font-semibold text-black w-[80%] mb-4'>
              {project.description}

              <GingerAnchor name={project.name} />
            </h2>
            <ProjectDetail project={project} />
          </div>
        ))}
      </section>
    </main>
  );
}

const GingerAnchor = (props: { name: string }) => {
  if (props.name !== 'Metadiv.io') {
    return null;
  }

  return (
    <a
      href='https://github.com/metadiv-io'
      className='text-blue-500 hover:text-blue-600 underline'
      target='_blank'
    >
      Check out ginger
    </a>
  );
};
