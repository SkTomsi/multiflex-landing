import factory1 from '@/assets/factory/_A1_3033 1-min.webp';
import heroImg from '@/assets/factory/_A1_3119.webp';
import suppliersM from '@/assets/suppliers-mobile.png';
import suppliers from '@/assets/suppliers.png';
import Image from 'next/image';
import { SectionHeader } from '~/components/shared/SectionHeader';
import Factory from './factory';

export default function page() {
  //TODO: Change bottom image

  return (
    <div className="relative mx-0 flex flex-col">
      <div className="minimal-container flex flex-col items-center gap-x-2">
        <h1 className="text-center text-4xl font-extrabold tracking-tighter text-brand-black lg:text-6xl">
          Innovative. Superior. Exceptional.
        </h1>
      </div>

      <div className="minimal-container flex flex-col items-center gap-10 px-0 lg:pl-20">
        {/* <h1 className="text-center text-3xl font-bold tracking-tighter text-brand-black lg:text-5xl">
          LETS BRING YOUR VISION INTO AN EXPERIENCE WITH MULTIFLEX
        </h1> */}
        <div className="flex h-full flex-col gap-x-2  lg:w-full lg:flex-row-reverse lg:justify-between lg:gap-x-20 lg:gap-y-10 ">
          <div className="flex min-h-full w-full flex-col gap-4  lg:w-[80%] lg:flex-row lg:gap-0">
            <div className="h-full w-full lg:mb-40">
              <Image
                src={factory1}
                alt="shirt"
                className="h-full object-cover"
              />
            </div>
            {/* <div className="w-full items-end  lg:-ml-10 lg:mt-40">
              <Image
                src={factory2}
                alt="shirt"
                className="h-full object-cover"
              />
            </div> */}
          </div>
          <div className="mt-8 flex flex-grow flex-col gap-4 px-4 lg:mt-0 lg:w-[50%]">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-xl font-extrabold uppercase tracking-tighter text-primary">
                Precision Engineering
              </h2>
              <p className="sub-header-text">
                At Multiflex, we deliver nearly all our furniture flat-packed
                and precision-engineered to the millimeter. Utilizing advanced
                CNC machines, we ensure each piece is crafted with utmost
                accuracy and convenience in mind, making assembly
                straightforward and hassle-free.
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h2 className="text-xl font-extrabold uppercase tracking-tighter text-primary">
                Premium Materials
              </h2>
              <p className="sub-header-text">
                We prioritize the use of high-grade materials in every piece of
                furniture we create. Our boards, adhesives, and hardware are
                sourced from trusted international suppliers, allowing us to
                provide superior quality products that stand out from locally
                manufactured alternatives.
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h2 className="text-xl font-extrabold uppercase tracking-tighter text-primary">
                Global Sourcing, Local Manufacturing
              </h2>
              <p className="sub-header-text">
                By leveraging a robust global supplier network and economies of
                scale, we bring you premium furniture at competitive prices. Our
                state-of-the-art local manufacturing facilities enable us to
                bypass customs duties on finished products and cut out
                intermediary margins from importers, subsidiaries, distributors,
                dealers, and retailers. These savings are passed directly to
                you, offering exceptional value without compromising on quality.
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h2 className="text-xl font-extrabold uppercase tracking-tighter text-primary">
                Enhancing Your Furniture Experience
              </h2>
              <p className="sub-header-text">
                From precision engineering and premium materials to
                cost-effective local manufacturing, we are dedicated to
                enhancing your furniture experience. At Multiflex, we believe in
                delivering superior quality, convenience, and value, making us
                your go-to choice for exceptional furniture solutions.
              </p>
            </div>
          </div>
        </div>
        <div
          className="minimal-container flex flex-col gap-x-2"
          id="our-partners"
        >
          <SectionHeader
            title="Our Partners"
            description="We partner with suppliers who not only uphold the highest standards of craftsmanship but also share our commitment to ethics, trust, and reliability. Working closely with our supplier network ensures that every single part we produce reflects our dedication to excellence.

By collaborating with suppliers who bring cutting-edge technology and design concepts to the table, we create furniture that meets both functional needs and contemporary design trends.

Our global supplier network enables us to access a wide range of hardware, materials, and expertise. Whether sourcing premium veneers or integrating advanced hardware into our furniture, these partnerships keep us at the forefront of our industry, offering our clients best-in-class products."
          />
          <Image
            src={suppliers}
            alt="hero image"
            className="hidden w-full object-contain px-20 sm:block"
          />
          <Image
            src={suppliersM}
            alt="hero image"
            className="block w-full object-contain sm:hidden"
          />
        </div>
        <Factory />
      </div>
      <Image src={heroImg} alt="shirt" className="w-full object-contain" />
    </div>
  );
}
