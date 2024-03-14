'use server';

import { parseFormData } from '@/lib/validator';
import { FailState, FormErrors, FormState, SuccessState } from '../state';
import {
  ContactFormData,
  ContactFormSchema,
} from '@/lib/validator/contact-form';
import { ZodFormError } from '../error/zod-error';
import { sendEmail } from '../email/resend';
import { revalidatePath } from 'next/cache';

export const SendAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  try {
    const { data, errors } = parseFormData<ContactFormData>(
      formData,
      ContactFormSchema
    );

    if (errors !== undefined) {
      throw ZodFormError(errors);
    }

    const ok = await sendEmail(data);

    if (!ok) {
      throw FailState({ resend: 'send email failed' });
    }

    revalidatePath('/contact');

    return SuccessState('Sent');
  } catch (error) {
    return FailState(error as FormErrors);
  }
};
