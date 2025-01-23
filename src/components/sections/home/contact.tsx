import Chair1 from '@/assets/CBiege.webp';
import Chair2 from '@/assets/CBlack.webp';
import Chair3 from '@/assets/CBrown.webp';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="container">
      <div className="space-y-5 md:space-y-14">
        <div className="flex w-full justify-end">
          <h3>Experience The Multiflex Difference</h3>
        </div>
        <div>
          <p className="sub-header-text md:w-[40%]">
            Experience the difference that true craftsmanship, innovative
            technology, and a commitment to excellence can make. Choose
            Multiflex for furniture that doesn&apos;t just furnish your space –
            it becomes a part of your legacy.
          </p>
        </div>
      </div>
      {/* <Image
        src={HiResImage}
        alt="wardrobe image"
        className="w-full object-contain"
      /> */}
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="relative h-[500px] w-full">
          <div className="h-full w-full ">
            <Image
              src={Chair1}
              alt="commercial space"
              className="h-full object-cover"
            />
          </div>
          {/* <p className="absolute bottom-0 left-[50%] mx-auto mb-7 -translate-x-[50%] transform text-lg font-bold text-white">
            Commerical Spaces
          </p> */}
        </div>
        <div className="relative h-[500px] w-full">
          <div className="h-full w-full ">
            <Image
              src={Chair2}
              alt="commercial space"
              className="h-full object-cover"
            />
          </div>
          {/* <p className="absolute bottom-0 left-[50%] mx-auto mb-7 -translate-x-[50%] transform text-lg font-bold text-white">
            Kitchens
          </p> */}
        </div>
        <div className="relative h-[500px] w-full">
          <div className="h-full w-full ">
            <Image
              src={Chair3}
              alt="commercial space"
              className="h-full object-cover"
            />
          </div>
          {/* <p className="absolute bottom-0 left-[50%] mx-auto mb-7 -translate-x-[50%] transform text-lg font-bold text-white">
            Wardrobes
          </p> */}
        </div>
      </div>
      <div className="space-y-5 md:flex md:items-center md:gap-28">
        <p className="text-xl font-bold text-brand-grey md:text-2xl">
          To discuss a project with us,<br></br> Please get in touch:
        </p>
        <a href="mailto:hello@multiflexmodular.com">
          <div className="group flex w-full items-center justify-center gap-4 rounded-full bg-brand-foreground px-8 py-4 text-2xl font-bold tracking-tighter text-brand-primary md:w-fit md:text-3xl">
            hello@multiflexmodular.com
            <ArrowRight
              size={30}
              className="transition-all duration-300 ease-in-out group-hover:-rotate-45"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
