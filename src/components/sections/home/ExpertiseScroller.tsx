import { Hospitability, Offices, Residencies } from '../../features/card';
import { FeatureTitle } from '../../features/title';

export default function ExpertiseScroller() {
  const features = [
    { title: 'Residencies', card: Residencies },
    { title: 'Commercial Spaces', card: Offices },
    { title: 'Hospitality', card: Hospitability },
  ];
  return (
    <section className="hidden md:block">
      {/* Features */}
      <div className="flex w-full items-start p-10">
        <div className="w-[50%] py-[40vh]">
          <ul className="w-fit">
            {features.map((feature) => (
              <li key={feature.title} className="w-fit">
                <FeatureTitle title={feature.title}>
                  {feature.title}
                </FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square h-[600px] w-full">
            {features.map((feature) => (
              <feature.card key={feature.title} title={feature.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
