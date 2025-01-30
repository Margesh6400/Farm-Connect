// import { useRef, useState, useEffect } from "react";
// import {
//   ChevronRight,
//   Users,
//   TrendingUp,
//   Sprout,
//   ArrowRight,
//   Leaf,
// } from "lucide-react";

// export default function Home() {
//   const aboutRef = useRef(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [statCount, setStatCount] = useState({
//     farmers: 0,
//     buyers: 0,
//     products: 0,
//   });
//   const [showModal, setShowModal] = useState(false);
//   const [selectedFeature, setSelectedFeature] = useState(null);

//   const stats = [
//     { value: '10K+', label: 'Active Farmers' },
//     { value: '50+', label: 'Market Regions' },
//     { value: '95%', label: 'Success Rate' },
//     { value: '24/7', label: 'Support' }
//   ];

//   // Handle scroll effects
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       // Animate stats when in view
//       const statsSection = document.getElementById("stats-section");
//       if (statsSection) {
//         const rect = statsSection.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom >= 0) {
//           setStatCount({
//             farmers: 5000,
//             buyers: 2000,
//             products: 150,
//           });
//         }
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % 3);
//     }, 5000);
//     return () => clearInterval(interval);

//   }, []);

//   const features = [
//     {
//       title: "Secure Contracts",
//       desc: "Get guaranteed prices before planting season starts with our blockchain-based smart contracts.",
//       image:
//         "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800",
//     },
//     {
//       title: "Market Access",
//       desc: "Connect directly with verified buyers through our extensive marketplace network.",
//       image:
//         "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?w=800",
//     },
//     {
//       title: "Expert Support",
//       desc: "Access agricultural expertise and guidance from certified professionals.",
//       image:
//         "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800",
//     },
//   ];

  
//   const FeatureCard = ({ icon, title, desc }) => (
//     <div className="group p-8 rounded-2xl bg-white border border-green-100 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
//       {/* Decorative background circle */}
//       <div className="absolute -right-8 -top-8 w-24 h-24 bg-green-50 rounded-full transform group-hover:scale-150 transition-transform duration-500 ease-out"></div>
      
//       {/* Icon */}
//       <div className="relative z-10 mb-6">
//         <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
//           {icon}
//         </div>
//       </div>
      
//       {/* Content */}
//       <div className="relative z-10">
//         <h3 className="text-xl font-semibold text-green-800 mb-3 group-hover:text-green-700 transition-colors duration-300">
//           {title}
//         </h3>
//         <p className="text-green-600">{desc}</p>
//       </div>
//     </div>
//   );
  
//   const HeroSection = () => {
//     const stats = [
//       { icon: Users, label: "Active Farmers", value: "2,500+" },
//       { icon: TrendingUp, label: "Successful Trades", value: "10,000+" },
//       { icon: Sprout, label: "Crop Varieties", value: "50+" },
//     ];
//   };


//   const testimonials = [
//     {
//       text: "FarmConnect transformed my farming business with reliable buyers and secure contracts.",
//       author: "John Doe",
//       role: "Organic Farmer",
//       avatar:
//         "https://media.istockphoto.com/id/2166375905/photo/head-shot-portrait-happy-retired-woman-staring-at-camera.jpg?s=2048x2048&w=is&k=20&c=f03GyfsWpHYaCODkLVgZmTjc8b5Idb9cZ3kLe0rKywg=",
//     },
//     {
//       text: "Sourcing quality produce directly from farmers has never been easier.",
//       author: "Jane Smith",
//       role: "Restaurant Owner",
//       avatar:
//         "https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       text: "The platform's technical support has helped me improve my farming practices.",
//       author: "Michael Johnson",
//       role: "Commercial Farmer",
//       avatar:
//         "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
//       {/* Hero Section */}

