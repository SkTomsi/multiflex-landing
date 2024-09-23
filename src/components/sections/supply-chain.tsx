import kitchenImage from '@/assets/kitchen-image-landscape.webp';
import kitchenImagePortrait from '@/assets/kitchen-image-portrait.webp';
import Image from 'next/image';
import RoundedButton from '../shared/RoundedButton';

export default function SupplyChain() {
  return (
    <div className="container">
      <h3>Supply Chain</h3>
      <div className="md:grid-row-2 flex flex-col gap-5 overflow-clip md:grid md:grid-cols-2">
        <Image
          src={kitchenImage}
          alt="kitchen image"
          className="h-full w-full object-cover"
        />
        <div className="h-[900px] w-full md:row-span-2">
          <Image
            src={kitchenImagePortrait}
            alt="kitchen image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-5 flex h-fit w-full flex-col items-end gap-5 md:gap-10">
          <div className="flex w-full flex-col items-start">
            <p className="sub-header-text w-5/6">
              We are dedicated to crafting furniture using only the finest
              materials. We source our boards, adhesives, and hardware from top
              international suppliers, ensuring each piece meets our high
              standards for durability and aesthetics. By combining the best
              imported materials with localized manufacturing, we deliver
              superior products that enhance any space with quality and style.
            </p>
          </div>
          <RoundedButton buttonText="Brands we partner with" />
        </div>
      </div>
    </div>
  );
}
