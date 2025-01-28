import image1 from '@/assets/who-we-are/1.jpg';
import image2 from '@/assets/who-we-are/2.jpg';
import image3 from '@/assets/who-we-are/3.jpg';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="container px-0">
      <div className="space-y-5 px-4 md:space-y-14 md:px-14">
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
              src={image3}
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
              src={image2}
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
              src={image1}
              alt="commercial space"
              className="h-full object-cover"
            />
          </div>
          {/* <p className="absolute bottom-0 left-[50%] mx-auto mb-7 -translate-x-[50%] transform text-lg font-bold text-white">
            Wardrobes
          </p> */}
        </div>
      </div>
      <div className="space-y-5 px-4 md:flex md:items-center md:gap-28  md:px-14 ">
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