//       <div className="relative min-h-screen flex items-center">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920')] bg-cover bg-center opacity-20" />
//         <div className="relative max-w-7xl mx-auto px-6 py-32">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="flex-1 max-w-2xl">
//               <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                 Empowering Farmers with
//                 <span className="text-green-600"> Stable Markets</span>
//               </h1>
//               <p className="text-lg text-gray-600 mb-8">
//                 Connect directly with buyers, secure better prices, and grow
//                 your farming business with confidence. Our platform ensures
//                 reliable income through verified contracts and transparent
//                 pricing.
//               </p>
//               {/* CTA Buttons */}

//               <div className="flex gap-6 animate-slide-up">
//                 <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-500 transform hover:scale-105 transition-all">
//                   Register as Farmer
//                   {/* <ChevronRight className="w-4 h-4" /> */}
//                 </button>
//                 <button className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transform hover:scale-105 transition-all">
//                   Register as Buyer
//                   {/* <ChevronRight className="w-4 h-4" /> */}
//                 </button>
//               </div>
//             </div>

//             <div className="relative hidden lg:block">
//               <div className="aspect-square rounded-full  bg-green-100 animate-float">
//                 <img
//                   src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202211/farmers888_4.jpg"
//                   alt="Farming"
//                   className="absolute inset-0 object-cover rounded-3xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="relative py-20 bg-gradient-to-r from-green-600 to-green-700 overflow-hidden">
//         {/* Background pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute -rotate-45 w-96 h-96 bg-white rounded-full -top-48 -left-48" />
//           <div className="absolute -rotate-45 w-96 h-96 bg-white rounded-full -bottom-48 -right-48" />
//         </div>

//         <div className="max-w-7xl mx-auto px-6 relative">
//           <div className="grid md:grid-cols-3 gap-12 text-white">
//             {/* Farmers Stats */}
//             <div className="transform hover:scale-105 transition-transform duration-300">
//               <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20 hover:bg-white/20">
//                 <div className="flex justify-center mb-4">
//                   <svg
//                     className="w-12 h-12"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5.121 17.804A3.001 3.001 0 015 15V9a3 3 0 013-3h8a3 3 0 013 3v6a3 3 0 01-.121.804M5 15h14M5 15a3 3 0 01-3-3V9a3 3 0 013-3h14a3 3 0 013 3v3a3 3 0 01-3 3M5 15v2a3 3 0 003 3h8a3 3 0 003-3v-2"
//                     ></path>
//                   </svg>
//                 </div>
//                 <div className="text-5xl font-bold mb-3">64312+</div>
//                 <div className="text-lg font-medium">Active Farmers</div>
//                 <div className="mt-2 text-sm text-white/80">
//                   Connected and growing together
//                 </div>
//               </div>
//             </div>

      //       {/* Buyers Stats */}
      //       <div className="transform hover:scale-105 transition-transform duration-300">
      //         <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20 hover:bg-white/20">
      //           <div className="flex justify-center mb-4">
      //             <svg
      //               className="w-12 h-12"
      //               fill="none"
      //               stroke="currentColor"
      //               viewBox="0 0 24 24"
      //               xmlns="http://www.w3.org/2000/svg"
      //             >
      //               <path
      //                 strokeLinecap="round"
      //                 strokeLinejoin="round"
      //                 strokeWidth="2"
      //                 d="M3 3h18M3 3v18M3 3l18 18"
      //               ></path>
      //             </svg>
      //           </div>
      //           <div className="text-5xl font-bold mb-3">3400+</div>
      //           <div className="text-lg font-medium">Verified Buyers</div>
      //           <div className="mt-2 text-sm text-white/80">
      //             Trusted marketplace partners
      //           </div>
      //         </div>
      //       </div>

      //       {/* Products Stats */}
      //       <div className="transform hover:scale-105 transition-transform duration-300">
      //         <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20 hover:bg-white/20">
      //           <div className="flex justify-center mb-4">
      //             <svg
      //               className="w-12 h-12"
      //               fill="none"
      //               stroke="currentColor"
      //               viewBox="0 0 24 24"
      //               xmlns="http://www.w3.org/2000/svg"
      //             >
      //               <path
      //                 strokeLinecap="round"
      //                 strokeLinejoin="round"
      //                 strokeWidth="2"
      //                 d="M3 3h18M3 3v18M3 3l18 18"
      //               ></path>
      //             </svg>
      //           </div>
      //           <div className="text-5xl font-bold mb-3">247+</div>
      //           <div className="text-lg font-medium">Agricultural Products</div>
      //           <div className="mt-2 text-sm text-white/80">
      //             Fresh from farm to table
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

