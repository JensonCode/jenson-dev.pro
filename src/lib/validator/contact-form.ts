import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(1, {
    message: 'Contact name is required.',
  }),
  email: z.string().min(1, {
    message: 'Email is required.',
  }),
  message: z.string().min(1, {
    message: 'Message is required.',
  }),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
