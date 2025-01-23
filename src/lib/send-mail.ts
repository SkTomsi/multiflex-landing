'use server';

import nodemailer from 'nodemailer';
import { BusinessEmailTemplate, ContactEmailTemplate } from './utils';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
  service: 'yahoo',
  host: SMTP_SERVER_HOST,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  name,
  phone,
  message,
  email,
  subject,
  text,
  html,
  cname,
  companyLocation,
  businessDescription,
}: {
  phone: string;
  message: string;
  name: string;
  email: string;
  subject: string;
  text: string;
  html?: string;
  cname?: string;
  companyLocation?: string;
  businessDescription?: string;
}) {
  try {
    const isVerified = await transporter.verify();

    if (!isVerified) {
      console.error('SMTP Server is not verified');
      return;
    }

    console.log('SMTP Server is verified');
  } catch (error) {
    console.error(
      'Something Went Wrong',
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error,
    );
    return;
  }

  console.log('SMTP Server is sending mail');

  try {
    console.log(`sender: ${email}, recipient: ${SITE_MAIL_RECIEVER}`);

    const info = await transporter.sendMail({
      from: SMTP_SERVER_USERNAME,
      to: SITE_MAIL_RECIEVER,
      subject,
      text,
      html:
        html === 'contact'
          ? ContactEmailTemplate({ name, email, phone, message })
          : BusinessEmailTemplate({
              name,
              email,
              phone,
              message,
              cname,
              companyLocation,
              businessDescription,
            }),
    });
    console.log('Message Sent', info.messageId);
    console.log('Mail sent to', SITE_MAIL_RECIEVER);
    return info;
  } catch (error) {
    console.error('Something Went Wrong', error);
    return;
  }
}
