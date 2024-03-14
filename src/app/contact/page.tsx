import ContactForm from '@/components/ContactForm';
import React from 'react';

export default function page() {
  return (
    <main className='grid md:grid-cols-2'>
      <section className='pb-6'>
        <PageTag title='General' />

        <ul className='text-main-turquoise px-2'>
          <li>
            <h2 className='font-semibold'>Email:</h2>
            <a
              href='mailto:lclcodingjj@gmail.com'
              className='underline text-blue-600 hover:text-blue-700'
            >
              lclcodingjj@gmail.com
            </a>
          </li>

          <li>
            <h2 className='font-semibold'>Linkedin:</h2>
            <a
              href='https://www.linkedin.com/in/jenson-li-dev/'
              target='_blank'
              className='underline text-blue-600 hover:text-blue-700'
            >
              Connect my LinkedIn
            </a>
          </li>
        </ul>
      </section>
      <section>
        <PageTag title='Send me a message' />
        <ContactForm />
      </section>
    </main>
  );
}

const PageTag = (props: { title: string }) => {
  return (
    <h1 className='my-4'>
      <span className='px-4 py-2 rounded-md bg-main-green text-white font-semibold'>
        {props.title}
      </span>
    </h1>
  );
};
