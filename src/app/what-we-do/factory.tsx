import image1 from '@/assets/factory/_A1_3055-min 1.webp';
import image6 from '@/assets/factory/_A1_3066-min.webp';
import image5 from '@/assets/factory/_A1_3082-min.webp';
import image2 from '@/assets/factory/_A1_3093 1.webp';
import image3 from '@/assets/factory/_A1_3096-min.webp';
import image4 from '@/assets/factory/_A1_3115-min.webp';
import Image from 'next/image';
import { SectionHeader } from '~/components/shared/SectionHeader';

export default function Factory() {
  return (
    <div className="minimal-container flex flex-col items-center gap-x-2 lg:gap-x-20 lg:gap-y-10 ">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="relative h-[500px] w-full">
          <div className="h-full w-full ">
            <Image
              src={image1}
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
              src={image3}
              alt="commercial space"
              className="h-full object-cover"
            />
          </div>
          {/* <p className="absolute bottom-0 left-[50%] mx-auto mb-7 -translate-x-[50%] transform text-lg font-bold text-white">
            Wardrobes
          </p> */}
        </div>
      </div>
      <SectionHeader
        title="Processes"
        subComponent={
          <div className="mx-auto max-w-4xl bg-white">
            <h2 className="mb-3 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              Material Science & Furniture Design
            </h2>
            <p className="sub-header-text mb-3">
              It’s so much more than particleboard, plywood, MDF. Density,
              calibration, screw-holding capacity, relative moisture content,
              all of these things and more play a part in how stable and durable
              your furniture is. We give thought to all of this so that you
              don’t have to.
            </p>

            <h3 className="mb-2 mt-4 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              Integration of Various Raw Materials and Hardware
            </h3>
            <p className="sub-header-text mb-3">
              A truly outstanding piece of furniture integrates glass, metal,
              innovative hardware, adhesives, and even a fusion of parallel
              technologies such as lasers. Accuracy is guaranteed with our CNC
              machines.
            </p>

            <h3 className="mb-2 mt-4 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              Matching of Decor to the Edge
            </h3>
            <p className="sub-header-text mb-3">
              The edge band and panels are of the same material. With MultiFlex,
              you will always get a matching acrylic edge to your acrylic
              surfaces and veneer edges to your veneer frontals, and so on
              avoiding any discolouration over time.
            </p>

            <h3 className="mb-2 mt-4 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              0 Edge Technology
            </h3>
            <p className="sub-header-text mb-3">
              The panels we produce are edgebanded without a glue-line, and this
              is what we proudly call our Zero-edge technology.
            </p>

            <h3 className="mb-2 mt-4 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              Robotic Polish
            </h3>
            <p className="sub-header-text mb-3">
              No manual processing ensures uniform coating on all polished
              panels you obtain from us, be it today or ten years down the line!
            </p>

            <h3 className="mb-2 mt-4 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              Dry Fit
            </h3>
            <p className="sub-header-text mb-3">
              Our flat-pack furniture is delivered to your site pre-drilled, so
              that all it takes is a technician (or two) with a small handheld
              power tool to assemble your fixtures within a day or two. Going
              with us makes your entire furniture experience lightning quick,
              easy, and clean.
            </p>
          </div>
        }
      />
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="relative h-[500px] w-full">
          <div className="h-full w-full ">
            <Image
              src={image4}
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
              src={image5}
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
              src={image6}
              alt="commercial space"
              className="h-full object-cover"
            />
          </div>
          {/* <p className="absolute bottom-0 left-[50%] mx-auto mb-7 -translate-x-[50%] transform text-lg font-bold text-white">
            Wardrobes
          </p> */}
        </div>
      </div>
      <SectionHeader
        title="Standards"
        subComponent={
          <div className="mx-auto max-w-4xl bg-white ">
            <h2 className="mb-3 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              Quality Standards in Furniture
            </h2>
            <p className="sub-header-text mb-3">
              E1 standards - We follow E1 (European grade) or better standards
              for formaldehyde emissions, so you can rest assured that our
              furniture will be safe for use in homes with the elderly, young or
              those with breathing issues.
            </p>

            <h3 className="mb-2 mt-4 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              Food Grade Lacquer
            </h3>
            <p className="sub-header-text mb-3">
              The lacquers we use by default are food-grade, meaning absolutely
              no toxins!
            </p>

            <h3 className="mb-2 mt-4 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              FSC Certification
            </h3>
            <p className="sub-header-text mb-3">
              Forest Stewardship Council certification is what we insist on for
              all our wooden raw material, so be assured that the furniture you
              obtain from us is as ethically-sourced and sustainable.
            </p>

            <h3 className="mb-2 mt-4 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              Lifetime Warranty on Hardware
            </h3>
            <p className="sub-header-text mb-3">
              The hardware brands we utilize are world leaders, many of which
              offer lifetime warranties on their products!
            </p>

            <h3 className="mb-2 mt-4 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              Glues
            </h3>
            <p className="sub-header-text mb-3">
              There are thousands of different adhesives for different
              applications, and we ensure we tailor the adhesives we use for the
              perfect application required.
            </p>

            <h3 className="mb-2 mt-4 text-base font-extrabold uppercase tracking-tighter text-primary md:text-xl">
              Calibrated Boards
            </h3>
            <p className="sub-header-text mb-3">
              Perfectly calibrated imported boards mean your furniture will be
              entirely free from ugly offsets.
            </p>
          </div>
        }
      />
    </div>
  );
}
