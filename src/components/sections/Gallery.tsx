import { GalleryImages } from '~/assets/gallery';
import RoundedButton from '../shared/RoundedButton';
import Image from 'next/image';

export function Gallery() {
  return (
    <div className="container my-20 flex flex-col items-center">
      <div className="mb-12 flex flex-col items-center gap-y-2">
        <div className=" text-lg font-medium text-primary">
          Crafted with tradition and &#x2661;
        </div>
        <RoundedButton buttonText="Our Gallery" />
      </div>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
        <div className="grid gap-10">
          {GalleryImages.slice(0, 5).map((image, i) => (
            <Image
              src={image}
              alt="GalleryImage"
              key={i}
              className="h-[250px] w-full object-cover"
            />
          ))}
        </div>
        <div className="mt-[100px] grid gap-10">
          {GalleryImages.slice(6, 11).map((image, i) => (
            <Image
              src={image}
              alt="GalleryImage"
              key={i}
              className="h-[250px] w-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
