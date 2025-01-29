import anandImg from '@/assets/team/anand-quadros.webp';
import AshokQuadrosImg from '@/assets/team/ashok-quadros.webp';
import josephImg from '@/assets/team/joseph.webp';
import nehaImg from '@/assets/team/neha.webp';
import reubenImg from '@/assets/team/reuben.webp';
import teamImg from '@/assets/team/team-full.webp';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import SectionHeader from '~/components/shared/SectionHeader';

const TeamCard = ({
  img,
  name,
  designation,
  description,
  isEmpty,
}: {
  img?: StaticImageData;
  name?: string;
  designation?: string;
  description?: string;
  isEmpty?: boolean;
}) => {
  if (isEmpty) {
    return <div className="hidden md:block" />;
  }

  return (
    <motion.div className="flex flex-col gap-2 p-3 transition-all duration-500 ease-out">
      <div className="group relative overflow-hidden">
        <Image
          src={img!}
          alt={name || 'team member'}
          className="w-full object-contain group-hover:blur-sm"
        />

        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 hidden flex-col justify-end bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0  group-hover:flex group-hover:opacity-100">
          <p className="text-[10px] text-white md:text-[13px]">{description}</p>
        </div>
      </div>

      <div className="p-1">
        <p className="text-base font-semibold text-brand-black">{name}</p>
        <p className="text-xs font-normal text-brand-grey md:text-sm">
          {designation}
        </p>
      </div>
    </motion.div>
  );
};

export default function Team() {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if (inView) {
      animate(
        'div',
        { opacity: [0, 1], y: [20, 0] },
        {
          duration: 0.5,
          delay: stagger(0.1),
          type: 'spring',
          stiffness: 100,
          damping: 40,
        },
      );
    }
  }, [animate, scope, inView]);

  return (
    <div className="container border-none px-0">
      <SectionHeader title="The MultiFlex family: experience, embodied." />
      <div className="flex w-full flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: 'spring',
            damping: 40,
            stiffness: 100,
          }}
          viewport={{ once: true }}
        >
          <Image
            src={teamImg}
            alt="team image"
            className="h-full w-full object-contain"
          />
        </motion.div>
        <div className="flex flex-col gap-y-8 md:gap-y-20 md:px-10">
          {/* <TextGenerateEffect
            filter={false}
            animation={false}
            duration={0.8}
            className="sub-header-text"
            words="At Multiflex, we believe that our team is our greatest asset. Our
            success story is written by the hands and minds of dedicated
            professionals who bring our vision to life every day.
            
            Like you, we believe in the importance of family. Which is why we remain proudly family-run, well into our fourth decade. With Ashok’s keen marketing and research insights, Anand’s unparalleled supplier database, the production genius of Reuben, Joseph’s world-class quality control, Neha’s expert marketing, the whole-hearted efforts of the rest of our team, and the legacy carried forward by the next generation"
          /> */}
          <div className="sub-header-text mt-5 flex flex-col space-y-2 md:mt-0 md:flex-1 md:space-y-4 md:text-base lg:items-center">
            <p className="w-full">
              At Multiflex, we believe that our team is our greatest asset. Our
              success story is written by the hands and minds of dedicated
              professionals who bring our vision to life every day.
            </p>
            <p className="">
              Like you, we believe in the importance of family. Which is why we
              remain proudly family-run, well into our fourth decade. With
              Ashok’s keen marketing and research insights, Anand’s unparalleled
              supplier database, the production genius of Reuben, Joseph’s
              world-class quality control, Neha’s expertise in Design, the
              whole-hearted efforts of the rest of our team and the legacy
              carried forward by the next generation, the Multiflex family
              strives towards excellence.
            </p>
          </div>
          {/* <motion.div
            className="grid grid-rows-3 gap-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              type: 'spring',
              damping: 40,
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            <p className="w-fit rounded-full bg-brand-grey px-16 py-5 text-sm text-white md:px-40 md:py-5">
              Architects
            </p>
            <p className="w-fit justify-self-end rounded-full bg-brand-foreground px-16 py-5 text-sm text-brand-primary md:px-24 md:py-5">
              Material Specialists
            </p>
            <div className="flex justify-between">
              <p className="w-fit rounded-full bg-brand-primary px-12 py-5 text-sm text-brand-foreground md:px-20 md:py-5">
                Designers
              </p>
              <p className="w-fit rounded-full bg-brand-black px-8 py-5 text-sm text-white md:px-14 md:py-5">
                Artisans
              </p>
            </div>
          </motion.div> */}
        </div>
      </div>

      <motion.div
        className="grid w-full grid-cols-2  md:grid-cols-3 lg:grid-cols-4 lg:pt-4 xl:grid-cols-5"
        ref={scope}
      >
        <TeamCard
          img={AshokQuadrosImg}
          name="Ashok Quadros"
          designation="Co-Founder"
          description="With 35 years of experience, Ashok oversees marketing and customer interactions for projects and finance, utilizing his understanding of international developments in panel-processing materials, techniques, and equipment."
        />
        <TeamCard
          img={anandImg}
          name="Anand Quadros"
          designation="Co-Founder"
          description="With 35 years of expertise, Anand manages logistics and procurement, leveraging his robust connections with suppliers to secure materials efficiently and economically, ensuring project success."
        />

        <TeamCard
          img={reubenImg}
          name="Reuben Lobo"
          designation="Head - Manufacturing and Innovation"
          description="Trained in Austria and Germany, Reuben, with 29 years of experience, specializes in production, hardware, and tooling applications, ensuring factory efficiency. He is a key reference for our team."
        />
        <TeamCard
          img={josephImg}
          name="Joseph Noronha"
          designation="Head - Quality Assurance and Execution"
          description="Joseph is the critical last-mile interface for site installation. He oversees quality control and manages the Packing, Assembly, and Dispatch Departments. No piece of furniture leaves our factory without being appraised by his critical eye."
        />
        {/* <TeamCard isEmpty /> */}
        {/* <TeamCard isEmpty /> */}
        {/* <TeamCard isEmpty /> */}
        <TeamCard
          img={nehaImg}
          name="Neha Jhunjhunwala Eidnani"
          designation="Managing Partner"
          description="Neha graduated from Kelley School of Business, Indiana USA in Business Management. She worked for A.T. Kearney as a management consultant in Chicago after which she moved to the furniture industry. Neha has over 25 years of experience in India and overseas."
        />
        {/* <TeamCard
          img={glennImg}
          name="Glenn Quadros"
          designation="Design & Engineering"
        />
        <TeamCard
          img={adtiyaImg}
          name="Adtiya Quadros"
          designation="Design & Engineering"
        /> */}
      </motion.div>
    </div>
  );
}
