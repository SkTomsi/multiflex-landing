import ClientCarousel from '~/components/sections/ClientCarousel';
import HeroSection from '~/components/sections/HeroSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <ExpertiseScroller /> */}
      {/* <ScrollingCardsMobile /> */}
      <ClientCarousel />
    </>
  );
}
