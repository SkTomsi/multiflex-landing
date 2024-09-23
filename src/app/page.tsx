import Clients from '~/components/sections/clients';
import Hero from '~/components/sections/hero';
import ScopeOfWork from '~/components/sections/scope-of-work';
import SupplyChain from '~/components/sections/supply-chain';

export default function HomePage() {
  return (
    <div className="mx-0 flex flex-col items-center">
      <Hero />
      <Clients />
      <SupplyChain />
      <ScopeOfWork />
    </div>
  );
}
