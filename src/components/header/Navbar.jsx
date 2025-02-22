import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const FarmConnectLogo = () => (
  <motion.div
    className="w-12 h-12 overflow-hidden rounded-full"
    animate={{ 
      rotate: [0, 2, -2, 2, 0],
      scale: [1, 1.05, 0.95, 1.05, 1]
    }}
    transition={{ 
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <img 
      src="https://i.ibb.co/fdV13qmt/Screenshot-2025-01-30-230904.png"
      alt="FarmConnect Logo" 
      className="w-full h-full object-cover"
    />
  </motion.div>
);

const NavItem = ({ item, scrolled }) => (
  <motion.div
    whileHover={{ 
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.3 }
    }}
    whileTap={{ scale: 0.9 }}
  >
    <Link
      to={item.to}
      className={`relative px-3 py-2 text-sm font-medium group overflow-hidden ${
        scrolled ? 'text-green-800' : 'text-green-600'
      }`}
    >
      <span className="relative z-10">{item.name}</span>
      <motion.span 
        className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-300 rounded-lg opacity-0"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  </motion.div>
);

const ActionButton = ({ to, variant, scrolled, children }) => (
  <motion.div
    whileHover={{ 
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
    }}
    whileTap={{ scale: 0.9 }}
  >
    <Link
      to={to}
      className={`
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white'
          : scrolled 
            ? 'bg-green-100 text-green-800 hover:bg-green-200'
            : 'bg-white/20 text-green-800 hover:bg-white/30'
        }
        px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm
      `}
    >
      <motion.span
        animate={{
          textShadow: [
            "0 0 4px rgba(34, 197, 94, 0.3)",
            "0 0 8px rgba(34, 197, 94, 0.3)",
            "0 0 4px rgba(34, 197, 94, 0.3)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {children}
      </motion.span>
    </Link>
  </motion.div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'Contract', to: '/contract' }
  ];

  return (
    <Disclosure as="nav" className="fixed w-full z-10">
      {({ open }) => (
        <>
          <motion.div 
            className={`transition-all duration-300 ${
              scrolled 
                ? 'bg-white/80 shadow-lg' 
                : 'bg-transparent'
            } backdrop-blur-sm`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 justify-between items-center">
                <motion.div 
                  className="flex items-center"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.7 }}
                >
                  <Link to="/" className="flex items-center space-x-3">
                    <FarmConnectLogo />
                    <motion.div 
                      className="flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.span 
                        className={`text-2xl font-bold tracking-tight ${
                          scrolled ? 'text-green-800' : 'text-green-600'
                        }`}
                      >
                        FarmConnect
                      </motion.span>
                      <span className={`text-xs font-medium ${
                        scrolled ? 'text-green-600' : 'text-green-500'
                      }`}>
                        Growing Together, Digitally
                      </span>
                    </motion.div>
                  </Link>
                  <motion.div 
                    className="hidden md:ml-12 md:flex md:space-x-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.2 * (index + 1),
                          type: "spring",
                          bounce: 0.7
                        }}
                      >
                        <NavItem item={item} scrolled={scrolled} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="hidden md:flex md:items-center md:space-x-4"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ActionButton to="/signin" scrolled={scrolled}>Sign In</ActionButton>
                  <ActionButton to="/getstarted" variant="primary" scrolled={scrolled}>Get Started</ActionButton>
                </motion.div>

                <div className="flex md:hidden">
                  <Disclosure.Button className={`inline-flex items-center justify-center rounded-md p-2 ${
                    scrolled ? 'text-green-800 hover:bg-green-100' : 'text-green-600 hover:bg-white/20'
                  } focus:outline-none`}>
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </motion.div>
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {open && (
              <Disclosure.Panel static className="md:hidden">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`space-y-1 px-4 pb-3 pt-2 ${
                    scrolled ? 'bg-white/80' : 'bg-green-50/80'
                  } backdrop-blur-sm`}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.to}
                        className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                          scrolled 
                            ? 'text-green-800 hover:bg-green-100' 
                            : 'text-green-700 hover:bg-white/20'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div 
                    className="mt-4 space-y-2 border-t border-green-200 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1  }}
                    transition={{ delay: 0.4 }}
                  >
                    <ActionButton to="/signin" scrolled={scrolled}>Sign In</ActionButton>
                    <ActionButton to="/getstarted" variant="primary" scrolled={scrolled}>Get Started</ActionButton>
                  </motion.div>
                </motion.div>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
}