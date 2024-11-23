'use client';

import heroImage from '@/assets/hero-image-WWA.webp';

import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Team from '~/components/sections/home/team';
import { SectionHeader } from '~/components/shared/SectionHeader';

export default function Page() {
  const FeatureCard = ({
    number,
    title,
    desc,
    // expanded,
    // setExpanded,
    index,
  }: {
    index: number;
    title: string;
    number: string;
    desc: string;
    // expanded: boolean;
    // setExpanded: Dispatch<SetStateAction<number | null>>;
  }) => {
    const [scope, animate] = useAnimate();
    const [expanded, setExpanded] = useState<number | null>(0);

    console.log(expanded);

    // useEffect(() => {
    //   animate(scope.current, {
    //     flex: 4,
    //     background: '#4E2911',
    //   });
    // }, [expanded, animate, scope]);

    return (
      <motion.div
        ref={scope}
        className={`flex h-52 w-full flex-1 flex-grow cursor-pointer flex-col justify-between rounded-lg bg-brand-grey-secondary p-6 text-white`}
        layout="position"
        onMouseOver={async () => {
          setExpanded(index);
          animate(
            scope.current,
            { flex: 4, background: '#4E2911' },
            { ease: 'easeInOut' },
          );
          await animate(
            '#desc',
            {
              opacity: 1,
              display: 'block',
            },
            { ease: 'easeInOut', delay: 0.2 },
          );
        }}
        onMouseLeave={() => {
          animate('#desc', {
            opacity: 0,
            display: 'none',
          });
          animate(
            scope.current,
            { flex: 1, background: '#C0C0C0' },
            { ease: 'easeInOut' },
          );
          setExpanded(0);
        }}
      >
        <motion.div className="flex flex-col gap-4 md:flex-row">
          <motion.p layout="position" className="text-4xl font-bold">
            {number}
          </motion.p>
          <motion.p id="desc" className="hidden w-full opacity-0">
            {desc}
          </motion.p>
        </motion.div>
        <motion.p layout="position" className="mt-4 text-2xl font-medium">
          {title}
        </motion.p>
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
      desc: 'We believe nothing great is ever built in isolation. That’s why we’re constantly in search of the best suppliers – quality and cost-wise – to partner with',
    },
    {
      index: 3,
      number: '03.',
      title: 'Pioneering precision',
      desc: 'A millimetre matters. It’s the difference between sleek, fully aligned furniture and an imperfect product that compromises the life of your hardware',
    },
    {
      index: 4,
      number: '04.',
      title: 'Steadfast focus on ethics',
      desc: 'We may be a furniture manufacturing firm, but we don’t cut corners. We always deliver what we commit, and with us, you can be sure you’re getting some of the finest furniture on the market',
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
        <Image
          src={heroImage}
          alt="hero image"
          className="w-full object-contain"
        />
      </div>
      <div className="minimal-container flex flex-col ">
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
              index={feature.index}
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
      <Team />

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
    </div>
  );
}
