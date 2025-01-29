import tvUnit from '@/assets/tv-unit.webp';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import SectionHeader from '~/components/shared/SectionHeader';
import { TextGenerateEffect } from '~/components/ui/text-generate-effect';
import { cn } from '~/lib/utils';

export default function History() {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });

  function StatItem({
    title,
    description,
    className,
    unit,
  }: {
    title: number;
    description: string;
    unit: string;
    className?: string;
  }) {
    return (
      <motion.div
        className={cn('-y-20 flex flex-col gap-y-1 p-4 opacity-0', className)}
      >
        <p className="stat-text text-4xl font-semibold tracking-tighter lg:text-6xl">
          <CountUp end={title} /> {unit}
        </p>
        <p className="sm-subheader-text lg:text-2xl">{description}</p>
      </motion.div>
    );
  }

  const Stats = [
    {
      title: 35,
      unit: 'years',
      description: 'of being pioneers in the industry',
    },
    {
      title: 5500,
      unit: '+',
      description: 'projects completed till date',
    },
  ];

  useEffect(() => {
    if (inView) {
      animate(
        'div',
        {
          opacity: 1,
          y: 0,
        },
        { duration: 1, delay: stagger(0.3) },
      );
    }
  }, [animate, inView]);

  return (
    <div className="container">
      <SectionHeader title="Family-crafted excellence since 1989" />
      <div className="flex flex-col items-center gap-y-5 md:grid md:grid-cols-2 md:gap-40">
        <Image
          src={tvUnit}
          alt="tv-unit"
          className="order-0 h-full w-full object-cover"
        />
        <div className="space-y-4 md:flex md:h-full md:flex-col md:items-center md:space-y-14">
          <div className="sub-header-text space-y-2 border-b border-brand-grey-secondary pb-9 md:pb-14">
            <TextGenerateEffect
              filter={false}
              animation={false}
              duration={0.8}
              words="Founded by brothers Anand and Ashok Quadros, our journey began with the formation of the Quadros group in 1989. We remain proudly family-run, well into our fourth decade."
            />
          </div>

          <div
            className="grid w-full grid-cols-1 md:col-span-2 md:gap-20"
            ref={scope}
          >
            {Stats.map((stat) => (
              <StatItem
                key={stat.title}
                title={stat.title}
                unit={stat.unit}
                description={stat.description}
                // className={stat.className!}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
