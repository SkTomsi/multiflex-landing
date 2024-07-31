import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <div className="container py-2">
      <nav className="flex h-[7vh] w-full items-center justify-between">
        <Link href={'/'}>
          <h1 className="text-[20px] font-extrabold tracking-tighter md:text-[24px]">
            Multiflex
          </h1>
        </Link>
        <div>
          <Menu />
        </div>
      </nav>
    </div>
  );
}
