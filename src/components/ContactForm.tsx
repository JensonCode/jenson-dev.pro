'use client';

import { SendAction } from '@/server/action/contact-form';
import { DefaultState } from '@/server/state';
import { useRef } from 'react';
import { useFormState } from 'react-dom';
import SubmitButton from './SubmitButtom';

export default function ContactForm() {
  const [formState, formAction] = useFormState(SendAction, DefaultState());
  const formRef = useRef<HTMLFormElement>(null);

  if (formState.state === 'success') {
    formRef.current?.reset();
  }

  return (
    <form
      ref={formRef}
      id='contact-form'
      className='rounded-lg bg-white p-4 py-6'
      action={formAction}
    >
      <fieldset className='grid grid-cols-1 gap-4'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
        />
        <span>
          {(formState.state === 'fail' && formState.errors['name']) || null}
        </span>

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
        />
        <span>
          {(formState.state === 'fail' && formState.errors['email']) || null}
        </span>

        <label htmlFor='message'>Message</label>
        <textarea
          rows={2}
          cols={4}
          name='message'
        />
        <span>
          {(formState.state === 'fail' && formState.errors['message']) || null}
        </span>
      </fieldset>
      <div className='flex justify-end mt-8'>
        <SubmitButton
          value='send'
          form='contact-form'
        />
      </div>
    </form>
  );
}
