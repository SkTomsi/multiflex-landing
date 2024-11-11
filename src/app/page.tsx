'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Clients from '~/components/sections/home/clients';
import Contact from '~/components/sections/home/contact';
import Hero from '~/components/sections/home/hero';
import History from '~/components/sections/home/history-stats';
import Projects from '~/components/sections/home/projects';
import ScopeOfWork from '~/components/sections/home/scope-of-work';
// import ScopeOfWork from '~/components/sections/home/scope-of-work';
import SupplyChain from '~/components/sections/home/supply-chain';
import Team from '~/components/sections/home/team';

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="relative mx-0 flex flex-col items-center">
      <Hero scrollYProgress={scrollYProgress} />
      <Clients />
      <SupplyChain />
      <ScopeOfWork />
      <History />
      <Projects />
      <Team />
      <Contact />
    </div>
  );
}
