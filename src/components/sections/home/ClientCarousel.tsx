import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { CLIENTS } from '~/constants/Clients';
import { cn } from '~/lib/utils';
export default function ClientCarousel() {
  function HighResImage({
    src,
    alt,
    className,
    ...props
  }: {
    src: string | StaticImageData;
    alt: string;
    className?: string;
  }) {
    const logoVariants = {
      initial: {
        y: -30,
        opacity: 0,
        filter: 'blur(4px)',
      },
      animate: {
        y: 0,
        filter: 'blur(0px)',
        opacity: 1,
        transition: {
          duration: 0.8,
          type: 'spring',
          damping: 40,
          stiffness: 100,
          delay: 0.5,
        },
      },
    };

    return (
      <motion.div
        className="flex h-[100px] min-w-fit items-center justify-center  md:h-[90px]"
        variants={logoVariants}
        initial="initial"
        whileInView="animate"
      >
        <Image
          src={src}
          alt={alt}
          className={cn('h-full w-full object-contain ', className)}
          objectFit="contain"
          {...props}
        />
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-y-5 overflow-hidden grayscale">
      <div className="flex flex-col items-center justify-between antialiased opacity-85 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] md:[mask-image:none]">
        <div className="flex w-full animate-[infinite-sroll_20s_linear_infinite] justify-evenly gap-x-10 md:animate-none">
          <HighResImage src={CLIENTS.IITB.logo} alt={CLIENTS.IITB.name} />
          <HighResImage src={CLIENTS.RBS.logo} alt={CLIENTS.RBS.name} />
          <HighResImage src={CLIENTS.APPLE.logo} alt={CLIENTS.APPLE.name} />
          <HighResImage src={CLIENTS.JPMC.logo} alt={CLIENTS.JPMC.name} />
          <HighResImage
            src={CLIENTS.ROTHSCHILD.logo}
            alt={CLIENTS.ROTHSCHILD.name}
          />
          <HighResImage
            src={CLIENTS.MARRIOTT.logo}
            alt={CLIENTS.MARRIOTT.name}
          />
          <HighResImage src={CLIENTS.HSBC.logo} alt={CLIENTS.HSBC.name} />
        </div>
        <div className="flex w-full animate-infinite-sroll-reverse justify-evenly gap-x-10 md:animate-none">
          <HighResImage src={CLIENTS.ITC.logo} alt={CLIENTS.ITC.name} />
          <HighResImage src={CLIENTS.SC.logo} alt={CLIENTS.SC.name} />
          <HighResImage src={CLIENTS.RAHEJA.logo} alt={CLIENTS.RAHEJA.name} />
          <HighResImage src={CLIENTS.IDFC.logo} alt={CLIENTS.IDFC.name} />
          <HighResImage src={CLIENTS.HARVARD.logo} alt={CLIENTS.HARVARD.name} />
          <HighResImage src={CLIENTS.MERRIL.logo} alt={CLIENTS.MERRIL.name} />
          <HighResImage src={CLIENTS.ICICI.logo} alt={CLIENTS.ICICI.name} />
        </div>
      </div>
    </div>
  );
}
