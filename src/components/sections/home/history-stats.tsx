import tvUnit from '@/assets/tv-unit.webp';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
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
  }: {
    title: string;
    description: string;
    className?: string;
  }) {
    return (
      <motion.div
        className={cn('-y-20 flex flex-col gap-y-1 p-4 opacity-0', className)}
      >
        <p className="stat-text lg:text-6xl">{title}</p>
        <p className="sm-subheader-text lg:text-2xl">{description}</p>
      </motion.div>
    );
  }

  const Stats = [
    {
      title: '35+ years',
      description: 'of being pioneers in the industry',
    },
    {
      title: '5500+',
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
              words="Founded by brothers Ashok and Anand Quadros, our journey began
              with the formation of the Quadros group in 1989. We entered panel
              processing in 1995, and in 2000, we established MultiFlex, our
              fully-automated CNC factory. Today, we offer multiple processing lines and a dedicated
              production line for advanced finishes, serving prestigious clients
              with our expertise in premium modular furniture."
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
