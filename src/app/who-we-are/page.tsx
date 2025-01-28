'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Team from '~/components/sections/home/team';
import { SectionHeader } from '~/components/shared/SectionHeader';

export default function Page() {
  const FeatureCard = ({
    number,
    title,
    desc,
  }: {
    title: string;
    number: string;
    desc: string;
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 960); // Adjust the breakpoint as needed
      };

      handleResize(); // Check on mount
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <motion.div
        layout
        className={`
          relative 
          flex 
          min-h-[250px]
          w-full 
          cursor-pointer 
          flex-col 
          justify-between 
          overflow-hidden 
          rounded-lg 
          p-6 
          text-white 
          transition-all
          duration-500 
          ease-out
          md:h-[200px]
          ${isHovered && !isMobile ? 'bg-[#4E2911] md:flex-[4]' : isMobile ? 'bg-[#4E2911]' : 'flex-1 bg-[#C0C0C0]'}
        `}
        onHoverStart={() => !isMobile && setIsHovered(true)}
        onHoverEnd={() => !isMobile && setIsHovered(false)}
      >
        <div className="flex flex-grow flex-col justify-between ">
          <motion.div className="flex flex-col gap-4">
            <motion.p layout className="text-4xl font-bold">
              {number}
            </motion.p>

            <AnimatePresence>
              {isHovered && !isMobile && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.7 }}
                  className="absolute left-6 right-6 top-16 order-2 text-base"
                >
                  {desc}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.p layout className="order-1 text-2xl font-medium">
            {title}
          </motion.p>
        </div>

        {/* Static display for mobile devices */}
        {isMobile && (
          <div className="absolute left-6 right-6 top-20 text-base">{desc}</div>
        )}
      </motion.div>
    );
  };

  const features = [
    {
      index: 1,
      number: '01.',
      title: 'Legacy of craftsmanship',
      desc: ' From the warm curve of a veneered conference table to the seamless finish of a dovetail joint, let us delight you with what can be done.',
    },
    {
      index: 2,
      number: '02.',
      title: 'Collaborative excellence',
      desc: 'We believe nothing great is ever built in isolation. That’s why we’re constantly in search of the best suppliers quality and cost-wise to partner with.',
    },
    {
      index: 3,
      number: '03.',
      title: 'Pioneering precision',
      desc: 'A millimetre matters. It’s the difference between sleek, fully aligned furniture and an imperfect product that compromises the life of your hardware.',
    },
    {
      index: 4,
      number: '04.',
      title: 'Steadfast focus on ethics',
      desc: 'We may be a furniture manufacturing firm, but we don’t cut corners. We always deliver what we commit, and with us, you can be sure you’re getting some of the finest furniture on the market.',
    },
  ];

  return (
    <div className="relative mx-0 flex flex-col items-center">
      <div className="minimal-container flex flex-col gap-x-2">
        <div className="flex w-full flex-col space-x-0 overflow-hidden border-none md:flex-row md:items-start md:space-y-0 lg:gap-20">
          <div className="md:w-[50%]">
            <h1 className="w-full text-4xl font-extrabold tracking-tighter text-brand-black lg:text-6xl">
              Unrivalled Craftsmanship and Precision Engineering
            </h1>
          </div>
          <div className="sub-header-text mt-5 flex flex-col space-y-2 md:mt-0 md:w-[70%] md:flex-1 md:space-y-4 md:text-base">
            <p className="w-full">
              Born out of a desire to create, innovate and provide premium
              furniture solutions in India, MultiFlex was established by
              brothers Anand and Ashok Quadros in 1989.
            </p>
            <p className="">
              We remain proudly independent today, still a family-owned
              enterprise, and with the valued trust and patronage of our
              clients, have grown to operate completely in-house manufacturing
              units with state-of-the-art CNC machines from Germany and Italy.
              Our stringent focus remains on integrating technology with
              material science to craft furniture that can last a generation,
              utilising accuracy and precision.
            </p>
            <p className="">
              Our success story has only been made possible through the everyday
              trust placed in us by our clients, armed with the strictest
              adherence to a simple philosophy – do things right constantly, and
              maintain the highest standards even when no one is watching. We’re
              excited to write another chapter in our success story with you.
            </p>
          </div>
        </div>
      </div>

      <div className="minimal-container flex flex-col ">
        <Team />
        <SectionHeader
          title="What drives us"
          description="Like you, we believe in the importance of family. Which is why we
          remain proudly family-run, well into our fourth decade. We consider
          each one of our employees to be family – they’ve grown with us and
          we’ve grown with them. Each of our family at MultiFlex lives and
          breathes these values, every single day."
          subDesc="Our commitment to quality begins at the design stage and extends towards production, assembly and even shipment. Fostering a positive and inclusive work environment allows quality to permeate every single process from the outset. On a technical level, every system and process are reviewed continually."
        />
        <div className="flex flex-col gap-5 lg:flex-row">
          {features.map((feature) => (
            <FeatureCard
              key={feature.index}
              number={feature.number}
              title={feature.title}
              desc={feature.desc}
              // expanded={expanded === feature.index}
              // setExpanded={setExpanded}
            />
          ))}
        </div>
      </div>
      {/* <div className="minimal-container flex w-full flex-col gap-x-2">
        <SectionHeader
          title="Our Quality"
          description=""
        />
        <Image
          src={qualityImg}
          alt="hero image"
          className="w-full object-contain"
        />
      </div> */}

      {/* TODO: Add the timeline or replace it with some other section  */}

      {/* <div className="minimal-container flex flex-col gap-x-2">
        <SectionHeader title="Our Legacy" />

        <ol className="items-start     sm:flex">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white  sm:ring-8"></div>
              <div className="hidden h-0.5 w-full bg-brand-grey-secondary  sm:flex"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                1989
              </h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Anand and Ashok Quadros found Quadros Group, focusing on turnkey
                projects and furniture manufacturing for OEMs.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white  sm:ring-8"></div>
              <div className="hidden h-0.5 w-full bg-brand-grey-secondary  sm:flex"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                1996
              </h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Opened their first factory in Vashi, Navi Mumbai, introducing
                semi-automatic machinery for furniture production.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white  sm:ring-8"></div>
              <div className="hidden h-0.5 w-full bg-brand-grey-secondary  sm:flex"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                2000
              </h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Relocated to a larger facility in Khairne, Navi Mumbai, and
                transitioned to CNC machinery for improved manufacturing
                precision.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white  sm:ring-8"></div>
              <div className="hidden h-0.5 w-full bg-brand-grey-secondary  sm:flex"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                2002
              </h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Established a CNC machining centre.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white  sm:ring-8"></div>
              <div className="hidden h-0.5 w-full bg-brand-grey-secondary  sm:flex"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                2010
              </h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Expanded operations with a second factory in Rabale, Navi
                Mumbai, featuring parallel processing lines and a
                state-of-the-art 5-axis CNC machining center.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white  sm:ring-8"></div>
              <div className="hidden h-0.5 w-full bg-brand-grey-secondary  sm:flex"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Present
              </h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Specialize in manufacturing for high-net-worth individuals
                (HNIs) and collaborating with top architects on bespoke
                projects.
              </p>
            </div>
          </li>
        </ol>
      </div> */}
      {/* <Image
        src={heroImage}
        alt="hero image"
        className="w-full object-contain"
      /> */}
    </div>
  );
}
