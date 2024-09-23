import ExpertiseScroller from './ExpertiseScroller';

export default function ScopeOfWork() {
  return (
    <div className="container">
      <div className="space-y-5 md:flex md:flex-row-reverse md:items-start md:justify-between">
        <h3>Our Scope of Work</h3>
        <p className="sub-header-text md:w-[40%]">
          Whether you&apos;re looking to elevate a commercial office space,
          design a cozy yet sophisticated home, or create an inviting atmosphere
          in a hospitality setting, we&apos;ve got you covered.
        </p>
      </div>
      <ExpertiseScroller />
    </div>
  );
}