//       {/* Features Grid */}
//       <div className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-3 gap-8">
//             {features.map((feature, i) => (
//               <div
//                 key={i}
//                 onClick={() => setSelectedFeature(feature)}
//                 className="group cursor-pointer overflow-hidden rounded-2xl bg-green-50 hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={feature.image}
//                     alt={feature.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-green-800 mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-green-600">{feature.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* About Section with Video */}
//       <div
//         ref={aboutRef}
//         className="py-24 bg-gradient-to-b from-green-50 to-white"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="aspect-video rounded-2xl overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800"
//                   alt="About Us"
//                   className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <button
//                     onClick={() => setShowModal(true)}
//                     className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all"
//                   >
//                     <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-green-600 ml-1" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="space-y-8">
//               <h2 className="text-4xl font-bold text-green-900">Our Mission</h2>
//               <p className="text-lg text-green-700">
//                 We're revolutionizing agricultural commerce by creating direct
//                 connections between farmers and buyers, ensuring fair prices and
//                 sustainable practices.
//               </p>
//               <div className="grid sm:grid-cols-2 gap-8">
//                 <div className="p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow">
//                   <h3 className="text-xl font-semibold text-green-800 mb-2">
//                     For Farmers
//                   </h3>
//                   <p className="text-green-600">
//                     Access stable contracts and fair prices
//                   </p>
//                 </div>
//                 <div className="p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow">
//                   <h3 className="text-xl font-semibold text-green-800 mb-2">
//                     For Buyers
//                   </h3>
//                   <p className="text-green-600">
//                     Source quality produce directly
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
//             <h2 className="text-2xl font-bold text-green-900 mb-4">
//               Get Started
//             </h2>
//             <div className="space-y-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               <select className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
//                 <option value="">I am a...</option>
//                 <option value="farmer">Farmer</option>
//                 <option value="buyer">Buyer</option>
//               </select>
//               <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors">
//                 Continue
//               </button>
//             </div>
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4 text-green-600 hover:text-green-500"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Feature Detail Modal */}
//       {selectedFeature && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full mx-4">
//             <img
//               src={selectedFeature.image}
//               alt={selectedFeature.title}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-8">
//               <h2 className="text-2xl font-bold text-green-900 mb-4">
//                 {selectedFeature.title}
//               </h2>
//               <p className="text-green-700 mb-6">{selectedFeature.desc}</p>
//               <button
//                 onClick={() => setSelectedFeature(null)}
//                 className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Features Grid */}
//       <div className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Secure Contracts",
//                 desc: "Get guaranteed prices before planting season",
//               },
//               {
//                 title: "Market Access",
//                 desc: "Connect directly with verified buyers",
//               },
//               {
//                 title: "Expert Support",
//                 desc: "Access agricultural expertise and guidance",
//               },
//               {
//                 title: "Quality Tracking",
//                 desc: "Monitor and verify produce quality",
//               },
//               {
//                 title: "Fair Pricing",
//                 desc: "Transparent and competitive market rates",
//               },
//               {
//                 title: "Community",
//                 desc: "Join a network of agricultural professionals",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="group p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-all duration-300"
//               >
//                 <h3 className="text-xl font-semibold text-green-800 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-green-600">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Our Mission */}

