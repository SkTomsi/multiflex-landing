import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { easings } from '~/lib/utils';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { url: '/who-we-are', text: 'Who We Are' },
    { url: '/what-we-do', text: 'What We Do' },
    { url: '/get-in-touch', text: 'Get In Touch' },
  ];

  return (
    <div className="relative ">
      <motion.button
        className="block rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 md:hidden"
        onClick={toggleMenu}
        animate={{
          scale: isOpen ? 0.8 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.button>

      {isOpen && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#c6a477]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3, ease: easings.easeInOutQuint },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 1, ease: easings.easeOutQuart },
            }}
          >
            <motion.nav
              className="relative flex h-full w-full flex-col justify-start p-20"
              initial={{ y: '-100%' }}
              animate={{
                y: 0,
                transition: { duration: 1, ease: easings.easeOutQuart },
              }}
              exit={{
                y: '-100%',
                transition: { duration: 1, ease: easings.easeOutQuart },
              }}
            >
              <motion.button
                className="absolute right-4 top-4 rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={toggleMenu}
              >
                <X className="h-6 w-6" />
              </motion.button>
              <motion.ul
                exit={{ opacity: 0, transition: { duration: 0 } }}
                className="flex flex-col gap-6"
              >
                {navItems.map(({ url, text }, idx) => (
                  <Link href={url} key={idx} onClick={() => setIsOpen(false)}>
                    <h1 className="flex-1 text-4xl uppercase tracking-wide sm:text-5xl md:text-6xl">
                      {text}
                    </h1>
                  </Link>
                ))}
              </motion.ul>
            </motion.nav>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default MobileMenu;
