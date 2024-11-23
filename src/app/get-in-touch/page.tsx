'use client';

import Image from 'next/image';
import contactImage from '~/assets/contact-image.webp';
import { BusinessForm } from '~/components/sections/get-in-touch/business-form';
import { ContactForm } from '~/components/sections/get-in-touch/contact-form';
import RoundedButton from '~/components/shared/RoundedButton';
export default function page() {
  return (
    <div className="relative mx-0 flex flex-col">
      <div className="minimal-container flex w-full flex-col md:max-w-[1600px] lg:mx-auto lg:flex-row lg:justify-between lg:space-y-0">
        <div className="flex flex-col gap-10 lg:w-[30%]">
          <h1 className=" text-balance text-4xl font-extrabold tracking-tighter lg:text-6xl">
            We’d love to hear from you.
          </h1>
          <ContactForm />
        </div>
        <div className="flex flex-col gap-4 lg:w-[50%]">
          <p className="sub-header-text ">
            At Multiflex, we believe that the best solutions come from open
            collaboration and a deep understanding of your needs. Whether you
            have a question, need a custom solution, or want to learn more about
            our innovative furniture manufacturing, we&apos;re here to help.
          </p>
          <p className="sub-header-text">
            Interested in seeing our work firsthand? Schedule a visit to our
            state-of-the-art manufacturing facility. Experience the innovation
            and craftsmanship that define Multiflex.
          </p>
          <RoundedButton buttonText="Book an Appointment" />
          <BusinessForm />
        </div>
      </div>

      <Image
        src={contactImage}
        alt="contact-image"
        className="mb-20 w-full object-contain"
      />
    </div>
  );
}
