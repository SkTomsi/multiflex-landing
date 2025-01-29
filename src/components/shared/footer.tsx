import LogoImg from '@/assets/Multiflex-white.svg';
import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full overflow-hidden text-gray-400">
      <div className="divide container mx-auto flex w-full flex-col items-start gap-5 border-none bg-black md:p-12 ">
        <div className="flex w-full items-start justify-between">
          <div className="flex w-full flex-col items-start justify-between gap-5 md:flex-row">
            <div className="mb-6 w-full md:mb-0">
              <Image
                src={LogoImg}
                alt="Multiflex Logo"
                className="h-20 w-fit object-contain"
              />
              <p className="text-sm">
                Plot No R-926, Off. Thane - Belapur Road, <br></br>T.T.C.
                Industrial Area, MIDC Industrial Area, <br></br> Rabale, Navi
                Mumbai, Maharashtra 400701
              </p>
            </div>
            <div className="flex w-full flex-col gap-10">
              <div className="flex flex-col gap-2">
                <p className="w-fit text-sm font-bold uppercase text-white">
                  Links
                </p>
                <div className="flex w-fit flex-col gap-4 text-sm">
                  <Link href={'/'}>Home</Link>
                  <Link href={'/who-we-are'}>Who We Are</Link>
                  <Link href={'/what-we-do'}>What We Do</Link>
                  <Link href={'/get-in-touch'}>Get In Touch</Link>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold uppercase text-white">
                  say hello
                </p>
                <p className="text-sm lg:w-[50%]">
                  If you are interested in working with us or just want to say
                  hello to us, simply drop us a line
                </p>
                <a href="mailto:hello@multiflexmodular.com">
                  <p className="font-medium text-white ">
                    hello@multiflexmodular.com
                  </p>
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="text-sm font-bold uppercase text-white">
                  Our Office
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.36669346042!2d73.00219680000001!3d19.145712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c11f3c7aa369%3A0x70231cb0cf72839e!2sMultiFlex!5e0!3m2!1sen!2sin!4v1727107760237!5m2!1sen!2sin"
                  width="200"
                  height="200"
                  style={{ border: '0' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex w-full flex-col gap-5">
                <p className="text-sm font-bold uppercase text-white">
                  Socials
                </p>
                <div className="flex items-center">
                  <a href="#" className="mr-2">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/multiflexofficial/"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-2"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="w-full border-t-brand-grey-secondary text-sm">
          &copy; Multiflex LIMITED. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