//       <div className="py-24 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-green-100/50 rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/30 rounded-full"></div>

//       <div className="max-w-7xl mx-auto px-6 relative">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Image Section */}
//           <div className="relative">
//             <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
//               <img
//                 src="https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=2048x2048&w=is&k=20&c=lcoNeXKU0MG1mCpSm8mKltDffVvsCRaZKT5ovO24VSQ="
//                 alt="About Us"
//                 className="object-cover w-full h-full transform hover:scale-110 transition-all duration-700 ease-in-out"
//               />
//               {/* Overlays that appear on hover */}
//               <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
//               {/* Info Cards */}
//               <div className="absolute top-4 left-4 bg-white/90 rounded-lg p-3 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
//                 <p className="text-green-800 font-semibold">Sustainable Farming</p>
//               </div>
//               <div className="absolute bottom-4 right-4 bg-white/90 rounded-lg p-3 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
//                 <p className="text-green-800 font-semibold">Direct Trade</p>
//               </div>
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-4xl font-bold text-green-900 relative">
//                 Our Mission
//                 <span className="absolute -left-6 top-0 text-5xl text-green-200">″</span>
//               </h2>
//               <p className="text-lg text-green-700 leading-relaxed">
//                 We're revolutionizing agricultural commerce by creating direct
//                 connections between farmers and buyers, ensuring fair prices and
//                 sustainable practices. Our platform empowers farming communities while
//                 delivering quality produce to conscious consumers.
//               </p>
//             </div>

//             {/* Feature Cards */}
//             <div className="grid sm:grid-cols-2 gap-8">
//               <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-green-100">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-semibold text-green-800 ml-4">For Farmers</h3>
//                 </div>
//                 <p className="text-green-600">Access stable contracts and fair prices with direct market connections.</p>
//               </div>

//               <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-green-100">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3z"></path>
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-semibold text-green-800 ml-4">For Buyers</h3>
//                 </div>
//                 <p className="text-green-600">Source premium quality produce directly from verified farmers.</p>
//               </div>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
//               {stats.map((stat, index) => (
//                 <div 
//                   key={index}
//                   className="text-center p-4 rounded-lg bg-green-50 hover:bg-green-100 transform hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <div className="text-2xl font-bold text-green-800">{stat.value}</div>
//                   <div className="text-sm text-green-600">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//       <div className="relative overflow-hidden">


//         {/* testimonials  */}

//         {/* Main content */}
//         <div className="py-24 bg-gradient-to-b from-green-50 to-white relative">
//           <div className="max-w-4xl mx-auto px-6">
//             <h2 className="text-4xl font-bold text-center text-green-900 mb-16">
//               What Our Users Say
//             </h2>

//             {/* Testimonials container */}
//             <div className="relative h-96">

//               {testimonials.map((testimonial, i) => (
//                 <div
//                   key={i}
//                   className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                     i === activeTestimonial
//                       ? "opacity-100 transform translate-x-0 scale-100"
//                       : "opacity-0 transform translate-x-full scale-95"
//                   }`}
//                 >
//                   <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 h-full">
//                     <div className="flex flex-col items-center text-center">
//                       <div className="mb-6 relative">
//                         <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-500">
//                           <img
//                             src={testimonial.avatar}
//                             alt={testimonial.author}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
//                           <span className="text-white text-xl">✓</span>
//                         </div>
//                       </div>

//                       <p className="text-xl text-green-700 mb-8 italic">
//                         "{testimonial.text}"
//                       </p>

