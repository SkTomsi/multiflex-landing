import LogoImg from '@/assets/Multiflex-white.svg';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full text-gray-400">
      <div className="divide container mx-auto flex w-full flex-col items-start gap-5 border-none bg-black md:p-12 ">
        <div className="flex w-full flex-col items-start justify-between gap-5 md:flex-row">
          <div className="mb-6 md:mb-0">
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
          <div className="flex flex-col items-start md:items-end">
            <div className="mb-4">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="rounded-l-full bg-gray-800 px-4 py-2 text-white"
                />
                <button className="rounded-r-full bg-white px-4 py-2 font-semibold text-black">
                  Join Now
                </button>
              </form>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.36669346042!2d73.00219680000001!3d19.145712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c11f3c7aa369%3A0x70231cb0cf72839e!2sMultiFlex!5e0!3m2!1sen!2sin!4v1727107760237!5m2!1sen!2sin"
            width="300"
            height="300"
            style={{ border: '0' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex w-full flex-col justify-between pt-4 md:flex-row-reverse md:items-center">
          <div className="flex items-center">
            <a
              href="mailto:hello@multiflexmodular.com"
              className="mr-4 text-sm"
            >
              hello@multiflexmodular.com
            </a>
            <a href="#" className="mr-2">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="mr-2">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4 text-sm">
            &copy; Multiflex LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
