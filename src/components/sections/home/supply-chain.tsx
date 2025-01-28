import kitchenImage from '@/assets/kitchen-image-landscape.webp';
import kitchenImagePortrait from '@/assets/kitchen-image-portrait.webp';
import { motion } from 'framer-motion';
import Image from 'next/image';
import RoundedButton from '../../shared/RoundedButton';
import SectionHeader from '../../shared/SectionHeader';
import { TextGenerateEffect } from '../../ui/text-generate-effect';

export default function SupplyChain() {
  return (
    <div className="container">
      <SectionHeader title="Value Chain" />
      <div className="md:grid-row-2 flex flex-col gap-5 overflow-clip md:grid md:grid-cols-2">
        <motion.div
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 0 0, 0 0)' }}
          whileInView={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
          }}
        >
          <Image
            src={kitchenImage}
            alt="kitchen image"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          className="h-[900px] w-full md:row-span-2"
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 0 0, 0 0)' }}
          whileInView={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 1,
            easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
          }}
        >
          <Image
            src={kitchenImagePortrait}
            alt="kitchen image"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="mt-5 flex h-fit w-full flex-col items-end gap-5 md:gap-10">
          <div className="flex w-full flex-col items-start">
            <TextGenerateEffect
              animation={false}
              words="We are dedicated to crafting furniture using only the finest
              materials. We source our boards, adhesives, and hardware from top
              international suppliers, ensuring each piece meets our high
              standards for durability and aesthetics. By combining the best
              imported materials with in-house manufacturing, we deliver
              superior products that enhance any space with quality and style."
              className="sub-header-text w-5/6"
            />
          </div>
          <RoundedButton
            buttonText="Brands we partner with"
            link="/what-we-do#our-partners"
          />
        </div>
      </div>
    </div>
  );
}