//                       <div>
//                         <p className="font-bold text-xl text-green-900 mb-1">
//                           {testimonial.author}
//                         </p>
//                         <p className="text-green-600">{testimonial.role}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Navigation dots */}
//             <div className="flex justify-center space-x-2 mt-8">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActiveTestimonial(i)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     i === activeTestimonial
//                       ? "bg-green-500 w-6"
//                       : "bg-green-200 hover:bg-green-300"
//                   }`}
//                   aria-label={`Go to testimonial ${i + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-gradient-to-r from-green-600 to-green-700">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
//           {/* Main CTA Content */}
//           <div className="lg:flex lg:items-center lg:justify-between">
//             <div className="max-w-xl">
//               <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 <span className="block">Ready to transform your farming?</span>
//                 <span className="block text-green-200 mt-2">
//                   Join thousands of successful farmers on FarmConnect
//                 </span>
//               </h2>
//             </div>
//             {/* CTA Buttons */}
//             <div className="mt-8 lg:mt-0 lg:ml-8 flex flex-col sm:flex-row gap-4">
//               <button
//                 onClick={() => setShowModal(true)}
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl"
//               >
//                 Get Started
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* footer */}
//       <footer className="bg-gray-900">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
//           {/* Logo and Description Section */}
//           <div className="mb-12 text-center">
//             <h2 className="text-green-500 text-3xl font-bold mb-4">
//               FarmConnect
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Connecting farmers, suppliers, and consumers to build a
//               sustainable agricultural ecosystem. Empowering rural communities
//               since 2020 through technology and innovation.
//             </p>
//           </div>

//           {/* Main Links Grid */}
//           <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
//             <div>
//               <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Our Mission
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Contact
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Press Kit
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-white text-lg font-semibold mb-4">
//                 Services
//               </h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     For Farmers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     For Suppliers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     For Consumers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Market Analysis
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Training Programs
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-white text-lg font-semibold mb-4">
//                 Resources
//               </h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Farming Guidelines
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Knowledge Base
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Success Stories
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     FAQ
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Terms of Service
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Security
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Compliance
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-green-500 transition-colors"
//                   >
//                     Data Protection
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div className="col-span-2 md:col-span-4 lg:col-span-1">
//               <h3 className="text-white text-lg font-semibold mb-4">
//                 Newsletter
//               </h3>
//               <p className="text-gray-400 mb-4">
//                 Stay updated with the latest agricultural insights and
//                 FarmConnect news.
//               </p>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
//                 />
//                 <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="mt-12 border-t border-gray-800 pt-8">
//             <div className="flex justify-center space-x-6 mb-8">
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-green-500 transition-colors"
//               >
//                 <span className="sr-only">Twitter</span>
//                 <svg
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-green-500 transition-colors"
//               >
//                 <span className="sr-only">LinkedIn</span>
//                 <svg
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-green-500 transition-colors"
//               >
//                 <span className="sr-only">Facebook</span>
//                 <svg
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//             </div>

