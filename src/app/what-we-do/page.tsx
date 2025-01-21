import shirtimg from '@/assets/Shirt.webp';
import heroImg from '@/assets/hero-image-WWD.webp';
import suppliersM from '@/assets/suppliers-mobile.png';
import suppliers from '@/assets/suppliers.png';
import Image from 'next/image';
import { SectionHeader } from '~/components/shared/SectionHeader';

export default function page() {
  return (
    <div className="relative mx-0 flex flex-col">
      <div className="minimal-container flex flex-col items-center gap-x-2">
        <h1 className="text-center text-4xl font-extrabold tracking-tighter text-brand-black lg:text-6xl">
          Innovative. Superior. Exceptional.
        </h1>
        <Image src={heroImg} alt="shirt" className="w-full object-contain" />
      </div>

      <div className="minimal-container mt-20 flex flex-col items-center gap-10">
        {/* <h1 className="text-center text-3xl font-bold tracking-tighter text-brand-black lg:text-5xl">
          LETS BRING YOUR VISION INTO AN EXPERIENCE WITH MULTIFLEX
        </h1> */}
        <div className="flex flex-col gap-x-2 lg:w-full lg:max-w-[1200px] lg:flex-row lg:justify-between  lg:gap-x-20 lg:gap-y-10">
          <Image
            src={shirtimg}
            alt="shirt"
            className="object-contain lg:w-[40%]"
          />
          <div className="mt-8 flex flex-col gap-4 lg:mt-0 lg:w-[60%]">
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
      </div>
    </div>
  );
}
