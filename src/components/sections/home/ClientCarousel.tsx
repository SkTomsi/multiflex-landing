import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
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
        className="flex h-[70px] min-w-fit items-center justify-center  md:h-[90px]"
        variants={logoVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
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
      <div className="flex flex-col items-center justify-between antialiased opacity-85 ">
        <div className="flex w-full flex-wrap justify-evenly gap-x-10 md:animate-none">
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
        <div className="flex w-full flex-wrap justify-evenly gap-x-10 md:animate-none">
          <HighResImage src={CLIENTS.ITC.logo} alt={CLIENTS.ITC.name} />
          <HighResImage src={CLIENTS.SC.logo} alt={CLIENTS.SC.name} />
          <HighResImage src={CLIENTS.RAHEJA.logo} alt={CLIENTS.RAHEJA.name} />
          <HighResImage src={CLIENTS.IDFC.logo} alt={CLIENTS.IDFC.name} />
          <HighResImage src={CLIENTS.HARVARD.logo} alt={CLIENTS.HARVARD.name} />
          <HighResImage src={CLIENTS.MERRIL.logo} alt={CLIENTS.MERRIL.name} />
          <HighResImage src={CLIENTS.ICICI.logo} alt={CLIENTS.ICICI.name} />
        </div>
        <Accordion type="single" collapsible className="w-full border-none ">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-end text-sm tracking-tight">
              view more clients
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex w-full  flex-wrap justify-evenly gap-x-10 md:animate-none">
                <HighResImage
                  src={CLIENTS.ANTWERP.logo}
                  alt={CLIENTS.ANTWERP.name}
                />
                <HighResImage src={CLIENTS.LB.logo} alt={CLIENTS.LB.name} />
                <HighResImage
                  src={CLIENTS.loreal.logo}
                  alt={CLIENTS.loreal.name}
                />
                <HighResImage
                  src={CLIENTS.NOMURA.logo}
                  alt={CLIENTS.NOMURA.name}
                />
                <HighResImage
                  src={CLIENTS.OBEROI.logo}
                  alt={CLIENTS.OBEROI.name}
                />
                <HighResImage
                  src={CLIENTS.SWISS.logo}
                  alt={CLIENTS.SWISS.name}
                />
                <HighResImage src={CLIENTS.TBZ.logo} alt={CLIENTS.TBZ.name} />
                <HighResImage
                  src={CLIENTS.TEMASEK.logo}
                  alt={CLIENTS.TEMASEK.name}
                />
                <HighResImage
                  src={CLIENTS.THANGAMALAYIL.logo}
                  alt={CLIENTS.THANGAMALAYIL.name}
                />
                <HighResImage src={CLIENTS.WP.logo} alt={CLIENTS.WP.name} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
