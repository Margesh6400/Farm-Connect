import { useRef } from 'react'
import { CheckCircleIcon, ArrowPathIcon, UserGroupIcon, DocumentCheckIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const aboutRef = useRef(null)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-32 sm:py-48">
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-green-900 sm:text-6xl">
                Connecting Farmers with Market Opportunities
              </h1>
              <p className="mt-6 text-lg leading-8 text-green-600">
                Join our platform to access stable farming contracts, reliable buyers, and a supportive agricultural community.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/signup"
                  className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Get started
                </a>
                <button 
                  onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm font-semibold leading-6 text-green-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg"
                alt="Farmer in field"
                className="rounded-lg shadow-xl object-cover h-[400px] w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg"
                alt="Sustainable farming"
                className="rounded-lg shadow-xl object-cover h-[400px] w-full"
              />
            </div>
            <div>
              <h2 className="text-base font-semibold leading-7 text-green-600">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                Empowering Agricultural Communities
              </p>
              <p className="mt-6 text-lg leading-8 text-green-600">
                Our mission is to create a sustainable and profitable farming ecosystem by connecting farmers directly with buyers,
                ensuring fair prices and stable income through secure contract farming arrangements.
              </p>
              <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <dt className="font-semibold text-green-900">Our Mission</dt>
                  <dd className="mt-2 text-green-600">To revolutionize agricultural marketing by providing a transparent and efficient platform.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-green-900">Our Vision</dt>
                  <dd className="mt-2 text-green-600">A world where every farmer has access to fair market opportunities.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-green-900">Our Values</dt>
                  <dd className="mt-2 text-green-600">Transparency, fairness, sustainability, and community empowerment.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* How to Work With Us Section */}
      <div className="bg-green-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">How to Work With Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
              Simple Steps to Get Started
            </p>
            <p className="mt-6 text-lg leading-8 text-green-600">
              Join our platform in just a few easy steps and start growing your agricultural business.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <div className="text-xl font-semibold leading-7 text-green-900">Sign Up</div>
                <div className="mt-2 text-base leading-7 text-green-600">
                  Create your account as a farmer or buyer
                </div>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <div className="text-xl font-semibold leading-7 text-green-900">Complete Profile</div>
                <div className="mt-2 text-base leading-7 text-green-600">
                  Add your details and verify your account
                </div>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <div className="text-xl font-semibold leading-7 text-green-900">Connect</div>
                <div className="mt-2 text-base leading-7 text-green-600">
                  Browse and connect with potential partners
                </div>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <div className="text-xl font-semibold leading-7 text-green-900">Start Trading</div>
                <div className="mt-2 text-base leading-7 text-green-600">
                  Begin secure contract farming arrangements
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Farmers Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">For Farmers</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
              Grow Your Farm Business
            </p>
            <p className="mt-6 text-lg leading-8 text-green-600">
              Join thousands of farmers who have transformed their agricultural business through our platform.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-green-900">
                  <DocumentCheckIcon className="h-5 w-5 text-green-600" />
                  Secure Contracts
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-green-600">
                  <p className="flex-auto">Get guaranteed prices and secure contracts before planting season begins.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-green-900">
                  <ArrowPathIcon className="h-5 w-5 text-green-600" />
                  Market Access
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-green-600">
                  <p className="flex-auto">Connect directly with buyers and access new market opportunities.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-green-900">
                  <UserGroupIcon className="h-5 w-5 text-green-600" />
                  Technical Support
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-green-600">
                  <p className="flex-auto">Get expert advice and support to improve your farming practices.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* For Buyers Section */}
      <div className="bg-green-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">For Buyers</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
              Source Quality Produce Directly
            </p>
            <p className="mt-6 text-lg leading-8 text-green-600">
              Connect with verified farmers and secure your supply chain with confidence.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-green-900">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  Quality Assurance
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-green-600">
                  <p className="flex-auto">Source from verified farmers with quality tracking and certification.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-green-900">
                  <ArrowPathIcon className="h-5 w-5 text-green-600" />
                  Supply Chain Control
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-green-600">
                  <p className="flex-auto">Manage your supply chain with real-time tracking and forecasting.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-green-900">
                  <DocumentCheckIcon className="h-5 w-5 text-green-600" />
                  Competitive Pricing
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-green-600">
                  <p className="flex-auto">Get competitive prices by sourcing directly from farmers.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
              What Our Users Say
            </p>
          </div>
          <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="flex flex-col items-center text-center">
              <img
                className="h-24 w-24 rounded-full object-cover"
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                alt="User 1"
              />
              <p className="mt-6 text-lg leading-8 text-green-600">
                "FarmConnect has transformed my farming business. I now have access to reliable buyers and secure contracts."
              </p>
              <p className="mt-4 text-base font-semibold leading-7 text-green-900">John Doe</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                className="h-24 w-24 rounded-full object-cover"
                src="https://images.pexels.com/photos/1239292/pexels-photo-1239292.jpeg"
                alt="User 2"
              />
              <p className="mt-6 text-lg leading-8 text-green-600">
                "Thanks to FarmConnect, I can now source quality produce directly from farmers at competitive prices."
              </p>
              <p className="mt-4 text-base font-semibold leading-7 text-green-900">Jane Smith</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                className="h-24 w-24 rounded-full object-cover"
                src="https://images.pexels.com/photos/1239293/pexels-photo-1239293.jpeg"
                alt="User 3"
              />
              <p className="mt-6 text-lg leading-8 text-green-600">
                "The technical support and expert advice from FarmConnect have been invaluable for improving my farming practices."
              </p>
              <p className="mt-4 text-base font-semibold leading-7 text-green-900">Michael Johnson</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-white">Ready to Get Started?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join FarmConnect Today
            </p>
            <p className="mt-6 text-lg leading-8 text-green-200">
              Sign up now and start transforming your agricultural business with FarmConnect.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                href="/signup"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a
                href="/signin"
                className="text-sm font-semibold leading-6 text-white"
              >
                Sign in <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-900">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">FarmConnect</h3>
              <p className="text-green-400 max-w-md">
                Connecting farmers and buyers for a sustainable agricultural future. Join our platform to revolutionize farming.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-green-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-green-400 hover:text-white">About Us</a></li>
                <li><a href="/signin" className="text-green-400 hover:text-white">Sign In</a></li>
                <li><a href="/signup" className="text-green-400 hover:text-white">Sign Up</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="text-green-400">Email: info@farmconnect.com</li>
                <li className="text-green-400">Phone: (555) 123-4567</li>
                <li className="text-green-400">Address: 123 Farming Street, Agritown, AT 12345</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-green-800 pt-8">
            <p className="text-center text-green-400">© 2024 FarmConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}w