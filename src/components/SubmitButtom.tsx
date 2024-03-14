import React from 'react';
import { useFormStatus } from 'react-dom';

type ButtonProps = {
  value: string;
  form: string;
};

export default function SubmitButton({ value, form }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      form={form}
      className='bg-main-yellow rounded-md px-6 py-3 hover:bg-main-yellow/80'
      aria-disabled={pending}
    >
      {pending ? 'pending' : value}
    </button>
  );
}
