import LogoImg from '@/assets/Multiflex-Black.svg';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <div className="container my-0 py-2 md:max-w-[1400px]">
      <nav className="flex h-[7vh] w-full items-center justify-between">
        <Link href={'/'}>
          <Image
            src={LogoImg}
            alt="Multiflex Logo"
            className="h-14 w-fit object-contain"
          />
        </Link>
        <div className="hidden items-center gap-x-5 text-sm font-bold md:flex">
          <Link href={'/who-we-are'}>
            <Button
              className="rounded-full bg-transparent text-black/50 hover:bg-primary hover:text-white"
              size={'sm'}
            >
              Who We Are
            </Button>
          </Link>
          <Link href={'/what-we-do'}>
            <Button
              className="rounded-full bg-transparent text-black/50 hover:bg-primary hover:text-white"
              size={'sm'}
            >
              What We Do
            </Button>
          </Link>
        </div>
        <Link href={'/get-in-touch'}>
          <Button className="hidden rounded-full bg-transparent text-black/50 hover:bg-primary hover:text-white md:block">
            Get In Touch
          </Button>
        </Link>
        <div className="md:hidden">
          <Menu />
        </div>
      </nav>
    </div>
  );
}
