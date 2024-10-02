import ClientCarousel from '../ClientCarousel';

export default function Clients() {
  return (
    <div className="container">
      <div className="flex flex-col space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0">
        <h3>Our Clients</h3>
        <p className="sub-header-text md:w-[40%]">
          Your convenience and satisfaction are our top priorities. We design
          and deliver furniture with maximum efficiency—knock-down, flat-pack,
          and pre-engineered. By cutting unnecessary costs and streamlining
          production, we ensure you get the best value without compromising on
          quality.
        </p>
      </div>
      <ClientCarousel />
    </div>
  );
}
