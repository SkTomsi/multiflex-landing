import ClientCarousel from './ClientCarousel';
import SectionHeader from '../../shared/SectionHeader';
import { TextGenerateEffect } from '../../ui/text-generate-effect';

export default function Clients() {
  return (
    <div className="container bg-white">
      <div className="flex flex-col space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0">
        <SectionHeader title="Our Clients" />
        <TextGenerateEffect
          words="Your convenience and satisfaction are our top priorities. We design
          and deliver furniture with maximum efficiency—knock-down, flat-pack,
          and pre-engineered. By cutting unnecessary costs and streamlining
          production, we ensure you get the best value without compromising on
          quality."
          className="sub-header-text md:w-[40%]"
        />
      </div>
      <ClientCarousel />
    </div>
  );
}
