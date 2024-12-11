'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface IRoundedButton {
  buttonText: string;
}

const buttonVariants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    y: 0,
    opacity: 1,
    duration: 0.8,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 30,
    },
  },
};

function RoundedButton({ buttonText }: IRoundedButton) {
  return (
    <motion.div
      className="group flex w-fit cursor-pointer items-center gap-x-2 rounded-full bg-brand-foreground px-4 py-3 transition-all duration-300 ease-in-out"
      variants={buttonVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="flex size-3 items-center justify-center rounded-full bg-primary transition-all duration-300 ease-in-out group-hover:size-8 ">
        <ArrowUpRight className="hidden text-white group-hover:block" />
      </div>
      <div className="text-sm transition-all duration-300 ease-in-out">
        {buttonText}
      </div>
    </motion.div>
  );
}

export default RoundedButton;
