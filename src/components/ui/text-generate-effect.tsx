'use client';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';
import { cn } from '~/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
  filter = false,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  const inView = useInView(scope, { once: true });
  useEffect(() => {
    if (inView) {
      animate(
        'span',
        {
          opacity: 1,
          y: 0,
          filter: filter ? 'blur(0px)' : 'none',
        },
        {
          duration: duration ? duration : 0.5,
          delay: stagger(0.1),
        },
      );
    }
  }, [animate, duration, filter, inView]);

  const textVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 0,
      duration: 0.8,
      transition: {
        type: 'spring',
        delay: 0.5,
        stiffness: 100,
        damping: 30,
      },
    },
  };
  const renderWords = () => {
    return (
      <motion.div
        ref={scope}
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="-y-20 text-brand-black opacity-0 dark:text-white"
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return <div className={cn('', className)}>{renderWords()}</div>;
};
