'use client';

import ResidencyImg from '@/assets/Cover Photo 1.webp';
import Image from 'next/image';

export default function ScrollingCardsMobile() {
  return (
    <div className="container max-w-[1200px]">
      <div className="h-[200vh]">
        <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center">
          <Image src={ResidencyImg} alt="Residency Image" />
        </div>
      </div>
    </div>
  );
}
