import apple from '@/assets/company-logos/APPLE.svg';
import iitb from '@/assets/company-logos/IITB.png';
import rbs from '@/assets/company-logos/RBS.png';
import jpmc from '@/assets/company-logos/JPMC.png';
import rothschild from '@/assets/company-logos/ROTHSCHILD.png';
import marriot from '@/assets/company-logos/JWM.png';
import hsbc from '@/assets/company-logos/HSBC.png';
import Image, { StaticImageData } from 'next/image';

export default function ClientCarousel() {
  function HighResImage({
    src,
    alt,
    height,
    className,
    objectFit,
    ...props
  }: {
    src: string | StaticImageData;
    alt: string;
    height: number;
    className?: string;
    objectFit?: string;
  }) {
    return (
      <Image
        src={src}
        alt={alt}
        height={height}
        className={className}
        objectFit={objectFit}
        {...props}
      />
    );
  }

  return (
    <div className="container my-20 flex flex-col gap-y-5">
      <div className="flex gap-x-5 overflow-hidden">
        <HighResImage
          src={iitb}
          alt="Apple Logo"
          height={40}
          objectFit="contain"
        />
        <HighResImage
          src={rbs}
          alt="Royal Bank of Scotland Logo"
          height={22}
          className="w-full object-contain"
        />
        <HighResImage
          src={jpmc}
          alt="Apple Logo"
          height={20}
          className="w-full object-contain"
        />
        <HighResImage src={rothschild} alt="Apple Logo" height={38} />
        <HighResImage src={apple} alt="Apple Logo" height={38} />
        <HighResImage src={marriot} alt="Apple Logo" height={38} />
        <HighResImage src={hsbc} alt="Apple Logo" height={38} />
      </div>
      <div className="flex gap-x-5 overflow-hidden">
        <HighResImage src={rothschild} alt="Apple Logo" height={38} />
        <HighResImage src={apple} alt="Apple Logo" height={38} />
        <HighResImage src={marriot} alt="Apple Logo" height={38} />
        <HighResImage src={hsbc} alt="Apple Logo" height={38} />
      </div>
    </div>
  );
}
