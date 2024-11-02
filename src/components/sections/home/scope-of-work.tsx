import SectionHeader from '~/components/shared/SectionHeader';
import { TextGenerateEffect } from '~/components/ui/text-generate-effect';
import ExpertiseScroller from './ExpertiseScroller';

export default function ScopeOfWork() {
  return (
    <div className="container">
      <div className="space-y-5 md:flex md:flex-row-reverse md:items-start md:justify-between">
        <SectionHeader title="What We Do" />
        <TextGenerateEffect
          filter={false}
          animation={false}
          duration={0.8}
          className="sub-header-text md:w-[40%]"
          words="Whether you're looking to elevate a commercial office space,
          design a cozy yet sophisticated home, or create an inviting atmosphere
          in a hospitality setting, we've got you covered."
        />
      </div>
      <ExpertiseScroller />
    </div>
  );
}
