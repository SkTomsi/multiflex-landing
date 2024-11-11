'use client';

import projectImg from '@/assets/wardrobe.webp';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import SectionHeader from '~/components/shared/SectionHeader';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

export default function Projects() {
  function ProjectCard() {
    return (
      <div className="flex w-full flex-col items-start space-y-5 md:space-y-10 lg:px-52">
        <Image src={projectImg} alt="project-1" className="h-full w-full" />

        <div className="mt-4 flex-1 space-y-5 md:mt-2 md:space-y-5">
          <p className="text-[24px] font-bold tracking-tighter text-brand-black md:text-[32px]">
            The Wardrobe
          </p>
          {/* <p className="sub-header-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </p> */}
          {/* <div className="mt-10 h-[1px] w-full bg-brand-grey-secondary/50" /> */}
          <div className="flex w-full justify-start gap-x-4">
            <p className="rounded-full border border-brand-grey px-8 py-2 text-sm">
              Residential
            </p>
            <p className="rounded-full border border-brand-grey px-8 py-2 text-sm">
              2024
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="flex flex-col items-center space-y-5 md:space-y-14">
        <div className="flex w-full sm:justify-start md:justify-end">
          <SectionHeader title="Our Projects" />
        </div>
        <Carousel
          className="w-full max-w-[1200px]"
          plugins={[
            Autoplay({
              delay: 4000,
              jump: false,
              playOnInit: false,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <ProjectCard />
            </CarouselItem>
            <CarouselItem>
              <ProjectCard />
            </CarouselItem>
            <CarouselItem>
              <ProjectCard />
            </CarouselItem>
            <CarouselItem>
              <ProjectCard />
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
