import apple from '@/assets/company-logos/APPLE.png';
import iitb from '@/assets/company-logos/IITB.png';
import rbs from '@/assets/company-logos/RBS.png';
import jpmc from '@/assets/company-logos/JPMC.png';
import rothschild from '@/assets/company-logos/ROTHSCHILD.png';
import marriot from '@/assets/company-logos/JWM.png';
import hsbc from '@/assets/company-logos/HSBC.png';
import Image from 'next/image';

export default function ClientCarousel() {
  return (
    <div className="container my-20">
      <div className="flex gap-x-5 overflow-hidden">
        <Image src={iitb} alt="Apple Logo" height={40} objectFit="contain" />
        <Image
          src={rbs}
          alt="Royal Bank of Scotland Logo"
          height={22}
          className="w-full object-contain"
        />
        <Image
          src={jpmc}
          alt="Apple Logo"
          height={20}
          className="w-full object-contain"
        />
        <Image src={rothschild} alt="Apple Logo" height={38} />
        <Image src={apple} alt="Apple Logo" height={38} />
        <Image src={marriot} alt="Apple Logo" height={38} />
        <Image src={hsbc} alt="Apple Logo" height={38} />
      </div>
    </div>
  );
}
