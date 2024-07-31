import ExpertiseScroller from '~/components/sections/ExpertiseScroller';
import HeroSection from '~/components/sections/HeroSection';
import ScrollingCardsMobile from '~/components/sections/ScrollingCardsMobile';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExpertiseScroller />
      <ScrollingCardsMobile />
    </>
  );
}
