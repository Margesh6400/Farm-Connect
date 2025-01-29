import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const FarmConnectLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10">
    <defs>
      <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#059669' }} />
        <stop offset="100%" style={{ stopColor: '#34d399' }} />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#leafGradient)" />
    <path d="M30 60 Q50 20 70 60" stroke="white" strokeWidth="6" fill="none" />
    <path d="M50 60 Q50 40 60 30" stroke="white" strokeWidth="4" fill="none" />
    <path d="M50 60 Q50 40 40 30" stroke="white" strokeWidth="4" fill="none" />
  </svg>
);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const handleAboutClick = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-green-900 to-green-800 shadow-lg fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between items-center">
              <div className="flex items-center">
                <Link 
                  to="/" 
                  className="flex items-center space-x-3 group"
                >
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    <FarmConnectLogo />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white tracking-tight">
                      FarmConnect
                    </span>
                    <span className="text-xs text-green-300 font-medium">
                      Connecting Farms to Future
                    </span>
                  </div>
                </Link>
                <div className="hidden md:ml-12 md:flex md:space-x-1">
                  {[
                    { name: 'Home', to: '/' },
                    { name: 'About Us', to: '/about' },
                    { name: 'Dashboard', to: '/dashboard' },
                    { name: 'Contract', to: '/contract' }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="text-white relative px-3 py-2 text-sm font-medium group"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-4">
                <Link
                  to="/signin"
                  className="text-white hover:text-green-300 px-4 py-2 text-sm font-medium transition-all duration-300 border border-transparent hover:border-green-300 rounded-lg"
                >
                  Sign In
                </Link>
                <Link
                  to="/getstarted"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:from-green-600 hover:to-green-700 transform hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
              </div>
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="md:hidden bg-green-800 bg-opacity-95 backdrop-blur-sm">
              <div className="space-y-1 px-4 pb-3 pt-2">
                {[
                  { name: 'Home', to: '/' },
                  { name: 'About Us', to: '/about' },
                  { name: 'Dashboard', to: '/dashboard' },
                  { name: 'Contract', to: '/contract' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="block px-3 py-2 text-base font-medium text-white hover:bg-green-700 rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 space-y-2 border-t border-green-700 pt-4">
                  <Link
                    to="/signin"
                    className="block w-full px-3 py-2 text-base font-medium text-white hover:bg-green-700 rounded-md transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/getstarted"
                    className="block w-full px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-md text-center transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
