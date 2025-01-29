import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const aboutRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [statCount, setStatCount] = useState({ farmers: 0, buyers: 0, products: 0 });
  const [showModal, setShowModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Animate stats when in view
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setStatCount({
            farmers: 5000,
            buyers: 2000,
            products: 150
          });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: 'Secure Contracts',
      desc: 'Get guaranteed prices before planting season starts with our blockchain-based smart contracts.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800'
    },
    {
      title: 'Market Access',
      desc: 'Connect directly with verified buyers through our extensive marketplace network.',
      image: 'https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?w=800'
    },
    {
      title: 'Expert Support',
      desc: 'Access agricultural expertise and guidance from certified professionals.',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-green-900 leading-tight animate-fade-in">
                Growing Future,
                <br />
                <span className="text-green-600">Together</span>
              </h1>
              <p className="text-xl text-green-700 max-w-lg animate-slide-up">
                Join our revolutionary platform connecting farmers with market opportunities for a sustainable agricultural future.
              </p>
              <div className="flex gap-6 animate-slide-up">
                <button 
                  onClick={() => setShowModal(true)}
                  className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-500 transform hover:scale-105 transition-all">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transform hover:scale-105 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-full bg-green-100 animate-float">
                <img
                  src="https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg"
                  alt="Farming"
                  className="absolute inset-0 object-cover rounded-3xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{statCount.farmers.toLocaleString()}+</div>
              <div>Active Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{statCount.buyers.toLocaleString()}+</div>
              <div>Verified Buyers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{statCount.products.toLocaleString()}+</div>
              <div>Agricultural Products</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                onClick={() => setSelectedFeature(feature)}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-green-50 hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
                  <p className="text-green-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section with Video */}
      <div ref={aboutRef} className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800"
                  alt="About Us"
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setShowModal(true)}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all"
                  >
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-green-600 ml-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-green-900">Our Mission</h2>
              <p className="text-lg text-green-700">
                We're revolutionizing agricultural commerce by creating direct connections between farmers and buyers, ensuring fair prices and sustainable practices.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">For Farmers</h3>
                  <p className="text-green-600">Access stable contracts and fair prices</p>
                </div>
                <div className="p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">For Buyers</h3>
                  <p className="text-green-600">Source quality produce directly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Get Started</h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">I am a...</option>
                <option value="farmer">Farmer</option>
                <option value="buyer">Buyer</option>
              </select>
              <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors">
                Continue
              </button>
            </div>
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-green-600 hover:text-green-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full mx-4">
            <img 
              src={selectedFeature.image} 
              alt={selectedFeature.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">{selectedFeature.title}</h2>
              <p className="text-green-700 mb-6">{selectedFeature.desc}</p>
              <button 
                onClick={() => setSelectedFeature(null)}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

          {/* Features Grid */}
          <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Secure Contracts', desc: 'Get guaranteed prices before planting season' },
              { title: 'Market Access', desc: 'Connect directly with verified buyers' },
              { title: 'Expert Support', desc: 'Access agricultural expertise and guidance' },
              { title: 'Quality Tracking', desc: 'Monitor and verify produce quality' },
              { title: 'Fair Pricing', desc: 'Transparent and competitive market rates' },
              { title: 'Community', desc: 'Join a network of agricultural professionals' }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-all duration-300">
                <h3 className="text-xl font-semibold text-green-800 mb-4">{feature.title}</h3>
                <p className="text-green-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section with Animation */}
      <div ref={aboutRef} className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="/api/placeholder/800/600"
                  alt="About Us"
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-green-900">Our Mission</h2>
              <p className="text-lg text-green-700">
                We're revolutionizing agricultural commerce by creating direct connections between farmers and buyers, ensuring fair prices and sustainable practices.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">For Farmers</h3>
                  <p className="text-green-600">Access stable contracts and fair prices</p>
                </div>
                <div className="p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">For Buyers</h3>
                  <p className="text-green-600">Source quality produce directly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="py-24 bg-green-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-16">What Our Users Say</h2>
          <div className="relative h-64">
            {[
              {
                text: "FarmConnect transformed my farming business with reliable buyers and secure contracts.",
                author: "John Doe",
                role: "Organic Farmer"
              },
              {
                text: "Sourcing quality produce directly from farmers has never been easier.",
                author: "Jane Smith",
                role: "Restaurant Owner"
              },
              {
                text: "The platform's technical support has helped me improve my farming practices.",
                author: "Michael Johnson",
                role: "Commercial Farmer"
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-500 ${
                  i === activeTestimonial 
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-full'
                }`}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <p className="text-lg text-green-700 mb-6">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold text-green-900">{testimonial.author}</p>
                    <p className="text-green-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Agricultural Business?</h2>
          <p className="text-xl mb-12">Join thousands of satisfied users on FarmConnect</p>
          <button className="px-12 py-4 bg-white text-green-600 rounded-full text-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-green-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">FarmConnect</h3>
              <p className="text-green-200 max-w-md">
                Building a sustainable agricultural future through technology and community.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button className="block text-green-200 hover:text-white transition-colors">Home</button>
                <button className="block text-green-200 hover:text-white transition-colors">About</button>
                <button className="block text-green-200 hover:text-white transition-colors">Services</button>
                <button className="block text-green-200 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-green-200">
                <p>info@farmconnect.com</p>
                <p>(555) 123-4567</p>
                <p>123 Farming Street</p>
                <p>Agritown, AT 12345</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-green-800 text-center text-green-200">
            © 2024 FarmConnect. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .border-l-12 {
          border-left-width: 12px;
        }
      `}</style>
    </div>
  );
}