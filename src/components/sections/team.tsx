import Image, { StaticImageData } from 'next/image';
import teamImg from '@/assets/team-full.webp';
import AshokQuadrosImg from '@/assets/ashok-quadros.webp';
import adtiyaImg from '@/assets/aditya.webp';
import anandImg from '@/assets/anand-quadros.webp';
import glennImg from '@/assets/glenn.webp';
import reubenImg from '@/assets/reuben.webp';
import josephImg from '@/assets/joseph.webp';
import nehaImg from '@/assets/neha.webp';

const TeamCard = ({
  img,
  name,
  designation,
  isEmpty,
}: {
  img?: StaticImageData;
  name?: string;
  designation?: string;
  isEmpty?: boolean;
}) => {
  if (isEmpty) {
    return <div className="hidden md:block" />;
  }

  return (
    <div className="flex flex-col gap-2 p-4 ">
      <Image src={img!} alt="ashok quadros" className="w-full object-contain" />
      <div className="p-1">
        <p className="text-base font-semibold text-brand-black">{name}</p>
        <p className="text-xs font-normal text-brand-grey md:text-sm">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <div className="container space-y-[40px] md:space-y-[80px]">
      <h3>These are the people who make sure you get the best experience</h3>
      <div className="flex w-full flex-col gap-6 md:grid md:grid-cols-2 md:gap-20">
        <Image
          src={teamImg}
          alt="team image"
          className="h-full w-full object-contain"
        />
        <div className="flex flex-col gap-y-8 md:gap-y-20 md:px-10">
          <p className="sub-header-text">
            At Multiflex, we believe that our team is our greatest asset. Our
            success story is written by the hands and minds of dedicated
            professionals who bring our vision to life every day.
          </p>
          <div className="grid grid-rows-3 gap-y-2">
            <p className="w-fit rounded-full bg-brand-grey px-16 py-5 text-sm text-white md:px-40 md:py-5">
              Architects
            </p>
            <p className="w-fit justify-self-end rounded-full bg-brand-foreground px-16 py-5 text-sm text-brand-primary md:px-24 md:py-5">
              Material Specialists
            </p>
            <div className="flex justify-between">
              <p className="w-fit rounded-full bg-brand-primary px-12 py-5 text-sm text-brand-foreground md:px-20 md:py-5">
                Designers
              </p>
              <p className="w-fit rounded-full bg-brand-black px-8 py-5 text-sm text-white md:px-14 md:py-5">
                Artisans
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-2 md:grid-cols-5">
        <TeamCard
          img={AshokQuadrosImg}
          name="Ashok Quadros"
          designation="Co-Founder (Customer Interface, Marketing)"
        />
        <TeamCard
          img={anandImg}
          name="Anand Quadros"
          designation="Co-Founder (Procurement, Logistics, Supplier Interface)"
        />

        <TeamCard
          img={josephImg}
          name="Joseph Noronha"
          designation="Head of Department (QC, Installation and Dispatch)"
        />
        <TeamCard isEmpty />
        <TeamCard
          img={reubenImg}
          name="Reuben Lobo"
          designation="Head of Department (Engineering)"
        />
        <TeamCard
          img={nehaImg}
          name="Neha Jhunhunwala Eidnani"
          designation="Customer Interface and Marketing Head"
        />
        <TeamCard isEmpty />
        <TeamCard
          img={glennImg}
          name="Glenn"
          designation="Design & Engineering"
        />
        <TeamCard
          img={adtiyaImg}
          name="Adtiya"
          designation="Design & Engineering"
        />
        <TeamCard isEmpty />
      </div>
    </div>
  );
}
