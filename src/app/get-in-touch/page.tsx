'use client';

import Image from 'next/image';
import contactImage from '~/assets/contact.png';
import RoundedButton from '~/components/shared/RoundedButton';
export default function page() {
  return (
    <div className="relative mx-0 flex flex-col">
      <div className="minimal-container flex w-full flex-col md:max-w-[1600px] lg:mx-auto lg:flex-row lg:justify-between lg:space-y-0">
        <h1 className=" text-balance text-4xl font-extrabold tracking-tighter lg:w-[30%] lg:text-6xl">
          We’d love to hear from you.
        </h1>
        <p className="sub-header-text text-xl lg:w-[50%]">
          At Multiflex, we believe that the best solutions come from open
          collaboration and a deep understanding of your needs. Whether you have
          a question, need a custom solution, or want to learn more about our
          innovative furniture manufacturing, we&apos;re here to help.
        </p>
      </div>
      <div className="minimal-container flex w-full flex-col gap-4 md:max-w-[1600px] lg:mx-auto lg:flex-row lg:justify-between lg:space-y-0">
        <div className="lg:w-[40%]">
          <form className="mx-auto w-full">
            <div className="group relative z-0 mb-5 w-full">
              <input
                type="text"
                name="name"
                id="name"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-brand-primary dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Name
              </label>
            </div>
            <div className="group relative z-0 mb-5 w-full">
              <input
                type="email"
                name="email"
                id="email"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-brand-primary dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
              >
                Email
              </label>
            </div>
            <div className="group relative z-0 mb-5 w-full">
              <input
                type="number"
                name="number"
                id="number"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="number"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-brand-primary dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4"
              >
                Phone Number
              </label>
            </div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-brand-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-brand-primary/80 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-6 lg:w-[50%]">
          <p className="sub-header-text text-lg ">
            Interested in seeing our work firsthand? Schedule a visit to our
            state-of-the-art manufacturing facility. Experience the innovation
            and craftsmanship that define Multiflex.
          </p>
          <RoundedButton buttonText="Book a Call" />
        </div>
      </div>
      <div className="mb-20 lg:mx-auto lg:w-full lg:max-w-[1600px] lg:space-y-0">
        <Image src={contactImage} alt="contact-image" />
      </div>
    </div>
  );
}
