import shirtimg from '@/assets/Shirt.webp';
import heroImg from '@/assets/hero-image-WWD.webp';
import Image from 'next/image';

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
      </div>
    </div>
  );
}
