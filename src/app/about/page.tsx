import { habits, opinions, stories } from '@/data/about';
import React, { Fragment, ReactNode } from 'react';

export default function page() {
  return (
    <section
      className='grid lg:grid-cols-2 lg:gap-10 font-semibold text-black '
      id='about-section'
    >
      <ContentShell title='About Me'>
        <div className='px-1 rounded-[4px]'>
          {stories.map((s, index) => (
            <Fragment key={index}>
              <h2 className='font-semibold py-2 '>{s.title}</h2>
              <p className='pb-4 px-4'>{s.paragraph}</p>
            </Fragment>
          ))}
        </div>
      </ContentShell>

      <div>
        <ContentShell title='I like'>
          <ul>
            {habits.map((h, index) => (
              <li key={index}>
                <span>
                  {h.name}
                  {h.icon}
                </span>
              </li>
            ))}
          </ul>
        </ContentShell>

        <ContentShell title="I'm learning">
          <ul>
            <li>
              <a
                href='https://github.com/JensonCode/go-modules'
                target='_blank'
              >
                Go Programming Language
              </a>
            </li>
            <li>Search Engine Optimization(SEO) in Next.js or React.js</li>
          </ul>
        </ContentShell>

        <ContentShell title='My Preference'>
          <ul>
            <li>
              <a
                href='https://github.com/JensonCode/next14-drizzle-pscale-setup'
                target='_blank'
              >
                Next 14, Drizzle ORM and MySQL for small apps
              </a>
            </li>

            {opinions.map((o, index) => (
              <li key={index}>{o}</li>
            ))}
          </ul>
        </ContentShell>
      </div>
    </section>
  );
}

const ContentShell = (props: { title: string; children: ReactNode }) => {
  return (
    <section className='p-2'>
      <h1 className='font-semibold mb-6 text-white'>
        <span className='bg-orange-700/70 px-4 py-2 rounded-md'>
          {props.title}
        </span>
      </h1>
      {props.children}
    </section>
  );
};
