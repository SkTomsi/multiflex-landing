/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image';
import { Button } from '../ui/button';
import STARTQUOTE from '@/assets/quote-start.svg';
import ENDQUOTE from '@/assets/quote-end.svg';
import heroImg from '@/assets/hero-image.jpg';

export default function HeroSection() {
  return (
    <div className="container md:max-w-[1240px]">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <div className=" z-10 mt-10 flex flex-col items-center text-center md:mt-32 md:items-start">
          <p className="text-balance text-center text-5xl font-extrabold leading-[109%] -tracking-[0.08em] md:text-start md:text-[70px]">
            Crafting Premium Modular Furniture
          </p>
          <p className="mt-2 text-balance text-center text-base font-light md:text-left">
            we blend tradition and innovation to transform spaces with
            precision-crafted modular designs
          </p>
          <Button
            className="mt-6 rounded-full transition duration-300"
            variant={'default'}
          >
            Discover More
          </Button>
        </div>

        <div className="my-10 h-[510px] w-full  bg-gray-500 drop-shadow-[16px_16px_rgba(0,0,0,1)] md:-ml-[100px] md:h-[700px] md:w-[1200px]">
          <Image
            src={heroImg}
            className="h-full object-cover"
            alt="hero image"
          />
        </div>
      </div>
      <div className="relative my-5 flex flex-col items-center gap-y-4">
        <div className="absolute left-8">
          <Image src={STARTQUOTE} alt="Quote" className="size-4" />
        </div>
        <p className="text-balance text-center text-sm">
          We have been proposing Multiflex as our manufacturers for high-end
          veneer for over 15 years
        </p>
        <div className="absolute bottom-8 right-3">
          <Image src={ENDQUOTE} alt="Quote" className="size-4" />
        </div>
        <p className="text-sm font-extrabold tracking-tighter">
          Design Sparks, Interiors and Architecture
        </p>
      </div>
      <div className="absolute inset-0 -z-20 bg-[url(/assets/lines.svg)] bg-top opacity-55"></div>
    </div>
  );
}
