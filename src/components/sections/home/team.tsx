import adtiyaImg from '@/assets/aditya.webp';
import anandImg from '@/assets/anand-quadros.webp';
import AshokQuadrosImg from '@/assets/ashok-quadros.webp';
import glennImg from '@/assets/glenn.webp';
import josephImg from '@/assets/joseph.webp';
import nehaImg from '@/assets/neha.webp';
import reubenImg from '@/assets/reuben.webp';
import teamImg from '@/assets/team-full.webp';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import SectionHeader from '~/components/shared/SectionHeader';
import { TextGenerateEffect } from '~/components/ui/text-generate-effect';

const TeamCard = ({
  img,
  name,
  designation,
  isEmpty,
}: {
  img?: StaticImageData;
  name?: string;
  designation?: string;
  isEmpty?: boolean;
}) => {
  if (isEmpty) {
    return <div className="hidden md:block" />;
  }

  return (
    <motion.div className="flex flex-col gap-2 p-4">
      <Image src={img!} alt="ashok quadros" className="w-full object-contain" />
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
    <div className="container">
      <SectionHeader title="The MultiFlex family: experience, embodied." />
      <div className="flex w-full flex-col gap-6 md:grid md:grid-cols-2 md:gap-20">
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
          <TextGenerateEffect
            filter={false}
            animation={false}
            duration={0.8}
            className="sub-header-text"
            words="At Multiflex, we believe that our team is our greatest asset. Our
            success story is written by the hands and minds of dedicated
            professionals who bring our vision to life every day."
          />
          <motion.div
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
          </motion.div>
        </div>
      </div>

      <motion.div
        className="grid w-full grid-cols-2 md:grid-cols-5"
        ref={scope}
      >
        <TeamCard
          img={AshokQuadrosImg}
          name="Ashok Quadros"
          designation="Co-Founder (Customer Interface, Marketing)"
        />
        <TeamCard
          img={anandImg}
          name="Anand Quadros"
          designation="Co-Founder (Procurement, Logistics, Supplier Interface)"
        />
        <TeamCard
          img={josephImg}
          name="Joseph Noronha"
          designation="Head of Department (QC, Installation and Dispatch)"
        />

        <TeamCard
          img={reubenImg}
          name="Reuben Lobo"
          designation="Head of Department (Engineering)"
        />
        <TeamCard isEmpty />
        <TeamCard isEmpty />
        <TeamCard isEmpty />
        <TeamCard
          img={nehaImg}
          name="Neha Jhunhunwala Eidnani"
          designation="Customer Interface and Marketing Head"
        />
        <TeamCard
          img={glennImg}
          name="Glenn Quadros"
          designation="Design & Engineering"
        />
        <TeamCard
          img={adtiyaImg}
          name="Adtiya Quadros"
          designation="Design & Engineering"
        />
      </motion.div>
    </div>
  );
}
