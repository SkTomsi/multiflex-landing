import W from '@/assets/hosp-main.jpg';
import K from '@/assets/IDFCCONF.webp';
import C from '@/assets/Picture9.jpg';
import Image from 'next/image';
import SectionHeader from '~/components/shared/SectionHeader';
import { TextGenerateEffect } from '~/components/ui/text-generate-effect';
import ExpertiseScroller from './ExpertiseScroller';

export default function ScopeOfWork() {
  return (
    <div className="container  ">
      <div className="space-y-5 md:flex md:flex-row-reverse md:items-start md:justify-between ">
        <SectionHeader title="What We Do" />
        <TextGenerateEffect
          filter={false}
          animation={false}
          duration={0.8}
          className="sub-header-text  md:w-[40%]"
          words="Whether you're looking to elevate a commercial office space,
          design a cozy yet sophisticated home, or create an inviting atmosphere
          in a hospitality setting, we've got you covered."
        />
      </div>
      <div className="flex flex-col items-center justify-between gap-4 sm:hidden sm:flex-row">
        <div className="relative h-[500px] w-full">
          <div className="h-full w-full ">
            <Image
              src={C}
              alt="commercial space"
              className="h-full object-cover"
            />
          </div>
          <p className="absolute bottom-0 left-[50%] mx-auto mb-7 -translate-x-[50%] transform text-lg font-bold text-white">
            Residences
          </p>
        </div>
        <div className="relative h-[500px] w-full">
          <div className="h-full w-full ">
            <Image
              src={K}
              alt="commercial space"
              className="h-full object-cover"
            />
          </div>
          <p className="absolute bottom-0 left-[50%] mx-auto mb-7 -translate-x-[50%] transform text-lg font-bold text-white">
            Commerical Spaces
          </p>
        </div>
        <div className="relative h-[500px] w-full">
          <div className="h-full w-full ">
            <Image
              src={W}
              alt="commercial space"
              className="h-full object-cover"
            />
          </div>
          <p className="absolute bottom-0 left-[50%] mx-auto mb-7 -translate-x-[50%] transform text-lg font-bold text-white">
            Hospitality
          </p>
        </div>
      </div>
      <ExpertiseScroller />
    </div>
  );
}
