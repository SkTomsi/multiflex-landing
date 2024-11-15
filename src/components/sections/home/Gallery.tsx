import Image from 'next/image';
import { GalleryImages } from '~/assets/gallery';
import RoundedButton from '../../shared/RoundedButton';

export function Gallery() {
  return (
    <div className="container  my-20 flex flex-col items-center">
      <div className="mb-12 flex flex-col items-center gap-y-2">
        <div className=" text-lg font-medium text-primary">
          Crafted with tradition and &#x2661;
        </div>
        <RoundedButton buttonText="Our Gallery" />
      </div>
      {/* <div className="grid grid-cols-2 gap-20 md:grid-cols-3">
        <div className="grid gap-20">
          {GalleryImages.residences.map((image, i) => (
            <Image
              src={image}
              alt="GalleryImage"
              key={i}
              className="h-[350px] w-full object-cover "
            />
          ))}
        </div>
        <div className="grid gap-20">
          {GalleryImages.commercial.map((image, i) => (
            <Image
              src={image}
              alt="GalleryImage"
              key={i}
              className="h-[350px] w-full object-cover "
            />
          ))}
        </div>
      </div> */}
      <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-1 lg:grid-cols-3">
        <div className="grid h-fit gap-6 md:gap-12">
          <p className="w-full text-center font-bold tracking-tight text-brand-primary">
            Residencial Spaces
          </p>
          {GalleryImages.residences.map((image, i) => (
            <Image
              src={image}
              alt="GalleryImage"
              key={i}
              className="h-[350px] w-full rounded-xl object-cover"
            />
          ))}
        </div>
        <div className="grid h-fit gap-6 sm:mt-20 md:gap-12">
          <p className="w-full text-center font-bold tracking-tight text-brand-primary">
            Commercial Spaces
          </p>
          {GalleryImages.commercial.map((image, i) => (
            <Image
              src={image}
              alt="GalleryImage"
              key={i}
              className="h-[350px] w-full rounded-xl object-cover"
            />
          ))}
        </div>
        <div className="grid h-fit gap-6 md:gap-12 ">
          <p className="w-full text-center font-bold tracking-tight text-brand-primary">
            Hospitality
          </p>
          {GalleryImages.hospitality.map((image, i) => (
            <Image
              src={image}
              alt="GalleryImage"
              key={i}
              className="h-[350px] w-full rounded-xl object-cover "
            />
          ))}
        </div>
      </div>
    </div>
  );
}
