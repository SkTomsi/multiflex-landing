import Image from 'next/image';
import heroImage from '@/assets/hero-image.webp';

export default function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center overflow-auto border-none">
        <h1 className="text-4xl font-medium uppercase tracking-tight text-brand-black md:text-hero-text">
          Unrivalled Craftsmanship and Precision Engineering
        </h1>
        <div className="mt-5 flex flex-col space-y-10 md:mt-14 md:flex-row md:items-start md:justify-between md:space-y-0">
          <div className="flex w-full gap-x-5 text-xs">
            <p className="w-fit rounded-full  border border-brand-primary px-4 py-1 font-medium text-brand-primary md:py-2 md:text-base">
              Residential
            </p>
            <p className="w-fit rounded-full border border-brand-primary px-4 py-1 font-medium text-brand-primary md:py-2 md:text-base">
              Commerical
            </p>
            <p className="w-fit rounded-full border border-brand-primary px-4 py-1 font-medium text-brand-primary md:py-2 md:text-base">
              Hospitality
            </p>
          </div>
          <p className="sub-header-text">
            Since 1989, Multiflex has been crafting premium furniture with
            cutting-edge CNC technology. Discover the perfect blend of expertise
            and advanced finishes, all made with precision and care.
          </p>
        </div>
      </div>
      <div className="relative mt-10 h-full w-full">
        <Image
          src={heroImage}
          alt="hero image"
          className="h-[300px] w-full object-cover object-right md:h-auto"
        />
      </div>
      <div className="absolute inset-0 z-20 bg-[url(/assets/lines.svg)] bg-top opacity-55"></div>
    </div>
  );
}