//             {/* Copyright and Address */}
//             <div className="text-center">
//               <p className="text-gray-400 mb-2">
//                 © 2025 FarmConnect. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-sm">
//                 123 Agricultural Drive, Innovation Valley, CA 94025 | Phone:
//                 (555) 123-4567
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes slide-up {
//           from {
//             transform: translateY(20px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes float {
//           0% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//           100% {
//             transform: translateY(0px);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }

//         .animate-slide-up {
//           animation: slide-up 1s ease-out;
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .border-l-12 {
//           border-left-width: 12px;
//         }
//       `}</style>
//     </div>
//   );
// }

import { motion } from 'framer-motion';
import React from 'react';
import FeaturesAboutSection from '../components/Home/FeaturesAboutSection';
import AboutSection from '../components/Home/AboutSection';

// Background decoration component
const BackgroundDecoration = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-white/80 to-white/90" />
    
    {/* Animated circles */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full mix-blend-multiply filter blur-xl"
        initial={{ opacity: 0.7 }}
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: i * 2,
          ease: "easeInOut",
        }}
        style={{
          width: `${Math.random() * 300 + 200}px`,
          height: `${Math.random() * 300 + 200}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          backgroundColor: [
            'rgba(167, 243, 208, 0.4)',
            'rgba(134, 239, 172, 0.4)',
            'rgba(187, 247, 208, 0.4)',
          ][Math.floor(Math.random() * 3)],
        }}
      />
    ))}
    
    {/* Decorative patterns */}
    <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 0L40 40M40 0L0 40" stroke="currentColor" strokeWidth="1" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  </div>
);

const FloatingImage = ({ src, alt, className }) => (
  <motion.div
    className={`relative ${className}`}
    animate={{ 
      y: [0, -20, 0],
      rotate: [-2, 2, -2]
    }}
    transition={{ 
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <motion.div
      className="absolute inset-0 bg-green-100 rounded-3xl transform rotate-6"
      animate={{
        rotate: [6, -6, 6],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.img
      src={src}
      alt={alt}
      className="relative rounded-3xl object-cover w-full h-full shadow-xl"
      whileHover={{ 
        scale: 1.05,
        rotate: 0,
        transition: { duration: 0.3 }
      }}
    />
  </motion.div>
);

const StatsCard = ({ icon, number, title, description }) => (
  <motion.div
    className="transform transition-all duration-300"
    whileHover={{ scale: 1.05, y: -5 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <motion.div 
      className="bg-white/10 rounded-lg p-8 backdrop-blur-sm border border-white/20"
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <motion.div 
        className="flex justify-center mb-4"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {icon}
      </motion.div>
      <motion.div 
        className="text-5xl font-bold mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {number}
      </motion.div>
      <div className="text-lg font-medium">{title}</div>
      <div className="mt-2 text-sm text-white/80">{description}</div>
    </motion.div>
  </motion.div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.div 
        className="relative min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Elements */}
        <BackgroundDecoration />
        
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="flex-1 max-w-2xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Decorative line */}
              <motion.div
                className="w-20 h-2 bg-green-500 rounded-full mb-8"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Empowering Farmers with
                <motion.span 
                  className="block text-green-600 mt-2"
                  animate={{
                    color: ['#16a34a', '#22c55e', '#16a34a'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >Stable Markets</motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Connect directly with buyers, secure better prices, and grow your farming business with confidence. 
                Our platform ensures reliable income through verified contracts and transparent pricing.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <motion.button
                  className="group relative px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-500 transition-all overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-white"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ borderRadius: '9999px' }}
                  />
                  <span className="relative group-hover:text-green-600">Register as Farmer</span>
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register as Buyer
                </motion.button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="mt-12 flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-green-600">★★★★★</div>
                  <div className="text-sm text-gray-600">Trusted by 10,000+ farmers</div>
                </div>
                <div className="h-6 w-px bg-gray-300" />
                <div className="text-sm text-gray-600">ISO Certified</div>
              </motion.div>
            </motion.div>

            <div className="relative hidden lg:block">
              <FloatingImage
                src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202211/farmers888_4.jpg"
                alt="Farming"
                className="aspect-square"
              />
              
              {/* Floating achievement cards */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-green-600 font-bold">200K+</div>
                <div className="text-sm text-gray-600">Successful Trades</div>
              </motion.div>
              
              <motion.div
                className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-xl"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-green-600 font-bold">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

            {/* Stats Section */}
            <motion.div 
        className="relative py-20 bg-gradient-to-r from-green-600 to-green-700 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -left-48" />
          <div className="absolute w-96 h-96 bg-white rounded-full -bottom-48 -right-48" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-3 gap-12 text-white">
            {[
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>,
                number: "64,312+",
                title: "Active Farmers",
                description: "Connected and growing together"
              },
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 3v18M3 3l18 18"></path></svg>,
                number: "3,400+",
                title: "Verified Buyers",
                description: "Trusted marketplace partners"
              },
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>,
                number: "247+",
                title: "Agricultural Products",
                description: "Fresh from farm to table"
              }
            ].map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </motion.div>
      <FeaturesAboutSection/>
      <AboutSection/>
    </div>
  );
}