'use server';

import { ContactFormData } from '@/lib/validator/contact-form';
import { Resend } from 'resend';

const resend = new Resend('re_ejNoXwtA_8FC2XtEs3fEcCY3LG4ZDHw5Z');

export const sendEmail = async (data: ContactFormData) => {
  try {
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'lclcoding0714@hotmail.com',
      subject: `Website Message from ${data.name}`,
      html: `<h1>${data.name} sent you a meesage</h1><hr/><p>${data.message}</p><hr/>${data.email}`,
    });
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
};
