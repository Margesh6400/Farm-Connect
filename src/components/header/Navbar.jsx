import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const FarmConnectLogo = () => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className="w-12 h-12"
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
    <defs>
      <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#86efac' }}>
          <animate 
            attributeName="stop-color" 
            values="#86efac; #4ade80; #86efac"
            dur="4s" 
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" style={{ stopColor: '#4ade80' }}>
          <animate 
            attributeName="stop-color" 
            values="#4ade80; #22c55e; #4ade80"
            dur="4s" 
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
      
      <radialGradient id="sunGradient">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#facc15" />
      </radialGradient>
    </defs>
    
    {/* Sun */}
    <motion.circle
      cx="75"
      cy="25"
      r="12"
      fill="url(#sunGradient)"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <animate
        attributeName="opacity"
        values="0.8;1;0.8"
        dur="3s"
        repeatCount="indefinite"
      />
    </motion.circle>
    
    {/* Wheat stalks with improved detail */}
    <motion.g
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {/* Center wheat stalk */}
      <motion.path 
        d="M50 65 C50 45 50 35 50 25"
        stroke="#22c55e"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path 
        d="M50 45 L45 35 M50 45 L55 35 M50 35 L45 25 M50 35 L55 25"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      {/* Left wheat */}
      <motion.path 
        d="M35 65 C35 45 40 35 45 30"
        stroke="#22c55e"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path 
        d="M35 55 L30 45 M35 55 L40 45 M35 45 L30 35 M35 45 L40 35"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      {/* Right wheat */}
      <motion.path 
        d="M65 65 C65 45 60 35 55 30"
        stroke="#22c55e"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path 
        d="M65 55 L60 45 M65 55 L70 45 M65 45 L60 35 M65 45 L70 35"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.g>
    
    {/* Rolling hills with smoother animation */}
    <motion.path 
      d="M0 70 Q25 65 50 70 Q75 75 100 70 L100 100 L0 100 Z"
      fill="url(#fieldGradient)"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.8,
        ease: "easeOut"
      }}
    />
    
    {/* Subtle grass details */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.path
          key={i}
          d={`M${10 + i * 12} 75 L${10 + i * 12} 70`}
          stroke="#22c55e"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
        />
      ))}
    </motion.g>
  </motion.svg>
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