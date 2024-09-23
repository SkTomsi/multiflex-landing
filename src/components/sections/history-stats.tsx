import tvUnit from '@/assets/tv-unit.webp';
import Image from 'next/image';

export default function History() {
  return (
    <div className="container">
      <h3>Family-crafted excellence since 1989</h3>
      <div className="flex flex-col items-center gap-y-5 md:grid md:grid-cols-2 md:gap-40">
        <Image
          src={tvUnit}
          alt="tv-unit"
          className="order-0 h-full w-full object-cover"
        />
        <div className="space-y-4 md:flex md:h-full md:flex-col md:items-center md:space-y-20">
          <div className="sub-header-text space-y-2 border-b border-brand-grey-secondary pb-9 md:pb-20">
            <p>
              Founded by brothers Ashok and Anand Quadros, our journey began
              with the formation of the Quadros group in 1989. We entered panel
              processing in 1995, and in 2000, we established MultiFlex, our
              fully-automated CNC factory.
            </p>
            <p>
              Today, we offer multiple processing lines and a dedicated
              production line for advanced finishes, serving prestigious clients
              with our expertise in premium modular furniture.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 md:col-span-2 md:gap-10">
            <div className="flex flex-col gap-y-1 p-4">
              <p className="stat-text">35+ years</p>
              <p className="sm-subheader-text">
                of being pioneers in the industry
              </p>
            </div>
            <div className=" flex flex-col gap-y-1 p-4">
              <p className="stat-text">5500+</p>
              <p className="sm-subheader-text">projects completed till date</p>
            </div>
            <div className="flex flex-col gap-y-1 p-4 md:border-t md:border-brand-grey-secondary md:pt-20">
              <p className="stat-text">All</p>
              <p className="sm-subheader-text">happy clients (:P)</p>
            </div>
            <div className="flex flex-col gap-y-1 p-4 md:border-t md:border-brand-grey-secondary md:pt-20">
              <p className="stat-text">100%</p>
              <p className="sm-subheader-text">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
