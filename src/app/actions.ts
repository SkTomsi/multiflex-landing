'use server';

import { sendMail } from '~/lib/send-mail';

interface FormData {
  name: string;
  email: string;
  message: string;
  number: string;
}

export async function SendMailAction(prevState: unknown, formData: unknown) {
  console.log(formData);

  const form = formData as FormData;

  const mailText = `Name: ${form.name}\n  Email: ${form.email}\nMessage: ${form.message}`;
  const response = await sendMail({
    email: form.email,
    subject: 'New Contact Form Submission',
    text: mailText,
    name: form.name,
    phone: form.number,
    message: form.message,
  });
  if (response?.messageId) {
    console.log('Application Submitted Successfully.');

    return {
      message: 'Hey! Your Mail has been sent successfully.',
      status: true,
    };
  } else {
    console.error('Failed To send application.');
    return {
      message: 'There was an error sending your mail. Please try again later.',
      status: false,
    };
  }
}
