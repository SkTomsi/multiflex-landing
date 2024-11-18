'use server';

import nodemailer from 'nodemailer';
import { BusinessEmailTemplate, ContactEmailTemplate } from './utils';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
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
}: {
  phone: string;
  message: string;
  name: string;
  email: string;
  subject: string;
  text: string;
  html?: string;
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
      from: email,
      to: SMTP_SERVER_USERNAME,
      subject,
      text,
      html:
        html === 'contact'
          ? ContactEmailTemplate({ name, email, phone, message })
          : BusinessEmailTemplate({ name, email, phone, message }),
    });
    console.log('Message Sent', info.messageId);
    console.log('Mail sent to', SITE_MAIL_RECIEVER);
    return info;
  } catch (error) {
    console.error('Something Went Wrong', error);
    return;
  }
}
