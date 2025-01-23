'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { SendMailAction } from '~/app/actions';
import { useToast } from '~/hooks/use-toast';

const initialState = {
  message: '',
  status: '',
};

export const ContactForm = () => {
  const [state, formAction] = useFormState(SendMailAction, initialState);
  const status = useFormStatus();
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === 'false') {
      toast({
        title: 'Oh no! Something went wrong',
        description: state.message,
      });
    }
    if (state.status === 'true') {
      toast({
        title: state.message,
        description: "We'll get back to you soon.",
      });
    }
  }, [state, toast]);

  async function sendMail(formData: FormData) {
    toast({
      title: 'We are sending your mail...',
      description: 'Please wait',
    });
    const form = Object.fromEntries(formData.entries());

    formAction(form);
  }

  return (
    <form className="mx-auto w-full" action={sendMail}>
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
      <div className="group relative z-0 mb-5 w-full">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Any message for us?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Leave a message..."
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status.pending}
        className="mt-4 w-full rounded-lg bg-brand-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-brand-primary/80 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Send
      </button>
    </form>
  );
};
