import SectionHeader from '../../shared/SectionHeader';
import { TextGenerateEffect } from '../../ui/text-generate-effect';
import ClientCarousel from './ClientCarousel';

export default function Clients() {
  return (
    <div className="container bg-white">
      <div className="flex flex-col space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0">
        <SectionHeader title="Our Clients" />
        <TextGenerateEffect
          animation={false}
          words="We’ve been privileged to serve a truly distinguished roster of multinational clients that span the spectrum from hospitality and education to healthcare, retail, banking and beyond."
          className="sub-header-text md:w-[40%]"
        />
      </div>
      <ClientCarousel />
    </div>
  );
}
