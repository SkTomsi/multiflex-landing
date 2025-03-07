import heroImage from '@/assets/hero-image.webp';
import { type MotionValue, motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TextGenerateEffect } from '../../ui/text-generate-effect';

export default function Hero({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const PillVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    reveal: {
      opacity: 1,
      delay: 0.8,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const HeroImageVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    reveal: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        type: 'spring',
        damping: 50,
        stiffness: 100,
      },
    },
  };

  const pills = ['Hospitality', 'Commercial Spaces', 'Residences'];

  return (
    <motion.div
      className="mb-20 flex w-full flex-col items-center justify-start md:mb-12"
      style={{ scale }}
    >
      <div className="container flex flex-col items-start justify-center space-y-8 overflow-hidden border-none md:space-y-14">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            type: 'spring',
            damping: 70,
            stiffness: 100,
          }}
        >
          <TextGenerateEffect
            filter={true}
            words="A TRADITION OF INNOVATION"
            className="overflow-hidden text-4xl font-semibold uppercase tracking-tight text-brand-black  md:text-hero-text"
          />
        </motion.h1>
        <motion.div
          className="flex flex-col space-y-8 md:mt-14 md:flex-row md:items-start md:justify-between md:space-y-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            type: 'spring',
            damping: 30,
            stiffness: 100,
          }}
        >
          <motion.div
            className="flex w-full gap-x-5 text-xs"
            variants={PillVariants}
            initial="initial"
            animate="reveal"
          >
            {pills.map((p) => (
              <Link href={'/our-showcase'} key={p}>
                <motion.p
                  className="w-fit cursor-pointer rounded-full border border-brand-primary px-4 py-1 font-medium text-brand-primary md:py-2 md:text-base"
                  key={p}
                >
                  {p}
                </motion.p>
              </Link>
            ))}
          </motion.div>
          <TextGenerateEffect
            animation={false}
            filter={false}
            className="sub-header-text"
            words="Since 1989, Multiflex has been at the forefront of premium furniture creation, utilizing cutting-edge CNC technology. Discover the perfect blend of expertise and advanced finishing, all made with unwavering passion and meticulous care."
          />
        </motion.div>
      </div>
      {/* <motion.div
        className="relative mt-8 hidden h-[200vh] flex-col items-center justify-center gap-y-40 md:flex"
        variants={HeroImageVariants}
        initial="initial"
        animate="reveal"
      > */}
      <motion.div
        className="sticky top-0"
        style={{ scale }}
        variants={HeroImageVariants}
        initial="initial"
        animate="reveal"
      >
        <Image
          src={heroImage}
          alt="hero image"
          className=" h-[320px] w-full object-cover object-right md:h-auto"
        />
      </motion.div>
      {/* </motion.div> */}
      {/* <motion.div
        className="relative mt-8 h-full w-full md:mt-2 md:hidden"
        variants={HeroImageVariants}
        initial="initial"
        animate="reveal"
      >
        <Image
          src={heroImage}
          alt="hero image"
          className="h-[320px] w-full object-cover object-right md:h-auto"
        />
      </motion.div> */}
    </motion.div>
  );
}
