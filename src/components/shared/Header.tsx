import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <div className="container my-0 py-2 md:max-w-[1400px]">
      <nav className="flex h-[7vh] w-full items-center justify-between">
        <Link href={'/'}>
          <h1 className="text-[20px] font-extrabold tracking-tighter md:text-[24px]">
            Multiflex
          </h1>
        </Link>
        <div className="hidden items-center gap-x-5 text-sm font-bold md:flex">
          <Link href={''}>
            <Button
              className="rounded-full bg-transparent text-black/50 hover:bg-primary hover:text-white"
              size={'sm'}
            >
              Who we are
            </Button>
          </Link>
          <Link href={''}>
            <Button
              className="rounded-full bg-transparent text-black/50 hover:bg-primary hover:text-white"
              size={'sm'}
            >
              What we do
            </Button>
          </Link>
        </div>
        <Button className="hidden rounded-full bg-transparent text-black/50 hover:bg-primary hover:text-white md:block">
          Contact Us
        </Button>
        <div className="md:hidden">
          <Menu />
        </div>
      </nav>
    </div>
  );
}
