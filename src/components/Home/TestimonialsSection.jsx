import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    author: "Sarah Johnson",
    role: "Organic Farmer",
    text: "This platform has transformed how I sell my produce. The stable pricing and direct buyer connections have increased my profits by 40%.",
    avatar: "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=0HU1oQGXlO4nrrMKKzAK4Jmu6XDLvXhTGjKScvrNIZw=",
    rating: 5,
    location: "California, USA"
  },
  {
    author: "Michael Chen",
    role: "Agricultural Cooperative Leader",
    text: "The transparency and reliability of this marketplace have made it our go-to platform for connecting our 200+ member farmers with quality buyers.",
    avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    location: "Ontario, Canada"
  },
  {
    author: "Maria Garcia",
    role: "Small-Scale Farmer",
    text: "I appreciate how the platform has simplified contract farming. The support team is always there when you need them.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    location: "Madrid, Spain"
  },
  {
    author: "Sarah Johnson",
    role: "Organic Farmer",
    text: "This platform has transformed how I sell my produce. The stable pricing and direct buyer connections have increased my profits by 40%.",
    avatar: "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=0HU1oQGXlO4nrrMKKzAK4Jmu6XDLvXhTGjKScvrNIZw=",
    rating: 5,
    location: "California, USA"
  },
  {
    author: "Michael Chen",
    role: "Agricultural Cooperative Leader",
    text: "The transparency and reliability of this marketplace have made it our go-to platform for connecting our 200+ member farmers with quality buyers.",
    avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    location: "Ontario, Canada"
  },
  {
    author: "Maria Garcia",
    role: "Small-Scale Farmer",
    text: "I appreciate how the platform has simplified contract farming. The support team is always there when you need them.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    location: "Madrid, Spain"
  },
];

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [-2, 2, -2],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
    }}
  >
    {children}
  </motion.div>
);

const StarRating = ({ rating }) => (
  <div className="flex space-x-1">
    {[...Array(rating)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      </motion.div>
    ))}
  </div>
);

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
    <motion.div 
      className="py-24 bg-gradient-to-b from-green-50 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, #22c55e 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <FloatingElement key={i} delay={i * 2}>
            <div 
              className="absolute rounded-full mix-blend-multiply filter blur-xl bg-green-200/30"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          </FloatingElement>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div 
          className="flex items-center justify-center gap-2 mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Quote className="w-6 h-6 text-green-600" />
          <span className="text-green-600 font-medium">Success Stories</span>
          <Quote className="w-6 h-6 text-green-600 transform rotate-180" />
        </motion.div>

        <motion.h2 
          className="text-4xl font-bold text-center text-green-900 mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Trusted by Farmers Worldwide
        </motion.h2>

        <div 
          className="relative h-96"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50, rotateY: -30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -50, rotateY: 30 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              className="absolute inset-0"
            >
              <motion.div 
                className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 h-full"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="mb-6 relative"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-500 relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].author}
                        className="w-full h-full object-cover"
                      />
                      <motion.div 
                        className="absolute inset-0 bg-green-500 mix-blend-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                      />
                    </motion.div>
                    <motion.div 
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-4"
                  >
                    <StarRating rating={testimonials[activeTestimonial].rating} />
                  </motion.div>

                  <motion.p 
                    className="text-xl text-green-700 mb-8 italic relative"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Quote className="absolute -left-2 -top-2 w-6 h-6 text-green-200 transform -rotate-12" />
                    "{testimonials[activeTestimonial].text}"
                    <Quote className="absolute -right-2 -bottom-2 w-6 h-6 text-green-200 transform rotate-180 rotate-12" />
                  </motion.p>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <p className="font-bold text-xl text-green-900">
                      {testimonials[activeTestimonial].author}
                    </p>
                    <p className="text-green-600">{testimonials[activeTestimonial].role}</p>
                    <motion.p 
                      className="text-sm text-green-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {testimonials[activeTestimonial].location}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          className="flex justify-center space-x-2 mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === activeTestimonial ? "bg-green-500 w-8" : "bg-green-200 w-3 hover:bg-green-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialSection;