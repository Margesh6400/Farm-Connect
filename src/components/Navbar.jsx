import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const handleAboutClick = (e) => {
    e.preventDefault()
    const aboutSection = document.querySelector('#about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Disclosure as="nav" className="bg-green-900 shadow fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between items-center">
              <div className="flex items-center">
                <Link 
                  to="/" 
                  className="flex items-center space-x-2"
                >
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-bold">F</span>
                  </div>
                  <span className="text-xl font-bold text-white">
                    FarmConnect
                  </span>
                </Link>
                <div className="hidden md:ml-12 md:flex md:space-x-8">
                  <Link
                    to="/"
                    className="text-white hover:text-green-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-white hover:text-green-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/farmers"
                    className="text-white hover:text-green-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    For Farmers
                  </Link>
                  <Link
                    to="/buyers"
                    className="text-white hover:text-green-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    For Buyers
                  </Link>
                  <Link
                    to="/dashboard"
                    className="text-white hover:text-green-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-4">
                <Link
                  to="/signin"
                  className="text-white hover:text-green-300 px-4 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Get Started
                </Link>
              </div>
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600">
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

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-green-700 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-green-700 rounded-md"
              >
                About Us
              </Link>
              <Link
                to="/farmers"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-green-700 rounded-md"
              >
                For Farmers
              </Link>
              <Link
                to="/buyers"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-green-700 rounded-md"
              >
                For Buyers
              </Link>
              <Link
                to="/dashboard"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-green-700 rounded-md"
              >
                Dashboard
              </Link>
              <div className="mt-4 space-y-2 border-t border-green-800 pt-4">
                <Link
                  to="/signin"
                  className="block w-full px-3 py-2 text-base font-medium text-white hover:bg-green-700 rounded-md"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="block w-full px-3 py-2 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-md text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}