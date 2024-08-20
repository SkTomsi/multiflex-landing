import ClientCarousel from '~/components/sections/ClientCarousel';
import { Gallery } from '~/components/sections/Gallery';
import HeroSection from '~/components/sections/HeroSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <ExpertiseScroller /> */}
      {/* <ScrollingCardsMobile /> */}
      <ClientCarousel />
      <Gallery />
    </>
  );
}
