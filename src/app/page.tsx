import Clients from '~/components/sections/clients';
import Contact from '~/components/sections/contact';
import Hero from '~/components/sections/hero';
import History from '~/components/sections/history-stats';
import Projects from '~/components/sections/projects';
import ScopeOfWork from '~/components/sections/scope-of-work';
import SupplyChain from '~/components/sections/supply-chain';
import Team from '~/components/sections/team';

export default function HomePage() {
  return (
    <div className="mx-0 flex flex-col items-center">
      <Hero />
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
